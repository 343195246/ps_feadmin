import{_ as T}from"./login-zh-icon.d552541b.js";import{r as A,A as C,q as I,s as f,u as h,b as m,o as g,c as u,h as s,e as o,w as p,D as S,t as j,i as N,E as F}from"./index.639c65c9.js";import{r as P}from"./request.686373aa.js";const w="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAAXNSR0IArs4c6QAAAXBJREFUKFN1kD9IAnEUx9/3zlMHKYeGtmizLXCMoECoodG2IEqrJdLSJXX4QWgNB6eQg3kRQYGgQVtLEE01FNRUWw21BREuddz9XpxlHFFvejw+3z88kGeE2AtqYScF4mUCCtbr06EQwu4iKBnmiAT6QTIGojEwHXxYtO8PKBkmOQlCi5kuVZaPKJbrbQWKzrZzbbW1UyHm3rtOQlRDWo82BShRAsVRKpsPuXRy0Fvnr93l/oVd10A4OLGeThy54n/hTnw4cEKMRn41Uf0TLpbNCwW8LBllArXyqWSlW+nbuX6XSy8MddR6LUI+9YxBW15Q6LU+v09tomTsNknFdm5l/twVCCF83t+6t2LFTCmSQxB6LeKqLNsZF9mll9+f+E5rWtweRSfeqMcZlGHpjxfWZp+7gs1KPcoSDSY5nV9dvOnA7mwYOzEFikHgFklcEXiKCMOwnblcduneZX7gr757Qa3XmQFogJhvrbfnY2//T8TCqQlkvmWrAAAAAElFTkSuQmCC",V="/assets/login_bg.9ba0e7e9.png",x=async _=>await P.post("http://api.ps.familyeducation.org.cn/v1/user/auth/phone",_),W=async _=>await P.post("http://api.ps.familyeducation.org.cn/v1/user/auth/send",_),G=async _=>await P.post("http://api.ps.familyeducation.org.cn/v1/school/admin/my_list",_),d=A(60),D=A(!1),H=async _=>{await W({phone:_})},B=async _=>{await H(_),D.value=!0;const t=setInterval(()=>{d.value--,d.value<=0&&(D.value=!1,d.value=0,clearTimeout(t))},1e3)};const Y={class:"root flex"},K={class:"flex1 flex-center"},X={class:"login-wrap"},Q=s("h1",null,"\u767B\u5F55\u7BA1\u7406\u4E2D\u5FC3",-1),z={class:"flex item-wrap p"},$=s("div",{class:"icon-wrap flex-center"},[s("img",{class:"login-icon",src:T,alt:""})],-1),Z={class:"flex item-wrap"},q={class:"flex el-input-wrap"},J=s("div",{class:"icon-wrap flex-center"},[s("img",{class:"login-icon",src:w,alt:""})],-1),ee={key:0,class:"send-code grey"},ne=N("\u767B\u5F55"),se=s("img",{src:V,class:"bg-container"},null,-1),ie={__name:"loginView",setup(_){const t=A({}),E=(i,e,a)=>{e===""?a(new Error("\u8BF7\u8F93\u5165\u624B\u673A\u53F7")):/^1((3[0-9])|(4[1579])|(5[0-9])|(6[6])|(7[0-9])|(8[0-9])|(9[0-9]))\d{8}$/.test(e)?a():a(new Error("\u624B\u673A\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E"))},R=(i,e,a)=>{e===""?a(new Error("\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801")):a()},n=C({codeRef:"",phoneRef:""}),l=I();f(()=>{l.loginInfo.phone&&(n.phoneRef=l.loginInfo.phone)});const v=C({phoneRef:[{validator:E,trigger:"blur"}],codeRef:[{validator:R,trigger:"blur"}]}),O=i=>{!i||i.validate(e=>{if(e)console.log("submit!",n),y();else return console.log("error submit!"),!1})},y=async()=>{const i={phone:n.phoneRef,code:n.codeRef},e=await x(i);l.getLoginInfo(e.token,e.uid,n.phoneRef),await b()},U=h(),b=async()=>{const e=await G({});!e||e.length<1?F.error("\u65E0\u6743\u9650"):U.push({path:"/"})};return(i,e)=>{const a=m("el-input"),c=m("el-form-item"),L=m("el-checkbox"),k=m("el-button"),M=m("el-form");return g(),u("div",Y,[s("div",K,[s("div",X,[Q,o(M,{ref_key:"ruleFormRef",ref:t,model:n,"status-icon":"",rules:v,"label-width":"120px",class:"demo-ruleForm","label-position":"top",style:{width:"400px"}},{default:p(()=>[o(c,{"label-width":0,prop:"phoneRef",style:{width:"400px"}},{default:p(()=>[s("div",z,[$,o(a,{modelValue:n.phoneRef,"onUpdate:modelValue":e[0]||(e[0]=r=>n.phoneRef=r),type:"text",maxlength:11,resize:"none",clearable:"",autocomplete:"off",class:"el-input"},null,8,["modelValue"])])]),_:1}),o(c,{"label-width":0,prop:"codeRef",style:{width:"400px"}},{default:p(()=>[s("div",Z,[s("div",q,[J,o(a,{resize:"none",class:"el-input code",maxlength:"6",modelValue:n.codeRef,"onUpdate:modelValue":e[1]||(e[1]=r=>n.codeRef=r),type:"codeRefword"},null,8,["modelValue"])]),S(D)?(g(),u("div",ee," \u5DF2\u53D1\u9001("+j(S(d))+"s) ",1)):(g(),u("div",{key:1,class:"send-code",onClick:e[2]||(e[2]=r=>S(B)(n.phoneRef))}," \u83B7\u53D6\u9A8C\u8BC1\u7801 "))])]),_:1}),o(c,null,{default:p(()=>[o(L,{label:"\u8BB0\u4F4F\u8D26\u53F7",name:"type"})]),_:1}),o(c,null,{default:p(()=>[o(k,{class:"login-btn",type:"primary",onClick:e[3]||(e[3]=r=>O(t.value))},{default:p(()=>[ne]),_:1})]),_:1})]),_:1},8,["model","rules"])])]),se])}}};export{ie as default};
