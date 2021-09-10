// json-opgaver for da world

const jsonObjects = {
    team: [

        {
            "fornavn": "Anders",
            "efternavn": "And",
            "alder": 90,
            "adresse": "Paradisæblevej, Andeby"
        },

        {
            "fornavn": "Rip",
            "efternavn": "And",
            "alder": 35,
            "adresse": "Paradisæblevej, Andeby"
        },

        {
            "fornavn": "Rap",
            "efternavn": "And",
            "alder": 36,
            "adresse": "Paradisæblevej, Andeby"

        },

        {
            "fornavn": "Rup",
            "efternavn": "And",
            "alder": 37,
            "adresse": "Paradisæblevej, Andeby"
        },

        {
            "fornavn": "Andersine",
            "efternavn": "And",
            "alder": 60,
            "adresse": "Andeby Hovedgade, Andeby"
        }
    ]
}

/* meningsfuld struktur:

jsonObjects.team.forEach(object => {
    console.log(object));
}
*/

// nr2: jsonObjects.team.forEach(object => console.log(object.fornavn, object.efternavn));

//nr3: jsonObjects.team.forEach(object => console.log(object));


/* LIGE FØR himlen faldt ned:

for (i = 0; i < jsonObjects.team.length; i++) {
    let x = document.createElement("li");
    document.querySelector("#duckList").appendChild(x);
    let y = jsonObjects.team[i];
    x.textContent = `${y.fornavn} ${y.efternavn}, alder: ${y.alder} år, ${y.adresse}`;
}
*/







