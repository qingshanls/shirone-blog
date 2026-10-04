---
title: Onemanager使用
published: 2024-06-26 17:23:30
categories: # 文章分类
tags: [study]
comment: true # 是否展示评论，默认 true
description: onemanager的使用
---
# glitch好像不能用了 😡

## onemanager使用
利用onemanager托管到Glitch（免费）可实现挂载多个网盘，通过网站直接去访问网盘的文件,可以实现直链下载，网页在线观看视频等功能。

目前支持的网盘有：onedrive/onedriveCN、阿里云盘、谷歌云等。

项目地址：https://github.com/qkqpttgf/OneManager-php
## 步骤
#### 一.以github账号登录Glitch
Glitch官网: http://glitch.com/
登录方式选择github账号登录

#### 二.新建项目
1.登陆后，点击右上角的 “New project” 创建项目。

2、创建方式选择从github中导入，点击 `Import from GitHub`。

添加链接 https://github.com/qkqpttgf/OneManager-php
确定

3、等待项目构建完成

4、点击页面下方的PREVIER-Preview in a new window，在新窗打开预览

预览的这个链接就是你的网盘链接

5、配置网盘

以阿里云盘为例，点击开始安装程序

语言选择简体中文。

管理密码很重要，请牢记。

然后登录，点击管理-设置。

选择你所需要添加的网盘，点击添加盘

填写任意名称

这时，需要添加你的网盘refresh token

获取refresh_token方式如下

浏览器F12应用程序→存储下本地存储→token→refresh_token

复制填入token,然后确认

根据自己的需求，选择空间，这里选择普通空间

至此，利用onemanager挂载一个网盘已经完成。

后续还可以在设置中配置相关的内容，达到美化的效果
