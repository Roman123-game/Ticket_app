
function newPostsReducer(newPosts, action) {
  switch (action.type) {
      case "GLOBE_POST":   
     console.log(newPosts.newPosts)
     const postsArray = newPosts.newPosts.map(itm=>itm);
     const filterArray = postsArray.filter((itm) => itm.description === action.payload)
        return {
         newPosts : [...filterArray,...postsArray]
        };

        case "RETURN_POST":
          return {
            newPosts: [...newPosts.newPosts],
          }
    default: 
      return console.log("default");
  }
}

export default newPostsReducer;