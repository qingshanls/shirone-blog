---
title: Linux Win 双系统时间不同步
published: 2024-10-27 14:52:37
tags: [linux,windows]
description: Linux windows双系统时间不同步
---

## 解决Linux windows双系统时间不同步

### 1.Linux使用本地时间作为硬件时间

1. 使用 __timedatectl__ 命令，通过运行带有 __sudo__ 前缀的命令，将 RTC 设置为使用本地时间
```shell
sudo timedatectl set-local-rtc 1
```
2. 重启系统
3. 恢复更改
```shell
sudo timedatectl set-local rtc 0
```

### 2.Windows使用UTC时间作为硬件时钟
1. `win + r`输入`regedit`打开注册表编辑器。
2. 转到以下位置
```
HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\TimeZoneInformation
```
3. 右键单击空白处，单击新建，然后添加一个新的 `Q-WORD(64位)`值条目，并将其命名为`RealTimeisUniversal`。如果您使用的是 32 位 Windows 版本，则需要添加 `D-WORD(32 位)`值条目。

4. 添加条目后，双击它并将值设置为`1`，然后重新启动系统。
