import s from"./ContentSlot.c7ba37f6.js";import{d as o,aZ as u,E as c,bc as f}from"./entry.3ead0af3.js";import"./node.f7b4ab96.js";const d=o({name:"Markdown",extends:s,setup(t){const{parent:e}=f(),{between:n,default:a}=u(),r=c(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:a,tags:r,between:n,parent:e}}});export{d as default};