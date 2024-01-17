/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/06/MySQL读写分离架构（MHA+Atlas）/index.html","7c912b2c745951237ba7ddc0de682b06"],["/2019/03/08/MySQL分布式架构-MyCAT/index.html","d24b1f1077ec7cf3aca430f402dc8d0d"],["/2019/03/14/MySQL物理备份工具使用（Percona Xtrabackup）PBK   XBK/index.html","5f363b3c2de21e895cedbe10c8add5ae"],["/2019/03/19/MySQL 备份恢复（mysqldump）/index.html","801f83fd5da48d2cb150c2b0378c38bb"],["/2019/03/23/MySQL主从复制（Replication）/index.html","516f44361fee7523a90dd42e53a8d209"],["/2019/03/24/MySQL MHA 高可用/index.html","b85750762fe9b4e5fa149178033d901a"],["/2019/03/24/MySQL 优化/index.html","f64f10c643d99dc4ed1ddf2a9b52e1f1"],["/2019/03/26/MySQL 日志管理/index.html","96e049771df9cf2b96fc78abfa3e2b09"],["/2019/06/10/扩容根分区/index.html","43246979d4380814f04812a7a6d3e5dd"],["/2019/09/23/SonarQube代码扫描/index.html","259d23e45034336d42faf6e07c4550ab"],["/2019/10/10/centos7生成随机数/index.html","ffc97c606c1e2258ece039b27806dee5"],["/2020/02/14/promehteus+grafana/index.html","89773905dcb6d639e49ddcb3703835a4"],["/2020/05/02/pipeline分布式构建和pipline基础语法/index.html","29a69e8217595531cd142712525f9a07"],["/2020/05/13/iptables相关控制/index.html","c8a5f6d49368e73a849d3f45a8c62a1b"],["/2020/09/08/centos7搭建svn服务器/index.html","8d7e5f84277dd7c4d0553a9fb5220787"],["/2020/10/15/ab命令压测/index.html","006784bf1d7ab5b570089e8993a54699"],["/2021/03/06/服务器硬件压力测试/index.html","4e3d570f2d6d18d37bf446f9b5a415a7"],["/2021/08/24/rsync+inotify 实时备份/index.html","1bc999d0e8bafefb628406b021562ce5"],["/2022/05/04/部署harbor服务器（https_http）/index.html","95f52c81d2e790386d4b3482cf0107c4"],["/2022/05/23/记录服务器被挖矿的处理方法/index.html","9a04201e3801e798f74d115039bdb5bf"],["/2022/06/20/kubeasz 二进制安装k8s高可用集群/index.html","79572c9e529dbd5808863c2dffbcb3c1"],["/2022/06/21/kubernetes安装coreDNS组件/index.html","4e7554fb10eb38cab5b572e4184b9fe4"],["/2022/06/23/kubernetes-ETCD/index.html","849ad0731a4d568594916f197e168687"],["/2022/06/24/kubeasz -etcd v3 API版本数据备份与恢复/index.html","fa5e39cd564fde71bf3e3f2de515825a"],["/2022/07/01/Deployment副本控制器/index.html","0356bc7f18fd70c8acd6cef0313c36c6"],["/2022/07/01/RC RS副本控制器/index.html","6e7b204805ca3427d593537539efd622"],["/2022/07/02/Configmap/index.html","c7ca31d73bf003e7286476b28fb316b7"],["/2022/07/02/PV PVC/index.html","1110294bf34822626d92163b8816186a"],["/2022/07/03/Service控制器/index.html","717967808b2ef54e327663fac53c9c69"],["/2022/07/03/Volume存储卷/index.html","ed4429f7f4229cbc5cb066e894aa19ea"],["/2022/07/03/secret/index.html","1b226e082d8b864f709e7411671f88ba"],["/2022/07/04/k8s-job cronjob/index.html","652ac3d4669c3f7cb8d734b956afc093"],["/2022/07/05/kubernetes HPA使用及测试/index.html","915562d5c9a1ba46e16b1ec89d54ca80"],["/2022/08/02/使用阿里云oss静态页面部署服务/index.html","13e93f6482cb8cf06a6dd806e6e3c456"],["/2022/08/04/基于centos7的Openssh版本升级/index.html","f1ad67806058091542bc0913431393aa"],["/2022/08/13/防止内存碎片化/index.html","1854a8dd758203e3a2a4fa22c4fef98c"],["/2022/08/15/Pod异常状态排错/index.html","e064282151ee13abd58a30594fa7e87b"],["/2022/08/16/Jenkins用户权限控制插件——Role-based Authorization Strategy/index.html","427c329f46edb0d5d4674d4bcc83688e"],["/2022/08/19/kubernetes磁盘爆满故障处理/index.html","108a893569b8a880dfc176961410d99b"],["/2022/08/23/分析 ExitCode 定位 Pod 异常退出原因 /index.html","9ba4391785cb7b3032b23f4070605afb"],["/2022/08/23/容器进程主动退出原因/index.html","f7190d561aec760dab3d842ffc7e774e"],["/2023/01/13/【mysql数据损坏，通过ibd和frm文件批量恢复数据库数据】 (1)/index.html","be54caff2b355a8f5cd176a860aadc60"],["/2023/02/12/Golang分支、循环、随机数/index.html","0bcc9ab4a4f2e3bd8db292473cdfdda5"],["/2023/02/12/Golang线性表-数组、切片/index.html","63947c9c06e92c2cf3cc1df918ba4ac1"],["/2023/02/13/Golang字符串string/index.html","43cac66eccb9749956c195c01d7a525a"],["/2023/02/23/Django视图类View源码分析/index.html","d02a963ea42e7f54591eafe8713ed499"],["/2023/04/14/Golang哈希表/index.html","93a7d706225b144d217a38465250c8a2"],["/2023/04/14/Go函数/index.html","3348e5e89a33a345015cc1b467c827d2"],["/2023/04/15/Golang List/index.html","7411c4262445b3c8ea2e1553a476cbd8"],["/2023/04/16/Golang递归、匿名函数、作用域、闭包/index.html","95ab058237b7f88e92b43ddf9d165e48"],["/2023/04/17/Golang变量逃逸——堆、栈/index.html","67a7ae832d4d11524d87a95154629599"],["/2023/04/17/Golang结构体/index.html","1648e8ac18f9bf6590dcf2a2c072f9c7"],["/2023/04/18/Golang接口/index.html","d64447ca27290ebfef6e4a02edc4d005"],["/2023/04/19/Golang错误处理/index.html","cbfca6cc26a0525ee4ba25cd9214331c"],["/2023/04/20/Go中的面向对象/index.html","589c61619a75455898d7a071dbaabe50"],["/2023/04/21/Golang序列化和反序列化/index.html","bb2aafbad7c78d1080998507da4facb2"],["/2023/04/22/Golang时间/index.html","1dd92dbed0232c6ffb80498899cbacd1"],["/2023/04/23/Golang包管理/index.html","105142fef1f2b031c46f78f867209837"],["/2023/04/25/golang包管理/index.html","b7b44309d2b7a297c318903835c864ca"],["/2023/05/01/Golang日志管理/index.html","02df553d045f2edf7536963fe8473924"],["/2023/05/03/Golang数据库标准开发/index.html","ac932f6f800c7bafb52341346b9e1a2b"],["/2023/05/06/Golang中的GORM/index.html","ff085bcd3acb32843b24b277b2fbcd5e"],["/2023/05/09/Go操作MongoDB/index.html","f48221f256cadec356c70579c2adb069"],["/2023/05/10/进程线程/index.html","cdf847c670c858b0f1f92550fec38ca8"],["/2023/05/12/TCP编程/index.html","64079ec83527a769177009041b841837"],["/2023/05/15/Golang协程/index.html","243e0b87a2a37dec0b79900b9fb1f007"],["/2023/05/20/Channel通道/index.html","844877660e9470775258d8669d9adec8"],["/2023/05/26/Go文件处理/index.html","a260ffd022154e6a27ee2eeaded2d534"],["/2023/06/01/Sync包实现并发/index.html","bd1076714ffaae2c2c2ca98009b41499"],["/2023/06/04/ServeMux、httprouter/index.html","cbbb8debc72284c86f53af9d5d1bb474"],["/2023/06/23/Gin框架/index.html","44e2c3c491789eb109251d68d186e1f9"],["/2023/06/27/基于IOC解决对象依赖问题/index.html","b14928519981af39eecb6442f2e4d4d9"],["/2023/07/13/Vue状态管理/index.html","d8c303fb50d23bdbe5aa22374e2791b0"],["/2023/07/29/根据router显示左侧菜单栏隐藏某个菜单选项/index.html","1c19f21eb1ab345883cd6d5aed80e8df"],["/404.html","54876a57e8e7a352f8f2506fc48a1fee"],["/archives/2019/03/index.html","2e3d23960f1bce36f491ea1a74c513a3"],["/archives/2019/06/index.html","fe1200be756e02eacf2b601503d4a3ad"],["/archives/2019/09/index.html","67d2a3d712118bdca0651541acbd7e63"],["/archives/2019/10/index.html","f03268c4a06abccf09020bd749ad2ad3"],["/archives/2019/index.html","789b03f5598ebd1fc61546f7608df3ca"],["/archives/2019/page/2/index.html","a16b539860f727ee2ccb605b726bb9f2"],["/archives/2020/02/index.html","2e85eb0f86f5e6355c56f2b38da736f7"],["/archives/2020/05/index.html","e09c4b759dd31a935eb9c94e568e3755"],["/archives/2020/09/index.html","c75c7bec5aeaf56e876a9a4e106fb380"],["/archives/2020/10/index.html","f87511ebadc2d5ab16f931eb3187a1d1"],["/archives/2020/index.html","b49979bab644775763a7fee287ce5790"],["/archives/2021/03/index.html","d09a6165d4b9ad84f18e4ce580943d4e"],["/archives/2021/08/index.html","55f40434b440fb5e7c997e7b050958c3"],["/archives/2021/index.html","3d8dc4c932b1e7b1c978227f31d5f0e0"],["/archives/2022/05/index.html","709e88948732dd5f2278231159edd8cd"],["/archives/2022/06/index.html","8233a8fb1653dc7ae02b6f7193670eb4"],["/archives/2022/07/index.html","3686e9e31832a52c12133eee94e73567"],["/archives/2022/08/index.html","e375f05709b0957e96601b531fc93ee0"],["/archives/2022/index.html","9e44cd2cbfc38a1d01cdfd41db881041"],["/archives/2022/page/2/index.html","01478ecaf398db209f9d853eb02c66e9"],["/archives/2022/page/3/index.html","2c1afa33d8eb3e985734f603236888bc"],["/archives/2023/01/index.html","cdd5d0134411cae50b3f5a61beb3d3bd"],["/archives/2023/02/index.html","bda6c03eab92aa192634d2fde052e23d"],["/archives/2023/04/index.html","55723f4bbe690f1ae7428cb8721afe36"],["/archives/2023/04/page/2/index.html","7e4d0a1e5af7ef8c8203aedf77e418fd"],["/archives/2023/05/index.html","147293256cb6a6e6d0b66e87143982cb"],["/archives/2023/06/index.html","d3e03f179079b9821c1c9fdb8ecfcb0a"],["/archives/2023/07/index.html","bbec3f33e66a1f6c705a3a9e5ee2c7ae"],["/archives/2023/index.html","4bf372bced85989abad5a63bee148a03"],["/archives/2023/page/2/index.html","f588663c284e132daca91450f219b58e"],["/archives/2023/page/3/index.html","4782caeb9a2d6210d80ddb393d3896fc"],["/archives/2023/page/4/index.html","9dfcd98a78e96c48b835ba1d39e90e30"],["/archives/index.html","f4d599f7ff912a8dc612f0a97041ed30"],["/archives/page/2/index.html","ffa23d29d65093f6891046728c3fdba2"],["/archives/page/3/index.html","f92f8a9ceff7684badda0cc1c72887f5"],["/archives/page/4/index.html","de23427520cf7b680dfd78c9bd6fddf8"],["/archives/page/5/index.html","118ecd78f727669d70f0b54824cd087d"],["/archives/page/6/index.html","c739ce43fd40a5de23047026e4c68baa"],["/archives/page/7/index.html","ba3cc689e279220cac460720840e6229"],["/archives/page/8/index.html","781e16f221d24be3dcdcd655045b9783"],["/bangumis/index.html","2da87566e67683422918d67ec9314233"],["/categories/Django/index.html","b36276232b9851c1dbb937b496b1db72"],["/categories/Docker/index.html","9729ec6624663d30f47ba491c0ddb538"],["/categories/SonarQube/index.html","50203429d3f8de5228a904e7910ef889"],["/categories/golang/index.html","8127e5ac52109871f49db57e763692ca"],["/categories/golang/page/2/index.html","37214655ee249bafa39e6fc73a68fcee"],["/categories/golang/page/3/index.html","6f08297ce6704e9ef2030912d90c8703"],["/categories/index.html","36e5b138b2ac28e86161eb07f51584e1"],["/categories/iptables/index.html","5d4f22648ea7340222ed622101e74b1e"],["/categories/jenkins/index.html","2488cc0870e54d885e5cc363b19715f9"],["/categories/kubernetes/index.html","897d34f723fb7952560e74cdb8b69814"],["/categories/kubernetes/page/2/index.html","7155fcd30e55133343d377b288743e33"],["/categories/linux/index.html","df9577e8833b6a5e5246cd5a5aea8306"],["/categories/mysql/index.html","21fc5ded2d99cf40013daa1e7dc0c80f"],["/categories/prometheus/index.html","bb2707d73e29d3595b2adcecb7216e83"],["/categories/svn/index.html","01ee20d0e4603dfbb66459c50782e6b9"],["/css/background.css","2942635f3e138bf3f0652299cf376c84"],["/css/custom.css","d8f1986b73cb77a533b567a4cb45437b"],["/css/index.css","d260c62dab02c343c586afb634d6004a"],["/css/lantern.css","c8483fed1ae9927bc6fad5817ee8d7bd"],["/css/rightMenu.css","036623ed00b65cd7a5b31dffe2a25c4e"],["/css/universe.css","52c685572ce95860fe8ddf20fb03df83"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","6a941f631a888fbc55b98f38a38c435b"],["/gallery/mm/index.html","5e645ee93f12f8e810dfddb2afeceeba"],["/gallery/rc/index.html","83c3ffb3d588b9951020d7fd0fd7998f"],["/gallery/古北水镇/index.html","bd9899fcc190d1c19c93da23a5c7f0b5"],["/images/12cHr9ikXtyQXMGMLAsneQmfz5lpgER4HJ8TZ6WRzfk.png","bb174a3f62a1a776cc0274fcc9b3b2f1"],["/images/227umIkj9ueakAlc6D0TMhuymUnQnccKjWbdwT7c8v4.png","4e0c69c2afee2627859ece357f269ef5"],["/images/2gLoMVUujOjJ4dq4WTPgFvIEpM0GN_3lWAxHCJWdu_s.png","f3bb98e1b19cb245a6c1afbc680df807"],["/images/3cQaHgUR1zV7txTfb5Zv21dunowx3Nr8WxxCf4rV920.png","fe10afb64ba046de42cc2ca270c88956"],["/images/5171b5b5c996437ca7a575f7f8e62072.png","265460ed10fe96faced2ee4d73b8d504"],["/images/5a605348057d4eb2a68f37adcdd5c0ef.png","92172850d865b6fae07d68f881814062"],["/images/5bc5731d8fa34df2859ac53ac2fbfc42.png","4d3bb971a816e82a00d700081e75a235"],["/images/73a87cb4c5f64aa1b9b2acbb76729524.png","74ff27631a77ad22eeac0345b8e99ea4"],["/images/7S0BLT5M_pHphocDPiOZMGnDg2nKU8_qoATFiQZg66E.png","9a0c8fd158de8c2c20e13bc33462519f"],["/images/8c8ea20d5edc45929afa2321bfd509b3.png","10f7df11500fb52208f3c90592a489d2"],["/images/8d4B0AZilXjz-ObG8hrQHiEqgqMYnOD0pndKK3I-7l4.png","b6fdd105a816ebe9581a1cf350a41e4d"],["/images/9Spf0KfzlHu3RvMTBqN3r_VTvfiR5EaplbLhiT4WtvM.png","22fa2d23ca4b8d5e1baffb32c64c48c2"],["/images/9ursxjNtKpQ9LIfDPeKTakw4TRCipaBkRqmaCp67lD0.png","636b9e0456365ea5527a3dcd0fa76482"],["/images/BDP-9YI67K64UgUIaM4LFXWCdmzzRjGhBWuxyga9jSo.png","6ba9ff32cebfaca111e7a38f4d085825"],["/images/F8abdMJNV7fdb01bhGVMyxod76mnv9YwmbiuGqVrbak.png","dacc6f6e0aea6104af3badaefe91d32b"],["/images/FNuqQSg-6IBBsbPSr1xWr2TRRRITNmSaXPfRqfggvuI.png","1d136b353d7a624a40d32266e88e4528"],["/images/Gpv2A-igzF7gS4p5i4VfUPvoVwhfDlaRIdmaFNB86hk.png","5e898f69818ab09640a16e606c647600"],["/images/IYn3mikXQ-6q5ivRZQxaGgGu_s0wXPj4nrWK23IzVpU.png","aaa6b993699026bc705da659c5d6480f"],["/images/LARO94NSUaanvTauyISES6dY_KIT6zNWycgjPYjLwWM.png","c12d907e66f282586c8de3f5ebc08684"],["/images/PdOQSGRA-04_7y1ZYpow_iacKReUL_XvlN8eZfqWmCE.png","360b5e7d858e556c7ef1c95b8680f088"],["/images/QdAIibaNl6zjCAfjw3l-AdIqVvp4gnV1c7dNfBesKrA.png","a6e585ab5150bfe5765f561de40621de"],["/images/QzaKfUq0IZSFi0iI45-KHuXLjXsmCfrTExRYt2Qucoc.png","9b33ec25fe4d448438506c031bd5067c"],["/images/R4_Pj04NJNofQjeP7O098UvyH3-7Mt--bCCv4P-wxa0.png","724a9ed494f354e0900f244c37781648"],["/images/WugGk16dhc-uVXrpjIqWqTtwGhKRFR-_k0HQQYJ-pnw.png","166975aa8e49a80f0d6ab81cd593c640"],["/images/YMVJL_RZhGq7C_VVOv0uy-cajO5tUqc0EqWWQQA1A9g.png","d4a935df47c0912fc6d3be078799d1d5"],["/images/a3e96f87611e480084feaa655ab276f3.png","b05da2de5ba71cdeca65b31b7ef6e629"],["/images/aab899006552425e8aa1e07edfb07aeb.png","45e1e8c6bd1239618b7e2d02599efdf1"],["/images/an05QaHBTp7gybS2WAZA9-0y4YZdrDatRpKJp8TpEVc.png","f31ec5ec8a780ddf39e12c2b801b7516"],["/images/bfba52d98a1e4b1f9d3a9acd4457017d.png","6242fae9c8eae5dd3636c00a6da2c017"],["/images/c0wZVZywXOppPf_EakxP_EqF14PsEzNpA9kXDIHvnXU.png","d01a16a7c20b591ebf47028a4b72bed5"],["/images/cGczYh95uVn_E_XRJd719AQyRgUMRg69MAIwRrYI2xY.png","f0bbe09aa173bcef2f2b97f8d0b01394"],["/images/cf96dab942e44a1285fe17304cf6a67c.png","5769d0c6d013ade4837105313b3ba4c9"],["/images/e564e16a61ba434b900ae6112c836b44.png","4a12ce40a9aa82c2bd85f7bf9b42bdbc"],["/images/e64f2768643c4b0b8bd64f4c953a6696.png","c771a51b5b9b54fe369c1e23c11084db"],["/images/ecd14c1de69643789dbdfcd1b024b4ff.png","91fe78461bd2330003dbb678c2a2d431"],["/images/erWveWtSLzT8lPZIU8GSBLSppOGETeHJSadxKbvM8fM.png","afda8efaee0f0e5d1020af21a8df815d"],["/images/f4d20adcf89a424ab5536107427677bf.png","f1edfaab6e2917fbb2856bc3c0cd3c22"],["/images/hIeiHevWkLJZiTON48hDf12pL6vr4fRGnCp20P0Utls.png","08d4d26eeec6c1f1c69fe7a044fce0c0"],["/images/jrXRa7egP8ZJprErQGCJzH2QvcwBf7f_gjPuRZLOiGA.png","90129d7004ca98b27c3ae3fedcbdc5de"],["/images/k0DZ3gJOew5snaPaeFgWCU-I5o67oWWlNhFROQZsvk0.png","6ba543399d37d77ed06c250e65122ac5"],["/images/k156_DyWGJAZDlSkdI262qdLwZaaCMonh90tGW0GSSk.png","0d3f8e5b60584fa243256c74ed8f9f47"],["/images/oYugO6NnOV-fb0qJlsGlfiB7E0wLvwedWxg3qS4kubQ.png","c28f2ce37c319e8f5ceb319b4321cf83"],["/images/pBJqm0jtt8R1VWcFHS1DD8m9PWDQ7X4_7UnpXpYouCc.png","c41bdba9b775f3f2a3fc4bb27f2f112e"],["/images/pasted-0.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-1.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-10.png","5d0d6d8aac46e34b30092f808950a9d3"],["/images/pasted-11.png","0784299af846da4168cad054741957f6"],["/images/pasted-12.png","e258ff6c3291821a2b9bbc6a25574624"],["/images/pasted-13.png","000a03ee30cefc56d0749078cf04a949"],["/images/pasted-14.png","8e547d601142697e448fbb4019bbb06a"],["/images/pasted-15.png","950cc9a62554680e2f0570b97e564259"],["/images/pasted-16.png","1707596a28a9b697891bc718c96175ee"],["/images/pasted-17.png","887da59e5df5c2af9d32fea3ffd5e3f7"],["/images/pasted-18.png","5f724508b49e8e7ba1305062ef8e150a"],["/images/pasted-19.png","a47092a023a70b2427014e75873bd6cd"],["/images/pasted-2.png","0a20960a3ee7446d34a8c4cc687b7adf"],["/images/pasted-3.png","7fc1a4e3fe8ab621dc0aa0ad4309f266"],["/images/pasted-4.png","d15fb5188609b444b3f6710ecf9b139c"],["/images/pasted-5.png","ad234216c2159391c25636525c314e41"],["/images/pasted-6.png","9600a48f0f98bce154df36c0a4dbbdc5"],["/images/pasted-7.png","b42122e7904f38ca3e9a32908f872f36"],["/images/pasted-8.png","f5b4699a2bd89e9027d889247b9a1283"],["/images/pasted-9.png","1537c8048729105cddb53dfa80ef72d6"],["/images/sSSXFVDESR7Vg65AC1NsKMpx6CHd0D3BQ379bjDY4IY.png","31c6722e1602a13e28c66948cf0e163d"],["/images/uk6XvIO7f5mrpwH2LAO7j8W_bKLuJQShRPZG0xiJTHs.png","ab6f4e154326cb997b42ff95b202d0f7"],["/images/xLBNIVYLG-AcXxWFv1hmKTRmdzwGiXmMTF_dRmoz-NQ.png","184ec73a4971070effd0251c72616776"],["/images/ximOXiVaTWYZnsZ9N_87_7NuNaY7VOlqtqA3kDWSJJ4.png","9c8c6a73debf2909a43f0bc004ad27cd"],["/images/xmdfVH9Turoaa0FtsjXQZTyhDyfQ3WhHGXo4Q_jzPBU.png","67b965e6d8bf08336f4e3bf873c98053"],["/img/12.png","62ac1ef86217d9ac116fa3d22d78dd9b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","e26ff9d7f5db82408a3b9d320a46ed48"],["/img/centos.png","8c9381c65647670beea0443be09905d8"],["/img/desktop.jpg","13c1182799ca5447fd6493c209ae3512"],["/img/django.png","e2636b0adb0be0021df95aedf7280fe8"],["/img/dongman.jpg","27894a3d2f116821649423e50a41d0a7"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/golang.png","6e384f789f93ac84d37c1ab56790d697"],["/img/harbor.png","4b104adfa004775ce392037ccc140b62"],["/img/harbor2.png","7545fc3e108b3d60cf61ee2010d6e841"],["/img/inotify.png","9ccfc735d97078fba061989fdd50fed1"],["/img/iptables.png","20f88af231b35ba15839a4cc779e2222"],["/img/jenkins.png","5401eb529f0b795e0e549182e516072f"],["/img/jenkins1.png","dc3b8e8cb59e5864c4f7fe2dc13eab9f"],["/img/kubernetes.png","3428de86fd4ecb4eca7e4f3d539c59e2"],["/img/mysql.jpg","331b83381bdb0c15668bfdcd266b1034"],["/img/prometheus.png","7ab7b7c19a98e723a5f2646669a01311"],["/img/sonarqube.png","5216669e0fbcc6c387dbf29a5321bfe0"],["/img/svn.png","895bfaeb2797f9635f660b5ee00946eb"],["/img/touxiang.png","b17d8c86cf0c70c30e7d7327dd5c7e4c"],["/img/wechat.jpg","2516cfa5ceda8f42ac6ba9efec9d88b3"],["/img/zhaopain10.jpg","1fcca24b33fa1624524f9856bfd5dc6c"],["/img/zhaopain100.jpg","97f2108884b90ae9c9af936bbdf8c1e4"],["/img/zhaopain101.jpg","e3e03e2568cb8957b808a87df61369ad"],["/img/zhaopain102.jpg","118c969a37253a57c81d52d22e124a2c"],["/img/zhaopain103.jpg","45adb21426c31ce084bec88a366f3bb3"],["/img/zhaopain104.jpg","aad81e29b69cb302c9f5d7d65c160420"],["/img/zhaopain105.jpg","2801ab07f2580a728d0d9816d2f952d6"],["/img/zhaopain106jpg.jpg","85bcc0290bb86749f557744a4a597837"],["/img/zhaopain107.jpg","ba836c62b3596f65efe6ca55545b6f8a"],["/img/zhaopain108.jpg","5bba59a0a43331b2cb2c101420d35c7e"],["/img/zhaopain109.jpg","004b38682c1fc6d37e5789ff9393c905"],["/img/zhaopain11.jpg","78c42bc7f774b3c47e4ad500455e98d8"],["/img/zhaopain110.jpg","6d5ad699ddedcd9312f56c36ed974ab1"],["/img/zhaopain111.jpg","d60f82d50cb2abcf648e03c3aef72f7f"],["/img/zhaopain112.jpg","646d687facbffc0357ff30a3950b5008"],["/img/zhaopain113.jpg","682a02f8052e1b92a3adc003c17b7bf2"],["/img/zhaopain114.jpg","3891d88bf82e5e11b97dcdf987034f80"],["/img/zhaopain115.jpg","98bee9f6d0992da82d66d9c02fd0c057"],["/img/zhaopain116.jpg","5013c9aee7a9d177f025db87dc9f166a"],["/img/zhaopain117.jpg","fafa35921b885ff034a4b7710d2c1722"],["/img/zhaopain118.jpg","5f84a421caa028738b0a30cd26ce7b33"],["/img/zhaopain119.jpg","9adc3322c63cb0d2284ca21ead2ea93b"],["/img/zhaopain12.jpg","c4b8ec090835bc228a7f422d08650f29"],["/img/zhaopain120.jpg","682a02f8052e1b92a3adc003c17b7bf2"],["/img/zhaopain121.jpg","80a6ee2656ab2b77f327ecc667fd3bd1"],["/img/zhaopain122.jpg","80a6ee2656ab2b77f327ecc667fd3bd1"],["/img/zhaopain123.jpg","80a6ee2656ab2b77f327ecc667fd3bd1"],["/img/zhaopain124.jpg","4f5b33bb60401e8cc93a374d26d3e61a"],["/img/zhaopain125.jpg","4dbdaa93766f575fa1500ff061093891"],["/img/zhaopain13.jpg","cf4ea6b0684d800328c4365b5ab5d59e"],["/img/zhaopain14.jpg","c82c1142d88aae943c3e24d719e50075"],["/img/zhaopain15.jpg","d91ed1a046124e5a51060723cbd8d103"],["/img/zhaopain16.jpg","d023ce7128d036aa3323fe59be6a6202"],["/img/zhaopain17.jpg","9dcd5042b3f6aeeb2551992e48803397"],["/img/zhaopain18.jpg","f18f1c0b40e07f7ab1abd89bf2bfcd09"],["/img/zhaopain19.jpg","088ec807fe21a61b962b204660cc768e"],["/img/zhaopain2.jpg","121a6ecc79da95a172483bb297bd2eae"],["/img/zhaopain20.jpg","51a37ad1eb98ddc50ee1ba51f2f9ce9c"],["/img/zhaopain21.jpg","fd95e383457ed400aad90c384cb08012"],["/img/zhaopain22.jpg","12db9cf284fe2143d36136aecc69e065"],["/img/zhaopain23.jpg","ac0a79cb73775b224e3561a4ec44ac08"],["/img/zhaopain24.jpg","0f34d129535b9d8c110e71be55cdc4df"],["/img/zhaopain25.jpg","c8d8e28e8d16cfff3dc5b58635977b86"],["/img/zhaopain26.jpg","6a67df60edd669b6e0e6b76762fea86f"],["/img/zhaopain27.jpg","be657e8fb134582c4073857417df5593"],["/img/zhaopain28.jpg","71bca58f726116c6ab4cf8dddf093728"],["/img/zhaopain29.jpg","f7a6fc61b463f421e4acbd4b438a6ee6"],["/img/zhaopain3.jpg","4e95ebd7d2751a9e249725d8c04e7d05"],["/img/zhaopain30.jpg","29081a67154616f3dcd2aca3ed6448b1"],["/img/zhaopain31.jpg","47f3af98dc2e7ba5bb7abcfe948af242"],["/img/zhaopain32.jpg","6c222bd9af227dc748a3c726294c2a37"],["/img/zhaopain3294.jpg","bcd5bf2958f131bbfbec8e741c527f32"],["/img/zhaopain33.jpg","242aae2a3cfba72ec5b0f096dacff6af"],["/img/zhaopain34.jpg","707838b542f2af635fc7d76882af0a11"],["/img/zhaopain35.jpg","fb468bde038864202042cd74dd9eb594"],["/img/zhaopain36.jpg","110995fad7b1f1bc557175c0e0baf000"],["/img/zhaopain37.jpg","21d3df31f946007e13c3890f2923ef62"],["/img/zhaopain38.jpg","0a2a3cc2512d1dd79e34f2bb14d18667"],["/img/zhaopain39.jpg","917c1bd41907244331f05e1ebc5a95db"],["/img/zhaopain4.jpg","391e48f26142a898a95a052902240a17"],["/img/zhaopain40jpg.jpg","d84fb0cfba929c04e10734156d359848"],["/img/zhaopain41.jpg","e7a573d7b7b7b4291e819941fe2d211c"],["/img/zhaopain42.jpg","01cd6a1e6a8b4ae77195f5928a8f88b3"],["/img/zhaopain43.jpg","b424523d430d952342924977a269c494"],["/img/zhaopain44.jpg","9a6af39b763096df48719c61d0cde4d2"],["/img/zhaopain45.jpg","bf6dbc2bb846712905a19ffc973bbc8b"],["/img/zhaopain46.jpg","6742ce95da3ac95eb791d493e372758e"],["/img/zhaopain47.jpg","9d415598990befb27fbe3c1c97124db4"],["/img/zhaopain48.jpg","6bae0a69a0ae88da5aa9e2294f5cd159"],["/img/zhaopain49.jpg","4208a196b9baaffe957cdff1de864245"],["/img/zhaopain5.jpg","306ba0ef20d0258348757beec62eca5a"],["/img/zhaopain50.jpg","bcba12c17e4491e7ac27269e97dcfd82"],["/img/zhaopain51.jpg","f6c0dc8f0c1e13b4eb4c963f4599dd95"],["/img/zhaopain52.jpg","d204a9b1e750e20da7064462cf8199f8"],["/img/zhaopain53.jpg","be920eff14a9f0c3b12e32f87e2a5e56"],["/img/zhaopain54.jpg","b3628a7e820e5befd57cfb42704df003"],["/img/zhaopain55.jpg","66483b6216ac898126ce30986ff49fc1"],["/img/zhaopain56.jpg","394cabcf4b84054c0fb355c698ffed0e"],["/img/zhaopain57.jpg","f746e861fefdb74d34183e585f367942"],["/img/zhaopain58.jpg","b0af6d91b201d2c8ba066af912160d2b"],["/img/zhaopain59.jpg","d7faa169735cea87bdcee95b1f6ab70f"],["/img/zhaopain6.jpg","d7c68ba228053d4f094d40cc2f8d7068"],["/img/zhaopain60.jpg","cb916fb1218c1893f6d308b782f3d9aa"],["/img/zhaopain61.jpg","d848d9a4ed314647c87a42af04900dbb"],["/img/zhaopain62.jpg","70d24fdb7d31176c4014f4bf1429e045"],["/img/zhaopain63.jpg","143d1a9ebb29a3cc587d7b0d3258b04c"],["/img/zhaopain64.jpg","68d92b4731e671bf295b486414cbe61e"],["/img/zhaopain65.jpg","3193bdb9469480ffdbdebd9d9a4bd264"],["/img/zhaopain66.jpg","116ba7545aa0d7427bf10e44b51f15e0"],["/img/zhaopain67.jpg","5341e7fa048b69d82b68e22ceba021ad"],["/img/zhaopain68.jpg","d2ccd591caf166fb83b07a367ed14d77"],["/img/zhaopain69.jpg","ca7b6640cb51e3b620bc1e307cf508d7"],["/img/zhaopain7.jpg","f37835510ac4054dc53b3e5fe6515e09"],["/img/zhaopain70.jpg","4e4fa8a6f0285f9474897853054c9d8c"],["/img/zhaopain71.jpg","d9858facb1de8afd8b7efca144074d69"],["/img/zhaopain72.jpg","eb9c0f2f27e79f06c2d1ae0c5fb9506d"],["/img/zhaopain73.jpg","eb19959fca8f7b9bc089b94888234174"],["/img/zhaopain74.jpg","20c5c777e424f1612ceb62566225d598"],["/img/zhaopain75.jpg","74f062ffb596ec1e767a287b92c75eed"],["/img/zhaopain76.jpg","a405888f010755c720e7def27b778189"],["/img/zhaopain77.jpg","c7d1e7d788912e19a7e20fa3278e55bc"],["/img/zhaopain78.jpg","dea13d48619e016c21e5c9cc2dac3f1b"],["/img/zhaopain79.jpg","0652f6ab3e258237252e024546a07ed7"],["/img/zhaopain8.jpg","9f50915b7374d9f2e75b29533d373854"],["/img/zhaopain80.jpg","dcd369f35deac30a5ce8de030dbe922c"],["/img/zhaopain80jpg.jpg","09dd94b4430cc1eaeec4429d605f3b84"],["/img/zhaopain81.jpg","331189d0eb61b21284b4a72c1974330e"],["/img/zhaopain82.jpg","b02449ad88b595ffe244aceeb4151a28"],["/img/zhaopain83.jpg","7add2acbdf50c92eeb8c487563a8fe3b"],["/img/zhaopain84.jpg","5784a980b8145457c92d8bbb4a283912"],["/img/zhaopain85.jpg","5affa5eee7a332b975fb7a8662ecea38"],["/img/zhaopain86.jpg","423225c835de8b583404bb9fd1601202"],["/img/zhaopain87.jpg","413f113f60e26c9e91756013beec8026"],["/img/zhaopain88.jpg","6fdb7773a297d052736a742c83e67a1c"],["/img/zhaopain89.jpg","5530b2d1cb0a75e329b305c963c46eb3"],["/img/zhaopain9.jpg","1b4c8a5c4c9de0ea8ffdd6cd9ce70d2e"],["/img/zhaopain90.jpg","e603e19c00e45e10e80280a27601cb9d"],["/img/zhaopain91.jpg","3ef7bb1885652eb67e0e0c3b58f6689c"],["/img/zhaopain92.jpg","1e04bc67a0b444afb1a2b0f9e780dbae"],["/img/zhaopain93.jpg","f4ce1edc155b825a55d06f175326a73c"],["/img/zhaopain95.jpg","1cc5c3c54901dba40174fc3946955640"],["/img/zhaopain96.jpg","6974f41ed0ded7b758c48044053044fd"],["/img/zhaopain97.jpg","55f1e2f1084d8764bd0b086583093477"],["/img/zhaopain98.jpg","b7530047faf72ab2942dd8b3cf1eb83f"],["/img/zhaopain99.jpg","0014d23bca6e1433db6cc360e9f7ce57"],["/img/zhaopian1.jpg","f76b77527df54756ed4fae8cced879c5"],["/index.html","2cf03276ef953b55cef63aceef9ebe34"],["/js/chocolate.js","4826caaa586e99d8fee8c5afbb3e70c0"],["/js/custom.js","529d0eeff76b63203edf3305bfc831bc"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/rightMenu.js","68db67f6c6ee6b8db0eb0ddd7e85d2ef"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","fafdd847299ee73d084aa36ced9bce97"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/live2dw/assets/moc/tororo.2048/texture_00.png","9bd791736cfc91b62670dee5f7fbd45c"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","8dc2d3431edfb20c047bbb85fb6c0e90"],["/page/2/index.html","f3788e22bebc8866e19425c573be72da"],["/page/3/index.html","eb657c98475131c807bc93c40698afb2"],["/page/4/index.html","83f417c6f255c147733d0cb9cc14cf82"],["/page/5/index.html","d40f38ca6f7d1dadd1d134bc96323e80"],["/page/6/index.html","c4825327209b2b93bb6f5043d6185461"],["/page/7/index.html","83909db24f36bdc4df72d94b212260ba"],["/page/8/index.html","729808acb4624b8ebc0d412cfb5a56e0"],["/sw-register.js","5870c8bb9566cf5bd04073f5a2189709"],["/tags/Django/index.html","503927e9d3c2ee107f29418504648399"],["/tags/Python/index.html","204e0ec12f2fa8aeebc9eb36077af936"],["/tags/SonarQube/index.html","d5964bb4b73fa32c07c546921b23e5b2"],["/tags/centos/index.html","3803bacdbe04c0e92601e2a2c197216b"],["/tags/docker/index.html","50157bb6e9363c17c412afe59dd8fe0a"],["/tags/golang/index.html","b7c909e91a3e3875b2fdc41eabddaec4"],["/tags/golang/page/2/index.html","670f22b80bfb1e5fc13659bbf6ccc5e5"],["/tags/golang/page/3/index.html","fbffda1ac934e9846655e7698c32224d"],["/tags/grafana/index.html","9a361c86f712474c9993cab65cf466a2"],["/tags/index.html","a73255f42a90a90542f7dc80b14c89cc"],["/tags/iptables/index.html","abb2ffcae7b092c9949f74a9d50cd30c"],["/tags/jenkins/index.html","ff4d24cb16049e6485740608d4925088"],["/tags/kubernetes/index.html","3034baee9c9f05171b9306d303074451"],["/tags/kubernetes/page/2/index.html","c3cb3fb79777d32a53e8e499378cbfd0"],["/tags/linux/index.html","af650489c8e755f198cbab373d94e1da"],["/tags/mysql/index.html","d004016192ea56896bbe4a02c9755367"],["/tags/prometheus/index.html","742ff4f22284419a1107b0d6c91dfd3b"],["/tags/svn/index.html","64d216c2d3d22dcce5e50d48d0d7336b"],["/tags/云原生/index.html","84c3f8ed22279457476a3510a5cab594"],["/tags/云原生/page/2/index.html","2b30b9694f35ebbc1aeed93e990a3b03"],["/tags/云原生/page/3/index.html","25752da9a8b26cec0d0d8b92e1fe1097"],["/tags/云原生/page/4/index.html","f368330865f8587610c5dfaffc6280f2"],["/tags/云原生/page/5/index.html","df0979a6c935e390494ac70b6acf8f9d"],["/tags/阿里云/index.html","6c0b122b34bcc6b1a472d180489825da"]];
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
