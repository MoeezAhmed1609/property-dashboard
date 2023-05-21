import { AiOutlineUser,  AiFillContacts } from "react-icons/ai"
import { FaBlog } from "react-icons/fa"
import { BsFillHouseAddFill,BsFillChatLeftQuoteFill } from "react-icons/bs"
const NavData = [
    {
        name: "User",
        link: '/user',
        icon: AiOutlineUser,
    },
    {
        name: "Properties",
        link: '/properties',
        icon: BsFillHouseAddFill,
    },
    {
        name: "Testimonials",
        link: '/testimonial',
        icon: BsFillChatLeftQuoteFill,
    },
    {
        name: "Blog",
        link: '/blog',
        icon: FaBlog,
    },

    {
        name: "contact",
        link: '/contact',
        icon: AiFillContacts,
    },
    {
        name: "Enquiry",
        link: '/enquiry',
        icon: AiFillContacts,
    },
    {
        name: "Team",
        link: '/team',
        icon: AiFillContacts,
    },
    {
        name: "About",
        link: '/about',
        icon: AiFillContacts,
    },
    {
        name: "About City",
        link: '/cityinfo',
        icon: AiFillContacts,
    },



]
export default NavData;