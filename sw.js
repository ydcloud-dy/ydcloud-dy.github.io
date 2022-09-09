/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/06/MySQL读写分离架构（MHA+Atlas）/index.html","96a792585d99e783fe340c4863767f9c"],["/2019/03/08/MySQL分布式架构-MyCAT/index.html","fa4a2dc53dd998543e3937a64f4b582a"],["/2019/03/14/MySQL物理备份工具使用（Percona Xtrabackup）PBK   XBK/index.html","39d9739ab9d80e607eab49580a6b3892"],["/2019/03/19/MySQL 备份恢复（mysqldump）/index.html","212c2c56d9497a036b1a2eb762719f1e"],["/2019/03/23/MySQL主从复制（Replication）/index.html","bcce0cef1db39b19d43845af9305f79e"],["/2019/03/24/MySQL MHA 高可用/index.html","80371326747e1e177d50f6e17d9c1cac"],["/2019/03/24/MySQL 优化/index.html","b5cbf3180471f92c8f97297b3c70410a"],["/2019/03/26/MySQL 日志管理/index.html","a0753e3f37a5613a4f6b0ace18b112d3"],["/2019/06/10/扩容根分区/index.html","07ecc65a99b9bd067aa643e593994b40"],["/2019/09/23/SonarQube代码扫描/index.html","bb4c0225816f2718e568b6fb40897191"],["/2019/10/10/centos7生成随机数/index.html","bee460a8d214f315714a4efcca806eea"],["/2020/02/14/promehteus+grafana/index.html","11ab429433320d16611914c9d19b4e85"],["/2020/05/02/pipeline分布式构建和pipline基础语法/index.html","f390a112ccfc85f3b22f260831db9704"],["/2020/05/13/iptables相关控制/index.html","0dec7824db91b7d2db9172d7d2beb453"],["/2020/09/08/centos7搭建svn服务器/index.html","50b6bbb1c3709df82bc3866931ce2821"],["/2020/10/15/ab命令压测/index.html","9a01a57be8992c8201a335f3af2cbe7b"],["/2021/08/24/rsync+inotify 实时备份/index.html","b6960f87c287fe4c97efc963e3506b14"],["/2022/05/04/部署harbor服务器（https_http）/index.html","8e557f19e53821939e55ca2aee75e442"],["/2022/06/20/kubeasz 二进制安装k8s高可用集群/index.html","4144e23493adc8f6d604bdd961d2465e"],["/2022/06/21/kubernetes安装coreDNS组件/index.html","eef649b9bbc950be3e825d037f7c52bd"],["/2022/06/23/kubernetes-ETCD/index.html","1858a9cf4d652acd5b4d8959b6afbf65"],["/2022/06/24/kubeasz -etcd v3 API版本数据备份与恢复/index.html","a0e8284a26b891ebedc1c874eae82f8a"],["/2022/07/01/Deployment副本控制器/index.html","3bb776bfbc909e743c5d4e6a2d01aabc"],["/2022/07/01/RC RS副本控制器/index.html","21944254a2874424510e2a8ae33a6778"],["/2022/07/02/Configmap/index.html","a7e98596210266ced1ff4cfc22187ece"],["/2022/07/02/PV PVC/index.html","34a6870700e20cf2eb4a9072f7d3cc61"],["/2022/07/03/Service控制器/index.html","4a68d93bffefe8f07bf138b144650661"],["/2022/07/03/Volume存储卷/index.html","ef88f80d15f1c8df1de1f6bbdf5ed7bf"],["/2022/07/03/secret/index.html","d1bd6e58507aef2f335b7f71e187e231"],["/2022/07/04/k8s-job cronjob/index.html","2ac7fd44dc4912367e08de0076f496f5"],["/2022/07/05/kubernetes HPA使用及测试/index.html","c23ff1210ec0e5af7ebc044f802fb4a9"],["/2022/08/02/使用阿里云oss静态页面部署服务/index.html","b01d558245c73242b6b4bbb1a8b0841c"],["/2022/08/04/基于centos7的Openssh版本升级/index.html","098bd5427f236e2cff6678e12637c747"],["/2022/08/16/Jenkins用户权限控制插件——Role-based Authorization Strategy/index.html","f6a7df63b9ab8c2643ad369be47053d9"],["/404.html","b1a9bf623f2b303549dd9c3ba27e6e41"],["/archives/2019/03/index.html","d0c95948a10eb62bcb39737e690c6345"],["/archives/2019/06/index.html","434f1b33cbb17833e11ca0e71c87490d"],["/archives/2019/09/index.html","60c5ccd88d2ad53bb89b0242fafc24b4"],["/archives/2019/10/index.html","9faf72e828f6309236aa6accf67ea30d"],["/archives/2019/index.html","c1d5d3580ae522f9807e528e0b0b5e79"],["/archives/2019/page/2/index.html","764b739bdef24fe3114de5082f117eb0"],["/archives/2020/02/index.html","3538381252d2e8227c9a7e64ac826b43"],["/archives/2020/05/index.html","52fd4a71e7be22bcd322f86d98e7614c"],["/archives/2020/09/index.html","73f41c0c89c5311a8be210b4085180a5"],["/archives/2020/10/index.html","b00bf6cc2a84514ac5639321949fef4c"],["/archives/2020/index.html","47405399b01bae9ae6038326c190e41b"],["/archives/2021/08/index.html","3ac29773a3a6d18adf6fdf8599d174eb"],["/archives/2021/index.html","24fedb6e6c2e2d725c84c61c01bdf22f"],["/archives/2022/05/index.html","7547deb92764853668d89725d715debc"],["/archives/2022/06/index.html","9d45bc9f237f8fd48b46ac8958400bdb"],["/archives/2022/07/index.html","f0e29f8802ea6fa5248f617cb516b20a"],["/archives/2022/08/index.html","fdb1da7f96e9613bb8e3991fb4993ebd"],["/archives/2022/index.html","2a68f9c388d8e6d02ba522d16f84b9b0"],["/archives/2022/page/2/index.html","6ef300b7242b973e0f30816599671d86"],["/archives/index.html","3833142e7493a4b6974a781db2d86fca"],["/archives/page/2/index.html","8577a768d182fadab91877fa22142567"],["/archives/page/3/index.html","a03afb5d4b080c1523fdf1552d73a5a1"],["/archives/page/4/index.html","9a796f3813d66d845154c3670b0dd12b"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Docker/index.html","744033e9b930e3bea5a80c7a3adb286a"],["/categories/SonarQube/index.html","a8912e201c742c394409dc696101c6ca"],["/categories/index.html","e98eba9e6b8462a715d0274afd211208"],["/categories/iptables/index.html","1339dcdaa3fd413e4f11da093f5d76cb"],["/categories/jenkins/index.html","8352f2ac26a13a910861bf58ce08892a"],["/categories/kubernetes/index.html","03a71896869395ce3aceae7a4b6306c3"],["/categories/kubernetes/page/2/index.html","341843bd3a5669dd4f95e38770809056"],["/categories/linux/index.html","a31afd4976cab8a6e273ceca9e1678dc"],["/categories/mysql/index.html","82b6f92c20ac081e03a51d4722b69485"],["/categories/prometheus/index.html","4034c9e80df407a93f7a51c856477734"],["/categories/svn/index.html","554dde5ac190eac3ac18b0393cb3c0ef"],["/css/background.css","2942635f3e138bf3f0652299cf376c84"],["/css/custom.css","d8f1986b73cb77a533b567a4cb45437b"],["/css/index.css","5b1fe0f7d0e912ed2fcc08d0ee2c45e9"],["/css/lantern.css","c8483fed1ae9927bc6fad5817ee8d7bd"],["/css/rightMenu.css","036623ed00b65cd7a5b31dffe2a25c4e"],["/css/universe.css","52c685572ce95860fe8ddf20fb03df83"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/pasted-0.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-1.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-10.png","5d0d6d8aac46e34b30092f808950a9d3"],["/images/pasted-11.png","0784299af846da4168cad054741957f6"],["/images/pasted-12.png","e258ff6c3291821a2b9bbc6a25574624"],["/images/pasted-13.png","000a03ee30cefc56d0749078cf04a949"],["/images/pasted-14.png","8e547d601142697e448fbb4019bbb06a"],["/images/pasted-15.png","950cc9a62554680e2f0570b97e564259"],["/images/pasted-16.png","1707596a28a9b697891bc718c96175ee"],["/images/pasted-17.png","887da59e5df5c2af9d32fea3ffd5e3f7"],["/images/pasted-18.png","5f724508b49e8e7ba1305062ef8e150a"],["/images/pasted-19.png","a47092a023a70b2427014e75873bd6cd"],["/images/pasted-2.png","0a20960a3ee7446d34a8c4cc687b7adf"],["/images/pasted-3.png","7fc1a4e3fe8ab621dc0aa0ad4309f266"],["/images/pasted-4.png","d15fb5188609b444b3f6710ecf9b139c"],["/images/pasted-5.png","ad234216c2159391c25636525c314e41"],["/images/pasted-6.png","9600a48f0f98bce154df36c0a4dbbdc5"],["/images/pasted-7.png","b42122e7904f38ca3e9a32908f872f36"],["/images/pasted-8.png","f5b4699a2bd89e9027d889247b9a1283"],["/images/pasted-9.png","1537c8048729105cddb53dfa80ef72d6"],["/img/12.png","62ac1ef86217d9ac116fa3d22d78dd9b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","e26ff9d7f5db82408a3b9d320a46ed48"],["/img/centos.png","8c9381c65647670beea0443be09905d8"],["/img/desktop.jpg","13c1182799ca5447fd6493c209ae3512"],["/img/dongman.jpg","27894a3d2f116821649423e50a41d0a7"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/harbor.png","4b104adfa004775ce392037ccc140b62"],["/img/harbor2.png","7545fc3e108b3d60cf61ee2010d6e841"],["/img/inotify.png","9ccfc735d97078fba061989fdd50fed1"],["/img/iptables.png","20f88af231b35ba15839a4cc779e2222"],["/img/jenkins.png","5401eb529f0b795e0e549182e516072f"],["/img/jenkins1.png","dc3b8e8cb59e5864c4f7fe2dc13eab9f"],["/img/kubernetes.png","3428de86fd4ecb4eca7e4f3d539c59e2"],["/img/mysql.jpg","331b83381bdb0c15668bfdcd266b1034"],["/img/prometheus.png","7ab7b7c19a98e723a5f2646669a01311"],["/img/sonarqube.png","5216669e0fbcc6c387dbf29a5321bfe0"],["/img/svn.png","895bfaeb2797f9635f660b5ee00946eb"],["/img/touxiang.png","b17d8c86cf0c70c30e7d7327dd5c7e4c"],["/img/wechat.jpg","2516cfa5ceda8f42ac6ba9efec9d88b3"],["/index.html","df1221bd1cfe7a18748761eb9565a9ef"],["/js/chocolate.js","4826caaa586e99d8fee8c5afbb3e70c0"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/rightMenu.js","68db67f6c6ee6b8db0eb0ddd7e85d2ef"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","fafdd847299ee73d084aa36ced9bce97"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/live2dw/assets/moc/tororo.2048/texture_00.png","9bd791736cfc91b62670dee5f7fbd45c"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","a0db2815c9c1f09958ef2971cc4ed8ec"],["/page/2/index.html","596a18fe7d8942849671b2ff83d429ae"],["/page/3/index.html","da54ede2b902f358a5360817f9284198"],["/page/4/index.html","7c7443a5a33af01025100b3073c97bd2"],["/sw-register.js","9423201067edb54d5f5643d57b844eee"],["/tags/SonarQube/index.html","92a0fe54678ca4718df806400f1fdc79"],["/tags/centos/index.html","fc2f1992573d8b557dd21a153999db8e"],["/tags/docker/index.html","95470b780ee2ffb074802465cbbe1d7d"],["/tags/grafana/index.html","9d805fe9db9fd6752932bf7e37c615b8"],["/tags/index.html","61b1bcb3a0b91214627fc57f381203c7"],["/tags/iptables/index.html","4085b3132efa15ac109a837c17b19482"],["/tags/jenkins/index.html","dbe2b8bc049cd17f7d61ec8b8da3e21d"],["/tags/kubernetes/index.html","00e044389b8dfa4f429c79aface9eeb7"],["/tags/kubernetes/page/2/index.html","c53d89859316ed94d8973aecea6fc765"],["/tags/linux/index.html","41e3f44677c5d423c803d26b3b6ee067"],["/tags/mysql/index.html","53e56c0acd6cc197e2a8c4336e10d323"],["/tags/prometheus/index.html","c823bbf412d5d398b923990da0d09f96"],["/tags/svn/index.html","31f6e84a336ec6460f2ee590fe3d666d"],["/tags/云原生/index.html","e6ba298511a49866312032575377a713"],["/tags/云原生/page/2/index.html","aa95f467e64fa629ac4f527dfc864a3a"],["/tags/阿里云/index.html","ed367dea648b095671285ddb62c95ab1"]];
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
