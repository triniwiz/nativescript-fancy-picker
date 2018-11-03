import { FancyPickerBase, FancyPhotoVideoPickerOptions, FancyFilePickerOptions, FancyAudioPickerOptions } from './fancy-picker.common';
export declare class FancyPicker extends FancyPickerBase {
    static showPhotoVideoPicker(options?: FancyPhotoVideoPickerOptions): Promise<{}>;
    static showAudioPicker(options?: FancyAudioPickerOptions): Promise<{}>;
    static showFilePicker(options?: FancyFilePickerOptions): Promise<{}>;
}
