﻿var s=s_gi(s_account);s.currencyCode="USD";s.trackDownloadLinks=true;s.trackExternalLinks=true;s.trackInlineStats=true;s.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls";s.linkInternalFilters="javascript:,officelive,office.microsoft.com,login.live.com,office.live.com";s.linkLeaveQueryString=false;s.linkTrackVars="None";s.linkTrackEvents="None";s.formList="";s.trackFormList=false;s.trackPageName=true;s.useEvents=true;s.useCommerce=true;s.varUsed="eVar8";s.eventList="event3,event4,event5";function AddBrowserEventHandler(a,c,b,e){if(a.addEventListener){a.addEventListener(c,b,e);return true}else if(a.attachEvent){var d=a.attachEvent("on"+c,b);return d}else{a["on"+c]=b;return true}}AddBrowserEventHandler(window,"load",sendToOmniture,false);function FetchOmnitureImage(){s.linkTrackVars="prop23";s.linkTrackEvents="None";s.prop23=s.pageName!=null?s.pageName:document.title;s.tl(true,"o","Search Link")}function initSearch(){var a=document.getElementById("SearchButtonId");if(a!=null)AddBrowserEventHandler(a,"Click",FetchOmnitureImage,true)}initSearch();function Debug_VisualizeOmnitureTags(){var b=[];b[0]="SPAN";b[1]="DIV";b[2]="A";var d;for(d=0;d<b.length;d++){var c=document.getElementsByTagName(b[d]);if(c){var a;for(a=0;a<c.length;a++)if(c[a].onclick&&c[a].onclick.toString().match(/s_objectID='[A-za-z0-9]+'/)!=null)c[a].style.backgroundColor="yellow"}}}function InitDebugFunctions(){if(window.location.href.toLowerCase().indexOf("iwsui")!=-1&&window.location.href.toLowerCase().indexOf("debugomtag=1")!=-1)AddBrowserEventHandler(window,"load",Debug_VisualizeOmnitureTags,false)}InitDebugFunctions();s.usePlugins=true;function s_doPlugins(a){if(typeof pageTypeVar!="undefined")a.pageType=pageTypeVar;if(a.getQueryParam("cid")!=""){a.eVar12=a.getQueryParam("cid");a.eVar12=a.getValOnce(a.eVar12,"s_e12",0)}a.eVar28=a.getValOnce(a.eVar28,"s_e28",0);a.campaign=a.getQueryParam("xid");a.campaign=a.getValOnce(a.campaign,"s_campaign",0);a.prop33=a.campaign;a.prop22=a.getQueryParam("et");a.prop22=a.getValOnce(a.prop22,"s_prop22",0);a.prop31=s_account;a.prop50=document.referrer;a.eVar50=a.prop50;a.prop16=a.getQueryParam("aspxerrorpath");if(a.pageName!=null)if(a.pageName=="PortalErrorPage"||a.pageName=="HomeErrorPage"||a.pageName=="ErrorPage"){a.pageType=a.pageName;a.pageName=""}}s.doPlugins=s_doPlugins;var profileCIds="";function sendToOmniture(){try{if(typeof populatePageTrackingData!="undefined"){if(window.document.forms[0]!=null)AddBrowserEventHandler(window.document.forms[0],"click",clickMapTracking,false);else if(window.document.body!=null)AddBrowserEventHandler(window.document.body,"click",clickMapTracking,false);populatePageTrackingData();if(typeof s.eVar40!="undefined")resetEvar40Value();queueOmnitureRequestForProfiling();if(s.pageName=="Signup, Landing Page"){if(s.getQueryParam("lo")!="true"&&s.getQueryParam("rls")!="true")sendImageReqToOmniture()}else{s.prop12=profileCIds;sendImageReqToOmniture();s.prop12=""}}}catch(a){}}function sendToOmnitureForGadget(a){if(typeof populateGadgetTrackingData!="undefined"){var b=populateGadgetTrackingData(a);resetProp24Value();if(b==true)sendImageReqToOmniture()}}function clickMapTracking(b){try{if(typeof s_objectID!="undefined")if(s_objectID==null||s_objectID==""){var a=getTargetElement(b);try{sendOnClikForProfiling(a)}catch(c){}if(typeof a.href!="undefined")s_objectID=s.pageName+","+a.innerHTML}}catch(c){}}var profileCount=1;function travelNode(e){for(var c=0;c<e.childNodes.length;c++){var a=e.childNodes[c];if(a.nodeType==3)continue;if(typeof a!="undefined")if(a.getAttribute("profile")=="true"){var d=a.getAttribute("profilingJs").split("#");if(d.length==8){var b=getCIDValue(d[6]);if(b!="")if(profileCIds=="")profileCIds=b;else profileCIds+="|"+b}window.setTimeout('sendOmnitureForProfiling("'+a.getAttribute("profilingJs")+'");',profileCount*500);profileCount=profileCount+1}else travelNode(a)}}function getCIDValue(c){var b=c.split("&");for(var a=0;a<b.length;a++)if(b[a].indexOf("cid=")!=-1)return b[a].substring(b[a].indexOf("cid=")+4,b[a].length);return ""}function queueOmnitureRequestForProfiling(){try{travelNode(document.body)}catch(a){}}function sendOmnitureForProfiling(c){var a=c.split("#");if(a.length==5||a.length==8){var b=a.length==5?true:false;s.channel="Profiling";s.prop42=a[0];s.prop43=a[1];s.prop44=a[2];s.prop45=a[3];s.prop46=b?a[4]:a[5];s.prop48=s.prop46+"_OnView";s.prop49=b?"":a[7];sendImageReqToOmniture()}}function sendOnClikForProfiling(c){var b=typeof c.parentElement!="undefined"?c.parentElement:c.parentNode;while(b){if(b.getAttribute("profile")=="true"){var a=b.getAttribute("profilingJs").split("#");if(a.length==5||a.length==8){var d=a.length==5?true:false;s.channel="Profiling";s.prop42=a[0];s.prop43=a[1];s.prop44=a[2];s.prop45=a[3];s.prop46=d?a[4]:a[5];s.prop48=s.prop46+"_OnClick";s.prop49=d?"":a[7];s.eVar42=a[0];s.eVar43=a[1];s.eVar44=a[2];s.eVar45=a[3];s.eVar46=s.prop46;s.eVar48=s.prop48;s.eVar49=s.prop49;window.setTimeout(sendImageReqToOmniture,500)}break}b=typeof b.parentElement!="undefined"?b.parentElement:b.parentNode}}function sendImageReqToOmniture(){if(typeof s!="undefined"){var a=s.t();if(a)document.write(a)}}function getTargetElement(a){if(a==null)a=window.event;return typeof a.target!="undefined"?a.target:a.srcElement}function hookUpOmnitureCustomProp(b,a){if(b=="products")s.products=a;else if(b=="prop24")s.prop24=s.getQueryParam("sku")+","+s.pageName+","+a;else if(b=="prop7")s.prop7=a;else if(b=="eVar7")s.eVar7=a;else if(b=="eVar9")s.eVar9=a;else if(b=="prop5"){s.prop5=a;s.eVar5=a}else if(b=="prop26")s.prop26=a;else if(b=="prop25"){s.prop25=a;s.eVar25=a}else if(b=="prop13"){s.prop13=a;s.eVar13=a}else if(b=="events")s.events=a;else if(b=="CFProp24")s.prop24=s.prop5+","+s.prop13+","+s.pageName;else if(b=="events")s.events=a;else if(b=="prop38")s.prop38=a}function resetProp24Value(){try{if(typeof s.prop24!="undefined"){var a=s.prop24.split(",");if(a.length==6)s.prop24=a[0]+","+s.pageName+","+a[3]+","+a[4]+","+a[5];else if(a.length==3||a.length==4){s.prop24=s.prop5+","+s.prop13+","+s.pageName;s.prop29=s.prop5+","+s.pageName}}}catch(b){}}function resetEvar40Value(){try{if(typeof profilingJs!="undefined"){var c=profilingJs.split("#")[4],b=s.eVar40.split("$");for(var a=0;a<b.length;a++)if(c==b[a].split("#")[0]){if(b[a].split("#")[1]=="Ad"){s.pageName="Portal, Home Page With Ad";s.eVar40="Portal, Home Page with Ad"}else{s.pageName="Portal, Home Page";s.eVar40="Portal, Home Page"+b[a].split("#")[1]}break}}}catch(d){}}s.getValOnce=new Function("v","c","e","var s=this,k=s.c_r(c),a=new Date;if(v){a.setTime(a.getTime()+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v");s.getQueryParam=new Function("qp","d","var s=this,v='',i,t;d=d?d:'';while(qp){i=qp.indexOf(',');i=i<0?qp.length:i;t=s.gcgi(qp.substring(0,i));if(t)v+=v?d+t:t;qp=qp.substring(i==qp.length?i:i+1)}return v");s.gcgi=new Function("k","var v='',s=this;if(k&&s.wd.location.search){var q=s.wd.location.search.toLowerCase(),qq=q.indexOf('?');q=qq<0?q:q.substring(qq+1);v=s.pt(q,'&','cgif',k.toLowerCase())}return v");s.cgif=new Function("t","k","if(t){var s=this,i=t.indexOf('='),sk=i<0?t:t.substring(0,i),sv=i<0?'True':t.substring(i+1);if(sk.toLowerCase()==k)return s.epa(sv)}return ''");s.setupFormAnalysis=new Function("var s=this;if(!s.fa){s.fa=new Object;var f=s.fa;f.ol=s.wd.onload;s.wd.onload=s.faol;f.uc=s.useCommerce;f.vu=s.varUsed;f.vl=f.uc?s.eventList:'';f.tfl=s.trackFormList;f.fl=s.formList;f.va=new Array('','','','')}");s.sendFormEvent=new Function("t","pn","fn","en","var s=this,f=s.fa;t=t=='s'?t:'e';f.va[0]=pn;f.va[1]=fn;f.va[3]=t=='s'?'Success':en;s.fasl(t);f.va[1]='';f.va[3]='';");s.faol=new Function("e","var s=s_c_il["+s._in+"],f=s.fa,r=true,fo,fn,i,en,t,tf;if(!e)e=s.wd."+"event;f.os=new Array;if(f.ol)r=f.ol(e);if(s.d.forms&&s.d.forms.leng"+"th>0){for(i=s.d.forms.length-1;i>=0;i--){fo=s.d.forms[i];fn=fo.name"+";tf=f.tfl&&s.pt(f.fl,',','ee',fn)||!f.tfl&&!s.pt(f.fl,',','ee',fn);"+"if(tf){f.os[fn]=fo.onsubmit;fo.onsubmit=s.faos;f.va[1]=fn;f.va[3]='"+"No Data Entered';for(en=0;en<fo.elements.length;en++){el=fo.element"+"s[en];t=el.type;if(t&&t.toUpperCase){t=t.toUpperCase();var md=el.on"+"mousedown,kd=el.onkeydown,omd=md?md.toString():'',okd=kd?kd.toStrin"+"g():'';if(omd.indexOf('.fam(')<0&&okd.indexOf('.fam(')<0){el.s_famd"+"=md;el.s_fakd=kd;el.onmousedown=s.fam;el.onkeydown=s.fam}}}}}f.ul=s"+".wd.onunload;s.wd.onunload=s.fasl;}return r;");s.faos=new Function("e","var s=s_c_il["+s._in+"],f=s.fa,su;if(!e)e=s.wd.event;if(f.vu){s[f.v"+"u]='';f.va[1]='';f.va[3]='';}su=f.os[this.name];return su?su(e):tru"+"e;");s.fasl=new Function("e","var s=s_c_il["+s._in+"],f=s.fa,a=f.va,l=s.wd.location,ip=s.trackPag"+"eName,p=s.pageName;if(a[1]!=''&&a[3]!=''){a[0]=!p&&ip?l.host+l.path"+"name:a[0]?a[0]:p;if(!f.uc&&a[3]!='No Data Entered'){if(e=='e')a[2]="+"'Error';else if(e=='s')a[2]='Success';else a[2]='Abandon'}else a[2]"+"='';var tp=ip?a[0]+':':'',t3=e!='s'?':('+a[3]+')':'',ym=!f.uc&&a[3]"+"!='No Data Entered'?tp+a[1]+':'+a[2]+t3:tp+a[1]+t3,ltv=s.linkTrackV"+"ars,lte=s.linkTrackEvents,up=s.usePlugins;if(f.uc){s.linkTrackVars="+"ltv=='None'?f.vu+',events':ltv+',events,'+f.vu;s.linkTrackEvents=lt"+"e=='None'?f.vl:lte+','+f.vl;f.cnt=-1;if(e=='e')s.events=s.pt(f.vl,'"+",','fage',2);else if(e=='s')s.events=s.pt(f.vl,',','fage',1);else s"+".events=s.pt(f.vl,',','fage',0)}else{s.linkTrackVars=ltv=='None'?f."+"vu:ltv+','+f.vu}s[f.vu]=ym;s.usePlugins=false;s.tl(true,'o','Form A"+"nalysis');s[f.vu]='';s.usePlugins=up}return f.ul&&e!='e'&&e!='s'?f."+"ul(e):true;");s.fam=new Function("e","var s=s_c_il["+s._in+"],f=s.fa;if(!e) e=s.wd.event;var o=s.trackLas"+"tChanged,et=e.type.toUpperCase(),t=this.type.toUpperCase(),fn=this."+"form.name,en=this.name,sc=false;if(document.layers){kp=e.which;b=e."+"which}else{kp=e.keyCode;b=e.button}et=et=='MOUSEDOWN'?1:et=='KEYDOW"+"N'?2:et;if(f.ce!=en||f.cf!=fn){if(et==1&&b!=2&&'BUTTONSUBMITRESETIM"+"AGERADIOCHECKBOXSELECT-ONEFILE'.indexOf(t)>-1){f.va[1]=fn;f.va[3]=e"+"n;sc=true}else if(et==1&&b==2&&'TEXTAREAPASSWORDFILE'.indexOf(t)>-1"+"){f.va[1]=fn;f.va[3]=en;sc=true}else if(et==2&&kp!=9&&kp!=13){f.va["+"1]=fn;f.va[3]=en;sc=true}if(sc){nface=en;nfacf=fn}}if(et==1&&this.s"+"_famd)return this.s_famd(e);if(et==2&&this.s_fakd)return this.s_fak"+"d(e);");s.ee=new Function("e","n","return n&&n.toLowerCase?e.toLowerCase()==n.toLowerCase():false;");s.fage=new Function("e","a","var s=this,f=s.fa,x=f.cnt;x=x?x+1:1;f.cnt=x;return x==a?e:'';");s.vpr=new Function("vs","v","var s=this,k=vs.substring(0,2)=='s_'?vs.substring(2):vs;s['vpv_'+k]=v;s['vpm_'+k]=1");s.dt=new Function("tz","t","var d=new Date;if(t)d.setTime(t);d=new Date(d.getTime()+(d.getTimezoneOffset()*60*1000));return new Date(Math.floor(d.getTime()+(tz*60*60*1000)))");s.vh_gt=new Function("k","v","var s=this,vh='|'+s.c_r('s_vh_'+k),vi=vh.indexOf('|'+v+'='),ti=vi<0?vi:vi+2+v.length,pi=vh.indexOf('|',ti),t=ti<0?'':vh.substring(ti,pi<0?vh.length:pi);return t");s.vh_gl=new Function("k","var s=this,vh=s.c_r('s_vh_'+k),e=vh?vh.indexOf('='):0;return vh?(vh.substring(0,e?e:vh.length)):''");s.vh_s=new Function("k","v","if(k&&v){var s=this,e=new Date,st=e.getTime(),y=e.getYear(),c='s_vh_'+k,vh='|'+s.c_r(c)+'|',t=s.vh_gt(k,v);e.setYear((y<1900?y+1900:y)+5);if(t)vh=s.rep(vh,'|'+v+'='+t+'|','|');if(vh.substring(0,1)=='|')vh=vh.substring(1);if(vh.substring(vh.length-1,vh.length)=='|')vh=vh.substring(0,vh.length-1);vh=v+'=[PCC]'+(vh?'|'+vh:'');s.c_w(c,vh,e);if(s.vh_gt(k,v)!='[PCC]')return 0;vh=s.rep(vh,'[PCC]',st);s.c_w(c,vh,e)}return 1");s.visitorNamespace="microsoftoffice";var s_objectID;function s_c2fe(b){var f="",c=0,a,g,e,d;while(1){a=b.indexOf('"',c);e=b.indexOf("\\",c);d=b.indexOf("\n",c);if(a<0||e>=0&&e<a)a=e;if(a<0||d>=0&&d<a)a=d;if(a>=0){f+=(a>c?b.substring(c,a):"")+(a==d?"\\n":"\\"+b.substring(a,a+1));c=a+1}else return f+b.substring(c)}return b}function s_c2fa(d){var b=d.indexOf("(")+1,e=d.indexOf(")"),a="",c;while(b>=0&&b<e){c=d.substring(b,b+1);if(c==",")a+='","';else if("\n\r\t ".indexOf(c)<0)a+=c;b++}return a?'"'+a+'"':a}function s_c2f(cc){cc=""+cc;var fc="var f=new Function(",s=cc.indexOf(";",cc.indexOf("{")),e=cc.lastIndexOf("}"),o,a,d,q,c,f,h,x;fc+=s_c2fa(cc)+',"var s=new Object;';c=cc.substring(s+1,e);s=c.indexOf("function");while(s>=0){d=1;q="";x=0;f=c.substring(s);a=s_c2fa(f);e=o=c.indexOf("{",s);e++;while(d>0){h=c.substring(e,e+1);if(q){if(h==q&&!x)q="";if(h=="\\")x=x?0:1;else x=0}else{if(h=='"'||h=="'")q=h;if(h=="{")d++;if(h=="}")d--}if(d>0)e++}c=c.substring(0,s)+"new Function("+(a?a+",":"")+'"'+s_c2fe(c.substring(o+1,e))+'")'+c.substring(e+1);s=c.indexOf("function")}fc+=s_c2fe(c)+';return s");';eval(fc);return f}function s_gi(un,pg,ss){var c="function s_c(un,pg,ss){var s=this;s.wd=window;if(!s.wd.s_c_in){s.wd.s_c_il=new Array;s.wd.s_c_in=0;}s._il=s.wd.s_c_il;s._in=s.wd.s_c_in;s._il[s._in]=s;s.wd.s_c_in++;s.m=function(m){return (''+m).indexOf('{')<0};s.fl=function(x,l){return x?(''+x).substring(0,l):x};s.co=function(o){if(!o)return o;var n=new Object,x;for(x in o)if(x.indexOf('select')<0&&x.indexOf('filter')<0)n[x]=o[x];return n};s.num=function(x){x=''+x;for(var p=0;p<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;return 1};s.rep=function(x,o,n){var i=x.indexOf(o),l=n.length>0?n.length:1;while(x&&i>=0){x=x.substring(0,i)+n+x.substring(i+o.length);i=x.indexOf(o,i+l)}return x};s.ape=function(x){var s=this,i;x=x?s.rep(escape(''+x),'+','%2B'):x;if(x&&s.charSet&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if(('89ABCDEFabcdef').indexOf(x.substring(i,i+1))>=0)return x.substring(0,i)+'u00'+x.substring(i);i=x.indexOf('%',i)}}return x};s.epa=function(x){var s=this;return x?unescape(s.rep(''+x,'+',' ')):x};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s.m(f)?s[f](t,a):f(t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);if(t.substring(0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var s=this;s.fsg='';s.pt(x,',','fsf',f);return s.fsg};s.c_d='';s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostname,n=s.cookieDomainPeriods,p;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'.','c_gdf',0)?d.substring(p):''}return s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-60);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':'');return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i;l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r;if(s.isie&&a.apv>=5)eval('try{r=s.m(f)?s[f](a):f(a)}catch(e){r=s.m(t)?s[t](e):t(e)}');else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s.m(b)?s[b](a):b(a);else{s.eh(s.wd,'onerror',0,o);r=s.m(f)?s[f](a):f(a);s.eh(s.wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e','var s=s_c_il['+s._in+'];s.eh(window,\"onerror\",1);s.etfs=1;var c=s.t();if(c)s.d.write(c);s.etfs=0;return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.ca=function(){var s=this,imn='s_i_'+s.fun;if(s.d.images&&s.apv>=3&&!s.isopera&&(s.ns6<0||s.apv>=6.1)){s.ios=1;if(!s.d.images[imn]&&(!s.isns||(s.apv<4||s.apv>=5))){s.d.write('<im'+'g name=\"'+imn+'\" height=1 width=1 border=0 alt=\"\" style=\"position:absolute;\" >');if(!s.d.images[imn])s.ios=0}}};s.mr=function(sess,q,ta){var s=this,ns=s.visitorNamespace,unc=s.rep(s.fun,'_','-'),imn='s_i_'+s.fun,im,b,e,rs='http'+(s.ssl?'s':'')+'://'+(ns?ns:(s.ssl?'102':unc))+'.112.2O7.net/b/ss/'+s.un+'/1/H.1-Pdv-2/'+sess+'?[AQB]&ndh=1'+(q?q:'')+(s.q?s.q:'')+'&[AQE]';if(s.isie&&!s.ismac){if(s.apv>5.5)rs=s.fl(rs,4095);else rs=s.fl(rs,2047)}if(s.ios){im=s.wd[imn]?s.wd[imn]:s.d.images[imn];if(!im)im=s.wd[imn]=new Image;im.src=rs;if(rs.indexOf('&pe=')>=0&&(!ta||ta=='_self'||ta=='_top'||(s.wd.name&&ta==s.wd.name))){b=e=new Date;while(e.getTime()-b.getTime()<500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1  border=0 alt=\"\" style=\"position:absolute;\">'};s.gg=function(v){var s=this;return s.wd['s_'+v]};s.glf=function(t,a){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s=this;s.pt(v,',','glf',0)};s.gv=function(v){var s=this;return s['vpm_'+v]?s['vpv_'+v]:s[v]};s.havf=function(t,a){var s=this,b=t.substring(0,4),x=t.substring(4),n=parseInt(x),k='g_'+t,m='vpm_'+t,q=t,v=s.linkTrackVars,e=s.linkTrackEvents;s[k]=s.gv(t);if(s.lnk||s.eo){v=v?v+','+s.vl_l:'';if(v&&!s.pt(v,',','isf',t))s[k]='';if(t=='events'&&e)s[k]=s.fs(s[k],e)}s[m]=0;if(t=='pageURL')q='g';else if(t=='referrer')q='r';else if(t=='charSet'){q='ce';if(s[k]&&s.em==2)s[k]='UTF-8'}else if(t=='visitorNamespace')q='ns';else if(t=='cookieDomainPeriods')q='cdp';else if(t=='cookieLifetime')q='cl';else if(t=='visitVariableProvider')q='vvp';else if(t=='currencyCode')q='cc';else if(t=='channel')q='ch';else if(t=='campaign')q='v0';else if(s.num(x)) {if(b=='prop')q='c'+n;else if(b=='eVar')q='v'+n;else if(b=='hier'){q='h'+n;s[k]=s.fl(s[k],255)}}if(s[k]&&t!='linkName'&&t!='linkType')s.qav+='&'+q+'='+s.ape(s[k]);return ''};s.hav=function(){var s=this;s.qav='';s.pt(s.vl_t,',','havf',0);return s.qav};s.lnf=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';var te=t.indexOf('=');if(t&&te>0&&h.indexOf(t.substring(te+1))>=0)return t.substring(0,te);return ''};s.ln=function(h){var s=this,n=s.linkNames;if(n)return s.pt(n,',','lnf',h);return ''};s.ltdf=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';var qi=h.indexOf('?');h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.wd.location.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=s.co(this);s.t();s.lnk=0;if(b)return this[b](e);return true');s.bc=new Function('e','var s=s_c_il['+s._in+'];if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;s.eo=e.srcElement?e.srcElement:e.target;s.t();s.eo=0');s.ot=function(o){var a=o.type,b=o.tagName;return (a&&a.toUpperCase?a:b&&b.toUpperCase?b:o.href?'A':'').toUpperCase()};s.oid=function(o){var s=this,t=s.ot(o),p=o.protocol,c=o.onclick,n='',x=0;if(!o.s_oid){if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('javascript')<0))n=o.href;else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x=2}else if(o.value&&(t=='INPUT'||t=='SUBMIT')){n=o.value;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?','+t.substring(0,e)+',':'';return u&&u.indexOf(','+un+',')>=0?s.epa(t.substring(e+1)):''};s.rq=function(un){var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclick',s.bc);else if(s.b&&s.b.addEventListener)s.b.addEventListener('click',s.bc,false);else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function(x){var s=this,v=s.visitorSampling,g=s.visitorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))return n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un.toLowerCase();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.t=function(){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,yr=tm.getYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(yr<1900?yr+1900:yr)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tfs=s.gtfs(),ta='',q='',qs='';s.uns();if(!s.q){var tl=tfs.location,x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){j='1.1';v=s.n.javaEnabled()?'Y':'N';if(s.apv>=4){j='1.2';c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight;if(s.apv>=4.06)j='1.3'}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';j='1.2';c=screen.colorDepth;if(s.apv>=5){bw=s.d.documentElement.offsetWidth;bh=s.d.documentElement.offsetHeight;j='1.3';if(!s.ismac&&s.b){s.b.addBehavior('#default#homePage');hp=s.b.isHomePage(tl)?\"Y\":\"N\";s.b.addBehavior('#default#clientCaps');ct=s.b.connectionType}}}else r=''}if(s.pl)while(pn<s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.q=(x?'&s='+s.ape(x):'')+(c?'&c='+s.ape(c):'')+(j?'&j='+j:'')+(v?'&v='+v:'')+(k?'&k='+k:'')+(bw?'&bw='+bw:'')+(bh?'&bh='+bh:'')+(ct?'&ct='+s.ape(ct):'')+(hp?'&hp='+hp:'')+(p?'&p='+s.ape(p):'')}if(s.usePlugins)s.doPlugins(s);var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s.pageURL=s.fl(l?l:'',255);if(!s.referrer)s.referrer=s.fl(r?r:'',255);if(s.lnk||s.eo){var o=s.eo?s.eo:s.lnk;if(!o)return '';var p=s.gv('pageName'),w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(!o)return '';t=s.ot(o);n=s.oid(o);x=o.s_oidt}oc=o.onclick?''+o.onclick:'';if((oc.indexOf(\"s_gs(\")>=0&&oc.indexOf(\".s_oc(\")<0)||oc.indexOf(\".tl(\")>=0)return ''}ta=o.target;h=o.href?o.href:'';i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.linkName?s.linkName:s.ln(h);t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l))q+='&pe=lnk_'+(t=='d'||t=='e'?s.ape(t):'o')+(h?'&pev1='+s.ape(h):'')+(l?'&pev2='+s.ape(l):'');else trk=0;if(s.trackInlineStats){if(!p){p=s.gv('pageURL');w=0}t=s.ot(o);i=o.sourceIndex;if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}if(!trk&&!qs)return '';var code='';if(trk&&s.vs(sed))code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq(s.un)),ta);s.sq(trk?'':qs);s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID='';return code};s.tl=function(o,t,n){var s=this;s.lnk=s.co(o);s.linkType=t;s.linkName=n;s.t()};s.ssl=(s.wd.location.protocol.toLowerCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),i;if(v.indexOf('Opera')>=0||s.u.indexOf('Opera')>=0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}s.un=un;s.uns();s.vl_l='charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,visitVariableProvider,pageName,pageURL,referrer,currencyCode,purchaseID';s.vl_t=s.vl_l+',channel,server,pageType,campaign,state,zip,events,products,linkName,linkType';for(var n=1;n<51;n++)s.vl_t+=',prop'+n+',eVar'+n+',hier'+n;s.vl_g=s.vl_t+',trackDownloadLinks,trackExternalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,linkNames';if(pg)s.gl(s.vl_g);if(!ss){s.wds();s.ca()}}",l=window.s_c_il,n=navigator,u=n.userAgent,v=n.appVersion,e=v.indexOf("MSIE "),m=u.indexOf("Netscape6/"),a,i,s;if(l)for(i=0;i<l.length;i++){s=l[i];s.uns();if(s.un==un)return s;else if(s.pt(s.un,",","isf",un)){s=s.co(s);s.un=un;s.uns();return s}}if(e>0){a=parseInt(i=v.substring(e+5));if(a>3)a=parseFloat(i)}else if(m>0)a=parseFloat(u.substring(m+10));else a=parseFloat(v);if(a>=5&&v.indexOf("Opera")<0&&u.indexOf("Opera")<0){eval(c);return new s_c(un,pg,ss)}else s=s_c2f(c);return s(un,pg,ss)}