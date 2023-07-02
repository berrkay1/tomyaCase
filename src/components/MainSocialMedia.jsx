import React from 'react'

const MainSocialMedia = () => {
    return (
        <div className='w-full pt-[215px] flex items-center justify-center container mx-auto '>
            <div className='w-[1170px] flex justify-center flex-col lg:flex-row xl:px-24 px-0 mx-3 sm:mx-[70px] md:mx-0'>
                <div className='lg:flex-0 flex lg:max-w-[50%]  flex-col lg:pr-[2.5rem] xl:pr-[2rem] xl:pl-[1.563rem] '>
                    <h2 className='w-full text-2xl lg:text-4xl font-semibold sosialh2 mb-5'>TOMYA'yı Sosyal Medyada Takip Edin</h2>
                    <h3 className='text-xl lg:text-2xl font-normal sosialh3'>Dijital para borsalarındaki diğer yatırımcılarla bağlantı kurmak, promosyonlar hakkında bilgi almak ve yatırım stratejilerini tartışmak için TOMYA'yı sosyal medya üzerinden takip edebilirsiniz.</h3>
                    <a href="#" className='mt-9 hidden lg:block'>
                        <img src="https://www.tomya.com/assets/img/subpages/sub/followTwitter.svg" />
                    </a>
                </div>
                <div className='w-full flex-col lg:flex-row lg:flex-0 flex lg:max-w-[50%] items-start lg:items-center lg:justify-center  px-5 lg:px-0 mt-[2.5rem] lg:mt-0'>
                    <img className='w-full max-w-[445px]' src="https://www.tomya.com/assets/img/subpages/sub/img_twitter_social.png" />
                    <a href="#" className='mt-[0.635rem] block lg:hidden'>
                        <img src="https://www.tomya.com/assets/img/subpages/sub/followTwitter.svg" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MainSocialMedia