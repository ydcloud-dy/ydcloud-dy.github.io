/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/09/23/SonarQube代码扫描/index.html","fe61f8e15d8d0c381fe1d87d8a2d34fc"],["/2020/05/13/iptables相关控制/index.html","a5693573d0d5dc59f1b0b50ac5b967f1"],["/2020/09/08/centos7搭建svn服务器/index.html","64b64fd2ea0136c21971ae3f1284828c"],["/2021/08/24/rsync+inotify 实时备份/index.html","131ac51c0268b26c14bf08ce4ad523c6"],["/2022/05/04/部署harbor服务器（https_http）/index.html","23e4fa66facd8034c22810ce197ca7b8"],["/2022/06/20/kubeasz 二进制安装k8s高可用集群/index.html","79c61ae12dae0dd5266fb62f99a0bc5b"],["/2022/06/21/kubernetes安装coreDNS组件/index.html","c28621ea58e7923081880e37d3286773"],["/2022/06/23/kubernetes-ETCD/index.html","f8dfed9e287a3d0a47bdce524480b6c8"],["/2022/06/24/kubeasz -etcd v3 API版本数据备份与恢复/index.html","44711183a5bb27619aa80344412913a9"],["/2022/07/01/Deployment副本控制器/index.html","c2a3887880c363a8dda56c100846cd5f"],["/2022/07/01/RC RS副本控制器/index.html","cd1d7254cb81a907886ae7b580ea60d9"],["/2022/07/02/Configmap/index.html","268898946f235465dd44e3e875dcc640"],["/2022/07/02/PV PVC/index.html","880d95e5c886a50b5b4fe823369cb7cb"],["/2022/07/03/Service控制器/index.html","7aa59399beb838208a022c9062f6f05c"],["/2022/07/03/Volume存储卷/index.html","99b82a3874ec4cd6383c70846762e033"],["/2022/07/03/secret/index.html","9712ba0dc5e90cb6380c036d34e6df84"],["/2022/07/04/k8s-job cronjob/index.html","9722f19a5315e467f1349873aa7b3017"],["/2022/08/02/使用阿里云oss静态页面部署服务/index.html","27156b2ef960ee9529fdf617886de92c"],["/2022/08/04/基于centos7的Openssh版本升级/index.html","d0226bd97b9f6c084b3aca71313eb97b"],["/2022/08/16/Jenkins用户权限控制插件——Role-based Authorization Strategy/index.html","bc919dcc15f18969f0ad08ab19b59396"],["/archives/2019/09/index.html","c528467a2c59919fc90e6e7710226dca"],["/archives/2019/index.html","2ee953d4374acea816509934733725c8"],["/archives/2020/05/index.html","ffe341b85466f611a0991804349a3d7f"],["/archives/2020/09/index.html","22921fa2c774161a55c19bbccb0c4a78"],["/archives/2020/index.html","4db86349f604b6530b93c02ef5aef33b"],["/archives/2021/08/index.html","eda199327634786c4be7067ee0a035ec"],["/archives/2021/index.html","478e1eb02227f7e9927007ca46a324e8"],["/archives/2022/05/index.html","f277011ac4ece532e31fabfedb98d054"],["/archives/2022/06/index.html","5d1c893ef555808e22ed4b9d6c56fe41"],["/archives/2022/07/index.html","2aa0f4da88abc9326a9278cd3651ed11"],["/archives/2022/08/index.html","89dc64814237507bb0ec320cdde900b9"],["/archives/2022/index.html","079f797f7b4601929ea115d4aa69ff18"],["/archives/2022/page/2/index.html","e34ec202cc1b2ff9335f905e62d14fee"],["/archives/index.html","4b3fa47ee8db11f3f2f05278a5803fbf"],["/archives/page/2/index.html","77f5fcf4036d5328c9a66cc82ced9aeb"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Docker/index.html","be706ebca325ab79e751ccc67f3f851a"],["/categories/SonarQube/index.html","28c6a4db93bac9f1e4d44c5f36694025"],["/categories/index.html","cd20b8fa4673beaa5a8b789c9ec9a38d"],["/categories/iptables/index.html","7220ebd2fab90a4b22482f9319d1d013"],["/categories/jenkins/index.html","58ddd3778a38b375ab2b5f3b280a38e9"],["/categories/kubernetes/index.html","84f852500fe18fd8ca9bbd5c4c6982ac"],["/categories/kubernetes/page/2/index.html","7a097d4a42837c8900d57a84e7a46fc7"],["/categories/linux/index.html","8081d5b9b67f3c800aa247e6e5cfc069"],["/categories/svn/index.html","28cf330915bbca055d14f17937363198"],["/css/background.css","1833f67027acb059fbd2f5c40123f714"],["/css/index.css","45e7143f892ca71e075bb93d552ee4d6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/pasted-0.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-1.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-10.png","5d0d6d8aac46e34b30092f808950a9d3"],["/images/pasted-11.png","0784299af846da4168cad054741957f6"],["/images/pasted-12.png","e258ff6c3291821a2b9bbc6a25574624"],["/images/pasted-13.png","000a03ee30cefc56d0749078cf04a949"],["/images/pasted-14.png","8e547d601142697e448fbb4019bbb06a"],["/images/pasted-15.png","950cc9a62554680e2f0570b97e564259"],["/images/pasted-16.png","1707596a28a9b697891bc718c96175ee"],["/images/pasted-17.png","887da59e5df5c2af9d32fea3ffd5e3f7"],["/images/pasted-18.png","5f724508b49e8e7ba1305062ef8e150a"],["/images/pasted-19.png","a47092a023a70b2427014e75873bd6cd"],["/images/pasted-2.png","0a20960a3ee7446d34a8c4cc687b7adf"],["/images/pasted-3.png","7fc1a4e3fe8ab621dc0aa0ad4309f266"],["/images/pasted-4.png","d15fb5188609b444b3f6710ecf9b139c"],["/images/pasted-5.png","ad234216c2159391c25636525c314e41"],["/images/pasted-6.png","9600a48f0f98bce154df36c0a4dbbdc5"],["/images/pasted-7.png","b42122e7904f38ca3e9a32908f872f36"],["/images/pasted-8.png","f5b4699a2bd89e9027d889247b9a1283"],["/images/pasted-9.png","1537c8048729105cddb53dfa80ef72d6"],["/img/12.png","62ac1ef86217d9ac116fa3d22d78dd9b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/centos.png","21108b558fea54f6e6acaa00a49be309"],["/img/desktop.jpg","13c1182799ca5447fd6493c209ae3512"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/harbor.png","4b104adfa004775ce392037ccc140b62"],["/img/inotify.png","9ccfc735d97078fba061989fdd50fed1"],["/img/iptables.png","adbf0f41b1af8495c7f9330d88ae03af"],["/img/jenkins.png","38a775b0b873368c4efaa9bfb5760068"],["/img/jenkins1.png","dc3b8e8cb59e5864c4f7fe2dc13eab9f"],["/img/kubernetes.png","64a7709d18ce7f703f86108ab5fd844a"],["/img/sonarqube.png","965b7f7a941c46e10d3412fe294294dd"],["/img/svn.png","417b61fc1f0b02b68fc12a467bf6406c"],["/img/touxiang.png","b17d8c86cf0c70c30e7d7327dd5c7e4c"],["/index.html","42a85e0245c7747d048e724f979757ac"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","a6517ff1e318cff1cfa965c980e009c3"],["/page/2/index.html","96b90a04929ba2bca37a598a0b37945c"],["/sw-register.js","07cc78e70ff906aaf09a417ae4acbf6e"],["/tags/SonarQube/index.html","06100f727c7c96784377a1fa1d184ff9"],["/tags/centos/index.html","e25f9807e93065782bac78ed69da84c4"],["/tags/docker/index.html","e04860af5031a9248f9bd435115e6ab2"],["/tags/index.html","c94b72ba15040625b073db7193a72e73"],["/tags/iptables/index.html","3eb4b1638e8b0111cbc870358105e224"],["/tags/jenkins/index.html","5230afb450f993743833c1405e744f90"],["/tags/kubernetes/index.html","c56ce297f8b4a767da25107d91173a9a"],["/tags/kubernetes/page/2/index.html","c0a5059c995a754d29d5a4dabcb3c3c6"],["/tags/linux/index.html","6368cda85cd9024001199c5d17a2fbc0"],["/tags/svn/index.html","41cc5988d74725bcfc19e9fb9ce972cb"],["/tags/云原生/index.html","c564ea8b1dc98f7b2a77372e2da55396"],["/tags/云原生/page/2/index.html","aca6b2ad75845cef029776dc55dffc9f"],["/tags/阿里云/index.html","8e736e55ef85644f6934eb29e9bad25b"]];
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
