import React from "react";
import { connect } from "react-redux";
import { removeTitular } from "../redux/actions/manager";
import field from "../cancha.svg";

const Titulars = ({ titulars, removeTitular }) => (
  <section>
    <h2>Titulares</h2>
    <div className="field">
      {titulars.map((titular) => (
        <article className="titular" key={titular.id}>
          <div>
            <img src={titular.img} alt={titular.name} />
            <button onClick={() => removeTitular(titular)}>X</button>
          </div>
          <p>{titular.name}</p>
        </article>
      ))}
      <img src={field} alt="Soccer Field" />
    </div>
  </section>
);

const mapStateToProps = (state) => ({
  titulars: state.titulars,
});

const mapDispatchToProps = (dispatch) => ({
  removeTitular: (player) => dispatch(removeTitular(player)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Titulars);
