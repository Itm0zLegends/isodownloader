const osSelect = document.getElementById('osSelect');
const versionSelect = document.getElementById('versionSelect');
const editionSelect = document.getElementById('editionSelect');
const archSelect = document.getElementById('archSelect');
const languageSelect = document.getElementById('languageSelect');
const downloadBtn = document.getElementById('downloadBtn');

const data = {
  windows: {
    "Windows 11": {
      editions: ["MultiEdition"],
      languages: ["Français"]
    },
    "Windows 10": {
      editions: ["MultiEdition"],
      languages: ["Français", "Anglais"]
    },
    "Windows 8.1": {
      editions: ["Home", "Pro", "Enterprise"],
      languages: ["Français", "Anglais", "Italien", "Espagnol"]
    },      
    "Windows 7": {
      editions: ["Ultimate", "Professional", "Home Premium"],
      languages: ["Français", "Anglais"]
    },  
    "Windows XP": {
        editions: ["Professional"],
        languages: ["Français", "Anglais"]
      }
  },
  linux: {
    "Ubuntu": {
      editions: ["24.04 LTS", "25.04"],
      languages: ["Multilangue"]
    },
    "Debian": {
      editions: ["12.11 Bookworm"],
      languages: ["Multilangue"]
    }
  },
  macOS: {
    "Sequoia": {
      editions: ["15.5"],
      languages: ["Multilangue"]
    },
    "Sonoma": {
      editions: ["14.7.6"],
      languages: ["Multilangue"]
    },
    "Ventura": {
        editions: ["13.0.1"],
        languages: ["Multilangue"]
      },
    "Monterey": {
      editions: ["12.6.1"],
      languages: ["Multilangue"]
    }, 
    "Big Sur": {
        editions: ["11.7.1"],
        languages: ["Multilangue"]
      }    
  }
};

