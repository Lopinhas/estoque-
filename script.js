// Dados Extraídos da Planilha 'Estoque'
const initialData = [
  {"Prateleira":1,"Código":1612,"Descrição do item":"N.U DECAL SPAK SOT AZUL","Quantidade":0,"Observações":6001612},
  {"Prateleira":1,"Código":1613,"Descrição do item":"N.U DECAL SPARK SPOT VERMELHO","Quantidade":0,"Observações":6001613},
  {"Prateleira":"1A","Código":1615,"Descrição do item":"N.U DECAL SPARK SPOT TIFANY","Quantidade":0,"Observações":6001615},
  {"Prateleira":"1A","Código":1614,"Descrição do item":"N.U DECAL SPARK SPOT ROSA","Quantidade":0,"Observações":6001614},
  {"Prateleira":"1B","Código":1793,"Descrição do item":"DECAL SPARK FLASH AZUL/VEM","Quantidade":0,"Observações":6001793},
  {"Prateleira":"1B","Código":1794,"Descrição do item":"N.U DECAL SPARK FLASH LAR/BCO","Quantidade":0,"Observações":6001794},
  {"Prateleira":"1C","Código":1690,"Descrição do item":"DECAL SPARK DRAGON AZUL","Quantidade":0,"Observações":6001690},
  {"Prateleira":"1C","Código":1691,"Descrição do item":"DECAL SPARK DRAGON VERMELHO","Quantidade":0,"Observações":6001691},
  {"Prateleira":"1D","Código":1695,"Descrição do item":"N.U DECAL JET GRAGON VERMELHO","Quantidade":0,"Observações":6001695},
  {"Prateleira":"1D","Código":1694,"Descrição do item":"N.U DECAL SPARK JET DRAGON AZUL","Quantidade":0,"Observações":6001694},
  {"Prateleira":"1E","Código":1697,"Descrição do item":"N.U DECAL SPARK JET DRAGON TIFANY","Quantidade":0,"Observações":6001697},
  {"Prateleira":"1F","Código":1813,"Descrição do item":"N.U DECAL SPARK JET 34 ROSA","Quantidade":0,"Observações":6001813},
  {"Prateleira":2,"Código":1776,"Descrição do item":"N.U DECAL XTROY DRONE AMARELO","Quantidade":0,"Observações":6001776},
  {"Prateleira":"2A","Código":1626,"Descrição do item":"DECAL XTROY FURIOUS VERMELHO","Quantidade":0,"Observações":6001626},
  {"Prateleira":"2A","Código":1627,"Descrição do item":"DECAL XTROY DURIOS AZUL","Quantidade":0,"Observações":6001627},
  {"Prateleira":"2A","Código":1628,"Descrição do item":"N.U DECAL STROY FURIOUS AMARELO","Quantidade":0,"Observações":6001628},
  {"Prateleira":"2B","Código":1629,"Descrição do item":"DECAL XTROY FURIOUS ROSA","Quantidade":0,"Observações":6001629},
  {"Prateleira":"2D","Código":1642,"Descrição do item":"N.U DECAL S. MOTARD ACTION AMARELO","Quantidade":0,"Observações":6001642},
  {"Prateleira":"2D","Código":1643,"Descrição do item":"N.U DECAL S. MOTARD ACTION ROSA","Quantidade":0,"Observações":6001643},
  {"Prateleira":"2D","Código":1644,"Descrição do item":"N.U DECAL S. MOTARD ACTION VERDE","Quantidade":0,"Observações":6001644},
  {"Prateleira":"2E","Código":1725,"Descrição do item":"N.U DECAL S. ADVENTURE VERDE","Quantidade":0,"Observações":6001725},
  {"Prateleira":"2E","Código":1950,"Descrição do item":"DECAL XTROY SV 218 FLAG FRANCA","Quantidade":0,"Observações":6001950},
  {"Prateleira":"2E","Código":1951,"Descrição do item":"DECAL XTROY SV 218 FLAG VDE ITALIA","Quantidade":0,"Observações":6001951},
  {"Prateleira":"2F","Código":1952,"Descrição do item":"DECAL XTROY SV FLAG BCO EUA","Quantidade":0,"Observações":6001952},
  {"Prateleira":"2F","Código":1954,"Descrição do item":"DECAL XTROY SV 218 FLAG NGLATERRA","Quantidade":0,"Observações":6001954},
  {"Prateleira":"2F","Código":1953,"Descrição do item":"DECAL XTROY SV 218 FLAG AMA ALEMANHA","Quantidade":0,"Observações":6001953},
  {"Prateleira":3,"Código":1465,"Descrição do item":"DECAL X TROY DRONE PRATA","Quantidade":0,"Observações":6001465},
  {"Prateleira":"3A","Código":1464,"Descrição do item":"DECAL X TROY DRONE VERMELHO","Quantidade":0,"Observações":6001464},
  {"Prateleira":"3B","Código":1789,"Descrição do item":"N.U DECAL XTROY FF TED VERDE LIMÃO","Quantidade":0,"Observações":6001789},
  {"Prateleira":"3B","Código":1795,"Descrição do item":"N.U DECAL XTROY FF TED BRANCO","Quantidade":0,"Observações":6001795},
  {"Prateleira":"3D","Código":1798,"Descrição do item":"N.U DECAL XTROY FF COSMIC VERMELHO","Quantidade":0,"Observações":6001798},
  {"Prateleira":"3D","Código":1799,"Descrição do item":"N.U DECAL XTROY FF COSMIC BRANCO","Quantidade":0,"Observações":6001799},
  {"Prateleira":"3E","Código":1800,"Descrição do item":"N,U DECAL XTROY FF COSMIC TIFANY","Quantidade":0,"Observações":6001800},
  {"Prateleira":"3F","Código":1805,"Descrição do item":"N.U DECAL STROY FF THANOS ROS/AZU","Quantidade":0,"Observações":6001805},
  {"Prateleira":4,"Código":1980,"Descrição do item":"DECAL SPARK OROC TIFANY","Quantidade":0,"Observações":6001980},
  {"Prateleira":4,"Código":1979,"Descrição do item":"DECAL SPARK OROC ROSA","Quantidade":0,"Observações":6001979},
  {"Prateleira":4,"Código":1978,"Descrição do item":"DECAL SPARK OROC VERMELHO","Quantidade":0,"Observações":6001978},
  {"Prateleira":"4A","Código":1944,"Descrição do item":"DECAL X TROY MSV 722 LAST STAR VERMELHO","Quantidade":0,"Observações":6001944},
  {"Prateleira":"4A","Código":1945,"Descrição do item":"DECAL XTROY MSV 722 LAST STAR BRANCO","Quantidade":0,"Observações":6001945},
  {"Prateleira":"4B","Código":1948,"Descrição do item":"DECAL X TROY MSV 722 LAST STAR ROSA","Quantidade":0,"Observações":6001948},
  {"Prateleira":"4C","Código":1746,"Descrição do item":"N.U DECAL NEW SPARK SPIDER AZUL","Quantidade":0,"Observações":6001746},
  {"Prateleira":"4C","Código":1850,"Descrição do item":"N.U DECAL SPARK ZOIIM CDE/LAR","Quantidade":0,"Observações":6001850},
  {"Prateleira":"4D","Código":1821,"Descrição do item":"N.U DECAL XTROY VISION VERMELHO","Quantidade":0,"Observações":6001821},
  {"Prateleira":"4D","Código":1745,"Descrição do item":"N.U DECAL NEW SPARK SPIDER TIFANY","Quantidade":0,"Observações":6001745},
  {"Prateleira":"4E","Código":1987,"Descrição do item":"DECAL EBF OPIUM ARRACK MONOC TIFANY","Quantidade":0,"Observações":6001987},
  {"Prateleira":"4E","Código":1744,"Descrição do item":"N.U DECAL NEW SPIDER CERMEL","Quantidade":0,"Observações":6001744},
  {"Prateleira":"4F","Código":1978,"Descrição do item":"DECAL SPARK OROC VERMELHO","Quantidade":0,"Observações":6001978},
  {"Prateleira":"4F","Código":1986,"Descrição do item":"DECAL EBF EPIUM ARRACK MONOC ROSA","Quantidade":0,"Observações":6001986},
  {"Prateleira":"4G","Código":1973,"Descrição do item":"DECAL SPARK FUSION VERMELHO","Quantidade":0,"Observações":6001973},
  {"Prateleira":"4G","Código":1972,"Descrição do item":"DECAL SPARK FUSION AZUL","Quantidade":0,"Observações":6001972},
  {"Prateleira":"4H","Código":1974,"Descrição do item":"DECAL SPARK FUSION BRANCO","Quantidade":0,"Observações":6001974},
  {"Prateleira":"4H","Código":1975,"Descrição do item":"DECAL SPARK DUSION TIFANY","Quantidade":0,"Observações":6001975},
  {"Prateleira":5,"Código":1977,"Descrição do item":"DECAL SPARK OROC PRATA","Quantidade":0,"Observações":6001977},
  {"Prateleira":"5A","Código":2034,"Descrição do item":"DECAL XTROY FF526 ARIS VERMELHO","Quantidade":0,"Observações":6002034},
  {"Prateleira":"5A","Código":2035,"Descrição do item":"N.U DECAL XTROY FF526 ARIS ROSA","Quantidade":0,"Observações":6002035},
  {"Prateleira":"5A","Código":2036,"Descrição do item":"DECAL X TROY FF526 ARIS PRATA","Quantidade":0,"Observações":6002036},
  {"Prateleira":"5B","Código":1304,"Descrição do item":"DECAL SPARK FLASH VERMELHO","Quantidade":0,"Observações":6001304},
  {"Prateleira":"5C","Código":1305,"Descrição do item":"DECAL SPARK FLASH PRATA","Quantidade":0,"Observações":6001305},
  {"Prateleira":"5D","Código":1621,"Descrição do item":"DECAL SPARK FLASH TIFANY","Quantidade":0,"Observações":6001621},
  {"Prateleira":"5E","Código":1302,"Descrição do item":"DECAL SPARK FLASH PINK","Quantidade":0,"Observações":6001302},
  {"Prateleira":"5F","Código":2047,"Descrição do item":"DECAL SPARK SNESS MONOCOLOR VEM","Quantidade":0,"Observações":6002047},
  {"Prateleira":"5F","Código":2048,"Descrição do item":"DECAL SPARK MONOCOLOR PRATA","Quantidade":0,"Observações":6002048},
  {"Prateleira":"5G","Código":2050,"Descrição do item":"DECAL SPARK SNESS BICOLOR AZUL","Quantidade":0,"Observações":6002050},
  {"Prateleira":"5G","Código":2049,"Descrição do item":"DECAL SPARK SNESS BICOLOR TIFANY","Quantidade":0,"Observações":6002049},
  {"Prateleira":"5H","Código":1745,"Descrição do item":"N.U DECAL NEW SPARK SPIDER TIFANY","Quantidade":0,"Observações":6001745},
  {"Prateleira":6,"Código":1986,"Descrição do item":"DECAL EBF OPIUM ATTACK MONOC ROSA","Quantidade":0,"Observações":6001986},
  {"Prateleira":6,"Código":1987,"Descrição do item":"DECAL EBF PIUM ATTACK MONOC TIFANY","Quantidade":0,"Observações":6001987},
  {"Prateleira":6,"Código":1988,"Descrição do item":"DECAL EBF OPIUM ATTACK MONOC VERMELHO","Quantidade":0,"Observações":6001988},
  {"Prateleira":"6A","Código":1990,"Descrição do item":"DECAL EBF OPIUM ATTACK BICOLOR AZUL","Quantidade":0,"Observações":6001990},
  {"Prateleira":"6A","Código":1989,"Descrição do item":"DECAL EBF OPIUM ATTACK MONOC BRANCO","Quantidade":0,"Observações":6001989},
  {"Prateleira":"6A","Código":1981,"Descrição do item":"DECAL PRESSÃO N°10 VERM 10LMB32","Quantidade":0,"Observações":6001981},
  {"Prateleira":"6B","Código":1992,"Descrição do item":"DECAL EBF OPIUM ATTACK BICOLOR ROSA","Quantidade":0,"Observações":6001992},
  {"Prateleira":"6B","Código":1791,"Descrição do item":"N.U DECAL CTROY FF CRUSH AMA/LAR","Quantidade":0,"Observações":6001791},
  {"Prateleira":"6B","Código":1792,"Descrição do item":"DECAL XTROY FF CRUSH ROS/ROX","Quantidade":0,"Observações":6001792},
  {"Prateleira":"6C","Código":1857,"Descrição do item":"N.U ADESIVO EBF 7 ANTARES TIFANY","Quantidade":0,"Observações":6001857},
  {"Prateleira":"6C","Código":1758,"Descrição do item":"DECAL XTROY FF 526 CRUSH VERM","Quantidade":0,"Observações":6001758},
  {"Prateleira":"6C","Código":1759,"Descrição do item":"DECAL XTROY FF 526 CRUSH ROSA","Quantidade":0,"Observações":6001759},
  {"Prateleira":"6D","Código":1760,"Descrição do item":"N.U DECAL XTROY FF 526 CRUSH LAR","Quantidade":0,"Observações":6001760},
  {"Prateleira":68,"Código":1989,"Descrição do item":"DECAL EBF OPIUM ATTACK MONOC BRANCO","Quantidade":0,"Observações":6001989},
  {"Prateleira":"7A","Código":1692,"Descrição do item":"DECAL SPARK DRAGON ROSA","Quantidade":0,"Observações":6001692},
  {"Prateleira":"7B","Código":1693,"Descrição do item":"DECAL SPARK DRAGON TIFANY","Quantidade":0,"Observações":6001693},
  {"Prateleira":"7B","Código":2036,"Descrição do item":"DECAL XTROY FF526 PRATA","Quantidade":0,"Observações":6002036},
  {"Prateleira":"7C","Código":2033,"Descrição do item":"N.U DECAL XTROY FF526 ARIS ROXO","Quantidade":0,"Observações":6002033},
  {"Prateleira":"7C","Código":2034,"Descrição do item":"DECAL XTROY FF526 ARIS VERMELHO","Quantidade":0,"Observações":6002034},
  {"Prateleira":"7C","Código":2035,"Descrição do item":"N.U DECAL XTROY FF526 ARIS ROSA","Quantidade":0,"Observações":6002035},
  {"Prateleira":"7D","Código":2039,"Descrição do item":"DECAL XTROY FF526 MAXIMUS ROSA","Quantidade":0,"Observações":6002039},
  {"Prateleira":"7D","Código":2037,"Descrição do item":"DECAL XTROY FF526 MAXIMUS TIFANY","Quantidade":0,"Observações":6002037},
  {"Prateleira":"7D","Código":2038,"Descrição do item":"DECAL XTROY FF526 MAXIMUS VERMELHO","Quantidade":0,"Observações":6002038},
  {"Prateleira":"7E","Código":2032,"Descrição do item":"DECAL EBF OPIUM WIND STAR AZUL","Quantidade":0,"Observações":6002032},
  {"Prateleira":"7E","Código":2031,"Descrição do item":"DECAL EBF OPIUM WIND STAR ROSA","Quantidade":0,"Observações":6002031},
  {"Prateleira":"7F","Código":2029,"Descrição do item":"DECAL EBF OPIUM WIND STAR VERMELHO","Quantidade":0,"Observações":6002029},
  {"Prateleira":"7F","Código":2030,"Descrição do item":"DECAL EBF OPIUM WIND VERDE","Quantidade":0,"Observações":6002030},
  {"Prateleira":"7G","Código":2027,"Descrição do item":"N.U DILIENTE P/ BASE COAT","Quantidade":0,"Observações":6002027},
  {"Prateleira":"8A","Código":1840,"Descrição do item":"N.U DECAL SPARK SPINNER VERMELHO","Quantidade":0,"Observações":6001840},
  {"Prateleira":"8B","Código":1844,"Descrição do item":"N.U DCAL XTROY FF526 CRAZY AZUL","Quantidade":0,"Observações":6001844},
  {"Prateleira":"8B","Código":1845,"Descrição do item":"N.U DECAL XTROY FF 526 CRAZY ROS","Quantidade":0,"Observações":6001845},
  {"Prateleira":"8C","Código":1846,"Descrição do item":"N.U DECAL XTROY FF 526 CRAZY ROX","Quantidade":0,"Observações":6001846},
  {"Prateleira":"8C","Código":1847,"Descrição do item":"N.U DECAL XTROY FF526 CRAZY VDE","Quantidade":0,"Observações":6001847},
  {"Prateleira":"8D","Código":1839,"Descrição do item":"N.U DECAL SPARK SPINNER ROSA","Quantidade":0,"Observações":6001839},
  {"Prateleira":"8E","Código":1860,"Descrição do item":"N.U DECAL SPARK RABBIT ROSA","Quantidade":0,"Observações":6001860},
  {"Prateleira":"8E","Código":1841,"Descrição do item":"N.U DECAL SPARK SPINNER BRANCO","Quantidade":0,"Observações":6001841},
  {"Prateleira":"8F","Código":1971,"Descrição do item":"DECAL EBF OPIUM SOLID","Quantidade":0,"Observações":6001971},
  {"Prateleira":9,"Código":1856,"Descrição do item":"N.U ADESIVO EBF 7 ANTARES VERMELHO","Quantidade":0,"Observações":6001856},
  {"Prateleira":"9A","Código":1928,"Descrição do item":"DECAL XTROY SUN VISOR SOLID PRATA","Quantidade":0,"Observações":6001928},
  {"Prateleira":"9A","Código":1929,"Descrição do item":"N.U DECAL XTROY FF 526 WOLF","Quantidade":0,"Observações":6001929},
  {"Prateleira":"8B","Código":1930,"Descrição do item":"DECAL XTROY E27 SOLID PRATA","Quantidade":0,"Observações":6001930},
  {"Prateleira":"9B","Código":1931,"Descrição do item":"DECAL XTROY E27 SOLID BRANCO","Quantidade":0,"Observações":6001931},
  {"Prateleira":"9C","Código":1942,"Descrição do item":"DECAL MODULAR SUN VISOUR EXXOR ROSA","Quantidade":0,"Observações":6001942},
  {"Prateleira":"9C","Código":1943,"Descrição do item":"DECAL MODULAR SUN VISOR EXXOR BRANCO","Quantidade":0,"Observações":6001943},
  {"Prateleira":"9D","Código":1941,"Descrição do item":"N.U DECAL MODULAR SUN VISOR EXXOR TIFANY","Quantidade":0,"Observações":6001941},
  {"Prateleira":"9D","Código":1940,"Descrição do item":"DECAL MODULAR SUN VISOR EXXOR VERMELHO","Quantidade":0,"Observações":6001940},
  {"Prateleira":"9E","Código":1934,"Descrição do item":"N.U DECAL XTROY FF526 CRISTAL TIFANY","Quantidade":0,"Observações":6001934},
  {"Prateleira":"9E","Código":1935,"Descrição do item":"N.U DECAL XTROY FF526 CRISTAL PRATA","Quantidade":0,"Observações":6001935},
  {"Prateleira":"9F","Código":1933,"Descrição do item":"N.U DECAL XTROY FF526 CRISTAL VERMELHO","Quantidade":0,"Observações":6001933},
  {"Prateleira":10,"Código":1731,"Descrição do item":"DECAL LOGO XTROY PRATA","Quantidade":0,"Observações":6001731},
  {"Prateleira":10,"Código":1732,"Descrição do item":"DECAL LOGO XTROY VERMELHO","Quantidade":0,"Observações":6001732},
  {"Prateleira":"10C","Código":1786,"Descrição do item":"N.U DECAL SPARK JET VOLT VERMELHO","Quantidade":0,"Observações":6001786},
  {"Prateleira":"10C","Código":1787,"Descrição do item":"N.U DECAL SPARK JET VOLT TIFANY","Quantidade":0,"Observações":6001787},
  {"Prateleira":"10D","Código":1774,"Descrição do item":"DECAL XTROY MOD SOLID ESP PTA","Quantidade":0,"Observações":6001774},
  {"Prateleira":"10E","Código":1763,"Descrição do item":"DECAL XTROY MOD SOLID ESP VEM","Quantidade":0,"Observações":6001763},
  {"Prateleira":"10E","Código":1640,"Descrição do item":"DECAL SPARK SOLID LOGO PRATA","Quantidade":0,"Observações":6001640},
  {"Prateleira":"10F","Código":1545,"Descrição do item":"DECAL LOGO SPARK","Quantidade":0,"Observações":6001545},
  {"Prateleira":"10F","Código":1546,"Descrição do item":"DECAL LOGO EBF","Quantidade":0,"Observações":6001546},
  {"Prateleira":"10F","Código":1810,"Descrição do item":"DECAL XTROY FF526 SOLID SPECIA","Quantidade":0,"Observações":6001810},
  {"Prateleira":"6G","Código":2019,"Descrição do item":"DECAL SPARK ZEUS VERMELHO","Quantidade":0,"Observações":6002019},
  {"Prateleira":"6G","Código":2020,"Descrição do item":"DECAL SPARK SEUS TIFANY","Quantidade":0,"Observações":6002020},
  {"Prateleira":"6H","Código":2021,"Descrição do item":"DECAL SPARK SEUS AZUL","Quantidade":0,"Observações":6002021},
  {"Prateleira":"6H","Código":2022,"Descrição do item":"DECAL SPARK SEUS ROXO","Quantidade":0,"Observações":6002022},
  {"Prateleira":"6F","Código":2040,"Descrição do item":"DECAL EBF APIUM RAPID VERMELHO","Quantidade":0,"Observações":6002040},
  {"Prateleira":"6F","Código":2041,"Descrição do item":"DECAL EBF OPIUM RADID PRATA","Quantidade":0,"Observações":6002041},
  {"Prateleira":"6F","Código":2042,"Descrição do item":"DECAL EBF OPIUM RAPID TIFANY","Quantidade":0,"Observações":6002042},
  {"Prateleira":"2C","Código":1982,"Descrição do item":"DECLA EBF OPIUM ZWEI VERMELHO","Quantidade":0,"Observações":6001982},
  {"Prateleira":"2C","Código":1983,"Descrição do item":"DECLA EBF OPIUM ZWEI LARANJA","Quantidade":0,"Observações":6001983},
  {"Prateleira":"3C","Código":1984,"Descrição do item":"DECLA EBF OPIUM ZWEI PRATA","Quantidade":0,"Observações":6001984},
  {"Prateleira":"3C","Código":1985,"Descrição do item":"DECLA EBF OPIUM ZWEI ROSA","Quantidade":0,"Observações":6001985}
];

