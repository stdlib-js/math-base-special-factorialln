// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r=Math.floor;function n(r){return r!=r}var t=Number.POSITIVE_INFINITY,e=Number.NEGATIVE_INFINITY;function o(r){return r===t||r===e}function u(r){return Math.abs(r)}var i,f="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),a=Object.prototype.toString,c=Object.prototype.hasOwnProperty,l="function"==typeof Symbol?Symbol.toStringTag:"";i=f&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return a.call(r);t=r[l],u=l,n=null!=(o=r)&&c.call(o,u);try{r[l]=void 0}catch(n){return a.call(r)}return e=a.call(r),n?r[l]=t:delete r[l],e}:function(r){return a.call(r)};var y,v=i,p="function"==typeof Uint32Array,s="function"==typeof Uint32Array?Uint32Array:null,b="function"==typeof Uint32Array?Uint32Array:void 0;y=function(){var r,n,t;if("function"!=typeof s)return!1;try{n=new s(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(p&&t instanceof Uint32Array||"[object Uint32Array]"===v(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?b:function(){throw new Error("not implemented")};var w,d=y,A="function"==typeof Float64Array,_="function"==typeof Float64Array?Float64Array:null,h="function"==typeof Float64Array?Float64Array:void 0;w=function(){var r,n,t;if("function"!=typeof _)return!1;try{n=new _([1,3.14,-3.14,NaN]),t=n,r=(A&&t instanceof Float64Array||"[object Float64Array]"===v(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?h:function(){throw new Error("not implemented")};var m,N=w,U="function"==typeof Uint8Array,g="function"==typeof Uint8Array?Uint8Array:null,j="function"==typeof Uint8Array?Uint8Array:void 0;m=function(){var r,n,t;if("function"!=typeof g)return!1;try{n=new g(n=[1,3.14,-3.14,256,257]),t=n,r=(U&&t instanceof Uint8Array||"[object Uint8Array]"===v(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?j:function(){throw new Error("not implemented")};var I,O=m,S="function"==typeof Uint16Array,E="function"==typeof Uint16Array?Uint16Array:null,F="function"==typeof Uint16Array?Uint16Array:void 0;I=function(){var r,n,t;if("function"!=typeof E)return!1;try{n=new E(n=[1,3.14,-3.14,65536,65537]),t=n,r=(S&&t instanceof Uint16Array||"[object Uint16Array]"===v(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?F:function(){throw new Error("not implemented")};var T,H={uint16:I,uint8:O};(T=new H.uint16(1))[0]=4660;var G=52===new H.uint8(T.buffer)[0],P=!0===G?1:0,k=new N(1),x=new d(k.buffer);function L(r){return k[0]=r,x[P]}var M=!0===G?1:0,V=new N(1),W=new d(V.buffer),Y=1023,C=.6931471803691238,q=1.9082149292705877e-10,z=1048575;function B(r){var t,o,u,i,f,a,c,l,y,v,p,s;return 0===r?e:n(r)||r<0?NaN:(f=0,(o=L(r))<1048576&&(f-=54,o=L(r*=0x40000000000000)),o>=2146435072?r+r:(f+=(o>>20)-Y|0,f+=(l=614244+(o&=z)&1048576|0)>>20|0,c=(r=function(r,n){return V[0]=r,W[M]=n>>>0,V[0]}(r,o|1072693248^l))-1,(z&2+o)<3?0===c?0===f?0:f*C+f*q:(a=c*c*(.5-.3333333333333333*c),0===f?c-a:f*C-(a-f*q-c)):(l=o-398458|0,y=440401-o|0,i=(p=(s=(v=c/(2+c))*v)*s)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),u=s*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),a=u+i,(l|=y)>0?(t=.5*c*c,0===f?c-(t-v*(t+a)):f*C-(t-(v*(t+a)+f*q)-c)):0===f?c-v*(c-a):f*C-(v*(c-a)-f*q-c))))}var D=Math.ceil;function J(r,n){var t,e,o,u;return o=(u=r*r)*u,e=u*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(u),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(u),(o=1-(t=.5*u))+(1-o-t+(u*e-r*n))}var K=-.16666666666666632;function Q(r,n){var t,e,o;return t=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===n?r+e*(K+o*t):r-(o*(.5*n-e*t)-n-e*K)}var R,X,Z=!0===G?0:1,$=new N(1),rr=new d($.buffer);!0===G?(R=1,X=0):(R=0,X=1);var nr,tr,er={HIGH:R,LOW:X},or=new N(1),ur=new d(or.buffer),ir=er.HIGH,fr=er.LOW;function ar(r,n){return ur[ir]=r,ur[fr]=n,or[0]}!0===G?(nr=1,tr=0):(nr=0,tr=1);var cr={HIGH:nr,LOW:tr},lr=new N(1),yr=new d(lr.buffer),vr=cr.HIGH,pr=cr.LOW;function sr(r,n){return lr[0]=n,r[0]=yr[vr],r[1]=yr[pr],r}function br(r,n){return 1===arguments.length?sr([0,0],r):sr(r,n)}var wr=[0,0];function dr(r,n){var t,e;return br(wr,r),t=wr[0],t&=2147483647,e=L(n),ar(t|=e&=2147483648,wr[1])}var Ar,_r="function"==typeof Object.defineProperty?Object.defineProperty:null,hr=Object.defineProperty,mr=Object.prototype,Nr=mr.toString,Ur=mr.__defineGetter__,gr=mr.__defineSetter__,jr=mr.__lookupGetter__,Ir=mr.__lookupSetter__;function Or(r,t,e,i){return n(r)||o(r)?(t[i]=r,t[i+e]=0,t):0!==r&&u(r)<22250738585072014e-324?(t[i]=4503599627370496*r,t[i+e]=-52,t):(t[i]=r,t[i+e]=0,t)}Ar=function(){try{return _r({},"x",{}),!0}catch(r){return!1}}()?hr:function(r,n,t){var e,o,u,i;if("object"!=typeof r||null===r||"[object Array]"===Nr.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===Nr.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((o="value"in t)&&(jr.call(r,n)||Ir.call(r,n)?(e=r.__proto__,r.__proto__=mr,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),u="get"in t,i="set"in t,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&Ur&&Ur.call(r,n,t.get),i&&gr&&gr.call(r,n,t.set),r},Ar((function(r){return Or(r,[0,0],1,0)}),"assign",{configurable:!1,enumerable:!1,writable:!1,value:Or});var Sr=[0,0],Er=[0,0];function Fr(r,u){var i,f;return 0===u||0===r||n(r)||o(r)?r:(Or(r,Sr,1,0),u+=Sr[1],u+=function(r){var n=L(r);return(n=(2146435072&n)>>>20)-Y|0}(r=Sr[0]),u<-1074?dr(0,r):u>1023?r<0?e:t:(u<=-1023?(u+=52,f=2220446049250313e-31):f=1,br(Er,r),i=Er[0],i&=2148532223,f*ar(i|=u+Y<<20,Er[1])))}function Tr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Hr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Gr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Pr=16777216,kr=5.960464477539063e-8,xr=Tr(20),Lr=Tr(20),Mr=Tr(20),Vr=Tr(20);function Wr(n,t,e,o,u,i,f,a,c){var l,y,v,p,s,b,w,d,A;for(p=i,A=o[e],d=e,s=0;d>0;s++)y=kr*A|0,Vr[s]=A-Pr*y|0,A=o[d-1]+y,d-=1;if(A=Fr(A,u),A-=8*r(.125*A),A-=w=0|A,v=0,u>0?(w+=s=Vr[e-1]>>24-u,Vr[e-1]-=s<<24-u,v=Vr[e-1]>>23-u):0===u?v=Vr[e-1]>>23:A>=.5&&(v=2),v>0){for(w+=1,l=0,s=0;s<e;s++)d=Vr[s],0===l?0!==d&&(l=1,Vr[s]=16777216-d):Vr[s]=16777215-d;if(u>0)switch(u){case 1:Vr[e-1]&=8388607;break;case 2:Vr[e-1]&=4194303}2===v&&(A=1-A,0!==l&&(A-=Fr(1,u)))}if(0===A){for(d=0,s=e-1;s>=i;s--)d|=Vr[s];if(0===d){for(b=1;0===Vr[i-b];b++);for(s=e+1;s<=e+b;s++){for(c[a+s]=Hr[f+s],y=0,d=0;d<=a;d++)y+=n[d]*c[a+(s-d)];o[s]=y}return Wr(n,t,e+=b,o,u,i,f,a,c)}}if(0===A)for(e-=1,u-=24;0===Vr[e];)e-=1,u-=24;else(A=Fr(A,-u))>=Pr?(y=kr*A|0,Vr[e]=A-Pr*y|0,u+=24,Vr[e+=1]=y):Vr[e]=0|A;for(y=Fr(1,u),s=e;s>=0;s--)o[s]=y*Vr[s],y*=kr;for(s=e;s>=0;s--){for(y=0,b=0;b<=p&&b<=e-s;b++)y+=Gr[b]*o[s+b];Mr[e-s]=y}for(y=0,s=e;s>=0;s--)y+=Mr[s];for(t[0]=0===v?y:-y,y=Mr[0]-y,s=1;s<=e;s++)y+=Mr[s];return t[1]=0===v?y:-y,7&w}function Yr(r,n,t,e){var o,u,i,f,a,c,l;for((u=(t-3)/24|0)<0&&(u=0),f=t-24*(u+1),c=u-(i=e-1),l=i+4,a=0;a<=l;a++)xr[a]=c<0?0:Hr[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=i;c++)o+=r[c]*xr[i+(a-c)];Lr[a]=o}return Wr(r,n,4,Lr,f,4,u,i,xr)}var Cr=Math.round;function qr(r,n,t){var e,o,u,i,f;return u=r-1.5707963267341256*(e=Cr(.6366197723675814*r)),i=6077100506506192e-26*e,f=n>>20|0,t[0]=u-i,f-(L(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=u)-(u=o-(i=6077100506303966e-26*e))-i),t[0]=u-i,f-(L(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=u)-(u=o-(i=20222662487111665e-37*e))-i),t[0]=u-i)),t[1]=u-t[0]-i,e}var zr=1.5707963267341256,Br=6077100506506192e-26,Dr=2*Br,Jr=3*Br,Kr=4*Br,Qr=[0,0,0],Rr=[0,0];function Xr(r,n){var t,e,o,u,i,f,a;if((o=2147483647&L(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?qr(r,o,n):o<=1073928572?r>0?(a=r-zr,n[0]=a-Br,n[1]=a-n[0]-Br,1):(a=r+zr,n[0]=a+Br,n[1]=a-n[0]+Br,-1):r>0?(a=r-2*zr,n[0]=a-Dr,n[1]=a-n[0]-Dr,2):(a=r+2*zr,n[0]=a+Dr,n[1]=a-n[0]+Dr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?qr(r,o,n):r>0?(a=r-3*zr,n[0]=a-Jr,n[1]=a-n[0]-Jr,3):(a=r+3*zr,n[0]=a+Jr,n[1]=a-n[0]+Jr,-3):1075388923===o?qr(r,o,n):r>0?(a=r-4*zr,n[0]=a-Kr,n[1]=a-n[0]-Kr,4):(a=r+4*zr,n[0]=a+Kr,n[1]=a-n[0]+Kr,-4);if(o<1094263291)return qr(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return $[0]=r,rr[Z]}(r),a=ar(o-((e=(o>>20)-1046)<<20|0),t),i=0;i<2;i++)Qr[i]=0|a,a=16777216*(a-Qr[i]);for(Qr[2]=a,u=3;0===Qr[u-1];)u-=1;return f=Yr(Qr,Rr,e,u),r<0?(n[0]=-Rr[0],n[1]=-Rr[1],-f):(n[0]=Rr[0],n[1]=Rr[1],f)}var Zr=[0,0];function $r(r){var n;if(n=L(r),(n&=2147483647)<=1072243195)return n<1044381696?1:J(r,0);if(n>=2146435072)return NaN;switch(3&Xr(r,Zr)){case 0:return J(Zr[0],Zr[1]);case 1:return-Q(Zr[0],Zr[1]);case 2:return-J(Zr[0],Zr[1]);default:return Q(Zr[0],Zr[1])}}var rn=[0,0];function nn(r){var n;if(n=L(r),(n&=2147483647)<=1072243195)return n<1045430272?r:Q(r,0);if(n>=2146435072)return NaN;switch(3&Xr(r,rn)){case 0:return Q(rn[0],rn[1]);case 1:return J(rn[0],rn[1]);case 2:return-Q(rn[0],rn[1]);default:return-J(rn[0],rn[1])}}var tn=3.141592653589793,en=1.4616321449683622,on=1.4616321449683622;function un(e){var i,f,a,c,l,y,v,p,s,b,w,d,A;if(n(e)||o(e))return e;if(0===e)return t;if(e<0?(i=!0,e=-e):i=!1,e<8470329472543003e-37)return-B(e);if(i){if(e>=4503599627370496)return t;if(s=function(r){var t,e;return n(r)||o(r)?NaN:0===(t=u(e=r%2))||1===t?dr(0,e):t<.25?nn(tn*e):t<.75?dr($r(tn*(t=.5-t)),e):t<1.25?(e=dr(1,e)-e,nn(tn*e)):t<1.75?-dr($r(tn*(t-=1.5)),e):(e-=dr(2,e),nn(tn*e))}(e),0===s)return t;f=B(tn/u(s*e))}if(1===e||2===e)return 0;if(e<2)switch(e<=.9?(A=-B(e),e>=en-1+.27?(w=1-e,a=0):e>=en-1-.27?(w=e-(on-1),a=1):(w=e,a=2)):(A=0,e>=en+.27?(w=2-e,a=0):e>=en-.27?(w=e-on,a=1):(w=e-1,a=2)),a){case 0:y=.07721566490153287+(d=w*w)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(d),l=d*(.3224670334241136+d*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(d)),A+=(v=w*y+l)-.5*w;break;case 1:y=.48383612272381005+(b=(d=w*w)*w)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(b),l=b*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(b)-.1475877229945939,c=.06462494023913339+b*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(b),A+=(v=d*y-(-3638676997039505e-33-b*(l+w*c)))-.12148629053584961;break;case 2:y=w*(w*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(w)-.07721566490153287),l=1+w*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(w),A+=-.5*w+y/l}else if(e<8)switch(a=function(n){return n<0?D(n):r(n)}(e),v=(w=e-a)*(w*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(w)-.07721566490153287),p=1+w*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(w),A=.5*w+v/p,d=1,a){case 7:d*=w+6;case 6:d*=w+5;case 5:d*=w+4;case 4:d*=w+3;case 3:A+=B(d*=w+2)}else e<0x400000000000000?(s=B(e),b=.4189385332046727+(d=1/e)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(w=d*d),A=(e-.5)*(s-1)+b):A=e*(B(e)-1);return i&&(A=f-A),A}return function(n){return function(n){return r(n)===n&&n<0}(n)?NaN:un(n+1)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).factorialln=n();
//# sourceMappingURL=index.js.map
