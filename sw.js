/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/09/23/SonarQube代码扫描/index.html","f57abc7271ef46f0a6d6cb039d6d458f"],["/2020/05/13/iptables相关控制/index.html","076a32d4e4a621bb9cdfd15067045ae3"],["/2020/09/08/centos7搭建svn服务器/index.html","c140bef016b6d233a2a55ebbb3615707"],["/2021/08/24/rsync+inotify 实时备份/index.html","9816f11234762ec21d39cf7c9409099f"],["/2022/05/04/部署harbor服务器（https_http）/index.html","681ebde0fb94dcc718379905e1d821fd"],["/2022/06/20/kubeasz 二进制安装k8s高可用集群/index.html","ab87276df56854c9d69ba9b356d114f6"],["/2022/06/21/kubernetes安装coreDNS组件/index.html","10a0af68d1fcbaf5adaf95c711cd86c5"],["/2022/06/23/kubernetes-ETCD/index.html","ee8dfe4eb96463f877f51c2b43b7b950"],["/2022/06/24/kubeasz -etcd v3 API版本数据备份与恢复/index.html","bba8b8fe7c14889755d558259f6ec21a"],["/2022/07/01/Deployment副本控制器/index.html","98446e98b4126b8f3b506fa28e159680"],["/2022/07/01/RC RS副本控制器/index.html","7641b6b0ea125ff8a3bb89628be0fc97"],["/2022/07/02/Configmap/index.html","38f9bb24a670b2a87c0c658103442b1f"],["/2022/07/02/PV PVC/index.html","5ffac26a182f435f12e9baa101568d91"],["/2022/07/03/Service控制器/index.html","35bdbe7bdf58ff0aec0da10495bfc0f6"],["/2022/07/03/Volume存储卷/index.html","b696d7ea62b6f898097660681258f275"],["/2022/07/03/secret/index.html","ccef3d05967346e90591b314c6b8e992"],["/2022/07/04/k8s-job cronjob/index.html","16a7b26c505536430112c319f105422e"],["/2022/07/05/kubernetes HPA使用及测试/index.html","c005fff887dd02f46a0303fd638c5b9b"],["/2022/08/02/使用阿里云oss静态页面部署服务/index.html","5f2d939e3f417d1bda6797fa81f9d4fc"],["/2022/08/04/基于centos7的Openssh版本升级/index.html","2acb285f572991358e753ff861ffee09"],["/2022/08/16/Jenkins用户权限控制插件——Role-based Authorization Strategy/index.html","2a116523e464ff4cadebc89cdd2d1199"],["/archives/2019/09/index.html","a0f82ff186d8024b7e5c64490a62a97c"],["/archives/2019/index.html","e32e62b6c11ea4f2fcc5da75c45158c9"],["/archives/2020/05/index.html","e7ce87f85cdfe4698308c837b21273e9"],["/archives/2020/09/index.html","7dca439c56528d2f5efcbd88593b0572"],["/archives/2020/index.html","e6866fe78701a008a937552b3d8f5615"],["/archives/2021/08/index.html","03d16d99c9a368342f09fd4ffe1ef4b1"],["/archives/2021/index.html","243469bff2102151a51b77eac7565521"],["/archives/2022/05/index.html","92ff128234f7fec5f5f06675879fce97"],["/archives/2022/06/index.html","2c27c66930b93ec9dc816099403ad6b2"],["/archives/2022/07/index.html","976634f2a4ca95745905c6baf57ae42f"],["/archives/2022/08/index.html","00c2c18532135d13310775830af0d37e"],["/archives/2022/index.html","151c5ee60d52bd3eff89717f8d23e3b8"],["/archives/2022/page/2/index.html","214d0579438237525823fdbcc47fcdb6"],["/archives/index.html","16b39e9a2561c03b9cde223559100719"],["/archives/page/2/index.html","0fc20ebf0b494b6827c2f3d5a4416617"],["/archives/page/3/index.html","b2ea94e16ea0d0533561ad3e77089a31"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Docker/index.html","097b745cbc5a5afcd30659348ab7c7cb"],["/categories/SonarQube/index.html","c4b2495a12c9a26755f9029712241ea0"],["/categories/index.html","744e08df3ccaa98f6c2216b74d01a9a9"],["/categories/iptables/index.html","561661d2eb50e4db81eb90611f454d1b"],["/categories/jenkins/index.html","71de48e6650149da2015cfcc45379a09"],["/categories/kubernetes/index.html","61739193112926173178e88bd1d45c8e"],["/categories/kubernetes/page/2/index.html","0da29f004496c1ae03d24fc3a02bf089"],["/categories/linux/index.html","d4a1345c9c248658afb1b63038d01ba1"],["/categories/svn/index.html","63083c80f4d8b634f72ed79cbfc503bf"],["/css/background.css","2942635f3e138bf3f0652299cf376c84"],["/css/index.css","5b1fe0f7d0e912ed2fcc08d0ee2c45e9"],["/css/universe.css","52c685572ce95860fe8ddf20fb03df83"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/pasted-0.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-1.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-10.png","5d0d6d8aac46e34b30092f808950a9d3"],["/images/pasted-11.png","0784299af846da4168cad054741957f6"],["/images/pasted-12.png","e258ff6c3291821a2b9bbc6a25574624"],["/images/pasted-13.png","000a03ee30cefc56d0749078cf04a949"],["/images/pasted-14.png","8e547d601142697e448fbb4019bbb06a"],["/images/pasted-15.png","950cc9a62554680e2f0570b97e564259"],["/images/pasted-16.png","1707596a28a9b697891bc718c96175ee"],["/images/pasted-17.png","887da59e5df5c2af9d32fea3ffd5e3f7"],["/images/pasted-18.png","5f724508b49e8e7ba1305062ef8e150a"],["/images/pasted-19.png","a47092a023a70b2427014e75873bd6cd"],["/images/pasted-2.png","0a20960a3ee7446d34a8c4cc687b7adf"],["/images/pasted-3.png","7fc1a4e3fe8ab621dc0aa0ad4309f266"],["/images/pasted-4.png","d15fb5188609b444b3f6710ecf9b139c"],["/images/pasted-5.png","ad234216c2159391c25636525c314e41"],["/images/pasted-6.png","9600a48f0f98bce154df36c0a4dbbdc5"],["/images/pasted-7.png","b42122e7904f38ca3e9a32908f872f36"],["/images/pasted-8.png","f5b4699a2bd89e9027d889247b9a1283"],["/images/pasted-9.png","1537c8048729105cddb53dfa80ef72d6"],["/img/12.png","62ac1ef86217d9ac116fa3d22d78dd9b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","e26ff9d7f5db82408a3b9d320a46ed48"],["/img/beijing.jpg","b3e047edc071811e4a08b34ad186469f"],["/img/centos.png","21108b558fea54f6e6acaa00a49be309"],["/img/desktop.jpg","13c1182799ca5447fd6493c209ae3512"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/harbor.png","4b104adfa004775ce392037ccc140b62"],["/img/inotify.png","9ccfc735d97078fba061989fdd50fed1"],["/img/iptables.png","adbf0f41b1af8495c7f9330d88ae03af"],["/img/jenkins.png","38a775b0b873368c4efaa9bfb5760068"],["/img/jenkins1.png","dc3b8e8cb59e5864c4f7fe2dc13eab9f"],["/img/kubernetes.png","64a7709d18ce7f703f86108ab5fd844a"],["/img/sonarqube.png","965b7f7a941c46e10d3412fe294294dd"],["/img/svn.png","417b61fc1f0b02b68fc12a467bf6406c"],["/img/touxiang.png","b17d8c86cf0c70c30e7d7327dd5c7e4c"],["/img/wechat.jpg","2516cfa5ceda8f42ac6ba9efec9d88b3"],["/index.html","dc9d23c28bc5443c60f698c8e9c94a2a"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","fafdd847299ee73d084aa36ced9bce97"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","ab0ae212c45fa4ed2e1f6fa0a6660d6a"],["/page/2/index.html","e6f48ec23cc1f807ff0f9a851918d73c"],["/page/3/index.html","743ceeb30a0773f4975b6e9a7b9eafbc"],["/sw-register.js","e81af790fccb0e1449ff06df11b9f54b"],["/tags/SonarQube/index.html","eb928d0dee68ff8dda77ee29d7e1037a"],["/tags/centos/index.html","6b7235752b49eacf31fff38afebea670"],["/tags/docker/index.html","eab5fe9ae61e5fc850d7059629d71cce"],["/tags/index.html","f5e87faa1d73c1c7426f3f4bb0ee55ce"],["/tags/iptables/index.html","d8d912db7dcd3cc5d58e14da4ff2708d"],["/tags/jenkins/index.html","ee4176b643c7dc15dcab200a0ace97d0"],["/tags/kubernetes/index.html","f6f5eb42ae3bf5c88a00b1233d694b47"],["/tags/kubernetes/page/2/index.html","b35fd259ec3214dec911221adb57732f"],["/tags/linux/index.html","1ad32602a8d4670c204d7759e857b0f6"],["/tags/svn/index.html","ce652763eec9059e49434cec76d10da2"],["/tags/云原生/index.html","9082b59dc089b545e9cee26dfa8c8a45"],["/tags/云原生/page/2/index.html","3a77db21f392b2674abac939b4e9fe2e"],["/tags/阿里云/index.html","abaa9788649704408249931f73caabc3"]];
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