let inventory = JSON.parse(localStorage.getItem('inventoryData')) || initialData;
let bootstrapModal;

document.addEventListener('DOMContentLoaded', () => {
  bootstrapModal = new bootstrap.Modal(document.getElementById('itemModal'));
  updateStats();
  renderTable();

  document.getElementById('itemForm').addEventListener('submit', (e) => {
    e.preventDefault();
    saveItem();
  });
});

function getDuplicateCodes() {
  const codeCounts = {};
  inventory.forEach(item => {
    codeCounts[item['Código']] = (codeCounts[item['Código']] || 0) + 1;
  });
  return Object.keys(codeCounts).filter(code => codeCounts[code] > 1);
}

function updateStats() {
  const duplicates = getDuplicateCodes();
  const shelves = new Set(inventory.map(i => i['Prateleira'])).size;
  const totalQty = inventory.reduce((acc, curr) => acc + Number(curr['Quantidade'] || 0), 0);

  document.getElementById('statTotal').innerText = inventory.length;
  document.getElementById('statDuplicates').innerText = duplicates.length;
  document.getElementById('statShelves').innerText = shelves;
  document.getElementById('statQuantity').innerText = totalQty;
}

function renderTable() {
  const filter = document.getElementById('tableSearchInput').value.toLowerCase();
  const duplicates = getDuplicateCodes();
  const tbody = document.getElementById('inventoryTableBody');
  tbody.innerHTML = '';

  inventory.forEach((item, index) => {
    const isDup = duplicates.includes(String(item['Código']));
    const matchFilter = 
      String(item['Prateleira']).toLowerCase().includes(filter) ||
      String(item['Código']).toLowerCase().includes(filter) ||
      String(item['Descrição do item']).toLowerCase().includes(filter) ||
      String(item['Observações']).toLowerCase().includes(filter);

    if (matchFilter) {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><span class="badge bg-secondary">${item['Prateleira']}</span></td>
        <td><strong>${item['Código']}</strong></td>
        <td>${item['Descrição do item']}</td>
        <td>${item['Quantidade'] || 0}</td>
        <td>${item['Observações'] || '-'}</td>
        <td>${isDup ? '<span class="badge badge-duplicate"><i class="fa-solid fa-triangle-exclamation"></i> Duplicado</span>' : '<span class="badge bg-success">OK</span>'}</td>
        <td class="text-end">
          <button class="btn btn-sm btn-outline-primary me-1" onclick="openEditModal(${index})"><i class="fa-solid fa-pen"></i></button>
          <button class="btn btn-sm btn-outline-danger" onclick="deleteItem(${index})"><i class="fa-solid fa-trash"></i></button>
        </td>
      `;
      tbody.appendChild(tr);
    }
  });
}

function handleQuickSearch() {
  const term = document.getElementById('quickSearchInput').value.trim().toLowerCase();
  const resultDiv = document.getElementById('quickSearchResult');

  if (!term) {
    resultDiv.innerHTML = '<p class="text-muted 