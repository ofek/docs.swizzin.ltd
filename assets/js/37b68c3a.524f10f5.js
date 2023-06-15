"use strict";(self.webpackChunkswizzin_website=self.webpackChunkswizzin_website||[]).push([[2351,865],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},425:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a=n(6010),o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},3992:function(e,t,n){n.d(t,{Z:function(){return T}});var r=n(7462),a=n(7294),o=n(6010),i=n(2957),l=n(6550),s=n(5238),u=n(3609),c=n(2560);function p(e){return function(e){var t,n;return null!=(t=null==(n=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,l.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,s._X)(i),(0,a.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function b(e){var t,n,r,o,i=e.defaultValue,l=e.queryString,s=void 0!==l&&l,u=e.groupId,p=d(e),b=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:p})})),v=b[0],h=b[1],k=f({queryString:s,groupId:u}),y=k[0],g=k[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,c.Nk)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),T=w[0],N=w[1],x=function(){var e=null!=y?y:T;return m({value:e,tabValues:p})?e:null}();return(0,a.useLayoutEffect)((function(){x&&h(x)}),[x]),{selectedValue:v,selectValue:(0,a.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);h(e),g(e),N(e)}),[g,N,p]),tabValues:p}}var v=n(1048),h="tabList__CuJ",k="tabItem_LNqP";function y(e){var t=e.className,n=e.block,l=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==l&&(p(t),s(r))},m=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;n=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var o,i=c.indexOf(e.currentTarget)-1;n=null!=(o=c[i])?o:c[c.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",k,null==i?void 0:i.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function g(e){var t=e.lazy,n=e.children,r=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=o.find((function(e){return e.props.value===r}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function w(e){var t=b(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(g,(0,r.Z)({},e,t)))}function T(e){var t=(0,v.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},8946:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),i=n(9124),l=["components"],s={id:"jackett",title:"Jackett",sidebar_label:"Jackett"},u=void 0,c={unversionedId:"applications/jackett",id:"applications/jackett",title:"Jackett",description:"API support for your favorite torrent trackers.",source:"@site/docs/applications/jackett.mdx",sourceDirName:"applications",slug:"/applications/jackett",permalink:"/applications/jackett",draft:!1,editUrl:"https://github.com/swizzin/docs.swizzin.ltd/edit/master/docs/applications/jackett.mdx",tags:[],version:"current",frontMatter:{id:"jackett",title:"Jackett",sidebar_label:"Jackett"},sidebar:"docs",previous:{title:"vsftpd",permalink:"/applications/vsftpd"},next:{title:"Nzbhydra",permalink:"/applications/nzbhydra"}},p={},d=[{value:"Initial Setup",id:"initial-setup",level:2},{value:"How to Access",id:"how-to-access",level:2},{value:"Service Management",id:"service-management",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Connect to other clients",id:"connect-to-other-clients",level:2}],m={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"API support for your favorite torrent trackers."),(0,o.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,o.kt)("p",null,"Installing Jackett is easy. Simply issue the following command from SSH:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"sudo box install jackett\n")),(0,o.kt)("p",null,"This command will configure jackett for your user."),(0,o.kt)("h2",{id:"how-to-access"},"How to Access"),(0,o.kt)("p",null,"After installation, you can access the web client at ",(0,o.kt)("inlineCode",{parentName:"p"},"https://<hostname.ltd>/jackett/"),". When prompted for an admin password, simply enter your slot password. This double authentication layer is necessary because your jackett port has been exposed externally -- if you disabled the password authentication, your configuration and tracker information would be publicly accessible."),(0,o.kt)("h2",{id:"service-management"},"Service Management"),(0,o.kt)("p",null,"Despite using the multi-user format, jackett multi-user is not enabled by default."),(0,o.kt)("p",null,"The service for jackett resides at:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/etc/systemd/system/jackett@.service\n")),(0,o.kt)(i.default,{service:"jackett@<username>",mdxType:"SystemdTabs"}),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"To add a new tracker to Jackett, click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Add Indexer")," button near the top of the page. There should be some instructions to help you get Jackett set up with the tracker you've specified."),(0,o.kt)("p",null,"Since every tracker is different in how they accept connections through their API, you should refer to your tracker if you need specific help in setting up an Indexer."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Please do not touch the following settings:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Admin password (you can change, but do not remove)"),(0,o.kt)("li",{parentName:"ul"},"Base URL"),(0,o.kt)("li",{parentName:"ul"},"Server Port"),(0,o.kt)("li",{parentName:"ul"},"External access (leave enabled)"))),(0,o.kt)("h2",{id:"connect-to-other-clients"},"Connect to other clients"),(0,o.kt)("p",null,"In order to connect Jackett with other trackers, you need to connect directly to the port. You must bypass the webserver because it has authentication headers which are not supported when accessing Jackett from other clients. If you need help in constructing your URL for a tracker, please refer to the example below."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The default Jackett port is ",(0,o.kt)("inlineCode",{parentName:"p"},"9117"))),(0,o.kt)("p",null,"Now, click ",(0,o.kt)("inlineCode",{parentName:"p"},"Copy Torznab Feed"),". The link you'll receive will look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"https://<yourhost>.ltd/jackett/api/v2.0/indexers/yourtracker/results/torznab/\n")),(0,o.kt)("p",null,"We need to edit this link to ",(0,o.kt)("strong",{parentName:"p"},"remove https")," , ",(0,o.kt)("strong",{parentName:"p"},"remove the reverse proxy"),", and ",(0,o.kt)("strong",{parentName:"p"},"add the port number"),". Thus, if your port number was ",(0,o.kt)("inlineCode",{parentName:"p"},"9117"),", your edited URL would look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"http://127.0.0.1:9117/jackett/api/v2.0/indexers/yourtracker/results/torznab/\n")))}f.isMDXComponent=!0},9124:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),i=n(3992),l=n(425),s=n(9319),u=["components"],c={},p=void 0,d={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",sourceDirName:"snippets",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",draft:!1,editUrl:"https://github.com/swizzin/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",tags:[],version:"current",frontMatter:{}},m={},f=[],b={toc:f};function v(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"code"},(0,o.kt)(i.Z,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"status",mdxType:"TabItem"},(0,o.kt)(s.Z,{children:"sudo systemctl status "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(l.Z,{value:"start",mdxType:"TabItem"},(0,o.kt)(s.Z,{children:"sudo systemctl start "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(l.Z,{value:"stop",mdxType:"TabItem"},(0,o.kt)(s.Z,{children:"sudo systemctl stop "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(l.Z,{value:"restart",mdxType:"TabItem"},(0,o.kt)(s.Z,{children:"sudo systemctl restart "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(l.Z,{value:"enable",mdxType:"TabItem"},(0,o.kt)(s.Z,{children:"sudo systemctl enable "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(l.Z,{value:"disable",mdxType:"TabItem"},(0,o.kt)(s.Z,{children:"sudo systemctl disable "+n.service,className:"bash",mdxType:"CodeBlock"})))))}v.isMDXComponent=!0}}]);