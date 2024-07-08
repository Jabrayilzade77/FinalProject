import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Helmet } from "react-helmet";

function AdminPage() {
  const [products, setproducts] = useState([]);
  const [errorMessage, seterrorMessage] = useState(null);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    getAllUsers();
  }, [token]);

  async function getAllUsers() {
    try {
        const res = await fetch("http://localhost:3000/users/", {
          headers: { Authorization: token },
        });
  
        if (!res.ok) {
            seterrorMessage(res.statusText)
        }
  
        const data = await res.json();
        setproducts(data);
      } catch (error) {
        seterrorMessage(error.message);
      }
  }

  async function deleteUsers(id) {
    try {
        const res = await fetch("http://localhost:3000/users/" + id, {
          method: "DELETE",
          headers: { Authorization: token },
        });
  
        if (!res.ok) {
          throw new Error("Error deleting user: " + res.statusText);
        }
  
        getAllUsers();
      } catch (error) {
        seterrorMessage(error.message);
      }
  
  }

  const ui = errorMessage ? (
    <h1>{errorMessage}</h1>
  ) : (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>email</th>
          <th>role</th>
          <th>option</th>
        </tr>
      </thead>
      <tbody>
        {products.map((x) => (
          <tr key={x._id}>
            <td>{x._id}</td>
            <td>{x.email}</td>
            <td>{x.role}</td>
            <td>
              <button onClick={() => deleteUsers(x._id)} className="delete_btn_admin">delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <>
        <Helmet>
        <meta charSet="utf-8" />
        <title>AdminPage</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1 className="adminpage_h1">AdminPage</h1>
      <div>{ui}</div>
    </>
  );
}

export default AdminPage;
