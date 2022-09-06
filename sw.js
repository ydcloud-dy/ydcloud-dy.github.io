/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/06/MySQL读写分离架构（MHA+Atlas）/index.html","d75b1ce40d06defe4a19e163957f80e6"],["/2019/03/08/MySQL分布式架构-MyCAT/index.html","094a58c5e5ea2d830b1ccf892bc4c738"],["/2019/03/14/MySQL物理备份工具使用（Percona Xtrabackup）PBK   XBK/index.html","ac26dc6fc421a2de0da89fa5dabc13d8"],["/2019/03/19/MySQL 备份恢复（mysqldump）/index.html","27cc66ca9e5799e3b328be24c6121b02"],["/2019/03/23/MySQL主从复制（Replication）/index.html","a32c288f21310c31c73b52767b693e0f"],["/2019/03/24/MySQL MHA 高可用/index.html","a300338610bd03dbf571e49b398939fe"],["/2019/03/24/MySQL 优化/index.html","0dfccaeb700a72644bb96b2deb926f86"],["/2019/03/26/MySQL 日志管理/index.html","84aa34472ae1b0d77519877a774f42e0"],["/2019/06/10/扩容根分区/index.html","b6f61d36a35ce0ec4e04db5bc372ed07"],["/2019/09/23/SonarQube代码扫描/index.html","f6a1cce20dbf93365310f248db6d9ce1"],["/2019/10/10/centos7生成随机数/index.html","8a90b4bbb8f243178be6cfbbe968901a"],["/2020/05/13/iptables相关控制/index.html","ae0a702fdbb318d08167b304f24f5ab5"],["/2020/09/08/centos7搭建svn服务器/index.html","eb623330741ea75ca2ed8535e2bc9837"],["/2020/10/15/ab命令压测/index.html","3a39478565e2faa91c2a175d5958eea0"],["/2021/08/24/rsync+inotify 实时备份/index.html","cc0d6fb9a58ca8e03da604403cc6782f"],["/2022/05/04/部署harbor服务器（https_http）/index.html","accc429375ca9f89d61d95d6132ef7d6"],["/2022/06/20/kubeasz 二进制安装k8s高可用集群/index.html","c515ba6382ebc8f4101461250abd8b84"],["/2022/06/21/kubernetes安装coreDNS组件/index.html","b431745cdb21a66b3fcd0703b5cd5907"],["/2022/06/23/kubernetes-ETCD/index.html","c0855c24c698366212376e54025d76ae"],["/2022/06/24/kubeasz -etcd v3 API版本数据备份与恢复/index.html","da8713ff50600a2244a91a3963430747"],["/2022/07/01/Deployment副本控制器/index.html","80952afb26a8b45df09e711885f7bd3c"],["/2022/07/01/RC RS副本控制器/index.html","cbbd8e2fcd44460c7e79f8cd59035951"],["/2022/07/02/Configmap/index.html","47e517aee80513f5ef85e4ba9efdbc29"],["/2022/07/02/PV PVC/index.html","16858d56778e998e00165a70326f2259"],["/2022/07/03/Service控制器/index.html","eb56fb1ed86ab39fd9babd6b30cb94f5"],["/2022/07/03/Volume存储卷/index.html","1ebf9c3308bdfcacf1265f3b3dcf11a0"],["/2022/07/03/secret/index.html","8f217c945f49f40695c9538ce019692e"],["/2022/07/04/k8s-job cronjob/index.html","97996831b6cf12700c887e26ca7845d2"],["/2022/07/05/kubernetes HPA使用及测试/index.html","74dc06b6ee58a33ea1a844ecfed2e3c1"],["/2022/08/02/使用阿里云oss静态页面部署服务/index.html","2ac4a8b93b7e7137e0d77ceb241efe58"],["/2022/08/04/基于centos7的Openssh版本升级/index.html","f8319ab8b0369c59dc6d49c1a6b3548e"],["/2022/08/16/Jenkins用户权限控制插件——Role-based Authorization Strategy/index.html","29b3a9aa9f5eca10badfd4f8b0b26b20"],["/archives/2019/03/index.html","5ba68ba822e197313d7fc0e9245df462"],["/archives/2019/06/index.html","940fec723f329fa2d39137a7afb3913e"],["/archives/2019/09/index.html","02f6928dc17c0c53f0ddc5d5ddc77995"],["/archives/2019/10/index.html","20df3d01a212a55d5f47b4ed064ff208"],["/archives/2019/index.html","120d754dc15c750f0a8c083f0037e7c1"],["/archives/2019/page/2/index.html","2f34642a512d13754597a3bb95e07b92"],["/archives/2020/05/index.html","f05902cac119b2a6bd845dcc7d8a9da5"],["/archives/2020/09/index.html","0c25a0bc8bc69cadc40776076504e838"],["/archives/2020/10/index.html","5d2c7261f7689acf7e2f142bf58c3b9e"],["/archives/2020/index.html","223134812f0e76bdde528e23a16ea9af"],["/archives/2021/08/index.html","16d50cdd4e9dec823cfbee61baef7e85"],["/archives/2021/index.html","8114dfee3aabe57dbab4e659d80a5a14"],["/archives/2022/05/index.html","d1f174294b8b88182ad2cf45b6f42a0a"],["/archives/2022/06/index.html","b5ef3268a612d5aee82ef8f0f313da53"],["/archives/2022/07/index.html","3458b424e2a19c13bb391fe8414b68e3"],["/archives/2022/08/index.html","8b99d36c3fcda6af3b96d1e145fdc68b"],["/archives/2022/index.html","52bb641dbfc722403157a62d98ecc032"],["/archives/2022/page/2/index.html","61c0e2e1af2e477951e83c3c10db6725"],["/archives/index.html","a44d57e7b8db594b3e5f7ad3eacf20da"],["/archives/page/2/index.html","7e78d38a5ee3910b2ad70817562870f1"],["/archives/page/3/index.html","24ddf31682b3ef0973fe8dee00227abf"],["/archives/page/4/index.html","dbd35f5b2724139ed5ee03fc4beddce3"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Docker/index.html","dc8573d0d765a8d34bd5269200d27337"],["/categories/SonarQube/index.html","b83c502523bcc24898bc9e4697c599db"],["/categories/index.html","0520d257d3d319c7745000f359980dbe"],["/categories/iptables/index.html","4933c04d6aa18a2772ba339b5527a986"],["/categories/jenkins/index.html","732b524b727f0dcc189aa08b89f5851a"],["/categories/kubernetes/index.html","2aa1ba12144a60d4a8d03b6e631640e2"],["/categories/kubernetes/page/2/index.html","eaaf93b34a45c2c075deeb3f3ea7a7a8"],["/categories/linux/index.html","7323d31474251a8ee8704b930d1ca412"],["/categories/mysql/index.html","2a7bb0a06ab83094c2ee1af218486f97"],["/categories/svn/index.html","cd7f67f57663e4b2e555082cb85145ec"],["/css/background.css","2942635f3e138bf3f0652299cf376c84"],["/css/custom.css","d8f1986b73cb77a533b567a4cb45437b"],["/css/index.css","5b1fe0f7d0e912ed2fcc08d0ee2c45e9"],["/css/lantern.css","c8483fed1ae9927bc6fad5817ee8d7bd"],["/css/rightMenu.css","036623ed00b65cd7a5b31dffe2a25c4e"],["/css/universe.css","52c685572ce95860fe8ddf20fb03df83"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/pasted-0.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-1.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-10.png","5d0d6d8aac46e34b30092f808950a9d3"],["/images/pasted-11.png","0784299af846da4168cad054741957f6"],["/images/pasted-12.png","e258ff6c3291821a2b9bbc6a25574624"],["/images/pasted-13.png","000a03ee30cefc56d0749078cf04a949"],["/images/pasted-14.png","8e547d601142697e448fbb4019bbb06a"],["/images/pasted-15.png","950cc9a62554680e2f0570b97e564259"],["/images/pasted-16.png","1707596a28a9b697891bc718c96175ee"],["/images/pasted-17.png","887da59e5df5c2af9d32fea3ffd5e3f7"],["/images/pasted-18.png","5f724508b49e8e7ba1305062ef8e150a"],["/images/pasted-19.png","a47092a023a70b2427014e75873bd6cd"],["/images/pasted-2.png","0a20960a3ee7446d34a8c4cc687b7adf"],["/images/pasted-3.png","7fc1a4e3fe8ab621dc0aa0ad4309f266"],["/images/pasted-4.png","d15fb5188609b444b3f6710ecf9b139c"],["/images/pasted-5.png","ad234216c2159391c25636525c314e41"],["/images/pasted-6.png","9600a48f0f98bce154df36c0a4dbbdc5"],["/images/pasted-7.png","b42122e7904f38ca3e9a32908f872f36"],["/images/pasted-8.png","f5b4699a2bd89e9027d889247b9a1283"],["/images/pasted-9.png","1537c8048729105cddb53dfa80ef72d6"],["/img/12.png","62ac1ef86217d9ac116fa3d22d78dd9b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","e26ff9d7f5db82408a3b9d320a46ed48"],["/img/beijing.jpg","b3e047edc071811e4a08b34ad186469f"],["/img/beijing2.jpg","e776268eac348d47d7795906363fbc3b"],["/img/beijing3.jpg","f6e51a65d428d03cfe72dd0500be888c"],["/img/beijing4.jpg","4665636b9db94a609da946695a718b1b"],["/img/beijinga.jpg","2961dbd4986aa673bc4e53240e5bac25"],["/img/centos.png","21108b558fea54f6e6acaa00a49be309"],["/img/desktop.jpg","13c1182799ca5447fd6493c209ae3512"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/harbor.png","4b104adfa004775ce392037ccc140b62"],["/img/inotify.png","9ccfc735d97078fba061989fdd50fed1"],["/img/iptables.png","adbf0f41b1af8495c7f9330d88ae03af"],["/img/jenkins.png","38a775b0b873368c4efaa9bfb5760068"],["/img/jenkins1.png","dc3b8e8cb59e5864c4f7fe2dc13eab9f"],["/img/kubernetes.png","64a7709d18ce7f703f86108ab5fd844a"],["/img/mysql.jpg","0b91007118ea38da3474691047dd193f"],["/img/sonarqube.png","965b7f7a941c46e10d3412fe294294dd"],["/img/svn.png","417b61fc1f0b02b68fc12a467bf6406c"],["/img/touxiang.png","b17d8c86cf0c70c30e7d7327dd5c7e4c"],["/img/wechat.jpg","2516cfa5ceda8f42ac6ba9efec9d88b3"],["/index.html","4cc0bb3ee02b839e793a2d7a24e29751"],["/js/chocolate.js","4826caaa586e99d8fee8c5afbb3e70c0"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/rightMenu.js","68db67f6c6ee6b8db0eb0ddd7e85d2ef"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","fafdd847299ee73d084aa36ced9bce97"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","26ab6a2b9450f84da74e7394661b879c"],["/page/2/index.html","eeebc62c328fd80a5e2df0be972b906a"],["/page/3/index.html","ad0b0cb0f0ed02bb30fc2e4b8048f9b4"],["/page/4/index.html","017535538b0d6a089ffecec2422a65b1"],["/sw-register.js","695300bdaee37e34572825357d6e71e4"],["/tags/SonarQube/index.html","87151b9e6993c26c2ff6cb47f2e07b1b"],["/tags/centos/index.html","a61588cb13898bdb325869466c2a09ab"],["/tags/docker/index.html","1978ae9058339ad1ce1282fa2482a660"],["/tags/index.html","0bfb6984e5a98b15f54443838a79822e"],["/tags/iptables/index.html","f99f5c6b686100fb9baff4c9819a84ad"],["/tags/jenkins/index.html","eaef357bc6dc1477bdbbfb3fddce13f3"],["/tags/kubernetes/index.html","ad5db94d01ff1942fa1e95ccdaa2f1d5"],["/tags/kubernetes/page/2/index.html","d90d85c296181b3aaace6817ed668ef7"],["/tags/linux/index.html","b3186f185f4fa737295bddebbd5303a6"],["/tags/mysql/index.html","12532783a53ae3c547e09bf6a2d017eb"],["/tags/svn/index.html","c97ec03c3a148e3b08bd35c5c931f7d3"],["/tags/云原生/index.html","b1524e638cb8e921e3d16f16da454b5c"],["/tags/云原生/page/2/index.html","731ec812dd4b8704113c97dd9c3550da"],["/tags/阿里云/index.html","5f5734f1d1a79f274717e766583ef78b"]];
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
