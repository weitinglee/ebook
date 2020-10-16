	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	
bookConfig.loadingCaptionColor="#DDDDDD";
bookConfig.loadingBackground="#000000";
bookConfig.appLogoIcon="./files/mobile-ext/appLogoIcon.png";
bookConfig.appLogoLinkURL="https://www.most.gov.tw/";
bookConfig.appLogoOpenWindow="Blank";
bookConfig.logoHeight="40";
bookConfig.logoPadding="20";
bookConfig.logoTop="0";
bookConfig.toolbarColor="#000000";
bookConfig.iconColor="#FFFFFF";
bookConfig.pageNumColor="#000000";
bookConfig.iconFontColor="#FFFFFF";
bookConfig.toolbarAlwaysShow="No";
bookConfig.formFontColor="#FFFFFF";
bookConfig.formBackgroundColor="#1B0C06";
bookConfig.ToolBarAlpha="1";
bookConfig.showBookInstructionOnStart="false";
bookConfig.InstructionsButtonVisible="NO";
bookConfig.showInstructionOnStart="No";
bookConfig.showGotoButtonsAtFirst="No";
bookConfig.QRCode="Hide";
bookConfig.HomeButtonVisible="Hide";
bookConfig.enablePageBack="YES";
bookConfig.ShareButtonVisible="NO";
shareObj = [];
bookConfig.isInsertFrameLinkEnable="NO";
bookConfig.addCurrentPage="No";
bookConfig.EmailButtonVisible="Show";
bookConfig.btnShareWithEmailBody="\{link\}";
bookConfig.ThumbnailsButtonVisible="Show";
bookConfig.thumbnailColor="#333333";
bookConfig.thumbnailAlpha="70";
bookConfig.BookMarkButtonVisible="NO";
bookConfig.TableOfContentButtonVisible="YES";
bookConfig.isHideTabelOfContentNodes="YES";
bookConfig.SearchButtonVisible="YES";
bookConfig.leastSearchChar="2";
bookConfig.searchKeywordFontColor="#FFB000";
bookConfig.searchHightlightColor="#FFFF00";
bookConfig.SelectTextButtonVisible="Enable";
bookConfig.PrintButtonVisible="No";
bookConfig.BackgroundSoundButtonVisible="YES";
bookConfig.FlipSound="YES";
bookConfig.BackgroundSoundLoop="-1";
bookConfig.AutoPlayButtonVisible="Yes";
bookConfig.autoPlayAutoStart="No";
bookConfig.autoPlayDuration="3";
bookConfig.autoPlayLoopCount="1";
bookConfig.ZoomButtonVisible="Yes";
bookConfig.maxZoomWidth="0";
bookConfig.defaultZoomWidth="0";
bookConfig.mouseWheelFlip="Yes";
bookConfig.ZoomMapVisible="Hide";
bookConfig.DownloadButtonVisible="YES";
bookConfig.DownloadURL="https://www.most.gov.tw/most_ebook/ch/";
bookConfig.PhoneButtonVisible="Hide";
bookConfig.AnnotationButtonVisible="Disable";
bookConfig.FullscreenButtonVisible="Show";
bookConfig.MagnifierButtonVisible="Hide";
bookConfig.bgBeginColor="#A3CFD1";
bookConfig.bgEndColor="#408080";
bookConfig.bgMRotation="90";
bookConfig.backGroundImgURL="./files/mobile-ext/backGroundImgURL.jpg";
bookConfig.backgroundPosition="stretch";
bookConfig.backgroundOpacity="100";
bookConfig.backgroundScene="None";
bookConfig.LeftShadowWidth="50";
bookConfig.LeftShadowAlpha="0.6";
bookConfig.RightShadowWidth="55";
bookConfig.RightShadowAlpha="0.6";
bookConfig.ShowTopLeftShadow="No";
bookConfig.HardPageEnable="NO";
bookConfig.hardCoverBorderWidth="1";
bookConfig.borderColor="#E6E6E6";
bookConfig.outerCoverBorder="NO";
bookConfig.cornerRound="8";
bookConfig.leftMarginOnMobile="0";
bookConfig.topMarginOnMobile="0";
bookConfig.rightMarginOnMobile="0";
bookConfig.bottomMarginOnMobile="0";
bookConfig.pageBackgroundColor="#FFFFFF";
bookConfig.flipshortcutbutton="Show";
bookConfig.BindingType="side";
bookConfig.RightToLeft="No";
bookConfig.FlipDirection="0";
bookConfig.flippingTime="1.4";
bookConfig.retainBookCenter="Yes";
bookConfig.FlipStyle="Flip";
bookConfig.autoDoublePage="Yes";
bookConfig.isTheBookOpen="No";
bookConfig.thicknessWidthType="thin";
bookConfig.thicknessColor="#FFFFFF";
bookConfig.SingleModeBanFlipToLastPage="No";
bookConfig.showThicknessOnMobile="No";
bookConfig.isSingleBookFullWindowOnMobile="no";
bookConfig.isStopMouseMenu="yes";
bookConfig.restorePageVisible="No";
bookConfig.topMargin="10";
bookConfig.bottomMargin="10";
bookConfig.leftMargin="300";
bookConfig.rightMargin="10";
bookConfig.hideMiniFullscreen="no";
bookConfig.maxWidthToSmallMode="400";
bookConfig.maxHeightToSmallMode="300";
bookConfig.leftRightPnlShowOption="Table of Contents";
bookConfig.highDefinitionConversion="yes";
bookConfig.LargeLogoPosition="top-left";
bookConfig.LargeLogoTarget="Blank";
bookConfig.isFixLogoSize="YES";
bookConfig.logoFixWidth="140";
bookConfig.logoFixHeight="40";
bookConfig.SupportOperatePageZoom="Yes";
bookConfig.showHelpContentAtFirst="YES";
bookConfig.updateURLForPage="No";
bookConfig.LinkDownColor="#800080";
bookConfig.LinkAlpha="0.2";
bookConfig.OpenWindow="Blank";
bookConfig.showLinkHint="No";

