// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r=Math.floor;function e(r){return r!=r}var n=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;function i(r){return r===n||r===t}function a(r){return Math.abs(r)}var o,u="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),c=Object.prototype.toString,f=Object.prototype.hasOwnProperty,s="function"==typeof Symbol?Symbol:void 0,l="function"==typeof s?s.toStringTag:"",p=u&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return c.call(r);n=r[l],a=l,e=null!=(i=r)&&f.call(i,a);try{r[l]=void 0}catch(e){return c.call(r)}return t=c.call(r),e?r[l]=n:delete r[l],t}:function(r){return c.call(r)},y="function"==typeof Uint32Array,g="function"==typeof Uint32Array?Uint32Array:null,d="function"==typeof Uint32Array?Uint32Array:void 0;o=function(){var r,e,n;if("function"!=typeof g)return!1;try{e=new g(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(y&&n instanceof Uint32Array||"[object Uint32Array]"===p(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?d:function(){throw new Error("not implemented")};var v,h=o,w="function"==typeof Float64Array,b="function"==typeof Float64Array?Float64Array:null,m="function"==typeof Float64Array?Float64Array:void 0;v=function(){var r,e,n;if("function"!=typeof b)return!1;try{e=new b([1,3.14,-3.14,NaN]),n=e,r=(w&&n instanceof Float64Array||"[object Float64Array]"===p(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?m:function(){throw new Error("not implemented")};var A,_=v,E="function"==typeof Uint8Array,N="function"==typeof Uint8Array?Uint8Array:null,U="function"==typeof Uint8Array?Uint8Array:void 0;A=function(){var r,e,n;if("function"!=typeof N)return!1;try{e=new N(e=[1,3.14,-3.14,256,257]),n=e,r=(E&&n instanceof Uint8Array||"[object Uint8Array]"===p(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?U:function(){throw new Error("not implemented")};var S,k=A,x="function"==typeof Uint16Array,I="function"==typeof Uint16Array?Uint16Array:null,F="function"==typeof Uint16Array?Uint16Array:void 0;S=function(){var r,e,n;if("function"!=typeof I)return!1;try{e=new I(e=[1,3.14,-3.14,65536,65537]),n=e,r=(x&&n instanceof Uint16Array||"[object Uint16Array]"===p(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?F:function(){throw new Error("not implemented")};var j,T={uint16:S,uint8:k};(j=new T.uint16(1))[0]=4660;var O=52===new T.uint8(j.buffer)[0],V=!0===O?1:0,$=new _(1),G=new h($.buffer);function H(r){return $[0]=r,G[V]}var W=!0===O?1:0,C=new _(1),L=new h(C.buffer),P=1023,R=.6931471803691238,M=1.9082149292705877e-10,Z=0x40000000000000,X=.3333333333333333,Y=1048575,z=2146435072,q=1048576,B=1072693248;function D(r){var n,i,a,o,u,c,f,s,l,p,y,g;return 0===r?t:e(r)||r<0?NaN:(u=0,(i=H(r))<q&&(u-=54,i=H(r*=Z)),i>=z?r+r:(u+=(i>>20)-P|0,u+=(s=614244+(i&=Y)&1048576|0)>>20|0,f=(r=function(r,e){return C[0]=r,L[W]=e>>>0,C[0]}(r,i|s^B))-1,(Y&2+i)<3?0===f?0===u?0:u*R+u*M:(c=f*f*(.5-X*f),0===u?f-c:u*R-(c-u*M-f)):(s=i-398458|0,l=440401-i|0,o=(y=(g=(p=f/(2+f))*p)*g)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),a=g*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),c=a+o,(s|=l)>0?(n=.5*f*f,0===u?f-(n-p*(n+c)):u*R-(n-(p*(n+c)+u*M)-f)):0===u?f-p*(f-c):u*R-(p*(f-c)-u*M-f))))}var J=Math.ceil;function K(r,e){var n,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-r*e))}var Q=-.16666666666666632,rr=.00833333333332249,er=-.0001984126982985795,nr=27557313707070068e-22,tr=-2.5050760253406863e-8,ir=1.58969099521155e-10;function ar(r,e){var n,t,i;return n=rr+(i=r*r)*(er+i*nr)+i*(i*i)*(tr+i*ir),t=i*r,0===e?r+t*(Q+i*n):r-(i*(.5*e-t*n)-e-t*Q)}var or,ur,cr=2147483647,fr=2146435072,sr=1048575,lr=!0===O?0:1,pr=new _(1),yr=new h(pr.buffer);!0===O?(or=1,ur=0):(or=0,ur=1);var gr={HIGH:or,LOW:ur},dr=new _(1),vr=new h(dr.buffer),hr=gr.HIGH,wr=gr.LOW;function br(r,e){return vr[hr]=r,vr[wr]=e,dr[0]}var mr=1023,Ar=-1023,_r=-1074,Er=2147483648,Nr="function"==typeof Object.defineProperty?Object.defineProperty:null,Ur=Object.defineProperty;function Sr(r){return"number"==typeof r}function kr(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function xr(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+kr(i):kr(i)+r,t&&(r="-"+r)),r}var Ir=String.prototype.toLowerCase,Fr=String.prototype.toUpperCase;function jr(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!Sr(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=xr(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=xr(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===Fr.call(r.specifier)?Fr.call(n):Ir.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var Tr=Math.abs,Or=String.prototype.toLowerCase,Vr=String.prototype.toUpperCase,$r=String.prototype.replace,Gr=/e\+(\d)$/,Hr=/e-(\d)$/,Wr=/^(\d+)$/,Cr=/^(\d+)e/,Lr=/\.0$/,Pr=/\.0*e/,Rr=/(\..*[^0])0*e/;function Mr(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!Sr(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":Tr(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=$r.call(n,Rr,"$1e"),n=$r.call(n,Pr,"e"),n=$r.call(n,Lr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=$r.call(n,Gr,"e+0$1"),n=$r.call(n,Hr,"e-0$1"),r.alternate&&(n=$r.call(n,Wr,"$1."),n=$r.call(n,Cr,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===Vr.call(r.specifier)?Vr.call(n):Or.call(n)}function Zr(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var Xr=String.fromCharCode,Yr=Array.isArray;function zr(r){return r!=r}function qr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Br(r){var e,n,t,i,a,o,u,c,f,s,l,p,y;if(!Yr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,c=0;c<r.length;c++)if("string"==typeof(t=r[c]))o+=t;else{if(e=void 0!==t.precision,!(t=qr(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,f=0;f<n.length;f++)switch(i=n.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,zr(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,zr(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=jr(t);break;case"s":t.maxWidth=e?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!zr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=zr(a)?String(t.arg):Xr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=Mr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=xr(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(s=t.arg,l=t.width,p=t.padRight,y=void 0,(y=l-s.length)<0?s:s=p?s+Zr(y):Zr(y)+s)),o+=t.arg||"",u+=1}return o}var Dr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Jr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Kr(r){var e,n,t,i;for(n=[],i=0,t=Dr.exec(r);t;)(e=r.slice(i,Dr.lastIndex-t[0].length)).length&&n.push(e),n.push(Jr(t)),i=Dr.lastIndex,t=Dr.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function Qr(r){var e,n;if("string"!=typeof r)throw new TypeError(Qr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Kr(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return Br.apply(null,e)}var re,ee,ne=Object.prototype,te=ne.toString,ie=ne.__defineGetter__,ae=ne.__defineSetter__,oe=ne.__lookupGetter__,ue=ne.__lookupSetter__,ce=function(){try{return Nr({},"x",{}),!0}catch(r){return!1}}()?Ur:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===te.call(r))throw new TypeError(Qr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===te.call(n))throw new TypeError(Qr("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(oe.call(r,e)||ue.call(r,e)?(t=r.__proto__,r.__proto__=ne,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&ie&&ie.call(r,e,n.get),o&&ae&&ae.call(r,e,n.set),r};function fe(r,e,n){ce(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}!0===O?(re=1,ee=0):(re=0,ee=1);var se={HIGH:re,LOW:ee},le=new _(1),pe=new h(le.buffer),ye=se.HIGH,ge=se.LOW;function de(r,e,n,t){return le[0]=r,e[t]=pe[ye],e[t+n]=pe[ge],e}function ve(r){return de(r,[0,0],1,0)}fe(ve,"assign",de);var he=[0,0];function we(r,e){var n,t;return ve.assign(r,he,1,0),n=he[0],n&=cr,t=H(e),br(n|=t&=Er,he[1])}var be=22250738585072014e-324,me=4503599627370496;function Ae(r,n,t,o){return e(r)||i(r)?(n[o]=r,n[o+t]=0,n):0!==r&&a(r)<be?(n[o]=r*me,n[o+t]=-52,n):(n[o]=r,n[o+t]=0,n)}fe((function(r){return Ae(r,[0,0],1,0)}),"assign",Ae);var _e=2220446049250313e-31,Ee=2148532223,Ne=[0,0],Ue=[0,0];function Se(r,a){var o,u;return 0===a||0===r||e(r)||i(r)?r:(Ae(r,Ne,1,0),r=Ne[0],a+=Ne[1],a+=function(r){var e=H(r);return(e=(e&fr)>>>20)-P|0}(r),a<_r?we(0,r):a>mr?r<0?t:n:(a<=Ar?(a+=52,u=_e):u=1,ve.assign(r,Ue,1,0),o=Ue[0],o&=Ee,u*br(o|=a+P<<20,Ue[1])))}function ke(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var xe=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Ie=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Fe=16777216,je=5.960464477539063e-8,Te=ke(20),Oe=ke(20),Ve=ke(20),$e=ke(20);function Ge(e,n,t,i,a,o,u,c,f){var s,l,p,y,g,d,v,h,w;for(y=o,w=i[t],h=t,g=0;h>0;g++)l=je*w|0,$e[g]=w-Fe*l|0,w=i[h-1]+l,h-=1;if(w=Se(w,a),w-=8*r(.125*w),w-=v=0|w,p=0,a>0?(v+=g=$e[t-1]>>24-a,$e[t-1]-=g<<24-a,p=$e[t-1]>>23-a):0===a?p=$e[t-1]>>23:w>=.5&&(p=2),p>0){for(v+=1,s=0,g=0;g<t;g++)h=$e[g],0===s?0!==h&&(s=1,$e[g]=16777216-h):$e[g]=16777215-h;if(a>0)switch(a){case 1:$e[t-1]&=8388607;break;case 2:$e[t-1]&=4194303}2===p&&(w=1-w,0!==s&&(w-=Se(1,a)))}if(0===w){for(h=0,g=t-1;g>=o;g--)h|=$e[g];if(0===h){for(d=1;0===$e[o-d];d++);for(g=t+1;g<=t+d;g++){for(f[c+g]=xe[u+g],l=0,h=0;h<=c;h++)l+=e[h]*f[c+(g-h)];i[g]=l}return Ge(e,n,t+=d,i,a,o,u,c,f)}}if(0===w)for(t-=1,a-=24;0===$e[t];)t-=1,a-=24;else(w=Se(w,-a))>=Fe?(l=je*w|0,$e[t]=w-Fe*l|0,a+=24,$e[t+=1]=l):$e[t]=0|w;for(l=Se(1,a),g=t;g>=0;g--)i[g]=l*$e[g],l*=je;for(g=t;g>=0;g--){for(l=0,d=0;d<=y&&d<=t-g;d++)l+=Ie[d]*i[g+d];Ve[t-g]=l}for(l=0,g=t;g>=0;g--)l+=Ve[g];for(n[0]=0===p?l:-l,l=Ve[0]-l,g=1;g<=t;g++)l+=Ve[g];return n[1]=0===p?l:-l,7&v}function He(r,e,n,t){var i,a,o,u,c,f,s;for((a=(n-3)/24|0)<0&&(a=0),u=n-24*(a+1),f=a-(o=t-1),s=o+4,c=0;c<=s;c++)Te[c]=f<0?0:xe[f],f+=1;for(c=0;c<=4;c++){for(i=0,f=0;f<=o;f++)i+=r[f]*Te[o+(c-f)];Oe[c]=i}return Ge(r,e,4,Oe,u,4,a,o,Te)}var We=Math.round,Ce=.6366197723675814,Le=1.5707963267341256,Pe=6077100506506192e-26,Re=6077100506303966e-26,Me=20222662487959506e-37,Ze=20222662487111665e-37,Xe=84784276603689e-45,Ye=2047;function ze(r,e,n){var t,i,a,o,u;return a=r-(t=We(r*Ce))*Le,o=t*Pe,u=e>>20|0,n[0]=a-o,u-(H(n[0])>>20&Ye)>16&&(o=t*Me-((i=a)-(a=i-(o=t*Re))-o),n[0]=a-o,u-(H(n[0])>>20&Ye)>49&&(o=t*Xe-((i=a)-(a=i-(o=t*Ze))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var qe=0,Be=16777216,De=1.5707963267341256,Je=6077100506506192e-26,Ke=2*Je,Qe=3*Je,rn=4*Je,en=598523,nn=1072243195,tn=1073928572,an=1074752122,on=1074977148,un=1075183036,cn=1075388923,fn=1075594811,sn=1094263291,ln=[0,0,0],pn=[0,0];function yn(r,e){var n,t,i,a,o,u,c;if((i=H(r)&cr|0)<=nn)return e[0]=r,e[1]=0,0;if(i<=an)return(i&sr)===en?ze(r,i,e):i<=tn?r>0?(c=r-De,e[0]=c-Je,e[1]=c-e[0]-Je,1):(c=r+De,e[0]=c+Je,e[1]=c-e[0]+Je,-1):r>0?(c=r-2*De,e[0]=c-Ke,e[1]=c-e[0]-Ke,2):(c=r+2*De,e[0]=c+Ke,e[1]=c-e[0]+Ke,-2);if(i<=fn)return i<=un?i===on?ze(r,i,e):r>0?(c=r-3*De,e[0]=c-Qe,e[1]=c-e[0]-Qe,3):(c=r+3*De,e[0]=c+Qe,e[1]=c-e[0]+Qe,-3):i===cn?ze(r,i,e):r>0?(c=r-4*De,e[0]=c-rn,e[1]=c-e[0]-rn,4):(c=r+4*De,e[0]=c+rn,e[1]=c-e[0]+rn,-4);if(i<sn)return ze(r,i,e);if(i>=fr)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return pr[0]=r,yr[lr]}(r),c=br(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)ln[o]=0|c,c=(c-ln[o])*Be;for(ln[2]=c,a=3;ln[a-1]===qe;)a-=1;return u=He(ln,pn,t,a),r<0?(e[0]=-pn[0],e[1]=-pn[1],-u):(e[0]=pn[0],e[1]=pn[1],u)}var gn=[0,0],dn=2147483647,vn=1072243195,hn=1044381696,wn=2146435072;function bn(r){var e;if(e=H(r),(e&=dn)<=vn)return e<hn?1:K(r,0);if(e>=wn)return NaN;switch(3&yn(r,gn)){case 0:return K(gn[0],gn[1]);case 1:return-ar(gn[0],gn[1]);case 2:return-K(gn[0],gn[1]);default:return ar(gn[0],gn[1])}}var mn=1072243195,An=1045430272,_n=[0,0];function En(r){var e;if(e=H(r),(e&=cr)<=mn)return e<An?r:ar(r,0);if(e>=fr)return NaN;switch(3&yn(r,_n)){case 0:return ar(_n[0],_n[1]);case 1:return K(_n[0],_n[1]);case 2:return-ar(_n[0],_n[1]);default:return-K(_n[0],_n[1])}}var Nn=3.141592653589793,Un=.07721566490153287,Sn=.3224670334241136,kn=1,xn=-.07721566490153287,In=.48383612272381005,Fn=-.1475877229945939,jn=.06462494023913339,Tn=-.07721566490153287,On=1,Vn=.4189385332046727,$n=1.4616321449683622,Gn=4503599627370496,Hn=0x400000000000000,Wn=8470329472543003e-37,Cn=1.4616321449683622,Ln=-.12148629053584961,Pn=-3638676997039505e-33;function Rn(t){var o,u,c,f,s,l,p,y,g,d,v,h,w;if(e(t)||i(t))return t;if(0===t)return n;if(t<0?(o=!0,t=-t):o=!1,t<Wn)return-D(t);if(o){if(t>=Gn)return n;if(g=function(r){var n,t;return e(r)||i(r)?NaN:0===(n=a(t=r%2))||1===n?we(0,t):n<.25?En(Nn*t):n<.75?we(bn(Nn*(n=.5-n)),t):n<1.25?(t=we(1,t)-t,En(Nn*t)):n<1.75?-we(bn(Nn*(n-=1.5)),t):(t-=we(2,t),En(Nn*t))}(t),0===g)return n;u=D(Nn/a(g*t))}if(1===t||2===t)return 0;if(t<2)switch(t<=.9?(w=-D(t),t>=$n-1+.27?(v=1-t,c=0):t>=$n-1-.27?(v=t-(Cn-1),c=1):(v=t,c=2)):(w=0,t>=$n+.27?(v=2-t,c=0):t>=$n-.27?(v=t-Cn,c=1):(v=t-1,c=2)),c){case 0:l=Un+(h=v*v)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(h),s=h*(Sn+h*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(h)),w+=(p=v*l+s)-.5*v;break;case 1:l=In+(d=(h=v*v)*v)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(d),s=Fn+d*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(d),f=jn+d*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(d),w+=Ln+(p=h*l-(Pn-d*(s+v*f)));break;case 2:l=v*(Tn+v*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(v)),s=On+v*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(v),w+=-.5*v+l/s}else if(t<8)switch(c=function(e){return e<0?J(e):r(e)}(t),p=(v=t-c)*(xn+v*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(v)),y=kn+v*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(v),w=.5*v+p/y,h=1,c){case 7:h*=v+6;case 6:h*=v+5;case 5:h*=v+4;case 4:h*=v+3;case 3:w+=D(h*=v+2)}else t<Hn?(g=D(t),d=Vn+(h=1/t)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(v=h*h),w=(t-.5)*(g-1)+d):w=t*(D(t)-1);return o&&(w=u-w),w}return function(e){return function(e){return r(e)===e&&e<0}(e)?NaN:Rn(e+1)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).factorialln=e();
//# sourceMappingURL=browser.js.map
