## npm使用技巧

1. npm install xxxx --legacy-peer-deps
	- 在NPM v7中，现在默认安装peerDependencies。 
	- 很多情况下，这会导致版本冲突，从而中断安装过程。
	- --legacy-peer-deps标志是在v7中引入的，目的是绕过peerDependency自动安装；
	- 它告诉NPM忽略项目中引入的各个modules之间的相同modules但不同版本的问题并继续安装，保证各个引入的依赖之间对自身所使用的不同版本modules共存。

2. npm install xxxx --save-dev
	-save和save-dev可以省掉你手动修改package.json文件的步骤。
	- npm install module-name -save 自动把模块和版本号添加到dependencies部分
	- npm install module-name -save-dve 自动把模块和版本号添加到devdependencies部分

3. 使用nrm管理源仓库地址
	- npm i -g nrm  安装
	- npm get registry  查看当前源地址
	- nrm -V  查看nrm版本
	- nrm ls  查看预设源地址列表
	- nrm use <registry name>  设置源地址
	- nrm add <registry name> <registry url>  添加源地址
	- nrm rename <old name> <new name>  修改名称
	- nrm del <registry name>  删除源地址