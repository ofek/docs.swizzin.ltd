"use strict";(self.webpackChunkswizzin_website=self.webpackChunkswizzin_website||[]).push([[8904],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,f=p["".concat(s,".").concat(h)]||p[h]||d[h]||l;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var u=2;u<l;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1679:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=n(7462),o=n(3366),l=(n(7294),n(4137)),a=["components"],i={},s=void 0,u={unversionedId:"guides/cloudflare",id:"guides/cloudflare",title:"cloudflare",description:"The following Wiki article will take you through how to Set up a CDN for Plex with CloudFlare & swizzin.",source:"@site/docs/guides/cloudflare.md",sourceDirName:"guides",slug:"/guides/cloudflare",permalink:"/guides/cloudflare",draft:!1,editUrl:"https://github.com/swizzin/docs.swizzin.ltd/edit/master/docs/guides/cloudflare.md",tags:[],version:"current",frontMatter:{}},c={},p=[],d={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The following Wiki article will take you through how to Set up a CDN for Plex with CloudFlare & swizzin."),(0,l.kt)("p",null,"Difficulty: Easy (easier than a QuickBox install, for sure!)"),(0,l.kt)("p",null,"Requirements:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A domain"),(0,l.kt)("li",{parentName:"ul"},"A free CloudFlare account")),(0,l.kt)("p",null,"Caveats: CloudFlare has the effect of forcing certain levels of TLS encryption on the client. Older clients (such as some SmartTVs) do not support the minimum level of TLS required by CloudFlare, and may prevent them from being able to connect to the server. You can bypass this by rolling your own proxy where you control the level of security."),(0,l.kt)("p",null,"I modified this a bit from the github entry posted here along with the corresponding post on Reddit and my old QuickBox guide. This may take a some time to setup, so make sure your read through and understand the instructions before starting!"),(0,l.kt)("p",null,"Once you understand what\u2019s involved, grab a cup of coffee and let\u2019s get to work!"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Sign up for CloudFlare")),(0,l.kt)("p",null,"The first step is to sign up with an account at CloudFlare and move the nameservers of your domain over to the one\u2019s provided during CloudFlare\u2019s setup. Once CloudFlare is setup, make sure you add your server's IP to a new subdomain, i.e. plex.yourdomain.com. Make sure to turn on routing to CloudFlare (orange cloud icon). Further, under the crypto tab, ensure SSL is set to either Full or Full (Strict)"),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Grab the SSL certificate for your domain:")),(0,l.kt)("p",null,"First install acme.sh if you have not run the let's encrypt installer from swizzin yet. Ignore the warning about socat if you receive one. We will not be using the standalone webserver to issue certificates"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"curl https://get.acme.sh | sh\n")),(0,l.kt)("p",null,"Now, we will issue a certificate, but first we will define a couple variables:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"hostname={YOUR HOSTNAME. eg plex.yourdomain.com}\nexport CF_Key={YOUR CF API KEY}\nexport CF_Email={YOUR CF EMAIL}\n")),(0,l.kt)("p",null,"Once you have defined these variables then get the certificates and install them to your nginx directory. You can copy and paste these commands if you have defined your variables correctly, as above:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'mkdir -p /etc/nginx/ssl/${hostname}\n/root/.acme.sh/acme.sh --issue --dns dns_cf -d ${hostname}\n/root/.acme.sh/acme.sh --install-cert -d ${hostname} --key-file /etc/nginx/ssl/${hostname}/key.pem --fullchain-file /etc/nginx/ssl/${hostname}/fullchain.pem --ca-file /etc/nginx/ssl/${hostname}/chain.pem --reloadcmd "service nginx force-reload"\n')),(0,l.kt)("p",null,"We now have everything we need to configure our Plex Reverse Proxy:"),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Configure nginx")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd /etc/nginx/sites-enabled\nwget -O plex.conf https://raw.githubusercontent.com/toomuchio/plex-nginx-reverseproxy/master/nginx.conf\n")),(0,l.kt)("p",null,"Now we must alter the file to include our failover IP, ssl certificates and dhparam."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"nano plex.conf\n")),(0,l.kt)("p",null,"Find:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"server_name\n")),(0,l.kt)("p",null,"and replace plex.EXAMPLE.COM with your own hostname"),(0,l.kt)("p",null,"Then find:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ssl_certificate\nssl_certificate_key\n")),(0,l.kt)("p",null,"Insert your letsencrypt certificates here:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ssl_certificate /etc/nginx/ssl/{YOUR HOSTNAME}/fullchain.pem;\nssl_certificate_key /etc/nginx/ssl/{YOUR HOSTNAME}/key.pem;\n")),(0,l.kt)("p",null,"Now add our trusted certificate (chain.pem):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ssl_trusted_certificate /etc/nginx/ssl/{YOUR HOSTNAME}/chain.pem;\n")),(0,l.kt)("p",null,"And the dhparam already generated on a default swizzin install a bit further down:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ssl_dhparam /etc/nginx/ssl/dhparam.pem;\n")),(0,l.kt)("p",null,"That\u2019s all the edits we need to make to this file so save and exit. Test your config and cross your fingers!"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"nginx -t\n")),(0,l.kt)("p",null,"If all goes well, reload your server configuration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"systemctl reload nginx\n")),(0,l.kt)("p",null,"Now your Plex should be accessible via ",(0,l.kt)("a",{parentName:"p",href:"https://plex.yourdomain.com"},"https://plex.yourdomain.com")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Alter your Plex Server settings")),(0,l.kt)("p",null,"Make sure \u201cShow Advanced Settings\u201d is on. Under the Network tab add a custom access url:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"http://plex.yourdomain.com:80,https://plex.yourdomain.com:443\n")),(0,l.kt)("p",null,"Under Remote Access, disable remote access"),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"Update firewall to prevent external pinging of port 32400")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"iptables -A INPUT -p tcp -s localhost --dport 32400 -j ACCEPT\niptables -A INPUT -p tcp --dport 32400 -j DROP\n")),(0,l.kt)("p",null,"The first rule ensures our localhost is still able to talk with Plex. This allows our proxy to communicate, with the internal server, but the second rule prevents all other access. As such, you should still be able to access your plex installation from both plex.tv/web/app and plex.yourdomain.com. Confirm you are able to, then once you have, ensure these rules stay persistent upon a reboot with iptables-persistent:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"apt install iptables-persistent\n")),(0,l.kt)("p",null,"Choose yes during installation to save your current iptables (note if you have any fail2ban rules, they may get included in here. Make sure you have no firewall rules you don\u2019t want to save, though you can remove unintentional additions if needed."),(0,l.kt)("p",null,"At this point, no data should be served from your server via port 32400 and all traffic should flow exclusively through port 443 (you can verify this with tcptrack \u2013 your server will not establish connections via port 32400 during playback though it will try- SYN_CONNECT)."),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},"Test and enjoy!")),(0,l.kt)("p",null,"Please note this may not be perfect \u2013 I will do my best to answer questions and update and errors in the guide. Please let me know if you run into issues!"),(0,l.kt)("p",null,"If you\u2019re worried about sending all of your data through cloudflare, the same basic principle could apply to a VPS such as Linode, Vultr or other."))}h.isMDXComponent=!0}}]);