import { isIOS } from 'tns-core-modules/platform';
import { fromObject, Observable } from 'tns-core-modules/data/observable';
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { Page } from 'tns-core-modules/ui/page';
import * as utils from 'tns-core-modules/utils/utils';
import * as imageSource from 'tns-core-modules/image-source';
import { FancyListView } from 'nativescript-fancy-list-view';
import * as fs from 'tns-core-modules/file-system';

declare const PHAssetMediaTypeImage, PHAssetMediaTypeVideo, PHAssetMediaTypeAudio, NSMakeRange;
let vm: Observable;
let list: ObservableArray<any>;
let page: Page;
let image = true;
let video = true;
let maxCount = 1;
let lv;
let itemSelected = {};

export function done(args) {
    const results = [];
    const manager = utils.ios.getter(
        PHImageManager,
        PHImageManager.defaultManager
    );
    const requestOptions = PHImageRequestOptions.alloc().init();
    requestOptions.resizeMode = PHImageRequestOptionsResizeMode.Exact;
    requestOptions.deliveryMode = PHImageRequestOptionsDeliveryMode.HighQualityFormat;
    requestOptions.synchronous = true;

    Object.keys(itemSelected).forEach(key => {
        const item = list.getItem(parseInt(key));
        if (item.ios.mediaType === PHAssetMediaTypeImage) {
            manager.requestImageForAssetTargetSizeContentModeOptionsResultHandler(
                item.ios,
                PHImageManagerMaximumSize,
                PHImageContentMode.Default,
                requestOptions,
                (image, info) => {
                    const source = imageSource.fromNativeSource(image);
                    results.push({
                        type: 'image',
                        file: source,
                        ios: item.ios
                    });
                });
        } else if (item.ios.mediaType === PHAssetMediaTypeVideo) {

        } else {

        }
    });
    args.object.closeModal(results);
}

export function goToHome(args) {

}

function imagePath() {
    const path = fs.path.join(
        'tns_modules/nativescript-fancy-picker/images',
        isIOS ? 'ios' : 'android'
    );
    return '~/' + path;
}

export function loaded(args) {
    page.bindingContext = vm;
}

export function itemTapped(args) {
    const index = args.index;
    if (!!itemSelected[index]) {
        itemSelected[index] = false;
    } else {
        itemSelected[index] = true;
    }
    const listView: FancyListView = page.getViewById('listView');
    listView.refresh();
}

export function itemTemplateSelector(item, index, items) {
    if (itemSelected[index]) {
        return 'selected';
    }
    return 'not-selected';
}

export function onNavigatingTo(args) {
    const context = args.context;
    image = !!context.image;
    video = !!context.video;
    page = args.object;
    list = new ObservableArray([]);
    vm = fromObject({
        isIOS: isIOS,
        items: list,
        title: '',
        count: 100,
        checkIcon: imagePath() + '/checkmark.png',
    });
    initList();
}


function initList() {
    const requestOptions = PHImageRequestOptions.alloc().init();
    requestOptions.resizeMode = PHImageRequestOptionsResizeMode.Exact;
    requestOptions.deliveryMode = PHImageRequestOptionsDeliveryMode.HighQualityFormat;
    requestOptions.synchronous = true;
    const manager = utils.ios.getter(
        PHImageManager,
        PHImageManager.defaultManager
    );
    let fetch: PHFetchResult<PHAsset>;
    if (image && video) {
        const fetchOptions = PHFetchOptions.alloc().init();
        fetchOptions.sortDescriptors = NSArray.arrayWithObject(NSSortDescriptor.sortDescriptorWithKeyAscending('creationDate', false));
        fetchOptions.predicate = NSPredicate.predicateWithFormatArgumentArray('mediaType = %d || mediaType = %d', <any>[PHAssetMediaTypeImage, PHAssetMediaTypeVideo]);
        fetch = PHAsset.fetchAssetsWithOptions(fetchOptions);
    } else if (image) {
        fetch = PHAsset.fetchAssetsWithMediaTypeOptions(PHAssetMediaTypeVideo, null);
    } else if (video) {
        fetch = PHAsset.fetchAssetsWithMediaTypeOptions(PHAssetMediaTypeImage, null);
    }

    const totalCount = fetch.count;
    const max = totalCount > 100 ? 100 : totalCount;
    for (let i = 0; i < max; i++) {
        const item = fetch.objectAtIndex(i);
        if (item.mediaType === PHAssetMediaTypeImage) {
            manager.requestImageForAssetTargetSizeContentModeOptionsResultHandler(
                item,
                CGSizeMake(100, 100),
                PHImageContentMode.Default,
                requestOptions,
                (image, info) => {
                    const source = imageSource.fromNativeSource(image);
                    list.push({
                        ios: item,
                        src: source
                    });
                });
        } else if (item.mediaType === PHAssetMediaTypeVideo) {

        } else {

        }
    }

}