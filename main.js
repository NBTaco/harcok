const table = document.createElement('table') // Létrehozzuk a table- elemet
document.body.appendChild(table) //a table elemet hozzáadjuk a body- hoz

//thead megcsinálása, és az elemeinek hozzáadása
const thead = document.createElement('thead') //létrehozunk egy thead- elemet
table.appendChild(thead) //a thead elemet hozzáadjuk a table- hez

const theadrow1 = document.createElement('tr') //létrehozunk egy tr- elemet
thead.appendChild(theadrow1) //a tr elemet hozzáadjuk a thead- hez

const theadcell1 = document.createElement('td') //létrehozunk egy td- elemet
theadcell1.innerHTML = "Harc megnevezése" //a létrehozot td- nek beállítjuk a szövegét(innerHTML-t): Harc megnevezése-re
theadrow1.appendChild(theadcell1) //a td elemet hozzáadjuk a tr- hez
 
const theadcell2 = document.createElement('td') //létrehozunk egy td- elemet
theadcell2.innerHTML = "Szembenálló felek" //a létrehozot td- nek beállítjuk a szövegét(innerHTML-t): Szembenálló felek-re
theadrow1.appendChild(theadcell2) //a td elemet hozzáadjuk a tr- hez

const theadcell3 = document.createElement('td') //létrehozunk egy td- elemet
theadcell3.innerHTML = "Haderő" //a létrehozot td- nek beállítjuk a szövegét(innerHTML-t): Haderő-re
theadrow1.appendChild(theadcell3) //a td elemet hozzáadjuk a tr- hez

//tbody- megcsinálása, és az elemeinek hozzáadása
const tbody = document.createElement('tbody') //létrehozunk egy tbody- elemet 
table.appendChild(tbody) //a tbody- elemet hozzáadjuk a table- hez

//tbody 1.sor (rowspannel)
const tbodyrow1 = document.createElement('tr') //létrehozzuk a tbody 1. sorát, később ennek az 1. celláján lesz rowSpan
tbody.appendChild(tbodyrow1) //az 1. sort hozzáadjuk a tbody- hoz

const tbodyrow2 = document.createElement('tr') //létrehozzuk a tbody 2. sorát, ennek nem fog kelleni 1. cella a rowSpan miatt
tbody.appendChild(tbodyrow2) //az 2. sort hozzáadjuk a tbody- hoz

const row1td1 = document.createElement('td') //létrehozzuk az 1. sor 1. celláját (td)
row1td1.rowSpan = 2 //beállítjuk a rowSpant a cellára
row1td1.innerHTML = "Rákóczi szabadságharc" //beállíjuk a cella szövegét (innerHTML-t):Rákóczi szabadságharc
tbodyrow1.appendChild(row1td1) //hozzáadjuk a cellát az 1. sorhoz

const row1td2 = document.createElement('td') //létrehozzuk az 1. sor 2. celláját (td)
row1td2.innerHTML = "Kuruc" //beállíjuk a cella szövegét (innerHTML-t): Kuruc
tbodyrow1.appendChild(row1td2) //hozzáadjuk a cellát az 1. sorhoz

const row1td3 = document.createElement('td') //létrehozzuk az 1. sor 3. celláját (td)
row1td3.innerHTML = "70.000" //beállíjuk a cella szövegét (innerHTML-t): 70.000 
tbodyrow1.appendChild(row1td3) //hozzáadjuk a cellát az 1. sorhoz

const row2td1 = document.createElement('td') //létrehozzuk az 2. sor 1. celláját (td)- ez a középső cella lesz, mvel az első a rowSpan miatt már megvan
row2td1.innerHTML = "Labanc" //beállíjuk a cella szövegét (innerHTML-t):Labanc
tbodyrow2.appendChild(row2td1) //hozzáadjuk a cellát az 2. sorhoz

const row2td2 = document.createElement('td') //létrehozzuk az 1. sor 2. celláját (td)- utolsó a sorban
row2td2.innerHTML = "60.000" //beállíjuk a cella szövegét (innerHTML-t):60.000
tbodyrow2.appendChild(row2td2) //hozzáadjuk a cellát az 2. sorhoz

// 2. sor
const tbodyrow3 = document.createElement('tr')
tbody.appendChild(tbodyrow3)

const tbodyrow4 = document.createElement('tr')
tbody.appendChild(tbodyrow4)

const row3td1 = document.createElement('td')
row3td1.rowSpan = 2
row3td1.innerHTML = "48-as szabadságharc"
tbodyrow3.appendChild(row3td1)

const row3td2 = document.createElement('td')
row3td2.innerHTML = "Osztrák császárság(+ Orosz birodalom)"
tbodyrow3.appendChild(row3td2)

const row3td3 = document.createElement('td')
row3td3.innerHTML = "170.000(+ 200.000)"
tbodyrow3.appendChild(row3td3)

const row4td1 = document.createElement('td')
row4td1.innerHTML = "Magyar királyság"
tbodyrow4.appendChild(row4td1)

const row4td2 = document.createElement('td')
row4td2.innerHTML = "170.000"
tbodyrow4.appendChild(row4td2)

// 3. sor
const tbodyrow5 = document.createElement('tr')
tbody.appendChild(tbodyrow5)

const tbodyrow6 = document.createElement('tr')
tbody.appendChild(tbodyrow6)

const row5td1 = document.createElement('td')
row5td1.rowSpan = 2
row5td1.innerHTML = "I. világháború"
tbodyrow5.appendChild(row5td1)

const row5td2 = document.createElement('td')
row5td2.innerHTML = "Antant"
tbodyrow5.appendChild(row5td2)

const row5td3 = document.createElement('td')
row5td3.innerHTML = "43 millió"
tbodyrow5.appendChild(row5td3)

const row6td1 = document.createElement('td')
row6td1.innerHTML = "Központi Hatalmak"
tbodyrow6.appendChild(row6td1)

const row6td2 = document.createElement('td')
row6td2.innerHTML = "25 millió"
tbodyrow6.appendChild(row6td2)

//4.sor
const tbodyrow7 = document.createElement('tr')
tbody.appendChild(tbodyrow7)

const row7td1 = document.createElement('td')
row7td1.innerHTML = "Bosworthi csata"
tbodyrow7.appendChild(row7td1)

const row7td2 = document.createElement('td')
row7td2.innerHTML = "Angolok(York + Lancester)"
tbodyrow7.appendChild(row7td2)

const row7td3 = document.createElement('td')
row7td3.innerHTML = "15.000"
tbodyrow7.appendChild(row7td3)





