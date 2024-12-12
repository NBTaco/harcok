const table = document.createElement('table') // Létrehozzuk a table- elemet, createElement bementi paramétere string (ez lesz a html tag)
document.body.appendChild(table) //a table elemet hozzáadjuk a body- hoz

//thead megcsinálása, és az elemeinek hozzáadása
const thead = document.createElement('thead') //létrehozunk egy thead- elemet createElement bementi paramétere string (ez lesz a html tag)
table.appendChild(thead) //a thead elemet hozzáadjuk a table- hez

const theadrow1 = document.createElement('tr') //létrehozunk egy tr- elemet, createElement bementi paramétere string (ez lesz a html tag)
thead.appendChild(theadrow1) //a tr elemet hozzáadjuk a thead- hez

const theadcell1 = document.createElement('td') //létrehozunk egy td- elemet, createElement bementi paramétere string (ez lesz a html tag)
theadcell1.innerHTML = "Harc megnevezése" //a létrehozot td- nek beállítjuk a szövegét(innerHTML-t): Harc megnevezése-re, az innerHTML string
theadrow1.appendChild(theadcell1) //a td elemet hozzáadjuk a tr- hez
 
const theadcell2 = document.createElement('td') //létrehozunk egy td- elemet, createElement bementi paramétere string (ez lesz a html tag)
theadcell2.innerHTML = "Szembenálló felek" //a létrehozot td- nek beállítjuk a szövegét(innerHTML-t): Szembenálló felek-re
theadrow1.appendChild(theadcell2) //a td elemet hozzáadjuk a tr- hez

const theadcell3 = document.createElement('td') //létrehozunk egy td- elemet, createElement bementi paramétere string (ez lesz a html tag)
theadcell3.innerHTML = "Haderő" //a létrehozot td- nek beállítjuk a szövegét(innerHTML-t): Haderő-re
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
row1td1.innerHTML = "Rákóczi szabadságharc" //beállíjuk a cella szövegét (innerHTML-t):Rákóczi szabadságharc, az innerHTML string
tbodyrow1.appendChild(row1td1) //hozzáadjuk a cellát az 1. sorhoz

const row1td2 = document.createElement('td') //létrehozzuk az 1. sor 2. celláját (td), createElement bementi paramétere string (ez lesz a html tag)
row1td2.innerHTML = "Kuruc" //beállíjuk a cella szövegét (innerHTML-t): Kuruc, az innerHTML string
tbodyrow1.appendChild(row1td2) //hozzáadjuk a cellát az 1. sorhoz

const row1td3 = document.createElement('td') //létrehozzuk az 1. sor 3. celláját (td), createElement bementi paramétere string (ez lesz a html tag)
row1td3.innerHTML = "70.000" //beállíjuk a cella szövegét (innerHTML-t): 70.000, habár számot irunk be az innerHTML itt is string
tbodyrow1.appendChild(row1td3) //hozzáadjuk a cellát az 1. sorhoz

const row2td1 = document.createElement('td') //létrehozzuk a 2. sor 1. celláját (td)- ez a középső cella lesz, mvel az első a rowSpan miatt már megvan, createElement bementi paramétere string (ez lesz a html tag)
row2td1.innerHTML = "Labanc" //beállíjuk a cella szövegét (innerHTML-t):Labanc, az innerHTML string
tbodyrow2.appendChild(row2td1) //hozzáadjuk a cellát a 2. sorhoz

const row2td2 = document.createElement('td') //létrehozzuk a 2. sor 2. celláját (td)- ,utolsó cella, createElement bementi paramétere string (ez lesz a html tag)
row2td2.innerHTML = "60.000" //beállíjuk a cella szövegét (innerHTML-t):60.000, habár számot irunk be az innerHTML itt is string
tbodyrow2.appendChild(row2td2) //hozzáadjuk a cellát a 2. sorhoz

// 2. sor
const tbodyrow3 = document.createElement('tr') //létrehozzuk a tbody 3. sorát, később ennek az 1. celláján lesz rowSpan, createElement bementi paramétere string (ez lesz a html tag)
tbody.appendChild(tbodyrow3) //a 3. sort hozzáadjuk a tbody- hoz

const tbodyrow4 = document.createElement('tr') //létrehozzuk a tbody 4. sorát, ennek nem fog kelleni 1. cella a rowSpan miatt, createElement bementi paramétere string (ez lesz a html tag)
tbody.appendChild(tbodyrow4) //a 4. sort hozzáadjuk a tbody- hoz

const row3td1 = document.createElement('td') //létrehozzuk az 3. sor 1. celláját (td), createElement bementi paramétere string (ez lesz a html tag)
row3td1.rowSpan = 2 //beállítjuk a rowSpant a cellára
row3td1.innerHTML = "48-as szabadságharc" //beállíjuk a cella szövegét (innerHTML-t): 48-as szabadságharc, az innerHTML itt is string
tbodyrow3.appendChild(row3td1) //hozzáadjuk a cellát a 3. sorhoz

const row3td2 = document.createElement('td') //létrehozzuk a 3. sor 2. celláját (td), createElement bementi paramétere string (ez lesz a html tag)
row3td2.innerHTML = "Osztrák császárság(+ Orosz birodalom)" //beállíjuk a cella szövegét (innerHTML-t): Osztrák császárság(+ Orosz birodalom), az innerHTML itt is string
tbodyrow3.appendChild(row3td2) //hozzáadjuk a cellát a 3. sorhoz

