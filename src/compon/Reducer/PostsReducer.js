import { v4 as uuidv4 } from "uuid";

function PostsReducer(state, action) {
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
    case "EDIT_POST":
      const editedID = [...state.posts.filter((itm) => itm.id === action.payload.ev.postId)]
      editedID[0].description = action.payload.edit
      return {
          posts: [
            ...state.posts,
          ],
      };
      case "GLOBE_POST":
        const listusers =  [...state.posts.map(post=>{console.log(post.username)})];
        return {
          posts: [
            ...state.posts,
          ],
      };

    default: 
      return console.log("default");
  }
}

export default PostsReducer;
