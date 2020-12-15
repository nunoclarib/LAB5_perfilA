import React, { useState, useEffect } from "react";
import UserItem from "./UserItem";
import axios from "axios";

const UsersList = ({ pesquisa }) => {
  const [resultados, setResultados] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.randomuser.me/?nat=${pesquisa || "US"}&results=${5}`)
      .then((data) => {
        let filtro = data.data.results.filter((item) => item.nat === pesquisa);
        setResultados(filtro);
      })
      .catch((error) => console.log(error));
  }, [pesquisa]);

  return (
    <ul>
      {resultados && (
        <>
          {resultados.map((item) => (
            <UserItem user={item} key={item.login.uuid} />
          ))}
        </>
      )}
    </ul>
  );
};
export default UsersList;

// resultadosAPI.map((user) => (
//             <UserItem user={user.name.first} key={user.login.uuid} />
//           ))
