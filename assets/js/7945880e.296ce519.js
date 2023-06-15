"use strict";(self.webpackChunkswizzin_website=self.webpackChunkswizzin_website||[]).push([[4300,865],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},425:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(6010),i="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:n},t)}},3992:function(e,t,n){n.d(t,{Z:function(){return N}});var r=n(7462),a=n(7294),i=n(6010),o=n(2957),l=n(6550),s=n(5238),u=n(3609),c=n(2560);function p(e){return function(e){var t,n;return null!=(t=null==(n=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,i=(0,l.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,s._X)(o),(0,a.useCallback)((function(e){if(o){var t=new URLSearchParams(i.location.search);t.set(o,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[o,i])]}function b(e){var t,n,r,i,o=e.defaultValue,l=e.queryString,s=void 0!==l&&l,u=e.groupId,p=d(e),b=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:p})})),f=b[0],k=b[1],v=h({queryString:s,groupId:u}),y=v[0],g=v[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,c.Nk)(t),r=n[0],i=n[1],[r,(0,a.useCallback)((function(e){t&&i.set(e)}),[t,i])]),N=w[0],q=w[1],T=function(){var e=null!=y?y:N;return m({value:e,tabValues:p})?e:null}();return(0,a.useLayoutEffect)((function(){T&&k(T)}),[T]),{selectedValue:f,selectValue:(0,a.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);k(e),g(e),q(e)}),[g,q,p]),tabValues:p}}var f=n(1048),k="tabList__CuJ",v="tabItem_LNqP";function y(e){var t=e.className,n=e.block,l=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],p=(0,o.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==l&&(p(t),s(r))},m=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;n=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var i,o=c.indexOf(e.currentTarget)-1;n=null!=(i=c[o])?i:c[c.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:d},o,{className:(0,i.Z)("tabs__item",v,null==o?void 0:o.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function g(e){var t=e.lazy,n=e.children,r=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=i.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function w(e){var t=b(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",k)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(g,(0,r.Z)({},e,t)))}function N(e){var t=(0,f.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},485:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(4137)),o=n(9124),l=["components"],s={id:"qbittorrent",title:"qBittorrent",sidebar_label:"qBittorrent"},u=void 0,c={unversionedId:"applications/qbittorrent",id:"applications/qbittorrent",title:"qBittorrent",description:"The qBittorrent project aims to provide an open-source software alternative to \xb5Torrent. It is written in C++ and uses Boost, Qt toolkit, and libtorrent-rasterbar library.",source:"@site/docs/applications/qbittorrent.mdx",sourceDirName:"applications",slug:"/applications/qbittorrent",permalink:"/applications/qbittorrent",draft:!1,editUrl:"https://github.com/swizzin/docs.swizzin.ltd/edit/master/docs/applications/qbittorrent.mdx",tags:[],version:"current",frontMatter:{id:"qbittorrent",title:"qBittorrent",sidebar_label:"qBittorrent"},sidebar:"docs",previous:{title:"Flood",permalink:"/applications/flood"},next:{title:"rTorrent",permalink:"/applications/rtorrent"}},p={},d=[{value:"Initial Setup",id:"initial-setup",level:2},{value:"Install Errata",id:"install-errata",level:3},{value:"qBittorrent Version",id:"qbittorrent-version",level:3},{value:"Unattended variables",id:"unattended-variables",level:4},{value:"Libtorrent Patching",id:"libtorrent-patching",level:4},{value:"Specifying Libtorrent Version",id:"specifying-libtorrent-version",level:4},{value:"Upgrading and Recompiling",id:"upgrading-and-recompiling",level:2},{value:"How to Access",id:"how-to-access",level:2},{value:"Web UI",id:"web-ui",level:3},{value:"Service Management",id:"service-management",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Default Download Location",id:"default-download-location",level:3},{value:"Web Download Location",id:"web-download-location",level:3},{value:"Connect to other clients",id:"connect-to-other-clients",level:2},{value:"Transdroid",id:"transdroid",level:3},{value:"Other Local Clients",id:"other-local-clients",level:3},{value:"3rd Party Utilities:",id:"3rd-party-utilities",level:2}],m={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The qBittorrent project aims to provide an open-source software alternative to \xb5Torrent. It is written in C++ and uses Boost, Qt toolkit, and libtorrent-rasterbar library."),(0,i.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,i.kt)("p",null,"Installing qBittorrent is easy. Simply issue the following command from SSH:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"sudo box install qbittorrent\n")),(0,i.kt)("p",null,"This command will configure qBittorrent and the associated web interface for use with your user."),(0,i.kt)("p",null,"After installation, if there will be two 2 new packages installed: ",(0,i.kt)("inlineCode",{parentName:"p"},"libtorrent-rasterbar"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"qbittorrent-nox")," (aka qBittorrent no X). The package name for ",(0,i.kt)("inlineCode",{parentName:"p"},"libtorrent")," does not interfere with any apt packages and should not issue any upgrade warnings when upgrading packages with ",(0,i.kt)("inlineCode",{parentName:"p"},"apt-get"),"."),(0,i.kt)("h3",{id:"install-errata"},"Install Errata"),(0,i.kt)("p",null,"If you were an early adopter of qBittorrent (i.e. before October 8th 2020), then a few extra packages got installed which also started background services if you chose to compile qBittorent."),(0,i.kt)("p",null,'qBittorrent will no longer install "recommended" packages, but out of respect for your system, these recommended packages/services will not be automatically removed as they may be required packages in certain circumstances. If you have the following packages on your system they should be safe to stop their services and/or remove them as well if you had them installed through the qBit build pipeline. ',(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"PLEASE DOUBLE CHECK THESE YOURSELF AND IF IN DOUBT DISABLE SERVICES BEFORE REMOVING THEM!!!!"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"avahi-daemon (Bonjour for linux, aka, LAN Device Discovery)"),(0,i.kt)("li",{parentName:"ul"},"wpasupplicant (Used for configuring wifi access points)"),(0,i.kt)("li",{parentName:"ul"},"modemmanager (Used for configuring modems)")),(0,i.kt)("p",null,"The services can be stopped with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo systemctl stop wpa_supplicant ModemManager avahi-daemon\n")),(0,i.kt)("p",null,"If you are satisfied they are not required, these packages can be purged or disabled:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo apt purge avahi-daemon wpasupplicant modemmanager\nsudo apt autoremove\n")),(0,i.kt)("p",null,"OR"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo systemctl disable --now wpa_supplicant ModemManager avahi-daemon\n")),(0,i.kt)("h3",{id:"qbittorrent-version"},"qBittorrent Version"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Repo"),": performs an ",(0,i.kt)("inlineCode",{parentName:"li"},"apt-get install qbittorrent-nox")," and pulls whatever is available from your operating system's repository. To check versions, you can use the ",(0,i.kt)("a",{parentName:"li",href:"https://www.debian.org/distrib/packages"},"Debian Package Tracker")," or the ",(0,i.kt)("a",{parentName:"li",href:"https://packages.ubuntu.com/"},"Ubuntu Package Tracker"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"qBittorrent 4.","*"),": Downloads the latest 4.* release from qBittorrent's github repo and uses ",(0,i.kt)("inlineCode",{parentName:"li"},"fpm")," to package it as a .deb for easy installation and removal with ",(0,i.kt)("inlineCode",{parentName:"li"},"dpkg"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Version availability on Debian Stretch or Ubuntu Xenial is limited due to outdated QT/SSL dependencies.")))),(0,i.kt)("h4",{id:"unattended-variables"},"Unattended variables"),(0,i.kt)("p",null,"When installing qBittorrent, you may specify the variable ",(0,i.kt)("inlineCode",{parentName:"p"},"QBITTORRENT_VERSION")," to bypass the version popup. Accepted values are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"repo")," -- Will install qBittorrent from your OS repository"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"4.1.*(.*)")," -- To compile any release from 4.1. For example: ",(0,i.kt)("inlineCode",{parentName:"li"},"4.1.9.1")," will compile 4.1.9.1 directly"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"4.2.*(.*)")," -- To compile any release from 4.2. For example: ",(0,i.kt)("inlineCode",{parentName:"li"},"4.2.5")," will compile 4.2.5 directly"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"4.3.*(.*)")," -- To compile any release from 4.3. For example: ",(0,i.kt)("inlineCode",{parentName:"li"},"4.3.3")," will compile 4.3.3 directly"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"latest")," -- Compiles the most recent version of qBittorrent")),(0,i.kt)("h4",{id:"libtorrent-patching"},"Libtorrent Patching"),(0,i.kt)("p",null,"If you would like to patch the settings pack of libtorrent (or any other aspect for that matter), the libtorrent compile will check if ",(0,i.kt)("inlineCode",{parentName:"p"},"/root/libtorrent-{RC_1_1,RC_1_2}.patch")," exists. If it does, then the installer will automatically patch the libtorrent source with this patch before libtorrent is compiled. This may be of note since the ltconfig plugin does not exist for qBittorent, thus if you are interested in changing certain settings pack settings for qBittorrent settings which are not currently exposed through the WebUI, then this is the only way to change those settings without manually compiling libtorrent."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"RC_1_1")," is used when compiling libtorrent 1.1.* (e.g. Deluge 1.3.15 and qBittorrent 4.1.","*",")"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"RC_1_2")," is used when compiling libtorrent 1.2.* (e.g. Deluge 2.0 and qBittorrent >= 4.2)"),(0,i.kt)("p",null,"You must supply your own patch!"),(0,i.kt)("h4",{id:"specifying-libtorrent-version"},"Specifying Libtorrent Version"),(0,i.kt)("p",null,"If you would like to swap the version of libtorrent that the client is compiled with, you can export a variable to control the branch or tag being used. ",(0,i.kt)("inlineCode",{parentName:"p"},"export libtorrent_github_tag=RC_1_2")," if you want to checkout the development branch instead of the most recent tagged release."),(0,i.kt)("h2",{id:"upgrading-and-recompiling"},"Upgrading and Recompiling"),(0,i.kt)("p",null,"If you decide you'd like to change the version of qBittorrent/libtorrent you've installed, or you would like to rebuild your current versions against the most recent source, you can recompile and upgrade qBittorrent at any time with the command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"sudo box upgrade qbittorrent\n")),(0,i.kt)("p",null,"This command will start the qBittorrent upgrade script. The installer will ask which version of qBittorrent you'd like to install and will then work on installing it. A second check will run to determine whether or not you are able to skip libtorrent compilation and prompt you of your choice."),(0,i.kt)("h2",{id:"how-to-access"},"How to Access"),(0,i.kt)("h3",{id:"web-ui"},"Web UI"),(0,i.kt)("p",null,"The web UI is significantly easier to access, which is why many prefer it. You can access qBittorrent from ",(0,i.kt)("inlineCode",{parentName:"p"},"https://yourhost.ltd/qbittorrent"),"."),(0,i.kt)("p",null,"If you are not currently logged in, you will first receive a basic authentication dialog from the webserver. Once authenticated, you'll receive a secondary prompt from qBittorrent. This password is the same as the one you just entered."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This second password authentication layer can be disabled in the qBittorrent WebUI settings (",(0,i.kt)("inlineCode",{parentName:"p"},"Bypass auth for localhost"),"). However, security implications exist if you are sharing your server with other users. If you disable localhost auth for the web UI, other users on the server can access the qBittorrent port directly from CLI -- so please only turn this option on if you trust the users on your server!")),(0,i.kt)("h2",{id:"service-management"},"Service Management"),(0,i.kt)("p",null,"These systemd service can be found here:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/etc/systemd/system/qbittorrent@.service\n")),(0,i.kt)("p",null,"Multi-user is enabled, so in order to manipulate the service, you'll also need to specify a username."),(0,i.kt)(o.default,{service:"qbittorrent@<username>",mdxType:"SystemdTabs"}),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Feel free to edit the majority of the settings here, but do not change the WebUI port if you expect the nginx proxy to continue working!"),(0,i.kt)("h3",{id:"default-download-location"},"Default Download Location"),(0,i.kt)("p",null,"Files downloaded by qBittorrent will be placed in ",(0,i.kt)("inlineCode",{parentName:"p"},"~/torrents/qbittorrent")," by default. You can change this behavior by change the preference: ",(0,i.kt)("inlineCode",{parentName:"p"},"Download to")," in the qBittorrent download preferences."),(0,i.kt)("h3",{id:"web-download-location"},"Web Download Location"),(0,i.kt)("p",null,"Similarly, any files in the default download directory (",(0,i.kt)("inlineCode",{parentName:"p"},"~/torrents/qbittorrent"),") will be available for browsing via the web server at the location: ",(0,i.kt)("inlineCode",{parentName:"p"},"https://<yourhostname.ltd>/qbittorrent.downloads")),(0,i.kt)("h2",{id:"connect-to-other-clients"},"Connect to other clients"),(0,i.kt)("p",null,"The following variables can be used as a general guide to help you find information you'll need to know in order to connect other clients to qBittorrent."),(0,i.kt)("h3",{id:"transdroid"},"Transdroid"),(0,i.kt)("p",null,"Use these settings when connecting your transdroid client to your qBittorrent instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"IP or Hostname: <yourhostname.ltd>\nUser name: <your username>\nPassword: <your password>\nAdvanced Settings:\nPort Number: 443\nFolder: /qbittorrent\nUse SSL: On\nAccept all SSL certificates: yes (optional with a valid ssl certificate)\n")),(0,i.kt)("h3",{id:"other-local-clients"},"Other Local Clients"),(0,i.kt)("p",null,"Settings for connecting another local client (i.e. Sonarr), to your qBittorrent instance:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Host: ",(0,i.kt)("inlineCode",{parentName:"li"},"127.0.0.1")),(0,i.kt)("li",{parentName:"ul"},"Port: ",(0,i.kt)("inlineCode",{parentName:"li"},"Found in WebUI section of qBittorrent")),(0,i.kt)("li",{parentName:"ul"},"Username: ",(0,i.kt)("inlineCode",{parentName:"li"},"Your username")),(0,i.kt)("li",{parentName:"ul"},"Password: ",(0,i.kt)("inlineCode",{parentName:"li"},"Your password"))),(0,i.kt)("h2",{id:"3rd-party-utilities"},"3rd Party Utilities:"),(0,i.kt)("p",null,"API Handlers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://pypi.org/project/qbittorrent-api/"},"qbittorrent-api")," (pip installable)")),(0,i.kt)("p",null,"AutoDL helpers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ckcr4lyf/qbit-race"},"qbit-race")," (with reannounce support)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ludviglundgren/qbittorrent-cli"},"qbittorrent-cli")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gitlab.com/AlexKM/qbit-tools"},"qbit-tools"))),(0,i.kt)("p",null,"Torrent Handlers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://pypi.org/project/autoremove-torrents/"},"autoremove-torrents")," (Also works with Deluge and Transmission)")))}h.isMDXComponent=!0},9124:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return h}});var r=n(7462),a=n(3366),i=(n(7294),n(4137)),o=n(3992),l=n(425),s=n(9319),u=["components"],c={},p=void 0,d={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",sourceDirName:"snippets",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",draft:!1,editUrl:"https://github.com/swizzin/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",tags:[],version:"current",frontMatter:{}},m={},h=[],b={toc:h};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"code"},(0,i.kt)(o.Z,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"status",mdxType:"TabItem"},(0,i.kt)(s.Z,{children:"sudo systemctl status "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,i.kt)(l.Z,{value:"start",mdxType:"TabItem"},(0,i.kt)(s.Z,{children:"sudo systemctl start "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,i.kt)(l.Z,{value:"stop",mdxType:"TabItem"},(0,i.kt)(s.Z,{children:"sudo systemctl stop "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,i.kt)(l.Z,{value:"restart",mdxType:"TabItem"},(0,i.kt)(s.Z,{children:"sudo systemctl restart "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,i.kt)(l.Z,{value:"enable",mdxType:"TabItem"},(0,i.kt)(s.Z,{children:"sudo systemctl enable "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,i.kt)(l.Z,{value:"disable",mdxType:"TabItem"},(0,i.kt)(s.Z,{children:"sudo systemctl disable "+n.service,className:"bash",mdxType:"CodeBlock"})))))}f.isMDXComponent=!0}}]);