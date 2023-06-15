"use strict";(self.webpackChunkswizzin_website=self.webpackChunkswizzin_website||[]).push([[8690,2185,1687],{4137:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return f}});var o=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=o.createContext({}),l=function(t){var e=o.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=l(t.components);return o.createElement(c.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,c=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=l(n),m=i,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return n?o.createElement(f,a(a({ref:e},u),{},{components:n})):o.createElement(f,a({ref:e},u))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,a=new Array(r);a[0]=m;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[p]="string"==typeof t?t:i,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2181:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var o=n(7462),i=n(3366),r=(n(7294),n(4137)),a=n(9353),s=n(1e3),c=["components"],l={id:"nextcloud",title:"Nextcloud",sidebar_label:"Nextcloud"},u=void 0,p={unversionedId:"applications/nextcloud",id:"applications/nextcloud",title:"Nextcloud",description:"Nextcloud is an open source, self-hosted file sync and share and communication app platform. Access & sync your files, contacts, calendars & communicate and collaborate across your devices. You decide what happens with your data, where it is and who can access it!",source:"@site/docs/applications/nextcloud.mdx",sourceDirName:"applications",slug:"/applications/nextcloud",permalink:"/applications/nextcloud",draft:!1,editUrl:"https://github.com/swizzin/docs.swizzin.ltd/edit/master/docs/applications/nextcloud.mdx",tags:[],version:"current",frontMatter:{id:"nextcloud",title:"Nextcloud",sidebar_label:"Nextcloud"},sidebar:"docs",previous:{title:"Resilio (bt)Sync",permalink:"/applications/btsync"},next:{title:"Rclone",permalink:"/applications/rclone"}},d={},m=[{value:"Installation",id:"installation",level:2},{value:"Troubleshooting &amp; Customisation",id:"troubleshooting--customisation",level:2},{value:"Can&#39;t access after changing domains?",id:"cant-access-after-changing-domains",level:3},{value:"Want to access your local filesystem inside of nextcloud?",id:"want-to-access-your-local-filesystem-inside-of-nextcloud",level:3}],f={toc:m};function h(t){var e=t.components,n=(0,i.Z)(t,c);return(0,r.kt)("wrapper",(0,o.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Nextcloud is an open source, self-hosted file sync and share and communication app platform. Access & sync your files, contacts, calendars & communicate and collaborate across your devices. You decide what happens with your data, where it is and who can access it!"),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"As simple as running the following command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"box install nextcloud\n")),(0,r.kt)("p",null,'As Nextcloud is essentially a PHP "Script" running on top of the Nginx + PHP stack, there are no service files available tto allow you to control the applications state.'),(0,r.kt)("h2",{id:"troubleshooting--customisation"},"Troubleshooting & Customisation"),(0,r.kt)(a.default,{mdxType:"Troubleshooting"}),(0,r.kt)("p",null,"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nextcloud.com/server/stable/admin_manual/contents.html"},"Nextcloud documentation")," in case the documentation does not cover your questions."),(0,r.kt)("p",null,"If you are running into 50x or 40x pages, please consult the troubleshooting guide for ",(0,r.kt)("inlineCode",{parentName:"p"},"nginx")," logs."),(0,r.kt)("h3",{id:"cant-access-after-changing-domains"},"Can't access after changing domains?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.nextcloud.com/server/stable/admin_manual/configuration_server/occ_command.html?highlight=trusted#setting-an-array-configuration-value"},"Change the trusted domains array values using the ",(0,r.kt)("inlineCode",{parentName:"a"},"occ")," command")),(0,r.kt)("h3",{id:"want-to-access-your-local-filesystem-inside-of-nextcloud"},"Want to access your local filesystem inside of nextcloud?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.nextcloud.com/server/stable/admin_manual/configuration_files/external_storage/local.html"},'Set up an "External Mount" to local storage')),(0,r.kt)(s.default,{mdxType:"MissingDocs"}))}h.isMDXComponent=!0},1e3:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var o=n(7462),i=n(3366),r=(n(7294),n(4137)),a=["components"],s={},c=void 0,l={unversionedId:"snippets/missingdocs",id:"snippets/missingdocs",title:"missingdocs",description:"The docs for this application are not properly written yet. If you need them, please let us know in the Discord and we'll take the time to make them for you.",source:"@site/docs/snippets/missingdocs.md",sourceDirName:"snippets",slug:"/snippets/missingdocs",permalink:"/snippets/missingdocs",draft:!1,editUrl:"https://github.com/swizzin/docs.swizzin.ltd/edit/master/docs/snippets/missingdocs.md",tags:[],version:"current",frontMatter:{}},u={},p=[],d={toc:p};function m(t){var e=t.components,n=(0,i.Z)(t,a);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Not a 404, but almost",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The docs for this application are not properly written yet. If you need them, please let us know in the ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/sKjs9UM"},"Discord")," and we'll take the time to make them for you.")))}m.isMDXComponent=!0},9353:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var o=n(7462),i=n(3366),r=(n(7294),n(4137)),a=["components"],s={},c=void 0,l={unversionedId:"snippets/troubleshooting",id:"snippets/troubleshooting",title:"troubleshooting",description:"You can always also try the general troubleshooting tips written in our guide. They might or might not apply, but asking these questions can often make you understand what is under the hood better and help you find what needs to be fixed. It's always worth a shot!",source:"@site/docs/snippets/troubleshooting.md",sourceDirName:"snippets",slug:"/snippets/troubleshooting",permalink:"/snippets/troubleshooting",draft:!1,editUrl:"https://github.com/swizzin/docs.swizzin.ltd/edit/master/docs/snippets/troubleshooting.md",tags:[],version:"current",frontMatter:{}},u={},p=[],d={toc:p};function m(t){var e=t.components,n=(0,i.Z)(t,a);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can always also try the ",(0,r.kt)("a",{parentName:"p",href:"/guides/troubleshooting"},"general troubleshooting tips written in our guide"),". They might or might not apply, but asking these questions can often make you understand what is under the hood better and help you find what needs to be fixed. It's always worth a shot!")))}m.isMDXComponent=!0}}]);