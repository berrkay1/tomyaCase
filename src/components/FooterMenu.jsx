"use client"
import React, { useState } from 'react'
import { Collapse } from 'react-collapse';
import { FiChevronDown } from 'react-icons/fi';
import { useWindowWidth } from '@react-hook/window-size'

const FooterMenu = ({ title, icerik }) => {

  const [collapse, setCollapse] = useState(false);
  const windowWidth = useWindowWidth();

  return (
    <div onClick={() => setCollapse(!collapse)} className='flex justify-between border-b-[1px] border-[#eeeff61a] py-5'>
      <div>
        <div className='mb-4 text-sm font-semibold text-[#fffee6]'>{title}</div>
        <Collapse isOpened={windowWidth > 991 ? true : collapse}>

          <ul className='space-y-3 my-4 text-[#eeeff680] '>
            {
              icerik.map((el, idx) => (
                <li className=' text-sm mr-3' key={idx}>
                  <a href="#" className='hover:text-white duration-300'>{el.title}</a>
                </li>
              ))
            }

          </ul>

        </Collapse>
      </div>

      <div className='block lg:hidden '>
        <div className=' flex items-center justify-center rounded-lg' >
          <FiChevronDown size={26} className={`duration-500 ${collapse ? 'text-[#5952e4]' : 'text-[#eeeff6]'}`} style={{ rotate: `${collapse ? '180deg' : '0deg'}` }} />
        </div>
      </div>

    </div>
  )
}

export default FooterMenu