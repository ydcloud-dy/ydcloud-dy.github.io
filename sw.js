/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/06/MySQL读写分离架构（MHA+Atlas）/index.html","7f190245667e32bd3463477aa4b60cb5"],["/2019/03/08/MySQL分布式架构-MyCAT/index.html","88265919c889a3759284d45907ba8809"],["/2019/03/14/MySQL物理备份工具使用（Percona Xtrabackup）PBK   XBK/index.html","895f5d58eadd3f285088764a3a6c055e"],["/2019/03/19/MySQL 备份恢复（mysqldump）/index.html","1003ac97c51294a4402b11988d0b7232"],["/2019/03/23/MySQL主从复制（Replication）/index.html","a5d9b70b3d4fd1bb2c48a971044fd4fe"],["/2019/03/24/MySQL MHA 高可用/index.html","c718b7d5c6033c693a7cd8563f8112f3"],["/2019/03/24/MySQL 优化/index.html","3cfbf2aa5af401cf56eae1e7e7c30ebe"],["/2019/03/26/MySQL 日志管理/index.html","0147503bd6cfa5f0574210c6c2c3ed82"],["/2019/06/10/扩容根分区/index.html","bd4b149cdd22f7e9caaea75658b3d1c6"],["/2019/09/23/SonarQube代码扫描/index.html","f8878425a9bd8fdc54c5832986049ca6"],["/2019/10/10/centos7生成随机数/index.html","721ffbbc1a27cc954492a144af5bb744"],["/2020/02/14/promehteus+grafana/index.html","b6c8207ed84e68135dbdf79f7848e86a"],["/2020/05/02/pipeline分布式构建和pipline基础语法/index.html","792cd5b0ef5bc8f2234a58f0017e2a2b"],["/2020/05/13/iptables相关控制/index.html","449a045e90fcf0b14ae41e1cac0db936"],["/2020/09/08/centos7搭建svn服务器/index.html","03b9369f152c17ca9909614c7f7b4a67"],["/2020/10/15/ab命令压测/index.html","953e120b38d5ab9b2341e04c51d1b013"],["/2021/08/24/rsync+inotify 实时备份/index.html","d8b2eabbd203f69cb9c95793a239db18"],["/2022/05/04/部署harbor服务器（https_http）/index.html","bbe8f8e0aed0b7ec40173e039d551fa6"],["/2022/06/20/kubeasz 二进制安装k8s高可用集群/index.html","3b875005209d4a128746442342e078be"],["/2022/06/21/kubernetes安装coreDNS组件/index.html","f709ef01a7d84c81e7285491397f9ea2"],["/2022/06/23/kubernetes-ETCD/index.html","f5c7c5d060864482eb6b72352638f443"],["/2022/06/24/kubeasz -etcd v3 API版本数据备份与恢复/index.html","7b24596aba1ea7cf3da58a2c03974cee"],["/2022/07/01/Deployment副本控制器/index.html","4eb09b16e28239b267430cf98a0f883f"],["/2022/07/01/RC RS副本控制器/index.html","0fc154c0affb756f89422ba7b53762e2"],["/2022/07/02/Configmap/index.html","dd8021b3d51c8ce1c67a3af3961e230c"],["/2022/07/02/PV PVC/index.html","79531fa581c9e72bef1bcde9a29d6785"],["/2022/07/03/Service控制器/index.html","4b259cc3aa84e6586fc54d6a25c5fbf9"],["/2022/07/03/Volume存储卷/index.html","f112684ab1c24181bdf6798c8a79960d"],["/2022/07/03/secret/index.html","33fe11fdcfd196292a63b18bd96508b6"],["/2022/07/04/k8s-job cronjob/index.html","2fa3801b616df76b2da93ec204eabde8"],["/2022/07/05/kubernetes HPA使用及测试/index.html","10ac0305f0ed28623d83075489cd9e1d"],["/2022/08/02/使用阿里云oss静态页面部署服务/index.html","34a50b1c5628d3db2d3e0a35b9479482"],["/2022/08/04/基于centos7的Openssh版本升级/index.html","45e35fbf58821b85dff3f46296591e6e"],["/2022/08/16/Jenkins用户权限控制插件——Role-based Authorization Strategy/index.html","a241a4b96ef9d43ec4d659a47bb2f3f6"],["/404.html","83a55c259d66eebeeced46c453590cef"],["/archives/2019/03/index.html","040c363de224ce3a02720f06f4d34b58"],["/archives/2019/06/index.html","728c079f06990cb9c2070bf78bb62cdb"],["/archives/2019/09/index.html","186fedb7339f4a87e73e1e15a82d442e"],["/archives/2019/10/index.html","9a1fcb9eff582285671606bd01d96da2"],["/archives/2019/index.html","332b380a2f606b40dd48572340436531"],["/archives/2019/page/2/index.html","46573700c0cce74b7482ef9ede917fba"],["/archives/2020/02/index.html","454638fa69b311fdf3a5918b6616ac47"],["/archives/2020/05/index.html","3828431120c6be36edc5f9fd351b1712"],["/archives/2020/09/index.html","73e703c61f7345a31b106c35cce2f740"],["/archives/2020/10/index.html","2fc8f2bac71dc563118f9e7872930dd3"],["/archives/2020/index.html","6919544612cec509e6dfa9f31139ba96"],["/archives/2021/08/index.html","a926ff30c1067b495eb12855bbb2c963"],["/archives/2021/index.html","f7325bcb32710a3d736d5d21164c1b8c"],["/archives/2022/05/index.html","5435eb561aa92c96e1edb06ea7f79c05"],["/archives/2022/06/index.html","9d98d9e1c1f3156cc2c831449e3916fa"],["/archives/2022/07/index.html","a470a565f5557638ae0eea73bd65d263"],["/archives/2022/08/index.html","4c8adc3fedeecea62521c9d2b567fa2c"],["/archives/2022/index.html","429dd134b37b66a4e750e068498fb77d"],["/archives/2022/page/2/index.html","6db4c43cbb3994d03ab887e0d317d847"],["/archives/index.html","1ac5d45382e7afafa78c3a84b0d7be59"],["/archives/page/2/index.html","fed013e2b29f1d3db2c7b19bf2327863"],["/archives/page/3/index.html","84b5efec43bf8d4c4de821c4c0aa2ba9"],["/archives/page/4/index.html","82fd98d7cc6949dc2312c5e408533937"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Docker/index.html","2742a45546939e8fe25f88c9e79ba4d1"],["/categories/SonarQube/index.html","53a855cf5e9f4c45fae0e84e312d56f9"],["/categories/index.html","9eb986688280abefd1be6a9e853316d1"],["/categories/iptables/index.html","b786cb466ddaa931483c26fd58877e64"],["/categories/jenkins/index.html","ad55e726346781c9e8004e119b14e52b"],["/categories/kubernetes/index.html","bbd9297661992e2683a7924761224ae6"],["/categories/kubernetes/page/2/index.html","919efadddd26ec69f466de4748f2f830"],["/categories/linux/index.html","b1ea6b5278f6158a4f513e6d99ebfdf7"],["/categories/mysql/index.html","a4358547d91e6f9b9b0adc1e2358da1b"],["/categories/prometheus/index.html","136d5e2961428fed0047580ee2f795d9"],["/categories/svn/index.html","ea37c6057f4da7138e4fec0a9cac5023"],["/css/background.css","2942635f3e138bf3f0652299cf376c84"],["/css/custom.css","d8f1986b73cb77a533b567a4cb45437b"],["/css/index.css","d260c62dab02c343c586afb634d6004a"],["/css/lantern.css","c8483fed1ae9927bc6fad5817ee8d7bd"],["/css/rightMenu.css","036623ed00b65cd7a5b31dffe2a25c4e"],["/css/universe.css","52c685572ce95860fe8ddf20fb03df83"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/pasted-0.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-1.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-10.png","5d0d6d8aac46e34b30092f808950a9d3"],["/images/pasted-11.png","0784299af846da4168cad054741957f6"],["/images/pasted-12.png","e258ff6c3291821a2b9bbc6a25574624"],["/images/pasted-13.png","000a03ee30cefc56d0749078cf04a949"],["/images/pasted-14.png","8e547d601142697e448fbb4019bbb06a"],["/images/pasted-15.png","950cc9a62554680e2f0570b97e564259"],["/images/pasted-16.png","1707596a28a9b697891bc718c96175ee"],["/images/pasted-17.png","887da59e5df5c2af9d32fea3ffd5e3f7"],["/images/pasted-18.png","5f724508b49e8e7ba1305062ef8e150a"],["/images/pasted-19.png","a47092a023a70b2427014e75873bd6cd"],["/images/pasted-2.png","0a20960a3ee7446d34a8c4cc687b7adf"],["/images/pasted-3.png","7fc1a4e3fe8ab621dc0aa0ad4309f266"],["/images/pasted-4.png","d15fb5188609b444b3f6710ecf9b139c"],["/images/pasted-5.png","ad234216c2159391c25636525c314e41"],["/images/pasted-6.png","9600a48f0f98bce154df36c0a4dbbdc5"],["/images/pasted-7.png","b42122e7904f38ca3e9a32908f872f36"],["/images/pasted-8.png","f5b4699a2bd89e9027d889247b9a1283"],["/images/pasted-9.png","1537c8048729105cddb53dfa80ef72d6"],["/img/12.png","62ac1ef86217d9ac116fa3d22d78dd9b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","e26ff9d7f5db82408a3b9d320a46ed48"],["/img/centos.png","8c9381c65647670beea0443be09905d8"],["/img/desktop.jpg","13c1182799ca5447fd6493c209ae3512"],["/img/dongman.jpg","27894a3d2f116821649423e50a41d0a7"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/harbor.png","4b104adfa004775ce392037ccc140b62"],["/img/harbor2.png","7545fc3e108b3d60cf61ee2010d6e841"],["/img/inotify.png","9ccfc735d97078fba061989fdd50fed1"],["/img/iptables.png","20f88af231b35ba15839a4cc779e2222"],["/img/jenkins.png","5401eb529f0b795e0e549182e516072f"],["/img/jenkins1.png","dc3b8e8cb59e5864c4f7fe2dc13eab9f"],["/img/kubernetes.png","3428de86fd4ecb4eca7e4f3d539c59e2"],["/img/mysql.jpg","331b83381bdb0c15668bfdcd266b1034"],["/img/prometheus.png","7ab7b7c19a98e723a5f2646669a01311"],["/img/sonarqube.png","5216669e0fbcc6c387dbf29a5321bfe0"],["/img/svn.png","895bfaeb2797f9635f660b5ee00946eb"],["/img/touxiang.png","b17d8c86cf0c70c30e7d7327dd5c7e4c"],["/img/wechat.jpg","2516cfa5ceda8f42ac6ba9efec9d88b3"],["/index.html","a4c9d3bbd7d1a7aee3f3c1e486a32b64"],["/js/chocolate.js","4826caaa586e99d8fee8c5afbb3e70c0"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/rightMenu.js","68db67f6c6ee6b8db0eb0ddd7e85d2ef"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","fafdd847299ee73d084aa36ced9bce97"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/live2dw/assets/moc/hibiki.2048/texture_00.png","730252369524e7a1c21308cb84acd465"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","eddd1345b296e6eaa87b15bff8290c45"],["/page/2/index.html","43eb0b2330c5917a11a74685914ba5ee"],["/page/3/index.html","32655a492c8177c4f31ff32c99349feb"],["/page/4/index.html","31513fb9acb91f7fec1ae68fc2e7b010"],["/sw-register.js","3ffa3e00967889771704b31629d8ca02"],["/tags/SonarQube/index.html","6af063c3a76a901774f9b07e10b2daf9"],["/tags/centos/index.html","e218557b62663e9dd3c5a4878a836474"],["/tags/docker/index.html","fb16390fb37061dab4599023e83c1976"],["/tags/grafana/index.html","eb7977c0febeaeb2cf7738b6b3afe181"],["/tags/index.html","8f930840bc171f65a221362e7c1c2399"],["/tags/iptables/index.html","c6f866270217fbe846f11c1cc60d0f70"],["/tags/jenkins/index.html","864b82d7e8473c4304f6e5b226be91d0"],["/tags/kubernetes/index.html","1ee5c7ba754c6cbff4febeed90f0f8d0"],["/tags/kubernetes/page/2/index.html","c2ea79ad6ccb6ed67eb529c56f829ab0"],["/tags/linux/index.html","7184680aa6d5300f35f9c13ab360fd3a"],["/tags/mysql/index.html","28cecc87175bbca45078ef272a844954"],["/tags/prometheus/index.html","cfef4afacebeab1b7470891d0e11879d"],["/tags/svn/index.html","56c49332b16e6ab4008fb32680345deb"],["/tags/云原生/index.html","32d4b0ceba6028b9cfd1cce4d85b2df9"],["/tags/云原生/page/2/index.html","05dd537c4a6fb0aef07781e54cf2ab60"],["/tags/阿里云/index.html","519a0409518591dfd8876727bbc8eae3"]];
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
