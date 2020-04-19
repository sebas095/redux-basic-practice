import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTitular } from "../redux/actions/manager";
import field from "../cancha.svg";

const Titulars = () => {
  const titulars = useSelector((store) => store.manager.titulars);
  const dispatch = useDispatch();

  return (
    <section>
      <h2>Titulares</h2>
      <div className="field">
        {titulars.map((titular) => (
          <article className="titular" key={titular.id}>
            <div>
              <img src={titular.img} alt={titular.name} />
              <button onClick={() => dispatch(removeTitular(titular))}>
                X
              </button>
            </div>
            <p>{titular.name}</p>
          </article>
        ))}
        <img src={field} alt="Soccer Field" />
      </div>
    </section>
  );
};

export default Titulars;
