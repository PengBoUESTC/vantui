(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{"478":function(t,n,i){"use strict";i.r(n),i.d(n,"taro_form_core",(function(){return c}));var o=i(52),r=i.n(o),l=i(26),a=i.n(l),h=i(27),s=i.n(h),u=i(138),c=function(){function e(t){Object(u.g)(this,t),this.onSubmit=Object(u.c)(this,"submit",7),this.value={}}return e.prototype.watchSlotParent=function(t){if(this.orginalAppendChild||(this.orginalAppendChild=this.el.appendChild,this.orginalInsertBefore=this.el.insertBefore,this.orginalReplaceChild=this.el.replaceChild,this.orginalRemoveChild=this.el.removeChild),!t)return this.el.appendChild=this.orginalAppendChild,this.el.insertBefore=this.orginalInsertBefore,this.el.replaceChild=this.orginalReplaceChild,void(this.el.removeChild=this.orginalRemoveChild);this.el.appendChild=function(n){return t.appendChild(n)},this.el.insertBefore=function(n,i){return t.insertBefore(n,i)},this.el.replaceChild=function(n,i){return t.replaceChild(n,i)},this.el.removeChild=function(n){return t.removeChild(n)}},e.prototype.onButtonSubmit=function(t){t.stopPropagation(),this.value=this.getFormValue(),this.onSubmit.emit({"value":this.value})},e.prototype.onButtonReset=function(t){t.stopPropagation(),this.form.reset()},e.prototype.componentDidLoad=function(){var t=this;this.value=this.getFormValue(),r()(this.el,"value",{"get":function get(){return t.value},"configurable":!0})},e.prototype.componentDidRender=function(){this.setSlotParent(this.form)},e.prototype.getFormValue=function(){for(var t=this.el,n=[],i=t.getElementsByTagName("input"),o=0;o<i.length;o++)n.push(i[o]);var r={},l={};a()(n).call(n,(function(t){var n;-1===s()(n=t.className).call(n,"weui-switch")?"radio"!==t.type?"checkbox"!==t.type?r[t.name]=t.value:t.checked?l[t.name]?r[t.name].push(t.value):(l[t.name]=!0,r[t.name]=[t.value]):l[t.name]||(r[t.name]=[]):t.checked?(l[t.name]=!0,r[t.name]=t.value):l[t.name]||(r[t.name]=""):r[t.name]=t.checked}));for(var h=t.getElementsByTagName("textarea"),u=[],c=0;c<h.length;c++)u.push(h[c]);return a()(u).call(u,(function(t){r[t.name]=t.value})),r},e.prototype.setSlotParent=function(t){this.slotParent=t},e.prototype.render=function(){var t=this;return Object(u.e)("form",{"ref":function ref(n){n&&(t.form=n)}},Object(u.e)("slot",null))},r()(e.prototype,"el",{"get":function get(){return Object(u.d)(this)},"enumerable":!1,"configurable":!0}),r()(e,"watchers",{"get":function get(){return{"slotParent":["watchSlotParent"]}},"enumerable":!1,"configurable":!0}),e}()}}]);