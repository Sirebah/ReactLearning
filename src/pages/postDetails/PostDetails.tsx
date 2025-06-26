import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";


function PostDetails() {

    const [post, setPost] = useState<any>();
    // useParams permet de récupérer les paramètres de l'URL
    // ici, on récupère l'id du post à partir de l'URL
    // par exemple, si l'URL est /menu/demandes/1, alors
    // useParams va retourner un objet avec une propriété id qui vaut 1
    const { id } = useParams();


    


    const getOnePost = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const json = await response.json();
        setPost(json);
        console.log(post);


    }
    useEffect(()=>{

        getOnePost();
        
    }, [])

  return (
    <div>
        <h2 className="text-2xl font-bold mb-4">Détails du Post</h2>

        {
            post ? (
                <div className="bg-white p-4 rounded shadow">
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-700">{post.body}</p>
                    <p className="text-gray-500 mt-2">User ID: {post.userId}</p>
                </div>
            ) : (
                <p className="text-green-500">Chargement des détails du post...</p>
            )
        }
        
        
    </div>


    
  )
}

export default PostDetails