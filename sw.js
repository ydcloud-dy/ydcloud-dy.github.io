/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/09/23/SonarQube代码扫描/index.html","518cbc7c4e743f7a7b3a42b00ecfc7b8"],["/2020/05/13/iptables相关控制/index.html","f0229a9c65c2a4b273b0ff947b7c52b9"],["/2020/09/08/centos7搭建svn服务器/index.html","714f3dae882e24a9df8af5d6c6112dc1"],["/2021/08/24/rsync+inotify 实时备份/index.html","b42a6c5ce632a94ebb21e0ac6c2bf6b0"],["/2022/05/04/部署harbor服务器（https_http）/index.html","dfcc5ef46c88961c79c105164d0f2747"],["/2022/06/20/kubeasz 二进制安装k8s高可用集群/index.html","6e0314e97cc4e9e0ab10e21053092f24"],["/2022/06/21/kubernetes安装coreDNS组件/index.html","9b97ff12d5504653fbaa4be5dfde3457"],["/2022/06/23/kubernetes-ETCD/index.html","36b9feded9f01c7cfb82fed83669d25c"],["/2022/06/24/kubeasz -etcd v3 API版本数据备份与恢复/index.html","057f1aafc470c9ea4d05bc418a845329"],["/2022/07/01/Deployment副本控制器/index.html","5f098a362b7ee31f614da287bc675de3"],["/2022/07/01/RC RS副本控制器/index.html","6709e9cb6668d2f980ada7ef5772325e"],["/2022/07/02/Configmap/index.html","b3336b19c3b1dc233e6c1b2146319789"],["/2022/07/02/PV PVC/index.html","045b6a7badf14a6c6ced8a4b4dde7583"],["/2022/07/03/Service控制器/index.html","d6f35f723e3707792b64799f35ec7a1d"],["/2022/07/03/Volume存储卷/index.html","1a6801149f36ef7f3df107c72f46e2e3"],["/2022/07/03/secret/index.html","77d3db982b6c70c5d6b2fd5b39435b84"],["/2022/07/04/k8s-job cronjob/index.html","1545bb1a983691310efcd1b05b0e7a70"],["/2022/08/02/使用阿里云oss静态页面部署服务/index.html","e2f81c36a00ec6b361c1adedd6d28257"],["/2022/08/04/基于centos7的Openssh版本升级/index.html","d297cbf578a9503157104fe319430dfc"],["/2022/08/16/Jenkins用户权限控制插件——Role-based Authorization Strategy/index.html","8c91877d77849772eab1f8c926fc77f9"],["/archives/2019/09/index.html","3ab896e71ebd21fd30c8761f34769e5f"],["/archives/2019/index.html","c10dde2125b1723bf095e85aa200f048"],["/archives/2020/05/index.html","849217d4bcd3fb4801cc74b27a3fe6c6"],["/archives/2020/09/index.html","64eebd5d995ccbf0166a92eb12828913"],["/archives/2020/index.html","1543fb82fc0934848038f823a7a9b822"],["/archives/2021/08/index.html","7d39a8a80b17072c21148933ee2d85b9"],["/archives/2021/index.html","93431c250ef9d4a36dcd8b94fb383ebe"],["/archives/2022/05/index.html","004d6117606add2da0d00cfd6383e73c"],["/archives/2022/06/index.html","b7426fe842d46f3e82442ccc2bfc83e4"],["/archives/2022/07/index.html","a0384b7292fc4ca280e1cb6e927a8aeb"],["/archives/2022/08/index.html","61b80c1ee9957979e1acfda30f886860"],["/archives/2022/index.html","8a9e94254b27dde6b5a2f36cfb911eee"],["/archives/2022/page/2/index.html","37898ffcd6543f5c5abbdc5bdfbda7a8"],["/archives/index.html","bb1b6809de7bb1777d078769fc47b700"],["/archives/page/2/index.html","83e74d1a22137af2bec5091e2f01aa64"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Docker/index.html","c2913d99d4309acd86b98c589c4db4c8"],["/categories/SonarQube/index.html","bdd5ce7a6beee8f048b729d4d81fd5be"],["/categories/index.html","47a27c961cab549f05ba307f29d015c5"],["/categories/iptables/index.html","79b4ee2da1ddcffd6ff40cb40cacd41c"],["/categories/jenkins/index.html","857c41b102ad24e7b41a187feacb3415"],["/categories/kubernetes/index.html","68f2068f0d0e520a1b22852ad0276519"],["/categories/kubernetes/page/2/index.html","0ec5428cf6e2235a901317d8dfab1968"],["/categories/linux/index.html","f9de72155d7532747867086b2942d1f5"],["/categories/svn/index.html","05d1ad3384817493520c57aa3b33d9ef"],["/css/background.css","1833f67027acb059fbd2f5c40123f714"],["/css/index.css","c51f853733311461408c15a1e1133485"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/pasted-0.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-1.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-10.png","5d0d6d8aac46e34b30092f808950a9d3"],["/images/pasted-11.png","0784299af846da4168cad054741957f6"],["/images/pasted-12.png","e258ff6c3291821a2b9bbc6a25574624"],["/images/pasted-13.png","000a03ee30cefc56d0749078cf04a949"],["/images/pasted-14.png","8e547d601142697e448fbb4019bbb06a"],["/images/pasted-15.png","950cc9a62554680e2f0570b97e564259"],["/images/pasted-16.png","1707596a28a9b697891bc718c96175ee"],["/images/pasted-17.png","887da59e5df5c2af9d32fea3ffd5e3f7"],["/images/pasted-18.png","5f724508b49e8e7ba1305062ef8e150a"],["/images/pasted-19.png","a47092a023a70b2427014e75873bd6cd"],["/images/pasted-2.png","0a20960a3ee7446d34a8c4cc687b7adf"],["/images/pasted-3.png","7fc1a4e3fe8ab621dc0aa0ad4309f266"],["/images/pasted-4.png","d15fb5188609b444b3f6710ecf9b139c"],["/images/pasted-5.png","ad234216c2159391c25636525c314e41"],["/images/pasted-6.png","9600a48f0f98bce154df36c0a4dbbdc5"],["/images/pasted-7.png","b42122e7904f38ca3e9a32908f872f36"],["/images/pasted-8.png","f5b4699a2bd89e9027d889247b9a1283"],["/images/pasted-9.png","1537c8048729105cddb53dfa80ef72d6"],["/img/12.png","62ac1ef86217d9ac116fa3d22d78dd9b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/centos.png","21108b558fea54f6e6acaa00a49be309"],["/img/desktop.jpg","13c1182799ca5447fd6493c209ae3512"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/harbor.png","4b104adfa004775ce392037ccc140b62"],["/img/inotify.png","9ccfc735d97078fba061989fdd50fed1"],["/img/iptables.png","adbf0f41b1af8495c7f9330d88ae03af"],["/img/jenkins.png","38a775b0b873368c4efaa9bfb5760068"],["/img/jenkins1.png","dc3b8e8cb59e5864c4f7fe2dc13eab9f"],["/img/kubernetes.png","64a7709d18ce7f703f86108ab5fd844a"],["/img/sonarqube.png","965b7f7a941c46e10d3412fe294294dd"],["/img/svn.png","417b61fc1f0b02b68fc12a467bf6406c"],["/img/touxiang.png","b17d8c86cf0c70c30e7d7327dd5c7e4c"],["/index.html","25c874466ceb328d72669b0ae8ba3eed"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","470a22dcc9894cec4696ca3d3a539133"],["/page/2/index.html","f441d3f6d3a45cad755eb7e94f6d1fd6"],["/sw-register.js","cf3f820b079fb89b6797e4e5b4500828"],["/tags/SonarQube/index.html","414fb5da0cad6554fdada88ecc43b105"],["/tags/centos/index.html","df6e8118c17f409163320b7fbf7ec15d"],["/tags/docker/index.html","25783a5e64ef1663925f69b9bb65a793"],["/tags/index.html","0dd9c0ef717b7b8cb08ec4105c57ce7c"],["/tags/iptables/index.html","2c391f69de83d419c1e5604a74d03f23"],["/tags/jenkins/index.html","04e44b88d9b770578f436c127d2c4c85"],["/tags/kubernetes/index.html","665057d88cee50b671f22578a8d7ba0a"],["/tags/kubernetes/page/2/index.html","d42c68b69b14dea4ea930b709651a3de"],["/tags/linux/index.html","3ffb557cc003d5f7f606a0366e76cd23"],["/tags/svn/index.html","22e1aff413b4dd26a7bc77264f4e7894"],["/tags/云原生/index.html","50e98200ccc4fae489655c1cedc6a730"],["/tags/云原生/page/2/index.html","daa2e85cc74ef45941a89d225d222909"],["/tags/阿里云/index.html","d77c25946c027dd25fc91770f4611e20"]];
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
