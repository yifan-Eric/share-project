webpackJsonp([3],{"5zde":function(t,e,i){i("zQR9"),i("qyJz"),t.exports=i("FeBl").Array.from},AA6R:function(t,e,i){"use strict";function s(){return(s=Object.assign||function(t){for(var e,i=1;i<arguments.length;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)}var a=["attrs","props","domProps"],n=["class","style","directives"],o=["on","nativeOn"],r=function(t,e){return function(){t&&t.apply(this,arguments),e&&e.apply(this,arguments)}};t.exports=function(t){return t.reduce(function(t,e){for(var i in e)if(t[i])if(-1!==a.indexOf(i))t[i]=s({},t[i],e[i]);else if(-1!==n.indexOf(i)){var c=t[i]instanceof Array?t[i]:[t[i]],l=e[i]instanceof Array?e[i]:[e[i]];t[i]=c.concat(l)}else if(-1!==o.indexOf(i))for(var u in e[i])if(t[i][u]){var f=t[i][u]instanceof Array?t[i][u]:[t[i][u]],h=e[i][u]instanceof Array?e[i][u]:[e[i][u]];t[i][u]=f.concat(h)}else t[i][u]=e[i][u];else if("hook"==i)for(var d in e[i])t[i][d]=t[i][d]?r(t[i][d],e[i][d]):e[i][d];else t[i]=e[i];else t[i]=e[i];return t},{})}},Gu7T:function(t,e,i){"use strict";e.__esModule=!0;var s,a=i("c/Tr"),n=(s=a)&&s.__esModule?s:{default:s};e.default=function(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return(0,n.default)(t)}},IdL4:function(t,e){},MyDk:function(t,e,i){"use strict";var s=i("R6lU");e.__esModule=!0,e.default=void 0;var a=s(i("AA6R")),n=s(i("lt8z")),o=i("VxeN"),r=s(i("WQwN")),c=s(i("S6j6")),l=s(i("s4up")),u=(0,o.use)("field"),f=u[0],h=u[1],d=f({inheritAttrs:!1,mixins:[l.default],props:{error:Boolean,leftIcon:String,rightIcon:String,readonly:Boolean,clearable:Boolean,labelAlign:String,inputAlign:String,onIconClick:Function,autosize:[Boolean,Object],errorMessage:String,type:{type:String,default:"text"}},data:function(){return{focused:!1}},watch:{value:function(){this.$nextTick(this.adjustSize)}},mounted:function(){this.format(),this.$nextTick(this.adjustSize)},computed:{showClear:function(){return this.clearable&&this.focused&&""!==this.value&&(0,o.isDef)(this.value)&&!this.readonly},listeners:function(){return(0,n.default)({},this.$listeners,{input:this.onInput,keypress:this.onKeypress,focus:this.onFocus,blur:this.onBlur})}},methods:{focus:function(){this.$refs.input&&this.$refs.input.focus()},blur:function(){this.$refs.input&&this.$refs.input.blur()},format:function(t){void 0===t&&(t=this.$refs.input);var e=t.value,i=this.$attrs.maxlength;return"number"===this.type&&(0,o.isDef)(i)&&e.length>i&&(e=e.slice(0,i),t.value=e),e},onInput:function(t){this.$emit("input",this.format(t.target))},onFocus:function(t){this.focused=!0,this.$emit("focus",t),this.readonly&&this.blur()},onBlur:function(t){this.focused=!1,this.$emit("blur",t)},onClickLeftIcon:function(){this.$emit("click-left-icon")},onClickRightIcon:function(){this.$emit("click-icon"),this.$emit("click-right-icon"),this.onIconClick&&this.onIconClick()},onClear:function(t){t.preventDefault(),this.$emit("input",""),this.$emit("clear")},onKeypress:function(t){if("number"===this.type){var e=t.keyCode,i=-1===String(this.value).indexOf(".");e>=48&&e<=57||46===e&&i||45===e||t.preventDefault()}"search"===this.type&&13===t.keyCode&&this.blur(),this.$emit("keypress",t)},adjustSize:function(){var t=this.$refs.input;if("textarea"===this.type&&this.autosize&&t){t.style.height="auto";var e=t.scrollHeight;if((0,o.isObj)(this.autosize)){var i=this.autosize,s=i.maxHeight,a=i.minHeight;s&&(e=Math.min(e,s)),a&&(e=Math.max(e,a))}e&&(t.style.height=e+"px")}}},render:function(t){var e,i=this.type,s=this.labelAlign,o=this.$slots,l=o["left-icon"]||this.leftIcon,u=o["right-icon"]||o.icon||this.rightIcon||this.icon,f=l&&t("div",{slot:"icon",class:h("left-icon"),on:{click:this.onClickLeftIcon}},[o["left-icon"]||t(r.default,{attrs:{name:this.leftIcon}})]),d=u&&t("div",{class:h("right-icon"),on:{click:this.onClickRightIcon}},[o["right-icon"]||o.icon||t(r.default,{attrs:{name:this.rightIcon||this.icon}})]),m={ref:"input",class:h("control",this.inputAlign),domProps:{value:this.value},attrs:(0,n.default)({},this.$attrs,{readonly:this.readonly}),on:this.listeners},v="textarea"===i?t("textarea",(0,a.default)([{},m])):t("input",(0,a.default)([{attrs:{type:i}},m]));return t(c.default,{attrs:{icon:this.leftIcon,title:this.label,center:this.center,border:this.border,isLink:this.isLink,required:this.required},class:h((e={error:this.error,disabled:this.$attrs.disabled},e["label-"+s]=s,e["min-height"]="textarea"===i&&!this.autosize,e))},[f,t("template",{slot:"title"},o.label),t("div",{class:h("body")},[v,this.showClear&&t(r.default,{attrs:{name:"clear"},class:h("clear"),on:{touchstart:this.onClear}}),d,o.button&&t("div",{class:h("button")},[o.button])]),this.errorMessage&&t("div",{class:h("error-message")},[this.errorMessage])])}});e.default=d},OjEV:function(t,e,i){"use strict";var s=i("R6lU");e.__esModule=!0,e.default=void 0;var a=i("VxeN"),n=s(i("WQwN")),o=s(i("Jq84")),r=s(i("/4KT")),c=(0,a.use)("actionsheet"),l=c[0],u=c[1],f=l({mixins:[r.default],props:{title:String,value:Boolean,actions:Array,cancelText:String,overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0}},methods:{onSelect:function(t,e){t.stopPropagation(),e.disabled||e.loading||(e.callback&&e.callback(e),this.$emit("select",e))},onCancel:function(){this.$emit("input",!1),this.$emit("cancel")}},render:function(t){var e=this;if(this.shouldRender){var i=this.title,s=this.cancelText,a=this.onCancel,r=s?t("div",{class:u("cancel"),on:{click:a}},[s]):t("div",{class:u("content")},[this.$slots.default]);return t("transition",{attrs:{name:"van-slide-up"}},[t("div",{directives:[{name:"show",value:this.value}],class:u({withtitle:i})},[i?t("div",{class:[u("header"),"van-hairline--top-bottom"]},[i,t(n.default,{attrs:{name:"close"},on:{click:a}})]):this.actions.map(function(i){return t("div",{class:[u("item",{disabled:i.disabled||i.loading}),i.className,"van-hairline--top"],on:{click:function(t){e.onSelect(t,i)}}},[i.loading?t(o.default,{class:u("loading"),attrs:{size:"20px"}}):[t("span",{class:u("name")},[i.name]),i.subname&&t("span",{class:u("subname")},[i.subname])]])}),r])])}}});e.default=f},"c/Tr":function(t,e,i){t.exports={default:i("5zde"),__esModule:!0}},el00:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("Gu7T"),a=i.n(s),n=i("mvHQ"),o=i.n(n),r=i("woOf"),c=i.n(r),l=i("vLgD");var u=i("OjEV"),f=i.n(u),h=i("MyDk"),d=i.n(h),m=i("WQwN"),v=i.n(m),p=(i("yZCJ"),i("jydU"),{data:function(){return{show:!1,formData:{student_name:"",phone:"",remark:"",grade:[],subject:[],campus:[]},showOptions:{has_campus:"0",has_comment:"0",has_grade:"0",has_mobile:"0",has_name:"0",has_subject:"0"},formOptions:{grade:[],subject:[],campus:[]},title:"",type:"",actions:[]}},components:{"van-actionsheet":f.a,"van-icon":v.a,"van-field":d.a},created:function(){console.log(this.$route),this.form_id=this.$route.query.form_id,this.getPageData()},methods:{formValidate:function(){var t="",e=c()({},this.formData),i=c()({},this.showOptions);return e.student_name?11!==e.phone.length?t="请填写11位电话号码":1!=i.has_subject||e.subject.length?1!=i.has_campus||e.campus.length?1!=i.has_grade||e.grade.length||(t="请选择年级"):t="请选择校区":t="请选择科目":t="请填写学生姓名",!t.length||(this.$toast.fail(t),!1)},getPageData:function(){var t=this;(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(l.a)("poster/form/show-form",t)})({id:this.form_id}).then(function(e){for(var i in console.log(e),t.user_id=e.data.user_id,t.title=e.data.title,t.formOptions)t.formOptions[i]=e.data[i];for(var s in t.showOptions)t.showOptions[s]=e.data[s]})},submit:function(){var t=this;if(this.formValidate()){var e=this.formData,i=e.grade[0]?[e.grade[0].id]:[],s=e.campus[0]?[e.campus[0].id]:[];e.subject.length&&e.subject;(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(l.a)("poster/form-submit/submit",t)})({user_id:this.user_id,form_id:this.form_id,student_name:e.student_name,phone:e.phone,remark:e.remark,grade:o()(i),campus:o()(s),subject:o()(e.subject)}).then(function(e){t.$toast.success("提交成功")}).catch(function(e){console.log(e),t.$toast.fail("提交失败,"+e)})}},showAction:function(t){this.type=t,this.actions=this.formOptions[t],this.show=!0},onSelect:function(t){console.log(t),this.formData[this.type][0]=t,this.show=!1},checkboxClick:function(t){console.log(t);var e=[].concat(a()(this.formData.subject)),i=e.indexOf(t.id);-1!==i?e.splice(i,1):e.push(t.id),this.formData.subject=e}}}),g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"parent_form"},[s("div",{staticClass:"page_title"},[t._v(t._s(t.title))]),t._v(" "),s("div",{staticClass:"form"},[1==t.showOptions.has_name?s("div",{staticClass:"form_item"},[s("span",{staticClass:"title"},[t._v("姓名")]),t._v(" "),s("div",{staticClass:"form_component"},[s("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.formData.student_name,expression:"formData.student_name",modifiers:{lazy:!0}}],attrs:{type:"text",placeholder:"输入姓名",maxlength:"8"},domProps:{value:t.formData.student_name},on:{change:function(e){t.$set(t.formData,"student_name",e.target.value)}}})])]):t._e(),t._v(" "),1==t.showOptions.has_mobile?s("div",{staticClass:"form_item"},[s("span",{staticClass:"title"},[t._v("手机号")]),t._v(" "),s("div",{staticClass:"form_component"},[s("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.formData.phone,expression:"formData.phone",modifiers:{lazy:!0}}],attrs:{type:"number",placeholder:"输入手机号",maxlength:"11",max:"11"},domProps:{value:t.formData.phone},on:{change:function(e){t.$set(t.formData,"phone",e.target.value)}}})])]):t._e(),t._v(" "),1==t.showOptions.has_grade?s("div",{staticClass:"form_item"},[s("span",{staticClass:"title"},[t._v("年级")]),t._v(" "),s("div",{staticClass:"form_component"},[s("button",{on:{click:function(e){t.showAction("grade")}}},[t._v("\n          "+t._s(t.formData.grade[0]?t.formData.grade[0].name:"选择年级")+"\n          "),s("img",{staticClass:"icon",attrs:{src:i("nK/p")}})])])]):t._e(),t._v(" "),1==t.showOptions.has_subject?s("div",{staticClass:"subject_group"},[s("p",{staticClass:"title"},[t._v("选择科目")]),t._v(" "),s("div",{staticClass:"check_group"},t._l(t.formOptions.subject,function(e){return s("div",{key:e.id,staticClass:"checkbox_item",on:{click:function(i){t.checkboxClick(e)}}},[s("div",{staticClass:"checkbox",class:-1!==t.formData.subject.indexOf(e.id)?"checkbox_active":""},[s("van-icon",{attrs:{name:"success"}})],1),t._v(" "),s("span",[t._v(t._s(e.name))])])}),0)]):t._e(),t._v(" "),1==t.showOptions.has_campus?s("div",{staticClass:"form_item"},[s("span",{staticClass:"title"},[t._v("校区")]),t._v(" "),s("div",{staticClass:"form_component"},[s("button",{on:{click:function(e){t.showAction("campus")}}},[t._v("\n          "+t._s(t.formData.campus[0]?t.formData.campus[0].name:"选择校区")+"\n          "),s("img",{staticClass:"icon",attrs:{src:i("nK/p")}})])])]):t._e(),t._v(" "),1==t.showOptions.has_comment?s("div",{staticClass:"form_item"},[s("span",{staticClass:"title"},[t._v("备注")]),t._v(" "),s("div",{staticClass:"form_component"},[s("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.formData.remark,expression:"formData.remark",modifiers:{lazy:!0}}],attrs:{type:"text",placeholder:"输入备注",maxlength:"20"},domProps:{value:t.formData.remark},on:{change:function(e){t.$set(t.formData,"remark",e.target.value)}}})])]):t._e()]),t._v(" "),s("van-actionsheet",{attrs:{actions:t.actions},on:{select:t.onSelect},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}}),t._v(" "),s("div",{staticClass:"bottom",on:{click:t.submit}},[t._v("提交")])],1)},staticRenderFns:[]};var _=i("VU/8")(p,g,!1,function(t){i("IdL4")},"data-v-9f7b9ce4",null);e.default=_.exports},fBQ2:function(t,e,i){"use strict";var s=i("evD5"),a=i("X8DO");t.exports=function(t,e,i){e in t?s.f(t,e,a(0,i)):t[e]=i}},jydU:function(t,e,i){i("XqYu")},mvHQ:function(t,e,i){t.exports={default:i("qkKv"),__esModule:!0}},"nK/p":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAClUlEQVR4Xu2YzXHbMBCFFzyIx7gDxxXEriByB3YFMS9a6JSUkFSQ+ERCFzkVJB3EriBOBXY68FU6EBlkQA9MixyCxA9nsDoDu/s+vF0IZJD4jyWuHwgAOSBxAtQCiRuAhiC1ALVA4gSoBRI3AN0C1ALUAokToBZI3AB0C1AL2LTAZrM5lVL+0nsKRPxps9/X2rIsr7Is+zqmLisHVFX1wBh7awi5jA1Bi982NUkpHznnJ0NhWwEQQjwCwLER/Ikxdr5are6HJnS5ri1ex/6LiOYh9aa0BXABAD9aEaNA0O34+4A6K1daAVDJOqgHhWDMoiMTQF3XxXq9vrFxmTUAFVwI8QkAmqHzP5/qvTzPz4qieLIpwHatS/Eq9ygAGoIi/aEl4H6xWJz7guBa/CQAoSH4ED8ZQB8ERDyztXfXel/inQDQEG4B4L0pQEp5wzkvpkLoEi+lvOacq1k06Td6BphZt9vt0W63u2WMvXMJoUs8AHxHxKtJyvVmJwBULNcQVLz9fv8AAC+uOpfinbVAcxJdEADgCyJ+HnpiWrx6c5y29jg7+SauMwc0AbVt1Ux4YxY/9E9KSPHOHTAVQmjx3gCowLZOiCHeKwAVvCzLZZZlzfeDxiCv3g2xxHsHoCGojxXP73VN4RlCj/g7RFwOHZxj1zkfgocK6XpB1nV9qb/kvJj2Uso/eZ4vfb0pzBqDAOhxwiteIcUHaQFTYVVV3xhjH7vsGlp8cAAqoRDi0DNafU8IZvsoLWAmbUOIJT6KAxoQDYSY4qMCUMnVFRhi0vddkcFugbH3tO99BMA34bnHJwfM/YR810cO8E147vHJAXM/Id/1kQN8E557fHLA3E/Id33kAN+E5x6fHDD3E/JdX/IO+Af3OmdQY77oTwAAAABJRU5ErkJggg=="},oFBU:function(t,e){},qkKv:function(t,e,i){var s=i("FeBl"),a=s.JSON||(s.JSON={stringify:JSON.stringify});t.exports=function(t){return a.stringify.apply(a,arguments)}},qyJz:function(t,e,i){"use strict";var s=i("+ZMJ"),a=i("kM2E"),n=i("sB3e"),o=i("msXi"),r=i("Mhyx"),c=i("QRG4"),l=i("fBQ2"),u=i("3fs2");a(a.S+a.F*!i("dY0y")(function(t){Array.from(t)}),"Array",{from:function(t){var e,i,a,f,h=n(t),d="function"==typeof this?this:Array,m=arguments.length,v=m>1?arguments[1]:void 0,p=void 0!==v,g=0,_=u(h);if(p&&(v=s(v,m>2?arguments[2]:void 0,2)),void 0==_||d==Array&&r(_))for(i=new d(e=c(h.length));e>g;g++)l(i,g,p?v(h[g],g):h[g]);else for(f=_.call(h),i=new d;!(a=f.next()).done;g++)l(i,g,p?o(f,v,[a.value,g],!0):a.value);return i.length=g,i}})},yZCJ:function(t,e,i){i("XqYu"),i("+ed2"),i("oFBU")}});
//# sourceMappingURL=3.ec843f56526b73b0e30b.js.map