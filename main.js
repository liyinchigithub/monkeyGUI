//模块来控制应用程序的生命周期和创建本地浏览器窗口
const {app, BrowserWindow} = require('electron');
const url=require('url');
var path = require('path');
var cmd=require('node-cmd');
//保存窗口对象的全局引用，如果不保存，窗口将保存
// JavaScript对象被垃圾回收时自动关闭。
let mainWindow

function createWindow () {
  // 实例化一个窗口对象
  mainWindow = new BrowserWindow({width: 800, height: 800})

  // 应用加载指定页面
  mainWindow.loadFile(`${__dirname}/index.html`);
//   mainWindow.loadURL(url.format({
//     pathname: path.join(__dirname, '/index.html'),
//     protocol: 'file:',
//     slashes: true
// }));

  // 设置窗口标题
  mainWindow.setTitle("monkeyGUI");
  
  // 打开开发工具（渲染进程）
  //mainWindow.webContents.openDevTools()

  // 当窗口关闭时触发
  mainWindow.on('closed', function () {
  // 取消对窗口对象的引用，通常会存储窗口
  // 如果你的应用程序支持多个窗口，现在是时候了
  // 当你应该删除相应的元素时。
    mainWindow = null
  })
}

  // 当electron完成时将调用此方法
  // 初始化，并准备创建浏览器窗口。
  // 有些api只能在此事件发生后使用。
app.on('ready', createWindow)

  // 关闭所有窗口退出后.
app.on('window-all-closed', function () {
  // 在macOS上，这对于应用程序及其菜单栏来说很常见
  // 保持活动状态，直到用户明确退出Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // 点击dock图标，没有其他窗口打开。
  if (mainWindow === null) {
    createWindow()
  }
})

// 在这个文件中，您可以包含应用程序的其他特定主进程代码。您还可以将它们放在单独的文件中，并在这里要求它们。