const downloadLinks = {
    // Windows 7
    // Français
    "windows_Windows 7_Professional_x86_Français": "https://archive.org/download/win-7-pro-french-COEM/Win7_Pro_SP1_French_COEM_x86.iso",
    "windows_Windows 7_Professional_x64_Français": "https://archive.org/download/win-7-pro-french-COEM/Win7_Pro_SP1_French_COEM_x64.iso",
    "windows_Windows 7_Ultimate_x64_Français": "https://archive.org/download/Windows7UltimateSP1x64French/fr_windows_7_ultimate_with_sp1_x64_dvd_u_677299.iso",
    "windows_Windows 7_Ultimate_x86_Français": "https://archive.org/download/Windows7UltimateSP1x86French/fr_windows_7_ultimate_with_sp1_x86_dvd_u_677434.iso",
    "windows_Windows 7_Home Premium_x64_Français": "https://archive.org/download/windows-7-home-premium-french/Win7_HomePrem_SP1_French_x64.iso",
    "windows_Windows 7_Home Premium_x86_Français": "https://archive.org/download/windows-7-home-premium-french/Win7_HomePrem_SP1_French_x32.iso",
    // Anglais
    "windows_Windows 7_Professional_x86_Anglais": "https://archive.org/download/windows-7-sp0-sp1-msdn-iso-files-en-de-ru-tr-x86-x64/en_windows_7_professional_with_sp1_vl_build_x86_dvd_u_677896.iso",
    "windows_Windows 7_Professional_x64_Anglais": "https://archive.org/download/windows-7-sp0-sp1-msdn-iso-files-en-de-ru-tr-x86-x64/en_windows_7_professional_with_sp1_vl_build_x64_dvd_u_677791.iso",
    "windows_Windows 7_Ultimate_x64_Anglais": "https://archive.org/download/win7-ult-sp1-english/Win7_Ult_SP1_English_x64.iso",
    "windows_Windows 7_Ultimate_x86_Anglais": "https://archive.org/download/win7-ult-sp1-english/Win7_Ult_SP1_English_x32.iso",
    "windows_Windows 7_Home Premium_x64_Anglais": "https://archive.org/download/windows-7-home-prem-english/Win7_HomePrem_SP1_English_x64.iso",
    "windows_Windows 7_Home Premium_x86_Anglais": "https://archive.org/download/windows-7-home-prem-english/Win7_HomePrem_SP1_English_x32.iso",
    // Windows 8.1
    // Français
    "windows_Windows 8.1_Home_x64_Français": "https://archive.org/download/win-8.1/Win8.1_French_x64.iso",
    "windows_Windows 8.1_Pro_x64_Français": "https://archive.org/download/win-8.1/Win8.1_French_x64.iso",
    "windows_Windows 8.1_Entreprise_x64_Français": "https://archive.org/download/win-8.1/Win8.1_French_x64.iso",
    "windows_Windows 8.1_Home_x86_Français": "https://archive.org/download/win-8.1/Win8.1_French_x32.iso",
    "windows_Windows 8.1_Pro_x86_Français": "https://archive.org/download/win-8.1/Win8.1_French_x32.iso",
    "windows_Windows 8.1_Entreprise_x86_Français": "https://archive.org/download/win-8.1/Win8.1_French_x32.iso",
    // Anglais
    "windows_Windows 8.1_Home_x64_Anglais": "https://archive.org/download/win-8.1/Win8.1_EnglishUS_x64.iso",
    "windows_Windows 8.1_Pro_x64_Anglais": "https://archive.org/download/win-8.1/Win8.1_EnglishUS_x64.iso",
    "windows_Windows 8.1_Entreprise_x64_Anglais": "https://archive.org/download/win-8.1/Win8.1_EnglishUS_x64.iso",
    "windows_Windows 8.1_Home_x86_Anglais": "https://archive.org/download/win-8.1/Win8.1_EnglishUS_x32.iso",
    "windows_Windows 8.1_Pro_x86_Anglais": "https://archive.org/download/win-8.1/Win8.1_EnglishUS_x32.iso",
    "windows_Windows 8.1_Entreprise_x86_Anglais": "https://archive.org/download/win-8.1/Win8.1_EnglishUS_x32.iso",
    // Italien
    "windows_Windows 8.1_Home_x64_Italien": "https://archive.org/download/win-8.1/Win8.1_Italian_x64.iso",
    "windows_Windows 8.1_Pro_x64_Italien": "https://archive.org/download/win-8.1/Win8.1_Italian_x64.iso",
    "windows_Windows 8.1_Entreprise_x64_Italien": "https://archive.org/download/win-8.1/Win8.1_Italian_x64.iso",
    "windows_Windows 8.1_Home_x86_Italien": "https://archive.org/download/win-8.1/Win8.1_Italian_x32.iso",
    "windows_Windows 8.1_Pro_x86_Italien": "https://archive.org/download/win-8.1/Win8.1_Italian_x32.iso",
    "windows_Windows 8.1_Entreprise_x86_Italien": "https://archive.org/download/win-8.1/Win8.1_Italian_x32.iso",  
    // Espagnol
    "windows_Windows 8.1_Home_x64_Espagnol": "https://archive.org/download/win-8.1/Win8.1_Spanish_x64.iso",
    "windows_Windows 8.1_Pro_x64_Espagnol": "https://archive.org/download/win-8.1/Win8.1_Spanish_x64.iso",
    "windows_Windows 8.1_Entreprise_x64_Espagnol": "https://archive.org/download/win-8.1/Win8.1_Spanish_x64.iso",
    "windows_Windows 8.1_Home_x86_Espagnol": "https://archive.org/download/win-8.1/Win8.1_Spanish_x32.iso",
    "windows_Windows 8.1_Pro_x86_Espagnol": "https://archive.org/download/win-8.1/Win8.1_Spanish_x32.iso",
    "windows_Windows 8.1_Entreprise_x86_Espagnol": "https://archive.org/download/win-8.1/Win8.1_Spanish_x32.iso",
    // Windows 10
    // Français
    "windows_Windows 10_MultiEdition_x64_Français": "https://archive.org/download/win-10-22-h-2-french-x-64/Win10_22H2_French_x64.iso",
    "windows_Windows 10_MultiEdition_x86_Français": "https://archive.org/download/win-10-22-h-2-french-x-32/Win10_22H2_French_x32.iso",
    // Anglais
    "windows_Windows 10_MultiEdition_x64_Anglais": "https://archive.org/download/en-us_windows_10_consumer_editions_version_22h2_updated_feb_2023_x64_dvd_c29e4bb3/en-us_windows_10_consumer_editions_version_22h2_updated_feb_2023_x64_dvd_c29e4bb3.iso",
    "windows_Windows 10_MultiEdition_x86_Anglais": "https://archive.org/download/en-us_windows_10_consumer_editions_version_22h2_x86_dvd_90883feb/en-us_windows_10_consumer_editions_version_22h2_x86_dvd_90883feb.iso",
    // Windows XP
    // Français
    "windows_Windows XP_Professional_x86_Français": "https://archive.org/download/fr_windows_xp_professional_with_service_pack_3_x86_cd_vl_x14-73982_202012/fr_windows_xp_professional_with_service_pack_3_x86_cd_vl_x14-73982.iso",
    // Anglais
    "windows_Windows XP_Professional_x86_Anglais": "https://archive.org/download/WinXPProSP3x86/en_windows_xp_professional_with_service_pack_3_x86_cd_vl_x14-73974.iso",
    // Ubuntu 
    "linux_Ubuntu_24.04 LTS_x64_Multilangue": "https://releases.ubuntu.com/24.04.2/ubuntu-24.04.2-desktop-amd64.iso",
    "linux_Ubuntu_25.04_x64_Multilangue": "https://releases.ubuntu.com/25.04/ubuntu-25.04-desktop-amd64.iso",
    // Debian
    "linux_Debian_12.11 Bookworm_x64_Multilangue": "https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/debian-12.11.0-amd64-netinst.iso",
    // macOS
    "macOS_Sequoia_15.5_x64_Multilangue": "#",
    "macOS_Sonoma_14.7.6_x64_Multilangue": "#",
    "macOS_Ventura_13.0.1_x64_Multilangue": "https://archive.org/download/macos_iso/Ventura_13.0.1.iso",
    "macOS_Monterey_12.6.1_x64_Multilangue": "https://archive.org/download/macos_iso/Monterey_12.6.1.iso",
    "macOS_Big Sur_11.7.1_x64_Multilangue": "https://archive.org/download/macos_iso/BigSur_11.7.1.iso"
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