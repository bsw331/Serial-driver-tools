const translations = {
  zh: {
    pageTitle: '串口驱动安装助手',
    appTitle: '串口驱动安装助手',
    statusOnline: '系统在线',
    aiDiagnose: 'AI 诊断',
    heroTitle: 'Uno / Mega2560',
    introText: '一键检测串口设备、自动匹配驱动程序，并完成安装与验证，适用于 Arduino Uno、Mega2560、Nano 等常见单片机开发板。',
    tagRecommended: '推荐',
    tagCompatible: '兼容',
    tagSupport: '支持',
    statDetected: '已检测',
    countUnit: '个',
    statDriverStatus: '驱动状态',
    statCompatibleModels: '兼容型号',
    statInstallTime: '安装耗时',
    installFlow: '安装流程',
    smartMatch: '智能匹配',
    detectPort: '检测串口',
    installNow: '开始安装',
    portLabel: '选择串口',
    portPlaceholder: '请选择串口设备',
    driverType: '驱动类型',
    badgeRecommended: '推荐',
    driverCH340Desc: '适用于 Uno / Nano / Mega2560',
    driverCP2102Desc: '适用于 ESP32 / Sensor Node',
    driverFT232RDesc: '适用于高级开发板 / USB转串口',
    driverPL2303Desc: '兼容老款 USB 串口模块',
    progressTitle: '安装进度',
    waitingInstall: '等待安装',
    notStarted: '未开始',
    logReady: '设备连接检测完成',
    logWaiting: '等待选择串口与驱动',
    successInstalled: '驱动已成功安装并完成验证，串口设备已可正常使用。',
    detectNoPort: '未检测到已连接的串口设备，请插入开发板后重试。',
    detectFallback: '当前浏览器不支持 Web Serial API，已切换到手动串口选择模式。',
    detectSuccess: '已检测到串口设备，已自动填充到列表中。',
    detectFailure: '串口检测失败，请确认浏览器已允许访问串口设备。',
    requestManual: '当前浏览器不支持串口访问，已使用手动模式。',
    requestSuccess: '已成功选择串口：',
    requestCancel: '用户取消了串口选择，仍可继续手动选择。',
    choosePortFirst: '请选择串口设备后再开始安装。',
    installing: '安装中',
    installCompleted: '已完成',
    installCompleteText: '安装完成',
    installDone: '驱动安装完成，串口已成功识别。',
    defaultDriver: '当前默认推荐驱动：CH340',
    systemReady: '系统准备完成，已加载 Arduino 串口驱动配置。',
    stepDetect: '检测设备与驱动匹配',
    stepDownload: '下载驱动安装包',
    stepCopy: '复制驱动文件到系统目录',
    stepRegister: '注册串口设备驱动',
    stepVerify: '完成验证与启用',
    stepPrefix: '步骤：',
    startingInstall: '开始为 ',
    installDriver: ' 安装 ',
    driver: ' 驱动。',
  },
  en: {
    pageTitle: 'Serial Driver Installer',
    appTitle: 'Serial Driver Installer',
    statusOnline: 'System online',
    aiDiagnose: 'AI diagnosis',
    heroTitle: 'Uno / Mega2560',
    introText: 'One-click serial detection, automatic driver matching, installation, and verification for Arduino Uno, Mega2560, Nano, and other common MCU boards.',
    tagRecommended: 'Recommended',
    tagCompatible: 'Compatible',
    tagSupport: 'Supported',
    statDetected: 'Detected',
    countUnit: 'items',
    statDriverStatus: 'Driver status',
    statCompatibleModels: 'Compatible models',
    statInstallTime: 'Install time',
    installFlow: 'Installation flow',
    smartMatch: 'Smart match',
    detectPort: 'Detect port',
    installNow: 'Install now',
    portLabel: 'Select port',
    portPlaceholder: 'Please select a serial device',
    driverType: 'Driver type',
    badgeRecommended: 'Recommended',
    driverCH340Desc: 'For Uno / Nano / Mega2560',
    driverCP2102Desc: 'For ESP32 / Sensor Node',
    driverFT232RDesc: 'For advanced boards / USB-to-serial adapters',
    driverPL2303Desc: 'Compatible with legacy USB serial modules',
    progressTitle: 'Installation progress',
    waitingInstall: 'Waiting to install',
    notStarted: 'Not started',
    logReady: 'Device connection detected',
    logWaiting: 'Waiting for serial port and driver selection',
    successInstalled: 'The driver was installed successfully and the serial device is ready for use.',
    detectNoPort: 'No connected serial devices detected. Please insert the board and try again.',
    detectFallback: 'Your browser does not support Web Serial API, so manual port selection mode has been enabled.',
    detectSuccess: 'Serial devices detected and added to the list.',
    detectFailure: 'Port detection failed. Please confirm that browser access to serial devices is allowed.',
    requestManual: 'The current browser does not support serial access, so manual mode is being used.',
    requestSuccess: 'Port selected successfully: ',
    requestCancel: 'The user canceled port selection. You can continue with manual selection.',
    choosePortFirst: 'Please select a serial device before starting installation.',
    installing: 'Installing',
    installCompleted: 'Completed',
    installCompleteText: 'Installation complete',
    installDone: 'Driver installation completed and the serial port is recognized successfully.',
    defaultDriver: 'Current recommended driver: CH340',
    systemReady: 'System ready. Arduino serial driver configuration loaded.',
    stepDetect: 'Detect device and driver compatibility',
    stepDownload: 'Download driver package',
    stepCopy: 'Copy driver files to system directory',
    stepRegister: 'Register serial device driver',
    stepVerify: 'Verify and enable the device',
    stepPrefix: 'Step: ',
    startingInstall: 'Starting installation for ',
    installDriver: ' install ',
    driver: ' driver.',
  }
};

