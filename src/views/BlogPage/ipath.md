## 项目环境安装
***

#### Nginx -version:1.20.2
1. 官网下载1.20.2的安装包[官网](http://nginx.org/en/download.html)
2. 解压到本地路径，我这边是D盘下新建的Nginx目录(D:/Nginx)
3. 将nginx目录添加到用户环境变量里
4. 通过终端cd进入安装目录后输入start nginx
5. 浏览器打开localhost:80即可看到nginx欢迎界面
6. 结束命令：nginx -s stop

备注：启动或者退出时报错的话
- 检查命令是否正确
- 检查当前路径是否是nginx安装目录
- 检查logs目录里是否有(access.log|error.log|nginx.PID)
- nginx -s stop  立即停止，不保存相关信息
- nginx -s quit  正常退出，并保存相关信息

***

#### openjdk -version:8
- 已安装
- 与jdk的区别：jdk-oracle公司发布的通用版(包含插件)   openjdk-纯净版(专供开发使用)
***

#### mysql -version:5.7
1. 个人试用的话下载社区版本[官网](https://dev.mysql.com/downloads/installer/)
2. 

***

#### Neo4j -version:4.2.6
1. 官网下载安装包
2. 一步步安装完毕
3. 通过注册时生成的密钥激活桌面版

***

#### redis -version:6.0
1. 在github上下载安装包[github](https://github.com/tporadowski/redis/releases)
2. 下载压缩包后解压到本地目录