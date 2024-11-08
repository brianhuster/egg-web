import React from 'react';
import eggIcon from '../assets/eggIcon.jpg';
import HeaderNav from './HeaderNav';
	
const navList = [
	{
		title:'Home'
	},
	{
		title:'About EGG'
	},
	{
		title:'Thông tin, sự kiện'
	},
	{
		title:'Humans of EGG'
	}
]
function Header() {
	return (
		<header className="fixed top-0 w-full border-b-2 border-[#46484b]">
			<div className="flex justify-between items-center z-10 h-14 px-4 bg-[#242527]">
				<img src={eggIcon} alt='EGG' className='w-12 h-12 rounded-full' />
				<nav className="flex">
					{navList.map( navItem => <HeaderNav title={navItem.title} /> )}
				</nav>
				<button className="px-4 py-2 border-2 border-black bg-white cursor-pointer">Đăng nhập</button>
			</div>
		</header>
	);
}

export default Header;

