/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/09/23/SonarQube代码扫描/index.html","5d5a8a166cb2ad897fcf69bf7e45518c"],["/2019/10/10/centos7生成随机数/index.html","ac277a459fca7c2a9ec9c06040da353b"],["/2020/05/13/iptables相关控制/index.html","dddf1bebb8be54537c89a2a6f9b0ed02"],["/2020/09/08/centos7搭建svn服务器/index.html","3e0ad3ed36d80303d180ea63e7da0be2"],["/2020/10/15/ab命令压测/index.html","5d4a33678d5be09cdbc18f204cacd559"],["/2021/08/24/rsync+inotify 实时备份/index.html","9d790ff6874fe707cfc4db2ade545542"],["/2022/05/04/部署harbor服务器（https_http）/index.html","c3088f7cf1556fe2d4a6b6e7cfa0fb53"],["/2022/06/20/kubeasz 二进制安装k8s高可用集群/index.html","0a1bce5307c20fd498a00a8145a65ebb"],["/2022/06/21/kubernetes安装coreDNS组件/index.html","0bc1c49fef3bed87a5d20135d7f4d408"],["/2022/06/23/kubernetes-ETCD/index.html","a7f9a9a47c5b2979c227b54a172b9775"],["/2022/06/24/kubeasz -etcd v3 API版本数据备份与恢复/index.html","68fbf8271d407e03713437169ac48e43"],["/2022/07/01/Deployment副本控制器/index.html","cf5ad4a0a11e748fb83c0925e31401d2"],["/2022/07/01/RC RS副本控制器/index.html","cf92ba39195591f7fc81d0358b2195bd"],["/2022/07/02/Configmap/index.html","b776b1d0df7c067b96483c372aa09ffa"],["/2022/07/02/PV PVC/index.html","6d3e18a2ca9c4545845531524fbeebbe"],["/2022/07/03/Service控制器/index.html","de16321f881399b35d3bea044b587656"],["/2022/07/03/Volume存储卷/index.html","32efb1008323f9402313c2fffaab29fc"],["/2022/07/03/secret/index.html","a073220de9c76c92e9503e1782131821"],["/2022/07/04/k8s-job cronjob/index.html","629ac2647f080686af4087841ab84eef"],["/2022/07/05/kubernetes HPA使用及测试/index.html","0fe3fced827e3fa00d1d1e4ed12fd1a7"],["/2022/08/02/使用阿里云oss静态页面部署服务/index.html","e0daf9bdd6e5e006ce5677e5693c19ea"],["/2022/08/04/基于centos7的Openssh版本升级/index.html","dddfe095447852a5ecf9978780f9a278"],["/2022/08/16/Jenkins用户权限控制插件——Role-based Authorization Strategy/index.html","69be1ffa0bb64da88c2c700afa706257"],["/archives/2019/09/index.html","e2e004812dc104bb1597ba68baaf8d4d"],["/archives/2019/10/index.html","0d1f7fbddd37b01a8c409dcf236686bd"],["/archives/2019/index.html","7a0e9106bb57f33e5aa592373c113ea8"],["/archives/2020/05/index.html","796b20c83a2991e4eee9402457c4544c"],["/archives/2020/09/index.html","0aaa801de78824c6464aca85441f4e8c"],["/archives/2020/10/index.html","548e07728b11048e48b077afe937bd35"],["/archives/2020/index.html","5985581f56b9595819ecae77c3616fa4"],["/archives/2021/08/index.html","3d151df8cc078c9be492f2b49f867a6a"],["/archives/2021/index.html","c7d8549d4a98652fa62d67eaaefe0a4c"],["/archives/2022/05/index.html","ec487479a3b78242c0ef6614847d585e"],["/archives/2022/06/index.html","1ee8cce95f275a3f664670739da0a1df"],["/archives/2022/07/index.html","13e2e087108b2f6521fec29fd2a658a5"],["/archives/2022/08/index.html","a2f23fd0d72c3350b4277bfa6ba13001"],["/archives/2022/index.html","2462f91886ebcb9a1e668659dc014c72"],["/archives/2022/page/2/index.html","a8eddcf9207fbc181964e7647c98e6b1"],["/archives/index.html","9e091b4ddfb2076c8651b1b21586c1c6"],["/archives/page/2/index.html","8a71ca3ad7c2f2fd0765f43bd3a83bae"],["/archives/page/3/index.html","b738f841e2fced055e304c89f61b98cf"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Docker/index.html","e9099abc3c688b0d761056bb9428cf20"],["/categories/SonarQube/index.html","98822d68fb4c8f553b6618fb774ba41f"],["/categories/index.html","35d45436fb889aaf79d31b1d11d55dd5"],["/categories/iptables/index.html","c6fc7d7600bd429a23d36a233f637910"],["/categories/jenkins/index.html","e67965ef034b7a622b1a775257d18a27"],["/categories/kubernetes/index.html","f0b8937767a0756d0ba5f4437d816651"],["/categories/kubernetes/page/2/index.html","3fd32ab3d66428e04c20a2ec0865fc59"],["/categories/linux/index.html","b675b6c99d87d30b4c502d05a51e4640"],["/categories/svn/index.html","ff372cabfd6c37408ab517c31bf11aa3"],["/css/background.css","2942635f3e138bf3f0652299cf376c84"],["/css/custom.css","d8f1986b73cb77a533b567a4cb45437b"],["/css/index.css","5b1fe0f7d0e912ed2fcc08d0ee2c45e9"],["/css/lantern.css","c8483fed1ae9927bc6fad5817ee8d7bd"],["/css/rightMenu.css","036623ed00b65cd7a5b31dffe2a25c4e"],["/css/universe.css","52c685572ce95860fe8ddf20fb03df83"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/pasted-0.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-1.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-10.png","5d0d6d8aac46e34b30092f808950a9d3"],["/images/pasted-11.png","0784299af846da4168cad054741957f6"],["/images/pasted-12.png","e258ff6c3291821a2b9bbc6a25574624"],["/images/pasted-13.png","000a03ee30cefc56d0749078cf04a949"],["/images/pasted-14.png","8e547d601142697e448fbb4019bbb06a"],["/images/pasted-15.png","950cc9a62554680e2f0570b97e564259"],["/images/pasted-16.png","1707596a28a9b697891bc718c96175ee"],["/images/pasted-17.png","887da59e5df5c2af9d32fea3ffd5e3f7"],["/images/pasted-18.png","5f724508b49e8e7ba1305062ef8e150a"],["/images/pasted-19.png","a47092a023a70b2427014e75873bd6cd"],["/images/pasted-2.png","0a20960a3ee7446d34a8c4cc687b7adf"],["/images/pasted-3.png","7fc1a4e3fe8ab621dc0aa0ad4309f266"],["/images/pasted-4.png","d15fb5188609b444b3f6710ecf9b139c"],["/images/pasted-5.png","ad234216c2159391c25636525c314e41"],["/images/pasted-6.png","9600a48f0f98bce154df36c0a4dbbdc5"],["/images/pasted-7.png","b42122e7904f38ca3e9a32908f872f36"],["/images/pasted-8.png","f5b4699a2bd89e9027d889247b9a1283"],["/images/pasted-9.png","1537c8048729105cddb53dfa80ef72d6"],["/img/12.png","62ac1ef86217d9ac116fa3d22d78dd9b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","e26ff9d7f5db82408a3b9d320a46ed48"],["/img/beijing.jpg","b3e047edc071811e4a08b34ad186469f"],["/img/beijing2.jpg","e776268eac348d47d7795906363fbc3b"],["/img/beijing3.jpg","f6e51a65d428d03cfe72dd0500be888c"],["/img/beijing4.jpg","4665636b9db94a609da946695a718b1b"],["/img/beijinga.jpg","2961dbd4986aa673bc4e53240e5bac25"],["/img/centos.png","21108b558fea54f6e6acaa00a49be309"],["/img/desktop.jpg","13c1182799ca5447fd6493c209ae3512"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/harbor.png","4b104adfa004775ce392037ccc140b62"],["/img/inotify.png","9ccfc735d97078fba061989fdd50fed1"],["/img/iptables.png","adbf0f41b1af8495c7f9330d88ae03af"],["/img/jenkins.png","38a775b0b873368c4efaa9bfb5760068"],["/img/jenkins1.png","dc3b8e8cb59e5864c4f7fe2dc13eab9f"],["/img/kubernetes.png","64a7709d18ce7f703f86108ab5fd844a"],["/img/sonarqube.png","965b7f7a941c46e10d3412fe294294dd"],["/img/svn.png","417b61fc1f0b02b68fc12a467bf6406c"],["/img/touxiang.png","b17d8c86cf0c70c30e7d7327dd5c7e4c"],["/img/wechat.jpg","2516cfa5ceda8f42ac6ba9efec9d88b3"],["/index.html","19ea3142204594c31ae970a8d8b505f6"],["/js/chocolate.js","4826caaa586e99d8fee8c5afbb3e70c0"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/rightMenu.js","68db67f6c6ee6b8db0eb0ddd7e85d2ef"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","fafdd847299ee73d084aa36ced9bce97"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","c6fd8358f0c563e2153a34715c9d301a"],["/page/2/index.html","8d8d20db431039c4e65cb47a2b9eaeb8"],["/page/3/index.html","e62ae12f0fd7b8cfbf9be68d8a7b64eb"],["/sw-register.js","28898393c2ca07d52cf92da23fd5d206"],["/tags/SonarQube/index.html","9f082f7fa9986af688c2569a7dc029a3"],["/tags/centos/index.html","4007c33705b18d1d69c8e4a4dcab0847"],["/tags/docker/index.html","2dc1b3eb665d16fbdb5d428e84cfa007"],["/tags/index.html","217c51557a5ea728715271faa5fa675a"],["/tags/iptables/index.html","1b75affbf2789a89ffee05d62b9eb6e2"],["/tags/jenkins/index.html","2e6c9821e34a665e300677e1b406741d"],["/tags/kubernetes/index.html","1e303da1d72670868714eba9b0bad6f8"],["/tags/kubernetes/page/2/index.html","598a767c939a7f0c523062c8fa8b3573"],["/tags/linux/index.html","09d9092ed6c685e43cc3d34452a5ac24"],["/tags/svn/index.html","6b57bc22a3d97d310ae5ca0225c7c676"],["/tags/云原生/index.html","c5112a6717bda5f46f2454925fd2523f"],["/tags/云原生/page/2/index.html","74647211791ecba9fde66697b7abd35c"],["/tags/阿里云/index.html","1fae4864841e1be007df84b74552fdf9"]];
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
