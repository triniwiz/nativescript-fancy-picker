import {
    FancyAudioPickerOptions,
    FancyFilePickerItemBase,
    FancyFilePickerOptions,
    FancyFilePickerResponse,
    FancyPhotoVideoPickerOptions,
    FancyPickerBase,
    FancyPickerItemBase,
    FancyPickerItemType,
    FancyPickerResponse,
    randomId
} from './fancy-picker.common';
import { Frame, ShownModallyData, topmost } from 'tns-core-modules/ui/frame';
import * as trace from 'tns-core-modules/trace';
import * as imageSource from 'tns-core-modules/image-source';
import * as fs from 'tns-core-modules/file-system';

require('./async-await');
let requestPhotosPermissions = function () {
    return new Promise(function (resolve, reject) {
        let authStatus = PHPhotoLibrary.authorizationStatus();
        switch (authStatus) {
            case PHAuthorizationStatus.NotDetermined: {
                PHPhotoLibrary.requestAuthorization(auth => {
                    if (auth === PHAuthorizationStatus.Authorized) {
                        if (trace.isEnabled()) {
                            trace.write(
                                'Application can access photo library assets.',
                                trace.categories.Debug
                            );
                        }
                        resolve();
                    } else {
                        reject('Application can not access photo library assets.');
                    }
                });
                break;
            }
            case PHAuthorizationStatus.Authorized: {
                if (trace.isEnabled()) {
                    trace.write(
                        'Application can access photo library assets.',
                        trace.categories.Debug
                    );
                }
                resolve();
                break;
            }
            case PHAuthorizationStatus.Restricted:
            case PHAuthorizationStatus.Denied: {
                if (trace.isEnabled()) {
                    trace.write(
                        'Application can not access photo library assets.',
                        trace.categories.Debug
                    );
                }
                reject('Application can not access photo library assets.');
                break;
            }
        }
    });
};

let requestMusicPermissions = function () {
    return new Promise(function (resolve, reject) {
        let authStatus = MPMediaLibrary.authorizationStatus();
        switch (authStatus) {
            case MPMediaLibraryAuthorizationStatus.NotDetermined: {
                MPMediaLibrary.requestAuthorization(auth => {
                    if (auth === MPMediaLibraryAuthorizationStatus.Authorized) {
                        if (trace.isEnabled()) {
                            trace.write(
                                'Application can access music library assets.',
                                trace.categories.Debug
                            );
                        }
                        resolve();
                    } else {
                        reject('Application can not access music library assets.');
                    }
                });
                break;
            }
            case MPMediaLibraryAuthorizationStatus.Authorized: {
                if (trace.isEnabled()) {
                    trace.write(
                        'Application can access music library assets.',
                        trace.categories.Debug
                    );
                }
                resolve();
                break;
            }
            case MPMediaLibraryAuthorizationStatus.Restricted:
            case MPMediaLibraryAuthorizationStatus.Denied: {
                if (trace.isEnabled()) {
                    trace.write(
                        'Application can not access music library assets.',
                        trace.categories.Debug
                    );
                }
                reject('Application can not access music library assets.');
                break;
            }
        }
    });
};

let requestCameraPermissions = function () {
    return new Promise(function (resolve, reject) {
        let cameraStatus = AVCaptureDevice.authorizationStatusForMediaType(
            AVMediaTypeVideo
        );
        switch (cameraStatus) {
            case AVAuthorizationStatus.NotDetermined: {
                AVCaptureDevice.requestAccessForMediaTypeCompletionHandler(
                    AVMediaTypeVideo,
                    granted => {
                        if (granted) {
                            resolve();
                        } else {
                            reject('Application can not access Camera assets.');
                        }
                    }
                );
                break;
            }
            case AVAuthorizationStatus.Authorized: {
                resolve();
                break;
            }
            case AVAuthorizationStatus.Restricted:
            case AVAuthorizationStatus.Denied: {
                if (trace.isEnabled()) {
                    trace.write(
                        'Application can not access Camera assets.',
                        trace.categories.Debug
                    );
                }
                reject('Application can not access Camera assets.');
                break;
            }
        }
    });
};

