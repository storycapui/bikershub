import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import image4 from "./image4.jpg";
import image5 from "./image5.jpg";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

let best_sellers = [
  {
    id: 1,
    name: "Acrophovic Silencer",
    category: "Accessories",
    image: image1,
    new_price: "₹8500.0/-",
    old_price: "12000.5/-",
    sizes : ["S", "L", "M"],
    colors: ["#000000", "#ffffff", "#zzzzzz"],
    stock : "Instock",
    discount : "25%",
    whatsapp : <IoLogoWhatsapp />,
    instagram : <FaSquareInstagram  />,
    youtube : <FaYoutube />,
  },
  {
    id: 2,
    name: "KYT NCR Hemlets",
    category: "Helmets",
    image: image2,
    new_price: "₹12500.0/-",
    old_price: "17000.5/-",
    sizes : ["S", "L", "M"],
    colors: ["#000000", "#ffffff", "#zzzzzz"],
    stock : "Instock",
    discount : "25%",
    whatsapp : <IoLogoWhatsapp />,
    instagram : <FaSquareInstagram />,
    youtube : <FaYoutube />,
  },
  {
    id: 3,
    name: "Rynox Riding Jackets",
    category: "Jackets",
    image: image3,
    new_price: "₹18500.0/-",
    old_price: "22000.5/-",
    sizes : ["S", "L", "M"],
    colors: ["#000000", "#ffffff", "#zzzzzz"],
    stock : "Instock",
    discount : "25%",
    whatsapp : <IoLogoWhatsapp />,
    instagram : <FaSquareInstagram />,
    youtube : <FaYoutube />,
  },
  {
    id: 4,
    name: "Rynox Safety Guards",
    category: "Gears",
    image: image4,
    new_price: "₹22500.0/-",
    old_price: "27000.5/-",
    sizes : ["S", "L", "M"],
    colors: ["#000000", "#ffffff", "#zzzzzz"],
    stock : "Instock",
    discount : "25%",
    whatsapp : <IoLogoWhatsapp />,
    instagram : <FaSquareInstagram />,
    youtube : <FaYoutube />,
  },
  {
    id: 5,
    name: "Mobile Phone Mount",
    category: "accessories",
    image: image5,
    new_price: "₹5000.0/-",
    old_price: "6000.5/-",
    sizes : ["S", "L", "M"],
    colors: ["#000000", "#ffffff", "#zzzzzz"],
    stock : "Instock",
    discount : "25%",
    whatsapp : <IoLogoWhatsapp />,
    instagram : <FaSquareInstagram />,
    youtube : <FaYoutube />,
  },
];

export default best_sellers;
