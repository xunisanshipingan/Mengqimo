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
- 检查配置文件里路径是否含有中文

***

#### openjdk -version:8
- 已安装
- 与jdk的区别：jdk-oracle公司发布的通用版(包含插件)   openjdk-纯净版(专供开发使用)
***

#### mysql -version:5.7
1. 个人试用的话下载社区版本[官网](https://dev.mysql.com/downloads/installer/)
2. 下载完毕后一步步点击安装(选择的开发安装)

***

#### Neo4j -version:4.2.6
1. 官网下载安装包
2. 一步步安装完毕
3. 通过注册时生成的密钥激活桌面版

***

#### redis -version:6.0
1. 在github上下载安装包[github](https://github.com/tporadowski/redis/releases)
2. 下载压缩包后解压到本地目录
3. 配置文件：redis/redis.windows.conf
4. 在安装目录打开cmd
5. redis-server.exe启动服务端
6. 打开另一个cmd
7. redis-cli.exe -h localhost -p 6379 启动客户端
8. 进行redis操作

##### Redis配置操作
1. 安装windows服务
   1. cmd中打开Redis安装目录
   2. redis-server --service-install redis.windows.conf
   3. 运行services.msc找到redis服务并打开
2. 设置环境变量
3. 设置Redis密码
   1. 打开redis.windows.conf
   2. 找到requirepass fooboard复制到下一行
   3. 删除注释符#，将fooboard更改为123456
4. 更改bind限制(允许所有IP访问)
   1. 打开redis.windows.conf
   2. 找到bind 127.0.0.1并将其注释
5. 常用命令
   1. 登录连接  redis-cli
   2. 输入密码  auth 123456
   3. 查看键    keys *
   4. 清空缓存  flushall/flushdb
   5. 查看使用  info/info menory/dbsize