---
title: git
published: 2025-10-18 23:55:16
tags: [git]
description: git使用记录
---
## 配置git
### 1、添加全局git个人信息
```zsh
git config --global user.name "name"
git config --global user.email email@email.com
```
 不添加全局可去掉`--global`，配置文件在当前项目的`.git/config`文件内。
### 2、ssh key
本地创建sshkey
```zsh
ssh-keygen -t rsa -C "uyour_email@email.com"    # 为你在github上注册的邮箱
```
之后会要求确认路径和输入密码，我们这使用默认的一路回车就行。成功的话会在`~/`下生成`.ssh`文件夹，进去，打开`id_rsa.pub`，复制里面的`key`。回到github上，进入Account Settings（账户配置），左边选择SSH Keys，Add SSH Key,title随便填，粘贴在你电脑上生成的key。

为了验证是否成功，在git bash下输入：
```zsh
ssh -T git@github.com
```
### 3、添加远程仓库地址
```zsh
git remote add origin git@github.com:yourName/yourRepo.git
```
## git 命令
### 1、创建本地仓库
```zsh
mkdir project
cd project

git init    # 初始化仓库
```
### 2、远程仓库
```zsh
git clone https://githun.com/username/repo.git    # 克隆远程仓库
cd repo

git remote    # 查看当前的远程库
git remote -v    # 查看当前的远程库地址
```
### 3、分支
```zsh
git checkout -b  new-feature    # 创建并切换至new-feature分支
git checkout main    # 切换至main分支
git branch    # 查看所有分支
git branch -r    # 查看远程分支
git branch -a    # 查看所有本地和远程分支
git branch testing    # 创建testing分支
git branch -d testing    # 删除testing分支
```
### 4、暂存文件
```zsh
# 修改的文件
git add filename
# 所有修改的文件
git add .
```
### 5、提交更改
```zsh
git commite -m "add new"
```
### 6、拉取最新更改
```zsh
git pull origin main
```
###  7、推送更改
```zsh
git push origin main
```
### 8、查看状态
```zsh
git status
```


