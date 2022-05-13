import { v4 as uuidv4 } from "uuid";
import { FaLaptopCode,  FaCocktail,  FaCartPlus,FaMoneyBillAlt} from "react-icons/fa";

 const Data = [
    {
      id: uuidv4(),
      image: <FaLaptopCode className="image" />,
      listName:"Technology",
      description:"learn react.js & redux",
    },
    {
      id: uuidv4(),
      image: <FaCocktail className="image" />,
      listName:"Pleasure",
      description:"walk distance 7.2 kilometre",
    },
    {
      id: uuidv4(),
      image: <FaCartPlus className="image" />,
      listName:"Shopping",
      description:"buy orange and potato",
    },
    {
    id: uuidv4(),
    image: <FaMoneyBillAlt className="image" />,
    listName:"Economy",
    description:"tools cost    99.99$",
  },
  ];

  export default Data;