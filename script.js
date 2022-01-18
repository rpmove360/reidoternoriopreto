(function(){
    var script = {
 "defaultVRPointer": "laser",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "class": "Player",
 "scrollBarVisible": "rollOver",
 "start": "this.playAudioList([this.audio_5478BD9D_4777_7E45_41CF_06C1C789CB49]); this.init(); this.syncPlaylists([this.playList_5396FF62_4771_7AFF_4192_1A9E30AF1050,this.mainPlayList])",
 "overflow": "visible",
 "layout": "absolute",
 "width": "100%",
 "children": [
  "this.MainViewer",
  {
   "scrollBarOpacity": 0.5,
   "left": 0,
   "class": "Container",
   "scrollBarVisible": "rollOver",
   "backgroundOpacity": 0,
   "right": 0,
   "children": [
    {
     "layout": "horizontal",
     "itemLabelFontWeight": "normal",
     "maxHeight": 600,
     "itemLabelGap": 5,
     "itemBorderRadius": 0,
     "backgroundOpacity": 0.2,
     "itemThumbnailHeight": 75,
     "class": "ThumbnailList",
     "scrollBarVisible": "rollOver",
     "maxWidth": 800,
     "itemLabelFontSize": 14,
     "itemVerticalAlign": "middle",
     "itemThumbnailScaleMode": "fit_outside",
     "itemLabelPosition": "bottom",
     "borderRadius": 5,
     "itemPaddingLeft": 3,
     "scrollBarMargin": 2,
     "paddingLeft": 20,
     "paddingRight": 20,
     "scrollBarWidth": 10,
     "verticalAlign": "top",
     "backgroundColorRatios": [
      0
     ],
     "propagateClick": false,
     "itemThumbnailShadowBlurRadius": 4,
     "itemBackgroundColorDirection": "vertical",
     "minHeight": 0,
     "itemThumbnailShadow": true,
     "itemThumbnailShadowSpread": 1,
     "itemOpacity": 1,
     "itemThumbnailWidth": 100,
     "itemLabelFontColor": "#FFFFFF",
     "backgroundColor": [
      "#000000"
     ],
     "playList": "this.playList_5396FF62_4771_7AFF_4192_1A9E30AF1050",
     "minWidth": 0,
     "itemBackgroundColor": [],
     "gap": 10,
     "itemThumbnailOpacity": 1,
     "borderSize": 0,
     "paddingBottom": 10,
     "itemPaddingBottom": 3,
     "itemHorizontalAlign": "center",
     "itemPaddingTop": 3,
     "selectedItemLabelFontWeight": "bold",
     "itemPaddingRight": 3,
     "itemThumbnailShadowColor": "#000000",
     "itemLabelFontStyle": "normal",
     "itemBackgroundColorRatios": [],
     "paddingTop": 10,
     "itemLabelHorizontalAlign": "center",
     "backgroundColorDirection": "vertical",
     "itemThumbnailShadowOpacity": 0.8,
     "itemMode": "normal",
     "scrollBarColor": "#FFFFFF",
     "data": {
      "name": "ThumbnailList488"
     },
     "itemThumbnailShadowHorizontalLength": 3,
     "itemThumbnailShadowVerticalLength": 3,
     "shadow": false,
     "horizontalAlign": "left",
     "itemThumbnailBorderRadius": 5,
     "itemLabelTextDecoration": "none",
     "itemBackgroundOpacity": 0,
     "itemLabelFontFamily": "Arial",
     "scrollBarOpacity": 0.5
    }
   ],
   "scrollBarMargin": 2,
   "paddingRight": 0,
   "verticalAlign": "bottom",
   "paddingLeft": 0,
   "borderRadius": 0,
   "overflow": "visible",
   "minHeight": 20,
   "scrollBarWidth": 10,
   "propagateClick": false,
   "bottom": 0,
   "height": 200,
   "minWidth": 20,
   "paddingTop": 0,
   "paddingBottom": 0,
   "gap": 10,
   "borderSize": 0,
   "contentOpaque": false,
   "scrollBarColor": "#000000",
   "data": {
    "name": "Container487"
   },
   "shadow": false,
   "horizontalAlign": "center",
   "layout": "horizontal"
  }
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "propagateClick": false,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.7,
 "minWidth": 20,
 "definitions": [{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_61008F71_6B15_8E0F_41CD_D7307639E10F_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_61008F71_6B15_8E0F_41CD_D7307639E10F_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_61008F71_6B15_8E0F_41CD_D7307639E10F_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_61008F71_6B15_8E0F_41CD_D7307639E10F_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_61008F71_6B15_8E0F_41CD_D7307639E10F_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_61008F71_6B15_8E0F_41CD_D7307639E10F_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_61008F71_6B15_8E0F_41CD_D7307639E10F_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_61008F71_6B15_8E0F_41CD_D7307639E10F_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_61008F71_6B15_8E0F_41CD_D7307639E10F_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_61008F71_6B15_8E0F_41CD_D7307639E10F_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_61008F71_6B15_8E0F_41CD_D7307639E10F_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_61008F71_6B15_8E0F_41CD_D7307639E10F_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_61008F71_6B15_8E0F_41CD_D7307639E10F_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "REI DO TERNO 2",
 "hfovMin": "150%",
 "id": "panorama_61008F71_6B15_8E0F_41CD_D7307639E10F",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -34.83,
   "distance": 1,
   "backwardYaw": -38.92,
   "panorama": "this.panorama_61C45684_6B15_BE14_41D5_791E5FAE2B5C"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 102.22,
   "distance": 1,
   "backwardYaw": -137.51,
   "panorama": "this.panorama_61754E16_6B15_8E34_41C6_9DD0DCD70E3F"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 42.08,
   "distance": 1,
   "backwardYaw": -72.46,
   "panorama": "this.panorama_610F287A_6B15_92FC_41D6_F02AF0C7CBE6"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -134.23,
   "distance": 1,
   "backwardYaw": 9.78,
   "panorama": "this.panorama_671470FA_6B15_73FC_41D0_A007A184F0A2"
  }
 ],
 "overlays": [
  "this.overlay_61009F71_6B15_8E0F_41D8_B9930799EC37",
  "this.overlay_6100AF71_6B15_8E0F_41BD_4DC762485ADF",
  "this.overlay_6100BF71_6B15_8E0F_419B_614DD03A221D",
  "this.overlay_6100CF71_6B15_8E0F_41BF_8C381C14C1AE"
 ],
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_61008F71_6B15_8E0F_41CD_D7307639E10F_t.jpg",
 "hfovMax": 150
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 150,
  "yaw": -77.78,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_66C92A08_6B1C_961D_4196_C76BB3B6E160",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_671470FA_6B15_73FC_41D0_A007A184F0A2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_671470FA_6B15_73FC_41D0_A007A184F0A2_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_61008F71_6B15_8E0F_41CD_D7307639E10F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_61008F71_6B15_8E0F_41CD_D7307639E10F_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_610F287A_6B15_92FC_41D6_F02AF0C7CBE6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_610F287A_6B15_92FC_41D6_F02AF0C7CBE6_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_61E31F7F_6B15_8EF4_41A2_AF87ECAD1DB2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_61E31F7F_6B15_8EF4_41A2_AF87ECAD1DB2_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_61C45684_6B15_BE14_41D5_791E5FAE2B5C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_61C45684_6B15_BE14_41D5_791E5FAE2B5C_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_61754E16_6B15_8E34_41C6_9DD0DCD70E3F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_61754E16_6B15_8E34_41C6_9DD0DCD70E3F_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_618F05E6_6B15_9214_41C3_590302E5CDD7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_618F05E6_6B15_9214_41C3_590302E5CDD7_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_6051BCEB_6B15_921C_41D6_D95CAEE8FF12",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6051BCEB_6B15_921C_41D6_D95CAEE8FF12_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_601E73F0_6B15_F60D_41D0_73E7821764CA",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_601E73F0_6B15_F60D_41D0_73E7821764CA_camera"
  }
 ],
 "id": "mainPlayList"
},
{
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_rotation"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 150,
  "yaw": 161.95,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_665F690E_6B1C_9215_41D4_8FD82F90B986",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 150,
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_61754E16_6B15_8E34_41C6_9DD0DCD70E3F_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_61754E16_6B15_8E34_41C6_9DD0DCD70E3F_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_61754E16_6B15_8E34_41C6_9DD0DCD70E3F_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_61754E16_6B15_8E34_41C6_9DD0DCD70E3F_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_61754E16_6B15_8E34_41C6_9DD0DCD70E3F_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_61754E16_6B15_8E34_41C6_9DD0DCD70E3F_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_61754E16_6B15_8E34_41C6_9DD0DCD70E3F_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_61754E16_6B15_8E34_41C6_9DD0DCD70E3F_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_61754E16_6B15_8E34_41C6_9DD0DCD70E3F_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_61754E16_6B15_8E34_41C6_9DD0DCD70E3F_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_61754E16_6B15_8E34_41C6_9DD0DCD70E3F_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_61754E16_6B15_8E34_41C6_9DD0DCD70E3F_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_61754E16_6B15_8E34_41C6_9DD0DCD70E3F_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_61754E16_6B15_8E34_41C6_9DD0DCD70E3F_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "REI DO TERNO 6",
 "hfovMin": "150%",
 "id": "panorama_61754E16_6B15_8E34_41C6_9DD0DCD70E3F",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -18.05,
   "distance": 1,
   "backwardYaw": 168.08,
   "panorama": "this.panorama_618F05E6_6B15_9214_41C3_590302E5CDD7"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -137.51,
   "distance": 1,
   "backwardYaw": 102.22,
   "panorama": "this.panorama_61008F71_6B15_8E0F_41CD_D7307639E10F"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -137.51,
   "distance": 1,
   "backwardYaw": 102.22,
   "panorama": "this.panorama_61008F71_6B15_8E0F_41CD_D7307639E10F"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -18.05,
   "distance": 1,
   "backwardYaw": 102.22,
   "panorama": "this.panorama_61008F71_6B15_8E0F_41CD_D7307639E10F"
  }
 ],
 "overlays": [
  "this.overlay_61755E16_6B15_8E34_41D5_1B2DBAEAA53D",
  "this.overlay_6175BE16_6B15_8E34_41D3_333778F2AC68"
 ],
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_61754E16_6B15_8E34_41C6_9DD0DCD70E3F_t.jpg",
 "hfovMax": 150
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "displayOriginPosition": {
  "class": "RotationalCameraDisplayPosition",
  "hfov": 165,
  "yaw": 0,
  "stereographicFactor": 1,
  "pitch": -90
 },
 "id": "panorama_671470FA_6B15_73FC_41D0_A007A184F0A2_camera",
 "displayMovements": [
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 2100,
   "easing": "linear"
  },
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 3000,
   "targetPitch": 0,
   "targetStereographicFactor": 0,
   "easing": "cubic_in_out"
  }
 ],
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 150,
  "yaw": 121.86,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_66ABB9CA_6B1C_921C_41D4_FA81AB28FEA6",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_601E73F0_6B15_F60D_41D0_73E7821764CA_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_601E73F0_6B15_F60D_41D0_73E7821764CA_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_601E73F0_6B15_F60D_41D0_73E7821764CA_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_601E73F0_6B15_F60D_41D0_73E7821764CA_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_601E73F0_6B15_F60D_41D0_73E7821764CA_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_601E73F0_6B15_F60D_41D0_73E7821764CA_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_601E73F0_6B15_F60D_41D0_73E7821764CA_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_601E73F0_6B15_F60D_41D0_73E7821764CA_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_601E73F0_6B15_F60D_41D0_73E7821764CA_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_601E73F0_6B15_F60D_41D0_73E7821764CA_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_601E73F0_6B15_F60D_41D0_73E7821764CA_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_601E73F0_6B15_F60D_41D0_73E7821764CA_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_601E73F0_6B15_F60D_41D0_73E7821764CA_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "REI DO TERNO 9",
 "hfovMin": "150%",
 "id": "panorama_601E73F0_6B15_F60D_41D0_73E7821764CA",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 167.27,
   "distance": 1,
   "backwardYaw": -58.14,
   "panorama": "this.panorama_6051BCEB_6B15_921C_41D6_D95CAEE8FF12"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_61008F71_6B15_8E0F_41CD_D7307639E10F"
  }
 ],
 "overlays": [
  "this.overlay_601E13F0_6B15_F60D_41DA_7596333282D5"
 ],
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_601E73F0_6B15_F60D_41D0_73E7821764CA_t.jpg",
 "hfovMax": 150
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 150,
  "yaw": -137.92,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_65145A76_6B1C_96F4_41D2_7B95396BC5D4",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_671470FA_6B15_73FC_41D0_A007A184F0A2",
   "begin": "this.setEndToItemIndex(this.playList_5396FF62_4771_7AFF_4192_1A9E30AF1050, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_671470FA_6B15_73FC_41D0_A007A184F0A2_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_61008F71_6B15_8E0F_41CD_D7307639E10F",
   "begin": "this.setEndToItemIndex(this.playList_5396FF62_4771_7AFF_4192_1A9E30AF1050, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_61008F71_6B15_8E0F_41CD_D7307639E10F_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_610F287A_6B15_92FC_41D6_F02AF0C7CBE6",
   "begin": "this.setEndToItemIndex(this.playList_5396FF62_4771_7AFF_4192_1A9E30AF1050, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_610F287A_6B15_92FC_41D6_F02AF0C7CBE6_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_61E31F7F_6B15_8EF4_41A2_AF87ECAD1DB2",
   "begin": "this.setEndToItemIndex(this.playList_5396FF62_4771_7AFF_4192_1A9E30AF1050, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_61E31F7F_6B15_8EF4_41A2_AF87ECAD1DB2_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_61C45684_6B15_BE14_41D5_791E5FAE2B5C",
   "begin": "this.setEndToItemIndex(this.playList_5396FF62_4771_7AFF_4192_1A9E30AF1050, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_61C45684_6B15_BE14_41D5_791E5FAE2B5C_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_61754E16_6B15_8E34_41C6_9DD0DCD70E3F",
   "begin": "this.setEndToItemIndex(this.playList_5396FF62_4771_7AFF_4192_1A9E30AF1050, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_61754E16_6B15_8E34_41C6_9DD0DCD70E3F_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_618F05E6_6B15_9214_41C3_590302E5CDD7",
   "begin": "this.setEndToItemIndex(this.playList_5396FF62_4771_7AFF_4192_1A9E30AF1050, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_618F05E6_6B15_9214_41C3_590302E5CDD7_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_6051BCEB_6B15_921C_41D6_D95CAEE8FF12",
   "begin": "this.setEndToItemIndex(this.playList_5396FF62_4771_7AFF_4192_1A9E30AF1050, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6051BCEB_6B15_921C_41D6_D95CAEE8FF12_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_601E73F0_6B15_F60D_41D0_73E7821764CA",
   "begin": "this.setEndToItemIndex(this.playList_5396FF62_4771_7AFF_4192_1A9E30AF1050, 8, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_601E73F0_6B15_F60D_41D0_73E7821764CA_camera"
  }
 ],
 "id": "playList_5396FF62_4771_7AFF_4192_1A9E30AF1050"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 150,
  "yaw": -11.92,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_66D919E9_6B1C_921C_41CB_AE3543E4C347",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 150,
  "yaw": -77.78,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_66F90A18_6B1C_963C_41D3_B7F9EFBF6B2E",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_618F05E6_6B15_9214_41C3_590302E5CDD7_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_618F05E6_6B15_9214_41C3_590302E5CDD7_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_618F05E6_6B15_9214_41C3_590302E5CDD7_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_618F05E6_6B15_9214_41C3_590302E5CDD7_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_618F05E6_6B15_9214_41C3_590302E5CDD7_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_618F05E6_6B15_9214_41C3_590302E5CDD7_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_618F05E6_6B15_9214_41C3_590302E5CDD7_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_618F05E6_6B15_9214_41C3_590302E5CDD7_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_618F05E6_6B15_9214_41C3_590302E5CDD7_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_618F05E6_6B15_9214_41C3_590302E5CDD7_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_618F05E6_6B15_9214_41C3_590302E5CDD7_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_618F05E6_6B15_9214_41C3_590302E5CDD7_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_618F05E6_6B15_9214_41C3_590302E5CDD7_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "REI DO TERNO 7",
 "hfovMin": "150%",
 "id": "panorama_618F05E6_6B15_9214_41C3_590302E5CDD7",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_61008F71_6B15_8E0F_41CD_D7307639E10F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_61008F71_6B15_8E0F_41CD_D7307639E10F"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 168.08,
   "distance": 1,
   "backwardYaw": -18.05,
   "panorama": "this.panorama_61754E16_6B15_8E34_41C6_9DD0DCD70E3F"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -115.83,
   "distance": 1,
   "backwardYaw": 141.9,
   "panorama": "this.panorama_6051BCEB_6B15_921C_41D6_D95CAEE8FF12"
  }
 ],
 "overlays": [
  "this.overlay_618F75E6_6B15_9214_41B4_DD003DCAFD40",
  "this.overlay_618F65E6_6B15_9214_41B8_1A272D72233A"
 ],
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_618F05E6_6B15_9214_41C3_590302E5CDD7_t.jpg",
 "hfovMax": 150
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 150,
  "yaw": 145.17,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_65226AD3_6B1C_9633_41BF_5D3CE96752C3",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 150,
  "yaw": -87.6,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_662E88EF_6B1C_9213_41D2_04727004CB33",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 150,
  "yaw": 107.54,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_668A798B_6B1C_9213_41C8_BE9E488F6FD7",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 150,
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_618F05E6_6B15_9214_41C3_590302E5CDD7_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_610F287A_6B15_92FC_41D6_F02AF0C7CBE6_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_610F287A_6B15_92FC_41D6_F02AF0C7CBE6_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_610F287A_6B15_92FC_41D6_F02AF0C7CBE6_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_610F287A_6B15_92FC_41D6_F02AF0C7CBE6_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_610F287A_6B15_92FC_41D6_F02AF0C7CBE6_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_610F287A_6B15_92FC_41D6_F02AF0C7CBE6_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_610F287A_6B15_92FC_41D6_F02AF0C7CBE6_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_610F287A_6B15_92FC_41D6_F02AF0C7CBE6_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_610F287A_6B15_92FC_41D6_F02AF0C7CBE6_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_610F287A_6B15_92FC_41D6_F02AF0C7CBE6_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_610F287A_6B15_92FC_41D6_F02AF0C7CBE6_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_610F287A_6B15_92FC_41D6_F02AF0C7CBE6_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_610F287A_6B15_92FC_41D6_F02AF0C7CBE6_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "REI DO TERNO 3",
 "hfovMin": "150%",
 "id": "panorama_610F287A_6B15_92FC_41D6_F02AF0C7CBE6",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 92.4,
   "distance": 1,
   "backwardYaw": 172.17,
   "panorama": "this.panorama_61E31F7F_6B15_8EF4_41A2_AF87ECAD1DB2"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -72.46,
   "distance": 1,
   "backwardYaw": 42.08,
   "panorama": "this.panorama_61008F71_6B15_8E0F_41CD_D7307639E10F"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -72.46,
   "distance": 1,
   "backwardYaw": 42.08,
   "panorama": "this.panorama_61008F71_6B15_8E0F_41CD_D7307639E10F"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 92.4,
   "distance": 1,
   "backwardYaw": 42.08,
   "panorama": "this.panorama_61008F71_6B15_8E0F_41CD_D7307639E10F"
  }
 ],
 "overlays": [
  "this.overlay_610F587A_6B15_92FC_4166_68161AF3C56C",
  "this.overlay_610F487A_6B15_92FC_41D9_DBB96D809B2F"
 ],
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_610F287A_6B15_92FC_41D6_F02AF0C7CBE6_t.jpg",
 "hfovMax": 150
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 150,
  "yaw": -12.73,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_663148D0_6B1C_920C_418E_D1665912B7F8",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 150,
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_601E73F0_6B15_F60D_41D0_73E7821764CA_camera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_6051BCEB_6B15_921C_41D6_D95CAEE8FF12_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_6051BCEB_6B15_921C_41D6_D95CAEE8FF12_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_6051BCEB_6B15_921C_41D6_D95CAEE8FF12_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_6051BCEB_6B15_921C_41D6_D95CAEE8FF12_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_6051BCEB_6B15_921C_41D6_D95CAEE8FF12_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_6051BCEB_6B15_921C_41D6_D95CAEE8FF12_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_6051BCEB_6B15_921C_41D6_D95CAEE8FF12_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_6051BCEB_6B15_921C_41D6_D95CAEE8FF12_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6051BCEB_6B15_921C_41D6_D95CAEE8FF12_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_6051BCEB_6B15_921C_41D6_D95CAEE8FF12_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_6051BCEB_6B15_921C_41D6_D95CAEE8FF12_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_6051BCEB_6B15_921C_41D6_D95CAEE8FF12_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_6051BCEB_6B15_921C_41D6_D95CAEE8FF12_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "REI DO TERNO 8",
 "hfovMin": "150%",
 "id": "panorama_6051BCEB_6B15_921C_41D6_D95CAEE8FF12",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_61008F71_6B15_8E0F_41CD_D7307639E10F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_61008F71_6B15_8E0F_41CD_D7307639E10F"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 141.9,
   "distance": 1,
   "backwardYaw": -115.83,
   "panorama": "this.panorama_618F05E6_6B15_9214_41C3_590302E5CDD7"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -58.14,
   "distance": 1,
   "backwardYaw": 167.27,
   "panorama": "this.panorama_601E73F0_6B15_F60D_41D0_73E7821764CA"
  }
 ],
 "overlays": [
  "this.overlay_60519CEB_6B15_921C_417C_D5FCE30EE25C",
  "this.overlay_60518CEB_6B15_921C_41D3_AA767C63A26C"
 ],
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6051BCEB_6B15_921C_41D6_D95CAEE8FF12_t.jpg",
 "hfovMax": 150
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_61E31F7F_6B15_8EF4_41A2_AF87ECAD1DB2_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_61E31F7F_6B15_8EF4_41A2_AF87ECAD1DB2_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_61E31F7F_6B15_8EF4_41A2_AF87ECAD1DB2_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_61E31F7F_6B15_8EF4_41A2_AF87ECAD1DB2_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_61E31F7F_6B15_8EF4_41A2_AF87ECAD1DB2_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_61E31F7F_6B15_8EF4_41A2_AF87ECAD1DB2_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_61E31F7F_6B15_8EF4_41A2_AF87ECAD1DB2_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_61E31F7F_6B15_8EF4_41A2_AF87ECAD1DB2_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_61E31F7F_6B15_8EF4_41A2_AF87ECAD1DB2_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_61E31F7F_6B15_8EF4_41A2_AF87ECAD1DB2_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_61E31F7F_6B15_8EF4_41A2_AF87ECAD1DB2_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_61E31F7F_6B15_8EF4_41A2_AF87ECAD1DB2_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_61E31F7F_6B15_8EF4_41A2_AF87ECAD1DB2_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "REI DO TERNO 4",
 "hfovMin": "150%",
 "id": "panorama_61E31F7F_6B15_8EF4_41A2_AF87ECAD1DB2",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_61008F71_6B15_8E0F_41CD_D7307639E10F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_61008F71_6B15_8E0F_41CD_D7307639E10F"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 172.17,
   "distance": 1,
   "backwardYaw": 92.4,
   "panorama": "this.panorama_610F287A_6B15_92FC_41D6_F02AF0C7CBE6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_61C45684_6B15_BE14_41D5_791E5FAE2B5C"
  }
 ],
 "overlays": [
  "this.overlay_61E33F7F_6B15_8EF4_41D3_31DC9CF6B5E7",
  "this.overlay_61E35F7F_6B15_8EF4_41BA_5370FDD288EE"
 ],
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_61E31F7F_6B15_8EF4_41A2_AF87ECAD1DB2_t.jpg",
 "hfovMax": 150
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 150,
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_6051BCEB_6B15_921C_41D6_D95CAEE8FF12_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 150,
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_61008F71_6B15_8E0F_41CD_D7307639E10F_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 150,
  "yaw": 141.08,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_666D595C_6B1C_9235_41C5_38564EB969C8",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 150,
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_61E31F7F_6B15_8EF4_41A2_AF87ECAD1DB2_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 150,
  "yaw": 145.17,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_65525AF3_6B1C_960C_41D4_39FBB9671431",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 150,
  "yaw": 64.17,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_660098C0_6B1C_920D_41CC_72F51A763733",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_61C45684_6B15_BE14_41D5_791E5FAE2B5C_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_61C45684_6B15_BE14_41D5_791E5FAE2B5C_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_61C45684_6B15_BE14_41D5_791E5FAE2B5C_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_61C45684_6B15_BE14_41D5_791E5FAE2B5C_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_61C45684_6B15_BE14_41D5_791E5FAE2B5C_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_61C45684_6B15_BE14_41D5_791E5FAE2B5C_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_61C45684_6B15_BE14_41D5_791E5FAE2B5C_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_61C45684_6B15_BE14_41D5_791E5FAE2B5C_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_61C45684_6B15_BE14_41D5_791E5FAE2B5C_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_61C45684_6B15_BE14_41D5_791E5FAE2B5C_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_61C45684_6B15_BE14_41D5_791E5FAE2B5C_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_61C45684_6B15_BE14_41D5_791E5FAE2B5C_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_61C45684_6B15_BE14_41D5_791E5FAE2B5C_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "REI DO TERNO 5",
 "hfovMin": "150%",
 "id": "panorama_61C45684_6B15_BE14_41D5_791E5FAE2B5C",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -38.92,
   "distance": 1,
   "backwardYaw": -34.83,
   "panorama": "this.panorama_61008F71_6B15_8E0F_41CD_D7307639E10F"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -38.92,
   "distance": 1,
   "backwardYaw": -34.83,
   "panorama": "this.panorama_61008F71_6B15_8E0F_41CD_D7307639E10F"
  }
 ],
 "overlays": [
  "this.overlay_61C4B684_6B15_BE14_41D6_8264CACE64C1"
 ],
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_61C45684_6B15_BE14_41D5_791E5FAE2B5C_t.jpg",
 "hfovMax": 150
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 150,
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_610F287A_6B15_92FC_41D6_F02AF0C7CBE6_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 150,
  "yaw": 45.77,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_667CA94D_6B1C_9214_41D7_3D094AF7CBD2",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 150,
  "yaw": 42.49,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_669A096C_6B1C_9214_41AE_0D2D43AED72E",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 150,
  "yaw": -137.92,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_65343AB4_6B1C_9675_41D1_90DA1A28E82C",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -170.22,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_66BBA9AB_6B1C_921C_41C0_4D13A9FE95AC",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 150,
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_61C45684_6B15_BE14_41D5_791E5FAE2B5C_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 150,
  "yaw": -7.83,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_66E6EA56_6B1C_9635_41BA_3D1BEAC527FC",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 150,
  "yaw": -137.92,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_65042A95_6B1C_9634_41B3_6F13500B655A",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 150,
  "yaw": -38.1,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_664CD92E_6B1C_9214_41C0_14DDD1A6B22B",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 150,
  "yaw": -77.78,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_66F69A37_6B1C_9673_41CD_F14D07CD9442",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_671470FA_6B15_73FC_41D0_A007A184F0A2_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_671470FA_6B15_73FC_41D0_A007A184F0A2_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_671470FA_6B15_73FC_41D0_A007A184F0A2_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_671470FA_6B15_73FC_41D0_A007A184F0A2_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_671470FA_6B15_73FC_41D0_A007A184F0A2_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_671470FA_6B15_73FC_41D0_A007A184F0A2_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_671470FA_6B15_73FC_41D0_A007A184F0A2_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_671470FA_6B15_73FC_41D0_A007A184F0A2_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_671470FA_6B15_73FC_41D0_A007A184F0A2_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_671470FA_6B15_73FC_41D0_A007A184F0A2_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_671470FA_6B15_73FC_41D0_A007A184F0A2_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "url": "media/panorama_671470FA_6B15_73FC_41D0_A007A184F0A2_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "url": "media/panorama_671470FA_6B15_73FC_41D0_A007A184F0A2_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "label": "REI DO TERNO",
 "hfovMin": "150%",
 "id": "panorama_671470FA_6B15_73FC_41D0_A007A184F0A2",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 9.78,
   "distance": 1,
   "backwardYaw": -134.23,
   "panorama": "this.panorama_61008F71_6B15_8E0F_41CD_D7307639E10F"
  }
 ],
 "overlays": [
  "this.overlay_6714A0FA_6B15_73FC_41BF_9DA506BACE5C"
 ],
 "partial": false,
 "class": "Panorama",
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_671470FA_6B15_73FC_41D0_A007A184F0A2_t.jpg",
 "hfovMax": 130
},
{
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_5478BD9D_4777_7E45_41CF_06C1C789CB49.ogg",
  "mp3Url": "media/audio_5478BD9D_4777_7E45_41CF_06C1C789CB49.mp3"
 },
 "autoplay": true,
 "id": "audio_5478BD9D_4777_7E45_41CF_06C1C789CB49",
 "data": {
  "label": "Casting Crowns - Nobody feat. Matthew West (Visual(MP3_128K)"
 }
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "class": "ViewerArea",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "width": "100%",
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "paddingBottom": 0,
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBorderColor": "#000000",
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 42.08,
   "hfov": 9.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_61008F71_6B15_8E0F_41CD_D7307639E10F_1_HS_0_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -19.12
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_610F287A_6B15_92FC_41D6_F02AF0C7CBE6, this.camera_668A798B_6B1C_9213_41C8_BE9E488F6FD7); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_67F72872_6B1C_920C_41CC_7D1540281869",
   "pitch": -19.12,
   "yaw": 42.08,
   "hfov": 9.41,
   "distance": 100
  }
 ],
 "id": "overlay_61009F71_6B15_8E0F_41D8_B9930799EC37",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -34.83,
   "hfov": 9.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_61008F71_6B15_8E0F_41CD_D7307639E10F_1_HS_1_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -16.67
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_61C45684_6B15_BE14_41D5_791E5FAE2B5C, this.camera_666D595C_6B1C_9235_41C5_38564EB969C8); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_67F75882_6B1C_920C_41CF_C21598BC0D8A",
   "pitch": -16.67,
   "yaw": -34.83,
   "hfov": 9.54,
   "distance": 100
  }
 ],
 "id": "overlay_6100AF71_6B15_8E0F_41BD_4DC762485ADF",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -134.23,
   "hfov": 9.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_61008F71_6B15_8E0F_41CD_D7307639E10F_1_HS_2_0_0_map.gif",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -25.1
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_671470FA_6B15_73FC_41D0_A007A184F0A2, this.camera_66BBA9AB_6B1C_921C_41C0_4D13A9FE95AC); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_67F69882_6B1C_920C_41D6_27C63308A56C",
   "pitch": -25.1,
   "yaw": -134.23,
   "hfov": 9.02,
   "distance": 100
  }
 ],
 "id": "overlay_6100BF71_6B15_8E0F_419B_614DD03A221D",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 102.22,
   "hfov": 9.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_61008F71_6B15_8E0F_41CD_D7307639E10F_1_HS_3_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -5.21
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_61754E16_6B15_8E34_41C6_9DD0DCD70E3F, this.camera_669A096C_6B1C_9214_41AE_0D2D43AED72E); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_67F63882_6B1C_920C_41A1_6B4C0999A6A7",
   "pitch": -5.21,
   "yaw": 102.22,
   "hfov": 9.92,
   "distance": 100
  }
 ],
 "id": "overlay_6100CF71_6B15_8E0F_41BF_8C381C14C1AE",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -137.51,
   "hfov": 9.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_61754E16_6B15_8E34_41C6_9DD0DCD70E3F_1_HS_0_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -21.37
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_61008F71_6B15_8E0F_41CD_D7307639E10F, this.camera_66F90A18_6B1C_963C_41D3_B7F9EFBF6B2E); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_67E81882_6B1C_920C_41D7_37282C963014",
   "pitch": -21.37,
   "yaw": -137.51,
   "hfov": 9.27,
   "distance": 100
  }
 ],
 "id": "overlay_61755E16_6B15_8E34_41D5_1B2DBAEAA53D",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -18.05,
   "hfov": 9.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_61754E16_6B15_8E34_41C6_9DD0DCD70E3F_1_HS_1_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -6.44
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_61008F71_6B15_8E0F_41CD_D7307639E10F, this.camera_66F69A37_6B1C_9673_41CD_F14D07CD9442); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_67E84882_6B1C_920C_41D7_D80F66AC17FF",
   "pitch": -6.44,
   "yaw": -18.05,
   "hfov": 9.9,
   "distance": 100
  }
 ],
 "id": "overlay_6175BE16_6B15_8E34_41D3_333778F2AC68",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 167.27,
   "hfov": 9.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_601E73F0_6B15_F60D_41D0_73E7821764CA_1_HS_0_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -7.67
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_67EBC882_6B1C_920C_41A3_6D1F2371BC78",
   "pitch": -7.67,
   "yaw": 167.27,
   "hfov": 9.87,
   "distance": 100
  }
 ],
 "id": "overlay_601E13F0_6B15_F60D_41DA_7596333282D5",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -115.83,
   "hfov": 9.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_618F05E6_6B15_9214_41C3_590302E5CDD7_1_HS_0_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -8.89
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_6051BCEB_6B15_921C_41D6_D95CAEE8FF12, this.camera_664CD92E_6B1C_9214_41C0_14DDD1A6B22B); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_67EBC882_6B1C_920C_41CE_F3824CED6AB5",
   "pitch": -8.89,
   "yaw": -115.83,
   "hfov": 9.84,
   "distance": 100
  }
 ],
 "id": "overlay_618F75E6_6B15_9214_41B4_DD003DCAFD40",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 168.08,
   "hfov": 9.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_618F05E6_6B15_9214_41C3_590302E5CDD7_1_HS_1_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -6.85
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_61754E16_6B15_8E34_41C6_9DD0DCD70E3F, this.camera_665F690E_6B1C_9215_41D4_8FD82F90B986); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_67EB6882_6B1C_920C_41CD_62CA4D241994",
   "pitch": -6.85,
   "yaw": 168.08,
   "hfov": 9.89,
   "distance": 100
  }
 ],
 "id": "overlay_618F65E6_6B15_9214_41B8_1A272D72233A",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -72.46,
   "hfov": 9.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_610F287A_6B15_92FC_41D6_F02AF0C7CBE6_1_HS_0_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -15.44
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_61008F71_6B15_8E0F_41CD_D7307639E10F, this.camera_65042A95_6B1C_9634_41B3_6F13500B655A); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_67F64882_6B1C_920C_41D7_17F21171A57C",
   "pitch": -15.44,
   "yaw": -72.46,
   "hfov": 9.6,
   "distance": 100
  }
 ],
 "id": "overlay_610F587A_6B15_92FC_4166_68161AF3C56C",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 92.4,
   "hfov": 9.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_610F287A_6B15_92FC_41D6_F02AF0C7CBE6_1_HS_1_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -7.26
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_61008F71_6B15_8E0F_41CD_D7307639E10F, this.camera_65343AB4_6B1C_9675_41D1_90DA1A28E82C); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_67E9D882_6B1C_920C_41B1_0B19F8F7E304",
   "pitch": -7.26,
   "yaw": 92.4,
   "hfov": 9.88,
   "distance": 100
  }
 ],
 "id": "overlay_610F487A_6B15_92FC_41D9_DBB96D809B2F",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 141.9,
   "hfov": 9.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6051BCEB_6B15_921C_41D6_D95CAEE8FF12_1_HS_0_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -2.5
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_618F05E6_6B15_9214_41C3_590302E5CDD7, this.camera_660098C0_6B1C_920D_41CC_72F51A763733); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_67EA9882_6B1C_920C_41B7_A0618BC3771E",
   "pitch": -2.5,
   "yaw": 141.9,
   "hfov": 9.95,
   "distance": 100
  }
 ],
 "id": "overlay_60519CEB_6B15_921C_417C_D5FCE30EE25C",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -58.14,
   "hfov": 9.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_6051BCEB_6B15_921C_41D6_D95CAEE8FF12_1_HS_1_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -15.44
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_601E73F0_6B15_F60D_41D0_73E7821764CA, this.camera_663148D0_6B1C_920C_418E_D1665912B7F8); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_67EBB882_6B1C_920C_418F_009A05CB616A",
   "pitch": -15.44,
   "yaw": -58.14,
   "hfov": 9.6,
   "distance": 100
  }
 ],
 "id": "overlay_60518CEB_6B15_921C_41D3_AA767C63A26C",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 172.17,
   "hfov": 9.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_61E31F7F_6B15_8EF4_41A2_AF87ECAD1DB2_1_HS_0_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -11.76
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_610F287A_6B15_92FC_41D6_F02AF0C7CBE6, this.camera_662E88EF_6B1C_9213_41D2_04727004CB33); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_67E91882_6B1C_920C_41DA_7F16CEE92465",
   "pitch": -11.76,
   "yaw": 172.17,
   "hfov": 9.75,
   "distance": 100
  }
 ],
 "id": "overlay_61E33F7F_6B15_8EF4_41D3_31DC9CF6B5E7",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -60.19,
   "hfov": 9.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_61E31F7F_6B15_8EF4_41A2_AF87ECAD1DB2_1_HS_1_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -6.38
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_67E8B882_6B1C_920C_41BA_C90368B16FFC",
   "pitch": -6.38,
   "yaw": -60.19,
   "hfov": 9.9,
   "distance": 100
  }
 ],
 "id": "overlay_61E35F7F_6B15_8EF4_41BA_5370FDD288EE",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -38.92,
   "hfov": 9.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_61C45684_6B15_BE14_41D5_791E5FAE2B5C_1_HS_0_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -14.42
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_61008F71_6B15_8E0F_41CD_D7307639E10F, this.camera_65525AF3_6B1C_960C_41D4_39FBB9671431); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_67E8F882_6B1C_920C_41C5_A348C5ACF702",
   "pitch": -14.42,
   "yaw": -38.92,
   "hfov": 9.65,
   "distance": 100
  }
 ],
 "id": "overlay_61C4B684_6B15_BE14_41D6_8264CACE64C1",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 9.78,
   "hfov": 9.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_671470FA_6B15_73FC_41D0_A007A184F0A2_1_HS_0_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -16.27
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_61008F71_6B15_8E0F_41CD_D7307639E10F, this.camera_667CA94D_6B1C_9214_41D7_3D094AF7CBD2); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_67F79872_6B1C_920C_41D4_1A99D63B3AEC",
   "pitch": -16.27,
   "yaw": 9.78,
   "hfov": 9.56,
   "distance": 100
  }
 ],
 "id": "overlay_6714A0FA_6B15_73FC_41BF_9DA506BACE5C",
 "data": {
  "label": "Arrow 05a"
 }
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_61008F71_6B15_8E0F_41CD_D7307639E10F_1_HS_0_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_67F72872_6B1C_920C_41CC_7D1540281869",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_61008F71_6B15_8E0F_41CD_D7307639E10F_1_HS_1_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_67F75882_6B1C_920C_41CF_C21598BC0D8A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_61008F71_6B15_8E0F_41CD_D7307639E10F_1_HS_2_0.png",
   "width": 520,
   "height": 360
  }
 ],
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_67F69882_6B1C_920C_41D6_27C63308A56C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_61008F71_6B15_8E0F_41CD_D7307639E10F_1_HS_3_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_67F63882_6B1C_920C_41A1_6B4C0999A6A7",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_61754E16_6B15_8E34_41C6_9DD0DCD70E3F_1_HS_0_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_67E81882_6B1C_920C_41D7_37282C963014",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_61754E16_6B15_8E34_41C6_9DD0DCD70E3F_1_HS_1_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_67E84882_6B1C_920C_41D7_D80F66AC17FF",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_601E73F0_6B15_F60D_41D0_73E7821764CA_1_HS_0_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_67EBC882_6B1C_920C_41A3_6D1F2371BC78",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_618F05E6_6B15_9214_41C3_590302E5CDD7_1_HS_0_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_67EBC882_6B1C_920C_41CE_F3824CED6AB5",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_618F05E6_6B15_9214_41C3_590302E5CDD7_1_HS_1_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_67EB6882_6B1C_920C_41CD_62CA4D241994",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_610F287A_6B15_92FC_41D6_F02AF0C7CBE6_1_HS_0_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_67F64882_6B1C_920C_41D7_17F21171A57C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_610F287A_6B15_92FC_41D6_F02AF0C7CBE6_1_HS_1_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_67E9D882_6B1C_920C_41B1_0B19F8F7E304",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_6051BCEB_6B15_921C_41D6_D95CAEE8FF12_1_HS_0_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_67EA9882_6B1C_920C_41B7_A0618BC3771E",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_6051BCEB_6B15_921C_41D6_D95CAEE8FF12_1_HS_1_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_67EBB882_6B1C_920C_418F_009A05CB616A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_61E31F7F_6B15_8EF4_41A2_AF87ECAD1DB2_1_HS_0_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_67E91882_6B1C_920C_41DA_7F16CEE92465",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_61E31F7F_6B15_8EF4_41A2_AF87ECAD1DB2_1_HS_1_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_67E8B882_6B1C_920C_41BA_C90368B16FFC",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_61C45684_6B15_BE14_41D5_791E5FAE2B5C_1_HS_0_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_67E8F882_6B1C_920C_41C5_A348C5ACF702",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_671470FA_6B15_73FC_41D0_A007A184F0A2_1_HS_0_0.png",
   "width": 480,
   "height": 540
  }
 ],
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_67F79872_6B1C_920C_41D4_1A99D63B3AEC",
 "rowCount": 6,
 "colCount": 4
}],
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "registerKey": function(key, value){  window[key] = value; },
  "unregisterKey": function(key){  delete window[key]; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getKey": function(key){  return window[key]; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "existsKey": function(key){  return key in window; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; }
 },
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player485"
 },
 "mouseWheelEnabled": true,
 "shadow": false,
 "downloadEnabled": false,
 "horizontalAlign": "left",
 "gap": 10
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