export class FancyFilePickerItem implements FancyFilePickerItemBase {
    constructor(public file: string, public ios?: any, public android?: any) {
    }
}

export class FancyPickerItem implements FancyPickerItemBase {
    constructor(
        public type: FancyPickerItemType,
        public file: any,
        public ios?: any,
        public android?: any
    ) {
    }

    save(path?: string): Promise<string> {
        const tempPath = fs.knownFolders.temp().path;
        return new Promise((resolve, reject) => {
            if (this.type === 'image') {
                const tempFile = fs.path.join(tempPath, `${randomId()}.jpg`);
                const saved = (this.file as imageSource.ImageSource).saveToFile(
                    tempFile,
                    'jpeg'
                );
                if (saved) {
                    resolve(tempFile);
                } else {
                    reject('Failed to save');
                }
            } else if (this.type === 'video') {
                resolve(this.file);
            } else if (this.type === 'audio') {
                const audio = this.ios as MPMediaItem;
                let assetURL: NSURL = audio.valueForProperty(
                    MPMediaItemPropertyAssetURL
                );
                let songAsset: AVURLAsset = AVURLAsset.URLAssetWithURLOptions(
                    assetURL,
                    null
                );
                let exporter: AVAssetExportSession = AVAssetExportSession.alloc().initWithAssetPresetName(
                    songAsset,
                    AVAssetExportPresetAppleM4A
                );
                exporter.outputFileType = 'com.apple.m4a-audio';

                const tempFile = fs.path.join(tempPath, randomId() + '.m4a');

                exporter.outputURL = NSURL.fileURLWithPath(tempFile);

                exporter.exportAsynchronouslyWithCompletionHandler(function () {
                    let exportStatus = exporter.status,
                        exportError;

                    switch (exportStatus) {
                        case AVAssetExportSessionStatus.Failed:
                            reject(exporter.error);
                            break;
                        case AVAssetExportSessionStatus.Completed:
                            resolve(tempFile);
                            break;
                        default:
                            reject(exporter.error);
                            break;
                    }
                });
            }
        });
    }
}

export class FancyPicker extends FancyPickerBase {
    public static showPhotoVideoPicker(
        options: FancyPhotoVideoPickerOptions = {
            image: true,
            video: true,
            allowCapture: false,
            maxCount: 1
        }
    ): Promise<FancyPickerResponse> {
        return new Promise(async (resolve, reject) => {
            try {
                if (options.allowCapture) {
                    await requestCameraPermissions();
                }
                await requestPhotosPermissions();
                const frame = new Frame();
                frame.on('shownModally', (args: ShownModallyData) => {
                    let module = 'tns_modules/nativescript-fancy-picker/modals/video-image-camera/video-image-camera';

                    if (!options.allowCapture) {
                        module = 'tns_modules/nativescript-fancy-picker/modals/video-image/detail/detail';
                    }
                    frame.navigate({
                        moduleName: module,
                        context: args.context // context to pass from showModal
                    });
                });

                topmost().currentPage.showModal(
                    frame, {
                        image: options.image,
                        video: options.video,
                        maxCount: options.maxCount
                    },
                    function (data) {
                        const results: any = [];
                        data.forEach(item => {
                            const newItem = new FancyPickerItem(item.type, item.file, item.ios, undefined);
                            results.push(newItem);
                        });
                        resolve(results);
                    },
                    true,
                    true
                );
            } catch (e) {
                reject(e);
            }
        });
    }

    public static showAudioPicker(
        options: FancyAudioPickerOptions = {maxCount: 1}
    ): Promise<FancyPickerResponse> {
        return new Promise(async (resolve, reject) => {
            try {
                await requestMusicPermissions();

                /*
                const mediaTypes = [PHAssetMediaTypeAudio];
                const sourceType = IQMediaPickerControllerSourceType.Library;

                const picker = IQMediaPickerController.alloc().init();
                picker.sourceType = sourceType;
                picker.mediaTypes = mediaTypes as any;
                const delegate = IQMediaPickerControllerDelegateImpl.initWithResolveRejectTypes(
                    resolve,
                    reject,
                    {
                        audio: true
                    }
                );

                picker.delegate = delegate;
                picker.maximumItemCount = options.maxCount;
                if (options.maxCount > 1) {
                    picker.allowsPickingMultipleItems = true;
                }
                const topmost = frame.topmost();
                if (topmost.currentPage && topmost.ios.controller) {
                    topmost.ios.controller.presentViewControllerAnimatedCompletion(
                        picker,
                        true,
                        null
                    );
                }

                */
            } catch (e) {
                reject(e);
            }
        });
    }

