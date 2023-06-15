"use strict";(self.webpackChunkswizzin_website=self.webpackChunkswizzin_website||[]).push([[3067],{4137:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=i,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3284:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var n=r(7462),i=r(3366),a=(r(7294),r(4137)),o=["components"],l={id:"rutorrent",title:"ruTorrent",sidebar_label:"ruTorrent"},p=void 0,s={unversionedId:"applications/rutorrent",id:"applications/rutorrent",title:"ruTorrent",description:"A web-based GUI for the rTorrent client.",source:"@site/docs/applications/rutorrent.mdx",sourceDirName:"applications",slug:"/applications/rutorrent",permalink:"/applications/rutorrent",draft:!1,editUrl:"https://github.com/swizzin/docs.swizzin.ltd/edit/master/docs/applications/rutorrent.mdx",tags:[],version:"current",frontMatter:{id:"rutorrent",title:"ruTorrent",sidebar_label:"ruTorrent"},sidebar:"docs",previous:{title:"rTorrent",permalink:"/applications/rtorrent"},next:{title:"Transmission",permalink:"/applications/transmission"}},c={},u=[{value:"Extensions",id:"extensions",level:2},{value:"SSL Certificate",id:"ssl-certificate",level:2},{value:"Plugin Caching Feature",id:"plugin-caching-feature",level:2}],d={toc:u};function f(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A web-based GUI for the rTorrent client."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Most of the documentation for this is included in the ",(0,a.kt)("a",{parentName:"p",href:"rtorrent#rutorrent"},(0,a.kt)("inlineCode",{parentName:"a"},"rtorrent")," documentation"))),(0,a.kt)("h2",{id:"extensions"},"Extensions"),(0,a.kt)("p",null,"You can install additional themes and plugins using the ",(0,a.kt)("a",{parentName:"p",href:"/scripts/rtx"},(0,a.kt)("inlineCode",{parentName:"a"},"rtx")," helper script")),(0,a.kt)("h2",{id:"ssl-certificate"},"SSL Certificate"),(0,a.kt)("p",null,"ruTorrent requires a SSL Cerficate for the web browser to cache certain scripts. A self-signed certificate will impact page loading speeds. A free SSL certificate can be installed using letsencrypt. More details can be found here: ",(0,a.kt)("a",{parentName:"p",href:"https://swizzin.ltd/applications/letsencrypt"},"https://swizzin.ltd/applications/letsencrypt")),(0,a.kt)("h2",{id:"plugin-caching-feature"},"Plugin Caching Feature"),(0,a.kt)("p",null,"Users can enable Plugin Caching in the ruTorrent configuration file. When combined with a SSL Cerificate, the expected page loading speeds are 500ms. Even with thousands of torrents, the page should only take 1 second to load. The ",(0,a.kt)("strong",{parentName:"p"},"first")," page load will take longer."),(0,a.kt)("p",null,"However, this feature is experimental. It may experience web browser caching issues, when upgrading your ruTorrent version. It will be ",(0,a.kt)("strong",{parentName:"p"},"required")," to clear your web browser cache after every version upgrade. Please do ",(0,a.kt)("strong",{parentName:"p"},"NOT")," file bug reports about random error messages."),(0,a.kt)("p",null,"To enable this feature, edit ",(0,a.kt)("inlineCode",{parentName:"p"},"/srv/rutorrent/conf/config.php")," with your favourite text editor. This guide will use ",(0,a.kt)("inlineCode",{parentName:"p"},"nano")," as an example."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1:")," Type ",(0,a.kt)("inlineCode",{parentName:"li"},"nano /srv/rutorrent/conf/config.php")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2:")," Set ",(0,a.kt)("inlineCode",{parentName:"li"},"$cachedPluginLoading = true;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3:")," Set the cache expire to 30 days: ",(0,a.kt)("inlineCode",{parentName:"li"},"$pluginJSCacheExpire = 30*60*24;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4:")," Save your changes with ",(0,a.kt)("inlineCode",{parentName:"li"},"ctrl + x")," to exit then type ",(0,a.kt)("inlineCode",{parentName:"li"},"y")," and press ",(0,a.kt)("inlineCode",{parentName:"li"},"enter"),".")))}f.isMDXComponent=!0}}]);