"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2573],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),k=p(r),c=a,d=k["".concat(s,".").concat(c)]||k[c]||u[c]||n;return r?o.createElement(d,i(i({ref:t},m),{},{components:r})):o.createElement(d,i({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[k]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<n;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9356:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var o=r(7462),a=(r(7294),r(3905));const n={sidebar_position:1,sidebar_label:"Docker Images",title:"Docker Images for Robot Framework"},i=void 0,l={unversionedId:"using_rf_in_ci_systems/docker",id:"using_rf_in_ci_systems/docker",title:"Docker Images for Robot Framework",description:"Docker",source:"@site/docs/using_rf_in_ci_systems/docker.md",sourceDirName:"using_rf_in_ci_systems",slug:"/using_rf_in_ci_systems/docker",permalink:"/docs/using_rf_in_ci_systems/docker",draft:!1,editUrl:"https://github.com/MarketSquare/robotframeworkguides/edit/main/website/docs/using_rf_in_ci_systems/docker.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Docker Images",title:"Docker Images for Robot Framework"},sidebar:"tutorialSidebar",previous:{title:"Style Guide",permalink:"/docs/style_guide"},next:{title:"Play With Docker",permalink:"/docs/using_rf_in_ci_systems/playground"}},s={},p=[{value:"Docker",id:"docker",level:2},{value:"Installation",id:"installation",level:3},{value:"Docker Desktop",id:"docker-desktop",level:4},{value:"Alternatives to Docker Desktop",id:"alternatives-to-docker-desktop",level:4},{value:"Linux",id:"linux",level:5},{value:"Windows",id:"windows",level:5},{value:"Creating a Robot Framework Dockerimage",id:"creating-a-robot-framework-dockerimage",level:2},{value:"Examples",id:"examples",level:3},{value:"Simple Python Dockerimage with Robot Framework",id:"simple-python-dockerimage-with-robot-framework",level:4},{value:"Dockerimage with Robot Framework and Browser Library",id:"dockerimage-with-robot-framework-and-browser-library",level:4},{value:"Popular Docker Images for Robot Framework",id:"popular-docker-images-for-robot-framework",level:2},{value:"marketsquare/robotframework-browser",id:"marketsquarerobotframework-browser",level:3},{value:"ppodgorsek/robot-framework",id:"ppodgorsekrobot-framework",level:3}],m={toc:p};function k(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"docker"},"Docker"),(0,a.kt)("p",null,"Check out the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-started/overview/"},"official Docker Documentation")," for more information about Docker."),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("p",null,"If you want to build Dockerimages and run containers on your local machine, you need to install Docker. You can find the installation instructions for your operating system on the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/install/"},"Docker website"),"."),(0,a.kt)("h4",{id:"docker-desktop"},"Docker Desktop"),(0,a.kt)("p",null,"Docker Desktop is an easy-to-install application for your Mac or Windows environment that enables you to start coding and containerizing in minutes. Docker Desktop includes everything you need to build, run, and share containerized applications directly from your machine. "),(0,a.kt)("p",null,"However, while Docker itself is open source, Docker Desktop is not. Docker Desktop is a ",(0,a.kt)("strong",{parentName:"p"},"commercial product")," \ud83d\udcb0 developed by Docker, Inc. that includes additional features and functionality beyond the open source Docker Engine.  "),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Commercial use of Docker Desktop in larger enterprises (more than 250 employees OR more than $10 million USD in annual revenue) and in government entities requires a ",(0,a.kt)("strong",{parentName:"p"},"paid subscription"),".")),(0,a.kt)("h4",{id:"alternatives-to-docker-desktop"},"Alternatives to Docker Desktop"),(0,a.kt)("h5",{id:"linux"},"Linux"),(0,a.kt)("p",null,"You can install Docker on your Linux machine without using Docker Desktop.\nPlease find more information on the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"here"),"."),(0,a.kt)("p",null,"Make sure you follow the instructions for the ",(0,a.kt)("inlineCode",{parentName:"p"},"Server")," installation.",(0,a.kt)("br",{parentName:"p"}),"\n","For example the installation instructions for ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/ubuntu/"},"Ubuntu")),(0,a.kt)("h5",{id:"windows"},"Windows"),(0,a.kt)("p",null,"You can install Docker on your Windows machine also ",(0,a.kt)("strong",{parentName:"p"},"without using Docker Desktop"),". "),(0,a.kt)("p",null,"For that, you need to   "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Set up a virtual machine using the WSL 2 (Windows Subsystem for Linux)"),(0,a.kt)("li",{parentName:"ul"},"Install Docker Engine in the WSL 2 VM (following the instructions for Linux)")),(0,a.kt)("p",null,"You can find more information in the guide ",(0,a.kt)("a",{parentName:"p",href:"https://www.paulsblog.dev/how-to-install-docker-without-docker-desktop-on-windows/"},"How To Install Docker Without Docker Desktop On Windows"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://www.paulsblog.dev/how-to-install-docker-without-docker-desktop-on-windows/"},"guide")," will explain how to"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Enable the WSL 2 feature on Windows"),(0,a.kt)("li",{parentName:"ul"},"Install a Linux distribution from the Microsoft Store"),(0,a.kt)("li",{parentName:"ul"},"Install Docker Engine in the WSL 2 VM"),(0,a.kt)("li",{parentName:"ul"},"Configure Docker to start on boot"),(0,a.kt)("li",{parentName:"ul"},"Install Docker Compose"),(0,a.kt)("li",{parentName:"ul"},"Integrate Docker commands into your PowerShell ")),(0,a.kt)("h2",{id:"creating-a-robot-framework-dockerimage"},"Creating a Robot Framework Dockerimage"),(0,a.kt)("p",null,"You can choose from a lot of different base images to build your own Docker image.",(0,a.kt)("br",{parentName:"p"}),"\n","One possibility is to use one of the the official ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/python"},"python")," images.  "),(0,a.kt)("p",null,"As they already contain ",(0,a.kt)("inlineCode",{parentName:"p"},"python")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"pip"),", you can install ",(0,a.kt)("inlineCode",{parentName:"p"},"robotframework")," and other libraries using pip easily.",(0,a.kt)("br",{parentName:"p"}),"\n","There are different tags for different python versions and operating systems."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Dockerfile",metastring:'title="Dockerfile"',title:'"Dockerfile"'},"FROM python:3\nRUN pip install robotframework\n")),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("p",null,"To ",(0,a.kt)("strong",{parentName:"p"},"build")," the examples below, you can use the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t my-robotframework-dockerimage .\n")),(0,a.kt)("p",null,"When you ",(0,a.kt)("strong",{parentName:"p"},"run")," the container, it makes sense to mount the folder containing your tests into the container.",(0,a.kt)("br",{parentName:"p"}),"\n","You can do that using the ",(0,a.kt)("inlineCode",{parentName:"p"},"-v")," option.\nLet's assume the folder is located at ",(0,a.kt)("inlineCode",{parentName:"p"},"/home/user/my-project/")," on your local machine.  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Folder structure"',title:'"Folder','structure"':!0},"my-project/\n\u251c\u2500\u2500 Dockerfile\n\u251c\u2500\u2500 tests/\n\u2502   \u2514\u2500\u2500 testsuite.robot\n\u2514\u2500\u2500 results/\n")),(0,a.kt)("p",null,"The following command will run the container and mount the folders ",(0,a.kt)("inlineCode",{parentName:"p"},"my-project/")," into the container.",(0,a.kt)("br",{parentName:"p"}),"\n","The tests in the folder ",(0,a.kt)("inlineCode",{parentName:"p"},"my-project/tests")," will be executed and the results will be written into the folder ",(0,a.kt)("inlineCode",{parentName:"p"},"my-project/results"),"."),(0,a.kt)("p",null,"That way, you can easily run your tests in a container and have the results on your local machine."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'docker run -it --rm -v /home/user/my-project:/my-project my-robotframework-dockerimage bash -c "robot --outputdir /project/results  /my-project/tests"\n')),(0,a.kt)("h4",{id:"simple-python-dockerimage-with-robot-framework"},"Simple Python Dockerimage with Robot Framework"),(0,a.kt)("p",null,"A very simple python image, which only adds robotframework  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Dockerfile",metastring:'title="Dockerfile"',title:'"Dockerfile"'},"FROM python:3\nRUN pip install robotframework\n")),(0,a.kt)("p",null,"You can also add your python dependencies into a file ",(0,a.kt)("inlineCode",{parentName:"p"},"requirements.txt")," and then install them using ",(0,a.kt)("inlineCode",{parentName:"p"},"pip install -r requirements.txt"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Folder structure"',title:'"Folder','structure"':!0},".\n\u251c\u2500\u2500 Dockerfile\n\u2514\u2500\u2500 requirements.txt\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="requirements.txt"',title:'"requirements.txt"'},"robotframework\nrobotframework-requests\nrobotframework-datadriver\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Dockerfile",metastring:'title="Dockerfile"',title:'"Dockerfile"'},"FROM python:3\n\nCOPY requirements.txt ./\nRUN pip install --no-cache-dir -r requirements.txt\n")),(0,a.kt)("h4",{id:"dockerimage-with-robot-framework-and-browser-library"},"Dockerimage with Robot Framework and Browser Library"),(0,a.kt)("p",null,"An image containing robotframework and robotframework-browser.",(0,a.kt)("br",{parentName:"p"}),"\n","It is based on ",(0,a.kt)("inlineCode",{parentName:"p"},"playwright")," baseimage, as it contains necessary dependencies like nodejs and npm."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Dockerfile",metastring:'title="Dockerfile"',title:'"Dockerfile"'},'FROM mcr.microsoft.com/playwright:focal\nUSER root\nRUN apt-get update\nRUN apt-get install -y python3-pip\nUSER pwuser\nRUN pip3 install --user robotframework\nRUN pip3 install --user robotframework-browser\nRUN ~/.local/bin/rfbrowser init\nENV NODE_PATH=/usr/lib/node_modules\nENV PATH="/home/pwuser/.local/bin:${PATH}"\n')),(0,a.kt)("h2",{id:"popular-docker-images-for-robot-framework"},"Popular Docker Images for Robot Framework"),(0,a.kt)("h3",{id:"marketsquarerobotframework-browser"},"marketsquare/robotframework-browser"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/MarketSquare/robotframework-browser/tree/main/docker"},"https://github.com/MarketSquare/robotframework-browser/tree/main/docker")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull marketsquare/robotframework-browser\n")),(0,a.kt)("p",null,"The image comes with latest robotframework-browser and robotframework, and with pre-initialized browsers and other dependencies for running headful tests in the container."),(0,a.kt)("p",null,"Example usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'docker run --rm -v $(pwd)/atest/test/:/test --ipc=host --user pwuser --security-opt seccomp=seccomp_profile.json marketsquare/robotframework-browser:latest bash -c "robot --outputdir /test/output /test"\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"docker run -v")," is used to mount the directory containing tests on the supervising machine. In this example robot output will also be output inside the test directory"),(0,a.kt)("h3",{id:"ppodgorsekrobot-framework"},"ppodgorsek/robot-framework"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ppodgorsek/docker-robot-framework"},"https://github.com/ppodgorsek/docker-robot-framework")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Check the list of included packages"),"The image contains latest robot-framework and a huge collection of helpful libraries.",(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/robotframework/robotframework"},"Robot Framework")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/MarketSquare/robotframework-browser"},"Robot Framework Browser Library")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/franz-see/Robotframework-Database-Library"},"Robot Framework DatabaseLibrary")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Snooz82/robotframework-datadriver"},"Robot Framework Datadriver")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/testautomation/DateTimeTZ"},"Robot Framework DateTimeTZ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/guykisel/robotframework-faker"},"Robot Framework Faker")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kowalpy/Robot-Framework-FTP-Library"},"Robot Framework FTPLibrary")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pypi.org/project/robotframework-imaplibrary2/"},"Robot Framework IMAPLibrary 2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/mkorpela/pabot"},"Robot Framework Pabot")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/bulkan/robotframework-requests"},"Robot Framework Requests")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/robotframework/SeleniumLibrary"},"Robot Framework SeleniumLibrary")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/robotframework/SSHLibrary"},"Robot Framework SSHLibrary")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/mozilla-services/axe-selenium-python"},"Axe Selenium Library")),(0,a.kt)("li",{parentName:"ul"},"Firefox"),(0,a.kt)("li",{parentName:"ul"},"Chromium"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pypi.org/project/awscli/"},"Amazon AWS CLI")))),(0,a.kt)("p",null,"This container can be run using the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"    docker run \\\n        -v <local path to the reports' folder>:/opt/robotframework/reports:Z \\\n        -v <local path to the test suites' folder>:/opt/robotframework/tests:Z \\\n        ppodgorsek/robot-framework:<version>\n")))}k.isMDXComponent=!0}}]);