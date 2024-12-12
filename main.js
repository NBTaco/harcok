//változók bevezetése
const fejlec1 = "Harc megnevezése" //fejlec 1. cellaja, string, fejlec1 változóba
const fejlec2 = "Szembenálló felek" //fejlec 2. cellaja, string, fejlec2 változóba
const fejlec3 = "Haderő" //fejlec 3. cellaja, string, fejlec3 változóba
const harc1 = "Rákóczi szabadságharc" //1. rowSpan-es elem, a rowSpan-t később állítom be, string, harc1 változóba
const elsosor1 = "Kuruc" //1. sor 1. cella, string, elsosor1 változóba
const elsosor2 = "70.000" //1. sor 2. cella, string, elsosor2 változóba
const masodiksor1 = "Labanc" //2. sor 1. cella, string, masodiksor1 változóba
const masodiksor2 = "60.000" //2. sor 2. cella, string, masodiksor2 változóba
const harc2 = "48-as szabadságharc" //2. rowSpan-es elem, a rowSpan-t később állítom be, string, harc2 változóba
const harmadiksor1 = "Osztrák császárság(+ Orosz birodalom)" //3. sor 1. cella, string, harmadiksor1 változóba
const harmadiksor2 = "170.000(+ 200.000)" //3. sor 2. cella, string, harmadiksor2 változóba
const negyediksor1 = "Magyar királyság" //3. sor 1. cella, string, negyediksor1 változóba
const negyediksor2 = "170.000" //4. sor 2. cella, string, negyediksor2 változóba
const harc3 = "I. világháború" //2. rowSpan-es elem, a rowSpan-t később állítom be, string, harc3 változóba
const otodiksor1 = "Antant" //5. sor 1. cella, string, otodiksor1 változóba
const otodiksor2 = "43 millió" //5. sor 2. cella, string, otodiksor2 változóba
const hatodiksor1 = "Központi hatalmak" //6. sor 1. cella, string, hatodiksor1 változóba
const hatodiksor2 = "25 millió" //6. sor 2. cella, string, hatodiksor2 változóba
const harc4 = "Bosworthi csata" // 4. cata a harc4 változóba, string
const hetediksor1 = "Angolok(York + Lancester)" //7. sor 1. cella, string, hetediksor1 változóba
const hetediksor2 = "15.000" //7. sor 2. cella, string, hetediksor2 változóba

const table = document.createElement('table') // Létrehozzuk a table- elemet, createElement bementi paramétere string (ez lesz a html tag)
document.body.appendChild(table) //a table elemet hozzáadjuk a body- hoz

//thead megcsinálása, és az elemeinek hozzáadása
const thead = document.createElement('thead') //létrehozunk egy thead- elemet createElement bementi paramétere string (ez lesz a html tag)
table.appendChild(thead) //a thead elemet hozzáadjuk a table- hez

const theadrow1 = document.createElement('tr') //létrehozunk egy tr- elemet, createElement bementi paramétere string (ez lesz a html tag)
thead.appendChild(theadrow1) //a tr elemet hozzáadjuk a thead- hez

const theadcell1 = document.createElement('td') //létrehozunk egy td- elemet, createElement bementi paramétere string (ez lesz a html tag)
theadcell1.innerHTML = fejlec1 //az innerHTML már nem egy string-el, hanem egy vááltozóval egyenlő (a változó string)
theadrow1.appendChild(theadcell1) //a td elemet hozzáadjuk a tr- hez
 
const theadcell2 = document.createElement('td') //létrehozunk egy td- elemet, createElement bementi paramétere string (ez lesz a html tag)
theadcell2.innerHTML = fejlec2 //az innerHTML már nem egy string-el, hanem egy vááltozóval egyenlő (a változó string)
theadrow1.appendChild(theadcell2) //a td elemet hozzáadjuk a tr- hez

const theadcell3 = document.createElement('td') //létrehozunk egy td- elemet, createElement bementi paramétere string (ez lesz a html tag)
theadcell3.innerHTML = fejlec3 //az innerHTML már nem egy string-el, hanem egy vááltozóval egyenlő (a változó string)
theadrow1.appendChild(theadcell3) //a td elemet hozzáadjuk a tr- hez

//tbody- megcsinálása, és az elemeinek hozzáadása
const tbody = document.createElement('tbody') //létrehozunk egy tbody- elemet, createElement bementi paramétere string (ez lesz a html tag)
table.appendChild(tbody) //a tbody- elemet hozzáadjuk a table- hez

//tbody 1.sor (rowspannel)
const tbodyrow1 = document.createElement('tr') //létrehozzuk a tbody 1. sorát, később ennek az 1. celláján lesz rowSpan, createElement bementi paramétere string (ez lesz a html tag)
tbody.appendChild(tbodyrow1) //az 1. sort hozzáadjuk a tbody- hoz

