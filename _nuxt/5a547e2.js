(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{321:function(t,e,n){"use strict";var r=n(8),o=n(4),l=n(80),c=n(17),d=n(10),v=n(24),f=n(162),h=n(58),m=n(5),w=n(78),_=n(57).f,x=n(22).f,N=n(13).f,z=n(322).trim,I=o.Number,E=I.prototype,j="Number"==v(w(E)),C=function(t){var e,n,r,o,l,c,d,code,v=h(t,!1);if("string"==typeof v&&v.length>2)if(43===(e=(v=z(v)).charCodeAt(0))||45===e){if(88===(n=v.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(v.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+v}for(c=(l=v.slice(2)).length,d=0;d<c;d++)if((code=l.charCodeAt(d))<48||code>o)return NaN;return parseInt(l,r)}return+v};if(l("Number",!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var G,y=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof y&&(j?m((function(){E.valueOf.call(n)})):"Number"!=v(n))?f(new I(C(e)),n,y):C(e)},A=r?_(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;A.length>k;k++)d(I,G=A[k])&&!d(y,G)&&N(y,G,x(I,G));y.prototype=E,E.constructor=y,c(o,"Number",y)}},322:function(t,e,n){var r=n(15),o="["+n(323)+"]",l=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),d=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(l,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},323:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},449:function(t,e,n){var content=n(778);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(76).default)("0a63213a",content,!0,{sourceMap:!1})},450:function(t,e,n){var content=n(780);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(76).default)("f40e10ee",content,!0,{sourceMap:!1})},473:function(t,e,n){"use strict";n.r(e);n(321);var r={props:{weishusz:Number,jiemasz:Number},data:function(){return{value:"",bitGroup:[],mi:0,ws:0,wsString:""}},computed:{bitsz:function(){return 1+this.jiemasz+this.weishusz}},watch:{value:function(t){var e=Number(t);if(this.bitGroup[0]=Number(e<0),0!==e){e<0&&(e=-e);for(var n=0;e>=2;)n++,e/=2;for(;e<1;)n--,e*=2;this.mi=n,e-=1;for(var r=0,i=0;i<this.weishusz;i++)r*=2,(e*=2)>=1&&(r+=1,e-=1);this.ws=r;for(var o=1,l=1;l<this.jiemasz;l++)o*=2;for(var c=n+(o-=1),d=0;d<this.jiemasz;d++)this.bitGroup[this.jiemasz-d]=c%2,c-=c%2,c/=2;for(var s="",v=0;v<this.weishusz;v++)this.bitGroup[this.bitGroup.length-1-v]=r%2,s="".concat(this.bitGroup[this.bitGroup.length-1-v])+s,r-=r%2,r/=2;this.wsString=s}else console.log(0)}},mounted:function(){for(var t=[],i=0;i<this.bitsz;i++)t.push(0);this.bitGroup=t}},o=(n(777),n(32)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}}),t._v(" "),n("div",{staticClass:"bit-group"},t._l(t.bitGroup,(function(e,r){return n("div",{staticClass:"bit",class:{jiema:r>0&&r<=t.jiemasz,weishu:r>t.jiemasz}},[t._v("\n      "+t._s(e)+"\n    ")])})),0),t._v(" "),n("h1",[t._v("expression")]),t._v(" "),n("div",{staticClass:"exp"},[n("div",{staticClass:"neg1"},[t._v("\n      (-1)\n      "),n("div",{staticClass:"pow-neg"},[t._v(t._s(t.bitGroup[0]))])]),t._v(" "),n("div",{staticClass:"two"},[t._v("\n      x2\n      "),n("div",{staticClass:"pow2"},[t._v(t._s(t.mi))])]),t._v(" "),n("div",{staticClass:"weishu"},[t._v("\n      x1."+t._s(t.wsString)+"\n      "),n("span",{staticClass:"tag"},[t._v("binary")])])])])}),[],!1,null,"e98dd914",null);e.default=component.exports},777:function(t,e,n){"use strict";n(449)},778:function(t,e,n){(e=n(75)(!1)).push([t.i,"html[data-v-e98dd914]{margin:0;padding:0;width:100vw;height:100vh}.bit-group[data-v-e98dd914]{display:block}.bit-group .bit[data-v-e98dd914]{display:inline-flex;text-align:center;align-items:center;justify-content:center;height:1.5em;width:1.5em;box-sizing:border-box;border:1px solid #000}.bit-group .bit.jiema[data-v-e98dd914]{background-color:#90ee90}.bit-group .bit.weishu[data-v-e98dd914]{background-color:#f08080}.exp[data-v-e98dd914]{font-size:3em}.exp[data-v-e98dd914],.exp .neg1[data-v-e98dd914]{display:inline-flex}.exp .neg1 .pow-neg[data-v-e98dd914]{font-size:.5em}.exp .two[data-v-e98dd914]{background-color:#90ee90;display:inline-flex}.exp .two .pow2[data-v-e98dd914]{font-size:.5em}.exp .weishu[data-v-e98dd914]{background-color:#f08080;display:inline-flex}.exp .weishu .tag[data-v-e98dd914]{font-size:.5rem}",""]),t.exports=e},779:function(t,e,n){"use strict";n(450)},780:function(t,e,n){(e=n(75)(!1)).push([t.i,"html[data-v-4b272b0b]{margin:0;padding:0;width:100vw;height:100vh}",""]),t.exports=e},864:function(t,e,n){"use strict";n.r(e);var r={components:{Decimal:n(473).default},data:function(){return{}}},o=(n(779),n(32)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h3",[this._v("未处理非规约数 和 0")]),this._v(" "),e("decimal",{attrs:{weishusz:23,jiemasz:8}}),this._v(" "),e("decimal",{attrs:{weishusz:52,jiemasz:11}})],1)}),[],!1,null,"4b272b0b",null);e.default=component.exports;installComponents(component,{Decimal:n(473).default})}}]);