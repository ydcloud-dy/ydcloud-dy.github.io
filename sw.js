/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/06/MySQL读写分离架构（MHA+Atlas）/index.html","a3fef1ef8c82b781fffb1118bb281554"],["/2019/03/08/MySQL分布式架构-MyCAT/index.html","f162b6bc3c34048ccac98cfef0051e3b"],["/2019/03/14/MySQL物理备份工具使用（Percona Xtrabackup）PBK   XBK/index.html","a8baf37e07caeb25f08086eeccb5fb6d"],["/2019/03/19/MySQL 备份恢复（mysqldump）/index.html","1a6a79a101168b963d7128c318f92038"],["/2019/03/23/MySQL主从复制（Replication）/index.html","39821587a735754c8228baa5d52d7aaf"],["/2019/03/24/MySQL MHA 高可用/index.html","4be53312cfca49141d2df62aa65f4776"],["/2019/03/24/MySQL 优化/index.html","b992290f4a48be31c3d1cb0a8be6947e"],["/2019/03/26/MySQL 日志管理/index.html","98f6c0f63f90d3385dd8732cfe033cec"],["/2019/06/10/扩容根分区/index.html","e1251dbf2e57918fb106d91dc5a9204c"],["/2019/09/23/SonarQube代码扫描/index.html","ce148592c7469c8f8b5fe23f8a8ca5bf"],["/2019/10/10/centos7生成随机数/index.html","23abe308a329a82d3967c2369d3880e9"],["/2020/02/14/promehteus+grafana/index.html","12220ea4a5351a5d560d646df07a6098"],["/2020/05/02/pipeline分布式构建和pipline基础语法/index.html","5378c87ba743a9d781f16d9fc2a709dc"],["/2020/05/13/iptables相关控制/index.html","e8867dde4f400e42a165d7a13be7deac"],["/2020/09/08/centos7搭建svn服务器/index.html","9dbf7b54b58da8c5a9c2312257e13020"],["/2020/10/15/ab命令压测/index.html","e576f5f33bb79426cdb5cac53274053c"],["/2021/03/06/服务器硬件压力测试/index.html","d761b2180af3e33e31fde3b9f51546af"],["/2021/08/24/rsync+inotify 实时备份/index.html","32f402373af857af2173e4b26632cdd6"],["/2022/05/04/部署harbor服务器（https_http）/index.html","90b743c4747dbd90ef87c982b6695432"],["/2022/05/23/记录服务器被挖矿的处理方法/index.html","9fcce1c84dd6c9ca9913c9640e88ec9a"],["/2022/06/20/kubeasz 二进制安装k8s高可用集群/index.html","844595478e17ba537f93994e297a5e6f"],["/2022/06/21/kubernetes安装coreDNS组件/index.html","0a470cabeb45af6aaea20580651ddc10"],["/2022/06/23/kubernetes-ETCD/index.html","7c831273874715c6bfe59f8fcac5c895"],["/2022/06/24/kubeasz -etcd v3 API版本数据备份与恢复/index.html","e59e01387294a8a0fb6f899fdd336dc8"],["/2022/07/01/Deployment副本控制器/index.html","c0dc06447ff4e596e048001aaa9d4c32"],["/2022/07/01/RC RS副本控制器/index.html","e70a71eddee282020d17c70b65af29ff"],["/2022/07/02/Configmap/index.html","fc0d14d430250f55504aa35ddd6ec034"],["/2022/07/02/PV PVC/index.html","e3d1b1ab94ebd81492db62a3f8312236"],["/2022/07/03/Service控制器/index.html","0038ddb3dbd1b4d33f092048b9451e2b"],["/2022/07/03/Volume存储卷/index.html","25a4ab2e39134286a6a748513a15ad23"],["/2022/07/03/secret/index.html","d69782da04dba9d35dec40b00f95f1e5"],["/2022/07/04/k8s-job cronjob/index.html","97d5754fc669bd6bfbcd5da45fb67749"],["/2022/07/05/kubernetes HPA使用及测试/index.html","2ec286c8d54041eed511dd5f87836e0c"],["/2022/08/02/使用阿里云oss静态页面部署服务/index.html","fe086a584b035e83f6a2c9dab1980458"],["/2022/08/04/基于centos7的Openssh版本升级/index.html","86e60ebaf9e608ec87a91d34577fca8a"],["/2022/08/13/防止内存碎片化/index.html","e43972bb26592d6390240d4706c26e0a"],["/2022/08/15/Pod异常状态排错/index.html","f84b9f30cb30eb0339ff5407de835817"],["/2022/08/16/Jenkins用户权限控制插件——Role-based Authorization Strategy/index.html","ce6f2dcf1a2812e296e0dd23b0bad884"],["/2022/08/19/kubernetes磁盘爆满故障处理/index.html","21caf225d0b4ee1ad1d63d56de1ba86e"],["/2022/08/23/分析 ExitCode 定位 Pod 异常退出原因 /index.html","2b6edf5b6990aaa49d06eeaffc5cae87"],["/2022/08/23/容器进程主动退出原因/index.html","7c25028a5d21781d4d7e69facc831128"],["/2022/08/29/test/index.html","7c0cac07f512b84737b9aa5b14c0a5e7"],["/404.html","edaa3b36b3168074b2eb08c9d585dd38"],["/archives/2019/03/index.html","3969a22aed9749bf7daf367e21deb48f"],["/archives/2019/06/index.html","7bf683b7dec2d5d3cee0c47257ebf349"],["/archives/2019/09/index.html","b5493466fdb0c9b29087ed5bc88a48a3"],["/archives/2019/10/index.html","3baed1f83a40661e17347528fff773e4"],["/archives/2019/index.html","1e54f857e4d56f55047c44a285b241ce"],["/archives/2019/page/2/index.html","2eba889facc8a1525ba240a543bf4b2b"],["/archives/2020/02/index.html","5c70e1ea738be999adb537bd2098c84a"],["/archives/2020/05/index.html","62ad1f4331acedd1f6e8fcf663e74844"],["/archives/2020/09/index.html","fca1388ecb8a8e4b1f98e7b3a08a09c4"],["/archives/2020/10/index.html","0ce153bf6e06c06235cb5d6a4e8c61f1"],["/archives/2020/index.html","f7ccc9842ba1d8887e5b7a7ea73e8d31"],["/archives/2021/03/index.html","49a0c63b1cfceebcc756dd70ec9a2c62"],["/archives/2021/08/index.html","589f88ea397f4a5a23aecd6dd38635a4"],["/archives/2021/index.html","837f9d4638ae2bd5d8135f96df1452e9"],["/archives/2022/05/index.html","12e34ad459e03881fae237878696d0f2"],["/archives/2022/06/index.html","e32836d9f7a22372487381f878f363fc"],["/archives/2022/07/index.html","9c363ba3b9b6711e3d6eacfe2cd18829"],["/archives/2022/08/index.html","dc749e739f5cc1abd4ca01275750cdec"],["/archives/2022/index.html","b964e3de907a825cbb7b502c7fa6b982"],["/archives/2022/page/2/index.html","000132101fe363aafc19af7c04946c51"],["/archives/2022/page/3/index.html","137a07e3355f08713546d38f837cac66"],["/archives/index.html","297d02a0db560cfd749ddcab10b86a24"],["/archives/page/2/index.html","cbe9540f87190387b228eb1137d04950"],["/archives/page/3/index.html","4fa81e3cd4de12893cb6fd49965a3495"],["/archives/page/4/index.html","e35eac4d4dd47c7330b41e193ed50419"],["/archives/page/5/index.html","5fd68b48e81d040325167d7194cbafb8"],["/categories/Docker/index.html","d42830230d3fb1b34a251806f6a1649f"],["/categories/SonarQube/index.html","469fdffd546c10e516eb43ddc9e2f9e3"],["/categories/index.html","1bd0927ec3f78ddea8581afebaa1a298"],["/categories/iptables/index.html","272d2b258b6ab6fe9e09e003df7e3aff"],["/categories/jenkins/index.html","29ee2acc7d238412c6bed0057e2a31de"],["/categories/kubernetes/index.html","f3e265427c3c87454683bd038ced0e09"],["/categories/kubernetes/page/2/index.html","0b546a7fcbd1cda433b612ae021a41c3"],["/categories/linux/index.html","39666c95be7c07bf6275ea8d40956e6a"],["/categories/mysql/index.html","d91a5a4898fd79a37f0bb079777a892f"],["/categories/prometheus/index.html","147b45782e24e92255e45f38db3dcc20"],["/categories/svn/index.html","877a4752344610f962ca186e540b7527"],["/css/background.css","2942635f3e138bf3f0652299cf376c84"],["/css/custom.css","d8f1986b73cb77a533b567a4cb45437b"],["/css/index.css","d260c62dab02c343c586afb634d6004a"],["/css/lantern.css","c8483fed1ae9927bc6fad5817ee8d7bd"],["/css/rightMenu.css","036623ed00b65cd7a5b31dffe2a25c4e"],["/css/universe.css","52c685572ce95860fe8ddf20fb03df83"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/pasted-0.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-1.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-10.png","5d0d6d8aac46e34b30092f808950a9d3"],["/images/pasted-11.png","0784299af846da4168cad054741957f6"],["/images/pasted-12.png","e258ff6c3291821a2b9bbc6a25574624"],["/images/pasted-13.png","000a03ee30cefc56d0749078cf04a949"],["/images/pasted-14.png","8e547d601142697e448fbb4019bbb06a"],["/images/pasted-15.png","950cc9a62554680e2f0570b97e564259"],["/images/pasted-16.png","1707596a28a9b697891bc718c96175ee"],["/images/pasted-17.png","887da59e5df5c2af9d32fea3ffd5e3f7"],["/images/pasted-18.png","5f724508b49e8e7ba1305062ef8e150a"],["/images/pasted-19.png","a47092a023a70b2427014e75873bd6cd"],["/images/pasted-2.png","0a20960a3ee7446d34a8c4cc687b7adf"],["/images/pasted-3.png","7fc1a4e3fe8ab621dc0aa0ad4309f266"],["/images/pasted-4.png","d15fb5188609b444b3f6710ecf9b139c"],["/images/pasted-5.png","ad234216c2159391c25636525c314e41"],["/images/pasted-6.png","9600a48f0f98bce154df36c0a4dbbdc5"],["/images/pasted-7.png","b42122e7904f38ca3e9a32908f872f36"],["/images/pasted-8.png","f5b4699a2bd89e9027d889247b9a1283"],["/images/pasted-9.png","1537c8048729105cddb53dfa80ef72d6"],["/img/12.png","62ac1ef86217d9ac116fa3d22d78dd9b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","e26ff9d7f5db82408a3b9d320a46ed48"],["/img/centos.png","8c9381c65647670beea0443be09905d8"],["/img/desktop.jpg","13c1182799ca5447fd6493c209ae3512"],["/img/dongman.jpg","27894a3d2f116821649423e50a41d0a7"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/harbor.png","4b104adfa004775ce392037ccc140b62"],["/img/harbor2.png","7545fc3e108b3d60cf61ee2010d6e841"],["/img/inotify.png","9ccfc735d97078fba061989fdd50fed1"],["/img/iptables.png","20f88af231b35ba15839a4cc779e2222"],["/img/jenkins.png","5401eb529f0b795e0e549182e516072f"],["/img/jenkins1.png","dc3b8e8cb59e5864c4f7fe2dc13eab9f"],["/img/kubernetes.png","3428de86fd4ecb4eca7e4f3d539c59e2"],["/img/mysql.jpg","331b83381bdb0c15668bfdcd266b1034"],["/img/prometheus.png","7ab7b7c19a98e723a5f2646669a01311"],["/img/sonarqube.png","5216669e0fbcc6c387dbf29a5321bfe0"],["/img/svn.png","895bfaeb2797f9635f660b5ee00946eb"],["/img/touxiang.png","b17d8c86cf0c70c30e7d7327dd5c7e4c"],["/img/wechat.jpg","2516cfa5ceda8f42ac6ba9efec9d88b3"],["/index.html","42854456970e87fc861e745ac70d8393"],["/js/chocolate.js","4826caaa586e99d8fee8c5afbb3e70c0"],["/js/custom.js","529d0eeff76b63203edf3305bfc831bc"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/rightMenu.js","68db67f6c6ee6b8db0eb0ddd7e85d2ef"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","fafdd847299ee73d084aa36ced9bce97"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/live2dw/assets/moc/tororo.2048/texture_00.png","9bd791736cfc91b62670dee5f7fbd45c"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","ef04e06eccef889bfd1d8a2c5bec4ed4"],["/page/2/index.html","e7adc8734041316d2a98d1acdee056dc"],["/page/3/index.html","1178f4fcf358b47020263f85ca5bf731"],["/page/4/index.html","c3cca151c24d85385ed6b37e2b45652b"],["/page/5/index.html","384170c7070ea85a2fdb6a3195649916"],["/sw-register.js","ca4929fbe402956e1ba98f25feb7ac58"],["/tags/SonarQube/index.html","0d86d55abaef1bb00b261a00a18af1cd"],["/tags/centos/index.html","7e1ee9dd6abbcbc737a44ca48c84f755"],["/tags/docker/index.html","eeb22dcfbc4c22558175ae667c1f0dd9"],["/tags/grafana/index.html","0ad081128de83b49f9f3d803e9551239"],["/tags/index.html","3cf8f5c1a4bb3dc2f4334f98ee292525"],["/tags/iptables/index.html","839e198ddea02cd603138a196ed89f44"],["/tags/jenkins/index.html","05a30642eb8510c695390ec50a4d8ca7"],["/tags/kubernetes/index.html","871d6ec8100998fc905bd3e59b1ede8d"],["/tags/kubernetes/page/2/index.html","1e1c93a9cf2b2c05807f0848f79ca12b"],["/tags/linux/index.html","9df3f1238a99a9b70f50e53961dad23b"],["/tags/mysql/index.html","87a3ba33554d2ffa5a46a75a5d9dacd3"],["/tags/prometheus/index.html","3f2e0ea4971809a1016b28616b4e51b1"],["/tags/svn/index.html","2d455825eec6dc5ea47e45c4dcff1b4e"],["/tags/云原生/index.html","2cda33b9262ef8f536d96c39feb1caf1"],["/tags/云原生/page/2/index.html","318e0169c95b78e36cd7144ef0e806d0"],["/tags/阿里云/index.html","e0ccfcd17b1e027f528ef62fd0724314"]];
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