const tbodyrow2 = document.createElement('tr') //létrehozzuk a tbody 2. sorát, ennek nem fog kelleni 1. cella a rowSpan miatt, createElement bementi paramétere string (ez lesz a html tag)
tbody.appendChild(tbodyrow2) //az 2. sort hozzáadjuk a tbody- hoz

const row1td1 = document.createElement('td') //létrehozzuk az 1. sor 1. celláját (td), createElement bementi paramétere string (ez lesz a html tag)
row1td1.rowSpan = 2 //beállítjuk a rowSpant a cellára
row1td1.innerHTML = harc1 //az innerHTML már nem egy string-el, hanem egy vááltozóval egyenlő (a változó string)
tbodyrow1.appendChild(row1td1) //hozzáadjuk a cellát az 1. sorhoz

const row1td2 = document.createElement('td') //létrehozzuk az 1. sor 2. celláját (td), createElement bementi paramétere string (ez lesz a html tag)
row1td2.innerHTML = elsosor1 //az innerHTML már nem egy string-el, hanem egy vááltozóval egyenlő (a változó string)
tbodyrow1.appendChild(row1td2) //hozzáadjuk a cellát az 1. sorhoz

const row1td3 = document.createElement('td') //létrehozzuk az 1. sor 3. celláját (td), createElement bementi paramétere string (ez lesz a html tag)
row1td3.innerHTML = elsosor2 //az innerHTML már nem egy string-el, hanem egy vááltozóval egyenlő (a változó string)
tbodyrow1.appendChild(row1td3) //hozzáadjuk a cellát az 1. sorhoz

const row2td1 = document.createElement('td') //létrehozzuk a 2. sor 1. celláját (td)- ez a középső cella lesz, mvel az első a rowSpan miatt már megvan, createElement bementi paramétere string (ez lesz a html tag)
row2td1.innerHTML = masodiksor1 //az innerHTML már nem egy string-el, hanem egy vááltozóval egyenlő (a változó string)
tbodyrow2.appendChild(row2td1) //hozzáadjuk a cellát a 2. sorhoz

const row2td2 = document.createElement('td') //létrehozzuk a 2. sor 2. celláját (td)- ,utolsó cella, createElement bementi paramétere string (ez lesz a html tag)
row2td2.innerHTML = masodiksor2 //az innerHTML már nem egy string-el, hanem egy vááltozóval egyenlő (a változó string)
tbodyrow2.appendChild(row2td2) //hozzáadjuk a cellát a 2. sorhoz

// 2. sor
const tbodyrow3 = document.createElement('tr') //létrehozzuk a tbody 3. sorát, később ennek az 1. celláján lesz rowSpan, createElement bementi paramétere string (ez lesz a html tag)
tbody.appendChild(tbodyrow3) //a 3. sort hozzáadjuk a tbody- hoz

const tbodyrow4 = document.createElement('tr') //létrehozzuk a tbody 4. sorát, ennek nem fog kelleni 1. cella a rowSpan miatt, createElement bementi paramétere string (ez lesz a html tag)
tbody.appendChild(tbodyrow4) //a 4. sort hozzáadjuk a tbody- hoz

const row3td1 = document.createElement('td') //létrehozzuk az 3. sor 1. celláját (td), createElement bementi paramétere string (ez lesz a html tag)
row3td1.rowSpan = 2 //beállítjuk a rowSpant a cellára
row3td1.innerHTML = harc2 //az innerHTML már nem egy string-el, hanem egy vááltozóval egyenlő (a változó string)
tbodyrow3.appendChild(row3td1) //hozzáadjuk a cellát a 3. sorhoz

const row3td2 = document.createElement('td') //létrehozzuk a 3. sor 2. celláját (td), createElement bementi paramétere string (ez lesz a html tag)
row3td2.innerHTML = harmadiksor1 //az innerHTML már nem egy string-el, hanem egy vááltozóval egyenlő (a változó string)
tbodyrow3.appendChild(row3td2) //hozzáadjuk a cellát a 3. sorhoz

const row3td3 = document.createElement('td') //létrehozzuk a 3. sor 3. celláját (td), createElement bementi paramétere string (ez lesz a html tag)
row3td3.innerHTML = harmadiksor2 //az innerHTML már nem egy string-el, hanem egy vááltozóval egyenlő (a változó string)
tbodyrow3.appendChild(row3td3) //hozzáadjuk a cellát a 3. sorhoz

const row4td1 = document.createElement('td') //létrehozzuk a 4. sor 1. celláját (td)- ez a középső cella lesz, mvel az első a rowSpan miatt már megvan, createElement bementi paramétere string (ez lesz a html tag)
row4td1.innerHTML = negyediksor1 //az innerHTML már nem egy string-el, hanem egy vááltozóval egyenlő (a változó string)
tbodyrow4.appendChild(row4td1) //hozzáadjuk a cellát a 4. sorhoz

