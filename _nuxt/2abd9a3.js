(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1180:function(t,e,n){"use strict";n.r(e);n(48),n(11),n(53),n(54);var l={name:"HexConvert",head:function(){return this.$store.state.currentTool.head},data:function(){return{bin:"",oct:"",dec:"",hex:"",thir_bin:""}},methods:{convert:function(t,e){if(t.length<1)this.clear();else{var n=parseInt(t,Number(e));isNaN(n)?this.clear():(this.bin=n.toString(2),this.oct=n.toString(8),this.dec=n,this.hex=n.toString(16),this.thir_bin=n.toString(32))}},clear:function(){this.bin="",this.oct="",this.dec="",this.hex="",this.thir_bin=""}}},r=n(2),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"hex_convert"},[e("nya-container",{attrs:{title:"进制转换"}},[e("nya-input",{staticClass:"mb-15",attrs:{type:"number",autocomplete:"off",label:"二进制",placeholder:"请输入二进制",value:t.bin,fullwidth:""},on:{input:function(e){return t.convert(e,2)}}}),t._v(" "),e("br"),t._v(" "),e("nya-input",{staticClass:"mb-15",attrs:{type:"number",autocomplete:"off",label:"八进制",placeholder:"请输入八进制",value:t.oct,fullwidth:""},on:{input:function(e){return t.convert(e,8)}}}),t._v(" "),e("br"),t._v(" "),e("nya-input",{staticClass:"mb-15",attrs:{type:"number",autocomplete:"off",label:"十进制",placeholder:"请输入十进制",value:t.dec,fullwidth:""},on:{input:function(e){return t.convert(e,10)}}}),t._v(" "),e("br"),t._v(" "),e("nya-input",{staticClass:"mb-15",attrs:{type:"text",autocomplete:"off",label:"十六进制",placeholder:"请输入十六进制",value:t.hex,fullwidth:""},on:{input:function(e){return t.convert(e,16)}},model:{value:t.hex,callback:function(e){t.hex=e},expression:"hex"}}),t._v(" "),e("br"),t._v(" "),e("nya-input",{staticClass:"mb-15",attrs:{type:"text",autocomplete:"off",label:"三十二进制",placeholder:"请输入三十二进制",value:t.thir_bin,fullwidth:""},on:{input:function(e){return t.convert(e,32)}}}),t._v(" "),e("br")],1),t._v(" "),e("nya-container",{attrs:{title:"说明"}},[e("ul",{staticClass:"nya-list"},[e("li",[t._v("请规范的输入相应进制，否则将无法正确计算")])])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);