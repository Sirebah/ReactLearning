type Personne = {
    prenom : string;
    nom : string;
}



function Message(personne: Personne){
    return (
        <p>Bonjour {personne.prenom} {personne.nom}</p>
    );
}
export default Message;