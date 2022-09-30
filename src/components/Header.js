import React, { useState } from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import { Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DatePicker from './DatePicker';




function Header() {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const handleClick = () => {
    setShowDatePicker(!showDatePicker);
  }
  return (
    <div className='header__container'>

    <div className='header'>
        <img
            className='header__logo'
            src="https://www.vectorlogo.zone/logos/airbnb/airbnb-ar21.png" 
            alt='logo'
          />
          <div onClick={handleClick} className='header__center'>
                 <div className='header__search'>
                    <div className='headersearch__left'>
                      <span>Anywhere</span>
                      <span>Any Week</span>
                      <p className='active__item'>Add Guests</p>
                    </div>
                    <div className='headersearch__right'>
                      <SearchIcon className='header__searchicon' />  
                    </div>
                  </div>
          </div>

          <div className='header__right'>
              <strong>Become a host</strong>
              <LanguageIcon className='language__icon' />
              <div className='profile__details'>
                  <MenuIcon className='menu__icon' />
                  <Avatar className='profile__photo'/>
              </div>
          </div>
      </div>
      {showDatePicker ? <DatePicker /> : null}
    </div>
  )
}

export default Header
