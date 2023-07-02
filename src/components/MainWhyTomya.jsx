import React from 'react'

const MainWhyTomya = () => {

    const cartDetail = [
        {
            icon: 'https://www.tomya.com/assets/img/general/ic-selfie.svg',
            title: 'Multi Platform ve Akıllı Arayüz',
            desc: 'Kullanıcı dostu platformumuz ve arayüzlerimiz, her seviyedeki üyemizin tüm işlemlerini en kolay ve en hızlı şekilde yapabilmesi için tasarlandı.'
        },
        {
            icon: 'https://www.tomya.com/assets/img/home/ic-privacy.svg',
            title: 'İki Faktörlü Doğrulama',
            desc: 'TOMYA da iki faktörlü güvenlik doğrulama sistemi uygulanır; kişisel bilgilerinizin ve yatırımlarınızın güvenliği en üst seviyede tutulur.'
        },
        {
            icon: 'https://www.tomya.com/assets/img/general/ic-sellbuy.svg',
            title: 'Hızlı Alım/Satım',
            desc: 'Tomya’nin pratik arayüzü ve gelişmiş mobil özellikleriyle işlemlerinizi dilediğiniz yerden takip etmek çok kolay!'
        },
        {
            icon: 'https://www.tomya.com/assets/img/general/ic-support.svg',
            title: '7/24 Yatırım İşlemleri',
            desc: 'Anlaşmalı olduğumuz bankalar üzerinden para gönderme işlemlerinizi 7/24 gerçekleştirebilirsiniz.'
        }
    ];

    return (
        <div className='pt-[200px] md:pt-[340px] xl:pt-[420px] flex items-center justify-center w-full container mx-auto '>
            <div className=' w-[1170px] '>
                <div className='text-start md:text-center mx-3 sm:mx-[70px] md:mx-0'>
                    <h2 className='text-[24px] lg:text-[2.25rem] font-semibold text-[#24242a] '>Neden Tomya?</h2>
                    <h4 className='text-[16px] lg:text-[1.125rem] mt-5'>Temelleri 2019 yılında atılan TOMYA, Türkiye'nin kapsamlı, güvenilir ve hızlı kripto para borsası olma hedefiyle kuruldu. Mayıs 2020'de üye alımına başlayan TOMYA, Türkiye’nin en yüksek hacimli dijital varlık işlem platformu olmak için yola çıkmıştır.</h4>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-5 mt-20 gap-y-5 xl:gap-y-0 mx-2 sm:mx-[70px] md:mx-0'>
                    {
                        cartDetail.map((item, idx) => (
                            <div key={idx} className='p-[30px] rounded-lg shadow-cartShodow h-[290px] bg-white flex flex-col justify-between items-start' >
                                <img src={item.icon} />
                                <div className='w-full'>
                                    <h4 className='mt-[30px] text-[16px] lg:text-lg font-semibold leading-5 '>{item.title}</h4>
                                    <p className='mt-1 text-sm font-normal leading-5'>{item.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>

        </div>
    )
}

export default MainWhyTomya