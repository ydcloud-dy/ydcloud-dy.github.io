/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/06/MySQL读写分离架构（MHA+Atlas）/index.html","80586c64486258200d0b37e6a2050603"],["/2019/03/08/MySQL分布式架构-MyCAT/index.html","cd0e95f15f7046890f74e76d52b3af98"],["/2019/03/14/MySQL物理备份工具使用（Percona Xtrabackup）PBK   XBK/index.html","7febb89f38afe79c0245ba72bd8a59f8"],["/2019/03/19/MySQL 备份恢复（mysqldump）/index.html","0d398f0bdcbe6b258387fc491af95727"],["/2019/03/23/MySQL主从复制（Replication）/index.html","f3db6c89475f2a744f560aa2bdc07041"],["/2019/03/24/MySQL MHA 高可用/index.html","f51b7dda53ee22647e5f2197f41162b0"],["/2019/03/24/MySQL 优化/index.html","738c3db94c25adcc34cb9164786efd74"],["/2019/03/26/MySQL 日志管理/index.html","2b1c39bd38e7be8882e74662cfd80f4c"],["/2019/06/10/扩容根分区/index.html","1cdcbdc9a787787e401871915d968782"],["/2019/09/23/SonarQube代码扫描/index.html","82af9213e74f944130589cca2979392f"],["/2019/10/10/centos7生成随机数/index.html","835a8f47c61d94f67bf4e1702d606772"],["/2020/02/14/promehteus+grafana/index.html","175bbd84d9d7a6f3bb8cab4be4e6b8d6"],["/2020/05/02/pipeline分布式构建和pipline基础语法/index.html","29f05347921428633e75f1d4a308f615"],["/2020/05/13/iptables相关控制/index.html","c4709296d7cfd9220e0a2f311d5e4020"],["/2020/09/08/centos7搭建svn服务器/index.html","9f40388456d0e82f5aeb43d1c93d6fe3"],["/2020/10/15/ab命令压测/index.html","41d4469b02d0ec7504aefaf3d73ad5b9"],["/2021/03/06/服务器硬件压力测试/index.html","dd518ccdf02e0286b5f619b95cf0109e"],["/2021/08/24/rsync+inotify 实时备份/index.html","125577493fa6ac7a2e1a60f7acaad6d8"],["/2022/05/04/部署harbor服务器（https_http）/index.html","9da8cd9db03e0fd772d899f515e34f6f"],["/2022/06/20/kubeasz 二进制安装k8s高可用集群/index.html","11f9e7573ac7ff8fba8ca39af44a66eb"],["/2022/06/21/kubernetes安装coreDNS组件/index.html","102580617f892db5255bbaaece8dbddb"],["/2022/06/23/kubernetes-ETCD/index.html","f4e85c58a197620bf1d617d2dabece49"],["/2022/06/24/kubeasz -etcd v3 API版本数据备份与恢复/index.html","e1ed85ef9eba476bb01ee304f5f847e1"],["/2022/07/01/Deployment副本控制器/index.html","b8b7612596203ee154b7dfaf6809269b"],["/2022/07/01/RC RS副本控制器/index.html","f9bc91eabe3947b5759c04850f390c9f"],["/2022/07/02/Configmap/index.html","53e044ecc1108da30dd231ae65e31d31"],["/2022/07/02/PV PVC/index.html","52f3a3d7c7ad25eb1329272f12ad90c9"],["/2022/07/03/Service控制器/index.html","66e53c4e4bae41d562d0effa73eb98fc"],["/2022/07/03/Volume存储卷/index.html","19303a569b80765e5c0e766a78ff9431"],["/2022/07/03/secret/index.html","81d92b2c31fceed6a761af295cee0d20"],["/2022/07/04/k8s-job cronjob/index.html","f878ae1a7afe609338005ee44d9f4a00"],["/2022/07/05/kubernetes HPA使用及测试/index.html","dc7965a4bf63304d71e75f19db33c26c"],["/2022/08/02/使用阿里云oss静态页面部署服务/index.html","13e9bd3e40fea78d3c5c63f72f167d37"],["/2022/08/04/基于centos7的Openssh版本升级/index.html","bd94919b43f965f1026e33dc6af459c6"],["/2022/08/13/防止内存碎片化/index.html","e755c33e121e6a5a51ac2064d769d887"],["/2022/08/15/Pod异常状态排错/index.html","ff624d0e4c99c031e3c6d9d4729e677e"],["/2022/08/16/Jenkins用户权限控制插件——Role-based Authorization Strategy/index.html","a9832fcfaef5d89988ce3a78306b2bf5"],["/2022/08/19/kubernetes磁盘爆满故障处理/index.html","731ca436381838566b83d511c7c41908"],["/2022/08/23/分析 ExitCode 定位 Pod 异常退出原因 /index.html","3011234fd93fdb195a7c55be00247219"],["/2022/08/23/容器进程主动退出原因/index.html","a62de21214867d7455c7e5685bf6cb0c"],["/404.html","851ed0616e2ea6b51fbe654fdbb267a0"],["/archives/2019/03/index.html","df6cfb079d1c5f373019bb2e5c2fe82a"],["/archives/2019/06/index.html","856837c0175cc4dd6fc9487c1dd1ea12"],["/archives/2019/09/index.html","70c5df7679161529e15960f3f50e7a83"],["/archives/2019/10/index.html","8205a20b94e75e13fa71bafd262aa295"],["/archives/2019/index.html","e453ef7ee573839c339eca8af34fdc86"],["/archives/2019/page/2/index.html","20fd42fc14ac950558d60265871e96c6"],["/archives/2020/02/index.html","e9a21c81725d68279fddc278d80f6603"],["/archives/2020/05/index.html","e5637fde6e596125f057c6b4c71dc57a"],["/archives/2020/09/index.html","3e1c5f2044c82330ada3e33b77b953f5"],["/archives/2020/10/index.html","d697f9608b41aa8d62de2de499b2b09a"],["/archives/2020/index.html","3c434e5e063b45e65611faf08495d95a"],["/archives/2021/03/index.html","4e2a87c33178a5320685b9cbb70df0a5"],["/archives/2021/08/index.html","3bffe8f239018e0a1ab049d51c0ff7d9"],["/archives/2021/index.html","0e27dea227d24546297ef7ed88f55aae"],["/archives/2022/05/index.html","1fdd5b74fd1f4f26e6b2cec4c11e15fa"],["/archives/2022/06/index.html","ff672d2b7ff12c494b3a028db3f39b0b"],["/archives/2022/07/index.html","4f3460e02f93f415811e1dcb60833c86"],["/archives/2022/08/index.html","bbc3df3b1012bdd0bdcc464a68ecf5ea"],["/archives/2022/index.html","245a0056763fd316eea488b51d075463"],["/archives/2022/page/2/index.html","5dba4ae7e2674b0eb7464118cd7ec45e"],["/archives/2022/page/3/index.html","01a5f9566c31455a1450705903f98b24"],["/archives/index.html","98da64acffc3ca7221a5d442a47ea06f"],["/archives/page/2/index.html","f2acb208eefe650add34e0c89f5c9811"],["/archives/page/3/index.html","49ef63e781047221f92ccb1ebf553b65"],["/archives/page/4/index.html","5b7762f154ceec4c11ef610ebbbaa693"],["/categories/Docker/index.html","2c390fb7f70e069e22a0a13ad76d6f33"],["/categories/SonarQube/index.html","f52da4b9fb3d101873ee8f3a30d001bd"],["/categories/index.html","7affe5d97357f19dbaa10dbbc8a64ef4"],["/categories/iptables/index.html","0b226c05ffc22ef15554867bcd15242e"],["/categories/jenkins/index.html","1aa169d58a2b84473fa093064bdb76cd"],["/categories/kubernetes/index.html","1f149172db0bde1d385367fe9239996b"],["/categories/kubernetes/page/2/index.html","a2b0e5740931f5be622a45f95e9ca6b2"],["/categories/linux/index.html","0687134845b0b743ca662a313fe72f50"],["/categories/mysql/index.html","d393983d9442fc6d122d388864254bdd"],["/categories/prometheus/index.html","fd76532b3c0e1cccaddb189625961183"],["/categories/svn/index.html","01207457fdce4609ab6b4fc77654fc92"],["/css/background.css","2942635f3e138bf3f0652299cf376c84"],["/css/custom.css","d8f1986b73cb77a533b567a4cb45437b"],["/css/index.css","d260c62dab02c343c586afb634d6004a"],["/css/lantern.css","c8483fed1ae9927bc6fad5817ee8d7bd"],["/css/rightMenu.css","036623ed00b65cd7a5b31dffe2a25c4e"],["/css/universe.css","52c685572ce95860fe8ddf20fb03df83"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/pasted-0.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-1.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-10.png","5d0d6d8aac46e34b30092f808950a9d3"],["/images/pasted-11.png","0784299af846da4168cad054741957f6"],["/images/pasted-12.png","e258ff6c3291821a2b9bbc6a25574624"],["/images/pasted-13.png","000a03ee30cefc56d0749078cf04a949"],["/images/pasted-14.png","8e547d601142697e448fbb4019bbb06a"],["/images/pasted-15.png","950cc9a62554680e2f0570b97e564259"],["/images/pasted-16.png","1707596a28a9b697891bc718c96175ee"],["/images/pasted-17.png","887da59e5df5c2af9d32fea3ffd5e3f7"],["/images/pasted-18.png","5f724508b49e8e7ba1305062ef8e150a"],["/images/pasted-19.png","a47092a023a70b2427014e75873bd6cd"],["/images/pasted-2.png","0a20960a3ee7446d34a8c4cc687b7adf"],["/images/pasted-3.png","7fc1a4e3fe8ab621dc0aa0ad4309f266"],["/images/pasted-4.png","d15fb5188609b444b3f6710ecf9b139c"],["/images/pasted-5.png","ad234216c2159391c25636525c314e41"],["/images/pasted-6.png","9600a48f0f98bce154df36c0a4dbbdc5"],["/images/pasted-7.png","b42122e7904f38ca3e9a32908f872f36"],["/images/pasted-8.png","f5b4699a2bd89e9027d889247b9a1283"],["/images/pasted-9.png","1537c8048729105cddb53dfa80ef72d6"],["/img/12.png","62ac1ef86217d9ac116fa3d22d78dd9b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","e26ff9d7f5db82408a3b9d320a46ed48"],["/img/centos.png","8c9381c65647670beea0443be09905d8"],["/img/desktop.jpg","13c1182799ca5447fd6493c209ae3512"],["/img/dongman.jpg","27894a3d2f116821649423e50a41d0a7"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/harbor.png","4b104adfa004775ce392037ccc140b62"],["/img/harbor2.png","7545fc3e108b3d60cf61ee2010d6e841"],["/img/inotify.png","9ccfc735d97078fba061989fdd50fed1"],["/img/iptables.png","20f88af231b35ba15839a4cc779e2222"],["/img/jenkins.png","5401eb529f0b795e0e549182e516072f"],["/img/jenkins1.png","dc3b8e8cb59e5864c4f7fe2dc13eab9f"],["/img/kubernetes.png","3428de86fd4ecb4eca7e4f3d539c59e2"],["/img/mysql.jpg","331b83381bdb0c15668bfdcd266b1034"],["/img/prometheus.png","7ab7b7c19a98e723a5f2646669a01311"],["/img/sonarqube.png","5216669e0fbcc6c387dbf29a5321bfe0"],["/img/svn.png","895bfaeb2797f9635f660b5ee00946eb"],["/img/touxiang.png","b17d8c86cf0c70c30e7d7327dd5c7e4c"],["/img/wechat.jpg","2516cfa5ceda8f42ac6ba9efec9d88b3"],["/index.html","5ca1e754ff32e50b87b99c6567535e0a"],["/js/chocolate.js","4826caaa586e99d8fee8c5afbb3e70c0"],["/js/custom.js","529d0eeff76b63203edf3305bfc831bc"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/rightMenu.js","68db67f6c6ee6b8db0eb0ddd7e85d2ef"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","fafdd847299ee73d084aa36ced9bce97"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/live2dw/assets/moc/tororo.2048/texture_00.png","9bd791736cfc91b62670dee5f7fbd45c"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","ca812cce8329029b9a5e310411b2539e"],["/page/2/index.html","6d88bb7905ce737e9f3b1f119bd94c18"],["/page/3/index.html","3baf039ec280bb36a4fbc0ee83f02d9b"],["/page/4/index.html","fe4ec38cfdf9fb255f0d05e1f2b326c0"],["/sw-register.js","6baaa8bbb9f76eb8c48bc2dd76b0af76"],["/tags/SonarQube/index.html","967eb4855ab965208efe734a08f23db3"],["/tags/centos/index.html","169edeaf36e101bd647eaa270f382dfa"],["/tags/docker/index.html","aab97a62794aed0cc9915a37dafe3032"],["/tags/grafana/index.html","77041038454bc7e020ba3c341b892e4d"],["/tags/index.html","3cb801f21a6e9726d533de4b578b920d"],["/tags/iptables/index.html","4ddd30428b4608e7e1a4173f512c41ed"],["/tags/jenkins/index.html","c8b833f797c89ba1eaebd86c441317b6"],["/tags/kubernetes/index.html","ff47f6610ba336481688bd74266771b6"],["/tags/kubernetes/page/2/index.html","43d8490261131880ac7d3a3a56229bd8"],["/tags/linux/index.html","cee722ccecb9a0b83291fa1ae87bdd73"],["/tags/mysql/index.html","ca44f37bc9e52ee7387b802ce334d11b"],["/tags/prometheus/index.html","1ee2253458bb52d0c436049ab5db9517"],["/tags/svn/index.html","78409c4c710ea514b2edb18c329c5bfb"],["/tags/云原生/index.html","15cff9e9d67a72bf2d52cdd639366dd0"],["/tags/云原生/page/2/index.html","f0f6e032749f7ba844aafca2e80b3e7a"],["/tags/阿里云/index.html","bf8868440e3126a3d200a62bbb3469b9"]];
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
