/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/06/MySQL读写分离架构（MHA+Atlas）/index.html","d775085e5ac945d678f41f8a2670e538"],["/2019/03/08/MySQL分布式架构-MyCAT/index.html","f937f2e77321c01599b02c8635faad32"],["/2019/03/14/MySQL物理备份工具使用（Percona Xtrabackup）PBK   XBK/index.html","1e95967c19aaad43a611b10d20461a5f"],["/2019/03/19/MySQL 备份恢复（mysqldump）/index.html","ac9a8e80a9f0f932b235cdf4f78e6b90"],["/2019/03/23/MySQL主从复制（Replication）/index.html","4db6a24c24424398259373f71761ba38"],["/2019/03/24/MySQL MHA 高可用/index.html","a0bef721a6022649bc5e0f6c262e5432"],["/2019/03/24/MySQL 优化/index.html","3a01e6d9fc121efef38c4b2e32687efb"],["/2019/03/26/MySQL 日志管理/index.html","bcbca764ba14060a6b20c6b454fa87cc"],["/2019/06/10/扩容根分区/index.html","fc9e51872b130e4dfc04d320b8555e91"],["/2019/09/23/SonarQube代码扫描/index.html","64193f018b2eb0da94983490c6d6263f"],["/2019/10/10/centos7生成随机数/index.html","8a034aa426812d69e41d3b8bccbc7a27"],["/2020/02/14/promehteus+grafana/index.html","93e4fe2aa1203f31e369590839332693"],["/2020/05/02/pipeline分布式构建和pipline基础语法/index.html","27780f2e60b9aa6d49eb807d80671d68"],["/2020/05/13/iptables相关控制/index.html","77d91304810f4c0d099eb524e7067719"],["/2020/09/08/centos7搭建svn服务器/index.html","f8ee8042db0c0411e71e4af39d9f9168"],["/2020/10/15/ab命令压测/index.html","f1e6fe15e4da7c825f8ca84724bfcf0f"],["/2021/03/06/服务器硬件压力测试/index.html","7c59994e91d766bf6a2a262e2bfe5255"],["/2021/08/24/rsync+inotify 实时备份/index.html","e00dc3d315fa935f768d8587399f48a2"],["/2022/05/04/部署harbor服务器（https_http）/index.html","4a1748cb08e0c1c8bb277f4d6b48b91c"],["/2022/05/23/记录服务器被挖矿的处理方法/index.html","252acc6267a5afbd480f39b60db0575d"],["/2022/06/20/kubeasz 二进制安装k8s高可用集群/index.html","7d2d9acbd4883589e4f15fe34e66606f"],["/2022/06/21/kubernetes安装coreDNS组件/index.html","1328e7e5f824d29be184da774214acc4"],["/2022/06/23/kubernetes-ETCD/index.html","9f90b8325f54b3debfcaa0f5a948eb8d"],["/2022/06/24/kubeasz -etcd v3 API版本数据备份与恢复/index.html","144c617e2d945bd3864240eb61ae15d5"],["/2022/07/01/Deployment副本控制器/index.html","3ce01850ae86a50482fa8e2313328249"],["/2022/07/01/RC RS副本控制器/index.html","9f5e42acedaffb9dd673cedcad947008"],["/2022/07/02/Configmap/index.html","7067acb8e3a9d91f8db4eb9dfb44f321"],["/2022/07/02/PV PVC/index.html","9a81fcd783bba561cd0672c363c83873"],["/2022/07/03/Service控制器/index.html","ec3f7d2fe73499842add5cef6f82515a"],["/2022/07/03/Volume存储卷/index.html","eca14919fa11ef57d6471ab3302988fe"],["/2022/07/03/secret/index.html","aa170726df902b47bbe42942e571847c"],["/2022/07/04/k8s-job cronjob/index.html","19a9d542f84c1b823a6add814205682d"],["/2022/07/05/kubernetes HPA使用及测试/index.html","28ab8d3b3bf0b248587a0ea3985e34ba"],["/2022/08/02/使用阿里云oss静态页面部署服务/index.html","aafddab29141441d05e3f19a170bfcd6"],["/2022/08/04/基于centos7的Openssh版本升级/index.html","a643ab2f7cab65111342c3ff1d2348f6"],["/2022/08/13/防止内存碎片化/index.html","e46ac100271eabee2ae45ba26eec3bd3"],["/2022/08/15/Pod异常状态排错/index.html","194ef1dfc2979b98dd0e824217f56262"],["/2022/08/16/Jenkins用户权限控制插件——Role-based Authorization Strategy/index.html","d48555aaac4a9c075b8a9de9eb29edd4"],["/2022/08/19/kubernetes磁盘爆满故障处理/index.html","8896af2ac47767c52e3f8f40eacbc1d8"],["/2022/08/23/分析 ExitCode 定位 Pod 异常退出原因 /index.html","c6dbadff821b5a5f7d7df42a49b0eb2a"],["/2022/08/23/容器进程主动退出原因/index.html","7f3fe1206be615b6b099ba6771bf5666"],["/2022/08/29/test/index.html","8084256138c6ccebba36378a71b86a8d"],["/404.html","1d35711c9c73f089e7c5854906866eca"],["/archives/2019/03/index.html","05d14919cadb4ab26344709050961b92"],["/archives/2019/06/index.html","46d3d90357789452795cfd772528b3b9"],["/archives/2019/09/index.html","4178ee402220683cfdc7d1ba03a80a14"],["/archives/2019/10/index.html","3ca88741e0c3357a19ffa90033be3a79"],["/archives/2019/index.html","3b68e7883bb1467dc41191a87c03ab03"],["/archives/2019/page/2/index.html","910ac7468a0b157195672864b7d23eed"],["/archives/2020/02/index.html","2418b7c1a9a622ac45d144efc1b663ef"],["/archives/2020/05/index.html","196799169b2af35443bb5b878e60f02f"],["/archives/2020/09/index.html","5fc277fb9d13b7242307a22dfb68f99d"],["/archives/2020/10/index.html","ef713f7d8961ecc9cd9085df586f4b0b"],["/archives/2020/index.html","859f7924600443454de0b66b171dd91e"],["/archives/2021/03/index.html","b8f8f3e73b3e1c1a17137c3df0669eda"],["/archives/2021/08/index.html","e24284441422b140e42a2f360d1688d2"],["/archives/2021/index.html","22989f4f44f0954fa9ee0486d1a06a6e"],["/archives/2022/05/index.html","1c911a9e1809dcf0690b2bc1dc8d682a"],["/archives/2022/06/index.html","32b345532c44bb5ddf3f7424e0611ad1"],["/archives/2022/07/index.html","e81f1cc72bc64a8d8f5f28318fbf167a"],["/archives/2022/08/index.html","6c8b7e1374d930e566092226f03ab91a"],["/archives/2022/index.html","5019c5e96ccf7fd5b9857583edebaf5c"],["/archives/2022/page/2/index.html","743330a5ef63e7b8394caf4131a27c45"],["/archives/2022/page/3/index.html","c1c150fcbde9f64fab979aa4f284e414"],["/archives/index.html","e7adb8e556b433cf39cbfa09ef239945"],["/archives/page/2/index.html","0a89fd7f7a220532e35c9293bb934361"],["/archives/page/3/index.html","9a4f83e0089e6015f22b8391b22a1488"],["/archives/page/4/index.html","8d50d580216bd400473d75d6eda2d7bf"],["/archives/page/5/index.html","0efe0e437fdcef75142368ab0ef96562"],["/categories/Docker/index.html","bcb2d660c41327422bdb920a16fd4a6a"],["/categories/SonarQube/index.html","40fecb1f5015aa4e9538e50bdf3d9874"],["/categories/index.html","90b40a522c923fa0e0fba3abf4e4421b"],["/categories/iptables/index.html","97794f683f5d98314ef33fcef4a88929"],["/categories/jenkins/index.html","881831d59075a0d3d307e5e2273b594b"],["/categories/kubernetes/index.html","d85ed394a8a4864d2c3430d4bac2bef1"],["/categories/kubernetes/page/2/index.html","cf5d9ae6d8759eb970d98e0baccb5f48"],["/categories/linux/index.html","e993f0547c1b546a22b9177a8a013cbc"],["/categories/mysql/index.html","33377daa7bbcb4c600c882633edec984"],["/categories/prometheus/index.html","bfe6b24ef3da61ae82e40652282f6a6c"],["/categories/svn/index.html","723ff4c5f726f7091fa9b53d85a4d654"],["/css/background.css","2942635f3e138bf3f0652299cf376c84"],["/css/custom.css","d8f1986b73cb77a533b567a4cb45437b"],["/css/index.css","d260c62dab02c343c586afb634d6004a"],["/css/lantern.css","c8483fed1ae9927bc6fad5817ee8d7bd"],["/css/rightMenu.css","036623ed00b65cd7a5b31dffe2a25c4e"],["/css/universe.css","52c685572ce95860fe8ddf20fb03df83"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/pasted-0.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-1.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-10.png","5d0d6d8aac46e34b30092f808950a9d3"],["/images/pasted-11.png","0784299af846da4168cad054741957f6"],["/images/pasted-12.png","e258ff6c3291821a2b9bbc6a25574624"],["/images/pasted-13.png","000a03ee30cefc56d0749078cf04a949"],["/images/pasted-14.png","8e547d601142697e448fbb4019bbb06a"],["/images/pasted-15.png","950cc9a62554680e2f0570b97e564259"],["/images/pasted-16.png","1707596a28a9b697891bc718c96175ee"],["/images/pasted-17.png","887da59e5df5c2af9d32fea3ffd5e3f7"],["/images/pasted-18.png","5f724508b49e8e7ba1305062ef8e150a"],["/images/pasted-19.png","a47092a023a70b2427014e75873bd6cd"],["/images/pasted-2.png","0a20960a3ee7446d34a8c4cc687b7adf"],["/images/pasted-3.png","7fc1a4e3fe8ab621dc0aa0ad4309f266"],["/images/pasted-4.png","d15fb5188609b444b3f6710ecf9b139c"],["/images/pasted-5.png","ad234216c2159391c25636525c314e41"],["/images/pasted-6.png","9600a48f0f98bce154df36c0a4dbbdc5"],["/images/pasted-7.png","b42122e7904f38ca3e9a32908f872f36"],["/images/pasted-8.png","f5b4699a2bd89e9027d889247b9a1283"],["/images/pasted-9.png","1537c8048729105cddb53dfa80ef72d6"],["/img/12.png","62ac1ef86217d9ac116fa3d22d78dd9b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","e26ff9d7f5db82408a3b9d320a46ed48"],["/img/centos.png","8c9381c65647670beea0443be09905d8"],["/img/desktop.jpg","13c1182799ca5447fd6493c209ae3512"],["/img/dongman.jpg","27894a3d2f116821649423e50a41d0a7"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/harbor.png","4b104adfa004775ce392037ccc140b62"],["/img/harbor2.png","7545fc3e108b3d60cf61ee2010d6e841"],["/img/inotify.png","9ccfc735d97078fba061989fdd50fed1"],["/img/iptables.png","20f88af231b35ba15839a4cc779e2222"],["/img/jenkins.png","5401eb529f0b795e0e549182e516072f"],["/img/jenkins1.png","dc3b8e8cb59e5864c4f7fe2dc13eab9f"],["/img/kubernetes.png","3428de86fd4ecb4eca7e4f3d539c59e2"],["/img/mysql.jpg","331b83381bdb0c15668bfdcd266b1034"],["/img/prometheus.png","7ab7b7c19a98e723a5f2646669a01311"],["/img/sonarqube.png","5216669e0fbcc6c387dbf29a5321bfe0"],["/img/svn.png","895bfaeb2797f9635f660b5ee00946eb"],["/img/touxiang.png","b17d8c86cf0c70c30e7d7327dd5c7e4c"],["/img/wechat.jpg","2516cfa5ceda8f42ac6ba9efec9d88b3"],["/index.html","26844f2d00a5ca86a03a15c83848b250"],["/js/chocolate.js","4826caaa586e99d8fee8c5afbb3e70c0"],["/js/custom.js","529d0eeff76b63203edf3305bfc831bc"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/rightMenu.js","68db67f6c6ee6b8db0eb0ddd7e85d2ef"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","fafdd847299ee73d084aa36ced9bce97"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/live2dw/assets/moc/tororo.2048/texture_00.png","9bd791736cfc91b62670dee5f7fbd45c"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","15c58a30a241ec5d1dceee5d32511e79"],["/page/2/index.html","d1ccef44c83f70129a48af106c890642"],["/page/3/index.html","27c5ad3d69b2e0f7ab837db9c5959529"],["/page/4/index.html","3c430b6a7b4f41edc14981256c1deca9"],["/page/5/index.html","dcf8839811c0e05e0aa61d3b11aa517a"],["/sw-register.js","4adc0e1f432bf489200ccb0e2b06e919"],["/tags/SonarQube/index.html","338200f487e37ce5721689a9bf5f44d3"],["/tags/centos/index.html","98e71456ebd67517a4a78cb480cb68c3"],["/tags/docker/index.html","85d19f190990c50624d0d74977393962"],["/tags/grafana/index.html","e56752c750da376507445b31a25547d5"],["/tags/index.html","bebf74cecd8008ac23c4390222d23db1"],["/tags/iptables/index.html","aea4a26efecda3d7592da74189fefb92"],["/tags/jenkins/index.html","a34cda2ccf7a6de58af2f00c197e6745"],["/tags/kubernetes/index.html","fa55ad0f227165565da6ebe4a4e710eb"],["/tags/kubernetes/page/2/index.html","ad4b8dc556bebf1bdee10ff762376fc6"],["/tags/linux/index.html","b9495b5aa53ffda45cee81f7726e9291"],["/tags/mysql/index.html","0ff1f679f100560b24624e65762cc775"],["/tags/prometheus/index.html","2a9928ac4cf7976a44b0058f8bfc828a"],["/tags/svn/index.html","8d9a66d75e058065c65b471baef3f888"],["/tags/云原生/index.html","da838aa0f30d843e953718dcdd4b8be3"],["/tags/云原生/page/2/index.html","478646b1feab68aecec463861b49b041"],["/tags/阿里云/index.html","c844cf2d3ab470550dfaad2a1069fae6"]];
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
