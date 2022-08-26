/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/09/23/SonarQube代码扫描/index.html","c97c7a3e46a42ad3275571ce2f791da1"],["/2020/05/13/iptables相关控制/index.html","23e03b05d81342b5869f1093a4d2c591"],["/2020/09/08/centos7搭建svn服务器/index.html","b179bf011030ebced89e1d8211d136cc"],["/2021/08/24/rsync+inotify 实时备份/index.html","3c1726feadc3e0523d5800e093c5a35b"],["/2022/05/04/部署harbor服务器（https_http）/index.html","19dd18ffacf59399f960b9e298eb1da5"],["/2022/06/20/kubeasz 二进制安装k8s高可用集群/index.html","dcd2c0392f18fa83ee098d143f5bdbc5"],["/2022/06/21/kubernetes安装coreDNS组件/index.html","a6ce7735e4f04e592c6eeceba1c60f09"],["/2022/06/23/kubernetes-ETCD/index.html","b9f5ae9c52ef65fc32c9c4bb1b95cd72"],["/2022/06/24/kubeasz -etcd v3 API版本数据备份与恢复/index.html","8997617de97163d99c4485892a42f1ba"],["/2022/07/01/Deployment副本控制器/index.html","bdac0c8b173669d07ce2cc813fac5939"],["/2022/07/01/RC RS副本控制器/index.html","62a634a4248bcd7832f00c38eaaea430"],["/2022/07/02/Configmap/index.html","8331b3ab0152bc76b74785b9f57e7f52"],["/2022/07/02/PV PVC/index.html","057ea267495a421b9fe9200c7001e51c"],["/2022/07/03/Service控制器/index.html","62106b18e3c590d9f1972ebfddf6846c"],["/2022/07/03/Volume存储卷/index.html","76d18f3a97f1b0a604cddd0f29297e7d"],["/2022/07/03/secret/index.html","e92b9a0cb0fb199b6ccf19a5239f6efb"],["/2022/07/04/k8s-job cronjob/index.html","ae38c5a2fc4b595d5aba928e86da3df3"],["/2022/07/05/kubernetes HPA使用及测试/index.html","e82c5cd9d0f12f672e1facdd0a7194df"],["/2022/08/02/使用阿里云oss静态页面部署服务/index.html","54d19f7f4108cea51b51133de463f26a"],["/2022/08/04/基于centos7的Openssh版本升级/index.html","74178ab40375763bbb6f44282efc1f0d"],["/2022/08/16/Jenkins用户权限控制插件——Role-based Authorization Strategy/index.html","5cc92aad6ae918a8bef6775794e1f9f3"],["/archives/2019/09/index.html","91b4ef292e7a64f064117ba05c9fadf6"],["/archives/2019/index.html","5f2e2f1138c731cc907bbe55165b0308"],["/archives/2020/05/index.html","044b9dcd5bac0c54c9e1dfadd26806a0"],["/archives/2020/09/index.html","12ff7dd1177cf1043072a1dddc6d0263"],["/archives/2020/index.html","b56af1430a605e88be2c78cb9da8fd46"],["/archives/2021/08/index.html","50f02211fdadad253a7f09d839a6de04"],["/archives/2021/index.html","7929d7d0389f2c07f15aaddd021b64f3"],["/archives/2022/05/index.html","41f52159fe8c505e44193b35c37e8a4b"],["/archives/2022/06/index.html","15b034b67a7ad88990bdedbe297d7b3a"],["/archives/2022/07/index.html","8c9be712858ea91154f01964191d7dcc"],["/archives/2022/08/index.html","012b4978c308183cfce190291cc097f4"],["/archives/2022/index.html","1d4e511854f1d8e5a112e3fa8bd7a4f6"],["/archives/2022/page/2/index.html","a725c226245ed6fff234591433844a69"],["/archives/index.html","572929afc2dce3132dd0507ef6120b20"],["/archives/page/2/index.html","f5466fa00c90106374fa2bd98822400a"],["/archives/page/3/index.html","d60d26db8aacb721972ec7efa1d2865a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Docker/index.html","3df971e79e4e098d5601c889443ac253"],["/categories/SonarQube/index.html","e71c4c9d911d703b20aa81c590d1b096"],["/categories/index.html","c797b68d18b7935da70937104d42afa1"],["/categories/iptables/index.html","78c20a9165d2a3875cd717a423efda17"],["/categories/jenkins/index.html","d4210388a4ecdcf0079cad491135c449"],["/categories/kubernetes/index.html","39bd2018dcfa0da58bacaca250f21d52"],["/categories/kubernetes/page/2/index.html","552666ed0807f15c5650ee7706c976cb"],["/categories/linux/index.html","1789fe779d9c925a58045d3ea1bfb684"],["/categories/svn/index.html","380c555192dca52e10341c8bf188be4f"],["/css/background.css","2942635f3e138bf3f0652299cf376c84"],["/css/index.css","5b1fe0f7d0e912ed2fcc08d0ee2c45e9"],["/css/universe.css","52c685572ce95860fe8ddf20fb03df83"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/pasted-0.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-1.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-10.png","5d0d6d8aac46e34b30092f808950a9d3"],["/images/pasted-11.png","0784299af846da4168cad054741957f6"],["/images/pasted-12.png","e258ff6c3291821a2b9bbc6a25574624"],["/images/pasted-13.png","000a03ee30cefc56d0749078cf04a949"],["/images/pasted-14.png","8e547d601142697e448fbb4019bbb06a"],["/images/pasted-15.png","950cc9a62554680e2f0570b97e564259"],["/images/pasted-16.png","1707596a28a9b697891bc718c96175ee"],["/images/pasted-17.png","887da59e5df5c2af9d32fea3ffd5e3f7"],["/images/pasted-18.png","5f724508b49e8e7ba1305062ef8e150a"],["/images/pasted-19.png","a47092a023a70b2427014e75873bd6cd"],["/images/pasted-2.png","0a20960a3ee7446d34a8c4cc687b7adf"],["/images/pasted-3.png","7fc1a4e3fe8ab621dc0aa0ad4309f266"],["/images/pasted-4.png","d15fb5188609b444b3f6710ecf9b139c"],["/images/pasted-5.png","ad234216c2159391c25636525c314e41"],["/images/pasted-6.png","9600a48f0f98bce154df36c0a4dbbdc5"],["/images/pasted-7.png","b42122e7904f38ca3e9a32908f872f36"],["/images/pasted-8.png","f5b4699a2bd89e9027d889247b9a1283"],["/images/pasted-9.png","1537c8048729105cddb53dfa80ef72d6"],["/img/12.png","62ac1ef86217d9ac116fa3d22d78dd9b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","e26ff9d7f5db82408a3b9d320a46ed48"],["/img/beijing.jpg","b3e047edc071811e4a08b34ad186469f"],["/img/centos.png","21108b558fea54f6e6acaa00a49be309"],["/img/desktop.jpg","13c1182799ca5447fd6493c209ae3512"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/harbor.png","4b104adfa004775ce392037ccc140b62"],["/img/inotify.png","9ccfc735d97078fba061989fdd50fed1"],["/img/iptables.png","adbf0f41b1af8495c7f9330d88ae03af"],["/img/jenkins.png","38a775b0b873368c4efaa9bfb5760068"],["/img/jenkins1.png","dc3b8e8cb59e5864c4f7fe2dc13eab9f"],["/img/kubernetes.png","64a7709d18ce7f703f86108ab5fd844a"],["/img/sonarqube.png","965b7f7a941c46e10d3412fe294294dd"],["/img/svn.png","417b61fc1f0b02b68fc12a467bf6406c"],["/img/touxiang.png","b17d8c86cf0c70c30e7d7327dd5c7e4c"],["/img/wechat.jpg","2516cfa5ceda8f42ac6ba9efec9d88b3"],["/index.html","2be1863aa57024e6799f8ae58a6723ea"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","fafdd847299ee73d084aa36ced9bce97"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","95625ec24c961ec57a9354c43efaacb0"],["/page/2/index.html","0fb46efbae06769165c27c627a5936c2"],["/page/3/index.html","39cba3c896de4e5e021e76832d5ac7b6"],["/sw-register.js","8434e518133ede9144ed014dd206e696"],["/tags/SonarQube/index.html","711a92e24ba83cacf045e247ed78af19"],["/tags/centos/index.html","27abac7b0b02b7b7e8c8566dae355d24"],["/tags/docker/index.html","a5940581267f22c9eae0366f054be756"],["/tags/index.html","45dc20b5c6da64d1ddf646ca2995d9d2"],["/tags/iptables/index.html","8ee7d4afab397d6ffaaa7cf4da148d5d"],["/tags/jenkins/index.html","e44eb876c4798ea5b4162dc2dd6192e3"],["/tags/kubernetes/index.html","b85770a8f778a6058d71f68b8755ed4c"],["/tags/kubernetes/page/2/index.html","ee3fbdbc3abe18d6b640ba5a52110375"],["/tags/linux/index.html","54259b7c5845bd30d6adb0e5931d849e"],["/tags/svn/index.html","5d32c98fe1b5f1dd7c8a5316e66cb849"],["/tags/云原生/index.html","dc309c090fa1194ff1faddc74e1c83e7"],["/tags/云原生/page/2/index.html","221757db173f4dd4bdb92d39ba482fbb"],["/tags/阿里云/index.html","fa5511155fc5390b22388ee5eca507c3"]];
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
