(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{468:function(t,e,n){var content=n(852);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(76).default)("0ce235ec",content,!0,{sourceMap:!1})},851:function(t,e,n){"use strict";n(468)},852:function(t,e,n){(e=n(75)(!1)).push([t.i,"html[data-v-2495af2a]{margin:0;padding:0;width:100vw;height:100vh;overflow:auto}",""]),t.exports=e},872:function(t,e,n){"use strict";n.r(e);var c={data:function(){return{}},mounted:function(){var canvas=this.$refs.canvas;canvas.setAttribute("width",300),canvas.setAttribute("height",300);var t=canvas.getContext("2d");t.fillStyle="green",t.fillRect(0,0,300,300)},methods:{onClick:function(){var canvas,t,img,e;canvas=this.$refs.canvas,t=this.$refs.container,img=document.createElement("img"),e=canvas.toDataURL("image/jpeg",.1),img.setAttribute("src",e),t.appendChild(img)}}},r=(n(851),n(32)),component=Object(r.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("canvas",{ref:"canvas"}),this._v(" "),e("div",{ref:"container"}),this._v(" "),e("button",{on:{click:this.onClick}},[this._v("create")])])}),[],!1,null,"2495af2a",null);e.default=component.exports}}]);