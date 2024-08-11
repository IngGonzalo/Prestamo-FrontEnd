

import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';
import { motion } from 'framer-motion';

export const  FooterMenu=() => {
  return (
    <footer className='bg-primary/10 py-12 mt-12'>
      <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1, delay:0.2}}
       className="container flex justify-between items-center">
        {/* Logo section*/}
        <div className="text-2xl flex items-center gap-2 font-bold uppercase">
          <p className="text-primary">Prestamo</p>
          <p className="text-secondary">Mamá</p>
          <GiReceiveMoney className="text-green-500" />
        </div>
        {/* social icons section*/}
        <div className='text-3xl flex items gap-4 mt-6 text-gray-700'>
            <FaInstagram/>
            <FaTwitter/>
            <FaFacebook/>
            <FaWhatsapp/>
        </div>
      </motion.div>
    </footer>
  );
}
