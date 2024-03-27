(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[0],{2834:function(t,e,n){"use strict";function i(t,e,n){return Math.min(Math.max(t,Math.min(e,n)),Math.max(e,n))}function o(t,e,n,o,s){return i((t-e)/(n-e)*(s-o)+o,o,s)}n.d(e,{qq:function(){return o},uZ:function(){return i}})},3549:function(t,e,n){"use strict";n.d(e,{$_:function(){return i},Pp:function(){return o}});class i{static boolean(t,e,n){return new i(t,e,"boolean",n)}constructor(t,e,n,i){this.id=t,this.displayName=e,this.type=n,this.defaultValue=i}}class o{define(){return[]}get definitions(){if(null==this._definitions){var t;let e=this.define();if((t=e.map(t=>t.id)).length!==function(t,e){if(null==e)return[...new Set(t)];let n=[];for(let i of t)n.some(t=>e(t,i))||n.push(i);return n}(t,void 0).length)throw Error("Option definition IDs are not unique.");o._validate(o._createDefaultValuesRecord(e),e),this._definitions=e}return this._definitions}validate(t){o._validate(t,this.definitions)}getDefaultValues(){return new s(this,o._createDefaultValuesRecord(this.definitions))}static _validate(t,e){for(let n of e)if("boolean"===n.type){if("boolean"!=typeof t[n.id])throw Error('Expected boolean for option "'.concat(n.id,'".'))}else throw Error('Unknown option type "'.concat(n.type,'".'))}static _createDefaultValuesRecord(t){let e={};for(let n of t)e[n.id]=n.defaultValue;return e}constructor(){this._definitions=null}}class s{get(t){var e;return null!==(e=this.options[t])&&void 0!==e?e:null}getBoolean(t){var e;return null!==(e=this.options[t])&&void 0!==e?e:null}requireBoolean(t){let e=this.getBoolean(t);if(null===e)throw Error('There is no option with ID "'.concat(t,'".'));return e}with(t,e){let n={...this.options};return n[t]=e,new s(this.shape,n)}constructor(t,e){this.shape=t,this.options=e,t.validate(e)}}},9858:function(t,e,n){"use strict";n.d(e,{_:function(){return i}});class i{}},4885:function(t,e,n){"use strict";n.d(e,{r:function(){return i}});class i{constructor(t,e,n,i,o,s,r){this.title=t,this.description=e,this.href=n,this.duration=i,this.autoLoop=o,this.options=s,this.renderer=r}}},785:function(t,e,n){"use strict";n.d(e,{$C:function(){return h},$R:function(){return d},AY:function(){return s},BO:function(){return a},Oq:function(){return i},Q6:function(){return c},ek:function(){return l},f7:function(){return u},n7:function(){return r},sY:function(){return o}});let i="#0f1115",o="#ffffff",s="#bfc3d0",r="#576073",a="#2f3644",c="#d02020",l="#00a000",u="#66b3ff",d="#2060d0",h="#00b0b0"},3422:function(t,e,n){"use strict";n.d(e,{C:function(){return o}});var i=n(785);function o(t,e,n,o){let s=arguments.length>4&&void 0!==arguments[4]&&arguments[4],r=e.isDesktopLayout?2*e.remSize:1*e.remSize,a=e.canvasWidth-2*r,c=e.canvasHeight-4*e.remSize,l=Math.min(a/n,c/o);t.scale(l,l);let u=e.canvasWidth/l-n,d=e.canvasHeight/l-o;return t.translate(u/2,d/2),s&&(t.strokeStyle=i.BO,t.lineWidth=2,t.beginPath(),t.rect(1,1,n-2,o-2),t.stroke()),{...e,extraWidth:u,extraHeight:d}}},2749:function(t,e,n){"use strict";n.d(e,{Z:function(){return R}});var i=n(7437),o=n(2265),s=n(3857),r=n.n(s);function a(t){let{animation:e,time:n,optionValues:s,className:a}=t,l=(0,o.useRef)(null),[u,d]=(0,o.useState)(null);return(0,o.useEffect)(()=>{if(null!=l.current){let t=new c(l.current);return d(t),()=>t.destroy()}},[l]),(0,o.useEffect)(()=>{null==u||u.render(e,n,s)},[u,e,n,s]),(0,i.jsx)("div",{className:"".concat(r().wrapper," ").concat(null!=a?a:""),children:(0,i.jsx)("canvas",{ref:l})})}class c{destroy(){this.resizeObserver.disconnect()}resize(){var t;let e=this.parent.getBoundingClientRect(),n=e.width,i=e.height,o=window.devicePixelRatio/(null!==(t=this.ctx.backingStorePixelRatio)&&void 0!==t?t:1);this.canvas.style.width="".concat(n,"px"),this.canvas.style.height="".concat(i,"px"),this.canvas.width=n*o,this.canvas.height=i*o;let s=window.getComputedStyle(document.documentElement),r=parseInt(s.fontSize),a=document.documentElement.getBoundingClientRect().width;this.canvasMetrics={canvasWidth:n,canvasHeight:i,dpiRatio:o,remSize:r,isDesktopLayout:a>=60*r},null!=this.lastRender&&this.render(this.lastRender.animation,this.lastRender.time,this.lastRender.optionValues)}render(t,e,n){if(null==this.canvasMetrics)return;let{canvasWidth:i,canvasHeight:o,dpiRatio:s}=this.canvasMetrics;this.ctx.save(),this.ctx.clearRect(0,0,i*s,o*s),this.ctx.scale(s,s),t.renderer.render(this.ctx,e,this.canvasMetrics,n),this.ctx.restore(),this.lastRender={animation:t,time:e,optionValues:n}}constructor(t){this.canvas=t,this.canvasMetrics=null,this.lastRender=null;let e=t.getContext("2d");if(null===e)throw Error("Failed to get 2D context for canvas.");this.ctx=e;let n=this.canvas.parentElement;if(null==n)throw Error("Failed to get the parent element of the canvas.");this.parent=n,this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(this.parent),this.resize()}}var l=n(3779),u=n.n(l);function d(t){let{title:e,description:n,className:o}=t;return(0,i.jsxs)("div",{className:"".concat(u().header," ").concat(null!=o?o:""),children:[(0,i.jsx)("h1",{children:e}),null!=n&&(0,i.jsx)("p",{children:n})]})}var h=n(5288),p=n.n(h);function f(t){let{animation:e,optionValues:n,setOptionValues:s,className:r}=t,[a,c]=(0,o.useState)(!0);return(0,i.jsxs)("div",{className:"".concat(p().menu," ").concat(null!=r?r:""," ").concat(a?p().expanded:""),children:[0===e.options.definitions.length&&(0,i.jsx)("p",{className:p().empty,children:"(No customisation options)"}),e.options.definitions.length>0&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("button",{className:p().expandButton,onClick:function(){c(t=>!t)},children:[(0,i.jsx)("p",{children:"Customise animation"}),(0,i.jsx)(v,{className:a?p().down:p().up})]}),a&&(0,i.jsx)("div",{className:p().options,children:e.options.definitions.map(t=>(0,i.jsx)(m,{definition:t,value:n.get(t.id),onChange:e=>s(n.with(t.id,e))},t.id))})]})]})}function m(t){let{definition:e,value:n,onChange:o}=t;if("boolean"===e.type)return(0,i.jsx)(_,{definition:e,value:n,onChange:o});throw Error('Unrecognized option type "'.concat(e.type,'".'))}function _(t){let{definition:e,value:n,onChange:o}=t;return(0,i.jsxs)("label",{className:p().switch,children:[(0,i.jsx)("input",{type:"checkbox",checked:n,onChange:t=>o(t.target.checked),autoComplete:"off"}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:p().switchGraphic}),(0,i.jsx)("div",{className:p().switchContent,children:(0,i.jsx)("p",{children:e.displayName})})]})]})}function v(t){let{className:e}=t;return(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"icon ".concat(null!=e?e:""),children:(0,i.jsx)("path",{fill:"currentColor",d:"M15.54 11.29L9.88 5.64a1 1 0 0 0-1.42 0a1 1 0 0 0 0 1.41l4.95 5L8.46 17a1 1 0 0 0 0 1.41a1 1 0 0 0 .71.3a1 1 0 0 0 .71-.3l5.66-5.65a1 1 0 0 0 0-1.47Z"})})}var x=n(2834),w=n(6765),g=n.n(w);function y(t){let{animation:e,time:n,setTime:s,className:r}=t,[a,c]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let t=t=>{t.target instanceof HTMLBodyElement&&("Space"===t.code&&(t.repeat||c(t=>!t),t.preventDefault()),"ArrowLeft"===t.code&&(t.ctrlKey?s(0):s(t=>(0,x.uZ)(t-.5,0,e.duration)),t.preventDefault()),"ArrowRight"===t.code&&(t.ctrlKey?s(e.duration):s(t=>(0,x.uZ)(t+.5,0,e.duration)),t.preventDefault()))};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[c,s,e]),(0,i.jsxs)("div",{className:"".concat(g().controls," ").concat(null!=r?r:""),children:[(0,i.jsx)("button",{className:g().playPause,onClick:function(){c(t=>!t)},children:a?(0,i.jsx)(b,{}):(0,i.jsx)(k,{})}),(0,i.jsx)("button",{className:g().reset,onClick:function(){s(0)},children:(0,i.jsx)(N,{})}),(0,i.jsx)(j,{animation:e,time:n,setTime:s,paused:a})]})}function j(t){let{animation:e,time:n,setTime:s,paused:r}=t,[a,c]=(0,o.useState)(!1),l=1e3*(0,x.uZ)(n/e.duration,0,1),u=(0,o.useRef)();function d(){c(!1)}return(0,o.useEffect)(()=>{if(r||a){u.current=void 0;return}let t=null,n=i=>{let o=null==t?0:i-t;e.autoLoop?s(t=>(t+o/1e3)%e.duration):s(t=>t+o/1e3),t=i,u.current=requestAnimationFrame(n)};return u.current=requestAnimationFrame(n),()=>{u.current&&cancelAnimationFrame(u.current)}},[r,a,s,e]),(0,i.jsx)("input",{className:g().seekbar,type:"range",min:0,max:1e3,value:l,onChange:function(t){let n=parseInt(t.target.value),i=n/1e3*e.duration;s(i)},onPointerDown:function(){c(!0)},onPointerLeave:d,onPointerCancel:d,onPointerUp:d})}function b(){return(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"".concat(g().icon," icon"),children:(0,i.jsx)("path",{fill:"currentColor",d:"M8 5.14v14l11-7l-11-7Z"})})}function k(){return(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"".concat(g().icon," icon"),children:(0,i.jsx)("path",{fill:"currentColor",d:"M14 19V5h4v14h-4Zm-8 0V5h4v14H6Z"})})}function N(){return(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"".concat(g().icon," icon"),children:(0,i.jsx)("g",{transform:"translate(24 0) scale(-1 1)",children:(0,i.jsx)("path",{fill:"currentColor",d:"M12 20q-3.35 0-5.675-2.325T4 12q0-3.35 2.325-5.675T12 4q1.725 0 3.3.712T18 6.75V5q0-.425.288-.712T19 4q.425 0 .713.288T20 5v5q0 .425-.288.713T19 11h-5q-.425 0-.712-.288T13 10q0-.425.288-.712T14 9h3.2q-.8-1.4-2.187-2.2T12 6Q9.5 6 7.75 7.75T6 12q0 2.5 1.75 4.25T12 18q1.7 0 3.113-.862t2.187-2.313q.2-.35.563-.487t.737-.013q.4.125.575.525t-.025.75q-1.025 2-2.925 3.2T12 20Z"})})})}var C=n(3206),E=n.n(C);function R(t){var e;let{animation:n}=t,[s,r]=(0,o.useState)(0),[c,l]=(0,o.useState)(n.options.getDefaultValues());return(0,i.jsxs)("div",{className:E().page,children:[(0,i.jsx)(d,{className:E().header,title:n.title,description:null!==(e=n.description)&&void 0!==e?e:void 0}),(0,i.jsx)(a,{className:E().canvas,animation:n,time:s,optionValues:c}),(0,i.jsx)(y,{className:E().playback,animation:n,time:s,setTime:r}),(0,i.jsx)(f,{className:E().options,animation:n,optionValues:c,setOptionValues:l})]})}},3857:function(t){t.exports={wrapper:"animation-canvas_wrapper__oOkUE"}},3779:function(t){t.exports={header:"animation-header_header__egXAr"}},3206:function(t){t.exports={page:"animation-page_page__trcHH",header:"animation-page_header__u9O62",canvas:"animation-page_canvas__vNtoP",playback:"animation-page_playback__97Yym",options:"animation-page_options__5vYnt"}},5288:function(t){t.exports={menu:"customise-panel_menu__FvICR",expandButton:"customise-panel_expandButton__oroyL",empty:"customise-panel_empty__b1l2I",icon:"customise-panel_icon__QjrfC",up:"customise-panel_up__unYij",down:"customise-panel_down__Cc2AW",options:"customise-panel_options__y2EPg",expanded:"customise-panel_expanded__q1s8j",switch:"customise-panel_switch__Z4guo",switchContent:"customise-panel_switchContent__NrBKk",switchGraphic:"customise-panel_switchGraphic___fxLE","odometer-in":"customise-panel_odometer-in__O1FQj","odometer-out":"customise-panel_odometer-out__qxeHW"}},6765:function(t){t.exports={controls:"playback-controls_controls__wFkfs",playPause:"playback-controls_playPause__uhHVg",reset:"playback-controls_reset__7jfM1",icon:"playback-controls_icon___bi7d",seekbar:"playback-controls_seekbar__pzvTE","odometer-in":"playback-controls_odometer-in__JuO65","odometer-out":"playback-controls_odometer-out__VDJQZ"}},622:function(t,e,n){"use strict";var i=n(2265),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(t,e,n){var i,s={},l=null,u=null;for(i in void 0!==n&&(l=""+n),void 0!==e.key&&(l=""+e.key),void 0!==e.ref&&(u=e.ref),e)r.call(e,i)&&!c.hasOwnProperty(i)&&(s[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps)void 0===s[i]&&(s[i]=e[i]);return{$$typeof:o,type:t,key:l,ref:u,props:s,_owner:a.current}}e.Fragment=s,e.jsx=l,e.jsxs=l},7437:function(t,e,n){"use strict";t.exports=n(622)}}]);