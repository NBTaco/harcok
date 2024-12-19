
const fajlecObj = { //fejléc objektum, benne van a harc, felek, és a haderő
    harc: "Harc megnevezése", //fejléc objektum harc tulajdonsága, ez a "Harc megnevezése" stringet tartalmazza
    felek: "Szembenálló felek", //fejléc objektum felek tulajdonsága, ez a "Szembenálló felek" stringet tartalmazza
    hadero: "Haderő" //fejléc objektum hader tulajdonsága, ez a "Haderő" stringet tartalmazza
}

const tomb = [ //tomb letrehozasa, a tömb eleminek száma mindig egyel több, mint az indexe
    { 
        harc: "Rákóczi szabadságharc", //tömb első elemének harc tulajdonsága, "Rákóczi szabadságharc"stringet tárolja
        fel: "Kuruc", //tömb első elemének fel tulajdonsága, "Kuruc" stringet tárolja
        hadero: "70.000", //tömb első elemének hadero tulajdonsága, "70.000" stringet tárolja
        fel2: "Labanc", //tömb első elemének fel2 tulajdonsága, "Labanc" stringet tárolja
        hadero2: "60.000" //tömb első elemének hadero2 tulajdonsága, "60.000" stringet tárolja
    },
    { 
        harc: "48-as szabadságharc", //tömb második elemének harc tulajdonsága, "48-as szabadságharc" stringet tárolja
        fel: "Osztrák császárság(+ Orosz birodalom)", //tömb második elemének fel tulajdonsága, "Osztrák császárság(+ Orosz birodalom)" stringet tárolja
        hadero: "170.000(+ 200.000)", //tömb második elemének hadero tulajdonsága, "170.000(+ 200.000)" stringet tárolja
        fel2: "Magyar királyság", //tömb második elemének fel2 tulajdonsága, "Magyar királyság" stringet tárolja
        hadero2: "170.000" //tömb második elemének hadero2 tulajdonsága, "170.000" stringet tárolja
    },
    {
        harc: "I. világháború", //tömb harmadik elemének harc tulajdonsága, "I. világháború" stringet tárolja
        fel: "Antant", //tömb harmadik elemének fel tulajdonsága, "Antant" stringet tárolja
        hadero: "43 millió", //tömb harmadik elemének hadero tulajdonsága, "43 millió" stringet tárolja
        fel2: "Központi hatalmak", //tömb harmadik elemének fel2 tulajdonsága, "Központi hatalmak" stringet tárolja
        hadero2: "25 millió" //tömb harmadik elemének hadero2 tulajdonsága, "25 millió" stringet tárolja
    },
    { 
        harc: "Bosworthi csata", //tömb negyedik elemének harc tulajdonsága, "Bosworthi csata" stringet tárolja
        fel: "Angolok(York + Lancester)", //tömb negyedik elemének fel tulajdonsága, "Angolok(York + Lancester)" stringet tárolja
        hadero: "15.000"//tömb negyedik elemének hadero tulajdonsága, "15.000" stringet tárolja
    }
]

const table = document.createElement('table') // Létrehozzuk a table- elemet, createElement bementi paramétere string (ez lesz a html tag)
document.body.appendChild(table) //a table elemet hozzáadjuk a body- hoz
    

