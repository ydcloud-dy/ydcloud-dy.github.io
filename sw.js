/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/09/23/SonarQube代码扫描/index.html","c97c7a3e46a42ad3275571ce2f791da1"],["/2020/05/13/iptables相关控制/index.html","23e03b05d81342b5869f1093a4d2c591"],["/2020/09/08/centos7搭建svn服务器/index.html","b179bf011030ebced89e1d8211d136cc"],["/2021/08/24/rsync+inotify 实时备份/index.html","3c1726feadc3e0523d5800e093c5a35b"],["/2022/05/04/部署harbor服务器（https_http）/index.html","19dd18ffacf59399f960b9e298eb1da5"],["/2022/06/20/kubeasz 二进制安装k8s高可用集群/index.html","876b0f876b31aa0bb086de2845d6995f"],["/2022/06/21/kubernetes安装coreDNS组件/index.html","5119f7ab17af69ef561cbf241d8398f8"],["/2022/06/23/kubernetes-ETCD/index.html","dec1175513733545a8fc346c201decbc"],["/2022/06/24/kubeasz -etcd v3 API版本数据备份与恢复/index.html","e882cdd2e87dbe4375ea648185c51847"],["/2022/07/01/Deployment副本控制器/index.html","2011170946e288569c21e72c7afe871d"],["/2022/07/01/RC RS副本控制器/index.html","1cff896a8de1feeb93860e1cbe197149"],["/2022/07/02/Configmap/index.html","c6ea48a65285c78ee0c6ea0b009a5570"],["/2022/07/02/PV PVC/index.html","411490c8666938fa0f023c922a008655"],["/2022/07/03/Service控制器/index.html","a5aa4b68920b5d79cc4ee5615719a4ca"],["/2022/07/03/Volume存储卷/index.html","d2780ca3e1bd31b90965fa2ac94da4e0"],["/2022/07/03/secret/index.html","7e81f68e491603d338e5a03905956670"],["/2022/07/04/k8s-job cronjob/index.html","d3bd0a092bd3718a7a54daf75bda45f5"],["/2022/07/05/kubernetes HPA使用及测试/index.html","d25a08733e557996d1368222bbb9f070"],["/2022/08/02/使用阿里云oss静态页面部署服务/index.html","54d19f7f4108cea51b51133de463f26a"],["/2022/08/04/基于centos7的Openssh版本升级/index.html","74178ab40375763bbb6f44282efc1f0d"],["/2022/08/16/Jenkins用户权限控制插件——Role-based Authorization Strategy/index.html","5cc92aad6ae918a8bef6775794e1f9f3"],["/archives/2019/09/index.html","3b1e29c14e3fb2a3f31833269ff2e706"],["/archives/2019/index.html","9ab5632ad34d1c7d983559d94893d65f"],["/archives/2020/05/index.html","c86b339bc9c2727e9e5339c6c410c1f8"],["/archives/2020/09/index.html","177f16ee867604226494f3f04e574445"],["/archives/2020/index.html","a00dbdbde0d23a6887146ace4768ae68"],["/archives/2021/08/index.html","9a1a631e1985ff1dd37fa4b000c5700d"],["/archives/2021/index.html","dc486af163f21ac63b1cc19962a8e917"],["/archives/2022/05/index.html","7840805c171dcfb629e120e7d9f3de81"],["/archives/2022/06/index.html","160b488a7ea73605305b2b89110d54f1"],["/archives/2022/07/index.html","c1ce6d64567aa406283f04cda0f8da24"],["/archives/2022/08/index.html","f6de70b36bebe800a1b7091750cd5e67"],["/archives/2022/index.html","45a8757ede2bc8efb08294e891fbdcac"],["/archives/2022/page/2/index.html","0d4a51dbdf06c3d5248732f9baf5b3af"],["/archives/index.html","d69010b16f1daf773a590af1abe21b57"],["/archives/page/2/index.html","4fdebfdb46b325ad724ffd390eb27ce9"],["/archives/page/3/index.html","df023704c688f23de9163679be5babbe"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Docker/index.html","a67c7236783d8334a6563d3fbe2d7d98"],["/categories/SonarQube/index.html","16d43bb8e3fdeb32342f906ef82908b2"],["/categories/index.html","b04f9b87c09a7516efc950f52f873a3d"],["/categories/iptables/index.html","642dcc543d4f6b6f8fb7544dd1cb28a6"],["/categories/jenkins/index.html","bc8ab3372447c12173b6862553cb7a77"],["/categories/kubernetes/index.html","6c141ad17b1952873c5851757282782e"],["/categories/kubernetes/page/2/index.html","07054a580f30d39074d30361f38b98e6"],["/categories/linux/index.html","d6cb065654bf5250af7efe91034314af"],["/categories/svn/index.html","dfc8406c3953df4edbbbee950c6fd6ce"],["/css/background.css","2942635f3e138bf3f0652299cf376c84"],["/css/index.css","7e2e519210c1706874cad980a3ff0bbb"],["/css/universe.css","52c685572ce95860fe8ddf20fb03df83"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/pasted-0.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-1.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-10.png","5d0d6d8aac46e34b30092f808950a9d3"],["/images/pasted-11.png","0784299af846da4168cad054741957f6"],["/images/pasted-12.png","e258ff6c3291821a2b9bbc6a25574624"],["/images/pasted-13.png","000a03ee30cefc56d0749078cf04a949"],["/images/pasted-14.png","8e547d601142697e448fbb4019bbb06a"],["/images/pasted-15.png","950cc9a62554680e2f0570b97e564259"],["/images/pasted-16.png","1707596a28a9b697891bc718c96175ee"],["/images/pasted-17.png","887da59e5df5c2af9d32fea3ffd5e3f7"],["/images/pasted-18.png","5f724508b49e8e7ba1305062ef8e150a"],["/images/pasted-19.png","a47092a023a70b2427014e75873bd6cd"],["/images/pasted-2.png","0a20960a3ee7446d34a8c4cc687b7adf"],["/images/pasted-3.png","7fc1a4e3fe8ab621dc0aa0ad4309f266"],["/images/pasted-4.png","d15fb5188609b444b3f6710ecf9b139c"],["/images/pasted-5.png","ad234216c2159391c25636525c314e41"],["/images/pasted-6.png","9600a48f0f98bce154df36c0a4dbbdc5"],["/images/pasted-7.png","b42122e7904f38ca3e9a32908f872f36"],["/images/pasted-8.png","f5b4699a2bd89e9027d889247b9a1283"],["/images/pasted-9.png","1537c8048729105cddb53dfa80ef72d6"],["/img/12.png","62ac1ef86217d9ac116fa3d22d78dd9b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","e26ff9d7f5db82408a3b9d320a46ed48"],["/img/centos.png","21108b558fea54f6e6acaa00a49be309"],["/img/desktop.jpg","13c1182799ca5447fd6493c209ae3512"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/harbor.png","4b104adfa004775ce392037ccc140b62"],["/img/inotify.png","9ccfc735d97078fba061989fdd50fed1"],["/img/iptables.png","adbf0f41b1af8495c7f9330d88ae03af"],["/img/jenkins.png","38a775b0b873368c4efaa9bfb5760068"],["/img/jenkins1.png","dc3b8e8cb59e5864c4f7fe2dc13eab9f"],["/img/kubernetes.png","64a7709d18ce7f703f86108ab5fd844a"],["/img/sonarqube.png","965b7f7a941c46e10d3412fe294294dd"],["/img/svn.png","417b61fc1f0b02b68fc12a467bf6406c"],["/img/touxiang.png","b17d8c86cf0c70c30e7d7327dd5c7e4c"],["/img/wechat.jpg","2516cfa5ceda8f42ac6ba9efec9d88b3"],["/img/背景.jpg","b3e047edc071811e4a08b34ad186469f"],["/index.html","4769b5284a70e65e814f36a68268c970"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","fafdd847299ee73d084aa36ced9bce97"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","3325796ee40312be376b10cdeda50219"],["/page/2/index.html","0e3f8b58d5891a813431cae46e9689d6"],["/page/3/index.html","4fc4d63632576af4299e07fa392cc038"],["/sw-register.js","1c8848381403b0f4a3603a487adcec56"],["/tags/SonarQube/index.html","04f33682c724e140b18c54c30c51f139"],["/tags/centos/index.html","4011fc165ee518af5388b6171586b430"],["/tags/docker/index.html","770751a7f7759efad797b37d1d6efd48"],["/tags/index.html","9e66404df6e7ff2a0b4da601a1f50866"],["/tags/iptables/index.html","7e99119f32c0cc86d4a1c3b1eced7610"],["/tags/jenkins/index.html","3f4b7f60bdc89cf066aa7724b2598d9a"],["/tags/kubernetes/index.html","f7ccae09bc5c10d0b907fcb754ea6efd"],["/tags/kubernetes/page/2/index.html","9912140f362d6ab78a230e122255f90c"],["/tags/linux/index.html","fd7774cb66ca89aad589a599d76ce2cd"],["/tags/svn/index.html","2b3129f2c1df8ec8d7b9618177c0c634"],["/tags/云原生/index.html","564cc8965c25ebeaadb96df862f50df5"],["/tags/云原生/page/2/index.html","ad177c09f58221f0cecdc416181e5cf5"],["/tags/阿里云/index.html","6375ae315cfbaccb173fdf82be22642b"]];
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
