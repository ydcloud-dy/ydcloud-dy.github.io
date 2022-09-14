/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/06/MySQL读写分离架构（MHA+Atlas）/index.html","52766cfe451056a5136fc01c75853d80"],["/2019/03/08/MySQL分布式架构-MyCAT/index.html","e698e5dd33f1dce0cddd2f75bbe4669d"],["/2019/03/14/MySQL物理备份工具使用（Percona Xtrabackup）PBK   XBK/index.html","edfe7f02502b8ea7b7c7667b57fdee8c"],["/2019/03/19/MySQL 备份恢复（mysqldump）/index.html","8695ce1c589708fdffd0b4b760d64862"],["/2019/03/23/MySQL主从复制（Replication）/index.html","7b0dd80b0c7ba51689d721070f9c0291"],["/2019/03/24/MySQL MHA 高可用/index.html","b854d094ae8c03832f9a9334139b7b5d"],["/2019/03/24/MySQL 优化/index.html","37feacf7ff6da0d9273c2093b32f4f8d"],["/2019/03/26/MySQL 日志管理/index.html","41da47741cec921c26216ffc3baf9dc7"],["/2019/06/10/扩容根分区/index.html","8875f0fab77fbee50927186082fc7c7d"],["/2019/09/23/SonarQube代码扫描/index.html","685a03b7ccaba23ded97585278c931c4"],["/2019/10/10/centos7生成随机数/index.html","9d67e70726f34b497fb23cac5c13284e"],["/2020/02/14/promehteus+grafana/index.html","3cc248ad2904d13c83b6366e316c59c9"],["/2020/05/02/pipeline分布式构建和pipline基础语法/index.html","574cdba0b47dd6ee4a96c0ccb93fe138"],["/2020/05/13/iptables相关控制/index.html","df8446a5a692103aa7457f3d2d5c7cfe"],["/2020/09/08/centos7搭建svn服务器/index.html","d4d495b52a49483ddfca86c16c3a3ed4"],["/2020/10/15/ab命令压测/index.html","33fbd855fb9263406f853580167a80c4"],["/2021/08/24/rsync+inotify 实时备份/index.html","95c473a6c1bd4fab8f77487ac1cabf2d"],["/2022/05/04/部署harbor服务器（https_http）/index.html","5f9c670d82af20628fee9dca68469c5e"],["/2022/06/20/kubeasz 二进制安装k8s高可用集群/index.html","31310171fa1b1ea34bddc8945f4cbb75"],["/2022/06/21/kubernetes安装coreDNS组件/index.html","c301658c5980c1fefe973053587fd90e"],["/2022/06/23/kubernetes-ETCD/index.html","ebf1667d9ffe4b89c9f7210c95fb1852"],["/2022/06/24/kubeasz -etcd v3 API版本数据备份与恢复/index.html","630f08d914c0c5dcfa325dcfe0d8235a"],["/2022/07/01/Deployment副本控制器/index.html","c2f9648e72bf86d031916f50bd6714ee"],["/2022/07/01/RC RS副本控制器/index.html","e61cfffb2d5f4ade2e288ea760b0bfe8"],["/2022/07/02/Configmap/index.html","7021189a035656380c89448a19367e5f"],["/2022/07/02/PV PVC/index.html","82d60a971485a7bb4718a58882a5b1c3"],["/2022/07/03/Service控制器/index.html","d3d08318701d24ae99c6e5df063290c0"],["/2022/07/03/Volume存储卷/index.html","7c05a7c9cf126dd7de06ec01c26cf43e"],["/2022/07/03/secret/index.html","cefbbba79cf1758b1aa95b40d29c72af"],["/2022/07/04/k8s-job cronjob/index.html","5cccc2617e34398990c7b8a7a947e91a"],["/2022/07/05/kubernetes HPA使用及测试/index.html","45eccfb562ce333852dff498f4a54ef3"],["/2022/08/02/使用阿里云oss静态页面部署服务/index.html","0e640f997facc15ddaeb4ea0c3f0f6d1"],["/2022/08/04/基于centos7的Openssh版本升级/index.html","dff5fc7bc1314889c76c2c1893c1970b"],["/2022/08/16/Jenkins用户权限控制插件——Role-based Authorization Strategy/index.html","37b78a24ec3aa812ec527de95391520b"],["/404.html","558cdbac775c60d48cf6a18f92e16a54"],["/archives/2019/03/index.html","482de054044936466cbb344273811cec"],["/archives/2019/06/index.html","b2e540c2ab2e5aefaccfc4b14e040121"],["/archives/2019/09/index.html","28269ca523c47dd393d1af073d922499"],["/archives/2019/10/index.html","ae02c09ecf82543c00d875a69cd247a0"],["/archives/2019/index.html","f7fd76e04978c6aa8d4717408bd637c0"],["/archives/2019/page/2/index.html","f135c311f9589f667eec971b3855d1cb"],["/archives/2020/02/index.html","531ff16f1f6fed51d8bf55bd50935730"],["/archives/2020/05/index.html","2fb9645c31b33c0e95671855b4333292"],["/archives/2020/09/index.html","061405f5c461c6a08ef20068a9e46cb9"],["/archives/2020/10/index.html","f189b802d35cc6ca4ccee0502c65e4ce"],["/archives/2020/index.html","d491a7fa182cc7a072e330c2dde8a8b5"],["/archives/2021/08/index.html","5addd9e57f550a423d3330a7eea8fd4a"],["/archives/2021/index.html","4cf24784b2d0d4b628289387a22a31f2"],["/archives/2022/05/index.html","17f1ce6657d729557ff099fb120f6d1c"],["/archives/2022/06/index.html","f68f41916272b7d024c7f44e80b9625f"],["/archives/2022/07/index.html","fa9b247e595efc00614e318af1d8fe6b"],["/archives/2022/08/index.html","896dbae0695f1c7d9a54430ddd81b591"],["/archives/2022/index.html","7105267a1e291a38ef607b69e1380728"],["/archives/2022/page/2/index.html","d0e00c02d17c5618411287550aeeac3c"],["/archives/index.html","fd6d2a46b809df65b6243bbaae15c668"],["/archives/page/2/index.html","63f53f043a0e9f43c3f5dd718debbb5a"],["/archives/page/3/index.html","f84228b4a2b480088406111bcdd57657"],["/archives/page/4/index.html","8ad51ea554d404fe349c2714d3293dc9"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Docker/index.html","1ca5b5bf4e5604f7935ced71c7a545ba"],["/categories/SonarQube/index.html","aa47ca8e588187011578263491f9dc10"],["/categories/index.html","807de60f9214afc46c1aadfff20edb59"],["/categories/iptables/index.html","028d696c580284f2a66c40954d46b221"],["/categories/jenkins/index.html","63bf1ef265ed6ac263b31b483fccac56"],["/categories/kubernetes/index.html","de6536e9803862f0459cc0fc4fff1bd1"],["/categories/kubernetes/page/2/index.html","cbab2f1244bf4b1598d6ddee767d2121"],["/categories/linux/index.html","a2208cb4e85b0c392b45d7770183f604"],["/categories/mysql/index.html","167a91419f93d76241b253cfca505f97"],["/categories/prometheus/index.html","ab52bae20d1e6aaf9afcae97b786281b"],["/categories/svn/index.html","bc8df2ba94dbf44030ebc783663b619c"],["/css/background.css","2942635f3e138bf3f0652299cf376c84"],["/css/custom.css","d8f1986b73cb77a533b567a4cb45437b"],["/css/index.css","d260c62dab02c343c586afb634d6004a"],["/css/lantern.css","c8483fed1ae9927bc6fad5817ee8d7bd"],["/css/rightMenu.css","036623ed00b65cd7a5b31dffe2a25c4e"],["/css/universe.css","52c685572ce95860fe8ddf20fb03df83"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/pasted-0.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-1.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-10.png","5d0d6d8aac46e34b30092f808950a9d3"],["/images/pasted-11.png","0784299af846da4168cad054741957f6"],["/images/pasted-12.png","e258ff6c3291821a2b9bbc6a25574624"],["/images/pasted-13.png","000a03ee30cefc56d0749078cf04a949"],["/images/pasted-14.png","8e547d601142697e448fbb4019bbb06a"],["/images/pasted-15.png","950cc9a62554680e2f0570b97e564259"],["/images/pasted-16.png","1707596a28a9b697891bc718c96175ee"],["/images/pasted-17.png","887da59e5df5c2af9d32fea3ffd5e3f7"],["/images/pasted-18.png","5f724508b49e8e7ba1305062ef8e150a"],["/images/pasted-19.png","a47092a023a70b2427014e75873bd6cd"],["/images/pasted-2.png","0a20960a3ee7446d34a8c4cc687b7adf"],["/images/pasted-3.png","7fc1a4e3fe8ab621dc0aa0ad4309f266"],["/images/pasted-4.png","d15fb5188609b444b3f6710ecf9b139c"],["/images/pasted-5.png","ad234216c2159391c25636525c314e41"],["/images/pasted-6.png","9600a48f0f98bce154df36c0a4dbbdc5"],["/images/pasted-7.png","b42122e7904f38ca3e9a32908f872f36"],["/images/pasted-8.png","f5b4699a2bd89e9027d889247b9a1283"],["/images/pasted-9.png","1537c8048729105cddb53dfa80ef72d6"],["/img/12.png","62ac1ef86217d9ac116fa3d22d78dd9b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","e26ff9d7f5db82408a3b9d320a46ed48"],["/img/centos.png","8c9381c65647670beea0443be09905d8"],["/img/desktop.jpg","13c1182799ca5447fd6493c209ae3512"],["/img/dongman.jpg","27894a3d2f116821649423e50a41d0a7"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/harbor.png","4b104adfa004775ce392037ccc140b62"],["/img/harbor2.png","7545fc3e108b3d60cf61ee2010d6e841"],["/img/inotify.png","9ccfc735d97078fba061989fdd50fed1"],["/img/iptables.png","20f88af231b35ba15839a4cc779e2222"],["/img/jenkins.png","5401eb529f0b795e0e549182e516072f"],["/img/jenkins1.png","dc3b8e8cb59e5864c4f7fe2dc13eab9f"],["/img/kubernetes.png","3428de86fd4ecb4eca7e4f3d539c59e2"],["/img/mysql.jpg","331b83381bdb0c15668bfdcd266b1034"],["/img/prometheus.png","7ab7b7c19a98e723a5f2646669a01311"],["/img/sonarqube.png","5216669e0fbcc6c387dbf29a5321bfe0"],["/img/svn.png","895bfaeb2797f9635f660b5ee00946eb"],["/img/touxiang.png","b17d8c86cf0c70c30e7d7327dd5c7e4c"],["/img/wechat.jpg","2516cfa5ceda8f42ac6ba9efec9d88b3"],["/index.html","4e71d7352b0fdb3b49074013381fcee0"],["/js/chocolate.js","4826caaa586e99d8fee8c5afbb3e70c0"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/rightMenu.js","68db67f6c6ee6b8db0eb0ddd7e85d2ef"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","fafdd847299ee73d084aa36ced9bce97"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/live2dw/assets/moc/tororo.2048/texture_00.png","9bd791736cfc91b62670dee5f7fbd45c"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","c99d2b384d4b34133d6faf809654f548"],["/page/2/index.html","c1933305505ce29623a32746963a7218"],["/page/3/index.html","4d0fb4f19def76173d088523e82762dc"],["/page/4/index.html","234a28a3073065635850b8720785a22d"],["/sw-register.js","8f06ffb5b06c24b5d631cb729ed4187f"],["/tags/SonarQube/index.html","d766fa3e5818c9264ee0084f2558a7c4"],["/tags/centos/index.html","0629bb2053b0e51b50d144f9f5822bbb"],["/tags/docker/index.html","48730213bc3d19c3de42a780116ddf39"],["/tags/grafana/index.html","87761032faa8a6cd1719e48c093b9313"],["/tags/index.html","cc749e829440e190daaf55a04a220c41"],["/tags/iptables/index.html","869a76922364e3b2d498fcd2f475c3d2"],["/tags/jenkins/index.html","3e52c0097692cc9906813eb13232b34d"],["/tags/kubernetes/index.html","061c58ebb5f84843dda8dd4041522e7e"],["/tags/kubernetes/page/2/index.html","096285ffbf21d1aa31f44916eee24e2d"],["/tags/linux/index.html","2967e4c2915534a66d7460dc7de3ad34"],["/tags/mysql/index.html","0c8758a8ee83ba6c3062c3c463612c6c"],["/tags/prometheus/index.html","7fcc866a3010b32d2e06658b758d31f7"],["/tags/svn/index.html","0ccb209dcce5850eed1685371096e718"],["/tags/云原生/index.html","19b6813dfa1cc62f2f8def5d815f4d54"],["/tags/云原生/page/2/index.html","ac622c7875a148fb3d5f8fdfbcaac571"],["/tags/阿里云/index.html","1ccb02e4d6cfe9f8bfb686c7a0d4eb87"]];
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
