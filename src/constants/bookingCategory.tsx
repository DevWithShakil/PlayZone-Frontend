import { FaBasketballBall } from 'react-icons/fa';
import { IoMdFootball } from 'react-icons/io';
import { MdGolfCourse, MdSportsCricket, MdSportsHockey, MdSportsTennis } from 'react-icons/md';
import football from "../assets/image/Playground/football/field-1.jpg"
import cricket from "../assets/image/Playground/cricket/field-1.jpg"
import tennis from "../assets/image/Playground/tennis/field-1.jpg"
import basket from "../assets/image/Playground/basket/banner.jpg"
import hockey from "../assets/image/Playground/hockey/field-1.jpg"
import golf from "../assets/image/Playground/golf/field-.jpg"

export const bookingCategory = [
  {
    label: "Football",
    value: <IoMdFootball />,
    img: football,
    dsc: "Large rectangular pitch for the beautiful game of soccer."
  },
  {
    label: "Cricket",
    value: <MdSportsCricket />,
    img: cricket,
    dsc: "Spacious field for the classic bat-and-ball game of cricket."

  },
  {
    label: "Tennis",
    value: <MdSportsTennis />,
    img: tennis,
    dsc: "Tightly netted court for the precision sport of tennis."
  },
  {
    label: "Basket",
    value: <FaBasketballBall />,
    img: basket,
    dsc: "Hardwood court for the fast-paced game of basketball."
  },
  {
    label: "Hockey",
    value: <MdSportsHockey />,
    img: hockey,
    dsc: "Spacious field for the classic bat-and-ball game of cricket."
  },
  {
    label: "Golf",
    value: <MdGolfCourse />,
    img: golf,
    dsc: "Court with a net for the dynamic game of volleyball."
  },
];

