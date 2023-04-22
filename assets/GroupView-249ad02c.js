import{_ as x,m as _,d as b,p as d,r as S,o as a,c as i,a as t,t as n,J as y,k as g,F as N,E as F,e as f,f as v,l as p,H as $}from"./index-abb58fd7.js";import{h as w}from"./zh-tw-a6f00c05.js";import{c as D}from"./cartStore-46488f71.js";import{f as C}from"./frontOrderStore-85692c5c.js";import{b as A}from"./bookmarkStore-7b456337.js";import"./Toast-3b91fd9e.js";const{VITE_APP_URL:h,VITE_APP_PATH:u}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"aurora-path",BASE_URL:"/vue-learnFund/",MODE:"production",DEV:!1,PROD:!0},E={data(){return{clickItem:"",categoryData:{}}},props:["categoryName"],watch:{categoryName(){this.getCategoryData(this.categoryName)}},created(){w.locale("zh-tw")},mounted(){this.getCategoryData(this.categoryName)},computed:{..._(D,["cartList","ShowCourseList","showCheck"]),..._(C,["showFinalStuOrderData"]),..._(A,["showbookmarkData"])},methods:{...b(D,["getCartList","addToCart","checkedClass","getAllCourse"]),...b(C,["getStuOrderList","matchFundingTarget","matchStuNumAndClass"]),...b(A,["setLocalStorageBookmark","getLocalStorageBookmark","BookmarkAction"]),countLeftDay(e){return Date.parse(new Date)>e?"已":(e=new Date(e).toISOString(),w(e).fromNow())},filterData(e){this.categoryName==="已開課課程"||this.categoryName==="募資課程"?e==="open"?this.getAllOpenData():e==="funding"&&this.getAllFundingData():d.get(`${h}/api/${u}/products?category=${this.categoryName}`).then(s=>{this.categoryData.products=[],e==="funding"?s.data.products.forEach(c=>{c.courseStatus==="classFunding"&&this.categoryData.products.push(c)}):e==="open"&&s.data.products.forEach(c=>{c.courseStatus==="classOpen"&&this.categoryData.products.push(c)})}).catch(s=>{console.log(s),this.$router.push("/notFound")})},getAllClassData(){d.get(`${h}/api/${u}/products/all`).then(e=>{this.categoryData=e.data}).catch(e=>{console.log(e)})},getAllFundingData(){d.get(`${h}/api/${u}/products/all`).then(e=>{this.categoryData.products=[],e.data.products.forEach(s=>{s.courseStatus==="classFunding"&&this.categoryData.products.push(s)})}).catch(e=>{console.log(e)})},getAllOpenData(){d.get(`${h}/api/${u}/products/all`).then(e=>{this.categoryData.products=[],e.data.products.forEach(s=>{s.courseStatus==="classOpen"&&this.categoryData.products.push(s)})}).catch(e=>{console.log(e)})},getCategoryData(e){if(!["語言","藝術","投資理財","攝影","商業","募資課程","已開課課程"].includes(e)){this.$router.push("/notFound");return}e==="募資課程"?this.getAllFundingData():e==="已開課課程"?this.getAllOpenData():d.get(`${h}/api/${u}/products?category=${e}`).then(c=>{this.categoryData=c.data}).catch(c=>{console.log(c),this.$router.push("/notFound")})}}},L={class:"full-height mb-5"},O={class:"sticky-top",style:{top:"80px","background-image":"url(./img/content-bg.png)","background-position":"center bottom"}},I={class:"container"},B={class:"pt-3",style:{"--bs-breadcrumb-divider":"'>'"},"aria-label":"breadcrumb"},P={class:"breadcrumb"},T=t("li",{class:"breadcrumb-item"},[t("a",{href:"#",class:"text-decoration-none text-muted"},"首頁")],-1),V={class:"breadcrumb-item active","aria-current":"page"},z={href:"#",class:"text-decoration-none text-dark"},j={class:"mb-3"},R={class:"d-flex justify-content-center mb-5 pb-3"},U={key:0,class:"container"},H={key:0,class:"row"},G=t("div",{class:"col text-center"},"查無資料",-1),J=[G],M={class:"row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3"},q={key:0,class:"card h-100 hover-shadow"},K={class:"ratio ratio-16x9 overflow-hidden"},Q=["src"],W={class:"position-absolute top-rem-1 start-rem-1"},X={class:"badge bg-darkblue me-2"},Y=t("span",{class:"badge bg-secondary"}," 已開課",-1),Z={class:"card-body"},tt={class:"h-100 d-flex flex-column"},et={class:"d-flex justify-content-between"},ot=["onClick"],st=["onClick"],at={class:"mt-auto"},it={class:"mb-2"},nt={class:"mb-0"},ct=t("i",{class:"bi bi-book"},null,-1),rt={class:"mb-0"},lt=t("i",{class:"bi bi-card-list"},null,-1),dt={class:"text-primary fw-bold h3"},ht={class:"d-flex justify-content-between mt-2 align-items-center"},ut={class:"text-muted mb-0"},mt={key:0,href:"#/cart",type:"button",class:"btn btn-primary text-white btn-sm"},gt=["onClick"],pt={key:1,class:"card h-100 hover-shadow"},_t={class:"ratio ratio-16x9 overflow-hidden"},bt=["src"],yt={class:"position-absolute top-rem-1 start-rem-1"},kt={class:"badge bg-darkblue me-2"},ft=t("span",{class:"badge bg-white text-primary fw-bold"}," 募資中",-1),vt={class:"card-body"},wt={class:"h-100 d-flex flex-column"},Dt={class:"d-flex justify-content-between"},Ct=["onClick"],At=["onClick"],xt={key:0,class:"mt-auto"},St={class:"mb-0 mt-1 mb-2"},Nt={class:"text-primary fw-bold h3"},Ft={class:"progress",style:{height:"20px"}},$t={class:"d-flex justify-content-between"},Et={class:"mb-0 text-muted"},Lt={class:"text-muted mb-0"},Ot={class:"text-secondary fw-bolder"},It={class:"d-flex justify-content-between mt-2"},Bt={class:"text-muted mb-0"},Pt={key:0,href:"#/cart",type:"button",class:"btn btn-primary text-white btn-sm"},Tt=["onClick"];function Vt(e,s,c,zt,r,m){const k=S("RouterLink");return a(),i("div",L,[t("div",O,[t("div",I,[t("nav",B,[t("ol",P,[T,t("li",V,[t("a",z,n(c.categoryName),1)])])]),t("h3",j,n(c.categoryName),1),t("div",R,[t("button",{onClick:s[0]||(s[0]=o=>{m.getCategoryData(c.categoryName),r.clickItem="all"}),type:"button",class:y(["btn btn-outline-primary me-3 opacity-75",{active:r.clickItem==="all"}])}," 全部 ",2),t("button",{onClick:s[1]||(s[1]=o=>{m.filterData("open"),r.clickItem="open"}),type:"button",class:y(["btn btn-outline-primary me-3 opacity-75",{active:r.clickItem==="open"}])}," 已開課 ",2),t("button",{onClick:s[2]||(s[2]=o=>{m.filterData("funding"),r.clickItem="funding"}),type:"button",class:y(["btn btn-outline-primary opacity-75",{active:r.clickItem==="funding"}])}," 募資中 ",2)])])]),r.categoryData.products?(a(),i("div",U,[r.categoryData.products.length===0?(a(),i("div",H,J)):g("",!0),t("div",M,[(a(!0),i(N,null,F(r.categoryData.products,o=>(a(),i("div",{class:"col position-relative",key:o.id},[o.courseStatus==="classOpen"?(a(),i("div",q,[f(k,{to:`/course/${o.id}`,class:"text-decoration-none"},{default:v(()=>[t("div",K,[t("img",{src:o.imageUrl,class:"card-img-top img-cover img-hover-enlarge",alt:"..."},null,8,Q)]),t("div",W,[t("span",X,n(o.category),1),Y])]),_:2},1032,["to"]),t("div",Z,[t("div",tt,[t("div",et,[t("h5",null,n(o.title),1),e.showbookmarkData.includes(o.id)?(a(),i("i",{key:0,class:"bi bi-bookmark-fill img-hover-enlarge",onClick:l=>e.BookmarkAction(o.id),style:{"font-size":"1.5rem",color:"orange","font-weight":"500",cursor:"pointer"}},null,8,ot)):(a(),i("i",{key:1,class:"bi bi-bookmark img-hover-enlarge",onClick:l=>e.BookmarkAction(o.id),style:{"font-size":"1.5rem",color:"orange","font-weight":"500",cursor:"pointer"}},null,8,st))]),t("div",at,[t("div",it,[t("p",nt,[ct,p(" "+n(o.unit)+" 小時 ",1)]),t("p",rt,[lt,p(" "+n(o.classSectionNum)+" 章節 "+n(o.classUnitNum)+" 單元 ",1)])]),t("p",null,[t("del",null,"NT$ "+n(o.origin_price),1),t("span",dt," NT$ "+n(o.price),1)]),t("div",ht,[t("p",ut," 同學 "+n(e.matchStuNumAndClass(o.id))+" 人 ",1),e.showCheck.includes(o.id)?(a(),i("a",mt," 已選購，結帳去 ")):(a(),i("button",{key:1,onClick:l=>e.addToCart(o.id),class:"btn btn-outline-primary btn-sm",type:"button"}," 加入購物車 ",8,gt))])])])])])):o.courseStatus==="classFunding"?(a(),i("div",pt,[f(k,{to:`/course/${o.id}`,class:"text-decoration-none"},{default:v(()=>[t("div",_t,[t("img",{src:o.imageUrl,class:"card-img-top img-cover img-hover-enlarge",alt:"..."},null,8,bt)]),t("div",yt,[t("span",kt,n(o.category),1),ft])]),_:2},1032,["to"]),t("div",vt,[t("div",wt,[t("div",Dt,[t("h5",null,n(o.title),1),e.showbookmarkData.includes(o.id)?(a(),i("i",{key:0,class:"bi bi-bookmark-fill img-hover-enlarge",onClick:l=>e.BookmarkAction(o.id),style:{"font-size":"1.5rem",color:"orange","font-weight":"500",cursor:"pointer"}},null,8,Ct)):(a(),i("i",{key:1,class:"bi bi-bookmark img-hover-enlarge",onClick:l=>e.BookmarkAction(o.id),style:{"font-size":"1.5rem",color:"orange","font-weight":"500",cursor:"pointer"}},null,8,At))]),e.showFinalStuOrderData?(a(),i("div",xt,[t("p",St,[p(" 募資價 "),t("span",Nt," NT$ "+n(o.funding_price),1)]),t("div",Ft,[t("div",{class:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100",style:$({width:e.matchFundingTarget(o.id)+"%"})},null,4)]),t("div",$t,[t("p",Et," 達標率 "+n(e.matchFundingTarget(o.id))+" % ",1),t("p",Lt,[t("span",Ot,n(m.countLeftDay(o.fundingEndDate)),1),p(" 結束 ")])]),t("div",It,[t("p",Bt," 同學 "+n(e.matchStuNumAndClass(o.id))+" 人 ",1),e.showCheck.includes(o.id)?(a(),i("a",Pt," 已選購，結帳去 ")):(a(),i("button",{key:1,onClick:l=>e.addToCart(o.id),class:"btn btn-outline-primary btn-sm",type:"button"}," 加入購物車 ",8,Tt))])])):g("",!0)])])])):g("",!0)]))),128))])])):g("",!0)])}const Mt=x(E,[["render",Vt]]);export{Mt as default};
