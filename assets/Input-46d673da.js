import{s as re,c as z,I as _e,bN as Re,N as ke,H as fn,d as $e,bO as vn,bP as pn,h as E,x as o,a0 as mn,a2 as y,a1 as S,a4 as f,aM as gn,bQ as Ee,t as pe,aO as bn,ax as X,aB as ae,bR as wn,b as yn,r as C,bS as xn,a5 as M,a3 as U,a7 as Cn,a8 as Te,bT as Pn,aL as Sn,u as Ce,o as zn,k as Mn,a9 as Pe,j as An,as as Fn,aa as _n,aj as te,bU as Rn,ak as kn,aK as $n,bV as En,y as Se,f as ze,at as fe,aA as Tn,aq as P,g as Me}from"./index-5592bd6f.js";const Wn=/^(\d|\.)+$/,Ae=/(\d|\.)+/;function Gr(e,{c:a=1,offset:n=0,attachPx:i=!0}={}){if(typeof e=="number"){const u=(e+n)*a;return u===0?"0":`${u}px`}else if(typeof e=="string")if(Wn.test(e)){const u=(Number(e)+n)*a;return i?u===0?"0":`${u}px`:`${u}`}else{const u=Ae.exec(e);return u?e.replace(Ae,String((Number(u[0])+n)*a)):e}return e}function Bn(e,a){return re(e,n=>{n!==void 0&&(a.value=n)}),z(()=>e.value===void 0?a.value:e.value)}var In=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Dn=/^\w*$/;function Ln(e,a){if(_e(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||Re(e)?!0:Dn.test(e)||!In.test(e)||a!=null&&e in Object(a)}var Vn="Expected a function";function ge(e,a){if(typeof e!="function"||a!=null&&typeof a!="function")throw new TypeError(Vn);var n=function(){var i=arguments,u=a?a.apply(this,i):i[0],l=n.cache;if(l.has(u))return l.get(u);var d=e.apply(this,i);return n.cache=l.set(u,d)||l,d};return n.cache=new(ge.Cache||ke),n}ge.Cache=ke;var Nn=500;function On(e){var a=ge(e,function(i){return n.size===Nn&&n.clear(),i}),n=a.cache;return a}var jn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Un=/\\(\\)?/g,Hn=On(function(e){var a=[];return e.charCodeAt(0)===46&&a.push(""),e.replace(jn,function(n,i,u,l){a.push(u?l.replace(Un,"$1"):i||n)}),a});const Kn=Hn;function Xn(e,a){return _e(e)?e:Ln(e,a)?[e]:Kn(fn(e))}var qn=1/0;function Yn(e){if(typeof e=="string"||Re(e))return e;var a=e+"";return a=="0"&&1/e==-qn?"-0":a}function Jn(e,a){a=Xn(a,e);for(var n=0,i=a.length;e!=null&&n<i;)e=e[Yn(a[n++])];return n&&n==i?e:void 0}function Qr(e,a,n){var i=e==null?void 0:Jn(e,a);return i===void 0?n:i}function ve(e){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=a.width?String(a.width):e.defaultWidth,i=e.formats[n]||e.formats[e.defaultWidth];return i}}function H(e){return function(a,n){var i=n!=null&&n.context?String(n.context):"standalone",u;if(i==="formatting"&&e.formattingValues){var l=e.defaultFormattingWidth||e.defaultWidth,d=n!=null&&n.width?String(n.width):l;u=e.formattingValues[d]||e.formattingValues[l]}else{var c=e.defaultWidth,p=n!=null&&n.width?String(n.width):e.defaultWidth;u=e.values[p]||e.values[c]}var h=e.argumentCallback?e.argumentCallback(a):a;return u[h]}}function K(e){return function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.width,u=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],l=a.match(u);if(!l)return null;var d=l[0],c=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth],p=Array.isArray(c)?Qn(c,function(m){return m.test(d)}):Gn(c,function(m){return m.test(d)}),h;h=e.valueCallback?e.valueCallback(p):p,h=n.valueCallback?n.valueCallback(h):h;var v=a.slice(d.length);return{value:h,rest:v}}}function Gn(e,a){for(var n in e)if(e.hasOwnProperty(n)&&a(e[n]))return n}function Qn(e,a){for(var n=0;n<e.length;n++)if(a(e[n]))return n}function Zn(e){return function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=a.match(e.matchPattern);if(!i)return null;var u=i[0],l=a.match(e.parsePattern);if(!l)return null;var d=e.valueCallback?e.valueCallback(l[0]):l[0];d=n.valueCallback?n.valueCallback(d):d;var c=a.slice(u.length);return{value:d,rest:c}}}var er={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},tr=function(a,n,i){var u,l=er[a];return typeof l=="string"?u=l:n===1?u=l.one:u=l.other.replace("{{count}}",n.toString()),i!=null&&i.addSuffix?i.comparison&&i.comparison>0?"in "+u:u+" ago":u};const nr=tr;var rr={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},ar={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},or={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},ir={date:ve({formats:rr,defaultWidth:"full"}),time:ve({formats:ar,defaultWidth:"full"}),dateTime:ve({formats:or,defaultWidth:"full"})};const lr=ir;var sr={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},ur=function(a,n,i,u){return sr[a]};const dr=ur;var cr={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},hr={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},fr={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},vr={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},pr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},mr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},gr=function(a,n){var i=Number(a),u=i%100;if(u>20||u<10)switch(u%10){case 1:return i+"st";case 2:return i+"nd";case 3:return i+"rd"}return i+"th"},br={ordinalNumber:gr,era:H({values:cr,defaultWidth:"wide"}),quarter:H({values:hr,defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:H({values:fr,defaultWidth:"wide"}),day:H({values:vr,defaultWidth:"wide"}),dayPeriod:H({values:pr,defaultWidth:"wide",formattingValues:mr,defaultFormattingWidth:"wide"})};const wr=br;var yr=/^(\d+)(th|st|nd|rd)?/i,xr=/\d+/i,Cr={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Pr={any:[/^b/i,/^(a|c)/i]},Sr={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},zr={any:[/1/i,/2/i,/3/i,/4/i]},Mr={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Ar={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Fr={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},_r={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Rr={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},kr={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},$r={ordinalNumber:Zn({matchPattern:yr,parsePattern:xr,valueCallback:function(a){return parseInt(a,10)}}),era:K({matchPatterns:Cr,defaultMatchWidth:"wide",parsePatterns:Pr,defaultParseWidth:"any"}),quarter:K({matchPatterns:Sr,defaultMatchWidth:"wide",parsePatterns:zr,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:K({matchPatterns:Mr,defaultMatchWidth:"wide",parsePatterns:Ar,defaultParseWidth:"any"}),day:K({matchPatterns:Fr,defaultMatchWidth:"wide",parsePatterns:_r,defaultParseWidth:"any"}),dayPeriod:K({matchPatterns:Rr,defaultMatchWidth:"any",parsePatterns:kr,defaultParseWidth:"any"})};const Er=$r;var Tr={code:"en-US",formatDistance:nr,formatLong:lr,formatRelative:dr,localize:wr,match:Er,options:{weekStartsOn:0,firstWeekContainsDate:1}};const Wr=Tr,Br={name:"en-US",locale:Wr},Ir=Br;function Dr(e){const{mergedLocaleRef:a,mergedDateLocaleRef:n}=$e(vn,null)||{},i=z(()=>{var l,d;return(d=(l=a==null?void 0:a.value)===null||l===void 0?void 0:l[e])!==null&&d!==void 0?d:pn[e]});return{dateLocaleRef:z(()=>{var l;return(l=n==null?void 0:n.value)!==null&&l!==void 0?l:Ir}),localeRef:i}}const Lr=E({name:"Eye",render(){return o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},o("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),o("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),Vr=E({name:"EyeOff",render(){return o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},o("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),o("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),o("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),o("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),o("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),Nr=E({name:"ChevronDown",render(){return o("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),Or=mn("clear",o("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},o("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},o("g",{fill:"currentColor","fill-rule":"nonzero"},o("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),jr=y("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[S(">",[f("clear",`
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,[S("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),S("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),f("placeholder",`
 display: flex;
 `),f("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[gn({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),me=E({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(e){return Ee("-base-clear",jr,pe(e,"clsPrefix")),{handleMouseDown(a){a.preventDefault()}}},render(){const{clsPrefix:e}=this;return o("div",{class:`${e}-base-clear`},o(bn,null,{default:()=>{var a,n;return this.show?o("div",{key:"dismiss",class:`${e}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},X(this.$slots.icon,()=>[o(ae,{clsPrefix:e},{default:()=>o(Or,null)})])):o("div",{key:"icon",class:`${e}-base-clear__placeholder`},(n=(a=this.$slots).placeholder)===null||n===void 0?void 0:n.call(a))}}))}}),Ur=E({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(e,{slots:a}){return()=>{const{clsPrefix:n}=e;return o(wn,{clsPrefix:n,class:`${n}-base-suffix`,strokeWidth:24,scale:.85,show:e.loading},{default:()=>e.showArrow?o(me,{clsPrefix:n,show:e.showClear,onClear:e.onClear},{placeholder:()=>o(ae,{clsPrefix:n,class:`${n}-base-suffix__arrow`},{default:()=>X(a.default,()=>[o(Nr,null)])})}):null})}}}),We=yn("n-input");function Hr(e){let a=0;for(const n of e)a++;return a}function ne(e){return e===""||e==null}function Kr(e){const a=C(null);function n(){const{value:l}=e;if(!(l!=null&&l.focus)){u();return}const{selectionStart:d,selectionEnd:c,value:p}=l;if(d==null||c==null){u();return}a.value={start:d,end:c,beforeText:p.slice(0,d),afterText:p.slice(c)}}function i(){var l;const{value:d}=a,{value:c}=e;if(!d||!c)return;const{value:p}=c,{start:h,beforeText:v,afterText:m}=d;let x=p.length;if(p.endsWith(m))x=p.length-m.length;else if(p.startsWith(v))x=v.length;else{const T=v[h-1],A=p.indexOf(T,h-1);A!==-1&&(x=A+1)}(l=c.setSelectionRange)===null||l===void 0||l.call(c,x,x)}function u(){a.value=null}return re(e,u),{recordCursor:n,restoreCursor:i}}const Fe=E({name:"InputWordCount",setup(e,{slots:a}){const{mergedValueRef:n,maxlengthRef:i,mergedClsPrefixRef:u,countGraphemesRef:l}=$e(We),d=z(()=>{const{value:c}=n;return c===null||Array.isArray(c)?0:(l.value||Hr)(c)});return()=>{const{value:c}=i,{value:p}=n;return o("span",{class:`${u.value}-input-word-count`},xn(a.default,{value:p===null||Array.isArray(p)?"":p},()=>[c===void 0?d.value:`${d.value} / ${c}`]))}}}),Xr=y("input",`
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[f("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),f("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),f("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[S("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),S("&::placeholder",`
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `),S("&:-webkit-autofill ~",[f("placeholder","display: none;")])]),M("round",[U("textarea","border-radius: calc(var(--n-height) / 2);")]),f("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[S("span",`
 width: 100%;
 display: inline-block;
 `)]),M("textarea",[f("placeholder","overflow: visible;")]),U("autosize","width: 100%;"),M("autosize",[f("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),y("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),f("input-mirror",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),f("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[S("+",[f("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),U("textarea",[f("placeholder","white-space: nowrap;")]),f("eye",`
 transition: color .3s var(--n-bezier);
 `),M("textarea","width: 100%;",[y("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),M("resizable",[y("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),f("textarea-el, textarea-mirror, placeholder",`
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 `),f("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),M("pair",[f("input-el, placeholder","text-align: center;"),f("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `,[y("icon",`
 color: var(--n-icon-color);
 `),y("base-icon",`
 color: var(--n-icon-color);
 `)])]),M("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[f("border","border: var(--n-border-disabled);"),f("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),f("placeholder","color: var(--n-placeholder-color-disabled);"),f("separator","color: var(--n-text-color-disabled);",[y("icon",`
 color: var(--n-icon-color-disabled);
 `),y("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),y("input-word-count",`
 color: var(--n-count-text-color-disabled);
 `),f("suffix, prefix","color: var(--n-text-color-disabled);",[y("icon",`
 color: var(--n-icon-color-disabled);
 `),y("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),U("disabled",[f("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
 cursor: pointer;
 `,[S("&:hover",`
 color: var(--n-icon-color-hover);
 `),S("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),S("&:hover",[f("state-border","border: var(--n-border-hover);")]),M("focus","background-color: var(--n-color-focus);",[f("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),f("border, state-border",`
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),f("state-border",`
 border-color: #0000;
 z-index: 1;
 `),f("prefix","margin-right: 4px;"),f("suffix",`
 margin-left: 4px;
 `),f("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[y("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),y("base-clear",`
 font-size: var(--n-icon-size);
 `,[f("placeholder",[y("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),S(">",[y("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),y("base-icon",`
 font-size: var(--n-icon-size);
 `)]),y("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(e=>M(`${e}-status`,[U("disabled",[y("base-loading",`
 color: var(--n-loading-color-${e})
 `),f("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${e});
 `),f("state-border",`
 border: var(--n-border-${e});
 `),S("&:hover",[f("state-border",`
 border: var(--n-border-hover-${e});
 `)]),S("&:focus",`
 background-color: var(--n-color-focus-${e});
 `,[f("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)]),M("focus",`
 background-color: var(--n-color-focus-${e});
 `,[f("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),qr=y("input",[M("disabled",[f("input-el, textarea-el",`
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]),Yr=Object.assign(Object.assign({},Te.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,renderCount:Function,onMousedown:Function,onKeydown:Function,onKeyup:Function,onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],countGraphemes:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:Boolean,showPasswordToggle:Boolean}),Zr=E({name:"Input",props:Yr,setup(e){const{mergedClsPrefixRef:a,mergedBorderedRef:n,inlineThemeDisabled:i,mergedRtlRef:u}=Cn(e),l=Te("Input","-input",Xr,En,e,a);Pn&&Ee("-input-safari",qr,a);const d=C(null),c=C(null),p=C(null),h=C(null),v=C(null),m=C(null),x=C(null),T=Kr(x),A=C(null),{localeRef:Be}=Dr("Input"),q=C(e.defaultValue),Ie=pe(e,"value"),F=Bn(Ie,q),D=Sn(e),{mergedSizeRef:oe,mergedDisabledRef:W,mergedStatusRef:De}=D,B=C(!1),L=C(!1),_=C(!1),V=C(!1);let ie=null;const le=z(()=>{const{placeholder:t,pair:r}=e;return r?Array.isArray(t)?t:t===void 0?["",""]:[t,t]:t===void 0?[Be.value.placeholder]:[t]}),Le=z(()=>{const{value:t}=_,{value:r}=F,{value:s}=le;return!t&&(ne(r)||Array.isArray(r)&&ne(r[0]))&&s[0]}),Ve=z(()=>{const{value:t}=_,{value:r}=F,{value:s}=le;return!t&&s[1]&&(ne(r)||Array.isArray(r)&&ne(r[1]))}),se=Ce(()=>e.internalForceFocus||B.value),Ne=Ce(()=>{if(W.value||e.readonly||!e.clearable||!se.value&&!L.value)return!1;const{value:t}=F,{value:r}=se;return e.pair?!!(Array.isArray(t)&&(t[0]||t[1]))&&(L.value||r):!!t&&(L.value||r)}),ue=z(()=>{const{showPasswordOn:t}=e;if(t)return t;if(e.showPasswordToggle)return"click"}),N=C(!1),Oe=z(()=>{const{textDecoration:t}=e;return t?Array.isArray(t)?t.map(r=>({textDecoration:r})):[{textDecoration:t}]:["",""]}),be=C(void 0),je=()=>{var t,r;if(e.type==="textarea"){const{autosize:s}=e;if(s&&(be.value=(r=(t=A.value)===null||t===void 0?void 0:t.$el)===null||r===void 0?void 0:r.offsetWidth),!c.value||typeof s=="boolean")return;const{paddingTop:b,paddingBottom:w,lineHeight:g}=window.getComputedStyle(c.value),R=Number(b.slice(0,-2)),k=Number(w.slice(0,-2)),$=Number(g.slice(0,-2)),{value:O}=p;if(!O)return;if(s.minRows){const j=Math.max(s.minRows,1),he=`${R+k+$*j}px`;O.style.minHeight=he}if(s.maxRows){const j=`${R+k+$*s.maxRows}px`;O.style.maxHeight=j}}},Ue=z(()=>{const{maxlength:t}=e;return t===void 0?void 0:Number(t)});zn(()=>{const{value:t}=F;Array.isArray(t)||ce(t)});const He=Mn().proxy;function Y(t){const{onUpdateValue:r,"onUpdate:value":s,onInput:b}=e,{nTriggerFormInput:w}=D;r&&P(r,t),s&&P(s,t),b&&P(b,t),q.value=t,w()}function J(t){const{onChange:r}=e,{nTriggerFormChange:s}=D;r&&P(r,t),q.value=t,s()}function Ke(t){const{onBlur:r}=e,{nTriggerFormBlur:s}=D;r&&P(r,t),s()}function Xe(t){const{onFocus:r}=e,{nTriggerFormFocus:s}=D;r&&P(r,t),s()}function qe(t){const{onClear:r}=e;r&&P(r,t)}function Ye(t){const{onInputBlur:r}=e;r&&P(r,t)}function Je(t){const{onInputFocus:r}=e;r&&P(r,t)}function Ge(){const{onDeactivate:t}=e;t&&P(t)}function Qe(){const{onActivate:t}=e;t&&P(t)}function Ze(t){const{onClick:r}=e;r&&P(r,t)}function et(t){const{onWrapperFocus:r}=e;r&&P(r,t)}function tt(t){const{onWrapperBlur:r}=e;r&&P(r,t)}function nt(){_.value=!0}function rt(t){_.value=!1,t.target===m.value?G(t,1):G(t,0)}function G(t,r=0,s="input"){const b=t.target.value;if(ce(b),t instanceof InputEvent&&!t.isComposing&&(_.value=!1),e.type==="textarea"){const{value:g}=A;g&&g.syncUnifiedContainer()}if(ie=b,_.value)return;T.recordCursor();const w=at(b);if(w)if(!e.pair)s==="input"?Y(b):J(b);else{let{value:g}=F;Array.isArray(g)?g=[g[0],g[1]]:g=["",""],g[r]=b,s==="input"?Y(g):J(g)}He.$forceUpdate(),w||Se(T.restoreCursor)}function at(t){const{countGraphemes:r,maxlength:s,minlength:b}=e;if(r){let g;if(s!==void 0&&(g===void 0&&(g=r(t)),g>Number(s))||b!==void 0&&(g===void 0&&(g=r(t)),g<Number(s)))return!1}const{allowInput:w}=e;return typeof w=="function"?w(t):!0}function ot(t){Ye(t),t.relatedTarget===d.value&&Ge(),t.relatedTarget!==null&&(t.relatedTarget===v.value||t.relatedTarget===m.value||t.relatedTarget===c.value)||(V.value=!1),Q(t,"blur"),x.value=null}function it(t,r){Je(t),B.value=!0,V.value=!0,Qe(),Q(t,"focus"),r===0?x.value=v.value:r===1?x.value=m.value:r===2&&(x.value=c.value)}function lt(t){e.passivelyActivated&&(tt(t),Q(t,"blur"))}function st(t){e.passivelyActivated&&(B.value=!0,et(t),Q(t,"focus"))}function Q(t,r){t.relatedTarget!==null&&(t.relatedTarget===v.value||t.relatedTarget===m.value||t.relatedTarget===c.value||t.relatedTarget===d.value)||(r==="focus"?(Xe(t),B.value=!0):r==="blur"&&(Ke(t),B.value=!1))}function ut(t,r){G(t,r,"change")}function dt(t){Ze(t)}function ct(t){qe(t),e.pair?(Y(["",""]),J(["",""])):(Y(""),J(""))}function ht(t){const{onMousedown:r}=e;r&&r(t);const{tagName:s}=t.target;if(s!=="INPUT"&&s!=="TEXTAREA"){if(e.resizable){const{value:b}=d;if(b){const{left:w,top:g,width:R,height:k}=b.getBoundingClientRect(),$=14;if(w+R-$<t.clientX&&t.clientX<w+R&&g+k-$<t.clientY&&t.clientY<g+k)return}}t.preventDefault(),B.value||we()}}function ft(){var t;L.value=!0,e.type==="textarea"&&((t=A.value)===null||t===void 0||t.handleMouseEnterWrapper())}function vt(){var t;L.value=!1,e.type==="textarea"&&((t=A.value)===null||t===void 0||t.handleMouseLeaveWrapper())}function pt(){W.value||ue.value==="click"&&(N.value=!N.value)}function mt(t){if(W.value)return;t.preventDefault();const r=b=>{b.preventDefault(),Me("mouseup",document,r)};if(ze("mouseup",document,r),ue.value!=="mousedown")return;N.value=!0;const s=()=>{N.value=!1,Me("mouseup",document,s)};ze("mouseup",document,s)}function gt(t){var r;switch((r=e.onKeydown)===null||r===void 0||r.call(e,t),t.key){case"Escape":de();break;case"Enter":bt(t);break}}function bt(t){var r,s;if(e.passivelyActivated){const{value:b}=V;if(b){e.internalDeactivateOnEnter&&de();return}t.preventDefault(),e.type==="textarea"?(r=c.value)===null||r===void 0||r.focus():(s=v.value)===null||s===void 0||s.focus()}}function de(){e.passivelyActivated&&(V.value=!1,Se(()=>{var t;(t=d.value)===null||t===void 0||t.focus()}))}function we(){var t,r,s;W.value||(e.passivelyActivated?(t=d.value)===null||t===void 0||t.focus():((r=c.value)===null||r===void 0||r.focus(),(s=v.value)===null||s===void 0||s.focus()))}function wt(){var t;!((t=d.value)===null||t===void 0)&&t.contains(document.activeElement)&&document.activeElement.blur()}function yt(){var t,r;(t=c.value)===null||t===void 0||t.select(),(r=v.value)===null||r===void 0||r.select()}function xt(){W.value||(c.value?c.value.focus():v.value&&v.value.focus())}function Ct(){const{value:t}=d;t!=null&&t.contains(document.activeElement)&&t!==document.activeElement&&de()}function Pt(t){if(e.type==="textarea"){const{value:r}=c;r==null||r.scrollTo(t)}else{const{value:r}=v;r==null||r.scrollTo(t)}}function ce(t){const{type:r,pair:s,autosize:b}=e;if(!s&&b)if(r==="textarea"){const{value:w}=p;w&&(w.textContent=(t??"")+`\r
`)}else{const{value:w}=h;w&&(t?w.textContent=t:w.innerHTML="&nbsp;")}}function St(){je()}const ye=C({top:"0"});function zt(t){var r;const{scrollTop:s}=t.target;ye.value.top=`${-s}px`,(r=A.value)===null||r===void 0||r.syncUnifiedContainer()}let Z=null;Pe(()=>{const{autosize:t,type:r}=e;t&&r==="textarea"?Z=re(F,s=>{!Array.isArray(s)&&s!==ie&&ce(s)}):Z==null||Z()});let ee=null;Pe(()=>{e.type==="textarea"?ee=re(F,t=>{var r;!Array.isArray(t)&&t!==ie&&((r=A.value)===null||r===void 0||r.syncUnifiedContainer())}):ee==null||ee()}),An(We,{mergedValueRef:F,maxlengthRef:Ue,mergedClsPrefixRef:a,countGraphemesRef:pe(e,"countGraphemes")});const Mt={wrapperElRef:d,inputElRef:v,textareaElRef:c,isCompositing:_,focus:we,blur:wt,select:yt,deactivate:Ct,activate:xt,scrollTo:Pt},At=Fn("Input",u,a),xe=z(()=>{const{value:t}=oe,{common:{cubicBezierEaseInOut:r},self:{color:s,borderRadius:b,textColor:w,caretColor:g,caretColorError:R,caretColorWarning:k,textDecorationColor:$,border:O,borderDisabled:j,borderHover:he,borderFocus:Ft,placeholderColor:_t,placeholderColorDisabled:Rt,lineHeightTextarea:kt,colorDisabled:$t,colorFocus:Et,textColorDisabled:Tt,boxShadowFocus:Wt,iconSize:Bt,colorFocusWarning:It,boxShadowFocusWarning:Dt,borderWarning:Lt,borderFocusWarning:Vt,borderHoverWarning:Nt,colorFocusError:Ot,boxShadowFocusError:jt,borderError:Ut,borderFocusError:Ht,borderHoverError:Kt,clearSize:Xt,clearColor:qt,clearColorHover:Yt,clearColorPressed:Jt,iconColor:Gt,iconColorDisabled:Qt,suffixTextColor:Zt,countTextColor:en,countTextColorDisabled:tn,iconColorHover:nn,iconColorPressed:rn,loadingColor:an,loadingColorError:on,loadingColorWarning:ln,[fe("padding",t)]:sn,[fe("fontSize",t)]:un,[fe("height",t)]:dn}}=l.value,{left:cn,right:hn}=Tn(sn);return{"--n-bezier":r,"--n-count-text-color":en,"--n-count-text-color-disabled":tn,"--n-color":s,"--n-font-size":un,"--n-border-radius":b,"--n-height":dn,"--n-padding-left":cn,"--n-padding-right":hn,"--n-text-color":w,"--n-caret-color":g,"--n-text-decoration-color":$,"--n-border":O,"--n-border-disabled":j,"--n-border-hover":he,"--n-border-focus":Ft,"--n-placeholder-color":_t,"--n-placeholder-color-disabled":Rt,"--n-icon-size":Bt,"--n-line-height-textarea":kt,"--n-color-disabled":$t,"--n-color-focus":Et,"--n-text-color-disabled":Tt,"--n-box-shadow-focus":Wt,"--n-loading-color":an,"--n-caret-color-warning":k,"--n-color-focus-warning":It,"--n-box-shadow-focus-warning":Dt,"--n-border-warning":Lt,"--n-border-focus-warning":Vt,"--n-border-hover-warning":Nt,"--n-loading-color-warning":ln,"--n-caret-color-error":R,"--n-color-focus-error":Ot,"--n-box-shadow-focus-error":jt,"--n-border-error":Ut,"--n-border-focus-error":Ht,"--n-border-hover-error":Kt,"--n-loading-color-error":on,"--n-clear-color":qt,"--n-clear-size":Xt,"--n-clear-color-hover":Yt,"--n-clear-color-pressed":Jt,"--n-icon-color":Gt,"--n-icon-color-hover":nn,"--n-icon-color-pressed":rn,"--n-icon-color-disabled":Qt,"--n-suffix-text-color":Zt}}),I=i?_n("input",z(()=>{const{value:t}=oe;return t[0]}),xe,e):void 0;return Object.assign(Object.assign({},Mt),{wrapperElRef:d,inputElRef:v,inputMirrorElRef:h,inputEl2Ref:m,textareaElRef:c,textareaMirrorElRef:p,textareaScrollbarInstRef:A,rtlEnabled:At,uncontrolledValue:q,mergedValue:F,passwordVisible:N,mergedPlaceholder:le,showPlaceholder1:Le,showPlaceholder2:Ve,mergedFocus:se,isComposing:_,activated:V,showClearButton:Ne,mergedSize:oe,mergedDisabled:W,textDecorationStyle:Oe,mergedClsPrefix:a,mergedBordered:n,mergedShowPasswordOn:ue,placeholderStyle:ye,mergedStatus:De,textAreaScrollContainerWidth:be,handleTextAreaScroll:zt,handleCompositionStart:nt,handleCompositionEnd:rt,handleInput:G,handleInputBlur:ot,handleInputFocus:it,handleWrapperBlur:lt,handleWrapperFocus:st,handleMouseEnter:ft,handleMouseLeave:vt,handleMouseDown:ht,handleChange:ut,handleClick:dt,handleClear:ct,handlePasswordToggleClick:pt,handlePasswordToggleMousedown:mt,handleWrapperKeydown:gt,handleTextAreaMirrorResize:St,getTextareaScrollContainer:()=>c.value,mergedTheme:l,cssVars:i?void 0:xe,themeClass:I==null?void 0:I.themeClass,onRender:I==null?void 0:I.onRender})},render(){var e,a;const{mergedClsPrefix:n,mergedStatus:i,themeClass:u,type:l,countGraphemes:d,onRender:c}=this,p=this.$slots;return c==null||c(),o("div",{ref:"wrapperElRef",class:[`${n}-input`,u,i&&`${n}-input--${i}-status`,{[`${n}-input--rtl`]:this.rtlEnabled,[`${n}-input--disabled`]:this.mergedDisabled,[`${n}-input--textarea`]:l==="textarea",[`${n}-input--resizable`]:this.resizable&&!this.autosize,[`${n}-input--autosize`]:this.autosize,[`${n}-input--round`]:this.round&&l!=="textarea",[`${n}-input--pair`]:this.pair,[`${n}-input--focus`]:this.mergedFocus,[`${n}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.onKeyup,onKeydown:this.handleWrapperKeydown},o("div",{class:`${n}-input-wrapper`},te(p.prefix,h=>h&&o("div",{class:`${n}-input__prefix`},h)),l==="textarea"?o(Rn,{ref:"textareaScrollbarInstRef",class:`${n}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0,internalHoistYRail:!0},{default:()=>{var h,v;const{textAreaScrollContainerWidth:m}=this,x={width:this.autosize&&m&&`${m}px`};return o(kn,null,o("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${n}-input__textarea-el`,(h=this.inputProps)===null||h===void 0?void 0:h.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:d?void 0:this.maxlength,minlength:d?void 0:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(v=this.inputProps)===null||v===void 0?void 0:v.style,x],onBlur:this.handleInputBlur,onFocus:T=>this.handleInputFocus(T,2),onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?o("div",{class:`${n}-input__placeholder`,style:[this.placeholderStyle,x],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?o($n,{onResize:this.handleTextAreaMirrorResize},{default:()=>o("div",{ref:"textareaMirrorElRef",class:`${n}-input__textarea-mirror`,key:"mirror"})}):null)}}):o("div",{class:`${n}-input__input`},o("input",Object.assign({type:l==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":l},this.inputProps,{ref:"inputElRef",class:[`${n}-input__input-el`,(e=this.inputProps)===null||e===void 0?void 0:e.class],style:[this.textDecorationStyle[0],(a=this.inputProps)===null||a===void 0?void 0:a.style],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:d?void 0:this.maxlength,minlength:d?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:h=>this.handleInputFocus(h,0),onInput:h=>this.handleInput(h,0),onChange:h=>this.handleChange(h,0)})),this.showPlaceholder1?o("div",{class:`${n}-input__placeholder`},o("span",null,this.mergedPlaceholder[0])):null,this.autosize?o("div",{class:`${n}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"}," "):null),!this.pair&&te(p.suffix,h=>h||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?o("div",{class:`${n}-input__suffix`},[te(p["clear-icon-placeholder"],v=>(this.clearable||v)&&o(me,{clsPrefix:n,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>v,icon:()=>{var m,x;return(x=(m=this.$slots)["clear-icon"])===null||x===void 0?void 0:x.call(m)}})),this.internalLoadingBeforeSuffix?null:h,this.loading!==void 0?o(Ur,{clsPrefix:n,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?h:null,this.showCount&&this.type!=="textarea"?o(Fe,null,{default:v=>{var m;return(m=p.count)===null||m===void 0?void 0:m.call(p,v)}}):null,this.mergedShowPasswordOn&&this.type==="password"?o("div",{class:`${n}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?X(p["password-visible-icon"],()=>[o(ae,{clsPrefix:n},{default:()=>o(Lr,null)})]):X(p["password-invisible-icon"],()=>[o(ae,{clsPrefix:n},{default:()=>o(Vr,null)})])):null]):null)),this.pair?o("span",{class:`${n}-input__separator`},X(p.separator,()=>[this.separator])):null,this.pair?o("div",{class:`${n}-input-wrapper`},o("div",{class:`${n}-input__input`},o("input",{ref:"inputEl2Ref",type:this.type,class:`${n}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:d?void 0:this.maxlength,minlength:d?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:h=>this.handleInputFocus(h,1),onInput:h=>this.handleInput(h,1),onChange:h=>this.handleChange(h,1)}),this.showPlaceholder2?o("div",{class:`${n}-input__placeholder`},o("span",null,this.mergedPlaceholder[1])):null),te(p.suffix,h=>(this.clearable||h)&&o("div",{class:`${n}-input__suffix`},[this.clearable&&o(me,{clsPrefix:n,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var v;return(v=p["clear-icon"])===null||v===void 0?void 0:v.call(p)},placeholder:()=>{var v;return(v=p["clear-icon-placeholder"])===null||v===void 0?void 0:v.call(p)}}),h]))):null,this.mergedBordered?o("div",{class:`${n}-input__border`}):null,this.mergedBordered?o("div",{class:`${n}-input__state-border`}):null,this.showCount&&l==="textarea"?o(Fe,null,{default:h=>{var v;const{renderCount:m}=this;return m?m(h):(v=p.count)===null||v===void 0?void 0:v.call(p,h)}}):null)}});export{Lr as E,Zr as N,Dr as a,Jn as b,Xn as c,Gr as f,Qr as g,Ln as i,Yn as t,Bn as u};
