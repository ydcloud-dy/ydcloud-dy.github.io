/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/06/MySQL读写分离架构（MHA+Atlas）/index.html","09a0b86c19ea5999812ceb138e2ee1d7"],["/2019/03/08/MySQL分布式架构-MyCAT/index.html","d404a667a8819bed31f7a15c411d8fdf"],["/2019/03/14/MySQL物理备份工具使用（Percona Xtrabackup）PBK   XBK/index.html","e088356068fe197ef289e8d9cbf46382"],["/2019/03/19/MySQL 备份恢复（mysqldump）/index.html","cdf5a353a223c16a54e84773764bd2a5"],["/2019/03/23/MySQL主从复制（Replication）/index.html","769cbf5c6c751a44321bb0d3b58d9c75"],["/2019/03/24/MySQL MHA 高可用/index.html","00f586d5b9950b52669d89e32e565a1b"],["/2019/03/24/MySQL 优化/index.html","762b7ffee94a6c65f06b10cd89a94a5f"],["/2019/03/26/MySQL 日志管理/index.html","bc38e75cbe192faae86d7ae934d4be82"],["/2019/06/10/扩容根分区/index.html","30f7b64f1df74302df08c77446d6985e"],["/2019/09/23/SonarQube代码扫描/index.html","fa27ba9159fa6c8ee539db403e72caf5"],["/2019/10/10/centos7生成随机数/index.html","4081f9a4f3c16da638b7d592559f5053"],["/2020/02/14/promehteus+grafana/index.html","7ec06169c624b7cec12b823357e78da3"],["/2020/05/02/pipeline分布式构建和pipline基础语法/index.html","2244e871913961d66a4ae973494dcc63"],["/2020/05/13/iptables相关控制/index.html","66c5507745cac8ba53d5d552a61d7632"],["/2020/09/08/centos7搭建svn服务器/index.html","f64399eb4a70d4a7a34e714c2fd6f53e"],["/2020/10/15/ab命令压测/index.html","c7e5db862ffa9fe9c29c0a87adba618e"],["/2021/08/24/rsync+inotify 实时备份/index.html","035eb5b99d1abb41f91edd87322226ee"],["/2022/05/04/部署harbor服务器（https_http）/index.html","f64c47d18fe1acfd7b2cac1c4fa24430"],["/2022/06/20/kubeasz 二进制安装k8s高可用集群/index.html","ea2db03201026eb8a43e8a5e7f86b4ff"],["/2022/06/21/kubernetes安装coreDNS组件/index.html","679b5c14a93ca02a56bbb6d446115cc1"],["/2022/06/23/kubernetes-ETCD/index.html","89207d3121e71b1d2e878276eb344539"],["/2022/06/24/kubeasz -etcd v3 API版本数据备份与恢复/index.html","7bd67f3ef05493dcdadd80b7bc24cf04"],["/2022/07/01/Deployment副本控制器/index.html","1a58204c2e55ea7d139197325d54b35d"],["/2022/07/01/RC RS副本控制器/index.html","ebb51ae10e1646d57a1ed7c49a834428"],["/2022/07/02/Configmap/index.html","96c499bccbc0d1bb439b427f5281ad14"],["/2022/07/02/PV PVC/index.html","74224ae49b4e17f0c041b014a36b1d13"],["/2022/07/03/Service控制器/index.html","4f5a0743d4b32363aeb78e85df62289e"],["/2022/07/03/Volume存储卷/index.html","7990d509d183f38ce1d56c889e85a1a1"],["/2022/07/03/secret/index.html","843e53472fdffc10eed4423cbf4ec6de"],["/2022/07/04/k8s-job cronjob/index.html","bce5017b1ad21614e6efe0604de5aaf4"],["/2022/07/05/kubernetes HPA使用及测试/index.html","a47ebee6f26b543b1e8d639f0a2bdfbb"],["/2022/08/02/使用阿里云oss静态页面部署服务/index.html","ef6da2ccfac05319475d46599090f400"],["/2022/08/04/基于centos7的Openssh版本升级/index.html","1e5fd9e648ce907d20da1aec51d80191"],["/2022/08/16/Jenkins用户权限控制插件——Role-based Authorization Strategy/index.html","e7bf27fb96dfd374478944e458c7a4f0"],["/404.html","6bd58c96eed545cf1231034a02b155fe"],["/archives/2019/03/index.html","5adffcf7abb8c07975cf169e9912ae0f"],["/archives/2019/06/index.html","d9e192a23c90edc1e3174422275a3b40"],["/archives/2019/09/index.html","dbfa277a4b2dd554d5183637803ee4b8"],["/archives/2019/10/index.html","28baee16fec19de2a2a6f9921ecc4f8c"],["/archives/2019/index.html","d98a734f6f2bc64e521ce17763650ece"],["/archives/2019/page/2/index.html","f735f44a37c4f813058cfe70667cdfc6"],["/archives/2020/02/index.html","73133b9fd4eff10e1085333529b44618"],["/archives/2020/05/index.html","b5acb8da1ddc89d9e5c90b98a4efb7af"],["/archives/2020/09/index.html","0641ee149ff4168b4e4ce30d49982905"],["/archives/2020/10/index.html","4481b85d67d7ee7d83082714efa7498f"],["/archives/2020/index.html","52332ec675be8826ca5301facd181b6d"],["/archives/2021/08/index.html","f0a9c00fde8d027113b041aca5679c95"],["/archives/2021/index.html","f5752244b180ff37a7b6a7b195d5787c"],["/archives/2022/05/index.html","8ec36188148f7b11af0ef442caabecd0"],["/archives/2022/06/index.html","23f12a5152121792e8f87c0d30a4e207"],["/archives/2022/07/index.html","8ce967345736863240b2705d78f997d0"],["/archives/2022/08/index.html","155ec3815eef3fca2da2e5598e110523"],["/archives/2022/index.html","a106d277ab95f0c5601a0d844f025623"],["/archives/2022/page/2/index.html","1039580e685040d17cb7cfa979ba205c"],["/archives/index.html","c32ef6a144697740d961316f2a8e422d"],["/archives/page/2/index.html","7aae6e261f7ca8b3019a8c54a0c02adf"],["/archives/page/3/index.html","7140a2bff4e7e739c19ee447092cf0f3"],["/archives/page/4/index.html","a185328328096c14a0ef3bb7c7d76bfb"],["/categories/Docker/index.html","1d5e6f4a6d325b1484b46e20decd10f0"],["/categories/SonarQube/index.html","c532fd50a6d5fe09dcd4abb6eb6606a4"],["/categories/index.html","e207d04f9deb8e6c8be1a528daf26b82"],["/categories/iptables/index.html","89ca45ed268a32281f922471e7b9bca7"],["/categories/jenkins/index.html","cdee42aa3552f7ea8a90d6af33ca3f4e"],["/categories/kubernetes/index.html","ed3a6e914cccff0f7752d271178afc66"],["/categories/kubernetes/page/2/index.html","3cb27f7e3a5a9c9399413de175cfa963"],["/categories/linux/index.html","32feb02b751e73fefd4c540601daec1e"],["/categories/mysql/index.html","22ce45d8e6e176d4e91f286d27f3e1a5"],["/categories/prometheus/index.html","b9039d19e2ec1a008e2bd408f7ea9935"],["/categories/svn/index.html","a88481ffcb48ccb5152d0ab789e9d82a"],["/css/background.css","2942635f3e138bf3f0652299cf376c84"],["/css/custom.css","d8f1986b73cb77a533b567a4cb45437b"],["/css/index.css","d260c62dab02c343c586afb634d6004a"],["/css/lantern.css","c8483fed1ae9927bc6fad5817ee8d7bd"],["/css/rightMenu.css","036623ed00b65cd7a5b31dffe2a25c4e"],["/css/universe.css","52c685572ce95860fe8ddf20fb03df83"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/pasted-0.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-1.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-10.png","5d0d6d8aac46e34b30092f808950a9d3"],["/images/pasted-11.png","0784299af846da4168cad054741957f6"],["/images/pasted-12.png","e258ff6c3291821a2b9bbc6a25574624"],["/images/pasted-13.png","000a03ee30cefc56d0749078cf04a949"],["/images/pasted-14.png","8e547d601142697e448fbb4019bbb06a"],["/images/pasted-15.png","950cc9a62554680e2f0570b97e564259"],["/images/pasted-16.png","1707596a28a9b697891bc718c96175ee"],["/images/pasted-17.png","887da59e5df5c2af9d32fea3ffd5e3f7"],["/images/pasted-18.png","5f724508b49e8e7ba1305062ef8e150a"],["/images/pasted-19.png","a47092a023a70b2427014e75873bd6cd"],["/images/pasted-2.png","0a20960a3ee7446d34a8c4cc687b7adf"],["/images/pasted-3.png","7fc1a4e3fe8ab621dc0aa0ad4309f266"],["/images/pasted-4.png","d15fb5188609b444b3f6710ecf9b139c"],["/images/pasted-5.png","ad234216c2159391c25636525c314e41"],["/images/pasted-6.png","9600a48f0f98bce154df36c0a4dbbdc5"],["/images/pasted-7.png","b42122e7904f38ca3e9a32908f872f36"],["/images/pasted-8.png","f5b4699a2bd89e9027d889247b9a1283"],["/images/pasted-9.png","1537c8048729105cddb53dfa80ef72d6"],["/img/12.png","62ac1ef86217d9ac116fa3d22d78dd9b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","e26ff9d7f5db82408a3b9d320a46ed48"],["/img/centos.png","8c9381c65647670beea0443be09905d8"],["/img/desktop.jpg","13c1182799ca5447fd6493c209ae3512"],["/img/dongman.jpg","27894a3d2f116821649423e50a41d0a7"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/harbor.png","4b104adfa004775ce392037ccc140b62"],["/img/harbor2.png","7545fc3e108b3d60cf61ee2010d6e841"],["/img/inotify.png","9ccfc735d97078fba061989fdd50fed1"],["/img/iptables.png","20f88af231b35ba15839a4cc779e2222"],["/img/jenkins.png","5401eb529f0b795e0e549182e516072f"],["/img/jenkins1.png","dc3b8e8cb59e5864c4f7fe2dc13eab9f"],["/img/kubernetes.png","3428de86fd4ecb4eca7e4f3d539c59e2"],["/img/mysql.jpg","331b83381bdb0c15668bfdcd266b1034"],["/img/prometheus.png","7ab7b7c19a98e723a5f2646669a01311"],["/img/sonarqube.png","5216669e0fbcc6c387dbf29a5321bfe0"],["/img/svn.png","895bfaeb2797f9635f660b5ee00946eb"],["/img/touxiang.png","b17d8c86cf0c70c30e7d7327dd5c7e4c"],["/img/wechat.jpg","2516cfa5ceda8f42ac6ba9efec9d88b3"],["/index.html","c46eb4f15fea0085b78d3afaff90463b"],["/js/chocolate.js","4826caaa586e99d8fee8c5afbb3e70c0"],["/js/custom.js","529d0eeff76b63203edf3305bfc831bc"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/rightMenu.js","68db67f6c6ee6b8db0eb0ddd7e85d2ef"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","fafdd847299ee73d084aa36ced9bce97"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/live2dw/assets/moc/tororo.2048/texture_00.png","9bd791736cfc91b62670dee5f7fbd45c"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","756c60191031373ed3dc2f59ed646fe6"],["/page/2/index.html","a28959874f5f6e22ccc0bb3cdf3e458c"],["/page/3/index.html","0432dc63f0bd25b5548215189cb04613"],["/page/4/index.html","1ee6532c07517a4d76ed06834d359571"],["/sw-register.js","e2b83e8154d2fd75c4a45accfcb11bb3"],["/tags/SonarQube/index.html","7f61a9a710d1c767b0475f93c049f2e2"],["/tags/centos/index.html","bd4e484fbec3949f4b0c99feb529b796"],["/tags/docker/index.html","ca5c21ebc0c9ba2fe28dcfd70cb2c0bc"],["/tags/grafana/index.html","3b2b886ac4f24e5bc4f6cd07c4796716"],["/tags/index.html","9362d55620c294d84ded7478f4fd5c35"],["/tags/iptables/index.html","6015dfa7c003663f3132753ce589da04"],["/tags/jenkins/index.html","756eadf1023c8a5c010cf05843a4225d"],["/tags/kubernetes/index.html","81393d1c5746b1dbbfad1cad6db50b70"],["/tags/kubernetes/page/2/index.html","ebe284725ca36e6e2e0040bc9ff1159e"],["/tags/linux/index.html","5e2c77600a851a3fab4e5f389418d55b"],["/tags/mysql/index.html","876cb7a3219858a4eb43af602c8955ec"],["/tags/prometheus/index.html","09024a8dc6212277fdbd89a1b104d8aa"],["/tags/svn/index.html","54ccef6f7a4e17fba0e037cf73a175df"],["/tags/云原生/index.html","f15d8acfad547188e03e7ffcaac020e5"],["/tags/云原生/page/2/index.html","de1f0c185577673297430538ab80dbef"],["/tags/阿里云/index.html","831012ca6dc659cc9203097b0fe64b24"]];
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
