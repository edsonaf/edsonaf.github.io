"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[567],{2567:function(e,n,s){s.r(n),s.d(n,{default:function(){return G}});var r=s(2791),i=s(6498),a=s(184);function t(e){return(0,a.jsxs)("div",{className:"heading-container",children:[(0,a.jsx)("div",{className:"screen-heading",children:(0,a.jsx)("span",{children:e.title})}),e.subHeading?(0,a.jsx)("div",{className:"screen-sub-heading",children:(0,a.jsx)("span",{children:e.subHeading})}):(0,a.jsx)("div",{}),(0,a.jsxs)("div",{className:"heading-seperator",children:[(0,a.jsx)("div",{className:"seperator-line"}),(0,a.jsx)("div",{className:"seperator-blob",children:(0,a.jsx)("div",{})})]})]})}var c,l,o=s(7762),d=s(3144),u=s(5671),m=function(e){if(!e)return-1;for(var n=0;n<F.length;n++)if(F[n].screen_name===e)return n;return-1},h=function(e){return e.replace(" ","")},g=s(8203),A=(0,d.Z)((function e(){var n=this;(0,u.Z)(this,e),this.scrollToHireMe=function(){n.scrollToNext("ContactMe")},this.scrollToNext=function(e){console.log("scrollTo ",e);var n,s=(0,o.Z)(F);try{for(s.s();!(n=s.n()).done;){var r=n.value,i=document.getElementById(r.screen_name);if(e===h(r.screen_name.replace(/(\w)(\w*)/g,(function(e,n,s){return n.toUpperCase()+s.toLowerCase()})))){if(!i)return;i.scrollIntoView({behavior:"smooth"});break}}}catch(a){s.e(a)}finally{s.f()}},this.scrollToHome=function(){var e=document.getElementById("Home");e&&e.scrollIntoView({behavior:"smooth"})},this.isElementInView=function(e,n){var s=e.getBoundingClientRect(),r=s.top,i=s.bottom,a=r<window.innerHeight&&i>=0,t=r>=0&&i<=window.innerHeight;switch(n){case"partial":return a;case"complete":return t;default:return!1}},this.checkCurrentScreenUnderViewport=function(s){if(s&&!(Object.keys(s).length<1)){var r,i=(0,o.Z)(F);try{for(i.s();!(r=i.n()).done;){var a=r.value,t=document.getElementById(a.screen_name);if(t){var c=n.isElementInView(t,"complete"),l=n.isElementInView(t,"partial");if(c||l){if(l&&!a.alreadyRendered){e.currentScreenFadeIn.next({fadeInScreen:a.screen_name}),a.alreadyRendered=!0;break}if(c){e.currentScreenBroadcaster.next({screenInView:a.screen_name});break}}}}}catch(d){i.e(d)}finally{i.f()}}},window.addEventListener("scroll",this.checkCurrentScreenUnderViewport)}));c=A,A.scrollHandler=new c,A.currentScreenBroadcaster=new g.x,A.currentScreenFadeIn=new g.x;var x=(0,d.Z)((function e(){(0,u.Z)(this,e),this.fadeInScreen=function(e){var n=document.getElementById(e);e&&n&&(n.style.opacity="5",n.style.transform="translateY(1px)")}}));l=x,x.animations=new l;var p=s(5758),f=s(1880),v=s(6310),j=s(6610),b="https://github.com/edsonaf",N="https://www.instagram.com/alexfbo/",w="https://www.linkedin.com/in/edson-sint-jago-64168286/",B=s(1087);function y(){var e=(0,r.useRef)();return(0,r.useEffect)((function(){(0,j.S)(e.current,{showCursor:!0,backDelay:1500,backSpeed:60,strings:["Full Stack .NET Developer","Enthusiastic Dev","Copy-paste expert"]})}),[]),(0,a.jsx)("div",{className:"profile-container",children:(0,a.jsxs)("div",{className:"profile-parent",children:[(0,a.jsxs)("div",{className:"profile-details",children:[(0,a.jsx)("div",{className:"colz",children:(0,a.jsxs)("div",{className:"colz-icon",children:[(0,a.jsx)("a",{href:b,target:"_blank",rel:"noreferrer noopener",children:(0,a.jsx)(p.Z,{className:"icon"})}),(0,a.jsx)("a",{href:w,target:"_blank",rel:"noreferrer noopener",children:(0,a.jsx)(v.Z,{className:"icon"})}),(0,a.jsx)("a",{href:N,target:"_blank",rel:"noreferrer noopener",children:(0,a.jsx)(f.Z,{className:"icon"})})]})}),(0,a.jsx)("div",{className:"profile-details-name",children:(0,a.jsxs)("span",{className:"primary-text",children:[" ","Hello, I'm ",(0,a.jsx)("span",{className:"highlighted-text",children:"Edson"})]})}),(0,a.jsx)("div",{className:"profile-details-role",children:(0,a.jsxs)("span",{className:"primary-text",children:[(0,a.jsxs)("h1",{children:[" ",(0,a.jsx)("span",{ref:e})]}),(0,a.jsx)("span",{className:"profile-role-tagline",children:"Knack for building applications with front and back end operations."})]})}),(0,a.jsxs)("div",{className:"profile-options",children:[(0,a.jsx)("button",{className:"btn primary-btn",onClick:function(){return A.scrollHandler.scrollToNext("AboutMe")},children:"Learn more"}),(0,a.jsx)(B.rU,{to:"/main",children:(0,a.jsx)("button",{className:"btn highlighted-btn",children:"Enter"})})]})]}),(0,a.jsx)("div",{className:"profile-picture",children:(0,a.jsx)("div",{className:"profile-picture-background"})})]})})}var S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AAAAB+CAMAAADyQ/wTAAAAolBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8ELnaCAAAANXRSTlMA9CPeCPsE2McMwa7SF6GF6PIzE/jjdlzMuj0uKB9B72w4l4wQtBpoTkbsp2JKepJXnH9xUgP+CQ8AAAxTSURBVHja7N3bTpNBFIDR3QqC+BMxBq1GRJRQSBuO2e//akAIGQ6lBMLscLHWA8ztl5nMzI7DAADK5edxAADFMrcuPgUAUCqvrO8FAFApr41mOwEA1MkbH6YBAJTJWxvOoQGgTDYnBwEAlMg7tqfuQwNAibxn/SgAgP7yvtHMvxwA0F8+tHu+HwBAX/nYcLoSAEBPucjGnwAAOsqFVs9+BwDQTT7h6xevggGgm3zS2l+vggGgk1xiOP0YAEAHudRPH3MAQA+53OrMjAYAeHv5nNE/F6IBoCzAze5/31MCQFmAm63zbwEAFAW42f4uwQBQFuBmMCwYAOoC3EzmEgwAZQFuJlNzkgCgLMDNYBcMAHUBbiY/JBgAygLcTOYOogGgLMDN2nwzAOhrpdkZL7L365HxIpttIRuo9yNfZzjeDwBe7JK9+8xWFAiiAKyAgOQgAiIoIiIKCGLvf2vTOjNncjz6HuF+Oyj/XIvuruLvuAfrIXcfWv2jRP5MEr8Q2J8xFz9gf0YRv0jlT/SPKvdhZd3Z3B1PYRnejzoSwISwSwyoBAD4VcaGVGBRR6peUlftThIpxXyYfUS6YPYwNSlDvNOo3ZKqaQE5LSSgFalI5i4EMCGsjggGgLGjiaSu1+vV7XZrq6pKaGzJPiVQmylFBoEWsqEVKbQymZZIK81oxbTwORL5HQKYMnfWBABgDGjQ2qrKBIEVRVGx3S53u10qSdLpdLrn7IKMES2c1i9Ikrzb6dttHUVxEISqilB+eQBTiyaaAAAM0p5h4rJ027a6h22aeorimOY4o/avmaagKGlKE7lq27KMGXwqfVEAUwu/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";function D(){return(0,a.jsx)("div",{className:"footer-container",children:(0,a.jsx)("div",{className:"footer-parent",children:(0,a.jsx)("img",{src:S,alt:"no"})})})}var I=s(9439),M=s(8008),E=s(9823),k=s(9223);var H=function(e){var n=function(e){return"undefined"!==typeof window&&window.matchMedia(e).matches},s=(0,r.useState)(n(e)),i=(0,I.Z)(s,2),a=i[0],t=i[1];function c(){t(n(e))}return(0,r.useEffect)((function(){var n=window.matchMedia(e);return c(),n.addListener?n.addListener(c):n.addEventListener("change",c),function(){n.removeListener?n.removeListener(c):n.removeEventListener("change",c)}}),[e]),a};function L(){var e=H("(prefers-color-scheme: dark)",void 0,(function(e){return t(e)})),n=(0,r.useState)(e),s=(0,I.Z)(n,2),i=s[0],t=s[1];return(0,r.useEffect)((function(){i?document.body.classList.add("dark"):document.body.classList.remove("dark")}),[i]),(0,a.jsx)(k.Z,{onClick:function(){return console.log("Dark mode is turned off...")},size:"large",className:"dark-mode-container",children:(0,a.jsx)("img",{src:"/favicon.svg",alt:"logo missing"})})}function C(){var e=(0,r.useState)(0),n=(0,I.Z)(e,2),s=n[0],i=n[1],t=(0,r.useState)(!1),c=(0,I.Z)(t,2),l=c[0],o=c[1],d=A.currentScreenBroadcaster.subscribe((function(e){if(e&&e.screenInView)m(e.screenInView)})),u=function(e){var n="header-option ";return e<F.length-1&&(n+="header-option-seperator "),s===e&&(n+="selected-header-option "),n},h=function(e,n){var s=document.getElementById(n.screen_name);s&&(s.scrollIntoView({behavior:"smooth"}),i(e),o(!1))};return(0,r.useEffect)((function(){return function(){d.unsubscribe()}}),[d]),(0,a.jsx)("div",{className:"header-container",children:(0,a.jsxs)("div",{className:"header-parent",children:[(0,a.jsxs)("div",{className:"header-logo",children:[(0,a.jsx)(L,{}),(0,a.jsx)("h1",{children:"Saint Software"})]}),(0,a.jsx)("div",{className:l?"header-options show-hamburger-options":"header-options",children:F.map((function(e,n){return(0,a.jsx)("div",{className:u(n),onClick:function(){return h(n,e)},children:(0,a.jsx)("span",{children:e.screen_name})},e.screen_name)}))}),(0,a.jsx)("div",{className:"header-hamburger",onClick:function(){return o(!l)},children:l?(0,a.jsx)(E.Z,{}):(0,a.jsx)(M.Z,{})})]})})}var T=s.p+"static/media/education.10cfa28a40119ebd70cf4fb33fd5934e.svg";var Z=s.p+"static/media/work-history.a566475dedb99dea4bb8b9115798b2a3.svg";var V=s.p+"static/media/programming-skills.d19983a9bee884277ffa4156796bcc0c.svg";var Y=s.p+"static/media/interests.809890a3e4fb0938f61bb8a6c34a6940.svg",F=[{screen_name:"Home",component:function(e){return(0,a.jsxs)("div",{className:"home-container",id:e.id||"",children:[(0,a.jsx)(C,{}),(0,a.jsx)(y,{}),(0,a.jsx)(D,{})]})}},{screen_name:"About me",component:function(e){var n=A.currentScreenFadeIn.subscribe((function(n){n.fadeInScreen===e.id&&x.animations.fadeInScreen(e.id)})),s={description:(new Date).getFullYear()-2015+"+ years experienced .NET Developer; from Windows Forms to Windows Presentation Foundation; \nASP.Net backend + Angular frontend in the day; Currently excited about Artificial Intelligence. Constantly working on improving the basics",highlights:{heading:"A Few Highlights:",bullets:["Full stack windows, web and mobile development","Interactive and rich user interfaces as per design","Building REST API","Pirate of the Caribbean \u2620\ufe0f"]}};return(0,r.useEffect)((function(){return function(){n.unsubscribe()}}),[n]),(0,a.jsx)("div",{className:"about-me-container screen-container fade-in",id:e.id||"",children:(0,a.jsxs)("div",{className:"about-me-parent",children:[(0,a.jsx)(t,{title:"About Me",subHeading:"Get to know me"}),(0,a.jsxs)("div",{className:"about-me-card",children:[(0,a.jsx)("div",{className:"about-me-profile"}),(0,a.jsxs)("div",{className:"about-me-details",children:[(0,a.jsx)("span",{className:"about-me-description",children:s.description}),(0,a.jsxs)("div",{className:"about-me-highlights",children:[(0,a.jsx)("div",{className:"highlight-heading",children:(0,a.jsx)("span",{children:s.highlights.heading})}),s.highlights.bullets.map((function(e,n){return(0,a.jsxs)("div",{className:"highlight",children:[(0,a.jsx)("div",{className:"highlight-blob"}),(0,a.jsx)("span",{children:e})]},n)}))]}),(0,a.jsx)("div",{className:"about-me-options",children:(0,a.jsx)(i.Z,{title:"Currently not available",className:"btn",children:(0,a.jsx)("button",{onClick:function(){console.log("I am currently unavailable unless we are talking about a minimum of $10000 per day/month (it depends)")},className:"primary-btn",children:"Hire me"})})})]})]})]})})}},{screen_name:"Resume",component:function(e){var n=(0,r.useState)(0),s=(0,I.Z)(n,2),i=s[0],c=s[1],l=(0,r.useState)({}),o=(0,I.Z)(l,2),d=o[0],u=o[1],m=function(e){return(0,a.jsxs)("div",{className:"resume-heading",children:[(0,a.jsxs)("div",{className:"resume-main-heading",children:[(0,a.jsx)("div",{className:"heading-bullet"}),(0,a.jsx)("span",{children:e.heading?e.heading:""}),e.fromDate&&e.toDate?(0,a.jsx)("div",{className:"heading-date",children:e.fromDate+"-"+e.toDate}):(0,a.jsx)("div",{className:"heading-date",children:e.toDate})]}),(0,a.jsx)("div",{className:"resume-sub-heading",children:(0,a.jsx)("span",{children:e.subHeading?e.subHeading:""})}),(0,a.jsx)("div",{className:"resume-heading-description",children:(0,a.jsx)("span",{children:e.description?e.description:""})})]})},h=[{label:"Work History",logoSrc:Z},{label:"Education",logoSrc:T},{label:"Programming Skills",logoSrc:V},{label:"Interests",logoSrc:Y}],g=[(0,a.jsxs)("div",{className:"resume-screen-container",children:[(0,a.jsxs)("div",{className:"experience-container",children:[(0,a.jsx)(m,{subHeading:"YANGA Sportswater, Breda",heading:"External Software Developer",fromDate:"2023",toDate:"present"}),(0,a.jsxs)("div",{className:"experience-description",children:[(0,a.jsx)("span",{className:"resume-description-text",children:".NET - ASP.NET - WinUI - C#; Angular - Typescript; SQL; Scrum - Agile; Azure DevOps; Git; JSON;"}),(0,a.jsx)("br",{})]})]}),(0,a.jsxs)("div",{className:"experience-container",children:[(0,a.jsx)(m,{subHeading:"Canon Production Printing, Venlo",heading:"External Software Developer",fromDate:"2019",toDate:"2023"}),(0,a.jsxs)("div",{className:"experience-description",children:[(0,a.jsx)("span",{className:"resume-description-text",children:".NET - ASP.NET - C#; Regex; Angular - Typescript; T4 scripts; Agile; Azure DevOps; Git; TDD; BDD; Gherkin; Specflow; JSON; XML;"}),(0,a.jsx)("br",{})]})]}),(0,a.jsxs)("div",{className:"experience-container",children:[(0,a.jsx)(m,{subHeading:"Ellips, Eindhoven",heading:"Full Stack .NET Developer",fromDate:"2015",toDate:"2019"}),(0,a.jsxs)("div",{className:"experience-description",children:[(0,a.jsx)("span",{className:"resume-description-text",children:".NET - ASP.NET - WPF - MVVM - C#; T4 scripts; Scrum - Agile; SVN - TBD - Git; TDD; BDD; Gherkin; Specflow; JSON;"}),(0,a.jsx)("br",{})]})]})]},"work-experience"),(0,a.jsxs)("div",{className:"resume-screen-container",children:[(0,a.jsx)(m,{heading:"Introduction to Artificial Inteligence",subHeading:"LinkedIn",toDate:"November 2023"}),(0,a.jsx)(m,{heading:"Sales Training",subHeading:"Exellior B.V.",toDate:"February 2021"}),(0,a.jsx)(m,{heading:"Bachelor of Science Information Technology",subHeading:"Fontys University of Applied Sciences, Eindhoven",fromDate:"2011",toDate:"2015"}),(0,a.jsx)(m,{heading:"High School",subHeading:"Maria Immaculate Lyceum, Willemstad",fromDate:"2004",toDate:"2010"})]},"education"),(0,a.jsx)("div",{className:"resume-screen-container programming-skills-container",children:[{skill:"C#",ratingPercentage:95},{skill:"React / Angular / Typescript",ratingPercentage:75},{skill:"CSS",ratingPercentage:80},{skill:"HTML",ratingPercentage:80},{skill:"Python",ratingPercentage:60}].map((function(e,n){return(0,a.jsxs)("div",{className:"skill-parent",children:[(0,a.jsx)("div",{className:"heading-bullet"}),(0,a.jsx)("span",{className:"skill",children:e.skill}),(0,a.jsx)("div",{className:"skill-percentage",children:(0,a.jsx)("div",{style:{width:e.ratingPercentage+"%"},className:"active-percentage-bar"})})]},n)}))},"programming-skills"),(0,a.jsxs)("div",{className:"resume-screen-container",children:[(0,a.jsx)(m,{heading:"Reading",description:"Crime; Mystery; Philosophy; Science Fiction"}),(0,a.jsx)(m,{heading:"Gaming",description:"Action; Adventure; MOBA; RPG;"}),(0,a.jsx)(m,{heading:"Music",description:""}),(0,a.jsx)(m,{heading:"Programming",description:""})]},"interests")];return(0,a.jsx)("div",{className:"resume-container screen-container",id:e.id||"",children:(0,a.jsxs)("div",{className:"resume-content",children:[(0,a.jsx)(t,{title:"Resume",subHeading:"My formal bio details"}),(0,a.jsxs)("div",{className:"resume-card",children:[(0,a.jsx)("div",{className:"resume-bullets",children:(0,a.jsxs)("div",{className:"bullet-container",children:[(0,a.jsx)("div",{className:"bullet-icons"}),(0,a.jsx)("div",{className:"bullets",children:h.map((function(e,n){return(0,a.jsxs)("div",{onClick:function(){return function(e){u({style:{transform:"translateY("+360*e*-1+"px)"}}),c(e)}(n)},className:n===i?"bullet selected-bullet":"bullet",children:[(0,a.jsx)("img",{className:"bullet-logo",src:e.logoSrc,alt:"B"}),(0,a.jsx)("span",{className:"bullet-label",children:e.label})]},n)}))})]})}),(0,a.jsx)("div",{className:"resume-bullet-details",children:(0,a.jsx)("div",{style:d.style,className:"resume-details-carousal",children:g.map((function(e){return e}))})})]})]})})}}];function G(){window.dataLayer.push({event:"pageview"});return(0,a.jsx)("div",{className:"portfolio-container",children:F.map((function(e){return e.component?(0,a.jsx)(e.component,{screenName:e.screen_name,id:e.screen_name},e.screen_name):(0,a.jsx)("div",{},e.screen_name)}))})}}}]);
//# sourceMappingURL=567.87578fca.chunk.js.map