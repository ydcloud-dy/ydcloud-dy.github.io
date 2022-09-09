/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/06/MySQL读写分离架构（MHA+Atlas）/index.html","21c487c26cd840697ed0d089944215f0"],["/2019/03/08/MySQL分布式架构-MyCAT/index.html","7babd5bf4b8884ea110687f1ec3ca742"],["/2019/03/14/MySQL物理备份工具使用（Percona Xtrabackup）PBK   XBK/index.html","d5430a1bd13603079fae58708919b4e9"],["/2019/03/19/MySQL 备份恢复（mysqldump）/index.html","2ad4509a03d590e4b55c09d39c43e888"],["/2019/03/23/MySQL主从复制（Replication）/index.html","a7f3e87076da4b22be80717f9ac640ef"],["/2019/03/24/MySQL MHA 高可用/index.html","d6277100be67a4a974c2df5499859ccb"],["/2019/03/24/MySQL 优化/index.html","589e921e5a63f79a46d4266c00f00e78"],["/2019/03/26/MySQL 日志管理/index.html","c8eddc5ba5cd7e7b83610780eca0ccfe"],["/2019/06/10/扩容根分区/index.html","bd4b149cdd22f7e9caaea75658b3d1c6"],["/2019/09/23/SonarQube代码扫描/index.html","f8878425a9bd8fdc54c5832986049ca6"],["/2019/10/10/centos7生成随机数/index.html","721ffbbc1a27cc954492a144af5bb744"],["/2020/02/14/promehteus+grafana/index.html","b6c8207ed84e68135dbdf79f7848e86a"],["/2020/05/02/pipeline分布式构建和pipline基础语法/index.html","792cd5b0ef5bc8f2234a58f0017e2a2b"],["/2020/05/13/iptables相关控制/index.html","449a045e90fcf0b14ae41e1cac0db936"],["/2020/09/08/centos7搭建svn服务器/index.html","03b9369f152c17ca9909614c7f7b4a67"],["/2020/10/15/ab命令压测/index.html","953e120b38d5ab9b2341e04c51d1b013"],["/2021/08/24/rsync+inotify 实时备份/index.html","d8b2eabbd203f69cb9c95793a239db18"],["/2022/05/04/部署harbor服务器（https_http）/index.html","bbe8f8e0aed0b7ec40173e039d551fa6"],["/2022/06/20/kubeasz 二进制安装k8s高可用集群/index.html","00570b9a25b8d74a01c66ba2c949a925"],["/2022/06/21/kubernetes安装coreDNS组件/index.html","cd7fdd3fae4e0cb1c83d7c509f420fb2"],["/2022/06/23/kubernetes-ETCD/index.html","29be7dc14aeb9e6a6c8e96c0cb5c0829"],["/2022/06/24/kubeasz -etcd v3 API版本数据备份与恢复/index.html","bc716c412cdb42be81eaac598561d21a"],["/2022/07/01/Deployment副本控制器/index.html","077c9a496389c7591ada88a763b52d09"],["/2022/07/01/RC RS副本控制器/index.html","e52cfd3463baf5233c7e9cedebbb7eca"],["/2022/07/02/Configmap/index.html","588963a3ae8f5daa91386826a94bd0e2"],["/2022/07/02/PV PVC/index.html","3acb5514128f0687ecc0ec5373d13a32"],["/2022/07/03/Service控制器/index.html","5804ceae3951c826a93a68f11dc56bc2"],["/2022/07/03/Volume存储卷/index.html","73a555a6a94509126da3b9b671b4fdb1"],["/2022/07/03/secret/index.html","4ff1c34acf66c419fb0d00c10dda72b6"],["/2022/07/04/k8s-job cronjob/index.html","67202b17bc466cddfdea316ef1fae0f6"],["/2022/07/05/kubernetes HPA使用及测试/index.html","ba7a284e61d1999f42416d4a86077849"],["/2022/08/02/使用阿里云oss静态页面部署服务/index.html","34a50b1c5628d3db2d3e0a35b9479482"],["/2022/08/04/基于centos7的Openssh版本升级/index.html","45e35fbf58821b85dff3f46296591e6e"],["/2022/08/16/Jenkins用户权限控制插件——Role-based Authorization Strategy/index.html","a241a4b96ef9d43ec4d659a47bb2f3f6"],["/404.html","49f03bc18f3a89ee64fbb20bc49092f4"],["/archives/2019/03/index.html","09f2f44f48af118f5edc3b6324f03899"],["/archives/2019/06/index.html","8f768bcda0670205b1ecb0a8ef6577d7"],["/archives/2019/09/index.html","4b05b328d20c9a0920fc11a3c0c5c7ad"],["/archives/2019/10/index.html","b19aa83daeeb00a7ef061d6d4ce7c5e1"],["/archives/2019/index.html","2cdc227a019cd8c9578232981f941949"],["/archives/2019/page/2/index.html","f68eaf794cf904b9343258a1b0320a38"],["/archives/2020/02/index.html","f58648aabf0bc8366860cd222edde2ac"],["/archives/2020/05/index.html","22acff00862d1ae2bd62df3c6f156870"],["/archives/2020/09/index.html","d2cc5a29fe1d0b42399aece7d98bf4fe"],["/archives/2020/10/index.html","6c0e1cb3a132f44c962524c7418b3952"],["/archives/2020/index.html","4a0ece0242f8017d9b2fbb57d5844998"],["/archives/2021/08/index.html","b5f7187347f8a74ee4af3117099e7216"],["/archives/2021/index.html","77436c1c3fa1abaee30f4436d27e6f54"],["/archives/2022/05/index.html","3b08a40b093b91acedc4e8397ae2fc9f"],["/archives/2022/06/index.html","b0a1c7aaa84a6616dd8ec237907bc8b9"],["/archives/2022/07/index.html","e7bf0b8d53d192d9b0e2057d6f4ae09b"],["/archives/2022/08/index.html","259ed0c4625b42aa3c6fd118c29299b3"],["/archives/2022/index.html","b707cef94889b9d34da0bf7baa7be836"],["/archives/2022/page/2/index.html","32e4f98ac8b970c6d90fb3348c5d5d7f"],["/archives/index.html","e6a3609261d92b03f87964a160abb8f6"],["/archives/page/2/index.html","734828e13e70cea2ae46be483dae3bc3"],["/archives/page/3/index.html","7d57d038e1a6762e53c7b8d65923d6f0"],["/archives/page/4/index.html","04aeedd270b7f130dff079ff4cb9e805"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Docker/index.html","4d2fe662786ff428a79a0b72d702ad13"],["/categories/SonarQube/index.html","4092297bfdae8f4f48fe06ac9ca37073"],["/categories/index.html","d3f166fd684cc34f7cea162c971b9e0e"],["/categories/iptables/index.html","da277bbcc681aeb6185e0ddedbc6f098"],["/categories/jenkins/index.html","ae17fb163889be7ae29addbad5782500"],["/categories/kubernetes/index.html","b10f8d45c85574d55ee66303ca18e3ed"],["/categories/kubernetes/page/2/index.html","e602ed6d896bb3d3802d8da658608562"],["/categories/linux/index.html","78fec1a1751dfe1acb5c836c0fb86131"],["/categories/mysql/index.html","fd3ad8cc265e6b3bbc77fee0f35c850c"],["/categories/prometheus/index.html","72b1dd6329efa40e940f0d5d31253906"],["/categories/svn/index.html","4f4b843e7790098a036c824b78150f11"],["/css/background.css","2942635f3e138bf3f0652299cf376c84"],["/css/custom.css","d8f1986b73cb77a533b567a4cb45437b"],["/css/index.css","5b1fe0f7d0e912ed2fcc08d0ee2c45e9"],["/css/lantern.css","c8483fed1ae9927bc6fad5817ee8d7bd"],["/css/rightMenu.css","036623ed00b65cd7a5b31dffe2a25c4e"],["/css/universe.css","52c685572ce95860fe8ddf20fb03df83"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/pasted-0.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-1.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-10.png","5d0d6d8aac46e34b30092f808950a9d3"],["/images/pasted-11.png","0784299af846da4168cad054741957f6"],["/images/pasted-12.png","e258ff6c3291821a2b9bbc6a25574624"],["/images/pasted-13.png","000a03ee30cefc56d0749078cf04a949"],["/images/pasted-14.png","8e547d601142697e448fbb4019bbb06a"],["/images/pasted-15.png","950cc9a62554680e2f0570b97e564259"],["/images/pasted-16.png","1707596a28a9b697891bc718c96175ee"],["/images/pasted-17.png","887da59e5df5c2af9d32fea3ffd5e3f7"],["/images/pasted-18.png","5f724508b49e8e7ba1305062ef8e150a"],["/images/pasted-19.png","a47092a023a70b2427014e75873bd6cd"],["/images/pasted-2.png","0a20960a3ee7446d34a8c4cc687b7adf"],["/images/pasted-3.png","7fc1a4e3fe8ab621dc0aa0ad4309f266"],["/images/pasted-4.png","d15fb5188609b444b3f6710ecf9b139c"],["/images/pasted-5.png","ad234216c2159391c25636525c314e41"],["/images/pasted-6.png","9600a48f0f98bce154df36c0a4dbbdc5"],["/images/pasted-7.png","b42122e7904f38ca3e9a32908f872f36"],["/images/pasted-8.png","f5b4699a2bd89e9027d889247b9a1283"],["/images/pasted-9.png","1537c8048729105cddb53dfa80ef72d6"],["/img/12.png","62ac1ef86217d9ac116fa3d22d78dd9b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","e26ff9d7f5db82408a3b9d320a46ed48"],["/img/centos.png","8c9381c65647670beea0443be09905d8"],["/img/desktop.jpg","13c1182799ca5447fd6493c209ae3512"],["/img/dongman.jpg","27894a3d2f116821649423e50a41d0a7"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/harbor.png","4b104adfa004775ce392037ccc140b62"],["/img/harbor2.png","7545fc3e108b3d60cf61ee2010d6e841"],["/img/inotify.png","9ccfc735d97078fba061989fdd50fed1"],["/img/iptables.png","20f88af231b35ba15839a4cc779e2222"],["/img/jenkins.png","5401eb529f0b795e0e549182e516072f"],["/img/jenkins1.png","dc3b8e8cb59e5864c4f7fe2dc13eab9f"],["/img/kubernetes.png","3428de86fd4ecb4eca7e4f3d539c59e2"],["/img/mysql.jpg","331b83381bdb0c15668bfdcd266b1034"],["/img/prometheus.png","7ab7b7c19a98e723a5f2646669a01311"],["/img/sonarqube.png","5216669e0fbcc6c387dbf29a5321bfe0"],["/img/svn.png","895bfaeb2797f9635f660b5ee00946eb"],["/img/touxiang.png","b17d8c86cf0c70c30e7d7327dd5c7e4c"],["/img/wechat.jpg","2516cfa5ceda8f42ac6ba9efec9d88b3"],["/index.html","98c0cbb334198ee81dd2156449527ff9"],["/js/chocolate.js","4826caaa586e99d8fee8c5afbb3e70c0"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/rightMenu.js","68db67f6c6ee6b8db0eb0ddd7e85d2ef"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","fafdd847299ee73d084aa36ced9bce97"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/live2dw/assets/moc/hibiki.2048/texture_00.png","730252369524e7a1c21308cb84acd465"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","dce6a4ef4473eedcae642c449db8314d"],["/page/2/index.html","59066b0d9c9c06cf192ead82abab0b78"],["/page/3/index.html","cfda465e22c7b639fe92c4efc11e38f0"],["/page/4/index.html","51d38037598197abea7942ba73b074d2"],["/sw-register.js","23c1ae411b94dfe34e23439f2796c11b"],["/tags/SonarQube/index.html","089929e5354839792cddd168271a8877"],["/tags/centos/index.html","9c26bf959dfc87c6777acd763d3e4121"],["/tags/docker/index.html","5af2c5e78bfba8442568b52b2d0ecb38"],["/tags/grafana/index.html","f198e19cbf5846ec373aa62bc8cf4143"],["/tags/index.html","4f3964a1ed599aca5c6f93ce4faeb738"],["/tags/iptables/index.html","9c40b08e6c98fbd4901623b0faccfd41"],["/tags/jenkins/index.html","f87a7e9a983b5b6a9d84783567d6e9d1"],["/tags/kubernetes/index.html","b4e82f048e51c40c991604171afd7638"],["/tags/kubernetes/page/2/index.html","7498d906895c4cf8a417e46d690106e3"],["/tags/linux/index.html","df7241f281a80d9494b46d5f194bfdd8"],["/tags/mysql/index.html","dad621a7e1ca4064d6e43fb231b62db0"],["/tags/prometheus/index.html","d6b50f92a6ee99f8e59a39a83ba760d7"],["/tags/svn/index.html","aa70d0623be089dab7e5a4bdf2861c19"],["/tags/云原生/index.html","579f0b90bcc04ba6db218615aeb8d7ea"],["/tags/云原生/page/2/index.html","0bbf851549234c5a026e5d49888969d7"],["/tags/阿里云/index.html","863af2c5c76773f6ba0e0408f364d757"]];
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
