import React from 'react'

const MainPressKit = () => {
    return (
        <div className='w-full flex items-center justify-center mt-[40px] lg:mt-[165px] container mx-auto'>
            <div className='w-[1170px] px-0 mx-3 sm:mx-[70px] md:mx-0'>
                <div className='bg-[#eeeff6] rounded-[10px] p-[20px] md:p-[50px] lg:py-[65px] lg:px-[55px] xl:pt-[100px] xl:pb-[120px] xl:px-[150px]'>
                    <div className='flex flex-col lg:flex-row '>
                        <div className='lg:max-w-[33%] lg:flex-33 '>
                            <h2 className='text-2xl  lg:text-4xl font-semibold'>Basın kiti</h2>
                        </div>
                        <div className='w-[97%] lg:max-w-[66%] lg:flex-66 mt-[1.25rem] lg:mt-0'>
                            <h3 className='text-[20px] leading-[26px] lg:text-2xl'>Markamıza ait logomuzun medya kanallarında ya da farklı mecralarda en doğru şekilde kullanımı için basın materyallerini indirebilirsiniz.
                            </h3>
                        </div>
                    </div>
                    <div className='mt-[1.825rem] lg:mt-16 xl:mt-20 flex flex-col lg:flex-row'>
                        <div className='rounded w-full p-[30px] lg:w-[250px] h-[270px] bg-white xl:py-[32px] xl:px-[38px] flex flex-col items-start justify-between' >
                            <span className='block'></span>
                            <h6 className='text-sm md:text-xs mr-[1.875rem] flex items-center justify-center'>Logo kullanım <br className='hidden md:block' /> kılavuzu</h6>
                        </div>
                        <div className='rounded bg-white w-full h-auto md:h-[270px] lg:ml-[0.625rem] ml-0 lg:mt-0 mt-[0.625rem] p-[30px] xl:pt-10 xl:pr-12 xl:pb-[30px] xl:pl-[62px]  flex flex-col justify-end' >
                            <span className='hidden md:block'></span>
                            <div className='flex items-start justify-between flex-col md:flex-row leading-loose'>
                                <div className='flex items-start justify-between leading-loose'>
                                    <h6 className='text-sm md:text-xs mr-[1.875rem] flex items-center justify-center'>Renkli ve <br />Siyah/Beyaz kullanım</h6>
                                    <h6 className='text-xs  items-center justify-center hidden md:flex'>Logo baskı, web ve <br /> HEX renk kodları</h6>
                                </div>
                                <a className='text-[14px] mt-16 md:mt-0 border-[#5952e4] border-[1px] bg-transparent rounded-[30px] font-semibold py-[1px] px-4 text-[#5952e4] hover:bg-[#5952e4] hover:text-white duration-300' href="#">Basın kitini indir</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MainPressKit