
function newPostsReducer(state, action) {
  switch (action.type) {
      case "GLOBE_POST":   
      console.log(state.newPosts)
        return {
       newPosts: [state.newPosts.filter((itm) => itm.description === action.payload)]
        };
        case "RETURN_POST":
    default: 
      return console.log("default");
  }
}

export default newPostsReducer;