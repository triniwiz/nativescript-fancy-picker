declare module com {
	export module zhihu {
		export module matisse {
			export class BuildConfig {
				public static class: java.lang.Class<com.zhihu.matisse.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export class Matisse {
				public static class: java.lang.Class<com.zhihu.matisse.Matisse>;
				public static obtainOriginalState(param0: globalAndroid.content.Intent): boolean;
				public static from(param0: globalAndroid.support.v4.app.Fragment): com.zhihu.matisse.Matisse;
				public static obtainResult(param0: globalAndroid.content.Intent): java.util.List<globalAndroid.net.Uri>;
				public static obtainPathResult(param0: globalAndroid.content.Intent): java.util.List<string>;
				public static from(param0: globalAndroid.app.Activity): com.zhihu.matisse.Matisse;
				public choose(param0: java.util.Set<com.zhihu.matisse.MimeType>): com.zhihu.matisse.SelectionCreator;
				public choose(param0: java.util.Set<com.zhihu.matisse.MimeType>, param1: boolean): com.zhihu.matisse.SelectionCreator;
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export class MimeType {
				public static class: java.lang.Class<com.zhihu.matisse.MimeType>;
				public static JPEG: com.zhihu.matisse.MimeType;
				public static PNG: com.zhihu.matisse.MimeType;
				public static GIF: com.zhihu.matisse.MimeType;
				public static BMP: com.zhihu.matisse.MimeType;
				public static WEBP: com.zhihu.matisse.MimeType;
				public static MPEG: com.zhihu.matisse.MimeType;
				public static MP4: com.zhihu.matisse.MimeType;
				public static QUICKTIME: com.zhihu.matisse.MimeType;
				public static THREEGPP: com.zhihu.matisse.MimeType;
				public static THREEGPP2: com.zhihu.matisse.MimeType;
				public static MKV: com.zhihu.matisse.MimeType;
				public static WEBM: com.zhihu.matisse.MimeType;
				public static TS: com.zhihu.matisse.MimeType;
				public static AVI: com.zhihu.matisse.MimeType;
				public static ofAll(): java.util.Set<com.zhihu.matisse.MimeType>;
				public static ofImage(): java.util.Set<com.zhihu.matisse.MimeType>;
				public checkType(param0: globalAndroid.content.ContentResolver, param1: globalAndroid.net.Uri): boolean;
				public static values(): native.Array<com.zhihu.matisse.MimeType>;
				public static ofVideo(): java.util.Set<com.zhihu.matisse.MimeType>;
				public static of(param0: com.zhihu.matisse.MimeType, param1: native.Array<com.zhihu.matisse.MimeType>): java.util.Set<com.zhihu.matisse.MimeType>;
				public toString(): string;
				public static valueOf(param0: string): com.zhihu.matisse.MimeType;
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export class SelectionCreator {
				public static class: java.lang.Class<com.zhihu.matisse.SelectionCreator>;
				public maxSelectable(param0: number): com.zhihu.matisse.SelectionCreator;
				public countable(param0: boolean): com.zhihu.matisse.SelectionCreator;
				public setOnCheckedListener(param0: com.zhihu.matisse.listener.OnCheckedListener): com.zhihu.matisse.SelectionCreator;
				public gridExpectedSize(param0: number): com.zhihu.matisse.SelectionCreator;
				public thumbnailScale(param0: number): com.zhihu.matisse.SelectionCreator;
				public imageEngine(param0: com.zhihu.matisse.engine.ImageEngine): com.zhihu.matisse.SelectionCreator;
				public captureStrategy(param0: com.zhihu.matisse.internal.entity.CaptureStrategy): com.zhihu.matisse.SelectionCreator;
				public autoHideToolbarOnSingleTap(param0: boolean): com.zhihu.matisse.SelectionCreator;
				public addFilter(param0: com.zhihu.matisse.filter.Filter): com.zhihu.matisse.SelectionCreator;
				public setOnSelectedListener(param0: com.zhihu.matisse.listener.OnSelectedListener): com.zhihu.matisse.SelectionCreator;
				public showSingleMediaType(param0: boolean): com.zhihu.matisse.SelectionCreator;
				public maxSelectablePerMediaType(param0: number, param1: number): com.zhihu.matisse.SelectionCreator;
				public theme(param0: number): com.zhihu.matisse.SelectionCreator;
				public maxOriginalSize(param0: number): com.zhihu.matisse.SelectionCreator;
				public capture(param0: boolean): com.zhihu.matisse.SelectionCreator;
				public forResult(param0: number): void;
				public restrictOrientation(param0: number): com.zhihu.matisse.SelectionCreator;
				public originalEnable(param0: boolean): com.zhihu.matisse.SelectionCreator;
				public spanCount(param0: number): com.zhihu.matisse.SelectionCreator;
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export module engine {
				export class ImageEngine {
					public static class: java.lang.Class<com.zhihu.matisse.engine.ImageEngine>;
					/**
					 * Constructs a new instance of the com.zhihu.matisse.engine.ImageEngine interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						loadThumbnail(param0: globalAndroid.content.Context, param1: number, param2: globalAndroid.graphics.drawable.Drawable, param3: globalAndroid.widget.ImageView, param4: globalAndroid.net.Uri): void;
						loadGifThumbnail(param0: globalAndroid.content.Context, param1: number, param2: globalAndroid.graphics.drawable.Drawable, param3: globalAndroid.widget.ImageView, param4: globalAndroid.net.Uri): void;
						loadImage(param0: globalAndroid.content.Context, param1: number, param2: number, param3: globalAndroid.widget.ImageView, param4: globalAndroid.net.Uri): void;
						loadGifImage(param0: globalAndroid.content.Context, param1: number, param2: number, param3: globalAndroid.widget.ImageView, param4: globalAndroid.net.Uri): void;
						supportAnimatedGif(): boolean;
					});
					public constructor();
					public loadThumbnail(param0: globalAndroid.content.Context, param1: number, param2: globalAndroid.graphics.drawable.Drawable, param3: globalAndroid.widget.ImageView, param4: globalAndroid.net.Uri): void;
					public loadImage(param0: globalAndroid.content.Context, param1: number, param2: number, param3: globalAndroid.widget.ImageView, param4: globalAndroid.net.Uri): void;
					public loadGifThumbnail(param0: globalAndroid.content.Context, param1: number, param2: globalAndroid.graphics.drawable.Drawable, param3: globalAndroid.widget.ImageView, param4: globalAndroid.net.Uri): void;
					public loadGifImage(param0: globalAndroid.content.Context, param1: number, param2: number, param3: globalAndroid.widget.ImageView, param4: globalAndroid.net.Uri): void;
					public supportAnimatedGif(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export module engine {
				export module impl {
					export class GlideEngine extends com.zhihu.matisse.engine.ImageEngine {
						public static class: java.lang.Class<com.zhihu.matisse.engine.impl.GlideEngine>;
						public loadGifImage(param0: globalAndroid.content.Context, param1: number, param2: number, param3: globalAndroid.widget.ImageView, param4: globalAndroid.net.Uri): void;
						public constructor();
						public loadImage(param0: globalAndroid.content.Context, param1: number, param2: number, param3: globalAndroid.widget.ImageView, param4: globalAndroid.net.Uri): void;
						public supportAnimatedGif(): boolean;
						public loadThumbnail(param0: globalAndroid.content.Context, param1: number, param2: globalAndroid.graphics.drawable.Drawable, param3: globalAndroid.widget.ImageView, param4: globalAndroid.net.Uri): void;
						public loadGifThumbnail(param0: globalAndroid.content.Context, param1: number, param2: globalAndroid.graphics.drawable.Drawable, param3: globalAndroid.widget.ImageView, param4: globalAndroid.net.Uri): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export module engine {
				export module impl {
					export class PicassoEngine extends com.zhihu.matisse.engine.ImageEngine {
						public static class: java.lang.Class<com.zhihu.matisse.engine.impl.PicassoEngine>;
						public loadGifImage(param0: globalAndroid.content.Context, param1: number, param2: number, param3: globalAndroid.widget.ImageView, param4: globalAndroid.net.Uri): void;
						public constructor();
						public loadImage(param0: globalAndroid.content.Context, param1: number, param2: number, param3: globalAndroid.widget.ImageView, param4: globalAndroid.net.Uri): void;
						public supportAnimatedGif(): boolean;
						public loadThumbnail(param0: globalAndroid.content.Context, param1: number, param2: globalAndroid.graphics.drawable.Drawable, param3: globalAndroid.widget.ImageView, param4: globalAndroid.net.Uri): void;
						public loadGifThumbnail(param0: globalAndroid.content.Context, param1: number, param2: globalAndroid.graphics.drawable.Drawable, param3: globalAndroid.widget.ImageView, param4: globalAndroid.net.Uri): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export module filter {
				export abstract class Filter {
					public static class: java.lang.Class<com.zhihu.matisse.filter.Filter>;
					public static MIN: number;
					public static MAX: number;
					public static K: number;
					public needFiltering(param0: globalAndroid.content.Context, param1: com.zhihu.matisse.internal.entity.Item): boolean;
					public constructor();
					public constraintTypes(): java.util.Set<com.zhihu.matisse.MimeType>;
					public filter(param0: globalAndroid.content.Context, param1: com.zhihu.matisse.internal.entity.Item): com.zhihu.matisse.internal.entity.IncapableCause;
				}
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export module internal {
				export module entity {
					export class Album {
						public static class: java.lang.Class<com.zhihu.matisse.internal.entity.Album>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.zhihu.matisse.internal.entity.Album>;
						public static ALBUM_ID_ALL: string;
						public static ALBUM_NAME_ALL: string;
						public addCaptureCount(): void;
						public getDisplayName(param0: globalAndroid.content.Context): string;
						public static valueOf(param0: globalAndroid.database.Cursor): com.zhihu.matisse.internal.entity.Album;
						public describeContents(): number;
						public getCoverPath(): string;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public isEmpty(): boolean;
						public getCount(): number;
						public getId(): string;
						public isAll(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export module internal {
				export module entity {
					export class CaptureStrategy {
						public static class: java.lang.Class<com.zhihu.matisse.internal.entity.CaptureStrategy>;
						public isPublic: boolean;
						public authority: string;
						public directory: string;
						public constructor(param0: boolean, param1: string);
						public constructor(param0: boolean, param1: string, param2: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export module internal {
				export module entity {
					export class IncapableCause {
						public static class: java.lang.Class<com.zhihu.matisse.internal.entity.IncapableCause>;
						public static TOAST: number;
						public static DIALOG: number;
						public static NONE: number;
						public constructor(param0: number, param1: string);
						public static handleCause(param0: globalAndroid.content.Context, param1: com.zhihu.matisse.internal.entity.IncapableCause): void;
						public constructor(param0: string, param1: string);
						public constructor(param0: number, param1: string, param2: string);
						public constructor(param0: string);
					}
					export module IncapableCause {
						export class Form {
							public static class: java.lang.Class<com.zhihu.matisse.internal.entity.IncapableCause.Form>;
							/**
							 * Constructs a new instance of the com.zhihu.matisse.internal.entity.IncapableCause$Form interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export module internal {
				export module entity {
					export class Item {
						public static class: java.lang.Class<com.zhihu.matisse.internal.entity.Item>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.zhihu.matisse.internal.entity.Item>;
						public static ITEM_ID_CAPTURE: number;
						public static ITEM_DISPLAY_NAME_CAPTURE: string;
						public id: number;
						public mimeType: string;
						public uri: globalAndroid.net.Uri;
						public size: number;
						public duration: number;
						public isGif(): boolean;
						public describeContents(): number;
						public isCapture(): boolean;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getContentUri(): globalAndroid.net.Uri;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public static valueOf(param0: globalAndroid.database.Cursor): com.zhihu.matisse.internal.entity.Item;
						public isVideo(): boolean;
						public isImage(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export module internal {
				export module entity {
					export class SelectionSpec {
						public static class: java.lang.Class<com.zhihu.matisse.internal.entity.SelectionSpec>;
						public mimeTypeSet: java.util.Set<com.zhihu.matisse.MimeType>;
						public mediaTypeExclusive: boolean;
						public showSingleMediaType: boolean;
						public themeId: number;
						public orientation: number;
						public countable: boolean;
						public maxSelectable: number;
						public maxImageSelectable: number;
						public maxVideoSelectable: number;
						public filters: java.util.List<com.zhihu.matisse.filter.Filter>;
						public capture: boolean;
						public captureStrategy: com.zhihu.matisse.internal.entity.CaptureStrategy;
						public spanCount: number;
						public gridExpectedSize: number;
						public thumbnailScale: number;
						public imageEngine: com.zhihu.matisse.engine.ImageEngine;
						public hasInited: boolean;
						public onSelectedListener: com.zhihu.matisse.listener.OnSelectedListener;
						public originalable: boolean;
						public autoHideToobar: boolean;
						public originalMaxSize: number;
						public onCheckedListener: com.zhihu.matisse.listener.OnCheckedListener;
						public singleSelectionModeEnabled(): boolean;
						public needOrientationRestriction(): boolean;
						public onlyShowVideos(): boolean;
						public static getInstance(): com.zhihu.matisse.internal.entity.SelectionSpec;
						public onlyShowImages(): boolean;
						public static getCleanInstance(): com.zhihu.matisse.internal.entity.SelectionSpec;
					}
					export module SelectionSpec {
						export class InstanceHolder {
							public static class: java.lang.Class<com.zhihu.matisse.internal.entity.SelectionSpec.InstanceHolder>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export module internal {
				export module loader {
					export class AlbumLoader {
						public static class: java.lang.Class<com.zhihu.matisse.internal.loader.AlbumLoader>;
						public static COLUMN_COUNT: string;
						public onContentChanged(): void;
						public loadInBackground(): globalAndroid.database.Cursor;
						public static newInstance(param0: globalAndroid.content.Context): globalAndroid.support.v4.content.CursorLoader;
					}
				}
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export module internal {
				export module loader {
					export class AlbumMediaLoader {
						public static class: java.lang.Class<com.zhihu.matisse.internal.loader.AlbumMediaLoader>;
						public static newInstance(param0: globalAndroid.content.Context, param1: com.zhihu.matisse.internal.entity.Album, param2: boolean): globalAndroid.support.v4.content.CursorLoader;
						public onContentChanged(): void;
						public loadInBackground(): globalAndroid.database.Cursor;
					}
				}
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export module internal {
				export module model {
					export class AlbumCollection extends globalAndroid.support.v4.app.LoaderManager.LoaderCallbacks<globalAndroid.database.Cursor> {
						public static class: java.lang.Class<com.zhihu.matisse.internal.model.AlbumCollection>;
						public onRestoreInstanceState(param0: globalAndroid.os.Bundle): void;
						public loadAlbums(): void;
						public constructor();
						public onDestroy(): void;
						public setStateCurrentSelection(param0: number): void;
						public onCreateLoader(param0: number, param1: globalAndroid.os.Bundle): globalAndroid.support.v4.content.Loader<globalAndroid.database.Cursor>;
						public getCurrentSelection(): number;
						public onLoaderReset(param0: globalAndroid.support.v4.content.Loader<globalAndroid.database.Cursor>): void;
						public onLoadFinished(param0: globalAndroid.support.v4.content.Loader<globalAndroid.database.Cursor>, param1: globalAndroid.database.Cursor): void;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public onCreate(param0: globalAndroid.support.v4.app.FragmentActivity, param1: com.zhihu.matisse.internal.model.AlbumCollection.AlbumCallbacks): void;
					}
					export module AlbumCollection {
						export class AlbumCallbacks {
							public static class: java.lang.Class<com.zhihu.matisse.internal.model.AlbumCollection.AlbumCallbacks>;
							/**
							 * Constructs a new instance of the com.zhihu.matisse.internal.model.AlbumCollection$AlbumCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onAlbumLoad(param0: globalAndroid.database.Cursor): void;
								onAlbumReset(): void;
							});
							public constructor();
							public onAlbumLoad(param0: globalAndroid.database.Cursor): void;
							public onAlbumReset(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export module internal {
				export module model {
					export class AlbumMediaCollection extends globalAndroid.support.v4.app.LoaderManager.LoaderCallbacks<globalAndroid.database.Cursor> {
						public static class: java.lang.Class<com.zhihu.matisse.internal.model.AlbumMediaCollection>;
						public load(param0: com.zhihu.matisse.internal.entity.Album, param1: boolean): void;
						public constructor();
						public onDestroy(): void;
						public onCreateLoader(param0: number, param1: globalAndroid.os.Bundle): globalAndroid.support.v4.content.Loader<globalAndroid.database.Cursor>;
						public load(param0: com.zhihu.matisse.internal.entity.Album): void;
						public onLoaderReset(param0: globalAndroid.support.v4.content.Loader<globalAndroid.database.Cursor>): void;
						public onLoadFinished(param0: globalAndroid.support.v4.content.Loader<globalAndroid.database.Cursor>, param1: globalAndroid.database.Cursor): void;
						public onCreate(param0: globalAndroid.support.v4.app.FragmentActivity, param1: com.zhihu.matisse.internal.model.AlbumMediaCollection.AlbumMediaCallbacks): void;
					}
					export module AlbumMediaCollection {
						export class AlbumMediaCallbacks {
							public static class: java.lang.Class<com.zhihu.matisse.internal.model.AlbumMediaCollection.AlbumMediaCallbacks>;
							/**
							 * Constructs a new instance of the com.zhihu.matisse.internal.model.AlbumMediaCollection$AlbumMediaCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onAlbumMediaLoad(param0: globalAndroid.database.Cursor): void;
								onAlbumMediaReset(): void;
							});
							public constructor();
							public onAlbumMediaLoad(param0: globalAndroid.database.Cursor): void;
							public onAlbumMediaReset(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export module internal {
				export module model {
					export class SelectedItemCollection {
						public static class: java.lang.Class<com.zhihu.matisse.internal.model.SelectedItemCollection>;
						public static STATE_SELECTION: string;
						public static STATE_COLLECTION_TYPE: string;
						public static COLLECTION_UNDEFINED: number;
						public static COLLECTION_IMAGE: number;
						public static COLLECTION_VIDEO: number;
						public static COLLECTION_MIXED: number;
						public count(): number;
						public constructor(param0: globalAndroid.content.Context);
						public overwrite(param0: java.util.ArrayList<com.zhihu.matisse.internal.entity.Item>, param1: number): void;
						public isAcceptable(param0: com.zhihu.matisse.internal.entity.Item): com.zhihu.matisse.internal.entity.IncapableCause;
						public maxSelectableReached(): boolean;
						public setDefaultSelection(param0: java.util.List<com.zhihu.matisse.internal.entity.Item>): void;
						public asList(): java.util.List<com.zhihu.matisse.internal.entity.Item>;
						public asListOfUri(): java.util.List<globalAndroid.net.Uri>;
						public typeConflict(param0: com.zhihu.matisse.internal.entity.Item): boolean;
						public getDataWithBundle(): globalAndroid.os.Bundle;
						public checkedNumOf(param0: com.zhihu.matisse.internal.entity.Item): number;
						public asListOfString(): java.util.List<string>;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public isEmpty(): boolean;
						public isSelected(param0: com.zhihu.matisse.internal.entity.Item): boolean;
						public getCollectionType(): number;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public add(param0: com.zhihu.matisse.internal.entity.Item): boolean;
						public remove(param0: com.zhihu.matisse.internal.entity.Item): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export module internal {
				export module ui {
					export class AlbumPreviewActivity extends com.zhihu.matisse.internal.ui.BasePreviewActivity implements com.zhihu.matisse.internal.model.AlbumMediaCollection.AlbumMediaCallbacks {
						public static class: java.lang.Class<com.zhihu.matisse.internal.ui.AlbumPreviewActivity>;
						public static EXTRA_ALBUM: string;
						public static EXTRA_ITEM: string;
						public constructor();
						public onDestroy(): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onClick(): void;
						public onAlbumMediaReset(): void;
						public onAlbumMediaLoad(param0: globalAndroid.database.Cursor): void;
						public onClick(param0: globalAndroid.view.View): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export module internal {
				export module ui {
					export abstract class BasePreviewActivity implements com.zhihu.matisse.listener.OnFragmentInteractionListener {
						public static class: java.lang.Class<com.zhihu.matisse.internal.ui.BasePreviewActivity>;
						public static EXTRA_DEFAULT_BUNDLE: string;
						public static EXTRA_RESULT_BUNDLE: string;
						public static EXTRA_RESULT_APPLY: string;
						public static EXTRA_RESULT_ORIGINAL_ENABLE: string;
						public static CHECK_STATE: string;
						public mSelectedCollection: com.zhihu.matisse.internal.model.SelectedItemCollection;
						public mSpec: com.zhihu.matisse.internal.entity.SelectionSpec;
						public mPager: globalAndroid.support.v4.view.ViewPager;
						public mAdapter: com.zhihu.matisse.internal.ui.adapter.PreviewPagerAdapter;
						public mCheckView: com.zhihu.matisse.internal.ui.widget.CheckView;
						public mButtonBack: globalAndroid.widget.TextView;
						public mButtonApply: globalAndroid.widget.TextView;
						public mSize: globalAndroid.widget.TextView;
						public mPreviousPos: number;
						public mOriginalEnable: boolean;
						public constructor();
						public onPageSelected(param0: number): void;
						public onPageScrolled(param0: number, param1: number, param2: number): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onClick(): void;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public updateSize(param0: com.zhihu.matisse.internal.entity.Item): void;
						public onBackPressed(): void;
						public onPageScrollStateChanged(param0: number): void;
						public onClick(param0: globalAndroid.view.View): void;
						public sendBackResult(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export module internal {
				export module ui {
					export class MediaSelectionFragment implements com.zhihu.matisse.internal.model.AlbumMediaCollection.AlbumMediaCallbacks, com.zhihu.matisse.internal.ui.adapter.AlbumMediaAdapter.CheckStateListener, com.zhihu.matisse.internal.ui.adapter.AlbumMediaAdapter.OnMediaClickListener {
						public static class: java.lang.Class<com.zhihu.matisse.internal.ui.MediaSelectionFragment>;
						public static EXTRA_ALBUM: string;
						public constructor();
						public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
						public onActivityCreated(param0: globalAndroid.os.Bundle): void;
						public onUpdate(): void;
						public static newInstance(param0: com.zhihu.matisse.internal.entity.Album): com.zhihu.matisse.internal.ui.MediaSelectionFragment;
						public refreshSelection(): void;
						public onMediaClick(param0: com.zhihu.matisse.internal.entity.Album, param1: com.zhihu.matisse.internal.entity.Item, param2: number): void;
						public onDestroyView(): void;
						public refreshMediaGrid(): void;
						public onAttach(param0: globalAndroid.content.Context): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public onAlbumMediaReset(): void;
						public onAlbumMediaLoad(param0: globalAndroid.database.Cursor): void;
					}
					export module MediaSelectionFragment {
						export class SelectionProvider {
							public static class: java.lang.Class<com.zhihu.matisse.internal.ui.MediaSelectionFragment.SelectionProvider>;
							/**
							 * Constructs a new instance of the com.zhihu.matisse.internal.ui.MediaSelectionFragment$SelectionProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								provideSelectedItemCollection(): com.zhihu.matisse.internal.model.SelectedItemCollection;
							});
							public constructor();
							public provideSelectedItemCollection(): com.zhihu.matisse.internal.model.SelectedItemCollection;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export module internal {
				export module ui {
					export class PreviewItemFragment {
						public static class: java.lang.Class<com.zhihu.matisse.internal.ui.PreviewItemFragment>;
						public constructor();
						public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
						public onAttach(param0: globalAndroid.content.Context): void;
						public static newInstance(param0: com.zhihu.matisse.internal.entity.Item): com.zhihu.matisse.internal.ui.PreviewItemFragment;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public resetView(): void;
						public onDetach(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export module internal {
				export module ui {
					export class SelectedPreviewActivity extends com.zhihu.matisse.internal.ui.BasePreviewActivity {
						public static class: java.lang.Class<com.zhihu.matisse.internal.ui.SelectedPreviewActivity>;
						public constructor();
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onClick(): void;
						public onClick(param0: globalAndroid.view.View): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export module internal {
				export module ui {
					export module adapter {
						export class AlbumMediaAdapter extends com.zhihu.matisse.internal.ui.adapter.RecyclerViewCursorAdapter<globalAndroid.support.v7.widget.RecyclerView.ViewHolder> implements com.zhihu.matisse.internal.ui.widget.MediaGrid.OnMediaGridClickListener  {
							public static class: java.lang.Class<com.zhihu.matisse.internal.ui.adapter.AlbumMediaAdapter>;
							public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): globalAndroid.support.v7.widget.RecyclerView.ViewHolder;
							public onCheckViewClicked(param0: com.zhihu.matisse.internal.ui.widget.CheckView, param1: com.zhihu.matisse.internal.entity.Item, param2: globalAndroid.support.v7.widget.RecyclerView.ViewHolder): void;
							public refreshSelection(): void;
							public getItemViewType(param0: number): number;
							public registerCheckStateListener(param0: com.zhihu.matisse.internal.ui.adapter.AlbumMediaAdapter.CheckStateListener): void;
							public constructor(param0: globalAndroid.content.Context, param1: com.zhihu.matisse.internal.model.SelectedItemCollection, param2: globalAndroid.support.v7.widget.RecyclerView);
							public onThumbnailClicked(param0: globalAndroid.widget.ImageView, param1: com.zhihu.matisse.internal.entity.Item, param2: globalAndroid.support.v7.widget.RecyclerView.ViewHolder): void;
							public registerOnMediaClickListener(param0: com.zhihu.matisse.internal.ui.adapter.AlbumMediaAdapter.OnMediaClickListener): void;
							public unregisterCheckStateListener(): void;
							public getItemViewType(param0: number, param1: globalAndroid.database.Cursor): number;
							public onBindViewHolder(param0: any, param1: globalAndroid.database.Cursor): void;
							public onBindViewHolder(param0: any, param1: number): void;
							public unregisterOnMediaClickListener(): void;
							public onBindViewHolder(param0: globalAndroid.support.v7.widget.RecyclerView.ViewHolder, param1: globalAndroid.database.Cursor): void;
						}
						export module AlbumMediaAdapter {
							export class CaptureViewHolder {
								public static class: java.lang.Class<com.zhihu.matisse.internal.ui.adapter.AlbumMediaAdapter.CaptureViewHolder>;
							}
							export class CheckStateListener {
								public static class: java.lang.Class<com.zhihu.matisse.internal.ui.adapter.AlbumMediaAdapter.CheckStateListener>;
								/**
								 * Constructs a new instance of the com.zhihu.matisse.internal.ui.adapter.AlbumMediaAdapter$CheckStateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onUpdate(): void;
								});
								public constructor();
								public onUpdate(): void;
							}
							export class MediaViewHolder {
								public static class: java.lang.Class<com.zhihu.matisse.internal.ui.adapter.AlbumMediaAdapter.MediaViewHolder>;
							}
							export class OnMediaClickListener {
								public static class: java.lang.Class<com.zhihu.matisse.internal.ui.adapter.AlbumMediaAdapter.OnMediaClickListener>;
								/**
								 * Constructs a new instance of the com.zhihu.matisse.internal.ui.adapter.AlbumMediaAdapter$OnMediaClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onMediaClick(param0: com.zhihu.matisse.internal.entity.Album, param1: com.zhihu.matisse.internal.entity.Item, param2: number): void;
								});
								public constructor();
								public onMediaClick(param0: com.zhihu.matisse.internal.entity.Album, param1: com.zhihu.matisse.internal.entity.Item, param2: number): void;
							}
							export class OnPhotoCapture {
								public static class: java.lang.Class<com.zhihu.matisse.internal.ui.adapter.AlbumMediaAdapter.OnPhotoCapture>;
								/**
								 * Constructs a new instance of the com.zhihu.matisse.internal.ui.adapter.AlbumMediaAdapter$OnPhotoCapture interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									capture(): void;
								});
								public constructor();
								public capture(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export module internal {
				export module ui {
					export module adapter {
						export class AlbumsAdapter {
							public static class: java.lang.Class<com.zhihu.matisse.internal.ui.adapter.AlbumsAdapter>;
							public bindView(param0: globalAndroid.view.View, param1: globalAndroid.content.Context, param2: globalAndroid.database.Cursor): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.database.Cursor, param2: boolean);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.database.Cursor, param2: number);
							public newView(param0: globalAndroid.content.Context, param1: globalAndroid.database.Cursor, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export module internal {
				export module ui {
					export module adapter {
						export class PreviewPagerAdapter {
							public static class: java.lang.Class<com.zhihu.matisse.internal.ui.adapter.PreviewPagerAdapter>;
							public addAll(param0: java.util.List<com.zhihu.matisse.internal.entity.Item>): void;
							public getMediaItem(param0: number): com.zhihu.matisse.internal.entity.Item;
							public constructor(param0: globalAndroid.support.v4.app.FragmentManager, param1: com.zhihu.matisse.internal.ui.adapter.PreviewPagerAdapter.OnPrimaryItemSetListener);
							public setPrimaryItem(param0: globalAndroid.view.ViewGroup, param1: number, param2: any): void;
							public getCount(): number;
							public getItem(param0: number): globalAndroid.support.v4.app.Fragment;
						}
						export module PreviewPagerAdapter {
							export class OnPrimaryItemSetListener {
								public static class: java.lang.Class<com.zhihu.matisse.internal.ui.adapter.PreviewPagerAdapter.OnPrimaryItemSetListener>;
								/**
								 * Constructs a new instance of the com.zhihu.matisse.internal.ui.adapter.PreviewPagerAdapter$OnPrimaryItemSetListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onPrimaryItemSet(param0: number): void;
								});
								public constructor();
								public onPrimaryItemSet(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export module internal {
				export module ui {
					export module adapter {
						export abstract class RecyclerViewCursorAdapter<VH>  extends globalAndroid.support.v7.widget.RecyclerView.Adapter<any> {
							public static class: java.lang.Class<com.zhihu.matisse.internal.ui.adapter.RecyclerViewCursorAdapter<any>>;
							public getItemId(param0: number): number;
							public getItemViewType(param0: number, param1: globalAndroid.database.Cursor): number;
							public getItemViewType(param0: number): number;
							public swapCursor(param0: globalAndroid.database.Cursor): void;
							public getCursor(): globalAndroid.database.Cursor;
							public onBindViewHolder(param0: any, param1: globalAndroid.database.Cursor): void;
							public getItemCount(): number;
							public onBindViewHolder(param0: any, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export module internal {
				export module ui {
					export module widget {
						export class AlbumsSpinner {
							public static class: java.lang.Class<com.zhihu.matisse.internal.ui.widget.AlbumsSpinner>;
							public setAdapter(param0: globalAndroid.widget.CursorAdapter): void;
							public setPopupAnchorView(param0: globalAndroid.view.View): void;
							public setOnItemSelectedListener(param0: globalAndroid.widget.AdapterView.OnItemSelectedListener): void;
							public setSelectedTextView(param0: globalAndroid.widget.TextView): void;
							public constructor(param0: globalAndroid.content.Context);
							public setSelection(param0: globalAndroid.content.Context, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export module internal {
				export module ui {
					export module widget {
						export class CheckRadioView {
							public static class: java.lang.Class<com.zhihu.matisse.internal.ui.widget.CheckRadioView>;
							public setColor(param0: number): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public setChecked(param0: boolean): void;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export module internal {
				export module ui {
					export module widget {
						export class CheckView {
							public static class: java.lang.Class<com.zhihu.matisse.internal.ui.widget.CheckView>;
							public static UNCHECKED: number;
							public onMeasure(param0: number, param1: number): void;
							public onDraw(param0: globalAndroid.graphics.Canvas): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public setChecked(param0: boolean): void;
							public setCountable(param0: boolean): void;
							public setEnabled(param0: boolean): void;
							public setCheckedNum(param0: number): void;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export module internal {
				export module ui {
					export module widget {
						export class IncapableDialog {
							public static class: java.lang.Class<com.zhihu.matisse.internal.ui.widget.IncapableDialog>;
							public static EXTRA_TITLE: string;
							public static EXTRA_MESSAGE: string;
							public constructor();
							public static newInstance(param0: string, param1: string): com.zhihu.matisse.internal.ui.widget.IncapableDialog;
							public onCreateDialog(param0: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export module internal {
				export module ui {
					export module widget {
						export class MediaGrid extends com.zhihu.matisse.internal.ui.widget.SquareFrameLayout {
							public static class: java.lang.Class<com.zhihu.matisse.internal.ui.widget.MediaGrid>;
							public removeOnMediaGridClickListener(): void;
							public onClick(param0: globalAndroid.view.View): void;
							public preBindMedia(param0: com.zhihu.matisse.internal.ui.widget.MediaGrid.PreBindInfo): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public setOnMediaGridClickListener(param0: com.zhihu.matisse.internal.ui.widget.MediaGrid.OnMediaGridClickListener): void;
							public setCheckEnabled(param0: boolean): void;
							public setChecked(param0: boolean): void;
							public bindMedia(param0: com.zhihu.matisse.internal.entity.Item): void;
							public getMedia(): com.zhihu.matisse.internal.entity.Item;
							public setCheckedNum(param0: number): void;
							public constructor(param0: globalAndroid.content.Context);
						}
						export module MediaGrid {
							export class OnMediaGridClickListener {
								public static class: java.lang.Class<com.zhihu.matisse.internal.ui.widget.MediaGrid.OnMediaGridClickListener>;
								/**
								 * Constructs a new instance of the com.zhihu.matisse.internal.ui.widget.MediaGrid$OnMediaGridClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onThumbnailClicked(param0: globalAndroid.widget.ImageView, param1: com.zhihu.matisse.internal.entity.Item, param2: globalAndroid.support.v7.widget.RecyclerView.ViewHolder): void;
									onCheckViewClicked(param0: com.zhihu.matisse.internal.ui.widget.CheckView, param1: com.zhihu.matisse.internal.entity.Item, param2: globalAndroid.support.v7.widget.RecyclerView.ViewHolder): void;
								});
								public constructor();
								public onCheckViewClicked(param0: com.zhihu.matisse.internal.ui.widget.CheckView, param1: com.zhihu.matisse.internal.entity.Item, param2: globalAndroid.support.v7.widget.RecyclerView.ViewHolder): void;
								public onThumbnailClicked(param0: globalAndroid.widget.ImageView, param1: com.zhihu.matisse.internal.entity.Item, param2: globalAndroid.support.v7.widget.RecyclerView.ViewHolder): void;
							}
							export class PreBindInfo {
								public static class: java.lang.Class<com.zhihu.matisse.internal.ui.widget.MediaGrid.PreBindInfo>;
								public constructor(param0: number, param1: globalAndroid.graphics.drawable.Drawable, param2: boolean, param3: globalAndroid.support.v7.widget.RecyclerView.ViewHolder);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export module internal {
				export module ui {
					export module widget {
						export class MediaGridInset {
							public static class: java.lang.Class<com.zhihu.matisse.internal.ui.widget.MediaGridInset>;
							public constructor(param0: number, param1: number, param2: boolean);
							public getItemOffsets(param0: globalAndroid.graphics.Rect, param1: globalAndroid.view.View, param2: globalAndroid.support.v7.widget.RecyclerView, param3: globalAndroid.support.v7.widget.RecyclerView.State): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export module internal {
				export module ui {
					export module widget {
						export class PreviewViewPager {
							public static class: java.lang.Class<com.zhihu.matisse.internal.ui.widget.PreviewViewPager>;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public canScroll(param0: globalAndroid.view.View, param1: boolean, param2: number, param3: number, param4: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export module internal {
				export module ui {
					export module widget {
						export class RoundedRectangleImageView {
							public static class: java.lang.Class<com.zhihu.matisse.internal.ui.widget.RoundedRectangleImageView>;
							public onMeasure(param0: number, param1: number): void;
							public onDraw(param0: globalAndroid.graphics.Canvas): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export module internal {
				export module ui {
					export module widget {
						export class SquareFrameLayout {
							public static class: java.lang.Class<com.zhihu.matisse.internal.ui.widget.SquareFrameLayout>;
							public onMeasure(param0: number, param1: number): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export module internal {
				export module utils {
					export class ExifInterfaceCompat {
						public static class: java.lang.Class<com.zhihu.matisse.internal.utils.ExifInterfaceCompat>;
						public static getExifDateTimeInMillis(param0: string): number;
						public static getExifOrientation(param0: string): number;
						public static newInstance(param0: string): globalAndroid.media.ExifInterface;
					}
				}
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export module internal {
				export module utils {
					export class MediaStoreCompat {
						public static class: java.lang.Class<com.zhihu.matisse.internal.utils.MediaStoreCompat>;
						public constructor(param0: globalAndroid.app.Activity);
						public getCurrentPhotoUri(): globalAndroid.net.Uri;
						public static hasCameraFeature(param0: globalAndroid.content.Context): boolean;
						public setCaptureStrategy(param0: com.zhihu.matisse.internal.entity.CaptureStrategy): void;
						public dispatchCaptureIntent(param0: globalAndroid.content.Context, param1: number): void;
						public constructor(param0: globalAndroid.app.Activity, param1: globalAndroid.support.v4.app.Fragment);
						public getCurrentPhotoPath(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export module internal {
				export module utils {
					export class PathUtils {
						public static class: java.lang.Class<com.zhihu.matisse.internal.utils.PathUtils>;
						public static isMediaDocument(param0: globalAndroid.net.Uri): boolean;
						public constructor();
						public static isExternalStorageDocument(param0: globalAndroid.net.Uri): boolean;
						public static isDownloadsDocument(param0: globalAndroid.net.Uri): boolean;
						public static getDataColumn(param0: globalAndroid.content.Context, param1: globalAndroid.net.Uri, param2: string, param3: native.Array<string>): string;
						public static getPath(param0: globalAndroid.content.Context, param1: globalAndroid.net.Uri): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export module internal {
				export module utils {
					export class PhotoMetadataUtils {
						public static class: java.lang.Class<com.zhihu.matisse.internal.utils.PhotoMetadataUtils>;
						public static getBitmapSize(param0: globalAndroid.net.Uri, param1: globalAndroid.app.Activity): globalAndroid.graphics.Point;
						public static getBitmapBound(param0: globalAndroid.content.ContentResolver, param1: globalAndroid.net.Uri): globalAndroid.graphics.Point;
						public static getPath(param0: globalAndroid.content.ContentResolver, param1: globalAndroid.net.Uri): string;
						public static getSizeInMB(param0: number): number;
						public static isAcceptable(param0: globalAndroid.content.Context, param1: com.zhihu.matisse.internal.entity.Item): com.zhihu.matisse.internal.entity.IncapableCause;
						public static getPixelsCount(param0: globalAndroid.content.ContentResolver, param1: globalAndroid.net.Uri): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export module internal {
				export module utils {
					export class Platform {
						public static class: java.lang.Class<com.zhihu.matisse.internal.utils.Platform>;
						public constructor();
						public static hasICS(): boolean;
						public static hasKitKat(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export module internal {
				export module utils {
					export class UIUtils {
						public static class: java.lang.Class<com.zhihu.matisse.internal.utils.UIUtils>;
						public constructor();
						public static spanCount(param0: globalAndroid.content.Context, param1: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export module listener {
				export class OnCheckedListener {
					public static class: java.lang.Class<com.zhihu.matisse.listener.OnCheckedListener>;
					/**
					 * Constructs a new instance of the com.zhihu.matisse.listener.OnCheckedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCheck(param0: boolean): void;
					});
					public constructor();
					public onCheck(param0: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export module listener {
				export class OnFragmentInteractionListener {
					public static class: java.lang.Class<com.zhihu.matisse.listener.OnFragmentInteractionListener>;
					/**
					 * Constructs a new instance of the com.zhihu.matisse.listener.OnFragmentInteractionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onClick(): void;
					});
					public constructor();
					public onClick(): void;
				}
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export module listener {
				export class OnSelectedListener {
					public static class: java.lang.Class<com.zhihu.matisse.listener.OnSelectedListener>;
					/**
					 * Constructs a new instance of the com.zhihu.matisse.listener.OnSelectedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSelected(param0: java.util.List<globalAndroid.net.Uri>, param1: java.util.List<string>): void;
					});
					public constructor();
					public onSelected(param0: java.util.List<globalAndroid.net.Uri>, param1: java.util.List<string>): void;
				}
			}
		}
	}
}

declare module com {
	export module zhihu {
		export module matisse {
			export module ui {
				export class MatisseActivity implements com.zhihu.matisse.internal.model.AlbumCollection.AlbumCallbacks, com.zhihu.matisse.internal.ui.MediaSelectionFragment.SelectionProvider, com.zhihu.matisse.internal.ui.adapter.AlbumMediaAdapter.CheckStateListener, com.zhihu.matisse.internal.ui.adapter.AlbumMediaAdapter.OnMediaClickListener, com.zhihu.matisse.internal.ui.adapter.AlbumMediaAdapter.OnPhotoCapture {
					public static class: java.lang.Class<com.zhihu.matisse.ui.MatisseActivity>;
					public static EXTRA_RESULT_SELECTION: string;
					public static EXTRA_RESULT_SELECTION_PATH: string;
					public static EXTRA_RESULT_ORIGINAL_ENABLE: string;
					public static CHECK_STATE: string;
					public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public onBackPressed(): void;
					public onNothingSelected(param0: globalAndroid.widget.AdapterView<any>): void;
					public onDestroy(): void;
					public onMediaClick(param0: com.zhihu.matisse.internal.entity.Album, param1: com.zhihu.matisse.internal.entity.Item, param2: number): void;
					public onItemSelected(param0: globalAndroid.widget.AdapterView<any>, param1: globalAndroid.view.View, param2: number, param3: number): void;
					public onAlbumReset(): void;
					public provideSelectedItemCollection(): com.zhihu.matisse.internal.model.SelectedItemCollection;
					public onAlbumLoad(param0: globalAndroid.database.Cursor): void;
					public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
					public constructor();
					public onClick(param0: globalAndroid.view.View): void;
					public capture(): void;
					public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
					public onUpdate(): void;
				}
			}
		}
	}
}

//Generics information:
//com.zhihu.matisse.internal.ui.adapter.RecyclerViewCursorAdapter:1

