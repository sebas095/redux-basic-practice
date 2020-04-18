import { types } from "./types";

export const addTitular = (player) => ({
  type: types.ADD_TITULAR,
  player,
});

export const removeTitular = (player) => ({
  type: types.REMOVE_TITULAR,
  player,
});

export const addSubstitute = (player) => ({
  type: types.ADD_SUBSTITUTE,
  player,
});

export const removeSubstitute = (player) => ({
  type: types.REMOVE_SUBSTITUTE,
  player,
});
