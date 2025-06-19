type Personne = {
    prenom? : string;
    nom? : string;
    email?: string; // Le point d'interrogation indique que cette propriété est optionnelle
    phone?: string; // Le point d'interrogation indique que cette propriété est optionnelle
    texte: string;
}


//  le ?. permet de vérifier si email existe avant de l'afficher
        // <p>Bonjour {personne.prenom} {personne.nom} {personne.email ? <span>{personne.email}</span> : null}</p> //  la condition ternaire permet de vérifier si email existe avant de l'afficher
function Message(personne: Personne){
    return (
        <div className="message">
        <p>{personne.texte} {personne.prenom} {personne.nom}</p>
        <p> {personne?.email && <span> votre email:{personne.email}</span>}</p>
        <p>{personne?.phone ? <span> et votre téléphone: {personne.phone}</span> : null}</p>
        </div>
        
    );
}
export default Message;