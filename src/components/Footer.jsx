import React from 'react'
import FooterMenu from './FooterMenu';
import FooterMenu2 from './FooterMenu2';
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaTwitter, FaYoutube } from 'react-icons/fa';
const Footer = () => {

    const footerArr = [
        {
            title: "Kurumsal",
            icerik: [
                { title: 'Kullanıcı Sözleşmesi' },
                { title: 'Gizlilik ve Çerez Politikası' },
                { title: 'Kişisel Verilerin Korunması' },
                { title: 'Açık Rıza Ve Dijital İletişim İzni Beyanı' },
                { title: 'Hakkımızda' },
                { title: 'İletişim' },
            ]
        },
        {
            title: "Kullanıcılar için",
            icerik: [
                { title: 'Blog' },
                { title: 'Basında Biz' },
                { title: 'Sıkça Sorulan Sorular' },
                { title: 'Kripto Hesaplayıcı' },
                { title: 'Kripto Sözlük' },
                { title: 'Duyurular' },
                { title: 'Limitler' },
                { title: 'Para Yatırma ve Çekme Platformları' },
                { title: 'Kara Para Aklamayı Önleme Politikası' },
                { title: 'Müşterini Tanı (KYC) Politikası' },
            ]
        },


    ];

    const footerArr2 = [

        {
            title: "Kripto paralar",
            icerik: [
                { title: 'Bitcoin' },
                { title: 'Dogecoin' },
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
        },
        {
            title: "Rehber",
            icerik: [
                { title: 'Bitcoin al' },
                { title: 'Dogecoin al' },
                { title: 'Ethereum al' },
                { title: 'Cardano al' },
                { title: 'Ripple al' },
                { title: 'NEO al' },
                { title: 'Litecoin al' },
                { title: 'Chiliz al' },
                { title: 'Tether al' },
                { title: 'Holochain al' },
                { title: 'Chainlink al' },
                { title: 'BitTorrent Chain al' },
                { title: 'Polkadot al' },
                { title: 'Decentraland al' },
                { title: 'Avalanche al' },
                { title: 'The Sandbox al' },
                { title: 'Binance Coin al' },
                { title: 'Shiba Inu al' },
                { title: 'Pancakeswap al' },
                { title: 'Polygon al' },
                { title: 'Solana al' },
                { title: 'PAX Gold al' },
                { title: 'NEAR Protocol al' },
                { title: 'Cosmos al' },
                { title: 'ApeCoin al' },
                { title: 'Enjin Coin al' },
                { title: 'Uniswap al' },
                { title: 'VeChain al' },
                { title: 'Fantom al' },
                { title: 'THORChain  al' },
                { title: 'Curve DAO al' },
                { title: 'Oasis Network al' },
                { title: 'Ethereum Classic al' },
            ]
        }

    ];

    return (
        <footer className='w-full bg-[#131416] '>
            <div className=' pt-40   flex items-center justify-center w-full container mx-auto'>
                <div className='w-[1170px] px-0 mx-3 sm:mx-[70px] md:mx-0'>
                    <div className=' lg:flex lg:justify-center border-b-[1px] border-[#eeeff61a]'>
                        <div className='grid lg:grid-cols-2 w-50%'>
                            {
                                footerArr.map((item, idx) => <FooterMenu key={idx} title={item.title} icerik={item.icerik} />)
                            }

                        </div>
                        <div className='lg:grid lg:grid-cols-2 w-50%'>
                            {
                                footerArr2.map((item, idx) => <FooterMenu2 key={idx} title={item.title} icerik={item.icerik} />)
                            }

                        </div>
                    </div>
                    <div>
                        <div className='flex items-start lg:items-center justify-between mt-24 flex-col lg:flex-row'>
                            <div className='text-xs text-[#eeeff6]'>
                                <h6 className='leading-snug'>
                                    TOMYA TEKNOLOJİ A.Ş. <br />
                                    Maslak Mah. Saat Sok. Spine Tower No: 5/10,<br />
                                    Sarıyer / İstanbul
                                </h6>
                                <br />
                                <h6>Tel: 0(212) 807 10 71(72-73)</h6>
                            </div>
                            <div className='flex lg:justify-center items-center gap-7 text-white mt-7 lg:mt-0'>
                                <a href="#" className='hover:mb-2 duration-200'><FaFacebookF size={20} /></a>
                                <a href="#" className='hover:mb-2 duration-200'><FaTwitter size={20} /></a>
                                <a href="#" className='hover:mb-2 duration-200'><FaInstagram size={20} /></a>
                                <a href="#" className='hover:mb-2 duration-200'><FaTelegramPlane size={20} /></a>
                                <a href="#" className='hover:mb-2 duration-200'><FaYoutube size={20} /></a>
                            </div>
                        </div>
                        <div className='text-[#eeeff680] text-xs flex items-start pt-[1.875rem] pb-[7.5rem]'>
                            <h6 className='leading-snug'>
                                Tüm Hakları Saklıdır. © 2021 - TOMYA <br />
                                TOMYA TEKNOLOJİ A.Ş. <br />
                                Mersis No: 0850062440300001

                            </h6>
                        </div>
                    </div>
                </div>

            </div>

        </footer>
    )
}

export default Footer