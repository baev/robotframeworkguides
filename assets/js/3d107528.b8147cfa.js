"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4151],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||s;return r?n.createElement(h,o(o({ref:t},d),{},{components:r})):n.createElement(h,o({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9642:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const s={},o="BDD (Behavior Driven Development)",i={unversionedId:"testcase_styles/bdd",id:"testcase_styles/bdd",title:"BDD (Behavior Driven Development)",description:"What is BDD?",source:"@site/docs/testcase_styles/bdd.mdx",sourceDirName:"testcase_styles",slug:"/testcase_styles/bdd",permalink:"/docs/testcase_styles/bdd",draft:!1,editUrl:"https://github.com/MarketSquare/robotframeworkguides/edit/main/website/docs/testcase_styles/bdd.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Reporting Test Results",permalink:"/docs/reporting_alternatives"},next:{title:"DataDriven Tests",permalink:"/docs/testcase_styles/datadriven"}},l={},c=[{value:"What is BDD?",id:"what-is-bdd",level:2}],d={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bdd-behavior-driven-development"},"BDD (Behavior Driven Development)"),(0,a.kt)("h2",{id:"what-is-bdd"},"What is BDD?"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Given-When-Then")," syntax is a commonly used structure for writing user stories and acceptance criteria in behavior-driven development (BDD). It is used to describe the desired behavior of a system in a clear, concise, and consistent manner."),(0,a.kt)("p",null,"The structure is broken down into three parts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Given"),": This section describes the initial state or context of the system. It sets the scene for the scenario being tested."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"When"),": This section describes the action or event that occurs. It specifies the trigger for the scenario being tested."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Then"),": This section describes the expected outcome or result of the scenario. It defines the acceptance criteria for the scenario being tested.")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-robotframework"},"Given a user is on the login page\nWhen the user enters their username and password and clicks the login button\nThen the user should be directed to the home page.\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-robotframework"},'*** Test Cases ***\nLogin With Admin\n    Given I am on the login page\n    When I login with username "admin" and password "admin"\n    Then I should see the welcome page\n\nLogin With Invalid User\n    Given I am on the login page\n    When I login with username "invalid" and password "invalid"\n    Then I should see the error message\n    And I should be able to login again\n')),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Let me run it"),(0,a.kt)("iframe",{src:"https://robotframework.org/embed/?code-gh-url=https://github.com/MarketSquare/robotframeworkguides/tree/main/code-examples/core/bdd-syntax",width:"100%",height:"600"})))}p.isMDXComponent=!0}}]);