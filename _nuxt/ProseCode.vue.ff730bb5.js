import{_ as c}from"./ProseCodeIcon.vue.6d92de34.js";import{_ as m}from"./ProseCodeButton.vue.6a25872e.js";import{d as p,ag as f,b as n,c as r,n as o,aA as s,g as t,e as u,t as _,f as g,a9 as b}from"./entry.0a06a4c3.js";const B=p({__name:"ProseCode",props:{code:{},icon:{},language:{},hideHeader:{type:Boolean},filename:{},highlights:{},meta:{}},setup(y){const i={wrapper:"[&>pre]:!rounded-t-none [&>pre]:!my-0 my-5",header:"flex items-center gap-1.5 border border-gray-200 dark:border-gray-700 border-b-0 relative rounded-t-md px-4 py-3 not-prose",icon:{base:""},button:{base:"absolute top-2.5 right-2.5"},filename:"text-gray-700 dark:text-gray-200 text-sm/6"},{ui:a}=f("content.prose.code",void 0,i,void 0,!0);return(e,h)=>{const d=c,l=m;return n(),r("div",{class:o(["relative",!!e.filename&&s(a).wrapper])},[e.filename&&!e.hideHeader?(n(),r("div",{key:0,class:o(s(a).header)},[t(d,{icon:e.icon,filename:e.filename,class:o(s(a).icon.base)},null,8,["icon","filename","class"]),u("span",{class:o(s(a).filename)},_(e.filename),3)],2)):g("",!0),t(l,{code:e.code,class:o(s(a).button.base)},null,8,["code","class"]),b(e.$slots,"default")],2)}}});export{B as _};
