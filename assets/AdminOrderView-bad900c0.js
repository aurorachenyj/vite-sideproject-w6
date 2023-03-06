import{T as b}from"./Toast-bf24d431.js";import{D as M}from"./DelModal-1b137d8a.js";import{M as y}from"./modal-68da099e.js";import{_ as k,o as i,b as n,d as t,t as d,F as _,l as g,h as D,u as w,r as O,e as f,q as v,x as L}from"./index-89a04935.js";import"./orderStore-9d4e9db7.js";import"./base-component-6fabfced.js";const x={data(){return{modal:""}},props:["checkOrderData"],mounted(){this.modal=new y(this.$refs.orderModal)},watch:{},methods:{hideModal(){this.modal.hide()},showModal(){this.modal.show()}}},C={class:"modal fade",ref:"orderModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},A={class:"modal-dialog modal-lg"},E={class:"modal-content"},V=t("div",{class:"modal-header"},[t("h5",{class:"modal-title",id:"exampleModalLabel"},"訂單詳情"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),I={key:0,class:"modal-body"},T={class:"row"},N={class:"col"},R={class:"ms-3"},S=t("h4",null,"用戶資料",-1),B={class:"table"},U={class:"tbody"},q=t("th",{scope:"row"},"姓名",-1),F=t("th",{scope:"row"},"電話",-1),H=t("th",{scope:"row"},"email",-1),z=t("th",{scope:"row"},"付款方式",-1),j={class:"col"},G=t("h4",null,"訂單資料",-1),J={class:"table"},K={class:"tbody"},Q=t("th",{scope:"row"},"訂單編號",-1),W=t("th",{scope:"row"},"下單時間",-1),X=t("th",{scope:"row"},"總金額",-1),Y=t("th",{scope:"row"},"訂購品項",-1),Z=t("div",{class:"modal-footer"},[t("button",{type:"button",class:"btn btn-primary text-white","data-bs-dismiss":"modal"}," 關閉 ")],-1);function tt(l,s,e,u,r,a){return i(),n("div",C,[t("div",A,[t("div",E,[V,e.checkOrderData.order?(i(),n("div",I,[t("div",T,[t("div",N,[t("div",R,[S,t("table",B,[t("div",U,[t("tr",null,[q,t("td",null,d(e.checkOrderData.order.user.name),1)]),t("tr",null,[F,t("td",null,d(e.checkOrderData.order.user.tel),1)]),t("tr",null,[H,t("td",null,d(e.checkOrderData.order.user.email),1)]),t("tr",null,[z,t("td",null,d(e.checkOrderData.order.user.payment),1)])])])])]),t("div",j,[G,t("table",J,[t("div",K,[t("tr",null,[Q,t("td",null,d(e.checkOrderData.order.id),1)]),t("tr",null,[W,t("td",null,d(new Date(e.checkOrderData.order.create_at*1e3).toLocaleDateString()),1)]),t("tr",null,[X,t("td",null,d(e.checkOrderData.order.total),1)]),t("tr",null,[Y,t("td",null,[(i(!0),n(_,null,g(e.checkOrderData.order.products,c=>(i(),n("p",{key:c.id,class:"mb-0"},d(c.product.title),1))),128))])])])])])])])):D("",!0),Z])])],512)}const et=k(x,[["render",tt]]),{VITE_APP_URL:p,VITE_APP_PATH:m}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"aurora-path",BASE_URL:"/vite-sideproject-w6/",MODE:"production",DEV:!1,PROD:!0},st={data(){return{delId:"",checkOrderData:{},allOrderList:[],isLoading:!1,currentPage:1,totalOrderList:[],totalPage:1,courseStudentNumData:{}}},components:{DelModal:M,OrderDetailModal:et},mounted(){this.isLoading=!0,this.getOrderList()},watch:{totalPage(){this.getTotalOrderList()}},methods:{calcClassmate(){const s=[...w(this.totalOrderList)],e=[];s.forEach(a=>{const c=Object.values(a.products);e.push(...c)});const r=e.map(a=>a.product_id).reduce((a,c)=>(a[c]?a[c]++:a[c]=1,a),{});this.courseStudentNumData=r},getTotalOrderList(){const l=[];for(let e=1;e<=this.totalPage;e++)l.push(e);const s=l.map(e=>this.$http.get(`${p}/api/${m}/admin/orders?page=${e}`));Promise.all(s).then(e=>{console.log(e),e.forEach(u=>{this.totalOrderList.push(...u.data.orders)}),console.log(this.totalOrderList),this.calcClassmate()}).catch(e=>{console.log(e)}),console.log(this.totalOrderList)},getOrderList(l=1){this.isLoading=!0,this.$http.get(`${p}/api/${m}/admin/orders?page=${l}`).then(s=>{this.isLoading=!1,b.fire({icon:"success",title:"成功取得資料"}),this.allOrderList=s.data,this.totalPage=s.data.pagination.total_pages,console.log(this.totalPage),console.log(this.allOrderList)}).catch(s=>{this.isLoading=!1,b.fire({icon:"error",title:s.response.data.message})})},changePage(l){this.currentPage=l,this.getOrderList(this.currentPage)},openDelModal(l){this.delId=l,this.$refs.deleteModal.showModal()},openOrderModal(l){this.isLoading=!0,this.$http.get(`${p}/api/${m}/order/${l}`).then(s=>{this.checkOrderData=s.data,this.isLoading=!1}).catch(s=>{this.isLoading=!1}),this.$refs.orderDetailModal.showModal()},delOrder(){const l=this.delId;this.$http.delete(`${p}/api/${m}/admin/order/${l}`).then(s=>{this.getOrderList(this.currentPage),this.$refs.deleteModal.hideModal()}).catch(s=>{b.fire({icon:"error",title:s.response.data.message})})}}},ot=t("h3",{class:"text-center mt-5"},"訂單管理",-1),at={class:"card mt-4"},lt={class:"card-body p-0"},rt={class:"table-responsive text-nowrap"},dt={class:"table table-hover"},it=t("thead",{class:"border-bottom border-3 bg-light"},[t("tr",{class:"align-middle"},[t("th",{scope:"col ",class:"ps-3"}),t("th",{scope:"col",class:"py-3"},"訂單編號"),t("th",{scope:"col"},"Email"),t("th",{scope:"col"},"用戶名"),t("th",{scope:"col"},"購買品項"),t("th",{scope:"col",class:"text-end"},"付款方式"),t("th",{scope:"col",class:"text-end"},"金額"),t("th",{scope:"col",class:"text-end pe-3"},"訂單編輯")])],-1),nt=t("td",{class:"py-3 ps-3"},[t("input",{class:"form-check-input",type:"checkbox",name:"",id:""})],-1),ct={class:""},ht={class:"ps-2 px-0 mb-0"},_t={class:"text-end"},ut={class:"text-end"},pt={class:"text-end pe-3 text-danger"},mt={class:"btn-group",role:"group"},gt=["onClick"],bt=["onClick"],Ot={key:0,class:"card-footer bg-transparent border-0 pb-0"},ft={"aria-label":"Page navigation mb-0 "},vt={class:"pagination justify-content-center"},Lt=t("a",{class:"page-link",href:"","aria-label":"Previous"},[t("span",{"aria-hidden":"true"},"«")],-1),kt=[Lt],Dt=["onClick"],$t={class:"page-link",href:"#"},Pt=t("a",{class:"page-link",href:"#","aria-label":"Next"},[t("span",{"aria-hidden":"true"},"»")],-1),Mt=[Pt];function yt(l,s,e,u,r,a){const c=O("LoadingVue"),$=O("DelModal"),P=O("OrderDetailModal");return i(),n(_,null,[ot,f(c,{active:r.isLoading,"onUpdate:active":s[0]||(s[0]=o=>r.isLoading=o)},null,8,["active"]),t("div",at,[t("div",lt,[t("div",rt,[t("table",dt,[it,t("tbody",null,[(i(!0),n(_,null,g(r.allOrderList.orders,o=>(i(),n("tr",{class:"align-middle",key:o.id},[nt,t("td",ct,d(o.id),1),t("td",null,d(o.user.email),1),t("td",null,d(o.user.name),1),t("td",null,[t("ol",ht,[(i(!0),n(_,null,g(o.products,h=>(i(),n("li",{key:h.id},d(h.product.title),1))),128))])]),t("td",_t,d(o.user.payment),1),t("td",ut,d(o.total),1),t("td",pt,[t("div",mt,[t("button",{onClick:h=>a.openOrderModal(o.id),type:"button",class:"btn btn-outline-dark btn-sm"}," 檢視 ",8,gt),t("button",{onClick:h=>a.openDelModal(o.id),type:"button",class:"btn btn-outline-primary btn-sm"}," 刪除 ",8,bt)])])]))),128))])])])]),r.allOrderList.pagination?(i(),n("div",Ot,[t("nav",ft,[t("ul",vt,[t("li",{class:v(["page-item",{disabled:!r.allOrderList.pagination.has_pre}]),onClick:s[1]||(s[1]=L(o=>a.changePage(r.currentPage-1),["prevent"]))},kt,2),(i(!0),n(_,null,g(r.allOrderList.pagination.total_pages,o=>(i(),n("li",{class:v(["page-item",{active:o===r.currentPage}]),key:o+"hlllq",onClick:L(h=>a.changePage(o),["prevent"])},[t("a",$t,d(o),1)],10,Dt))),128)),t("li",{class:v(["page-item",{disabled:!r.allOrderList.pagination.has_next}]),onClick:s[2]||(s[2]=L(o=>a.changePage(r.currentPage+1),["prevent"]))},Mt,2)])])])):D("",!0)]),f($,{onDelItem:a.delOrder,"del-id":r.delId,ref:"deleteModal"},null,8,["onDelItem","del-id"]),f(P,{"check-order-data":r.checkOrderData,ref:"orderDetailModal"},null,8,["check-order-data"])],64)}const It=k(st,[["render",yt]]);export{It as default};
