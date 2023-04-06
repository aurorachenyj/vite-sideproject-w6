import{_ as x,m as h,d as m,p as D,r as v,o as e,c as a,F as y,E as w,a as t,l as g,e as _,f as u,t as i,k}from"./index-d88e7fd2.js";import{b as p}from"./bookmarkStore-b8509ebf.js";import{c as b}from"./cartStore-109ae50d.js";import{T as C}from"./Toast-ccf83d12.js";const{VITE_APP_URL:B,VITE_APP_PATH:T}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"aurora-path",BASE_URL:"/vue-learnFund/",MODE:"production",DEV:!1,PROD:!0},S={data(){return{bookmarkClassDetail:[]}},mounted(){this.getLocalStorageBookmark()},computed:{...h(p,["showbookmarkData"]),...h(b,["addToCart"])},watch:{showbookmarkData(){this.getBookmarkDetail()}},methods:{...m(p,["getLocalStorageBookmark","setLocalStorageBookmark"]),...m(b,["showCheck"]),moveToCart(c){this.addToCart(c);const s=this.showbookmarkData.indexOf(c);this.showbookmarkData.splice(s,1),this.setLocalStorageBookmark(),this.getBookmarkDetail()},delBookmark(c){const s=this.showbookmarkData.indexOf(c);this.showbookmarkData.splice(s,1),this.setLocalStorageBookmark(),C.fire({icon:"success",title:"移除收藏"}),this.getBookmarkDetail()},getBookmarkDetail(){this.bookmarkClassDetail=[],console.log(this.showbookmarkData),console.log(this.bookmarkClassDetail);const c=this.showbookmarkData.map(s=>D.get(`${B}/api/${T}/product/${s}`));console.log(c),Promise.all(c).then(s=>{s.forEach(r=>{console.log(r.data.product),this.bookmarkClassDetail.push(r.data.product)})}).catch(s=>{console.log(s)})}}},P={class:"container full-height pb-5"},L=t("h4",{class:"my-5"},[g("我收藏的課程 "),t("i",{class:"bi bi-bookmark-heart"})],-1),E={key:0,class:"d-flex justify-content-center mb-5"},V=t("div",{class:"col-12 col-md-8 border border-3 rounded-3 py-3"},[t("p",{class:"text-center"},[g(" 尚未收藏任何課程 "),t("br"),t("a",{href:".#/courses",class:"btn btn-outline-primary mt-2"}," 探索課程 ")])],-1),A=[V],$={key:1},N={class:"col-md-3"},O=["src"],R={class:"col-md-6"},F={class:"mb-0"},I={class:"mt-3 d-flex align-items-center"},U={key:0,class:"badge bg-darkblue me-3"},H={key:1,class:"badge bg-secondary me-3"},j={key:2,class:"mb-0 fw-bold text-primary"},M={key:3,class:"mb-0 fw-bold text-primary"},q={class:"col-md-3"},z={class:"text-end text-md-start"},G={class:"btn-group btn-group-sm",role:"group","aria-label":"Basic outlined example"},J=["onClick"],K=t("i",{class:"bi bi-trash3 text-dark"},null,-1),Q=[K],W=["onClick"];function X(c,s,r,Y,n,l){const d=v("RouterLink");return e(),a("div",P,[L,n.bookmarkClassDetail.length===0?(e(),a("div",E,A)):(e(),a("div",$,[(e(!0),a(y,null,w(n.bookmarkClassDetail,o=>(e(),a("div",{class:"row align-items-center gy-3 pb-3 mb-3 border-bottom",key:o.id},[t("div",N,[_(d,{to:`/course/${o.id}`,class:"text-white text-decoration-none"},{default:u(()=>[t("img",{src:o.imageUrl,style:{width:"10rem",height:"8rem"},class:"img-cover d-none d-md-block",alt:""},null,8,O)]),_:2},1032,["to"])]),t("div",R,[_(d,{to:`/course/${o.id}`,class:"text-decoration-none text-dark fw-bold"},{default:u(()=>[t("h5",F,i(o.title),1)]),_:2},1032,["to"]),t("div",I,[o.courseStatus==="classOpen"?(e(),a("span",U,"已開課")):o.courseStatus==="classFunding"?(e(),a("span",H,"募資中")):k("",!0),o.courseStatus==="classOpen"?(e(),a("h5",j," NT$ "+i(o.price),1)):o.courseStatus==="classFunding"?(e(),a("h5",M," NT$ "+i(o.funding_price),1)):k("",!0)])]),t("div",q,[t("div",z,[t("div",G,[t("button",{onClick:f=>l.delBookmark(o.id),type:"button",class:"btn btn-outline-light me-3"},Q,8,J),t("button",{onClick:f=>l.moveToCart(o.id),type:"button",class:"btn btn-outline-primary"}," 移至購物車 ",8,W)])])])]))),128))]))])}const et=x(S,[["render",X]]);export{et as default};
