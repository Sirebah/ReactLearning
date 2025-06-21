import { useState } from "react";


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

    const [usersSorted, setUsersSorted] = useState(users);
    const [alphabetOrder, setAphabetOrder] = useState(1);

    const sortUsersBy = (field: string, value: string) => {
        console.log(field);
         const result = [...usersSorted].sort((firstUser: User, secondUser: User) => {

            const fieldInFirstUser = firstUser[field as keyof User] || "";
            const fieldInSecondUser = secondUser[field as keyof User] || "";

            let order = 1;

            if (value === "male"){
                order = -1;
            }

            let sortResult = 0;

            if (fieldInFirstUser > fieldInSecondUser){
                sortResult = 1;
            }
            
            if (fieldInFirstUser < fieldInSecondUser){
                sortResult = -1;
            }

            return sortResult * order;

         });

         setUsersSorted(result);

        

    };

   // const users = props.users;
   // const {users} = props; possible également

   const alphabetTrie = () => {
    
     const result = [...usersSorted].sort((firstUser: User, secondUser: User) => {

        const fieldInFirstUser = firstUser.firstName;
        const fieldInSecondUser = secondUser.firstName


        let sortResult = 0;
        let order = alphabetOrder === 1 ? -1 : 1;
        setAphabetOrder(order);
        console.log(order)

        if (fieldInFirstUser > fieldInSecondUser){
            sortResult = 1;
        }
        
        if (fieldInFirstUser < fieldInSecondUser){
            sortResult = -1;
        }

        return sortResult* order;

     });

     setUsersSorted(result);

    

};

    return(
       <section>

            <div className="flex items-center justify-end gap-3 my-3">
                <span>Trier par...</span>
                <button type="button" className="border rounded-md border-gray-100 text-white text-sm px-1 py-1 bg-sky-500 hover:bg-sky-700" onClick={()=>sortUsersBy("gender", "male")}>Homme</button>
                <button type="button" className="border rounded-md border-gray-100 text-white text-sm px-1 py-1 bg-sky-500 hover:bg-sky-700" onClick={()=>sortUsersBy("gender","female")}>Femme</button>
                <button type="button" className="border rounded-md border-gray-100 text-white text-sm px-1 py-1 bg-sky-500 hover:bg-sky-700" onClick={()=>alphabetTrie()}>De A-Z / Z-A </button>

            </div>
            <div className="grid md:grid-cols-3 gap-4">
            {
                usersSorted.map(({gender, firstName, lastName, email="INDISPONIBLE", phone, id}: User) =>(
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