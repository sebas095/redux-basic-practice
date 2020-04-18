import React from "react";
import { connect } from "react-redux";
import { removeSubstitute } from "../redux/actions/manager";

const Substitutes = ({ substitutes, removeSubstitute }) => (
  <section>
    <h2>Suplentes</h2>
    <div className="substitutes">
      {substitutes.map((substitute) => (
        <article className="substitute" key={substitute.id}>
          <div>
            <img src={substitute.img} alt={substitute.name} />
            <button onClick={() => removeSubstitute(substitute)}>X</button>
          </div>
          <p>{substitute.name}</p>
        </article>
      ))}
    </div>
  </section>
);

const mapStateToProps = (state) => ({
  substitutes: state.substitutes,
});

const mapDispatchToProps = (dispatch) => ({
  removeSubstitute: (player) => dispatch(removeSubstitute(player)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Substitutes);
