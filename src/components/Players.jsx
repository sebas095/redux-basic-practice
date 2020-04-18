import React, { useEffect, createRef } from "react";
import { connect } from "react-redux";
import { addTitular, addSubstitute } from "../redux/actions/manager";

const Players = ({ players, addTitular, addSubstitute }) => {
  const playerGrid = createRef();

  useEffect(() => {
    setScrollContainer();
    document.addEventListener("click", setScrollContainer);
  }, []);

  // Función que fija el tamaño del grid de los jugadores
  const setScrollContainer = (desktop = true) => {
    let container = playerGrid.current;
    if (container) {
      const generatedGrid = () => {
        let items = container.getElementsByClassName("player");
        let itemsLength = items.length;
        let bp = window.matchMedia("(min-width: 640px)").matches
          ? window.matchMedia("(min-width: 1024px)").matches
            ? 4
            : 2
          : 1;

        const getWidth = () => {
          let n = bp + (itemsLength > bp ? 0.3 : 0);
          return (itemsLength / n) * 100;
        };

        return `
                display: grid;
                grid-template-columns: repeat(${itemsLength}, 225px);
                grid-gap: 1rem;
                width : ${getWidth()}%;
              `;
      };

      let styles =
        !desktop && window.matchMedia("(min-width: 1024px)").matches
          ? `display: grid; grid-row-gap: 1rem;`
          : generatedGrid();

      container.setAttribute("style", styles);
    }
  };

  return (
    <section>
      <h2>Jugadores</h2>
      <div className="player-container">
        <div ref={playerGrid} onClick={() => setScrollContainer.bind(this)}>
          {players.map((player) => (
            <article className="player" key={player.id}>
              <img src={player.img} alt={player.name} />
              <h3>{player.name}</h3>
              <div>
                <button onClick={() => addTitular(player)}>Titular</button>
                <button onClick={() => addSubstitute(player)}>Suplente</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  players: state.manager.players,
});

const mapDispatchToProps = (dispatch) => ({
  addTitular: (player) => dispatch(addTitular(player)),
  addSubstitute: (player) => dispatch(addSubstitute(player)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Players);
