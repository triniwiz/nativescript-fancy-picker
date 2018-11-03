import {
  FancyPickerBase,
  FancyPhotoVideoPickerOptions,
  randomId,
  FancyFilePickerItemBase,
  FancyPickerItemBase,
  FancyPickerItemType,
  FancyPickerResponse,
  FancyAudioPickerOptions,
  FancyFilePickerOptions,
  FancyFilePickerResponse
} from './fancy-picker.common';
import * as permissions from 'nativescript-permissions';
require('./async-await');
import * as imageSource from 'tns-core-modules/image-source';
import * as fs from 'tns-core-modules/file-system';
import * as frame from 'tns-core-modules/ui/frame';
import * as app from 'tns-core-modules/application';
import * as utils from 'tns-core-modules/utils/utils';
export class FancyFilePickerItem implements FancyFilePickerItemBase {
  constructor(public file: string, public ios?: any, public android?: any) {}
}
export class FancyPickerItem implements FancyPickerItemBase {
  constructor(
    public type: FancyPickerItemType,
    public file: any,
    public ios?: any,
    public android?: any
  ) {}
  save(path?: string): Promise<string> {
    const tempPath = fs.knownFolders.temp().path;
    return new Promise((resolve, reject) => {
      if (this.type === 'image') {
        const tempFile = fs.path.join(tempPath, randomId(), '.jpg');
        const saved = (this.file as imageSource.ImageSource).saveToFile(
          tempFile,
          'jpeg',
          100
        );
        if (saved) {
          resolve(tempFile);
        } else {
          reject('Failed to save');
        }
      } else if (this.type === 'video') {
        resolve(this.file);
      } else if (this.type === 'audio') {
      }
    });
  }
}

const REQUEST_CODE_CHOOSE = 1870;
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
        const has =
          permissions.hasPermission(
            android.Manifest.permission.READ_EXTERNAL_STORAGE
          ) &&
          permissions.hasPermission(
            android.Manifest.permission.WRITE_EXTERNAL_STORAGE
          );

        if (!has) {
          await permissions.requestPermissions([
            android.Manifest.permission.READ_EXTERNAL_STORAGE,
            android.Manifest.permission.WRITE_EXTERNAL_STORAGE
          ]);
        }
        const activity = com.zhihu.matisse.Matisse.from(
          app.android.foregroundActivity
        );

        app.android.off(app.AndroidApplication.activityResultEvent);
        app.android.on(
          app.AndroidApplication.activityResultEvent,
          (args: app.AndroidActivityResultEventData) => {
            const items = [];
            if (
              args.requestCode === REQUEST_CODE_CHOOSE &&
              args.resultCode === android.app.Activity.RESULT_OK
            ) {
              const selected = com.zhihu.matisse.Matisse.obtainResult(
                args.intent
              );
              console.log(selected);
              resolve({
                files: items
              });
            } else {
              reject('cancelled');
            }
          }
        );
        let picker: com.zhihu.matisse.SelectionCreator;

        if (options.image && options.video) {
          picker = activity.choose(com.zhihu.matisse.MimeType.ofAll());
        } else if (!options.image && options.video) {
          picker = activity.choose(com.zhihu.matisse.MimeType.ofVideo());
          picker.showSingleMediaType(true);
        } else if (options.image && !options.video) {
          picker = activity.choose(com.zhihu.matisse.MimeType.ofImage());
          picker.showSingleMediaType(true);
        }
        console.log('1');
        picker.countable(false);
        console.log('2');
        picker.imageEngine(new com.zhihu.matisse.engine.impl.GlideEngine());
        console.log('3');
        // picker.maxSelectable(options.maxCount);
        console.log('4');
        if (options.allowCapture) {
          const pkgName = utils.ad.getApplication().getPackageName();
          picker.capture(options.allowCapture);
          picker.captureStrategy(
            new com.zhihu.matisse.internal.entity.CaptureStrategy(
              true,
              `${pkgName}.provider`,
              'fancypicker'
            )
          );
        }

        picker.forResult(REQUEST_CODE_CHOOSE);
      } catch (e) {
        reject(e);
      }
    });
  }

  public static showAudioPicker(
    options: FancyAudioPickerOptions = { maxCount: 1 }
  ): Promise<FancyPickerResponse> {
    return new Promise((resolve, reject) => {});
  }

  public static showFilePicker(
    options: FancyFilePickerOptions = { maxCount: 1 }
  ): Promise<FancyFilePickerResponse> {
    return new Promise((resolve, reject) => {});
  }
}

/*
@JavaProxy('com.github.triniwiz.fancyPicker.PicassoEngine3Engine')
class PicassoEngine3 extends com.zhihu.matisse.engine.ImageEngine {
  private context;
  constructor() {
    super();
    this.context = (com as any).squareup.picasso3.provider.PicassoProvider.get();
    return global.__native(this);
  }

  public loadThumbnail(
    context: globalAndroid.content.Context,
    resize: number,
    placeholder: globalAndroid.graphics.drawable.Drawable,
    imageView: globalAndroid.widget.ImageView,
    uri: globalAndroid.net.Uri
  ): void {
    if (!this.context) {
      console.dir((com as any).squareup);
      this.context = (com as any).squareup.picasso3.provider.PicassoProvider.get();
    }
    this.context
      .load(uri)
      .placeholder(placeholder)
      .resize(resize, resize)
      .centerCrop()
      .into(imageView);
  }
  public loadImage(
    context: globalAndroid.content.Context,
    resizeX: number,
    resizeY: number,
    imageView: globalAndroid.widget.ImageView,
    uri: globalAndroid.net.Uri
  ): void {
    if (!this.context) {
      this.context = (com as any).squareup.picasso3.provider.PicassoProvider.get();
    }
    this.context
      .load(uri)
      .resize(resizeX, resizeY)
      .priority((com as any).squareup.picasso3.Picasso.Priority.HIGH)
      .centerInside()
      .into(imageView);
  }
  public loadGifThumbnail(
    context: globalAndroid.content.Context,
    resize: number,
    placeholder: globalAndroid.graphics.drawable.Drawable,
    imageView: globalAndroid.widget.ImageView,
    uri: globalAndroid.net.Uri
  ): void {
    this.loadThumbnail(context, resize, placeholder, imageView, uri);
  }
  public loadGifImage(
    context: globalAndroid.content.Context,
    resizeX: number,
    resizeY: number,
    imageView: globalAndroid.widget.ImageView,
    uri: globalAndroid.net.Uri
  ): void {
    this.loadImage(context, resizeX, resizeY, imageView, uri);
  }

  public supportAnimatedGif(): boolean {
    return false;
  }
}
*/
