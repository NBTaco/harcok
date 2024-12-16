const tomb = [ //tomb letrehozasa, a tömb eleminek száma mindig egyel több, mint az indexe
    { 
        harc: "Harc megnevezése", //tömb első (0.) elemének harc tulajdonsága, "Harc megnevezése" stringet tárolja
        fel: "Szembenálló felek", //tömb első elemének felek tulajdonsága, "Szembenálló felek" stringet tárolja
        hadero: "Haderő" //tömb első elemének hadero tulajdonsága, "Haderő" stringet tárolja
    },
    { 
        harc: "Rákóczi szabadságharc", //tömb második elemének harc tulajdonsága, "Rákóczi szabadságharc"stringet tárolja
        fel: "Kuruc", //tömb második elemének fel tulajdonsága, "Kuruc" stringet tárolja
        hadero: "70.000" //tömb második elemének hadero tulajdonsága, "70.000" stringet tárolja
    },
    {
        fel: "Labanc", //tömb harmadik elemének fel tulajdonsága, "Labanc" stringet tárolja
        hadero: "60.000" //tömb harmadik elemének hadero tulajdonsága, "60.000" stringet tárolja
    },
    { 
        harc: "48-as szabadságharc", //tömb negyedik elemének harc tulajdonsága, "48-as szabadságharc" stringet tárolja
        fel: "Osztrák császárság(+ Orosz birodalom)", //tömb negyedik elemének fel tulajdonsága, "Osztrák császárság(+ Orosz birodalom)" stringet tárolja
        hadero: "170.000(+ 200.000)" //tömb negyedik elemének hadero tulajdonsága, "170.000(+ 200.000)" stringet tárolja
    },
    { 
        fel: "Magyar királyság", //tömb ötödik elemének fel tulajdonsága, "Magyar királyság" stringet tárolja
        hadero: "170.000" //tömb ötödik elemének hadero tulajdonsága, "170.000" stringet tárolja
    },
    {
        harc: "I. világháború", //tömb hatodik elemének harc tulajdonsága, "I. világháború" stringet tárolja
        fel: "Antant", //tömb hatodik elemének fel tulajdonsága, "Antant" stringet tárolja
        hadero: "43 millió" //tömb hatodik elemének hadero tulajdonsága, "43 millió" stringet tárolja
    },
    {
        fel: "Központi hatalmak", //tömb hetedik elemének fel tulajdonsága, "Központi hatalmak" stringet tárolja
        hadero: "25 millió" //tömb hetedik elemének hadero tulajdonsága, "25 millió" stringet tárolja
    },
    { 
        harc: "Bosworthi csata", //tömb nyolcadik elemének harc tulajdonsága, "Bosworthi csata" stringet tárolja
        fel: "Angolok(York + Lancester)", //tömb nyolcadik elemének fel tulajdonsága, "Angolok(York + Lancester)" stringet tárolja
        hadero: "15.000"//tömb nyolcadik elemének hadero tulajdonsága, "15.000" stringet tárolja
    }
]

const table = document.createElement('table') // Létrehozzuk a table- elemet, createElement bementi paramétere string (ez lesz a html tag)
document.body.appendChild(table) //a table elemet hozzáadjuk a body- hoz



for (let i = 0; i < tomb.length; i++) {
    const elem = tomb[i];
    const tr = document.createElement('tr')
    table.appendChild(tr)


    if (elem.harc) {
        const td1 = document.createElement('td')
        td1.innerHTML = elem.harc
        td1.rowSpan = 2
        if(i ==  0){
            td1.innerHTML = elem.harc
            td1.rowSpan = 1
        }
        tr.appendChild(td1)
    }

    const td2 = document.createElement('td')
    td2.innerHTML = elem.fel
    tr.appendChild(td2)

    const td3 = document.createElement('td')
    td3.innerHTML = elem.hadero
    tr.appendChild(td3)
}
