import React from 'react'

const MainReferance = () => {
    return (
        <div className='w-full mt-36 flex items-center justify-center container mx-auto'>
            <div className='w-[1170px] mx-3 sm:mx-[70px] md:mx-0'>
                <h2 className='w-full text-[24px] lg:text-4xl text-start md:text-center text-[#24242a] font-semibold'>İş Birliklerimiz</h2 >
                <div className='mt-[3.125rem] p-8 shadow-cartShodow rounded-[10px] grid grid-cols-1  md:grid-cols-2'>

                    <div className='flex items-center justify-center'>
                        <img className='min-w-[150px] w-[50%] mx-auto block' src="https://www.tomya.com/assets/img/subpages/sub/BCTR-logo.png" />
                    </div>
                    <p className="text-sm flex justify-center items-center mt-5 leading-[22px]">
                        Tomya Teknoloji A.Ş. olarak kripto ekosisteminde faaliyetlerimize hız kesmeden devam ediyoruz. Türkiye’de sürdürülebilir blockchain ekosistemi oluşturan, bu teknoloji ile yeni dönem iş yapış biçimlerinin önündeki zorlukların giderilmesine yönelik çalışmaları bulunan Blockchain Türkiye Platformu'na platin üye olduk.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default MainReferance