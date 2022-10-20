/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/06/MySQL读写分离架构（MHA+Atlas）/index.html","c46cda59efccbe4a8221fbd1f0c952ea"],["/2019/03/08/MySQL分布式架构-MyCAT/index.html","5e340ffcd94d9a503c37c9a80d310bef"],["/2019/03/14/MySQL物理备份工具使用（Percona Xtrabackup）PBK   XBK/index.html","cab2ed6508423f878f23af459f145bbd"],["/2019/03/19/MySQL 备份恢复（mysqldump）/index.html","90de5a0236af286853664eaf49dc0997"],["/2019/03/23/MySQL主从复制（Replication）/index.html","623363dfcb302cbcd80c00c89f692d33"],["/2019/03/24/MySQL MHA 高可用/index.html","56beb9ce879dc369316e83665da66a79"],["/2019/03/24/MySQL 优化/index.html","0c6921866adb5af4340a7b4a348ffa85"],["/2019/03/26/MySQL 日志管理/index.html","824a73ce726ce3f94e2d364e63d4ddab"],["/2019/06/10/扩容根分区/index.html","fc9e51872b130e4dfc04d320b8555e91"],["/2019/09/23/SonarQube代码扫描/index.html","64193f018b2eb0da94983490c6d6263f"],["/2019/10/10/centos7生成随机数/index.html","8a034aa426812d69e41d3b8bccbc7a27"],["/2020/02/14/promehteus+grafana/index.html","93e4fe2aa1203f31e369590839332693"],["/2020/05/02/pipeline分布式构建和pipline基础语法/index.html","27780f2e60b9aa6d49eb807d80671d68"],["/2020/05/13/iptables相关控制/index.html","77d91304810f4c0d099eb524e7067719"],["/2020/09/08/centos7搭建svn服务器/index.html","f8ee8042db0c0411e71e4af39d9f9168"],["/2020/10/15/ab命令压测/index.html","f1e6fe15e4da7c825f8ca84724bfcf0f"],["/2021/03/06/服务器硬件压力测试/index.html","7c59994e91d766bf6a2a262e2bfe5255"],["/2021/08/24/rsync+inotify 实时备份/index.html","e00dc3d315fa935f768d8587399f48a2"],["/2022/05/04/部署harbor服务器（https_http）/index.html","4a1748cb08e0c1c8bb277f4d6b48b91c"],["/2022/05/23/记录服务器被挖矿的处理方法/index.html","252acc6267a5afbd480f39b60db0575d"],["/2022/06/20/kubeasz 二进制安装k8s高可用集群/index.html","90d99c5aa05e2d91e46e1343d81ac8b4"],["/2022/06/21/kubernetes安装coreDNS组件/index.html","407964ec4d4ef7aba48b82824dd036c7"],["/2022/06/23/kubernetes-ETCD/index.html","3feaeca2ca577219ba1fe93e8ad88091"],["/2022/06/24/kubeasz -etcd v3 API版本数据备份与恢复/index.html","1baf4be23dc89230644508349584c1ce"],["/2022/07/01/Deployment副本控制器/index.html","cf26424dafb629637c2015f7fce9a91c"],["/2022/07/01/RC RS副本控制器/index.html","aa8a67e56204a1531f78b788113676c8"],["/2022/07/02/Configmap/index.html","6da81d78c281560a7b50d85fc9b76470"],["/2022/07/02/PV PVC/index.html","6778d89a9e2366b3660994c84e53c98a"],["/2022/07/03/Service控制器/index.html","11f7c19934cf514c399a1fe4826314d0"],["/2022/07/03/Volume存储卷/index.html","f30619596b1b451fac4ae46dae53f58f"],["/2022/07/03/secret/index.html","71252ffb51749878adffc4a53f9d52d3"],["/2022/07/04/k8s-job cronjob/index.html","cc72859b4914ed0e36038bdd0e2a01b2"],["/2022/07/05/kubernetes HPA使用及测试/index.html","310b852faf04b39c3881123045087300"],["/2022/08/02/使用阿里云oss静态页面部署服务/index.html","aafddab29141441d05e3f19a170bfcd6"],["/2022/08/04/基于centos7的Openssh版本升级/index.html","a643ab2f7cab65111342c3ff1d2348f6"],["/2022/08/13/防止内存碎片化/index.html","67acebae621245fd0a70c13d3755bd1d"],["/2022/08/15/Pod异常状态排错/index.html","194ef1dfc2979b98dd0e824217f56262"],["/2022/08/16/Jenkins用户权限控制插件——Role-based Authorization Strategy/index.html","d48555aaac4a9c075b8a9de9eb29edd4"],["/2022/08/19/kubernetes磁盘爆满故障处理/index.html","ba2e1de54800b6dd931ecff548b6e423"],["/2022/08/23/分析 ExitCode 定位 Pod 异常退出原因 /index.html","acb70065cbbec1c0d3b74ecd3b12bc9d"],["/2022/08/23/容器进程主动退出原因/index.html","7461515856c52733556267a953d3f81c"],["/2022/08/29/test/index.html","f3e490d05a025cd32d32526168202e5a"],["/404.html","fa9f273abe2ce329c8fe80610b122d77"],["/archives/2019/03/index.html","aa68bd706d749080f2f1d22f81cd0248"],["/archives/2019/06/index.html","a0b9837a040c5d062e49ad55b47c6897"],["/archives/2019/09/index.html","7d36694d312f9efa5314e24c16c76e95"],["/archives/2019/10/index.html","6093cc87bb4aab773b2c56647c870c51"],["/archives/2019/index.html","536786a937d047770ecaee87b3b7959c"],["/archives/2019/page/2/index.html","74c3c4ccf876fdf84c1cca33794f377b"],["/archives/2020/02/index.html","245666e3094c9de423b69ce24e73284a"],["/archives/2020/05/index.html","0655798b3681f9f63eb7abac8ae01182"],["/archives/2020/09/index.html","2e96928e2dabc19f04856ab71c97ddfb"],["/archives/2020/10/index.html","375672f9cbd9894e53280c4b68985dc6"],["/archives/2020/index.html","b8edd5eab13fd49bda92b734374dbc66"],["/archives/2021/03/index.html","98514149388ac2c6fa9038e10098799b"],["/archives/2021/08/index.html","c3752aec8ff2b6f33056493fa2e105ba"],["/archives/2021/index.html","6399ead0f68324c972b5c864a6bc02e2"],["/archives/2022/05/index.html","494236f7ee454d0538b27d7771f8deaf"],["/archives/2022/06/index.html","d47dae75daae7ba5b3a30936ddab9fb0"],["/archives/2022/07/index.html","efb3d2caa66674e7691e2ddc987bb069"],["/archives/2022/08/index.html","46d53520ec573509fa9e076947f242c6"],["/archives/2022/index.html","db16e16ef0038c42a1fa26aadb1b0201"],["/archives/2022/page/2/index.html","4367319e411848453193c9203167f97d"],["/archives/2022/page/3/index.html","a1fa224c20d77e4271e3aa3904091783"],["/archives/index.html","55d27c092e78653e33fa84f227e55387"],["/archives/page/2/index.html","1b50aa1a506e504c9622aa32c1b367d1"],["/archives/page/3/index.html","869ad3791eb2c801c1eca307e75c59dd"],["/archives/page/4/index.html","d5bfc2a84cafb7810f9bb60b21141d11"],["/archives/page/5/index.html","e1abbb3edaaaf4b44fd3de4800be0416"],["/categories/Docker/index.html","81c0f817e56ce6424b2f36b050011010"],["/categories/SonarQube/index.html","514199642cc99a08dbe7aa0fd612673b"],["/categories/index.html","0203555955959be85d219689ab866df3"],["/categories/iptables/index.html","6635f43a84e798b804e98b3bfd73cc21"],["/categories/jenkins/index.html","d4b6c112638686bc4897a0c13f2aae40"],["/categories/kubernetes/index.html","2b8d71f98a04776a97bfeebe09ea34df"],["/categories/kubernetes/page/2/index.html","553e0e78943c733ededc1c684433ba1c"],["/categories/linux/index.html","ac6c104d11ba9a1018ad2b63e5fb2894"],["/categories/mysql/index.html","4871c6bcffa43c9f8bb58fe49447d578"],["/categories/prometheus/index.html","1436f24df981a78eeb8bf73eb1fc90af"],["/categories/svn/index.html","d27105c24a5183254c68b945fb21f328"],["/css/background.css","2942635f3e138bf3f0652299cf376c84"],["/css/custom.css","d8f1986b73cb77a533b567a4cb45437b"],["/css/index.css","d260c62dab02c343c586afb634d6004a"],["/css/lantern.css","c8483fed1ae9927bc6fad5817ee8d7bd"],["/css/rightMenu.css","036623ed00b65cd7a5b31dffe2a25c4e"],["/css/universe.css","52c685572ce95860fe8ddf20fb03df83"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/pasted-0.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-1.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-10.png","5d0d6d8aac46e34b30092f808950a9d3"],["/images/pasted-11.png","0784299af846da4168cad054741957f6"],["/images/pasted-12.png","e258ff6c3291821a2b9bbc6a25574624"],["/images/pasted-13.png","000a03ee30cefc56d0749078cf04a949"],["/images/pasted-14.png","8e547d601142697e448fbb4019bbb06a"],["/images/pasted-15.png","950cc9a62554680e2f0570b97e564259"],["/images/pasted-16.png","1707596a28a9b697891bc718c96175ee"],["/images/pasted-17.png","887da59e5df5c2af9d32fea3ffd5e3f7"],["/images/pasted-18.png","5f724508b49e8e7ba1305062ef8e150a"],["/images/pasted-19.png","a47092a023a70b2427014e75873bd6cd"],["/images/pasted-2.png","0a20960a3ee7446d34a8c4cc687b7adf"],["/images/pasted-3.png","7fc1a4e3fe8ab621dc0aa0ad4309f266"],["/images/pasted-4.png","d15fb5188609b444b3f6710ecf9b139c"],["/images/pasted-5.png","ad234216c2159391c25636525c314e41"],["/images/pasted-6.png","9600a48f0f98bce154df36c0a4dbbdc5"],["/images/pasted-7.png","b42122e7904f38ca3e9a32908f872f36"],["/images/pasted-8.png","f5b4699a2bd89e9027d889247b9a1283"],["/images/pasted-9.png","1537c8048729105cddb53dfa80ef72d6"],["/img/12.png","62ac1ef86217d9ac116fa3d22d78dd9b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","e26ff9d7f5db82408a3b9d320a46ed48"],["/img/centos.png","8c9381c65647670beea0443be09905d8"],["/img/desktop.jpg","13c1182799ca5447fd6493c209ae3512"],["/img/dongman.jpg","27894a3d2f116821649423e50a41d0a7"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/harbor.png","4b104adfa004775ce392037ccc140b62"],["/img/harbor2.png","7545fc3e108b3d60cf61ee2010d6e841"],["/img/inotify.png","9ccfc735d97078fba061989fdd50fed1"],["/img/iptables.png","20f88af231b35ba15839a4cc779e2222"],["/img/jenkins.png","5401eb529f0b795e0e549182e516072f"],["/img/jenkins1.png","dc3b8e8cb59e5864c4f7fe2dc13eab9f"],["/img/kubernetes.png","3428de86fd4ecb4eca7e4f3d539c59e2"],["/img/mysql.jpg","331b83381bdb0c15668bfdcd266b1034"],["/img/prometheus.png","7ab7b7c19a98e723a5f2646669a01311"],["/img/sonarqube.png","5216669e0fbcc6c387dbf29a5321bfe0"],["/img/svn.png","895bfaeb2797f9635f660b5ee00946eb"],["/img/touxiang.png","b17d8c86cf0c70c30e7d7327dd5c7e4c"],["/img/wechat.jpg","2516cfa5ceda8f42ac6ba9efec9d88b3"],["/index.html","2e8b8bd7ff8caca5e9885033041372b1"],["/js/chocolate.js","4826caaa586e99d8fee8c5afbb3e70c0"],["/js/custom.js","529d0eeff76b63203edf3305bfc831bc"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/rightMenu.js","68db67f6c6ee6b8db0eb0ddd7e85d2ef"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","fafdd847299ee73d084aa36ced9bce97"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/live2dw/assets/moc/tororo.2048/texture_00.png","9bd791736cfc91b62670dee5f7fbd45c"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","5ac8836780d34a455f6eeb15ff4b9e14"],["/page/2/index.html","2231589297f4dfbfa9dc8b709dbc2109"],["/page/3/index.html","2f7879bcde68869748d0d671763c6498"],["/page/4/index.html","539c26df62e12718e0af4d9ac5dcbcfe"],["/page/5/index.html","cd9de1e296ec854a05478973faa627cf"],["/sw-register.js","43042e3187997b10f3dadd08a5db751b"],["/tags/SonarQube/index.html","439fa6b09b8b834505c01e4f07423641"],["/tags/centos/index.html","78020f29262178c8752f514ea7e1d1fe"],["/tags/docker/index.html","8f894ad148f6f4def0a12d2c662bd5fc"],["/tags/grafana/index.html","6a4a4d4e18ba025a618d44a39a3ffe7a"],["/tags/index.html","ed914faf0ee2f97642d4962e354a0ef1"],["/tags/iptables/index.html","253af8104af806a4f55f0519f5416a2f"],["/tags/jenkins/index.html","033a89684a93f82b18776b4303c1677f"],["/tags/kubernetes/index.html","3fffd30ed439f54fa5d22d9e62ad0f08"],["/tags/kubernetes/page/2/index.html","431d56c4f12a754204abcca96b886ff9"],["/tags/linux/index.html","df088877770f6887b858b28cf276f669"],["/tags/mysql/index.html","68b487ce7474a27c0db8797087d8a672"],["/tags/prometheus/index.html","e13ff27c66430801f91fdba78354e014"],["/tags/svn/index.html","cc429e822d4f5cc9adc07d9a67f778a2"],["/tags/云原生/index.html","5f1681792749f6e668e21427c1fdb12a"],["/tags/云原生/page/2/index.html","24e57e8ff8860af17ec6af051ff0cdb4"],["/tags/阿里云/index.html","55ec28d5922d7a1206920ab6e8fe9ea8"]];
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
