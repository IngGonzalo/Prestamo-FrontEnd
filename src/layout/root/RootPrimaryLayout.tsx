import { FooterMenu, Hero, Menu, MenuServices } from "../../components"
import { LoginForm } from '../../components/auth/LoginForm';

export const RootPrimaryLayout = () => {
  return (
    <div  className="overflow-x-hidden bg-[#ecfccb]">
        
        <Menu/>  
        <Hero/>
        <MenuServices/>
        <LoginForm/>
        <FooterMenu/>
        
              
    </div>
  )
}
