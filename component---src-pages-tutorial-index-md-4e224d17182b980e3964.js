"use strict";(self.webpackChunkcloudmanager_api_docs=self.webpackChunkcloudmanager_api_docs||[]).push([[614],{73463:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return d},default:function(){return s}});var a=n(87462),i=n(63366),o=(n(15007),n(64983)),l=n(99536),r=["components"],d={},m={_frontmatter:d},p=l.Z;function s(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.mdx)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"tutorial-introduction"},"Tutorial Introduction"),(0,o.mdx)("p",null,"The Cloud Manager API Tutorial walks through the process of creating an integration between Cloud Manager and either Microsoft Teams or Slack."),(0,o.mdx)("p",null,"The files used in this tutorial can all be found in GitHub in the repository at ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/AdobeDocs/cloudmanager-api-tutorial"},"https://github.com/AdobeDocs/cloudmanager-api-tutorial"),". The result of each tutorial step is in a separate file:"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Step"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"),(0,o.mdx)("th",{parentName:"tr",align:null},"File"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"1"),(0,o.mdx)("td",{parentName:"tr",align:null},"Basic Webhook Setup"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"step1.js"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"2"),(0,o.mdx)("td",{parentName:"tr",align:null},"Webhook Signature Validation"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"step2.js"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"3"),(0,o.mdx)("td",{parentName:"tr",align:null},"Looking for Specific Event Type"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"step3.js"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"4"),(0,o.mdx)("td",{parentName:"tr",align:null},"Getting an Access Token"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"step4.js"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"5"),(0,o.mdx)("td",{parentName:"tr",align:null},"Getting Execution Data"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"step5.js"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"6"),(0,o.mdx)("td",{parentName:"tr",align:null},"Getting Program Data"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"step6.js"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"7"),(0,o.mdx)("td",{parentName:"tr",align:null},"Notifying Slack"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"step7-slack.js"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"7"),(0,o.mdx)("td",{parentName:"tr",align:null},"Notifying Microsoft Teams"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"step7-teams.js"))))),(0,o.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.mdx)("p",null,"Before starting the tutorial, you must first set up an project in the ",(0,o.mdx)("a",{href:"https://developer.adobe.com/console/projects",target:"_new"},"Adobe Developer Console"),". First, follow the instructions on the ",(0,o.mdx)("a",{parentName:"p",href:"/cloudmanager-api-docs/guides/getting-started/create-api-integration/"},"Creating an API Integration")," to create an API integration. You'll add the Event Provider integration in a later step."),(0,o.mdx)("h2",{id:"project-initialization"},"Project Initialization"),(0,o.mdx)("h3",{id:"configuration-variables"},"Configuration Variables"),(0,o.mdx)("p",null,"This tutorial does involved coding, so you're going to want to open up your favorite IDE now. Create a new project in your IDE with an empty folder. In this project, create a file named ",(0,o.mdx)("inlineCode",{parentName:"p"},".env"),". This file is going to hold various configuration variables which should be kept out of the code."),(0,o.mdx)("p",null,"Populate this file with the following content:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"PORT=4000\nORGANIZATION_ID=\nTECHNICAL_ACCOUNT_EMAIL=\nAPI_KEY=\nCLIENT_SECRET=\nPRIVATE_KEY=\n")),(0,o.mdx)("p",null,"Let's go through each of these and set them."),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("inlineCode",{parentName:"li"},"PORT")," -- this is the port on which the webhook will listen. 4000 is a good default value, unless something else is using this port."),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("inlineCode",{parentName:"li"},"ORGANIZATION_ID")," -- this can be found in the Client Credentials section of the Adobe Developer Console."),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("inlineCode",{parentName:"li"},"TECHNICAL_ACCOUNT_EMAIL")," -- this can be found in the Client Credentials section of the Adobe Developer Console."),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("inlineCode",{parentName:"li"},"API_KEY")," -- this can be found in the Client Credentials section of the Adobe Developer Console."),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("inlineCode",{parentName:"li"},"CLIENT_SECRET")," -- this can be found in the Client Credentials section of the Adobe Developer Console. Note that you have to click the ",(0,o.mdx)("inlineCode",{parentName:"li"},"Retrieve client secret")," button to reveal this."),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("inlineCode",{parentName:"li"},"PRIVATE_KEY")," -- this is the content of the ",(0,o.mdx)("inlineCode",{parentName:"li"},"private.key")," file generated by OpenSSL ",(0,o.mdx)("strong",{parentName:"li"},"without")," any line breaks, i.e. all on one line.")),(0,o.mdx)("h3",{id:"nodejs-installation"},"Node.js Installation"),(0,o.mdx)("p",null,"This tutorial is written in JavaScript using ",(0,o.mdx)("a",{href:"https://nodejs.org/",target:"_new"},"Node.js"),". If you don't have Node.js installed, now is the time to do so. You'll also need npm, the Node Package Manager, as this tutorial uses a number of third-party dependencies, distributed as Node packages. Most of the time, npm is installed automatically when you install Node.js."),(0,o.mdx)("h3",{id:"nodejs-initialization"},"Node.js Initialization"),(0,o.mdx)("p",null,"In order to use the Node packages dependened upon, you'll need to create a basic ",(0,o.mdx)("inlineCode",{parentName:"p"},"package.json")," file. To do this, open up a Terminal/Shell window in the project directory and run"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"npm init -y\n")),(0,o.mdx)("p",null,"from the Terminal or Shell."),(0,o.mdx)("h3",{id:"next-step"},"Next Step"),(0,o.mdx)("p",null,"With all that done, you're ready to start the actual tutorial. Continue to ",(0,o.mdx)("a",{parentName:"p",href:"1-a-basic-webhook.md"},"Step 1"),"."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tutorial-index-md-4e224d17182b980e3964.js.map