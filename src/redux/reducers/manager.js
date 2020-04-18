import { types } from "../actions/types";
import faker from "faker";

const initialState = {
  players: [
    {
      id: 1,
      name: `${faker.name.firstName()} ${faker.name.firstName()}`,
      img: faker.image.avatar(),
    },
    {
      id: 2,
      name: `${faker.name.firstName()} ${faker.name.firstName()}`,
      img: faker.image.avatar(),
    },
    {
      id: 3,
      name: `${faker.name.firstName()} ${faker.name.firstName()}`,
      img: faker.image.avatar(),
    },
    {
      id: 4,
      name: `${faker.name.firstName()} ${faker.name.firstName()}`,
      img: faker.image.avatar(),
    },
    {
      id: 5,
      name: `${faker.name.firstName()} ${faker.name.firstName()}`,
      img: faker.image.avatar(),
    },
    {
      id: 6,
      name: `${faker.name.firstName()} ${faker.name.firstName()}`,
      img: faker.image.avatar(),
    },
    {
      id: 7,
      name: `${faker.name.firstName()} ${faker.name.firstName()}`,
      img: faker.image.avatar(),
    },
    {
      id: 8,
      name: `${faker.name.firstName()} ${faker.name.firstName()}`,
      img: faker.image.avatar(),
    },
    {
      id: 9,
      name: `${faker.name.firstName()} ${faker.name.firstName()}`,
      img: faker.image.avatar(),
    },
    {
      id: 10,
      name: `${faker.name.firstName()} ${faker.name.firstName()}`,
      img: faker.image.avatar(),
    },
    {
      id: 11,
      name: `${faker.name.firstName()} ${faker.name.firstName()}`,
      img: faker.image.avatar(),
    },
    {
      id: 12,
      name: `${faker.name.firstName()} ${faker.name.firstName()}`,
      img: faker.image.avatar(),
    },
    {
      id: 13,
      name: `${faker.name.firstName()} ${faker.name.firstName()}`,
      img: faker.image.avatar(),
    },
    {
      id: 14,
      name: `${faker.name.firstName()} ${faker.name.firstName()}`,
      img: faker.image.avatar(),
    },
  ],
  titulars: [],
  substitutes: [],
};

const manager = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TITULAR:
      return {
        ...state,
        titulars: [...state.titulars, action.player],
        players: state.players.filter((p) => p.id !== action.player.id),
      };

    case types.REMOVE_TITULAR:
      return {
        ...state,
        titulars: state.titulars.filter((p) => p.id !== action.player.id),
        players: [...state.players, action.player],
      };

    case types.ADD_SUBSTITUTE:
      return {
        ...state,
        substitutes: [...state.substitutes, action.player],
        players: state.players.filter((p) => p.id !== action.player.id),
      };

    case types.REMOVE_SUBSTITUTE:
      return {
        ...state,
        substitutes: state.substitutes.filter((p) => p.id !== action.player.id),
        players: [...state.players, action.player],
      };

    default:
      return state;
  }
};

export default manager;
