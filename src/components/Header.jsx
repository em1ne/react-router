import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate=useNavigate();
    return (
        <header>
            
            <h1 onClick={()=> navigate('/')}>Kitap Dünyası</h1>
            <div>
            <NavLink to="/">Anasayfa</NavLink>
            <NavLink to="/books">Kitaplar</NavLink>
            </div>
        
            
        </header>
    );
};
export default Header
//link ile navlink arasındaki fark (navlink active özelliğini kullanıyor.)
//&& isactive methodu istediğimiz classname verebilmek için kullandık && sembolünden sonra istediğimiz ismi verebiliriz.
/* <h1>Kitap Dünyası</h1>
            <div>
            <NavLink to="/"className={({isActive})=> isActive && "aktif"}>Anasayfa</NavLink>
            <NavLink to="/books" className={({isActive})=> isActive && "aktif"}>Kitaplar</NavLink>
            </div>*/