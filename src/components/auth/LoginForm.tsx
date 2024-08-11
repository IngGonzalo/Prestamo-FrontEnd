import { Button, Input } from "@nextui-org/react"
import PrestamoLogo from "../../assets/website/logoprestamo.jpg"


export const LoginForm=()=> {
  return (
    <div className="flex flex-col items-center">
      <div className=" bg-white p-8 rounded-lg shadow max-w-sm w-full">
        <div className="flex flex-col items-center  ">
         <img src={PrestamoLogo} alt="" className="rounded-full "  />
        </div>
        <br />
        
        <h3 className="text-primary text-center text-2xl font-bold">
          {" "}
          Iniciar Sesión
        </h3>
        <hr className="h-px my-2 bg-primary border-0 dark:bg-gray-700"></hr>
        <form action="" className="mt-8 space-y-4">
          <Input
            name="email"
            isRequired
            type="email"
            size="sm"
            label="Correo Electrónico"
          />
          <Input
            name="password"
            isRequired
            type="password"
            size="sm"
            label="Contraseña"
            
          />
          <div className="flex flex-col items-end">
          <a href="#" className="font-semibold text-blue-700 hover:text-red-400">¿Olvido su Contraseña?</a>
          </div>

          <br />

          <Button className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">Iniciar Sesion</Button>
        </form>
      </div>
    </div>
  );
}



