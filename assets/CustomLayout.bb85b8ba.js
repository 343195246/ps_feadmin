import{d as k,u as w,r as _,a as L,_ as b,b as a,o as i,c as h,e as u,w as d,F as y,f as x,g as A,h as n,n as F,t as v,i as S,j,k as V,R as M,l as $}from"./index.639c65c9.js";import{u as I}from"./user.257e151c.js";import{u as g}from"./school.f825c732.js";import{u as R}from"./family.7ec4750b.js";import"./request.686373aa.js";const N=k({name:"CustomMenu",setup(){const t=w(),m=(e,l)=>{console.log(e,l)},s=(e,l)=>{console.log(e,l)},o=_(L[0].children);return{handleOpen:m,handleClose:s,menuListRef:o,handleMenuTitle:e=>e&&e.meta&&e.meta.title?e.meta.title:"\u672A\u547D\u540D",onSubMenuClick:e=>{console.log("routerPath :>> ",e),t.replace(e)}}}});const O={class:"el-menu-contrainer"};function P(t,m,s,o,p,f){const e=a("el-menu-item"),l=a("el-sub-menu"),C=a("el-menu");return i(),h("div",O,[u(C,{"default-active":"2",class:"el-menu-vertical-demo",onOpen:t.handleOpen,onClose:t.handleClose},{default:d(()=>[(i(!0),h(y,null,x(t.menuListRef,c=>(i(),A(l,{key:c.path,index:c.path},{title:d(()=>[n("i",{class:F(["iconfont",c.meta.icon])},null,2),n("span",null,v(t.handleMenuTitle(c)),1)]),default:d(()=>[(i(!0),h(y,null,x(c.children,r=>(i(),h(y,{key:r.path},[r.meta.hiden?j("",!0):(i(),A(e,{key:0,class:"menu-item-style",index:r.path,onClick:Y=>t.onSubMenuClick(r.path)},{default:d(()=>[S(v(r.meta.title),1)]),_:2},1032,["index","onClick"]))],64))),128))]),_:2},1032,["index"]))),128))]),_:1},8,["onOpen","onClose"])])}const T=b(N,[["render",P],["__scopeId","data-v-e78326b5"]]);function q(){g().getSchoolGradeList(),g().getSchoolClassList(),R().reqFamilyRoleListApi(),R().reqFamilyTypeListApi()}const B={name:"CustomLayout",components:{CustomMenu:T},setup(){const t=g(),m=I(),s=_(),o=_(m.getSchoolUserInfo),p=_("https://th.bing.com/th/id/OIP.FPXCAFQlqji01hPxcgVX9AAAAA?w=220&h=219&c=7&r=0&o=5&dpr=2&pid=1.7"),f=_(""),e=_("https://th.bing.com/th/id/OIP.FPXCAFQlqji01hPxcgVX9AAAAA?w=220&h=219&c=7&r=0&o=5&dpr=2&pid=1.7");return q(),V(()=>{s.value=t.getSchoolInfo,e.value=s.value.icon,s.value.icon&&(p.value=s.value.icon),s.value.name&&(f.value=s.value.name),o.value.wx_img&&(e.value=o.value.wx_img)}),{RouterLink:M,RouterView:$,projectImgRef:p,projectNameRef:f,userAvatarRef:e,schoolUserInfoRef:o}}};const U={class:"custom-layout-container"},X={class:"flex"},z={class:"project-info-box flex-start"},D={class:"project-title-style"},E={class:"user-info-box flex-start"},G={class:"user-info-style flex-start"},Q={class:"user-name-style"},H=S("[\u9000\u51FA]"),J={class:"flex-start align-start"},K={class:"router-view-box"};function W(t,m,s,o,p,f){const e=a("el-avatar"),l=a("el-button"),C=a("CustomMenu"),c=a("RouterView"),r=a("el-scrollbar");return i(),h("div",U,[n("header",X,[n("div",z,[u(e,{size:28,src:o.projectImgRef},null,8,["src"]),n("p",D,v(o.projectNameRef),1)]),n("div",E,[n("div",G,[u(e,{size:32,src:o.userAvatarRef},null,8,["src"]),n("p",Q,v(o.schoolUserInfoRef.username),1)]),u(l,{class:"exit-btn-style",type:"primary",link:""},{default:d(()=>[H]),_:1})])]),n("main",J,[u(C),n("div",K,[u(r,{class:"el-scroll-bar-style"},{default:d(()=>[u(c)]),_:1})])])])}const ne=b(B,[["render",W],["__scopeId","data-v-fa757cf9"]]);export{ne as default};
