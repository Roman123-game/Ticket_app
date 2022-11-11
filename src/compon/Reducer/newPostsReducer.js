
function newPostsReducer(newPosts, action) {
  switch (action.type) {
      case "GLOBE_POST":   
     console.log(newPosts.newPosts)
     const postsArray = newPosts.newPosts.map(itm=>itm);
 
        return {
         newPosts : postsArray.filter((itm) => itm.description === action.payload)
        };
    default: 
      return console.log("default");
  }
}

export default newPostsReducer;