/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/06/MySQL读写分离架构（MHA+Atlas）/index.html","353adbb42e76e4a159378e3aa57c2e3a"],["/2019/03/08/MySQL分布式架构-MyCAT/index.html","324033f6719765942a23ee66bb768a3c"],["/2019/03/14/MySQL物理备份工具使用（Percona Xtrabackup）PBK   XBK/index.html","56310d5a93cc427d99df1df88fdad16d"],["/2019/03/19/MySQL 备份恢复（mysqldump）/index.html","26efa5224117adcfef22fd907ece84b9"],["/2019/03/23/MySQL主从复制（Replication）/index.html","21f82fcbaf911299c48f132a240684f9"],["/2019/03/24/MySQL MHA 高可用/index.html","e8f140eee3ba780b8cbb4e64c7fd6996"],["/2019/03/24/MySQL 优化/index.html","104cbe200c51bdf097d7dd941bc4c631"],["/2019/03/26/MySQL 日志管理/index.html","852cae0b0e6bff497fdcc4344369f682"],["/2019/06/10/扩容根分区/index.html","8875f0fab77fbee50927186082fc7c7d"],["/2019/09/23/SonarQube代码扫描/index.html","685a03b7ccaba23ded97585278c931c4"],["/2019/10/10/centos7生成随机数/index.html","9d67e70726f34b497fb23cac5c13284e"],["/2020/02/14/promehteus+grafana/index.html","3cc248ad2904d13c83b6366e316c59c9"],["/2020/05/02/pipeline分布式构建和pipline基础语法/index.html","574cdba0b47dd6ee4a96c0ccb93fe138"],["/2020/05/13/iptables相关控制/index.html","df8446a5a692103aa7457f3d2d5c7cfe"],["/2020/09/08/centos7搭建svn服务器/index.html","8630e9950dfc378b5692c2f04876969d"],["/2020/10/15/ab命令压测/index.html","33fbd855fb9263406f853580167a80c4"],["/2021/08/24/rsync+inotify 实时备份/index.html","95c473a6c1bd4fab8f77487ac1cabf2d"],["/2022/05/04/部署harbor服务器（https_http）/index.html","5f9c670d82af20628fee9dca68469c5e"],["/2022/06/20/kubeasz 二进制安装k8s高可用集群/index.html","874ffe89c8e09f9d4f1f42e534ce6154"],["/2022/06/21/kubernetes安装coreDNS组件/index.html","207f6dd9b8b4b0e77e3c9f24803990e8"],["/2022/06/23/kubernetes-ETCD/index.html","a605ea9dbbfc36cbefe473598a8b4cbd"],["/2022/06/24/kubeasz -etcd v3 API版本数据备份与恢复/index.html","3c4725b9a7a325f231a24242ae25b05e"],["/2022/07/01/Deployment副本控制器/index.html","cbc45324c095dc44e4b1189d246fb3a2"],["/2022/07/01/RC RS副本控制器/index.html","ab1aed8cd7178a16ba661a7d67d3e8bc"],["/2022/07/02/Configmap/index.html","41d9a4351f75031ec8515582a77b2bdf"],["/2022/07/02/PV PVC/index.html","611a5f6ef8a5f8d702674e815a5078e0"],["/2022/07/03/Service控制器/index.html","20b9f275baf85bebd5df234ff59be742"],["/2022/07/03/Volume存储卷/index.html","2131495bf1d63e36ae2601bc4e29cf46"],["/2022/07/03/secret/index.html","6ce99e7ebc7404e37e4a97db15db4eba"],["/2022/07/04/k8s-job cronjob/index.html","f1ed4596e08dd736c82c9136c5630ad2"],["/2022/07/05/kubernetes HPA使用及测试/index.html","13419cee39e5279579162df3317438dc"],["/2022/08/02/使用阿里云oss静态页面部署服务/index.html","0e640f997facc15ddaeb4ea0c3f0f6d1"],["/2022/08/04/基于centos7的Openssh版本升级/index.html","dff5fc7bc1314889c76c2c1893c1970b"],["/2022/08/16/Jenkins用户权限控制插件——Role-based Authorization Strategy/index.html","37b78a24ec3aa812ec527de95391520b"],["/404.html","cb13e6d5d5717a9be166a0ee107ec332"],["/archives/2019/03/index.html","9b029c8f91fe157227678d23b5691118"],["/archives/2019/06/index.html","d8d761379bf7f0de704f729f62660933"],["/archives/2019/09/index.html","200cd5abd881f4649f7e20b2c788225c"],["/archives/2019/10/index.html","c2d3b2ae74fa7f3b43cbc27bd6855596"],["/archives/2019/index.html","bf94f2bfd4fa5ae1f23ac6f3ef924bfe"],["/archives/2019/page/2/index.html","5e8c84aba349649f836fdc833d2174db"],["/archives/2020/02/index.html","3ec8a92156237a49a474d3521c90aab0"],["/archives/2020/05/index.html","d6c1a3978d6ad3251ee5787db7b11387"],["/archives/2020/09/index.html","94723dae3ca09376f62aabff94784616"],["/archives/2020/10/index.html","7b697cd2e92af3f92806c115e373f169"],["/archives/2020/index.html","2c71c7bd7d1185b4560670d54d2a5e4e"],["/archives/2021/08/index.html","318a8cc79c267e691c0f7f07a2800802"],["/archives/2021/index.html","94f29a7c76b9d3081062d8a183a0233e"],["/archives/2022/05/index.html","d9d16d6718a6404ff760f4ddd1d50563"],["/archives/2022/06/index.html","6186d4df6a0272d07ea44fb7ce10e851"],["/archives/2022/07/index.html","8ad4a6a6985ba101a4cdeb455f43f226"],["/archives/2022/08/index.html","3f883333f2e3541d95f583b89e58bbc3"],["/archives/2022/index.html","8ab65cba4e168875fe5ba8be4c5d964b"],["/archives/2022/page/2/index.html","1fcc742f7177505211f8d5e5e976d02b"],["/archives/index.html","d176469c62c7d594037729115b33d339"],["/archives/page/2/index.html","467b1ae55cf00442c0ef011325bfc3ce"],["/archives/page/3/index.html","10eaa5800bef641923c8c172b42df3f6"],["/archives/page/4/index.html","e547da54f85e7961d65cbf5aad8e743e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Docker/index.html","108ca27ea3da94c5b7b95f959d34b89b"],["/categories/SonarQube/index.html","a1c540d41c1393bf9f069825b95802d4"],["/categories/index.html","20c400040219d762b2c569ccf4f046f5"],["/categories/iptables/index.html","dd4229b5ae164b2a3be9b17491104fd5"],["/categories/jenkins/index.html","7680761834ad4646752cb1c595095048"],["/categories/kubernetes/index.html","ab9ec87f0180f2060da32570addd1eb1"],["/categories/kubernetes/page/2/index.html","721d53cb4683b14db6cbc69708f94e38"],["/categories/linux/index.html","fa486a9c2e5549c1d301d29ecb243be3"],["/categories/mysql/index.html","66efe71d062c67bb91e029ac9f0e5023"],["/categories/prometheus/index.html","c6e901d928a4cfa58d86da89dc3b243c"],["/categories/svn/index.html","62d647cd44684c78a3c6029951aab3ac"],["/css/background.css","2942635f3e138bf3f0652299cf376c84"],["/css/custom.css","d8f1986b73cb77a533b567a4cb45437b"],["/css/index.css","d260c62dab02c343c586afb634d6004a"],["/css/lantern.css","c8483fed1ae9927bc6fad5817ee8d7bd"],["/css/rightMenu.css","036623ed00b65cd7a5b31dffe2a25c4e"],["/css/universe.css","52c685572ce95860fe8ddf20fb03df83"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/pasted-0.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-1.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-10.png","5d0d6d8aac46e34b30092f808950a9d3"],["/images/pasted-11.png","0784299af846da4168cad054741957f6"],["/images/pasted-12.png","e258ff6c3291821a2b9bbc6a25574624"],["/images/pasted-13.png","000a03ee30cefc56d0749078cf04a949"],["/images/pasted-14.png","8e547d601142697e448fbb4019bbb06a"],["/images/pasted-15.png","950cc9a62554680e2f0570b97e564259"],["/images/pasted-16.png","1707596a28a9b697891bc718c96175ee"],["/images/pasted-17.png","887da59e5df5c2af9d32fea3ffd5e3f7"],["/images/pasted-18.png","5f724508b49e8e7ba1305062ef8e150a"],["/images/pasted-19.png","a47092a023a70b2427014e75873bd6cd"],["/images/pasted-2.png","0a20960a3ee7446d34a8c4cc687b7adf"],["/images/pasted-3.png","7fc1a4e3fe8ab621dc0aa0ad4309f266"],["/images/pasted-4.png","d15fb5188609b444b3f6710ecf9b139c"],["/images/pasted-5.png","ad234216c2159391c25636525c314e41"],["/images/pasted-6.png","9600a48f0f98bce154df36c0a4dbbdc5"],["/images/pasted-7.png","b42122e7904f38ca3e9a32908f872f36"],["/images/pasted-8.png","f5b4699a2bd89e9027d889247b9a1283"],["/images/pasted-9.png","1537c8048729105cddb53dfa80ef72d6"],["/img/12.png","62ac1ef86217d9ac116fa3d22d78dd9b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","e26ff9d7f5db82408a3b9d320a46ed48"],["/img/centos.png","8c9381c65647670beea0443be09905d8"],["/img/desktop.jpg","13c1182799ca5447fd6493c209ae3512"],["/img/dongman.jpg","27894a3d2f116821649423e50a41d0a7"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/harbor.png","4b104adfa004775ce392037ccc140b62"],["/img/harbor2.png","7545fc3e108b3d60cf61ee2010d6e841"],["/img/inotify.png","9ccfc735d97078fba061989fdd50fed1"],["/img/iptables.png","20f88af231b35ba15839a4cc779e2222"],["/img/jenkins.png","5401eb529f0b795e0e549182e516072f"],["/img/jenkins1.png","dc3b8e8cb59e5864c4f7fe2dc13eab9f"],["/img/kubernetes.png","3428de86fd4ecb4eca7e4f3d539c59e2"],["/img/mysql.jpg","331b83381bdb0c15668bfdcd266b1034"],["/img/prometheus.png","7ab7b7c19a98e723a5f2646669a01311"],["/img/sonarqube.png","5216669e0fbcc6c387dbf29a5321bfe0"],["/img/svn.png","895bfaeb2797f9635f660b5ee00946eb"],["/img/touxiang.png","b17d8c86cf0c70c30e7d7327dd5c7e4c"],["/img/wechat.jpg","2516cfa5ceda8f42ac6ba9efec9d88b3"],["/index.html","c3717712d1103c7ed54e4ab60ddc1ff3"],["/js/chocolate.js","4826caaa586e99d8fee8c5afbb3e70c0"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/rightMenu.js","68db67f6c6ee6b8db0eb0ddd7e85d2ef"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","fafdd847299ee73d084aa36ced9bce97"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/live2dw/assets/moc/tororo.2048/texture_00.png","9bd791736cfc91b62670dee5f7fbd45c"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","6a306d3c5763ca7163494b0e49abd440"],["/page/2/index.html","5329c5e387c4258718e6fa18a28bcb4f"],["/page/3/index.html","1f245c89da067bb4a42de633608b07e9"],["/page/4/index.html","f23cb28ca4adddee8ef721a4503e2b4f"],["/sw-register.js","4dc42fdaf8190cc0bbd6845db3f8a478"],["/tags/SonarQube/index.html","add84e3d354bfb791f68c06681d71889"],["/tags/centos/index.html","56ed5d1552442538a76c1ac5bee63a9e"],["/tags/docker/index.html","6a6cd7c9ea704be365962bad127c847f"],["/tags/grafana/index.html","9ed88d215b2bddd967d33f157848d980"],["/tags/index.html","cd9b524c1eda1542986def946f455b42"],["/tags/iptables/index.html","ed020cd7f4bca5e0c97117cb32a809f4"],["/tags/jenkins/index.html","de74b4574fb5adddb6b07174fe6d0757"],["/tags/kubernetes/index.html","c0be169cef3423a0ea0e1785d0e544a0"],["/tags/kubernetes/page/2/index.html","b3b7c10b562d128eebae1e8eb884e235"],["/tags/linux/index.html","7b883f48330514c3805d1b852b419bf9"],["/tags/mysql/index.html","3461c72f38e5013e2b79287fca039cec"],["/tags/prometheus/index.html","d43da1b85ad08315db7efc73dcb545d8"],["/tags/svn/index.html","a0065ed691f6d6d6ecc84e9165a5ef2d"],["/tags/云原生/index.html","cfde7df9cc1e42d10ba700e7891c876e"],["/tags/云原生/page/2/index.html","fdb5455078664877f99058f70179d3a4"],["/tags/阿里云/index.html","81ca30d7cb6f7ca474a0cb1ed9aec3f7"]];
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
