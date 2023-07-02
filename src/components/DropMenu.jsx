"use client"
import React from 'react'
import { useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'


const DropMenu = ({ openMenu, setOpenMenu }) => {

    const ref = useRef();

    const handleClickOutside = () => {
        setOpenMenu(false)
    }

    useOnClickOutside(ref, handleClickOutside)

    return (
        <div onClick={handleClickOutside} ref={ref} className='fixed bg-[#00000080] h-full w-full top-0 left-0 z-50 duration-1000'>
            <div>
                <ul className={`bg-[#eeeff6] fixed right-0 top-0 h-full z-40 px-[30px] py-[90px] max-w-[350px] duration-700 text-[25px] font-semibold pr-20 ${openMenu ? 'w-auto' : 'w-0'}`}>
                    <li><a className='block py-[5px]' href="#">Kripto Paralar</a></li>
                    <li><a className='block py-[5px]' href="#">Market</a></li>
                    <li><a className='block py-[5px]' href="#">Komisyonlar</a></li>
                    <li><a className='block py-[5px]' href="#">Hakkımızda</a></li>
                    <li><a className='block py-[5px]' href="#">Basında Biz</a></li>
                    <li><a className='block py-[5px]' href="#">Duyurular</a></li>
                    <li><a className='block py-[5px]' href="#">İletişim</a></li>
                    <li><a className='block py-[5px]' href="#">Blog</a></li>
                    <div className='mt-[60px]'>
                        <li><a className='block bg-[#5952e4] text-[18px] text-[#eeeff6] leading-6 w-[240px] text-center h-[50px] rounded-[25px] py-[14px] px-5' href="#">Giriş Yap</a></li>
                        <li><a className='block py-[5px] text-[18px] text-center mt-4' href="#">Kayıt Ol</a></li>
                    </div>
                </ul>
            </div>

        </div>
    )
}

export default DropMenu