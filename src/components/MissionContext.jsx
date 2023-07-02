import React from 'react'

const MissionContext = () => {
    return (
        <div className='w-full bg-[#eeeff6] pt-[1220px] -mt-[1120px] md:pt-[600px] md:-mt-[500px] xl:pt-[360px] xl:-mt-[195px]'>
            <div className='flex items-center justify-center w-full container mx-auto'>
                <div className=' w-[1170px]   '>
                    <div className='flex lg:flex-row flex-col-reverse mx-3 sm:mx-[70px] md:mx-0' >
                        <div className='w-auto lg:w-[50%]'>
                            <img className='w-[350px] md:w-[440px] mt-[50px] -mb-[50px] lg:mt-0  lg:w-[632px] lg:-mb-[75px] lg:-mr-[62px]' src="https://www.tomya.com/assets/img/subpages/sub/aboutus-coins.png" alt="" />
                        </div>
                        <div className='lg:w-[50%] flex items-center lg:justify-center'>
                            <div className='flex justify-center  flex-col'>
                                <h2 className='text-[24px] lg:text-[2.20rem] lg:leading-9 font-[600] text-start'>Hizmet misyonumuz</h2>
                                <ul className='list-disc px-4 flex justify-center flex-col'>
                                    <li className='text-[14px] md:text-[18px] mt-[15px]'>Güçlü takım ve işbirliği ile tam hizmet</li>
                                    <li className='text-[14px] md:text-[18px] mt-[11px]'>Üstün teknoloji ürünleri ile 7/2 destek</li>
                                    <li className='text-[14px] md:text-[18px] mt-[11px]'>Güvenilir kaynaklardan en son piyasa bilgileri</li>
                                    <li className='text-[14px] md:text-[18px] mt-[11px]'>Sonuç odaklı araştırma ve strateji planlaması</li>
                                    <li className='text-[14px] md:text-[18px] mt-[11px]'>Yüksek güvenlik ve kişisel verilerin korunması</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>




            </div>

        </div>
    )
}

export default MissionContext