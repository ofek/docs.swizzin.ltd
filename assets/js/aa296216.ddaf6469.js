"use strict";(self.webpackChunkswizzin_website=self.webpackChunkswizzin_website||[]).push([[1066],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(n),h=a,m=c["".concat(l,".").concat(h)]||c[h]||p[h]||i;return n?r.createElement(m,s(s({ref:t},d),{},{components:n})):r.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},752:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(4137)),s=["components"],o={id:"faqs",title:"Frequently Asked Questions",sidebar_label:"Frequently Asked Questions"},l=void 0,u={unversionedId:"getting-started/faqs",id:"getting-started/faqs",title:"Frequently Asked Questions",description:"I literally just installed my machine and the dashboard says swizzin is using XXXGB. WHY?! That's simply absurd.",source:"@site/docs/getting-started/faqs.md",sourceDirName:"getting-started",slug:"/getting-started/faqs",permalink:"/getting-started/faqs",draft:!1,editUrl:"https://github.com/swizzin/docs.swizzin.ltd/edit/master/docs/getting-started/faqs.md",tags:[],version:"current",frontMatter:{id:"faqs",title:"Frequently Asked Questions",sidebar_label:"Frequently Asked Questions"},sidebar:"docs",previous:{title:"Getting started with box",permalink:"/getting-started/box-basics"},next:{title:"Applications Index",permalink:"/applications/"}},d={},c=[{value:"I literally just installed my machine and the dashboard says swizzin is using XXXGB. WHY?! That&#39;s simply absurd.",id:"i-literally-just-installed-my-machine-and-the-dashboard-says-swizzin-is-using-xxxgb-why-thats-simply-absurd",level:2},{value:"The dashboard states I have 0 out of 0 remaining disk space. What&#39;s going on?",id:"the-dashboard-states-i-have-0-out-of-0-remaining-disk-space-whats-going-on",level:2},{value:"RuTorrent says I have no space left on my disk",id:"rutorrent-says-i-have-no-space-left-on-my-disk",level:2},{value:"Application XYZ is not running! Everything is broken! What do I do?",id:"application-xyz-is-not-running-everything-is-broken-what-do-i-do",level:2},{value:"... Docker?",id:"-docker",level:2}],p={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"i-literally-just-installed-my-machine-and-the-dashboard-says-swizzin-is-using-xxxgb-why-thats-simply-absurd"},"I literally just installed my machine and the dashboard says swizzin is using XXXGB. WHY?! That's simply absurd."),(0,i.kt)("p",null,"swizzin hasn't used the space, don't worry. By default, when using the ext4 partition format, the disk reserves 5% of the space in the partition for the potential scenario whereby the disk runs out of space. If this happens, and your whole server is formatted under a root partition scheme (i.e. no separate /home directory), your server will still have some space reserved to perform essential tasks such as (but not limited to): system updates, logging and various other things, such as bash auto(tab)-completion (crazy, right?)."),(0,i.kt)("p",null,"Since the reservation is percentage based, the larger your partition, the greater the reserved space."),(0,i.kt)("p",null,"You can remove the reserved space on the partition ",(0,i.kt)("inlineCode",{parentName:"p"},"sda3")," with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo tune2fs -m 0 /dev/sda3\n")),(0,i.kt)("p",null,"You can also enter other non-zero values to customize the reserved space:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo tune2fs -m 1 /dev/sda3\n")),(0,i.kt)("p",null,"Will reserve 1% instead."),(0,i.kt)("p",null,"It's unlikely that the partition on ",(0,i.kt)("em",{parentName:"p"},"your")," server is sda3, so you'll need to use the command ",(0,i.kt)("inlineCode",{parentName:"p"},"lsblk")," to determine which partition exactly to modify."),(0,i.kt)("h2",{id:"the-dashboard-states-i-have-0-out-of-0-remaining-disk-space-whats-going-on"},"The dashboard states I have 0 out of 0 remaining disk space. What's going on?"),(0,i.kt)("p",null,"Did you install the ",(0,i.kt)("inlineCode",{parentName:"p"},"quota")," package? You need to use the ",(0,i.kt)("a",{parentName:"p",href:"/scripts/setdisk"},(0,i.kt)("inlineCode",{parentName:"a"},"setdisk"))," script to define the limits per user. The default quota is undefined, which is the source of this error."),(0,i.kt)("p",null,"If you just installed every package just because and you don't actually need quotas, feel free to remove the package with ",(0,i.kt)("inlineCode",{parentName:"p"},"box remove quota")),(0,i.kt)("h2",{id:"rutorrent-says-i-have-no-space-left-on-my-disk"},"RuTorrent says I have no space left on my disk"),(0,i.kt)("p",null,"Please see the chapter above."),(0,i.kt)("h2",{id:"application-xyz-is-not-running-everything-is-broken-what-do-i-do"},"Application XYZ is not running! Everything is broken! What do I do?"),(0,i.kt)("p",null,"Please consult the ",(0,i.kt)("a",{parentName:"p",href:"/guides/troubleshooting"},"Troubleshooting")," guide for more information."),(0,i.kt)("h2",{id:"-docker"},"... Docker?"),(0,i.kt)("p",null,"No."),(0,i.kt)("p",null,"You cannot run Swizzin in a docker. The way docker works does not mix well with the amount of different resources swizzin relies on that are present in a standard Debian/Ubuntu Installation."),(0,i.kt)("p",null,"Swizzin installs all applications in their non-containerized, bare-metal form. This for performance and maintainability reasons. "),(0,i.kt)("p",null," However you could away with a proper LXC container, using something like Proxmox or with systemd if you know your stuff. Many folks have reported success with those methods."))}h.isMDXComponent=!0}}]);