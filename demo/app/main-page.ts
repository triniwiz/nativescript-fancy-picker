import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import { HelloWorldModel } from './main-view-model';

import { FancyPicker } from 'nativescript-fancy-picker';

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <pages.Page>args.object;
    page.bindingContext = new HelloWorldModel();
}

export function showGalleryPicker() {
    FancyPicker.showPhotoVideoPicker().then((response: any) => {
        response.forEach(item => {
            if (item.type === 'image') {
                item.save().then(file => {
                    console.log(file);
                }).catch(e => {
                    console.log('error', e);
                });
            } else {
                console.dir(item);
            }
        });
    });
}

export function showFilePicker() {
    FancyPicker.showFilePicker().then((response: any) => {
        console.log(response);
    });
}

export function showAudioPicker() {
    FancyPicker.showAudioPicker().then((response: any) => {
        response.forEach(item => {
            item.save().then(path => {
                console.log(path);
            });
        });
    });
}

export function showCameraPicker() {
    FancyPicker.showPhotoVideoPicker({
        video: true,
        image: true,
        allowCapture: true,
        maxCount: 4
    }).then((response: any) => {
        console.log(response);
    });
}

export function showPhotoCameraPicker() {
    FancyPicker.showPhotoVideoPicker({
        video: false,
        image: true,
        allowCapture: true
    }).then((response: any) => {
        console.log(response);
    });
}

export function showVideoCameraPicker() {
    FancyPicker.showPhotoVideoPicker({
        video: true,
        image: false,
        allowCapture: true
    }).then((response: any) => {
        console.log(response);
    });
}

export function showVideoPicker() {
    FancyPicker.showPhotoVideoPicker({video: true, image: false}).then(
        (response: any) => {
            console.log(response);
        }
    );
}

export function showPhotoPicker() {
    FancyPicker.showPhotoVideoPicker({video: false, image: true}).then(
        (response: any) => {
            console.log(response);
        }
    );
}
