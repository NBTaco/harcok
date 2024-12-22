
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


function fejlecGen(hasznaltobjektum){ //létrehozom a ffejlecGen függvény 1 paraméterrel, ami az objektum ami alapján generáljujk
    const thead = document.createElement('thead') //letrehozzuk a thead elemet
    table.appendChild(thead) //a table hez hozzáadjuk a thead-et
    const tr = document.createElement('tr') //letrehozzuk a tr elemet
    thead.appendChild(tr) //a thead hez hozzáadjuk a sort
    for (const i in hasznaltobjektum) { // Vigimegyunk az objektum tulajdonsagain 
        const td = document.createElement('td') //letrehozunk egy td elemet
        td.innerHTML = hasznaltobjektum[i] // A tulajdonság értéke lesz az innerHTML
        tr.appendChild(td) //a sohoz hozzárakjuk a td-t
    }
}

formGeneralas() //meghivom a form generalaas fuggvenyt, azért elobb, mint a RenderTable-t, hogy a html-en is feljebb legyen mint a table

const table = document.createElement('table') // Létrehozzuk a table- elemet, createElement bementi paramétere string (ez lesz a html tag)
document.body.appendChild(table) //a table elemet hozzáadjuk a body- hoz

function RenderTable(hasznalttomb){ //létrehoom a RenderTable függvényt, ebbe van benne a táblázat generálása egy hasznalttomb bemeneti parameterrel

    fejlecGen(fajlecObj) //meghivom a fejlecGen functiont, paramétere a fajlecObj

    for (let i = 0; i < hasznalttomb.length; i++) { //for ciklus, ami végig megy a hasznalttomb parameteren, ami egy tomb joesetben
        const tbody = document.createElement('tbody') // létrehozzuk a tbody taget bementi pparaméter: string
        table.appendChild(tbody) // a table-hez hözzáadjuk a tbodyt
        const elem = hasznalttomb[i] // kivesszük egy változóba a hasznalttomb paraméetr i-dik elemet, innentol ugyanugy mukodik
        const tr = document.createElement('tr') //létrehozunk egy sort amihez a harc cellákat fogjuk hozzáadni, és az első felet és haderejét bementi pparaméter: string
        const tr2 = document.createElement('tr') //létrehozzuk a második sor, amihez a harcot már nem kell hozzáadni, csak a másidik felet és a haderejét, a rowspan miatt ez a harc cella mellett lesz bementi pparaméter: string
        tbody.appendChild(tr) //hozzáadjuk a tbodyhoz az első sort
        tbody.appendChild(tr2) //hozzáadjuk a tbodyhoz a második sort
        let index = 0 //behozok egy index változót, ami majd mindig növekedik egyel

        for (const j in elem) { //végigmegyünk az aktualis objektumon (elem)
            if (index === 0) { // ha az index = 0 akkor megyunk be az elegazasba
                let td = document.createElement('td') // létrehozunk egy td elemet
                td.innerHTML = elem[j] // a td innerHtml-je az aktualis objektum i-dik tulajdonsaga lesz
                td.rowSpan = 2 //beallitjuk a rowspant 2-re
                tr.appendChild(td) // a sorhoz(tr) hozzasdjuk a td-t(cella)
            } 
            else if (index === 1) { // ha az index = 1 akkor megyunk be az elegazasba
                let td = document.createElement('td') // létrehozunk egy td elemet
                td.innerHTML = elem[j] // a td innerHtml-je az aktualis objektum i-dik tulajdonsaga lesz
                tr.appendChild(td) // a sorhoz(tr) hozzasdjuk a td-t(cella)
            } 
            else if (index === 2) { // ha az index = 2 akkor megyunk be az elegazasba
                let td = document.createElement('td') // létrehozunk egy td elemet
                td.innerHTML = elem[j] // a td innerHtml-je az aktualis objektum i-dik tulajdonsaga lesz
                tr.appendChild(td) // a sorhoz(tr) hozzasdjuk a td-t(cella)
            } 
            else if (index === 3) { // ha az index = 3 akkor megyunk be az elegazasba
                let td = document.createElement('td') // létrehozunk egy td elemet
                td.innerHTML = elem[j] // a td innerHtml-je az aktualis objektum i-dik tulajdonsaga lesz 
                tr2.appendChild(td) // a sorhoz(tr) hozzasdjuk a td-t(cella)
            } 
            else if (index === 4) { // ha az index = 4 akkor megyunk be az elegazasba
                let td = document.createElement('td') // létrehozunk egy td elemet
                td.innerHTML = elem[j] // a td innerHtml-je az aktualis objektum i-dik tulajdonsaga lesz
                tr2.appendChild(td) // a sorhoz(tr) hozzasdjuk a td-t(cella)
            }
            index += 1
        }
    }
}

