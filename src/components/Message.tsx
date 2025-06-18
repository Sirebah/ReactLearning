type Personne = {
    prenom : string;
    nom : string;
    email?: string; // Le point d'interrogation indique que cette propriété est optionnelle
}



function Message(personne: Personne){
    return (
        <p>Bonjour {personne.prenom} {personne.nom}</p>
    );
}
export default Message;