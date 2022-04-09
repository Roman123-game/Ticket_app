import { v4 as uuidv4 } from "uuid";
import { FaLaptopCode,  FaCocktail,  FaCartPlus,FaMoneyBillAlt} from "react-icons/fa";

 const Data = [
    {
      id: uuidv4(),
      image: <FaLaptopCode className="image" />,
      listName:"Technology",
      description:"Learn React.js & Redux",
    },
    {
      id: uuidv4(),
      image: <FaCocktail className="image" />,
      listName:"Pleasure",
      description:"Walk distance 7.2 kilometre",
    },
    {
      id: uuidv4(),
      image: <FaCartPlus className="image" />,
      listName:"Shopping",
      description:"Buy Orange and Potato",
    },
    {
    id: uuidv4(),
    image: <FaMoneyBillAlt className="image" />,
    listName:"Economy",
    description:"Tools cost    99.99$",
  },
  ];

  export default Data;