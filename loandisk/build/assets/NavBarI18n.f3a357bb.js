import{d as u,o,b as r,w as e,p as t,A as m,c as p,F as g,a as f,z as _,x as d,t as L}from"./main.c91d03fd.js";import{V as h}from"./VMenu.cd0000a2.js";import{V,a as b,b as v}from"./VList.0e899df5.js";import{V as x}from"./VBtn.e4d5a7af.js";import"./VDivider.87eb1827.js";import"./scopeId.49d626f8.js";import"./index.997dd10d.js";const C=u({__name:"I18n",props:{languages:null,location:{default:"bottom end"}},emits:["change"],setup(c){const n=c,{locale:s}=useI18n({useScope:"global"});return(l,i)=>(o(),r(x,{icon:"",variant:"text",color:"default",size:"small"},{default:e(()=>[t(m,{icon:"tabler-language",size:"24"}),t(h,{activator:"parent",location:n.location,offset:"14px"},{default:e(()=>[t(V,{"min-width":"175px"},{default:e(()=>[(o(!0),p(g,null,f(n.languages,a=>(o(),r(b,{key:a.i18nLang,value:a.i18nLang,onClick:k=>{s.value=a.i18nLang,l.$emit("change",a.i18nLang)}},{default:e(()=>[t(v,null,{default:e(()=>[_(d(a.label),1)]),_:2},1024)]),_:2},1032,["value","onClick"]))),128))]),_:1})]),_:1},8,["location"])]),_:1}))}}),T=u({__name:"NavBarI18n",setup(c){const{isAppRtl:n}=L(),s=[{label:"English",i18nLang:"en"},{label:"French",i18nLang:"fr"},{label:"Arabic",i18nLang:"ar"}],l=i=>{n.value=i==="ar"};return(i,a)=>(o(),r(C,{languages:s,onChange:l}))}});export{T as default};
