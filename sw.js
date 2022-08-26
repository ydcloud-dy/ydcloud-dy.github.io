/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/09/23/SonarQube代码扫描/index.html","3fabec17131878a900250c025178bf16"],["/2020/05/13/iptables相关控制/index.html","07a38b9c176f8c68f4098b945ff32fc4"],["/2020/09/08/centos7搭建svn服务器/index.html","6154029f2a90c483e6dca248dcbc8f6a"],["/2021/08/24/rsync+inotify 实时备份/index.html","66ad286bc28bbf3a22fc80384736f113"],["/2022/05/04/部署harbor服务器（https_http）/index.html","8b9b95f17460e2d769ea70af6b211b37"],["/2022/06/20/kubeasz 二进制安装k8s高可用集群/index.html","b1e6641ba68844da8f632bee934f2e44"],["/2022/06/21/kubernetes安装coreDNS组件/index.html","d857c5958fcf0826c7aea43013e83160"],["/2022/06/23/kubernetes-ETCD/index.html","1f3c2d7f371201b640cbd6e8196a13c6"],["/2022/06/24/kubeasz -etcd v3 API版本数据备份与恢复/index.html","a3f8dc2ad6f366a2a667dd7e4213cf9d"],["/2022/07/01/Deployment副本控制器/index.html","28af014cc875370212bf8d737f35f793"],["/2022/07/01/RC RS副本控制器/index.html","27041187a946e97b94d9e40c87f34994"],["/2022/07/02/Configmap/index.html","5b24de5b4dbf3ded6253b28cdab11145"],["/2022/07/02/PV PVC/index.html","9cac4bc3f8b09edfc9fa2e68794d7301"],["/2022/07/03/Service控制器/index.html","c52534646843b7c548a3f36f6350b759"],["/2022/07/03/Volume存储卷/index.html","fbf747820f7f7b16ded98f6ca393dccd"],["/2022/07/03/secret/index.html","32ce0c3b9344e7aaf2ff0dda371794de"],["/2022/07/04/k8s-job cronjob/index.html","ad5e11e3a98cb0d353e09b7b7692923f"],["/2022/07/05/kubernetes HPA使用及测试/index.html","c47e491f9c54412b43a12a19f03977b9"],["/2022/08/02/使用阿里云oss静态页面部署服务/index.html","bd3b9adb5d9e9e4aeec4baab9cbd881f"],["/2022/08/04/基于centos7的Openssh版本升级/index.html","093cab803d8c4179f0d66b22c054b9bd"],["/2022/08/16/Jenkins用户权限控制插件——Role-based Authorization Strategy/index.html","81851ccffb61574767cbeffc0f8a9f6b"],["/archives/2019/09/index.html","de15c92b01945480929a6795b989a648"],["/archives/2019/index.html","6080111cc460792f5877c6a21f159b53"],["/archives/2020/05/index.html","bf25dd773657e2f2dcc4eecc3eb4afb7"],["/archives/2020/09/index.html","11c902207b08532eb89d130711f76392"],["/archives/2020/index.html","6bf6107c11db26d1ef584d74fe67896e"],["/archives/2021/08/index.html","4298a86837c78544979f083e4563cbfc"],["/archives/2021/index.html","5202249b3e558e37b0ef7eb4207a07ff"],["/archives/2022/05/index.html","954f1bffd043e2b687e58142f6ea34f0"],["/archives/2022/06/index.html","c9775c377495dad383d9f37b181f4f97"],["/archives/2022/07/index.html","2f44cf33caafbe6516007590fb660c85"],["/archives/2022/08/index.html","0fbc314f7aa39b297b9b10fd55849ff5"],["/archives/2022/index.html","75279fd2f85080cd9db964585904d2df"],["/archives/2022/page/2/index.html","a985af19241f4fe385e56ad0be4598a4"],["/archives/index.html","02992ce7a65d8398d9887320cb2f5369"],["/archives/page/2/index.html","65b3fbf9bf0a221e0b2eb53364e4b98e"],["/archives/page/3/index.html","684dbe71b363f5e053be09b89052582f"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Docker/index.html","816f59f0aa4f1002e2a29a34ca180850"],["/categories/SonarQube/index.html","650eb47eff5fd30c04915fd79a52c865"],["/categories/index.html","cd0bb06e379d2966b7ae468e2f2e856e"],["/categories/iptables/index.html","d9d6781c53857b132b1c0cb96cd8bbdb"],["/categories/jenkins/index.html","3d4413774d0f4335b89298176bc52f6f"],["/categories/kubernetes/index.html","8c4ab67d0fb99c79082090a783a2a631"],["/categories/kubernetes/page/2/index.html","0529fcd57fe3db3eeb27889d6626fe45"],["/categories/linux/index.html","f899ccbb95b8ebd139201d6d433cffc0"],["/categories/svn/index.html","bd72125db29b0ea757c9e28af957d8c7"],["/css/background.css","2942635f3e138bf3f0652299cf376c84"],["/css/index.css","45e7143f892ca71e075bb93d552ee4d6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/pasted-0.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-1.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-10.png","5d0d6d8aac46e34b30092f808950a9d3"],["/images/pasted-11.png","0784299af846da4168cad054741957f6"],["/images/pasted-12.png","e258ff6c3291821a2b9bbc6a25574624"],["/images/pasted-13.png","000a03ee30cefc56d0749078cf04a949"],["/images/pasted-14.png","8e547d601142697e448fbb4019bbb06a"],["/images/pasted-15.png","950cc9a62554680e2f0570b97e564259"],["/images/pasted-16.png","1707596a28a9b697891bc718c96175ee"],["/images/pasted-17.png","887da59e5df5c2af9d32fea3ffd5e3f7"],["/images/pasted-18.png","5f724508b49e8e7ba1305062ef8e150a"],["/images/pasted-19.png","a47092a023a70b2427014e75873bd6cd"],["/images/pasted-2.png","0a20960a3ee7446d34a8c4cc687b7adf"],["/images/pasted-3.png","7fc1a4e3fe8ab621dc0aa0ad4309f266"],["/images/pasted-4.png","d15fb5188609b444b3f6710ecf9b139c"],["/images/pasted-5.png","ad234216c2159391c25636525c314e41"],["/images/pasted-6.png","9600a48f0f98bce154df36c0a4dbbdc5"],["/images/pasted-7.png","b42122e7904f38ca3e9a32908f872f36"],["/images/pasted-8.png","f5b4699a2bd89e9027d889247b9a1283"],["/images/pasted-9.png","1537c8048729105cddb53dfa80ef72d6"],["/img/12.png","62ac1ef86217d9ac116fa3d22d78dd9b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","e26ff9d7f5db82408a3b9d320a46ed48"],["/img/centos.png","21108b558fea54f6e6acaa00a49be309"],["/img/desktop.jpg","13c1182799ca5447fd6493c209ae3512"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/harbor.png","4b104adfa004775ce392037ccc140b62"],["/img/inotify.png","9ccfc735d97078fba061989fdd50fed1"],["/img/iptables.png","adbf0f41b1af8495c7f9330d88ae03af"],["/img/jenkins.png","38a775b0b873368c4efaa9bfb5760068"],["/img/jenkins1.png","dc3b8e8cb59e5864c4f7fe2dc13eab9f"],["/img/kubernetes.png","64a7709d18ce7f703f86108ab5fd844a"],["/img/sonarqube.png","965b7f7a941c46e10d3412fe294294dd"],["/img/svn.png","417b61fc1f0b02b68fc12a467bf6406c"],["/img/touxiang.png","b17d8c86cf0c70c30e7d7327dd5c7e4c"],["/img/wechat.jpg","2516cfa5ceda8f42ac6ba9efec9d88b3"],["/index.html","f87bea634287e86dd43480ed3a4b8428"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","b84039c605afc059b28c1a7cd8339f47"],["/page/2/index.html","068511c8a2d78b55e90b15a6e35245c6"],["/page/3/index.html","9be8c596fd7c775da1eb33aa225f147e"],["/sw-register.js","9d2c41fcea627d65e3c3d97435d2ac07"],["/tags/SonarQube/index.html","47425392719e1e9b541b2232caac3d46"],["/tags/centos/index.html","1ef1ead5ccd8805056c1a570c9e0b9b8"],["/tags/docker/index.html","a6f0c1d13371e23edcfbdca695b39c1f"],["/tags/index.html","9d0bc5faa472ac28efd459b58527e7a6"],["/tags/iptables/index.html","ba9dd759b7e9a41e6ce3ad8666083f0a"],["/tags/jenkins/index.html","859d57c03dc19f3bccc2c4f056c8f736"],["/tags/kubernetes/index.html","bf9689b7b9802ca611e7763e89600373"],["/tags/kubernetes/page/2/index.html","ac30e771dddede75365c473b3ee012a3"],["/tags/linux/index.html","b756f302468383df2313a23e29e20b3a"],["/tags/svn/index.html","cd4f658e1c16f9e618ed9d534b590996"],["/tags/云原生/index.html","d98fa45decc54579df2d6fd3d6e082ed"],["/tags/云原生/page/2/index.html","3152f25f2a86006bc4ecdb7e41b47f37"],["/tags/阿里云/index.html","9213d6f36a35a5324aa7dcaf2da0cc35"]];
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
