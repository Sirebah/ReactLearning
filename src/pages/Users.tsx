
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

    const sortUsersBy = (field: string) => {
        console.log(field)

    };

   // const users = props.users;
   // const {users} = props; possible également

    return(
       <section>

            <div className="flex items-center justify-end gap-3 my-3">
                <span>Trier par...</span>
                <button type="button" className="border rounded-md border-gray-100 text-white text-sm px-1 py-1 bg-sky-500 hover:bg-sky-700" onClick={()=>sortUsersBy("male")}>Homme</button>
                <button type="button" className="border rounded-md border-gray-100 text-white text-sm px-1 py-1 bg-sky-500 hover:bg-sky-700" onClick={()=>sortUsersBy("female")}>Femme</button>

            </div>
            <div className="grid md:grid-cols-3 gap-4">
            {
                users.map(({gender, firstName, lastName, email="INDISPONIBLE", phone, id}: User) =>(
                    <article className="text-sm border bg-gray-200 border-gray-800 p-1.5 rounded-lg" key={id}>
                        <h3 className="text-lg">{gender} {firstName} {lastName}</h3>
                        <p>{email}</p>
                        <p>{phone}</p>
                    </article>
                ) )
            }
            </div>
       </section>
    )

}

export default Users;