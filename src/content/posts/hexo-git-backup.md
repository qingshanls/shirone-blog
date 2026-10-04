---
title: hexo-git备份
published: 2024-09-23 21:45:59
tags: [hexo,教程]
description: 使用GIT备份hexo源码
---
### 使用GitHub来备份hexo的源码

前提条件：已成功搭建完成并部署hexo

### 创建GitHub仓库

1.登录GitHub并创建仓库，设置为私密
2.在hexo根目录创建`.gitignore`文件，设置要忽略的文件或文件夹，填写不需要备份的文件和文件夹。
```TXT
.DS_Store
Thumbs.db
db.json
*.log
node_modules/
public/
.deploy*/
_multiconfig.yml
package-lock.json
```
3.使用git备份源文件到GitHub
```powershell
git init
git add *
git commit -m "$(date): Hexo backup"
git remote add origin https://github.com/username/hexo.git
git push -u origin main

```
如需同时使用gitee

```powershell
# 将上面最后两行换为:
git remote add gitee https://gitee.com/username/hexo.git
git push -u gitee main

```

### 恢复
1.将备份的仓库克隆到本地
```powershell
git clone https://github.com/username/hexo.git ./hexo

git clone https://gitee.com/username/hexo.git ./hexo
```
2.使用备份的 package.json 文件来恢复安装 Hexo 插件，使用 npm 进行安装：
```powershell
npm install
```
这将读取 package.json 文件中的依赖项列表，并下载并安装所需的插件和模块。

3.生成静态网页并部署即可。