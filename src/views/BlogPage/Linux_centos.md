## 关于CentOS时的各种问题
***
1. ISO镜像安装
   - 安装UltralISO
   - Ctrl+O选择CentOs镜像
   - 下方选择U盘
   - 点击启动，刻录硬盘镜像，选择HDD+
   - 刻录完毕后插入电脑选择启动项即可
2. 更改yum源
   - 进入yum配置目录 ```cd /etc/yum.repos.d```
   - 如果没有安装则首先 ```sudo yum install wget```
   - 备份原yum ```sudo mv CentOs-Base.repo CentOs-Base.repo.backup```
   - CentOs 5
     - ```sudo wget -O CentOS-Base.repo https://lug.ustc.edu.cn/wiki/_export/code/mirrors/help/centos?codeblock=1```
   - CentOs 6
     - ```sudo wget -O CentOS-Base.repo https://lug.ustc.edu.cn/wiki/_export/code/mirrors/help/centos?codeblock=2```
   - CentOs 7
     - ```sudo wget -O CentOS-Base.repo https://lug.ustc.edu.cn/wiki/_export/code/mirrors/help/centos?codeblock=3```
   - 更新源数据
     - sudo yum clean all
     - sudo yum makecache
3. Gitlab部署
   - 作用：Gitlab是一个本地的代码库
   - 通过docker进行安装
   - 首先安装docker
     - ```wget -qO- https://get.docker.com/ | sh```
     - 添加用户到docker组
       - 创建： sudo group docker
       - 添加： sudo usermod -aG docker $USER
     - 设置引导时自动启动
       - ```sudo systemctl enable docker.service```
     - 启动docker服务
       - ```sudo systemctl start docker.service```
   - 安装docker-compose
     - 安装docker-compose前需要安装pip(注意pip版本)
       - ```sudo yum install epel-release```
       - ```sudo yum install -y python-pip```
     - 安装docker-compose
       - ```sudo pip install docker-compose```
   - 部署Gitlab
     - 创建文件夹，并创建配置文件
       - ```mkdir gitlab```
       - [配置文件](./docker_compose.yml)
       - 创建环境变量```export GITLAB_HOME=$(pwd)/gitlab```
     - 通过docker-compose来启动容器安装gitlab
       - ```docker-compose up -d```
     - 安装结束之后获取临时密码
       - ```docker exec -it gitlab-ce grep 'Password:' /etc/gitlab/initial_root_passwprd```
   - 浏览器启动Gitlab
     - 访问localhost:80即可打开登录界面，通过root与临时密码进行登录
4. 