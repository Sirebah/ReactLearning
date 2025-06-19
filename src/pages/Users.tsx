
type User = {
    id: string; 
    picture: string;
    firstName: string;
    lastName: string;
    gender: string;
    email?:string;
    phone: string;
    address:string;
    birthDate: string;
    about: string;



};

type Props = {
    users: User[]
};



function Users({users}: Props){ // on peut directement recupéré les users au niveau des paramètres

   // const users = props.users;
   // const {users} = props; possible également

    return(
       <section className="grid md:grid-cols-3 gap-4">
            {
                users.map(({firstName, lastName, email="INDISPONIBLE", phone}: User) =>(
                    <article className="text-sm border bg-gray-200 border-gray-800 p-1.5 rounded-lg">
                        <h3 className="text-lg">{firstName} {lastName}</h3>
                        <p>{email}</p>
                        <p>{phone}</p>
                    </article>
                ) )
            }
       </section>
    )

}

export default Users;