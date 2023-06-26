"use strict";(self.webpackChunkswizzin_website=self.webpackChunkswizzin_website||[]).push([[4988],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),g=r,m=d["".concat(l,".").concat(g)]||d[g]||c[g]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4345:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(4137)),o=["components"],s={id:"dist-upgrade",title:"Keeping your Server Up-to-Date",sidebar_label:"Server Updates"},l=void 0,u={unversionedId:"guides/dist-upgrade",id:"guides/dist-upgrade",title:"Keeping your Server Up-to-Date",description:"Keeping your server up-to-date is important as security fixes are constantly being discovered and released. There are two forms of updates: regular upgrades and distribution upgrades.",source:"@site/docs/guides/dist-upgrade.md",sourceDirName:"guides",slug:"/guides/dist-upgrade",permalink:"/guides/dist-upgrade",draft:!1,editUrl:"https://github.com/swizzin/docs.swizzin.ltd/edit/master/docs/guides/dist-upgrade.md",tags:[],version:"current",frontMatter:{id:"dist-upgrade",title:"Keeping your Server Up-to-Date",sidebar_label:"Server Updates"},sidebar:"docs",previous:{title:"Webmin",permalink:"/applications/webmin"},next:{title:"Troubleshooting",permalink:"/guides/troubleshooting"}},p={},d=[{value:"Regular Upgrades",id:"regular-upgrades",level:2},{value:"Distribution Upgrades",id:"distribution-upgrades",level:2},{value:"Updating packages after an upgrade",id:"updating-packages-after-an-upgrade",level:3},{value:"nginx",id:"nginx",level:4},{value:"rtorrent",id:"rtorrent",level:4},{value:"deluge",id:"deluge",level:4},{value:"Python3 virtual environments",id:"python3-virtual-environments",level:4},{value:"Other packages",id:"other-packages",level:4}],c={toc:d};function g(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Keeping your server up-to-date is important as security fixes are constantly being discovered and released. There are two forms of updates: regular upgrades and distribution upgrades."),(0,i.kt)("h2",{id:"regular-upgrades"},"Regular Upgrades"),(0,i.kt)("p",null,"Regular upgrades are the updates to packages released for the current version of your operating system (either Debian or Ubuntu). Since only LTS (Long Term Support) branches are supported in swizzin, security updates are typically the only updates you'll receive; however, the kernel does update regularly, so it's a good idea to check for updates every so often. Regular upgrades are safe and should pose no reliability issues when performing routine restarts."),(0,i.kt)("p",null,"Checking for updates is easy:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"sudo apt -y update\nsudo apt upgrade\n")),(0,i.kt)("p",null,"After running these commands, you'll see if any packages are available for upgrade. If you are ready and confirm the upgrade of the packages listed, press ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," to continue. If you change your mind, press ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," or hit ",(0,i.kt)("inlineCode",{parentName:"p"},"control-c"),"."),(0,i.kt)("p",null,"Following updates, it's typically a good idea to restart any services that were upgraded in order to start using the new versions immediately."),(0,i.kt)("p",null,"If there was an update to the ",(0,i.kt)("inlineCode",{parentName:"p"},"linux-image")," package, this is the kernel. The only way to reload the kernel is to restart the server. (Unless you're running Ubuntu 18.04 with live kernel updates, which is not covered here.)"),(0,i.kt)("h2",{id:"distribution-upgrades"},"Distribution Upgrades"),(0,i.kt)("admonition",{title:"DISCLAIMER AND LIMITATION OF LIABILITY",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"The steps provided below are meant only to provide you with an outline of the steps required to make a major version change to your operating system (i.e. Debian 9 -> 10). While the steps outlined below will absolutely upgrade your operating system, there are risks involved, for example (but not limited to):"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Package updates causing issues that prevent boot"),(0,i.kt)("li",{parentName:"ul"},"Package updates causing previously installed packages in swizzin to fail to start")),(0,i.kt)("p",{parentName:"admonition"},"Distribution upgrades are ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"NOT"))," officially supported. If anything breaks, I am not liable for your server or any of the data contained within it. Further, you are not guaranteed to receive any form of support or help to help get your server functional again. This information is provided for educational purposes only. If you choose to follow the steps, be prepared for the possibility that something could go wrong. If your data is important to you, make a backup."),(0,i.kt)("p",{parentName:"admonition"},"Certain things are known to cause issues -- those issues will be gone over here and the workarounds to get the applications back online, but I cannot provide information for all circumstances and variables."),(0,i.kt)("p",{parentName:"admonition"},"You have been warned.")),(0,i.kt)("p",null,"That's a large scary warning, yes. Please think twice about performing the following steps. That said, performing a distribution upgrade is only slightly more involved than a regular update. The biggest difference is that we need to change our ",(0,i.kt)("inlineCode",{parentName:"p"},"sources")," file to reference the newer version of the OS we'd like to upgrade to."),(0,i.kt)("p",null,"The absolute best time to perform an upgrade is ",(0,i.kt)("strong",{parentName:"p"},"before you install swizzin"),"; however, it's still possible to do a distribution upgrade after installation, but it may be more tricky. The reason it's easier is that nothing has been installed or configured yet. When everything gets installed for the first time, it'll be installed correctly for the OS and won't need to be (potentially tweaked)."),(0,i.kt)("p",null,"swizzin currently supports these distributions:"),(0,i.kt)("p",null,"Debian:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Buster (oldoldstable)"),(0,i.kt)("li",{parentName:"ul"},"Bullseye (oldstable)"),(0,i.kt)("li",{parentName:"ul"},"Bookworm")),(0,i.kt)("p",null,"Ubuntu:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Focal (20.04 LTS)"),(0,i.kt)("li",{parentName:"ul"},"Jammy (22.04 LTS)")),(0,i.kt)("p",null,"Before updating anything, please ensure you're on the latest commit. If you are not, things could not work as intended after you're done the distribution upgrade. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo box update\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you forgot to update swizzin beforehand and you're getting an error such as as"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"WARN      <New Distro> is not supported by swizzin at this stage.\n")),(0,i.kt)("p",{parentName:"admonition"},"Then, assuming swizzin has released support for your upgrade path, you'll need to manually pull down the latest version of the swizzin master branch:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"cd /etc/swizzin\ngit pull\n"))),(0,i.kt)("p",null,"If you don't know the OS or version you're running, you can determine it here with the command ",(0,i.kt)("inlineCode",{parentName:"p"},"lsb_release -a"),". Your ",(0,i.kt)("inlineCode",{parentName:"p"},"codename")," will hopefully correspond to a value above. The codename is the release that's in your current apt sources list (",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/apt/sources.list"),"). We will be changing this to the version you'd like to upgrade to."),(0,i.kt)("p",null,"Let's take the scenario where your server was delivered with Debian 11 (bullseye), but you'd like to upgrade to Debian 12 (bookworm). In this scenario, our upgrade path looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"bullseye > bookworm\n")),(0,i.kt)("p",null,"Thus, we need to replace all mention of stretch with buster in the file ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/apt/sources.list"),"."),(0,i.kt)("p",null,"You can either ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo nano /etc/apt/sources.list")," and change all instances of ",(0,i.kt)("inlineCode",{parentName:"p"},"stretch")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"buster")," or issue the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"sed -i 's/bullseye/bookworm/g' /etc/apt/sources.list\n")),(0,i.kt)("p",null,"This simple ",(0,i.kt)("inlineCode",{parentName:"p"},"sed")," command simply states: find the word stretch, replace it with buster in the file `/etc/apt/sources.list."),(0,i.kt)("p",null,"Once our sources have been updated, it's time to grab new manifests and update:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"sudo apt -y update\nsudo apt upgrade\n")),(0,i.kt)("p",null,"If you receive an error regarding any repositories without release files, please double check your sources. Certain repos (like Debian's security updates) repository may not yet exist and will throw a hard error. This won't prevent you from using ",(0,i.kt)("inlineCode",{parentName:"p"},"apt")," by command line, but the hard error will cause any apt-based installs while using ",(0,i.kt)("inlineCode",{parentName:"p"},"box")," to fail."),(0,i.kt)("p",null,"The update, once started, will take some time. Hundreds (if not 1000+) packages will be downloaded and updated. Please be patient: consider grabbing a coffee or a beer."),(0,i.kt)("p",null,"Once this command finishes, we need to complete the upgrade with a ",(0,i.kt)("inlineCode",{parentName:"p"},"dist upgrade"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"sudo apt dist-upgrade\n")),(0,i.kt)("p",null,"This should offer to upgrade more packages and will round out the full distribution upgrade process."),(0,i.kt)("p",null,"After this command finishes, we need to reboot the server to refresh everything that was just upgraded. Use the command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"sudo reboot\n")),(0,i.kt)("p",null,"Pray to your lucky stars that nothing goes wrong and your server comes back up without any issues."),(0,i.kt)("p",null,"If you haven't installed swizzin yet, feel free to start the installer now. If you have already installed packages, we have a bit more updating to do."),(0,i.kt)("h3",{id:"updating-packages-after-an-upgrade"},"Updating packages after an upgrade"),(0,i.kt)("p",null,"A few things are known to be broken after a ",(0,i.kt)("inlineCode",{parentName:"p"},"dist-upgrade")," and will need to be fixed. Major breakers typically include things like php version upgrades and library upgrades (like openSSL), which packages (such as rtorrent) are compiled against."),(0,i.kt)("p",null,"Luckily the major breakers have scripts in place designed to help get you back up and running."),(0,i.kt)("h4",{id:"nginx"},"nginx"),(0,i.kt)("p",null,"We need to upgrade nginx configs to use the correct php socket for applications like the panel and ruTorrent. The easiest way to reconfigure nginx for your current environment is to use the command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"sudo box upgrade nginx\n")),(0,i.kt)("admonition",{title:"Tip",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"This command is considered semi-destructive. In the case of custom nginx configurations, it won't clear the ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx/app")," directory, but it will clear the ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx/conf.d")," directory. If you have any custom nginx configurations, it's recommended to back them up before running the above command")),(0,i.kt)("h4",{id:"rtorrent"},"rtorrent"),(0,i.kt)("p",null,"rTorrent likely failed to start on boot. If you try to start ",(0,i.kt)("inlineCode",{parentName:"p"},"rtorrent")," from the command line, you'll likely receive some error about libraries. We just need to recompile rTorrent against the current system. This is simple:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"sudo box upgrade rtorrent\n")),(0,i.kt)("p",null,"rTorrent will recompile and should start without issues afterwards."),(0,i.kt)("h4",{id:"deluge"},"deluge"),(0,i.kt)("p",null,"Deluge shouldn't have any issues with the upgrade, but if Deluge fails to start, recompiling would be the first point of troubleshooting:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"sudo box upgrade deluge\n")),(0,i.kt)("h4",{id:"python3-virtual-environments"},"Python3 virtual environments"),(0,i.kt)("p",null,"Applications which require the use of virtual environments will likely be broken following a dist-upgrade as the python3 symlinks to the system binaries and any venv specific dependencies will no longer be pointing to the correct location. Python venvs will need to be redeployed."),(0,i.kt)("p",null,"For example, to fix the panel after a dist-upgrade, the following steps should fix the python venv for the panel"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m venv /opt/.venv/swizzin\n/opt/.venv/swizzin/bin/pip install -r /opt/swizzin/requirements.txt\nsystemctl restart panel\n")),(0,i.kt)("p",null,"Depending on the application and the amount of configuration you have done, it may be easier to simply back up your app configuration and reinstall the application entirely and restore your backup."),(0,i.kt)("h4",{id:"other-packages"},"Other packages"),(0,i.kt)("p",null,"Distribution upgrades haven't been tested rigorously. It's entirely possible other packages may have broken during the upgrade. You'll need to start doing your own troubleshooting here if anything else is broken. You can consult ",(0,i.kt)("a",{parentName:"p",href:"/guides/troubleshooting"},"the Troubleshooting guide")," for a quick start. You can find out if any of your systemd services are failing to start with ",(0,i.kt)("inlineCode",{parentName:"p"},"systemctl list-units --failed"),". If there are failed units there, you can start debugging with ",(0,i.kt)("inlineCode",{parentName:"p"},"systemctl status <failed unit>"),". However, you're on your own form here."))}g.isMDXComponent=!0}}]);