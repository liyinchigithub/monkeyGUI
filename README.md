# monkeyGUI

![img](https://liyinchigithub.github.io/images/Monkey_GUI/WechatIMG1.jpg)
 
![img](https://liyinchigithub.github.io/images/Monkey_GUI/WechatIMG2.jpg)
  
![img](https://liyinchigithub.github.io/images/Monkey_GUI/WechatIMG3.jpg)

![img](https://liyinchigithub.github.io/images/Monkey_GUI/WechatIMG4.jpg)
      
安装依赖

```
npm install
```

调试运行程序

```
npm start 或npm run start
```

打包

#electron-packager

```
npm run pack
```

```
  "scripts": {
    "pack": "electron-packager . monkeyGUI --all --out ./打包monkeyGUI --app-version=2.0.0 --electron-version=3.0.10 --overwrite --icon=./other/image/logo.ico"
  }
```

package.json设置==》scripts==》pack
electron-packager . monkeyGUI --all --out ./打包monkeyGUI --app-version=2.0.0 --electron-version=3.0.10


参数说明：

--all表示打包所有平台的包（含linux、windows、mac）

--out打包后输出路径

--app-version当前应用的版本号

--electron-version打包环境的electron版本号

#electron-builder

```
npm run dist:mac
```

```
npm run dist:win
```

package.json设置==》scripts==》dist:mac、dist:win

```
  "scripts": {
    "start": "electron .",
    "dist:mac": "electron-builder --mac",
    "dist:win": "electron-builder --win --x64",
    "dist:linux":"electron-builder --linux",
     "pack": "electron-packager . monkeyGUI --all --out ./打包monkeyGUI --app-version=2.0.0 --electron-version=3.0.10 --overwrite --icon=./other/image/logo.ico"
  }
```




