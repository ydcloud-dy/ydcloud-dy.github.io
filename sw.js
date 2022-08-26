/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/09/23/SonarQube代码扫描/index.html","c97c7a3e46a42ad3275571ce2f791da1"],["/2020/05/13/iptables相关控制/index.html","23e03b05d81342b5869f1093a4d2c591"],["/2020/09/08/centos7搭建svn服务器/index.html","b179bf011030ebced89e1d8211d136cc"],["/2021/08/24/rsync+inotify 实时备份/index.html","3c1726feadc3e0523d5800e093c5a35b"],["/2022/05/04/部署harbor服务器（https_http）/index.html","19dd18ffacf59399f960b9e298eb1da5"],["/2022/06/20/kubeasz 二进制安装k8s高可用集群/index.html","876b0f876b31aa0bb086de2845d6995f"],["/2022/06/21/kubernetes安装coreDNS组件/index.html","5119f7ab17af69ef561cbf241d8398f8"],["/2022/06/23/kubernetes-ETCD/index.html","dec1175513733545a8fc346c201decbc"],["/2022/06/24/kubeasz -etcd v3 API版本数据备份与恢复/index.html","e882cdd2e87dbe4375ea648185c51847"],["/2022/07/01/Deployment副本控制器/index.html","b083861a01d8bfaee9db54ac6cfc6c81"],["/2022/07/01/RC RS副本控制器/index.html","b311d2050cd77ca662d915f7bdf4d505"],["/2022/07/02/Configmap/index.html","e029b42d9dd7c5c022bac4e039df72f2"],["/2022/07/02/PV PVC/index.html","0fdd03e503064efc7c1d857432a5d023"],["/2022/07/03/Service控制器/index.html","87c1fa361998b9d785f33f84bd6dc622"],["/2022/07/03/Volume存储卷/index.html","d7a1b45613ac6e8f02aa529b277eac80"],["/2022/07/03/secret/index.html","7e81f68e491603d338e5a03905956670"],["/2022/07/04/k8s-job cronjob/index.html","d3bd0a092bd3718a7a54daf75bda45f5"],["/2022/07/05/kubernetes HPA使用及测试/index.html","d25a08733e557996d1368222bbb9f070"],["/2022/08/02/使用阿里云oss静态页面部署服务/index.html","54d19f7f4108cea51b51133de463f26a"],["/2022/08/04/基于centos7的Openssh版本升级/index.html","74178ab40375763bbb6f44282efc1f0d"],["/2022/08/16/Jenkins用户权限控制插件——Role-based Authorization Strategy/index.html","5cc92aad6ae918a8bef6775794e1f9f3"],["/archives/2019/09/index.html","0793985a3938487a0072ce3d8f8a23bf"],["/archives/2019/index.html","4145830b083ff1bb48eeb63fe9f514e3"],["/archives/2020/05/index.html","bb7a93eb65ccbd3b1d11f87b18727ef8"],["/archives/2020/09/index.html","5be41cc58b8f1d724fd604977e1cd988"],["/archives/2020/index.html","d60a45205a6a2376a8e64995b171cb40"],["/archives/2021/08/index.html","fad42c9e48f6b92b5a1ec32304969231"],["/archives/2021/index.html","3e5c10745cb16225ede07b0a83ee21f8"],["/archives/2022/05/index.html","3e08a0f448bb035a32bc64508e56c369"],["/archives/2022/06/index.html","e0d6e1879fddcceabe2e36cfdffbf944"],["/archives/2022/07/index.html","76814355b6719d67fe40aeeae4208be4"],["/archives/2022/08/index.html","f9d6f48e6e57f0cb4b45fcccaca81ac7"],["/archives/2022/index.html","4419bdba194814fc1a59ffc1dbda3225"],["/archives/2022/page/2/index.html","ceb9b45ce90767ad065ae9362ca677b6"],["/archives/index.html","47c6278944d77ce40c2ea20c0b07b7c7"],["/archives/page/2/index.html","2d5e3efe9812cbb23d4eefe26c289282"],["/archives/page/3/index.html","52eb0b000fc269b008bbbcef6abc9563"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Docker/index.html","f50f699f956f63e37c864e2ce61423e0"],["/categories/SonarQube/index.html","68e63e31f979a8b5bd6e5cf602783abc"],["/categories/index.html","8bdef717c148ac458ffae7544d78b1e0"],["/categories/iptables/index.html","0eb2f2aa1a6b79ebe97137eaf7206964"],["/categories/jenkins/index.html","bb3075d5e87441c0b85862754b30db60"],["/categories/kubernetes/index.html","71e1e9895350b7317b41a71392688d21"],["/categories/kubernetes/page/2/index.html","89ccc8e34531b467ec147d35f9bff869"],["/categories/linux/index.html","286a7671446ab351980f6a92bbf8f0ab"],["/categories/svn/index.html","99e9739d5b4153e1fe1e3dde4d750732"],["/css/background.css","2942635f3e138bf3f0652299cf376c84"],["/css/index.css","5b1fe0f7d0e912ed2fcc08d0ee2c45e9"],["/css/universe.css","52c685572ce95860fe8ddf20fb03df83"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/pasted-0.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-1.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-10.png","5d0d6d8aac46e34b30092f808950a9d3"],["/images/pasted-11.png","0784299af846da4168cad054741957f6"],["/images/pasted-12.png","e258ff6c3291821a2b9bbc6a25574624"],["/images/pasted-13.png","000a03ee30cefc56d0749078cf04a949"],["/images/pasted-14.png","8e547d601142697e448fbb4019bbb06a"],["/images/pasted-15.png","950cc9a62554680e2f0570b97e564259"],["/images/pasted-16.png","1707596a28a9b697891bc718c96175ee"],["/images/pasted-17.png","887da59e5df5c2af9d32fea3ffd5e3f7"],["/images/pasted-18.png","5f724508b49e8e7ba1305062ef8e150a"],["/images/pasted-19.png","a47092a023a70b2427014e75873bd6cd"],["/images/pasted-2.png","0a20960a3ee7446d34a8c4cc687b7adf"],["/images/pasted-3.png","7fc1a4e3fe8ab621dc0aa0ad4309f266"],["/images/pasted-4.png","d15fb5188609b444b3f6710ecf9b139c"],["/images/pasted-5.png","ad234216c2159391c25636525c314e41"],["/images/pasted-6.png","9600a48f0f98bce154df36c0a4dbbdc5"],["/images/pasted-7.png","b42122e7904f38ca3e9a32908f872f36"],["/images/pasted-8.png","f5b4699a2bd89e9027d889247b9a1283"],["/images/pasted-9.png","1537c8048729105cddb53dfa80ef72d6"],["/img/12.png","62ac1ef86217d9ac116fa3d22d78dd9b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","e26ff9d7f5db82408a3b9d320a46ed48"],["/img/centos.png","21108b558fea54f6e6acaa00a49be309"],["/img/desktop.jpg","13c1182799ca5447fd6493c209ae3512"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/harbor.png","4b104adfa004775ce392037ccc140b62"],["/img/inotify.png","9ccfc735d97078fba061989fdd50fed1"],["/img/iptables.png","adbf0f41b1af8495c7f9330d88ae03af"],["/img/jenkins.png","38a775b0b873368c4efaa9bfb5760068"],["/img/jenkins1.png","dc3b8e8cb59e5864c4f7fe2dc13eab9f"],["/img/kubernetes.png","64a7709d18ce7f703f86108ab5fd844a"],["/img/sonarqube.png","965b7f7a941c46e10d3412fe294294dd"],["/img/svn.png","417b61fc1f0b02b68fc12a467bf6406c"],["/img/touxiang.png","b17d8c86cf0c70c30e7d7327dd5c7e4c"],["/img/wechat.jpg","2516cfa5ceda8f42ac6ba9efec9d88b3"],["/index.html","a1684335d0122336a557f52cc0154793"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","fafdd847299ee73d084aa36ced9bce97"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","1ff4c11a5750f2e6613d1489529d93fa"],["/page/2/index.html","aa95b22f37fc739c5a03959dc0b4aced"],["/page/3/index.html","6bb82ef8af883136cef88b42997c171e"],["/sw-register.js","80df780882412dd533d9e463637441ee"],["/tags/SonarQube/index.html","a1d2fb7c3243ca6595c5c9d6a1fca759"],["/tags/centos/index.html","21bc754a476645ab98c2e942e7f4e453"],["/tags/docker/index.html","844807f82504624cb5547b6f7686143c"],["/tags/index.html","594b696d7f1a10b7fc778812932c11a9"],["/tags/iptables/index.html","1241981e10dc9a9f018ac50d80f6d9dd"],["/tags/jenkins/index.html","267cc48b45f59cfa85d4ebac47d7d401"],["/tags/kubernetes/index.html","a3d4fb2fe47baa216698f6ee1a71f852"],["/tags/kubernetes/page/2/index.html","62fd5baf4724fa06d40337fb1cd20a65"],["/tags/linux/index.html","3f6825730ec57691d8c614d1c4f2c315"],["/tags/svn/index.html","a0ac410f76a3e0fb6a8358033b6d8431"],["/tags/云原生/index.html","90135bad538cc448b102951de69b5814"],["/tags/云原生/page/2/index.html","5a8304858acc6d9ab4dd004900afb739"],["/tags/阿里云/index.html","91ee56c7e153cf4b982961f720a436f0"]];
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
