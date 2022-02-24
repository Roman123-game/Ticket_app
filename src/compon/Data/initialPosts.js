import { v4 as uuidv4 } from "uuid";
import {
    FaLaptopCode,
    FaCocktail,
    FaCartPlus,
  
  } from "react-icons/fa";

 const initialPosts = [
    {
      id: uuidv4(),
      image: <FaLaptopCode className="image" />,
      listName: "Tech",
      description: "Learn React.js",
    },
    {
      id: uuidv4(),
      image: <FaCocktail className="image" />,
      listName: "Rest",
      description: "Walk 7 km",
    },
    {
      id: uuidv4(),
      image: <FaCartPlus className="image" />,
      listName: "Shop",
      description: "Buy Orange",
    },
  ];

  export default initialPosts;