function RenderTable(){ //létrehoom a RenderTable függvényt, ebbe van benne a táblázat generálása
    const thead = document.createElement('thead') //létrehozunk egy thead- elemet createElement bementi paramétere string (ez lesz a html tag)
    table.appendChild(thead) //a thead elemet hozzáadjuk a table- hez

    const theadrow1 = document.createElement('tr') //létrehozunk egy tr- elemet, createElement bementi paramétere string (ez lesz a html tag)
    thead.appendChild(theadrow1) //a tr elemet hozzáadjuk a thead- hez

    const theadcell1 = document.createElement('td') //létrehozunk egy td- elemet, createElement bementi paramétere string (ez lesz a html tag)
    theadcell1.innerHTML = fajlecObj.harc //a fajlecObj objektum harc tulajdonságának értéke lesz a theadcell1 innerHTML-je
    theadrow1.appendChild(theadcell1) //a td elemet hozzáadjuk a tr- hez
     
    const theadcell2 = document.createElement('td') //létrehozunk egy td- elemet, createElement bementi paramétere string (ez lesz a html tag
    theadcell2.innerHTML = fajlecObj.felek //a fajlecObj objektum felek tulajdonságának értéke lesz a theadcell2 innerHTML-je
    theadrow1.appendChild(theadcell2) //a td elemet hozzáadjuk a tr- hez
    
    const theadcell3 = document.createElement('td') //létrehozunk egy td- elemet, createElement bementi paramétere string (ez lesz a html tag)
    theadcell3.innerHTML = fajlecObj.hadero //a fajlecObj objektum hadero tulajdonságának értéke lesz a theadcell3 innerHTML-je
    theadrow1.appendChild(theadcell3) //a td elemet hozzáadjuk a tr- hez

    for (let i = 0; i < tomb.length; i++) { //for ciklus, ami végig megy a tomb- tömbön
        const tbody = document.createElement('tbody') // létrehozzuk a tbody taget bementi pparaméter: string
        table.appendChild(tbody) // a table-hez hözzáadjuk a tbodyt
        const elem = tomb[i] // kivesszük egy változóba a tömb aktuális objektumát, később ezzel dolgozunk
        const tr = document.createElement('tr') //létrehozunk egy sort amihez a harc cellákat fogjuk hozzáadni, és az első felet és haderejét bementi pparaméter: string
        const tr2 = document.createElement('tr') //létrehozzuk a második sor, amihez a harcot már nem kell hozzáadni, csak a másidik felet és a haderejét, a rowspan miatt ez a harc cella mellett lesz bementi pparaméter: string
        tbody.appendChild(tr) //hozzáadjuk a tbodyhoz az első sort
        tbody.appendChild(tr2) //hozzáadjuk a tbodyhoz a második sort
    
        const td1 = document.createElement('td') //lértehozunk egy td taget td1 változóba bementi pparaméter: string
        td1.innerHTML = elem.harc //beállitjuk a cella szövegét az aktuális elem objektum harc paraméterére
        td1.rowSpan = 2 //beállitjuk a td1 cella rowspanjét 2 -re
        tr.appendChild(td1) //hozzáadjuk a td1 cellát az első sorhoz(tr)
    
    
        const td2 = document.createElement('td') //lértehozunk egy td taget td2 változóba bementi pparaméter: string
        td2.innerHTML = elem.fel  //beállitjuk a cella szövegét az aktuális elem objektum fel paraméterére
        tr.appendChild(td2) //hozzáadjuk a td2 cellát az első sorhoz(tr)
    
        const td3 = document.createElement('td') //lértehozunk egy td taget td3 változóba bementi pparaméter: string
        td3.innerHTML = elem.hadero  //beállitjuk a cella szövegét az aktuális elem objektum hadero paraméterére
        tr.appendChild(td3) //hozzáadjuk a td3 cellát az első sorhoz(tr)
    
    
        if(elem.fel2 || elem.hadero2){ // Ebbe az elágazásba ellenőrizzük, hogy az objektumnak van-e fel2, és hadero2 tulajdonsága, a van létrehozzuk nekik a cellákat és beállítjuk a szövegeiket, ha nincs akkor nem történik semmi
            const td4 = document.createElement('td') //lértehozunk egy td taget td4 változóba bementi pparaméter: string
            td4.innerHTML = elem.fel2  //beállitjuk a cella szövegét az aktuális elem objektum fel2 paraméterére
            tr2.appendChild(td4) //hozzáadjuk a td4 cellát az első sorhoz(tr2)
    
            const td5 = document.createElement('td') //lértehozunk egy td taget td5 változóba bementi pparaméter: string
            td5.innerHTML = elem.hadero2  //beállitjuk a cella szövegét az aktuális elem objektum hadero2 paraméterére
            tr2.appendChild(td5) //hozzáadjuk a td5 cellát az első sorhoz(tr2)
        }
    }
}

RenderTable() //meghívom a RenderTable függvényt, legenerálódik a táblázat

const form = document.getElementById('form') //getElementById-val elkérem a html-ről a form-ot

