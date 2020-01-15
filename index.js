const lisatytOstokset = [];


// etsi lomake- ja ostokset-elementit
const lomakeElementti = document.getElementById("lomake");
const ostoksetElementti = document.getElementById("ostokset");
const halvinElementti = document.getElementById("halvin");
const kalleinElementti = document.getElementById("kallein");

// funktio joka käsittelee lomakkeen palautus
const kasitteleLomake = (event) => {
    // estä sivun lataus uudestaan
    event.preventDefault(); 
    
    // hae lomakkeen arvot
    const tuote = event.target.elements["tuote"].value;
    const hinta = event.target.elements["hinta"].value;
    
    // luo ostos-elementti
    const ostos = document.createElement("li");
    ostos.innerText = tuote + ", " + hinta;
    
    // lisää ostos ostokset-elementtiin ja lisatytOstokset-listaan
    ostoksetElementti.appendChild(ostos);
    lisatytOstokset.push({
        "tuote": tuote,
        "hinta": hinta
    });

    // etsi halvin ja kallein tuote
    const jarjestettyLista = lisatytOstokset.sort((a, b) => a.hinta - b.hinta);
    const halvin = jarjestettyLista[0];
    const kallein = jarjestettyLista[jarjestettyLista.length - 1];

    // lisaa halvin ja kallein html:aan
    halvinElementti.innerHTML = "Halvin: " + halvin.tuote;
    kalleinElementti.innerHTML = "Kallein: " + kallein.tuote;

}

// kuuntele lomakkeen palautus-eventiä
lomakeElementti.addEventListener("submit", kasitteleLomake);