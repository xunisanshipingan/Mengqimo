## 更新
windows通过nvmw进行node的版本管理
1. 首先通过npm下载nvmw 'npm i -g nvmw'
2. 安装完成后通过nvmw下载nodejs的最新版本 'nvmw install v18.15.0'
3. 检查本地nodejs的所有版本 'nvmw ls'
4. 选择最新下载的版本为当前  'nvmw switch v18.15.0'
   
实际使用中发现上述方法存在问题，会有大部分命令莫名报错，或者是安装版本失败，再次搜索解决方法时决定使用volta进行版本控制，volta可以管理包括但不限于npm，node，yarn这些环境，实际使用方法如下
1. 首先去官网下载安装程序
2. 一步步安装后通过cmd查看是否安装成功，否则需要手动去设置环境变量
3. 安装node时有多种参数，其中
   1. volta install node@18.15.0  下载特定版本
   2. volta install node@18       下载适配版本
   3. volta install node@laster   下载最新版本
   4. volta install node          下载最新的LTS版本
4. 后续方法后面再看，如今的问题以及解决