form.addEventListener('submit', function(e){ //a form submit eseményére teszönk egy eseménykezelőt
    e.preventDefault() //meggatolom az alveto mukodest 
    const harcVhtml = document.getElementById('harc_nev') //getElementById-val elkérem a html-ről a harc_nev-et
    const fel1Vhtml = document.getElementById('harcolo1') //getElementById-val elkérem a html-ről a harcolo1-et
    const hadero1Vhtml = document.getElementById('hadero1') //getElementById-val elkérem a html-ről a hadero1-et
    const fel2Vhtml = document.getElementById('harcolo2') //getElementById-val elkérem a html-ről a harcolo2-t
    const hadero2Vhtml = document.getElementById('hadero2') //getElementById-val elkérem a html-ről a hadero2-t

    const harcV = harcVhtml.value //a harcVhtml értékét kiveszem egy harcV változóba
    const fel1V = fel1Vhtml.value //a fel1Vhtml értékét kiveszem egy fel1V változóba
    const hadero1V = hadero1Vhtml.value //a hadero1Vhtml értékét kiveszem egy hadero1V változóba
    const fel2V = fel2Vhtml.value //a fel2Vhtml értékét kiveszem egy fel2V változóba
    const hadero2V = hadero2Vhtml.value //a hadero2Vhtml értékét kiveszem egy hadero2V változóba

    const aktualis = e.currentTarget //az aktualis hely
    const errorok = aktualis.querySelectorAll('.error') //az error classosokat kigyujtjuk egy valtozoba

    for(const i of errorok){ //egy i vegigmegy az errorokon és mindegyiket ""-re állítja
        i.innerHTML = ""
    }
    let valid = true // a valid értékét truera állítjuk

    if(harcV === ""){ //akkor megyunk be az elegazasba ha a harcV ures
        const parent = harcVhtml.parentElement //kivesszuk a parentElementet egy változóba
        const errorhelye = parent.querySelector('.error') //az errorhelye a parentelement errora lesz
        if(errorhelye != ""){ //ha az error helye nem üres akkor megyunk be az elágazásba
            errorhelye.innerHTML = "A mező kitöltés kötelező!" //az errorhely szövege "A mező kitöltés kötelező!"
        }
        valid = false // a valid értékét falsera állítjuk
    }

    if(fel1V === ""){ //akkor megyunk be az elegazasba ha a fel1V ures
        const parent = fel1Vhtml.parentElement //kivesszuk a parentElementet egy változóba
        const errorhelye = parent.querySelector('.error') //az errorhelye a parentelement errora lesz
        if(errorhelye != ""){ //ha az error helye nem üres akkor megyunk be az elágazásba
            errorhelye.innerHTML = "A mező kitöltés kötelező!" //az errorhely szövege "A mező kitöltés kötelező!"
        }
        valid = false // a valid értékét falsera állítjuk
    }

    if(hadero1V === ""){ //akkor megyunk be az elegazasba ha a hadero1V ures
        const parent = hadero1Vhtml.parentElement //kivesszuk a parentElementet egy változóba
        const errorhelye = parent.querySelector('.error') //az errorhelye a parentelement errora lesz
        if(errorhelye != ""){ //ha az error helye nem üres akkor megyunk be az elágazásba
            errorhelye.innerHTML = "A mező kitöltés kötelező!" //az errorhely szövege "A mező kitöltés kötelező!"
        }
        valid = false // a valid értékét falsera állítjuk
    }

    if(fel2V === ""){ //akkor megyunk be az elegazasba ha a fel2V ures
        const parent = fel2Vhtml.parentElement //kivesszuk a parentElementet egy változóba
        const errorhelye = parent.querySelector('.error') //az errorhelye a parentelement errora lesz
        if(errorhelye != ""){ //ha az error helye nem üres akkor megyunk be az elágazásba
            errorhelye.innerHTML = "A mező kitöltés kötelező!" //az errorhely szövege "A mező kitöltés kötelező!"
        }
        valid = false // a valid értékét falsera állítjuk
    }

    if(hadero2V === ""){ //akkor megyunk be az elegazasba ha a hadero2V ures
        const parent = hadero2Vhtml.parentElement //kivesszuk a parentElementet egy változóba
        const errorhelye = parent.querySelector('.error') //az errorhelye a parentelement errora lesz
        if(errorhelye != ""){ //ha az error helye nem üres akkor megyunk be az elágazásba
            errorhelye.innerHTML = "A mező kitöltés kötelező!" //az errorhely szövege "A mező kitöltés kötelező!"
        }
        valid = false // a valid értékét falsera állítjuk
    }

    if(valid){
        const ujElem = { //egy uj objektumot hozok létre 5 tulajdonsággal
            harc: harcV, //az objektum harc tulajdonságáak értéke a harcV 
            fel: fel1V, //az objektum fel tulajdonságáak értéke a fel1V 
            hadero: hadero1V, //az objektum hadero tulajdonságáak értéke a hadero1V 
            fel2: fel2V, //az objektum fel2 tulajdonságáak értéke a fel2V 
            hadero2: hadero2V //az objektum hadero2 tulajdonságáak értéke a hadero2V
        }
        tomb.push(ujElem) //a harcok tömbjébe beleteszem az ujElem objektumot
    }
    table.innerHTML = "" //a table-t clearelem egy üres stringel
    RenderTable() //meghivom a RenderTable függvényt
})