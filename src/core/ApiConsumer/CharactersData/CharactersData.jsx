import React, { useEffect, useState } from "react";
import axios from "axios";
export function CharactersData(pagina) {
  const [Data, setData] = useState([]);
  //  const [Page, setPage] = useState(1);

  useEffect(() => {
    console.log("pagina", pagina);

    const response = async () => {
      try {
        const responsive = await axios(
          ` https://rickandmortyapi.com/api/character/?page=${pagina}`
        );

        setData(responsive.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    response();
  }, [pagina]);

  // const Rick = class {
  //   constructor({ name, status, species }) {
  //     this.name = name;
  //     this.origin = origin;
  //     this.species = species;
  //   }
  // };
  //console.log("Data", Data);
  const Datos = {
    fetch: Data.map(PJ => {
      return {
        id: PJ.id,
        name: PJ.name,
        status: PJ.status,
        origin: PJ.origin.name,
        specie: PJ.species,
        image: PJ.image,
        location: PJ.location.name
      };
    })
  };
  //  console.log("Datos.fetch", Datos.fetch);

  return Datos.fetch;
}
