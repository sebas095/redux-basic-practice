import { constants } from "../../utils/constants";

export const addTitular = (player) => ({
  type: constants.ADD_TITULAR,
  player,
});

export const removeTitular = (player) => ({
  type: constants.REMOVE_TITULAR,
  player,
});

export const addSubstitute = (player) => ({
  type: constants.ADD_SUBSTITUTE,
  player,
});

export const removeSubstitute = (player) => ({
  type: constants.REMOVE_SUBSTITUTE,
  player,
});
