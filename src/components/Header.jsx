"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi';
import { FaUserAlt } from 'react-icons/fa';
import { HiOutlineMenu } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx';
import DropMenu from './DropMenu';



const Header = () => {


    const moneys = [
        { title: 'Bitcoin' },
        { title: 'Dogecoin', },
        { title: 'Ethereum' },
        { title: 'Cardano' },
        { title: 'Ripple' },
        { title: 'NEO' },
        { title: 'Litecoin' },
        { title: 'Chiliz' },
        { title: 'Tether' },
        { title: 'Holochain' },
        { title: 'Chainlink' },
        { title: 'BitTorrent Chain' },
        { title: 'Polkadot' },
        { title: 'Decentraland' },
        { title: 'Avalanche' },
        { title: 'The Sandbox' },
        { title: 'Binance Coin' },
        { title: 'Shiba Inu' },
        { title: 'Pancakeswap' },
        { title: 'Polygon' },
        { title: 'Solana' },
        { title: 'PAX Gold' },
        { title: 'NEAR Protocol' },
        { title: 'Cosmos' },
        { title: 'ApeCoin' },
        { title: 'Enjin Coin' },
        { title: 'Uniswap' },
        { title: 'VeChain' },
        { title: 'Fantom' },
        { title: 'THORChain ' },
        { title: 'Curve DAO' },
        { title: 'Oasis Network' },
        { title: 'Ethereum Classic' },
    ]



    const [openMenu, setOpenMenu] = useState(false);
    const [openMouse, setOpenMouse] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);


    };

    const handleMauseOver = () => {
        setOpenMouse(true)
        const div = document.getElementById('root')
        console.log('div', div)
    }
    const handleMauseLeave = () => {
        setOpenMouse(false)
    }


    return (
        <div className='bg-[#5952e4] w-full '  >
            <div className='flex items-center justify-center '>
                <div style={{ zIndex: '99999999999999' }} className={`container mx-auto xl:max-w-[1170px] flex items-center justify-between px-4 py-1.5 rounded-b-xl fixed  top-0  ${openMenu ? 'bg-transparent' : 'bg-[#5952e4]'}`}  >
                    <a href="#" className='' >
                        <Image
                            src="/tomya-logo.svg"
                            width={147}
                            height={48}

                        />
                    </a>
                    <nav className='gap-1 text-[13px] text-white flex lg:hidden'>
                        {!openMenu && <a href="#" className='p-2 flex items-center justify-center mt-[3px]'><FaUserAlt size={16} /></a>}
                        <a href="#" onClick={toggleMenu} className='p-2 flex items-center justify-center mt-1 bg-[#5952e4] hover:bg-[#736CFF] rounded-[10px] duration-300'>{openMenu ? <RxCross2 size={23} /> : <HiOutlineMenu size={23} />} </a>
                    </nav>
                    <nav className='gap-6 text-[13px] text-white hidden lg:flex lg:items-center relative [&:not(:hover)>li]:opacity-100 [&>li]:transition-opacity'>
                        <li onMouseOver={handleMauseOver} onMouseLeave={handleMauseLeave} className='flex items-center justify-center absolute -left-24 xl:-left-32 py-2 [&:not(:hover)]:opacity-50'>

                            <a className='xl:flex items-center justify-center hidden relative py-8' href="#">
                                <span className='mr-1 flex '>Kripto Paralar</span>
                                <FiChevronDown size={20} />

                                {openMouse && <div className='shadow-cartShodow bg-white rounded-[3px] absolute top-20 left-0 w-[850px] h-auto'>
                                    <h2 className='text-[52px] leading-[82px] text-[#24242a33] pt-[20px] px-[30px] pb-3 border-[1px] border-[#24242a1a] '>Kripto Paralar</h2>
                                    <ul className='p-[1.563rem] flex flex-wrap '>
                                        {
                                            moneys.map((money, idx) => (
                                                <li key={idx} className=' rounded-lg mr-2 hover:bg-gray-200 duration-300'>
                                                    <a href="#" className='flex items-center justify-start w-[150px] py-[9px] px-[5px] space-x-1 '>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 34 34">
                                                            <path fill="#5952E4" fillRule="evenodd" d="M17 0c9.389 0 17 7.611 17 17s-7.611 17-17 17S0 26.389 0 17 7.611 0 17 0zM8 20l8 11v-6.447L8 20zm17 0l-8 4.553V31l8-11zm-9-6l-8 3.423L16 22v-8zm1 0v8l8-4.575L17 14zM16 3L8 16l8-3.39V3zm1 0v9.577L25 16 17 3z"></path>
                                                        </svg>
                                                        <div className='text-[#24242a] font-semibold'>{money.title}</div>
                                                    </a>
                                                </li>

                                            ))
                                        }

                                    </ul>
                                </div>}
                            </a>



                            <a className='flex items-start justify-start xl:hidden flex-col relative py-6' href="#">
                                <div className='flex'>
                                    <span className='mr-1'>Kripto </span>
                                    <FiChevronDown size={20} />
                                </div>
                                <span >Paralar</span>

                                {openMouse && <div className='shadow-cartShodow bg-white rounded-[3px] absolute top-20 left-0 w-[850px] h-auto'>
                                    <h2 className='text-[52px] leading-[82px] text-[#24242a33] pt-[20px] px-[30px] pb-3 border-[1px] border-[#24242a1a] '>Kripto Paralar</h2>
                                    <ul className='p-[1.563rem] flex flex-wrap '>
                                        {
                                            moneys.map((money, idx) => (
                                                <li key={idx} className=' rounded-lg mr-2 hover:bg-gray-200 duration-300'>
                                                    <a href="#" className='flex items-center justify-start w-[150px] py-[9px] px-[5px] space-x-1 '>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 34 34">
                                                            <path fill="#5952E4" fillRule="evenodd" d="M17 0c9.389 0 17 7.611 17 17s-7.611 17-17 17S0 26.389 0 17 7.611 0 17 0zM8 20l8 11v-6.447L8 20zm17 0l-8 4.553V31l8-11zm-9-6l-8 3.423L16 22v-8zm1 0v8l8-4.575L17 14zM16 3L8 16l8-3.39V3zm1 0v9.577L25 16 17 3z"></path>
                                                        </svg>
                                                        <div className='text-[#24242a] font-semibold'>{money.title}</div>
                                                    </a>
                                                </li>

                                            ))
                                        }

                                    </ul>
                                </div>}
                            </a>

                        </li>
                        <li className='[&:not(:hover)]:opacity-50'><a className='block' href="#">Market</a></li>
                        <li className='[&:not(:hover)]:opacity-50' ><a className='block' href="#">Komisyonlar</a></li>
                        <li className='[&:not(:hover)]:opacity-50' ><a className='block' href="#">Hakkımızda</a></li>
                        <li className='[&:not(:hover)]:opacity-50' ><a className='block' href="#">Basında Biz</a></li>
                        <li className='[&:not(:hover)]:opacity-50' ><a className='block' href="#">Duyurular</a></li>
                        <li className='[&:not(:hover)]:opacity-50' ><a className='block' href="#">İletişim</a></li>
                        <li className='[&:not(:hover)]:opacity-50' ><a className='block' href="#">Blog</a></li>
                        <li className='[&:not(:hover)]:opacity-50' ><a href="#" className='border-[1px] border-white rounded-[15px] py-[2px] xl:py-[4px] px-3 block text-center'>Giriş <br className='block xl:hidden' /> Yap</a></li>
                        <li className='[&:not(:hover)]:opacity-50' ><a className='flex items-center justify-center' href="#">Kayıt Ol</a></li>
                    </nav>

                </div>
            </div>

            {openMenu ? <DropMenu setOpenMenu={setOpenMenu} openMenu={openMenu} /> : null}

        </div>
    )
}

export default Header