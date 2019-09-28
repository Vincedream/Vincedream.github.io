/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2017/06/03/CSS Sprite雪碧图应用/index.html","e6d3bceb26e41d5bfad3304cb97f69fd"],["/2017/06/19/你可能不知道的 border-radius/index.html","499c378af1413e7696265442a56656e3"],["/2017/07/06/详解Express的上传文件中间件Multer/index.html","72cc1bf37d5b8d23082d4bbb8d00dad0"],["/2017/07/27/20行代码实现Express提交表单数据插入Mongo数据库/index.html","8b08f61b58cb0689082610469a00b32a"],["/2017/08/03/Express + EJS + Mongo 实现用户注册登录登出/index.html","48cbf58138021f0d8c942ea585834d2d"],["/2017/08/23/Mongoose的简单使用/index.html","c742439fdf8ec246ad10919ed8a278dc"],["/2017/09/01/记flex布局常常被忽略却很实用的几个属性/index.html","5b86ebc9286cb998552a1f8d36479c78"],["/2017/09/08/写CSS第一步：CSS Reset与Normalize/index.html","03071b01cb148c148d9f3e4efadea4f8"],["/2017/09/13/用CSS让你的文字有文艺范/index.html","eaa72b9bbb70d9c8b7e5433efd02c29c"],["/2017/10/04/CSS动画：animation、transition、transform、translate傻傻分不清/index.html","1e8d2ecc88fc45d1052058089f59ca4e"],["/2017/10/15/熟知Array方法——你需要的都已经有了！/index.html","58753df6eb56bf0bebc7d9283ff08fb4"],["/2017/10/19/傻傻分不清之 apply()，call()，bind()/index.html","328bde1b65dc0ddf097f900c01cfd98e"],["/2017/10/21/拒绝回调地狱——Promise/index.html","a4f003e21f19376227b154f4863601d1"],["/2017/10/28/深入理解ES6——块级作用域绑定/index.html","20fab3cc933b21a64ffc16bdcce09bf8"],["/2017/11/01/React + React Router仿小米有品开发总结/index.html","99a81768f9214d64e02c14f008f8ce41"],["/2017/11/11/React学习记录--四种组件间通信方式/index.html","1947ddd24cb7adc18015ab05f34c27b9"],["/2017/11/19/一道题引出来的JavaScript形参“值传递”与“引用传递”/index.html","a5c6a53be3c60c027215e082387d84f1"],["/2017/11/26/React学习记录—浅析状态管理工具Redux与React-Redux/index.html","669f2babe2f752873574f831d5cf5cc2"],["/2017/11/30/一道题引出的函数闭包与事件委托与事件绑定/index.html","68ffa44ea7d08cc691e45613ae9264c1"],["/2017/12/05/手摸手教你从购买服务器到部署第一个Node项目/index.html","5965ee528aa0f2a10d9b36cc8005c813"],["/2017/12/09/用Node EJS写一个爬虫脚本每天定时给心爱的她发一封暖心邮件/index.html","92e9e50141f742a3a05cb2eced66ba28"],["/2017/12/11/用PM2一键部署你的Node项目/index.html","6922cd1d696b5b47fab7b97caf716e4f"],["/2017/12/26/React中绑定事件为什么要.bind(this)以及如何优雅bind/index.html","009768d1ba2d6bd3946b91b52326d1df"],["/2018/01/07/2017年度总结——转变自己的关键点/index.html","1293c89c5e8fc428ce88951c0affc2e8"],["/2018/01/08/styled-components—论React如何优雅地写CSS/index.html","6bab5f77b2232b29acb5cbd2f9071816"],["/2018/01/22/回到最初的起点--原生Ajax原理浅析/index.html","5eb126a6f59fc2a5656f2ffa54ba7f5a"],["/2018/01/24/对于React的一些自己的总结与想法/index.html","864ef2cb9b1f2fd7f50cec8fda27ab21"],["/2018/02/03/总结项目开发中的一些http性能优化/index.html","db365525f756df9e5b5dd6895d22469a"],["/2018/02/11/使用强大的requestAnimationFrame来制作高性能动画/index.html","0cd14cf83b794c4cbddf5116f3b63683"],["/2018/02/16/React开发前一些个人配置/index.html","00319a9b9b3e1b8bf44f61ad5a126ec2"],["/2018/02/17/一劳永逸的axios拦截器封装总结/index.html","820e580d9e55e6b7171ebcc3159660af"],["/2018/02/19/用 “&&” 与 “II” 来减少你的 if else 面条代码/index.html","05de4a4456cc33ed0983be019294096f"],["/2018/03/03/状态码304与200：HTTP缓存/index.html","a5f927eb946fb4d2fcb12ad4496ab297"],["/2018/03/15/正则表达学习笔记以及常用的正则验证/index.html","1cc8ce8d67b470f46448879cadcb5993"],["/2018/03/16/深入apply与call——借用原生方法以及参数传入差异的原因/index.html","08b4f5e210efdd922ddb126b604c1c17"],["/2018/03/25/不是copy这么简单：JavaScript对象的浅拷贝与深拷贝/index.html","7deaf365d5e24faefaeb558a44642d71"],["/2018/04/02/React中的state与setState并不是想的那么简单/index.html","e84aee6096d93a546b02e66f375638d1"],["/2018/04/15/基于LeanCloud为后端的 “云校招” 微信小程序开发总结/index.html","426e09988d8d2307d00f5fce125f0f4d"],["/2018/04/18/优雅解决React中this.setState合并执行问题/index.html","8dd29d7b011445b48f5433d9932d1554"],["/2018/05/06/深入理解CSS背景定位——background-position/index.html","bd68ffcb4d26c24f0eb42fa63f69e7cb"],["/2018/05/18/理解CSS中伪元素：的常见用法/index.html","a8f2ffdf506e52cc19dc1f873225c76a"],["/2018/05/24/理解什么是闭包以及为什么需要闭包/index.html","80e5b71c28f45b1e6c321482bda40e22"],["/2018/06/01/写CSS时对图片hover动效的一些思考与探索/index.html","62f6be253b16f308bcea2e6bb42477ef"],["/2018/06/14/Webpack 4.x 从入门到实践（一）——基础概念/index.html","e2b517e3252ac6ba28c3e749a1608eca"],["/2018/06/26/Webpack 4.x 从入门到实践（二）——基础配置实践/index.html","814a16e95362ceec6bd8f2f82b7bcec4"],["/2018/07/03/Webpack 4.x 从入门到实践（三）——dev-server与HMR/index.html","83f3320510cb1fb9c25e6e37ab744beb"],["/2018/07/13/Webpack 4.x 从入门到实践（四）—— ESlint、pre-commit规范书写/index.html","cfa9dc042199226b105e32283188eafb"],["/2018/07/27/Webpack 4.x 从入门到实践（五）—— Babel的配置/index.html","d09656244b821327477e80c9a26ec694"],["/2018/08/05/Webpack 4.x 从入门到实践（六）—— React、骨架屏/index.html","a5f76b5fa36672a00eb6c622cb2d4abe"],["/2018/09/12/前端性能优化——使用webp来优化你的图片/index.html","7d6357eea2e4db5dadca14a6a7d192a4"],["/2018/10/05/在酷家乐实习是一种怎样的体验/index.html","97ff118da7cf523e47b9ce831c0a8400"],["/2018/10/07/给自己的2018年实习规划/index.html","6808457bbba2842f0674f7dfd13685c6"],["/2018/11/23/归纳总结出HTML中各种宽高以及位置/index.html","fd18af502f83e7b2e872acd56fb115f1"],["/2018/11/28/对如何将网页上的内容转换为图片的实践与思考/index.html","772215d4256798715c33b55612ab7ccc"],["/2018/12/08/总结CSS中常用选择器和比较容易混淆的选择器/index.html","2d05e11f0e9d079822f7fe4627069f2e"],["/2018/12/26/从React源码来理解PureComponent的正确打开方式/index.html","ff41005bd1ec2fdde24feaf2666c5fc5"],["/2018/12/28/2018年终总结——在酷家乐实习的半年/index.html","969922901d782f69edeabbcf5240b717"],["/2019/05/21/使用-Serverless-为后端服务开发一个有趣的-Chrome-扩展程序/index.html","e12fcd540575c393a4ca12ef0d9c84d9"],["/2019/05/27/探索前端未来：Progressive-Web-App-（PWA）/index.html","60330698ef4a818add7b37bb42f75cb6"],["/2019/06/22/通过开发-Babel-插件来理解什么是抽象语法树（AST）/index.html","22f427e14dbe6e8f393f0149dc6df313"],["/2019/06/29/傻傻分不清之-——-babel-全家桶/index.html","ee51463e18c7a6fa048c6095e919fdf2"],["/2019/07/25/领域驱动设计在前端中的应用/index.html","4922a3017bd6c25529ef1536e05eed63"],["/2019/08/22/CSS-3D-实践：从简单正方体到房屋全景漫游图/index.html","ffc4339a7349244109eb8edcd2e721d1"],["/about/index.html","f5d8588f0c3fefbffb0dd24f7201e5a7"],["/archives/2017/06/index.html","0665b189acec94b64b3d21140d29ea3b"],["/archives/2017/07/index.html","542e79e01dd5750877c20741362b979d"],["/archives/2017/08/index.html","d58dcb618044679360aec6cab79c278d"],["/archives/2017/09/index.html","9ea9dc51be42b72e9b818aa7268e2579"],["/archives/2017/10/index.html","cdb178ca8b8210d056860dcca75c7370"],["/archives/2017/11/index.html","3d97e03e578758a8ae05d19c2c6d91f3"],["/archives/2017/12/index.html","58994fa3e6c8acd59fd4200f7facebdd"],["/archives/2017/index.html","517cc5234989575bd1aca8bb97f544f3"],["/archives/2018/01/index.html","a13f56f2963713928d145ba94e366b83"],["/archives/2018/02/index.html","ff49bf6aa6cf146d0bd1123fc90c1828"],["/archives/2018/03/index.html","92aa374ca146652ea7c5d5a717aecece"],["/archives/2018/04/index.html","097a85993190f5fc4084d9165f44a293"],["/archives/2018/05/index.html","44a950893dead60c30f8c135c8adb71b"],["/archives/2018/06/index.html","682da3e7228e74c6f5c6914059524c65"],["/archives/2018/07/index.html","6b74f8976fd078656ce754ebb8f0dfbe"],["/archives/2018/08/index.html","3c4929c2aadf5c38bb9368746020ffbb"],["/archives/2018/09/index.html","1e59e80aa2c1e5e0ba8a440018693934"],["/archives/2018/10/index.html","95f928e4bca56bc2fe813010cc12caad"],["/archives/2018/11/index.html","47b47d53bb20432988aec1705aedef0c"],["/archives/2018/12/index.html","b66f995ff565436ac9abfe3b7852f985"],["/archives/2018/index.html","6f82266410aba0444a2d0755759d798c"],["/archives/2019/05/index.html","21c5de9d6efe27b16db374e544914356"],["/archives/2019/06/index.html","9dc0747531c522b1090516e21a2480a5"],["/archives/2019/07/index.html","cf5f2c97208d62207468b5ade65cadfb"],["/archives/2019/08/index.html","3008c18b8a7df599918c544749596d23"],["/archives/2019/index.html","74696b55a3c0a9c31a5f7ba71b1e9395"],["/archives/index.html","ee0a4ccca0fe0ddd5fec49c9cbc29dc5"],["/categories/Bebel/index.html","fc4b6a4cb74bf68f894358f48c4f203e"],["/categories/CSS/index.html","19d6003a92046d2fad4728cfecc9a121"],["/categories/HTML/index.html","503ac3b89794a9500acb8aab26ab2466"],["/categories/JavaScript/index.html","24468a2cc9891771299920381ccdaa5e"],["/categories/Linux/index.html","aacdd8e5079d9d733e1056aa38fb4cf9"],["/categories/Node-js/index.html","77e426ce09e2f2b53335708f9ad77dfe"],["/categories/PWA/index.html","6c5c7e11b7b5a36e23a62d0e6f090ab1"],["/categories/React/index.html","f7e164303847c2ddeb2022c8c73c782b"],["/categories/Webpack/index.html","aa442b903ead8904282bd635d7eee439"],["/categories/http/index.html","4806ca834bb910d10a1dc0e4c0da0d53"],["/categories/index.html","ed16555ae0b33c9ea7954d4569738c8d"],["/categories/前端性能/index.html","d749f7cb15a0b35ae6b106e60fecc884"],["/categories/实习/index.html","6ed1bf5e7bbe42c1ad1a330e9e9cccd8"],["/categories/小程序/index.html","3fe199ed495131c52cd47050c3ab4690"],["/categories/性能优化/index.html","4c6e91e9965d8f03804fe8b5063440e4"],["/categories/总结/index.html","a863fa413131a2026ca52ec9351f37c2"],["/categories/正则/index.html","972d8c3c6f8a3daddc37522ee30fe44c"],["/css/style.css","308db22cb200302813dd1cb3bf7895bc"],["/demo/web-pano/pure-css/index.css","f3fd56a4061dd278acf14601ab7d650f"],["/demo/web-pano/pure-css/index.html","23ba77dd078deee51f0826643f8a3829"],["/fonts/chancery/apple-chancery-webfont.eot","4ed7e60585ac6083e18a2df5a5c91cc1"],["/fonts/chancery/apple-chancery-webfont.svg","e325e4f2b070121ea7d4050023b9f6f2"],["/fonts/chancery/apple-chancery-webfont.ttf","49ec3c7bf028bca65ea9ef93614b2363"],["/fonts/chancery/apple-chancery-webfont.woff","2e9659ae195f4a74a314901d88520ad0"],["/index.html","80f0e5535d004da6f802dd3971b7d6fd"],["/js/src/even.js","5384d554fca3a6835dc527cc998ec7d5"],["/lib/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/jquery/jquery.min.js","e071abda8fe61194711cfc2ab99fe104"],["/lib/nprogress/nprogress.min.css","b56eecc7424d9754f2848d5df85fda0b"],["/lib/nprogress/nprogress.min.js","6310b6a231440f84d36211236e970709"],["/lib/pjax/jquery.pjax.min.js","17fbd50e03d8b8caa56dd3e01d098153"],["/lib/slideout/slideout.js","8d02b37e369a41a9cfe3d9f4b2204770"],["/lib/slideout/slideout.min.js","4bb5425e886f09bd7c3acf6757a9aa04"],["/page/2/index.html","2bfb1cb541061475e3b845077721e523"],["/page/3/index.html","5a99f83c3a4519a511c1c28a9c432bc3"],["/page/4/index.html","998154f6ad094cd6ac790b1e33a33b40"],["/page/5/index.html","2d40ae78ad9e22571b799522855dde68"],["/page/6/index.html","32a950ca213cfb3d6694a73534b16b0c"],["/page/7/index.html","3277a44d82442d26c19cffa57159c09f"],["/sw-register.js","7962268bc8d1f0dec7bd0b856beebcad"],["/tags/AJAX/index.html","bc4e2b0ac0861eebf36c03b48cc234f3"],["/tags/AST/index.html","80099d028716635445fb918b5dbf23a2"],["/tags/Babel-Plugin/index.html","6be6e2970d128a3868e572991c404fc1"],["/tags/CSS-In-JS/index.html","6d6ef796b03e1dccad6a9ded2016b10e"],["/tags/CSS-Sprite/index.html","62d63900d5d6d372e8cdbd09d69c1f00"],["/tags/CSS/index.html","e83be03073d184e7bd8f370dd7f2ab57"],["/tags/Chrome-扩展程序/index.html","2a83343eaa3ecc4c937355829e8f8f8c"],["/tags/EJS/index.html","ab0f682792f724ea65e0b722316b598e"],["/tags/ES6/index.html","405895e20434050085624fb0b289608b"],["/tags/Express/index.html","353a7d8f1d00dd78ee521079b7d05844"],["/tags/LeanCloud/index.html","b4f4f69ecbc763fd1b0e162a9a680812"],["/tags/Mongo/index.html","9ebf617f778ea6878023c93b768bc1ca"],["/tags/Mongoose/index.html","e98348080b7d15b9e9d4ba8fac5b9c95"],["/tags/Multer/index.html","3ea01899fa5c9eef91112a919306c51b"],["/tags/Node/index.html","faa14eeca54fd024570c857f60d67458"],["/tags/Normalize/index.html","8af1a056f2e486f8357ea140b386277e"],["/tags/PM2/index.html","e6e63711c8f491873b4111ed148ad949"],["/tags/Promise/index.html","2684596633eb612636ae79767291ecd4"],["/tags/Redux/index.html","ab7ff175bde94730077685083e33d7b6"],["/tags/Reset/index.html","e403ae0c1344456ea8ead62212f1898c"],["/tags/Service-Worker/index.html","c438612db3ea51f821793a82a0dae65a"],["/tags/axios/index.html","a08f2cf876dba1e128d728a1981b764d"],["/tags/flex/index.html","34b54640a778e7ae300f157172903a5f"],["/tags/html2canvas/index.html","f02b94624c7e343e89d6d7392c4ffd9f"],["/tags/http/index.html","b94555915a57bbf9f3911db82580e14e"],["/tags/index.html","07d57594ebe6a9c08c3533cc6e9a5956"],["/tags/requestAnimationFrame/index.html","762f82055c277b58454a31ca0dd950ea"],["/tags/styled-components/index.html","617463269dbce4cfa1fe7151b7fcf3bd"],["/tags/this/index.html","f41dc007efb112395118d66d99e5aeb6"],["/tags/webp/index.html","82dd3ad7df51ce591ac0aa02f3d92063"],["/tags/全景图/index.html","8b8a96933f68a9f7872c19962ee06ec5"],["/tags/定时邮件/index.html","517633e452aa2fa56b05faccad0f6808"],["/tags/异步/index.html","609fecc0341e00d7489eebd522393714"],["/tags/总结/index.html","6bd833152e9870fd503c40ab0770eff1"],["/tags/爬出/index.html","a1295a78b8848188e279a9e520db6f9b"],["/tags/闭包/index.html","7c8b1af1a2fdaa9ba5485d6339e3fa2f"],["/tags/雪碧图/index.html","b6fab3d5f30e33324aaeb07dae1bf2a8"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
