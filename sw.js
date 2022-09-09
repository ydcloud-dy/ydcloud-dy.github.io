/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/06/MySQL读写分离架构（MHA+Atlas）/index.html","d12b33612edb763e5af5d8a301276d2a"],["/2019/03/08/MySQL分布式架构-MyCAT/index.html","f38207dd51bd74374302274b650ca960"],["/2019/03/14/MySQL物理备份工具使用（Percona Xtrabackup）PBK   XBK/index.html","6011e18e10b2eb0cd332dccd061c259b"],["/2019/03/19/MySQL 备份恢复（mysqldump）/index.html","89d825d1a11bcf6efa698e9b78da71bb"],["/2019/03/23/MySQL主从复制（Replication）/index.html","2f73298b1aef3020097526a1317eb55c"],["/2019/03/24/MySQL MHA 高可用/index.html","e0d2d8b0e0573bf21bcb5e2e09be243a"],["/2019/03/24/MySQL 优化/index.html","b1a08aa90284cb6e2aa300ad114ead4a"],["/2019/03/26/MySQL 日志管理/index.html","caa31a09feb9cb29fea8f37ef1cea221"],["/2019/06/10/扩容根分区/index.html","90883f536cf8998bb19420a528c20b4d"],["/2019/09/23/SonarQube代码扫描/index.html","5f7c16b9504f5a4cc7f8978028f0d14c"],["/2019/10/10/centos7生成随机数/index.html","cefbd15b6b7168acd761bb57e8ed20e5"],["/2020/02/14/promehteus+grafana/index.html","f9fb5685177d8b34fac75232220749e0"],["/2020/05/02/pipeline分布式构建和pipline基础语法/index.html","cf1b5c38dc4b8b2e9623ab913bb1e084"],["/2020/05/13/iptables相关控制/index.html","38afd223a708c9f6eef45bd237730436"],["/2020/09/08/centos7搭建svn服务器/index.html","aa15fd0b49af3a1e899af5a738d0b190"],["/2020/10/15/ab命令压测/index.html","b42f86fa4ddf8f32a3741967da6cdab9"],["/2021/08/24/rsync+inotify 实时备份/index.html","f92dda66034b4ce33d200fc520bf709d"],["/2022/05/04/部署harbor服务器（https_http）/index.html","8a595ddbd74bee5f2ae7e94c00df109f"],["/2022/06/20/kubeasz 二进制安装k8s高可用集群/index.html","6e06cef7ba9ffb0126b7953ccc795136"],["/2022/06/21/kubernetes安装coreDNS组件/index.html","5b56ebe08dd1a237c09b672e2939306d"],["/2022/06/23/kubernetes-ETCD/index.html","b63459cb139cbbfa0c2945150cd6e312"],["/2022/06/24/kubeasz -etcd v3 API版本数据备份与恢复/index.html","ca70ca2ff54f38d21ce569a0dd81e353"],["/2022/07/01/Deployment副本控制器/index.html","89907fce7346e08fec5d281b2bb944e0"],["/2022/07/01/RC RS副本控制器/index.html","6b2a1a82aa4da99c14ca6b6268be70d2"],["/2022/07/02/Configmap/index.html","53857660faa207f40ae277aef0927f66"],["/2022/07/02/PV PVC/index.html","75b4da0fdffabdf1aaa22497f4485b5d"],["/2022/07/03/Service控制器/index.html","7a9f780d98e1e444194bb8011637a46d"],["/2022/07/03/Volume存储卷/index.html","2587bdfd3bf4f136436a561d5b1a97ad"],["/2022/07/03/secret/index.html","4c2c6857973b8f0262059363219afb4e"],["/2022/07/04/k8s-job cronjob/index.html","3ed078caa74a07736c9380fbaded383f"],["/2022/07/05/kubernetes HPA使用及测试/index.html","22b9eccb118bc72fc5eb8f5d9ef12e0b"],["/2022/08/02/使用阿里云oss静态页面部署服务/index.html","5c24c5aa6bf831421593fd639e53df8e"],["/2022/08/04/基于centos7的Openssh版本升级/index.html","3fe74a01f78f0bae9dd7de6d75c7b824"],["/2022/08/16/Jenkins用户权限控制插件——Role-based Authorization Strategy/index.html","31d79dd57e7756cd7b2747820456ce96"],["/archives/2019/03/index.html","4ed8ee715b432daaa7fa87ff4df3853d"],["/archives/2019/06/index.html","e9cd13cf3201d4ac8e1f3b2f5bcdcb81"],["/archives/2019/09/index.html","128ac43aea28f92b6b57625fee7e7918"],["/archives/2019/10/index.html","9e67d746d25a691940c2cef495eef66d"],["/archives/2019/index.html","c9a8a7d4d8141f47a16af7cc1d56eacd"],["/archives/2019/page/2/index.html","f0545ef9ca34fcab87cc625071a42be2"],["/archives/2020/02/index.html","990ca2c945207febfbd7c276ca386d12"],["/archives/2020/05/index.html","7e9405c5edf519bcfab10e47b7884994"],["/archives/2020/09/index.html","351d62904970c107bec3078ffcb6dfe0"],["/archives/2020/10/index.html","9dff5201f78d0c1296b0b974d2482947"],["/archives/2020/index.html","71ea4dc585519b0cc612b8ca86d71245"],["/archives/2021/08/index.html","d3ea7fe1a923c2c0886a1b061ad3833f"],["/archives/2021/index.html","b8249921322b6bf7ff6568928feb6090"],["/archives/2022/05/index.html","0587d906aadd38edbdb420eb833dfff2"],["/archives/2022/06/index.html","e3e7b068ee18d185d5934c3b31454538"],["/archives/2022/07/index.html","3db1db6537e03ea5e5f97bffb38e789a"],["/archives/2022/08/index.html","2f55e5d3f4265cc1c9190b9a26f4b41e"],["/archives/2022/index.html","ae788cfdbcba73b1cb97c65ecb23e23f"],["/archives/2022/page/2/index.html","52130ac4e728892a16bbd412cc57fed6"],["/archives/index.html","384747228e7d939f4726223d5e1753e1"],["/archives/page/2/index.html","16a4afedacc244a0021de384501d46f2"],["/archives/page/3/index.html","0cf115d57a04557d86263bd2211ed85b"],["/archives/page/4/index.html","41b7238be1798a2881d97be0ae9f8e55"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Docker/index.html","9325214ffe208f9ffbac2d7a7ea32b9a"],["/categories/SonarQube/index.html","ebfc945f13164369aafcc9ad8a5b503d"],["/categories/index.html","afc4ddc3b15f941327fbc59a3cbcca10"],["/categories/iptables/index.html","8433ffde445dfae616831b7cc82ace5b"],["/categories/jenkins/index.html","ca8c809a87eacf738816b46fd40b1237"],["/categories/kubernetes/index.html","ed9e9660b82210de83528a1f224a99a5"],["/categories/kubernetes/page/2/index.html","58bf7ed3dc469fe9d29a3b27d3cdf541"],["/categories/linux/index.html","7df080d15bf0f4d99ef1e6ca0e3aae0e"],["/categories/mysql/index.html","6cef2961f7ccba09cc8f0089e56e174b"],["/categories/prometheus/index.html","754ed8f3e5f2476c9ea084b74d2f119f"],["/categories/svn/index.html","e2d9f300eff32721e89898e5b7f61d72"],["/css/background.css","2942635f3e138bf3f0652299cf376c84"],["/css/custom.css","d8f1986b73cb77a533b567a4cb45437b"],["/css/index.css","5b1fe0f7d0e912ed2fcc08d0ee2c45e9"],["/css/lantern.css","c8483fed1ae9927bc6fad5817ee8d7bd"],["/css/rightMenu.css","036623ed00b65cd7a5b31dffe2a25c4e"],["/css/universe.css","52c685572ce95860fe8ddf20fb03df83"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/pasted-0.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-1.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-10.png","5d0d6d8aac46e34b30092f808950a9d3"],["/images/pasted-11.png","0784299af846da4168cad054741957f6"],["/images/pasted-12.png","e258ff6c3291821a2b9bbc6a25574624"],["/images/pasted-13.png","000a03ee30cefc56d0749078cf04a949"],["/images/pasted-14.png","8e547d601142697e448fbb4019bbb06a"],["/images/pasted-15.png","950cc9a62554680e2f0570b97e564259"],["/images/pasted-16.png","1707596a28a9b697891bc718c96175ee"],["/images/pasted-17.png","887da59e5df5c2af9d32fea3ffd5e3f7"],["/images/pasted-18.png","5f724508b49e8e7ba1305062ef8e150a"],["/images/pasted-19.png","a47092a023a70b2427014e75873bd6cd"],["/images/pasted-2.png","0a20960a3ee7446d34a8c4cc687b7adf"],["/images/pasted-3.png","7fc1a4e3fe8ab621dc0aa0ad4309f266"],["/images/pasted-4.png","d15fb5188609b444b3f6710ecf9b139c"],["/images/pasted-5.png","ad234216c2159391c25636525c314e41"],["/images/pasted-6.png","9600a48f0f98bce154df36c0a4dbbdc5"],["/images/pasted-7.png","b42122e7904f38ca3e9a32908f872f36"],["/images/pasted-8.png","f5b4699a2bd89e9027d889247b9a1283"],["/images/pasted-9.png","1537c8048729105cddb53dfa80ef72d6"],["/img/12.png","62ac1ef86217d9ac116fa3d22d78dd9b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","e26ff9d7f5db82408a3b9d320a46ed48"],["/img/beijing.jpg","b3e047edc071811e4a08b34ad186469f"],["/img/beijing2.jpg","e776268eac348d47d7795906363fbc3b"],["/img/beijing3.jpg","f6e51a65d428d03cfe72dd0500be888c"],["/img/beijing4.jpg","4665636b9db94a609da946695a718b1b"],["/img/beijinga.jpg","2961dbd4986aa673bc4e53240e5bac25"],["/img/centos.png","21108b558fea54f6e6acaa00a49be309"],["/img/desktop.jpg","13c1182799ca5447fd6493c209ae3512"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/harbor.png","4b104adfa004775ce392037ccc140b62"],["/img/inotify.png","9ccfc735d97078fba061989fdd50fed1"],["/img/iptables.png","adbf0f41b1af8495c7f9330d88ae03af"],["/img/jenkins.png","38a775b0b873368c4efaa9bfb5760068"],["/img/jenkins1.png","dc3b8e8cb59e5864c4f7fe2dc13eab9f"],["/img/kubernetes.png","64a7709d18ce7f703f86108ab5fd844a"],["/img/mysql.jpg","0b91007118ea38da3474691047dd193f"],["/img/prometheus.jpg","d5cfe6539100dd3e7e5360602149d803"],["/img/sonarqube.png","965b7f7a941c46e10d3412fe294294dd"],["/img/svn.png","417b61fc1f0b02b68fc12a467bf6406c"],["/img/touxiang.png","b17d8c86cf0c70c30e7d7327dd5c7e4c"],["/img/wechat.jpg","2516cfa5ceda8f42ac6ba9efec9d88b3"],["/index.html","184b1e4d5b0166766d2010be2c992067"],["/js/chocolate.js","4826caaa586e99d8fee8c5afbb3e70c0"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/rightMenu.js","68db67f6c6ee6b8db0eb0ddd7e85d2ef"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","fafdd847299ee73d084aa36ced9bce97"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","67ce9000ae01ae0e91efc542c493f91f"],["/page/2/index.html","30cb2cd164e4ebf72203cb2f7878392d"],["/page/3/index.html","aea539b314a21fedeb44fe34e8fc7547"],["/page/4/index.html","190f51b8e2ff14550e796810a9e99eb3"],["/sw-register.js","7bc35749f127f8d75d6bb0e6115c604e"],["/tags/SonarQube/index.html","e1a286f64a7a70af1fec8047f66f9f8e"],["/tags/centos/index.html","f2fd4af9620c09f17991ebbe50900148"],["/tags/docker/index.html","d1ab528414043c1159adf5f03abba962"],["/tags/grafana/index.html","efe5180ec5ee3e1d7eac1f55e125267d"],["/tags/index.html","bbec0b578c09051fe74c8405787e657e"],["/tags/iptables/index.html","04c7badf73eb2778dcb5e5fec7dbe43f"],["/tags/jenkins/index.html","78d278f428006b303d99face91472bee"],["/tags/kubernetes/index.html","01d6b8eae66ddce902abd1f2c64d3a2d"],["/tags/kubernetes/page/2/index.html","4b3eb2218942e07724f87b60fb2fbaef"],["/tags/linux/index.html","58f1c4010b22a45c6608c3b146aebf7f"],["/tags/mysql/index.html","24eae31e7cf6f2758a838f638eed3b87"],["/tags/prometheus/index.html","150122d8af100be4aefa556c2a161100"],["/tags/svn/index.html","cab5a665dc14d30082602f0f6912dfd9"],["/tags/云原生/index.html","06ea098b5a0563f8e2c78856606f85d2"],["/tags/云原生/page/2/index.html","3cf94d3b3ed3d19fc4bb7600552073d8"],["/tags/阿里云/index.html","6c11c5932309fde19f044fef48334f3b"]];
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
