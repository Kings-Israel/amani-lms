import{d as H,bs as Q,k as c,aD as w,M as J,r as P,o as m,c as h,p as a,w as l,F as C,a as R,bm as A,bh as B,bt as U,m as t,x as r,s as K,G as y,q as u,bo as x,z as N,b as W,E as X,A as S,a1 as Y,a2 as Z,bl as ee}from"./main.cad6ac3f.js";import{a as te}from"./formatters.6aea8434.js";import{a as k}from"./axios.5c415fe0.js";import{V as E}from"./VSelect.5ef069f5.js";import{V as ae}from"./VSpacer.1e6a1f4b.js";import{V as se}from"./VTextField.6ab6d276.js";import{V}from"./VBtn.a52c8ee1.js";import{V as I}from"./VDivider.c04ee9aa.js";import{V as le,a as oe}from"./VTable.3c6a2e52.js";import{V as re}from"./VChip.aff1fc4b.js";import{V as ne}from"./VMenu.3e23c506.js";import{V as ie,a as T}from"./VList.319559ef.js";import"./scopeId.6c05b8dd.js";import"./VCheckboxBtn.546c055a.js";const ce={class:"d-flex align-center gap-2 my-1"},ue={class:"text-h6"},de={class:"me-3",style:{width:"80px"}},pe={class:"app-user-search-filter d-flex align-center flex-wrap gap-4"},me={style:{width:"10rem"}},fe=t("thead",null,[t("tr",null,[t("th",{scope:"col"}," USER "),t("th",{scope:"col"}," BRANCH "),t("th",{scope:"col"}," MOBILE NUMBER "),t("th",{scope:"col"}," ID NUMBER "),t("th",{scope:"col"}," CREATED ON "),t("th",{scope:"col"}," ACTIONS ")])],-1),ve={class:"d-flex align-center"},he={key:1},_e={class:"d-flex flex-column"},be={class:"text-base"},xe={class:"text-sm text-disabled"},Ve={class:"text-capitalize text-base"},ge={class:"text-capitalize text-base font-weight-semibold"},we={class:"text-base"},Ue={class:"text-center",style:{width:"5rem"}},ye=t("tr",null,[t("td",{colspan:"7",class:"text-center"}," No data available ")],-1),Ne=[ye],Se={class:"text-sm text-disabled"},Fe=H({__name:"index",setup(ke){const z=Q("UserListStore",{actions:{fetchUsers(s){return k.get("apps/users/list",{params:s})},addUser(s){return new Promise((o,v)=>{k.post("/apps/users/user",{user:s}).then(i=>o(i)).catch(i=>v(i))})},fetchUser(s){return new Promise((o,v)=>{k.get(`/apps/users/${s}`).then(i=>o(i)).catch(i=>v(i))})}}})(),_=c(""),b=c(),M=c(),O=c(),d=c(10),n=c(1),p=c(1),D=c(0),f=c([]),L=()=>{z.fetchUsers({q:_.value,status:O.value,plan:M.value,role:b.value,perPage:d.value,currentPage:n.value}).then(s=>{console.log(s),f.value=s.data.users,p.value=s.data.totalPage,D.value=s.data.totalUsers}).catch(s=>{console.error(s)})};w(L),w(()=>{n.value>p.value&&(n.value=p.value)});const $=[{title:"Nairobi",value:"nairobi"},{title:"Mombasa",value:"mombasa"},{title:"Nakuru",value:"nakuru"}],g=s=>s==="subscriber"?{color:"warning",icon:"tabler-user"}:s==="author"?{color:"success",icon:"tabler-circle-check"}:s==="maintainer"?{color:"primary",icon:"tabler-chart-pie-2"}:s==="editor"?{color:"info",icon:"tabler-pencil"}:s==="admin"?{color:"secondary",icon:"tabler-device-laptop"}:{color:"primary",icon:"tabler-user"},j=s=>s==="pending"?"warning":s==="active"?"success":s==="inactive"?"secondary":"primary";w(()=>{n.value>p.value&&(n.value=p.value)});const F=J(()=>{const s=f.value.length?(n.value-1)*d.value+1:0,o=f.value.length+(n.value-1)*d.value;return`Showing ${s} to ${o} of ${D.value} entries`}),q=s=>{z.addUser(s),L()},G=[{icon:"tabler-user",color:"primary",title:"Session",stats:"21,459",percentage:29,subtitle:"Total Users"},{icon:"tabler-user-plus",color:"error",title:"Paid Users",stats:"4,567",percentage:18,subtitle:"Last week analytics"},{icon:"tabler-user-check",color:"success",title:"Active Users",stats:"19,860",percentage:-14,subtitle:"Last week analytics"},{icon:"tabler-user-exclamation",color:"warning",title:"Pending Users",stats:"237",percentage:42,subtitle:"Last week analytics"}];return(s,o)=>{const v=P("RouterLink"),i=P("AddNewUserDrawer");return m(),h("section",null,[a(ee,null,{default:l(()=>[(m(),h(C,null,R(G,e=>a(A,{key:e.title,cols:"12",sm:"6",lg:"3"},{default:l(()=>[a(B,null,{default:l(()=>[a(U,{class:"d-flex justify-space-between"},{default:l(()=>[t("div",null,[t("span",null,r(e.title),1),t("div",ce,[t("h6",ue,r(e.stats),1),t("span",{class:K(e.percentage>0?"text-success":"text-error")},"("+r(e.percentage)+"%)",3)]),t("span",null,r(e.subtitle),1)]),a(y,{rounded:"",variant:"tonal",color:e.color,icon:e.icon},null,8,["color","icon"])]),_:2},1024)]),_:2},1024)]),_:2},1024)),64)),a(A,{cols:"12"},{default:l(()=>[a(B,{title:"Registered Customers"},{default:l(()=>[a(U,{class:"d-flex flex-wrap py-4 gap-4"},{default:l(()=>[t("div",de,[a(E,{modelValue:u(d),"onUpdate:modelValue":o[0]||(o[0]=e=>x(d)?d.value=e:null),density:"compact",variant:"outlined",items:[10,20,30,50]},null,8,["modelValue"])]),a(ae),t("div",pe,[a(E,{modelValue:u(b),"onUpdate:modelValue":o[1]||(o[1]=e=>x(b)?b.value=e:null),label:"Select Branch",items:$,clearable:"","clear-icon":"tabler-x"},null,8,["modelValue"]),t("div",me,[a(se,{modelValue:u(_),"onUpdate:modelValue":o[2]||(o[2]=e=>x(_)?_.value=e:null),placeholder:"Search",density:"compact"},null,8,["modelValue"])]),a(V,{variant:"tonal",color:"secondary","prepend-icon":"tabler-screen-share"},{default:l(()=>[N(" Export ")]),_:1})])]),_:1}),a(I),a(le,{class:"text-no-wrap"},{default:l(()=>[fe,t("tbody",null,[(m(!0),h(C,null,R(u(f),e=>(m(),h("tr",{key:e.id,style:{height:"3.75rem"}},[t("td",null,[t("div",ve,[a(y,{variant:"tonal",color:g(e.role).color,class:"me-3",size:"38"},{default:l(()=>[e.avatar?(m(),W(X,{key:0,src:e.avatar},null,8,["src"])):(m(),h("span",he,r(u(te)(e.fullName)),1))]),_:2},1032,["color"]),t("div",_e,[t("h6",be,[a(v,{to:{name:"apps-user-view-id",params:{id:e.id}},class:"font-weight-medium user-list-name"},{default:l(()=>[N(r(e.fullName),1)]),_:2},1032,["to"])]),t("span",xe,"@"+r(e.email),1)])])]),t("td",null,[a(y,{color:g(e.role).color,icon:g(e.role).icon,variant:"tonal",size:"30",class:"me-4"},null,8,["color","icon"]),t("span",Ve,r(e.role),1)]),t("td",null,[t("span",ge,r(e.currentPlan),1)]),t("td",null,[t("span",we,r(e.billing),1)]),t("td",null,[a(re,{label:"",color:j(e.status),size:"small",class:"text-capitalize"},{default:l(()=>[N(r(e.status),1)]),_:2},1032,["color"])]),t("td",Ue,[a(V,{icon:"",size:"x-small",color:"default",variant:"text"},{default:l(()=>[a(S,{size:"22",icon:"tabler-edit"})]),_:1}),a(V,{icon:"",size:"x-small",color:"default",variant:"text"},{default:l(()=>[a(S,{size:"22",icon:"tabler-trash"})]),_:1}),a(V,{icon:"",size:"x-small",color:"default",variant:"text"},{default:l(()=>[a(S,{size:"22",icon:"tabler-dots-vertical"}),a(ne,{activator:"parent"},{default:l(()=>[a(ie,null,{default:l(()=>[a(T,{title:"View",to:{name:"apps-user-view-id",params:{id:e.id}}},null,8,["to"]),a(T,{title:"Suspend",href:"javascript:void(0)"})]),_:2},1024)]),_:2},1024)]),_:2},1024)])]))),128))]),Y(t("tfoot",null,Ne,512),[[Z,!u(f).length]])]),_:1}),a(I),a(U,{class:"d-flex align-center flex-wrap justify-space-between gap-4 py-3 px-5"},{default:l(()=>[t("span",Se,r(u(F)),1),a(oe,{modelValue:u(n),"onUpdate:modelValue":o[3]||(o[3]=e=>x(n)?n.value=e:null),size:"small","total-visible":5,length:u(p)},null,8,["modelValue","length"])]),_:1})]),_:1})]),_:1})]),_:1}),a(i,{isDrawerOpen:s.isAddNewUserDrawerVisible,"onUpdate:isDrawerOpen":o[4]||(o[4]=e=>s.isAddNewUserDrawerVisible=e),onUserData:q},null,8,["isDrawerOpen"])])}}});export{Fe as default};
