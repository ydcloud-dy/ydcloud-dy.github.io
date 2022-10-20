/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/06/MySQL读写分离架构（MHA+Atlas）/index.html","e93e5743f87cd0cf2d3ac11f390717ef"],["/2019/03/08/MySQL分布式架构-MyCAT/index.html","4b5eec4789719bc5dcdbe2fcb794c1f0"],["/2019/03/14/MySQL物理备份工具使用（Percona Xtrabackup）PBK   XBK/index.html","9addc9f383f2128fffe464bf7ec91354"],["/2019/03/19/MySQL 备份恢复（mysqldump）/index.html","6ab0897ffad97297239e13d731ff5e76"],["/2019/03/23/MySQL主从复制（Replication）/index.html","7c9a31463013fd40725a6d0a8fa405eb"],["/2019/03/24/MySQL MHA 高可用/index.html","0cfce388c936145effb4df2191131471"],["/2019/03/24/MySQL 优化/index.html","e32f0fe514b6ae63fa54b4efdd7c5632"],["/2019/03/26/MySQL 日志管理/index.html","f010a65f2d81afae1f0a24c6b8a8dedd"],["/2019/06/10/扩容根分区/index.html","82047bf69fa9ad2512ccab80b56b75ab"],["/2019/09/23/SonarQube代码扫描/index.html","72eb86a1a2937172d4c12e615923d5e9"],["/2019/10/10/centos7生成随机数/index.html","7b02d259b3e9535abd5245f878486101"],["/2020/02/14/promehteus+grafana/index.html","98a4bf1fda307c6e217c840cb636ce0a"],["/2020/05/02/pipeline分布式构建和pipline基础语法/index.html","b3d055116df1c37448bba5db71362574"],["/2020/05/13/iptables相关控制/index.html","370f79ba6a45ef9e62c9ee5ca6854356"],["/2020/09/08/centos7搭建svn服务器/index.html","d051730251d00c9eb7487980111aae3d"],["/2020/10/15/ab命令压测/index.html","35db49a0ca35e477eb3544ec5c34182f"],["/2021/03/06/服务器硬件压力测试/index.html","3cee84735ace3b575910420efabb0dfb"],["/2021/08/24/rsync+inotify 实时备份/index.html","8d6b3b7353f09e06984c3497f48735ea"],["/2022/05/04/部署harbor服务器（https_http）/index.html","22124ae34608aba0ab7aa54088978f2b"],["/2022/05/23/记录服务器被挖矿的处理方法/index.html","bea2a5d1c0b05ac3b185588416164889"],["/2022/06/20/kubeasz 二进制安装k8s高可用集群/index.html","e012eb3e399ec0c15a2acc2424062655"],["/2022/06/21/kubernetes安装coreDNS组件/index.html","dfd59e9acfa76fc5352f10ad28a1f9b6"],["/2022/06/23/kubernetes-ETCD/index.html","992a5b53e70db223677e6981d9c497d1"],["/2022/06/24/kubeasz -etcd v3 API版本数据备份与恢复/index.html","563744dcf9bd9acbe63c9a9b55adc2a0"],["/2022/07/01/Deployment副本控制器/index.html","84e721864f26526660aeb2f623d7b819"],["/2022/07/01/RC RS副本控制器/index.html","f0708b9cc6509514294005117c7228bd"],["/2022/07/02/Configmap/index.html","72cbcfd4b0bbe384b4fdeb568b9874b3"],["/2022/07/02/PV PVC/index.html","8ae8b33e10bd9702ed89c4dc7dea9ac7"],["/2022/07/03/Service控制器/index.html","fda8582db9564509ae5bf223318531e5"],["/2022/07/03/Volume存储卷/index.html","180551eab79fdf28c6fd17cfe3897f1b"],["/2022/07/03/secret/index.html","6adb35dfc38e4f938443dd2db41db43c"],["/2022/07/04/k8s-job cronjob/index.html","7ee169c906312109e55191eb2aa0cad6"],["/2022/07/05/kubernetes HPA使用及测试/index.html","6aece48f632a32a73099ff4f32115ee4"],["/2022/08/02/使用阿里云oss静态页面部署服务/index.html","2d8d4dde542794b47f38af373d55d2e9"],["/2022/08/04/基于centos7的Openssh版本升级/index.html","4fa2fafaf8e04b652b1dad472824cb9d"],["/2022/08/13/防止内存碎片化/index.html","f9c3298c01ff1292fd8a71b9dbc67b96"],["/2022/08/15/Pod异常状态排错/index.html","0b4a2f1b49be6c6bdc2252e483252803"],["/2022/08/16/Jenkins用户权限控制插件——Role-based Authorization Strategy/index.html","337338bf2d9ce964acc5054d52820ef0"],["/2022/08/19/kubernetes磁盘爆满故障处理/index.html","f2c0b5dea07e3e88538235d5cb239aed"],["/2022/08/23/分析 ExitCode 定位 Pod 异常退出原因 /index.html","5a8ee0bec6103ce6243e0e7f18b97c64"],["/2022/08/23/容器进程主动退出原因/index.html","843fa82961a7b34aa3debe26cb0fb2ad"],["/2022/08/29/test/index.html","b8b5ea9e30c5d5b4a36ffeab946df000"],["/404.html","2dfb100e06a309fb4ecf065a801fbd30"],["/archives/2019/03/index.html","ff43087559a3d570fd5719966151425f"],["/archives/2019/06/index.html","339d39d05cba4039605b2caef2edce05"],["/archives/2019/09/index.html","c8a42b7348113b1ef924c0b7097173ca"],["/archives/2019/10/index.html","b7a7b24c973a6be1949c9b96c2cfae49"],["/archives/2019/index.html","cde038c585b99085bc55fb52cc23adc3"],["/archives/2019/page/2/index.html","1cafe478579b13adcafb895c2443d3db"],["/archives/2020/02/index.html","60649a442271ecfd5d59741fb5902b79"],["/archives/2020/05/index.html","845326e21bc1434a58eecfd28fc22eb2"],["/archives/2020/09/index.html","6b3964d85bd98b5d7603ac569a2a8077"],["/archives/2020/10/index.html","3f62e54168b70fefe74b57305a33d737"],["/archives/2020/index.html","fc89cdbfa81fe5862a7c900222df2b99"],["/archives/2021/03/index.html","1b0da8c02ab239c3d2e9884ca36c7c49"],["/archives/2021/08/index.html","a29d3e6d840e9749840055a822c27ca3"],["/archives/2021/index.html","00297da89bf52f57b0bf6c60b6802a31"],["/archives/2022/05/index.html","0a1bcf7c30cbfb3b4bc88036d333fbf6"],["/archives/2022/06/index.html","6b44cb6659afccceb02d0f327bf66dfb"],["/archives/2022/07/index.html","232dadc14b9011ce0c5a947308a056eb"],["/archives/2022/08/index.html","a213da26522cb08b979a26673208f32a"],["/archives/2022/index.html","1c250522a12503f4c4c117f2b33976d1"],["/archives/2022/page/2/index.html","4f1bbcfa1942fb5202e520004812fcea"],["/archives/2022/page/3/index.html","ae644cc0e5e1086a4559e362ff9108d9"],["/archives/index.html","1aa91947bb605cb7fa32f868b8ec66a1"],["/archives/page/2/index.html","de1615a4d5254da4c64b2677ba5862f3"],["/archives/page/3/index.html","8526f54f370edea2dba9e71b44f928db"],["/archives/page/4/index.html","dbf22bf965707aa90582c2c38d7f64d9"],["/archives/page/5/index.html","8d763c27edaba348ecc94b29c1c42d5a"],["/categories/Docker/index.html","4d7899adc354d3a18851106d601ef558"],["/categories/SonarQube/index.html","ae54a31f638512e81eaf9abffb3b15bc"],["/categories/index.html","e286183cfb4ec4088617f03150b9c102"],["/categories/iptables/index.html","a8bbb91e13da8a2e17ead7eb24900f7d"],["/categories/jenkins/index.html","5fa7091fafdd88430a42ee8e1917db11"],["/categories/kubernetes/index.html","15108187061c385bb0153fc5d40da293"],["/categories/kubernetes/page/2/index.html","e1499a6aac08ef77d77007a97bf693ec"],["/categories/linux/index.html","1175509609b2d73b46fb1c2397a0e985"],["/categories/mysql/index.html","9d2d12a3f7ad74d691f4229c4e0db5a4"],["/categories/prometheus/index.html","3bd12377e683f9d6ea2a06ab567bcf5c"],["/categories/svn/index.html","84d107a946c78dbc29b2d3f30d9f8dbd"],["/css/background.css","2942635f3e138bf3f0652299cf376c84"],["/css/custom.css","d8f1986b73cb77a533b567a4cb45437b"],["/css/index.css","d260c62dab02c343c586afb634d6004a"],["/css/lantern.css","c8483fed1ae9927bc6fad5817ee8d7bd"],["/css/rightMenu.css","036623ed00b65cd7a5b31dffe2a25c4e"],["/css/universe.css","52c685572ce95860fe8ddf20fb03df83"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/pasted-0.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-1.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-10.png","5d0d6d8aac46e34b30092f808950a9d3"],["/images/pasted-11.png","0784299af846da4168cad054741957f6"],["/images/pasted-12.png","e258ff6c3291821a2b9bbc6a25574624"],["/images/pasted-13.png","000a03ee30cefc56d0749078cf04a949"],["/images/pasted-14.png","8e547d601142697e448fbb4019bbb06a"],["/images/pasted-15.png","950cc9a62554680e2f0570b97e564259"],["/images/pasted-16.png","1707596a28a9b697891bc718c96175ee"],["/images/pasted-17.png","887da59e5df5c2af9d32fea3ffd5e3f7"],["/images/pasted-18.png","5f724508b49e8e7ba1305062ef8e150a"],["/images/pasted-19.png","a47092a023a70b2427014e75873bd6cd"],["/images/pasted-2.png","0a20960a3ee7446d34a8c4cc687b7adf"],["/images/pasted-3.png","7fc1a4e3fe8ab621dc0aa0ad4309f266"],["/images/pasted-4.png","d15fb5188609b444b3f6710ecf9b139c"],["/images/pasted-5.png","ad234216c2159391c25636525c314e41"],["/images/pasted-6.png","9600a48f0f98bce154df36c0a4dbbdc5"],["/images/pasted-7.png","b42122e7904f38ca3e9a32908f872f36"],["/images/pasted-8.png","f5b4699a2bd89e9027d889247b9a1283"],["/images/pasted-9.png","1537c8048729105cddb53dfa80ef72d6"],["/img/12.png","62ac1ef86217d9ac116fa3d22d78dd9b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","e26ff9d7f5db82408a3b9d320a46ed48"],["/img/centos.png","8c9381c65647670beea0443be09905d8"],["/img/desktop.jpg","13c1182799ca5447fd6493c209ae3512"],["/img/dongman.jpg","27894a3d2f116821649423e50a41d0a7"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/harbor.png","4b104adfa004775ce392037ccc140b62"],["/img/harbor2.png","7545fc3e108b3d60cf61ee2010d6e841"],["/img/inotify.png","9ccfc735d97078fba061989fdd50fed1"],["/img/iptables.png","20f88af231b35ba15839a4cc779e2222"],["/img/jenkins.png","5401eb529f0b795e0e549182e516072f"],["/img/jenkins1.png","dc3b8e8cb59e5864c4f7fe2dc13eab9f"],["/img/kubernetes.png","3428de86fd4ecb4eca7e4f3d539c59e2"],["/img/mysql.jpg","331b83381bdb0c15668bfdcd266b1034"],["/img/prometheus.png","7ab7b7c19a98e723a5f2646669a01311"],["/img/sonarqube.png","5216669e0fbcc6c387dbf29a5321bfe0"],["/img/svn.png","895bfaeb2797f9635f660b5ee00946eb"],["/img/touxiang.png","b17d8c86cf0c70c30e7d7327dd5c7e4c"],["/img/wechat.jpg","2516cfa5ceda8f42ac6ba9efec9d88b3"],["/index.html","134bd49468941d15860b29816e006baa"],["/js/chocolate.js","4826caaa586e99d8fee8c5afbb3e70c0"],["/js/custom.js","529d0eeff76b63203edf3305bfc831bc"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/rightMenu.js","68db67f6c6ee6b8db0eb0ddd7e85d2ef"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","fafdd847299ee73d084aa36ced9bce97"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/live2dw/assets/moc/tororo.2048/texture_00.png","9bd791736cfc91b62670dee5f7fbd45c"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","a8f42fc3141f3ea3bd5da3c1bf3f24cc"],["/page/2/index.html","549e59c5beb27e93638a201b8c7ebe0d"],["/page/3/index.html","c9bb22d1dbd4717d76b4f458c3c945e0"],["/page/4/index.html","4c76c79fc852184a472558493de9a89f"],["/page/5/index.html","f381856b243474bda119383a37d683d4"],["/sw-register.js","ce36886eb64b4ed54bb6bc45f4fa1234"],["/tags/SonarQube/index.html","032a99a27e0b530620670424cbe75578"],["/tags/centos/index.html","4818fee22729f8d63fa02e2c079f164c"],["/tags/docker/index.html","057f02c5d47e162fe75b8c2296bfc057"],["/tags/grafana/index.html","5d453d47bd64e69824d04bebaed5696d"],["/tags/index.html","3a6d949719f28420cc36633f4ee3a74f"],["/tags/iptables/index.html","ffbd89c09d08dff20a8b2967c471cd55"],["/tags/jenkins/index.html","35f9077cbd7d9efdde1ed98bfff79b5a"],["/tags/kubernetes/index.html","a682aa078d18bb8702200d7e26bab26c"],["/tags/kubernetes/page/2/index.html","c340511f889fc3c542c1fb3baa968e6b"],["/tags/linux/index.html","7d0a6919913ed9fd03129a893cdca14f"],["/tags/mysql/index.html","87d33fa55f3ec92fd3a05053de1182ba"],["/tags/prometheus/index.html","552b7397a8b05d8387a8ee9848e61359"],["/tags/svn/index.html","4fe0a9b1ef72b92f86df876683bee8b8"],["/tags/云原生/index.html","eee0fcf064823a5ec579fa97d8c3814a"],["/tags/云原生/page/2/index.html","92628c2cfb84d2393976e2a70854d21f"],["/tags/阿里云/index.html","dc7a876e79fd0f05de04dd48f632a856"]];
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
