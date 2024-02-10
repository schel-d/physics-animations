(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{2834:function(e,t,n){"use strict";function r(e,t,n){return Math.min(Math.max(e,Math.min(t,n)),Math.max(t,n))}function o(e,t,n,o,i){return r((e-t)/(n-t)*(i-o)+o,o,i)}n.d(t,{qq:function(){return o},uZ:function(){return r}})},2489:function(e,t,n){Promise.resolve().then(n.t.bind(n,3049,23)),Promise.resolve().then(n.t.bind(n,595,23)),Promise.resolve().then(n.bind(n,8986)),Promise.resolve().then(n.bind(n,5532)),Promise.resolve().then(n.t.bind(n,7618,23))},3549:function(e,t,n){"use strict";n.d(t,{$_:function(){return r},Pp:function(){return o}});class r{static boolean(e,t,n){return new r(e,t,"boolean",n)}constructor(e,t,n,r){this.id=e,this.displayName=t,this.type=n,this.defaultValue=r}}class o{validate(e){for(let t of this.definitions)if("boolean"===t.type){if("boolean"!=typeof e[t.id])throw Error('Expected boolean for option "'.concat(t.id,'".'))}else throw Error('Unknown option type "'.concat(t.type,'".'))}getDefaultValues(){return new i(this,o._createDefaultValuesRecord(this.definitions))}static _createDefaultValuesRecord(e){let t={};for(let n of e)t[n.id]=n.defaultValue;return t}constructor(e){var t;if(this.definitions=e,(t=e.map(e=>e.id)).length!==function(e,t){if(null==t)return[...new Set(e)];let n=[];for(let r of e)n.some(e=>t(e,r))||n.push(r);return n}(t,void 0).length)throw Error("Option definition IDs are not unique.");this.validate(o._createDefaultValuesRecord(this.definitions))}}class i{get(e){var t;return null!==(t=this.options[e])&&void 0!==t?t:null}getBoolean(e){var t;return null!==(t=this.options[e])&&void 0!==t?t:null}requireBoolean(e){let t=this.getBoolean(e);if(null===t)throw Error('There is no option with ID "'.concat(e,'".'));return t}with(e,t){let n={...this.options};return n[e]=t,new i(this.shape,n)}constructor(e,t){this.shape=e,this.options=t,e.validate(t)}}},9858:function(e,t,n){"use strict";n.d(t,{_:function(){return r}});class r{}},4885:function(e,t,n){"use strict";n.d(t,{r:function(){return r}});class r{constructor(e,t,n,r,o,i,s){this.title=e,this.description=t,this.href=n,this.duration=r,this.autoLoop=o,this.options=i,this.renderer=s}}},2263:function(e,t,n){"use strict";function r(e,t,n,r,i,s,a){let l=r-t,c=i-n;o(e,t,n,Math.atan2(c,l),Math.sqrt(l*l+c*c),s,a)}function o(e,t,n,r,o,i,s){let a=Math.abs(o);if(a<.5*i)return;e.save(),e.translate(t,n),e.rotate(o<0?r+Math.PI:r);let l=Math.min(4*i,.75*a),c=4*i;e.strokeStyle=s,e.lineWidth=i,e.fillStyle=s,e.beginPath(),e.moveTo(0,0),e.lineTo(a-.75*l,0),e.stroke(),e.beginPath(),e.moveTo(a,0),e.lineTo(a-l,-.5*c),e.lineTo(a-l,.5*c),e.fill(),e.restore()}n.d(t,{M:function(){return o},x:function(){return r}})},785:function(e,t,n){"use strict";n.d(t,{$C:function(){return u},$R:function(){return c},AY:function(){return i},BO:function(){return s},Oq:function(){return r},Q6:function(){return a},ek:function(){return l},sY:function(){return o}});let r="#0f1115",o="#ffffff",i="#bfc3d0",s="#2f3644",a="#d02020",l="#00a000",c="#2060d0",u="#00a0a0"},3422:function(e,t,n){"use strict";n.d(t,{C:function(){return o}});var r=n(785);function o(e,t,n,o){let i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],s=t.isDesktopLayout?2*t.remSize:1*t.remSize,a=t.canvasWidth-2*s,l=t.canvasHeight-4*t.remSize,c=Math.min(a/n,l/o);e.scale(c,c);let u=t.canvasWidth/c-n,f=t.canvasHeight/c-o;return e.translate(u/2,f/2),i&&(e.strokeStyle=r.BO,e.lineWidth=2,e.beginPath(),e.rect(1,1,n-2,o-2),e.stroke()),{...t,extraWidth:u,extraHeight:f}}},238:function(e,t,n){"use strict";function r(e,t,n){return(r,o)=>{let i=-r/(e/Math.PI)+o*t;return i<0||i>Math.PI?0:-Math.sin(i)*n}}function o(e,t,n){return(r,o)=>{let i=-(1-r)/(e/Math.PI)+o*t;return i<0||i>Math.PI?0:-Math.sin(i)*n}}function i(e,t,n){return(r,o)=>{let i=-r/(e/Math.PI)+o*t;return i<0?0:-Math.sin(i)*n}}function s(e){return(t,n)=>e(2-t,n)}function a(e){return(t,n)=>-e(2-t,n)}n.d(t,{SC:function(){return s},_S:function(){return i},dC:function(){return r},k4:function(){return o},vr:function(){return a}})},8314:function(e,t,n){"use strict";n.d(t,{z:function(){return g},O:function(){return m}});var r=n(4885),o=n(3549),i=n(9858),s=n(785),a=n(3422);let l=s.AY,c=s.sY,u=[s.Q6,s.ek],f=s.BO;class d extends i._{render(e,t,n,r){var o;let i=r.requireBoolean(g.superposition),s=r.requireBoolean(g.components),d=r.requireBoolean(g.particles),p=r.requireBoolean(g.longitudinal),m=null!==(o=r.getBoolean(g.rulers))&&void 0!==o&&o;if(e.save(),(0,a.C)(e,n,500,250),e.translate(0,125),m&&(e.strokeStyle=f,e.lineWidth=1,this.rulers.forEach(t=>{let{x:n}=v(t,0,0);e.beginPath(),e.moveTo(n,-125),e.lineTo(n,125),e.stroke()}),e.beginPath(),e.moveTo(v(0,0,0).x,0),e.lineTo(v(1,0,0).x,0),e.stroke()),s){let n=this.waves.length;this.waves.forEach((r,o)=>{let i=u[o%u.length];h(e,r,t,i,"none","none",2*o-2*n/2)})}let _=(e,t)=>{let n=0;for(let r of this.waves)n+=r(e,t);return n};if(i){let n=p&&d,r=n?"none":this.leftEnd,o=n?"none":this.rightEnd;h(e,_,t,l,r,o,0)}if(d){let n=p||!i,r="none"===this.leftEnd||n,o="none"===this.rightEnd||n;!function(e,t,n,r,o,i,s){e.fillStyle=r;let a=i?0:1,l=s?21:20;for(let r=a;r<l;r++){let i=r/20,{x:s,y:a}=v(i,0,0);o?s+=48*t(i,n):a+=125*t(i,n),e.beginPath(),e.ellipse(s,a,5,5,0,0,2*Math.PI),e.fill()}}(e,_,t,c,p,r,o)}e.restore()}constructor(e,t,n,r){super(),this.waves=e,this.leftEnd=t,this.rightEnd=n,this.rulers=r}}function h(e,t,n,r,o,i,s){e.strokeStyle=r,e.lineWidth=2,e.beginPath();for(let r=0;r<100;r++){let o=r/99,{x:i,y:a}=v(o,t(o,n),s);0===r?e.moveTo(i,a):e.lineTo(i,a)}if(e.stroke(),"none"!==o){let{x:r,y:i}=v(0,t(0,n),s);p(e,r,i,"free"===o)}if("none"!==i){let{x:r,y:o}=v(1,t(1,n),s);p(e,r,o,"free"===i)}}function p(e,t,n,r){r?(e.strokeStyle=c,e.fillStyle=s.Oq,e.beginPath(),e.ellipse(t,n,10,10,0,0,2*Math.PI),e.fill(),e.stroke()):(e.fillStyle=c,e.beginPath(),e.ellipse(t,n,10,10,0,0,2*Math.PI),e.fill())}function v(e,t,n){return{x:10+480*e,y:125*t+n}}class m extends r.r{static fromObject(e){let{title:t,description:n,href:r,duration:o,autoLoop:i,waves:s,leftEnd:a,rightEnd:l,rulers:c=[],rulersOptionText:u="Show rulers"}=e;return new m(t,n,r,o,i,new g(c.length>0?u:null),new d(s,a,l,c))}constructor(e,t,n,r,o,i,s){super(e,t,n,r,o,i,s)}}class g extends o.Pp{constructor(e){super([o.$_.boolean(g.superposition,"Show superposition",!0),o.$_.boolean(g.components,"Show wave components",!1),o.$_.boolean(g.particles,"Show particles",!1),o.$_.boolean(g.longitudinal,"Show particles as longitudinal",!1),...null!=e?[o.$_.boolean(g.rulers,e,!1)]:[]])}}g.superposition="superposition",g.components="components",g.particles="particles",g.longitudinal="longitudinal",g.rulers="rulers"},7793:function(e,t,n){"use strict";n.d(t,{O:function(){return u}});var r=n(3549),o=n(4885),i=n(9858),s=n(3422);class a extends i._{render(e,t,n,r){e.save(),(0,s.C)(e,n,250,200,!0),e.restore()}constructor(){super()}}class l extends o.r{static fromObject(e){let{title:t,description:n,href:r,duration:o,autoLoop:i}=e;return new l(t,n,r,o,i,new c,new a)}constructor(e,t,n,r,o,i,s){super(e,t,n,r,o,i,s)}}class c extends r.Pp{constructor(){super([])}}let u=l.fromObject({title:"Blank animation",description:"This is a blank animation. Use the navigation menu to find the real animations!",href:"/blank",duration:5,autoLoop:!0})},1500:function(e,t,n){"use strict";n.d(t,{l:function(){return S}});var r=n(785);let o=r.BO,i=r.AY,s=Math.atan2(11,50),a=Math.sqrt(2621),l=e=>{e.fillStyle=i,e.beginPath(),e.rect(-15,-3,30,10),e.rect(-10,-11,20,10),e.rect(-12,7,3,4),e.rect(9,7,3,4),e.fill(),e.fillStyle=r.Oq,e.beginPath(),e.ellipse(-10,2,3,3,0,0,2*Math.PI),e.ellipse(10,2,3,3,0,0,2*Math.PI),e.fill()};var c=n(3549),u=n(4885),f=n(9858),d=n(2263),h=n(3422);let p=r.Q6,v=_(0,0,120,150),m=_(125,0,75,150);class g extends f._{render(e,t,n,r){var o;let i,s;let a=this.forceProvider(t),l=r.requireBoolean(x.netForce);e.save(),(0,h.C)(e,n,200,150),function(e,t,n,r,o,i){if(b(e,o),e.save(),e.translate(o.centerX+i.x,o.centerY+i.y),t(e),n.forEach(t=>{(0,d.M)(e,0,0,t.angle,t.magnitude,2,t.color)}),r){let{x:t,y:r}=n.reduce((e,t)=>({x:e.x+Math.cos(t.angle)*t.magnitude,y:e.y+Math.sin(t.angle)*t.magnitude}),{x:0,y:0});(0,d.x)(e,0,0,t,r,2,p)}e.restore()}(e,this.graphicRenderer,a,l,v,this.graphicOffset),o=this.forceDiagramOffset,b(e,m),e.save(),e.translate(m.centerX+o.x,m.centerY+o.y),i=0,s=0,a.forEach(t=>{let n=i+Math.cos(t.angle)*t.magnitude,r=s+Math.sin(t.angle)*t.magnitude;(0,d.x)(e,i,s,n,r,2,t.color),i=n,s=r}),l&&(0,d.x)(e,0,0,i,s,2,p),e.restore(),e.restore()}constructor(e,t,n={x:0,y:0},r={x:0,y:0}){super(),this.forceProvider=e,this.graphicRenderer=t,this.graphicOffset=n,this.forceDiagramOffset=r}}function _(e,t,n,r){return{x:e,y:t,width:n,height:r,centerX:e+.5*n,centerY:t+.5*r}}function b(e,t){e.strokeStyle=r.BO,e.lineWidth=1,e.beginPath(),e.roundRect(t.x+.5,t.y+.5,t.width-1,t.height-1,5),e.stroke()}class w extends u.r{static fromObject(e){let{title:t,description:n,href:r,duration:o,autoLoop:i,forces:s,graphic:a,graphicOffset:l,forceDiagramOffset:c}=e;return new w(t,n,r,o,i,new g(s,a,l,c))}constructor(e,t,n,r,o,i){super(e,t,n,r,o,new x,i)}}class x extends c.Pp{constructor(){super([c.$_.boolean(x.netForce,"Show net force",!0)])}}function y(e){return e/180*Math.PI}x.netForce="net-force";var j=n(2834);let O=y(90),M=y(240),P=y(-30),S=w.fromObject({title:"Friction on a banked track",description:"Friction is required to travel on a banked track, unless you're going the design speed.",href:"/motion/banked-track-friction",duration:8,autoLoop:!0,forces:function(e){let t=(0,j.qq)(e,0,8,-8,-50),n=-((t*Math.sin(P)+50*Math.cos(P))/Math.sin(M-P));return[{magnitude:50,angle:O,color:r.$R},{magnitude:n,angle:M,color:r.ek},{magnitude:(-50-n*Math.sin(M))/Math.sin(P),angle:P,color:r.$C}]},graphic:function(e,t){let n=a*Math.cos(s-e),r=a*Math.sin(s-e),i=-a*Math.cos(-s-e),c=-a*Math.sin(-s-e);return s=>{s.save(),s.scale(t,t),s.save(),s.rotate(-e),l(s),s.restore(),s.fillStyle=o,s.beginPath(),s.moveTo(n,r),s.lineTo(i,c),s.lineTo(n,c),s.fill(),s.restore()}}(y(30),1),forceDiagramOffset:{x:20,y:-15}})},6728:function(e,t,n){"use strict";n.d(t,{x:function(){return m}});var r=n(3549),o=n(4885),i=n(9858),s=n(2263),a=n(785),l=n(3422);let c=a.BO,u=a.AY,f=a.Q6,d=a.ek;class h extends i._{render(e,t,n,r){let o=r.requireBoolean(v.netForce),i=r.requireBoolean(v.velocity);e.save(),(0,l.C)(e,n,250,250),e.translate(125,125),e.fillStyle=c,e.beginPath(),e.ellipse(0,0,75,75,0,0,2*Math.PI),e.fill(),e.rotate(-.5*Math.PI),e.rotate(t/this.orbitalPeriod*Math.PI*2),e.translate(100,0),e.rotate(.5*Math.PI),e.fillStyle=u,e.beginPath(),e.rect(-16,-3,10,6),e.rect(6,-3,10,6),e.rect(-6,-1,12,2),e.rect(-3,-5,6,10),e.fill(),o&&(0,s.M)(e,0,0,Math.PI/2,80,2,f),i&&(0,s.M)(e,0,0,0,60,2,d),e.restore()}constructor(e){super(),this.orbitalPeriod=e}}class p extends o.r{static fromObject(e){let{title:t,description:n,href:r,duration:o,autoLoop:i,orbitalPeriod:s}=e;return new p(t,n,r,o,i,new h(s))}constructor(e,t,n,r,o,i){super(e,t,n,r,o,new v,i)}}class v extends r.Pp{constructor(){super([r.$_.boolean(v.netForce,"Show net force",!0),r.$_.boolean(v.velocity,"Show velocity",!1)])}}v.netForce="net-force",v.velocity="velocity";let m=p.fromObject({title:"Centripetal force",description:"Circular motion requires the net force to be towards the centre of the circle.",href:"/motion/centripetal-force",duration:10,autoLoop:!0,orbitalPeriod:10})},1901:function(e,t,n){"use strict";n.d(t,{g:function(){return i}});var r=n(238),o=n(8314);let i=o.O.fromObject({title:"Constructive interference",description:"Two waves collide, causing constructive interference.",href:"/waves/interference-constructive",duration:4,autoLoop:!0,waves:[(0,r.dC)(.2,5,.3),(0,r.k4)(.2,5,.3)],leftEnd:"none",rightEnd:"none"})},4042:function(e,t,n){"use strict";n.d(t,{d:function(){return i}});var r=n(238),o=n(8314);let i=o.O.fromObject({title:"Destructive interference",description:"Two waves collide, causing destructive interference.",href:"/waves/interference-destructive",duration:4,autoLoop:!0,waves:[(0,r.dC)(.2,5,.3),(0,r.k4)(.2,5,-.3)],leftEnd:"none",rightEnd:"none"})},3458:function(e,t,n){"use strict";n.d(t,{s:function(){return i}});var r=n(238),o=n(8314);let i=o.O.fromObject({title:"Reflection (fixed end)",description:"The wave reflects and inverts when it reaches the fixed end of the rope.",href:"/waves/reflection-fixed",duration:7,autoLoop:!0,waves:[(0,r.dC)(.2,5,.3),(0,r.vr)((0,r.dC)(.2,5,.3))],leftEnd:"none",rightEnd:"fixed"})},1750:function(e,t,n){"use strict";n.d(t,{k:function(){return i}});var r=n(238),o=n(8314);let i=o.O.fromObject({title:"Reflection (free end)",description:"The wave reflects when it reaches the end of the rope, which can freely move.",href:"/waves/reflection-free",duration:7,autoLoop:!0,waves:[(0,r.dC)(.2,5,.3),(0,r.SC)((0,r.dC)(.2,5,.3))],leftEnd:"none",rightEnd:"free"})},4937:function(e,t,n){"use strict";n.d(t,{A:function(){return i}});var r=n(238),o=n(8314);let i=o.O.fromObject({title:"Standing wave (two fixed ends)",description:"If both ends are fixed, the standing wave must have nodes at each end.",href:"/waves/standing-fixed",duration:14,autoLoop:!1,waves:[(0,r._S)(.2,3,.3),(0,r.vr)((0,r._S)(.2,3,.3))],leftEnd:"fixed",rightEnd:"fixed",rulers:[.3,.6],rulersOptionText:"Highlight one node and antinode"})},2122:function(e,t,n){"use strict";n.d(t,{m:function(){return i}});var r=n(238),o=n(8314);let i=o.O.fromObject({title:"Standing wave (one free end)",description:"If one end is free, the standing wave will have an antinode at the free end.",href:"/waves/standing-free",duration:15,autoLoop:!1,waves:[(0,r._S)(1/5.5,3,.3),(0,r.vr)((0,r._S)(1/5.5,3,.3))],leftEnd:"free",rightEnd:"fixed",rulers:[2/5.5,3.5/5.5],rulersOptionText:"Highlight one node and antinode"})},7710:function(e,t,n){"use strict";n.d(t,{S:function(){return i}});var r=n(238),o=n(8314);let i=o.O.fromObject({title:"Travelling wave",description:"A single wave travelling through a rope.",href:"/waves/travelling",duration:8,autoLoop:!1,waves:[(0,r._S)(.2,3,.3)],leftEnd:"none",rightEnd:"none"})},8986:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(7437),o=n(2265),i=n(6406),s=n.n(i),a=n(4033);function l(e){let{className:t}=e,[n,i]=(0,o.useState)(!1);(0,o.useEffect)(()=>{i(c())},[]);let l=(0,a.usePathname)();return(0,o.useEffect)(()=>{document.body.classList.remove("sidebarOpen"),i(!1)},[l]),(0,r.jsx)("div",{className:t,children:(0,r.jsx)("button",{className:s().button,onClick:()=>{document.body.classList.toggle("sidebarOpen"),i(c())},children:n?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f,{}),(0,r.jsx)("p",{children:"Close menu"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u,{}),(0,r.jsx)("p",{children:"Open menu"})]})})})}function c(){return document.body.classList.contains("sidebarOpen")}function u(){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"icon",children:(0,r.jsx)("path",{fill:"currentColor",d:"M3 8h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2Zm18 8H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Zm0-5H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Z"})})}function f(){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"icon",children:(0,r.jsx)("path",{fill:"currentColor",d:"m13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"})})}},5532:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(7437),o=n(1396),i=n.n(o),s=n(4042),a=n(1901),l=n(3458),c=n(1750),u=n(7710),f=n(4937),d=n(2122),h=n(6728),p=n(1500);function v(e){return{title:e.title,href:e.href,type:"animation"}}n(7793);let m=[{title:"Home",href:"/",type:"document"},{title:"Motion",children:[v(h.x),v(p.l)]},{title:"Waves",children:[v(u.S),v(a.g),v(s.d),v(c.k),v(l.s),v(f.A),v(d.m)]}];var g=n(1127),_=n.n(g),b=n(2265),w=n(4033);function x(e){let{className:t}=e,n=(0,w.usePathname)();return(0,r.jsx)("nav",{className:"".concat(t," ").concat(_().sidebar),children:(0,r.jsxs)("div",{className:_().content,children:[(0,r.jsx)("p",{className:_().title,children:"Navigation"}),(0,r.jsx)("ul",{children:m.map((e,t)=>(0,r.jsx)(y,{node:e,depth:0,pathname:n},t))})]})})}function y(e){let{node:t,depth:n,pathname:o}=e;return"children"in t?(0,r.jsx)(O,{node:t,depth:n,pathname:o}):(0,r.jsx)(j,{node:t,depth:n,pathname:o})}function j(e){let{node:t,depth:n,pathname:o}=e;return(0,r.jsx)("li",{style:{"--depth":n},children:(0,r.jsxs)(i(),{href:t.href,className:"".concat(_().entry," ").concat(t.href===o?_().selected:""),children:["animation"===t.type&&(0,r.jsx)(S,{}),"document"===t.type&&(0,r.jsx)(P,{}),(0,r.jsx)("div",{className:"oneLine",children:(0,r.jsx)("p",{children:t.title})})]})})}function O(e){let{node:t,depth:n,pathname:o}=e,[i,s]=(0,b.useState)(!0);return(0,r.jsxs)("li",{className:_().collection,style:{"--depth":n},children:[(0,r.jsxs)("button",{className:_().collectionButton,onClick:()=>s(e=>!e),children:[(0,r.jsx)(M,{className:i?_().open:""}),(0,r.jsx)("div",{className:"oneLine",children:(0,r.jsx)("p",{children:t.title})})]}),i&&(0,r.jsx)("ul",{children:t.children.map((e,t)=>(0,r.jsx)(y,{node:e,depth:n+1,pathname:o},t))})]})}function M(e){let{className:t}=e;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"icon ".concat(null!=t?t:""),children:(0,r.jsx)("path",{fill:"currentColor",d:"M15.54 11.29L9.88 5.64a1 1 0 0 0-1.42 0a1 1 0 0 0 0 1.41l4.95 5L8.46 17a1 1 0 0 0 0 1.41a1 1 0 0 0 .71.3a1 1 0 0 0 .71-.3l5.66-5.65a1 1 0 0 0 0-1.47Z"})})}function P(){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"icon",children:(0,r.jsx)("path",{fill:"currentColor",d:"M13 16H3a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2ZM3 8h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2Zm18 3H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Z"})})}function S(){return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"icon",children:[(0,r.jsx)("path",{fill:"currentColor",d:"M15 2a6.998 6.998 0 0 0-6.88 5.737a6 6 0 0 1 8.143 8.143A6.997 6.997 0 0 0 15 2z",opacity:".25"}),(0,r.jsx)("circle",{cx:"7",cy:"17",r:"5",fill:"currentColor"}),(0,r.jsx)("path",{fill:"currentColor",d:"M11 7a6 6 0 0 0-5.97 5.406a4.997 4.997 0 0 1 6.564 6.564A6 6 0 0 0 11 7z",opacity:".5"})]})}},595:function(){},3049:function(e){e.exports={page:"layout_page__rHQ5X",main:"layout_main__KhA0t",sidebar:"layout_sidebar__HNFgq",openSidebarButton:"layout_openSidebarButton__CZTql"}},6406:function(e){e.exports={button:"open-sidebar-button_button__jO87A",icon:"open-sidebar-button_icon__62DHA","odometer-in":"open-sidebar-button_odometer-in___8_hw","odometer-out":"open-sidebar-button_odometer-out__V_Eh2"}},1127:function(e){e.exports={sidebar:"sidebar_sidebar__wDpFO",content:"sidebar_content__V_xVo",title:"sidebar_title__BTL_r",entry:"sidebar_entry__kZK6j",collectionButton:"sidebar_collectionButton__zij41",open:"sidebar_open__9IKPS",selected:"sidebar_selected__zmmFp",collection:"sidebar_collection__2Z3cS","odometer-in":"sidebar_odometer-in__Nd5aA","odometer-out":"sidebar_odometer-out__fE1zv"}},7618:function(e){e.exports={style:{fontFamily:"'__Inter_5b68eb', '__Inter_Fallback_5b68eb'",fontStyle:"normal"},className:"__className_5b68eb"}},622:function(e,t,n){"use strict";var r=n(2265),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,i={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,r)&&!l.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:u,props:i,_owner:a.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},7437:function(e,t,n){"use strict";e.exports=n(622)},1396:function(e,t,n){e.exports=n(8326)},4033:function(e,t,n){e.exports=n(94)}},function(e){e.O(0,[326,478,472,744],function(){return e(e.s=2489)}),_N_E=e.O()}]);