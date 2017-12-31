'use strict'
const electron = require('electron')

const app = electron.app;
const Menu = electron.Menu;
// adds debug features like hotkeys for triggering dev tools and reload
require('electron-debug')();

// prevent window being garbage collected
let mainWindow;
let selectTablesWindow;

function onClosed() {
	// dereference the window
	// for multiple windows store them in an array
	mainWindow = null;
}

function createMainWindow() {
	const win = new electron.BrowserWindow({
		width: 800,
		height: 600
	});

	win.loadURL(`file://${__dirname}/app.html`);
	win.on('closed', onClosed);

	return win;
}

function createSelectTablesWindow() {
  const win = new electron.BrowserWindow({
		width: 500,
		height: 200
	});

	win.loadURL(`file://${__dirname}/../app/tables-select.html`);
	win.on('closed', () => {selectTablesWindow=null});

	return win;
}

function createMenu(win) {
  const template = [
  {
    label: 'Tables',
    submenu: [
      {
        label: 'Path..',
        click: () => {selectTablesWindow = createSelectTablesWindow()}
      }
    ]
  }];

  const menu = Menu.buildFromTemplate(template)
  win.setMenu(menu)
}

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (!mainWindow) {
		mainWindow = createMainWindow();
	}
});

app.on('ready', () => {
	mainWindow = createMainWindow();
  createMenu(mainWindow)
});
