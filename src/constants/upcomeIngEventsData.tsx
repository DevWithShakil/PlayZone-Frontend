import { FaBasketballBall } from 'react-icons/fa';
import { IoMdFootball } from 'react-icons/io';
import { MdGolfCourse, MdSportsCricket, MdSportsHockey, MdSportsTennis } from 'react-icons/md';
import carrom from "../assets/image/Playground/carrom/playing-carroms-close-up.jpg"
import badminton from "../assets/image/Playground/badminton/young-woman-playing-badminton-gym.jpg"
import volleyball from "../assets/image/Playground/Volleyball/girls-playing-volleyball.jpg"

export const upcomingEvensData = [
    {
        label: "Badminton",
        value: <IoMdFootball />,
        img: badminton,
        dsc: "Large rectangular pitch for the beautiful game of soccer."
    },
    {
        label: "Carrom",
        value: <MdSportsCricket />,
        img: carrom,
        dsc: "Spacious field for the classic bat-and-ball game of cricket."

    },
    {
        label: "Volleyball",
        value: <MdSportsTennis />,
        img: volleyball,
        dsc: "Tightly netted court for the precision sport of tennis."
    },
];

