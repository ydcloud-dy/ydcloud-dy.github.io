/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/06/MySQL读写分离架构（MHA+Atlas）/index.html","83ef4e9956c62bbb8333a670dfca7bc2"],["/2019/03/08/MySQL分布式架构-MyCAT/index.html","0e618696d9beb82feace32a3a17622c1"],["/2019/03/14/MySQL物理备份工具使用（Percona Xtrabackup）PBK   XBK/index.html","957553194eaa3120cf460a0a8a4413b1"],["/2019/03/19/MySQL 备份恢复（mysqldump）/index.html","fd4ad51391936ad2c143c177bfc39e11"],["/2019/03/23/MySQL主从复制（Replication）/index.html","50208bd89d45571b7adb5edcdb57beca"],["/2019/03/24/MySQL MHA 高可用/index.html","593a91560768f81164f1adc7652bf0a0"],["/2019/03/24/MySQL 优化/index.html","f9ee4a6e8d6d2b520517343fa16cbe94"],["/2019/03/26/MySQL 日志管理/index.html","cfadefc85e63753836714ee2003f2a00"],["/2019/06/10/扩容根分区/index.html","1b7170b5253ee9071d90ceb2432db50d"],["/2019/09/23/SonarQube代码扫描/index.html","4310bbc37e5ba6bd434f9b2c16239497"],["/2019/10/10/centos7生成随机数/index.html","c89c393527a87ddb6d90b0475070a1f2"],["/2020/02/14/promehteus+grafana/index.html","1e77759436e3b6f13a6a42533904f5ff"],["/2020/05/02/pipeline分布式构建和pipline基础语法/index.html","7a0475c60d06326858456d8ac1baa13f"],["/2020/05/13/iptables相关控制/index.html","be2465e3e5764a5d0f5df2b06430b0b7"],["/2020/09/08/centos7搭建svn服务器/index.html","f064eb02ce8305846cf8b5233e233a8b"],["/2020/10/15/ab命令压测/index.html","1b3db206959a171211ef630f91da42a0"],["/2021/08/24/rsync+inotify 实时备份/index.html","1dc4ef43458ceb9266da787e179079e4"],["/2022/05/04/部署harbor服务器（https_http）/index.html","fc564337f79fcd870ff421101a7376ba"],["/2022/06/20/kubeasz 二进制安装k8s高可用集群/index.html","2fb8450b971f284ac6c2ec3329ce7019"],["/2022/06/21/kubernetes安装coreDNS组件/index.html","e6c6537e36894f74afaddc838bf2aa94"],["/2022/06/23/kubernetes-ETCD/index.html","26032f694ece1bb01e03bd653789c414"],["/2022/06/24/kubeasz -etcd v3 API版本数据备份与恢复/index.html","f7a27f8af43743a47e2d6d4366d9aa3b"],["/2022/07/01/Deployment副本控制器/index.html","b2ee4c055de08cfbd067d09994cb5763"],["/2022/07/01/RC RS副本控制器/index.html","75e8944e2b8a45ae20fbe8f9b5c145c5"],["/2022/07/02/Configmap/index.html","f2387dc6fa00188d7f47267a59c82235"],["/2022/07/02/PV PVC/index.html","19046ef0eeb7ccf7d21b6b878f68f81c"],["/2022/07/03/Service控制器/index.html","d32862bea484b588dc5c52dc05d79daf"],["/2022/07/03/Volume存储卷/index.html","50437f9f587b30e12e8229bc1acafd3a"],["/2022/07/03/secret/index.html","5600dfda06c89a32bcffed157988d151"],["/2022/07/04/k8s-job cronjob/index.html","398cba94a6ddf98e080acc506f61312a"],["/2022/07/05/kubernetes HPA使用及测试/index.html","7d2106739e656e3f0e4fa6952858292c"],["/2022/08/02/使用阿里云oss静态页面部署服务/index.html","d0eb2d35cedeebbfd5f44df039f977cb"],["/2022/08/04/基于centos7的Openssh版本升级/index.html","db9520955c5e06858a3df84b8b3b9f83"],["/2022/08/16/Jenkins用户权限控制插件——Role-based Authorization Strategy/index.html","54689d21870bb851dfa63ed934a30a5e"],["/404.html","2d7437ba265336aa7c50750e81b5c4f7"],["/archives/2019/03/index.html","44593a1a88e4faec22d862ec2c0c614d"],["/archives/2019/06/index.html","b5513811bbaa645ee464c1773f5a48f6"],["/archives/2019/09/index.html","6b7def0b71c22592036ff6de11490d0c"],["/archives/2019/10/index.html","592583261cc1f3b35be6f0be6c510b78"],["/archives/2019/index.html","22fb8dba74c5513c645844a1a2110632"],["/archives/2019/page/2/index.html","f7f361829efcae49d47ae8b63be7d766"],["/archives/2020/02/index.html","d4472ad4aa18b25cefba02848ef1e260"],["/archives/2020/05/index.html","f11ed05a8daca3a0125a258119cfae1d"],["/archives/2020/09/index.html","2f271afa376f8ebc7cb8eabbe04a6d63"],["/archives/2020/10/index.html","0effe4a274f3d179e1680b2ece2e1fbe"],["/archives/2020/index.html","177d62384ff1f298a9a9731c67f67630"],["/archives/2021/08/index.html","218601072eef71ecf97f7bac22b01631"],["/archives/2021/index.html","f8c82c2ae73d7bc703df8db43b4c8928"],["/archives/2022/05/index.html","1c754a637cb7ac3064cea473f1fa168e"],["/archives/2022/06/index.html","df014334fe7014254030d60292099101"],["/archives/2022/07/index.html","0f09398a02bfb59dc168e3c9012d4bde"],["/archives/2022/08/index.html","de9d5597188e944d9ce36a762787fc77"],["/archives/2022/index.html","88dcdb9fc40c8e5ba3dabddb0f7156c4"],["/archives/2022/page/2/index.html","4b55d136571795b34c914fcd4826c6b9"],["/archives/index.html","028af4e9ee1f2215f2d3b9a7c1fd49cd"],["/archives/page/2/index.html","845755677d538cd2c897455ab7b8b811"],["/archives/page/3/index.html","a7ea3f558c9c85d0f3635b7d4cf2727f"],["/archives/page/4/index.html","08e4b8731691726d07f39b9aee5c6474"],["/categories/Docker/index.html","53e320df22c32496ea2a845aa3bdc73d"],["/categories/SonarQube/index.html","9999659d92605397928709fc0c67f4c0"],["/categories/index.html","1779cf3c5572251168f71b7366706e37"],["/categories/iptables/index.html","3dd12cec96ef3f11f72d65458a2a8ad9"],["/categories/jenkins/index.html","98b5d99b7bc25c82d302fcbb02cb8715"],["/categories/kubernetes/index.html","96111b9420f1704d6ed9ceb57ca98cd5"],["/categories/kubernetes/page/2/index.html","40151312dbe4a43d64aeb9510b931130"],["/categories/linux/index.html","6057317479913001dacd22468313a4be"],["/categories/mysql/index.html","d86be79e526735cf087667bd5a788f0f"],["/categories/prometheus/index.html","7d71cafe6803f75199085b4f296568be"],["/categories/svn/index.html","08ab5c2a0bd315d476b7c77e3cddf055"],["/css/background.css","2942635f3e138bf3f0652299cf376c84"],["/css/custom.css","d8f1986b73cb77a533b567a4cb45437b"],["/css/index.css","d260c62dab02c343c586afb634d6004a"],["/css/lantern.css","c8483fed1ae9927bc6fad5817ee8d7bd"],["/css/rightMenu.css","036623ed00b65cd7a5b31dffe2a25c4e"],["/css/universe.css","52c685572ce95860fe8ddf20fb03df83"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/pasted-0.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-1.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-10.png","5d0d6d8aac46e34b30092f808950a9d3"],["/images/pasted-11.png","0784299af846da4168cad054741957f6"],["/images/pasted-12.png","e258ff6c3291821a2b9bbc6a25574624"],["/images/pasted-13.png","000a03ee30cefc56d0749078cf04a949"],["/images/pasted-14.png","8e547d601142697e448fbb4019bbb06a"],["/images/pasted-15.png","950cc9a62554680e2f0570b97e564259"],["/images/pasted-16.png","1707596a28a9b697891bc718c96175ee"],["/images/pasted-17.png","887da59e5df5c2af9d32fea3ffd5e3f7"],["/images/pasted-18.png","5f724508b49e8e7ba1305062ef8e150a"],["/images/pasted-19.png","a47092a023a70b2427014e75873bd6cd"],["/images/pasted-2.png","0a20960a3ee7446d34a8c4cc687b7adf"],["/images/pasted-3.png","7fc1a4e3fe8ab621dc0aa0ad4309f266"],["/images/pasted-4.png","d15fb5188609b444b3f6710ecf9b139c"],["/images/pasted-5.png","ad234216c2159391c25636525c314e41"],["/images/pasted-6.png","9600a48f0f98bce154df36c0a4dbbdc5"],["/images/pasted-7.png","b42122e7904f38ca3e9a32908f872f36"],["/images/pasted-8.png","f5b4699a2bd89e9027d889247b9a1283"],["/images/pasted-9.png","1537c8048729105cddb53dfa80ef72d6"],["/img/12.png","62ac1ef86217d9ac116fa3d22d78dd9b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","e26ff9d7f5db82408a3b9d320a46ed48"],["/img/centos.png","8c9381c65647670beea0443be09905d8"],["/img/desktop.jpg","13c1182799ca5447fd6493c209ae3512"],["/img/dongman.jpg","27894a3d2f116821649423e50a41d0a7"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/harbor.png","4b104adfa004775ce392037ccc140b62"],["/img/harbor2.png","7545fc3e108b3d60cf61ee2010d6e841"],["/img/inotify.png","9ccfc735d97078fba061989fdd50fed1"],["/img/iptables.png","20f88af231b35ba15839a4cc779e2222"],["/img/jenkins.png","5401eb529f0b795e0e549182e516072f"],["/img/jenkins1.png","dc3b8e8cb59e5864c4f7fe2dc13eab9f"],["/img/kubernetes.png","3428de86fd4ecb4eca7e4f3d539c59e2"],["/img/mysql.jpg","331b83381bdb0c15668bfdcd266b1034"],["/img/prometheus.png","7ab7b7c19a98e723a5f2646669a01311"],["/img/sonarqube.png","5216669e0fbcc6c387dbf29a5321bfe0"],["/img/svn.png","895bfaeb2797f9635f660b5ee00946eb"],["/img/touxiang.png","b17d8c86cf0c70c30e7d7327dd5c7e4c"],["/img/wechat.jpg","2516cfa5ceda8f42ac6ba9efec9d88b3"],["/index.html","e901d7168c4c0fbeebfd4e22adb34ddd"],["/js/chocolate.js","4826caaa586e99d8fee8c5afbb3e70c0"],["/js/custom.js","529d0eeff76b63203edf3305bfc831bc"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/rightMenu.js","68db67f6c6ee6b8db0eb0ddd7e85d2ef"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","fafdd847299ee73d084aa36ced9bce97"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/live2dw/assets/moc/tororo.2048/texture_00.png","9bd791736cfc91b62670dee5f7fbd45c"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","747f8f1f3e669a87b5c1e2ccc5eb1059"],["/page/2/index.html","6eb1f55fd6db10e4440326e7d7613636"],["/page/3/index.html","e9f9b7d85c796b50000aadd605a6e33e"],["/page/4/index.html","e44ecc32ebde26049b24f79851f39a98"],["/sw-register.js","538f4227aec5d1c3806aba223b27ce99"],["/tags/SonarQube/index.html","2ad8539a027c098710a39096e6e128a9"],["/tags/centos/index.html","017c69cfa6670c2622d649be7f4e4b4e"],["/tags/docker/index.html","0fc99f9f2ec57d1f3da489aab735e08f"],["/tags/grafana/index.html","a8aac540cec193a2bf847ade4bc3dc9b"],["/tags/index.html","2e890b30b145ec42dab1215e47a4ce1a"],["/tags/iptables/index.html","c77f950906f7f827272eede94e08de21"],["/tags/jenkins/index.html","53145207de5ca179294c95ba5b57247c"],["/tags/kubernetes/index.html","45fdf6f7dbe4e6dc71578623c3b4df09"],["/tags/kubernetes/page/2/index.html","65238cb6468d987146bdda04c2992653"],["/tags/linux/index.html","93cd87de7e12d90230268014ab2f3c11"],["/tags/mysql/index.html","2c2512c995d0098ff54d9e2f58c56a8c"],["/tags/prometheus/index.html","a8a05049aeb597c1372e6435a2ce7111"],["/tags/svn/index.html","5e2e27bb29edb921e0d74fc43b476b7d"],["/tags/云原生/index.html","42539eec1db1b7cc87d1e4a6cb0a4ce7"],["/tags/云原生/page/2/index.html","e49837367f7fa27a3b729d9b9a7d1053"],["/tags/阿里云/index.html","2d30f22db1f07ef6d3980b814e8dbf6e"]];
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
