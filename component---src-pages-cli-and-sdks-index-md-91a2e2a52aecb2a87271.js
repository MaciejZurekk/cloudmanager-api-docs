"use strict";(self.webpackChunkcloudmanager_api_docs=self.webpackChunkcloudmanager_api_docs||[]).push([[298],{19766:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return s},default:function(){return m}});var t=n(87462),o=n(63366),i=(n(15007),n(64983)),r=n(99536),d=["components"],s={},p={_frontmatter:s},l=r.Z;function m(e){var a=e.components,n=(0,o.Z)(e,d);return(0,i.mdx)(l,(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"cli-and-sdks"},"CLI and SDKs"),(0,i.mdx)("p",null,"In addition to direct HTTP usage of the Cloud Manager API, there are open source tools and libraries built on top of the API which can be used in integration projects. In addition to being directly usable, they are also good examples of how to use the API. More detailed information can be found on each respective project's website."),(0,i.mdx)("p",null,"Note that many of these require that an ",(0,i.mdx)("a",{parentName:"p",href:"../guides/getting-started/create-api-integration.md"},"API Integration Project")," to be created in the Adobe Developer Console before use."),(0,i.mdx)("h2",{id:"command-line-interface"},"Command Line Interface"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-cli-plugin-cloudmanager"},"Cloud Manager CLI")," is a plugin for the general-purpose ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-cli"},"Adobe I/O CLI")," (referred to as ",(0,i.mdx)("inlineCode",{parentName:"p"},"aio"),"). The CLI can be used in both direct usage and within shell scripts."),(0,i.mdx)("h3",{id:"example-usage"},"Example Usage"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"$ aio cloudmanager:list-programs\n")),(0,i.mdx)("h2",{id:"nodejs-sdk"},"Node.js SDK"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-lib-cloudmanager"},"Cloud Manager Node.js SDK")," is used inside the Command Line Interface, but is also independently usable for other Node.js applications, e.g. in ",(0,i.mdx)("a",{parentName:"p",href:"https://www.adobe.io/apis/experienceplatform/project-firefly.html"},"Firefly")," or ",(0,i.mdx)("a",{parentName:"p",href:"https://www.electronjs.org/"},"Electron")," applications."),(0,i.mdx)("h3",{id:"example-usage-1"},"Example Usage"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-node"},"const client = await sdk.init('orgId', 'x-api-key', 'valid auth token')\nconst programs = await client.listPrograms()\n")),(0,i.mdx)("h2",{id:"java-sdk"},"Java SDK"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-lib-java-cloudmanager"},"Cloud Manager Java SDK")," provides a Java interface on top of the Cloud Manager API and enables integration in JVM-based applications."),(0,i.mdx)("h3",{id:"example-usage-2"},"Example Usage"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},'CloudManagerApi api = new CloudManagerApiImpl("orgId", "x-api-key", "valid auth token");\nList<EmbeddedProgram> client.listPrograms();\n')),(0,i.mdx)("h2",{id:"github-actions"},"GitHub Actions"),(0,i.mdx)("p",null,"The Node.js SDK is wrapped into a ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-cloudmanager-create-execution-action"},"GitHub Action")," for cases when it is appropriate to create a pipeline execution as a step in a GitHub Action-based workflow."),(0,i.mdx)("h3",{id:"example-usage-3"},"Example Usage"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"- name: Create Execution\n  uses: adobe/aio-cloudmanager-create-execution-action@v1.0.5\n  with:\n    CLIENTID: ${{ secrets.CM_CLIENT_ID }}\n    CLIENTSECRET: ${{ secrets.CM_CLIENT_SECRET }}\n    TECHNICALACCOUNTID: ${{ secrets.CM_TA_EMAIL }}\n    IMSORGID: ${{ secrets.CM_ORG_ID }}\n    KEY: ${{ secrets.CM_PRIVATE_KEY }}\n    PIPELINEID: ${{ secrets.CM_PIPELINE_ID }}\n    PROGRAMID: ${{ secrets.CM_PROGRAM_ID }}\n")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-cli-and-sdks-index-md-91a2e2a52aecb2a87271.js.map