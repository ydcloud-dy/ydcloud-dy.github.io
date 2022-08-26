/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/09/23/SonarQube代码扫描/index.html","43e8e1f1944d2dcaee11f67c831eb517"],["/2020/05/13/iptables相关控制/index.html","534fb0ca38c66fe8b78354e4bb2d9658"],["/2020/09/08/centos7搭建svn服务器/index.html","dab1687e9c9d4c0ecf58f4f3a2fc8dd9"],["/2021/08/24/rsync+inotify 实时备份/index.html","f2dcad6ccd121e6b025780294717ba14"],["/2022/05/04/部署harbor服务器（https_http）/index.html","e9a52dbd3530a0286448a64d28f4111f"],["/2022/06/20/kubeasz 二进制安装k8s高可用集群/index.html","4f3809eeac1ad736c77799ed74c92f77"],["/2022/06/21/kubernetes安装coreDNS组件/index.html","e0482003b6836af1dd34dcb997406657"],["/2022/06/23/kubernetes-ETCD/index.html","60b4cb0d9dbc8fed71a85e45131a333b"],["/2022/06/24/kubeasz -etcd v3 API版本数据备份与恢复/index.html","664b6e49ad58730f1613adcbd50a398c"],["/2022/07/01/Deployment副本控制器/index.html","ef4223546bb7440e671f000793436ff6"],["/2022/07/01/RC RS副本控制器/index.html","da4fee6469824d64ec7524342a5f4fc5"],["/2022/07/02/Configmap/index.html","dfde09cc22d63af988943eadf6954f80"],["/2022/07/02/PV PVC/index.html","beab2eb539dba026d4960218bba1efe9"],["/2022/07/03/Service控制器/index.html","25ffc492dc8a70477f5547e21ab02cfb"],["/2022/07/03/Volume存储卷/index.html","2e60a0ec21563c38ff52306f3f0beaf7"],["/2022/07/03/secret/index.html","6fecf6b1ee3ad6d5a8ad8821e2a8d76f"],["/2022/07/04/k8s-job cronjob/index.html","e9074f950de6dccf8148b769c6fdee8c"],["/2022/07/05/kubernetes HPA使用及测试/index.html","742bbdc7e5090080fd1f008d5b3e790f"],["/2022/08/02/使用阿里云oss静态页面部署服务/index.html","01f4e3ebc892f041fe700d29f0a8d3d2"],["/2022/08/04/基于centos7的Openssh版本升级/index.html","8d222da9fce7efef55f34e59f0ef1328"],["/2022/08/16/Jenkins用户权限控制插件——Role-based Authorization Strategy/index.html","88206a2618acf2d96e676da6c8eb949f"],["/archives/2019/09/index.html","4c8c61a99ca4e0ec3cbecc3999c56419"],["/archives/2019/index.html","22220530e0b2005746fa397c6b806317"],["/archives/2020/05/index.html","970d77482e23e014788181117b18498f"],["/archives/2020/09/index.html","4875da31f657fb050b6ce6df6269fb4a"],["/archives/2020/index.html","dae1ed19227677540f79d0b93c4552d9"],["/archives/2021/08/index.html","7ebdca45d71974c05ce09252dbfbb861"],["/archives/2021/index.html","b27d40999a2da59bcbf0e51d06226cd6"],["/archives/2022/05/index.html","1e293aa492245223e1fa953938f01ea1"],["/archives/2022/06/index.html","f6ba82f2e8f910e439cb908eaa8e4aab"],["/archives/2022/07/index.html","dde74e1190c79a7f0993786d937f66ab"],["/archives/2022/08/index.html","3a1edf390c253fa1a6c6e42ef846ff6e"],["/archives/2022/index.html","143612fa2e232f3c785ac3902774c07c"],["/archives/2022/page/2/index.html","dcff16003a3741f5a149cf2a602369ec"],["/archives/index.html","fe2aef7ce692a667830e6e85ad242763"],["/archives/page/2/index.html","03d92318c76029956f18a5af17b160fa"],["/archives/page/3/index.html","de9d28cec8a3576d3370634331df01e3"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Docker/index.html","adc606af4009f0f48eaf10a31083ed7e"],["/categories/SonarQube/index.html","8c172cb7e4b79bbdc5e8274ee19e9de8"],["/categories/index.html","4b752d262d89586c3d071ed227b87acd"],["/categories/iptables/index.html","62115dd42f87351efbddb00ddd996e34"],["/categories/jenkins/index.html","fde8c3a225043ccc65c770699e05cd07"],["/categories/kubernetes/index.html","2b45dbc0448a3871cfdca6fe0554d2d3"],["/categories/kubernetes/page/2/index.html","46e55c888675d24f69b23c8cf9c6c320"],["/categories/linux/index.html","494605940536f1fabee27131af0aa219"],["/categories/svn/index.html","5b254013779dbd43f6873819d0c252b9"],["/css/background.css","2942635f3e138bf3f0652299cf376c84"],["/css/custom.css","d8f1986b73cb77a533b567a4cb45437b"],["/css/index.css","5b1fe0f7d0e912ed2fcc08d0ee2c45e9"],["/css/universe.css","52c685572ce95860fe8ddf20fb03df83"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/pasted-0.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-1.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-10.png","5d0d6d8aac46e34b30092f808950a9d3"],["/images/pasted-11.png","0784299af846da4168cad054741957f6"],["/images/pasted-12.png","e258ff6c3291821a2b9bbc6a25574624"],["/images/pasted-13.png","000a03ee30cefc56d0749078cf04a949"],["/images/pasted-14.png","8e547d601142697e448fbb4019bbb06a"],["/images/pasted-15.png","950cc9a62554680e2f0570b97e564259"],["/images/pasted-16.png","1707596a28a9b697891bc718c96175ee"],["/images/pasted-17.png","887da59e5df5c2af9d32fea3ffd5e3f7"],["/images/pasted-18.png","5f724508b49e8e7ba1305062ef8e150a"],["/images/pasted-19.png","a47092a023a70b2427014e75873bd6cd"],["/images/pasted-2.png","0a20960a3ee7446d34a8c4cc687b7adf"],["/images/pasted-3.png","7fc1a4e3fe8ab621dc0aa0ad4309f266"],["/images/pasted-4.png","d15fb5188609b444b3f6710ecf9b139c"],["/images/pasted-5.png","ad234216c2159391c25636525c314e41"],["/images/pasted-6.png","9600a48f0f98bce154df36c0a4dbbdc5"],["/images/pasted-7.png","b42122e7904f38ca3e9a32908f872f36"],["/images/pasted-8.png","f5b4699a2bd89e9027d889247b9a1283"],["/images/pasted-9.png","1537c8048729105cddb53dfa80ef72d6"],["/img/12.png","62ac1ef86217d9ac116fa3d22d78dd9b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","e26ff9d7f5db82408a3b9d320a46ed48"],["/img/beijing.jpg","b3e047edc071811e4a08b34ad186469f"],["/img/beijing2.jpg","e776268eac348d47d7795906363fbc3b"],["/img/beijing3.jpg","f6e51a65d428d03cfe72dd0500be888c"],["/img/beijing4.jpg","4665636b9db94a609da946695a718b1b"],["/img/centos.png","21108b558fea54f6e6acaa00a49be309"],["/img/desktop.jpg","13c1182799ca5447fd6493c209ae3512"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/harbor.png","4b104adfa004775ce392037ccc140b62"],["/img/inotify.png","9ccfc735d97078fba061989fdd50fed1"],["/img/iptables.png","adbf0f41b1af8495c7f9330d88ae03af"],["/img/jenkins.png","38a775b0b873368c4efaa9bfb5760068"],["/img/jenkins1.png","dc3b8e8cb59e5864c4f7fe2dc13eab9f"],["/img/kubernetes.png","64a7709d18ce7f703f86108ab5fd844a"],["/img/sonarqube.png","965b7f7a941c46e10d3412fe294294dd"],["/img/svn.png","417b61fc1f0b02b68fc12a467bf6406c"],["/img/touxiang.png","b17d8c86cf0c70c30e7d7327dd5c7e4c"],["/img/wechat.jpg","2516cfa5ceda8f42ac6ba9efec9d88b3"],["/index.html","e123b292e18ef9201ab5d279c5951ecd"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","fafdd847299ee73d084aa36ced9bce97"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","f769573d47f190ccc1263c73d9130bc0"],["/page/2/index.html","051c33df804bd15dbe8d09a5fba8cae8"],["/page/3/index.html","07b70bf54b791a964845192c840dbd4b"],["/sw-register.js","803dc513e2ab65b1b5b219aac14acb3e"],["/tags/SonarQube/index.html","bc6172ad3cf7a8b6185746986ae3075d"],["/tags/centos/index.html","93832cb21b832d53169e6ee668fe2ce4"],["/tags/docker/index.html","4d80b88a0221672adf940d6ecf9132a4"],["/tags/index.html","cbc000528771a565b1ad2863cb70ef28"],["/tags/iptables/index.html","5f6b90a46dee5ef26528d4d82eb020d3"],["/tags/jenkins/index.html","d8c8c20845dc975b4707136685349b0c"],["/tags/kubernetes/index.html","913d786858cfd9f6ec1911ac6a436551"],["/tags/kubernetes/page/2/index.html","d41aa3369ec740f62c9f052d0ed5e925"],["/tags/linux/index.html","00c24d5712300702606e19d0bc8e1af8"],["/tags/svn/index.html","ec01fd868a37d07c95fd55f9cfa2cf38"],["/tags/云原生/index.html","c8bdab79c77e51df223aa26bd4197985"],["/tags/云原生/page/2/index.html","dc4af1a66f44c04095721c0fa763a6e7"],["/tags/阿里云/index.html","46908ed853d4ed5d430fe1ea2e99d2c7"]];
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
