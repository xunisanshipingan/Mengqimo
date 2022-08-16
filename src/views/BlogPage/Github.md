## Github操作指南

### **基础指令**
> 初始化本地仓库

```git init```
> clone项目到本地仓库

```git clone url```
> 查看git状态

```git status```
> 添加文件到暂存区

```git add .```
> 暂存区文件提交到本地仓库

```git commit -m "change"```
> 将本地仓库内容同步到远程仓库

```git push origin master```
> 将远程仓库内容同步到本地

```git pull --rebase master```

***
### **分支命令**

> 创建分支

```git branch dev```
> 切换分支
```
git switch dev
git checkout dev
```
> 查看所有分支

```git branch```
> 合并分支到当前分支

```git merge dev```
> 删除分支

```git branch -D dev```
***
### **故障处理**
> git add的时候报错LF换行--解决方法
git config --global core.autocrlf true