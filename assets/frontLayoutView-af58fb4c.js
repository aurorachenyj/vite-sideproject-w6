import{c as r}from"./cartStore-4b57ef85.js";import{_,m as u,a as m,r as i,o as c,c as d,b as s,d as t,w as a,F as p,e as o,t as f,f as g}from"./index-6b505942.js";const h={data(){return{isLoading:!1}},computed:{...u(r,["cartList"])},methods:{...m(r,["getCartList"])},mounted(){this.getCartList()}},k={class:"container"},b={class:"navbar navbar-expand-lg navbar-light bg-light justify-content-evenly"},L={class:"d-inline-block position-relative"},v=s("i",{class:"bi bi-cart3 fs-3 text-dark"},null,-1),V={key:0,class:"position-absolute top-20 start-80 translate-middle badge rounded-pill bg-danger"};function x(n,w,y,C,N,R){const e=i("RouterLink"),l=i("RouterView");return c(),d(p,null,[s("header",null,[s("div",k,[s("nav",b,[t(e,{to:"/"},{default:a(()=>[o("Home")]),_:1}),t(e,{to:"/courses"},{default:a(()=>[o("課程")]),_:1}),t(e,{to:"/cart"},{default:a(()=>[o("購物車 "),s("div",L,[v,n.cartList.carts?(c(),d("span",V,f(n.cartList.carts.length),1)):g("",!0)])]),_:1}),t(e,{to:"/contents"},{default:a(()=>[o("文章")]),_:1}),t(e,{to:"/bookmark"},{default:a(()=>[o("收藏")]),_:1}),t(e,{class:"link-dark",to:"/adminLogin"},{default:a(()=>[o("登入後台")]),_:1}),t(e,{class:"link-dark",to:"/admin/index"},{default:a(()=>[o("後台首頁")]),_:1})])])]),t(l)],64)}const S=_(h,[["render",x]]);export{S as default};
