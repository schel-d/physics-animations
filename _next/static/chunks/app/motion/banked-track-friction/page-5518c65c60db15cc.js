(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[246],{8989:function(e,t,n){Promise.resolve().then(n.bind(n,6779))},2983:function(e,t,n){"use strict";function r(e){return e/180*Math.PI}n.d(t,{I:function(){return r}})},2263:function(e,t,n){"use strict";function r(e,t,n,r,o,a,s){let c=r-t,l=o-n;i(e,t,n,Math.atan2(l,c),Math.sqrt(c*c+l*l),a,s)}function i(e,t,n,r,i,o,a){let s=Math.abs(i);if(s<.5*o)return;e.save(),e.translate(t,n),e.rotate(i<0?r+Math.PI:r);let c=Math.min(4*o,.75*s),l=4*o;e.strokeStyle=a,e.lineWidth=o,e.fillStyle=a,e.beginPath(),e.moveTo(0,0),e.lineTo(s-.75*c,0),e.stroke(),e.beginPath(),e.moveTo(s,0),e.lineTo(s-c,-.5*l),e.lineTo(s-c,.5*l),e.fill(),e.restore()}n.d(t,{M:function(){return i},x:function(){return r}})},9842:function(e,t,n){"use strict";n.d(t,{l:function(){return _}});var r=n(785);let i=r.BO,o=r.AY,a=Math.atan2(11,50),s=Math.sqrt(2621),c=e=>{e.fillStyle=o,e.beginPath(),e.rect(-15,-3,30,10),e.rect(-10,-11,20,10),e.rect(-12,7,3,4),e.rect(9,7,3,4),e.fill(),e.fillStyle=r.Oq,e.beginPath(),e.ellipse(-10,2,3,3,0,0,2*Math.PI),e.ellipse(10,2,3,3,0,0,2*Math.PI),e.fill()};var l=n(3549),u=n(4885),f=n(9858),h=n(2263),d=n(3422);let g=r.Q6,M=x(0,0,120,150),m=x(125,0,75,150);class v extends f._{render(e,t,n,r){var i;let o,a;let s=this.forceProvider(t),c=r.requireBoolean(b.netForce);e.save(),(0,d.C)(e,n,200,150),function(e,t,n,r,i,o){if(p(e,i),e.save(),e.translate(i.centerX+o.x,i.centerY+o.y),t(e),n.forEach(t=>{(0,h.M)(e,0,0,t.angle,t.magnitude,1.5,t.color)}),r){let{x:t,y:r}=n.reduce((e,t)=>({x:e.x+Math.cos(t.angle)*t.magnitude,y:e.y+Math.sin(t.angle)*t.magnitude}),{x:0,y:0});(0,h.x)(e,0,0,t,r,1.5,g)}e.restore()}(e,this.graphicRenderer,s,c,M,this.graphicOffset),i=this.forceDiagramOffset,p(e,m),e.save(),e.translate(m.centerX+i.x,m.centerY+i.y),o=0,a=0,s.forEach(t=>{let n=o+Math.cos(t.angle)*t.magnitude,r=a+Math.sin(t.angle)*t.magnitude;(0,h.x)(e,o,a,n,r,1.5,t.color),o=n,a=r}),c&&(0,h.x)(e,0,0,o,a,1.5,g),e.restore(),e.restore()}constructor(e,t,n={x:0,y:0},r={x:0,y:0}){super(),this.forceProvider=e,this.graphicRenderer=t,this.graphicOffset=n,this.forceDiagramOffset=r}}function x(e,t,n,r){return{x:e,y:t,width:n,height:r,centerX:e+.5*n,centerY:t+.5*r}}function p(e,t){e.strokeStyle=r.BO,e.lineWidth=1,e.beginPath(),e.roundRect(t.x+.5,t.y+.5,t.width-1,t.height-1,5),e.stroke()}class y extends u.r{static fromObject(e){let{title:t,description:n,href:r,duration:i,autoLoop:o,forces:a,graphic:s,graphicOffset:c,forceDiagramOffset:l}=e;return new y(t,n,r,i,o,new v(a,s,c,l))}constructor(e,t,n,r,i,o){super(e,t,n,r,i,new b,o)}}class b extends l.Pp{constructor(){super([l.$_.boolean(b.netForce,"Show net force",!0)])}}b.netForce="net-force";var k=n(2983),P=n(2834);let O=(0,k.I)(90),I=(0,k.I)(240),T=(0,k.I)(-30),_=y.fromObject({title:"Friction on a banked track",description:"Friction is required to travel on a banked track, unless you're going the design speed.",href:"/motion/banked-track-friction",duration:8,autoLoop:!0,forces:function(e){let t=(0,P.qq)(e,0,8,-8,-50),n=-((t*Math.sin(T)+50*Math.cos(T))/Math.sin(I-T));return[{magnitude:50,angle:O,color:r.$R},{magnitude:n,angle:I,color:r.ek},{magnitude:(-50-n*Math.sin(I))/Math.sin(T),angle:T,color:r.$C}]},graphic:function(e,t){let n=s*Math.cos(a-e),r=s*Math.sin(a-e),o=-s*Math.cos(-a-e),l=-s*Math.sin(-a-e);return a=>{a.save(),a.scale(t,t),a.save(),a.rotate(-e),c(a),a.restore(),a.fillStyle=i,a.beginPath(),a.moveTo(n,r),a.lineTo(o,l),a.lineTo(n,l),a.fill(),a.restore()}}((0,k.I)(30),1),forceDiagramOffset:{x:20,y:-15}})},6779:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(7437),i=n(2749),o=n(9842);function a(){return(0,r.jsx)(i.Z,{animation:o.l})}}},function(e){e.O(0,[0,478,472,744],function(){return e(e.s=8989)}),_N_E=e.O()}]);