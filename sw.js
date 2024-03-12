/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/03/06/MySQL读写分离架构（MHA+Atlas）/index.html","43536f83552ade98f4041908a97e1cdf"],["/2019/03/08/MySQL分布式架构-MyCAT/index.html","5b93ea9f96598ae477d928fd94f2be8b"],["/2019/03/14/MySQL物理备份工具使用（Percona Xtrabackup）PBK   XBK/index.html","596d8f1e34961aa1c57e0dd19efe5f97"],["/2019/03/19/MySQL 备份恢复（mysqldump）/index.html","11dbe0829189d76f06b3648d0f1b034c"],["/2019/03/23/MySQL主从复制（Replication）/index.html","fc00a5f80a63564044338a514075c6cd"],["/2019/03/24/MySQL MHA 高可用/index.html","87570435a24893b1daae01094403eec4"],["/2019/03/24/MySQL 优化/index.html","12243a26f618d1a5cfe1cacab1ec25e1"],["/2019/03/26/MySQL 日志管理/index.html","832709e1d02dd5257873c5c93fe5765b"],["/2019/06/10/扩容根分区/index.html","5fa50e2cc54114c5d62dcc8d718ee803"],["/2019/09/23/SonarQube代码扫描/index.html","f1f6546e16466150dc63eabcbaae631b"],["/2019/10/10/centos7生成随机数/index.html","e0cb2bb941e00b01bc61f35fd72fb1b8"],["/2020/02/14/promehteus+grafana/index.html","1d7093903cab038226d0f645b45d730f"],["/2020/05/02/pipeline分布式构建和pipline基础语法/index.html","8e44cd4269b19af27f43d5b5258e299f"],["/2020/05/13/iptables相关控制/index.html","2e9abc07306f4087811a382e1fb5aa5a"],["/2020/09/08/centos7搭建svn服务器/index.html","d804f906f53dd67aea2f85a5a015b2a2"],["/2020/10/15/ab命令压测/index.html","8b4757da49a4ea6d14cac691df13c8e8"],["/2021/03/06/服务器硬件压力测试/index.html","426f67e117156bc701f48c4d1b2e3a8a"],["/2021/08/24/rsync+inotify 实时备份/index.html","e2af455797d16677d4fcddeebd205aea"],["/2022/05/04/部署harbor服务器（https_http）/index.html","ceeda7e76a819119c318a66ccd777945"],["/2022/05/23/记录服务器被挖矿的处理方法/index.html","9c651fcdc5e6b1f005d9cc4c6d3b1279"],["/2022/06/20/kubeasz 二进制安装k8s高可用集群/index.html","f2769ae4aa476db1609711534528d6ee"],["/2022/06/21/kubernetes安装coreDNS组件/index.html","c9a27570a43a9039a87ca7305cf52ba4"],["/2022/06/23/kubernetes-ETCD/index.html","ad7f49c5b4d3df615691a7013d2a1bd8"],["/2022/06/24/kubeasz -etcd v3 API版本数据备份与恢复/index.html","7545f711efb4fe1eb3330fd72071eb77"],["/2022/07/01/Deployment副本控制器/index.html","fca13ee6267046ac0948ba9d21247ada"],["/2022/07/01/RC RS副本控制器/index.html","651cad39f9eaae0fff1255144a93808e"],["/2022/07/02/Configmap/index.html","72f301f13f4c3088bf9e81e574aca1c9"],["/2022/07/02/PV PVC/index.html","cd61076d62bef85ee6eef332e99a9900"],["/2022/07/03/Service控制器/index.html","b61a005f9d744d39720dedc852a7ff4e"],["/2022/07/03/Volume存储卷/index.html","f2a3f8eca0dc2c9105eb9a0d7b06aba9"],["/2022/07/03/secret/index.html","90c319a6878d6b1e3d1d02962dd81e9b"],["/2022/07/04/k8s-job cronjob/index.html","0ce931f17034b3415d21ae54f565c12c"],["/2022/07/05/kubernetes HPA使用及测试/index.html","dd65c747cec4ac56243da607697af35f"],["/2022/08/02/使用阿里云oss静态页面部署服务/index.html","502532592cfcb282352e205819167baf"],["/2022/08/04/基于centos7的Openssh版本升级/index.html","b4b18e9d4fb3611cbf566fe7bffecf64"],["/2022/08/13/防止内存碎片化/index.html","10221975953c78560da3153d3b7a6870"],["/2022/08/15/Pod异常状态排错/index.html","94a8285d1f5cfc79e117512bd416a737"],["/2022/08/16/Jenkins用户权限控制插件——Role-based Authorization Strategy/index.html","75d250ddda74bce5aa3d23746ff8c333"],["/2022/08/19/kubernetes磁盘爆满故障处理/index.html","3ea16758bdd3fb0b4524d3e9eb21af45"],["/2022/08/23/分析 ExitCode 定位 Pod 异常退出原因 /index.html","ae453a7c24c379e4d87813ae3154d5ca"],["/2022/08/23/容器进程主动退出原因/index.html","a5732e4ed4c7ab59bd07d089bbda27d5"],["/2023/01/13/【mysql数据损坏，通过ibd和frm文件批量恢复数据库数据】 (1)/index.html","9da5f8a9a359d0c740df20a5691775b4"],["/2023/02/12/Golang分支、循环、随机数/index.html","9f598d0f45c54ba008d046617f5946cf"],["/2023/02/12/Golang线性表-数组、切片/index.html","6ee5849e6ecf486b7a915ca835c3921e"],["/2023/02/13/Golang字符串string/index.html","cce3cfa6ad4d01728180331163ea9408"],["/2023/02/23/Django视图类View源码分析/index.html","3e7a5f90e51abfe59a83a87dd383db7f"],["/2023/04/14/Golang哈希表/index.html","b3cabf98643c20bc4b95da5801a364f5"],["/2023/04/14/Go函数/index.html","ec84ba1f8cabb744aa4af40cf7686926"],["/2023/04/15/Golang List/index.html","57285eca3bd4b8dd39e984e53bfec989"],["/2023/04/16/Golang递归、匿名函数、作用域、闭包/index.html","86e2dbeac04ce4970cdc4b47cd609f99"],["/2023/04/17/Golang变量逃逸——堆、栈/index.html","95dbc8a45e2ac56e344033dcee22dd7b"],["/2023/04/17/Golang结构体/index.html","1aa600e731617b7e649c44c9da905127"],["/2023/04/18/Golang接口/index.html","40e2be9bd80a6e83afba68be590308fc"],["/2023/04/19/Golang错误处理/index.html","ab157b76b74b2485ac4533d461227772"],["/2023/04/20/Go中的面向对象/index.html","e9910af6864b399708495348577f43b5"],["/2023/04/21/Golang序列化和反序列化/index.html","f9b22bdb475f0dda2215fd404fa28624"],["/2023/04/22/Golang时间/index.html","9990e4f34b247d425b792c7e601aa9d7"],["/2023/04/23/Golang包管理/index.html","105142fef1f2b031c46f78f867209837"],["/2023/04/25/golang包管理/index.html","bb1e7c8d4293181edbce53c72624702f"],["/2023/05/01/Golang日志管理/index.html","e7fde07faeed90c7cc90b7baf2fa218d"],["/2023/05/03/Golang数据库标准开发/index.html","38862f5f92af55f060cd12e2d7f74a80"],["/2023/05/06/Golang中的GORM/index.html","3cc5ea77ccd5ddd190c722e1523f7143"],["/2023/05/09/Go操作MongoDB/index.html","efd2b41bb7c610688c4a3fabea5d90af"],["/2023/05/10/进程线程/index.html","a280fcc253ac79bf728521bc8f46d531"],["/2023/05/12/TCP编程/index.html","83f966e314dcb816f679bc5f5299261f"],["/2023/05/15/Golang协程/index.html","fbb4c0e32603d416e505a98f1d6dde95"],["/2023/05/20/Channel通道/index.html","0039cbc48ed2ef755a63872ecf88efd0"],["/2023/05/26/Go文件处理/index.html","56d1f1a4fee18f22fa10ffbdb0cc76b5"],["/2023/06/01/Sync包实现并发/index.html","ed67667a980cbd81419f70dbbaba6c82"],["/2023/06/04/ServeMux、httprouter/index.html","2b1e0122b8ec9961fe4b11bc07a061fa"],["/2023/06/23/Gin框架/index.html","81c13a023a629e329d35960fd4da3481"],["/2023/06/27/基于IOC解决对象依赖问题/index.html","3ba88a33fd0091e7a7dcf5d030838ce6"],["/2023/07/13/Vue状态管理/index.html","857a1d3aab4f5dafe20ff1b605ffa2e1"],["/2023/07/29/根据router显示左侧菜单栏隐藏某个菜单选项/index.html","54334631917e34792883f690b02b9156"],["/2024/03/12/记录AWS Oracle实例数据迁移的艰辛过程/index.html","6c4a0b68e13caa345f4fed32edda7260"],["/404.html","ec5f1cc8ebda34f583f662b211090871"],["/archives/2019/03/index.html","e205e5048c7529c479d04d1fcb3b6989"],["/archives/2019/06/index.html","98d3b9c7796b58cce9dcf4d440f5a4c2"],["/archives/2019/09/index.html","39395f1613b915cea2510d8680e82f16"],["/archives/2019/10/index.html","c66d9d8608bf0972452529fedc5ee929"],["/archives/2019/index.html","e54a1e0771a76b27d3e193f3c96575e4"],["/archives/2019/page/2/index.html","b6560569a1d61eb83a2fe2132b6063db"],["/archives/2020/02/index.html","62113969cf2dfa7768da582dec1045c1"],["/archives/2020/05/index.html","3629b9f5115df2da9433765f211d174a"],["/archives/2020/09/index.html","cd0d3fbf1d81c8a97a58cfb1059e7773"],["/archives/2020/10/index.html","8e3679ebca86d6a2f772ef8968965631"],["/archives/2020/index.html","e3cf24f36e44ee646afb31d79bbafed2"],["/archives/2021/03/index.html","810f9784af5286792c4e776aea1c1a6f"],["/archives/2021/08/index.html","9a5a3506e71c1a304b8a47ef3e262d33"],["/archives/2021/index.html","f7987919c37c384f03cb88b868188887"],["/archives/2022/05/index.html","f7afce3b7dcd72ea3b8b8eebe9d0f7fb"],["/archives/2022/06/index.html","b4488da2b065ec107624de644efdcc3d"],["/archives/2022/07/index.html","41c11958894046a37b634872a5629f37"],["/archives/2022/08/index.html","7dd3d75bacad649b214442ac63e9e8c6"],["/archives/2022/index.html","5723d16d27f028338a7c7f76ea2cb34f"],["/archives/2022/page/2/index.html","6ab99647f9364026660c454dc5ac3a0e"],["/archives/2022/page/3/index.html","266aa1f9e30700e05fada3ee660fd356"],["/archives/2023/01/index.html","fe96a6ba1d46968df0853f6126c9376d"],["/archives/2023/02/index.html","83b47f60b555486092e772ac71aed8d1"],["/archives/2023/04/index.html","dbbb1940795cee039bb77a70167b7d55"],["/archives/2023/04/page/2/index.html","7870362a85d0307fe1b786fb00e353ff"],["/archives/2023/05/index.html","7e84238c6e2b54500f2ece3a9a035afd"],["/archives/2023/06/index.html","5b0f88ae5b5e2bb2aa1fb7518ac1596b"],["/archives/2023/07/index.html","7d150fa5dbc9ad01a5082038fcea4552"],["/archives/2023/index.html","16f088850d934e3b693861f46c8cfc8e"],["/archives/2023/page/2/index.html","c0694c0fa62ff38256364cb26cd0ec13"],["/archives/2023/page/3/index.html","42ede8fbcc8c23cbf4aa90446bcb77ca"],["/archives/2023/page/4/index.html","8434cf235cafb2440aed9dc367bf234d"],["/archives/2024/03/index.html","c3d77d99ee3c7179dca13cf52e09c24e"],["/archives/2024/index.html","186f80c8ddfcf8d3532eeddd12d018d4"],["/archives/index.html","c8e5b93a354ecb6a8476be25a8c35144"],["/archives/page/2/index.html","2d60d880f9781ca160a4c8ef0a996316"],["/archives/page/3/index.html","bcc85cc97e313b56b0df3931ecaeb092"],["/archives/page/4/index.html","3b8f7ba6329e64507bb87e8a9a9be0db"],["/archives/page/5/index.html","18592556bb66ca32ad3632a0cdb696d6"],["/archives/page/6/index.html","df4623e20454e38d8ce7964850a5b0ff"],["/archives/page/7/index.html","b79dffed517c0b7074b5bca00b59e4d6"],["/archives/page/8/index.html","b26ee572ad8863482b673b086bbd3b02"],["/bangumis/index.html","5289629c756e8690aeb65ea4d181113d"],["/categories/Django/index.html","c0261efed344e291d7f3b6d747547c35"],["/categories/Docker/index.html","1c0fd415fa841399d3d37798e3c3b882"],["/categories/SonarQube/index.html","ff90128ee15f0c4af1d35ed6a30755bf"],["/categories/golang/index.html","477bb72a971d39224c58b67615c77461"],["/categories/golang/page/2/index.html","a1dfc8a00235ba1c9c95a73a19e39260"],["/categories/golang/page/3/index.html","00cc649a53b73cb387145b3c8f887bd2"],["/categories/index.html","534f6ebf4a81792ae46f4cc47197251a"],["/categories/iptables/index.html","53602b33e51167c6a75425f81c583bf0"],["/categories/jenkins/index.html","36a0c8bf3f9e39fa3e307732ed57fa62"],["/categories/kubernetes/index.html","c375fa798f6f37922e75176757ba35ff"],["/categories/kubernetes/page/2/index.html","ae242697a31b6a01fd66bfb28ad60c14"],["/categories/linux/index.html","bbc072919534b2edd37beaad5e37f574"],["/categories/mysql/index.html","bb8d03baf9290972dce57af87cf8340d"],["/categories/oracle/index.html","a0356880ac28216b543a82ddd769ae96"],["/categories/prometheus/index.html","9f2a09a99be0a516b9a139d1187c22e2"],["/categories/svn/index.html","dfbb17c583159377478c384278b1ec31"],["/css/background.css","2942635f3e138bf3f0652299cf376c84"],["/css/custom.css","d8f1986b73cb77a533b567a4cb45437b"],["/css/index.css","d260c62dab02c343c586afb634d6004a"],["/css/lantern.css","c8483fed1ae9927bc6fad5817ee8d7bd"],["/css/rightMenu.css","036623ed00b65cd7a5b31dffe2a25c4e"],["/css/universe.css","52c685572ce95860fe8ddf20fb03df83"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","c090f8baddcd21d9b68e3dd94d0fefd4"],["/gallery/mm/index.html","9d7a8af77a5cabd0fb2dfea687873078"],["/gallery/rc/index.html","6da1719b087fcc7da71e6b466e6dd46e"],["/gallery/古北水镇/index.html","d40cd0bfcd0a1b42779ab961d891abfe"],["/images/12cHr9ikXtyQXMGMLAsneQmfz5lpgER4HJ8TZ6WRzfk.png","bb174a3f62a1a776cc0274fcc9b3b2f1"],["/images/227umIkj9ueakAlc6D0TMhuymUnQnccKjWbdwT7c8v4.png","4e0c69c2afee2627859ece357f269ef5"],["/images/2gLoMVUujOjJ4dq4WTPgFvIEpM0GN_3lWAxHCJWdu_s.png","f3bb98e1b19cb245a6c1afbc680df807"],["/images/3cQaHgUR1zV7txTfb5Zv21dunowx3Nr8WxxCf4rV920.png","fe10afb64ba046de42cc2ca270c88956"],["/images/5171b5b5c996437ca7a575f7f8e62072.png","265460ed10fe96faced2ee4d73b8d504"],["/images/5a605348057d4eb2a68f37adcdd5c0ef.png","92172850d865b6fae07d68f881814062"],["/images/5bc5731d8fa34df2859ac53ac2fbfc42.png","4d3bb971a816e82a00d700081e75a235"],["/images/73a87cb4c5f64aa1b9b2acbb76729524.png","74ff27631a77ad22eeac0345b8e99ea4"],["/images/7S0BLT5M_pHphocDPiOZMGnDg2nKU8_qoATFiQZg66E.png","9a0c8fd158de8c2c20e13bc33462519f"],["/images/8c8ea20d5edc45929afa2321bfd509b3.png","10f7df11500fb52208f3c90592a489d2"],["/images/8d4B0AZilXjz-ObG8hrQHiEqgqMYnOD0pndKK3I-7l4.png","b6fdd105a816ebe9581a1cf350a41e4d"],["/images/9Spf0KfzlHu3RvMTBqN3r_VTvfiR5EaplbLhiT4WtvM.png","22fa2d23ca4b8d5e1baffb32c64c48c2"],["/images/9ursxjNtKpQ9LIfDPeKTakw4TRCipaBkRqmaCp67lD0.png","636b9e0456365ea5527a3dcd0fa76482"],["/images/BDP-9YI67K64UgUIaM4LFXWCdmzzRjGhBWuxyga9jSo.png","6ba9ff32cebfaca111e7a38f4d085825"],["/images/F8abdMJNV7fdb01bhGVMyxod76mnv9YwmbiuGqVrbak.png","dacc6f6e0aea6104af3badaefe91d32b"],["/images/FNuqQSg-6IBBsbPSr1xWr2TRRRITNmSaXPfRqfggvuI.png","1d136b353d7a624a40d32266e88e4528"],["/images/Gpv2A-igzF7gS4p5i4VfUPvoVwhfDlaRIdmaFNB86hk.png","5e898f69818ab09640a16e606c647600"],["/images/IYn3mikXQ-6q5ivRZQxaGgGu_s0wXPj4nrWK23IzVpU.png","aaa6b993699026bc705da659c5d6480f"],["/images/LARO94NSUaanvTauyISES6dY_KIT6zNWycgjPYjLwWM.png","c12d907e66f282586c8de3f5ebc08684"],["/images/PdOQSGRA-04_7y1ZYpow_iacKReUL_XvlN8eZfqWmCE.png","360b5e7d858e556c7ef1c95b8680f088"],["/images/QdAIibaNl6zjCAfjw3l-AdIqVvp4gnV1c7dNfBesKrA.png","a6e585ab5150bfe5765f561de40621de"],["/images/QzaKfUq0IZSFi0iI45-KHuXLjXsmCfrTExRYt2Qucoc.png","9b33ec25fe4d448438506c031bd5067c"],["/images/R4_Pj04NJNofQjeP7O098UvyH3-7Mt--bCCv4P-wxa0.png","724a9ed494f354e0900f244c37781648"],["/images/WugGk16dhc-uVXrpjIqWqTtwGhKRFR-_k0HQQYJ-pnw.png","166975aa8e49a80f0d6ab81cd593c640"],["/images/YMVJL_RZhGq7C_VVOv0uy-cajO5tUqc0EqWWQQA1A9g.png","d4a935df47c0912fc6d3be078799d1d5"],["/images/a3e96f87611e480084feaa655ab276f3.png","b05da2de5ba71cdeca65b31b7ef6e629"],["/images/aab899006552425e8aa1e07edfb07aeb.png","45e1e8c6bd1239618b7e2d02599efdf1"],["/images/an05QaHBTp7gybS2WAZA9-0y4YZdrDatRpKJp8TpEVc.png","f31ec5ec8a780ddf39e12c2b801b7516"],["/images/aws1.png","4ff8539feace11995870edbb020b53dd"],["/images/aws2.png","48d70203722b75c479b70a36003222a2"],["/images/aws3.png","469b0e98aa485abfaa5dc7c40a9fb2b5"],["/images/aws4.png","0b2f508c517e9a18def8cd21ff40211a"],["/images/aws5.png","9f646d0c06be8d13a9022f38328e3bf8"],["/images/aws6.png","4241c3bffd5cf71a5a4764c4ddc4a57e"],["/images/aws7.png","c2579cd9e7c0c70cc4826f977d202bbd"],["/images/aws8.png","048ac7b181b47682b13183d88fed1555"],["/images/aws9.png","942ea6dc81afefeaf192ba70999022a7"],["/images/bfba52d98a1e4b1f9d3a9acd4457017d.png","6242fae9c8eae5dd3636c00a6da2c017"],["/images/c0wZVZywXOppPf_EakxP_EqF14PsEzNpA9kXDIHvnXU.png","d01a16a7c20b591ebf47028a4b72bed5"],["/images/cGczYh95uVn_E_XRJd719AQyRgUMRg69MAIwRrYI2xY.png","f0bbe09aa173bcef2f2b97f8d0b01394"],["/images/cf96dab942e44a1285fe17304cf6a67c.png","5769d0c6d013ade4837105313b3ba4c9"],["/images/e564e16a61ba434b900ae6112c836b44.png","4a12ce40a9aa82c2bd85f7bf9b42bdbc"],["/images/e64f2768643c4b0b8bd64f4c953a6696.png","c771a51b5b9b54fe369c1e23c11084db"],["/images/ecd14c1de69643789dbdfcd1b024b4ff.png","91fe78461bd2330003dbb678c2a2d431"],["/images/erWveWtSLzT8lPZIU8GSBLSppOGETeHJSadxKbvM8fM.png","afda8efaee0f0e5d1020af21a8df815d"],["/images/f4d20adcf89a424ab5536107427677bf.png","f1edfaab6e2917fbb2856bc3c0cd3c22"],["/images/hIeiHevWkLJZiTON48hDf12pL6vr4fRGnCp20P0Utls.png","08d4d26eeec6c1f1c69fe7a044fce0c0"],["/images/jrXRa7egP8ZJprErQGCJzH2QvcwBf7f_gjPuRZLOiGA.png","90129d7004ca98b27c3ae3fedcbdc5de"],["/images/k0DZ3gJOew5snaPaeFgWCU-I5o67oWWlNhFROQZsvk0.png","6ba543399d37d77ed06c250e65122ac5"],["/images/k156_DyWGJAZDlSkdI262qdLwZaaCMonh90tGW0GSSk.png","0d3f8e5b60584fa243256c74ed8f9f47"],["/images/oYugO6NnOV-fb0qJlsGlfiB7E0wLvwedWxg3qS4kubQ.png","c28f2ce37c319e8f5ceb319b4321cf83"],["/images/pBJqm0jtt8R1VWcFHS1DD8m9PWDQ7X4_7UnpXpYouCc.png","c41bdba9b775f3f2a3fc4bb27f2f112e"],["/images/pasted-0.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-1.png","fa0270d7982df45acf8bec41f258fad5"],["/images/pasted-10.png","5d0d6d8aac46e34b30092f808950a9d3"],["/images/pasted-11.png","0784299af846da4168cad054741957f6"],["/images/pasted-12.png","e258ff6c3291821a2b9bbc6a25574624"],["/images/pasted-13.png","000a03ee30cefc56d0749078cf04a949"],["/images/pasted-14.png","8e547d601142697e448fbb4019bbb06a"],["/images/pasted-15.png","950cc9a62554680e2f0570b97e564259"],["/images/pasted-16.png","1707596a28a9b697891bc718c96175ee"],["/images/pasted-17.png","887da59e5df5c2af9d32fea3ffd5e3f7"],["/images/pasted-18.png","5f724508b49e8e7ba1305062ef8e150a"],["/images/pasted-19.png","a47092a023a70b2427014e75873bd6cd"],["/images/pasted-2.png","0a20960a3ee7446d34a8c4cc687b7adf"],["/images/pasted-3.png","7fc1a4e3fe8ab621dc0aa0ad4309f266"],["/images/pasted-4.png","d15fb5188609b444b3f6710ecf9b139c"],["/images/pasted-5.png","ad234216c2159391c25636525c314e41"],["/images/pasted-6.png","9600a48f0f98bce154df36c0a4dbbdc5"],["/images/pasted-7.png","b42122e7904f38ca3e9a32908f872f36"],["/images/pasted-8.png","f5b4699a2bd89e9027d889247b9a1283"],["/images/pasted-9.png","1537c8048729105cddb53dfa80ef72d6"],["/images/sSSXFVDESR7Vg65AC1NsKMpx6CHd0D3BQ379bjDY4IY.png","31c6722e1602a13e28c66948cf0e163d"],["/images/uk6XvIO7f5mrpwH2LAO7j8W_bKLuJQShRPZG0xiJTHs.png","ab6f4e154326cb997b42ff95b202d0f7"],["/images/xLBNIVYLG-AcXxWFv1hmKTRmdzwGiXmMTF_dRmoz-NQ.png","184ec73a4971070effd0251c72616776"],["/images/ximOXiVaTWYZnsZ9N_87_7NuNaY7VOlqtqA3kDWSJJ4.png","9c8c6a73debf2909a43f0bc004ad27cd"],["/images/xmdfVH9Turoaa0FtsjXQZTyhDyfQ3WhHGXo4Q_jzPBU.png","67b965e6d8bf08336f4e3bf873c98053"],["/img/12.png","62ac1ef86217d9ac116fa3d22d78dd9b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","e26ff9d7f5db82408a3b9d320a46ed48"],["/img/centos.png","8c9381c65647670beea0443be09905d8"],["/img/desktop.jpg","13c1182799ca5447fd6493c209ae3512"],["/img/django.png","e2636b0adb0be0021df95aedf7280fe8"],["/img/dongman.jpg","27894a3d2f116821649423e50a41d0a7"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/golang.png","6e384f789f93ac84d37c1ab56790d697"],["/img/harbor.png","4b104adfa004775ce392037ccc140b62"],["/img/harbor2.png","7545fc3e108b3d60cf61ee2010d6e841"],["/img/inotify.png","9ccfc735d97078fba061989fdd50fed1"],["/img/iptables.png","20f88af231b35ba15839a4cc779e2222"],["/img/jenkins.png","5401eb529f0b795e0e549182e516072f"],["/img/jenkins1.png","dc3b8e8cb59e5864c4f7fe2dc13eab9f"],["/img/kubernetes.png","3428de86fd4ecb4eca7e4f3d539c59e2"],["/img/mysql.jpg","331b83381bdb0c15668bfdcd266b1034"],["/img/oracle.png","eb7393d616a51d1f8d701e57004cf232"],["/img/prometheus.png","7ab7b7c19a98e723a5f2646669a01311"],["/img/sonarqube.png","5216669e0fbcc6c387dbf29a5321bfe0"],["/img/svn.png","895bfaeb2797f9635f660b5ee00946eb"],["/img/touxiang.png","b17d8c86cf0c70c30e7d7327dd5c7e4c"],["/img/wechat.jpg","2516cfa5ceda8f42ac6ba9efec9d88b3"],["/img/zhaopain10.jpg","1fcca24b33fa1624524f9856bfd5dc6c"],["/img/zhaopain100.jpg","97f2108884b90ae9c9af936bbdf8c1e4"],["/img/zhaopain101.jpg","e3e03e2568cb8957b808a87df61369ad"],["/img/zhaopain102.jpg","118c969a37253a57c81d52d22e124a2c"],["/img/zhaopain103.jpg","45adb21426c31ce084bec88a366f3bb3"],["/img/zhaopain104.jpg","aad81e29b69cb302c9f5d7d65c160420"],["/img/zhaopain105.jpg","2801ab07f2580a728d0d9816d2f952d6"],["/img/zhaopain106jpg.jpg","85bcc0290bb86749f557744a4a597837"],["/img/zhaopain107.jpg","ba836c62b3596f65efe6ca55545b6f8a"],["/img/zhaopain108.jpg","5bba59a0a43331b2cb2c101420d35c7e"],["/img/zhaopain109.jpg","004b38682c1fc6d37e5789ff9393c905"],["/img/zhaopain11.jpg","78c42bc7f774b3c47e4ad500455e98d8"],["/img/zhaopain110.jpg","6d5ad699ddedcd9312f56c36ed974ab1"],["/img/zhaopain111.jpg","d60f82d50cb2abcf648e03c3aef72f7f"],["/img/zhaopain112.jpg","646d687facbffc0357ff30a3950b5008"],["/img/zhaopain113.jpg","682a02f8052e1b92a3adc003c17b7bf2"],["/img/zhaopain114.jpg","3891d88bf82e5e11b97dcdf987034f80"],["/img/zhaopain115.jpg","98bee9f6d0992da82d66d9c02fd0c057"],["/img/zhaopain116.jpg","5013c9aee7a9d177f025db87dc9f166a"],["/img/zhaopain117.jpg","fafa35921b885ff034a4b7710d2c1722"],["/img/zhaopain118.jpg","5f84a421caa028738b0a30cd26ce7b33"],["/img/zhaopain119.jpg","9adc3322c63cb0d2284ca21ead2ea93b"],["/img/zhaopain12.jpg","c4b8ec090835bc228a7f422d08650f29"],["/img/zhaopain120.jpg","682a02f8052e1b92a3adc003c17b7bf2"],["/img/zhaopain121.jpg","80a6ee2656ab2b77f327ecc667fd3bd1"],["/img/zhaopain122.jpg","80a6ee2656ab2b77f327ecc667fd3bd1"],["/img/zhaopain123.jpg","80a6ee2656ab2b77f327ecc667fd3bd1"],["/img/zhaopain124.jpg","4f5b33bb60401e8cc93a374d26d3e61a"],["/img/zhaopain125.jpg","4dbdaa93766f575fa1500ff061093891"],["/img/zhaopain13.jpg","cf4ea6b0684d800328c4365b5ab5d59e"],["/img/zhaopain14.jpg","c82c1142d88aae943c3e24d719e50075"],["/img/zhaopain15.jpg","d91ed1a046124e5a51060723cbd8d103"],["/img/zhaopain16.jpg","d023ce7128d036aa3323fe59be6a6202"],["/img/zhaopain17.jpg","9dcd5042b3f6aeeb2551992e48803397"],["/img/zhaopain18.jpg","f18f1c0b40e07f7ab1abd89bf2bfcd09"],["/img/zhaopain19.jpg","088ec807fe21a61b962b204660cc768e"],["/img/zhaopain2.jpg","121a6ecc79da95a172483bb297bd2eae"],["/img/zhaopain20.jpg","51a37ad1eb98ddc50ee1ba51f2f9ce9c"],["/img/zhaopain21.jpg","fd95e383457ed400aad90c384cb08012"],["/img/zhaopain22.jpg","12db9cf284fe2143d36136aecc69e065"],["/img/zhaopain23.jpg","ac0a79cb73775b224e3561a4ec44ac08"],["/img/zhaopain24.jpg","0f34d129535b9d8c110e71be55cdc4df"],["/img/zhaopain25.jpg","c8d8e28e8d16cfff3dc5b58635977b86"],["/img/zhaopain26.jpg","6a67df60edd669b6e0e6b76762fea86f"],["/img/zhaopain27.jpg","be657e8fb134582c4073857417df5593"],["/img/zhaopain28.jpg","71bca58f726116c6ab4cf8dddf093728"],["/img/zhaopain29.jpg","f7a6fc61b463f421e4acbd4b438a6ee6"],["/img/zhaopain3.jpg","4e95ebd7d2751a9e249725d8c04e7d05"],["/img/zhaopain30.jpg","29081a67154616f3dcd2aca3ed6448b1"],["/img/zhaopain31.jpg","47f3af98dc2e7ba5bb7abcfe948af242"],["/img/zhaopain32.jpg","6c222bd9af227dc748a3c726294c2a37"],["/img/zhaopain3294.jpg","bcd5bf2958f131bbfbec8e741c527f32"],["/img/zhaopain33.jpg","242aae2a3cfba72ec5b0f096dacff6af"],["/img/zhaopain34.jpg","707838b542f2af635fc7d76882af0a11"],["/img/zhaopain35.jpg","fb468bde038864202042cd74dd9eb594"],["/img/zhaopain36.jpg","110995fad7b1f1bc557175c0e0baf000"],["/img/zhaopain37.jpg","21d3df31f946007e13c3890f2923ef62"],["/img/zhaopain38.jpg","0a2a3cc2512d1dd79e34f2bb14d18667"],["/img/zhaopain39.jpg","917c1bd41907244331f05e1ebc5a95db"],["/img/zhaopain4.jpg","391e48f26142a898a95a052902240a17"],["/img/zhaopain40jpg.jpg","d84fb0cfba929c04e10734156d359848"],["/img/zhaopain41.jpg","e7a573d7b7b7b4291e819941fe2d211c"],["/img/zhaopain42.jpg","01cd6a1e6a8b4ae77195f5928a8f88b3"],["/img/zhaopain43.jpg","b424523d430d952342924977a269c494"],["/img/zhaopain44.jpg","9a6af39b763096df48719c61d0cde4d2"],["/img/zhaopain45.jpg","bf6dbc2bb846712905a19ffc973bbc8b"],["/img/zhaopain46.jpg","6742ce95da3ac95eb791d493e372758e"],["/img/zhaopain47.jpg","9d415598990befb27fbe3c1c97124db4"],["/img/zhaopain48.jpg","6bae0a69a0ae88da5aa9e2294f5cd159"],["/img/zhaopain49.jpg","4208a196b9baaffe957cdff1de864245"],["/img/zhaopain5.jpg","306ba0ef20d0258348757beec62eca5a"],["/img/zhaopain50.jpg","bcba12c17e4491e7ac27269e97dcfd82"],["/img/zhaopain51.jpg","f6c0dc8f0c1e13b4eb4c963f4599dd95"],["/img/zhaopain52.jpg","d204a9b1e750e20da7064462cf8199f8"],["/img/zhaopain53.jpg","be920eff14a9f0c3b12e32f87e2a5e56"],["/img/zhaopain54.jpg","b3628a7e820e5befd57cfb42704df003"],["/img/zhaopain55.jpg","66483b6216ac898126ce30986ff49fc1"],["/img/zhaopain56.jpg","394cabcf4b84054c0fb355c698ffed0e"],["/img/zhaopain57.jpg","f746e861fefdb74d34183e585f367942"],["/img/zhaopain58.jpg","b0af6d91b201d2c8ba066af912160d2b"],["/img/zhaopain59.jpg","d7faa169735cea87bdcee95b1f6ab70f"],["/img/zhaopain6.jpg","d7c68ba228053d4f094d40cc2f8d7068"],["/img/zhaopain60.jpg","cb916fb1218c1893f6d308b782f3d9aa"],["/img/zhaopain61.jpg","d848d9a4ed314647c87a42af04900dbb"],["/img/zhaopain62.jpg","70d24fdb7d31176c4014f4bf1429e045"],["/img/zhaopain63.jpg","143d1a9ebb29a3cc587d7b0d3258b04c"],["/img/zhaopain64.jpg","68d92b4731e671bf295b486414cbe61e"],["/img/zhaopain65.jpg","3193bdb9469480ffdbdebd9d9a4bd264"],["/img/zhaopain66.jpg","116ba7545aa0d7427bf10e44b51f15e0"],["/img/zhaopain67.jpg","5341e7fa048b69d82b68e22ceba021ad"],["/img/zhaopain68.jpg","d2ccd591caf166fb83b07a367ed14d77"],["/img/zhaopain69.jpg","ca7b6640cb51e3b620bc1e307cf508d7"],["/img/zhaopain7.jpg","f37835510ac4054dc53b3e5fe6515e09"],["/img/zhaopain70.jpg","4e4fa8a6f0285f9474897853054c9d8c"],["/img/zhaopain71.jpg","d9858facb1de8afd8b7efca144074d69"],["/img/zhaopain72.jpg","eb9c0f2f27e79f06c2d1ae0c5fb9506d"],["/img/zhaopain73.jpg","eb19959fca8f7b9bc089b94888234174"],["/img/zhaopain74.jpg","20c5c777e424f1612ceb62566225d598"],["/img/zhaopain75.jpg","74f062ffb596ec1e767a287b92c75eed"],["/img/zhaopain76.jpg","a405888f010755c720e7def27b778189"],["/img/zhaopain77.jpg","c7d1e7d788912e19a7e20fa3278e55bc"],["/img/zhaopain78.jpg","dea13d48619e016c21e5c9cc2dac3f1b"],["/img/zhaopain79.jpg","0652f6ab3e258237252e024546a07ed7"],["/img/zhaopain8.jpg","9f50915b7374d9f2e75b29533d373854"],["/img/zhaopain80.jpg","dcd369f35deac30a5ce8de030dbe922c"],["/img/zhaopain80jpg.jpg","09dd94b4430cc1eaeec4429d605f3b84"],["/img/zhaopain81.jpg","331189d0eb61b21284b4a72c1974330e"],["/img/zhaopain82.jpg","b02449ad88b595ffe244aceeb4151a28"],["/img/zhaopain83.jpg","7add2acbdf50c92eeb8c487563a8fe3b"],["/img/zhaopain84.jpg","5784a980b8145457c92d8bbb4a283912"],["/img/zhaopain85.jpg","5affa5eee7a332b975fb7a8662ecea38"],["/img/zhaopain86.jpg","423225c835de8b583404bb9fd1601202"],["/img/zhaopain87.jpg","413f113f60e26c9e91756013beec8026"],["/img/zhaopain88.jpg","6fdb7773a297d052736a742c83e67a1c"],["/img/zhaopain89.jpg","5530b2d1cb0a75e329b305c963c46eb3"],["/img/zhaopain9.jpg","1b4c8a5c4c9de0ea8ffdd6cd9ce70d2e"],["/img/zhaopain90.jpg","e603e19c00e45e10e80280a27601cb9d"],["/img/zhaopain91.jpg","3ef7bb1885652eb67e0e0c3b58f6689c"],["/img/zhaopain92.jpg","1e04bc67a0b444afb1a2b0f9e780dbae"],["/img/zhaopain93.jpg","f4ce1edc155b825a55d06f175326a73c"],["/img/zhaopain95.jpg","1cc5c3c54901dba40174fc3946955640"],["/img/zhaopain96.jpg","6974f41ed0ded7b758c48044053044fd"],["/img/zhaopain97.jpg","55f1e2f1084d8764bd0b086583093477"],["/img/zhaopain98.jpg","b7530047faf72ab2942dd8b3cf1eb83f"],["/img/zhaopain99.jpg","0014d23bca6e1433db6cc360e9f7ce57"],["/img/zhaopian1.jpg","f76b77527df54756ed4fae8cced879c5"],["/index.html","af9f022737e9df9c5649ffe17fbc0fcb"],["/js/chocolate.js","4826caaa586e99d8fee8c5afbb3e70c0"],["/js/custom.js","529d0eeff76b63203edf3305bfc831bc"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/rightMenu.js","68db67f6c6ee6b8db0eb0ddd7e85d2ef"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","fafdd847299ee73d084aa36ced9bce97"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/live2dw/assets/moc/tororo.2048/texture_00.png","9bd791736cfc91b62670dee5f7fbd45c"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","4f69ac82da06f7a113fdb64f6652dafb"],["/page/2/index.html","ecc49b87e22bd944ab5ca367daba144e"],["/page/3/index.html","3e6e6562ae06b026ae988eac21a22359"],["/page/4/index.html","97ff1a9f9a699b57d20aab1f7884ce5a"],["/page/5/index.html","1b2bbac07e71e0d7d19857675343230b"],["/page/6/index.html","c5d51b2f8887adfd1a4341636eab558d"],["/page/7/index.html","483114cabf3ed9c32ce53f96927e7084"],["/page/8/index.html","c2cab4d4d87ab678ebae0138cbfb446f"],["/sw-register.js","d6ac5eef8c32187a68b7dad6d76fc0c2"],["/tags/Django/index.html","ffe5436c632f7df921ca9213d1fa0434"],["/tags/Python/index.html","4e387cad3972b434ac240c1aa41ec54d"],["/tags/SonarQube/index.html","b573c578614de0f686426f91324e78d0"],["/tags/centos/index.html","22bc742eec458d6ef570f0b665a8dd8a"],["/tags/docker/index.html","0cf88c46f9a0c8a5f22307cf8098d82f"],["/tags/golang/index.html","78646edfe975db88b381e889d6ef0133"],["/tags/golang/page/2/index.html","ecc7efd1857ac11175e6a1659f4faf51"],["/tags/golang/page/3/index.html","a26c75781946a9039770e0ac54d418bb"],["/tags/grafana/index.html","67d4c61f9541c1923b7393fc7d76eaec"],["/tags/index.html","dc43550a963764c5be919c70c7c2b46e"],["/tags/iptables/index.html","a3827bd636dde4d98d24a5e29bc845d6"],["/tags/jenkins/index.html","a16c23c96978bbc645cd6d9e8e4772fe"],["/tags/kubernetes/index.html","c21c75023425266e338d37a6f522ad40"],["/tags/kubernetes/page/2/index.html","92340b7bd1a8cd7388eef69b68553039"],["/tags/linux/index.html","5ab52ca502c206677c31dcee5cc4596c"],["/tags/mysql/index.html","b4a4b5a483fe191f57ae68c7fc164fb1"],["/tags/oracle/index.html","4e86e8429f516723e15b6cb444d65c88"],["/tags/prometheus/index.html","01089aae5d786d83d09765bf4db57c51"],["/tags/svn/index.html","90a3801d19385c54c6fdb81c9342bc2f"],["/tags/云原生/index.html","66ed727d5af8b4ef180ae73f7dd303e0"],["/tags/云原生/page/2/index.html","2fcb2444aa294ea40b8c851c90f29d66"],["/tags/云原生/page/3/index.html","31c82d2c57d567f63ffb6be0db69fdbc"],["/tags/云原生/page/4/index.html","69085e97d2ff7959be1a8a258e14bc46"],["/tags/云原生/page/5/index.html","75459353478369a433949e07dceef836"],["/tags/阿里云/index.html","945ccd25fdb2cbc8e377d23423bb7772"]];
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