    public static showFilePicker(
        options: FancyFilePickerOptions = {maxCount: 1}
    ): Promise<FancyFilePickerResponse> {
        return new Promise((resolve, reject) => {
            /*
            let types = [] as any;
            if (!options.types || options.types.length === 0) {
                types = ['public.content', 'public.data'];
            } else {
                options.types.forEach(item => {
                    switch (item) {
                        case 'audio':
                            types.push(kUTTypeAudio);
                            break;
                        case 'doc':
                            types.push('com.microsoft.word.doc');
                            break;
                        case 'image':
                            types.push(kUTTypePDF);
                            break;
                        case 'pdf':
                            types.push(kUTTypeImage);
                            break;
                        case 'presentation':
                        case 'ppt':
                            types.push('public.presentation');
                            break;
                        case 'text':
                            types.push(kUTTypeText);
                            break;
                        case 'video':
                            types.push(kUTTypeMovie);
                            break;
                        case 'spreadsheet':
                            types.push(kUTTypeSpreadsheet);
                            break;
                        case 'xls':
                            types.push('com.microsoft.excel.xls');
                            break;
                    }
                });
            }
            const picker = UIDocumentPickerViewController.alloc().initWithDocumentTypesInMode(
                NSArray.arrayWithArray(types),
                UIDocumentPickerMode.Import
            );

            if (options.maxCount > 0) {
                picker.allowsMultipleSelection = true;
            }
            const delegate = UIDocumentPickerDelegateImpl.initWithResolveReject(
                resolve,
                reject
            );
            picker.delegate = delegate;
            const topmost = frame.topmost();
            if (topmost.currentPage && topmost.ios.controller) {
                topmost.ios.controller.presentViewControllerAnimatedCompletion(
                    picker,
                    true,
                    null
                );
            }

            */
        });
    }
}

