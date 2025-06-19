
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
       <section className="grid">
            {
                users.map((user: User) =>(
                    <article className="user">
                        <h3>{user.firstName} {user.lastName}</h3>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                    </article>
                ) )
            }
       </section>
    )

}

export default Users;