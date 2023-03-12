import{_ as x,k as w,r as y,o as i,b as o,d as e,F as d,l as p,h as m,s as v,q as g,f,e as u,w as _,t as l,i as b}from"./index-174217fd.js";import"./Toast-10dbfdb2.js";const{VITE_APP_URL:P,VITE_APP_PATH:k}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"aurora-path",BASE_URL:"/vite-sideproject-w6/",MODE:"production",DEV:!1,PROD:!0},D={data(){return{articleListData:{},currentPage:1}},mounted(){this.getArticleList()},watch:{currentPage(){this.getArticleList(this.currentPage)}},methods:{switchTime(c){return new Date(c*1e3).toLocaleDateString()},changePage(c){console.log(c),this.currentPage=c},getArticleList(c=1){w.get(`${P}/api/${k}/articles?page=${c}`).then(s=>{console.log(s),this.articleListData=s.data,this.currentPage=s.data.pagination.current_page}).catch(s=>{console.log(s)})}}},L={class:"full-height mb-5"},V=f(`<div class="bg-light py-5"><div class="container"><div class="row my-3"><div class="col"> 這裡做輪播 <div class="card"><div class="card-body">1222222</div></div></div></div><div class="row"><div class="col-12"><h3 class="my-3 fw-bold">精選文章</h3><div class="row g-4"><div class="col-lg-6"><div class="h-100 position-relative"><div class="ratio ratio-4x3"><img class="img-cover" src="https://images.unsplash.com/photo-1678067573406-7e206fcfe184?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=388&amp;q=80" alt=""></div><div class="position-absolute bottom-0 start-0 end-0 p-2" style="background:linear-gradient(
                        to top,
                        black,
                        rgba(226, 222, 222, 0.1)
                      );"><h4 class="text-white fw-bold mb-0 p-2"> 標題標題標題標題標題標 題標題題標題題標題題題題標題題標題 </h4></div></div></div><div class="col-lg-6"><div class="h-100 d-flex flex-column justify-content-between"><div class="row align-items-center mb-3 g-2"><div class="col-8"><h5>標題標題標題標題標題標題</h5><p class="" style=""> 中文描述 中文描述 中文描述 中文描述 中文描述 中文描述 中文描述 中文描述 中文描述 中文描述 中文描 </p></div><div class="col-4"><div class="ratio ratio-4x3"><img style="" class="img-cover" src="https://images.unsplash.com/photo-1678244660394-fa02a19ac24a?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MXx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" alt=""></div></div></div><div class="row align-items-center mb-3 g-2"><div class="col-8"><div><h5>標題標題標題標題標題標，題標題題標題題標題題2</h5><p> 中文描述 中文描述 中文描述 中文描述 中文描述 中文描述 </p></div></div><div class="col-4"><div class="ratio ratio-4x3"><img style="" class="img-cover" src="https://images.unsplash.com/photo-1678043638715-df1cb9b98ae8?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=870&amp;q=80" alt=""></div></div></div></div></div></div></div></div></div></div>`,1),A={class:"container py-5"},M={class:"row flex-md-row-reverse gy-3 g-4"},H=f('<div class="col-md-3"><div class="sticky-top" style="top:110px;"><h4 class="fw-bold mb-3">主題標籤探索</h4><div class="row g-1"><div class="col-12"><div class="card bg-light border-0" style="background:url(../../../public/img/content-bg.png);"><div class="card-body"><a href="" class="m-1 badge text-decoration-none rounded-pill fs-7 hover-bg-primary">#123</a><a href="" class="m-1 badge hover-bg-primary text-decoration-none rounded-pill fs-7">#生活</a><a href="" class="m-1 badge hover-bg-primary text-decoration-none rounded-pill fs-7">#攝影</a><a href="" class="m-1 badge hover-bg-primary text-decoration-none rounded-pill fs-7">#投資理財</a><a href="" class="m-1 badge hover-bg-primary text-decoration-none rounded-pill fs-7">#投資</a><a href="" class="m-1 badge hover-bg-primary text-decoration-none rounded-pill fs-7">#理財</a></div></div></div></div></div></div>',1),B={key:0,class:"col-md-9"},C=e("h4",{class:"fw-bold mb-3"},"最新文章",-1),j={class:"col-4"},E={class:"ratio ratio-4x3"},T=["src"],G={class:"col-8"},N={class:"d-none d-md-block text-muted"},R={class:"me-4"},q=e("i",{class:"bi bi-person-vcard me-2"},null,-1),I=e("i",{class:"bi bi-calendar2-week me-2"},null,-1),S={key:0,"aria-label":"Page navigation "},U={class:"pagination justify-content-center"},W=e("a",{class:"page-link",href:"#","aria-label":"Previous"},[e("span",{"aria-hidden":"true"},"«")],-1),Y=[W],Z=["onClick"],F={class:"page-link",href:"#"},O=e("a",{class:"page-link",href:"#","aria-label":"Next"},[e("span",{"aria-hidden":"true"},"»")],-1),z=[O];function J(c,s,X,K,a,r){const h=y("RouterLink");return i(),o("div",L,[V,e("div",A,[e("div",M,[H,a.articleListData.articles?(i(),o("div",B,[C,(i(!0),o(d,null,p(a.articleListData.articles,t=>(i(),o("div",{class:"row align-items-center g-3 border-bottom py-3",key:t.id},[e("div",j,[u(h,{to:`/article/${t.id}`,class:"text-decoration-none"},{default:_(()=>[e("div",E,[e("img",{style:{},class:"img-cover",src:t.image,alt:""},null,8,T)])]),_:2},1032,["to"])]),e("div",G,[u(h,{to:`/article/${t.id}`,class:"text-decoration-none text-dark"},{default:_(()=>[(i(!0),o(d,null,p(t.tag,n=>(i(),o("span",{key:n+"yoyo",class:"badge bg-light text-muted me-2 mb-2 border-bottom"},l(n),1))),128)),e("h5",null,l(t.title),1),e("p",N,l(t.description),1),e("span",R,[q,b(l(t.author),1)]),e("span",null,[I,b(" "+l(r.switchTime(t.create_at)),1)])]),_:2},1032,["to"])])]))),128))])):m("",!0)])]),a.articleListData.pagination?(i(),o("nav",S,[e("ul",U,[e("li",{class:v(["page-item",{disabled:!a.articleListData.pagination.has_pre}]),onClick:s[0]||(s[0]=g(t=>r.changePage(a.currentPage-1),["prevent"]))},Y,2),(i(!0),o(d,null,p(a.articleListData.pagination.total_pages,t=>(i(),o("li",{class:v(["page-item",{active:t===a.currentPage}]),key:t+"jojo",onClick:g(n=>r.changePage(t),["prevent"])},[e("a",F,l(t),1)],10,Z))),128)),e("li",{class:v(["page-item",{disabled:!a.articleListData.pagination.has_next}]),onClick:s[1]||(s[1]=g(t=>r.changePage(a.currentPage+1),["prevent"]))},z,2)])])):m("",!0)])}const ee=x(D,[["render",J]]);export{ee as default};