const row4td2 = document.createElement('td') //létrehozzuk a 4. sor 2. celláját (td)- ,utolsó cella, createElement bementi paramétere string (ez lesz a html tag)
row4td2.innerHTML = negyediksor2 //az innerHTML már nem egy string-el, hanem egy vááltozóval egyenlő (a változó string)
tbodyrow4.appendChild(row4td2) //hozzáadjuk a cellát a 4. sorhoz

// 3. sor
const tbodyrow5 = document.createElement('tr') //létrehozzuk a tbody 5. sorát, később ennek az 1. celláján lesz rowSpan, createElement bementi paramétere string (ez lesz a html tag)
tbody.appendChild(tbodyrow5) //az 5. sort hozzáadjuk a tbody- hoz

const tbodyrow6 = document.createElement('tr') //létrehozzuk a tbody 6. sorát, ennek nem fog kelleni 1. cella a rowSpan miatt, createElement bementi paramétere string (ez lesz a html tag)
tbody.appendChild(tbodyrow6)  //a 6. sort hozzáadjuk a tbody- hoz

const row5td1 = document.createElement('td') //létrehozzuk az 5. sor 1. celláját (td), createElement bementi paramétere string (ez lesz a html tag)
row5td1.rowSpan = 2 //beállítjuk a rowSpant a cellára
row5td1.innerHTML = harc3 //az innerHTML már nem egy string-el, hanem egy vááltozóval egyenlő (a változó string)
tbodyrow5.appendChild(row5td1) //hozzáadjuk a cellát az 5. sorhoz

const row5td2 = document.createElement('td') //létrehozzuk az 5. sor 2. celláját (td), createElement bementi paramétere string (ez lesz a html tag)
row5td2.innerHTML = otodiksor1 //az innerHTML már nem egy string-el, hanem egy vááltozóval egyenlő (a változó string)
tbodyrow5.appendChild(row5td2) //hozzáadjuk a cellát az 5. sorhoz

const row5td3 = document.createElement('td') //létrehozzuk az 5. sor 2. celláját (td), createElement bementi paramétere string (ez lesz a html tag)
row5td3.innerHTML = otodiksor2 //az innerHTML már nem egy string-el, hanem egy vááltozóval egyenlő (a változó string)
tbodyrow5.appendChild(row5td3) //hozzáadjuk a cellát az 5. sorhoz

const row6td1 = document.createElement('td') //létrehozzuk a 6. sor 1. celláját (td)- ez a középső cella lesz, mvel az első a rowSpan miatt már megvan, createElement bementi paramétere string (ez lesz a html tag)
row6td1.innerHTML = hatodiksor1 //az innerHTML már nem egy string-el, hanem egy vááltozóval egyenlő (a változó string)
tbodyrow6.appendChild(row6td1)//hozzáadjuk a cellát a 6. sorhoz

const row6td2 = document.createElement('td') //létrehozzuk a 6. sor 2. celláját (td)- utolsó a sorban, createElement bementi paramétere string (ez lesz a html tag)
row6td2.innerHTML = hatodiksor2 //az innerHTML már nem egy string-el, hanem egy vááltozóval egyenlő (a változó string)
tbodyrow6.appendChild(row6td2) //hozzáadjuk a cellát a 6. sorhoz

//4.sor
const tbodyrow7 = document.createElement('tr') //létrehozzuk a tbody 7. sorát, createElement bementi paramétere string (ez lesz a html tag)
tbody.appendChild(tbodyrow7) //a 7. sort hozzáadjuk a tbody- hoz

const row7td1 = document.createElement('td') //létrehozzuk a 7. sor 1. celláját (td), createElement bementi paramétere string (ez lesz a html tag)
row7td1.innerHTML = harc4 //az innerHTML már nem egy string-el, hanem egy vááltozóval egyenlő (a változó string)
tbodyrow7.appendChild(row7td1) //hozzáadjuk a cellát a 7. sorhoz

const row7td2 = document.createElement('td') //létrehozzuk a 7. sor 2. celláját (td), createElement bementi paramétere string (ez lesz a html tag)
row7td2.innerHTML = hetediksor1 //az innerHTML már nem egy string-el, hanem egy vááltozóval egyenlő (a változó string)
tbodyrow7.appendChild(row7td2) //hozzáadjuk a cellát a 7. sorhoz

const row7td3 = document.createElement('td') //létrehozzuk a 7. sor 3. celláját (td), createElement bementi paramétere string (ez lesz a html tag)
row7td3.innerHTML = hetediksor2 //az innerHTML már nem egy string-el, hanem egy vááltozóval egyenlő (a változó string)
tbodyrow7.appendChild(row7td3) //hozzáadjuk a cellát a 7. sorhoz