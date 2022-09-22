/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/06/MySQL读写分离架构（MHA+Atlas）/index.html","1d68f74222fb4986c06547d6e93be42e"],["/2019/03/08/MySQL分布式架构-MyCAT/index.html","788332f067f3fb9e1aefbe9f4e15eb23"],["/2019/03/14/MySQL物理备份工具使用（Percona Xtrabackup）PBK   XBK/index.html","28b538911ef18b94f9e2e0fa03aeab94"],["/2019/03/19/MySQL 备份恢复（mysqldump）/index.html","30cb4e3b958288ce2d15f0d005d327e5"],["/2019/03/23/MySQL主从复制（Replication）/index.html","7da10714e80a8a8d0374a54577059c49"],["/2019/03/24/MySQL MHA 高可用/index.html","1e78d4ee4eb27cd4bd1e3df14fb6f51f"],["/2019/03/24/MySQL 优化/index.html","8c82cad22271b361ec061218543c39a9"],["/2019/03/26/MySQL 日志管理/index.html","2396963a675a7a612e02db8fe7db00a6"],["/2019/06/10/扩容根分区/index.html","648c828298ce4fb82b1aa95145f0470b"],["/2019/09/23/SonarQube代码扫描/index.html","5fd5eab902b1ccc68c9575dcd50af4b4"],["/2019/10/10/centos7生成随机数/index.html","e7843be1a4ba6cd2f3fe6fddcd507fcc"],["/2020/02/14/promehteus+grafana/index.html","cdb656f9dc1bbf569995e3a129791e3c"],["/2020/05/02/pipeline分布式构建和pipline基础语法/index.html","d4e448272f567f9c5230e66cdcff9dbf"],["/2020/05/13/iptables相关控制/index.html","f6274dd351b1cc6ae2bbf29dbb45d79c"],["/2020/09/08/centos7搭建svn服务器/index.html","ec32ab585cc8f066c5e755f444597ae3"],["/2020/10/15/ab命令压测/index.html","50c19fa6c0de3c10b59cf38529fb3d21"],["/2021/03/06/服务器硬件压力测试/index.html","0b1741678110132bee6355aa56da4100"],["/2021/08/24/rsync+inotify 实时备份/index.html","8f31e4a19cb75a9ba9880514dba256d5"],["/2022/05/04/部署harbor服务器（https_http）/index.html","a1333df9633eef59f99adad8d9b72408"],["/2022/06/20/kubeasz 二进制安装k8s高可用集群/index.html","9e2a2795c98658e6d5e43a807c25ad9c"],["/2022/06/21/kubernetes安装coreDNS组件/index.html","b89c183ffd44e62235e21ebbe5ef9f25"],["/2022/06/23/kubernetes-ETCD/index.html","b65bcbb38c76c5c5b34675e02503bbe8"],["/2022/06/24/kubeasz -etcd v3 API版本数据备份与恢复/index.html","c5ec61c41ee1ee68d43688bd9650dc04"],["/2022/07/01/Deployment副本控制器/index.html","a296cf84a952b969a6dbdb5bd509d17b"],["/2022/07/01/RC RS副本控制器/index.html","1dbd4599fee5656239fb10c48602688c"],["/2022/07/02/Configmap/index.html","208742fe10d91e73e7f2a05741dfc1c2"],["/2022/07/02/PV PVC/index.html","f916ba342901eea3a1b2a7644c0ba827"],["/2022/07/03/Service控制器/index.html","823fa47d05cc241c0b29d0df2d979c8e"],["/2022/07/03/Volume存储卷/index.html","314655321e8794828d0de1579297f15e"],["/2022/07/03/secret/index.html","5c6d74c21c501b4563789435631efd79"],["/2022/07/04/k8s-job cronjob/index.html","59908aa0e53e466995fd0e977fee10db"],["/2022/07/05/kubernetes HPA使用及测试/index.html","5d06eae9890775df33209b228479da35"],["/2022/08/02/使用阿里云oss静态页面部署服务/index.html","9a70a2ac71fe0258e5413aa209f0db4e"],["/2022/08/04/基于centos7的Openssh版本升级/index.html","8940728a503cf47652441cf9108fc6d9"],["/2022/08/16/Jenkins用户权限控制插件——Role-based Authorization Strategy/index.html","121f9258d3cc47a4395cb096639755e0"],["/2022/08/23/Pod异常状态排错/index.html","bff497c80772b3ae5be97e11c9600262"],["/2022/08/23/容器进程主动退出原因/index.html","d2d01a3c2ec8fadfa52a74c03bed8acf"],["/2022/08/24/kubernetes磁盘爆满故障处理/index.html","ffa6c251bd2121a5d1c679587b526abd"],["/2022/08/26/防止内存碎片化/index.html","ccd29447b04594872e9f7722785213c8"],["/2022/09/16/分析 ExitCode 定位 Pod 异常退出原因 /index.html","c55ed5341700ed9c24ab1e06e6fca445"],["/404.html","f7eac1b897c1354668e168965d4fa3b2"],["/archives/2019/03/index.html","742d9b28deeb88cb0c97bc6d2173ed73"],["/archives/2019/06/index.html","f3fa652c7eefc6a42ba0d2a878d78dbe"],["/archives/2019/09/index.html","58363ab5749cd0cb607bfcdac2dc65de"],["/archives/2019/10/index.html","e638a8a16869795d2a3ee1ba5e1547d1"],["/archives/2019/index.html","e8c06d59ee0a04067167d7adfe1cdf26"],["/archives/2019/page/2/index.html","0d427d0c4d29bf97bd66de57cf308317"],["/archives/2020/02/index.html","2fc84dbd4d602c46bbf267fc8504c9ad"],["/archives/2020/05/index.html","c2bb7dd1e3ce7adf1f8fd591aeff8cd1"],["/archives/2020/09/index.html","45143a32e2246d966a64862d0d9fd4b4"],["/archives/2020/10/index.html","3611e5068ff10f8979478ee621dc099e"],["/archives/2020/index.html","b97c7439ffcce484d3f1aed47b7918d7"],["/archives/2021/03/index.html","aceb07e2f46967c871285e4581c3d198"],["/archives/2021/08/index.html","27e83abde7ade500c66ea0e0ec24083b"],["/archives/2021/index.html","fa5227d6a821a7b38a178c04922e5fc7"],["/archives/2022/05/index.html","64d674dba213cf940f6a84666e3d61f7"],["/archives/2022/06/index.html","fa5e58e9457dd510c1d3489cad815bf0"],["/archives/2022/07/index.html","2f7e1dc40ee40d132526c4798562d731"],["/archives/2022/08/index.html","bbf316cb44dbcf9e1b84317f5e3356ca"],["/archives/2022/09/index.html","7d397672f8f1d8a5f8244fab51d0a57f"],["/archives/2022/index.html","76f11ac596862292e4c9f2782a9faf8d"],["/archives/2022/page/2/index.html","14408ae6e35977dbc1d4e7031890d44d"],["/archives/2022/page/3/index.html","faf635d4a1bc981a19bc9fb48952c20b"],["/archives/index.html","cc0b04622fa28f0d2497dd2f8c07930d"],["/archives/page/2/index.html","c78f78d00f247da830847187a1e89c82"],["/archives/page/3/index.html","75d2957665b8cda35807dfa3d50c433a"],["/archives/page/4/index.html","6aa9bc17b68ab66f0015e8d5856037bf"],["/categories/Docker/index.html","76014cbcf52f3d2126438d61fe378454"],["/categories/SonarQube/index.html","d8e73f287660c8b76001510f67cda7ac"],["/categories/index.html","c0a7c9c5d6de4d16fc7416be2247aad0"],["/categories/iptables/index.html","fdd7034eff63d3e9b8efe2892c024689"],["/categories/jenkins/index.html","aee84187580b94be5757352554d6dbd2"],["/categories/kubernetes/index.html","d077f16b4e5a94ff9bf06ad21400f40a"],["/categories/kubernetes/page/2/index.html","ba101546170b926505fc9de48186bad8"],["/categories/linux/index.html","e76da5d57c65da0a08c845e54046ecd0"],["/categories/mysql/index.html","71eb86769cf2fa727fcfb950119455dd"],["/categories/prometheus/index.html","34686fb42e0fd43287955eaa1fb887ed"],["/categories/svn/index.html","384adb0380cfbdaf42e9dfae984a06e9"],["/css/background.css","2942635f3e138bf3f0652299cf376c84"],["/css/custom.css","d8f1986b73cb77a533b567a4cb45437b"],["/css/index.css","d260c62dab02c343c586afb634d6004a"],["/css/lantern.css","c8483fed1ae9927bc6fad5817ee8d7bd"],["/css/rightMenu.css","036623ed00b65cd7a5b31dffe2a25c4e"],["/css/universe.css","52c685572ce95860fe8ddf20fb03df83"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/pasted-0.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-1.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-10.png","5d0d6d8aac46e34b30092f808950a9d3"],["/images/pasted-11.png","0784299af846da4168cad054741957f6"],["/images/pasted-12.png","e258ff6c3291821a2b9bbc6a25574624"],["/images/pasted-13.png","000a03ee30cefc56d0749078cf04a949"],["/images/pasted-14.png","8e547d601142697e448fbb4019bbb06a"],["/images/pasted-15.png","950cc9a62554680e2f0570b97e564259"],["/images/pasted-16.png","1707596a28a9b697891bc718c96175ee"],["/images/pasted-17.png","887da59e5df5c2af9d32fea3ffd5e3f7"],["/images/pasted-18.png","5f724508b49e8e7ba1305062ef8e150a"],["/images/pasted-19.png","a47092a023a70b2427014e75873bd6cd"],["/images/pasted-2.png","0a20960a3ee7446d34a8c4cc687b7adf"],["/images/pasted-3.png","7fc1a4e3fe8ab621dc0aa0ad4309f266"],["/images/pasted-4.png","d15fb5188609b444b3f6710ecf9b139c"],["/images/pasted-5.png","ad234216c2159391c25636525c314e41"],["/images/pasted-6.png","9600a48f0f98bce154df36c0a4dbbdc5"],["/images/pasted-7.png","b42122e7904f38ca3e9a32908f872f36"],["/images/pasted-8.png","f5b4699a2bd89e9027d889247b9a1283"],["/images/pasted-9.png","1537c8048729105cddb53dfa80ef72d6"],["/img/12.png","62ac1ef86217d9ac116fa3d22d78dd9b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","e26ff9d7f5db82408a3b9d320a46ed48"],["/img/centos.png","8c9381c65647670beea0443be09905d8"],["/img/desktop.jpg","13c1182799ca5447fd6493c209ae3512"],["/img/dongman.jpg","27894a3d2f116821649423e50a41d0a7"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/harbor.png","4b104adfa004775ce392037ccc140b62"],["/img/harbor2.png","7545fc3e108b3d60cf61ee2010d6e841"],["/img/inotify.png","9ccfc735d97078fba061989fdd50fed1"],["/img/iptables.png","20f88af231b35ba15839a4cc779e2222"],["/img/jenkins.png","5401eb529f0b795e0e549182e516072f"],["/img/jenkins1.png","dc3b8e8cb59e5864c4f7fe2dc13eab9f"],["/img/kubernetes.png","3428de86fd4ecb4eca7e4f3d539c59e2"],["/img/mysql.jpg","331b83381bdb0c15668bfdcd266b1034"],["/img/prometheus.png","7ab7b7c19a98e723a5f2646669a01311"],["/img/sonarqube.png","5216669e0fbcc6c387dbf29a5321bfe0"],["/img/svn.png","895bfaeb2797f9635f660b5ee00946eb"],["/img/touxiang.png","b17d8c86cf0c70c30e7d7327dd5c7e4c"],["/img/wechat.jpg","2516cfa5ceda8f42ac6ba9efec9d88b3"],["/index.html","f986e9f61a3f12d4998e15de4f9e7a6b"],["/js/chocolate.js","4826caaa586e99d8fee8c5afbb3e70c0"],["/js/custom.js","529d0eeff76b63203edf3305bfc831bc"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/rightMenu.js","68db67f6c6ee6b8db0eb0ddd7e85d2ef"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","fafdd847299ee73d084aa36ced9bce97"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/live2dw/assets/moc/tororo.2048/texture_00.png","9bd791736cfc91b62670dee5f7fbd45c"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","1c9033c859cb416d0e5115321e7260c4"],["/page/2/index.html","9662ce5f5a919f783edcee2babd98c7e"],["/page/3/index.html","d15ba2765995aed8f5958aa8fdb67541"],["/page/4/index.html","7f3767977b4dd31c261ed1a98863fb4e"],["/sw-register.js","2dd4f6317e39921f357e350b92654793"],["/tags/SonarQube/index.html","cbbd76309dcfe60007ae0b824d9e8899"],["/tags/centos/index.html","244ab56d7f7524d73a776d09d9843732"],["/tags/docker/index.html","1eb779f17321f6982c0be2f3622c0b11"],["/tags/grafana/index.html","01a3f132f8450d111b3d26b4b747e6b2"],["/tags/index.html","684a93881f736faa0cbeba1b6970cc9e"],["/tags/iptables/index.html","3c9399feca527b7d58fdd95cee63a23d"],["/tags/jenkins/index.html","ba807f3ec236cc7424dceaea0f8bb65a"],["/tags/kubernetes/index.html","82dab7c12b7d70185c63846dffac1768"],["/tags/kubernetes/page/2/index.html","d7405ff025e5110e55b1db8aee9f2eb7"],["/tags/linux/index.html","5245a0898cbe88e5e41934d1abc2b5b8"],["/tags/mysql/index.html","6c6ae6fdd0a5712d9935c5127dfd41f7"],["/tags/prometheus/index.html","6790524748b99d0346da62a80121839e"],["/tags/svn/index.html","390c4d93b54cdec2fa1ce00178ae9322"],["/tags/云原生/index.html","b5c6c454d02cf0f62b3adc03fe626db2"],["/tags/云原生/page/2/index.html","578ff9da0c942f60892b73f81176e7ac"],["/tags/阿里云/index.html","2c2a535a9272a59850fa5656d29ccdac"]];
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