const row3td3 = document.createElement('td') //létrehozzuk a 3. sor 3. celláját (td), createElement bementi paramétere string (ez lesz a html tag)
row3td3.innerHTML = "170.000(+ 200.000)" //beállíjuk a cella szövegét (innerHTML-t): 170.000(+ 200.000), az innerHTML itt is string
tbodyrow3.appendChild(row3td3) //hozzáadjuk a cellát a 3. sorhoz

const row4td1 = document.createElement('td') //létrehozzuk a 4. sor 1. celláját (td)- ez a középső cella lesz, mvel az első a rowSpan miatt már megvan, createElement bementi paramétere string (ez lesz a html tag)
row4td1.innerHTML = "Magyar királyság" //beállíjuk a cella szövegét (innerHTML-t): Magyar királyság, az innerHTML itt is string
tbodyrow4.appendChild(row4td1) //hozzáadjuk a cellát a 4. sorhoz

const row4td2 = document.createElement('td') //létrehozzuk a 4. sor 2. celláját (td)- ,utolsó cella, createElement bementi paramétere string (ez lesz a html tag)
row4td2.innerHTML = "170.000" //beállíjuk a cella szövegét (innerHTML-t): 170.000, az innerHTML itt is string
tbodyrow4.appendChild(row4td2) //hozzáadjuk a cellát a 4. sorhoz

// 3. sor
const tbodyrow5 = document.createElement('tr') //létrehozzuk a tbody 5. sorát, később ennek az 1. celláján lesz rowSpan, createElement bementi paramétere string (ez lesz a html tag)
tbody.appendChild(tbodyrow5) //az 5. sort hozzáadjuk a tbody- hoz

const tbodyrow6 = document.createElement('tr') //létrehozzuk a tbody 6. sorát, ennek nem fog kelleni 1. cella a rowSpan miatt, createElement bementi paramétere string (ez lesz a html tag)
tbody.appendChild(tbodyrow6)  //a 6. sort hozzáadjuk a tbody- hoz

const row5td1 = document.createElement('td') //létrehozzuk az 5. sor 1. celláját (td), createElement bementi paramétere string (ez lesz a html tag)
row5td1.rowSpan = 2 //beállítjuk a rowSpant a cellára
row5td1.innerHTML = "I. világháború" //beállíjuk a cella szövegét (innerHTML-t): I. világháború, az innerHTML itt is string
tbodyrow5.appendChild(row5td1) //hozzáadjuk a cellát az 5. sorhoz

const row5td2 = document.createElement('td') //létrehozzuk az 5. sor 2. celláját (td), createElement bementi paramétere string (ez lesz a html tag)
row5td2.innerHTML = "Antant" //beállíjuk a cella szövegét (innerHTML-t): Antant, az innerHTML itt is string
tbodyrow5.appendChild(row5td2) //hozzáadjuk a cellát az 5. sorhoz

const row5td3 = document.createElement('td') //létrehozzuk az 5. sor 2. celláját (td), createElement bementi paramétere string (ez lesz a html tag)
row5td3.innerHTML = "43 millió" //beállíjuk a cella szövegét (innerHTML-t): 43 millió, az innerHTML itt is string
tbodyrow5.appendChild(row5td3) //hozzáadjuk a cellát az 5. sorhoz

const row6td1 = document.createElement('td') //létrehozzuk a 6. sor 1. celláját (td)- ez a középső cella lesz, mvel az első a rowSpan miatt már megvan, createElement bementi paramétere string (ez lesz a html tag)
row6td1.innerHTML = "Központi Hatalmak" //beállíjuk a cella szövegét (innerHTML-t): Központi hatalmak, az innerHTML itt is string
tbodyrow6.appendChild(row6td1)//hozzáadjuk a cellát a 6. sorhoz

const row6td2 = document.createElement('td') //létrehozzuk a 6. sor 2. celláját (td)- utolsó a sorban, createElement bementi paramétere string (ez lesz a html tag)
row6td2.innerHTML = "25 millió" //beállíjuk a cella szövegét (innerHTML-t): 25 millió, az innerHTML itt is string
tbodyrow6.appendChild(row6td2) //hozzáadjuk a cellát a 6. sorhoz

//4.sor
const tbodyrow7 = document.createElement('tr') //létrehozzuk a tbody 7. sorát, createElement bementi paramétere string (ez lesz a html tag)
tbody.appendChild(tbodyrow7) //a 7. sort hozzáadjuk a tbody- hoz

const row7td1 = document.createElement('td') //létrehozzuk a 7. sor 1. celláját (td), createElement bementi paramétere string (ez lesz a html tag)
row7td1.innerHTML = "Bosworthi csata" //beállíjuk a cella szövegét (innerHTML-t): Bosworthi csata, az innerHTML itt is string
tbodyrow7.appendChild(row7td1) //hozzáadjuk a cellát a 7. sorhoz

const row7td2 = document.createElement('td') //létrehozzuk a 7. sor 2. celláját (td), createElement bementi paramétere string (ez lesz a html tag)
row7td2.innerHTML = "Angolok(York + Lancester)"  //beállíjuk a cella szövegét (innerHTML-t): Angolok(York + Lancester), az innerHTML itt is string
tbodyrow7.appendChild(row7td2) //hozzáadjuk a cellát a 7. sorhoz

const row7td3 = document.createElement('td') //létrehozzuk a 7. sor 3. celláját (td), createElement bementi paramétere string (ez lesz a html tag)
row7td3.innerHTML = "15.000" //beállíjuk a cella szövegét (innerHTML-t): 15.000, az innerHTML itt is string
tbodyrow7.appendChild(row7td3) //hozzáadjuk a cellát a 7. sorhoz