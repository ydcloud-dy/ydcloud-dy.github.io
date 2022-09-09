/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/06/MySQL读写分离架构（MHA+Atlas）/index.html","ec55c176ec5b9cc356a04a088ee5b244"],["/2019/03/08/MySQL分布式架构-MyCAT/index.html","9b4b48adf729883935806e5b1ceddf71"],["/2019/03/14/MySQL物理备份工具使用（Percona Xtrabackup）PBK   XBK/index.html","bc27a8cf04e19972e7e42bbe8043b147"],["/2019/03/19/MySQL 备份恢复（mysqldump）/index.html","7e2e1188ff98b4fc922f65baa9d796d2"],["/2019/03/23/MySQL主从复制（Replication）/index.html","afcbd6a4fd753d36475b3d6a0a4d0953"],["/2019/03/24/MySQL MHA 高可用/index.html","ae7edd7aac98e2ea1ee828c98b52e3d6"],["/2019/03/24/MySQL 优化/index.html","bc4463670ab03e13a068535818bbbb85"],["/2019/03/26/MySQL 日志管理/index.html","a8a5b9b53723a92f75c4cfc9ef6d3a26"],["/2019/06/10/扩容根分区/index.html","3eebe0bf64de8e62f1cb04207e9f09ba"],["/2019/09/23/SonarQube代码扫描/index.html","22b53edaafd587e428da2f8b80cb5f85"],["/2019/10/10/centos7生成随机数/index.html","149d360099bb61ae20beac63789c2c91"],["/2020/02/14/promehteus+grafana/index.html","30067f91d0d031665ad5847f303dd738"],["/2020/05/02/pipeline分布式构建和pipline基础语法/index.html","9f136d17b8a06927d2232dc023c43cc7"],["/2020/05/13/iptables相关控制/index.html","f5c5ca930c925d4d1ab44b76dae8372d"],["/2020/09/08/centos7搭建svn服务器/index.html","a6c35bee7279ceb3d9d4351953dfa0de"],["/2020/10/15/ab命令压测/index.html","ecda780eb62f805b17ab25d6b8b80b86"],["/2021/08/24/rsync+inotify 实时备份/index.html","8c9634e85d0bc7e54bafbb0872d3b307"],["/2022/05/04/部署harbor服务器（https_http）/index.html","e349c2d29c01de141aa6b059f32aee38"],["/2022/06/20/kubeasz 二进制安装k8s高可用集群/index.html","2c339e7557a57793962e9bb069c21b55"],["/2022/06/21/kubernetes安装coreDNS组件/index.html","1a8a2db671dae18fdaa77fa61e192c90"],["/2022/06/23/kubernetes-ETCD/index.html","f93e22223bf2d60fc7f9a9af0ff0757e"],["/2022/06/24/kubeasz -etcd v3 API版本数据备份与恢复/index.html","28c8969546148484a9b3a77d3a68340e"],["/2022/07/01/Deployment副本控制器/index.html","874e9a40b0fb2bbb4aea39cfd0925be3"],["/2022/07/01/RC RS副本控制器/index.html","5c2d694bd0bb3d70ed3303ea318e3cb6"],["/2022/07/02/Configmap/index.html","37f821bbe4dec70b820ca70315846448"],["/2022/07/02/PV PVC/index.html","ee24b1e0fa30b89254cce49ea9fecb4a"],["/2022/07/03/Service控制器/index.html","1298e2c875731497dcfab59d05869183"],["/2022/07/03/Volume存储卷/index.html","82f18f143cecabdd1c74f23a8bc4c5b5"],["/2022/07/03/secret/index.html","160407f90299fe76ce563465af78af78"],["/2022/07/04/k8s-job cronjob/index.html","eea6d8b7d260020ed67163618f2fa157"],["/2022/07/05/kubernetes HPA使用及测试/index.html","164b28d742b07a2fb10f5209eea10635"],["/2022/08/02/使用阿里云oss静态页面部署服务/index.html","a0b559fc65bfeb929c3b5b0a9963d210"],["/2022/08/04/基于centos7的Openssh版本升级/index.html","6cf288ed7922cfeb945285227bc24b1e"],["/2022/08/16/Jenkins用户权限控制插件——Role-based Authorization Strategy/index.html","bebceafe4e5eaf2b40ce2cefdff12e30"],["/404.html","7413b1b337be02ef7bc48e23a355b8c6"],["/archives/2019/03/index.html","8634121bce91a5232493745e30ab1cb4"],["/archives/2019/06/index.html","f4ede4e31c4237cb5b25f875094d1e19"],["/archives/2019/09/index.html","73cfdd8fc0724548c0a95e2bce9e6789"],["/archives/2019/10/index.html","eb4099ccf60cd529aae3ddcb8db1669a"],["/archives/2019/index.html","33cce97b86063d08e5d81e6097b831f0"],["/archives/2019/page/2/index.html","4ab48f1657bfbf0ec5192867999b17af"],["/archives/2020/02/index.html","df3d88b5690198cbe9770a6802774ff5"],["/archives/2020/05/index.html","15b770a2b6f514e13055a1ce8501dca8"],["/archives/2020/09/index.html","ff37778235899c1d33853958ddb37fca"],["/archives/2020/10/index.html","e53ffdf40859cfb12446a3df5b976e46"],["/archives/2020/index.html","832bb699d0d236521cf751c5d7678c8e"],["/archives/2021/08/index.html","aa6a17231fcfa9dff92d2ab05fcd5ee3"],["/archives/2021/index.html","0be00933332a2216821e9b621ad32475"],["/archives/2022/05/index.html","d9fc955b17edbaf8f28a99e9ddbcfdc2"],["/archives/2022/06/index.html","e6c22296cec5705b7afcd36895c4a569"],["/archives/2022/07/index.html","b20ef979cf14fd4e477da686646d71af"],["/archives/2022/08/index.html","b49876ad87365339789baee157b58e80"],["/archives/2022/index.html","4339c6a3c54b8076c27bf3831d3c6412"],["/archives/2022/page/2/index.html","8354b7198f6a8afaa9fb29795331131c"],["/archives/index.html","2fe722cbaccbb9f1fed6fa539db0b220"],["/archives/page/2/index.html","a20247783c7c836016898129d493b64b"],["/archives/page/3/index.html","d4b95aa68e4409018a0b0b1a45aa60c1"],["/archives/page/4/index.html","66aa411fd20860210615261880e06751"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Docker/index.html","408dd3a4591805663b25e4dd3f1d68eb"],["/categories/SonarQube/index.html","80d5fcb048c30a643d8729d2665b4148"],["/categories/index.html","3963d3c1920de65fbdab6343bd21ce56"],["/categories/iptables/index.html","c5f544ef40b54f81fa2983522bb483e5"],["/categories/jenkins/index.html","45847f4b90464eead81de95f19a3a032"],["/categories/kubernetes/index.html","a1e9527d141d8fe2163f7e8909b6d1b5"],["/categories/kubernetes/page/2/index.html","6a47e01463c6695c9b4f423c61dd8f54"],["/categories/linux/index.html","987302471e96b111972b598e0a0f86f7"],["/categories/mysql/index.html","f95f6a72780820c3a4def5e196a5f66c"],["/categories/prometheus/index.html","8ce8ed8d1dd2a3752d6b7038215eafda"],["/categories/svn/index.html","cf0072414409b5437492b0af8fefa64b"],["/css/background.css","2942635f3e138bf3f0652299cf376c84"],["/css/custom.css","d8f1986b73cb77a533b567a4cb45437b"],["/css/index.css","5b1fe0f7d0e912ed2fcc08d0ee2c45e9"],["/css/lantern.css","c8483fed1ae9927bc6fad5817ee8d7bd"],["/css/rightMenu.css","036623ed00b65cd7a5b31dffe2a25c4e"],["/css/universe.css","52c685572ce95860fe8ddf20fb03df83"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/pasted-0.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-1.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-10.png","5d0d6d8aac46e34b30092f808950a9d3"],["/images/pasted-11.png","0784299af846da4168cad054741957f6"],["/images/pasted-12.png","e258ff6c3291821a2b9bbc6a25574624"],["/images/pasted-13.png","000a03ee30cefc56d0749078cf04a949"],["/images/pasted-14.png","8e547d601142697e448fbb4019bbb06a"],["/images/pasted-15.png","950cc9a62554680e2f0570b97e564259"],["/images/pasted-16.png","1707596a28a9b697891bc718c96175ee"],["/images/pasted-17.png","887da59e5df5c2af9d32fea3ffd5e3f7"],["/images/pasted-18.png","5f724508b49e8e7ba1305062ef8e150a"],["/images/pasted-19.png","a47092a023a70b2427014e75873bd6cd"],["/images/pasted-2.png","0a20960a3ee7446d34a8c4cc687b7adf"],["/images/pasted-3.png","7fc1a4e3fe8ab621dc0aa0ad4309f266"],["/images/pasted-4.png","d15fb5188609b444b3f6710ecf9b139c"],["/images/pasted-5.png","ad234216c2159391c25636525c314e41"],["/images/pasted-6.png","9600a48f0f98bce154df36c0a4dbbdc5"],["/images/pasted-7.png","b42122e7904f38ca3e9a32908f872f36"],["/images/pasted-8.png","f5b4699a2bd89e9027d889247b9a1283"],["/images/pasted-9.png","1537c8048729105cddb53dfa80ef72d6"],["/img/12.png","62ac1ef86217d9ac116fa3d22d78dd9b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","e26ff9d7f5db82408a3b9d320a46ed48"],["/img/beijing.jpg","b3e047edc071811e4a08b34ad186469f"],["/img/beijing2.jpg","e776268eac348d47d7795906363fbc3b"],["/img/beijing3.jpg","f6e51a65d428d03cfe72dd0500be888c"],["/img/beijing4.jpg","4665636b9db94a609da946695a718b1b"],["/img/beijinga.jpg","2961dbd4986aa673bc4e53240e5bac25"],["/img/centos.png","21108b558fea54f6e6acaa00a49be309"],["/img/desktop.jpg","13c1182799ca5447fd6493c209ae3512"],["/img/dongman.jpg","27894a3d2f116821649423e50a41d0a7"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/harbor.png","4b104adfa004775ce392037ccc140b62"],["/img/inotify.png","9ccfc735d97078fba061989fdd50fed1"],["/img/iptables.png","adbf0f41b1af8495c7f9330d88ae03af"],["/img/jenkins.png","38a775b0b873368c4efaa9bfb5760068"],["/img/jenkins1.png","dc3b8e8cb59e5864c4f7fe2dc13eab9f"],["/img/kubernetes.png","64a7709d18ce7f703f86108ab5fd844a"],["/img/mysql.jpg","0b91007118ea38da3474691047dd193f"],["/img/prometheus.jpg","d5cfe6539100dd3e7e5360602149d803"],["/img/sonarqube.png","965b7f7a941c46e10d3412fe294294dd"],["/img/svn.png","417b61fc1f0b02b68fc12a467bf6406c"],["/img/touxiang.png","b17d8c86cf0c70c30e7d7327dd5c7e4c"],["/img/wechat.jpg","2516cfa5ceda8f42ac6ba9efec9d88b3"],["/index.html","70d908472508fabf789f9c6c9695bd8b"],["/js/chocolate.js","4826caaa586e99d8fee8c5afbb3e70c0"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/rightMenu.js","68db67f6c6ee6b8db0eb0ddd7e85d2ef"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","fafdd847299ee73d084aa36ced9bce97"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","528321b5ae73ab8c102ba57b6453dd85"],["/page/2/index.html","07e4fb5d7a9609fb7f40887734bb0d70"],["/page/3/index.html","0ec032179a5b1d6c8441bfc8dee6af77"],["/page/4/index.html","f4306809bd523b319050b71d8fa51cc3"],["/sw-register.js","e2acae6cf184e2808c44d2a79482efaa"],["/tags/SonarQube/index.html","2c0fc111f904377ea0aef1b5192baa1a"],["/tags/centos/index.html","fbc87c5ab9dd85237d76fddab6ab1e25"],["/tags/docker/index.html","bce8e01820e4f580684db21895b77ba4"],["/tags/grafana/index.html","b53ae46caafaf519f310bef79d89f2a3"],["/tags/index.html","22d2138a3bef425b632081aa96c68193"],["/tags/iptables/index.html","a0cc00fe8bae1fab8c8e1b001139348c"],["/tags/jenkins/index.html","0df3f93d225a35b04709608bb30eb126"],["/tags/kubernetes/index.html","5f070612ef618feed3aaf405bbc20aad"],["/tags/kubernetes/page/2/index.html","2ca11c37efebc1b2c6112feb56a56b3b"],["/tags/linux/index.html","ad1aad924d963ced9d89a895ab75d58e"],["/tags/mysql/index.html","acc00497434e229354eea15319791400"],["/tags/prometheus/index.html","9619caf59f5ec77e1575e113ba428923"],["/tags/svn/index.html","00f89e7bfbc0af78834b6d2085868bce"],["/tags/云原生/index.html","3b34e0a62eaad45e78e2cf140e5c2230"],["/tags/云原生/page/2/index.html","2b4d91a645767cc079287ec2e438ffe5"],["/tags/阿里云/index.html","b96e5443d9836330b6381e2e9238f25e"]];
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
