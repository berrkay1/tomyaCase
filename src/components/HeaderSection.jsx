import React from 'react'

const HeaderSection = () => {
 
    return (
        <div className='w-full min-h-[460px] h-[555px] lg:h-[570px]  relative top-0 bg-gradient-to-t from-[#3c37a1] to-[#5952e4] flex items-center justify-center'>
            <div className='absolute top-[5.7rem] h-[765px] w-full bg-headerBg lg:bg-auto bg-no-repeat  bg-center flex items-center justify-center'>

                <div className='w-[1170px] container mx-auto flex flex-col-reverse lg:flex-row justify-center -mt-36 md:-mt-16 lg:-mt-2 items-center lg:items-start'>
                    <img className='w-[345px] sm:w-[380px] md:w-[500px] lg:w-[624px] mt-1 sm:mt-0' src="https://www.tomya.com/assets/img/subpages/sub/aboutus-banner.png" />

                    <div className='text-white lg:mt-36 lg:-ml-7 mt-0 ml-0 flex flex-col items-center w-[90%] sm:w-[78%] md:w-[95%] '>
                        <h1 className='xl:text-[3.375rem] xl:leading-[55px] text-[32px] leading-10  font-semibold xl:text-start text-center lg:text-[45px] lg:leading-[55px] lg:text-start'>TOMYA; kripto para almanın hızlı ve kolay yoludur.</h1>
                        <h4 className='text-[16px] leading-[20px] lg:text-[1.120rem] lg:leading-[24px] mt-5 font-[600] lg:text-start text-center'>Yenilikçi, dürüst ve profesyonel bakış açısı ile hareket eden TOMYA, kullanıcılara dijital para borsalarında güvenli ve şeffaf şekilde hizmet etmeyi vizyon edinmiştir.</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderSection


