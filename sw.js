/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2017/06/03/CSS Sprite雪碧图应用/index.html","ede83dc2c9ff1c6b6f3f68c5f0636e70"],["/2017/06/19/你可能不知道的 border-radius/index.html","8dc4dd5fbb2235957f24b6da534f1dc7"],["/2017/07/06/详解Express的上传文件中间件Multer/index.html","28a483e3d5a4e7378f795a029ea98721"],["/2017/07/27/20行代码实现Express提交表单数据插入Mongo数据库/index.html","2883374fe3c0ca67ceefa34febb3a27a"],["/2017/08/03/Express + EJS + Mongo 实现用户注册登录登出/index.html","cb5fd24b14041462caa249bd7203dde5"],["/2017/08/23/Mongoose的简单使用/index.html","bb021f57242fa76368f361f303cce978"],["/2017/09/01/记flex布局常常被忽略却很实用的几个属性/index.html","d0835a829bc629fac48cd32f8be7651d"],["/2017/09/08/写CSS第一步：CSS Reset与Normalize/index.html","43673690ec2a6c5844fb46f1592b4c36"],["/2017/09/13/用CSS让你的文字有文艺范/index.html","225bbaa3ddb5f63d447735ef3eeb95e8"],["/2017/10/04/CSS动画：animation、transition、transform、translate傻傻分不清/index.html","6103f25b87200c52eac62250aaf01238"],["/2017/10/15/熟知Array方法——你需要的都已经有了！/index.html","724d2de3d0c55ceb4460c0ebfc46f493"],["/2017/10/19/傻傻分不清之 apply()，call()，bind()/index.html","ab73442c5e6a357890d6c6e67cb66b47"],["/2017/10/21/拒绝回调地狱——Promise/index.html","081ef4145e3b3bf144f73758d669245d"],["/2017/10/28/深入理解ES6——块级作用域绑定/index.html","da903fe1e789b1744e0a71d985c4f297"],["/2017/11/01/React + React Router仿小米有品开发总结/index.html","4aaf939c78cfe2368c6420b59ec7630e"],["/2017/11/11/React学习记录--四种组件间通信方式/index.html","5571abd14524a3f985c826da1b7934d2"],["/2017/11/19/一道题引出来的JavaScript形参“值传递”与“引用传递”/index.html","28f1afaa501b62be05fe8d85f3f55c06"],["/2017/11/26/React学习记录—浅析状态管理工具Redux与React-Redux/index.html","0799b5a3707f96916a600dc48664d282"],["/2017/11/30/一道题引出的函数闭包与事件委托与事件绑定/index.html","0bcac07bb1af2a575909132ee5c2146d"],["/2017/12/05/手摸手教你从购买服务器到部署第一个Node项目/index.html","abfb453672a8f2f8dbe7991a7c957721"],["/2017/12/09/用Node EJS写一个爬虫脚本每天定时给心爱的她发一封暖心邮件/index.html","e26ac8ccd4b4be8b5402ddffb216f5e3"],["/2017/12/11/用PM2一键部署你的Node项目/index.html","0ee1a4768b761f1515d87c9a5ab94beb"],["/2017/12/26/React中绑定事件为什么要.bind(this)以及如何优雅bind/index.html","f677cb428b3362312589799157763155"],["/2018/01/07/2017年度总结——转变自己的关键点/index.html","e25beb1588c4a95da78936c0b3019b5e"],["/2018/01/08/styled-components—论React如何优雅地写CSS/index.html","b07ea5b0349d5dded55ca693ce3e1873"],["/2018/01/22/回到最初的起点--原生Ajax原理浅析/index.html","4281d3e9c22ccd770a3459cc060893cb"],["/2018/01/24/对于React的一些自己的总结与想法/index.html","66a56d86532cec1ee7d72f2f510831ef"],["/2018/02/03/总结项目开发中的一些http性能优化/index.html","1406d5cb544d8fb0fff3e80eecec918c"],["/2018/02/11/使用强大的requestAnimationFrame来制作高性能动画/index.html","bf210047484a1a85ef48b72e0bd63707"],["/2018/02/16/React开发前一些个人配置/index.html","70fe8e28156cfc683d21c48a812b3fa5"],["/2018/02/17/一劳永逸的axios拦截器封装总结/index.html","2537fb3dee50be7074e373b11b166729"],["/2018/02/19/用 “&&” 与 “II” 来减少你的 if else 面条代码/index.html","917fd5808dec9db02715eb275df7c9f0"],["/2018/03/03/状态码304与200：HTTP缓存/index.html","c12f6939e778467f714817756d2e1e87"],["/2018/03/15/正则表达学习笔记以及常用的正则验证/index.html","7f66ed84a236f8992b1b26811321d8b3"],["/2018/03/16/深入apply与call——借用原生方法以及参数传入差异的原因/index.html","e7339ee8244f7efa8c46d524c7e9449b"],["/2018/03/25/不是copy这么简单：JavaScript对象的浅拷贝与深拷贝/index.html","0116f1fdd5689c7536588e3609259716"],["/2018/04/02/React中的state与setState并不是想的那么简单/index.html","0d95bdd3670a90418ea53caea05573d8"],["/2018/04/15/基于LeanCloud为后端的 “云校招” 微信小程序开发总结/index.html","bee0541e07bb790ecd27c509ad24087b"],["/2018/04/18/优雅解决React中this.setState合并执行问题/index.html","abb0b62a7ef99fcadeeb70fb3e1cb4be"],["/2018/05/06/深入理解CSS背景定位——background-position/index.html","dc81d760a91b28b082dd7b956654837d"],["/2018/05/18/理解CSS中伪元素：的常见用法/index.html","6d66729d84cb0a5f5db1a136852c3051"],["/2018/05/24/理解什么是闭包以及为什么需要闭包/index.html","d4ec1bc2329978cdf34b741269722bea"],["/2018/06/01/写CSS时对图片hover动效的一些思考与探索/index.html","eea40bba57d20e8b5befdc60fc37f5cd"],["/2018/06/14/Webpack 4.x 从入门到实践（一）——基础概念/index.html","59d293a2f5590ab19bb4db4ca74edd21"],["/2018/06/26/Webpack 4.x 从入门到实践（二）——基础配置实践/index.html","6a6425873d923ede27cf3c429a5ace22"],["/2018/07/03/Webpack 4.x 从入门到实践（三）——dev-server与HMR/index.html","fc7195b1dfb78296e3070b8bcc450301"],["/2018/07/13/Webpack 4.x 从入门到实践（四）—— ESlint、pre-commit规范书写/index.html","6d8ba45b1fe3eea7f6a293af596f9b00"],["/2018/07/27/Webpack 4.x 从入门到实践（五）—— Babel的配置/index.html","92800ddb1dde96aee289b41e7c5a39a3"],["/2018/08/05/Webpack 4.x 从入门到实践（六）—— React、骨架屏/index.html","6519a06552e707c0da9096e2e588ea95"],["/2018/09/12/前端性能优化——使用webp来优化你的图片/index.html","e1aa7bca05952bc20280cffe4157f9ae"],["/2018/10/05/在酷家乐实习是一种怎样的体验/index.html","cb299dca868c109f4350b9f6b6e6a277"],["/2018/10/07/给自己的2018年实习规划/index.html","d7bb448971623a19eb649a001e6da227"],["/2018/11/23/归纳总结出HTML中各种宽高以及位置/index.html","03207ef523f866ecdd2b71e21791d1da"],["/2018/11/28/对如何将网页上的内容转换为图片的实践与思考/index.html","fbaa5497c6b42c5662ecc1673b069d21"],["/2018/12/08/总结CSS中常用选择器和比较容易混淆的选择器/index.html","12b882bb4327b49a08530de3626b7798"],["/2018/12/26/从React源码来理解PureComponent的正确打开方式/index.html","8069a6fd249bf28b8fdbd3ddb181d5c1"],["/2018/12/28/2018年终总结——在酷家乐实习的半年/index.html","b79860e96d9bf39540e09213f205a395"],["/2019/05/21/使用-Serverless-为后端服务开发一个有趣的-Chrome-扩展程序/index.html","37ce8087e89eacb3909f44501327cdd8"],["/2019/05/27/探索前端未来：Progressive-Web-App-（PWA）/index.html","7e32016e88d252fb7c78b994e5a154e1"],["/2019/06/22/通过开发-Babel-插件来理解什么是抽象语法树（AST）/index.html","85e25d9198ad061d5254949f9e751f02"],["/2019/06/29/傻傻分不清之-——-babel-全家桶/index.html","250f7aa882d74dc1ec089b6813c75848"],["/2019/07/25/领域驱动设计在前端中的应用/index.html","d68beb39fbd09c039256ca162badd648"],["/2019/08/22/CSS-3D-实践：从简单正方体到房屋全景漫游图/index.html","e24e5556b615e5c1c8ec55817a3dba5d"],["/2019/10/13/在-React-如何实现一套优雅的-Toast-组件/index.html","2a83f5de5e9162cb1db0acbef2cbd1e7"],["/2019/11/02/实现一个简易版在线集成开发环境-IDE/index.html","42a5ce461dd524b2796e89624d62d848"],["/2019/11/21/使用-Docker-DaoCloud-来创建你的自动化持续发布流程/index.html","abfcee69ef6debafaf214f26c409c07d"],["/2019/11/29/Decorator-（装饰器）入门以及在前端接口逻辑层中的实践/index.html","ec56ebb635feda8ebcc8fce8e9c6ffc5"],["/about/index.html","90e62207ceb887a0c68931a60ff59238"],["/archives/2017/06/index.html","8e09aa0a30f8e38064f60cc4cf5457e3"],["/archives/2017/07/index.html","3f3e77785bf270a960781efa22dc80d8"],["/archives/2017/08/index.html","0f4a4b3ca0a41c26eeb029be8483699f"],["/archives/2017/09/index.html","c461fd949bc5d523ee68cf83370cc3e8"],["/archives/2017/10/index.html","b6994970fde5c7532e36dc3d62139f46"],["/archives/2017/11/index.html","62eae724bbdc18c648028d1cacf66dfd"],["/archives/2017/12/index.html","d863545d79bea6c94413a56a3e7be42c"],["/archives/2017/index.html","2fc7ecd9d500f3f2de9abf7c40d63f1f"],["/archives/2018/01/index.html","f53d574cdc889136b147d3e92ac8ee85"],["/archives/2018/02/index.html","f83003547e7ebfeb94916ab04436bf35"],["/archives/2018/03/index.html","31533f825c9883d918400f93a1932373"],["/archives/2018/04/index.html","a8f076a670e0d4165d78e75b68fb638f"],["/archives/2018/05/index.html","d8562e4a48da9e2f7c6d58a96b2844e0"],["/archives/2018/06/index.html","872186b20387ebe8a4548f6d5686198b"],["/archives/2018/07/index.html","d2e3a0b6e493a2e06554f12b4f42e512"],["/archives/2018/08/index.html","ca01f55ad930b571cfda7e6b93efb337"],["/archives/2018/09/index.html","647af3f0f7a33aff1ee8b7b0dfa66f87"],["/archives/2018/10/index.html","7ad3abf021616f42b804de192d485514"],["/archives/2018/11/index.html","727fa2d97f99dd947ba4070beb020cc6"],["/archives/2018/12/index.html","1445f4664dc7f6757354b99aad14024f"],["/archives/2018/index.html","0dcfa7bf65270f889bff7b6a408690e3"],["/archives/2019/05/index.html","44f50117ac8fdb72ad7d0263157b2150"],["/archives/2019/06/index.html","49fc853e45ea08d8b888d49d321be1a5"],["/archives/2019/07/index.html","49040df2d77af28fbefb81c08e5dd3ed"],["/archives/2019/08/index.html","d2642b8576e8f9c1ea7ab4e0c637ac4d"],["/archives/2019/10/index.html","3809d0ae873b0f145ce276e4beb411a4"],["/archives/2019/11/index.html","04847143fc65dece06fc8a8e5abd3b06"],["/archives/2019/index.html","82ce0fea3779eeab60346dd84bf819e7"],["/archives/index.html","7e69d8818db408a8695c6370937fd9d2"],["/categories/Bebel/index.html","b262d6a1ff2d9f232d615ee2dd646c59"],["/categories/CSS/index.html","ebe0a7fd10a9463f7b49eaebb198c6e4"],["/categories/HTML/index.html","bd1cc6b23e6356b4026ece5cd8223b67"],["/categories/JavaScript/index.html","62620d5b8395737051d0ab9bbba85365"],["/categories/Linux/index.html","2beab11747a94d02e7d74ab013035049"],["/categories/Node-js/index.html","ceaa3a8ebfdd72468bca338e59872e8d"],["/categories/PWA/index.html","f588f8fc8d58696d8a13ce15d71b52e0"],["/categories/React/index.html","ad2cb29aa67bfc944efd4eb43119a769"],["/categories/Webpack/index.html","37f7ed853663272954970548e040b398"],["/categories/http/index.html","f9e8cdc1d706dd93f5698794e9879135"],["/categories/index.html","35703772569f2445669721fbd58065e8"],["/categories/前端性能/index.html","0f2d42508cdf1008419288ed24af8134"],["/categories/实习/index.html","6f09e3f5bb8ce3d1cb1da4b97d378348"],["/categories/小程序/index.html","28dc6397867d7e3a0783520e0243919f"],["/categories/性能优化/index.html","5e95e536f18ad57b85411bf83ac9f02c"],["/categories/总结/index.html","67256d2d765a8c5ea5d736a5d6faaf4e"],["/categories/正则/index.html","fe5584495c42d02ee35f975a0acce8c1"],["/css/style.css","308db22cb200302813dd1cb3bf7895bc"],["/fonts/chancery/apple-chancery-webfont.eot","4ed7e60585ac6083e18a2df5a5c91cc1"],["/fonts/chancery/apple-chancery-webfont.svg","e325e4f2b070121ea7d4050023b9f6f2"],["/fonts/chancery/apple-chancery-webfont.ttf","49ec3c7bf028bca65ea9ef93614b2363"],["/fonts/chancery/apple-chancery-webfont.woff","2e9659ae195f4a74a314901d88520ad0"],["/index.html","2c22f411b28c362216ef951516940d0b"],["/js/src/even.js","5384d554fca3a6835dc527cc998ec7d5"],["/lib/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/jquery/jquery.min.js","e071abda8fe61194711cfc2ab99fe104"],["/lib/nprogress/nprogress.min.css","b56eecc7424d9754f2848d5df85fda0b"],["/lib/nprogress/nprogress.min.js","6310b6a231440f84d36211236e970709"],["/lib/pjax/jquery.pjax.min.js","17fbd50e03d8b8caa56dd3e01d098153"],["/lib/slideout/slideout.js","8d02b37e369a41a9cfe3d9f4b2204770"],["/lib/slideout/slideout.min.js","4bb5425e886f09bd7c3acf6757a9aa04"],["/page/2/index.html","801d2268222b27d18dfc474014a0296a"],["/page/3/index.html","688c4d43874eca60dbde68bd13c8cf95"],["/page/4/index.html","918ec6346483824aaf470fd32a8950d5"],["/page/5/index.html","dc5906eb84f682df13c7dbbc042ecb63"],["/page/6/index.html","d2688850eafa55009be5ce3d0d466a64"],["/page/7/index.html","6175e449adc7d30b399801f22e2a4069"],["/sw-register.js","3036aa7bb568c30fc9601414a2a32265"],["/tags/AJAX/index.html","840095b22f725481dcfade08f90b01af"],["/tags/AST/index.html","5977003e0ab9d1ba5468c3a9c728c860"],["/tags/Babel-Plugin/index.html","ca49cf62fbe5cfb7f970660efb219ab3"],["/tags/CSS-In-JS/index.html","541cc026a54887a9ae4907e7f7efd9b1"],["/tags/CSS-Sprite/index.html","d1f0506ef88c1c6af87fa6d572fc4ca8"],["/tags/CSS/index.html","702c9002694ada108d0ba41cee7a4235"],["/tags/Chrome-扩展程序/index.html","e8bc9a6abec466f253b425be3cb00acc"],["/tags/Docker/index.html","dc8c2829a1728383defec9e01a316030"],["/tags/EJS/index.html","a199d456fc260a17fe721944da06bb5d"],["/tags/ES6/index.html","fe8af2f12732b2df5b05b66c70ec191a"],["/tags/Express/index.html","a49ef745a73f5a6211e46e82988d8240"],["/tags/IDE/index.html","27529d58f34669575deffa6beebb52de"],["/tags/JavaScript/index.html","efdcff364ee9e6230375c23848813fdc"],["/tags/LeanCloud/index.html","6a3618c9e04400596c2edffbfef580d8"],["/tags/Mongo/index.html","9bd4bd65c4cb36d5df7f762f212232a3"],["/tags/Mongoose/index.html","76e052c0fdfe64c222315767d7f3f1c9"],["/tags/Multer/index.html","981f37c540634f74b3d53fb5eeb0ddcd"],["/tags/Node/index.html","12a1c90f2b3a85bdab0f8bcc6c3e7d1f"],["/tags/Normalize/index.html","f8699e5721fc449daf95b698b9824117"],["/tags/PM2/index.html","3207429e044a2569bfec6dfff5fe3a83"],["/tags/Promise/index.html","3197a3b90f01a924b155a0c47f594bc5"],["/tags/Redux/index.html","b647aa32ad91a7ff39f06b68bcab1f68"],["/tags/Reset/index.html","c95007919020a5e4e3999fef8e051755"],["/tags/Service-Worker/index.html","b300a3a352513077b085702c160686e9"],["/tags/axios/index.html","46319e7a8cfe8aab579545f609f2d4bb"],["/tags/flex/index.html","594e15c9efda772f91d18cab890c1012"],["/tags/html2canvas/index.html","fd81ea74cad84bc74b23fc790232ffab"],["/tags/http/index.html","bdc6ad3e781cb6573633ee416357a0f1"],["/tags/index.html","7851278f95c3c9e21d19cc0221905264"],["/tags/requestAnimationFrame/index.html","44aea512df6fb821b49d52c41d266a64"],["/tags/styled-components/index.html","0af93660de5446d7d4ed7f32dcb26235"],["/tags/this/index.html","eaa0b6ac93fd02dc29deb87298d94be2"],["/tags/webp/index.html","1658ef280fb7ae16b2291876db997ade"],["/tags/全景图/index.html","b89d9fffbc16d964e40e6319d4d4a279"],["/tags/定时邮件/index.html","b445609f1142d8511b285a9382a98163"],["/tags/异步/index.html","d46c8caad8bef90dcbe3b5de6f114691"],["/tags/总结/index.html","a55018ed8301dba0729a584633c4289e"],["/tags/爬出/index.html","f643c8c3df539699a6786d6f2abe25af"],["/tags/闭包/index.html","1f47849b32702be1f3a086f585217ffe"],["/tags/雪碧图/index.html","1d2a12965a360b32d13dbc2d53f2ecf1"]];
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