/*

class UIDocumentPickerDelegateImpl extends NSObject
    implements UIDocumentPickerDelegate {
    _resolve;
    _reject;

    public static initWithResolveReject(resolve, reject) {
        const delegate = new UIDocumentPickerDelegateImpl();
        delegate._resolve = resolve;
        delegate._reject = reject;
        return delegate;
    }

    documentPickerDidPickDocumentAtURL(
        controller: UIDocumentPickerViewController,
        url: NSURL
    ): void {
        const items = [];
        items.push(new FancyFilePickerItem(url.absoluteString, url, null));
        this._resolve(items);
        controller.dismissViewControllerAnimatedCompletion(true, null);
    }

    documentPickerDidPickDocumentsAtURLs(
        controller: UIDocumentPickerViewController,
        urls: NSArray<NSURL>
    ): void {
        const items = [];
        const count = urls.count;
        for (let i = 0; i > count; i++) {
            const item = urls[i];
            items.push(new FancyFilePickerItem(item.absoluteString, item, null));
        }
        this._resolve(items);
        controller.dismissViewControllerAnimatedCompletion(true, null);
    }

    documentPickerWasCancelled(controller: UIDocumentPickerViewController): void {
        this._reject('cancelled');
        controller.dismissViewControllerAnimatedCompletion(true, null);
    }

    public static ObjCProtocols = [UIDocumentPickerDelegate];
}

interface PickerTypes {
    audio?: boolean;
    image?: boolean;
    video?: boolean;
}

class IQMediaPickerControllerDelegateImpl extends NSObject
    implements IQMediaPickerControllerDelegate {
    _resolve;
    _reject;
    _types: PickerTypes = {
        audio: false,
        video: false,
        image: false
    };

    public static initWithResolveRejectTypes(
        resolve,
        reject,
        types: PickerTypes = {audio: false, video: false, image: false}
    ) {
        const delegate = new IQMediaPickerControllerDelegateImpl();
        delegate._resolve = resolve;
        delegate._reject = reject;
        delegate._types = types;
        return delegate;
    }

    mediaPickerControllerDidCancel(controller: IQMediaPickerController): void {
        this._reject('cancelled');
        controller.dismissViewControllerAnimatedCompletion(true, null);
    }

    async createAudios(audios) {
        const items = [];
        const count = audios.count;
        for (let i = 0; i < count; i++) {
            const item = audios[i];
            const result = new FancyPickerItem(
                'audio',
                item.assetURL ? item.assetURL.absoluteString : '',
                item,
                null
            );
            items.push(result);
        }
        return items;
    }

    async createImages(images) {
        const items = [];
        const count = images.count;
        for (let i = 0; i < count; i++) {
            const item = images.selectedImages[i];
            const result = new FancyPickerItem(
                'image',
                imageSource.fromNativeSource(item),
                item,
                null
            );
            items.push(result);
        }
        return items;
    }

    async createAssets(assets) {
        const items = [];
        const count = assets.count;
        for (let i = 0; i < count; i++) {
            const item = assets[i];
            let type;
            switch (item.mediaType) {
                case PHAssetMediaType.Audio:
                    type = 'audio';
                    break;
                case PHAssetMediaType.Image:
                    type = 'image';
                    break;
                case PHAssetMediaType.Video:
                    type = 'video';
                    break;
            }

            const manager = utils.ios.getter(
                PHImageManager,
                PHImageManager.defaultManager
            );

            if (type === 'image') {
                const request = PHImageRequestOptions.alloc().init();
                request.synchronous = true;
                manager.requestImageDataForAssetOptionsResultHandler(
                    item,
                    request,
                    (data, uti_type, orientation, info) => {
                        const url = info.objectForKey('PHImageFileURLKey');
                        if (url) {
                            const result = new FancyPickerItem(
                                type,
                                imageSource.fromFile(url.absoluteString.replace('file://', '')),
                                item,
                                null
                            );
                            items.push(result);
                        }
                    }
                );
            }
            if (type === 'video') {
                const request = PHVideoRequestOptions.alloc().init();
                request.deliveryMode = PHVideoRequestOptionsDeliveryMode.Automatic;
                manager.requestAVAssetForVideoOptionsResultHandler(
                    item,
                    request,
                    (asset: any, audio_mix, info) => {
                        if (asset && asset.URL) {
                            const result = new FancyPickerItem(
                                type,
                                asset.URL.absoluteString,
                                item,
                                null
                            );
                            items.push(result);
                        }
                    }
                );
            }
        }
        return items;
    }

    async createAssetUrls(assetUrls) {
        const items = [];
        const count = assetUrls.count;
        for (let i = 0; i < count; i++) {
            const item = assetUrls[i];
            const result = new FancyPickerItem(
                'video',
                item.absoluteString,
                item,
                null
            );
            items.push(result);
        }
        return items;
    }

    async createResults(selection: IQMediaPickerSelection) {
        try {
            const audios = await this.createAudios(selection.selectedAudios);
            const assets = await this.createAssets(selection.selectedAssets);
            const urls = await this.createAssetUrls(selection.selectedAssetsURL);
            const images = await this.createImages(selection.selectedImages);
            return [...audios, ...images, ...assets, ...urls];
        } catch (e) {
            return [];
        }
    }

    mediaPickerControllerDidFinishMedias(
        controller: IQMediaPickerController,
        selection: IQMediaPickerSelection
    ): void {
        this.createResults(selection)
            .then(results => {
                this._resolve(<FancyPickerResponse>{
                    files: results
                });
                controller.dismissViewControllerAnimatedCompletion(true, null);
            })
            .catch(e => {
                controller.dismissViewControllerAnimatedCompletion(true, null);
            });
    }

    public static ObjCProtocols = [IQMediaPickerControllerDelegate];
}


*/