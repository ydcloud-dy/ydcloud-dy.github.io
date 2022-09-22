/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/06/MySQL读写分离架构（MHA+Atlas）/index.html","639de90734302d100fd84f4720f05da9"],["/2019/03/08/MySQL分布式架构-MyCAT/index.html","f79eac6913e61c3451ae60fce46d5717"],["/2019/03/14/MySQL物理备份工具使用（Percona Xtrabackup）PBK   XBK/index.html","577e227fc3ab7bf6b91bb392fc18edea"],["/2019/03/19/MySQL 备份恢复（mysqldump）/index.html","c7250cb3204907334eae0eb3d1fd877b"],["/2019/03/23/MySQL主从复制（Replication）/index.html","a0ba474df9ab636d5785222da1b9fdba"],["/2019/03/24/MySQL MHA 高可用/index.html","2b70ac5d1a2554de9d134fcd63a9af9c"],["/2019/03/24/MySQL 优化/index.html","459f1824b42c9f97bb686c49d863aff3"],["/2019/03/26/MySQL 日志管理/index.html","4beab8d6ae6eb617bc51f7057f3004a1"],["/2019/06/10/扩容根分区/index.html","4d651cfd2d4fbb7a43063b293ff498f7"],["/2019/09/23/SonarQube代码扫描/index.html","69a7d1a9c9945b3487c8174594de7856"],["/2019/10/10/centos7生成随机数/index.html","a208c95720dc243cf3102eedd80e79a4"],["/2020/02/14/promehteus+grafana/index.html","c6c8069dafc2d82c50111a1ebcf415b0"],["/2020/05/02/pipeline分布式构建和pipline基础语法/index.html","1f15e7bdb0236d844067b2b481b4f318"],["/2020/05/13/iptables相关控制/index.html","75adcce227ecc02c450396f2967a7a6f"],["/2020/09/08/centos7搭建svn服务器/index.html","664e1aa249a9a1ea2a99a880cef9cfe9"],["/2020/10/15/ab命令压测/index.html","1c749d2416d141f52e72e2fa00771b01"],["/2021/03/06/服务器硬件压力测试/index.html","54f86ea4dbb09f1b80bad78e422da0a6"],["/2021/08/24/rsync+inotify 实时备份/index.html","d2adcd25f8760e99120121827820ffbc"],["/2022/05/04/部署harbor服务器（https_http）/index.html","4d6869eaf075827b588f3d64060f3fc7"],["/2022/06/20/kubeasz 二进制安装k8s高可用集群/index.html","54f4b221f0b8f2baaadbef81ce1605cb"],["/2022/06/21/kubernetes安装coreDNS组件/index.html","ad1367d468d959b3152fb8f3c437d57b"],["/2022/06/23/kubernetes-ETCD/index.html","a3db8ed587ab5befa24a8f975903a179"],["/2022/06/24/kubeasz -etcd v3 API版本数据备份与恢复/index.html","181dabb71b9dd30106a285ccc7f0f9ec"],["/2022/07/01/Deployment副本控制器/index.html","bcc1f3840e5a619220ce2e5c1cb0485d"],["/2022/07/01/RC RS副本控制器/index.html","08dfeb03c3bb6ba3dae577edbc370e66"],["/2022/07/02/Configmap/index.html","827e721686d7110cf652d2e426317025"],["/2022/07/02/PV PVC/index.html","438be34ffd04f394b63bbc1db21f86a7"],["/2022/07/03/Service控制器/index.html","5c29104764e4da2c42b7f7997d7f4ba7"],["/2022/07/03/Volume存储卷/index.html","33f1d543f2655017195685e230ee91a7"],["/2022/07/03/secret/index.html","0bbfb0cf61e382514797cc22dbdb3436"],["/2022/07/04/k8s-job cronjob/index.html","0b294defa97a5dcd2d8c180a0e9e3f57"],["/2022/07/05/kubernetes HPA使用及测试/index.html","c2cd5bc408d39537b03cb0f0994dd44c"],["/2022/08/02/使用阿里云oss静态页面部署服务/index.html","79ed4f982c9dbf850478b16870a068a2"],["/2022/08/04/基于centos7的Openssh版本升级/index.html","5afbb4c16e63afca1f217031307a9911"],["/2022/08/13/防止内存碎片化/index.html","16ffedc87d255f33e2b942a0edddcb74"],["/2022/08/15/Pod异常状态排错/index.html","998f83d749cbf4f9777ead7accd7b216"],["/2022/08/16/Jenkins用户权限控制插件——Role-based Authorization Strategy/index.html","a30d5c39524b8889961856a5524b722b"],["/2022/08/19/kubernetes磁盘爆满故障处理/index.html","ec6633b042c26b4b5c4c0310bc4037a3"],["/2022/08/23/分析 ExitCode 定位 Pod 异常退出原因 /index.html","f013352f4fbff596586a7f36f7426759"],["/2022/08/23/容器进程主动退出原因/index.html","aef1339fe9c6e0ea318adaf2a50d412d"],["/404.html","6ef62d89417c7eca935d1e8a887f7789"],["/archives/2019/03/index.html","8474ffbed83fb95106d23a41e4f42423"],["/archives/2019/06/index.html","440d4d463b2065565b1ff5428d7dc7c8"],["/archives/2019/09/index.html","b4a2337a24cba461fda1f14c815e7091"],["/archives/2019/10/index.html","97409ae350117a83434a1a6c2c2c1026"],["/archives/2019/index.html","1f1a64e358e347af96b01386eaf56dc2"],["/archives/2019/page/2/index.html","59fe9b5b3221de308deaa1401c4e400d"],["/archives/2020/02/index.html","50fb8b926003ac7bcb4cc37f937f3e37"],["/archives/2020/05/index.html","92e296de245b2b1fab4d72dd7aded41c"],["/archives/2020/09/index.html","3e1fe163632161ef85cac46374e24ad4"],["/archives/2020/10/index.html","51c28ddab1896882299d75fe5155789c"],["/archives/2020/index.html","224dd8198fb63fc3fe845b33b0a11051"],["/archives/2021/03/index.html","516b03c8f6abed33c48948e2777e7585"],["/archives/2021/08/index.html","0c4ca22796fdf28eed344f4170a2945c"],["/archives/2021/index.html","e485b87b79b5522d26b42e548f06a2b5"],["/archives/2022/05/index.html","f3810a8f80cb46106b45534e602938ee"],["/archives/2022/06/index.html","eb4235bcf5ecc775d98c002a8dde1ff0"],["/archives/2022/07/index.html","252e4a13e925c7d2deca1300bbc6e362"],["/archives/2022/08/index.html","bea5317395228f3303421f94b25fc0f5"],["/archives/2022/index.html","9f9435ae1c2493ee118f5fd626c3e82c"],["/archives/2022/page/2/index.html","eae765616a13d35bd2208b4aad653d1c"],["/archives/2022/page/3/index.html","3d1b8453a026bede6d3554430b3f4d9c"],["/archives/index.html","c397a37c659e785a123b4c22a873f3e9"],["/archives/page/2/index.html","024955c17789a0195004d9d0694f7ac7"],["/archives/page/3/index.html","5f66735917a912349be5cbd86891c6e8"],["/archives/page/4/index.html","df826933414460ed69a43643bf06fe05"],["/categories/Docker/index.html","02e4dd3c3a3a51c43020b0c01d859978"],["/categories/SonarQube/index.html","82a4472fff3b770faa2c79c73b175b30"],["/categories/index.html","28b5cdf6927917ec3e12bfee3528042f"],["/categories/iptables/index.html","144ab23f83b5f234dc4e4e323ae5d890"],["/categories/jenkins/index.html","da5950fc65065620774a73f36df82be7"],["/categories/kubernetes/index.html","4911d851dde04fb4edf3c1f2a091cf8c"],["/categories/kubernetes/page/2/index.html","75150ccf547c2082f6add4ccf5fd9a8b"],["/categories/linux/index.html","57f280fd855404dc8e8fe1fca6a951a8"],["/categories/mysql/index.html","bb7a2dbac68bd7847ffd93c2228980a9"],["/categories/prometheus/index.html","c283e7e35186d9482c2483b9b0b1162e"],["/categories/svn/index.html","db658763eae46ed3d5caefbefe325a85"],["/css/background.css","2942635f3e138bf3f0652299cf376c84"],["/css/custom.css","d8f1986b73cb77a533b567a4cb45437b"],["/css/index.css","d260c62dab02c343c586afb634d6004a"],["/css/lantern.css","c8483fed1ae9927bc6fad5817ee8d7bd"],["/css/rightMenu.css","036623ed00b65cd7a5b31dffe2a25c4e"],["/css/universe.css","52c685572ce95860fe8ddf20fb03df83"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/pasted-0.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-1.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-10.png","5d0d6d8aac46e34b30092f808950a9d3"],["/images/pasted-11.png","0784299af846da4168cad054741957f6"],["/images/pasted-12.png","e258ff6c3291821a2b9bbc6a25574624"],["/images/pasted-13.png","000a03ee30cefc56d0749078cf04a949"],["/images/pasted-14.png","8e547d601142697e448fbb4019bbb06a"],["/images/pasted-15.png","950cc9a62554680e2f0570b97e564259"],["/images/pasted-16.png","1707596a28a9b697891bc718c96175ee"],["/images/pasted-17.png","887da59e5df5c2af9d32fea3ffd5e3f7"],["/images/pasted-18.png","5f724508b49e8e7ba1305062ef8e150a"],["/images/pasted-19.png","a47092a023a70b2427014e75873bd6cd"],["/images/pasted-2.png","0a20960a3ee7446d34a8c4cc687b7adf"],["/images/pasted-3.png","7fc1a4e3fe8ab621dc0aa0ad4309f266"],["/images/pasted-4.png","d15fb5188609b444b3f6710ecf9b139c"],["/images/pasted-5.png","ad234216c2159391c25636525c314e41"],["/images/pasted-6.png","9600a48f0f98bce154df36c0a4dbbdc5"],["/images/pasted-7.png","b42122e7904f38ca3e9a32908f872f36"],["/images/pasted-8.png","f5b4699a2bd89e9027d889247b9a1283"],["/images/pasted-9.png","1537c8048729105cddb53dfa80ef72d6"],["/img/12.png","62ac1ef86217d9ac116fa3d22d78dd9b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","e26ff9d7f5db82408a3b9d320a46ed48"],["/img/centos.png","8c9381c65647670beea0443be09905d8"],["/img/desktop.jpg","13c1182799ca5447fd6493c209ae3512"],["/img/dongman.jpg","27894a3d2f116821649423e50a41d0a7"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/harbor.png","4b104adfa004775ce392037ccc140b62"],["/img/harbor2.png","7545fc3e108b3d60cf61ee2010d6e841"],["/img/inotify.png","9ccfc735d97078fba061989fdd50fed1"],["/img/iptables.png","20f88af231b35ba15839a4cc779e2222"],["/img/jenkins.png","5401eb529f0b795e0e549182e516072f"],["/img/jenkins1.png","dc3b8e8cb59e5864c4f7fe2dc13eab9f"],["/img/kubernetes.png","3428de86fd4ecb4eca7e4f3d539c59e2"],["/img/mysql.jpg","331b83381bdb0c15668bfdcd266b1034"],["/img/prometheus.png","7ab7b7c19a98e723a5f2646669a01311"],["/img/sonarqube.png","5216669e0fbcc6c387dbf29a5321bfe0"],["/img/svn.png","895bfaeb2797f9635f660b5ee00946eb"],["/img/touxiang.png","b17d8c86cf0c70c30e7d7327dd5c7e4c"],["/img/wechat.jpg","2516cfa5ceda8f42ac6ba9efec9d88b3"],["/index.html","ad7e06a34cdfefd5b1fb7cb4ac5ddca4"],["/js/chocolate.js","4826caaa586e99d8fee8c5afbb3e70c0"],["/js/custom.js","529d0eeff76b63203edf3305bfc831bc"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/rightMenu.js","68db67f6c6ee6b8db0eb0ddd7e85d2ef"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","fafdd847299ee73d084aa36ced9bce97"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/live2dw/assets/moc/tororo.2048/texture_00.png","9bd791736cfc91b62670dee5f7fbd45c"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","d739e7ed2e7a72faa7b0b83668954566"],["/page/2/index.html","b55e9ba9aa53d96b1e2b89d87c99d10a"],["/page/3/index.html","b5287ddd6bd7ce21eb25b22ff572368e"],["/page/4/index.html","2730a88a2d48968bf3f42f167e9b320c"],["/sw-register.js","7a9b39781c09c2adb77f0d77a241e010"],["/tags/SonarQube/index.html","fce3e00eb20caa7ebe323322fbd4bff6"],["/tags/centos/index.html","4220706d37df1a0de7f19a793a66a20a"],["/tags/docker/index.html","3520207f3495a8e9f8787499e7bffde1"],["/tags/grafana/index.html","8a8d40c479339258cd50c45393dab4f4"],["/tags/index.html","307f2fde7875e7d75b62922c5fe8a63a"],["/tags/iptables/index.html","54355fb8f4cc3a22366f2867da814a0f"],["/tags/jenkins/index.html","65ce18888267905f42f6c4bd4441dfb0"],["/tags/kubernetes/index.html","bdda432eb101caeb5885016e4c8212cc"],["/tags/kubernetes/page/2/index.html","f2ae78ab821163eef218c01b0fee148c"],["/tags/linux/index.html","13536f6817948c296e28944fe0b23108"],["/tags/mysql/index.html","ad014c7616477c7e3e32827ebc13d33a"],["/tags/prometheus/index.html","011345fdab45cd8de2de8a6cf5689d0a"],["/tags/svn/index.html","eab0b06b3f0e3174ccf23854b0c31cd3"],["/tags/云原生/index.html","462a7527cf744cdae29200ce180a9ef5"],["/tags/云原生/page/2/index.html","e000f9d3c978d1e0d9335c17c36b8e78"],["/tags/阿里云/index.html","fda5b5e42e2f2b9128961aedc2e9fa3c"]];
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
