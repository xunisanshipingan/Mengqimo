## Subtree提交打包项目到分支

##### 第一步 将项目打包好
```
npm run build
```

##### 第二步 将项目中的修改内容提交到github master主分支中
```
git add .
git commit -m ""
git push -u Blog master
```

##### 第三步 切换gh-pages分支并从远程仓库重新拉取(或者合并master分支)
```
git switch gh-pages
git subtree pull --prefix dist Blog gh-pages --squas(git merge master)
```

##### 第四步 重新打包项目再提交到gh-pages里
```
npm run build
git subtree push --prefix dist Blog gh-pages
```
##### 第五步 到github里重新添加一下域名