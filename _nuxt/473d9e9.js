(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{1136:function(t,e,n){"use strict";n(542)},1137:function(t,e,n){var r=n(3)((function(i){return i[1]}));r.push([t.i,".universal_pay img{display:block;margin:0 auto;max-width:100%}",""]),r.locals={},t.exports=r},1214:function(t,e,n){"use strict";n.r(e);var r=n(463).a,l=(n(1136),n(2)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"universal_pay"},[e("nya-container",{attrs:{title:"收款码合并"}},[e("nya-input",{staticClass:"upfile mb-15",attrs:{type:"file",name:"qrcode",accept:"image/*",label:"请上传QQ收款码",placeholder:"点击这里上传文件",fullwidth:""},on:{change:function(e){return t.readerQrcode("qq",e)}},model:{value:t.qqFile,callback:function(e){t.qqFile=e},expression:"qqFile"}}),t._v(" "),e("nya-input",{staticClass:"upfile mb-15",attrs:{type:"file",name:"qrcode",accept:"image/*",label:"请上传微信收款码",placeholder:"点击这里上传文件",fullwidth:""},on:{change:function(e){return t.readerQrcode("weixin",e)}},model:{value:t.weixinFile,callback:function(e){t.weixinFile=e},expression:"weixinFile"}}),t._v(" "),e("nya-input",{staticClass:"upfile mb-15",attrs:{type:"file",name:"qrcode",accept:"image/*",label:"请上传支付宝收款码",placeholder:"点击这里上传文件",fullwidth:""},on:{change:function(e){return t.readerQrcode("alipay",e)}},model:{value:t.alipayFile,callback:function(e){t.alipayFile=e},expression:"alipayFile"}}),t._v(" "),e("button",{staticClass:"nya-btn",attrs:{type:"button",disabled:t.loading},on:{click:t.synthetic}},[t._v("\n            "+t._s(t.loading?"合成中":"开始合成")+"\n        ")])],1),t._v(" "),e("nya-container",{directives:[{name:"show",rawName:"v-show",value:t.short_url,expression:"short_url"}],attrs:{title:"合并成功"}},[e("img",{staticClass:"qrcode",attrs:{src:t.qrcodeUrl,alt:"QRCode"}}),t._v("\n        收款地址："),e("a",{attrs:{href:t.short_url,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n            "+t._s(t.short_url)+"\n        ")])]),t._v(" "),e("nya-container",{attrs:{title:"说明"}},[e("ul",{staticClass:"nya-list"},[e("li",[e("b",[t._v("全部过程均在本地进行，不会在云端存储您的任何信息")])]),t._v(" "),e("li",[t._v("如果生成时间过长或生成失败，请使用其他浏览器，推荐使用 Chrome")]),t._v(" "),e("li",[t._v("请保存您的收款地址，可自行去转换为短链接")]),t._v(" "),e("li",[t._v("请使用新版 QQ/微信/支付宝 生成的收款码")])])])],1)}),[],!1,null,null,null);e.default=component.exports},458:function(t,e,n){"use strict";n(11);var r=n(532),l=n.n(r);e.a=function(t){return new Promise((function(e,n){var image=new Image;image.onload=function(){var canvas=document.createElement("canvas"),t=canvas.getContext("2d");canvas.width=image.width,canvas.height=image.height,t.drawImage(image,0,0);try{var r=t.getImageData(0,0,image.width,image.height),o=l()(r.data,r.width,r.height);e(o)}catch(t){n(t)}},image.src=t}))}},463:function(t,e,n){"use strict";(function(t){n(11),n(53),n(54);var r=n(458),l=n(121),o=n.n(l);e.a={name:"UniversalPay",head:function(){return this.$store.state.currentTool.head},data:function(){return{loading:!1,qqFile:"",weixinFile:"",alipayFile:"",data:{qq:{},weixin:"",alipay:""},url:"",short_url:"",qrcodeUrl:""}},methods:{synthetic:function(){var e=this;this.data.qq&&this.data.weixin&&this.data.alipay?(this.loading=!0,this.short_url="",this.qrcodeUrl="",this.url="".concat("https://tools.con.sh","/o/universal_pay_view?data=").concat(t.from(JSON.stringify(this.data)).toString("base64")),this.$axios.post("/short_link",{url:this.url,api:"dwz_cn"}).then((function(t){e.loading=!1;var n=t.data.data,r=o.a.imageSync(n,{type:"png",size:10});e.short_url=n,e.qrcodeUrl="data:image/png;base64,"+r.toString("base64")})).catch((function(t){e.loading=!1,e.$swal({type:"error",title:"获取失败",text:t});var n=e.url,r=o.a.imageSync(n,{type:"png",size:5});e.short_url=n,e.qrcodeUrl="data:image/png;base64,"+r.toString("base64")}))):this.$swal({type:"error",title:"合成失败",text:"ERROR: 请选择收款码"})},readerQrcode:function(t,e){var n=this,l=e.target.files;if(!l.length)return!1;var o=URL.createObjectURL(l[0]);Object(r.a)(o).then((function(e){var r=e.data;"qq"===t?(n.data.qq={},/qianbao/.test(r)?n.data.qq=r:(n.$swal({type:"error",title:"识别失败",text:"ERROR: 可能不是一个QQ收款码"}),n.qqFile="")):"weixin"===t?(n.data.weixin="",/wxp|tenpay/.test(r)?n.data.weixin=r:(n.$swal({type:"error",title:"识别失败",text:"ERROR: 可能不是一个微信收款码"}),n.weixinFile="")):"alipay"===t&&(n.data.alipay="",/alipay|ALIPAY/.test(r)?n.data.alipay=r:(n.$swal({type:"error",title:"识别失败",text:"ERROR: 可能不是一个支付宝收款码"}),n.alipayFile=""))})).catch((function(){n.$swal({type:"error",title:"识别失败",text:"ERROR: 可能不是一个二维码，或由于二维码内容过于复杂"})}))}}}}).call(this,n(16).Buffer)},542:function(t,e,n){var content=n(1137);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("376ce3ff",content,!0,{sourceMap:!1})}}]);