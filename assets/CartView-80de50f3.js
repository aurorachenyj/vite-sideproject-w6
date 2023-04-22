import{T as u}from"./Toast-3b91fd9e.js";import{c as h}from"./cartStore-46488f71.js";import{_ as y,m as k,d as x,r as m,o as n,c as a,e as w,a as t,l as p,t as c,k as i,F as b,E as T,J as I,G as f,w as V,v as P,K as D,f as R}from"./index-abb58fd7.js";const{VITE_APP_URL:g,VITE_APP_PATH:C}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"aurora-path",BASE_URL:"/vue-learnFund/",MODE:"production",DEV:!1,PROD:!0},A={data(){return{isLoading:!1,couponCode:"",couponResText:""}},mounted(){this.getCartList(),this.fillInCouponData()},computed:{...k(h,["cartList","showCheck"])},watch:{},methods:{...x(h,["getCartList"]),fillInCouponData(){if(localStorage.getItem("coupon")===null){u.fire({icon:"error",title:"尚未取得優惠券"});return}this.couponCode=localStorage.getItem("coupon");const s={code:this.couponCode};this.$http.post(`${g}/api/${C}/coupon`,{data:s}).then(e=>{this.couponResText=e.data.message,this.cartList.final_total=e.data.data.final_total}).catch(e=>{console.log(e)})},removeCoupon(){this.couponCode=""},delCartItem(s,e){const _=this.showCheck.indexOf(e);this.showCheck.splice(_,1),this.$http.delete(`${g}/api/${C}/cart/${s}`).then(r=>{u.fire({icon:"success",title:r.data.message}),this.getCartList()}).catch(r=>{u.fire({icon:"error",title:r.response.data.message})})}}},E={class:"container"},S={class:"my-5"},N={key:0,class:"fs-6 text-darkblue fw-bold"},B={class:"row g-4"},U={class:"col-md-8"},$={key:0},F={class:"overflow-auto"},O={class:"table"},M=t("thead",null,[t("tr",null,[t("th",{scope:"col"}),t("th",{scope:"col",class:"text-nowrap"},"課程名稱"),t("th",{scope:"col",class:"text-nowrap"},"課程狀態"),t("th",{scope:"col"},"售價"),t("th",{scope:"col",class:"text-end text-nowrap"},"付款金額")])],-1),H={key:0},K=t("td",{colspan:"5",class:"text-center"},[p(" 購物車尚無商品 "),t("br"),t("a",{href:"#/courses",class:"btn btn-outline-primary my-2"}," 探索課程 ")],-1),z=[K],G=["onClick"],J=t("i",{class:"bi bi-trash3"},null,-1),j=[J],q={key:0},Q={key:1},W={class:"text-end"},X={class:"col-md-4"},Y={key:0},Z={class:"bg-light p-3"},tt=t("h5",{class:"text-center border-bottom py-3"},"訂單明細",-1),st={class:"clear-fix"},ot=t("p",{class:"d-inline"},"小計",-1),et={class:"d-inline float-end"},nt={class:"text-primary text-end border-bottom py-3"},at=t("br",null,null,-1),ct={class:"text-end"},lt={class:"input-group"},it=t("span",{class:"input-group-text",id:"discount"},"使用優惠券",-1),rt={key:0,class:"fs-7 text-end text-muted mb-0"},dt={key:1,class:"btn btn-outline-primary w-100 disabled mt-4",type:"button"},ut=t("br",null,null,-1),pt=t("br",null,null,-1),_t=t("br",null,null,-1);function ht(s,e,_,r,l,d){const L=m("LoadingVue"),v=m("RouterLink");return n(),a(b,null,[w(L,{active:l.isLoading,"onUpdate:active":e[0]||(e[0]=o=>l.isLoading=o)},null,8,["active"]),t("div",E,[t("h3",S,[p(" 購物車 "),s.cartList.carts?(n(),a("span",N," 目前有 "+c(s.cartList.carts.length)+" 門課程 ",1)):i("",!0)]),t("div",B,[t("div",U,[s.cartList.carts?(n(),a("div",$,[t("div",F,[t("table",O,[M,t("tbody",null,[s.cartList.carts.length===0?(n(),a("tr",H,z)):i("",!0),(n(!0),a(b,null,T(s.cartList.carts,o=>(n(),a("tr",{key:o.id},[t("td",null,[t("a",{onClick:mt=>d.delCartItem(o.id,o.product_id),class:"link-primary"},j,8,G)]),t("td",null,c(o.product.title),1),o.product.courseStatus==="classFunding"?(n(),a("td",q," 募資中 ")):o.product.courseStatus==="classOpen"?(n(),a("td",Q," 已開課 ")):i("",!0),t("td",null,c(o.product.origin_price),1),t("td",W,c(o.product.price),1)]))),128))])])])])):i("",!0)]),t("div",X,[s.cartList.carts?(n(),a("div",Y,[t("div",Z,[tt,t("div",st,[ot,t("p",et,[t("del",null," NT$ "+c(s.cartList.total),1)])]),t("h4",nt," NT$ "+c(Math.round(s.cartList.final_total)),1),at,t("div",ct,[t("span",{onClick:e[1]||(e[1]=(...o)=>d.fillInCouponData&&d.fillInCouponData(...o)),class:I([{disabled:s.cartList.carts.length===0},"badge bg-secondary btn mb-2"])},"一鍵帶入",2)]),(n(),f(D,null,[t("div",lt,[it,V(t("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>l.couponCode=o),type:"text",class:"form-control",placeholder:"輸入代碼"},null,512),[[P,l.couponCode]])])],1024)),l.couponResText!==""?(n(),a("p",rt,c(l.couponResText),1)):i("",!0),s.cartList.carts.length===0?(n(),a("button",dt," 未選購任何課程 ")):(n(),f(v,{key:2,to:"./cart/order",class:"btn btn-outline-primary w-100 mt-4",type:"button"},{default:R(()=>[p(" 結帳去 ")]),_:1}))])])):i("",!0)])])]),ut,pt,_t],64)}const Ct=y(A,[["render",ht]]);export{Ct as default};
