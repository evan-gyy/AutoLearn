# AutoTools

autojs脚本

## 功能

1. 学习强国视频播放：`main.js`
2. 微信随申码小程序查看核酸报告：`test_wx.js`

## 搭建环境并运行

> Autojs文档：https://g.pro.autojs.org/docs/#/zh-cn/

1. 下载 `Auto.js` 安装包
    > 链接: https://pan.baidu.com/s/1zBTij7imoLCKf1bm7HtY6Q 提取码: n9jc

2. 安装软件后，开启应用的**无障碍**和**悬浮窗**功能。

3. 可以使用悬浮窗的工具来检查 app 的元素，主要是布局分析：
   - 布局范围分析（常用，可以获取元素id、text、desc等定位信息）
   - 布局层次分析

4. 打开 VS Code，安装`Auto.js-VSCodeExt`插件。

5. `Command+shift+P`快捷键打开 `Command Palette`，运行 `Auto.js:New Project`命令创建一个新项目。
    > 注意：需要设置当前文件夹为可信任的工作区，不然无法运行插件

6. 在 main.js 文件中编写脚本

7. 运行 `Auto.js:Start Server` 命令启动服务，手机和电脑在同一局域网的情况下，点击“连接电脑”选项，连接成功后，VS Code 会弹出提示。

8. 点击`Auto.js:Run On Device`在手机上运行代码
   
9. 将代码保存到手机端的autojs：`Ctrl`+`shift`+`S`

