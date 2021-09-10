// json-opgaver for da world
/*
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
*/



/* meningsfuld struktur:

jsonObjects.team.forEach(object => {
    console.log(object));
}
*/

// nr2: jsonObjects.team.forEach(object => console.log(object.fornavn, object.efternavn));

//nr3: jsonObjects.team.forEach(object => console.log(object));


/* LIGE FØR himlen faldt ned:
opgave 4, med json i js-filen...

for (i = 0; i < jsonObjects.team.length; i++) {
    let x = document.createElement("li");
    document.querySelector("#duckList").appendChild(x);
    let y = jsonObjects.team[i];
    x.textContent = `${y.fornavn} ${y.efternavn}, alder: ${y.alder} år, ${y.adresse}`;
}
*/

//opgave 6
//kigger på fetch, og henter data fra ekstern fil, team.json...

/*first method:

    fetch('http://example.com/movies.json')
        .then(response => response.json())
        .then(data => console.log(data));

*/
// fetch promises base.. './file' betyder 
//'roden af mappen med forespurgt fil.
//'promise' betyder 'på et tidspunkt'.

fetch('./js/team.json')
    .then(response => response.json())
    .then(data => {
        for (i = 0; i < data.team.length; i++) {
            let x = document.createElement("li");
            document.querySelector("#duckList").appendChild(x);
            console.log(data.team[0]);
            let y = data.team[i];
            x.textContent = `${y.fornavn} ${y.efternavn}, alder: ${y.alder} år, ${y.adresse}`;
        }
    });









