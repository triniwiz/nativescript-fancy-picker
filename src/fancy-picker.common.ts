export class FancyPickerBase {
}

export interface FancyPhotoVideoPickerOptions {
    image: boolean;
    video: boolean;
    allowCapture?: boolean;
    maxCount?: number;
}

export type FileType =
    | 'image'
    | 'pdf'
    | 'text'
    | 'video'
    | 'audio'
    | 'doc'
    | 'xls'
    | 'ppt'
    | 'presentation'
    | 'spreadsheet';

export interface FancyFilePickerOptions {
    types?: FileType[];
    maxCount?: number;
}

export interface FancyAudioPickerOptions {
    maxCount?: number;
}

export type FancyPickerItemType = 'audio' | 'video' | 'image';

export interface FancyPickerItemBase {
    type: FancyPickerItemType;
    file: any;
    ios?: any;
    android?: any;
}

export interface FancyFilePickerItemBase {
    file: any;
    ios?: any;
    android?: any;
}

export interface FancyPickerResponse {
    files: FancyPickerItemBase[];
}

export interface FancyFilePickerResponse {
    files: FancyFilePickerItemBase[];
}

export function randomId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (Math.random() * 16) | 0,
            v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
