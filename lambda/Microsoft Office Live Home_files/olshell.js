﻿$=function(a){return document.getElementById(a)};if(!window.Shell)window.Shell={};if(!Shell.Runtime)Shell.Runtime={};if(!Shell.Elements)Shell.Elements={};if(!Shell.Header)Shell.Header={};if(!Shell.Toolbar)Shell.Toolbar={};if(!Shell.Util)Shell.Util={};if(!Shell.Dom)Shell.Dom={};if(!Shell.Args)Shell.Args={};if(!Shell.Browser)Shell.Browser={};Shell.Runtime.InitTime=(new Date).getTime();Shell.Elements.HeaderID="shlHeader";Shell.Elements.LeftnavID="shlLNav";Shell.Elements.FooterID="shlFooter";Shell.Elements.InitScriptID="_shl_init";Shell.Elements.TopnavBandID="shlTopNavBand";Shell.Elements.BodyWrapperID="bodyWrapper";Shell.Elements.BodyHeaderID="shlBodyHeader";Shell.Elements.LeftContentID="shlLContent";Shell.Elements.LeftNavLinks="shlLNavLinks";Shell.Elements.EngagementContentID="shlEContent";Shell.Elements.PWSpace="shlPWSpace";Shell.Elements.UserName="shlUserName";if(typeof Shell.Browser.IsIE=="undefined"||Shell.Browser.IsIE==null)Shell.Browser.IsIE=navigator.userAgent.toLowerCase().indexOf("msie")>=0?true:false;if(Shell.Browser.IsIE){Shell.Dom.GetSourceElement=function(a){return a.srcElement};Shell.Dom.AttachEvent=function(c,b,a){return c.attachEvent(b,a)};Shell.Dom.DetachEvent=function(c,b,a){return c.detachEvent(b,a)}}else{Shell.Dom.GetSourceElement=function(a){return a.target};Shell.Dom.AttachEvent=function(c,b,a){return c.addEventListener(b.substr(2),a,false)};Shell.Dom.DetachEvent=function(c,b,a){return c.removeEventListener(b.substr(2),a,false)};function shell__LoadFirefoxCompat(a){a.HTMLElement.prototype.__defineGetter__("innerText",function(){return this.textContent});a.HTMLElement.prototype.__defineSetter__("innerText",function(a){this.textContent=a})}shell__LoadFirefoxCompat(window)}Shell.Runtime.SetText=function(c,b){var a=document.getElementById(c);if(a)a.innerText=b};Shell.Runtime.SetAltText=function(c,b){var a=document.getElementById(c);if(a)a.setAttribute("alt",b)};Shell.Header.SetUserDisplayName=function(a){Shell.Runtime.SetText(Shell.Elements.UserName,a)};Shell.Header.DropMenu=function(a){if(a.className!="SHL_TopMenu_Dropped"){a.className="SHL_TopMenu_Dropped";var b=function(){document.onclick=function(b){if(!(b&&b.button==2)){a.className="";document.onclick=null}}};setTimeout(b,1)}event.returnValue=false;event.cancelBubble=true;if(event.stopPropagation)event.stopPropagation();return false};Shell.Util.UrlEncode=window.encodeURIComponent?encodeURIComponent:escape;Shell.Util.Trim=function(a){return a.replace(/^\s+|\s+$/g,"")};Shell.Util.ModifyHelpHookup=function(b,a){try{var c=$(b);c.href=a}catch(d){}};Shell.Util.HookupHelp=function(a,b){try{Shell.Util.ModifyHelpHookup(a,b);Shell.Dom.AttachEvent($(a),"onclick",Shell.Util.ShowHelp)}catch(c){}};Shell.Util.ShowHelp=function(b){var a=Shell.Dom.GetSourceElement(b);if(a.tagName=="IMG")a=a.parentNode;var c=a.href;Shell.Util.OpenHelpWindow(c);b.returnValue=false};Shell.Util.OpenHelpWindow=function(a){if(a!=null&&a!="")try{window.open(a,"_hlp011","toolbar=0,status=0,menubar=0,scrollbars=1,resizable=1,width=475,height="+Math.round(window.screen.availHeight*2/3))}catch(b){}};Shell.Util.OpenNewWindow=function(b,a){try{window.open(b,a)}catch(c){}return false};Shell.Util.OpenFeedbackWindow=function(a){window.open(a+"&UrlReferrer="+escape(window.location.href),"_fbolpop","scrollbars=yes,menubar=no,titlebar=no,location=no,width=500,height=600,resizable=no");return false};Shell.Dom.IsHidden=function(a){return a!=null?a.style.display=="none":true};Shell.Dom.FitToHeight=function(a,b){var c=false;if(Shell.Browser.IsFF)a.style.height="auto";a.style.overflowY="visible";a.style.overflowX="hidden";if(a.offsetHeight>b){a.style.overflowY="auto";c=true}if(b<=0)b=1;a.style.height=b+"px";return c};Shell.Runtime.SetDimensions=function(){var m=$(Shell.Elements.HeaderID),d=$(Shell.Elements.EngagementContentID),c=$(Shell.Elements.LeftnavID),n=$(Shell.Elements.LeftNavLinks),j=$(Shell.Elements.BodyWrapperID),b=$(Shell.Elements.BodyHeaderID),l=$(Shell.Elements.FooterID),e=$(Shell.Elements.PWSpace),w=$(Shell.Elements.LeftContentID),o=5,r=12,p=!Shell.IsQuirksMode&&(Shell.Browser.IsIE7||Shell.Browser.IsIE8||Shell.Browser.IsIE9||Shell.Browser.IsFF)?2:0,q=!Shell.IsQuirksMode?1:-7,g=0;if(!Shell.Dom.IsHidden(m))g=!Shell.IsQuirksMode?10:8;var s=Shell.Dom.IsHidden(c)?0:5,t=Shell.Dom.IsHidden(c)?0:c.offsetWidth,k=Shell.IsQuirksMode?document.body:document.getElementsByTagName("html")[0],f=parseInt(k.clientWidth-r-t-s-p),v=l?l.offsetHeight:0,a=parseInt(k.clientHeight-v-m.offsetHeight-g);if(f>20&&a>20){var h=Shell.Browser.IsFF&&b.offsetHeight>0?b.offsetHeight+8:b.offsetHeight,x=a>h?a-h:0;j.style.width=f+"px";j.style.height=x+"px";b.style.width=f+"px";if(!Shell.Dom.IsHidden(w)||!Shell.Dom.IsHidden(c)){if(e){o=e.offsetHeight?5:0;a=a-e.offsetHeight-o}if(d){var u=d.offsetHeight?5:0;a=a-d.offsetHeight-u-q}if(n)Shell.Dom.FitToHeight(n,a)}}if(Shell.WindowResizeFunArr)for(i=0;i<Shell.WindowResizeFunArr.length;i++)try{Shell.WindowResizeFunArr[i]()}catch(y){}};Shell.Util.AttachDomLoadedEvent=function(c){var b=false;if(Shell.Browser.IsFF){Shell.Dom.AttachEvent(document,"onDOMContentLoaded",c);b=true}else if(Shell.Browser.IsIE){var a=$(Shell.Elements.InitScriptID);if(a){a.onreadystatechange=function(){if($(Shell.Elements.InitScriptID).readyState=="complete")c()};setTimeout(a.onreadystatechange,0);a=null;b=true}}return b};Shell.Runtime.PreRender=function(){Shell.Dom.AttachEvent(window,"onload",Shell.Runtime.SetDimensions);Shell.Dom.AttachEvent(window,"onresize",Shell.Runtime.SetDimensions)};Shell.Runtime.PopulateEngagementTile=function(){if(Shell.Args.EngagementContent){var a=$(Shell.Elements.EngagementContentID);a.innerHTML=Shell.Args.EngagementContent}};Shell.Runtime.PostRender=function(){if(!Shell.Browser.IsFF){var a=$(Shell.Elements.FooterID);if(a)Shell.Dom.AttachEvent(a,"onresize",Shell.Runtime.SetDimensions)}Shell.Util.AttachDomLoadedEvent(Shell.Runtime.DomLoadedCallback)};Shell.Runtime.InitClientPerf=function(c,b,a){Shell.Runtime.PerfStartTime=(new Date).getTime();Shell.Runtime.ClientPerfRecordingUrl=c;Shell.Runtime.ClientPerfSamplingRate=b;Shell.Runtime.ClientPerfUseCustomStop=a=="1"};Shell.Runtime.DomLoadedCallback=function(){Shell.Runtime.SetDimensions();if(Shell.Runtime.ClientPerfUseCustomStop==false)Shell.Runtime.RecordPerfData();Shell.Runtime.PopulateEngagementTile()};Shell.Runtime.RecordPerfData=function(){try{var d=1e3,c=(new Date).getTime(),b=Shell.Runtime.ClientPerfSamplingRate;if(b>0)if(Math.floor(Math.random()*(d+1))<=b){var e=Shell.Runtime.PerfStartTime-Shell.Runtime.InitTime,f=c-Shell.Runtime.PerfStartTime,a=Shell.Runtime.ClientPerfRecordingUrl;a=a.replace("[InitDuration]",e);a=a.replace("[HFDuration]",f);a=a.replace("[PageTitle]","MFL");var g=new Image;g.src=a}}catch(h){}};Shell.Runtime.MeasureNetworkLatency=function(){try{Shell.Runtime.MeasureLatencyInitTime=(new Date).getTime();var a=new Image;document.body.appendChild(a);a.onload=Shell.Runtime.LatencyImageLoaded;Shell.Runtime.MeasureLatencyStartTime=(new Date).getTime();a.src="/resources/images/transparent.gif?nocache="+Shell.Runtime.MeasureLatencyStartTime}catch(b){}};Shell.Runtime.LatencyImageLoaded=function(){try{var b=(new Date).getTime()-Shell.Runtime.MeasureLatencyStartTime,a=Shell.Runtime.ClientPerfRecordingUrl;a=a.replace("[InitDuration]",Shell.Runtime.MeasureLatencyStartTime-Shell.Runtime.MeasureLatencyInitTime);a=a.replace("[HFDuration]",b);a=a.replace("[PageTitle]","Latency.FE");var c=new Image;c.src=a}catch(d){}};Shell.Runtime.ChangeDomain=function(c,e,d){var a=c.options[c.selectedIndex].value;if(a!=null&&a!=""&&a!=e){var b;if(a=="0")b=d+"?autoforward=no";else b=d+"?suid="+Shell.Util.UrlEncode(a);location.href=b}};Shell.Runtime.HighlightNode=function(d){var a=$("EL_SH_"+d);if(a){if(Shell.Args.LeftNavHighlightedId){var b=$("EL_SH_"+Shell.Args.LeftNavHighlightedId);if(b)b.className=b.className.replace("SHL_LNavItem-Sel","SHL_LNavItem")}var e=a.className,c="SHL_LNavItem-Sel";if(e.toLowerCase().indexOf("shl_lnavitem-indent")>=0)c+=" SHL_LNavItem-Indent";a.className=c;Shell.Args.LeftNavHighlightedId=d}};Shell.PartnerGuids={};Shell.PartnerGuids["BCM"]="Home.BCM";Shell.PartnerGuids["BIZZAPPS"]="6A703483-F725-47d1-A500-0288FF480331";Shell.PartnerGuids["COMMERCE"]="2FA23310-D061-4901-B33A-3515095EB8E4";Shell.PartnerGuids["FASTCOUNTER"]="Home.FCPRO";Shell.PartnerGuids["MARKETPLACE"]="5FC1FE0D-E470-4982-AE38-362DF7594EDB";Shell.PartnerGuids["WEBSITE"]="929BCB33-664E-42ca-A186-DE04C317681D";Shell.Util.GetPartnerLink=function(c,e,f,d){var a="/settings/pages/inprogress.aspx?pkey="+c.toUpperCase();a+="&ctag="+e;a+="&purl="+Shell.Util.UrlEncode(f);if(d)a+="&usch="+d;var b=Shell.PartnerGuids[c.toUpperCase()];if(b)a+="&pguid="+b;return Shell.Args.HomeBaseUrl+a};Shell.Util.GotoPartnerLink=function(d,b,c,e){var a=Shell.Util.GetPartnerLink(d,b,c,e);if(a!=null&&a!="")location.href=a};Shell.Util.GotoRelativeLink=function(a){if(a!=null&&a!="")location.href=Shell.Args.HomeBaseUrl+a};Shell.WindowResizeFunArr=[];Shell.Util.RegisterResizeCallback=function(a){Shell.WindowResizeFunArr[Shell.WindowResizeFunArr.length]=a};Shell.Util.GetContactusUrl=function(){return "http://www.officelive.com/Support/ContactUs"}