var app = require('app')
var BrowserWindow = require('browser-window')
var mainWindow = null;

app.on('ready', function(){
  mainWindow = new BrowserWindow({
    width: 1366,
    height: 768
  })
  mainWindow.loadUrl('file://'+__dirname+'/index.html')
})
