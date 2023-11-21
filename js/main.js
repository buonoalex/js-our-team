// Questo è il file che contiene tutto il codice JS della pagina web

let arrayMembri = 
[
    InizializzaMembro("Wayne Barnett","Founder & CEO","wayne-barnett-founder-ceo.jpg"),
    InizializzaMembro("Angela Caroll","Chief Editor","angela-caroll-chief-editor.jpg"),
    InizializzaMembro("Walter Gordon","Office Manager","walter-gordon-office-manager.jpg"),
    InizializzaMembro("Angela Lopez","Social Media Manager","angela-lopez-social-media-manager.jpg"),
    InizializzaMembro("Scott Estrada","Developer","scott-estrada-developer.jpg"),
    InizializzaMembro("Barbara Ramos","Graphic Designer","barbara-ramos-graphic-designer.jpg")

];


StampaArrayConOggetti(arrayMembri);




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