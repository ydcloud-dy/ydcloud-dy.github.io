/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/09/23/SonarQube代码扫描/index.html","76c4083dbe380e5ae1e535d6b0a814af"],["/2020/05/13/iptables相关控制/index.html","5c98904980f8ba0de75cc39522732193"],["/2020/09/08/centos7搭建svn服务器/index.html","d4a6a24b2e259c55f5c4f4c099f21cb6"],["/2021/08/24/rsync+inotify 实时备份/index.html","639abfd978be6c210ad73f2d019b150b"],["/2022/05/04/部署harbor服务器（https_http）/index.html","422b13fa09fbe7753018f77118dda04f"],["/2022/06/20/kubeasz 二进制安装k8s高可用集群/index.html","f2d4f4fe2519a07bff533802b6aa66df"],["/2022/06/21/kubernetes安装coreDNS组件/index.html","33d5fc3e2fad7807e93154a95f027479"],["/2022/06/23/kubernetes-ETCD/index.html","a07a1a2ed833822970232c0fbd258737"],["/2022/06/24/kubeasz -etcd v3 API版本数据备份与恢复/index.html","9a7549a7b0b271eb2564bed51e68e7d2"],["/2022/07/01/Deployment副本控制器/index.html","011f9813bf4afbd61cbee796687342ae"],["/2022/07/01/RC RS副本控制器/index.html","ba38d946a01273c2c46ab861a1881f7a"],["/2022/07/02/Configmap/index.html","b4d211e0b5e4bfa3ab2d86637847d7f2"],["/2022/07/02/PV PVC/index.html","b2cc1c36379a2b1c8f64b557477e40cb"],["/2022/07/03/Service控制器/index.html","0b99f43b5d4980dcbed8478f4690c345"],["/2022/07/03/Volume存储卷/index.html","31c515f8b85e99ec01b361b18a21839f"],["/2022/07/03/secret/index.html","8daeb1fb308e78f58992d6834a6bc076"],["/2022/07/04/k8s-job cronjob/index.html","a108d7e7192f09cf4a2be358b914c7bf"],["/2022/08/02/使用阿里云oss静态页面部署服务/index.html","afa3f329c960349bb32589f56a2f79fc"],["/2022/08/04/基于centos7的Openssh版本升级/index.html","10a47e459847eb9bd7daa47fae03cf88"],["/2022/08/16/Jenkins用户权限控制插件——Role-based Authorization Strategy/index.html","51bb6ab04cc26ea4b280a38f7c95a1bb"],["/archives/2019/09/index.html","006b7c0f6f98face18526d29ffba522d"],["/archives/2019/index.html","5ebfbe3a70ed7941eff3506853f241c7"],["/archives/2020/05/index.html","26c71f61cde8406aa750eca04fd42f96"],["/archives/2020/09/index.html","09f86c573ef48ed15465103096a95b41"],["/archives/2020/index.html","c63d6cf33b5fcd73c0fce789257541b1"],["/archives/2021/08/index.html","9838fcc66a52b155c74c3fb234fa7c0f"],["/archives/2021/index.html","06385b02daf9e10969a43f870b23f7f7"],["/archives/2022/05/index.html","5059f629af160bb2d86cfcc72e53ce17"],["/archives/2022/06/index.html","9c4ddee88b2a07ad62a351afd24e9136"],["/archives/2022/07/index.html","f16417d538dbaab02a724ec21eab2445"],["/archives/2022/08/index.html","91a2900fc985ba05a0ff1ff4a5cf3cad"],["/archives/2022/index.html","5ef15de637abd8b4bd2c1ac470cea770"],["/archives/2022/page/2/index.html","6fef6623380887e20bd3009155a06799"],["/archives/index.html","0a11f243f69b69187a1c37f8324b1496"],["/archives/page/2/index.html","208a7841a8edc854a611aca4feaad4e6"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Docker/index.html","26bcc0d654d288303f67d8cd23e43ebe"],["/categories/SonarQube/index.html","8521cd70919fb3dd5172af39fe6d7c38"],["/categories/index.html","05e720a5a8c1448652036229324b542e"],["/categories/iptables/index.html","f9865087248f5f13e6af16decbaeeca1"],["/categories/jenkins/index.html","901f8efd74997f882d21150334f9877c"],["/categories/kubernetes/index.html","d9caeed6c6ac9aba400598a804b646dd"],["/categories/kubernetes/page/2/index.html","df6caa6382cc58a8fbc48543ad3500f7"],["/categories/linux/index.html","5c441e236ccce28507ccbb757b2ccf0f"],["/categories/svn/index.html","8339581a64a51c0bf43f07121aa2cc71"],["/css/background.css","1833f67027acb059fbd2f5c40123f714"],["/css/index.css","c51f853733311461408c15a1e1133485"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/pasted-0.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-1.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-10.png","5d0d6d8aac46e34b30092f808950a9d3"],["/images/pasted-11.png","0784299af846da4168cad054741957f6"],["/images/pasted-12.png","e258ff6c3291821a2b9bbc6a25574624"],["/images/pasted-13.png","000a03ee30cefc56d0749078cf04a949"],["/images/pasted-14.png","8e547d601142697e448fbb4019bbb06a"],["/images/pasted-15.png","950cc9a62554680e2f0570b97e564259"],["/images/pasted-16.png","1707596a28a9b697891bc718c96175ee"],["/images/pasted-17.png","887da59e5df5c2af9d32fea3ffd5e3f7"],["/images/pasted-18.png","5f724508b49e8e7ba1305062ef8e150a"],["/images/pasted-19.png","a47092a023a70b2427014e75873bd6cd"],["/images/pasted-2.png","0a20960a3ee7446d34a8c4cc687b7adf"],["/images/pasted-3.png","7fc1a4e3fe8ab621dc0aa0ad4309f266"],["/images/pasted-4.png","d15fb5188609b444b3f6710ecf9b139c"],["/images/pasted-5.png","ad234216c2159391c25636525c314e41"],["/images/pasted-6.png","9600a48f0f98bce154df36c0a4dbbdc5"],["/images/pasted-7.png","b42122e7904f38ca3e9a32908f872f36"],["/images/pasted-8.png","f5b4699a2bd89e9027d889247b9a1283"],["/images/pasted-9.png","1537c8048729105cddb53dfa80ef72d6"],["/img/12.png","62ac1ef86217d9ac116fa3d22d78dd9b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/centos.png","21108b558fea54f6e6acaa00a49be309"],["/img/desktop.jpg","13c1182799ca5447fd6493c209ae3512"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/harbor.png","4b104adfa004775ce392037ccc140b62"],["/img/inotify.png","9ccfc735d97078fba061989fdd50fed1"],["/img/iptables.png","adbf0f41b1af8495c7f9330d88ae03af"],["/img/jenkins.png","38a775b0b873368c4efaa9bfb5760068"],["/img/jenkins1.png","dc3b8e8cb59e5864c4f7fe2dc13eab9f"],["/img/kubernetes.png","64a7709d18ce7f703f86108ab5fd844a"],["/img/sonarqube.png","965b7f7a941c46e10d3412fe294294dd"],["/img/svn.png","417b61fc1f0b02b68fc12a467bf6406c"],["/img/touxiang.png","b17d8c86cf0c70c30e7d7327dd5c7e4c"],["/index.html","995e8d409f3ea2fd524d8d1a1b4db22c"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","8da24a4281d54295b207d04ff8eef9b0"],["/page/2/index.html","943d6fa99beac58c922f72566fbdf6f7"],["/sw-register.js","bb5db6abfddbbe8fccc9d514e113e9c7"],["/tags/SonarQube/index.html","b9ad1c4565ae663797e6fecda240215e"],["/tags/centos/index.html","3d5647ad5612993f74a71edad1cdaf86"],["/tags/docker/index.html","0120ca8397bff2b192c595781fac2d0e"],["/tags/index.html","750a4cea76a9f054b41ec7849936f204"],["/tags/iptables/index.html","94c2e24fde5df78c4188477ce55632a0"],["/tags/jenkins/index.html","4453c7b612a99634326bb3408051e3c2"],["/tags/kubernetes/index.html","a1e2949789c142b8daf4ce4d8de49eb2"],["/tags/kubernetes/page/2/index.html","cd9b59bbda29c1bf6f4397b5c3f68e09"],["/tags/linux/index.html","5a7c201bc17530d0ea3c273cccfa8f66"],["/tags/svn/index.html","9d3092f4869bc7e60add8da6938867a4"],["/tags/云原生/index.html","27dba7f5597baf94fe043f8657adb8d5"],["/tags/云原生/page/2/index.html","a25974f2d69a8981e39bcf2b0683664a"],["/tags/阿里云/index.html","d00271bd6b445839cbef4809f08d8936"]];
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
