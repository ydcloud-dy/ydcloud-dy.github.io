/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/09/23/SonarQube代码扫描/index.html","666580a79eb3abdca2d9a56264c35254"],["/2020/05/13/iptables相关控制/index.html","489089c4d33ace769f1f4eef44a8a0a5"],["/2020/09/08/centos7搭建svn服务器/index.html","4f48a6c34c963e8c5341e146c3c0925e"],["/2021/08/24/rsync+inotify 实时备份/index.html","e4b445085b8b06db5d8e9057ddc276f0"],["/2022/05/04/部署harbor服务器（https_http）/index.html","6240d1ece4aa13fdd10191610f8f758c"],["/2022/06/20/kubeasz 二进制安装k8s高可用集群/index.html","71b3f704d064f3012815fbfaec3fb7ba"],["/2022/06/21/kubernetes安装coreDNS组件/index.html","cd6e30997eb4e7166e8e1d795e383f14"],["/2022/06/23/kubernetes-ETCD/index.html","35e1001dd4104cabbbf4046bf612b0d6"],["/2022/06/24/kubeasz -etcd v3 API版本数据备份与恢复/index.html","d70836d6de26a5b082291181946a4521"],["/2022/07/01/Deployment副本控制器/index.html","17fa0fe8ecc18d289bc0ef5542b7e0ed"],["/2022/07/01/RC RS副本控制器/index.html","e013bf9b5a581723b96a73cd8e371370"],["/2022/07/02/Configmap/index.html","057c1f2d699ab17acce04c23b35156ef"],["/2022/07/02/PV PVC/index.html","8f612d914b132889d11d10f1b9273144"],["/2022/07/03/Service控制器/index.html","3fb48429ecb5472e42ce201cbb6ac806"],["/2022/07/03/Volume存储卷/index.html","06f26194088d2e4153e3788a0a8010a8"],["/2022/07/03/secret/index.html","2ead30ad49bb4bc3309ed92ca07c8c83"],["/2022/07/04/k8s-job cronjob/index.html","5e6e94f694a2fd34395ba6cd316e8938"],["/2022/08/02/使用阿里云oss静态页面部署服务/index.html","376c803aff9cf1002942e9b1c235b46e"],["/2022/08/04/基于centos7的Openssh版本升级/index.html","6ef07b70f677cd6e5a03441d5f9a5e65"],["/2022/08/16/Jenkins用户权限控制插件——Role-based Authorization Strategy/index.html","d653181bfddf67257e71a9c66e770f75"],["/archives/2019/09/index.html","f96ed4bee7c8bbc69287d1721e6b2471"],["/archives/2019/index.html","9cfdffcd5b898c163fd0dffc6888f9b3"],["/archives/2020/05/index.html","e986356fb1a75fe5a0697df7cd4abd0e"],["/archives/2020/09/index.html","283a143afdba92ecb86acdeca7d61344"],["/archives/2020/index.html","f3f36bded1daf78fabe928031c99f61b"],["/archives/2021/08/index.html","8ba02add759d9715a052fb43d66254ac"],["/archives/2021/index.html","6d1b7b725c27565a5e6bca34444531b3"],["/archives/2022/05/index.html","9449cdeb13ae9544c82b4e3b6f1b5a68"],["/archives/2022/06/index.html","248c70856c406caa696e3b4a45ba9176"],["/archives/2022/07/index.html","be9a5c479c96413b6c9ee2e6b7f45085"],["/archives/2022/08/index.html","bc3ef9d91f804c4202a412d0a51c4267"],["/archives/2022/index.html","20b36f68872df6742561b507417fc7f4"],["/archives/2022/page/2/index.html","1d30024821e31367fb10ef11d04fc459"],["/archives/index.html","1c16d3bc36ea7c0a021dee147de40069"],["/archives/page/2/index.html","73f87aaa7acb7b8d6d102e7af5dc5c61"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Docker/index.html","27150e2c1b048269769e465340fe3207"],["/categories/SonarQube/index.html","ad1fe31be5acb920ace90ad83f90c914"],["/categories/index.html","4f147094e8fee77c92d825b6e8db2f8f"],["/categories/iptables/index.html","adb186d8b1fcf63363314fd5a503cef2"],["/categories/jenkins/index.html","a5e6998bcdd5c8c24684ffb560e35dbb"],["/categories/kubernetes/index.html","79078c725dc099688961dbde2f1f5c8a"],["/categories/kubernetes/page/2/index.html","28b83bd5473ebde01646aa544547b058"],["/categories/linux/index.html","647296ca198b24988fbab359f35c760d"],["/categories/svn/index.html","542ae910f27adb3de2f05bccd3cf1711"],["/css/background.css","1833f67027acb059fbd2f5c40123f714"],["/css/index.css","45e7143f892ca71e075bb93d552ee4d6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/pasted-0.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-1.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-10.png","5d0d6d8aac46e34b30092f808950a9d3"],["/images/pasted-11.png","0784299af846da4168cad054741957f6"],["/images/pasted-12.png","e258ff6c3291821a2b9bbc6a25574624"],["/images/pasted-13.png","000a03ee30cefc56d0749078cf04a949"],["/images/pasted-14.png","8e547d601142697e448fbb4019bbb06a"],["/images/pasted-15.png","950cc9a62554680e2f0570b97e564259"],["/images/pasted-16.png","1707596a28a9b697891bc718c96175ee"],["/images/pasted-17.png","887da59e5df5c2af9d32fea3ffd5e3f7"],["/images/pasted-18.png","5f724508b49e8e7ba1305062ef8e150a"],["/images/pasted-19.png","a47092a023a70b2427014e75873bd6cd"],["/images/pasted-2.png","0a20960a3ee7446d34a8c4cc687b7adf"],["/images/pasted-3.png","7fc1a4e3fe8ab621dc0aa0ad4309f266"],["/images/pasted-4.png","d15fb5188609b444b3f6710ecf9b139c"],["/images/pasted-5.png","ad234216c2159391c25636525c314e41"],["/images/pasted-6.png","9600a48f0f98bce154df36c0a4dbbdc5"],["/images/pasted-7.png","b42122e7904f38ca3e9a32908f872f36"],["/images/pasted-8.png","f5b4699a2bd89e9027d889247b9a1283"],["/images/pasted-9.png","1537c8048729105cddb53dfa80ef72d6"],["/img/12.png","62ac1ef86217d9ac116fa3d22d78dd9b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/centos.png","21108b558fea54f6e6acaa00a49be309"],["/img/desktop.jpg","13c1182799ca5447fd6493c209ae3512"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/harbor.png","4b104adfa004775ce392037ccc140b62"],["/img/inotify.png","9ccfc735d97078fba061989fdd50fed1"],["/img/iptables.png","adbf0f41b1af8495c7f9330d88ae03af"],["/img/jenkins.png","38a775b0b873368c4efaa9bfb5760068"],["/img/jenkins1.png","dc3b8e8cb59e5864c4f7fe2dc13eab9f"],["/img/kubernetes.png","64a7709d18ce7f703f86108ab5fd844a"],["/img/sonarqube.png","965b7f7a941c46e10d3412fe294294dd"],["/img/svn.png","417b61fc1f0b02b68fc12a467bf6406c"],["/img/touxiang.png","b17d8c86cf0c70c30e7d7327dd5c7e4c"],["/index.html","372e38785bdc5f1861cf8c5abce1a68c"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","c1ce270b411c8dd4669824c800a8c2c3"],["/page/2/index.html","01ef3faef70cf5e7089ae3c840348ae9"],["/sw-register.js","b202cf21286ac576df2252d4c5d710d8"],["/tags/SonarQube/index.html","2d454a7afda62f49b36e0539fb8fb755"],["/tags/centos/index.html","796ee6f368ba4cc83190fdbe2f64756f"],["/tags/docker/index.html","c154b468fb88e214a2c9d6a7717407e0"],["/tags/index.html","09b6c5e2ded11bf6317cf762d82d25e0"],["/tags/iptables/index.html","9569c474c9b5a43e012e7e7b8ba0776d"],["/tags/jenkins/index.html","0e2615998c12ef251cf9e7826d90802e"],["/tags/kubernetes/index.html","65f328456e3ec79612b858bf13594973"],["/tags/kubernetes/page/2/index.html","8006348d345985e49597bc140bce6a0d"],["/tags/linux/index.html","7f737b72620d8e1dd9d7a307784baeac"],["/tags/svn/index.html","4fa7945d1485e1d85c3e4fc728ca4bd4"],["/tags/云原生/index.html","ddbc45cdd1a1174a46b0ba4c2de04bcd"],["/tags/云原生/page/2/index.html","39605f3160b3d7c2cf261f23346a6596"],["/tags/阿里云/index.html","6570cdba035cc257652570b4baf6f315"]];
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
