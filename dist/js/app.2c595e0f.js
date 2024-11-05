(function(){"use strict";var e={5526:function(e,t,n){var o=n(5130),r=n(6768);const s={id:"app",class:"text-center bg-slate-800"};function a(e,t,n,o,a,i){const l=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",s,[(0,r.bF)(l)])}var i={name:"App"},l=n(1241);const u=(0,l.A)(i,[["render",a]]);var d=u,c=n(1387);const f={class:"flex flex-col items-center justify-center min-h-screen bg-gray-300"},p={class:"w-full sm:w-1/2 lg:w-1/4 max-w-xs rounded-lg animate__animated animate__flipInX"},m={class:"text-left"},g={class:"px-6 py-2"},b={class:"flex items-center mb-4"},h={class:"flex items-center mb-4"},v={class:"px-6 text-center"};function y(e,t,n,s,a,i){const l=(0,r.g2)("InfoModal");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("div",f,[(0,r.Lk)("div",p,[(0,r.Lk)("div",m,[(0,r.Lk)("div",g,[t[6]||(t[6]=(0,r.Lk)("h2",{class:"font-bold text-2xl mb-4 mt-2 transition-colors text-center text-green-800"},"My Space",-1)),(0,r.Lk)("form",{onSubmit:t[4]||(t[4]=(0,o.D$)(((...e)=>i.handleSubmit&&i.handleSubmit(...e)),["prevent"]))},[(0,r.Lk)("div",b,[(0,r.bo)((0,r.Lk)("input",{class:"text-sm flex-1 p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-sky-500 bg-gray-100 text-black border-gray-600",id:"username","onUpdate:modelValue":t[0]||(t[0]=e=>a.form.username=e),placeholder:"账号",onKeydown:t[1]||(t[1]=(...e)=>i.handleKeyDown&&i.handleKeyDown(...e))},null,544),[[o.Jo,a.form.username]])]),(0,r.Lk)("div",h,[(0,r.bo)((0,r.Lk)("input",{class:"text-sm flex-1 p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-sky-500 bg-gray-100 text-black border-gray-600",id:"password",type:"password","onUpdate:modelValue":t[2]||(t[2]=e=>a.form.password=e),placeholder:"密码",onKeydown:t[3]||(t[3]=(...e)=>i.handleKeyDown&&i.handleKeyDown(...e))},null,544),[[o.Jo,a.form.password]])])],32)]),(0,r.Lk)("div",v,[(0,r.Lk)("button",{class:"inline-flex items-center justify-center w-full h-10 px-4 py-2 text-white font-bold border-b-4 rounded focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-green-500 bg-green-700 hover:bg-green-600 border-green-900 hover:border-green-700",id:"submit_button",onClick:t[5]||(t[5]=(...e)=>i.handleSubmit&&i.handleSubmit(...e))}," 登 录 ")])])])]),(0,r.bF)(l,{isOpen:a.isModalOpen,title:e.modalTitle,content:e.modalContent,onClose:i.handleCloseModal},null,8,["isOpen","title","content","onClose"])],64)}var k=n(4232);const w={class:"text-lg mb-4 font-bold text-left text-slate-800"},x={class:"mb-4 text-left text-slate-800"},_={class:"flex justify-end space-x-2"};function L(e,t,n,s,a,i){return(0,r.uX)(),(0,r.Wv)(o.eB,{name:"modal-fade",onLeave:i.leave},{default:(0,r.k6)((()=>[n.isOpen?((0,r.uX)(),(0,r.CE)("div",{key:0,class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-20",onClick:t[2]||(t[2]=(...e)=>i.closeModal&&i.closeModal(...e))},[(0,r.Lk)("div",{id:"modal_window",class:"p-6 rounded-lg shadow-lg w-3/4 lg:w-1/6 md:w-1/3 animate__animated animate__fadeInUp bg-gray-300",onClick:t[1]||(t[1]=(0,o.D$)((()=>{}),["stop"]))},[(0,r.Lk)("h2",w,[t[3]||(t[3]=(0,r.Lk)("i",{class:"material-symbols--note text-md",style:{"vertical-align":"middle","line-height":"1"}},null,-1)),(0,r.eW)(" "+(0,k.v_)(n.title),1)]),(0,r.Lk)("div",x,[(0,r.RG)(e.$slots,"default",{},(()=>[(0,r.eW)((0,k.v_)(n.content),1)]),!0)]),(0,r.Lk)("div",_,[(0,r.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>i.closeModal&&i.closeModal(...e)),class:"px-4 py-1.5 rounded bg-opacity-90 hover:text-gray-50 bg-gray-600 hover:bg-gray-600 text-gray-100"}," 确定 ")])])])):(0,r.Q3)("",!0)])),_:3},8,["onLeave"])}var M={name:"InfoModal",props:{isOpen:{type:Boolean,required:!0},title:{type:String,default:"null"},content:{type:String,default:"null"}},methods:{closeModal(){this.$emit("close")},leave(e){const t=e.querySelector("#modal_window");t&&(t.classList.remove("animate__fadeInUp"),t.classList.add("animate__fadeOutDown"))}}};const O=(0,l.A)(M,[["render",L],["__scopeId","data-v-fd33b808"]]);var S=O,C={name:"LandingPage",components:{InfoModal:S},data(){return{form:{username:"",password:""},isModalOpen:!1}},mounted(){},methods:{handleKeyDown(e){"Enter"===e.key&&this.handleSubmit()},sleep(e){return new Promise((t=>setTimeout(t,e)))},async handleSubmit(){var e=document.getElementById("submit_button");e.disabled=!0,e.innerHTML='\n        <span>\n          登录中\n          <i aria-hidden="true" role="status" class="inline-block rounded-full animate-spin icon--loading align-middle" />\n        </span>',await this.sleep(1e3),this.showInfo("登录失败","用户名或密码错误"),e.disabled=!1,e.innerHTML="登&nbsp;录"},showInfo(e,t){this.modalTitle=e,this.modalContent=t,this.openModal()},openModal(){this.isModalOpen=!0},handleCloseModal(){this.isModalOpen=!1}}};const j=(0,l.A)(C,[["render",y]]);var T=j;const I=[{path:"/",name:"LandingPage",component:T}],A=(0,c.aE)({history:(0,c.LA)(),routes:I});A.beforeEach(((e,t,n)=>{document.title="My Blog Space",n()}));var E=A,U=n(782),D=n(4373);const K=D.A.create({baseURL:"http://localhost:18000",timeout:1e4});var P={login(e){return K.post("/api/login",e)},generateLink(e){return K.post("/api/generate_subscription",e)},showSubscriptionUsage(e){return K.post("/api/subscription_usage",e)},deleteSubscription(e){return K.post("/api/delete_subscription",e)},getSettings(e){return K.post("/api/get_settings",e)},saveSettings(e){return K.post("/api/save_settings",e)},updateSubscription(e){return K.post("/api/update_subscription",e)}};const X=(0,U.y$)({state:{token:null,user:null},mutations:{setToken(e,t){e.token=t},setUser(e,t){e.user=t},clearAuth(e){e.token=null,e.user=null}},actions:{async login({commit:e},{username:t,password:n}){try{const o=await P.login({username:t,password:n});return o.data.result?(e("setToken",o.data.token),e("setUser",o.data.user),{success:!0}):{success:!1,error:o.data.err}}catch(o){return{success:!1,error:o.message}}},logout({commit:e}){e("clearAuth")}},getters:{isAuthenticated(e){return!!e.token},getToken(e){return e.token},getUser(e){return e.user}}});var $=X;const B=(0,o.Ef)(d);B.use(E),B.use($),B.mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var s=t[o]={exports:{}};return e[o].call(s.exports,s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,s){if(!o){var a=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],s=e[d][2];for(var i=!0,l=0;l<o.length;l++)(!1&s||a>=s)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(i=!1,s<a&&(a=s));if(i){e.splice(d--,1);var u=r();void 0!==u&&(t=u)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[o,r,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,s,a=o[0],i=o[1],l=o[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(l)var d=l(n)}for(t&&t(o);u<a.length;u++)s=a[u],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(d)},o=self["webpackChunkblog"]=self["webpackChunkblog"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(5526)}));o=n.O(o)})();
//# sourceMappingURL=app.2c595e0f.js.map