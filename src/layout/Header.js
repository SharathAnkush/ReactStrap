import {Nav,Navbar,NavbarBrand,NavbarToggler,NavItem,NavbarText,Collapse,NavLink } from 'reactstrap'
import {Link} from 'react-router-dom'


const Header = () =>{
    return(
        <Navbar color='info'light  expand='md'>
            <NavbarBrand>
                <Link to='/' className='text-white'>FIRE</Link>
            </NavbarBrand>
            <NavbarToggler/>
             <Collapse navbar>
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