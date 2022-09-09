/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/06/MySQL读写分离架构（MHA+Atlas）/index.html","ec55c176ec5b9cc356a04a088ee5b244"],["/2019/03/08/MySQL分布式架构-MyCAT/index.html","9b4b48adf729883935806e5b1ceddf71"],["/2019/03/14/MySQL物理备份工具使用（Percona Xtrabackup）PBK   XBK/index.html","bc27a8cf04e19972e7e42bbe8043b147"],["/2019/03/19/MySQL 备份恢复（mysqldump）/index.html","7e2e1188ff98b4fc922f65baa9d796d2"],["/2019/03/23/MySQL主从复制（Replication）/index.html","afcbd6a4fd753d36475b3d6a0a4d0953"],["/2019/03/24/MySQL MHA 高可用/index.html","ae7edd7aac98e2ea1ee828c98b52e3d6"],["/2019/03/24/MySQL 优化/index.html","bc4463670ab03e13a068535818bbbb85"],["/2019/03/26/MySQL 日志管理/index.html","a8a5b9b53723a92f75c4cfc9ef6d3a26"],["/2019/06/10/扩容根分区/index.html","3eebe0bf64de8e62f1cb04207e9f09ba"],["/2019/09/23/SonarQube代码扫描/index.html","22b53edaafd587e428da2f8b80cb5f85"],["/2019/10/10/centos7生成随机数/index.html","149d360099bb61ae20beac63789c2c91"],["/2020/02/14/promehteus+grafana/index.html","30067f91d0d031665ad5847f303dd738"],["/2020/05/02/pipeline分布式构建和pipline基础语法/index.html","9f136d17b8a06927d2232dc023c43cc7"],["/2020/05/13/iptables相关控制/index.html","f5c5ca930c925d4d1ab44b76dae8372d"],["/2020/09/08/centos7搭建svn服务器/index.html","a6c35bee7279ceb3d9d4351953dfa0de"],["/2020/10/15/ab命令压测/index.html","ecda780eb62f805b17ab25d6b8b80b86"],["/2021/08/24/rsync+inotify 实时备份/index.html","8c9634e85d0bc7e54bafbb0872d3b307"],["/2022/05/04/部署harbor服务器（https_http）/index.html","e349c2d29c01de141aa6b059f32aee38"],["/2022/06/20/kubeasz 二进制安装k8s高可用集群/index.html","2c339e7557a57793962e9bb069c21b55"],["/2022/06/21/kubernetes安装coreDNS组件/index.html","1a8a2db671dae18fdaa77fa61e192c90"],["/2022/06/23/kubernetes-ETCD/index.html","f93e22223bf2d60fc7f9a9af0ff0757e"],["/2022/06/24/kubeasz -etcd v3 API版本数据备份与恢复/index.html","28c8969546148484a9b3a77d3a68340e"],["/2022/07/01/Deployment副本控制器/index.html","874e9a40b0fb2bbb4aea39cfd0925be3"],["/2022/07/01/RC RS副本控制器/index.html","5c2d694bd0bb3d70ed3303ea318e3cb6"],["/2022/07/02/Configmap/index.html","37f821bbe4dec70b820ca70315846448"],["/2022/07/02/PV PVC/index.html","ee24b1e0fa30b89254cce49ea9fecb4a"],["/2022/07/03/Service控制器/index.html","1298e2c875731497dcfab59d05869183"],["/2022/07/03/Volume存储卷/index.html","82f18f143cecabdd1c74f23a8bc4c5b5"],["/2022/07/03/secret/index.html","160407f90299fe76ce563465af78af78"],["/2022/07/04/k8s-job cronjob/index.html","eea6d8b7d260020ed67163618f2fa157"],["/2022/07/05/kubernetes HPA使用及测试/index.html","164b28d742b07a2fb10f5209eea10635"],["/2022/08/02/使用阿里云oss静态页面部署服务/index.html","a0b559fc65bfeb929c3b5b0a9963d210"],["/2022/08/04/基于centos7的Openssh版本升级/index.html","6cf288ed7922cfeb945285227bc24b1e"],["/2022/08/16/Jenkins用户权限控制插件——Role-based Authorization Strategy/index.html","bebceafe4e5eaf2b40ce2cefdff12e30"],["/404.html","6cec7bd9e4fd7bfe2c487b82293e33a4"],["/archives/2019/03/index.html","ca7775f7acba02e02b44e7b7f3a7ecd5"],["/archives/2019/06/index.html","5b44a8a761a8ffe2482c1bf2bf4949fb"],["/archives/2019/09/index.html","31d972088ccfc33bdc78dd3f981eb6f5"],["/archives/2019/10/index.html","a6199641bdfd44704268bc264b73ee92"],["/archives/2019/index.html","7998951102bc6f24032d17f63ddd0efe"],["/archives/2019/page/2/index.html","974654a494db0f9233b320244575c01c"],["/archives/2020/02/index.html","b6391db264945059e944c297256b7384"],["/archives/2020/05/index.html","0feb7bdc452cf81dc92b4d3272734c64"],["/archives/2020/09/index.html","d337b389afc060e188f11e6bc71b8180"],["/archives/2020/10/index.html","5c20a4b447885801d795f05638584fd8"],["/archives/2020/index.html","d8890da39b4658e488f4f3a618a04b76"],["/archives/2021/08/index.html","f46295a56cfc655064292ab4e72cbea0"],["/archives/2021/index.html","44724713d13ba3c5ced360c07ca8886d"],["/archives/2022/05/index.html","cb72caf39872fbc0350c4c58661c625e"],["/archives/2022/06/index.html","25c3825a0520f4de1742626bc8e4f942"],["/archives/2022/07/index.html","a04a751c8a7cec469c62536f7d27d550"],["/archives/2022/08/index.html","a93356b8be580b9906db65ee9c8344e8"],["/archives/2022/index.html","9d8c039f12d0d8781514735e0daabcdb"],["/archives/2022/page/2/index.html","2e00259fc2ccc710209f87a4d716e619"],["/archives/index.html","1c7f5c0c5cd3298efb0519c38a1d3a17"],["/archives/page/2/index.html","af84c77ced6e1a2c9cbe68c1e917ed23"],["/archives/page/3/index.html","5728503b6dfc016b9eead0f4a1c30610"],["/archives/page/4/index.html","59f3fff103fb294d7c1ead0bdf914572"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Docker/index.html","72192c5c290c9753eb79b51089fbebe1"],["/categories/SonarQube/index.html","13d38a119464425bedd39d79361d633d"],["/categories/index.html","508f8f8e5b3bacef26984a3649042c6d"],["/categories/iptables/index.html","bbcf00d740c71f943d9365bacae2c694"],["/categories/jenkins/index.html","24b22b9cc0e85ca6d445f1758d8b0f7d"],["/categories/kubernetes/index.html","e7b4601d4c657a49944a6c3fb813503e"],["/categories/kubernetes/page/2/index.html","f4c12a2146ca5cbf2089589f1438ff8d"],["/categories/linux/index.html","0fe450e605be45056b56e88377bd2c5c"],["/categories/mysql/index.html","76d9448377b6da61412d012c2d05c8cc"],["/categories/prometheus/index.html","bfcae5812e0bdf1f2a33258f5b8540ac"],["/categories/svn/index.html","13e84cb2da5b4ffde76b879ee60acc15"],["/css/background.css","2942635f3e138bf3f0652299cf376c84"],["/css/custom.css","d8f1986b73cb77a533b567a4cb45437b"],["/css/index.css","5b1fe0f7d0e912ed2fcc08d0ee2c45e9"],["/css/lantern.css","c8483fed1ae9927bc6fad5817ee8d7bd"],["/css/rightMenu.css","036623ed00b65cd7a5b31dffe2a25c4e"],["/css/universe.css","52c685572ce95860fe8ddf20fb03df83"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/pasted-0.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-1.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-10.png","5d0d6d8aac46e34b30092f808950a9d3"],["/images/pasted-11.png","0784299af846da4168cad054741957f6"],["/images/pasted-12.png","e258ff6c3291821a2b9bbc6a25574624"],["/images/pasted-13.png","000a03ee30cefc56d0749078cf04a949"],["/images/pasted-14.png","8e547d601142697e448fbb4019bbb06a"],["/images/pasted-15.png","950cc9a62554680e2f0570b97e564259"],["/images/pasted-16.png","1707596a28a9b697891bc718c96175ee"],["/images/pasted-17.png","887da59e5df5c2af9d32fea3ffd5e3f7"],["/images/pasted-18.png","5f724508b49e8e7ba1305062ef8e150a"],["/images/pasted-19.png","a47092a023a70b2427014e75873bd6cd"],["/images/pasted-2.png","0a20960a3ee7446d34a8c4cc687b7adf"],["/images/pasted-3.png","7fc1a4e3fe8ab621dc0aa0ad4309f266"],["/images/pasted-4.png","d15fb5188609b444b3f6710ecf9b139c"],["/images/pasted-5.png","ad234216c2159391c25636525c314e41"],["/images/pasted-6.png","9600a48f0f98bce154df36c0a4dbbdc5"],["/images/pasted-7.png","b42122e7904f38ca3e9a32908f872f36"],["/images/pasted-8.png","f5b4699a2bd89e9027d889247b9a1283"],["/images/pasted-9.png","1537c8048729105cddb53dfa80ef72d6"],["/img/12.png","62ac1ef86217d9ac116fa3d22d78dd9b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","e26ff9d7f5db82408a3b9d320a46ed48"],["/img/beijing.jpg","b3e047edc071811e4a08b34ad186469f"],["/img/beijing2.jpg","e776268eac348d47d7795906363fbc3b"],["/img/beijing3.jpg","f6e51a65d428d03cfe72dd0500be888c"],["/img/beijing4.jpg","4665636b9db94a609da946695a718b1b"],["/img/beijinga.jpg","2961dbd4986aa673bc4e53240e5bac25"],["/img/centos.png","21108b558fea54f6e6acaa00a49be309"],["/img/desktop.jpg","13c1182799ca5447fd6493c209ae3512"],["/img/dongman.jpg","27894a3d2f116821649423e50a41d0a7"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/harbor.png","4b104adfa004775ce392037ccc140b62"],["/img/inotify.png","9ccfc735d97078fba061989fdd50fed1"],["/img/iptables.png","adbf0f41b1af8495c7f9330d88ae03af"],["/img/jenkins.png","38a775b0b873368c4efaa9bfb5760068"],["/img/jenkins1.png","dc3b8e8cb59e5864c4f7fe2dc13eab9f"],["/img/kubernetes.png","64a7709d18ce7f703f86108ab5fd844a"],["/img/mysql.jpg","0b91007118ea38da3474691047dd193f"],["/img/prometheus.jpg","d5cfe6539100dd3e7e5360602149d803"],["/img/sonarqube.png","965b7f7a941c46e10d3412fe294294dd"],["/img/svn.png","417b61fc1f0b02b68fc12a467bf6406c"],["/img/touxiang.png","b17d8c86cf0c70c30e7d7327dd5c7e4c"],["/img/wechat.jpg","2516cfa5ceda8f42ac6ba9efec9d88b3"],["/index.html","730c541dd07953c26612ff49bdb93b79"],["/js/chocolate.js","4826caaa586e99d8fee8c5afbb3e70c0"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/rightMenu.js","68db67f6c6ee6b8db0eb0ddd7e85d2ef"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","fafdd847299ee73d084aa36ced9bce97"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","bfb702660beb78cfdebdac62d220839f"],["/page/2/index.html","6c1b97f31d7283861edfbebdd39b11d5"],["/page/3/index.html","c69231c79c325567289ab54eb8e6248d"],["/page/4/index.html","5d2362a314473c302a3bd87feacee7d9"],["/sw-register.js","378c979345055192448b29fb382bb78e"],["/tags/SonarQube/index.html","1eb68db73b94e76f0ee340aa886f4215"],["/tags/centos/index.html","ae6fa2e57d4cd37ba1f1c2f2335e8ebe"],["/tags/docker/index.html","a6382316aed5841d9eb739726ef2d980"],["/tags/grafana/index.html","ad40834bdbdb6e28abc83943e9f88077"],["/tags/index.html","9b22d65629a774a1cb7fdc06b5610586"],["/tags/iptables/index.html","8fe483aa33b7bf9a2035a9cf186f53a5"],["/tags/jenkins/index.html","a4f999a785213edffb6cb3b1e380961e"],["/tags/kubernetes/index.html","7d50420bb7783154abb5d8dfe0ef7575"],["/tags/kubernetes/page/2/index.html","efcd5b54c435b32715b819b1f73e8c5b"],["/tags/linux/index.html","7d305a1258ad7ce5ba73538c7ede93e3"],["/tags/mysql/index.html","2da260458dbd29dcad191c5fc53d9207"],["/tags/prometheus/index.html","4dabf3f8f25baec6b225458ef4f04298"],["/tags/svn/index.html","8c77386322407b01073a9c611b580d31"],["/tags/云原生/index.html","a4668429ea2becde870bb46cf61b1dde"],["/tags/云原生/page/2/index.html","f5f8194907d2a161141401b806740067"],["/tags/阿里云/index.html","776c0270539b09b2d71deaa917540493"]];
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
