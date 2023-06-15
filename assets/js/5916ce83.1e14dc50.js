"use strict";(self.webpackChunkswizzin_website=self.webpackChunkswizzin_website||[]).push([[2015,865,1687],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},425:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(6010),i="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},3992:function(e,t,n){n.d(t,{Z:function(){return T}});var a=n(7462),r=n(7294),i=n(6010),o=n(2957),l=n(6550),s=n(5238),u=n(3609),c=n(2560);function d(e){return function(e){var t,n;return null!=(t=null==(n=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,i=(0,l.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(i.location.search);t.set(o,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[o,i])]}function h(e){var t,n,a,i,o=e.defaultValue,l=e.queryString,s=void 0!==l&&l,u=e.groupId,d=p(e),h=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:d})})),g=h[0],b=h[1],y=f({queryString:s,groupId:u}),v=y[0],k=y[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,c.Nk)(t),a=n[0],i=n[1],[a,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),T=w[0],x=w[1],N=function(){var e=null!=v?v:T;return m({value:e,tabValues:d})?e:null}();return(0,r.useLayoutEffect)((function(){N&&b(N)}),[N]),{selectedValue:g,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);b(e),k(e),x(e)}),[k,x,d]),tabValues:d}}var g=n(1048),b="tabList__CuJ",y="tabItem_LNqP";function v(e){var t=e.className,n=e.block,l=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],d=(0,o.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(d(t),s(a))},m=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var i,o=c.indexOf(e.currentTarget)-1;n=null!=(i=c[o])?i:c[c.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:p},o,{className:(0,i.Z)("tabs__item",y,null==o?void 0:o.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function k(e){var t=e.lazy,n=e.children,a=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=i.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function w(e){var t=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",b)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function T(e){var t=(0,g.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},9416:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return h}});var a=n(7462),r=n(3366),i=(n(7294),n(4137)),o=n(3992),l=n(425),s=n(9124),u=n(9353),c=["components"],d={id:"wireguard",title:"Wireguard",sidebar_label:"Wireguard"},p=void 0,m={unversionedId:"applications/wireguard",id:"applications/wireguard",title:"Wireguard",description:"WireGuard is an extremely simple yet fast and modern VPN that utilizes state-of-the-art cryptography",source:"@site/docs/applications/wireguard.mdx",sourceDirName:"applications",slug:"/applications/wireguard",permalink:"/applications/wireguard",draft:!1,editUrl:"https://github.com/swizzin/docs.swizzin.ltd/edit/master/docs/applications/wireguard.mdx",tags:[],version:"current",frontMatter:{id:"wireguard",title:"Wireguard",sidebar_label:"Wireguard"},sidebar:"docs",previous:{title:"Rapidleech",permalink:"/applications/rapidleech"},next:{title:"X2go",permalink:"/applications/x2go"}},f={},h=[{value:"Initial Setup",id:"initial-setup",level:2},{value:"Managing service",id:"managing-service",level:3},{value:"How to Access",id:"how-to-access",level:2},{value:"Client Install",id:"client-install",level:3},{value:"Client Setup",id:"client-setup",level:3},{value:"Generating QR Code for clients",id:"generating-qr-code-for-clients",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"WG doesn&#39;t work for any user except for the master",id:"wg-doesnt-work-for-any-user-except-for-the-master",level:3},{value:"My connection is not being kept alive",id:"my-connection-is-not-being-kept-alive",level:3},{value:"wg-quick: `wg100x&#39; already exists",id:"wg-quick-wg100x-already-exists",level:3}],g={toc:h};function b(e){var t=e.components,n=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"WireGuard is an extremely simple yet fast and modern VPN that utilizes state-of-the-art cryptography"),(0,i.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,i.kt)("p",null,"Installing wireguard is easy. Simply issue the following command from SSH:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"sudo box install wireguard\n")),(0,i.kt)("p",null,"At the end of the installation, the location of the config file for your user will be printed (",(0,i.kt)("inlineCode",{parentName:"p"},"/home/<user>/.wireguard/<user>.conf"),")"),(0,i.kt)("h3",{id:"managing-service"},"Managing service"),(0,i.kt)(s.default,{service:"wg-quick@wg1000",mdxType:"SystemdTabs"}),(0,i.kt)("h2",{id:"how-to-access"},"How to Access"),(0,i.kt)("h3",{id:"client-install"},"Client Install"),(0,i.kt)("p",null,"In order to use the Wireguard tunnel, you'll need to install the client on your local computer or mobile phone. In order to get started, please check the ",(0,i.kt)("a",{parentName:"p",href:"https://www.wireguard.com/install/"},"Wireguard site")," for help on installing Wireguard on the operating system of your choice."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you prefer, an alternate client called ",(0,i.kt)("a",{parentName:"p",href:"https://tunsafe.com/download"},"TunSafe")," exists and is already a bit more mature than the official Wireguard client for Windows. ",(0,i.kt)("strong",{parentName:"p"},"While the client itself is open-source and developed by a community member with prior credibility, it bears mentioning that using this client completely, 100% at your own risk as it is not developed or maintained by the Wireguard team. You have been warned."))),(0,i.kt)("h3",{id:"client-setup"},"Client Setup"),(0,i.kt)("p",null,"Wireguard is available on many platforms. Setting it up for use with your swizzin configuration should be fairly straight-forward, but in case you need a little help getting your client setup, here are some instructions for popular operating systems."),(0,i.kt)(o.Z,{defaultValue:"windows",values:[{label:"Windows",value:"windows"},{label:"Linux/macOS",value:"nixlike"},{label:"iOS",value:"ios"},{label:"Android",value:"android"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"nixlike",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Simply copy-paste the content of the file outputted at the end of the server setup into a file in /etc/wireguard.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/wireguard/wg0.conf\nsudo chmod 600 /etc/wireguard/wg0.conf\nsudo wg-quick up wg0\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Wireguard should now be up and tunnelling all you traffic through swizzin."),(0,i.kt)("li",{parentName:"ol"},"On Linux systems, you can configure a systemd service to automatically run and enable this configuration on each boot:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable wg-quick@wg0\n"))),(0,i.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Copy-paste the contents of the file outputted at the end of configuration into a file onto your local desktop,eg: ",(0,i.kt)("inlineCode",{parentName:"li"},"swizzin.conf.d")),(0,i.kt)("li",{parentName:"ol"},"Open TunSafe, click and drag the configuration file you just created to the TunSafe window. TunSafe will automatically import the client configuration and connect. Easy!"))),(0,i.kt)(l.Z,{value:"android",mdxType:"TabItem"},(0,i.kt)("p",null,"Configuration is easiest if you use utilize the QR Encode function."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Connect to your server from a computer and issue the commands:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"u=$(whoami)\nqrencode -t ansiutf8 < ~/.wireguard/$u.conf\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"In your client on your phone, add a new tunnel and chose the ",(0,i.kt)("inlineCode",{parentName:"li"},"QR Code")," option. Scan the QR code which was generated in your terminal."),(0,i.kt)("li",{parentName:"ol"},"Enable the tunnel by ticking the switch."))),(0,i.kt)(l.Z,{value:"ios",mdxType:"TabItem"},(0,i.kt)("p",null,"Configuration is easiest if you use utilize the QR Encode function."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Connect to your server from a computer and issue the commands:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"u=$(whoami)\nqrencode -t ansiutf8 < ~/.wireguard/$u.conf\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"In your client on your phone, add a new tunnel and chose the ",(0,i.kt)("inlineCode",{parentName:"li"},"QR Code")," option. Scan the QR code which was generated in your terminal."),(0,i.kt)("li",{parentName:"ol"},"Enable the tunnel by ticking the switch.")))),(0,i.kt)("admonition",{title:"Check if it worked",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"After configuring your Wireguard Client, ",(0,i.kt)("a",{parentName:"p",href:"https://duckduckgo.com/?q=ip+address&ia=answer"},"check your IP Address"),".")),(0,i.kt)("h3",{id:"generating-qr-code-for-clients"},"Generating QR Code for clients"),(0,i.kt)("p",null,"You can quickly set up WG on your client by using the scannable qr-code. You can run the folllowing command to generate a quick QR inside of your terminal session, which you can scan with your device's camera."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"qrencode -t ansiutf8 < ~/.wireguard/*.conf\n")),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)(u.default,{mdxType:"Troubleshooting"}),(0,i.kt)("h3",{id:"wg-doesnt-work-for-any-user-except-for-the-master"},"WG doesn't work for any user except for the master"),(0,i.kt)("p",null,"The multi-user functionality has been patched in at a later stage, probably after you have installed it. Please make sure to run ",(0,i.kt)("inlineCode",{parentName:"p"},"box update")," and then remove and install wireguard again (",(0,i.kt)("inlineCode",{parentName:"p"},"box remove wireguard && box install wireguard"),"). We have opted against patching this automatically as some administrators might not want to give their users WG access without knowing first."),(0,i.kt)("h3",{id:"my-connection-is-not-being-kept-alive"},"My connection is not being kept alive"),(0,i.kt)("p",null,"This can happen when you are behind an NAT. Uncomment the following line at the end of your config. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},"PersistentKeepalive = 25\n")),(0,i.kt)("h3",{id:"wg-quick-wg100x-already-exists"},"wg-quick: `wg100x' already exists"),(0,i.kt)("p",null,"The service might have been shut down but the kernel process is probably still running. Verify using ",(0,i.kt)("inlineCode",{parentName:"p"},"htop")," or some other process manager, and see if you can find any processes starting with ",(0,i.kt)("inlineCode",{parentName:"p"},"wg"),", that match the id. You can then manually shut the service down using the following command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wg-quick down wg100x\n")))}b.isMDXComponent=!0},9124:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return f}});var a=n(7462),r=n(3366),i=(n(7294),n(4137)),o=n(3992),l=n(425),s=n(9319),u=["components"],c={},d=void 0,p={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",sourceDirName:"snippets",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",draft:!1,editUrl:"https://github.com/swizzin/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",tags:[],version:"current",frontMatter:{}},m={},f=[],h={toc:f};function g(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"code"},(0,i.kt)(o.Z,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"status",mdxType:"TabItem"},(0,i.kt)(s.Z,{children:"sudo systemctl status "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,i.kt)(l.Z,{value:"start",mdxType:"TabItem"},(0,i.kt)(s.Z,{children:"sudo systemctl start "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,i.kt)(l.Z,{value:"stop",mdxType:"TabItem"},(0,i.kt)(s.Z,{children:"sudo systemctl stop "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,i.kt)(l.Z,{value:"restart",mdxType:"TabItem"},(0,i.kt)(s.Z,{children:"sudo systemctl restart "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,i.kt)(l.Z,{value:"enable",mdxType:"TabItem"},(0,i.kt)(s.Z,{children:"sudo systemctl enable "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,i.kt)(l.Z,{value:"disable",mdxType:"TabItem"},(0,i.kt)(s.Z,{children:"sudo systemctl disable "+n.service,className:"bash",mdxType:"CodeBlock"})))))}g.isMDXComponent=!0},9353:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(4137)),o=["components"],l={},s=void 0,u={unversionedId:"snippets/troubleshooting",id:"snippets/troubleshooting",title:"troubleshooting",description:"You can always also try the general troubleshooting tips written in our guide. They might or might not apply, but asking these questions can often make you understand what is under the hood better and help you find what needs to be fixed. It's always worth a shot!",source:"@site/docs/snippets/troubleshooting.md",sourceDirName:"snippets",slug:"/snippets/troubleshooting",permalink:"/snippets/troubleshooting",draft:!1,editUrl:"https://github.com/swizzin/docs.swizzin.ltd/edit/master/docs/snippets/troubleshooting.md",tags:[],version:"current",frontMatter:{}},c={},d=[],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can always also try the ",(0,i.kt)("a",{parentName:"p",href:"/guides/troubleshooting"},"general troubleshooting tips written in our guide"),". They might or might not apply, but asking these questions can often make you understand what is under the hood better and help you find what needs to be fixed. It's always worth a shot!")))}m.isMDXComponent=!0}}]);