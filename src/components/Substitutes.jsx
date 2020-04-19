import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeSubstitute } from "../redux/actions/manager";

const Substitutes = () => {
  const substitutes = useSelector((store) => store.manager.substitutes);
  const dispatch = useDispatch();

  return (
    <section>
      <h2>Suplentes</h2>
      <div className="substitutes">
        {substitutes.map((substitute) => (
          <article className="substitute" key={substitute.id}>
            <div>
              <img src={substitute.img} alt={substitute.name} />
              <button onClick={() => dispatch(removeSubstitute(substitute))}>
                X
              </button>
            </div>
            <p>{substitute.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Substitutes;
