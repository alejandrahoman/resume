import React from 'react';

import './Header.css';

const Header = props => {

    return (
        <div className='wrap'>
            <span className='textWrap'>
                Alejandra Homan
            </span>
            <a className='headerAbout' href='#about'>
                About
            </a>
        </div>
    )

}

export default Header;