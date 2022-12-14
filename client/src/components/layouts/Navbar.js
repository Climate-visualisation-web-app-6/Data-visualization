import { NavLink } from 'react-router-dom'
import Cookies from 'universal-cookie';

function Navbar() {
  const cookies = new Cookies();
  var isCookie = false
  if(cookies.get('firstname') != null){
    isCookie = true
  }

  return (
    <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/register'>Register</NavLink>
        {
          isCookie ? cookies.get('firstname').length !== 0 ? <a href='/user_info' class='user_nav'>{cookies.get('firstname')}</a> : <a class='user_nav' href='/user_info'>User</a> : <a class='user_nav' href='/user_info'>User</a>
        }
        
    </nav>
  )
}

export default Navbar