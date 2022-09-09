/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/06/MySQL读写分离架构（MHA+Atlas）/index.html","c6de343f22eea441754123716b9ccc0b"],["/2019/03/08/MySQL分布式架构-MyCAT/index.html","cc23f0ecacd92a67da1895f7ded84535"],["/2019/03/14/MySQL物理备份工具使用（Percona Xtrabackup）PBK   XBK/index.html","db56454db83c4542e5baf2e7a663e226"],["/2019/03/19/MySQL 备份恢复（mysqldump）/index.html","60036a8f3ffd98fb9f72ada9ceed9637"],["/2019/03/23/MySQL主从复制（Replication）/index.html","a98b75411aa970a953e04634d83b82df"],["/2019/03/24/MySQL MHA 高可用/index.html","7a4652735e96771de2c2c5e32b779291"],["/2019/03/24/MySQL 优化/index.html","e836bd0a1779c660581edbd54ab16911"],["/2019/03/26/MySQL 日志管理/index.html","26f0df504e7a53ad1980113a2ffe7196"],["/2019/06/10/扩容根分区/index.html","86f5bc41fc5b5c392385c82f1d78cfac"],["/2019/09/23/SonarQube代码扫描/index.html","5788e9a4aa823894d8cc9d545bf6b2b4"],["/2019/10/10/centos7生成随机数/index.html","629454994d94b13108c8688bf56e658d"],["/2020/02/14/promehteus+grafana/index.html","d0b075ec8e1c00a51730f81087591144"],["/2020/05/02/pipeline分布式构建和pipline基础语法/index.html","02282b3e491b9300721e5addcc23e3b3"],["/2020/05/13/iptables相关控制/index.html","3034aefe38f4da7a6d3b5a9c16691bad"],["/2020/09/08/centos7搭建svn服务器/index.html","ff19746e4be6a926d209cd510b7495b3"],["/2020/10/15/ab命令压测/index.html","46542584abaabc7b3d9c5c3fe152b0d3"],["/2021/08/24/rsync+inotify 实时备份/index.html","2d872f99f9a7cb478d2c3f77c16c49fc"],["/2022/05/04/部署harbor服务器（https_http）/index.html","df1e20d2d77acbabda02a11f28203c0b"],["/2022/06/20/kubeasz 二进制安装k8s高可用集群/index.html","13594cf73945bd732976d3101cdec0ac"],["/2022/06/21/kubernetes安装coreDNS组件/index.html","670ef51e4b6bf074099ab2f1b1bd3043"],["/2022/06/23/kubernetes-ETCD/index.html","cdbf7f012c15f9570a1982d00a864a9a"],["/2022/06/24/kubeasz -etcd v3 API版本数据备份与恢复/index.html","3e089abd44eddb461e3a95904889429e"],["/2022/07/01/Deployment副本控制器/index.html","4fe05ffce23c803565c497039a2ae947"],["/2022/07/01/RC RS副本控制器/index.html","3942bc6b2465a304c0892295cd70104d"],["/2022/07/02/Configmap/index.html","fedbab9f6bbd15258a50d0535886bb7f"],["/2022/07/02/PV PVC/index.html","14d7d68eb62706bb483a030df2c2698a"],["/2022/07/03/Service控制器/index.html","e29781023f4ec4ea539c5738a5534da8"],["/2022/07/03/Volume存储卷/index.html","a2ce1841d6179220a30959abebe92fa5"],["/2022/07/03/secret/index.html","122e748cf9b795d073e0428314a193ae"],["/2022/07/04/k8s-job cronjob/index.html","fb2eb00ec4c364fe0273af1b02f1c67d"],["/2022/07/05/kubernetes HPA使用及测试/index.html","b47a58e6ab10e8398a8d958377d79e82"],["/2022/08/02/使用阿里云oss静态页面部署服务/index.html","cedf5b19cf5de60be991eedc23e276ca"],["/2022/08/04/基于centos7的Openssh版本升级/index.html","a2a152b93e060193e085315ab3f2ae78"],["/2022/08/16/Jenkins用户权限控制插件——Role-based Authorization Strategy/index.html","ffabf6e5bf50e05049d77446c864ff5e"],["/404.html","9cd8963523439646a0eb08598fad1d75"],["/archives/2019/03/index.html","41bf51c1fcb9c45ca56fee151effb04b"],["/archives/2019/06/index.html","afc29d844230963d5949a3b01e112cf0"],["/archives/2019/09/index.html","12236078b822a673663fadc433b878c2"],["/archives/2019/10/index.html","1470ddf61a5883d2a3ed53de5a7bf69e"],["/archives/2019/index.html","0cc1aae6b009e1f68aa2492b35e464fb"],["/archives/2019/page/2/index.html","1609f6f71913026b22e2f5b3ae07f8ef"],["/archives/2020/02/index.html","260abeac61b5a6d9f433bdb31563a0dc"],["/archives/2020/05/index.html","c10d47872f2c62179c3c43510dc0648b"],["/archives/2020/09/index.html","6e5fba0b8962d9a7784e72d572212b97"],["/archives/2020/10/index.html","e48916ea2954ce01e94fd9814d283c03"],["/archives/2020/index.html","d99d2bd8f7db7af6b209e475346c4229"],["/archives/2021/08/index.html","a596aba1364b79ea7d7abff960969e2f"],["/archives/2021/index.html","a8893f640e7178ead4274008f1a9d5d1"],["/archives/2022/05/index.html","f0c912b2c24a5fff859a3dce150263a4"],["/archives/2022/06/index.html","217c979bf9696f87695df5046fa3caca"],["/archives/2022/07/index.html","01bf8999de6606427f2677bb035231e6"],["/archives/2022/08/index.html","7e4cef17151eac8e86d802dc832b9d20"],["/archives/2022/index.html","02739247d02e0b04c8405121dedae3fc"],["/archives/2022/page/2/index.html","c1a00d1e1bae6371fdf0dcf2d1fc3ddd"],["/archives/index.html","d18e0bd067957a6aec7b730044f8422b"],["/archives/page/2/index.html","f9e917c8dc4142d1c92c872028da34c6"],["/archives/page/3/index.html","925a128afe40f762ca2df5e1deb6339b"],["/archives/page/4/index.html","4a4d655d9eb0374da929f04734d7670a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Docker/index.html","757411db4838bdae63d069960489ab22"],["/categories/SonarQube/index.html","aa29cd0d8226ca87f7171627455bf83b"],["/categories/index.html","8116ca8d3104b62323d1e35a652c92cd"],["/categories/iptables/index.html","15d2d3695ca20ad079502d2d28ca0a1c"],["/categories/jenkins/index.html","40db79606e5a8fbe454057d16bf6446f"],["/categories/kubernetes/index.html","fbff945fa251756620e83c14708d088b"],["/categories/kubernetes/page/2/index.html","ddad0df2c1411b0082bbfc255449e8a3"],["/categories/linux/index.html","06c8991c83ae3540cbf6747679054e13"],["/categories/mysql/index.html","68470a0fc52236859f3418bdd355394f"],["/categories/prometheus/index.html","b2273386417e00552886ac27ecd4d87f"],["/categories/svn/index.html","1e0cb3e5ecc49bd15e44623511a7ebff"],["/css/background.css","2942635f3e138bf3f0652299cf376c84"],["/css/custom.css","d8f1986b73cb77a533b567a4cb45437b"],["/css/index.css","5b1fe0f7d0e912ed2fcc08d0ee2c45e9"],["/css/lantern.css","c8483fed1ae9927bc6fad5817ee8d7bd"],["/css/rightMenu.css","036623ed00b65cd7a5b31dffe2a25c4e"],["/css/universe.css","52c685572ce95860fe8ddf20fb03df83"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/pasted-0.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-1.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-10.png","5d0d6d8aac46e34b30092f808950a9d3"],["/images/pasted-11.png","0784299af846da4168cad054741957f6"],["/images/pasted-12.png","e258ff6c3291821a2b9bbc6a25574624"],["/images/pasted-13.png","000a03ee30cefc56d0749078cf04a949"],["/images/pasted-14.png","8e547d601142697e448fbb4019bbb06a"],["/images/pasted-15.png","950cc9a62554680e2f0570b97e564259"],["/images/pasted-16.png","1707596a28a9b697891bc718c96175ee"],["/images/pasted-17.png","887da59e5df5c2af9d32fea3ffd5e3f7"],["/images/pasted-18.png","5f724508b49e8e7ba1305062ef8e150a"],["/images/pasted-19.png","a47092a023a70b2427014e75873bd6cd"],["/images/pasted-2.png","0a20960a3ee7446d34a8c4cc687b7adf"],["/images/pasted-3.png","7fc1a4e3fe8ab621dc0aa0ad4309f266"],["/images/pasted-4.png","d15fb5188609b444b3f6710ecf9b139c"],["/images/pasted-5.png","ad234216c2159391c25636525c314e41"],["/images/pasted-6.png","9600a48f0f98bce154df36c0a4dbbdc5"],["/images/pasted-7.png","b42122e7904f38ca3e9a32908f872f36"],["/images/pasted-8.png","f5b4699a2bd89e9027d889247b9a1283"],["/images/pasted-9.png","1537c8048729105cddb53dfa80ef72d6"],["/img/12.png","62ac1ef86217d9ac116fa3d22d78dd9b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","e26ff9d7f5db82408a3b9d320a46ed48"],["/img/beijing.jpg","b3e047edc071811e4a08b34ad186469f"],["/img/beijing2.jpg","e776268eac348d47d7795906363fbc3b"],["/img/beijing3.jpg","f6e51a65d428d03cfe72dd0500be888c"],["/img/beijing4.jpg","4665636b9db94a609da946695a718b1b"],["/img/beijinga.jpg","2961dbd4986aa673bc4e53240e5bac25"],["/img/centos.png","8c9381c65647670beea0443be09905d8"],["/img/desktop.jpg","13c1182799ca5447fd6493c209ae3512"],["/img/dongman.jpg","27894a3d2f116821649423e50a41d0a7"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/harbor.png","4b104adfa004775ce392037ccc140b62"],["/img/harbor2.png","7545fc3e108b3d60cf61ee2010d6e841"],["/img/inotify.png","9ccfc735d97078fba061989fdd50fed1"],["/img/iptables.png","20f88af231b35ba15839a4cc779e2222"],["/img/jenkins.png","5401eb529f0b795e0e549182e516072f"],["/img/jenkins1.png","dc3b8e8cb59e5864c4f7fe2dc13eab9f"],["/img/kubernetes.png","3428de86fd4ecb4eca7e4f3d539c59e2"],["/img/kubernetes2.png","74e44747cf31937aa3ef770d294060d5"],["/img/mysql.jpg","331b83381bdb0c15668bfdcd266b1034"],["/img/prometheus.jpg","d5cfe6539100dd3e7e5360602149d803"],["/img/prometheus.png","7ab7b7c19a98e723a5f2646669a01311"],["/img/sonarqube.png","5216669e0fbcc6c387dbf29a5321bfe0"],["/img/svn.png","895bfaeb2797f9635f660b5ee00946eb"],["/img/touxiang.png","b17d8c86cf0c70c30e7d7327dd5c7e4c"],["/img/wechat.jpg","2516cfa5ceda8f42ac6ba9efec9d88b3"],["/index.html","b0ad53435d911d92deb48b184d15a17a"],["/js/chocolate.js","4826caaa586e99d8fee8c5afbb3e70c0"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/rightMenu.js","68db67f6c6ee6b8db0eb0ddd7e85d2ef"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","fafdd847299ee73d084aa36ced9bce97"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","e1ee830e3c442714bbcfbef487814200"],["/page/2/index.html","153fee00863443da39707c582fc798db"],["/page/3/index.html","cfe2cdb129c9c42bf13986bdcc56cd99"],["/page/4/index.html","7ef84a786daec179690055a620371c63"],["/sw-register.js","d40239061243042195f615b81f880604"],["/tags/SonarQube/index.html","77c3937cc4243d2afea9cbe66db6674f"],["/tags/centos/index.html","a90bceb65d698dce561061c311be7741"],["/tags/docker/index.html","b73a3db50097eabf42cb2abb7784a1e4"],["/tags/grafana/index.html","b02fa03e9acbe4f19ade95dc9cd7c375"],["/tags/index.html","e7fb1fbe2c8250b3a6de2de5dafc405b"],["/tags/iptables/index.html","a2b2990b8179edef67d060f06db8ef34"],["/tags/jenkins/index.html","216caeedb3144a084e7a1a393e841d8b"],["/tags/kubernetes/index.html","a4c57fa0c552f2d0074523fd862b0dab"],["/tags/kubernetes/page/2/index.html","2eb97bde06c19d9eb307216b3e10a882"],["/tags/linux/index.html","31168388e45e3dde865c18b7e07987cc"],["/tags/mysql/index.html","0172c8f622bdde6bc26203f1aa5670a0"],["/tags/prometheus/index.html","be4737e34e0a87f54f53e720d89505f2"],["/tags/svn/index.html","b608f8218633064b9956600ac1640540"],["/tags/云原生/index.html","0b073bcf8846c81049b2cea83c0e8012"],["/tags/云原生/page/2/index.html","38a5eaf21f68e537faaf1cfbeb098ee8"],["/tags/阿里云/index.html","de2d8f9d33b5618b10ba14f3e84ad258"]];
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
