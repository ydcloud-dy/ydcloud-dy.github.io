/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/06/MySQL读写分离架构（MHA+Atlas）/index.html","078314c91d91fea42c8a2caafbfc020d"],["/2019/03/08/MySQL分布式架构-MyCAT/index.html","3b1fa0049e0378ec2d53543f380309ac"],["/2019/03/14/MySQL物理备份工具使用（Percona Xtrabackup）PBK   XBK/index.html","24b4cb98c468e46dd9b87a1b3fcecbc1"],["/2019/03/19/MySQL 备份恢复（mysqldump）/index.html","1ad5adc22fd10ad4529605854a369b53"],["/2019/03/23/MySQL主从复制（Replication）/index.html","18a3c10f5b41144d24324b2e0a211ee0"],["/2019/03/24/MySQL MHA 高可用/index.html","1f326425be1fc0fc3742ce8fb42ac5d2"],["/2019/03/24/MySQL 优化/index.html","3329a66cf7ac9676f5ef10c52b6dcff6"],["/2019/03/26/MySQL 日志管理/index.html","1d96dbfeb71f1974a92b533781616ab1"],["/2019/06/10/扩容根分区/index.html","510dc525d1e794d45aa9fb6d1a906b17"],["/2019/09/23/SonarQube代码扫描/index.html","ba48ae3963fc9035e6149ce83fbc73bd"],["/2019/10/10/centos7生成随机数/index.html","426e9677224e0e89240ae637b08f5ea8"],["/2020/05/13/iptables相关控制/index.html","95ecd454204c53757dd867de83c19a48"],["/2020/09/08/centos7搭建svn服务器/index.html","45a97fcb153a7e326906629fb32dd7f6"],["/2020/10/15/ab命令压测/index.html","18c61c1a9f47cf9dd8b63f8ab66ec8fb"],["/2021/08/24/rsync+inotify 实时备份/index.html","d6f058b5fe3c1948bb623ad095e42fba"],["/2022/05/04/部署harbor服务器（https_http）/index.html","da0b3087bc6379bc4c650018af3e6657"],["/2022/06/20/kubeasz 二进制安装k8s高可用集群/index.html","de8c17fd12e6878d84f4d10643dc8348"],["/2022/06/21/kubernetes安装coreDNS组件/index.html","c1320ee4be068cea469542156e0e84c9"],["/2022/06/23/kubernetes-ETCD/index.html","56fcf9ffcc170918e478ae6c26b03a8e"],["/2022/06/24/kubeasz -etcd v3 API版本数据备份与恢复/index.html","420726ac7ecd4c35307d03a915be8f7f"],["/2022/07/01/Deployment副本控制器/index.html","7c909fb3d7a9f9548e705aa77ac61d96"],["/2022/07/01/RC RS副本控制器/index.html","9dfc8184df89d6dd7fc207a44b25a9c6"],["/2022/07/02/Configmap/index.html","63018d83a6745cc1b3911ee9ec6540c5"],["/2022/07/02/PV PVC/index.html","f9f4744349eb3852aa1e28c748d8cded"],["/2022/07/03/Service控制器/index.html","740db1aacaf7da23e07035b6fcfb295d"],["/2022/07/03/Volume存储卷/index.html","dede2a31869a4f44ed6ee15ea7535ef5"],["/2022/07/03/secret/index.html","a362d85293ae8d2ac0cacc37228352eb"],["/2022/07/04/k8s-job cronjob/index.html","d28742b5c0c7a82aa290dc5aff59d8f7"],["/2022/07/05/kubernetes HPA使用及测试/index.html","cc0b3b6cb1032d82160171eee8efe21d"],["/2022/08/02/使用阿里云oss静态页面部署服务/index.html","7d7462100cf3ea4c8e0cd69e3da2f0db"],["/2022/08/04/基于centos7的Openssh版本升级/index.html","0f46bd5fc9404e10554729362697c414"],["/2022/08/16/Jenkins用户权限控制插件——Role-based Authorization Strategy/index.html","2dd3193093299dfa5d991b3f7404f90e"],["/archives/2019/03/index.html","c145fc4c283f76498fbfe275bcb7acba"],["/archives/2019/06/index.html","95f3d5898acc42c9b4708ab46fa01c8d"],["/archives/2019/09/index.html","74d3aa5db23ac5d1de99feb36afc504e"],["/archives/2019/10/index.html","b434a8bd2c682b291a0db8c574979266"],["/archives/2019/index.html","34002d3b6c8fa6aeafeacffec676dbf8"],["/archives/2019/page/2/index.html","f90ee648c60e3edfbd68aab221dd0e5b"],["/archives/2020/05/index.html","67f8650cea38757cedf58ee40c9b9827"],["/archives/2020/09/index.html","386f958dc49c6bdfeafa6a38a9762578"],["/archives/2020/10/index.html","f0e78e8c4fce8e65998b664462d3324f"],["/archives/2020/index.html","b5820007bd534da6ddf86598d37b83ef"],["/archives/2021/08/index.html","5fac3bbf7a5e6385545e0719ffd4c20c"],["/archives/2021/index.html","c4e60d43b4364e14d5675551e0a2a685"],["/archives/2022/05/index.html","67c93ba9940732634e7b81af5de5332c"],["/archives/2022/06/index.html","142a825333e83ab30110eb9b84373024"],["/archives/2022/07/index.html","727ee6abada607be81b38bfaebbfa3bc"],["/archives/2022/08/index.html","25a0348c33d9962db224ded7a35dcd17"],["/archives/2022/index.html","b041f888ad31217c67c0878af11d686b"],["/archives/2022/page/2/index.html","b357822b0af9ded886f1865e25b551a1"],["/archives/index.html","4a7f58a364db8ebc39ae1eb6910c8ef5"],["/archives/page/2/index.html","96c7bd1821de0b32bf718fe413d6fd95"],["/archives/page/3/index.html","1d2636ce52df143c81d1d671008fbc3d"],["/archives/page/4/index.html","d58ba7e6d5d44629ce6851b596d26c21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Docker/index.html","adbfad7f83d8702a566ecd7f8a0d3a3e"],["/categories/SonarQube/index.html","e7311885055a8c4ab4c817f230632af6"],["/categories/index.html","dbf1e311e9505113f3655a170f671bae"],["/categories/iptables/index.html","228ba1b0cb115f2e2be5f3a297ad0dfa"],["/categories/jenkins/index.html","b14d39489d717aabccc4f6ed5d6400ad"],["/categories/kubernetes/index.html","a7f11962e8f2ebcc825517196c45f9e7"],["/categories/kubernetes/page/2/index.html","e590f27ec5652b94e8a185ec3779cb62"],["/categories/linux/index.html","a513c6f59f3ca516c8417c4bff217b12"],["/categories/mysql/index.html","3dd5d4c622e803e2334590889996a71f"],["/categories/svn/index.html","ac20467b93803ef0c8d23c818b7d2f16"],["/css/background.css","2942635f3e138bf3f0652299cf376c84"],["/css/custom.css","d8f1986b73cb77a533b567a4cb45437b"],["/css/index.css","5b1fe0f7d0e912ed2fcc08d0ee2c45e9"],["/css/lantern.css","c8483fed1ae9927bc6fad5817ee8d7bd"],["/css/rightMenu.css","036623ed00b65cd7a5b31dffe2a25c4e"],["/css/universe.css","52c685572ce95860fe8ddf20fb03df83"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/pasted-0.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-1.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-10.png","5d0d6d8aac46e34b30092f808950a9d3"],["/images/pasted-11.png","0784299af846da4168cad054741957f6"],["/images/pasted-12.png","e258ff6c3291821a2b9bbc6a25574624"],["/images/pasted-13.png","000a03ee30cefc56d0749078cf04a949"],["/images/pasted-14.png","8e547d601142697e448fbb4019bbb06a"],["/images/pasted-15.png","950cc9a62554680e2f0570b97e564259"],["/images/pasted-16.png","1707596a28a9b697891bc718c96175ee"],["/images/pasted-17.png","887da59e5df5c2af9d32fea3ffd5e3f7"],["/images/pasted-18.png","5f724508b49e8e7ba1305062ef8e150a"],["/images/pasted-19.png","a47092a023a70b2427014e75873bd6cd"],["/images/pasted-2.png","0a20960a3ee7446d34a8c4cc687b7adf"],["/images/pasted-3.png","7fc1a4e3fe8ab621dc0aa0ad4309f266"],["/images/pasted-4.png","d15fb5188609b444b3f6710ecf9b139c"],["/images/pasted-5.png","ad234216c2159391c25636525c314e41"],["/images/pasted-6.png","9600a48f0f98bce154df36c0a4dbbdc5"],["/images/pasted-7.png","b42122e7904f38ca3e9a32908f872f36"],["/images/pasted-8.png","f5b4699a2bd89e9027d889247b9a1283"],["/images/pasted-9.png","1537c8048729105cddb53dfa80ef72d6"],["/img/12.png","62ac1ef86217d9ac116fa3d22d78dd9b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","e26ff9d7f5db82408a3b9d320a46ed48"],["/img/beijing.jpg","b3e047edc071811e4a08b34ad186469f"],["/img/beijing2.jpg","e776268eac348d47d7795906363fbc3b"],["/img/beijing3.jpg","f6e51a65d428d03cfe72dd0500be888c"],["/img/beijing4.jpg","4665636b9db94a609da946695a718b1b"],["/img/beijinga.jpg","2961dbd4986aa673bc4e53240e5bac25"],["/img/centos.png","21108b558fea54f6e6acaa00a49be309"],["/img/desktop.jpg","13c1182799ca5447fd6493c209ae3512"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/harbor.png","4b104adfa004775ce392037ccc140b62"],["/img/inotify.png","9ccfc735d97078fba061989fdd50fed1"],["/img/iptables.png","adbf0f41b1af8495c7f9330d88ae03af"],["/img/jenkins.png","38a775b0b873368c4efaa9bfb5760068"],["/img/jenkins1.png","dc3b8e8cb59e5864c4f7fe2dc13eab9f"],["/img/kubernetes.png","64a7709d18ce7f703f86108ab5fd844a"],["/img/mysql.jpg","0b91007118ea38da3474691047dd193f"],["/img/sonarqube.png","965b7f7a941c46e10d3412fe294294dd"],["/img/svn.png","417b61fc1f0b02b68fc12a467bf6406c"],["/img/touxiang.png","b17d8c86cf0c70c30e7d7327dd5c7e4c"],["/img/wechat.jpg","2516cfa5ceda8f42ac6ba9efec9d88b3"],["/index.html","4986a622f32424b8bfe69464067ad17a"],["/js/chocolate.js","4826caaa586e99d8fee8c5afbb3e70c0"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/rightMenu.js","68db67f6c6ee6b8db0eb0ddd7e85d2ef"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","fafdd847299ee73d084aa36ced9bce97"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","73f5c539c8035195e4e6ebf056a859ee"],["/page/2/index.html","2583d1348249d5d592b09120812a73dd"],["/page/3/index.html","11b443fa220f8edd4d57cfcb9da79b05"],["/page/4/index.html","53299e581fe169ab651fda03d255e216"],["/sw-register.js","37a3f80211cc966ab0aebd3b6db715c7"],["/tags/SonarQube/index.html","9f7604fb58d5afb74a959af5c3758694"],["/tags/centos/index.html","33c7aba0bebba5f82bccb0ba63b098c1"],["/tags/docker/index.html","4ff6f92e0dd460c67bdc89264abd0dc4"],["/tags/index.html","82152ab8c24250049f860dcd6c5833e5"],["/tags/iptables/index.html","8e811a089d44852db64cc579bfce3343"],["/tags/jenkins/index.html","6ffa24e6cbaa8ca17c7216d0ce85c88a"],["/tags/kubernetes/index.html","f846d44004ad5a1e1e73ddbf1d4d6979"],["/tags/kubernetes/page/2/index.html","6d1b3a5ebe90892be3360575f035e0cd"],["/tags/linux/index.html","a9373286984d0e93da4b9c80bdb55e5c"],["/tags/mysql/index.html","c816de8505d487ec449a16329d643966"],["/tags/svn/index.html","e96ec7f655c3ea6d7b6d6e3dee2d2640"],["/tags/云原生/index.html","315ac149b60b1c3df8b9dfffdb507083"],["/tags/云原生/page/2/index.html","69454ccbe57f23b8ff95b655fc7a6adc"],["/tags/阿里云/index.html","8d28e9c9868b21ab32dd08736117040a"]];
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
