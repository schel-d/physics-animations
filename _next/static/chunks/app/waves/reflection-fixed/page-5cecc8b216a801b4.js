(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[526],{3255:function(e,t,n){Promise.resolve().then(n.bind(n,4917))},238:function(e,t,n){"use strict";function r(e,t,n){return(r,o)=>{let i=-r/(e/Math.PI)+o*t;return i<0||i>Math.PI?0:-Math.sin(i)*n}}function o(e,t,n){return(r,o)=>{let i=-(1-r)/(e/Math.PI)+o*t;return i<0||i>Math.PI?0:-Math.sin(i)*n}}function i(e,t,n){return(r,o)=>{let i=-r/(e/Math.PI)+o*t;return i<0?0:-Math.sin(i)*n}}function l(e){return(t,n)=>e(2-t,n)}function s(e){return(t,n)=>-e(2-t,n)}n.d(t,{SC:function(){return l},_S:function(){return i},dC:function(){return r},k4:function(){return o},vr:function(){return s}})},340:function(e,t,n){"use strict";n.d(t,{O:function(){return w}});var r=n(4885),o=n(9858),i=n(785),l=n(3422),s=n(3549);class u extends s.Pp{define(){return[s.$_.boolean(u.superposition,"Show superposition",!0),s.$_.boolean(u.components,"Show wave components",!1),s.$_.boolean(u.particles,"Show particles",!1),s.$_.boolean(u.longitudinal,"Show particles as longitudinal",!1),...null!=this.rulersOption?[s.$_.boolean(u.rulers,this.rulersOption,!1)]:[]]}constructor(e){super(),this.rulersOption=e}}u.superposition="superposition",u.components="components",u.particles="particles",u.longitudinal="longitudinal",u.rulers="rulers";let a=i.AY,f=i.sY,c=[i.Q6,i.ek],h=i.BO;class d extends o._{render(e,t,n,r){var o;let i=r.requireBoolean(u.superposition),s=r.requireBoolean(u.components),d=r.requireBoolean(u.particles),v=r.requireBoolean(u.longitudinal),w=null!==(o=r.getBoolean(u.rulers))&&void 0!==o&&o;if(e.save(),(0,l.C)(e,n,500,250),e.translate(0,125),w&&(e.strokeStyle=h,e.lineWidth=1,this.rulers.forEach(t=>{let{x:n}=g(t,0,0);e.beginPath(),e.moveTo(n,-125),e.lineTo(n,125),e.stroke()}),e.beginPath(),e.moveTo(g(0,0,0).x,0),e.lineTo(g(1,0,0).x,0),e.stroke()),s){let n=this.waves.length;this.waves.forEach((r,o)=>{let i=c[o%c.length];p(e,r,t,i,"none","none",2*o-2*n/2)})}let b=(e,t)=>{let n=0;for(let r of this.waves)n+=r(e,t);return n};if(i){let n=v&&d,r=n?"none":this.leftEnd,o=n?"none":this.rightEnd;p(e,b,t,a,r,o,0)}if(d){let n=v||!i,r="none"===this.leftEnd||n,o="none"===this.rightEnd||n;!function(e,t,n,r,o,i,l){e.fillStyle=r;let s=i?0:1,u=l?21:20;for(let r=s;r<u;r++){let i=r/20,{x:l,y:s}=g(i,0,0);o?l+=48*t(i,n):s+=125*t(i,n),e.beginPath(),e.ellipse(l,s,5,5,0,0,2*Math.PI),e.fill()}}(e,b,t,f,v,r,o)}e.restore()}constructor(e,t,n,r){super(),this.waves=e,this.leftEnd=t,this.rightEnd=n,this.rulers=r}}function p(e,t,n,r,o,i,l){e.strokeStyle=r,e.lineWidth=2,e.beginPath();for(let r=0;r<100;r++){let o=r/99,{x:i,y:s}=g(o,t(o,n),l);0===r?e.moveTo(i,s):e.lineTo(i,s)}if(e.stroke(),"none"!==o){let{x:r,y:i}=g(0,t(0,n),l);v(e,r,i,"free"===o)}if("none"!==i){let{x:r,y:o}=g(1,t(1,n),l);v(e,r,o,"free"===i)}}function v(e,t,n,r){r?(e.strokeStyle=f,e.fillStyle=i.Oq,e.beginPath(),e.ellipse(t,n,10,10,0,0,2*Math.PI),e.fill(),e.stroke()):(e.fillStyle=f,e.beginPath(),e.ellipse(t,n,10,10,0,0,2*Math.PI),e.fill())}function g(e,t,n){return{x:10+480*e,y:125*t+n}}class w extends r.r{static fromObject(e){let{title:t,description:n,href:r,duration:o,autoLoop:i,waves:l,leftEnd:s,rightEnd:a,rulers:f=[],rulersOptionText:c="Show rulers"}=e;return new w(t,n,r,o,i,new u(f.length>0?c:null),new d(l,s,a,f))}constructor(e,t,n,r,o,i,l){super(e,t,n,r,o,i,l)}}},3458:function(e,t,n){"use strict";n.d(t,{s:function(){return i}});var r=n(238),o=n(340);let i=o.O.fromObject({title:"Reflection (fixed end)",description:"The wave reflects and inverts when it reaches the fixed end of the rope.",href:"/waves/reflection-fixed",duration:7,autoLoop:!0,waves:[(0,r.dC)(.2,5,.3),(0,r.vr)((0,r.dC)(.2,5,.3))],leftEnd:"none",rightEnd:"fixed"})},4917:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(7437),o=n(2749),i=n(3458);function l(){return(0,r.jsx)(o.Z,{animation:i.s})}}},function(e){e.O(0,[0,478,472,744],function(){return e(e.s=3255)}),_N_E=e.O()}]);