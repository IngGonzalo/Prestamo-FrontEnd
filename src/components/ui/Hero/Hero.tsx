
import Hero_img from "../../../assets/website/Hero_img.jpeg"
import lef_hero from "../../../assets/website/lef-hero.jpg"
import { motion } from 'framer-motion'




export const Hero =() => {
    return (
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
          {/* Brand info*/}
          <div className="flex flex-col justify-center px-16  py-10 md:py-0 relative z-10">
            <div className="text-center md:text-left space-y-8 lg:max-w-[400px]">
              <motion.h1
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-6xl lg:text-6xl font-bold leading-relaxed xl:leading-loose"
              >
                <span className="text-primary">Un Crédito</span>
                
                <br />
                <span className="text-secondary">a tu Medida..</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="text-black"
              >
                Recuerda que pedir un préstamo es una decision muy importante y
                te motiva a esforzarte más para obtener ingresos estables.
                ¡Infórmate de todos nuestros tipo de creditos!
              </motion.p>
            </div>
          </div>
          {/* Hero images*/}
          <div className="flex justify-center items-center ">
            <motion.img
              initial={{ opacity: 0, x: 200,rotate:75 }}
              animate={{ opacity: 1, x: 0, rotate:0 }}
              transition={{ duration: 1, delay: 0.2 }}
              src={Hero_img}
              alt=""
              className="w-[350px] md:w-[500px] drop-shadow rounded-md"
            />
          </div>

          {/* Leaf images*/}

        </div>
      </section>
    );
  }
  