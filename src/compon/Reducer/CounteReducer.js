import { v4 as uuidv4 } from "uuid";

function CounterReducer(state, action) {
    console.log(action)
    switch (action.type) {
      case "ADD_POST":
        return {
          posts: [
            ...state.posts,
            {
              id: uuidv4(),
              image: action.payload.image,
              listName: action.payload.value,
              description: action.payload.valueInput,
            },
          ],
        };
      case "REMOVE_POST":
        return {
          posts: state.posts.filter((itm) => itm.id !== action.payload),
        };
      default:
        return console.log("default");
    }
  }

export default CounterReducer