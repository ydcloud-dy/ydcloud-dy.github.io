/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/06/MySQL读写分离架构（MHA+Atlas）/index.html","79d27ae6525f548ae9a37d9ee5bc66c6"],["/2019/03/08/MySQL分布式架构-MyCAT/index.html","b5955ceaf550988db46ec949d533787e"],["/2019/03/14/MySQL物理备份工具使用（Percona Xtrabackup）PBK   XBK/index.html","34f88daf6fe199ae22772623379fde11"],["/2019/03/19/MySQL 备份恢复（mysqldump）/index.html","cc9db5591d33f7a29f552bb37f638087"],["/2019/03/23/MySQL主从复制（Replication）/index.html","c0399eb84934af534f27dda8188f7395"],["/2019/03/24/MySQL MHA 高可用/index.html","f4b49083dd1ea120e88b17a609f8f382"],["/2019/03/24/MySQL 优化/index.html","79e545badfc63610a1d16a9c93dc525d"],["/2019/03/26/MySQL 日志管理/index.html","64727876c534236708f793baf7cde149"],["/2019/06/10/扩容根分区/index.html","2862b1092f3976b3330e878c5c5475d0"],["/2019/09/23/SonarQube代码扫描/index.html","77131b6a4d944fa8a3d1ff85ee013cae"],["/2019/10/10/centos7生成随机数/index.html","2db0ae30546c57a9b5d5d0e02a736c29"],["/2020/02/14/promehteus+grafana/index.html","75cf4cd04a61f6dd5cc924db6e134883"],["/2020/05/02/pipeline分布式构建和pipline基础语法/index.html","2cdcfc33c96098a6f0a47681af59e5aa"],["/2020/05/13/iptables相关控制/index.html","c5b352e2f1f7f2d0c9cb415ae8ef7aef"],["/2020/09/08/centos7搭建svn服务器/index.html","057bc798c8bf074515492df0e5256c3d"],["/2020/10/15/ab命令压测/index.html","206391921633b021033d122079a6e0f5"],["/2021/03/06/服务器硬件压力测试/index.html","682e9494ba0232cf535ccc554570603d"],["/2021/08/24/rsync+inotify 实时备份/index.html","8b57f8c812b797af0eb10b632d82b90e"],["/2022/05/04/部署harbor服务器（https_http）/index.html","84fe7c1441fee89d894beeb5de90371a"],["/2022/05/23/记录服务器被挖矿的处理方法/index.html","1dabf2e206eee1e1c4f63a94896874f2"],["/2022/06/20/kubeasz 二进制安装k8s高可用集群/index.html","e819773214d4c51da871c67dd80e495b"],["/2022/06/21/kubernetes安装coreDNS组件/index.html","dc1d924b04d274a4ceaf8770665dfac4"],["/2022/06/23/kubernetes-ETCD/index.html","d7bc87f6f0497145068380ed1f974b57"],["/2022/06/24/kubeasz -etcd v3 API版本数据备份与恢复/index.html","bc16ce5d78efbce296edeecb9af82dbb"],["/2022/07/01/Deployment副本控制器/index.html","2f3ae18a36a75af1f3ed71d9ffe55a86"],["/2022/07/01/RC RS副本控制器/index.html","10d65c5920367a58d50af1b604b996b9"],["/2022/07/02/Configmap/index.html","6a3cd370c1329ad2920caaf9d660a64c"],["/2022/07/02/PV PVC/index.html","84581e8792e645641029eeaaa2382efa"],["/2022/07/03/Service控制器/index.html","42a16b4dc476c0b39307ffa273cc0438"],["/2022/07/03/Volume存储卷/index.html","3aa87bd27bac139f70f112bd931a684b"],["/2022/07/03/secret/index.html","afaa8f39ea8f05e0d4bd3d92d36e4f72"],["/2022/07/04/k8s-job cronjob/index.html","f74e7a8919d65c63e347c2655df52cd7"],["/2022/07/05/kubernetes HPA使用及测试/index.html","736666622f0eaf716f51662a7ac8784b"],["/2022/08/02/使用阿里云oss静态页面部署服务/index.html","c0c9101246e0ff0a2bae379e734a7ba7"],["/2022/08/04/基于centos7的Openssh版本升级/index.html","6dda17ccd146853fd7dc8411baa96b0d"],["/2022/08/13/防止内存碎片化/index.html","e328c6164d64160c3d639bc5f419de2d"],["/2022/08/15/Pod异常状态排错/index.html","c50c56816c45e7cfa88f6cc57c5abdc3"],["/2022/08/16/Jenkins用户权限控制插件——Role-based Authorization Strategy/index.html","1d3c9675526f7bf85bb8e31b89ffcd70"],["/2022/08/19/kubernetes磁盘爆满故障处理/index.html","7f3789ed1fb1e59dac7c49aede7247a9"],["/2022/08/23/分析 ExitCode 定位 Pod 异常退出原因 /index.html","1c5f559f97b7d44624efb6f031e81c78"],["/2022/08/23/容器进程主动退出原因/index.html","aefeb8901a31ef2ec0ab92ea98367026"],["/404.html","18218853dbf5150056ad5dcb13e3f4e2"],["/archives/2019/03/index.html","cb2e6a7f478c18de509872d6cd149312"],["/archives/2019/06/index.html","97b24b5784b4079b6cd9d0f947c8b550"],["/archives/2019/09/index.html","fec8a98d35b7e42d4e00f761231623fe"],["/archives/2019/10/index.html","4d36573059fe6a86d3abc4c309f0757f"],["/archives/2019/index.html","2dca1dc3f7102f6d4814f2e5cec29d78"],["/archives/2019/page/2/index.html","f4b1056bc3ed26a44868ba665ea466c1"],["/archives/2020/02/index.html","7703b6065d14e198044d043f9e32376b"],["/archives/2020/05/index.html","149d94308afa8f99a6e514aa38bfc67c"],["/archives/2020/09/index.html","7ef861d314cb85c0cfc045218a0fd7be"],["/archives/2020/10/index.html","4b8a03140de81b41839349d03e6176ab"],["/archives/2020/index.html","f0b361eddf846d78412e315a04f3a156"],["/archives/2021/03/index.html","9275f561ad38964789bb0fa790d8ce1c"],["/archives/2021/08/index.html","feb126823730d036a9ff1043f12a6fb6"],["/archives/2021/index.html","fca6123ecc7b4076d6838405221c57bc"],["/archives/2022/05/index.html","80b8ed2dcd53eebdf913243cba15c2a1"],["/archives/2022/06/index.html","7d1b2bc01027a6de3fbfc53ed923e6fb"],["/archives/2022/07/index.html","9239d061c48961af08e6b6528170c112"],["/archives/2022/08/index.html","d80c7bac388cd90adf228c31e2b1d1c7"],["/archives/2022/index.html","c78176e0cf9ea83e7cc6923e35c2c62d"],["/archives/2022/page/2/index.html","45d4434650b39047a73ce268da1a930e"],["/archives/2022/page/3/index.html","f030ae74295c319f0bebfced6fb2bbc9"],["/archives/index.html","30b9f49f02115e4182e36049c0b51fb2"],["/archives/page/2/index.html","3e50c37425074a7c0f7f52e3cd2fb0a0"],["/archives/page/3/index.html","e4e4f8161d9ae0ffe48915cafd56f040"],["/archives/page/4/index.html","b588c7f45306591046f398df929b2538"],["/archives/page/5/index.html","bbffb69464695d2a91e8374dabf7fa26"],["/categories/Docker/index.html","086bb9e31ea3290f6eecded8748f6d32"],["/categories/SonarQube/index.html","bf1f20f2b01ead4e301e99c8eec1130c"],["/categories/index.html","090e10258169f04e16b29fb9ddc54117"],["/categories/iptables/index.html","6992c5cc6e00b8b0e813aafc507b1bbb"],["/categories/jenkins/index.html","a97c054c87f797a9214820efe5ca8620"],["/categories/kubernetes/index.html","88edcb357923a2009242a37b438f491b"],["/categories/kubernetes/page/2/index.html","6127f6c9c7094ee9d8df0b03541f5b68"],["/categories/linux/index.html","aa5bbec5a3285c6222e45318d3106521"],["/categories/mysql/index.html","aabc6687254be194e320287f3e523345"],["/categories/prometheus/index.html","0fc3c7adf7ef31bcd72ed1ff12ca15be"],["/categories/svn/index.html","652d5719d0f46025a25c3c587efe8c7b"],["/css/background.css","2942635f3e138bf3f0652299cf376c84"],["/css/custom.css","d8f1986b73cb77a533b567a4cb45437b"],["/css/index.css","d260c62dab02c343c586afb634d6004a"],["/css/lantern.css","c8483fed1ae9927bc6fad5817ee8d7bd"],["/css/rightMenu.css","036623ed00b65cd7a5b31dffe2a25c4e"],["/css/universe.css","52c685572ce95860fe8ddf20fb03df83"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/pasted-0.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-1.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-10.png","5d0d6d8aac46e34b30092f808950a9d3"],["/images/pasted-11.png","0784299af846da4168cad054741957f6"],["/images/pasted-12.png","e258ff6c3291821a2b9bbc6a25574624"],["/images/pasted-13.png","000a03ee30cefc56d0749078cf04a949"],["/images/pasted-14.png","8e547d601142697e448fbb4019bbb06a"],["/images/pasted-15.png","950cc9a62554680e2f0570b97e564259"],["/images/pasted-16.png","1707596a28a9b697891bc718c96175ee"],["/images/pasted-17.png","887da59e5df5c2af9d32fea3ffd5e3f7"],["/images/pasted-18.png","5f724508b49e8e7ba1305062ef8e150a"],["/images/pasted-19.png","a47092a023a70b2427014e75873bd6cd"],["/images/pasted-2.png","0a20960a3ee7446d34a8c4cc687b7adf"],["/images/pasted-3.png","7fc1a4e3fe8ab621dc0aa0ad4309f266"],["/images/pasted-4.png","d15fb5188609b444b3f6710ecf9b139c"],["/images/pasted-5.png","ad234216c2159391c25636525c314e41"],["/images/pasted-6.png","9600a48f0f98bce154df36c0a4dbbdc5"],["/images/pasted-7.png","b42122e7904f38ca3e9a32908f872f36"],["/images/pasted-8.png","f5b4699a2bd89e9027d889247b9a1283"],["/images/pasted-9.png","1537c8048729105cddb53dfa80ef72d6"],["/img/12.png","62ac1ef86217d9ac116fa3d22d78dd9b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","e26ff9d7f5db82408a3b9d320a46ed48"],["/img/centos.png","8c9381c65647670beea0443be09905d8"],["/img/desktop.jpg","13c1182799ca5447fd6493c209ae3512"],["/img/dongman.jpg","27894a3d2f116821649423e50a41d0a7"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/harbor.png","4b104adfa004775ce392037ccc140b62"],["/img/harbor2.png","7545fc3e108b3d60cf61ee2010d6e841"],["/img/inotify.png","9ccfc735d97078fba061989fdd50fed1"],["/img/iptables.png","20f88af231b35ba15839a4cc779e2222"],["/img/jenkins.png","5401eb529f0b795e0e549182e516072f"],["/img/jenkins1.png","dc3b8e8cb59e5864c4f7fe2dc13eab9f"],["/img/kubernetes.png","3428de86fd4ecb4eca7e4f3d539c59e2"],["/img/mysql.jpg","331b83381bdb0c15668bfdcd266b1034"],["/img/prometheus.png","7ab7b7c19a98e723a5f2646669a01311"],["/img/sonarqube.png","5216669e0fbcc6c387dbf29a5321bfe0"],["/img/svn.png","895bfaeb2797f9635f660b5ee00946eb"],["/img/touxiang.png","b17d8c86cf0c70c30e7d7327dd5c7e4c"],["/img/wechat.jpg","2516cfa5ceda8f42ac6ba9efec9d88b3"],["/index.html","d31ade25349c2c942f1619f966b4d646"],["/js/chocolate.js","4826caaa586e99d8fee8c5afbb3e70c0"],["/js/custom.js","529d0eeff76b63203edf3305bfc831bc"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/rightMenu.js","68db67f6c6ee6b8db0eb0ddd7e85d2ef"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","fafdd847299ee73d084aa36ced9bce97"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/live2dw/assets/moc/tororo.2048/texture_00.png","9bd791736cfc91b62670dee5f7fbd45c"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","9e42172cc8b68999bcc01d623077ff50"],["/page/2/index.html","4ce8a00c20a55cc588295a42e64a6291"],["/page/3/index.html","e7796a81fe56be7e99195666a722969d"],["/page/4/index.html","0f596e51aa586328e46aed9b160d3cdc"],["/page/5/index.html","725a7a7dc6b2e53e4b0c2dd57c7036bf"],["/sw-register.js","1a45e0ccbe304dbc6227325852756c6f"],["/tags/SonarQube/index.html","2e42de2ffe0ba29556bf32c62e8fb78c"],["/tags/centos/index.html","cd1f32f93b78fe80d3a688a17229d9ff"],["/tags/docker/index.html","4beebbe3bb44f44e4c692769ce209604"],["/tags/grafana/index.html","a5c13748bb319724f3a18d34b05edb11"],["/tags/index.html","72f2b3b26931fe6807bfa6946d6574e8"],["/tags/iptables/index.html","1e9c2b307cc3fc7b723771a20589aee4"],["/tags/jenkins/index.html","9d21401592409d87d068c2b0561b55b7"],["/tags/kubernetes/index.html","1e09b32b9c6f0d91aae6c98f5abeb542"],["/tags/kubernetes/page/2/index.html","cd8051935864c9864d7eedadb0e24f18"],["/tags/linux/index.html","03097b49f12a82c904a932ce5f189212"],["/tags/mysql/index.html","793c6edd6057f3b0e6836e71e940f1f0"],["/tags/prometheus/index.html","60acd55ecffe409e77ac72b56d42dc3b"],["/tags/svn/index.html","ffe775384a02ea1682010ddbfa840834"],["/tags/云原生/index.html","527ac10118445b200cb122f59adce88f"],["/tags/云原生/page/2/index.html","773825268499cf683f9897823d985538"],["/tags/阿里云/index.html","7a498ab6bc63166240ff2d4c1725395f"]];
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
