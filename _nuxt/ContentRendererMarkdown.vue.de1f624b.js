import{_ as p}from"./MDCRenderer.c346bcf2.js";import{d as l,a8 as m,J as o,b as i,Y as v,K as b}from"./entry.3544795e.js";const _=l({__name:"ContentRendererMarkdown",props:{value:{type:Object,required:!0},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"},components:{type:Object,default:()=>({})}},setup(n){const e=n,r=m().isEnabled(),d=o(()=>{let t=e.value.body||e.value;return e.excerpt&&e.value.excerpt&&(t=e.value.excerpt),t}),c=o(()=>{const{body:t,excerpt:u,...a}=e.value;return a}),s=o(()=>({...e.components,...c.value._components||{}}));return(t,u)=>{const a=p;return i(),v(a,{body:d.value,data:c.value,tag:n.tag,components:s.value,"data-content-id":b(r)?n.value._id:void 0},null,8,["body","data","tag","components","data-content-id"])}}});export{_};