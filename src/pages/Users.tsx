
type User = {
    id: string; 
    picture: string;
    firstName: string;
    lastName: string;
    gender: string;
    email:string;
    phone: string;
    address:string;
    birthDate: string;
    about: string;



};

type Props = {
    users: User[]
};



function Users(props: Props){

    const users = props.users;

    return(
       <section className="grid md:grid-cols-3 gap-4">
            {
                users.map((user: User) =>(
                    <article className="text-sm border bg-gray-200 border-gray-800 p-1.5 rounded-lg">
                        <h3 className="text-lg">{user.firstName} {user.lastName}</h3>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                    </article>
                ) )
            }
       </section>
    )

}

export default Users;