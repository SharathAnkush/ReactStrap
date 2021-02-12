import {Nav,Navbar,NavbarBrand,NavbarToggler,NavItem,NavbarText,Collapse,NavLink } from 'reactstrap'
import {Link} from 'react-router-dom'
import { useState } from 'react'


const Header = () =>{
    const [open ,setOpen] = useState(false)
    const toggle = () => setOpen(!open)
    return(
        <Navbar color='info'light  expand='md'>
            <NavbarBrand>
                <Link to='/' className='text-white'>FIRE</Link>
            </NavbarBrand>
            <NavbarToggler onClick={toggle}className='bg-white' />
             <Collapse isOpen={open} navbar>
               <Nav className='ml-auto' navbar>
                   <NavItem>
                       <NavLink className='text-white'>Signup</NavLink>
                   </NavItem> 
                   <NavItem>
                       <NavLink className='text-white'>Signin</NavLink>
                   </NavItem> 
                   <NavItem>
                       <NavLink className='text-white'>Logout</NavLink>
                   </NavItem> 
               </Nav>
             </Collapse>
        </Navbar>
    )
}

export default Header;