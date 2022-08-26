/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/09/23/SonarQube代码扫描/index.html","f57abc7271ef46f0a6d6cb039d6d458f"],["/2020/05/13/iptables相关控制/index.html","076a32d4e4a621bb9cdfd15067045ae3"],["/2020/09/08/centos7搭建svn服务器/index.html","c140bef016b6d233a2a55ebbb3615707"],["/2021/08/24/rsync+inotify 实时备份/index.html","9816f11234762ec21d39cf7c9409099f"],["/2022/05/04/部署harbor服务器（https_http）/index.html","681ebde0fb94dcc718379905e1d821fd"],["/2022/06/20/kubeasz 二进制安装k8s高可用集群/index.html","2c598f77106f609ae2c5f08f64b1b4f9"],["/2022/06/21/kubernetes安装coreDNS组件/index.html","e7caf6a6a002b6681a8ca30493b29371"],["/2022/06/23/kubernetes-ETCD/index.html","dea26b26b5c9566a5de4b3e29501d179"],["/2022/06/24/kubeasz -etcd v3 API版本数据备份与恢复/index.html","5c37a04e972355121b7cc9899e013055"],["/2022/07/01/Deployment副本控制器/index.html","8a143ea5c86333d339134c54f85d9fdc"],["/2022/07/01/RC RS副本控制器/index.html","783bf52cb90264d772a8ee3a74c80005"],["/2022/07/02/Configmap/index.html","9a91876ce974446c08a5da71fdda7c81"],["/2022/07/02/PV PVC/index.html","7adffd385a3fd7a22c7f4b37d7ebf627"],["/2022/07/03/Service控制器/index.html","89bc4e68cd8ab24986c685be88d9f145"],["/2022/07/03/Volume存储卷/index.html","dce5ed4c290941f2aaa428b34d2b1369"],["/2022/07/03/secret/index.html","f57e1c429b2d60e9699bce3379ba881c"],["/2022/07/04/k8s-job cronjob/index.html","7662ba530842e691ec4da648f6a44e47"],["/2022/07/05/kubernetes HPA使用及测试/index.html","5f4588fe8b31b1d3f20d863db60b2ef6"],["/2022/08/02/使用阿里云oss静态页面部署服务/index.html","5f2d939e3f417d1bda6797fa81f9d4fc"],["/2022/08/04/基于centos7的Openssh版本升级/index.html","2acb285f572991358e753ff861ffee09"],["/2022/08/16/Jenkins用户权限控制插件——Role-based Authorization Strategy/index.html","2a116523e464ff4cadebc89cdd2d1199"],["/archives/2019/09/index.html","e2e8fb5e6f3861beab05b1469fa8f0b3"],["/archives/2019/index.html","b82b5353edfaa0bffe30f1b5d0417357"],["/archives/2020/05/index.html","0dc6b84bc94f6e412feef661ac629a95"],["/archives/2020/09/index.html","f2234765dbdb0b6655698781ee1f9589"],["/archives/2020/index.html","918d8cb57963aebaaaa109590f54c77c"],["/archives/2021/08/index.html","5ecbe8375481f798349784b4707d8a05"],["/archives/2021/index.html","c58302508ebe538fb63f6dbc250a0d7f"],["/archives/2022/05/index.html","d522f8e322a9ba0389266c2fb0de4ece"],["/archives/2022/06/index.html","3c1cce2d747a4956f819ac9dfef25c16"],["/archives/2022/07/index.html","c6982941bfeaad3ac86f376cf0395c94"],["/archives/2022/08/index.html","0ae3bdd977737ceeddc721cd885c7ae6"],["/archives/2022/index.html","f55246219bc41f6cadc9cf634b95a309"],["/archives/2022/page/2/index.html","0062b92484dfdf471836529aae7bc69b"],["/archives/index.html","de0761fd1214a1a21c8743c545625ed9"],["/archives/page/2/index.html","74c424bf0d17e7f8689dbb851ef438b0"],["/archives/page/3/index.html","ebaaa82f14b4b3452cad618f109fbecd"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Docker/index.html","c75f90f2c73400d21681b137012e4e10"],["/categories/SonarQube/index.html","73815627507d283452bc06b74e5b37b9"],["/categories/index.html","7482aeeae78011ab563bf9b02cd54ea3"],["/categories/iptables/index.html","739ddd3f89d73f99c65a81337d6e44de"],["/categories/jenkins/index.html","6c38d5e5017be131ecf9c3b5c8f4071c"],["/categories/kubernetes/index.html","f4fb0b0d8249165c8a3e9eb358cae4f8"],["/categories/kubernetes/page/2/index.html","812e1260490381139f2a5b4dadbffb1f"],["/categories/linux/index.html","d5831a5885fcb66ecc839bffceb2fbe7"],["/categories/svn/index.html","062d3a234e0ae9a373f1894293179354"],["/css/background.css","2942635f3e138bf3f0652299cf376c84"],["/css/index.css","5b1fe0f7d0e912ed2fcc08d0ee2c45e9"],["/css/universe.css","52c685572ce95860fe8ddf20fb03df83"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/pasted-0.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-1.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-10.png","5d0d6d8aac46e34b30092f808950a9d3"],["/images/pasted-11.png","0784299af846da4168cad054741957f6"],["/images/pasted-12.png","e258ff6c3291821a2b9bbc6a25574624"],["/images/pasted-13.png","000a03ee30cefc56d0749078cf04a949"],["/images/pasted-14.png","8e547d601142697e448fbb4019bbb06a"],["/images/pasted-15.png","950cc9a62554680e2f0570b97e564259"],["/images/pasted-16.png","1707596a28a9b697891bc718c96175ee"],["/images/pasted-17.png","887da59e5df5c2af9d32fea3ffd5e3f7"],["/images/pasted-18.png","5f724508b49e8e7ba1305062ef8e150a"],["/images/pasted-19.png","a47092a023a70b2427014e75873bd6cd"],["/images/pasted-2.png","0a20960a3ee7446d34a8c4cc687b7adf"],["/images/pasted-3.png","7fc1a4e3fe8ab621dc0aa0ad4309f266"],["/images/pasted-4.png","d15fb5188609b444b3f6710ecf9b139c"],["/images/pasted-5.png","ad234216c2159391c25636525c314e41"],["/images/pasted-6.png","9600a48f0f98bce154df36c0a4dbbdc5"],["/images/pasted-7.png","b42122e7904f38ca3e9a32908f872f36"],["/images/pasted-8.png","f5b4699a2bd89e9027d889247b9a1283"],["/images/pasted-9.png","1537c8048729105cddb53dfa80ef72d6"],["/img/12.png","62ac1ef86217d9ac116fa3d22d78dd9b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","e26ff9d7f5db82408a3b9d320a46ed48"],["/img/centos.png","21108b558fea54f6e6acaa00a49be309"],["/img/desktop.jpg","13c1182799ca5447fd6493c209ae3512"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/harbor.png","4b104adfa004775ce392037ccc140b62"],["/img/inotify.png","9ccfc735d97078fba061989fdd50fed1"],["/img/iptables.png","adbf0f41b1af8495c7f9330d88ae03af"],["/img/jenkins.png","38a775b0b873368c4efaa9bfb5760068"],["/img/jenkins1.png","dc3b8e8cb59e5864c4f7fe2dc13eab9f"],["/img/kubernetes.png","64a7709d18ce7f703f86108ab5fd844a"],["/img/sonarqube.png","965b7f7a941c46e10d3412fe294294dd"],["/img/svn.png","417b61fc1f0b02b68fc12a467bf6406c"],["/img/touxiang.png","b17d8c86cf0c70c30e7d7327dd5c7e4c"],["/img/wechat.jpg","2516cfa5ceda8f42ac6ba9efec9d88b3"],["/index.html","8f8ea22415398ad80894d5a33407ac11"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","fafdd847299ee73d084aa36ced9bce97"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","745b0140e1d7021514fc5f7256b6ed50"],["/page/2/index.html","57972203807e87db34671fb2db955fe9"],["/page/3/index.html","016ffae751f1e6cc64f7a885f3caeda5"],["/sw-register.js","f9644b81f2f6d6146437f4794c974cf1"],["/tags/SonarQube/index.html","475b934f099b680ad54c5a195ac02041"],["/tags/centos/index.html","1c3ddcf8b473c7913e98cd16fa2debd9"],["/tags/docker/index.html","44e44692a09774bcd5ac674586a842f0"],["/tags/index.html","a4f9ee36f4f043360dbed240dde726da"],["/tags/iptables/index.html","75440249ef5465bf23d3ea8189bab8a8"],["/tags/jenkins/index.html","ecbf4f732a61700f64d02abb4ade21bf"],["/tags/kubernetes/index.html","f5935939ce56e51125491ee7749891f5"],["/tags/kubernetes/page/2/index.html","16b7d3bda11e9b7e6c2d14029571961a"],["/tags/linux/index.html","dd64ab48b6a493d4241cf6e9bbdc075e"],["/tags/svn/index.html","525e7f103141a1fcda25d9ec8a8afbb9"],["/tags/云原生/index.html","f117f487afc7baa265cbe1f73c8d9b34"],["/tags/云原生/page/2/index.html","9ff688cfde66155e9a4fe1a1077ae164"],["/tags/阿里云/index.html","5439f9130612d898ea11a6ca68d09174"]];
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
