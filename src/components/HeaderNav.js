import React from 'react';

function HeaderNav( { title, handleClick } ){
    return(
        <button className="text-[#b1b2b6] uppercase hover:cursor-pointer h-12 leading-[48px] px-8" onClick={handleClick}>{title}</button>
    )
}

export default HeaderNav;