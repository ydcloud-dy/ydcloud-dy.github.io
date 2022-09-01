/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/10/扩容根分区/index.html","31d94b10a0ee4d02ed0340247e8a8173"],["/2019/09/23/SonarQube代码扫描/index.html","35de18775f8f8412ea4fcec98c178d01"],["/2019/10/10/centos7生成随机数/index.html","c9c20b69cc5c672b79c7dcaefb06ae52"],["/2020/05/13/iptables相关控制/index.html","ec3bffe87f8732737a89845c4afcc928"],["/2020/09/08/centos7搭建svn服务器/index.html","5552c3d46d0c156fe675b7e26127f051"],["/2020/10/15/ab命令压测/index.html","d37b75fbb24de46b59ea83a072bd36a5"],["/2021/08/24/rsync+inotify 实时备份/index.html","ed794960998f546748b564c491cfa2ea"],["/2022/05/04/部署harbor服务器（https_http）/index.html","cae4f5845c26655fb968fe0f11879570"],["/2022/06/20/kubeasz 二进制安装k8s高可用集群/index.html","1e7d36b5f620c0c592f4b6e7da7928c7"],["/2022/06/21/kubernetes安装coreDNS组件/index.html","a0b19797780f3a2a2098bc33c172c329"],["/2022/06/23/kubernetes-ETCD/index.html","dad53af45a6928109799b118b21ec1b4"],["/2022/06/24/kubeasz -etcd v3 API版本数据备份与恢复/index.html","dcea86cd8d99f3c2b888b6d0703592d7"],["/2022/07/01/Deployment副本控制器/index.html","b3debf0bab23efd34839702260358d8e"],["/2022/07/01/RC RS副本控制器/index.html","e17579a5c133fc6744b81fc57ef63cd9"],["/2022/07/02/Configmap/index.html","e1456fdca1a7dc84a53105ce7b7d4e7b"],["/2022/07/02/PV PVC/index.html","196ad1b9c848f018645284d687486591"],["/2022/07/03/Service控制器/index.html","caa83e51fb1de373a594011a1fbd340e"],["/2022/07/03/Volume存储卷/index.html","665031469e8474b648214de0313f1966"],["/2022/07/03/secret/index.html","08f0b6a0c8bc5d2e4042b37cad869137"],["/2022/07/04/k8s-job cronjob/index.html","0f8fdad3d7463e4d4f228fe53674037f"],["/2022/07/05/kubernetes HPA使用及测试/index.html","f2a78029d773694c38e0a4d3923d2bff"],["/2022/08/02/使用阿里云oss静态页面部署服务/index.html","87f2168f2d8a442954f85baf1f50c335"],["/2022/08/04/基于centos7的Openssh版本升级/index.html","a1688af863182830a1117b59d3798911"],["/2022/08/16/Jenkins用户权限控制插件——Role-based Authorization Strategy/index.html","8d3c2a59b8a975a4344112d301e80d64"],["/archives/2019/06/index.html","5124441ccc6a1add1ad8a7b8798cd8c7"],["/archives/2019/09/index.html","2a8a886da5b08a3aa7eb0d35edf0dc8a"],["/archives/2019/10/index.html","28f41fbd995617a505a7ccf7aa0478f5"],["/archives/2019/index.html","4fd0898c8c4ce292117a64bd9f846e3a"],["/archives/2020/05/index.html","2e041302cfbba2174008b8018060ee33"],["/archives/2020/09/index.html","2e324d821d6dea9dcee66cacff599e78"],["/archives/2020/10/index.html","70a6eb09b82555ef9ae319a0c53075b4"],["/archives/2020/index.html","4ebb0758c5c7f6e929ed6889f4c245cb"],["/archives/2021/08/index.html","ae75dff8a63b66bcd7869cd93aa5f101"],["/archives/2021/index.html","c50837163224d85f78f0d0549c8658bc"],["/archives/2022/05/index.html","34792211dbcfd2d3de035c26331899f0"],["/archives/2022/06/index.html","1d28b2d21dbd892132f9162c9094da50"],["/archives/2022/07/index.html","95384ccb25be92fd821df1cba2ae4813"],["/archives/2022/08/index.html","67087bd6d0f6bb338cf29bfa3ee749ad"],["/archives/2022/index.html","0f0a2e8aa72aeff00317c02009d23531"],["/archives/2022/page/2/index.html","c3779dfbf010dba568e22e6fd84b62f5"],["/archives/index.html","22bce16a90c1650c3445e5dca502b23f"],["/archives/page/2/index.html","43f6a1354a8c4a834a675be0be74fe58"],["/archives/page/3/index.html","f5eb953024eaf4b8cbef59f3d7cf556f"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Docker/index.html","6378981e9bd35db95ba710c733947776"],["/categories/SonarQube/index.html","68c4feba9ebf127e9610ed1fee641ced"],["/categories/index.html","7fd9a92ad8b6bd9bbae78a3ea51d211a"],["/categories/iptables/index.html","b6590fc485ad56d1c4a640fa469b6fc7"],["/categories/jenkins/index.html","5fcb895c995484e06d571042401ee590"],["/categories/kubernetes/index.html","d23f9de8278d51f5a6982d6a546827c9"],["/categories/kubernetes/page/2/index.html","aa3880721b8aef60a20e839f015da668"],["/categories/linux/index.html","2c4186b118f9c572bf509682d91d8d5a"],["/categories/svn/index.html","6c026bd077d0ae6f133aa1b82ebe6556"],["/css/background.css","2942635f3e138bf3f0652299cf376c84"],["/css/custom.css","d8f1986b73cb77a533b567a4cb45437b"],["/css/index.css","5b1fe0f7d0e912ed2fcc08d0ee2c45e9"],["/css/lantern.css","c8483fed1ae9927bc6fad5817ee8d7bd"],["/css/rightMenu.css","036623ed00b65cd7a5b31dffe2a25c4e"],["/css/universe.css","52c685572ce95860fe8ddf20fb03df83"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/pasted-0.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-1.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-10.png","5d0d6d8aac46e34b30092f808950a9d3"],["/images/pasted-11.png","0784299af846da4168cad054741957f6"],["/images/pasted-12.png","e258ff6c3291821a2b9bbc6a25574624"],["/images/pasted-13.png","000a03ee30cefc56d0749078cf04a949"],["/images/pasted-14.png","8e547d601142697e448fbb4019bbb06a"],["/images/pasted-15.png","950cc9a62554680e2f0570b97e564259"],["/images/pasted-16.png","1707596a28a9b697891bc718c96175ee"],["/images/pasted-17.png","887da59e5df5c2af9d32fea3ffd5e3f7"],["/images/pasted-18.png","5f724508b49e8e7ba1305062ef8e150a"],["/images/pasted-19.png","a47092a023a70b2427014e75873bd6cd"],["/images/pasted-2.png","0a20960a3ee7446d34a8c4cc687b7adf"],["/images/pasted-3.png","7fc1a4e3fe8ab621dc0aa0ad4309f266"],["/images/pasted-4.png","d15fb5188609b444b3f6710ecf9b139c"],["/images/pasted-5.png","ad234216c2159391c25636525c314e41"],["/images/pasted-6.png","9600a48f0f98bce154df36c0a4dbbdc5"],["/images/pasted-7.png","b42122e7904f38ca3e9a32908f872f36"],["/images/pasted-8.png","f5b4699a2bd89e9027d889247b9a1283"],["/images/pasted-9.png","1537c8048729105cddb53dfa80ef72d6"],["/img/12.png","62ac1ef86217d9ac116fa3d22d78dd9b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","e26ff9d7f5db82408a3b9d320a46ed48"],["/img/beijing.jpg","b3e047edc071811e4a08b34ad186469f"],["/img/beijing2.jpg","e776268eac348d47d7795906363fbc3b"],["/img/beijing3.jpg","f6e51a65d428d03cfe72dd0500be888c"],["/img/beijing4.jpg","4665636b9db94a609da946695a718b1b"],["/img/beijinga.jpg","2961dbd4986aa673bc4e53240e5bac25"],["/img/centos.png","21108b558fea54f6e6acaa00a49be309"],["/img/desktop.jpg","13c1182799ca5447fd6493c209ae3512"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/harbor.png","4b104adfa004775ce392037ccc140b62"],["/img/inotify.png","9ccfc735d97078fba061989fdd50fed1"],["/img/iptables.png","adbf0f41b1af8495c7f9330d88ae03af"],["/img/jenkins.png","38a775b0b873368c4efaa9bfb5760068"],["/img/jenkins1.png","dc3b8e8cb59e5864c4f7fe2dc13eab9f"],["/img/kubernetes.png","64a7709d18ce7f703f86108ab5fd844a"],["/img/sonarqube.png","965b7f7a941c46e10d3412fe294294dd"],["/img/svn.png","417b61fc1f0b02b68fc12a467bf6406c"],["/img/touxiang.png","b17d8c86cf0c70c30e7d7327dd5c7e4c"],["/img/wechat.jpg","2516cfa5ceda8f42ac6ba9efec9d88b3"],["/index.html","21fd0be647bc873c8690fd5663fdbcf1"],["/js/chocolate.js","4826caaa586e99d8fee8c5afbb3e70c0"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/rightMenu.js","68db67f6c6ee6b8db0eb0ddd7e85d2ef"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","fafdd847299ee73d084aa36ced9bce97"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","f3e788c21fba6d0ac67f05dc7ade7ca7"],["/page/2/index.html","ce263da9626deb5b0014b5fca73834d1"],["/page/3/index.html","909c7132222882e488b35896e7daed06"],["/sw-register.js","b14e85fb8693ed7cd4e767321d1d538b"],["/tags/SonarQube/index.html","1b86ba44165495a46f15da8f42ab2465"],["/tags/centos/index.html","0b2d39df518164f66f95b8d2ed6312ab"],["/tags/docker/index.html","6dbecb5d62c6b7c656d9c51a66fbb12c"],["/tags/index.html","bf3cb91c455d5c6a7aeb40acef9a01f3"],["/tags/iptables/index.html","4f1adecb51ac99e0554fb54f4c844572"],["/tags/jenkins/index.html","9a959965fc2959ebc047078f08d80774"],["/tags/kubernetes/index.html","a1994d66e8b51494125bf304672d98ec"],["/tags/kubernetes/page/2/index.html","e8ab32147f151aa0b45195a2adc42202"],["/tags/linux/index.html","6484a58e9bfa20d81cf9f42d132377d3"],["/tags/svn/index.html","6ef87eb5241c7b340d9391ef552495df"],["/tags/云原生/index.html","d01e6eda8067dba43756a5edb2d3660d"],["/tags/云原生/page/2/index.html","2e7c045b0ddb16b8f816e1fa84c88226"],["/tags/阿里云/index.html","3fbb568c961d8420e851e10fd1485720"]];
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
