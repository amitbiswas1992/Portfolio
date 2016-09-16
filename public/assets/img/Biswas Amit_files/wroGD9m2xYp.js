if (self.CavalryLogger) { CavalryLogger.start_js(["0\/BMC"]); }

__d("ProfileTabConst",[],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={ALBUM:"album",ALBUMS:"albums",ALL_ACTIVITY:"allactivity",APPROVAL:"approve",APPS:"apps",BOXES:"box_3",COMMERCE:"shop",DEALS:"deals",DRAFT_NOTES:"notes_drafts",EVENTS:"events",FAVORITES:"favorites",FUNDRAISERS:"fundraisers",FOLLOWERS:"followers",FOLLOWING:"following",FRIENDS:"friends",FRIENDS_MUTUAL:"friends_mutual",GROUPS:"groups",GROUPS_MUTUAL:"groups_mutual",INFO:"info",LIKES:"likes",LOCATIONS:"locations",MAP:"map",MEMORIAL_CONTACT:"legacy_contact",MY_NOTES:"notes_my_notes",NEARBY:"nearby",NOTES:"notes",OVERVIEW:"about",PAST_EVENTS:"pe",PERSONALITY_QUESTIONS:"personality_questions",PHOTOS:"photos",PHOTOS_ALBUM:"media_set",PHOTOS_ALBUMS:"photos_albums",PHOTOS_BY_OTHERS:"photos_by_others",PHOTOS_STREAM:"photos_stream",PHOTOS_SYNCED:"photos_synced",POSTS:"posts",POSTS_OTHERS:"posts_to_page",RECIPES:"recipes",RESUME:"resume",REVIEWS:"reviews",SAVED_FOR_LATER:"saved",SPORTS:"sports",TAGGED_NOTES:"notes_tagged",TIMELINE:"timeline",VIDEOS:"videos",WALL:"wall",WALL_ADMIN:"wall_admin",WIKIPEDIA:"wiki",PAGE_GETTING_STARTED:"page_getting_started",PAGE_MAP:"page_map",PAGE_MENU:"menu",PAGE_BOOK_PREVIEW:"book_preview",PAGE_PRODUCTS:"products",PAGE_SERVICES:"services",PAGES_CONTENT_TAB:"content_tab",PAGE_FAN_QUESTIONS:"questions",PAGES_REACTION_SANDBOX:"reaction_sandbox",PAGE_OFFERS:"offers",PAGE_JOB_PERMALINK:"page_job_permalink",HOME:"home",ISSUES:"issues",PAGE_JOBS:"jobs",OG_APP_URL_PREFIX:"app_",OG_APPID_PREFIX:"og_app_",OG_NAMESPACE_PREFIX:"og_ns_",OG_BOOKS:"books",OG_FITNESS:"fitness",OG_GAMES:"games",OG_MOVIES:"movies",OG_MUSIC:"music",OG_NEWS:"news",OG_TV_SHOWS:"tv",OG_VIDEO:"video"};}),null);
__d("VideoPlayerReason",[],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={AUTOPLAY:"autoplay_initiated",USER:"user_initiated",PAGE_VISIBILITY:"page_visibility_initiated",SEEK:"seek_initiated",LOOP:"loop_initiated",EMBEDDED_VIDEO_API:"embedded_video_api_initiated",CONNECTION:"host-connection-error",VIDEO_DATA_REPLACED:"video_data_replaced",VOD_NOT_READY:"vod_not_ready",VIDEO_DATA_SWITCH:"video_data_switch",FALLBACK_MODE:"fallback_mode",COMMERCIAL_BREAK:"commercial_break"};}),null);
__d('EgoAdsObjectSet',['csx','DataAttributeUtils','DOM'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=void 0;function j(l){'use strict';i=l;this._allEgoUnits=[];this._egoUnits=[];}j.prototype.init=function(l){'use strict';this._allEgoUnits=l;this._egoUnits=[];this._allEgoUnits.forEach(function(m){var n=k(m);if(!n||!n.holdout)this._egoUnits.push(m);},this);};j.prototype.getCount=function(){'use strict';return this._egoUnits.length;};j.prototype.forEach=function(l,m){'use strict';this._egoUnits.forEach(l,m);};j.prototype.getUnit=function(l){'use strict';return this._egoUnits[l];};j.prototype.getHoldoutAdIDsForSpace=function(l,m){'use strict';if(!l||!m)return [];var n=[];for(var o=0;l>0&&o<this._allEgoUnits.length;o++){var p=this._allEgoUnits[o],q=m(p),r=k(p);if(l>=q&&r&&r.holdout)n.push(r.adid);l-=q;}return n;};j.prototype.getHoldoutAdIDsForNumAds=function(l){'use strict';l=Math.min(l,this._allEgoUnits.length);var m=[];for(var n=0;n<l;n++){var o=this._allEgoUnits[n],p=k(o);if(p&&p.holdout)m.push(p.adid);}return m;};function k(l){var m=c('DOM').scry(l,i||"div._4u8")[0],n=m&&c('DataAttributeUtils').getDataAttribute(m,'data-ad');return n&&JSON.parse(n)||undefined;}f.exports=j;}),null);
__d('rayInterceptsBox',['invariant'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(k,l){var m=Object.keys(k);l.forEach(function(n){!(m.indexOf(n)!==-1)?h(0):void 0;!(typeof k[n]==='number')?h(0):void 0;});}var j={check:function k(l,m){i(l,['minX','maxX','minY','maxY']);i(m,['x','y','dx','dy']);!(l.maxX>l.minX&&l.maxY>l.minY)?h(0):void 0;if(m.dx===0&&m.dy===0)return false;if(m.x>=l.minX&&m.x<=l.maxX&&m.y>=l.minY&&m.y<=l.maxY)return true;var n=(l.minX-m.x)/m.dx,o=(l.maxX-m.x)/m.dx,p=(l.minY-m.y)/m.dy,q=(l.maxY-m.y)/m.dy,r=Math.max(Math.min(n,o),Math.min(p,q)),s=Math.min(Math.max(n,o),Math.max(p,q));if(r<0)return false;if(r>s)return false;return true;}};f.exports=j;}),null);
__d('AdsMouseStateStore',['invariant','Arbiter','DOM','Event','Vector','$','keyMirrorRecursive','rayInterceptsBox','throttle'],(function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=30,j=500,k=c('keyMirrorRecursive')({STATIONARY:'',INTENT:'',HOVER:'',NO_INTENT:''}),l=void 0,m=void 0,n=void 0,o=void 0,p=void 0;function q(){l=k.STATIONARY;m=0;n=0;o=Date.now();p='pagelet_ego_pane';}q();function r(event){try{return {x:event.clientX||event.x,y:event.clientY||event.y};}catch(t){var u=Math.random()*1000;return {x:u,y:u};}}var s=Object.assign(new (c('Arbiter'))(),{getState:function t(){return l;},updateRhcID:function t(u){!c('$')(u)?h(0):void 0;p=u;},getRhcID:function t(){return p;},onPageTransition:function t(event){q();},onMouseMove:function t(event){this.calculateState(r(event));},__updateMousePos:function t(u){m=u.x;n=u.y;},isRhcPresent:function t(){if(!c('DOM').scry(document.body,'#'+p).length)return false;var u=this.getRhcDimensions();return u.y>0&&u.x>0;},getRhc:function t(){return c('$')(p);},getRhcPosition:function t(){return c('Vector').getElementPosition(this.getRhc());},getRhcScreenPos:function t(){var u=c('Vector').getScrollPosition(),v=this.getRhcPosition();return {x:v.x-u.x,y:v.y-u.y};},getRhcDimensions:function t(){return c('Vector').getElementDimensions(this.getRhc());},getRhcBoundingBox:function t(){var u=this.getRhcDimensions(),v=this.getRhcScreenPos();return {minX:v.x,maxX:v.x+u.x,minY:v.y,maxY:v.y+u.y};},isPosContainedInRhc:function t(u){var v=this.getRhcBoundingBox();return (u.x>=v.minX&&u.x<=v.maxX&&u.y>=v.minY&&u.y<=v.maxY);},hasMovedMinDistance:function t(u){var v=u.x-m,w=u.y-n;return v*v+w*w>=i*i;},tooSoon:function t(){return Date.now()-o<j;},_updateTime:function t(){o=Date.now();},calculateState:function t(u){if(this.tooSoon())return;this._updateTime();if(!this.isRhcPresent())return;if(this.isPosContainedInRhc(u)){this.transitionToState(k.HOVER);this.__updateMousePos(u);this.scheduleCheckup();return;}else if(!this.hasMovedMinDistance(u)){this.transitionToState(k.STATIONARY);return;}var v=this.isMovingTowardsRhc(u)?k.INTENT:k.NO_INTENT;this.transitionToState(v);this.__updateMousePos(u);this.scheduleCheckup();},isMovingTowardsRhc:function t(u){var v={x:m,y:n};if(this.isPosContainedInRhc(v))return true;var w=this.getRhcBoundingBox(),x={x:m,y:n,dx:u.x-m,dy:u.y-n};return c('rayInterceptsBox').check(w,x);},scheduleCheckup:function t(){var u={x:m,y:n};setTimeout(function(){this.calculateState(u);}.bind(this),j*1.5);},transitionToState:function t(u){if(u===l)return;l=u;s.inform('change');}});c('Event').listen(document,'mousemove',c('throttle')(s.onMouseMove.bind(s),j));c('Arbiter').subscribe('page_transition',s.onPageTransition);s.STATES=k;s.MIN_MOVE_DISTANCE=i;s.THROTTLE_TIME=j;f.exports=s;}),null);
__d('BusinessURI.brands',['BizSiteIdentifier.brands','BusinessConf','URI'],(function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('URI'));i=h&&h.prototype;function j(l,m){'use strict';i.constructor.call(this,l);if(c('BizSiteIdentifier.brands').isBizSite()){var n=m||c('BizSiteIdentifier.brands').getBusinessID();if(n)this.addQueryData(c('BusinessConf').BIZ_ID_PARAM_NAME,n);if(!this.$BusinessURI1(this.getSubdomain()))this.setSubdomain(c('BusinessConf').DOMAIN);}return this;}j.prototype.$BusinessURI1=function(l){'use strict';return l==='developers';};var k=function l(m,n){return new j(m,n);};f.exports=k;}),null);
__d('FBProfilePhotoShadow.react',['cx','React','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';var l=this.props,m=l.className,n=l.children,o=babelHelpers.objectWithoutProperties(l,['className','children']),p=c('React').Children.only(n);return (c('React').createElement('div',babelHelpers['extends']({},o,{className:c('joinClasses')(m,"_38vo")}),c('React').cloneElement(p,{className:c('joinClasses')(p.props.className,"_44ma")})));};function k(){'use strict';i.apply(this,arguments);}f.exports=k;}),null);
__d('GamesXOut.react',['cx','React','joinClasses'],(function a(b,c,d,e,f,g,h){'use strict';var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.render=function(){return (c('React').createElement('div',{className:c('joinClasses')("_2b2u",this.props.className)},this.props.children,c('React').createElement('div',{className:"_1m6e",onClick:this.props.onClick})));};function l(){i.apply(this,arguments);}l.propTypes={onClick:k.func.isRequired};f.exports=l;}),null);
__d('tickerPhoteSnowLiftOpenStatus',['ArbiterMixin'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='CheckIsOpen',i={registerOpenChecker:function j(k){return i.subscribe(h,function(l,m){if(k())m.is_Open=true;});},checkIsOpen:function j(){var k={is_Open:false};i.inform(h,k);return k.is_Open;}};Object.assign(i,c('ArbiterMixin'));f.exports=i;}),null);
__d('ChatTabViewEvents',['Arbiter'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();f.exports=new (c('Arbiter'))();}),null);
__d("ScriptPathState",["Arbiter"],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h,i,j,k,l=100,m={setIsUIPageletRequest:function n(o){j=o;},setUserURISampleRate:function n(o){k=o;},reset:function n(){h=null;i=false;j=false;},_shouldUpdateScriptPath:function n(){return i&&!j;},_shouldSendURI:function n(){return Math.random()<k;},getParams:function n(){var o={};if(m._shouldUpdateScriptPath()){if(m._shouldSendURI()&&h!==null)o.user_uri=h.substring(0,l);}else o.no_script_path=1;return o;}};c("Arbiter").subscribe("pre_page_transition",function(n,o){i=true;h=o.to.getUnqualifiedURI().toString();});f.exports=b.ScriptPathState=m;}),null);
__d('AjaxPipeRequest',['Arbiter','AsyncRequest','BigPipe','CSS','DOM','Env','PageEvents','PageletSet','ScriptPathState','URI','containsNode','ge','goOrReplace','performance','performanceAbsoluteNow'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h,i=0;function j(m,n){var o=c('ge')(m);if(!o)return;if(!n)o.style.minHeight='100px';var p=c('PageletSet').getPageletIDs();for(var q=0;q<p.length;q++){var r=p[q];if(c('containsNode')(o,c('ge')(r)))c('PageletSet').removePagelet(r);}c('DOM').empty(o);c('Arbiter').inform('pagelet/destroy',{id:null,root:o});}function k(m,n){var o=c('ge')(m);if(o&&!n)o.style.minHeight='100px';}function l(m,n){'use strict';this._uri=m;this._query_data=n;this._request=new (c('AsyncRequest'))();this._canvas_id=null;this._allow_cross_page_transition=true;this._arbiter=new (c('Arbiter'))();this._requestID=i++;}l.prototype.setCanvasId=function(m){'use strict';this._canvas_id=m;return this;};l.prototype.setURI=function(m){'use strict';this._uri=m;return this;};l.prototype.setData=function(m){'use strict';this._query_data=m;return this;};l.prototype.getData=function(m){'use strict';return this._query_data;};l.prototype.setAllowCrossPageTransition=function(m){'use strict';this._allow_cross_page_transition=m;return this;};l.prototype.setAppend=function(m){'use strict';this._append=m;return this;};l.prototype.send=function(){'use strict';this._arbiter.inform(c('PageEvents').AJAXPIPE_SEND,{rid:this._requestID,quickling:!!this._isQuickling,ts:c('performanceAbsoluteNow')()},c('Arbiter').BEHAVIOR_PERSISTENT);var m={ajaxpipe:1,ajaxpipe_token:c('Env').ajaxpipe_token};Object.assign(m,c('ScriptPathState').getParams());c('ScriptPathState').reset();this._request.setOption('useIframeTransport',true).setURI(this._uri).setData(Object.assign(m,this._query_data)).setPreBootloadHandler(this._preBootloadHandler.bind(this)).setInitialHandler(this._onInitialResponse.bind(this)).setHandler(this._onResponse.bind(this)).setMethod('GET').setReadOnly(true).setAllowCrossPageTransition(this._allow_cross_page_transition).setAllowIrrelevantRequests(this._allowIrrelevantRequests);if(this._automatic){this._relevantRequest=h;}else h=this._request;if(this._isQuickling){var n=c('performance').clearResourceTimings||c('performance').webkitClearResourceTimings;if(n)n.call(c('performance'));}this._request.send();return this;};l.prototype._preBootloadFirstResponse=function(m){'use strict';return false;};l.prototype._fireDomContentCallback=function(){'use strict';this._arbiter.inform(c('PageEvents').AJAXPIPE_DOMREADY,true,c('Arbiter').BEHAVIOR_STATE);};l.prototype._fireOnloadCallback=function(){'use strict';if(window.console&&console.timeStamp)console.timeStamp('perf_trace {"name": "e2e",'+' "parent": "PageEvents.AJAXPIPE_ONLOAD"}');this._arbiter.inform(c('PageEvents').AJAXPIPE_ONLOAD,{lid:this.pipe.lid,rid:this._requestID,ts:c('performanceAbsoluteNow')()},c('Arbiter').BEHAVIOR_STATE);};l.prototype._isRelevant=function(m){'use strict';return this._request==h||this._automatic&&this._relevantRequest==h||this._jsNonBlock||h&&h._allowIrrelevantRequests;};l.prototype._preBootloadHandler=function(m){'use strict';var n=m.getPayload();if(!n||n.redirect||!this._isRelevant(m))return false;var o=false;if(m.is_first){!this._append&&!this._displayCallback&&j(this._canvas_id,this._constHeight);o=this._preBootloadFirstResponse(m);this.pipe=new (c('BigPipe'))({arbiter:this._arbiter,rootNodeID:this._canvas_id,lid:this._request.lid,rid:this._requestID,isAjax:true,domContentCallback:this._fireDomContentCallback.bind(this),onloadCallback:this._fireOnloadCallback.bind(this),domContentEvt:c('PageEvents').AJAXPIPE_DOMREADY,onloadEvt:c('PageEvents').AJAXPIPE_ONLOAD,jsNonBlock:this._jsNonBlock,automatic:this._automatic,displayCallback:this._displayCallback,allowIrrelevantRequests:this._allowIrrelevantRequests});}return o;};l.prototype._redirect=function(m){'use strict';if(m.redirect){if(m.force||!this.isPageActive(m.redirect)){var n=['ajaxpipe','ajaxpipe_token'].concat(this.getSanitizedParameters());c('goOrReplace')(window.location,new (c('URI'))(m.redirect).removeQueryData(n),true);}else{var o=b.PageTransitions;o.go(m.redirect,true);}return true;}else return false;};l.prototype.isPageActive=function(m){'use strict';return true;};l.prototype.getSanitizedParameters=function(){'use strict';return [];};l.prototype._versionCheck=function(m){'use strict';return true;};l.prototype._onInitialResponse=function(m){'use strict';var n=m.getPayload();if(!this._isRelevant(m))return false;if(!n)return true;if(this._redirect(n)||!this._versionCheck(n))return false;return true;};l.prototype._processFirstResponse=function(m){'use strict';var n=m.getPayload();if(c('ge')(this._canvas_id)&&n.canvas_class!=null)c('CSS').setClass(this._canvas_id,n.canvas_class);};l.prototype.setFirstResponseCallback=function(m){'use strict';this._firstResponseCallback=m;return this;};l.prototype.setFirstResponseHandler=function(m){'use strict';this._processFirstResponse=m;return this;};l.prototype._onResponse=function(m){'use strict';var n=m.payload;if(!this._isRelevant(m))return c('AsyncRequest').suppressOnloadToken;if(m.is_first){this._processFirstResponse(m);this._firstResponseCallback&&this._firstResponseCallback();n.provides=n.provides||[];n.provides.push('uipage_onload');}if(n){if('content' in n.content&&this._canvas_id!==null){if(this._append)n.append=this._canvas_id;var o=n.content.content;delete n.content.content;n.content[this._canvas_id]=o;}if(n.secondFlushPayload){this.pipe.setSecondFlushPayload(n.secondFlushPayload);}else this.pipe.onPageletArrive(n);}if(m.is_last)k(this._canvas_id,this._constHeight);return c('AsyncRequest').suppressOnloadToken;};l.prototype.setNectarModuleDataSafe=function(m){'use strict';this._request.setNectarModuleDataSafe(m);return this;};l.prototype.setFinallyHandler=function(m){'use strict';this._request.setFinallyHandler(m);return this;};l.prototype.setErrorHandler=function(m){'use strict';this._request.setErrorHandler(m);return this;};l.prototype.setTransportErrorHandler=function(m){'use strict';this._request.setTransportErrorHandler(m);return this;};l.prototype.abort=function(){'use strict';this._request.abort();if(h==this._request)h=null;this._request=null;return this;};l.prototype.setJSNonBlock=function(m){'use strict';this._jsNonBlock=m;return this;};l.prototype.setAutomatic=function(m){'use strict';this._automatic=m;return this;};l.prototype.setDisplayCallback=function(m){'use strict';this._displayCallback=m;return this;};l.prototype.setConstHeight=function(m){'use strict';this._constHeight=m;return this;};l.prototype.setAllowIrrelevantRequests=function(m){'use strict';this._allowIrrelevantRequests=m;return this;};l.prototype.getAsyncRequest=function(){'use strict';return this._request;};l.getCurrentRequest=function(){'use strict';return h;};l.setCurrentRequest=function(m){'use strict';h=m;};f.exports=l;}),null);
__d('FullScreen',['Event','Arbiter','CSS','UserAgent','UserAgent_DEPRECATED','throttle','Keys'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={},i=false,j=function o(p){if(c('Event').getKeyCode(p)===c('Keys').ESC)p.stopPropagation();},k=function o(){if(!i){document.addEventListener('keydown',j,true);i=true;}},l=function o(){if(i){document.removeEventListener('keydown',j,true);i=false;}},m=Object.assign(new (c('Arbiter'))(),{listenForEvent:function o(p){var q=c('throttle')(this.onChange,0,this);if(!h[p.id]){h[p.id]=true;c('Event').listen(p,{webkitfullscreenchange:q,mozfullscreenchange:q,MSFullscreenChange:q,fullscreenchange:q});}},enableFullScreen:function o(p){this.listenForEvent(p);if(p.webkitRequestFullScreen){if(c('UserAgent_DEPRECATED').chrome()){p.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);}else p.webkitRequestFullScreen();}else if(p.mozRequestFullScreen){p.mozRequestFullScreen();}else if(p.msRequestFullscreen){k();p.msRequestFullscreen();}else if(p.requestFullScreen){p.requestFullScreen();}else return false;return true;},disableFullScreen:function o(){if(document.webkitCancelFullScreen){document.webkitCancelFullScreen();}else if(document.mozCancelFullScreen){document.mozCancelFullScreen();}else if(document.msExitFullscreen){document.msExitFullscreen();}else if(document.cancelFullScreen){document.cancelFullScreen();}else if(document.exitFullScreen){document.exitFullScreen();}else return false;return true;},isFullScreen:function o(){return document.webkitIsFullScreen||document.fullScreen||document.mozFullScreen||document.msFullscreenElement;},toggleFullScreen:function o(p){if(this.isFullScreen()){this.disableFullScreen();return false;}else return this.enableFullScreen(p);return false;},onChange:function o(){var p=this.isFullScreen();c('CSS').conditionClass(document.body,'fullScreen',p);this.inform('changed');if(!p)l();},isSupportedWithKeyboardInput:function o(){return this.isSupported()&&!c('UserAgent').isBrowser('Safari');},isSupported:function o(){var p=document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled||document.fullscreenEnabled;return p||document.webkitCancelFullScreen||document.mozCancelFullScreen||document.msExitFullscreen||document.cancelFullScreen||document.exitFullScreen;}}),n=c('throttle')(m.onChange,0,m);c('Event').listen(document,{webkitfullscreenchange:n,mozfullscreenchange:n,MSFullscreenChange:n,fullscreenchange:n});f.exports=m;}),null);
__d('cxodecode',['invariant'],(function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=36,j=2;function k(l){if(!l)return '';var m=l.cxononce;!m?h(0):void 0;var n=m.substr(0,m.length-j),o=parseInt(m.substr(-j),i),p='';for(var q=0;q<n.length;q+=j)p+=String.fromCharCode(parseInt(n.substr(q,j),i)^o);return p;}f.exports=k;}),null);
__d("XPhotosWaterfallBatchLoggingController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/photos\/logging\/waterfall\/batch\/",{});}),null);
__d('PhotosUploadWaterfall',['AsyncRequest','AsyncSignal','Banzai','PhotosUploadWaterfallXConfig','XPhotosWaterfallBatchLoggingController','emptyFunction','randomInt','throttle'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=[],i={APP_SIMPLE:'simple',APP_ARCHIVE:'archive',APP_COMPOSER:'composer',APP_MESSENGER:'messenger',APP_HTML5:'html5',APP_CHAT:'chat',INSTALL_CANCEL:1,INSTALL_INSTALL:2,INSTALL_UPDATE:3,INSTALL_REINSTALL:4,INSTALL_PERMA_CANCEL:5,INSTALL_SILENT_SKIP:6,INSTALL_DOWNLOAD:7,CERROR_RESIZING_FAILED:6,CERROR_MARKER_EXTRACTION_FAILED:9,BEGIN:1,UPLOAD_START:4,ALL_UPLOADS_DONE:6,CLIENT_ERROR:7,RECOVERABLE_CLIENT_ERROR:12,IMAGES_SELECTED:9,UPGRADE_REQUIRED:11,VERSION:15,SELECT_START:18,SELECT_CANCELED:19,CANCEL:22,CANCEL_DURING_UPLOAD:83,ONE_RESIZING_START:2,ONE_UPLOAD_START:10,ONE_UPLOAD_DONE:29,ONE_RESIZING_DONE:34,PROGRESS_BAR_STOPPED:44,MISSED_BEAT:45,HEART_ATTACK:46,PUBLISH_SENT:99,PUBLISH_START:100,PUBLISH_SUCCESS:101,PUBLISH_FAILURE:102,CLUSTERING_START:103,CLUSTERING_SUCCESS:104,CLUSTERING_FAILURE:105,POST_BUTTON_CLICKED:110,POST_BUTTON_ERROR:111,PHOTO_DELETED:114,PUBLISH_CLIENT_SUCCESS:115,PHOTO_ROTATED:117,SAVE_DRAFT_BUTTON_CLICKED:123,RECOVERY_START_ON_CLIENT:124,CHANGE_PHOTO_QUALITY_SETTING:126,TAG_ADDED:127,TAG_REMOVED:128,TAB_BUTTON_CLICKED:129,EDITABLE_PHOTO_FETCH_START:106,EDITABLE_PHOTO_FETCH_SUCCESS:107,EDITABLE_PHOTO_FETCH_FAILURE:108,EDITABLE_PHOTO_FETCH_DELAY:116,CANCEL_INDIVIDUAL_UPLOAD:109,MISSING_OVERLAY_NODE:118,PUBLISH_RETRY_FAILURE:119,MISSING_UPLOAD_STATE:120,SESSION_POSTED:72,POST_PUBLISHED:80,ONE_UPLOAD_CANCELED:81,ONE_UPLOAD_CANCELED_DURING_UPLOAD:82,RESIZER_AVAILABLE:20,OVERLAY_FIRST:61,ASYNC_AVAILABLE:63,FALLBACK_TO_HTML5:130,RETRY_UPLOAD:17,TAGGED_ALL_FACES:14,VAULT_IMAGES_SELECTED:62,VAULT_CREATE_POST_CANCEL:65,VAULT_SEND_IN_MESSAGE_CLICKED:66,VAULT_DELETE_CANCEL:68,VAULT_ADD_TO_ALBUM_CANCEL:74,VAULT_SHARE_IN_AN_ALBUM_CLICKED:76,VAULT_SHARE_OWN_TIMELINE_CLICKED:77,VAULT_SHARE_FRIENDS_TIMELINE_CLICKED:78,VAULT_SHARE_IN_A_GROUP_CLICKED:79,VAULT_SYNCED_PAGED_LINK_CLICKED:84,VAULTBOX:'vaultbox',GRID:'grid',SPOTLIGHT_VAULT_VIEWER:'spotlight_vault_viewer',REF_VAULT_NOTIFICATION:'vault_notification',_checkRequiredFields:function k(l){},sendBanzai:function k(l,m){this._checkRequiredFields(l);var n={};l.scuba_ints=l.scuba_ints||{};l.scuba_ints.client_time=Math.round(Date.now()/1000);if(c('PhotosUploadWaterfallXConfig').retryBanzai){n.retry=true;l.scuba_ints.nonce=c('randomInt')(4294967296);}c('Banzai').post(c('PhotosUploadWaterfallXConfig').deprecatedBanzaiRoute,l,n);if(m)setTimeout(m,0);},sendSignal:function k(l,m){this._checkRequiredFields(l);if(c('PhotosUploadWaterfallXConfig').useBanzai){this.sendBanzai(l,m);}else{var n=new (c('AsyncSignal'))('/ajax/photos/waterfall.php',{data:JSON.stringify(l)}).setHandler(m);if(c('PhotosUploadWaterfallXConfig').timeout)n.setTimeout(10*1000);n.send();}},queueLog:function k(l,m){h.push(l);if(!!m){this.flushQueue(m);}else j();},flushQueue:function k(l){var m=JSON.stringify(h);h=[];var n=c('XPhotosWaterfallBatchLoggingController').getURIBuilder().getURI();new (c('AsyncRequest'))().setURI(n).setData({logs:m}).setFinallyHandler(l||c('emptyFunction')).setTimeoutHandler(10*1000,l||c('emptyFunction')).send();}},j=c('throttle')(i.flushQueue,c('PhotosUploadWaterfallXConfig').batchInterval*1000);f.exports=i;}),null);
__d('VideoPermalinkURI',[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={isValid:function i(j){return h.parse(j)!==null;},parse:function i(j){if(this.isValidLegacy(j)){var k=j.getQueryData();if(k.v)return {video_id:k.v,set_token:k.set};return null;}var l=j.getPath();if(l[l.length-1]==='/')l=l.substring(0,l.length-1);var m=l.split('/');if(m.length>=3&&m[2]==='videos')if(m.length===4&&/^\d+$/.exec(m[3])!==null){return {video_id:m[3],set_token:null};}else if(m.length===5&&/^\d+$/.exec(m[4])!==null)return {video_id:m[4],set_token:m[3]};return null;},isValidLegacy:function i(j){var k=j.getPath();if(k[k.length-1]==='/')k=k.substring(0,k.length-1);if(k==='/photo.php'||k==='/force_photo/photo.php'||k==='/photo'||k==='/force_photo/photo/index.php'||k==='/photo/index.php'||k==='/force_photo/photo'||k==='/video.php'||k==='/video/video.php')return true;return false;}};f.exports=h;}),null);
__d('ProfileTabUtils',['ProfileTabConst'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={isActivityLogTab:function i(j){return (j===c('ProfileTabConst').ALL_ACTIVITY||j===c('ProfileTabConst').APPROVAL);},isOverviewTab:function i(j){return (j===c('ProfileTabConst').INFO||j===c('ProfileTabConst').OVERVIEW);},isTimelineTab:function i(j){return (!j||j===c('ProfileTabConst').TIMELINE||j===c('ProfileTabConst').WALL);},tabHasFixedAds:function i(j){return true;},tabHasScrubber:function i(j){return h.isActivityLogTab(j);}};h.tabHasStickyHeader=h.isTimelineTab;f.exports=h;}),null);
__d('LikeConfirmer',['AsyncDialog','AsyncRequest'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=false,i=false,j={likeContent:function k(){},like:function k(l,m){this.likeContent=l;if(i)return;if(h){this.likeContent();}else{var n=new (c('AsyncRequest'))().setURI('/like/confirm_like.php').setRelativeTo(m);c('AsyncDialog').send(n,function(o){i=true;o.subscribe('hide',this.onCloseLikeConfirmDialog.bind(this));o.setCausalElement(m);}.bind(this));}return false;},isShowingConfirmation:function k(){return i;},onCloseLikeConfirmDialog:function k(){i=false;},likeSkipConfirmation:function k(l){h=l;this.likeContent();}};f.exports=j;}),null);
__d("UIPageletContentCache",[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={cache:{},getContent:function i(j){if(j in this.cache)return this.cache[j];return null;},setContent:function i(j,k){this.cache[j]=k;}};f.exports=h;}),null);
__d('UIPagelet',['ActorURI','AjaxPipeRequest','AsyncRequest','DOM','HTML','ScriptPathState','UIPageletContentCache','URI','emptyFunction','ge','isElementNode'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j,k){'use strict';var l=i&&c('isElementNode')(i)?i.id:i;this._id=l||null;this._element=c('ge')(i||c('DOM').create('div'));this._src=j||null;this._context_data=k||{};this._data={};this._handler=c('emptyFunction');this._request=null;this._use_ajaxpipe=false;this._use_post_request=false;this._is_bundle=true;this._allow_cross_page_transition=false;this._append=false;this._cache_content=false;this._content_cache_key='';}h.prototype.getElement=function(){'use strict';return this._element;};h.prototype.setHandler=function(i){'use strict';this._handler=i;return this;};h.prototype.go=function(i,j){'use strict';if(arguments.length>=2||typeof i=='string'){this._src=i;this._data=j||{};}else if(arguments.length==1)this._data=i;this.refresh();return this;};h.prototype.setAllowCrossPageTransition=function(i){'use strict';this._allow_cross_page_transition=i;return this;};h.prototype.setBundleOption=function(i){'use strict';this._is_bundle=i;return this;};h.prototype.setErrorHandler=function(i){'use strict';this._errorHandler=i;return this;};h.prototype.setTransportErrorHandler=function(i){'use strict';this.transportErrorHandler=i;return this;};h.prototype.refresh=function(){'use strict';if(this._use_ajaxpipe){c('ScriptPathState').setIsUIPageletRequest(true);this._request=new (c('AjaxPipeRequest'))();this._request.setCanvasId(this._id).setAppend(this._append).setConstHeight(this._constHeight).setJSNonBlock(this._jsNonblock).setAutomatic(this._automatic).setDisplayCallback(this._displayCallback).setFinallyHandler(this._finallyHandler).setAllowIrrelevantRequests(this._allowIrrelevantRequests);if(this._errorHandler)this._request.setErrorHandler(this._errorHandler);if(this.transportErrorHandler)this._request.setTransportErrorHandler(this.transportErrorHandler);}else{if(this._cache_content){var i=c('UIPageletContentCache').getContent(this._content_cache_key);if(i!==null){this.handleContent(i);return this;}}var j=function(n){this._request=null;var o=c('HTML')(n.getPayload());this.handleContent(o);if(this._cache_content)c('UIPageletContentCache').setContent(this._content_cache_key,o);}.bind(this),k=this._displayCallback,l=this._finallyHandler;this._request=new (c('AsyncRequest'))().setMethod('GET').setReadOnly(true).setOption('bundle',this._is_bundle).setHandler(function(n){if(k){k(j.bind(null,n));}else j(n);l&&l();});if(this._errorHandler)this._request.setErrorHandler(this._errorHandler);if(this.transportErrorHandler)this._request.setTransportErrorHandler(this.transportErrorHandler);if(this._use_post_request)this._request.setMethod('POST');}var m=babelHelpers['extends']({},this._context_data,this._data);if(this._actorID)m[c('ActorURI').PARAMETER_ACTOR]=this._actorID;this._request.setURI(this._src).setAllowCrossPageTransition(this._allow_cross_page_transition).setData({data:JSON.stringify(m)}).send();return this;};h.prototype.handleContent=function(i){'use strict';if(this._append){c('DOM').appendContent(this._element,i);}else c('DOM').setContent(this._element,i);this._handler();};h.prototype.cancel=function(){'use strict';if(this._request)this._request.abort();};h.prototype.setUseAjaxPipe=function(i){'use strict';this._use_ajaxpipe=!!i;return this;};h.prototype.setUsePostRequest=function(i){'use strict';this._use_post_request=!!i;return this;};h.prototype.setAppend=function(i){'use strict';this._append=!!i;return this;};h.prototype.setJSNonBlock=function(i){'use strict';this._jsNonblock=!!i;return this;};h.prototype.setAutomatic=function(i){'use strict';this._automatic=!!i;return this;};h.prototype.setDisplayCallback=function(i){'use strict';this._displayCallback=i;return this;};h.prototype.setConstHeight=function(i){'use strict';this._constHeight=!!i;return this;};h.prototype.setFinallyHandler=function(i){'use strict';this._finallyHandler=i;return this;};h.prototype.setAllowIrrelevantRequests=function(i){'use strict';this._allowIrrelevantRequests=i;return this;};h.prototype.setActorID=function(i){'use strict';this._actorID=i;return this;};h.prototype.setCacheContent=function(i){'use strict';this._cache_content=i;return this;};h.prototype.setContentCacheKey=function(i){'use strict';this._content_cache_key=i;return this;};h.appendToInline=function(i,j){'use strict';var k=c('ge')(i),l=c('ge')(j);if(k&&l){while(l.firstChild)c('DOM').appendContent(k,l.firstChild);c('DOM').remove(l);}};h.loadFromEndpoint=function(i,j,k,l){'use strict';l=l||{};var m='/ajax/pagelet/generic.php/'+i;if(l.intern)m='/intern'+m;var n=new (c('URI'))(m.replace(/\/+/g,'/'));if(l.subdomain)n.setSubdomain(l.subdomain);var o=false,p='';if(l.contentCacheKey){o=true;p=i+','+String(l.contentCacheKey);}var q=new h(j,n,k).setUseAjaxPipe(l.usePipe).setBundleOption(l.bundle!==false).setAppend(l.append).setJSNonBlock(l.jsNonblock).setAutomatic(l.automatic).setDisplayCallback(l.displayCallback).setConstHeight(l.constHeight).setAllowCrossPageTransition(l.crossPage).setFinallyHandler(l.finallyHandler||c('emptyFunction')).setErrorHandler(l.errorHandler).setTransportErrorHandler(l.transportErrorHandler).setAllowIrrelevantRequests(l.allowIrrelevantRequests).setActorID(l.actorID).setCacheContent(o).setContentCacheKey(p).setUsePostRequest(l.usePostRequest);l.handler&&q.setHandler(l.handler);q.go();return q;};h.loadFromEndpointBatched=function(i,j,k){'use strict';var l=i.slice(0,k),m=i.slice(k);if(m.length>0){var n=l[l.length-1],o=c('emptyFunction');if(n.options&&n.options.finallyHandler)o=n.options.finallyHandler;n.options=babelHelpers['extends']({},n.options,{finallyHandler:function p(){o();window.setTimeout(function(){h.loadFromEndpointBatched(m,j,k);},1);}});}l.forEach(function(p){h.loadFromEndpoint(p.controller,p.target_element,p.data,babelHelpers['extends']({},p.options,j,{bundle:true}));});};f.exports=h;}),null);
__d("arrayStableSort",[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){return i.map(function(k,l){return {data:k,index:l};}).sort(function(k,l){return j(k.data,l.data)||k.index-l.index;}).map(function(k){return k.data;});}f.exports=h;}),null);
__d('RangedCallbackManager',['CallbackManagerController','arrayStableSort','createObjectFrom'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j,k){'use strict';this.$RangedCallbackManager1=[];this.$RangedCallbackManager2=false;this.$RangedCallbackManager3=false;this.$RangedCallbackManager4={};this.$RangedCallbackManager5=new (c('CallbackManagerController'))(this.$RangedCallbackManager6.bind(this));this.$RangedCallbackManager7=i;this.$RangedCallbackManager8=j;this.$RangedCallbackManager9=k;}h.prototype.executeOrEnqueue=function(i,j,k,l,m){'use strict';return this.$RangedCallbackManager5.executeOrEnqueue({start:i,limit:j},k,{strict:!!l,skipOnStrictHandler:m});};h.prototype.unsubscribe=function(i){'use strict';this.$RangedCallbackManager5.unsubscribe(i);};h.prototype.getUnavailableResources=function(i){'use strict';var j=this.$RangedCallbackManager5.getRequest(i),k=[];if(j&&!this.$RangedCallbackManager2){var l=j.request,m=this.$RangedCallbackManager10(j.options),n=l.start+l.limit;for(var o=m.length;o<n;o++)k.push(o);}return k;};h.prototype.addResources=function(i){'use strict';i.forEach(function(j){if(!this.$RangedCallbackManager4[j]){this.$RangedCallbackManager4[j]=true;this.$RangedCallbackManager1.push(j);this.$RangedCallbackManager3=null;}}.bind(this));this.resortResources();this.$RangedCallbackManager5.runPossibleCallbacks();};h.prototype.addResourcesWithoutSorting=function(i,j){'use strict';var k=this.$RangedCallbackManager1.slice(0,j);k=k.concat(i);k=k.concat(this.$RangedCallbackManager1.slice(j));this.$RangedCallbackManager1=k;Object.assign(this.$RangedCallbackManager4,c('createObjectFrom')(i,true));this.$RangedCallbackManager3=null;this.$RangedCallbackManager5.runPossibleCallbacks();};h.prototype.removeResources=function(i){'use strict';i.forEach(function(j){if(this.$RangedCallbackManager4[j]){this.$RangedCallbackManager4[j]=false;var k=this.$RangedCallbackManager1.indexOf(j);if(k!=-1)this.$RangedCallbackManager1.splice(k,1);}}.bind(this));};h.prototype.removeAllResources=function(){'use strict';this.$RangedCallbackManager1=[];this.$RangedCallbackManager4={};};h.prototype.resortResources=function(){'use strict';this.$RangedCallbackManager1=c('arrayStableSort')(this.$RangedCallbackManager1,function(i,j){return (this.$RangedCallbackManager8(this.$RangedCallbackManager7(i),this.$RangedCallbackManager7(j)));}.bind(this));};h.prototype.setReachedEndOfArray=function(){'use strict';if(!this.$RangedCallbackManager2){this.$RangedCallbackManager2=true;this.$RangedCallbackManager3=null;this.$RangedCallbackManager5.runPossibleCallbacks();}};h.prototype.hasReachedEndOfArray=function(){'use strict';return this.$RangedCallbackManager2;};h.prototype.setError=function(i){'use strict';if(this.$RangedCallbackManager3!==i){this.$RangedCallbackManager3=i;this.$RangedCallbackManager5.runPossibleCallbacks();}};h.prototype.getError=function(i,j,k){'use strict';var l=this.$RangedCallbackManager10({strict:k});return i+j>l.length?this.$RangedCallbackManager3:null;};h.prototype.hasResource=function(i){'use strict';return this.$RangedCallbackManager4[i];};h.prototype.getResourceAtIndex=function(i){'use strict';return this.$RangedCallbackManager1[i];};h.prototype.getAllResources=function(){'use strict';return this.$RangedCallbackManager1.concat();};h.prototype.getCurrentArraySize=function(i){'use strict';return this.$RangedCallbackManager10(i).length;};h.prototype.$RangedCallbackManager10=function(i){'use strict';var j=this.$RangedCallbackManager1;if(i&&i.strict){var k=i.skipOnStrictHandler||this.$RangedCallbackManager9;if(k)j=j.filter(k);}return j;};h.prototype.$RangedCallbackManager6=function(i,j){'use strict';var k=this.$RangedCallbackManager10(j);if(!this.$RangedCallbackManager2&&!this.$RangedCallbackManager3&&i.start+i.limit>k.length){return false;}else{var l=k.slice(i.start,i.start+i.limit),m=i.start+i.limit>k.length?this.$RangedCallbackManager3:null;return [l,m];}};h.prototype.getElementsUntil=function(i){'use strict';var j=[];for(var k=0;k<this.$RangedCallbackManager1.length;k++){var l=this.$RangedCallbackManager7(this.$RangedCallbackManager1[k]);if(this.$RangedCallbackManager8(l,i)>0)break;j.push(this.$RangedCallbackManager1[k]);}return j;};f.exports=h;}),null);
__d('randomShuffle',['randomInt'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){for(var j=i.length-1;j>0;j--){var k=c('randomInt').call(this,j+1);if(k!=j){var l=i[k];i[k]=i[j];i[j]=l;}}return i;}f.exports=h;}),null);