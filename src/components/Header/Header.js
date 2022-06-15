import React from 'react'
import Logo from '../Logo/Logo'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import UserImage from '../../assets/kaine.jpeg'

function Header() {

    const handleActive = (e) => {

        const allLinks = e.target.parentElement.children;

        for(let i = 0; i < allLinks.length; i++) {
            allLinks[i].classList.remove('active')
        }
        
        e.target.classList.add('active')
    }

  return (
    <div className='header'>
        <div className="header__logo">
            <Logo />
        </div>

        <nav className="header__nav_middle">
            <li onClick={ handleActive }>Explore</li>
            <li onClick={ handleActive }>My Courses</li>
            <li onClick={ handleActive }>Become an instructor</li>
        </nav>

        <nav className="header__nav_right">
            <button className="notification">
                <NotificationsNoneIcon style={{color:'#fff'}}/>
                <div className="notification__count">
                    <span>2</span>
                </div>
            </button>
            <button className="user_profile">
                <img src={ UserImage } alt="" />
                <span>Kaine Shutler</span>
            </button>
        </nav>
    </div>
  )
}

export default Header