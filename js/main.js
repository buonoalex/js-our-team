// Questo è il file che contiene tutto il codice JS della pagina web

//-----------------------INIZIO----------------------------------
let arrayMembri = 
[
    InizializzaMembro("Wayne Barnett","Founder & CEO","./img/wayne-barnett-founder-ceo.jpg"),
    InizializzaMembro("Angela Caroll","Chief Editor","./img/angela-caroll-chief-editor.jpg"),
    InizializzaMembro("Walter Gordon","Office Manager","./img/walter-gordon-office-manager.jpg"),
    InizializzaMembro("Angela Lopez","Social Media Manager","./img/angela-lopez-social-media-manager.jpg"),
    InizializzaMembro("Scott Estrada","Developer","./img/scott-estrada-developer.jpg"),
    InizializzaMembro("Barbara Ramos","Graphic Designer","./img/barbara-ramos-graphic-designer.jpg")
];

//Stampa Array in console 
StampaArrayConOggetti(arrayMembri);

//Inserisce e fa visualizzare gli array in HTML
InserisciArrayOggettiInHTML(arrayMembri);

//----------------FUNZIONI--------------------
function InizializzaMembro(nomeMembro,ruoloMembro,fotoMembro){
    const membro = 
    {
        name : nomeMembro,
        ruolo : ruoloMembro,
        foto : fotoMembro
    };
    return membro;
}

function StampaArrayConOggetti(arrayContenenteOggetti){
 
    for (let i = 0; i < arrayContenenteOggetti.length; i++) {
    
        let membro = arrayContenenteOggetti[i];
    
        console.log("Il membro n° " + (i + 1) + " è:");
        StampaOggetto(membro);
    }
  
}

function StampaOggetto(oggetto) {
    let string = "";

    string += "{\n";

    for (let proprietà in oggetto) {
        string += "\t " + proprietà + ": " + oggetto[proprietà] + "\n";
    }

    string += "}";

    console.log(string);

}

function InserisciArrayOggettiInHTML(arrayMembri){
    for(let i = 0; i<arrayMembri.length;i++){
        document.getElementById("contenitoreFotoMembri").innerHTML += `
        <div class="col-12 col-lg-3 p-0 Regular shadow">
            <div class="card">
            <img src="${arrayMembri[i].foto}" class="img-fluid">
                <div class="card-body">
                    <h5 class="text-black-50">${arrayMembri[i].name}</h5>
                    <p class="card-text text-black-50">${arrayMembri[i].ruolo}</p>
                </div>
            </div>
        </div>
        `;
    }
}