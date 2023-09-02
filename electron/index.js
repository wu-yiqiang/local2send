const { Application } = require('ee-core');
const startServer = require('./service/network/index')
const { tryUsePort } = require('./service/network/helper')
const defaultPort = 3333
class Index extends Application {
  constructor() {
    super()
    // this === eeApp;
  }

  /**
   * core app have been loaded
   */
  async ready() {
    // do some things
    console.log('ready')
  }

  /**
   * electron app ready
   */
  async electronAppReady() {
    // do some things
    console.log('app-ready')
    const port = await tryUsePort(defaultPort)
    startServer(port)
  }

  /**
   * main window have been loaded
   */
  async windowReady() {
    // do some things
    // 延迟加载，无白屏
    const winOpt = this.config.windowsOption
    if (winOpt.show == false) {
      const win = this.electron.mainWindow
      console.log('jjj', winOpt)
      if (this.config.openDevTools) win.webContents.openDevTools({ mode: 'bottom' })
      win.once('ready-to-show', () => {
        win.show()
      })
    }
  }

  async windowResize() {
    // do some things
    console.log('resize')
  }

  /**
   * before app close
   */
  async beforeClose() {
    // do some things
     console.log('bforeClose')
  }
}

Index.toString = () => '[class Index]';
module.exports = Index;