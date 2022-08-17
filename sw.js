/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/09/23/SonarQube代码扫描/index.html","4c2296dcacdad49d99a4edb64436c15f"],["/2020/05/13/iptables相关控制/index.html","4a187e0592841602cb59a1931aafce92"],["/2020/09/08/centos7搭建svn服务器/index.html","654e69d1f88bb42228b2c55e03ee8e09"],["/2021/08/24/rsync+inotify 实时备份/index.html","c0851623c84bb52b3178a55c64083479"],["/2022/05/04/部署harbor服务器（https_http）/index.html","ef8ebe7b3cfff949aef21e110a8f6b9b"],["/2022/06/20/kubeasz 二进制安装k8s高可用集群/index.html","03f803bab7df6c908e0f6c9a0755a375"],["/2022/06/21/kubernetes安装coreDNS组件/index.html","9058c0af5e344bfeac020ae55d767700"],["/2022/06/23/kubernetes-ETCD/index.html","ef892552f8463be75edae5dd5a7b3125"],["/2022/06/24/kubeasz -etcd v3 API版本数据备份与恢复/index.html","9573b0a00b19414034b652a6aa2191d2"],["/2022/07/01/Deployment副本控制器/index.html","d711f8710f67a23fcdddc3794866a44f"],["/2022/07/01/RC RS副本控制器/index.html","f2e2627f7bf0b60325ec71b1dda1ac64"],["/2022/07/02/Configmap/index.html","b46f182c2d556a066c9db0b2bba0e232"],["/2022/07/02/PV PVC/index.html","a4887bed87d2fd620aacafabe096a04a"],["/2022/07/03/Service控制器/index.html","90b9e987c0368cef829e70bb08366ce2"],["/2022/07/03/Volume存储卷/index.html","63fe259ff32aaa9314cc51993ccd16e7"],["/2022/07/03/secret/index.html","3093abd91ed82eebbd80b2257bf85ee0"],["/2022/07/04/k8s-job cronjob/index.html","01748dad37511b79c20091f0ee328088"],["/2022/08/02/使用阿里云oss静态页面部署服务/index.html","bdedfd1048d15f1370a564d850bbf777"],["/2022/08/04/基于centos7的Openssh版本升级/index.html","f9f47fa5eee729c5dfa45f4e5d912c46"],["/2022/08/16/Jenkins用户权限控制插件——Role-based Authorization Strategy/index.html","8b9da35ba446da9e1d1bdc0da269bb1b"],["/archives/2019/09/index.html","48efdfc481196648b43692827ed054b9"],["/archives/2019/index.html","05ecde6d5c288973174cc95208c21028"],["/archives/2020/05/index.html","d1bb55d1804711e22e51751d65742567"],["/archives/2020/09/index.html","55b114c0fd00f05964b51739167e1da7"],["/archives/2020/index.html","7fcd3105e373d6bbf171b1a8149eda06"],["/archives/2021/08/index.html","6432e5a7ef9e635b1b049a7bc5e57ac1"],["/archives/2021/index.html","4fbfe6185ec26c1fabe80a24badbb697"],["/archives/2022/05/index.html","9f2bd74f7117d9e563cb496cfd63591b"],["/archives/2022/06/index.html","21a666c91c15882402cd41ba5b9edf4f"],["/archives/2022/07/index.html","d17ddc12437e5f43bf7e6938b9bc3f1d"],["/archives/2022/08/index.html","5fd1cf262a54e2412f5073c6d499e68f"],["/archives/2022/index.html","f5330266ecc060e1b6137b51a541e3e8"],["/archives/2022/page/2/index.html","ea18cd7a4e08eb815cd46a4e355cda12"],["/archives/index.html","1a2cd03265baea368f05707c5ab3f66c"],["/archives/page/2/index.html","1056587fab02799d08d0cde32fbe5c00"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Docker/index.html","be1e2b2ec50b96a7909cfdd084d9e5b9"],["/categories/SonarQube/index.html","12a57b9c2912e920d84d0d34b94a90f3"],["/categories/index.html","fe6ab632644b66404d3eea1e2cfc8c38"],["/categories/iptables/index.html","534d191f56ff3a682cda5cc18a4ec93f"],["/categories/jenkins/index.html","fed8d2abd92dda6f15e1b9c02c8a9884"],["/categories/kubernetes/index.html","b491571221dab97353772dc1f996afd4"],["/categories/kubernetes/page/2/index.html","335cce2319f09ff1fc6fa98985d30577"],["/categories/linux/index.html","29c14d1b4478231199460a85bc1dadee"],["/categories/svn/index.html","b6fd9de6c21f9b648cb2aacd68bbca0a"],["/css/background.css","1833f67027acb059fbd2f5c40123f714"],["/css/index.css","45e7143f892ca71e075bb93d552ee4d6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/pasted-0.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-1.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-10.png","5d0d6d8aac46e34b30092f808950a9d3"],["/images/pasted-11.png","0784299af846da4168cad054741957f6"],["/images/pasted-12.png","e258ff6c3291821a2b9bbc6a25574624"],["/images/pasted-13.png","000a03ee30cefc56d0749078cf04a949"],["/images/pasted-14.png","8e547d601142697e448fbb4019bbb06a"],["/images/pasted-15.png","950cc9a62554680e2f0570b97e564259"],["/images/pasted-16.png","1707596a28a9b697891bc718c96175ee"],["/images/pasted-17.png","887da59e5df5c2af9d32fea3ffd5e3f7"],["/images/pasted-18.png","5f724508b49e8e7ba1305062ef8e150a"],["/images/pasted-19.png","a47092a023a70b2427014e75873bd6cd"],["/images/pasted-2.png","0a20960a3ee7446d34a8c4cc687b7adf"],["/images/pasted-3.png","7fc1a4e3fe8ab621dc0aa0ad4309f266"],["/images/pasted-4.png","d15fb5188609b444b3f6710ecf9b139c"],["/images/pasted-5.png","ad234216c2159391c25636525c314e41"],["/images/pasted-6.png","9600a48f0f98bce154df36c0a4dbbdc5"],["/images/pasted-7.png","b42122e7904f38ca3e9a32908f872f36"],["/images/pasted-8.png","f5b4699a2bd89e9027d889247b9a1283"],["/images/pasted-9.png","1537c8048729105cddb53dfa80ef72d6"],["/img/12.png","62ac1ef86217d9ac116fa3d22d78dd9b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/centos.png","21108b558fea54f6e6acaa00a49be309"],["/img/desktop.jpg","13c1182799ca5447fd6493c209ae3512"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/harbor.png","4b104adfa004775ce392037ccc140b62"],["/img/inotify.png","9ccfc735d97078fba061989fdd50fed1"],["/img/iptables.png","adbf0f41b1af8495c7f9330d88ae03af"],["/img/jenkins.png","38a775b0b873368c4efaa9bfb5760068"],["/img/jenkins1.png","dc3b8e8cb59e5864c4f7fe2dc13eab9f"],["/img/kubernetes.png","64a7709d18ce7f703f86108ab5fd844a"],["/img/sonarqube.png","965b7f7a941c46e10d3412fe294294dd"],["/img/svn.png","417b61fc1f0b02b68fc12a467bf6406c"],["/img/touxiang.png","b17d8c86cf0c70c30e7d7327dd5c7e4c"],["/index.html","93e02164300af9ef1ab81f2e0cdafc0b"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","92238d7f8d91732d8520bfd4b0a5bee6"],["/page/2/index.html","dc5d4cd855bb020798293e1fcc4490d1"],["/sw-register.js","946369087d132e50cef6f9d5ac52dc9c"],["/tags/SonarQube/index.html","183356bdcf491b479959ad68610b2f6c"],["/tags/centos/index.html","a7c2a217b86ad07d89f89a9525e99517"],["/tags/docker/index.html","5ae117807844cc24ce0dc3cb99f34e19"],["/tags/index.html","be1bc49d4a6721c50d216e9e0c41fdf8"],["/tags/iptables/index.html","9fb83091d56abd674bc2697a4ad73ce0"],["/tags/jenkins/index.html","9526c788c9cfc53da0d49c4c26fa8434"],["/tags/kubernetes/index.html","cd29c964db26d6f309933c99b03cfdfd"],["/tags/kubernetes/page/2/index.html","f96d4cf1fecc18f2fffee16ad1e0242a"],["/tags/linux/index.html","7ebde31a2d95062257040226eb29a663"],["/tags/svn/index.html","80f99d70ac2995cfd3603f9dcc858a55"],["/tags/云原生/index.html","551672c6cd833840b20d867c6f5d0db3"],["/tags/云原生/page/2/index.html","af4adbc6a8b06f391082ff72f9160ab7"],["/tags/阿里云/index.html","fe8599322e608bbbc34515c582664917"]];
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