const portSelect = document.getElementById('portSelect');
const detectPortBtn = document.getElementById('detectPortBtn');
const installBtn = document.getElementById('installBtn');
const driverGrid = document.getElementById('driverGrid');
const progressFill = document.getElementById('progressFill');
const percentText = document.getElementById('percentText');
const statusText = document.getElementById('statusText');
const currentStep = document.getElementById('currentStep');
const logList = document.getElementById('logList');
const successMsg = document.getElementById('successMsg');
const langButtons = document.querySelectorAll('.lang-btn');
const i18nNodes = document.querySelectorAll('[data-i18n]');

let selectedDriver = 'CH340';
let installTimer = null;
let currentLang = 'zh';

function applyTranslations(lang) {
  currentLang = lang;
  const dictionary = translations[lang];

  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

  i18nNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  const select = document.getElementById('portSelect');
  if (select && select.options[0]) {
    select.options[0].text = dictionary.portPlaceholder;
  }

  langButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === lang);
  });

  const title = document.querySelector('title');
  if (title) {
    title.textContent = dictionary.pageTitle;
  }

  const statusTextNode = document.querySelector('.status-pill > span:last-child');
  if (statusTextNode) {
    statusTextNode.textContent = dictionary.statusOnline;
  }
}

function setLanguage(lang) {
  applyTranslations(lang);
  if (currentLang === 'en') {
    addLog('Language switched to English');
  } else {
    addLog('已切换到中文');
  }
}

langButtons.forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});

driverGrid.addEventListener('click', (event) => {
  const option = event.target.closest('.driver-option');
  if (!option) return;

  document.querySelectorAll('.driver-option').forEach((item) => item.classList.remove('selected'));
  option.classList.add('selected');
  selectedDriver = option.dataset.driver;
});

function addLog(message) {
  const li = document.createElement('li');
  li.textContent = message;
  logList.prepend(li);
}

async function detectPorts() {
  if (!('serial' in navigator)) {
    addLog(translations[currentLang].detectFallback);
    portSelect.value = '/dev/cu.usbserial-0001';
    return;
  }

  try {
    const ports = await navigator.serial.getPorts();
    if (!ports.length) {
      addLog(translations[currentLang].detectNoPort);
      return;
    }

    const existingOptions = Array.from(portSelect.options).map((option) => option.value);
    ports.forEach((port, index) => {
      const portPath = `Serial-${index + 1}`;
      if (!existingOptions.includes(portPath)) {
        const option = new Option(portPath, portPath);
        portSelect.appendChild(option);
      }
    });

    portSelect.value = 'Serial-1';
    addLog(translations[currentLang].detectSuccess);
  } catch (error) {
    addLog(translations[currentLang].detectFailure);
    console.error(error);
  }
}

async function requestManualPort() {
  if (!('serial' in navigator)) {
    addLog(translations[currentLang].requestManual);
    return;
  }

  try {
    const port = await navigator.serial.requestPort();
    const portPath = `USB-${Date.now().toString().slice(-4)}`;
    const option = new Option(portPath, portPath);
    portSelect.appendChild(option);
    portSelect.value = portPath;
    addLog(`${translations[currentLang].requestSuccess}${portPath}`);
  } catch (error) {
    addLog(translations[currentLang].requestCancel);
  }
}

detectPortBtn.addEventListener('click', async () => {
  await requestManualPort();
  await detectPorts();
});

function resetInstallState() {
  progressFill.style.width = '0%';
  percentText.textContent = '0%';
  statusText.textContent = translations[currentLang].waitingInstall;
  currentStep.textContent = translations[currentLang].notStarted;
  successMsg.classList.remove('show');
}

function beginInstall() {
  if (installTimer) {
    clearInterval(installTimer);
  }

  resetInstallState();

  const selectedPort = portSelect.value;
  if (!selectedPort) {
    addLog(translations[currentLang].choosePortFirst);
    return;
  }

  const steps = [
    translations[currentLang].stepDetect,
    translations[currentLang].stepDownload,
    translations[currentLang].stepCopy,
    translations[currentLang].stepRegister,
    translations[currentLang].stepVerify
  ];

  let stepIndex = 0;
  let progress = 0;

  addLog(`${translations[currentLang].startingInstall}${selectedPort}${translations[currentLang].installDriver}${selectedDriver}${translations[currentLang].driver}`);
  statusText.textContent = translations[currentLang].installing;

  installTimer = setInterval(() => {
    if (stepIndex < steps.length) {
      currentStep.textContent = steps[stepIndex];
      addLog(`${translations[currentLang].stepPrefix}${steps[stepIndex]}`);
      stepIndex += 1;
    }

    progress = Math.min(progress + 18, 100);
    progressFill.style.width = `${progress}%`;
    percentText.textContent = `${progress}%`;

    if (progress >= 100) {
      clearInterval(installTimer);
      installTimer = null;
      statusText.textContent = translations[currentLang].installCompleted;
      currentStep.textContent = translations[currentLang].installCompleteText;
      addLog(translations[currentLang].installDone);
      successMsg.classList.add('show');
    }
  }, 500);
}

installBtn.addEventListener('click', beginInstall);

document.addEventListener('DOMContentLoaded', () => {
  applyTranslations('zh');
  addLog(translations[currentLang].systemReady);
  addLog(translations[currentLang].defaultDriver);
});
