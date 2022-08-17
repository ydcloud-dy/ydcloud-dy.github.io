/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/09/23/SonarQube代码扫描/index.html","3eaf6bd439c001240ba30e99a0cd7fdc"],["/2020/05/13/iptables相关控制/index.html","d519a114e9961f741259525242496c3b"],["/2020/09/08/centos7搭建svn服务器/index.html","e28ebdbe7314d3b8025ea2182210a3d4"],["/2021/08/24/rsync+inotify 实时备份/index.html","ad8cac6a2819e6248f0e816f65236731"],["/2022/05/04/部署harbor服务器（https_http）/index.html","a7963969fb4094962769f232ec705b12"],["/2022/06/20/kubeasz 二进制安装k8s高可用集群/index.html","ebc73c694b8e0783113b7ee30c4c070f"],["/2022/06/21/kubernetes安装coreDNS组件/index.html","aeee8df2645ebd4cb2b8a8efea46426a"],["/2022/06/23/kubernetes-ETCD/index.html","f4e7251654128a799bad2d6d8481a497"],["/2022/06/24/kubeasz -etcd v3 API版本数据备份与恢复/index.html","62d504d671a104e0495e096b89964864"],["/2022/07/01/Deployment副本控制器/index.html","318b12a0a8ea8c6e93ddc6e052c7d976"],["/2022/07/01/RC RS副本控制器/index.html","f7c7ded3f437d038137ec18f1bf0044a"],["/2022/07/02/Configmap/index.html","c17275ec9902c4eacb3b40bccb73f214"],["/2022/07/02/PV PVC/index.html","c666cce35131c13141a1ad151091f99e"],["/2022/07/03/Service控制器/index.html","05cfd1bd02b9057f543ac3bb6a7628fb"],["/2022/07/03/Volume存储卷/index.html","d138a941cf0fd63510c4da73f13a154b"],["/2022/07/03/secret/index.html","4343619007888b9cdcaece4789414452"],["/2022/07/04/k8s-job cronjob/index.html","3eb58f86ac7982a9a7e891658c3a5ea4"],["/2022/08/02/使用阿里云oss静态页面部署服务/index.html","47ec57318f0acd6e99892f1059e7c23e"],["/2022/08/04/基于centos7的Openssh版本升级/index.html","bdd80de91021bad9ac784f073a12d00c"],["/2022/08/16/Jenkins用户权限控制插件——Role-based Authorization Strategy/index.html","c55fcbb5957fe5c33480eef4e780bf1a"],["/archives/2019/09/index.html","67c54ebf6c61eb7538cd636c0ec4b7b6"],["/archives/2019/index.html","d9fa978413c8c14dd2c45e4b907b78c1"],["/archives/2020/05/index.html","e4f21aa8cbd0db52da413f51d64f2b78"],["/archives/2020/09/index.html","6b66e5954caeb1fd1e824c9b77f3edc8"],["/archives/2020/index.html","42f11b379fbf6e60669c9b146f1f2588"],["/archives/2021/08/index.html","cf5664aee2adaba280e5ec4ac2817918"],["/archives/2021/index.html","4365c39cfb293302b2964e8597bc0016"],["/archives/2022/05/index.html","eef515ce24f4efac1b806781435d70de"],["/archives/2022/06/index.html","96c469417b683190590e8a02f8873511"],["/archives/2022/07/index.html","afb7ba286b5f0af3d0d885652d1591a5"],["/archives/2022/08/index.html","4c43bacb2ad9ae67b55c7f5c8be0dcbb"],["/archives/2022/index.html","7cb9df43b7c2aba2b0a9c567e1838ad5"],["/archives/2022/page/2/index.html","6ffd0c44bcb7ca8e56b805c5732d05da"],["/archives/index.html","78f4eecb740338ef0b1a69ed6df39056"],["/archives/page/2/index.html","7b1882305ac097aad4b915adfc58f07e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Docker/index.html","ea97e5f3075154523352d02fa6d97162"],["/categories/SonarQube/index.html","b123adb48d38f7e4bc73d4ae6bffc2a5"],["/categories/index.html","c8882c9c6b589055a57a5d8304bead2c"],["/categories/iptables/index.html","0ba2d265fb67fd99e30a4049f9a1791d"],["/categories/jenkins/index.html","fcb1c999cdf867a411ab215e6fec9d3b"],["/categories/kubernetes/index.html","a2cdfa3dc0eb7806af267794aeb0483f"],["/categories/kubernetes/page/2/index.html","ba8fbabd311b302679afe834c18fd144"],["/categories/linux/index.html","aea5effc5ffac664aa7dd72909192584"],["/categories/svn/index.html","a539a9279dceb45572bd6b8babd18c13"],["/css/background.css","1833f67027acb059fbd2f5c40123f714"],["/css/index.css","c51f853733311461408c15a1e1133485"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/pasted-0.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-1.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-10.png","5d0d6d8aac46e34b30092f808950a9d3"],["/images/pasted-11.png","0784299af846da4168cad054741957f6"],["/images/pasted-12.png","e258ff6c3291821a2b9bbc6a25574624"],["/images/pasted-13.png","000a03ee30cefc56d0749078cf04a949"],["/images/pasted-14.png","8e547d601142697e448fbb4019bbb06a"],["/images/pasted-15.png","950cc9a62554680e2f0570b97e564259"],["/images/pasted-16.png","1707596a28a9b697891bc718c96175ee"],["/images/pasted-17.png","887da59e5df5c2af9d32fea3ffd5e3f7"],["/images/pasted-18.png","5f724508b49e8e7ba1305062ef8e150a"],["/images/pasted-19.png","a47092a023a70b2427014e75873bd6cd"],["/images/pasted-2.png","0a20960a3ee7446d34a8c4cc687b7adf"],["/images/pasted-3.png","7fc1a4e3fe8ab621dc0aa0ad4309f266"],["/images/pasted-4.png","d15fb5188609b444b3f6710ecf9b139c"],["/images/pasted-5.png","ad234216c2159391c25636525c314e41"],["/images/pasted-6.png","9600a48f0f98bce154df36c0a4dbbdc5"],["/images/pasted-7.png","b42122e7904f38ca3e9a32908f872f36"],["/images/pasted-8.png","f5b4699a2bd89e9027d889247b9a1283"],["/images/pasted-9.png","1537c8048729105cddb53dfa80ef72d6"],["/img/12.png","62ac1ef86217d9ac116fa3d22d78dd9b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/centos.png","21108b558fea54f6e6acaa00a49be309"],["/img/desktop.jpg","13c1182799ca5447fd6493c209ae3512"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/harbor.png","4b104adfa004775ce392037ccc140b62"],["/img/inotify.png","9ccfc735d97078fba061989fdd50fed1"],["/img/iptables.png","adbf0f41b1af8495c7f9330d88ae03af"],["/img/jenkins.png","38a775b0b873368c4efaa9bfb5760068"],["/img/jenkins1.png","dc3b8e8cb59e5864c4f7fe2dc13eab9f"],["/img/kubernetes.png","64a7709d18ce7f703f86108ab5fd844a"],["/img/sonarqube.png","965b7f7a941c46e10d3412fe294294dd"],["/img/svn.png","417b61fc1f0b02b68fc12a467bf6406c"],["/img/touxiang.png","b17d8c86cf0c70c30e7d7327dd5c7e4c"],["/index.html","e12244a7b7893e812de2abcd32ee872d"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","97d1523c804ea057d121d00eedf47601"],["/page/2/index.html","5a1c070616ef824ee180fbcac479043a"],["/sw-register.js","64645727378cd80634c0427b5b66d19f"],["/tags/SonarQube/index.html","6218e6d8d69e5d69b56c1da98f9b8e44"],["/tags/centos/index.html","f84a26dcb83a068c7d05daeaa6cee024"],["/tags/docker/index.html","8dcbb727f6d66383931ca9625ede5ea8"],["/tags/index.html","b4446d294d96b909b932ce8336f79cf7"],["/tags/iptables/index.html","f095193e72a34f0e24e5b9965f6ac14e"],["/tags/jenkins/index.html","348bb8f5ca4b910aa58e47615962991b"],["/tags/kubernetes/index.html","66a8626cf3ff7519270bf4da753c5541"],["/tags/kubernetes/page/2/index.html","6a4974c2b9703c572b7ecdd64b08b59c"],["/tags/linux/index.html","5d43caefda5f1c38f77a1046c9b065c9"],["/tags/svn/index.html","0bebd9be82edc72806a9459f10819ada"],["/tags/云原生/index.html","31f24776545ce8bf7beb72b4421c277e"],["/tags/云原生/page/2/index.html","31f29f1fd11d2c85b2365328d556f244"],["/tags/阿里云/index.html","fedfe948bf43b29447a462990f7f961c"]];
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