bookConfig.macBookVersion = "EMQUosHBbasrOFSSnmONcWooHERUhjJFaXrvKEQeloCAaQsgECfajpFHVdmnEHQatlOHYchtAHWZnsBNfRjpIJcXviNOfTppFKUevoKEYctkPKZUkkDNcdkvEEbYrjHKeanqBMRYhgBOaZrnKEcchnBLQbvtIOeSksIBUUmlJHRetj27788D42_";
bookConfig.Html5Template = "Metro";
bookConfig.UIBaseURL="mobile/";
bookConfig.isFlipPdf=false;
bookConfig.searchTextJS="mobile/javascript/search_config.js";
bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";
bookConfig.totalPageCount=50;
bookConfig.largePageWidth=595;
bookConfig.largePageHeight=793;
bookConfig.bookTitle="MOST-Cht";
bookConfig.normalPath="./files/mobile/";
bookConfig.largePath="./files/mobile/";
bookConfig.productName="Flip PDF";
bookConfig.useTheAliCloudChart=false;
bookConfig.MidBgColor="#14ab8f";
bookConfig.bookmarkCR = "cf3f76e2b261feadb71e637a5e8ec0171b985baf";
;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};
bookConfig.thumbPath="./files/thumb/";
var fliphtml5_pages=[{"l":"./files/mobile/1.jpg","n":"./files/mobile/1.jpg","t":"./files/thumb/1.jpg"},{"l":"./files/mobile/2.jpg","n":"./files/mobile/2.jpg","t":"./files/thumb/2.jpg"},{"l":"./files/mobile/3.jpg","n":"./files/mobile/3.jpg","t":"./files/thumb/3.jpg"},{"l":"./files/mobile/4.jpg","n":"./files/mobile/4.jpg","t":"./files/thumb/4.jpg"},{"l":"./files/mobile/5.jpg","n":"./files/mobile/5.jpg","t":"./files/thumb/5.jpg"},{"l":"./files/mobile/6.jpg","n":"./files/mobile/6.jpg","t":"./files/thumb/6.jpg"},{"l":"./files/mobile/7.jpg","n":"./files/mobile/7.jpg","t":"./files/thumb/7.jpg"},{"l":"./files/mobile/8.jpg","n":"./files/mobile/8.jpg","t":"./files/thumb/8.jpg"},{"l":"./files/mobile/9.jpg","n":"./files/mobile/9.jpg","t":"./files/thumb/9.jpg"},{"l":"./files/mobile/10.jpg","n":"./files/mobile/10.jpg","t":"./files/thumb/10.jpg"},{"l":"./files/mobile/11.jpg","n":"./files/mobile/11.jpg","t":"./files/thumb/11.jpg"},{"l":"./files/mobile/12.jpg","n":"./files/mobile/12.jpg","t":"./files/thumb/12.jpg"},{"l":"./files/mobile/13.jpg","n":"./files/mobile/13.jpg","t":"./files/thumb/13.jpg"},{"l":"./files/mobile/14.jpg","n":"./files/mobile/14.jpg","t":"./files/thumb/14.jpg"},{"l":"./files/mobile/15.jpg","n":"./files/mobile/15.jpg","t":"./files/thumb/15.jpg"},{"l":"./files/mobile/16.jpg","n":"./files/mobile/16.jpg","t":"./files/thumb/16.jpg"},{"l":"./files/mobile/17.jpg","n":"./files/mobile/17.jpg","t":"./files/thumb/17.jpg"},{"l":"./files/mobile/18.jpg","n":"./files/mobile/18.jpg","t":"./files/thumb/18.jpg"},{"l":"./files/mobile/19.jpg","n":"./files/mobile/19.jpg","t":"./files/thumb/19.jpg"},{"l":"./files/mobile/20.jpg","n":"./files/mobile/20.jpg","t":"./files/thumb/20.jpg"},{"l":"./files/mobile/21.jpg","n":"./files/mobile/21.jpg","t":"./files/thumb/21.jpg"},{"l":"./files/mobile/22.jpg","n":"./files/mobile/22.jpg","t":"./files/thumb/22.jpg"},{"l":"./files/mobile/23.jpg","n":"./files/mobile/23.jpg","t":"./files/thumb/23.jpg"},{"l":"./files/mobile/24.jpg","n":"./files/mobile/24.jpg","t":"./files/thumb/24.jpg"},{"l":"./files/mobile/25.jpg","n":"./files/mobile/25.jpg","t":"./files/thumb/25.jpg"},{"l":"./files/mobile/26.jpg","n":"./files/mobile/26.jpg","t":"./files/thumb/26.jpg"},{"l":"./files/mobile/27.jpg","n":"./files/mobile/27.jpg","t":"./files/thumb/27.jpg"},{"l":"./files/mobile/28.jpg","n":"./files/mobile/28.jpg","t":"./files/thumb/28.jpg"},{"l":"./files/mobile/29.jpg","n":"./files/mobile/29.jpg","t":"./files/thumb/29.jpg"},{"l":"./files/mobile/30.jpg","n":"./files/mobile/30.jpg","t":"./files/thumb/30.jpg"},{"l":"./files/mobile/31.jpg","n":"./files/mobile/31.jpg","t":"./files/thumb/31.jpg"},{"l":"./files/mobile/32.jpg","n":"./files/mobile/32.jpg","t":"./files/thumb/32.jpg"},{"l":"./files/mobile/33.jpg","n":"./files/mobile/33.jpg","t":"./files/thumb/33.jpg"},{"l":"./files/mobile/34.jpg","n":"./files/mobile/34.jpg","t":"./files/thumb/34.jpg"},{"l":"./files/mobile/35.jpg","n":"./files/mobile/35.jpg","t":"./files/thumb/35.jpg"},{"l":"./files/mobile/36.jpg","n":"./files/mobile/36.jpg","t":"./files/thumb/36.jpg"},{"l":"./files/mobile/37.jpg","n":"./files/mobile/37.jpg","t":"./files/thumb/37.jpg"},{"l":"./files/mobile/38.jpg","n":"./files/mobile/38.jpg","t":"./files/thumb/38.jpg"},{"l":"./files/mobile/39.jpg","n":"./files/mobile/39.jpg","t":"./files/thumb/39.jpg"},{"l":"./files/mobile/40.jpg","n":"./files/mobile/40.jpg","t":"./files/thumb/40.jpg"},{"l":"./files/mobile/41.jpg","n":"./files/mobile/41.jpg","t":"./files/thumb/41.jpg"},{"l":"./files/mobile/42.jpg","n":"./files/mobile/42.jpg","t":"./files/thumb/42.jpg"},{"l":"./files/mobile/43.jpg","n":"./files/mobile/43.jpg","t":"./files/thumb/43.jpg"},{"l":"./files/mobile/44.jpg","n":"./files/mobile/44.jpg","t":"./files/thumb/44.jpg"},{"l":"./files/mobile/45.jpg","n":"./files/mobile/45.jpg","t":"./files/thumb/45.jpg"},{"l":"./files/mobile/46.jpg","n":"./files/mobile/46.jpg","t":"./files/thumb/46.jpg"},{"l":"./files/mobile/47.jpg","n":"./files/mobile/47.jpg","t":"./files/thumb/47.jpg"},{"l":"./files/mobile/48.jpg","n":"./files/mobile/48.jpg","t":"./files/thumb/48.jpg"},{"l":"./files/mobile/49.jpg","n":"./files/mobile/49.jpg","t":"./files/thumb/49.jpg"},{"l":"./files/mobile/50.jpg","n":"./files/mobile/50.jpg","t":"./files/thumb/50.jpg"}];
var language=[{"language" : "Chinese(Traditional)","btnFirstPage" : "\u7b2c\u4e00\u9801","btnNextPage" : "\u4e0b\u4e00\u9801","btnLastPage" : "\u6700\u540e\u4e00\u9801","btnPrePage" : "\u524d\u4e00\u9801","btnGoToHome" : "\u8fd4\u56de\u4e3b\u9801","btnDownload" : "\u4e0b\u8f09","btnSoundOn" : "\u6253\u958b\u8072\u97f3","btnSoundOff" : "\u95dc\u9589\u8072\u97f3","btnPrint" : "\u6253\u5370","btnThumb" : "\u7e2e\u7565\u5716","btnBookMark" : "\u76ee\u9304","frmBookMark" : "\u66f8\u7c64","btnZoomIn" : "\u653e\u5927","btnZoomOut" : "\u7e2e\u5c0f","btnAutoFlip" : "\u81ea\u52d5\u7ffb\u9801","btnStopAutoFlip" : "\u505c\u6b62\u7ffb\u9801","btnSocialShare" : "\u670b\u53cb\u5206\u4eab","btnHelp" : "\u5e6b\u52a9","btnAbout" : "\u95dc\u4e8e","btnSearch" : "\u641c\u7d22","btnFullscreen" : "\u5168\u5c4f","btnExitFullscreen" : "\u9000\u51fa\u5168\u5c4f","btnMore" : "\u66f4\u591a","frmPrintCaption" : "\u6253\u5370\u7a97\u53e3","frmPrintall" : "\u6253\u5370\u6240\u6709\u9801\u9762","frmPrintcurrent" : "\u6253\u5370\u7576\u524d\u9801\u9762","frmPrintRange" : "\u6253\u5370\u9801\u9762\u7bc4\u570d","frmPrintexample" : "\u793a\u4f8b: 2,3,5-10","frmPrintbtn" : "\u6253\u5370","frmShareCaption" : "\u5206\u4eab","frmShareLabel" : "\u5206\u4eab","frmShareInfo" : "\u60a8\u53ef\u4ee5\u8f15\u9b06\u5730\u5206\u4eab\u672c\u51fa\u7248\u7269\u4e2d\u5c0d\u793e\u4ea4\u7db2\u7d61\u3002\u53ea\u9700\u9ede\u64ca\u4e0b\u9762\u7684\u76f8\u61c9\u6309\u9215\u3002","frminsertLabel" : "\u63d2\u5165\u5230\u7db2\u7ad9","frminsertInfo" : "\u4f7f\u7528\u4e0b\u9762\u7684\u4ee3\u78bc\u672c\u51fa\u7248\u7269\u4e2d\u5d4c\u5165\u5230\u4f60\u7684\u7db2\u7ad9\u3002","frmaboutcaption" : "\u806f\u7e6b","frmaboutcontactinformation" : "\u806f\u7e6b\u4fe1\u606f","frmaboutADDRESS" : "\u5730\u5740","frmaboutEMAIL" : "\u96fb\u5b50\u90f5\u4ef6","frmaboutWEBSITE" : "\u7db2\u7ad9","frmaboutMOBILE" : "\u624b\u6a5f","frmaboutAUTHOR" : "\u4f5c\u8005","frmaboutDESCRIPTION" : "\u63cf\u8ff0","frmSearch" : "\u8490\u7d22","frmToc" : "\u76ee\u9304","btnTableOfContent" : "\u76ee\u9304","btnNote" : "\u7b46\u8a18","lblLast" : "\u9019\u662f\u6700\u5f8c\u4e00\u9801\u3002","lblFirst" : "\u9019\u662f\u7b2c\u4e00\u9801\u3002","lblFullscreen" : "\u9ede\u64ca\u67e5\u770b\u5168\u5c4f","lblName" : "\u540d\u7a31","lblPassword" : "\u5bc6\u78bc","lblLogin" : "\u767b\u5165","lblCancel" : "\u53d6\u6d88","lblNoName" : "\u7528\u6236\u540d\u7a31\u4e0d\u80fd\u70ba\u7a7a\u3002","lblNoPassword" : "\u5bc6\u78bc\u4e0d\u80fd\u70ba\u7a7a\u3002","lblNoCorrectLogin" : "\u8acb\u8f38\u5165\u6b63\u78ba\u7684\u7528\u6236\u540d\u548c\u5bc6\u78bc\u3002","btnVideo" : "\u8996\u983b\u756b\u5eca","btnSlideShow" : "\u5e7b\u71c8\u7247\u653e\u6620","pnlSearchInputInvalid" : "\uff08\u6700\u5c11\u9700\u8981\u8f38\u51653\u500b\u5b57\u7b26\uff09","btnDragToMove" : "\u62d6\u52d5/\u79fb\u52d5","btnPositionToMove" : "\u6ed1\u9f20\u79fb\u52d5","lblHelp1" : "\u62d6\u52d5\u9801\u9762\u89d2\u67e5\u770b","lblHelp2" : "\u6309\u5169\u4e0b\u653e\u5927\uff0c\u7e2e\u5c0f","lblCopy" : "\u8907\u88fd","lblAddToPage" : "\u6dfb\u52a0\u5230\u9801\u9762","lblPage" : "\u9801","lblTitle" : "\u6a19\u984c","lblEdit" : "\u7de8\u8f2f","lblDelete" : "\u5220\u9664","lblRemoveAll" : "\u5220\u9664\u6240\u6709","tltCursor" : "\u5149\u6a19","tltAddHighlight" : "\u6dfb\u52a0\u9ad8\u4eae","tltAddTexts" : "\u6dfb\u52a0\u6587\u5b57","tltAddShapes" : "\u6dfb\u52a0\u5f62\u72c0","tltAddNotes" : "\u6dfb\u52a0\u6ce8\u91cb","tltAddImageFile" : "\u6dfb\u52a0\u5f71\u50cf\u6a94\u6848","tltAddSignature" : "\u6dfb\u52a0\u7c3d\u540d","tltAddLine" : "\u6dfb\u52a0\u76f4\u7dda","tltAddArrow" : "\u6dfb\u52a0\u7bad\u982d","tltAddRect" : "\u6dfb\u52a0\u77e9\u5f62","tltAddEllipse" : "\u6dfb\u52a0\u6a62\u5713","lblDoubleClickToZoomIn" : "\u96d9\u64ca\u9032\u884c\u653e\u5927\u3002","lblPages" : "\u9801\u6578\uff1a","infCopyToClipboard" : "\u700f\u89bd\u5668\u4e0d\u652f\u6301\u526a\u5207\u677f\u529f\u80fd","lblDescription" : "\u6a19\u984c","frmLinkLabel" : "\u93c8\u63a5","infNotSupportHtml5" : "\u60a8\u7684\u700f\u89bd\u5668\u4e0d\u652f\u6301HTML5\u3002","frmHowToUse" : "\u4f7f\u7528\u8aaa\u660e","lblHelpPage1" : "\u9801\u89d2\u4ee5\u53ca\u4e2d\u9593\u53ef\u624b\u52d5\u7ffb\u9801","lblHelpPage2" : "\u96d9\u64ca\u6216\u8005\u7528\u62c9\u5927\u624b\u52e2\u53ef\u4ee5\u653e\u5927","lblHelpPage3" : "\u9ede\u64calogo \u67e5\u770b\u66f4\u591a\u4fe1\u606f","lblHelpPage4" : "\u9ede\u64ca\u5de5\u5177\u6b04\u6309\u9215\u9032\u884c\u641c\u7d22,\u5206\u4eab\u7b49","lblHelpPage5" : "\u5207\u63db\u6a6b\u5c4f\u8c4e\u5c4f","frmQrcodeCaption" : "\u7528\u624b\u6a5f\u6383\u63cf\u5e95\u90e8\u7684\u4e8c\u7dad\u78bc\u3002","btnClearSearch" : "\u6e05\u9664","frmSearchPrompt" : "\u6e05\u9664","btnHome" : "\u4e3b\u9801","btnFullScreen" : "\u5168\u5c4f","btnDisableFullScreen" : "\u666e\u5c4f","btnShareEmail" : "\u5206\u4eab","frmHelpCaption" : "\u5e6b\u52a9","frmHelpTip1" : "\u53ef\u4ee5\u96d9\u64ca\u9032\u884c\u653e\u5927\u6216\u7e2e\u5c0f","frmHelpTip2" : "\u62d6\u52d5\u9801\u9762\u7684\u500b\u89d2\u53ef\u4ee5\u9032\u884c\u7ffb\u9801","frmPrintBtnCaption" : "\u6253\u5370","frmPrintPrintAll" : "\u6253\u5370\u6240\u6709\u9801\u9762","frmPrintPrintCurrentPage" : "\u6253\u5370\u7576\u524d\u9801","frmPrintPrintRange" : "\u6253\u5370\u8303\u570d\uff1a","frmPrintExampleCaption" : "\u4f8b\u5982\uff1a2,5,8-26","frmPrintPreparePage" : "\u6b63\u5728\u6e96\u5099\u9801\uff1a","frmPrintPrintFailed" : "\u6253\u5370\u5931\u6557\uff1a","loginCaption" : "\u767b\u9304","loginInvalidPassword" : "\u4f60\u8f38\u5165\u7684\u5bc6\u78bc\u4e0d\u6b63\u78ba\uff01","loginPasswordLabel" : "\u5bc6\u78bc\uff1a","loginBtnLogin" : "\u767b\u9304","loginBtnCancel" : "\u53d6\u6d88","lblPagesFound" : "\u627e\u5230\u9801\u6578\uff1a","lblPageIndex" : "\u9801","frnAboutCaption" : "\u95dc\u4e8e\u6211\u5011","btnSinglePage" : "\u55ae\u9801","btnDoublePage" : "\u96d9\u9801","btnSwicthLanguage" : "\u5207\u63db\u8a9e\u8a00","tipChangeLanguage" : "\u8acb\u5728\u4e0b\u9762\u9078\u64c7\u4e00\u7a2e\u8a9e\u8a00","btnMoreOptionsLeft" : "\u66f4\u591a\u9078\u64c7","btnMoreOptionsRight" : "\u66f4\u591a\u9078\u64c7","btnFit" : "\u81ea\u52d5\u9069\u61c9","smallModeCaption" : "\u9ede\u64ca\u5168\u5c4f","btnAddAnnotation" : "\u52a0\u6ce8\u91cb","btnAnnotation" : "\u6ce8\u91cb\u5217\u8868","FlipPageEditor_SaveAndExit" : "\u4fdd\u5b58\u5e76\u9000\u51fa","FlipPageEditor_Exit" : "\u9000\u51fa","DrawToolWindow_Redo" : "\u91cd\u505a","DrawToolWindow_Undo" : "\u64a4\u92b7","DrawToolWindow_Clear" : "\u6e05\u9664","DrawToolWindow_Brush" : "\u7b46\u5237","DrawToolWindow_Width" : "\u7b46\u5237\u5bec\u5ea6","DrawToolWindow_Alpha" : "\u7b46\u5237\u900f\u660e\u5ea6","DrawToolWindow_Color" : "\u7b46\u5237\u9854\u8272","DrawToolWindow_Eraser" : "\u64e6\u9664","DrawToolWindow_Rectangular" : "\u77e9\u5f62","DrawToolWindow_Ellipse" : "\u6a62\u5713","TStuff_BorderWidth" : "\u908a\u6846\u5bec\u5e36","TStuff_BorderAlph" : "\u908a\u6846\u900f\u660e\u5ea6","TStuff_BorderColor" : "\u5b57\u9ad4\u9854\u8272","DrawToolWindow_TextNote" : "\u6587\u672c\u9644\u6ce8","AnnotMark" : "\u66f8\u7c3d","lastpagebtnHelp" : "\u6700\u540e\u4e00\u9801","firstpagebtnHelp" : "\u7b2c\u4e00\u9801","homebtnHelp" : "\u8fd4\u56de\u9996\u9801","aboubtnHelp" : "\u95dc\u4e8e","screenbtnHelp" : "\u5728\u4e00\u500b\u5b8c\u6574\u7684\u7a97\u53e3\u4e2d\u6253\u958b\u8a72\u61c9\u7528\u7a0b\u5e8f","helpbtnHelp" : "\u6253\u958b\u5e6b\u52a9\u7a97\u53e3","searchbtnHelp" : "\u5f9e\u66f8\u9801\u4e2d\u641c\u7d22","pagesbtnHelp" : "\u9810\u89bd\u5c0f\u518a\u5b50\u7684\u7e2e\u7565\u5716","bookmarkbtnHelp" : "\u6253\u958b\u76ee\u9304","AnnotmarkbtnHelp" : "\u6253\u958b\u66f8\u7c3d","printbtnHelp" : "\u6253\u5370\u5c0f\u518a\u5b50","soundbtnHelp" : "\u958b\u555f\u6216\u95dc\u9589\u7684\u8072\u97f3","sharebtnHelp" : "\u767c\u9001\u6d88\u606f","socialSharebtnHelp" : "\u767c\u9001\u6d88\u606f","zoominbtnHelp" : "\u653e\u5927","downloadbtnHelp" : "\u4e0b\u8f09\u5ba3\u50b3\u518a","pagemodlebtnHelp" : "\u55ae\u9801\u548c\u96d9\u9801","languagebtnHelp" : "\u5207\u63db\u8a9e\u8a00","annotationbtnHelp" : "\u6dfb\u52a0\u6279\u6ce8","addbookmarkbtnHelp" : "\u81ea\u5b9a\u7fa9\u66f8\u7c3d","removebookmarkbtnHelp" : "\u79fb\u9664\u66f8\u7c3d","updatebookmarkbtnHelp" : "\u66f4\u65b0\u66f8\u7c3d","btnShoppingCart" : "\u8cfc\u7269\u8eca\u6309\u9215","Help_ShoppingCartbtn" : "\u8cfc\u7269\u8eca","Help_btnNextPage" : "\u4e0b\u9801","Help_btnPrePage" : "\u4e0a\u9801","Help_btnAutoFlip" : "\u81ea\u52d5\u7ffb\u9801","Help_StopAutoFlip" : "\u505c\u6b62\u81ea\u52d5\u7ffb\u9801","btnaddbookmark" : "\u6dfb\u52a0","btndeletebookmark" : "\u522a\u9664","btnupdatebookmark" : "\u66f4\u65b0","frmyourbookmarks" : "\u4f60\u7684\u66f8\u7c3d","frmitems" : "\u9805\u76ee","DownloadFullPublication" : "\u6574\u4efd\u51fa\u7248\u7269","DownloadCurrentPage" : "\u7576\u524d\u9801","DownloadAttachedFiles" : "\u9644\u4ef6","lblLink" : "\u5206\u4eab\u93c8\u63a5","btnCopy" : "\u5fa9\u5236\u6309\u9215","restorePage" : "\u662f\u5426\u5f9e\u4e0a\u6b21\u7684\u4f4d\u7f6e\u958b\u59cb","tmpl_Backgoundsoundon" : "\u80cc\u666f\u97f3\u6a02\u958b","tmpl_Backgoundsoundoff" : "\u80cc\u666f\u97f3\u6a02\u95dc","tmpl_Flipsoundon" : "\u7ffb\u9801\u8072\u958b","tmpl_Flipsoundoff" : "\u7ffb\u9801\u8072\u95dc","Help_PageIndex" : "\u7576\u524d\u9801\u78bc","tmpl_PrintPageRanges" : "\u9801\u8303\u570d","tmpl_PrintPreview" : "\u9810\u89bd","btnSelection" : "\u9078\u64c7\u6587\u5b57","loginNameLabel" : "\u60a8\u7684\u540d\u5b57:","btnGotoPage" : "\u8df3\u81f3","btnSettings" : "\u8a2d\u7f6e","soundSettingTitle" : "\u8072\u97f3\u9078\u9805","closeFlipSound" : "\u7ffb\u9801\u8072\u958b\u95dc","closeBackgroundSound" : "\u80cc\u666f\u8072\u958b\u95dc","frmShareLinkLabel" : "\u93c8\u63a5:","frmShareBtnCopy" : "\u5fa9\u5236","frmShareItemsGroupCaption" : "\u670b\u53cb\u5206\u4eab","frmPanelTitle" : "Share it","frmShareQRcode" : "QRCode","TAnnoActionPropertyStuff_GotoPage" : "\u8f49\u5230\u9801","btnPageBack" : "\u540e\u9000","btnPageForward" : "\u524d\u9032","SelectTextCopy" : "\u6587\u672c\u5fa9\u5236","selectCopyButton" : "\u5fa9\u5236","TStuffCart_TypeCart" : "\u8cfc\u7269\u8eca","TStuffCart_DetailedQuantity" : "\u6578\u91cf","TStuffCart_DetailedPrice" : "\u50f9\u683c","ShappingCart_Close" : "\u95dc\u9589","ShappingCart_CheckOut" : "\u4ed8\u6b3e","ShappingCart_Item" : "\u9805\u76ee","ShappingCart_Total" : "\u7e3d\u8a08","ShappingCart_AddCart" : "\u6dfb\u52a0\u5230\u8cfc\u7269\u8eca","ShappingCart_InStock" : "\u6709\u8ca8","TStuffCart_DetailedCost" : "\u904b\u8cbb","TStuffCart_DetailedTime" : "\u4ea4\u8ca8\u6642\u9593","TStuffCart_DetailedDay" : "\u5929\u6578(s)","ShappingCart_NotStock" : "\u7121\u8ca8","btnCrop" : "\u622a\u5716","btnDragButton" : "\u62d6\u52d5","btnFlipBook" : "\u7ffb\u9801\u66f8","btnSlideMode" : "\u6c34\u5e73\u6ed1\u52d5\u7ffb\u9801","btnSinglePageMode" : "\u55ae\u9801\u6a21\u5f0f","btnVertical" : "\u4e0a\u4e0b\u7ffb\u9801\u700f\u89bd","btnHotizontal" : "\u5de6\u53f3\u7ffb\u9801\u700f\u89bd","btnClose" : "\u95dc\u9589","btnBookStatus" : "\u8996\u5716","checkBoxInsert" : "\u52a0\u5165\u7576\u524d\u7db2\u9801","btnQRCode" : "\u6383\u63cf\u4e8c\u7dad\u78bc","btnRotateLeft" : "\u5de6\u8f49","btnRotateRight" : "\u53f3\u8f49","lblSelectMode" : "\u8acb\u9078\u64c7\u986f\u793a\u65b9\u5f0f","frmDownloadPreview" : "\u9810\u89bd","TTActionQuiz_PlayAgain" : "\u91cd\u4f86\u4e00\u6b21","TTActionQuiz_Ration" : "\u4f60\u7684\u8a55\u5206\u662f","frmTelephone" : "Telephone list","btnDialing" : "Dialing","lblSelectMessage" : "Please copy the the text content in the text box","btnSelectText" : "Select Text","btnPhoneNumber" : "Telephone","btnWeCharShare" : "WeChat Share","btnMagnifierIn" : "Magnifying Glass","btnMagnifierOut" : "Magnifier Reduction","frmShareSmallProgram" : "smallProgram","btnMagnifier" : "Magnifier","frmPrintPrintLimitFailed" : "Sorry, you can't print the pages."}];var pageEditor =[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.220095",y:"0.114798",width:"0.134529",height:"0.013072"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://reurl.cc/MvWykK"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.220238",y:"0.190691",width:"0.131765",height:"0.013072"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://reurl.cc/GVgK6v"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.220238",y:"0.268370",width:"0.119548",height:"0.013072"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://pse.is/RWB49"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.442556",y:"0.340691",width:"0.207272",height:"0.013072"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://jbiomedsci.biomedcentral.com/"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.277381",y:"0.412120",width:"0.216423",height:"0.013072"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.springer.com/journal/10763"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.305952",y:"0.487119",width:"0.393644",height:"0.013072"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.dukeupress.edu/east-asian-science-technology-and-society"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.220238",y:"0.560780",width:"0.170092",height:"0.013072"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://ap0922.most.gov.tw/sd/"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.154762",y:"0.684240",width:"0.156039",height:"0.013900"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.most.gov.tw/"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.154762",y:"0.770852",width:"0.151282",height:"0.013900"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.sipa.gov.tw/"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.154762",y:"0.857745",width:"0.151282",height:"0.013900"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.ctsp.gov.tw/"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.154762",y:"0.944638",width:"0.151282",height:"0.013900"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.stsp.gov.tw/"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.539285",y:"0.698816",width:"0.170599",height:"0.013900"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.narlabs.org.tw/"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.539285",y:"0.785709",width:"0.155499",height:"0.013900"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.nsrrc.org.tw/"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.539285",y:"0.872602",width:"0.175907",height:"0.013900"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.ncdr.nat.gov.tw/"}}],[],[]]
var pages_information =[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];;
	bookConfig.hideMiniFullscreen=true;
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}