# monkeyGUI

安装依赖
npm install

运行程序
npm start 或npm run start

打包
npm run pack

package.json设置==》scripts==》pack
electron-packager . monkeyGUI --all --out ./打包monkeyGUI --app-version=1.0.0 --electron-version=3.0.7

--all表示打包所有平台的包（含linux、windows、mac）
