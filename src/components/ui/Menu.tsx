import { Navbar, NavbarContent, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/navbar'
import React from 'react'
import { GiReceiveMoney } from 'react-icons/gi'
import { sideMenuOptions } from '../../lib'
import { Link, useLocation } from 'react-router-dom'
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'

export const Menu =() => {
  const { pathname } = useLocation();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <div className="container flex justify-between items-center py-4 md:pt-4">
        {/* logo Section*/}

        <div
          className="text-2xl flex items-center 
            gap-2 font-bold uppercase"
        >
          <p className="text-primary">Prestamo</p>
          <p className="text-secondary">Mamá</p>
          <GiReceiveMoney className="text-green-500" />
        </div>
        {/* menu section*/}
        <div className="hidden md:block">
          <ul className="flex item gap-6 text-green-600">
            {sideMenuOptions.map((option) => (
              <li key={option.path}>
                <Link
                  className="inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#bef264] font-semibold"
                  to={{ pathname: option.path }}
                >
                  {option.name}
                </Link>
              </li>
            ))}

            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  color="primary"
                  name="Jason Hughes"
                  size="sm"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="Login">Login</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </ul>
        </div>
        {/* hamburger Menu Section*/}

        <NavbarContent className="sm:hidden" justify="end">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>
        {/* Mobile hamburger Menu Section*/}

        <NavbarMenu>
          {sideMenuOptions.map((option) => (
            <NavbarMenuItem key={option.path}>
              <Link
                to={{ pathname: option.path }}
                className={`sidemenu__link ${
                  pathname.includes(option.path) && "sidemenu__link--active"
                }`}
              >
                <div className="flex justify-between  gap-4">
                  <span>{option.icon} </span>
                  <span>{option.name}</span>
                </div>
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </div>
    </Navbar>
  );
}

