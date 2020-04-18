import React from "react";
import { Provider } from "react-redux";
import Players from "./components/Players";
import SelectedTeam from "./components/SelectedTeam";
import store from "./redux/store";
import "./styles/styles.scss";

const App = () => (
  <Provider store={store}>
    <main>
      <h1>Manager</h1>
      <Players />
      <SelectedTeam />
    </main>
  </Provider>
);

export default App;
