/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/06/MySQL读写分离架构（MHA+Atlas）/index.html","d5e2d783ffbf3947a19873eba7531ae9"],["/2019/03/08/MySQL分布式架构-MyCAT/index.html","a4f6da8233e73b30243147feef8a5ff0"],["/2019/03/14/MySQL物理备份工具使用（Percona Xtrabackup）PBK   XBK/index.html","e364da559cf1c364faa25953b10e62a4"],["/2019/03/19/MySQL 备份恢复（mysqldump）/index.html","c610e3b44cde3da18824b8325b5560e3"],["/2019/03/23/MySQL主从复制（Replication）/index.html","5c359acff6913096370fa5ee98b81a3c"],["/2019/03/24/MySQL MHA 高可用/index.html","e14f6abcf905dcd6abd7edc68f08b2f1"],["/2019/03/24/MySQL 优化/index.html","6079ce0eb8a5b173059a16bdcb622659"],["/2019/03/26/MySQL 日志管理/index.html","31be5ceb84dcefcd4f3bea5d495b7fa9"],["/2019/06/10/扩容根分区/index.html","836b684ca719727815c1466b70fb665d"],["/2019/09/23/SonarQube代码扫描/index.html","12b9177ad79f4b1c7c2ab6abbfa1f98d"],["/2019/10/10/centos7生成随机数/index.html","54dd2e83fe6feb334ed7743ebdba2e1c"],["/2020/05/13/iptables相关控制/index.html","c804f6c936e2fddd722bcca7377df2df"],["/2020/09/08/centos7搭建svn服务器/index.html","972b35b216cdb1562123d38728a6e7ba"],["/2020/10/15/ab命令压测/index.html","25f19d4b61a48d2e6ec9e13d14159dc2"],["/2021/08/24/rsync+inotify 实时备份/index.html","2139f7e59850757adf4611ed5f848666"],["/2022/05/04/部署harbor服务器（https_http）/index.html","eb596491d184234b30d6505b46d59140"],["/2022/06/20/kubeasz 二进制安装k8s高可用集群/index.html","0c344521884183b69f2cb43adf557e94"],["/2022/06/21/kubernetes安装coreDNS组件/index.html","82049f1127896e469c1c3fb485760e93"],["/2022/06/23/kubernetes-ETCD/index.html","273e584d7f149829f73a10179ca1468c"],["/2022/06/24/kubeasz -etcd v3 API版本数据备份与恢复/index.html","f6ae6e25a279848844550cc625727932"],["/2022/07/01/Deployment副本控制器/index.html","a51dc281b545bf75d45d91d07758291b"],["/2022/07/01/RC RS副本控制器/index.html","96b700db8997af300b16aaecc1db7c16"],["/2022/07/02/Configmap/index.html","8c7d5603def260b5ce2cfda0e1d587ca"],["/2022/07/02/PV PVC/index.html","c88b144e6c2e77a4257bffd341e5ea77"],["/2022/07/03/Service控制器/index.html","c642d8814409e8038581885b3b1d0a30"],["/2022/07/03/Volume存储卷/index.html","55634d7cc63cb640c9c1127bc68ca6db"],["/2022/07/03/secret/index.html","20957eefc7c7d0b909548568c8523b56"],["/2022/07/04/k8s-job cronjob/index.html","63c19509da0ca512a2fed45fe70979c7"],["/2022/07/05/kubernetes HPA使用及测试/index.html","0804910a39a928a5202ff6ab1ab3ed52"],["/2022/08/02/使用阿里云oss静态页面部署服务/index.html","ef537ec50a2d2a2200627bc0ef8fc009"],["/2022/08/04/基于centos7的Openssh版本升级/index.html","0a2e6c4bbf735eb9699236d8f9d549a6"],["/2022/08/16/Jenkins用户权限控制插件——Role-based Authorization Strategy/index.html","8467b98357db3899f481d21239ca3eac"],["/archives/2019/03/index.html","ddeba64006f9a009c0669021384d527c"],["/archives/2019/06/index.html","a3c357f81988733d4747629e2726fdd2"],["/archives/2019/09/index.html","d36eda4ca9bb332848697817ab215008"],["/archives/2019/10/index.html","a83ce956abf4cf972e4012dcf3e5010d"],["/archives/2019/index.html","9385d31f6242205a359bbab22dcf1688"],["/archives/2019/page/2/index.html","a220e4b70fad789d4644f1d05757eac3"],["/archives/2020/05/index.html","4b325f17445f50caef8d5195b7e07010"],["/archives/2020/09/index.html","a05abdeec5bc436e15c3d191cb67f5e0"],["/archives/2020/10/index.html","be21535ee4735dedeec941543cada31f"],["/archives/2020/index.html","865e3f02e2c613071385dc2f26fac8b6"],["/archives/2021/08/index.html","4680b302e4241fd4ee2fea101815a2bf"],["/archives/2021/index.html","5ca392c8a53559fa7786b2516a6cb858"],["/archives/2022/05/index.html","463fae124a5939bd344dfb0d53202210"],["/archives/2022/06/index.html","fb33e29f70dfcd638e5d49ac9c5298f5"],["/archives/2022/07/index.html","08b3f7623a647247662cd1593a862c97"],["/archives/2022/08/index.html","25ce7030953f963d5221172f7968de5b"],["/archives/2022/index.html","b805f6df09bc62a53113da1540ac251d"],["/archives/2022/page/2/index.html","4c6e7a84b9efbd64265c0e8f215e68ab"],["/archives/index.html","669477545829642883f1acf607279d7c"],["/archives/page/2/index.html","a74ef58dbe371194fa2d4679d2f32feb"],["/archives/page/3/index.html","053f71be4e6bb7b05bc41697187ce677"],["/archives/page/4/index.html","37da4160694d4b9feb0138d167af6106"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Docker/index.html","c382e63162ca61a5800ee66af4697369"],["/categories/SonarQube/index.html","4dc032da822f602788c00bf97597f249"],["/categories/index.html","99dcf0bde3ef859aeec367064e22698c"],["/categories/iptables/index.html","48661c31f1d73df50156082a19c60955"],["/categories/jenkins/index.html","d7713bd5d7004e8d96a51994c6756dd9"],["/categories/kubernetes/index.html","ed5c1c6a0fa61b9c82e834ad1a847ac6"],["/categories/kubernetes/page/2/index.html","f6f59a1e020cc5fa5bb7a8377f917a50"],["/categories/linux/index.html","06b7d398c345bbd835c2735c0dffbad4"],["/categories/mysql/index.html","a2304d3a02581e645ae456b548071d18"],["/categories/svn/index.html","8a04b7612ba26a7aeea170b54037ae1e"],["/css/background.css","2942635f3e138bf3f0652299cf376c84"],["/css/custom.css","d8f1986b73cb77a533b567a4cb45437b"],["/css/index.css","5b1fe0f7d0e912ed2fcc08d0ee2c45e9"],["/css/lantern.css","c8483fed1ae9927bc6fad5817ee8d7bd"],["/css/rightMenu.css","036623ed00b65cd7a5b31dffe2a25c4e"],["/css/universe.css","52c685572ce95860fe8ddf20fb03df83"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/pasted-0.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-1.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-10.png","5d0d6d8aac46e34b30092f808950a9d3"],["/images/pasted-11.png","0784299af846da4168cad054741957f6"],["/images/pasted-12.png","e258ff6c3291821a2b9bbc6a25574624"],["/images/pasted-13.png","000a03ee30cefc56d0749078cf04a949"],["/images/pasted-14.png","8e547d601142697e448fbb4019bbb06a"],["/images/pasted-15.png","950cc9a62554680e2f0570b97e564259"],["/images/pasted-16.png","1707596a28a9b697891bc718c96175ee"],["/images/pasted-17.png","887da59e5df5c2af9d32fea3ffd5e3f7"],["/images/pasted-18.png","5f724508b49e8e7ba1305062ef8e150a"],["/images/pasted-19.png","a47092a023a70b2427014e75873bd6cd"],["/images/pasted-2.png","0a20960a3ee7446d34a8c4cc687b7adf"],["/images/pasted-3.png","7fc1a4e3fe8ab621dc0aa0ad4309f266"],["/images/pasted-4.png","d15fb5188609b444b3f6710ecf9b139c"],["/images/pasted-5.png","ad234216c2159391c25636525c314e41"],["/images/pasted-6.png","9600a48f0f98bce154df36c0a4dbbdc5"],["/images/pasted-7.png","b42122e7904f38ca3e9a32908f872f36"],["/images/pasted-8.png","f5b4699a2bd89e9027d889247b9a1283"],["/images/pasted-9.png","1537c8048729105cddb53dfa80ef72d6"],["/img/12.png","62ac1ef86217d9ac116fa3d22d78dd9b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","e26ff9d7f5db82408a3b9d320a46ed48"],["/img/beijing.jpg","b3e047edc071811e4a08b34ad186469f"],["/img/beijing2.jpg","e776268eac348d47d7795906363fbc3b"],["/img/beijing3.jpg","f6e51a65d428d03cfe72dd0500be888c"],["/img/beijing4.jpg","4665636b9db94a609da946695a718b1b"],["/img/beijinga.jpg","2961dbd4986aa673bc4e53240e5bac25"],["/img/centos.png","21108b558fea54f6e6acaa00a49be309"],["/img/desktop.jpg","13c1182799ca5447fd6493c209ae3512"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/harbor.png","4b104adfa004775ce392037ccc140b62"],["/img/inotify.png","9ccfc735d97078fba061989fdd50fed1"],["/img/iptables.png","adbf0f41b1af8495c7f9330d88ae03af"],["/img/jenkins.png","38a775b0b873368c4efaa9bfb5760068"],["/img/jenkins1.png","dc3b8e8cb59e5864c4f7fe2dc13eab9f"],["/img/kubernetes.png","64a7709d18ce7f703f86108ab5fd844a"],["/img/mysql.jpg","0b91007118ea38da3474691047dd193f"],["/img/sonarqube.png","965b7f7a941c46e10d3412fe294294dd"],["/img/svn.png","417b61fc1f0b02b68fc12a467bf6406c"],["/img/touxiang.png","b17d8c86cf0c70c30e7d7327dd5c7e4c"],["/img/wechat.jpg","2516cfa5ceda8f42ac6ba9efec9d88b3"],["/index.html","8283a399e5e91ef3ab3422cce791c3e0"],["/js/chocolate.js","4826caaa586e99d8fee8c5afbb3e70c0"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/rightMenu.js","68db67f6c6ee6b8db0eb0ddd7e85d2ef"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","fafdd847299ee73d084aa36ced9bce97"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/music/index.html","9a81a5652d75448818f6e95e01367d57"],["/page/2/index.html","cb715e3c2dc45a6f79eaf30be63fd73b"],["/page/3/index.html","8674f7dd59a0990b41b464e0149c8589"],["/page/4/index.html","b50840f9a812ae1d160b1b825e0fbe25"],["/sw-register.js","8985563b2ee564f5967cb5f9f9bb5741"],["/tags/SonarQube/index.html","371d7548ca00216fd8b309b93f5c6c0d"],["/tags/centos/index.html","c5a0409d398287e9bc4b911c7311fc74"],["/tags/docker/index.html","8afdc661480a5b66bd55b1077781351f"],["/tags/index.html","17f5decdf8113508539057e3f2e48b8b"],["/tags/iptables/index.html","88e42bad1419b08c5c3ba9c70d8d7701"],["/tags/jenkins/index.html","8148c185a0fb5f3c48cc6ae0666e1cc1"],["/tags/kubernetes/index.html","6252881266feb8ec75f1caaafbf7bf1d"],["/tags/kubernetes/page/2/index.html","4ac7570e6a495f29f9fd94e3d7648d4b"],["/tags/linux/index.html","b17d075ab682a4547ea85414f0d627b5"],["/tags/mysql/index.html","96e07d16144bde454b57d3f28c7ee1db"],["/tags/svn/index.html","cecda98eb2a0ad44d1347fdfe51542ff"],["/tags/云原生/index.html","0e231da14f7667490386586dda607a9d"],["/tags/云原生/page/2/index.html","689a48a0281f65521c045d05f5a87246"],["/tags/阿里云/index.html","9fcdc482b809d9dd3d40aed0da7d0f9f"]];
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
