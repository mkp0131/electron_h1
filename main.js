const { app, BrowserWindow, Menu  } = require('electron')

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

    // 최상단 메뉴를 빈 배열로 설정
    const mainMenu = Menu.buildFromTemplate([])

    // 빈 배열로 설정된 메뉴를 애플리케이션에 설정
    Menu.setApplicationMenu(mainMenu)
  
    

  // 웹 페이지 URL 로드
  mainWindow.loadURL('https://lililli.kr'); // 'http://'를 추가하여 URL을 올바르게 설정합니다.
})