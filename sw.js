/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/06/MySQL读写分离架构（MHA+Atlas）/index.html","e93e5743f87cd0cf2d3ac11f390717ef"],["/2019/03/08/MySQL分布式架构-MyCAT/index.html","4b5eec4789719bc5dcdbe2fcb794c1f0"],["/2019/03/14/MySQL物理备份工具使用（Percona Xtrabackup）PBK   XBK/index.html","9addc9f383f2128fffe464bf7ec91354"],["/2019/03/19/MySQL 备份恢复（mysqldump）/index.html","6ab0897ffad97297239e13d731ff5e76"],["/2019/03/23/MySQL主从复制（Replication）/index.html","7c9a31463013fd40725a6d0a8fa405eb"],["/2019/03/24/MySQL MHA 高可用/index.html","0cfce388c936145effb4df2191131471"],["/2019/03/24/MySQL 优化/index.html","e32f0fe514b6ae63fa54b4efdd7c5632"],["/2019/03/26/MySQL 日志管理/index.html","f010a65f2d81afae1f0a24c6b8a8dedd"],["/2019/06/10/扩容根分区/index.html","6351d584e059095d2820fbf0ad587f11"],["/2019/09/23/SonarQube代码扫描/index.html","72eb86a1a2937172d4c12e615923d5e9"],["/2019/10/10/centos7生成随机数/index.html","7b02d259b3e9535abd5245f878486101"],["/2020/02/14/promehteus+grafana/index.html","98a4bf1fda307c6e217c840cb636ce0a"],["/2020/05/02/pipeline分布式构建和pipline基础语法/index.html","b3d055116df1c37448bba5db71362574"],["/2020/05/13/iptables相关控制/index.html","370f79ba6a45ef9e62c9ee5ca6854356"],["/2020/09/08/centos7搭建svn服务器/index.html","bfa7d04ca171e4974a9d10a396f485b3"],["/2020/10/15/ab命令压测/index.html","35db49a0ca35e477eb3544ec5c34182f"],["/2021/03/06/服务器硬件压力测试/index.html","df95a1da886537dcfae87fe2fed36391"],["/2021/08/24/rsync+inotify 实时备份/index.html","8d6b3b7353f09e06984c3497f48735ea"],["/2022/05/04/部署harbor服务器（https_http）/index.html","22124ae34608aba0ab7aa54088978f2b"],["/2022/05/23/记录服务器被挖矿的处理方法/index.html","bea2a5d1c0b05ac3b185588416164889"],["/2022/06/20/kubeasz 二进制安装k8s高可用集群/index.html","8cd52ba33b44013a0522d61b91c7612b"],["/2022/06/21/kubernetes安装coreDNS组件/index.html","9fd9c42479e34ca2c66a12c996be3227"],["/2022/06/23/kubernetes-ETCD/index.html","c197c5972b98ce11599d4217c2a6d09c"],["/2022/06/24/kubeasz -etcd v3 API版本数据备份与恢复/index.html","0738074c5007eeee3ac4f331f76b0d5c"],["/2022/07/01/Deployment副本控制器/index.html","3e2eb219c0ad23b18dfc7f1d1d4ad87a"],["/2022/07/01/RC RS副本控制器/index.html","f0708b9cc6509514294005117c7228bd"],["/2022/07/02/Configmap/index.html","a7c0e8c2a0ec97631408e0520e4ca636"],["/2022/07/02/PV PVC/index.html","989898c2d0fec326f2aedb4e321e2570"],["/2022/07/03/Service控制器/index.html","bac2dc46aa8b1a11fabeca35d4e58e69"],["/2022/07/03/Volume存储卷/index.html","d447eacbc0b0cdb0ace42c526cb9adfd"],["/2022/07/03/secret/index.html","896876687f5fa9d89d2f2bd24f3de06d"],["/2022/07/04/k8s-job cronjob/index.html","0b03785c1a46e6a01b09739481556d9a"],["/2022/07/05/kubernetes HPA使用及测试/index.html","7862eb8301d1d39bc3a86230698008f7"],["/2022/08/02/使用阿里云oss静态页面部署服务/index.html","2d8d4dde542794b47f38af373d55d2e9"],["/2022/08/04/基于centos7的Openssh版本升级/index.html","4fa2fafaf8e04b652b1dad472824cb9d"],["/2022/08/13/防止内存碎片化/index.html","cf6b62e81dd230123f2a528cf775efe0"],["/2022/08/15/Pod异常状态排错/index.html","0b4a2f1b49be6c6bdc2252e483252803"],["/2022/08/16/Jenkins用户权限控制插件——Role-based Authorization Strategy/index.html","337338bf2d9ce964acc5054d52820ef0"],["/2022/08/19/kubernetes磁盘爆满故障处理/index.html","8c786908a27ee3ab64c3b73950bfccc1"],["/2022/08/23/分析 ExitCode 定位 Pod 异常退出原因 /index.html","f61b8b988157ee0b3eed3c96795e207e"],["/2022/08/23/容器进程主动退出原因/index.html","e9c37ce29b68dc1be477e1389d6da8b6"],["/2022/08/29/test/index.html","d1863345d4b812592fb7531548594bd7"],["/404.html","4225832930d08321048873302faa0aea"],["/archives/2019/03/index.html","870a30351c8f1d30409a034d2ad299f8"],["/archives/2019/06/index.html","b572aa2cdf01d8516b0aefc945942153"],["/archives/2019/09/index.html","8bb955ec6f22940e533a499fbc8bcd76"],["/archives/2019/10/index.html","90e8c8763679a694f805230d7c9869d0"],["/archives/2019/index.html","77cb0b110dd1048c4fa89c8940517f18"],["/archives/2019/page/2/index.html","d7814fea08f4d62526d6c760cb731521"],["/archives/2020/02/index.html","a8d66e50f1ce547a167ac8a7ccee1beb"],["/archives/2020/05/index.html","4716043bdc7323cece976b9c1337b821"],["/archives/2020/09/index.html","9013468cc05a89be6b71cdb07a90ca0d"],["/archives/2020/10/index.html","c334dbc5516971653c8e47e8e91e5587"],["/archives/2020/index.html","49d4271cd002d864af827611c8940960"],["/archives/2021/03/index.html","cf9ca470047f32806e741265995767fe"],["/archives/2021/08/index.html","4ec1d8f48dc015149b39d3b6421d6aee"],["/archives/2021/index.html","e9e56da7adbdbdc14b76666b561e31ec"],["/archives/2022/05/index.html","dfac0b84270e36beb0644ae4059d3c1a"],["/archives/2022/06/index.html","a609bb5e7b5bae63fdd445018ae9312b"],["/archives/2022/07/index.html","ef2ecb7615b510825de8ef27d09c1bf3"],["/archives/2022/08/index.html","a5f60854f843de955dd6ce1e41075ac1"],["/archives/2022/index.html","c7aaa820622cc7b21a6ed46a18702334"],["/archives/2022/page/2/index.html","40fda8aa2d415f6f6441819cb7542333"],["/archives/2022/page/3/index.html","8f57d9b70fad50533ee3e168630bb5f2"],["/archives/index.html","fbd64d5bd8d3a12dc57ff4e1d39018fb"],["/archives/page/2/index.html","24a9078c2189bd715373e4219fdf981d"],["/archives/page/3/index.html","9ccae8a3a9fdccf33869174514735c8c"],["/archives/page/4/index.html","2eeee3cba686723524db2d7450151e03"],["/archives/page/5/index.html","49d102685110dc3ed5592e39209b228b"],["/categories/Docker/index.html","fe63ccaa071c70d6b35450dffcb476d1"],["/categories/SonarQube/index.html","1f72e7e5a7d778c3d9c528217787d81c"],["/categories/index.html","43d8d42194d15f7a3de1daaa84933307"],["/categories/iptables/index.html","94e7aa013864f3f2d2d71a1f3d9c0c3c"],["/categories/jenkins/index.html","cf3de690ed46f3d400e3a368dc12e18a"],["/categories/kubernetes/index.html","3f1e9496aff28b2508620750b36a8479"],["/categories/kubernetes/page/2/index.html","47203530e150029362a2deb716222200"],["/categories/linux/index.html","118e5b7b28df87e70555a64a1be74bef"],["/categories/mysql/index.html","e9d47fa6aa744fbcced95a858083ecb1"],["/categories/prometheus/index.html","85489f5a58ceb7d2fa70d687e5c88129"],["/categories/svn/index.html","76b9887d1d4635cde2e40e21670955d4"],["/css/background.css","2942635f3e138bf3f0652299cf376c84"],["/css/custom.css","d8f1986b73cb77a533b567a4cb45437b"],["/css/index.css","d260c62dab02c343c586afb634d6004a"],["/css/lantern.css","c8483fed1ae9927bc6fad5817ee8d7bd"],["/css/rightMenu.css","036623ed00b65cd7a5b31dffe2a25c4e"],["/css/universe.css","52c685572ce95860fe8ddf20fb03df83"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/pasted-0.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-1.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-10.png","5d0d6d8aac46e34b30092f808950a9d3"],["/images/pasted-11.png","0784299af846da4168cad054741957f6"],["/images/pasted-12.png","e258ff6c3291821a2b9bbc6a25574624"],["/images/pasted-13.png","000a03ee30cefc56d0749078cf04a949"],["/images/pasted-14.png","8e547d601142697e448fbb4019bbb06a"],["/images/pasted-15.png","950cc9a62554680e2f0570b97e564259"],["/images/pasted-16.png","1707596a28a9b697891bc718c96175ee"],["/images/pasted-17.png","887da59e5df5c2af9d32fea3ffd5e3f7"],["/images/pasted-18.png","5f724508b49e8e7ba1305062ef8e150a"],["/images/pasted-19.png","a47092a023a70b2427014e75873bd6cd"],["/images/pasted-2.png","0a20960a3ee7446d34a8c4cc687b7adf"],["/images/pasted-3.png","7fc1a4e3fe8ab621dc0aa0ad4309f266"],["/images/pasted-4.png","d15fb5188609b444b3f6710ecf9b139c"],["/images/pasted-5.png","ad234216c2159391c25636525c314e41"],["/images/pasted-6.png","9600a48f0f98bce154df36c0a4dbbdc5"],["/images/pasted-7.png","b42122e7904f38ca3e9a32908f872f36"],["/images/pasted-8.png","f5b4699a2bd89e9027d889247b9a1283"],["/images/pasted-9.png","1537c8048729105cddb53dfa80ef72d6"],["/img/12.png","62ac1ef86217d9ac116fa3d22d78dd9b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","e26ff9d7f5db82408a3b9d320a46ed48"],["/img/centos.png","8c9381c65647670beea0443be09905d8"],["/img/desktop.jpg","13c1182799ca5447fd6493c209ae3512"],["/img/dongman.jpg","27894a3d2f116821649423e50a41d0a7"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/harbor.png","4b104adfa004775ce392037ccc140b62"],["/img/harbor2.png","7545fc3e108b3d60cf61ee2010d6e841"],["/img/inotify.png","9ccfc735d97078fba061989fdd50fed1"],["/img/iptables.png","20f88af231b35ba15839a4cc779e2222"],["/img/jenkins.png","5401eb529f0b795e0e549182e516072f"],["/img/jenkins1.png","dc3b8e8cb59e5864c4f7fe2dc13eab9f"],["/img/kubernetes.png","3428de86fd4ecb4eca7e4f3d539c59e2"],["/img/mysql.jpg","331b83381bdb0c15668bfdcd266b1034"],["/img/prometheus.png","7ab7b7c19a98e723a5f2646669a01311"],["/img/sonarqube.png","5216669e0fbcc6c387dbf29a5321bfe0"],["/img/svn.png","895bfaeb2797f9635f660b5ee00946eb"],["/img/touxiang.png","b17d8c86cf0c70c30e7d7327dd5c7e4c"],["/img/wechat.jpg","2516cfa5ceda8f42ac6ba9efec9d88b3"],["/index.html","20092b0eaaac97d96d6277a14e2aceb6"],["/js/chocolate.js","4826caaa586e99d8fee8c5afbb3e70c0"],["/js/custom.js","529d0eeff76b63203edf3305bfc831bc"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/rightMenu.js","68db67f6c6ee6b8db0eb0ddd7e85d2ef"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","fafdd847299ee73d084aa36ced9bce97"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/live2dw/assets/moc/tororo.2048/texture_00.png","9bd791736cfc91b62670dee5f7fbd45c"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","67162a4298711f3574f0bdab5be82352"],["/page/2/index.html","5260cdeb97abda4fbd91352b6887904a"],["/page/3/index.html","3ad95d816fce641c90a955b7298d9af4"],["/page/4/index.html","e891dbe4b4ef4f1896c5da570a845eca"],["/page/5/index.html","bb31ed18ea96a3c7947fec659fe25ade"],["/sw-register.js","8b9813a1f9cb34ff49d9f2f012b0244c"],["/tags/SonarQube/index.html","c6b08dee1809e537c2b9b2ed604b4a06"],["/tags/centos/index.html","7d458f6afd9f264932846da908cca866"],["/tags/docker/index.html","db1a6341caf6fbe25370a1bb5dbe54c7"],["/tags/grafana/index.html","24ebdc47a5efd0cf291996f5f4c55e10"],["/tags/index.html","a11d30536a5929bab86c70c6eec5ad79"],["/tags/iptables/index.html","76efff416d9b6ff49e507c7ce3e89d4d"],["/tags/jenkins/index.html","3264ee99901c727882058e4be798ab87"],["/tags/kubernetes/index.html","cf8459c3580a994640c8df7e250ecb6f"],["/tags/kubernetes/page/2/index.html","f278f3e2c318e519cf5025bda86ccc99"],["/tags/linux/index.html","52816d8a54f3297e23f4773988406d30"],["/tags/mysql/index.html","fd271787d7706c2bb3acfc88e53f54b9"],["/tags/prometheus/index.html","c2edcb1f9f2af8ffaddd531ebddb0271"],["/tags/svn/index.html","a4af5d11fb232ce1a459a51ee891fff0"],["/tags/云原生/index.html","b3ec9241564374cfee9a3fcac06c9a8b"],["/tags/云原生/page/2/index.html","f244b2a4dc686fd3a36cb8ad9bba7a9c"],["/tags/阿里云/index.html","d521b45e3fe3489793d9cb060f2b8522"]];
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
