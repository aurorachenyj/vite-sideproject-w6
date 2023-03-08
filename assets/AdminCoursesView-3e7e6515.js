import{M as I}from"./modal-4c4e2f2f.js";import{T as m}from"./Toast-187c6a56.js";import{C as T}from"./ckeditor-6eaf3957.js";import{_ as M,r as v,o as d,b as r,e as g,d as e,h,i as D,u as a,x as u,q as P,F as C,l as V,v as w,t as p,z as A,y as U}from"./index-0dad1233.js";import{D as F}from"./DelModal-30543138.js";import{h as S}from"./zh-tw-a6f00c05.js";import"./base-component-78cd7a60.js";const{VITE_APP_URL:k,VITE_APP_PATH:y}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"aurora-path",BASE_URL:"/vite-sideproject-w6/",MODE:"production",DEV:!1,PROD:!0},O={data(){return{modal:"",isLoadong:!1,tempProduct:{imagesUrl:[]},editor:T,uploadPicData:{},uploadImgs:{}}},props:{checkedCourse:{},checkedStatus:{}},mounted(){this.modal=new I(this.$refs.modal),this.uploadPicData=document.querySelector("#picFile"),this.uploadImgs=document.querySelector("#picsFile")},watch:{checkedCourse(){this.tempProduct=this.checkedCourse}},methods:{switchTimeStamp(i){if(typeof i!="number")return;console.log(i);const t=new Date(i),c=t.getFullYear(),_=("0"+(t.getMonth()+1)).slice(-2),s=("0"+t.getDate()).slice(-2),n=("0"+t.getHours()).slice(-2),f=("0"+t.getMinutes()).slice(-2),b=`${c}-${_}-${s}T${n}:${f}`;return this.tempProduct.fundingEndDate=b},createPic(){this.tempProduct.imagesUrl=[],this.tempProduct.imagesUrl.push("")},uploadPic(){this.isLoadong=!0;const i=this.uploadPicData.files[0],t=new FormData;t.append("file-to-upload",i),this.$http.post(` ${k}/api/${y}/admin/upload`,t).then(c=>{this.tempProduct.imageUrl=c.data.imageUrl,this.isLoadong=!1,c.data.success===!0&&m.fire({icon:"success",title:"成功上傳圖片"})}).catch(c=>{this.isLoadong=!1,m.fire({icon:"error",title:c.response.data.message})})},uploadSubPic(){this.isLoadong=!0;const i=this.uploadImgs.files[0],t=new FormData;t.append("file-to-upload",i),this.$http.post(` ${k}/api/${y}/admin/upload`,t).then(c=>{this.tempProduct.imagesUrl.push(c.data.imageUrl),this.isLoadong=!1,c.data.success===!0&&m.fire({icon:"success",title:"成功上傳圖片"})}).catch(c=>{this.isLoadong=!1,m.fire({icon:"error",title:c.response.data.message})})},postCourse(){if(this.tempProduct.fundingEndDate=Date.parse(this.tempProduct.fundingEndDate),!this.tempProduct.courseStatus){m.fire({icon:"error",title:"課程狀態必填"});return}if(this.tempProduct.courseStatus==="classFunding"&&(!this.tempProduct.fundingEndDate||!this.tempProduct.funding_price||!this.tempProduct.funding_target)){m.fire({icon:"error",title:"募資到期日、達標目標和募資價格必填"});return}let i="",t="";this.checkedStatus==="new"?(i=`${k}/api/${y}/admin/product`,t="post"):this.checkedStatus==="edit"&&(i=`${k}/api/${y}/admin/product/${this.tempProduct.id}`,t="put");const c=this.tempProduct;this.$http[t](i,{data:c}).then(_=>{m.fire({icon:"success",title:_.data.message}),this.$emit("randerCourseList"),this.modal.hide(),this.tempProduct={}}).catch(_=>{m.fire({icon:"error",title:_.response.data.message})})},hideModal(){this.modal.hide()},showModal(){this.modal.show()}}},R={class:"modal modal-xl modal-dialog-scrollable fade",ref:"modal",tabindex:"-1","aria-hidden":"true"},N={class:"modal-dialog"},H={class:"modal-content"},B={class:"modal-header"},q={class:"modal-title"},j={key:0},z={key:1},Y=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),G={class:"modal-body"},J={class:"row"},K={class:"col-sm-4"},Q={class:"mb-2"},W={class:"mb-3"},X=e("label",{for:"imageUrl",class:"form-label"},"輸入圖片網址或上傳圖檔",-1),Z=["src"],$=e("h3",null,"多圖新增",-1),ee={key:0},te=["src"],se={key:0},oe={class:"col-sm-8"},le={class:"mb-3"},ie=e("label",{for:"title",class:"form-label"},"標題",-1),ne={class:"row"},de={class:"mb-3 col-md-6"},re=e("label",{for:"category",class:"form-label"},"分類",-1),ce={class:"mb-3 col-md-6"},ae=e("label",{for:"unit",class:"form-label"},"課程總時長",-1),ue={class:"row"},me={class:"mb-3 col-md-6"},pe=e("label",{for:"classSection",class:"form-label"},"章節數 ",-1),he={class:"mb-3 col-md-6"},_e=e("label",{for:"classUnit",class:"form-label"},"單元數",-1),be={class:"row"},ge={class:"mb-3 col-md-6"},fe=e("label",{for:"origin_price",class:"form-label"},"原價",-1),Pe={class:"mb-3 col-md-6"},ve=e("label",{for:"price",class:"form-label"},"售價",-1),ke=e("hr",null,null,-1),ye={class:"bg-light p-3"},Ce={class:"row"},Ue={class:"col-md-8"},De={class:"form-check mb-2"},Ve=e("label",{class:"form-check-label",for:"classOpen"}," 已開課 ",-1),Le={class:"form-check mb-2"},we=e("label",{class:"form-check-label",for:"classFunding"}," 募資中 (以下三欄位募資課程必填 ) ",-1),Se={class:"row"},xe={class:"mb-3 col-md-3"},Ee=e("label",{for:"funding_price",class:"form-label"},"募資價*",-1),Me=["disabled"],Ie={class:"mb-3 col-md-3"},Te=e("label",{for:"funding_target",class:"form-label"},"達標金額*",-1),Ae=["disabled"],Fe={class:"mb-3 col-md-6"},Oe=e("label",{for:"fundingEndDate",class:"form-label"},"募資結束日*",-1),Re=["disabled"],Ne=e("hr",null,null,-1),He={class:"mb-3"},Be=e("label",{for:"description",class:"form-label"},"課程簡述(短)",-1),qe={class:"mb-3"},je=e("label",{for:"content",class:"form-label"},"課程章節介紹(長)",-1),ze={class:"mb-3"},Ye=e("label",{for:"teacherInfo",class:"form-label"},"講師介紹",-1),Ge={class:"mb-3"},Je=e("label",{for:"skillTree",class:"form-label"},"技能收穫",-1),Ke={class:"mb-3"},Qe={class:"form-check"},We=e("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),Xe={class:"modal-footer"},Ze=e("button",{type:"button",class:"btn btn-outline-dark","data-bs-dismiss":"modal"}," 取消 ",-1);function $e(i,t,c,_,s,n){const f=v("LoadingVue"),b=v("ckeditor");return d(),r("div",R,[g(f,{active:i.isLoading,"onUpdate:active":t[0]||(t[0]=o=>i.isLoading=o)},null,8,["active"]),e("div",N,[e("div",H,[e("div",B,[e("h5",q,[c.checkedStatus==="new"?(d(),r("span",j," 新增 ")):c.checkedStatus==="edit"?(d(),r("span",z," 編輯 ")):h("",!0),D(" 課程 ")]),Y]),e("div",G,[e("div",J,[e("div",K,[e("div",Q,[e("div",W,[X,a(e("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>s.tempProduct.imageUrl=o),type:"text",class:"form-control",placeholder:"請輸入圖片連結"},null,512),[[u,s.tempProduct.imageUrl]]),e("input",{type:"file",id:"picFile",style:{display:"none"},ref:"fileInput",onChange:t[2]||(t[2]=o=>n.uploadPic("main"))},null,544),e("button",{onClick:t[3]||(t[3]=o=>this.$refs.fileInput.click()),class:"btn btn-outline-primary mt-2 btn-sm"}," 上傳圖片 ")]),e("img",{class:"img-fluid",src:s.tempProduct.imageUrl,alt:""},null,8,Z)]),$,e("div",null,[e("input",{type:"file",style:{display:"none"},ref:"imgsFileInput",id:"picsFile",onChange:t[4]||(t[4]=(...o)=>n.uploadSubPic&&n.uploadSubPic(...o))},null,544),e("button",{onClick:t[5]||(t[5]=o=>this.$refs.imgsFileInput.click()),class:P(["btn btn-outline-primary btn-sm mb-2",{disabled:!this.tempProduct.imagesUrl}])}," 上傳圖片 ",2)]),e("div",null,[Array.isArray(s.tempProduct.imagesUrl)?(d(),r("div",ee,[(d(!0),r(C,null,V(s.tempProduct.imagesUrl,(o,l)=>(d(),r("img",{key:l+l,class:"img-fluid",src:s.tempProduct.imagesUrl[l],style:{margin:"0.5rem 0"}},null,8,te))),128)),!s.tempProduct.imagesUrl.length||s.tempProduct.imagesUrl[s.tempProduct.imagesUrl.length-1]?(d(),r("button",{key:0,onClick:t[6]||(t[6]=o=>s.tempProduct.imagesUrl.push("")),class:"btn btn-outline-dark btn-sm d-block w-100"}," 新增圖片 ")):h("",!0),s.tempProduct.imagesUrl.length>0?(d(),r("button",{key:1,onClick:t[7]||(t[7]=o=>s.tempProduct.imagesUrl.pop()),class:"btn btn-outline-danger btn-sm d-block w-100",style:{margin:"0.5rem 0"}}," 刪除圖片 ")):h("",!0)])):h("",!0)]),s.tempProduct.imagesUrl===void 0?(d(),r("div",se,[e("button",{class:"btn btn-outline-dark btn-sm d-block w-100",type:"button",onClick:t[8]||(t[8]=(...o)=>n.createPic&&n.createPic(...o))}," 新增圖片 + ")])):h("",!0)]),e("div",oe,[e("div",le,[ie,a(e("input",{"onUpdate:modelValue":t[9]||(t[9]=o=>s.tempProduct.title=o),id:"title",type:"text",class:"form-control",placeholder:"請輸入標題"},null,512),[[u,s.tempProduct.title]])]),e("div",ne,[e("div",de,[re,a(e("input",{"onUpdate:modelValue":t[10]||(t[10]=o=>s.tempProduct.category=o),id:"category",type:"text",class:"form-control",placeholder:"請輸入分類"},null,512),[[u,s.tempProduct.category]])]),e("div",ce,[ae,a(e("input",{"onUpdate:modelValue":t[11]||(t[11]=o=>s.tempProduct.unit=o),id:"unit",type:"text",class:"form-control",placeholder:"請輸入小時數"},null,512),[[u,s.tempProduct.unit]])])]),e("div",ue,[e("div",me,[pe,a(e("input",{"onUpdate:modelValue":t[12]||(t[12]=o=>s.tempProduct.classSectionNum=o),id:"classSection",type:"number",class:"form-control",placeholder:"請輸入章節數量"},null,512),[[u,s.tempProduct.classSectionNum]])]),e("div",he,[_e,a(e("input",{"onUpdate:modelValue":t[13]||(t[13]=o=>s.tempProduct.classUnitNum=o),id:"classUnit",type:"number",class:"form-control",placeholder:"請輸入單元數量"},null,512),[[u,s.tempProduct.classUnitNum]])])]),e("div",be,[e("div",ge,[fe,a(e("input",{"onUpdate:modelValue":t[14]||(t[14]=o=>s.tempProduct.origin_price=o),id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價"},null,512),[[u,s.tempProduct.origin_price,void 0,{number:!0}]])]),e("div",Pe,[ve,a(e("input",{"onUpdate:modelValue":t[15]||(t[15]=o=>s.tempProduct.price=o),id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價"},null,512),[[u,s.tempProduct.price,void 0,{number:!0}]])])]),ke,e("div",ye,[e("div",Ce,[e("div",Ue,[e("div",De,[a(e("input",{"onUpdate:modelValue":t[16]||(t[16]=o=>s.tempProduct.courseStatus=o),value:"classOpen",class:"form-check-input",type:"radio",name:"courseStatus",id:"classOpen"},null,512),[[w,s.tempProduct.courseStatus]]),Ve]),e("div",Le,[a(e("input",{"onUpdate:modelValue":t[17]||(t[17]=o=>s.tempProduct.courseStatus=o),value:"classFunding",class:"form-check-input",type:"radio",name:"courseStatus",id:"classFunding"},null,512),[[w,s.tempProduct.courseStatus]]),we])])]),e("div",Se,[e("div",xe,[Ee,a(e("input",{disabled:s.tempProduct.courseStatus==="classOpen","onUpdate:modelValue":t[18]||(t[18]=o=>s.tempProduct.funding_price=o),id:"funding_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入募資優惠價"},null,8,Me),[[u,s.tempProduct.funding_price,void 0,{number:!0}]])]),e("div",Ie,[Te,a(e("input",{disabled:s.tempProduct.courseStatus==="classOpen","onUpdate:modelValue":t[19]||(t[19]=o=>s.tempProduct.funding_target=o),id:"funding_target",type:"number",min:"0",class:"form-control",placeholder:"請輸入募資達標金額"},null,8,Ae),[[u,s.tempProduct.funding_target,void 0,{number:!0}]])]),e("div",Fe,[Oe,D(" "+p(n.switchTimeStamp(s.tempProduct.fundingEndDate))+" ",1),a(e("input",{disabled:s.tempProduct.courseStatus==="classOpen","onUpdate:modelValue":t[20]||(t[20]=o=>s.tempProduct.fundingEndDate=o),id:"fundingEndDate",type:"datetime-local",class:"form-control"},null,8,Re),[[u,s.tempProduct.fundingEndDate]])])])]),Ne,e("div",He,[Be,a(e("textarea",{"onUpdate:modelValue":t[21]||(t[21]=o=>s.tempProduct.description=o),id:"description",type:"text",class:"form-control",placeholder:"請輸入課程簡述"},`
                `,512),[[u,s.tempProduct.description]])]),e("div",qe,[je,g(b,{editor:s.editor,modelValue:s.tempProduct.content,"onUpdate:modelValue":t[22]||(t[22]=o=>s.tempProduct.content=o)},null,8,["editor","modelValue"])]),e("div",ze,[Ye,g(b,{editor:s.editor,modelValue:s.tempProduct.teacherInfo,"onUpdate:modelValue":t[23]||(t[23]=o=>s.tempProduct.teacherInfo=o)},null,8,["editor","modelValue"])]),e("div",Ge,[Je,g(b,{editor:s.editor,modelValue:s.tempProduct.skillTree,"onUpdate:modelValue":t[24]||(t[24]=o=>s.tempProduct.skillTree=o)},null,8,["editor","modelValue"])]),e("div",Ke,[e("div",Qe,[a(e("input",{"onUpdate:modelValue":t[25]||(t[25]=o=>s.tempProduct.is_enabled=o),id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0},null,512),[[A,s.tempProduct.is_enabled]]),We])])])])]),e("div",Xe,[Ze,e("button",{onClick:t[26]||(t[26]=(...o)=>n.postCourse&&n.postCourse(...o)),type:"button",class:"btn btn-danger"}," 送出 ")])])])],512)}const et=M(O,[["render",$e]]),{VITE_APP_URL:x,VITE_APP_PATH:E}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"aurora-path",BASE_URL:"/vite-sideproject-w6/",MODE:"production",DEV:!1,PROD:!0},tt={data(){return{isLoading:!1,allCourseList:{},currentPage:1,delClassTitle:"",delClassId:"",checkedCourse:{},checkedStatus:""}},components:{CourseModal:et,DelModal:F},mounted(){this.getCoursesList()},created(){S.locale("zh-tw")},beforeUnmount(){},methods:{countLeftDay(i){return Date.parse(new Date)>i?"已結束募資":(i=new Date(i).toISOString(),S(i).fromNow())},getCoursesList(i=1){this.isLoading=!0,this.$http.get(`${x}/api/${E}/admin/products?page=${i}`).then(t=>{this.isLoading=!1,this.allCourseList=t.data,t.data.success===!0&&m.fire({icon:"success",title:"成功取得產品資訊"})}).catch(t=>{this.isLoading=!1,m.fire({icon:"error",title:t.response.data.message})})},changePage(i){this.currentPage=i,this.getCoursesList(this.currentPage)},openModal(i,t){t==="edit"?this.checkedCourse=i:t==="new"&&(this.checkedCourse={}),this.checkedStatus=t,this.$refs.courseModal.showModal()},openDelModal(i,t){this.delClassTitle=i,this.delClassId=t,this.$refs.deleteModal.showModal()},delCourse(){const i=this.delClassId;this.$http.delete(`${x}/api/${E}/admin/product/${i}`).then(t=>{m.fire({icon:"success",title:t.data.message}),this.getCoursesList(this.currentPage)}).catch(t=>{m.fire({icon:"error",title:t.response.data.message})})}}},st=e("h3",{class:"text-center mt-5"},"課程管理",-1),ot={class:"text-end"},lt={class:"card mt-4"},it={class:"card-body p-0"},nt={class:"table-responsive text-nowrap"},dt={class:"table table-hover"},rt=e("thead",{class:"border-bottom border-3 bg-light"},[e("tr",{class:"align-middle"},[e("th",{scope:"col ",class:"ps-3"},"分類"),e("th",{scope:"col",class:"py-3"},"課程名稱"),e("th",{scope:"col"},"課程狀態"),e("th",{scope:"col",class:"text-end"},"原價"),e("th",{scope:"col",class:"text-end"},"售價"),e("th",{scope:"col",class:"text-end"},"是否上線"),e("th",{scope:"col",class:"text-end pe-3"},"編輯")])],-1),ct={class:"py-3 ps-3"},at={class:""},ut={key:0},mt={class:"text-success"},pt={key:0,class:"mb-0"},ht=e("br",null,null,-1),_t={key:1,class:"mb-0"},bt={key:1},gt={class:"text-end"},ft={class:"text-end"},Pt={class:"text-end"},vt={class:"text-end pe-3 text-danger"},kt={class:"btn-group",role:"group"},yt=["onClick"],Ct=["onClick"],Ut={class:"card-footer bg-transparent border-0 pb-0"},Dt={"aria-label":"Page navigation mb-0 "},Vt={key:0,class:"pagination justify-content-center"},Lt=e("a",{class:"page-link",href:"","aria-label":"Previous"},[e("span",{"aria-hidden":"true"},"«")],-1),wt=[Lt],St=["onClick"],xt={class:"page-link",href:"#"},Et=e("a",{class:"page-link",href:"#","aria-label":"Next"},[e("span",{"aria-hidden":"true"},"»")],-1),Mt=[Et];function It(i,t,c,_,s,n){const f=v("LoadingVue"),b=v("CourseModal"),o=v("DelModal");return d(),r(C,null,[st,e("div",ot,[e("button",{onClick:t[0]||(t[0]=l=>n.openModal(0,"new")),class:"btn btn-outline-secondary"}," 新增課程 ")]),g(f,{active:s.isLoading,"onUpdate:active":t[1]||(t[1]=l=>s.isLoading=l)},null,8,["active"]),e("div",lt,[e("div",it,[e("div",nt,[e("table",dt,[rt,e("tbody",null,[(d(!0),r(C,null,V(s.allCourseList.products,l=>(d(),r("tr",{class:"align-middle",key:l.id},[e("td",ct,p(l.category),1),e("td",at,p(l.title),1),l.courseStatus==="classFunding"?(d(),r("td",ut,[D(" 募資中 "),e("span",mt,[typeof l.fundingEndDate!="number"?(d(),r("p",pt," 結束日 "+p(l.fundingEndDate),1)):h("",!0),ht,typeof l.fundingEndDate=="number"?(d(),r("p",_t,p(n.countLeftDay(l.fundingEndDate)),1)):h("",!0)])])):l.courseStatus==="classOpen"?(d(),r("td",bt,"已開課")):h("",!0),e("td",gt,p(l.origin_price),1),e("td",ft,p(l.price),1),e("td",Pt,[e("div",{class:P(["badge rounded-pill",[{"bg-warning":l.is_enabled===1},{"bg-dark":l.is_enabled===0||!l.is_enabled}]])},p(l.is_enabled?"上線中":"未上"),3)]),e("td",vt,[e("div",kt,[e("button",{onClick:L=>n.openModal(l,"edit"),type:"button",class:"btn btn-outline-dark btn-sm"}," 編輯 ",8,yt),e("button",{onClick:L=>n.openDelModal(l.title,l.id),type:"button",class:"btn btn-outline-primary btn-sm"}," 刪除 ",8,Ct)])])]))),128))])])])]),e("div",Ut,[e("nav",Dt,[s.allCourseList.pagination?(d(),r("ul",Vt,[e("li",{class:P(["page-item",{disabled:!s.allCourseList.pagination.has_pre}]),onClick:t[2]||(t[2]=U(l=>n.changePage(s.currentPage-1),["prevent"]))},wt,2),(d(!0),r(C,null,V(s.allCourseList.pagination.total_pages,l=>(d(),r("li",{class:P(["page-item",{active:l===s.currentPage}]),key:l+"hlllq",onClick:U(L=>n.changePage(l),["prevent"])},[e("a",xt,p(l),1)],10,St))),128)),e("li",{class:P(["page-item",{disabled:!s.allCourseList.pagination.has_next}]),onClick:t[3]||(t[3]=U(l=>n.changePage(s.currentPage+1),["prevent"]))},Mt,2)])):h("",!0)])])]),g(b,{ref:"courseModal","checked-course":s.checkedCourse,"checked-status":s.checkedStatus,onRanderCourseList:t[4]||(t[4]=l=>n.getCoursesList(s.currentPage))},null,8,["checked-course","checked-status"]),g(o,{ref:"deleteModal","del-class-title":s.delClassTitle,"del-class-id":s.delClassId,onDelItem:n.delCourse},null,8,["del-class-title","del-class-id","onDelItem"])],64)}const Bt=M(tt,[["render",It]]);export{Bt as default};
