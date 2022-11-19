
function newPostsReducer(newPosts, action) {
  switch (action.type) {
      case "GLOBE_POST":   
     console.log(newPosts.newPosts,'globe btn')
        return {
         newPosts : [...newPosts.newPosts]
        };

        case "RETURN_POST":
          console.log(newPosts.newPosts,'return btn')
          return {
           newPosts: newPosts.newPosts
          }
    default: 
      return console.log("default");
  }
}

export default newPostsReducer;