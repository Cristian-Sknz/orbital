(this.webpackJsonporbital=this.webpackJsonporbital||[]).push([[0],{100:function(e,t,i){},101:function(e,t,i){},102:function(e,t,i){},103:function(e,t,i){},105:function(e,t,i){},206:function(e,t,i){},207:function(e,t,i){},208:function(e,t,i){"use strict";i.r(t);var a=i(1),n=i.n(a),r=i(74),s=i.n(r),c=(i(88),i(89),i(90),i(6)),o=i(13),l=i.n(o),u=i(9);var d=function(e){var t=Object(a.useState)(!1),i=Object(c.a)(t,2),n=i[0],r=i[1],s=Object(a.useCallback)((function(){e.current&&(window.scrollY<=e.current.offsetHeight?n&&r(!1):n||r(!0))}),[n,e]);return Object(a.useEffect)((function(){return window.addEventListener("scroll",s),function(){return window.removeEventListener("scroll",s)}}),[s]),n},m=i(10),j=i(80),b={distance:"30px",duration:1800,reset:!0,interval:500};function h(e){return"function"===typeof origin&&(e(),!0)}var g=function(e,t){var i=Object(a.useRef)(null),n=Object(j.a)();return Object(a.useEffect)((function(){null!=i.current&&(function(e,t,i){if(h(i))return;e.reveal(t,Object(m.a)(Object(m.a)({},b),{},{origin:i}))}(n,i.current,e),function(e,t,i){if(null==i||window.innerWidth>=i.width)return;if(h(i.origin))return;e.reveal(t,Object(m.a)(Object(m.a)({},b),{},{origin:i.origin}))}(n,i.current,t))}),[i,n,e,t]),i};var p,f=d,v=g,O=function(e,t){var i=Object(a.useState)(),n=Object(c.a)(i,2),r=n[0],s=n[1],o=Object(a.useCallback)((function(){var i;(i=e,i.map((function(e){return function(e){return{item:e,element:document.querySelector(e)}}(e)})).filter((function(e){return function(e){return null!==e}(e.element)})).map((function(e){return function(e){var t=e.element,i=e.item;return{id:t.getAttribute("id"),className:t.className,item:i,top:t.offsetTop,height:t.offsetHeight}}(e)}))).forEach((function(e){(function(e,t,i){var a=e.top+(i||0);return t>a&&t<=a+e.height})(e,window.scrollY,t)&&(null===r||void 0===r?void 0:r.item)!==e.item&&s(e)}))}),[null===r||void 0===r?void 0:r.item,t,e]);return Object(a.useEffect)((function(){return window.addEventListener("scroll",o),function(){return window.removeEventListener("scroll",o)}}),[o]),r},x=i(0),w=function(e){return Object(x.jsx)("li",{className:"nav-item",onClick:e.closeMenu,children:Object(x.jsxs)("a",{href:"#".concat(e.item.link),className:"nav-link",children:[e.active&&Object(x.jsx)(u.a,{icon:["fas","angle-right"]}),e.item.title]})})},k=i(37);function y(){return null==localStorage.getItem("selected-theme")?(localStorage.setItem("selected-theme",p.LIGHT),p.LIGHT):localStorage.getItem("selected-theme")}function N(e){return document.body.toggleAttribute("dark-theme",p.DARK===e),localStorage.setItem("selected-theme",e),e}!function(e){e.LIGHT="light",e.DARK="dark"}(p||(p={}));var C={apply:function(){return document.body.toggleAttribute("dark-theme",p.DARK===y()),y()},theme:function(){return y()},setTheme:N,toggleTheme:function(){return N("light"===y()?p.DARK:p.LIGHT)}},S=(i(97),function(e){var t=e.onClick,i=Object(a.useState)(C.apply()),n=Object(c.a)(i,2),r=n[0],s=n[1],o=Object(a.useCallback)((function(){t&&t(),s(C.toggleTheme())}),[t]);return Object(x.jsx)(u.a,{icon:["fas","adjust"],className:"".concat(r," change-theme"),onClick:o})}),E=function(e){var t=O(k.map((function(e){var t=e.link;return".".concat(t)})),-200),i=l()({"nav-list":!0,active:e.menu});return Object(a.useEffect)((function(){var e,i=(e=null===t||void 0===t?void 0:t.id,k.filter((function(t){return t.link===e})).map((function(e){return e.title}))[0]);document.title="Orbital - ".concat(i||"Inicio")}),[t]),Object(x.jsxs)("ul",{className:i,children:[k.map((function(i){return Object(x.jsx)(w,{item:i,closeMenu:e.closeMenu,active:(null===t||void 0===t?void 0:t.id)===i.link},i.link)})),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(S,{onClick:e.closeMenu})})]})},T=(i(98),function(){var e=Object(a.useState)(!1),t=Object(c.a)(e,2),i=t[0],n=t[1],r=Object(a.useRef)(null),s=f(r),o=l()({"menu-btn":!0,active:i}),d=l()({navbar:!0,active:s}),m=Object(a.useCallback)((function(){n(!i)}),[i]);return Object(x.jsx)("header",{children:Object(x.jsx)("nav",{className:d,ref:r,children:Object(x.jsxs)("div",{className:"container nav-container",children:[Object(x.jsx)("a",{href:"#inicio",className:"nav-logo",children:Object(x.jsx)("img",{alt:"logo"})}),Object(x.jsx)(E,{menu:i,closeMenu:function(){return n(!1)}}),Object(x.jsx)("div",{className:o,onClick:m,children:Object(x.jsx)(u.a,{icon:["fas",i?"times":"bars"]})})]})})})}),A=function(e){return Object(x.jsx)("section",{id:e.id,className:e.id,children:Object(x.jsxs)("div",{className:"container ".concat(e.id,"-container"),children:[e.showTitle&&Object(x.jsx)("h2",{className:"section-title",children:e.title}),e.children]})})},q=(i(99),function(){var e=v("left",{width:968,origin:"bottom"}),t=v("right",{width:968,origin:"top"}),i=v("top",{width:968,origin:"bottom"});return Object(x.jsx)(A,{id:"inicio",title:"title",children:Object(x.jsxs)("div",{className:"inicio-content",children:[Object(x.jsx)("div",{className:"home-img",ref:t,children:Object(x.jsx)("img",{src:"./images/home.svg",alt:"Estudante Orbital"})}),Object(x.jsxs)("div",{className:"home-texts",ref:e,children:[Object(x.jsx)("div",{className:"home-title",children:Object(x.jsx)("img",{alt:"logo"})}),Object(x.jsx)("div",{className:"home-subtitle",children:"Inovando e mudando \xf3rbitas"})]}),Object(x.jsx)("a",{href:"#contato",className:"home-btn",ref:i,children:"Mude sua \xf3rbita!"})]})})}),G=(i(100),function(){var e=g("right",{origin:"top",width:968}),t=g("left",{origin:"bottom",width:968});return Object(x.jsx)(A,{id:"sobre",title:"Sobre",showTitle:!0,children:Object(x.jsxs)("div",{className:"sobre-content",children:[Object(x.jsx)("div",{className:"sobre-image",ref:t,children:Object(x.jsx)("img",{src:"./images/building-websites.svg",alt:"ilustra\xe7\xe3o da equipe desenvolvendo a p\xe1gina"})}),Object(x.jsxs)("div",{className:"sobre-texts",ref:e,children:[Object(x.jsxs)("p",{children:["A ",Object(x.jsx)("strong",{children:"Orbital"})," \xe9 uma equipe composta por"," ",Object(x.jsx)("strong",{children:"oito estudantes"})," de programa\xe7\xe3o, cada um com seus pr\xf3prios princ\xedpios e valores, unidos apenas por sua"," ",Object(x.jsx)("strong",{children:"insaci\xe1vel sede por conhecimento"}),"."]}),Object(x.jsxs)("p",{children:["J\xe1 datando meses, a origem do grupo se deu por conta da"," ",Object(x.jsx)("strong",{children:"fus\xe3o de m\xfaltiplas squads"})," do programa"," ",Object(x.jsx)("strong",{children:"#TeuFuturo 2021"}),", fator que atuou na contru\xe7\xe3o da diversidade hoje apresentada pela equipe."]}),Object(x.jsxs)("p",{children:["Em geral ",Object(x.jsx)("strong",{children:"criativos e motivados"}),", os integrantes do grupo est\xe3o preparados para mudar o mundo."," ",Object(x.jsx)("strong",{children:"Nos deixe mudar a sua \xf3rbita!"})]})]})]})})}),L=i(4),F=i(5),_=(i(50),function(e){var t=e.children,i=void 0===t||0===t.length;i&&(t="");var a=l()({skeleton:i,"skeleton-text":i},[e.className]);return n.a.createElement(e.as,{className:a},t)});function z(e){var t=e.substring(2).match("^(\\d{2})(\\d{5})(\\d{4})$");return t?"(".concat(t[1],") ").concat(t[2],"-").concat(t[3]):e}var D,I=function(e){var t=e.name,i=e.data;return Object(x.jsx)("li",{className:"social ".concat(t),children:Object(x.jsxs)("a",{href:null===i||void 0===i?void 0:i.url,target:"_blank",rel:"noreferrer",children:[Object(x.jsx)(u.a,{icon:["fab",t]}),Object(x.jsx)(_,{className:"text",as:"span",children:z(i?null===i||void 0===i?void 0:i.name:"")})]})})},M=(i(51),function(e){var t=void 0===e.src||0===e.src.length,i=t?"":e.src,a=l()({skeleton:t},[e.className]);return Object(x.jsx)("div",{className:a,style:{background:"url(".concat(i,") center center / cover")}})});!function(e){e.LEFT="left",e.MIDDLE="middle",e.RIGHT="right"}(D||(D={}));var R=["linkedin","instagram","github","whatsapp"];function H(e){if(null==e)return e;var t=e.split(" ");return"".concat(t[0]," ").concat(t[1])}var B=function(e){var t=e.data,i=e.direction,a=e.onClick;return Object(x.jsx)("div",{className:l()(["card","card-".concat(i)]),onClick:a,children:Object(x.jsxs)("div",{className:"card-content",children:[Object(x.jsx)(M,{className:"card-img",src:null===t||void 0===t?void 0:t.image}),Object(x.jsxs)("div",{className:"card-container",children:[Object(x.jsx)(_,{as:"h3",className:"card-title",children:H(null===t||void 0===t?void 0:t.name)}),Object(x.jsx)("ul",{className:"card-contacts","aria-current":"middle"!==i&&"page",children:R.map((function(e,i){return Object(x.jsx)(I,{name:e,data:null===t||void 0===t?void 0:t.social[i]},i)}))})]})]})})},K=i(48);var V=function(){var e=document.querySelectorAll(".card");e.forEach((function(e){return e.classList.add("transition")})),setTimeout((function(){return e.forEach((function(e){return e.classList.remove("transition")}))}),501)},J=function(){function e(t){var i=this;Object(L.a)(this,e),this.orders=void 0,this.maxValue=void 0,this.orders=[0,0,0],this.maxValue=t;var a={value:t-1,isFirst:!0};this.orders=this.orders.map((function(){return a.isFirst?(a.isFirst=!1,t-1):a.value===i.maxValue-1?a.value=0:a.value+=1}))}return Object(F.a)(e,[{key:"getOrders",value:function(){return this.orders}},{key:"get",value:function(e){return this.orders[e]}},{key:"next",value:function(){return this.orders[0]=this.orders[1],this.orders[1]=this.orders[2],this.orders[2]=this.orders[2]===this.maxValue-1?0:this.orders[2]+1,this.orders}},{key:"prev",value:function(){return this.orders[2]=this.orders[1],this.orders[1]=this.orders[0],this.orders[0]=0===this.orders[0]?this.maxValue-1:this.orders[0]-1,this.orders}}]),e}(),P=function(){var e=v("top"),t=Object(a.useState)({iterator:void 0,data:[],order:[0,0,0]}),i=Object(c.a)(t,2),n=i[0],r=i[1];Object(a.useEffect)((function(){var e=new J(K.length);r({iterator:e,data:K,order:e.getOrders()}),V()}),[]);var s=Object(a.useCallback)((function(e){if(null!=n.iterator){var t=e?n.iterator.next():n.iterator.prev();r(Object(m.a)(Object(m.a)({},n),{},{order:t})),V()}}),[n]);return Object(x.jsxs)(A,{id:"equipe",title:"Equipe",showTitle:!0,children:[Object(x.jsxs)("div",{className:"slider",ref:e,children:[Object(x.jsx)(B,{direction:D.LEFT,data:n.data[n.order[0]],onClick:function(){return s(!1)}}),Object(x.jsx)(B,{direction:D.MIDDLE,data:n.data[n.order[1]]}),Object(x.jsx)(B,{direction:D.RIGHT,data:n.data[n.order[2]],onClick:function(){return s(!0)}})]}),Object(x.jsxs)("div",{className:"buttons",children:[Object(x.jsx)("div",{className:"slider-button nav-left",onClick:function(){return s(!1)},children:Object(x.jsx)(u.a,{icon:["fas","arrow-left"]})}),Object(x.jsx)("div",{className:"slider-button nav-right",onClick:function(){return s(!0)},children:Object(x.jsx)(u.a,{icon:["fas","arrow-right"]})})]})]})},W=(i(101),function(e){var t=Object.assign({},e);return Object(x.jsx)("div",{className:"activity",children:Object(x.jsxs)("div",{className:"activity-container",children:[Object(x.jsx)("h3",{className:"activity-title",children:t.title}),Object(x.jsx)(u.a,{className:"activity-icon",icon:t.icon})]})})}),X=function(){var e=v("bottom");return Object(x.jsx)(A,{id:"servicos",title:"Servi\xe7os",showTitle:!0,children:Object(x.jsx)("div",{className:"activities",ref:e,children:[{name:"Desenvolvimento Web",icon:["fas","code"]},{name:"Design Web",icon:["fas","pencil-ruler"]},{name:"Marketing Digital",icon:["fas","poll"]}].map((function(e,t){return Object(x.jsx)(W,{icon:e.icon,title:e.name},t)}))})})},Y=(i(102),function(e){var t=e.title,i=e.author,a=e.src,n=e.link;return Object(x.jsxs)("li",{className:"project",children:[Object(x.jsx)("img",{src:a,alt:t,className:"project-img"}),Object(x.jsxs)("div",{className:"overlay",children:[Object(x.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",className:"icon",children:Object(x.jsx)(u.a,{icon:["fas","external-link-alt"]})}),Object(x.jsxs)("div",{className:"overlay-content",children:[Object(x.jsx)("h2",{children:i}),Object(x.jsx)("p",{children:t})]})]})]})}),Q=i(75),U=function(){var e=g("top"),t=Q.a;return Object(x.jsx)(A,{id:"projetos",title:"Projetos",showTitle:!0,children:Object(x.jsx)("ul",{className:"project-row",ref:e,children:t.map((function(e,t){return Object(x.jsx)(Y,{title:e.title,author:e.author,src:e.image,link:e.link},t)}))})})},Z=(i(103),function(){return Object(x.jsx)(A,{id:"galeria",title:"Galeria",showTitle:!0,children:Object(x.jsx)("div",{className:"embed",children:Object(x.jsx)("iframe",{title:"V\xeddeo de apresenta\xe7\xe3o do squad",src:"https://www.youtube.com/embed/8gti3OXU_sY",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})})}),$=i(18),ee=(i(105),i(220)),te=i(221),ie=i(222),ae=i(81),ne=i(28),re=ne.a().shape({name:ne.b().required("O nome \xe9 obrigat\xf3rio.").min(5,"O nome deve ter no m\xednimo 5 caracteres"),email:ne.b().required("O email \xe9 obrigat\xf3rio.").email("Esse campo deve ser do tipo e-mail"),message:ne.b().required("A mensagem \xe9 obrigat\xf3ria.").min(20,"A mensagem deve ter no m\xednimo 20 caracteres")}),se=function(){var e=document.querySelectorAll(".invalid-message"),t=document.querySelector(".successful-message");e.forEach((function(e){e.innerText.length>1?(e.style.display="block",t.style.display="none"):e.style.display="none"}))},ce=function(){var e,t,i,a=Object($.d)({resolver:Object(ae.a)(re)}),n=a.register,r=a.handleSubmit,s=a.formState.errors;return Object(x.jsx)(A,{id:"contato",title:"Contato",showTitle:!0,children:Object(x.jsxs)("form",{onSubmit:r((function(e){console.log(e),document.querySelector(".successful-message").style.display="block"})),onChange:se,children:[Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsxs)("div",{className:"left",children:[Object(x.jsxs)("div",{className:"form-section",children:[Object(x.jsxs)("label",{htmlFor:"name",children:[Object(x.jsx)(ee.a,{style:{verticalAlign:"middle"}})," Nome completo"]}),Object(x.jsx)("input",Object(m.a)({className:"form-text",type:"text",id:"name"},n("name"))),Object(x.jsx)("p",{className:"form-message invalid-message",children:null===(e=s.name)||void 0===e?void 0:e.message})]}),Object(x.jsxs)("div",{className:"form-section",children:[Object(x.jsxs)("label",{htmlFor:"email",children:[" ",Object(x.jsx)(te.a,{style:{verticalAlign:"middle"}})," Endere\xe7o de email"]}),Object(x.jsx)("input",Object(m.a)({className:"form-text",type:"email",id:"email",placeholder:"email@exemplo.com"},n("email"))),Object(x.jsx)("p",{className:"form-message invalid-message",children:null===(t=s.email)||void 0===t?void 0:t.message})]})]}),Object(x.jsx)("div",{className:"right",children:Object(x.jsxs)("div",{className:"form-section",children:[Object(x.jsxs)("label",{htmlFor:"message",children:[Object(x.jsx)(ie.a,{style:{verticalAlign:"middle"}})," Mensagem"]}),Object(x.jsx)("textarea",Object(m.a)({className:"form-text",id:"message",cols:30,rows:10,placeholder:"Deixe sua mensagem!"},n("message"))),Object(x.jsx)("p",{className:"form-message invalid-message",children:null===(i=s.message)||void 0===i?void 0:i.message})]})})]}),Object(x.jsx)("button",{onClick:se,className:"form-btn btn",type:"submit",children:"Enviar"}),Object(x.jsx)("p",{className:"form-message successful-message",children:"Mensagem enviada com sucesso! Em breve retornaremos!"})]})})},oe=(i(206),i.p+"static/media/icon-orbital.9b55627c.svg"),le=function(){return Object(x.jsx)("footer",{children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("div",{className:"icon-orbital",children:Object(x.jsx)("img",{src:oe,alt:""})}),Object(x.jsx)("span",{className:"footer-text",children:"Copyright \xa9 2021 Orbital"}),Object(x.jsx)("span",{className:"footer-text",children:"Todos os direitos reservados"})]})})},ue=i(223),de=(i(207),function(){var e=a.useState(!1),t=Object(c.a)(e,2),i=t[0],n=t[1];return window.addEventListener("scroll",(function(){return window.scrollY>=560?n(!0):n(!1)})),Object(x.jsx)("a",{href:"#inicio",className:i?"scrolltop show-scroll":"scrolltop",id:"scroll-top",children:Object(x.jsx)(ue.a,{className:"scrolltop-icon"})})}),me=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(T,{}),Object(x.jsx)(q,{}),Object(x.jsx)(G,{}),Object(x.jsx)(P,{}),Object(x.jsx)(X,{}),Object(x.jsx)(U,{}),Object(x.jsx)(Z,{}),Object(x.jsx)(ce,{}),Object(x.jsx)(de,{}),Object(x.jsx)(le,{})]})},je=i(21),be=i(11),he=i(27);[be.a,be.b,be.c,be.d,be.e,be.f,be.g,be.h,be.i,be.j,be.k,he.a,he.b,he.c,he.d].forEach((function(e){je.b.add(e)})),s.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(me,{})}),document.getElementById("root"))},37:function(e){e.exports=JSON.parse('[{"title":"In\xedcio","link":"inicio"},{"title":"Sobre","link":"sobre"},{"title":"Equipe","link":"equipe"},{"title":"Servi\xe7os","link":"servicos"},{"title":"Projetos","link":"projetos"},{"title":"Galeria","link":"galeria"},{"title":"Contato","link":"contato"}]')},48:function(e){e.exports=JSON.parse('[{"id":1,"name":"Andr\xe9 Canton","email":null,"image":"https://i.imgur.com/O3O2bTs.png","social":[{"type":"linkedin","name":"Andr\xe9 Canton","url":"https://www.linkedin.com/in/andre-canton/"},{"type":"instagram","name":"dede_canton","url":"https://www.instagram.com/dede_canton/"},{"type":"github","name":"Andr\xe9 Canton","url":"https://github.com/dedecanton"},{"type":"whatsapp","url":"https://wa.me/5554999812140","name":"5554999812140"}]},{"id":2,"name":"Cristian Ferreira","email":"cristian.datingaa@gmail.com","image":"https://i.imgur.com/K8hHABv.png","social":[{"type":"linkedin","name":"Cristian Ferreira","url":"https://linkedin.com/in/cristian-sknz-ferreira/"},{"type":"instagram","name":"cristian_sknz","url":"https://www.instagram.com/cristian_sknz/"},{"type":"github","name":"Cristian \\"SknZ\\" Ferreira","url":"https://github.com/cristian-sknz"},{"type":"whatsapp","url":"https://wa.me/5551981830968","name":"5551981830968"}]},{"id":52,"name":"Cau\xe3 Rodriguez da Silva","email":"cauarodriguezdasilva@gmail.com","image":"https://i.imgur.com/Hqwqbmh.jpg","social":[{"type":"linkedin","name":"Cau\xe3 Rodriguez da Silva","url":"https://www.linkedin.com/in/cauardsilva/"},{"type":"instagram","name":"rds_caua","url":"https://www.instagram.com/rds_caua/"},{"type":"github","name":"cauardsilva","url":"https://github.com/cauardsilva"},{"type":"whatsapp","url":"https://wa.me/5551982602188","name":"5551982602188"}]},{"id":53,"name":"Guilherme Baptista","email":null,"image":"https://i.imgur.com/r446MgW.png","social":[{"type":"linkedin","name":"Guilherme Model Baptista","url":"https://www.linkedin.com/in/guilherme-model-baptista-b483a9212/"},{"type":"instagram","name":"guits_mb","url":"https://www.instagram.com/guits_mb/"},{"type":"github","name":"GuitsBR","url":"https://github.com/GuitsBR"},{"type":"whatsapp","url":"https://wa.me/5551993317788","name":"5551993317788"}]},{"id":54,"name":"Lu\xedsa Righi Bolzan","email":null,"image":"https://i.imgur.com/jORlpy6.png","social":[{"type":"linkedin","name":"Luisa Bolzan","url":"https://www.linkedin.com/in/luisabolzan"},{"type":"instagram","name":"luisarighii","url":"https://www.instagram.com/luisarighii"},{"type":"github","name":"Luisabolzan","url":"https://github.com/luisabolzan"},{"type":"whatsapp","url":"https://wa.me/5551999515041","name":"5551999515041"}]},{"id":55,"name":"Gabryel D\'avila Neves","email":null,"image":"https://i.imgur.com/WhaQtHS.png","social":[{"type":"linkedin","name":"Gabryel D\'avila Neves","url":"https://www.linkedin.com/in/gabryel-neves/"},{"type":"instagram","name":"gabryel_dn1","url":"https://www.instagram.com/gabryel_dn1/"},{"type":"github","name":"Gabu","url":"https://github.com/XxGabyDNxX"},{"type":"whatsapp","url":"https://wa.me/5551989122389","name":"5551989122389"}]},{"id":56,"name":"Gabrielle Kieffer","email":"","image":"https://i.imgur.com/F8SiXqs.png","social":[{"type":"linkedin","name":"Gabrielle Kieffer","url":"https://www.linkedin.com/in/gabrielle-kieffer-b47b33218"},{"type":"instagram","name":"k_gabizinha","url":"https://www.instagram.com/k_gabizinha"},{"type":"github","name":"gabrielle-kieffer","url":"https://github.com/gabrielle-kieffer"},{"type":"whatsapp","url":"https://wa.me/5551998270513","name":"5551998270513"}]},{"id":57,"name":"Micael Gomes de Souza","email":null,"image":"https://i.imgur.com/FVtDf6w.png","social":[{"type":"linkedin","name":"Micael Gomes de Souza","url":"https://www.linkedin.com/in/micael-893449220"},{"type":"instagram","name":"_micaelgomes","url":"https://www.instagram.com/_micaelgomes"},{"type":"github","name":"gomes5555","url":"https://github.com/gomes5555"},{"type":"whatsapp","url":"https://wa.me/5554996359769","name":"5554996359769"}]}]')},50:function(e,t,i){},51:function(e,t,i){},75:function(e){e.exports=JSON.parse('{"a":[{"title":"Christmas Landing Page","author":"Andr\xe9 Canton","image":"./images/projects/web-design-christmas.png","link":"https://dedecanton.github.io/christmas-landing-page/"},{"title":"EasyBank Landing Page","author":"Andr\xe9 Canton","image":"./images/projects/easybank-landing-page.png","link":"https://dedecanton.github.io/easybank-landing-page/"},{"title":"Portfolio Landing Page","author":"Andr\xe9 Canton","image":"./images/projects/dedecanton_portfolio.png","link":"https://dedecanton.github.io/portfolio/"},{"title":"Barbearia Alura","author":"Gabrielle Kieffer","image":"./images/projects/logo-alura-barber.png","link":"https://gabrielle-kieffer.github.io/projeto-barbearia-alura-/"},{"title":"Ousubot","author":"Cristian Ferreira","image":"./images/projects/ousubot-discord-bot.png","link":"https://gabrielle-kieffer.github.io/projeto-barbearia-alura-/"},{"title":"Notetech Home-page","author":"Cristian Ferreira","image":"./images/projects/notetech-home-page.png","link":"https://cristian-sknz.github.io/NoteTech/"}]}')},88:function(e,t,i){},89:function(e,t,i){},90:function(e,t,i){},97:function(e,t,i){},98:function(e,t,i){},99:function(e,t,i){}},[[208,1,2]]]);
//# sourceMappingURL=main.bb21a998.chunk.js.map