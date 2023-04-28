(function(){var e={6202:function(e,t,o){"use strict";var n=o(9242),a=o(3396),i=o(4870);const r=(0,a.Uk)("My projects"),s=(0,a.Uk)("About me");function c(e,t){const o=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("nav",null,[(0,a.Wm)(o,{to:"/",class:"nav-link","active-class":"active"},{default:(0,a.w5)((()=>[r])),_:1}),(0,a.Wm)(o,{to:"/AboutMe","active-class":"active"},{default:(0,a.w5)((()=>[s])),_:1})])}var l=o(89);const d={},m=(0,l.Z)(d,[["render",c],["__scopeId","data-v-7fb06a39"]]);var p=m;const u=e=>((0,a.dD)("data-v-502b885c"),e=e(),(0,a.Cn)(),e),g=u((()=>(0,a._)("div",{class:"title"},[(0,a._)("h1",null," Louise Fatton "),(0,a._)("div",{class:"subtitle"}," Game Developer Portfolio ")],-1)));var h={__name:"PageHeader",setup(e){return(e,t)=>((0,a.wg)(),(0,a.iD)("header",null,[g,(0,a.Wm)((0,i.SU)(p))]))}};const f=(0,l.Z)(h,[["__scopeId","data-v-502b885c"]]);var y=f;const w={class:"mail",href:"mailto:louise.fatton@hotmail.fr",target:"_blank"},v={class:"github",href:"https://github.com/lfatton",target:"_blank"},b={class:"linkedin",href:"https://www.linkedin.com/in/louise-fatton",target:"_blank"};function k(e,t){const o=(0,a.up)("font-awesome-icon");return(0,a.wg)(),(0,a.iD)("footer",null,[(0,a._)("a",w,[(0,a.Wm)(o,{icon:"fa-solid fa-envelope",size:"xl"})]),(0,a._)("a",v,[(0,a.Wm)(o,{icon:"fa-brands fa-square-github",size:"xl"})]),(0,a._)("a",b,[(0,a.Wm)(o,{icon:"fa-brands fa-linkedin",size:"xl"})])])}const _={},j=(0,l.Z)(_,[["render",k],["__scopeId","data-v-2da9ac3c"]]);var x=j,D={__name:"App",setup(e){return(e,t)=>{const o=(0,a.up)("RouterView");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)((0,i.SU)(y)),(0,a._)("main",null,[(0,a.Wm)(o)]),(0,a.Wm)((0,i.SU)(x))],64)}}};const U=D;var I=U,H=o(2483),T=o(7139),S=JSON.parse('[{"id":"1","type":"game","setting":"42 School Project","name":"Doom-Nukem","language":"C99 / SDL2","summary":"A project recreating a game engine based on a mix of Doom and Quake (Duke Nukem) engines, consisting of 2 parts, a game map editor and the game engine.","description":"The map editor allows you to create and customise maps. You can add enemies (with custom health and height), weapons and objects. Change the floor, wall or ceiling textures. Decide you\'re better off without a ceiling after all. Change walls into windows, move them, change them back again into walls to finally split them in the middle. You also add unlimited sectors to your map to try and put some space between you and the big boss (though it will still be able to reach you!).<br /><br />The game in itself is an FPS where you have to shoot with an array of different weapons on enemies (driving scooters!) that shoot at you in return. The big boss is a black hole, depleting your health without even touching you. The closer you get to it, the faster your health drops (duh), and losing health means also randomly losing pixels on your screen. You may even be forced to give the finger to flowers for some health back and clear the screen!<br /><br />The assets (including sound effects) used in the game were either free assets or created by the team. As the team consisted only of 4 devs who make poor pixel artists, the design of the game can be a bit rough around the edges. We still had a lot of fun doing those and it helped us take a break when the coding part of the project was becoming too intense.","details":[{"id":"1","text":"took 6 months, started the project with a friend for 4 months, 2 more devs joined us for the last 2 "},{"id":"2","text":"worked on the raycasting engine, HUD, gameplay mechanics & map editor"}],"video":"https://www.youtube.com/embed/Rt0gt9E8iJc","url":"https://github.com/MattDirty/doom_nukem","images":[{"id":"1","name":"doom-nukem-editor"},{"id":"2","name":"doom-nukem-engine"}]},{"id":"2","type":"game","setting":"Epic Game Jam 2019","name":"MoonWalker","language":"JavaScript / PixiJS","description":"This rhythmic rogue like game is loosely inspired by the tale of Sisyphus. You play a bird pushing the moon in rhythm up a mountain. The higher you go the richer you become, allowing you to buy funky bonuses every time you die so that you can try to go all the way up (spoiler: not happening anytime soon).","details":[{"id":"1","text":"made in 2 days with a team of 5 people (3 devs & 1 game artist & 1 musician)"},{"id":"2","text":"principally handled the bird\'s mouvements & HUD"}],"video":"https://www.youtube.com/embed/P-IKM2WAviA","url":"https://github.com/roflolilolmao/Sisyphus","gameUrl":"https://www.epicgamejam.com/games/moonwalker","images":[{"id":"1","name":"moonwalker"}]},{"id":"3","type":"game","setting":"Epic Game Jam 2021","name":"Trombi","language":"JavaScript / PixiJS","description":"This bullet hell is set in an office. You embody a tie, with either the default pattern or a pattern based on a screenshot from your webcam, and try to work you way up to the final boss, who may or may not have been based on <a href=\\"https://en.wikipedia.org/wiki/Office_Assistant\\" target=\\"_blank\\">Word Office Assistant Clippy</a>.","details":[{"id":"1","text":"made in 2 days with a team of 6 people (5 devs & 1 game artist)"},{"id":"2","text":"mainly worked on gameplay mechanics"}],"video":"https://www.youtube.com/embed/YLVJnlIoV3I","url":"https://github.com/m-conti/EpicGameJam2021","gameUrl":"https://www.epicgamejam.com/games/trombi","images":[{"id":"1","name":"trombi1"}]},{"id":"4","type":"game","setting":"UPsi Jam 2022","name":"Croquettes Not Included","language":"Godot Engine / GDScript","description":"A small management game. The goal is to herd your cats (more appear as time passes) by teleporting them in the photography studio to take their picture.","details":[{"id":"1","text":"made in 42 hours with a team of 3 people (3 devs)"},{"id":"2","text":"made-to-look-like-drawn-by-8-year-old-kid assets done by us :)"},{"id":"3","text":"mainly worked on the camera, HUD, and cat actions"}],"url":"https://github.com/lfatton/UpsiJam22","gameUrl":"https://mattdirty.itch.io/croquettes-not-included","images":[{"id":"1","name":"CNI1"}]},{"id":"5","type":"graphical","setting":"42 School Project","name":"Scop","language":"C++17 / OpenGL4.6 / GLSL / GLFW","description":"A project that parses a wavefront .obj and renders it on screen. The user can then interact with the model, by moving the camera or changing the texture on the model or switching to colour mode, etc.","details":[{"id":"1","text":"developed mostly alone on my free time during several months"},{"id":"2","text":"good intro to OpenGL, 3D modelisation and shaders"},{"id":"3","text":"no libraries were allowed to parse the model or shaders nor to make matrices or vectors"}],"url":"https://github.com/lfatton/Scop","images":[{"id":"1","name":"scop-lotus"},{"id":"2","name":"scop-monkey"},{"id":"3","name":"scop-woman"}]},{"id":"6","type":"graphical","setting":"42 School Project","name":"Fractol","language":"C99 / MiniLibX","description":"A graphical project computing and rendering several different fractals (Mandelbrot, Julia, etc.), allowing the user to navigate through and into them. As the calculations to display the fractals are quite complex (no puns intended), the resulting program is a tad heavy on the CPU (despite multi-threading) and could honestly use more optimisation. Still it\'s quite nice playing with the shapes and colours of the different fractals, spending hours trying to find the prettiest pattern and colour combination.","details":[{"id":"1","text":"developed alone in approximately 1 month"},{"id":"2","text":"the maths were intense but very rewarding"},{"id":"3","text":"used CPU multithreading to boost performance"}],"url":"https://github.com/lfatton/Fractol","images":[{"id":"1","name":"fractol1"},{"id":"2","name":"fractol2"},{"id":"3","name":"fractol3"},{"id":"4","name":"fractol4"}]}]');const L={key:0,class:"project-content-container doom"},M=["innerHTML"],C={class:"details"},P={class:"image-container space-bottom"},O=["src","alt"],A=["innerHTML"],Y={class:"image-container"},W=["src","alt"],J={key:0,class:"video-wrapper"},G=["src"],N={key:1,class:"project-content-container scop"},z=["innerHTML"],F={class:"details"},q={class:"images-container"},E={class:"image-container two-pics"},K=["src","alt"],Z=["src","alt"],V={class:"image-container one-pic"},R=["src","alt"],B={key:2,class:"project-content-container fractol"},Q=["innerHTML"],X={class:"details"},$={class:"images-container"},ee=["src","alt"],te={key:3,class:"project-content-container"},oe=["innerHTML"],ne={class:"details"},ae=["src","alt"],ie={key:0,class:"video-wrapper"},re=["src"];var se={__name:"ProjectContentLoader",props:["project"],setup(e){const t=e;function n(e){return o(260)("./"+e+".png")}return console.log(t.project),(t,o)=>"Doom-Nukem"===e.project.name?((0,a.wg)(),(0,a.iD)("div",L,[(0,a._)("div",{class:"summary",innerHTML:e.project.summary},null,8,M),(0,a._)("div",C,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.project.details,(e=>((0,a.wg)(),(0,a.iD)("li",{key:e.id},(0,T.zw)(e.text),1)))),128))]),(0,a._)("div",P,[(0,a._)("img",{src:n(e.project.images[0].name),alt:e.project.name},null,8,O)]),(0,a._)("div",{class:"description space-bottom",innerHTML:e.project.description},null,8,A),(0,a._)("div",Y,[(0,a._)("img",{src:n(e.project.images[1].name),alt:e.project.name},null,8,W)]),e.project.video?((0,a.wg)(),(0,a.iD)("div",J,[(0,a._)("iframe",{width:"100%",height:"100%",src:e.project.video,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,G)])):(0,a.kq)("",!0)])):"Scop"===e.project.name?((0,a.wg)(),(0,a.iD)("div",N,[(0,a._)("div",{class:"description",innerHTML:e.project.description},null,8,z),(0,a._)("div",F,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.project.details,(e=>((0,a.wg)(),(0,a.iD)("li",{key:e.id},(0,T.zw)(e.text),1)))),128))]),(0,a._)("div",q,[(0,a._)("div",E,[(0,a._)("img",{src:n("scop-lotus"),alt:e.project.name},null,8,K),(0,a._)("img",{src:n("scop-monkey"),alt:e.project.name},null,8,Z)]),(0,a._)("div",V,[(0,a._)("img",{src:n("scop-woman"),alt:e.project.name},null,8,R)])])])):"Fractol"===e.project.name?((0,a.wg)(),(0,a.iD)("div",B,[(0,a._)("div",{class:"description",innerHTML:e.project.description},null,8,Q),(0,a._)("div",X,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.project.details,(e=>((0,a.wg)(),(0,a.iD)("li",{key:e.id},(0,T.zw)(e.text),1)))),128))]),(0,a._)("div",$,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.project.images,(t=>((0,a.wg)(),(0,a.iD)("div",{class:"image-container",key:t.id},[(0,a._)("img",{src:n(t.name),alt:e.project.name},null,8,ee)])))),128))])])):((0,a.wg)(),(0,a.iD)("div",te,[(0,a._)("div",{class:"description",innerHTML:e.project.description},null,8,oe),(0,a._)("div",ne,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.project.details,(e=>((0,a.wg)(),(0,a.iD)("li",{key:e.id},(0,T.zw)(e.text),1)))),128))]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.project.images,(t=>((0,a.wg)(),(0,a.iD)("div",{class:"image-container",key:t.id},[(0,a._)("img",{src:n(t.name),alt:e.project.name},null,8,ae)])))),128)),e.project.video?((0,a.wg)(),(0,a.iD)("div",ie,[(0,a._)("iframe",{width:"100%",height:"100%",src:e.project.video,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,re)])):(0,a.kq)("",!0)]))}};const ce=(0,l.Z)(se,[["__scopeId","data-v-0b860945"]]);var le=ce;const de=e=>((0,a.dD)("data-v-40c4ca8c"),e=e(),(0,a.Cn)(),e),me=de((()=>(0,a._)("h1",null,"My projects list",-1))),pe=["href"],ue=(0,a.Uk)(" - "),ge={class:"setting"},he=["href"],fe={class:"languages-used"};var ye={__name:"MyProjects",setup(e){const t=S;return(e,o)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[me,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,i.SU)(t),(e=>((0,a.wg)(),(0,a.iD)("div",{class:"project-container",key:e.id},[(0,a._)("h2",null,[(0,a._)("a",{href:e.url,target:"_blank"},(0,T.zw)(e.name),9,pe),ue,(0,a._)("span",ge,(0,T.zw)(e.setting),1),e.gameUrl?((0,a.wg)(),(0,a.iD)("a",{key:0,class:"game-url",href:e.gameUrl,target:"_blank"},"play",8,he)):(0,a.kq)("",!0)]),(0,a._)("div",fe,(0,T.zw)(e.language),1),(0,a.Wm)((0,i.SU)(le),{project:e},null,8,["project"])])))),128))],64))}};const we=(0,l.Z)(ye,[["__scopeId","data-v-40c4ca8c"]]);var ve=we,be={__name:"HomePage",setup(e){return(e,t)=>((0,a.wg)(),(0,a.j4)((0,i.SU)(ve)))}};const ke=be;var _e=ke,je=o.p+"img/louise.90507cff.jpg";const xe=e=>((0,a.dD)("data-v-4faac8f4"),e=e(),(0,a.Cn)(),e),De=xe((()=>(0,a._)("h1",null,"About me",-1))),Ue={class:"container"},Ie=xe((()=>(0,a._)("div",{class:"pic-container"},[(0,a._)("img",{src:je,alt:"picture"})],-1))),He={class:"text-container"},Te=xe((()=>(0,a._)("p",null," Hi and welcome 💫 ",-1))),Se=xe((()=>(0,a._)("p",null,[(0,a.Uk)(" I’m Louise (she/her) and I have been interested in computer science ever since I took an extra credit class learning Component Pascal during my Bachelor of Arts’ degree. After obtaining my Japanese & English degree, I started learning software development in "),(0,a._)("a",{href:"https://42.fr/en/homepage/",target:"_blank"},"42 Paris"),(0,a.Uk)(" in the hope of one day creating video games that make people feel ✨feels✨ ")],-1))),Le=(0,a.Uk)(" I have since worked on several gaming "),Me=(0,a.Uk)("projects"),Ce=(0,a.Uk)(" both for school and fun, and also been employed as a full-stack developer during 3 years in a Swiss tech company. I’m currently looking for work in the gaming industry, don’t hesitate to take a look at my "),Pe=xe((()=>(0,a._)("a",{href:"../../static/Resume_Louise_Fatton.pdf",target:"_blank"},"resume",-1))),Oe=(0,a.Uk)(" and/or "),Ae=xe((()=>(0,a._)("a",{href:"mailto:louise.fatton@hotmail.fr"},"get in touch",-1))),Ye=(0,a.Uk)(". "),We=xe((()=>(0,a._)("p",null," The first games I played were on GameBoy and I think it’s probably why my favourite type of games is 2D (especially ones like Stardew Valley ♥), even if I enjoy the occasional Horizon or Assassin’s Creed game. The genre I’m least comfortable with is probably FPS, which is quite ironic as the project I’ve spent the most time on (6 months) was a game based on a mix of 93 Doom and Duke Nukem 3D. I still very much enjoyed developing it but unfortunately wasn't its most efficient tester. ",-1))),Je=xe((()=>(0,a._)("p",null," When I’m not developing or playing games, I enjoy hanging out with my friends, cats, and plants. I also like reading, drinking tea, and pole dancing. ",-1)));function Ge(e,t){const o=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)(a.HY,null,[De,(0,a._)("div",Ue,[Ie,(0,a._)("div",He,[Te,Se,(0,a._)("p",null,[Le,(0,a.Wm)(o,{to:"/"},{default:(0,a.w5)((()=>[Me])),_:1}),Ce,Pe,Oe,Ae,Ye]),We,Je])])],64)}const Ne={},ze=(0,l.Z)(Ne,[["render",Ge],["__scopeId","data-v-4faac8f4"]]);var Fe=ze;const qe=[{path:"/",component:_e},{path:"/AboutMe",component:Fe}],Ee=(0,H.p7)({history:(0,H.r5)(),routes:qe});var Ke=Ee,Ze=o(3494),Ve=o(7749),Re=o(8539),Be=o(4551);Ze.vI.add(Re.FU$,Be.M0L,Be.D9H,Be.PCs);const Qe=(0,n.ri)(I);Qe.use(Ke),Qe.component("font-awesome-icon",Ve.GN),Qe.mount("#app")},260:function(e,t,o){var n={"./CNI1.png":2909,"./doom-nukem-editor.png":2797,"./doom-nukem-engine.png":1081,"./fractol1.png":1517,"./fractol2.png":2761,"./fractol3.png":2475,"./fractol4.png":5135,"./moonwalker.png":9625,"./scop-lotus.png":1461,"./scop-monkey.png":7891,"./scop-woman.png":6737,"./trombi1.png":6230,"./trombi2.png":8201,"./trombi3.png":9282};function a(e){var t=i(e);return o(t)}function i(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=i,e.exports=a,a.id=260},2909:function(e,t,o){"use strict";e.exports=o.p+"img/CNI1.b813ce8b.png"},2797:function(e,t,o){"use strict";e.exports=o.p+"img/doom-nukem-editor.28068826.png"},1081:function(e,t,o){"use strict";e.exports=o.p+"img/doom-nukem-engine.1c06cec9.png"},1517:function(e,t,o){"use strict";e.exports=o.p+"img/fractol1.6b7178f7.png"},2761:function(e,t,o){"use strict";e.exports=o.p+"img/fractol2.55edcca9.png"},2475:function(e,t,o){"use strict";e.exports=o.p+"img/fractol3.821fa868.png"},5135:function(e,t,o){"use strict";e.exports=o.p+"img/fractol4.822a629f.png"},9625:function(e,t,o){"use strict";e.exports=o.p+"img/moonwalker.ff9eede6.png"},1461:function(e,t,o){"use strict";e.exports=o.p+"img/scop-lotus.c30c1518.png"},7891:function(e,t,o){"use strict";e.exports=o.p+"img/scop-monkey.ce54eb13.png"},6737:function(e,t,o){"use strict";e.exports=o.p+"img/scop-woman.bfa15cbb.png"},6230:function(e,t,o){"use strict";e.exports=o.p+"img/trombi1.a106cea5.png"},8201:function(e,t,o){"use strict";e.exports=o.p+"img/trombi2.81707f45.png"},9282:function(e,t,o){"use strict";e.exports=o.p+"img/trombi3.4dcbb971.png"}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(t,n,a,i){if(!n){var r=1/0;for(d=0;d<e.length;d++){n=e[d][0],a=e[d][1],i=e[d][2];for(var s=!0,c=0;c<n.length;c++)(!1&i||r>=i)&&Object.keys(o.O).every((function(e){return o.O[e](n[c])}))?n.splice(c--,1):(s=!1,i<r&&(r=i));if(s){e.splice(d--,1);var l=a();void 0!==l&&(t=l)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,a,i]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.p="/"}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,i,r=n[0],s=n[1],c=n[2],l=0;if(r.some((function(t){return 0!==e[t]}))){for(a in s)o.o(s,a)&&(o.m[a]=s[a]);if(c)var d=c(o)}for(t&&t(n);l<r.length;l++)i=r[l],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(d)},n=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(6202)}));n=o.O(n)})();
//# sourceMappingURL=app.1b5e68be.js.map