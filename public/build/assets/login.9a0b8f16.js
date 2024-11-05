import{H as Ve,X as F,Y as D,a6 as ae,a7 as ge,a8 as he,aF as _e,aG as ke,a9 as xe,Z as Ce,ab as ne,ac as pe,K as A,M as f,ae as Ie,ag as Se,ah as oe,ai as Pe,aj as Be,aI as Ae,aJ as we,ak as $e,an as se,$ as _,b8 as Fe,p as t,am as Te,Q as q,A as M,S as U,au as Le,L as z,O as De,ap as Re,P as T,I as Ee,a3 as Oe,k as x,bl as ie,a0 as je,al as Me,R as w,N as Ue,av as Z,aO as H,a2 as ze,d as re,o as j,c as J,F as Ne,a as Ge,w as d,b as qe,m as b,E as K,q as g,ba as Ze,bk as E,V as He,v as Q,x as Je,bm as Ke,bg as O,z as $}from"./main.714bbe6f.js";import{V as N}from"./VBtn.92acc30a.js";import{u as W,m as Qe,a as We,b as X}from"./route-block.61106167.js";import{a as p,V as Y}from"./VRow.c9a3d65b.js";import{V as Xe,m as Ye,u as et,f as tt,a as lt,b as at,c as nt,d as ee}from"./VTextField.0a58942c.js";import{f as ot,V as te}from"./VDivider.7f020f91.js";import"./index.a0d4f5df.js";const st=Ve("v-alert-title"),it=["success","info","warning","error"],rt=F({name:"VAlert",props:{border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:D,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>it.includes(e)},...ae(),...ge(),...he(),..._e(),...ke(),...xe(),...Ce(),...ne(),...pe({variant:"flat"})},emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:l}=s;const a=A(e,"modelValue"),n=f(()=>{var h;if(e.icon!==!1)return e.type?(h=e.icon)!=null?h:`$${e.type}`:e.icon}),i=f(()=>{var h;return{color:(h=e.color)!=null?h:e.type,variant:e.variant}}),{themeClasses:r}=Ie(e),{colorClasses:c,colorStyles:o,variantClasses:u}=Se(i),{densityClasses:v}=oe(e),{dimensionStyles:m}=Pe(e),{elevationClasses:y}=Be(e),{locationStyles:V}=Ae(e),{positionClasses:C}=we(e),{roundedClasses:I}=$e(e),{textColorClasses:S,textColorStyles:P}=se(_(e,"borderColor")),{t:k}=Fe(),B=f(()=>({"aria-label":k(e.closeLabel),onClick(h){a.value=!1}}));return()=>{var h,L;const R=!!(l.prepend||n.value),ve=!!(l.title||e.title),be=!!(e.text||l.text),ye=!!(l.close||e.closable);return a.value&&t(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},r.value,c.value,v.value,y.value,C.value,I.value,u.value],style:[o.value,m.value,V.value],role:"alert"},{default:()=>[Te(!1,"v-alert"),e.border&&t("div",{key:"border",class:["v-alert__border",S.value],style:P.value},null),R&&t(q,{key:"prepend",defaults:{VIcon:{density:e.density,icon:n.value,size:e.prominent?44:28}}},{default:()=>[t("div",{class:"v-alert__prepend"},[l.prepend?l.prepend():n.value&&t(M,null,null)])]}),t("div",{class:"v-alert__content"},[ve&&t(st,{key:"title"},{default:()=>[l.title?l.title():e.title]}),be&&(l.text?l.text():e.text),(h=l.default)==null?void 0:h.call(l)]),l.append&&t("div",{key:"append",class:"v-alert__append"},[l.append()]),ye&&t(q,{key:"close",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var G;return[t("div",{class:"v-alert__close"},[(G=(L=l.close)==null?void 0:L.call(l,{props:B.value}))!=null?G:t(N,B.value,null)])]}})]})}}});const ue=Symbol.for("vuetify:selection-control-group"),ce=U({color:String,disabled:Boolean,error:Boolean,id:String,inline:Boolean,falseIcon:D,trueIcon:D,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:Boolean,modelValue:null,type:String,valueComparator:{type:Function,default:Le},...ne(),...ae()},"v-selection-control-group");F({name:"VSelectionControlGroup",props:{defaultsTarget:{type:String,default:"VSelectionControl"},...ce()},emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:l}=s;const a=A(e,"modelValue"),n=z(),i=f(()=>e.id||`v-selection-control-group-${n}`),r=f(()=>e.name||i.value);return De(ue,{modelValue:a}),Re({[e.defaultsTarget]:{color:_(e,"color"),disabled:_(e,"disabled"),density:_(e,"density"),error:_(e,"error"),inline:_(e,"inline"),modelValue:a,multiple:f(()=>!!e.multiple||e.multiple==null&&Array.isArray(a.value)),name:r,falseIcon:_(e,"falseIcon"),trueIcon:_(e,"trueIcon"),readonly:_(e,"readonly"),ripple:_(e,"ripple"),type:_(e,"type"),valueComparator:_(e,"valueComparator")}}),T(()=>{var c;return t("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline}],"aria-labelled-by":e.type==="radio"?i.value:void 0,role:e.type==="radio"?"radiogroup":void 0},[(c=l.default)==null?void 0:c.call(l)])}),{}}});const de=U({label:String,trueValue:null,falseValue:null,value:null,...ce()},"v-selection-control");function ut(e){const s=Ue(ue,void 0),{densityClasses:l}=oe(e),a=A(e,"modelValue"),n=f(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),i=f(()=>e.falseValue!==void 0?e.falseValue:!1),r=f(()=>!!e.multiple||e.multiple==null&&Array.isArray(a.value)),c=f({get(){const m=s?s.modelValue.value:a.value;return r.value?m.some(y=>e.valueComparator(y,n.value)):e.valueComparator(m,n.value)},set(m){if(e.readonly)return;const y=m?n.value:i.value;let V=y;r.value&&(V=m?[...Z(a.value),y]:Z(a.value).filter(C=>!e.valueComparator(C,n.value))),s?s.modelValue.value=V:a.value=V}}),{textColorClasses:o,textColorStyles:u}=se(f(()=>c.value&&!e.error&&!e.disabled?e.color:void 0)),v=f(()=>c.value?e.trueIcon:e.falseIcon);return{group:s,densityClasses:l,trueValue:n,falseValue:i,model:c,textColorClasses:o,textColorStyles:u,icon:v}}const ct=Ee()({name:"VSelectionControl",directives:{Ripple:Oe},inheritAttrs:!1,props:de(),emits:{"update:modelValue":e=>!0},setup(e,s){let{attrs:l,slots:a}=s;const{densityClasses:n,icon:i,model:r,textColorClasses:c,textColorStyles:o,trueValue:u}=ut(e),v=z(),m=f(()=>e.id||`input-${v}`),y=x(!1),V=x(!1),C=x();function I(k){y.value=!0,(!H||H&&k.target.matches(":focus-visible"))&&(V.value=!0)}function S(){y.value=!1,V.value=!1}function P(k){r.value=k.target.checked}return T(()=>{var k,B;const h=a.label?a.label({label:e.label,props:{for:m.value}}):e.label,[L,R]=ie(l);return t("div",w({class:["v-selection-control",{"v-selection-control--dirty":r.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":y.value,"v-selection-control--focus-visible":V.value,"v-selection-control--inline":e.inline},n.value]},L),[t("div",{class:["v-selection-control__wrapper",c.value],style:o.value},[(k=a.default)==null?void 0:k.call(a),je(t("div",{class:["v-selection-control__input"]},[i.value&&t(M,{key:"icon",icon:i.value},null),t("input",w({ref:C,checked:r.value,disabled:e.disabled,id:m.value,onBlur:S,onFocus:I,onInput:P,"aria-readonly":e.readonly,type:e.type,value:u.value,name:e.name,"aria-checked":e.type==="checkbox"?r.value:void 0},R),null),(B=a.input)==null?void 0:B.call(a,{model:r,textColorClasses:c,textColorStyles:o,props:{onFocus:I,onBlur:S,id:m.value}})]),[[Me("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),h&&t(Xe,{for:m.value,clickable:!0},{default:()=>[h]})])}),{isFocused:y,input:C}}}),me=U({indeterminate:Boolean,indeterminateIcon:{type:D,default:"$checkboxIndeterminate"},...de({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"v-checkbox-btn"),fe=F({name:"VCheckboxBtn",props:me(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,s){let{slots:l}=s;const a=A(e,"indeterminate"),n=A(e,"modelValue");function i(o){a.value&&(a.value=!1)}const r=f(()=>e.indeterminate?e.indeterminateIcon:e.falseIcon),c=f(()=>e.indeterminate?e.indeterminateIcon:e.trueIcon);return T(()=>t(ct,w(e,{modelValue:n.value,"onUpdate:modelValue":[o=>n.value=o,i],class:"v-checkbox-btn",type:"checkbox",inline:!0,falseIcon:r.value,trueIcon:c.value,"aria-checked":e.indeterminate?"mixed":void 0}),l)),{}}});function dt(e){return ze(e,Object.keys(fe.props))}const mt=F({name:"VCheckbox",inheritAttrs:!1,props:{...Ye(),...me()},emits:{"update:focused":e=>!0},setup(e,s){let{attrs:l,slots:a}=s;const{isFocused:n,focus:i,blur:r}=et(e),c=z(),o=f(()=>e.id||`checkbox-${c}`);return T(()=>{const[u,v]=ie(l),[m,y]=tt(e),[V,C]=dt(e);return t(lt,w({class:"v-checkbox"},u,m,{id:o.value,focused:n.value}),{...a,default:I=>{let{id:S,isDisabled:P,isReadonly:k}=I;return t(fe,w(V,{id:S.value,disabled:P.value,readonly:k.value},v,{onFocus:i,onBlur:r}),a)}})}),{}}}),ft=F({name:"VForm",props:{...at()},emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,s){let{slots:l,emit:a}=s;const n=nt(e),i=x();function r(o){o.preventDefault(),n.reset()}function c(o){const u=o,v=n.validate();u.then=v.then.bind(v),u.catch=v.catch.bind(v),u.finally=v.finally.bind(v),a("submit",u),u.defaultPrevented||v.then(m=>{let{valid:y}=m;if(y){var V;(V=i.value)==null||V.submit()}}),u.preventDefault()}return T(()=>{var o;return t("form",{ref:i,class:"v-form",novalidate:!0,onReset:r,onSubmit:c},[(o=l.default)==null?void 0:o.call(l,n)])}),ot(n,i)}}),vt=e=>e==null||e===""?!0:!!(Array.isArray(e)&&e.length===0),bt=e=>e==null,yt=e=>Array.isArray(e)&&e.length===0,Vt={class:"d-flex justify-center flex-wrap gap-3"},gt=re({__name:"AuthProvider",setup(e){const s=[{icon:"fa-facebook",color:"#4267b2"},{icon:"fa-google",color:"#dd4b39"},{icon:"fa-twitter",color:"#1da1f2"}];return(l,a)=>(j(),J("div",Vt,[(j(),J(Ne,null,Ge(s,n=>t(N,{key:n.icon,icon:"",variant:"tonal",size:"38",color:n.color,class:"rounded"},{default:d(()=>[t(M,{size:"18",icon:n.icon},null,8,["icon"])]),_:2},1032,["color"])),64))]))}}),le=e=>bt(e)||yt(e)||e===!1?"This field is required":!!String(e).trim().length||"This field is required",ht=e=>{if(vt(e))return!0;const s=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return Array.isArray(e)?e.every(l=>s.test(String(l)))||"The Email field must be a valid email":s.test(String(e))||"The Email field must be a valid email"},_t="/build/assets/auth-v2-login-illustration-bordered-dark.a595a9b7.png",kt="/build/assets/auth-v2-login-illustration-bordered-light.47ee3625.png",xt="/build/assets/auth-v2-login-illustration-dark.0878e8b9.png",Ct="/build/assets/auth-v2-login-illustration-light.d1fd488d.png",pt={class:"position-relative auth-bg rounded-lg w-100 ma-8 me-0"},It={class:"d-flex align-center justify-center w-100 h-100"},St={class:"text-h5 font-weight-semibold mb-1"},Pt=b("p",{class:"mb-0"}," Please sign-in to your account and start the adventure ",-1),Bt=b("p",{class:"text-caption mb-2"},[$(" Admin Email: "),b("strong",null,"admin@demo.com"),$(" / Pass: "),b("strong",null,"admin")],-1),At=b("p",{class:"text-caption mb-0"},[$(" Client Email: "),b("strong",null,"client@demo.com"),$(" / Pass: "),b("strong",null,"client")],-1),wt={class:"d-flex align-center flex-wrap justify-space-between mt-2 mb-4"},$t=b("a",{class:"text-primary ms-2 mb-1",href:"#"}," Forgot Password? ",-1),Ft=b("span",null,"New on our platform?",-1),Tt=b("a",{class:"text-primary ms-2",href:"#"}," Create an account ",-1),Lt=b("span",{class:"mx-4"},"or",-1),Dt=re({__name:"login",setup(e){const s=W(Ct,xt,kt,_t,!0),l=W(We,Qe),a=x(!1),n=x("admin@demo.com"),i=x("admin"),r=x(!1);return(c,o)=>(j(),qe(Y,{"no-gutters":"",class:"auth-wrapper"},{default:d(()=>[t(p,{lg:"8",class:"d-none d-lg-flex"},{default:d(()=>[b("div",pt,[b("div",It,[t(K,{"max-width":"505",src:g(s),class:"auth-illustration mt-16 mb-2"},null,8,["src"])]),t(K,{src:g(l),class:"auth-footer-mask"},null,8,["src"])])]),_:1}),t(p,{cols:"12",lg:"4",class:"d-flex align-center justify-center"},{default:d(()=>[t(Ze,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:d(()=>[t(E,null,{default:d(()=>[t(g(He),{nodes:g(Q).app.logo,class:"mb-6"},null,8,["nodes"]),b("h5",St," Welcome to "+Je(g(Q).app.title)+"! \u{1F44B}\u{1F3FB} ",1),Pt]),_:1}),t(E,null,{default:d(()=>[t(rt,{color:"primary",variant:"tonal"},{default:d(()=>[Bt,At]),_:1})]),_:1}),t(E,null,{default:d(()=>[t(ft,{onSubmit:o[4]||(o[4]=Ke(()=>{},["prevent"]))},{default:d(()=>[t(Y,null,{default:d(()=>[t(p,{cols:"12"},{default:d(()=>[t(ee,{modelValue:g(n),"onUpdate:modelValue":o[0]||(o[0]=u=>O(n)?n.value=u:null),label:"Email",type:"email",rules:[g(le),g(ht)]},null,8,["modelValue","rules"])]),_:1}),t(p,{cols:"12"},{default:d(()=>[t(ee,{modelValue:g(i),"onUpdate:modelValue":o[1]||(o[1]=u=>O(i)?i.value=u:null),label:"Password",rules:[g(le)],type:g(a)?"text":"password","append-inner-icon":g(a)?"tabler-eye-off":"tabler-eye","onClick:appendInner":o[2]||(o[2]=u=>a.value=!g(a))},null,8,["modelValue","rules","type","append-inner-icon"]),b("div",wt,[t(mt,{modelValue:g(r),"onUpdate:modelValue":o[3]||(o[3]=u=>O(r)?r.value=u:null),label:"Remember me"},null,8,["modelValue"]),$t]),t(N,{block:"",type:"submit"},{default:d(()=>[$(" Login ")]),_:1})]),_:1}),t(p,{cols:"12",class:"text-center"},{default:d(()=>[Ft,Tt]),_:1}),t(p,{cols:"12",class:"d-flex align-center"},{default:d(()=>[t(te),Lt,t(te)]),_:1}),t(p,{cols:"12",class:"text-center"},{default:d(()=>[t(gt)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});typeof X=="function"&&X(Dt);export{Dt as default};