RenderTable(tomb) //meghívom a RenderTable függvényt, legenerálódik a táblázat

function validalas(validelem, error){ //létrehozom a validalas() függvényt 2 bemenő paraméterrel(validelem, error)
    let valid = true // létrehozok egy valid elemet aminek az alap értéke true
    if(validelem.value === ""){ //a ha validelem bemeneti pararaméter szövege ures akkor megyunk be az elagazasba
        const parent = validelem.parentElement //a validelem parentelement-jét kiveszem egy változóba
        const errorhelye = parent.querySelector(".error") //az error hely span-t (class="error")-t kiveszem egy változóba, az előbbi parenthez tartozót
        if(errorhelye != ""){ //akkor megyunk be az elágazásba, ha az errorhelye nem ures string
            errorhelye.innerHTML = error //az errorhelye-nek a szoveget beállitjuk a 2. paraméterre(error)
        }
        valid = false //a valid erteket falsera állitjuk
    }
    return valid //a fuggveny a valid ertekevel ter vissza (true/false)
}

function ketmezovalidalas(elsoelem, masodikelem, error) { //létrehozom a ketmezovalidalas() függvényt 3 bemenő paraméterrel(elsoelem, masodikelem, error)
    let valid = true // létrehozok egy valid elemet aminek az alap értéke true
    if (elsoelem.value != "" && !validalas(masodikelem, error)) { //akkkor megyunk be az elágazásba, ha a elsoelem nem ures, es a masodikelem validalasa false
        valid = false //a valid erteket falsera állitjuk
    }
    if (masodikelem.value != "" && !validalas(elsoelem, error)) { //akkkor megyunk be az elágazásba, ha a elsoelem nem ures, es a masodikelem validalasa false
        valid = false //a valid erteket falsera állitjuk
    }
    return valid //a fuggveny a valid ertekevel ter vissza (true/false)
}

const form = document.getElementById('form') //getElementById-val elkérem a html-ről a form-ot

