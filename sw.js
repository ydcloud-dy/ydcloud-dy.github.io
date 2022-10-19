/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/06/MySQL读写分离架构（MHA+Atlas）/index.html","afcb221d726b80ea770a0ca3e07926d6"],["/2019/03/08/MySQL分布式架构-MyCAT/index.html","f3a2b8065127e499f3c9fce687e30487"],["/2019/03/14/MySQL物理备份工具使用（Percona Xtrabackup）PBK   XBK/index.html","a5bad204a0718a3c4bb8fe0df2770450"],["/2019/03/19/MySQL 备份恢复（mysqldump）/index.html","09c06666ccf5e92f61a124648b29d5c5"],["/2019/03/23/MySQL主从复制（Replication）/index.html","242d5e7464e2e2e147266d257426f33d"],["/2019/03/24/MySQL MHA 高可用/index.html","ffdf01e83917485261b64945a8984daa"],["/2019/03/24/MySQL 优化/index.html","b3ae98b2b728221d7a869b570ec643b4"],["/2019/03/26/MySQL 日志管理/index.html","5196b36847d8d7929d52387cd0c6f320"],["/2019/06/10/扩容根分区/index.html","5e716c2e689b956fcade481258893306"],["/2019/09/23/SonarQube代码扫描/index.html","b294a110864d11a9ea5af4b70851b79d"],["/2019/10/10/centos7生成随机数/index.html","4d64c9612e4d23ca1f44d331bd067c0b"],["/2020/02/14/promehteus+grafana/index.html","004ec6b1ef3f86a35ea1eb7eefde57d9"],["/2020/05/02/pipeline分布式构建和pipline基础语法/index.html","73bd37a381a66b42084f0324f0c6daae"],["/2020/05/13/iptables相关控制/index.html","3c1a3b4427bcb082414517ea5084ef84"],["/2020/09/08/centos7搭建svn服务器/index.html","be53e71c8234e244703029ad75a5beb6"],["/2020/10/15/ab命令压测/index.html","aca794b1ce0d27fd5b8d0d2bf8819b4c"],["/2021/03/06/服务器硬件压力测试/index.html","13df52b7b08b6aa3e71a4c0e27af94f4"],["/2021/08/24/rsync+inotify 实时备份/index.html","65929944cd4157c1a1a22b3f5d87249f"],["/2022/05/04/部署harbor服务器（https_http）/index.html","882d00ab90af5d814cb285ba598ad7aa"],["/2022/05/23/记录服务器被挖矿的处理方法/index.html","e4cc18b433297a5f7b0ab7d7b558c85a"],["/2022/06/20/kubeasz 二进制安装k8s高可用集群/index.html","e85d96d0d6761d49a8c5aefa7f0b3340"],["/2022/06/21/kubernetes安装coreDNS组件/index.html","3cbb6fa4bda84cbbfd77f99a3050d940"],["/2022/06/23/kubernetes-ETCD/index.html","bc2fc9db7a05bf6cfbc5158b2d132b23"],["/2022/06/24/kubeasz -etcd v3 API版本数据备份与恢复/index.html","3b83aff3224cf0013c0dda791061f547"],["/2022/07/01/Deployment副本控制器/index.html","6a21afc4a99d236f81e654455e9d4672"],["/2022/07/01/RC RS副本控制器/index.html","4be0aa3a0b60a5d9377f9131cec04f7b"],["/2022/07/02/Configmap/index.html","4aa9df7cf257aacb819d0ab5cf9e9897"],["/2022/07/02/PV PVC/index.html","6e6ae597749c7054986ef898a57a4002"],["/2022/07/03/Service控制器/index.html","bbbd8e9fb95761fdf31b731ce9434107"],["/2022/07/03/Volume存储卷/index.html","8d17ecb79fba6cef21769fa8f943f16d"],["/2022/07/03/secret/index.html","ab14dc1e15f537f5b505e50ac22a6425"],["/2022/07/04/k8s-job cronjob/index.html","e54c0ea7b32dfe95a4485e08af59d7a7"],["/2022/07/05/kubernetes HPA使用及测试/index.html","321f8afcb77775fb666ff68d0b692c30"],["/2022/08/02/使用阿里云oss静态页面部署服务/index.html","9652659d6c2eccd201255d08c26cb548"],["/2022/08/04/基于centos7的Openssh版本升级/index.html","08b4d9d878b5d93d9e731bd24f51ba24"],["/2022/08/13/防止内存碎片化/index.html","c505722c2b07892a802df96eaeee24e9"],["/2022/08/15/Pod异常状态排错/index.html","f3d652416e21e22bbcb5e8e238c23455"],["/2022/08/16/Jenkins用户权限控制插件——Role-based Authorization Strategy/index.html","f86dfdccd82cfbf663c36e9fdf9ba7ca"],["/2022/08/19/kubernetes磁盘爆满故障处理/index.html","36d19ec1b3f179ab32c5593ff8b11756"],["/2022/08/23/分析 ExitCode 定位 Pod 异常退出原因 /index.html","777702976a29f339609149a00bb94091"],["/2022/08/23/容器进程主动退出原因/index.html","81a35441e58955095927396b13f399b6"],["/2022/08/29/test/index.html","5e250d2b79b68e67ae9395bdef25f703"],["/404.html","59b719b24092cd4754462d3eccd7022e"],["/archives/2019/03/index.html","3f7c36cd08bd0d72200dc4172d345e80"],["/archives/2019/06/index.html","beca2f414a907580ef08a02c34195eb9"],["/archives/2019/09/index.html","8d2eab35cf15c675eb473ac801d14c54"],["/archives/2019/10/index.html","723910437e6be62b647eaae8daf53eea"],["/archives/2019/index.html","4e3c10d75ca0d06d94c97df887fcfd5d"],["/archives/2019/page/2/index.html","abb9e3c40acefd0eee11f6b4bf18c11e"],["/archives/2020/02/index.html","f6c8624e39097d47a10a087c2a38c25a"],["/archives/2020/05/index.html","e43d46c3b4a272c6c347d7d001e735fc"],["/archives/2020/09/index.html","c81a9e9333aa9a1167b1bdf499a9a2fc"],["/archives/2020/10/index.html","bb4ce13e9a7aa83d6a1d23e8d407a77a"],["/archives/2020/index.html","4cef5106ddfb79e10bf6cf0f5318e710"],["/archives/2021/03/index.html","5d4defa46bfd1f47428a299f9edfb611"],["/archives/2021/08/index.html","e26ef1a8a4be8c83f470eaae0b34916e"],["/archives/2021/index.html","8045cca4b6d53c4d3373ab42cf3dc6d5"],["/archives/2022/05/index.html","3546bee62f9b1beb90f441a70e3db49b"],["/archives/2022/06/index.html","6d1471251b2185b455fd3c7e9477feb7"],["/archives/2022/07/index.html","315d64e85049c8cb7427b4ae2ef69bd8"],["/archives/2022/08/index.html","46ccdc62b370089b62f86432a7000db9"],["/archives/2022/index.html","3e03a6249223d22427907511a9d57484"],["/archives/2022/page/2/index.html","914062d61555999bea0fc0afbc2c2b54"],["/archives/2022/page/3/index.html","6c77942f5ba4757c45c9db9911321419"],["/archives/index.html","5269d3192f37701c6794728ce48d2dcc"],["/archives/page/2/index.html","27c5c0ac41b814926150a93cc2076f1c"],["/archives/page/3/index.html","ccac7c6d6a685ad765e34bb4215aa1af"],["/archives/page/4/index.html","16ed2044741d28d570cadb7f6b89fca5"],["/archives/page/5/index.html","264628666de4662fc220a5d6a83271b3"],["/categories/Docker/index.html","6424d8a62ba97807fd7026bffee236b7"],["/categories/SonarQube/index.html","9fcc0550978f8d32f3c192e73d4387dd"],["/categories/index.html","3d8cc1efef07e4d11e31c328a50d0fdc"],["/categories/iptables/index.html","213c03656289fd34016e8f317cd69da1"],["/categories/jenkins/index.html","b3d206d15c77c6d46cd5a5573d5bd4d6"],["/categories/kubernetes/index.html","e5c2cf5cb5d566f8863c32fd011dd100"],["/categories/kubernetes/page/2/index.html","31f57ff4e822fcc5aae5871d366d8916"],["/categories/linux/index.html","2c6811858e6eff1f8c1bbb51ecf7b65a"],["/categories/mysql/index.html","fbc53492016422db08fb3c344b701756"],["/categories/prometheus/index.html","e448d0cc3e351152be73eaec680c3986"],["/categories/svn/index.html","e9a7cf3cd036dac51469f693ef9cd2c5"],["/css/background.css","2942635f3e138bf3f0652299cf376c84"],["/css/custom.css","d8f1986b73cb77a533b567a4cb45437b"],["/css/index.css","d260c62dab02c343c586afb634d6004a"],["/css/lantern.css","c8483fed1ae9927bc6fad5817ee8d7bd"],["/css/rightMenu.css","036623ed00b65cd7a5b31dffe2a25c4e"],["/css/universe.css","52c685572ce95860fe8ddf20fb03df83"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/pasted-0.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-1.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-10.png","5d0d6d8aac46e34b30092f808950a9d3"],["/images/pasted-11.png","0784299af846da4168cad054741957f6"],["/images/pasted-12.png","e258ff6c3291821a2b9bbc6a25574624"],["/images/pasted-13.png","000a03ee30cefc56d0749078cf04a949"],["/images/pasted-14.png","8e547d601142697e448fbb4019bbb06a"],["/images/pasted-15.png","950cc9a62554680e2f0570b97e564259"],["/images/pasted-16.png","1707596a28a9b697891bc718c96175ee"],["/images/pasted-17.png","887da59e5df5c2af9d32fea3ffd5e3f7"],["/images/pasted-18.png","5f724508b49e8e7ba1305062ef8e150a"],["/images/pasted-19.png","a47092a023a70b2427014e75873bd6cd"],["/images/pasted-2.png","0a20960a3ee7446d34a8c4cc687b7adf"],["/images/pasted-3.png","7fc1a4e3fe8ab621dc0aa0ad4309f266"],["/images/pasted-4.png","d15fb5188609b444b3f6710ecf9b139c"],["/images/pasted-5.png","ad234216c2159391c25636525c314e41"],["/images/pasted-6.png","9600a48f0f98bce154df36c0a4dbbdc5"],["/images/pasted-7.png","b42122e7904f38ca3e9a32908f872f36"],["/images/pasted-8.png","f5b4699a2bd89e9027d889247b9a1283"],["/images/pasted-9.png","1537c8048729105cddb53dfa80ef72d6"],["/img/12.png","62ac1ef86217d9ac116fa3d22d78dd9b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","e26ff9d7f5db82408a3b9d320a46ed48"],["/img/centos.png","8c9381c65647670beea0443be09905d8"],["/img/desktop.jpg","13c1182799ca5447fd6493c209ae3512"],["/img/dongman.jpg","27894a3d2f116821649423e50a41d0a7"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/harbor.png","4b104adfa004775ce392037ccc140b62"],["/img/harbor2.png","7545fc3e108b3d60cf61ee2010d6e841"],["/img/inotify.png","9ccfc735d97078fba061989fdd50fed1"],["/img/iptables.png","20f88af231b35ba15839a4cc779e2222"],["/img/jenkins.png","5401eb529f0b795e0e549182e516072f"],["/img/jenkins1.png","dc3b8e8cb59e5864c4f7fe2dc13eab9f"],["/img/kubernetes.png","3428de86fd4ecb4eca7e4f3d539c59e2"],["/img/mysql.jpg","331b83381bdb0c15668bfdcd266b1034"],["/img/prometheus.png","7ab7b7c19a98e723a5f2646669a01311"],["/img/sonarqube.png","5216669e0fbcc6c387dbf29a5321bfe0"],["/img/svn.png","895bfaeb2797f9635f660b5ee00946eb"],["/img/touxiang.png","b17d8c86cf0c70c30e7d7327dd5c7e4c"],["/img/wechat.jpg","2516cfa5ceda8f42ac6ba9efec9d88b3"],["/index.html","9a63d1726c38af5985fb550ee699926d"],["/js/chocolate.js","4826caaa586e99d8fee8c5afbb3e70c0"],["/js/custom.js","529d0eeff76b63203edf3305bfc831bc"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/rightMenu.js","68db67f6c6ee6b8db0eb0ddd7e85d2ef"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","fafdd847299ee73d084aa36ced9bce97"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/live2dw/assets/moc/tororo.2048/texture_00.png","9bd791736cfc91b62670dee5f7fbd45c"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","afa588d95915dd0c2c2bd5f1d8f24893"],["/page/2/index.html","283869f47911cca97f7c63fca626a29f"],["/page/3/index.html","42818a98b2862c94e78badb0f0f2ae13"],["/page/4/index.html","ab274e89dd4d9f4536958d614ee8c926"],["/page/5/index.html","881478c2daf6bea35fdc666e7416cf5b"],["/sw-register.js","9b9edd554e0ef19e5fb745a950c05767"],["/tags/SonarQube/index.html","ad4f808f302c87269b7f4f3ad3c03c40"],["/tags/centos/index.html","3b8a3ea1e60897405a46cd3524dbf7ff"],["/tags/docker/index.html","6532553800a4b3198d4bbf40f698c541"],["/tags/grafana/index.html","af55c2692560be5ca4e2a17020c58a5d"],["/tags/index.html","f598c2bc4f54137b95c46723e7d9e226"],["/tags/iptables/index.html","8ffc1fb46f8ea4430f40d4ea31785af2"],["/tags/jenkins/index.html","809891c47e60ec7d2ac7bd8e304113eb"],["/tags/kubernetes/index.html","37a5122843d033d079d230a494fd4efe"],["/tags/kubernetes/page/2/index.html","f0db7e60903143fe26e1352868a064ea"],["/tags/linux/index.html","2c5827382dedda3cf999adb56fb02cbb"],["/tags/mysql/index.html","979a9c0e80c6e1bb9e103ab951f7591c"],["/tags/prometheus/index.html","71dbe894de488aa64fd939901aca7bed"],["/tags/svn/index.html","b2a27a7bda6fd015dd780655fd4c85b2"],["/tags/云原生/index.html","8b09878785ab1e6c37f8223ecca8e4a9"],["/tags/云原生/page/2/index.html","30fd08f764c485b522b83e480309e012"],["/tags/阿里云/index.html","2b01c402cc238731ef5cd232a83f6a59"]];
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
