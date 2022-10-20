/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/06/MySQL读写分离架构（MHA+Atlas）/index.html","d775085e5ac945d678f41f8a2670e538"],["/2019/03/08/MySQL分布式架构-MyCAT/index.html","f937f2e77321c01599b02c8635faad32"],["/2019/03/14/MySQL物理备份工具使用（Percona Xtrabackup）PBK   XBK/index.html","1e95967c19aaad43a611b10d20461a5f"],["/2019/03/19/MySQL 备份恢复（mysqldump）/index.html","ac9a8e80a9f0f932b235cdf4f78e6b90"],["/2019/03/23/MySQL主从复制（Replication）/index.html","4db6a24c24424398259373f71761ba38"],["/2019/03/24/MySQL MHA 高可用/index.html","a0bef721a6022649bc5e0f6c262e5432"],["/2019/03/24/MySQL 优化/index.html","3a01e6d9fc121efef38c4b2e32687efb"],["/2019/03/26/MySQL 日志管理/index.html","bcbca764ba14060a6b20c6b454fa87cc"],["/2019/06/10/扩容根分区/index.html","8d56e1ec6ecd2a4e95266b0c87c191e2"],["/2019/09/23/SonarQube代码扫描/index.html","64193f018b2eb0da94983490c6d6263f"],["/2019/10/10/centos7生成随机数/index.html","8a034aa426812d69e41d3b8bccbc7a27"],["/2020/02/14/promehteus+grafana/index.html","93e4fe2aa1203f31e369590839332693"],["/2020/05/02/pipeline分布式构建和pipline基础语法/index.html","27780f2e60b9aa6d49eb807d80671d68"],["/2020/05/13/iptables相关控制/index.html","77d91304810f4c0d099eb524e7067719"],["/2020/09/08/centos7搭建svn服务器/index.html","bd247ebf49c5ae621e3ef10f24d5b958"],["/2020/10/15/ab命令压测/index.html","f1e6fe15e4da7c825f8ca84724bfcf0f"],["/2021/03/06/服务器硬件压力测试/index.html","4f70157470165a3d0efacbeeef91d121"],["/2021/08/24/rsync+inotify 实时备份/index.html","e00dc3d315fa935f768d8587399f48a2"],["/2022/05/04/部署harbor服务器（https_http）/index.html","4a1748cb08e0c1c8bb277f4d6b48b91c"],["/2022/05/23/记录服务器被挖矿的处理方法/index.html","252acc6267a5afbd480f39b60db0575d"],["/2022/06/20/kubeasz 二进制安装k8s高可用集群/index.html","f0fe44112793224a33f3981554fbd129"],["/2022/06/21/kubernetes安装coreDNS组件/index.html","c9d7fd1adf4b94a5428cb7ed54123742"],["/2022/06/23/kubernetes-ETCD/index.html","b5b23e5b148a903eb8e08afbac642896"],["/2022/06/24/kubeasz -etcd v3 API版本数据备份与恢复/index.html","5dafe8a0aa7fc5f0bc2fcd6c8ad9d610"],["/2022/07/01/Deployment副本控制器/index.html","8002189a21da55f86f6228ea7e083a70"],["/2022/07/01/RC RS副本控制器/index.html","9f5e42acedaffb9dd673cedcad947008"],["/2022/07/02/Configmap/index.html","28a9be0611f95b185ef2c9c64f654ad8"],["/2022/07/02/PV PVC/index.html","d125e3f191399aeac04e9f6e0f7f120b"],["/2022/07/03/Service控制器/index.html","11f7c19934cf514c399a1fe4826314d0"],["/2022/07/03/Volume存储卷/index.html","e16742921ddd15572e7662dbfeb43676"],["/2022/07/03/secret/index.html","48adf2fd175e408ac833590e3e906023"],["/2022/07/04/k8s-job cronjob/index.html","8a717863914a3b8ac37d673f03039812"],["/2022/07/05/kubernetes HPA使用及测试/index.html","a1fb2492eb767fbf52b78bddb86a719a"],["/2022/08/02/使用阿里云oss静态页面部署服务/index.html","aafddab29141441d05e3f19a170bfcd6"],["/2022/08/04/基于centos7的Openssh版本升级/index.html","a643ab2f7cab65111342c3ff1d2348f6"],["/2022/08/13/防止内存碎片化/index.html","7f88a281196e35640c0b29c0551a6af2"],["/2022/08/15/Pod异常状态排错/index.html","194ef1dfc2979b98dd0e824217f56262"],["/2022/08/16/Jenkins用户权限控制插件——Role-based Authorization Strategy/index.html","d48555aaac4a9c075b8a9de9eb29edd4"],["/2022/08/19/kubernetes磁盘爆满故障处理/index.html","ba6fc31150dc2e2f68ee6b24e73b862d"],["/2022/08/23/分析 ExitCode 定位 Pod 异常退出原因 /index.html","60682a376eebdfab653a8a2f1282f776"],["/2022/08/23/容器进程主动退出原因/index.html","614a03164c78f50482ac81b7fb2b4d84"],["/2022/08/29/test/index.html","c65a65f790c80e3c6b52e639ed6c8ff5"],["/404.html","05cdcd3ccf2cd5ef4c38725f45765fcf"],["/archives/2019/03/index.html","6d1109a5e34f77dce2025f2c2aac2652"],["/archives/2019/06/index.html","77267d01a4411a2a565d3c9b7a1ab421"],["/archives/2019/09/index.html","d33f16f1853e1c53aab2f1ebd528f9e1"],["/archives/2019/10/index.html","40a46e95e887ebe0c02e311d1dc9083f"],["/archives/2019/index.html","c41c7c8059dd6e7344cfb713f935054a"],["/archives/2019/page/2/index.html","74b42610c6dd9d5e8f6bd47c4a9917b8"],["/archives/2020/02/index.html","d1e0d97e66c4d71fccc1f13638f2ad7f"],["/archives/2020/05/index.html","a1967a323a1e7819b9bed08627950d17"],["/archives/2020/09/index.html","c249d436650ae378dc7825b61728571c"],["/archives/2020/10/index.html","f838c06124060d2c93d1bc68ef064a5b"],["/archives/2020/index.html","66b98e42c10f29afbca3df1a00aa4640"],["/archives/2021/03/index.html","55e9e150041b3c84c250b683e56123c3"],["/archives/2021/08/index.html","9e5971a9c3a560715092b5d134ecdff4"],["/archives/2021/index.html","bc3a951f25dad299edcbe888e6b89d70"],["/archives/2022/05/index.html","c303d26418cea90c8c41a9afbd6555da"],["/archives/2022/06/index.html","ef27fb5c6d416717ee5b29c205ec5f5a"],["/archives/2022/07/index.html","523286a7da6a59072466b5246cd8ba5b"],["/archives/2022/08/index.html","176b5453374465cabbec462334ffdb34"],["/archives/2022/index.html","4bf8e8b1316de89b42b1d5f908718149"],["/archives/2022/page/2/index.html","2889077e44113568d3aaa35f97b89f07"],["/archives/2022/page/3/index.html","b89e8947c9141823c38c903d65e7e04e"],["/archives/index.html","23302b89c6845cdbd4c2a9fded104a5a"],["/archives/page/2/index.html","4d0e2265f725db7336500d980888bbd4"],["/archives/page/3/index.html","148edc768f73ee8b2abbbbdc4240381a"],["/archives/page/4/index.html","8b8dca4d2954bc58e28313634c435148"],["/archives/page/5/index.html","33f72b89b8b2cd2268444f32e50b71da"],["/categories/Docker/index.html","43bf67c475c7ef2fbf1a357a218d7ee7"],["/categories/SonarQube/index.html","cf5542390595f80287f2785e8ecb07c9"],["/categories/index.html","112267daf336ec4adde0574808d1fb60"],["/categories/iptables/index.html","5e281a5ac801db706216fa6062bdf0b4"],["/categories/jenkins/index.html","d4edd6f5488854f13b189a8806c5c288"],["/categories/kubernetes/index.html","3f7f61cfd5d7a9af1e8ee303ac07d057"],["/categories/kubernetes/page/2/index.html","5a6486e53e0871e1d5f3ba68efc678b6"],["/categories/linux/index.html","51a9ec6b50af43fbf1ed4646c8f18669"],["/categories/mysql/index.html","d6868e1f695ade3f61ccc072d1851cb6"],["/categories/prometheus/index.html","29f748621724ad1e652241e45253458e"],["/categories/svn/index.html","ef4ae0d56ea19b7fa9279af65b3eb924"],["/css/background.css","2942635f3e138bf3f0652299cf376c84"],["/css/custom.css","d8f1986b73cb77a533b567a4cb45437b"],["/css/index.css","d260c62dab02c343c586afb634d6004a"],["/css/lantern.css","c8483fed1ae9927bc6fad5817ee8d7bd"],["/css/rightMenu.css","036623ed00b65cd7a5b31dffe2a25c4e"],["/css/universe.css","52c685572ce95860fe8ddf20fb03df83"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/pasted-0.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-1.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-10.png","5d0d6d8aac46e34b30092f808950a9d3"],["/images/pasted-11.png","0784299af846da4168cad054741957f6"],["/images/pasted-12.png","e258ff6c3291821a2b9bbc6a25574624"],["/images/pasted-13.png","000a03ee30cefc56d0749078cf04a949"],["/images/pasted-14.png","8e547d601142697e448fbb4019bbb06a"],["/images/pasted-15.png","950cc9a62554680e2f0570b97e564259"],["/images/pasted-16.png","1707596a28a9b697891bc718c96175ee"],["/images/pasted-17.png","887da59e5df5c2af9d32fea3ffd5e3f7"],["/images/pasted-18.png","5f724508b49e8e7ba1305062ef8e150a"],["/images/pasted-19.png","a47092a023a70b2427014e75873bd6cd"],["/images/pasted-2.png","0a20960a3ee7446d34a8c4cc687b7adf"],["/images/pasted-3.png","7fc1a4e3fe8ab621dc0aa0ad4309f266"],["/images/pasted-4.png","d15fb5188609b444b3f6710ecf9b139c"],["/images/pasted-5.png","ad234216c2159391c25636525c314e41"],["/images/pasted-6.png","9600a48f0f98bce154df36c0a4dbbdc5"],["/images/pasted-7.png","b42122e7904f38ca3e9a32908f872f36"],["/images/pasted-8.png","f5b4699a2bd89e9027d889247b9a1283"],["/images/pasted-9.png","1537c8048729105cddb53dfa80ef72d6"],["/img/12.png","62ac1ef86217d9ac116fa3d22d78dd9b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","e26ff9d7f5db82408a3b9d320a46ed48"],["/img/centos.png","8c9381c65647670beea0443be09905d8"],["/img/desktop.jpg","13c1182799ca5447fd6493c209ae3512"],["/img/dongman.jpg","27894a3d2f116821649423e50a41d0a7"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/harbor.png","4b104adfa004775ce392037ccc140b62"],["/img/harbor2.png","7545fc3e108b3d60cf61ee2010d6e841"],["/img/inotify.png","9ccfc735d97078fba061989fdd50fed1"],["/img/iptables.png","20f88af231b35ba15839a4cc779e2222"],["/img/jenkins.png","5401eb529f0b795e0e549182e516072f"],["/img/jenkins1.png","dc3b8e8cb59e5864c4f7fe2dc13eab9f"],["/img/kubernetes.png","3428de86fd4ecb4eca7e4f3d539c59e2"],["/img/mysql.jpg","331b83381bdb0c15668bfdcd266b1034"],["/img/prometheus.png","7ab7b7c19a98e723a5f2646669a01311"],["/img/sonarqube.png","5216669e0fbcc6c387dbf29a5321bfe0"],["/img/svn.png","895bfaeb2797f9635f660b5ee00946eb"],["/img/touxiang.png","b17d8c86cf0c70c30e7d7327dd5c7e4c"],["/img/wechat.jpg","2516cfa5ceda8f42ac6ba9efec9d88b3"],["/index.html","73dc2bfdeb639cd47b34b9cb4e92615e"],["/js/chocolate.js","4826caaa586e99d8fee8c5afbb3e70c0"],["/js/custom.js","529d0eeff76b63203edf3305bfc831bc"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/rightMenu.js","68db67f6c6ee6b8db0eb0ddd7e85d2ef"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","fafdd847299ee73d084aa36ced9bce97"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/live2dw/assets/moc/tororo.2048/texture_00.png","9bd791736cfc91b62670dee5f7fbd45c"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","20fcae5bce266ebf91963d27c65ef1e6"],["/page/2/index.html","becef2cc6551fd5601bbb7458b0718bf"],["/page/3/index.html","4f15e6f673467542a92aba014d3a1d7d"],["/page/4/index.html","3935ed3811cd9658b4260a4c435b609d"],["/page/5/index.html","e84edb8cf5cb688c1c09ce9768384470"],["/sw-register.js","3c4f7751c5c29c67ec5173837d0bc3a3"],["/tags/SonarQube/index.html","0df7e5d1f136f74f8091901f22a170ed"],["/tags/centos/index.html","de42f2c9d12779514c5b51d03a2538b6"],["/tags/docker/index.html","549eb7b5372e56212d611d8023a2aaa4"],["/tags/grafana/index.html","032af4f7cffd5983291ec51c7ef9841c"],["/tags/index.html","a1e98fd0594c34bdfac20d194420bd0f"],["/tags/iptables/index.html","741ee321920deefd154d836e7ebfd123"],["/tags/jenkins/index.html","0f039e5da6278bdf7b83a6d1504f61f2"],["/tags/kubernetes/index.html","e278844141c0a62737bf574b878e5cca"],["/tags/kubernetes/page/2/index.html","6d413899221f5a2c23aad727e50165fe"],["/tags/linux/index.html","659cdbdf95750c8876961d35471bb87a"],["/tags/mysql/index.html","5b2082afc4a635470265dcba4ae08ec2"],["/tags/prometheus/index.html","27784f3ab71cfd23989d434cc2f61c6b"],["/tags/svn/index.html","671f85070af22663cecba83ce216e273"],["/tags/云原生/index.html","a61e751f1297c3da6026b50821931c84"],["/tags/云原生/page/2/index.html","88150cfde5c9ed7e113c8c5ab4388f31"],["/tags/阿里云/index.html","ca1eb6e682334c3d546026d835b9ba29"]];
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
