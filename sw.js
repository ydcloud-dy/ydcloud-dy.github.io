/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/09/23/SonarQube代码扫描/index.html","c97c7a3e46a42ad3275571ce2f791da1"],["/2020/05/13/iptables相关控制/index.html","23e03b05d81342b5869f1093a4d2c591"],["/2020/09/08/centos7搭建svn服务器/index.html","b179bf011030ebced89e1d8211d136cc"],["/2021/08/24/rsync+inotify 实时备份/index.html","3c1726feadc3e0523d5800e093c5a35b"],["/2022/05/04/部署harbor服务器（https_http）/index.html","19dd18ffacf59399f960b9e298eb1da5"],["/2022/06/20/kubeasz 二进制安装k8s高可用集群/index.html","876b0f876b31aa0bb086de2845d6995f"],["/2022/06/21/kubernetes安装coreDNS组件/index.html","5119f7ab17af69ef561cbf241d8398f8"],["/2022/06/23/kubernetes-ETCD/index.html","dec1175513733545a8fc346c201decbc"],["/2022/06/24/kubeasz -etcd v3 API版本数据备份与恢复/index.html","e882cdd2e87dbe4375ea648185c51847"],["/2022/07/01/Deployment副本控制器/index.html","2011170946e288569c21e72c7afe871d"],["/2022/07/01/RC RS副本控制器/index.html","1cff896a8de1feeb93860e1cbe197149"],["/2022/07/02/Configmap/index.html","c6ea48a65285c78ee0c6ea0b009a5570"],["/2022/07/02/PV PVC/index.html","411490c8666938fa0f023c922a008655"],["/2022/07/03/Service控制器/index.html","a5aa4b68920b5d79cc4ee5615719a4ca"],["/2022/07/03/Volume存储卷/index.html","d2780ca3e1bd31b90965fa2ac94da4e0"],["/2022/07/03/secret/index.html","7e81f68e491603d338e5a03905956670"],["/2022/07/04/k8s-job cronjob/index.html","d3bd0a092bd3718a7a54daf75bda45f5"],["/2022/07/05/kubernetes HPA使用及测试/index.html","d25a08733e557996d1368222bbb9f070"],["/2022/08/02/使用阿里云oss静态页面部署服务/index.html","54d19f7f4108cea51b51133de463f26a"],["/2022/08/04/基于centos7的Openssh版本升级/index.html","74178ab40375763bbb6f44282efc1f0d"],["/2022/08/16/Jenkins用户权限控制插件——Role-based Authorization Strategy/index.html","5cc92aad6ae918a8bef6775794e1f9f3"],["/archives/2019/09/index.html","17a5b50abcfe1c56be6cf5708c306e67"],["/archives/2019/index.html","6a58be9e47be5af162ade2b2d133c316"],["/archives/2020/05/index.html","80cb82ae36fe7b3bce2f1446d7b17a7d"],["/archives/2020/09/index.html","e28022f01510eed41e269448bee6e2b8"],["/archives/2020/index.html","acc1e2f3af87e2b0d9b2bd26cda46d3e"],["/archives/2021/08/index.html","4c792fbbe37b6adf43ee0e583d82726d"],["/archives/2021/index.html","dcaa002428968caacaaffa06bf50d3fe"],["/archives/2022/05/index.html","ab023e58800604ceae7829142e52cd9f"],["/archives/2022/06/index.html","f73b3f6b18486987d1d25bf783702efd"],["/archives/2022/07/index.html","e5305623781b10d8438d3b4b69075213"],["/archives/2022/08/index.html","31390445fee8f83dc6895abe440b8aef"],["/archives/2022/index.html","60ce319dfb0e742d3f237d42f235c170"],["/archives/2022/page/2/index.html","92ea843f95d3a3d5c26a1f75a88d9e68"],["/archives/index.html","8fc197f4aac1b7fe54e193fedefbc800"],["/archives/page/2/index.html","2179bb08430ec3f22f9c35c6a1ac42d4"],["/archives/page/3/index.html","07a0d3a6e7472183221d198b6d0cb89d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Docker/index.html","e7f3130f0ad7578654523a62d42f3d40"],["/categories/SonarQube/index.html","e7a7a54ec4a9b31283ec17ab7a0ca7b4"],["/categories/index.html","68075c6c213ec22bd8b5dbb6faeb4823"],["/categories/iptables/index.html","0c574b448062aafa06ac398e0db998a1"],["/categories/jenkins/index.html","df6d018da66bd3572120a081a79758fa"],["/categories/kubernetes/index.html","0ab334ecffcd93a52aeef497b0139a8e"],["/categories/kubernetes/page/2/index.html","6edfe67d663765e9bd2fc7dea023a5cd"],["/categories/linux/index.html","f71e9bd267a825b5f48e09afa0b12650"],["/categories/svn/index.html","fe7e6744867e7688ddacbed3fbac6171"],["/css/background.css","2942635f3e138bf3f0652299cf376c84"],["/css/index.css","45e7143f892ca71e075bb93d552ee4d6"],["/css/universe.css","52c685572ce95860fe8ddf20fb03df83"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/pasted-0.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-1.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-10.png","5d0d6d8aac46e34b30092f808950a9d3"],["/images/pasted-11.png","0784299af846da4168cad054741957f6"],["/images/pasted-12.png","e258ff6c3291821a2b9bbc6a25574624"],["/images/pasted-13.png","000a03ee30cefc56d0749078cf04a949"],["/images/pasted-14.png","8e547d601142697e448fbb4019bbb06a"],["/images/pasted-15.png","950cc9a62554680e2f0570b97e564259"],["/images/pasted-16.png","1707596a28a9b697891bc718c96175ee"],["/images/pasted-17.png","887da59e5df5c2af9d32fea3ffd5e3f7"],["/images/pasted-18.png","5f724508b49e8e7ba1305062ef8e150a"],["/images/pasted-19.png","a47092a023a70b2427014e75873bd6cd"],["/images/pasted-2.png","0a20960a3ee7446d34a8c4cc687b7adf"],["/images/pasted-3.png","7fc1a4e3fe8ab621dc0aa0ad4309f266"],["/images/pasted-4.png","d15fb5188609b444b3f6710ecf9b139c"],["/images/pasted-5.png","ad234216c2159391c25636525c314e41"],["/images/pasted-6.png","9600a48f0f98bce154df36c0a4dbbdc5"],["/images/pasted-7.png","b42122e7904f38ca3e9a32908f872f36"],["/images/pasted-8.png","f5b4699a2bd89e9027d889247b9a1283"],["/images/pasted-9.png","1537c8048729105cddb53dfa80ef72d6"],["/img/12.png","62ac1ef86217d9ac116fa3d22d78dd9b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","e26ff9d7f5db82408a3b9d320a46ed48"],["/img/centos.png","21108b558fea54f6e6acaa00a49be309"],["/img/desktop.jpg","13c1182799ca5447fd6493c209ae3512"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/harbor.png","4b104adfa004775ce392037ccc140b62"],["/img/inotify.png","9ccfc735d97078fba061989fdd50fed1"],["/img/iptables.png","adbf0f41b1af8495c7f9330d88ae03af"],["/img/jenkins.png","38a775b0b873368c4efaa9bfb5760068"],["/img/jenkins1.png","dc3b8e8cb59e5864c4f7fe2dc13eab9f"],["/img/kubernetes.png","64a7709d18ce7f703f86108ab5fd844a"],["/img/sonarqube.png","965b7f7a941c46e10d3412fe294294dd"],["/img/svn.png","417b61fc1f0b02b68fc12a467bf6406c"],["/img/touxiang.png","b17d8c86cf0c70c30e7d7327dd5c7e4c"],["/img/wechat.jpg","2516cfa5ceda8f42ac6ba9efec9d88b3"],["/index.html","6cf73274f5ad959ece768110c669573b"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","fafdd847299ee73d084aa36ced9bce97"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","cf1f990578fb2e39d4ee27ed39a0fd27"],["/page/2/index.html","977f37c291ecf983071759799865e8fe"],["/page/3/index.html","84104d2fe896b10e5cbdb5f6347f28bd"],["/sw-register.js","ade0b135bf4170eba1b0774b50adef9a"],["/tags/SonarQube/index.html","8435a678837d19ac177fd51293696e93"],["/tags/centos/index.html","ddf88c2c49f0b74a1a3964c0eede7b9c"],["/tags/docker/index.html","7b2b4c83e1a09f3fb02e5be994f3eadc"],["/tags/index.html","07949815322390b3d16ac8c603e2224e"],["/tags/iptables/index.html","8282fd2a69d951db1cfafbaa130825db"],["/tags/jenkins/index.html","b09b453fb426ec43bfc27e391a1d3562"],["/tags/kubernetes/index.html","40506377e71afed74ac692ff3a486504"],["/tags/kubernetes/page/2/index.html","fc098f3aa601916205e5cad578eaec67"],["/tags/linux/index.html","801733f3e9a1b8e6e19dd22f733b1cc5"],["/tags/svn/index.html","70608477e9901432e4f9511680a47f89"],["/tags/云原生/index.html","f732ff2e174ac4312fce7bc8b5906b5a"],["/tags/云原生/page/2/index.html","839d883df71511d9d828b829a25b51e5"],["/tags/阿里云/index.html","e9406d396a60d401b1a6898635bd084e"]];
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
