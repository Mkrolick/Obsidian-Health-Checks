/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var y=Object.defineProperty;var m=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var F=Object.prototype.hasOwnProperty;var $=(i,t)=>{for(var n in t)y(i,n,{get:t[n],enumerable:!0})},w=(i,t,n,l)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of u(t))!F.call(i,a)&&a!==n&&y(i,a,{get:()=>t[a],enumerable:!(l=m(t,a))||l.enumerable});return i};var v=i=>w(y({},"__esModule",{value:!0}),i);var H={};$(H,{default:()=>p});module.exports=v(H);var e=require("obsidian"),p=class extends e.Plugin{async onload(){this.addCommand({id:"create-health-check-note",name:"Create Health Check Note",callback:()=>this.createHealthCheckNote()}),this.addCommand({id:"create-chiari-health-check-note",name:"Create Chiari Health Check Note",callback:()=>this.createChiariHealthCheckNote()})}onunload(){}async createHealthCheckNote(){let t=new Date,n=t.getFullYear(),l=String(t.getMonth()+1).padStart(2,"0"),a=String(t.getDate()).padStart(2,"0"),C=`${n}-${l}-${a}`,o=`${C} Health Check.md`,c="Health Checks",r=`${c}/${o}`;try{this.app.vault.getAbstractFileByPath(c)||await this.app.vault.createFolder(c),await this.app.vault.create(r,`# Health Check for ${C}

- [ ] Feeling good
- [ ] Exercise completed
- [ ] Meditated
- [ ] Other notes...`);let h=this.app.vault.getAbstractFileByPath(r);h&&h instanceof e.TFile&&(this.app.workspace.getLeaf(!0).openFile(h),new e.Notice(`Health Check note created: ${o}`))}catch(s){console.error("Error creating Health Check note:",s),new e.Notice("Failed to create Health Check note.")}}async createChiariHealthCheckNote(){let t=new Date,n=t.getFullYear(),l=String(t.getMonth()+1).padStart(2,"0"),a=String(t.getDate()).padStart(2,"0"),o=`(${`${n}-${l}-${a}`})'s Chiari Check.md`,c="Chiari Checks",r=`${c}/${o}`;if(this.app.vault.getAbstractFileByPath(r)){new e.Notice(`Today's Chiari Health Check note already exists: ${o}`);return}try{this.app.vault.getAbstractFileByPath(c)||await this.app.vault.createFolder(c);let h=`${c}/-log.md`,f=this.app.vault.getAbstractFileByPath(h);if(f){let d=await this.app.vault.cachedRead(f);await this.app.vault.modify(f,`${d}
- [[${o}]]
`)}else{await this.app.vault.create(h,"Log of Chiari Checks:");let d=this.app.vault.getAbstractFileByPath(h),k=await this.app.vault.cachedRead(d);await this.app.vault.modify(d,`${k}
- [[${o}]]
`)}await this.app.vault.create(r,`What time is it? 
- 

 What level is the pain you feel (1-10)? 
- 

 Where is the pain localized? 
- 

 Have you taken any meds for the pain? 
- 

 Any additional notes: 
 - 
 - 
 - `);let g=this.app.vault.getAbstractFileByPath(r);g&&g instanceof e.TFile&&(this.app.workspace.getLeaf(!0).openFile(g),new e.Notice(`Chiari Health Check note created: ${o}`))}catch(s){console.error("Error creating Chiari Health Check note:",s),new e.Notice("Failed to create Chiari Health Check note.")}}};
