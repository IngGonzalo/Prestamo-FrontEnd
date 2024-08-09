import React from 'react'
import prestamos from '../../../assets/website/prestamos.jpeg'
import { motion } from 'framer-motion';

export const MenuServices =() => {
    const MenuData =[
        {
            id:1,
            title:"Diario",
            descripcion:"Prestamo a pagar diariamente segun el monto a pagar...",
            img:prestamos,
            delay:0.3

        },
        {
            id:2,
            title:"Semanal",
            descripcion:"Prestamo a pagar cada siete dias segun el monto a pagar...",
            img:prestamos,
            delay:0.6
        },
        {
            id:3,
            title:"Quincenal",
            descripcion:"Prestamo a pagar cada quince dias segun el monto a pagar...",
            img:prestamos,
            delay:0.9
        },
        {
            id:4,
            title:"Mensual",
            descripcion:"Prestamo a pagar cada mes segun el monto a pagar...",
            img:prestamos,
            delay:1.2
        }
    ]
  return (
    <section>
      <div className="container pt-12 pb-20">
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl px-16  py-10 font-bold text-left pb-10 uppercase text-primary"
        >
          Services
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-16  py-10">
          {MenuData.map((menu) => (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: menu.delay }}
              whileHover={{scale:1.1}}
              className="bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row justi items-center gap-3"
            >
              <img
                src={menu.img}
                alt=""
                className="w-[60px] mb-4 scale-125 transform -translate-y-6"
              />
              <div>
                <h1 className="text-lg text-primary font-semibold">
                  {menu.title}
                </h1>
                <p className="text-black">{menu.descripcion}</p>
              </div>
            </motion.div>
          ))}
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
