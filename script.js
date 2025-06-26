const osSelect = document.getElementById('osSelect');
const versionSelect = document.getElementById('versionSelect');
const editionSelect = document.getElementById('editionSelect');
const archSelect = document.getElementById('archSelect');
const languageSelect = document.getElementById('languageSelect');
const downloadBtn = document.getElementById('downloadBtn');

const data = {
  windows: {
    "Windows 7": {
      editions: ["Ultimate", "Professional", "Home Premium"],
      languages: ["Français", "Anglais", "Espagnol"]
    },
    "Windows 10": {
      editions: ["Pro", "Home", "Enterprise"],
      languages: ["Français", "Anglais", "Allemand"]
    }
  },
  linux: {
    "Ubuntu": {
      editions: ["22.04 LTS", "20.04 LTS"],
      languages: ["Français", "Anglais"]
    },
    "Debian": {
      editions: ["12 Bookworm", "11 Bullseye"],
      languages: ["Français", "Anglais"]
    }
  }
};

const downloadLinks = {
    "windows_Windows 7_Professional_x86_Français": "https://archive.org/download/win-7-pro-french-COEM/Win7_Pro_SP1_French_COEM_x86.iso",
    "windows_Windows 7_Professional_x64_Français": "https://archive.org/download/win-7-pro-french-COEM/Win7_Pro_SP1_French_COEM_x64.iso",
    "windows_Windows 7_Ultimate_x64_Français": "https://archive.org/download/Windows7UltimateSP1x64French/fr_windows_7_ultimate_with_sp1_x64_dvd_u_677299.iso",
    "windows_Windows 7_Ultimate_x86_Français": "https://archive.org/download/Windows7UltimateSP1x86French/fr_windows_7_ultimate_with_sp1_x86_dvd_u_677434.iso",
    "windows_Windows 7_Home Premium_x64_Français": "https://archive.org/download/windows-7-home-premium-french/Win7_HomePrem_SP1_French_x64.iso",
    "windows_Windows 7_Home Premium_x86_Français": "https://archive.org/download/windows-7-home-premium-french/Win7_HomePrem_SP1_French_x32.iso",
    "windows_Windows 10_Home_x64_Français": "https://archive.org/download/win-10-22-h-2-french-x-64/Win10_22H2_French_x64.iso",
    "windows_Windows 10_Pro_x64_Français": "https://archive.org/download/win-10-22-h-2-french-x-64/Win10_22H2_French_x64.iso",
    "windows_Windows 10_Enterprise_x64_Français": "https://archive.org/download/win-10-22-h-2-french-x-64/Win10_22H2_French_x64.iso",
    "windows_Windows 10_Home_x86_Français": "https://archive.org/download/win-10-22-h-2-french-x-32/Win10_22H2_French_x32.iso",
    "windows_Windows 10_Pro_x86_Français": "https://archive.org/download/win-10-22-h-2-french-x-32/Win10_22H2_French_x32.iso",
    "windows_Windows 10_Enterprise_x86_Français": "https://archive.org/download/win-10-22-h-2-french-x-32/Win10_22H2_French_x32.iso"
  };  

function resetSelect(selectElement) {
  selectElement.selectedIndex = 0;
  selectElement.disabled = true;
  if (selectElement !== archSelect) {
    for(let i = selectElement.options.length -1; i > 0; i--) {
      selectElement.remove(i);
    }
  }
}

function enableSelect(selectElement) {
  selectElement.disabled = false;
}

function populateSelect(selectElement, items) {
  items.forEach(item => {
    const option = document.createElement('option');
    option.value = item;
    option.textContent = item;
    selectElement.appendChild(option);
  });
}

function checkDownloadButton() {
  downloadBtn.disabled = !(
    osSelect.value &&
    versionSelect.value &&
    editionSelect.value &&
    archSelect.value &&
    languageSelect.value
  );
}

osSelect.addEventListener('change', () => {
  resetSelect(versionSelect);
  resetSelect(editionSelect);
  resetSelect(languageSelect);
  resetSelect(archSelect);
  downloadBtn.disabled = true;

  if (osSelect.value && data[osSelect.value]) {
    populateSelect(versionSelect, Object.keys(data[osSelect.value]));
    enableSelect(versionSelect);
  }
});

versionSelect.addEventListener('change', () => {
  resetSelect(editionSelect);
  resetSelect(languageSelect);
  resetSelect(archSelect);
  downloadBtn.disabled = true;

  const os = osSelect.value;
  const version = versionSelect.value;

  if (os && version && data[os] && data[os][version]) {
    populateSelect(editionSelect, data[os][version].editions);
    enableSelect(editionSelect);
  }
});

editionSelect.addEventListener('change', () => {
  resetSelect(languageSelect);
  archSelect.selectedIndex = 0;
  archSelect.disabled = false;
  downloadBtn.disabled = true;
});

archSelect.addEventListener('change', () => {
  resetSelect(languageSelect);
  downloadBtn.disabled = true;

  const os = osSelect.value;
  const version = versionSelect.value;

  if (archSelect.value && os && version && data[os] && data[os][version]) {
    populateSelect(languageSelect, data[os][version].languages);
    enableSelect(languageSelect);
  }
});

languageSelect.addEventListener('change', () => {
  checkDownloadButton();
});

downloadBtn.addEventListener('click', () => {
  const os = osSelect.value;
  const version = versionSelect.value;
  const edition = editionSelect.value;
  const arch = archSelect.value;
  const lang = languageSelect.value;

  const key = `${os}_${version}_${edition}_${arch}_${lang}`;
  if (downloadLinks[key]) {
    window.location.href = downloadLinks[key];
  } else {
    alert(`Pas de lien disponible pour le moment...`);
  }
});

const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if(document.body.classList.contains('dark-mode')){
    themeToggle.textContent = '🌙';
  } else {
    themeToggle.textContent = '🌞';
  }
});
