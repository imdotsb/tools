(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{1115:function(t,o,e){"use strict";e(535)},1116:function(t,o,e){var r=e(3)((function(i){return i[1]}));r.push([t.i,".rich_text_editor .ql-editor{background-color:var(--t2);max-height:37.5rem;min-height:18.75rem}.rich_text_editor .ql-toolbar{background-color:var(--t2);border-color:var(--t1)}.rich_text_editor .ql-toolbar .ql-formats .ql-fill{fill:var(--t1)}.rich_text_editor .ql-toolbar .ql-formats .ql-stroke{stroke:var(--t1)}.rich_text_editor .ql-toolbar .ql-formats .ql-picker{color:var(--t1)}.rich_text_editor .ql-toolbar .ql-formats .ql-active{color:var(--theme)}.rich_text_editor .ql-toolbar .ql-formats .ql-active .ql-fill{fill:var(--theme)}.rich_text_editor .ql-toolbar .ql-formats .ql-active .ql-stroke{stroke:var(--theme)}.rich_text_editor .ql-container.ql-snow{border-color:var(--t1)}.rich_text_editor .nya-btn{margin:.9375rem 0}.rich_text_editor .quill-code{border:none;height:auto;width:100%}.rich_text_editor .quill-code>code{border:.0625rem solid var(--t1);border-radius:0;box-sizing:border-box;display:block;margin:0;min-height:10rem;overflow-y:auto;padding:1rem;resize:vertical;width:100%}",""]),r.locals={},t.exports=r},1198:function(t,o,e){"use strict";e.r(o);var r=e(50),l=(e(1105),e(1107),e(1109),e(454)),n=e.n(l),c=(e(1111),{name:"RichTextEditor",head:function(){return this.$store.state.currentTool.head},components:{quillEditor:e(1113).quillEditor,Dynamic:r.a},data:function(){return{showCode:!1,content:'<h2 class="ql-align-center"><span class="ql-font-serif">Text content loading..</span></h2>',editorOption:{modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{font:[]}],[{color:[]},{background:[]}],[{align:[]}],["clean"],["link","image","video"]],syntax:{highlight:function(text){return n.a.highlightAuto(text).value}}}}}},computed:{editor:function(){return this.$refs.myTextEditor.quill},contentCode:function(){return n.a.highlightAuto(this.content).value}},mounted:function(){this.content="<h2>Tools - 一个轻量的工具集合</h2>"},methods:{}}),d=(e(1115),e(2)),component=Object(d.a)(c,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"rich_text_editor"},[o("client-only",[o("quill-editor",{ref:"myTextEditor",attrs:{options:t.editorOption},model:{value:t.content,callback:function(o){t.content=o},expression:"content"}}),t._v(" "),o("button",{staticClass:"nya-btn",on:{click:function(o){t.showCode=!t.showCode}}},[t._v("\n            "+t._s(t.showCode?"隐藏":"显示")+" HTML 代码\n        ")]),t._v(" "),t.showCode?o("div",{staticClass:"quill-code"},[o("Dynamic",{staticClass:"hljs xml",attrs:{tag:"code",template:t.contentCode}})],1):t._e()],1)],1)}),[],!1,null,null,null);o.default=component.exports},535:function(t,o,e){var content=e(1116);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(4).default)("5d39fbb2",content,!0,{sourceMap:!1})}}]);