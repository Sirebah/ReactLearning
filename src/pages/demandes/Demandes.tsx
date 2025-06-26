import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Demandes() {
  const [demandes, setDemandes] = useState<any[]>([]);

  const getDemandes = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await response.json();

    setDemandes(json);
  };
  useEffect(() => {
    getDemandes();
  }, []);

  //  pour quoi que les données soient visibles dans la console à chaque fois qu'elles sont mises à jour
  //  et pour suivre les changements dans le tableau demandes

  useEffect(() => {
    console.log("mise à jour des demandes", demandes);
  }, [demandes]);

  return (
    <table>
      <thead>
        <tr>
          <th>User ID</th>
          <th>Titre</th>
          <th>Contenu</th>
        </tr>
      </thead>
      <tbody>
        {demandes.map(({ userId, id, title, body }) => (
          <tr key={id}>
            <td>
              <Link to={`/menu/demandes/${id}`}>{userId}</Link>
            </td>
            <td>
              <Link to={`/menu/demandes/${id}`}>{title}</Link>
            </td>
            <td>
              <Link to={`/menu/demandes/${id}`}>{body}</Link>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td
            colSpan={3}
            className="text-center border-t-2 border-gray-300 py-2 text-xl"
          >
            Nombre de demandes: {demandes.length}
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

export default Demandes;
