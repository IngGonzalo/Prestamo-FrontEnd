import { FcAbout, FcContacts, FcHome, FcMoneyTransfer } from "react-icons/fc";



export const sideMenuOptions = [
    {
        path: 'Home',
        name: "Home",
        icon: <FcHome />
    },
    {
        path: 'About',
        name: "About",
        icon: <FcAbout />

    },

    {
        path: 'Contact',
        name: "Contac",
        icon: <FcContacts />
    },   

    {
        path: 'Services',
        name: "Services",
        icon: <FcMoneyTransfer />
    },  

]