import{g as e,l,_ as a,z as o,A as t,o as s,c as i,F as n,i as r,j as u,B as c,b as d,q as f}from"./app.a4b4062b.js";const v=e({setup(){const e=l(0);return{count:e,load:()=>{e.value+=2}}}}),p={class:"infinite-list",style:{overflow:"auto"}};var b=a(v,[["render",function(e,l,a,c,d,f){const v=o("infinite-scroll");return t((s(),i("ul",p,[(s(!0),i(n,null,r(e.count,(e=>(s(),i("li",{key:e,class:"infinite-list-item"},u(e),1)))),128))],512)),[[v,e.load]])}]]),_=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:b});const g=e({setup(){const e=l(10),a=l(!1),o=c((()=>e.value>=20)),t=c((()=>a.value||o.value));return{count:e,loading:a,noMore:o,disabled:t,load:()=>{a.value=!0,setTimeout((()=>{e.value+=2,a.value=!1}),2e3)}}}}),m={class:"infinite-list-wrapper",style:{overflow:"auto"}},y={class:"list","infinite-scroll-disabled":"disabled"},j={key:0},k={key:1};var M=a(g,[["render",function(e,l,a,c,v,p){const b=o("infinite-scroll");return s(),i("div",m,[t(d("ul",y,[(s(!0),i(n,null,r(e.count,(e=>(s(),i("li",{key:e,class:"list-item"},u(e),1)))),128))],512),[[b,e.load]]),e.loading?(s(),i("p",j,"Loading...")):f("v-if",!0),e.noMore?(s(),i("p",k,"No more")):f("v-if",!0)])}]]),S=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:M});export{_,S as a};
