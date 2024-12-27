/**
 * a függvény feladata az, hogy egy objektum (hasznaltobjektum) alapján létrehozza táblázat fejlécét
 * @param {Object} hasznaltobjektum //Obejtum neve
 */
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

/**
 * a függvény azt csinálja, hogy végigmegy egy tömbön (hasznalttomb paraméter) majd annak objektumai alapján 
 * létrehoz sorokat, cellákat a táblázatba
 * @param {Array<Object>} hasznalttomb //tömb neve
 */
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

/**
 * A függvény feladata az, hogy megnézi az első paramétert (validelem) hogy van e szövege, amennyiben nincs 
 * kiírja az error szöveget (error paraméter)
 * @param {HTMLElement} validelem validálni kívánt elem 
 * @param {string} error error szövege
 * @returns TRUE ha van szöveg a validelem-be , FALSE ha nincs benne szöveg
 */
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


/**
 * // a függvény feladata az, hogy összemér két elemet (elsoelem, masodikelem paraméterek). Ha mindekttő üres 
 * akkor nem csinál semmit, de ha csak az egyik üres akkor az üreshez kiírja az errorszöveget (error paraméter)
 * @param {HTMLElement} elsoelem 
 * @param {HTMLElement} masodikelem 
 * @param {string} error 
 * @returns TRUE ha átmegy , FALSE ha nem
 */
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

/**
 * A függvény feladata az, hogy létrehozza a formot az oldalon
 */
function formGeneralas(){ //Létrehozom a formGeneralas fuggvenyt
    const form = document.createElement('form') // letrehozom a from elemet a html-re
    form.id = 'form' //a from id-ját beallitom form-ra
    form.action = '#' //az actiont beállítom #-re
    document.body.appendChild(form) //a form-ot hozzáadom a body-hoz

    for(let i = 0; i < formtomb.length; i++){ //egy i végigmegy a formtomb-ön, és az i-dik objektummal dolgozik
        const div = document.createElement('div') //létrehozok egy div elemet(div html elem)
        form.appendChild(div) //a div elemet hozzáadom a form-hoz
        const label = document.createElement('label') //létrehozok egy label html elemet(label)
        label.innerHTML = formtomb[i].label //a label szövegét beállítom az i-dik objektum label tulajdoságára
        div.appendChild(label) //a label t hozzáadom a div hez
        const br = document.createElement('br') //létrehozok egy br elemet (br)
        label.appendChild(br) // a labelhez hozzáadom a br-t
        const input = document.createElement('input')// léterhozok egy input elemet (input)
        input.type = 'text' //a type-ot beallitom txt-re
        input.id = formtomb[i].id //az id-t beallitom az i-dik objektum id tulajdoságára
        input.name = formtomb[i].id  //a namet beallitom az i-dik objektum id tulajdoságára
        div.appendChild(input) //a div-hez hozzáadom az input-t
        const error = document.createElement('span') //létrehozok egy error elemet (span mhtl tag lesz)
        error.className = 'error' //az error osztalya 'error'
        div.appendChild(error) //a div hez hozzaadom az error-t
    }

    const button = document.createElement('button') //létrehozok egy button elemet (button tag a html en)
    button.innerHTML = 'Hozzáadás' //a button szovege 'Hozzáadás'
    form.appendChild(button) //a formhoz hozzáadom a buttotnt
}

