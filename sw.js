/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/09/23/SonarQube代码扫描/index.html","0c225331439c662abd842d9b6039fbbb"],["/2020/05/13/iptables相关控制/index.html","8146281fe4eaa34b416d2c9cb6e8a04c"],["/2020/09/08/centos7搭建svn服务器/index.html","09c5fbe2f625ca93dc492c91db014eba"],["/2021/08/24/rsync+inotify 实时备份/index.html","40767367b2d3fc2c6367bb9efc0a581d"],["/2022/05/04/部署harbor服务器（https_http）/index.html","d2d2f6791dad2e50f51f39947c5dcc8f"],["/2022/06/20/kubeasz 二进制安装k8s高可用集群/index.html","c444ac37623539ae77c71fe88e6439f8"],["/2022/06/21/kubernetes安装coreDNS组件/index.html","d54f16302470be151e6e1b6010e37569"],["/2022/06/23/kubernetes-ETCD/index.html","2ccb8c903c8e86e823f7ef00adfce6db"],["/2022/06/24/kubeasz -etcd v3 API版本数据备份与恢复/index.html","21769c65cb8001b970b4bf6796c570fa"],["/2022/07/01/Deployment副本控制器/index.html","8f2e60f607255e9bf2ac28d359e07ea5"],["/2022/07/01/RC RS副本控制器/index.html","894c70098b753b503f28769654108f52"],["/2022/07/02/Configmap/index.html","7eff514fe22422b1604ebc91954e5727"],["/2022/07/02/PV PVC/index.html","df476899afea420fd7ab5dcad948dc85"],["/2022/07/03/Service控制器/index.html","133ff3bbc7e459acc57afa4e20a3ed46"],["/2022/07/03/Volume存储卷/index.html","bd924ed2dd397a962910bfe2b9dc5f76"],["/2022/07/03/secret/index.html","de2020e249a8ee31a9e705d6d13e8c8c"],["/2022/07/04/k8s-job cronjob/index.html","90050da74429152e0770b186f3cef052"],["/2022/08/02/使用阿里云oss静态页面部署服务/index.html","8bbac7495f706687aa351c077bdaed5e"],["/2022/08/04/基于centos7的Openssh版本升级/index.html","37165ae37374ecc130e4d0311924ed73"],["/2022/08/16/Jenkins用户权限控制插件——Role-based Authorization Strategy/index.html","c3199676ec4abb134feb35ffaedaa97d"],["/archives/2019/09/index.html","edaaa6345c65ae6853d3e1a4b42eaa4d"],["/archives/2019/index.html","fb54301f03ddf7b694b3a4ee50f4cab1"],["/archives/2020/05/index.html","28ef02881466e28ceef79d420245de76"],["/archives/2020/09/index.html","14aa0e170f55f938fd6cbad0456f1be0"],["/archives/2020/index.html","d38bec5a862637cd899fe456a6aaf8f4"],["/archives/2021/08/index.html","1628c08dc4980a5f1fa5e66e89643301"],["/archives/2021/index.html","952f0e531edbc4193d2c9cdda1f49b37"],["/archives/2022/05/index.html","d7e284e8e084e6850e4ae8896b867148"],["/archives/2022/06/index.html","1bd81cd7960f22ed5f14bfa64413150f"],["/archives/2022/07/index.html","c90314e8e2c14257f7a093fbdd1b0ee6"],["/archives/2022/08/index.html","1c36ce26aaf7db59985aa4bf8ea4b44e"],["/archives/2022/index.html","67fd89e548e388f10d423a0bbc9ecb22"],["/archives/2022/page/2/index.html","2a5e4d0a92ccf21cdb4bf24d6854b5e7"],["/archives/index.html","61c925a2f46bb252504e8678fb029776"],["/archives/page/2/index.html","9c350b7432a4010a1586a973f54ca798"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Docker/index.html","cd6bd0416a865bd82d0a3b070a7cc2be"],["/categories/SonarQube/index.html","eb469faa519fc1e82bbc008e47928b7a"],["/categories/index.html","195fd17bb692143e621b056749fc9a5e"],["/categories/iptables/index.html","f1a900caf897a6cdff12f42adc01e2d7"],["/categories/jenkins/index.html","8ec2f2298c67d99402f5171531c229c2"],["/categories/kubernetes/index.html","ddbb89d7a77685a00750aab49e0a08f4"],["/categories/kubernetes/page/2/index.html","aded81e3748f1e0eaeedd0c53c11bc27"],["/categories/linux/index.html","f6552cc6fbe1515d8d69c8be3d43bbe4"],["/categories/svn/index.html","b354a82084eeb5077e3ba77acacd363f"],["/css/background.css","1833f67027acb059fbd2f5c40123f714"],["/css/index.css","45e7143f892ca71e075bb93d552ee4d6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/pasted-0.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-1.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-10.png","5d0d6d8aac46e34b30092f808950a9d3"],["/images/pasted-11.png","0784299af846da4168cad054741957f6"],["/images/pasted-12.png","e258ff6c3291821a2b9bbc6a25574624"],["/images/pasted-13.png","000a03ee30cefc56d0749078cf04a949"],["/images/pasted-14.png","8e547d601142697e448fbb4019bbb06a"],["/images/pasted-15.png","950cc9a62554680e2f0570b97e564259"],["/images/pasted-16.png","1707596a28a9b697891bc718c96175ee"],["/images/pasted-17.png","887da59e5df5c2af9d32fea3ffd5e3f7"],["/images/pasted-18.png","5f724508b49e8e7ba1305062ef8e150a"],["/images/pasted-19.png","a47092a023a70b2427014e75873bd6cd"],["/images/pasted-2.png","0a20960a3ee7446d34a8c4cc687b7adf"],["/images/pasted-3.png","7fc1a4e3fe8ab621dc0aa0ad4309f266"],["/images/pasted-4.png","d15fb5188609b444b3f6710ecf9b139c"],["/images/pasted-5.png","ad234216c2159391c25636525c314e41"],["/images/pasted-6.png","9600a48f0f98bce154df36c0a4dbbdc5"],["/images/pasted-7.png","b42122e7904f38ca3e9a32908f872f36"],["/images/pasted-8.png","f5b4699a2bd89e9027d889247b9a1283"],["/images/pasted-9.png","1537c8048729105cddb53dfa80ef72d6"],["/img/12.png","62ac1ef86217d9ac116fa3d22d78dd9b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/centos.png","21108b558fea54f6e6acaa00a49be309"],["/img/desktop.jpg","13c1182799ca5447fd6493c209ae3512"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/harbor.png","4b104adfa004775ce392037ccc140b62"],["/img/inotify.png","9ccfc735d97078fba061989fdd50fed1"],["/img/iptables.png","adbf0f41b1af8495c7f9330d88ae03af"],["/img/jenkins.png","38a775b0b873368c4efaa9bfb5760068"],["/img/jenkins1.png","dc3b8e8cb59e5864c4f7fe2dc13eab9f"],["/img/kubernetes.png","64a7709d18ce7f703f86108ab5fd844a"],["/img/sonarqube.png","965b7f7a941c46e10d3412fe294294dd"],["/img/svn.png","417b61fc1f0b02b68fc12a467bf6406c"],["/img/touxiang.png","b17d8c86cf0c70c30e7d7327dd5c7e4c"],["/index.html","617e353718f0f6ee1c0f87a9e100c29d"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","c0af83a3fa6d844b2c75cd37c8737a2d"],["/page/2/index.html","9c978543c9de24260da229592fa52dc4"],["/sw-register.js","e785db64272453fd9ae1da800f88df49"],["/tags/SonarQube/index.html","c39e594ff7e468d22b48114735641d7d"],["/tags/centos/index.html","a5bd6ffd7445911078290c9512b2ab12"],["/tags/docker/index.html","06e3307b7ef7142264816fb800fa9d31"],["/tags/index.html","9c4c4046449aeef56b199ccfe4d3835f"],["/tags/iptables/index.html","75168f33f304ffc4689154957bc3474d"],["/tags/jenkins/index.html","55d5d7ee263cf5c47496021a35d4ab85"],["/tags/kubernetes/index.html","2352a3ab4da57b29e81b6f9d26902582"],["/tags/kubernetes/page/2/index.html","c13c085c24e6e84f10b19594866350bf"],["/tags/linux/index.html","008c4bf99558d79572adf25dfc1f2fd5"],["/tags/svn/index.html","232eeb58e49d820899015ac67900b618"],["/tags/云原生/index.html","ebeff75c7f730d68c92ceb8fea810045"],["/tags/云原生/page/2/index.html","1c9d6b610e6108a73967c6929250832f"],["/tags/阿里云/index.html","0441dd2c4ff99a5107cc17f4f0d35ef2"]];
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
