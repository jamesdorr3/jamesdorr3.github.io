(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,a,t){e.exports=t(28)},23:function(e,a,t){},28:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(9),l=t.n(o),i=t(3);t(23),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=t(10),c=t(11),m=t(16),d=t(12),u=t(17),p=t(13),h=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(o)))).makeLis=function(){return t.props.routes.map(function(e){return r.a.createElement(p.NavHashLink,{smooth:!0,key:e,to:"/#".concat(e.toLowerCase()),className:window.location.hash==="#".concat(e.toLowerCase())?"active":null},r.a.createElement("span",null,e))})},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",function(e){console.log("scroll")})}},{key:"render",value:function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("div",null),this.makeLis(),r.a.createElement("div",{className:"underbar"}))}}]),a}(n.Component);l.a.render(r.a.createElement(i.BrowserRouter,null,r.a.createElement(h,{routes:["Portfolio","Resume","About","Contact"]}),r.a.createElement("div",{className:"body"},r.a.createElement(function(){return r.a.createElement("div",{className:"portfolio",id:"portfolio"},r.a.createElement("h1",{className:"title"},"Portfolio"),r.a.createElement("div",{className:"sideScroll"},[{name:"HAM",video:"https://www.youtube.com/embed/UA1FnsuSpDs",frontend:"https://github.com/jamesdorr3/ham",backend:"https://github.com/jamesdorr3/backend-ham",demo:"https://jamesdorr3.github.io/ham/",description:"A macronutrient tracker to be edited easily and show in-depth information on one page",bullets:["Ruby on Rails, RESTful routes, and PostgreSQL to simplify backend relationships and API calls","React-Redux JavaScript libraries for transferring data among components","USDA API to provide abundant nutritional information and choices","React-Beautiful-DND for responsive drag-and-drop"]},{name:"Gravity Maze",video:"https://www.youtube.com/embed/Fs88M2W-uJE",frontend:"https://github.com/jamesdorr3/gravity-maze",backend:"https://github.com/jamesdorr3/gravity-maze/tree/master/app",description:"A functional concept JavaScript game with shifting gravity",bullets:["JavaScript to respond intuitively to input","P5 to quicken the coding of visualizations and movement","Ruby on Rails and PostgreSQL to simplify backend relationships"]},{name:"tIPA",video:"https://www.youtube.com/embed/2gDHJHum9W0",frontend:"https://github.com/jamesdorr3/tIPA",backend:null,demo:"https://jamesdorr3.github.io/tIPA",description:"A frontend app made to more easily type the International Phonetic Alphabet",bullets:["Created with React.js to manage 78 possible keys","Vanilla CSS to help me continue to learn","Currently supports common symbols for English, Spanish, and Mandarin"]},{name:"Tournament App",video:null,demo:null,frontend:"https://github.com/jamesdorr3/dorrnament_app",backend:"https://github.com/jamesdorr3/dorrnament_app",description:"A Ruby on Rails site for simplifying beach volleyball tournament planning",bullets:["SQLite Database for persisting data","Ruby on Rails frontend and backend to display data and handle the database","RESTful routes to make the MVC easy to follow"]}].map(function(e){return r.a.createElement("div",{className:"portfolioItem",key:e.name},r.a.createElement("div",{className:"portfolioTopRow"},r.a.createElement("h2",null,e.name),r.a.createElement("div",{className:"links"},e.backend?r.a.createElement("div",{className:"linkCard"},r.a.createElement("a",{href:e.backend,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("img",{src:"backend-icon.png",className:"logo",alt:"database icon to show users they can click to read my backend code"})),r.a.createElement("p",null,"Backend")))):null,e.frontend?r.a.createElement("div",{className:"linkCard"},r.a.createElement("a",{href:e.frontend,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",{className:"logo"},"</>")),r.a.createElement("p",null,"Frontend")))):null,e.demo?r.a.createElement("div",{className:"linkCard"},r.a.createElement("a",{href:e.demo,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("img",{src:"game-icon2.png",className:"logo",alt:"game icon to show users they can try my app"})),r.a.createElement("p",null,"Try it!"),r.a.createElement("p",null,"(slow host)")))):null)),r.a.createElement("div",{className:"portfolioItemLower"},e.video?r.a.createElement("div",{className:"iframe-container"},r.a.createElement("iframe",{src:e.video,title:e.name,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen",allowFullScreen:!0,className:"video"})):null,r.a.createElement("div",{className:"portfolioItemDescription"},r.a.createElement("p",null,e.description),r.a.createElement("ul",null,e.bullets.map(function(e){return r.a.createElement("li",{key:e},e)})))))})))},null),r.a.createElement(function(){return r.a.createElement("div",{className:"resume",id:"resume"},r.a.createElement("div",{className:"transition"}),r.a.createElement("h1",null,"Resume"),r.a.createElement("a",{href:"https://docs.google.com/document/d/1RewthW1E0GDMyI-s2LZtrcwM_YZ52mFUoaVn2okxfrk/export?format=pdf"},"Download as PDF"),r.a.createElement("div",{className:"iframe-holder"},r.a.createElement("iframe",{src:"https://docs.google.com/document/d/e/2PACX-1vQa7qX9DEBuRUwGJUEtETr0-3_AUGpdQZvz6-igUzlLOWmXTIIaykSPIcxKIxaYhWjGF_9s8xRxG1gk/pub?embedded=true",title:"resume"})),r.a.createElement("div",{className:"transition"}))},null),r.a.createElement(function(){return r.a.createElement("div",{className:"about",id:"about"},r.a.createElement("h1",null,"About"),r.a.createElement("h3",null,"Professional"),r.a.createElement("div",{className:"parallax coach"}),r.a.createElement("p",null,"I have always loved languages. After graduating from Washington State University with my MA in Education: Psychology, I worked as a Fitness Coordinator and volleyball coach for one year, and then started a career teaching English as a foreign language."),r.a.createElement("p",null,"This took me all over China and Mexico, with short stops in many other locations while working remotely. I love traveling and learning the languages, cuisines, and cultures of the world. I respect each culture deeply, which has helped me learn to speak Spanish and Mandarin Chinese."),r.a.createElement("p",null,"There is not a large demand for English as a second language teachers within the United States, so I started looking for other career possibilities that allowed me to stay in my home country. One friend suggested coding because of my attention to detail. I started taking some online courses, and I found out ",r.a.createElement("strong",null,"I love computer languages as much as human languages.")," I researched coding bootcamps, chose Flatiron because their free content was well written and informative, applied, and attended their tuition-deferred Brooklyn campus called Access Labs."),r.a.createElement("p",null,r.a.createElement("strong",null,"I'm so happy I decided to learn to code!")),r.a.createElement("p",null,"I enjoy every aspect of coding. If I had to pick my favorite parts, they'd be problem solving, creating something from just an idea, the excitement of seeing your cool features work, and joining a profession that is community-oriented."),r.a.createElement("p",null,"As a recent graduate of Flatiron, I am currently looking for a company that will utilize my hard work, dedication, quick learning, and attention to detail."),r.a.createElement("div",{className:"parallax chongqing"}),r.a.createElement("h3",null,"Personal Life"),r.a.createElement("p",null,"Both of my parents were volleyball coaches, and I continue to love the sport. I played outside hitter and libero at Limestone College, and I was the volunteer coach with Washington State University for three seasons under Jen Greeny."),r.a.createElement("p",null,"In my spare time, I like to learn - languages, linguistics, cooking, geography, current world affairs, coding, and more information about topics involved in my coding projects. For example, I tried to learn more about nutrition while creating my Flatiron capstone project, the macronutrient tracker ",r.a.createElement("i",null,r.a.createElement("a",{href:"https://hamon.herokuapp.com"},"HAM")),". And, of course, I enjoy coding in my spare time!"),r.a.createElement("div",{className:"parallax volleyball"}),r.a.createElement("p",null,"Going into coding was the right choice for me. During my life, I hope to have a positive impact on those around me through volunteering, solving community problems (now with code, too!), maintaining and increasing my involvement in causes I support, and hopefully through the local economy via an administrative role, local government, or both."),r.a.createElement("p",null,"Words to live by -",r.a.createElement("br",null),"If you're not weird, you're boring!"))},null),r.a.createElement(function(){return r.a.createElement("div",{className:"contact",id:"contact"},r.a.createElement("h1",null,"Contact"),r.a.createElement("p",null,"James Edward Dorr III"),r.a.createElement("p",null,r.a.createElement("a",{href:"mailto:jamesdorr3@gmail.com"},"jamesdorr3@gmail.com")),r.a.createElement("div",{className:"socialMedia"},r.a.createElement("a",{href:"https://github.com/jamesdorr3",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{alt:"logo for GitHub",src:"GitHub-Mark-Light-120px-plus.png",className:"logo"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/jamesdorr3/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{alt:"logo for LinkedIn",src:"LI-In-Bug.png",className:"logo"})),r.a.createElement("a",{href:"https://medium.com/@jamesdorr3",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{alt:"logo for Medium",src:"medium-icon.png",className:"logo"}))))},null)),r.a.createElement(function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{innerref:"fullNameContainer",className:"fullNameContainer"},r.a.createElement("div",{className:"full name"},r.a.createElement("span",{className:"first name"},r.a.createElement("span",{className:"firstLetter"},"J"),r.a.createElement("span",{className:"rest"},"ames")),r.a.createElement("span",{className:"middle name"},r.a.createElement("span",{className:"firstLetter"},"E"),r.a.createElement("span",{className:"rest"},"dward")),r.a.createElement("span",{className:"last name"},r.a.createElement("span",{className:"firstLetter"},"D"),r.a.createElement("span",{className:"rest"},"orr")),r.a.createElement("span",{className:"suffix name"},r.a.createElement("span",{className:"firstLetter"},"I"),r.a.createElement("span",{className:"rest"},"II")))),r.a.createElement("div",{className:"footerContainer",innerref:"footerContainer"},r.a.createElement("ul",{className:"footer"},["React","Ruby on Rails","Redux","JavaScript"].map(function(e,a){return r.a.createElement("li",{key:e,className:"li"+a},e)}))))},null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.d1c859b6.chunk.js.map