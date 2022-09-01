import{i as A,g as I,D as T}from"./DoughnutChart.d5ce3c1d.js";import{d as S,r as p,p as F,j as v,_ as C,o as D,c as y,b as l,e as _,w as g,h as o,t as h,F as O,f as w,q as b,s as E,i as R,v as U,x as M}from"./index.5ad5b96b.js";import{u as B}from"./user.3c14c1d7.js";import{u as x}from"./school.abe7d252.js";import{h as k}from"./moment.9709ab41.js";import{s as j,a as $,b as N,c as V}from"./study.dd7cd5fb.js";import{r as W}from"./request.a667e329.js";const G=S({name:"StackedColumnChart",props:{echartsData:{type:Object,default:()=>null}},setup(e){const a=p(e.echartsData);F(()=>{const n=document.querySelector("#stackedColumnChart");let i=A(n),t={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{bottom:-4},grid:{top:"10%",left:"3%",right:"4%",bottom:"6%",containLabel:!0},xAxis:[{type:"category",data:a.value.dateList}],yAxis:[{type:"value",axisLabel:{formatter:function(s){return Math.floor(s)/1e3+"k"}}}],series:[{name:"\u6BCF\u6708\u4E00\u8BFE",type:"bar",barWidth:16,stack:"Search Engine",emphasis:{focus:"series"},itemStyle:{color:"#0066FF"},data:a.value.dataList?a.value.dataList.monthy:[]},{name:"\u6BCF\u5468\u4E00\u7EC3",type:"bar",stack:"Search Engine",emphasis:{focus:"series"},itemStyle:{color:"#00B2FF"},data:a.value.dataList?a.value.dataList.weekly:[]},{name:"\u6BCF\u65E5\u4E00\u5B66",type:"bar",stack:"Search Engine",emphasis:{focus:"series"},itemStyle:{color:"#81E2FF",borderRadius:[2,2,0,0]},data:a.value.dataList?a.value.dataList.daily:[]}]};v(()=>{a.value=e.echartsData,t={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{bottom:-4},grid:{top:"10%",left:"3%",right:"4%",bottom:"6%",containLabel:!0},xAxis:[{type:"category",data:a.value.dateList}],yAxis:[{type:"value",axisLabel:{formatter:function(s){return Math.floor(s)/1e3+"k"}}}],series:[{name:"\u6BCF\u6708\u4E00\u8BFE",type:"bar",barWidth:16,stack:"Search Engine",emphasis:{focus:"series"},itemStyle:{color:"#0066FF"},data:a.value.dataList?a.value.dataList.monthy:[]},{name:"\u6BCF\u5468\u4E00\u7EC3",type:"bar",stack:"Search Engine",emphasis:{focus:"series"},itemStyle:{color:"#00B2FF"},data:a.value.dataList?a.value.dataList.weekly:[]},{name:"\u6BCF\u65E5\u4E00\u5B66",type:"bar",stack:"Search Engine",emphasis:{focus:"series"},itemStyle:{color:"#81E2FF",borderRadius:[2,2,0,0]},data:a.value.dataList?a.value.dataList.daily:[]}]},i=A(n),t&&i.setOption(t)}),t&&i.setOption(t)})}});const H={id:"stackedColumnChart",class:"stacked-column-chart-container"};function Y(e,a,n,i,t,s){return D(),y("div",H)}const K=C(G,[["render",Y],["__scopeId","data-v-686bf2ff"]]),X=S({name:"LearningSituationPanel",components:{StackedColumnChart:K},props:{username:{type:String,default:"Admin"},listData:{type:Object,default:()=>null},echartsData:{type:Object,default:()=>null}},setup(e){const a=p(e.username),n=p(e.listData),i=p(e.echartsData),t=p({daily:{icon:"hours_icon_img.png",title:"\u6BCF\u65E5\u4EFB\u52A1\u5B8C\u6210\u4EBA\u6570",total:324,tagLabel:"\u8F83\u6628\u5929",tag:"+100"},weekly:{icon:"week_calendar_icon_img.png",title:"\u6BCF\u5468\u4EFB\u52A1\u5B8C\u6210\u4EBA\u6570",total:120,tagLabel:"\u8F83\u4E0A\u5468",tag:"-20"},monthy:{icon:"month_calendar_icon_img.png",title:"\u6BCF\u6708\u4EFB\u52A1\u5B8C\u6210\u4EBA\u6570",total:12,tagLabel:"\u8F83\u6628\u5929",tag:"+2"}}),s=(c,r)=>{const u=r-c;return u>0?`+${u}`:u};return v(()=>{n.value=e.listData,n.value&&(t.value.daily.total=n.value.daily,t.value.daily.tag=s(n.value.yesterday,n.value.daily),t.value.weekly.total=n.value.weekly,t.value.weekly.tag=s(n.value.last_weekly,n.value.weekly),t.value.monthy.total=n.value.monthy,t.value.monthy.tag=s(n.value.last_monthy,n.value.monthy)),i.value=e.echartsData}),{getImageUrl:I,completeNumberRef:t,usernameRef:a,echartsDataRef:i}}});const z=e=>(b("data-v-24007a9c"),e=e(),E(),e),Q={class:"learning-situation-panel-container"},Z={class:"card-content-box"},q={class:"user-info-box flex-start"},J={class:"complete-number-ul flex-start"},ee={class:"complete-number-icon-box"},ae={class:"complete-number-content-box"},te={class:"complete-number-title-style"},ne={class:"complete-number-box flex-start align-end"},se={class:"complete-number-total-style"},oe={class:"complete-number-tag-style increase-tag-style"},ie={class:"learning-situation-box"},ce=z(()=>o("p",{class:"learning-situation-title-style"},"\u5B66\u4E60\u60C5\u51B5\u770B\u677F",-1));function re(e,a,n,i,t,s){const c=l("el-image"),r=l("StackedColumnChart"),u=l("el-card");return D(),y("div",Q,[_(u,{class:"el-card-style","body-style":{padding:"0px"}},{default:g(()=>[o("div",Z,[o("header",null,[o("div",q,[_(c,{class:"welcome-icon-style",src:e.getImageUrl("welcome_icon_img.png")},null,8,["src"]),o("p",null,"\u6B22\u8FCE\u56DE\u6765\uFF0C"+h(e.usernameRef),1)])]),o("article",null,[o("ul",J,[(D(!0),y(O,null,w(e.completeNumberRef,(m,d)=>(D(),y("li",{key:d,class:"complete-number-li flex-start"},[o("div",ee,[_(c,{class:"complete-number-icon-style",src:e.getImageUrl(m.icon)},null,8,["src"])]),o("div",ae,[o("p",te,h(m.title),1),o("div",ne,[o("p",se,h(m.total),1),o("p",oe,h(m.tagLabel)+h(m.tag),1)])])]))),128))]),o("div",ie,[ce,_(r,{echartsData:e.echartsDataRef},null,8,["echartsData"])])])])]),_:1})])}const _e=C(X,[["render",re],["__scopeId","data-v-24007a9c"]]),le=S({name:"WarningPanel",setup(e){return{getImageUrl:I,tableData:[{name:"\u5F6D\u6446\u9C7C"},{name:"\u5F6D\u6446\u9C7C"},{name:"\u5F6D\u6446\u9C7C"},{name:"\u5F6D\u6446\u9C7C"}]}}});const L=e=>(b("data-v-98134ea5"),e=e(),E(),e),pe={class:"warning-panel-container"},ue={class:"warning-panel-title-style flex-start"},de=L(()=>o("p",{class:"warning-title-style"},"\u9884\u8B66\u5B66\u5458",-1)),me=L(()=>o("p",{class:"warning-title-number-style"},"(56)",-1)),ge={class:"warning-panel-table-box"},De={class:"flex-start"},ye={class:"warning-panel-name-style"},he=L(()=>o("div",{class:"warning-panel-tag-style"},"\u4E25\u91CD\u9884\u8B66",-1)),Ce=R("\u901A\u77E5\u6559\u5E08");function Se(e,a,n,i,t,s){const c=l("el-image"),r=l("el-table-column"),u=l("el-button"),m=l("el-table"),d=l("el-card");return D(),y("div",pe,[_(d,{class:"el-card-style","body-style":{padding:0}},{default:g(()=>[o("div",ue,[_(c,{class:"warning-panel-title-icon-style",src:e.getImageUrl("warning_icon_img.png")},null,8,["src"]),de,me]),o("div",ge,[_(m,{data:e.tableData,stripe:"",style:{width:"100%"}},{default:g(()=>[_(r,{prop:"name",label:"\u59D3\u540D"},{default:g(P=>[o("div",De,[o("div",ye,h(P.row.name),1),he])]),_:1}),_(r,{label:"\u64CD\u4F5C",align:"center"},{default:g(()=>[_(u,{type:"primary",link:""},{default:g(()=>[Ce]),_:1})]),_:1})]),_:1},8,["data"])])]),_:1})])}const ve=C(le,[["render",Se],["__scopeId","data-v-98134ea5"]]),fe=S({name:"HotPanel",props:{tableData:{type:[Array,Object],default:()=>[]}},setup(e,a){const n=p([{label:"\u6BCF\u65E5",val:"daily"},{label:"\u6BCF\u5468",val:"weekly"},{label:"\u6BCF\u6708",val:"monthy"}]),i=p({}),t=u=>{i.value=u,a.emit("change",i.value)},s=p(),c={color:"#606266","background-color":"#F2F3F8"};return v(()=>{s.value=e.tableData}),t(n.value[0]),{tabsListRef:n,activeTabsRef:i,changeTabs:t,tableDataRef:s,headerRowStyle:c,handleTaleTypeView:u=>{switch(u){case"daily":return"\u6BCF\u65E5\u4E00\u5B66";case"weekly":return"\u6BCF\u5468\u4E00\u505A";case"monthy":return"\u6BCF\u6708\u4E00\u8BFE"}}}}});const be=e=>(b("data-v-967ff7c2"),e=e(),E(),e),Ee={class:"hot-panel-container"},Pe={class:"flex"},Ae=be(()=>o("p",{class:"title-style"},"\u70ED\u95E8\u5185\u5BB9",-1)),Re=R("\u67E5\u770B\u66F4\u591A"),Le={class:"custom-tabs-ul flex-start"},ke=["onClick"];function Ie(e,a,n,i,t,s){const c=l("el-button"),r=l("el-table-column"),u=l("el-table"),m=l("el-card");return D(),y("div",Ee,[_(m,{class:"el-card-style","body-style":{padding:"0px"}},{default:g(()=>[o("header",Pe,[Ae,_(c,{type:"primary",link:""},{default:g(()=>[Re]),_:1})]),o("article",null,[o("ul",Le,[(D(!0),y(O,null,w(e.tabsListRef,(d,P)=>(D(),y("li",{key:P,class:U(["custom-tabs-li",{"custom-tabs-li-active":e.activeTabsRef===d}]),onClick:sa=>e.changeTabs(d)},h(d.label),11,ke))),128))]),_(u,{class:"el-table-style",data:e.tableData,style:{width:"100%"},"header-cell-style":e.headerRowStyle,border:""},{default:g(()=>[_(r,{label:"\u6392\u540D",width:"60",type:"index",align:"center"}),_(r,{prop:"title",label:"\u5185\u5BB9\u6807\u9898"}),_(r,{prop:"type",label:"\u7C7B\u522B",align:"center"},{default:g(d=>[R(h(e.handleTaleTypeView(d.row.type)),1)]),_:1}),_(r,{prop:"count",label:"\u5B8C\u6210\u91CF",align:"center"})]),_:1},8,["data","header-cell-style"])])]),_:1})])}const Fe=C(fe,[["render",Ie],["__scopeId","data-v-967ff7c2"]]),Oe=S({name:"ContentCategoryPanel",props:{echartsData:{type:Object,default:()=>({})}},components:{DoughnutChart:T},setup(e){const a=p(e.echartsData);return v(()=>{console.log("props.echartsData :>> ",e.echartsData),a.value=[{name:"\u6BCF\u65E5\u4E00\u5B66",value:e.echartsData.daily},{name:"\u6BCF\u5468\u4E00\u7EC3",value:e.echartsData.weekly},{name:"\u6BCF\u6708\u4E00\u8BFE",value:e.echartsData.monthy}]}),{echartsDataRef:a}}});const we=e=>(b("data-v-86576807"),e=e(),E(),e),Te={class:"content-category-panel-container"},Ue=we(()=>o("header",null,[o("div",{class:"title-style"},"\u5185\u5BB9\u7C7B\u522B\u5360\u6BD4")],-1));function Me(e,a,n,i,t,s){const c=l("DoughnutChart"),r=l("el-card");return D(),y("div",Te,[_(r,{class:"el-card-style","body-style":{padding:"0px"}},{default:g(()=>[Ue,_(c,{echartsData:e.echartsDataRef},null,8,["echartsData"])]),_:1})])}const Be=C(Oe,[["render",Me],["__scopeId","data-v-86576807"]]),xe=S({name:"BasicBarChart",props:{echartsData:{type:Object,default:()=>({})}},setup(e){const a=p([0,0,0]);return F(()=>{const n=document.getElementById("basicBarChart"),i=A(n),t={xAxis:{type:"category",data:["\u5206\u4EAB\u91CF","\u8BC4\u8BBA\u91CF","\u70B9\u8D5E\u91CF"]},yAxis:{type:"value",axisLabel:{formatter:s=>Math.floor(s)/1e3+"k"}},grid:{left:"15%"},series:[{data:a.value,type:"bar",barWidth:"8",itemStyle:{borderRadius:4,color:"#0066FF"}}]};t&&i.setOption(t),v(()=>{a.value[0]=e.echartsData.share,a.value[1]=e.echartsData.comment,a.value[2]=e.echartsData.like,t&&i.setOption(t)})}),{}}});const je={id:"basicBarChart",class:"basic-bar-chart-container"};function $e(e,a,n,i,t,s){return D(),y("div",je)}const Ne=C(xe,[["render",$e],["__scopeId","data-v-08c33d5d"]]),Ve=S({name:"DailyInteractionCountPanel",props:{echartsData:{type:Object,default:()=>({})}},components:{BasicBarChart:Ne},setup(e){const a=p(e.echartsData);return v(()=>{a.value=e.echartsData}),{ecartsDataRef:a}}});const We=e=>(b("data-v-8ec87cb9"),e=e(),E(),e),Ge={class:"daily-interaction-count-panel-container"},He=We(()=>o("header",null,[o("p",{class:"title-style"},"\u4ECA\u65E5\u8F6C\u8BC4\u8D5E\u7EDF\u8BA1")],-1));function Ye(e,a,n,i,t,s){const c=l("BasicBarChart"),r=l("el-card");return D(),y("div",Ge,[_(r,{class:"el-card-style","body-style":{padding:"0px"}},{default:g(()=>[He,o("article",null,[_(c,{echartsData:e.ecartsDataRef},null,8,["echartsData"])])]),_:1})])}const Ke=C(Ve,[["render",Ye],["__scopeId","data-v-8ec87cb9"]]);function f(){const e=x(),a=e.saveSchoolInfoList,n=e.saveSchoolInfo,i=p(e.getSchoolInfoList),t=p(e.getSchoolInfo),s=B(),c=s.saveSchoolUserInfo,r=p(s.getSchoolUserInfo);return{saveSchoolInfoList:a,saveSchoolInfo:n,saveSchoolUserInfo:c,schoolInfoListRef:i,schoolInfoRef:t,schoolUserInfoRef:r}}function Xe(){const e=p({}),a=p({}),n=s=>{const c=[],r={Daily:[],weekly:[],monthy:[]};s.forEach(d=>{switch(d.dates&&c.push(d.dates),d.type){case"daily":r.Daily.push(d.count);break;case"weekly":r.weekly.push(d.count);break;case"monthy":r.monthy.push(d.count);break}});const u=new Set(c);return{dateList:Array.from(u),dataList:r}},i=async()=>{const c=await j({});e.value=c},t=async()=>{const s=k().subtract(7,"days").format("YYYY-MM-DD HH:mm:ss"),c=k().format("YYYY-MM-DD HH:mm:ss");return await $({start_date:s,end_date:c})};return M(async()=>{i();const s=await t();Array.isArray(s)&&(a.value=n(s))}),{studyDashboardCompleteCountRef:e,studyDashboardCompleteListRef:a}}function ze(){const e=p({}),a=p(),n=t=>{e.value=t.val},i=async t=>{const c=await N({limit:"5",page:"1",type:t});a.value=c.data};return v(()=>{const t=e.value;typeof t=="string"&&i(t)}),{hotConentList:a,changeTabs:n}}function Qe(){const e=p();return(async()=>{const i=await V({});e.value=i})(),{studyDashboardCountRef:e}}const Ze=async e=>await W.post("http://api.ps.familyeducation.org.cn/v1/rate/dashboard/today",e);function qe(){const e=p({});return(async()=>{const i=await Ze({});e.value=i})(),{rateDashboardTodayRef:e}}const Je={name:"workbenchView",components:{LearningSituationPanel:_e,WarningPanel:ve,HotPanel:Fe,ContentCategoryPanel:Be,DailyInteractionCountPanel:Ke},setup(){const e=p(-1);f().saveSchoolInfoList();const n=f().schoolInfoListRef.value;return Array.isArray(n)&&n.length>0&&(e.value=n[0].id),console.log("schoolIdRef :>> ",e.value),e.value&&f().saveSchoolInfo(e.value),f().saveSchoolUserInfo,{...f(),...Xe(),...ze(),...Qe(),...qe()}}};const ea={class:"workbench-view-container"},aa={class:"flex align-start"},ta={class:"row-two-style flex"};function na(e,a,n,i,t,s){const c=l("LearningSituationPanel"),r=l("WarningPanel"),u=l("HotPanel"),m=l("ContentCategoryPanel"),d=l("DailyInteractionCountPanel");return D(),y("div",ea,[o("div",aa,[_(c,{username:e.schoolUserInfoRef.username,listData:e.studyDashboardCompleteCountRef,echartsData:e.studyDashboardCompleteListRef},null,8,["username","listData","echartsData"]),_(r)]),o("div",ta,[_(u,{onChange:e.changeTabs,tableData:e.hotConentList},null,8,["onChange","tableData"]),_(m,{echartsData:e.studyDashboardCountRef},null,8,["echartsData"]),_(d,{echartsData:e.rateDashboardTodayRef},null,8,["echartsData"])])])}const ua=C(Je,[["render",na],["__scopeId","data-v-41e25b1d"]]);export{ua as default};
