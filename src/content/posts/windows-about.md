---
title: 优化windows
published: 2024-06-26
tags: [教程,windows]
description: 从网络上搜集到的windows优化方法
---

## Windows10/11系统优化
去除信息流和关闭更新来源:[更新能永久暂停？盘点两个奇特的Windows使用技巧](https://www.bilibili.com/video/BV1FM4y1i76d/?p=1&vd_source=09cd1af7ac0e435034b4adc341939d21)

#### 1.去除搜索页面信息流和热搜

去除信息流：

Windows10:任务栏右键->搜索->搜索突出显示 [关闭]

Windows11:设置->隐私和安全->更多设置->显示搜索要点 [关闭]

去除热搜：导入以下内容到注册表

```
Windows Registry Editor Version 5.00

[HKEY_CURRENT_USER\Software\Policies\Microsoft\Windows\explorer]
"DisableSearchBoxSuggestions"=dword:00000001
```
```
reg add "HKEY_CURRENT_USER\SOFTWARE\Policies\Microsoft\Windows\explorer" /v DisableSearchBoxSuggestions /t reg_dword /d 1 /f
```

#### 2.永久关闭系统更新

关闭更新：导入以下内容到注册表后找到 "设置->Windows更新" 将暂停更新的天数调到最高

恢复更新：找到 "设置->Windows更新" 点击 "继续更新"

```
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsUpdate\UX\Settings]
"FlightSettingsMaxPauseDays"=dword:00000365
```

```
reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsUpdate\UX\Settings" /v FlightSettingsMaxPauseDays /t reg_dword /d 3000 /f
```


#### 3.Windows激活
win+r 运行
输入powershell,回车
输入下方代码 ，按回车   

```
irm https://massgrave.dev/get |iex
```
  
输入1，回车
出现以下三种情况就属于失败，需要采用手动下载的方式：  
1、出现“Activation Failed Error Code: 0xC004C003” 字样  
2、出现“无法解析”字样  
3、执行命令行卡了很久没反应：
直接下载这个链接的压缩包:

```
https://github.com/massgravel/Microsoft-Activation-Scripts/archive/refs/heads/master.zip
```

1、右键单击下载的 zip 文件并解压  
2、在解压后的文件夹中，找到名为的文件夹  `All-In-One-Version`  
3、以管理员身份运行，运行文件名为 `MAS_AIO.cmd`  
4、您将看到激活选项，然后按照屏幕上的说明进行操作