function formGeneralas(){ //Létrehozom a formGeneralas fuggvenyt
    const form = document.createElement('form') // letrehozom a from elemet a html-re
    form.id = 'form' //a from id-ját beallitom form-ra
    form.action = '#' //az actiont beállítom #-re
    document.body.appendChild(form) //a form-ot hozzáadom a body-hoz
    const div = document.createElement('div') //létrehozok egy div elemet(div html elem)
    form.appendChild(div) //a div elemet hozzáadom a form-hoz
    const label = document.createElement('label') //létrehozok egy label html elemet(label)
    label.innerHTML = "Harc megnevezése: " //a label szövegét beállítom "Harc megnevezése: "-re
    div.appendChild(label) //a label t hozzáadom a div hez
    const br = document.createElement('br') //létrehozok egy br elemet (br)
    label.appendChild(br) // a labelhez hozzáadom a br-t
    const input = document.createElement('input')// léterhozok egy input elemet (input)
    input.type = 'text' //a type-ot beallitom txt-re
    input.id = 'harc_nev' //az id-t beallitom "harc_nev"-re
    input.name = 'harc_nev'  //a namet beallitom "harc_nev"-re
    div.appendChild(input) //a div-hez hozzáadom az input-t
    const error = document.createElement('span') //létrehozok egy error elemet (span mhtl tag lesz)
    error.className = 'error' //az error osztalya 'error'
    div.appendChild(error) //a div hez hozzaadom az error-t

    const div2 = document.createElement('div')  //létrehozok egy div2 elemet(div html elem)
    form.appendChild(div2) //a div2 elemet hozzáadom a form-hoz
    const label2 = document.createElement('label') //létrehozok egy label2 html elemet(label)
    label2.innerHTML = "1. Harcoló fél: " //a label szövegét beállítom "1. Harcoló fél: "-re
    div2.appendChild(label2) //a label2 t hozzáadom a div2 hoz
    const br2 = document.createElement('br') //létrehook egy br2 elemet (br)
    label2.appendChild(br2) // a label2 hoz hozzáadom a br2-t
    const input2 = document.createElement('input') // létrehozok egy input2 elemet (input)
    input2.type = 'text' //a type-ot beallitom txt-re
    input2.id = 'harcolo1' //az id-t beallitom "harcolo1"-re
    input2.name = 'harcolo1'  //a namet beallitom "harcolo1"-re
    div2.appendChild(input2) //a div2-hoz hozzáadom az input2-t
    const error2 = document.createElement('span')  //létrehozok egy error2 elemet (span mhtl tag lesz)
    error2.className = 'error' //az error2 osztalya 'error'
    div2.appendChild(error2) //a div2 hez hozzaadom az error2-t

    const div3 = document.createElement('div') //létrehozok egy div3 elemet(div html elem)
    form.appendChild(div3) //a div3 elemet hozzáadom a form-hoz
    const label3 = document.createElement('label') //létrehozok egy label3 html elemet(label)
    label3.innerHTML = "1. Haderő: " //a label szövegét beállítom "1. Haderő: "-re
    div3.appendChild(label3) //a label3 t hozzáadom a div3 hoz
    const br3 = document.createElement('br')  //létrehozok egy br3 elemet (br)
    label3.appendChild(br3)  // a label3 hoz hozzáadom a br3-t
    const input3 = document.createElement('input') // létrehozok egy input3 elemet (input)
    input3.type = 'text' //a type-ot beallitom txt-re
    input3.id = 'hadero1' //az id-t beallitom "hadero1"-re
    input3.name = 'hadero1'  //a namet beallitom "hadero1"-re
    div3.appendChild(input3) //a div3-hozz hozzáadom az input3-t
    const error3 = document.createElement('span')  //létrehozok egy error3 elemet (span mhtl tag lesz)
    error3.className = 'error' //az error3 osztalya 'error'
    div3.appendChild(error3) //a div3 hoz hozzaadom az error3-t

    const div4 = document.createElement('div') //létrehozok egy div4 elemet(div html elem)
    form.appendChild(div4) //a div4 elemet hozzáadom a form-hoz
    const label4 = document.createElement('label') //létrehozok egy label4 html elemet(label)
    label4.innerHTML = "2. Harcoló fél: " //a label szövegét beállítom "2. Harcoló fél: "-re
    div4.appendChild(label4) //a label4 t hozzáadom a div4 hez
    const br4 = document.createElement('br')  //létrehozok egy br4 elemet (br)
    label4.appendChild(br4) // a label4 hez hozzáadom a br4-t
    const input4 = document.createElement('input') // léterhozok egy input4 elemet (input)
    input4.type = 'text' //a type-ot beallitom txt-re
    input4.id = 'harcolo2' //az id-t beallitom "harcolo2"-re
    input4.name = 'harcolo2' //a namet beallitom "harcolo2"-re
    div4.appendChild(input4) //a div4-hozz hozzáadom az input4-t
    const error4 = document.createElement('span')  //létrehozok egy error4 elemet (span mhtl tag lesz)
    error4.className = 'error' //az error4 osztalya 'error'
    div4.appendChild(error4) //a div4 hez hozzaadom az error4-t

    const div5 = document.createElement('div') //létrehozok egy div5 elemet(div html elem)
    form.appendChild(div5) //a div5 elemet hozzáadom a form-hoz
    const label5 = document.createElement('label') //létrehozok egy label5 html elemet(label)
    label5.innerHTML = "2. Haderő: " //a label szövegét beállítom "2. Haderő: "-re
    div5.appendChild(label5) //a label5 t hozzáadom a div5 hoz
    const br5 = document.createElement('br')  //létrehozok egy br5 elemet (br)
    label5.appendChild(br5) // a label5 hez hozzáadom a br5-t
    const input5 = document.createElement('input') // léterhozok egy input5 elemet (input)
    input5.type = 'text' //a type-ot beallitom txt-re
    input5.id = 'hadero2' //az id-t beallitom "hadero2"-re
    input5.name = 'hadero2' //a namet beallitom "hadero2"-re 
    div5.appendChild(input5) //a div5-hozz hozzáadom az input5-t
    const error5 = document.createElement('span')  //létrehozok egy error5 elemet (span mhtl tag lesz)
    error5.className = 'error' //az error5 osztalya 'error'
    div5.appendChild(error5) //a div5 hez hozzaadom az error5-t

    const button = document.createElement('button') //létrehozok egy button elemet (button tag a html en)
    button.innerHTML = 'Hozzáadás' //a button szovege 'Hozzáadás'
    form.appendChild(button) //a formhoz hozzáadom a buttotnt
}


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
    let errorszoveg = "A mező kitöltés kötelező!"  //az error szivegnek csinálok egy változót, hogy ne kelljen majd begépelgetni
    let valid = true // a valid értékét truera állítjuk

    for(const i of errorok){ //egy i vegigmegy az errorokon és mindegyiket ""-re állítja
        i.innerHTML = "" //az errorok mindegyik elemének innerHTML.je ures string
    }

    if(!validalas(harcVhtml, errorszoveg)){ //akkor megyunk be az elagazsba, ha a validalas false-t ad vissza (harcVhtml-en nézzük)
        valid = false //a valid erteket falsera állitjuk
    }

    if(!validalas(fel1Vhtml, errorszoveg)){ //akkor megyunk be az elagazsba, ha a validalas false-t ad vissza (fel1Vhtml-en nézzük)
        valid = false //a valid erteket falsera állitjuk
    }

    if(!validalas(hadero1Vhtml, errorszoveg)){ //akkor megyunk be az elagazsba, ha a validalas false-t ad vissza (hadero1Vhtml-en nézzük)
        valid = false //a valid erteket falsera állitjuk
    }

    if (!ketmezovalidalas(fel2Vhtml, hadero2Vhtml, errorszoveg)) { //akkor megyunk be az elagazsba, ha a ketmezovalidalas false-t ad vissza (fel2Vhtml, hadero2Vhtml) a két mezo amit nézünk
        valid = false //a valid erteket falsera állitjuk
    }
    
    if(valid){ //Akkor megyünk be az elágazásba, ha a valid true
        if(fel2V && hadero2V){ //ha van fel2V és hadero2V akkor megyunk be az elagazasba
            const ujElem = { //egy uj objektumot hozok létre 5 tulajdonsággal
                harc: harcV, //az objektum harc tulajdonságáak értéke a harcV 
                fel: fel1V, //az objektum fel tulajdonságáak értéke a fel1V 
                hadero: hadero1V, //az objektum hadero tulajdonságáak értéke a hadero1V 
                fel2: fel2V, //az objektum fel2 tulajdonságáak értéke a fel2V 
                hadero2: hadero2V //az objektum hadero2 tulajdonságáak értéke a hadero2V
            }
            tomb.push(ujElem) //a harcok tömbjébe beleteszem az ujElem objektumot
        }
        else{
            const ujElem = { //egy uj objektumot hozok létre 5 tulajdonsággal
                harc: harcV, //az objektum harc tulajdonságáak értéke a harcV 
                fel: fel1V, //az objektum fel tulajdonságáak értéke a fel1V 
                hadero: hadero1V, //az objektum hadero tulajdonságáak értéke a hadero1V 
            }
            tomb.push(ujElem) //a harcok tömbjébe beleteszem az ujElem objektumot
        }
    }
    table.innerHTML = "" //a table-t clearelem egy üres stringel
    RenderTable(tomb) //meghivom a RenderTable függvényt
})