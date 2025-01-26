import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Doctor() {
    return (
        <>
            <section className='bannerDR py-20'>
                <div className='maxW flex h-full justify-end '>
                    <div className='py-8 lg:w-[55%]'>
                        <h5 className="uppercase text-BlueS font-bold relative flex items-center tracking-wide"><span className="line w-10 h-[2px] bg-BlueS mr-2 "></span>Conheça o doutor</h5>
                        <h1 className='text-4xl text-BlueP font-black tracking-widest mt-2' >Dr. Fulano Silva</h1>
                        <p className='text-xl font-medium'>Minha experiência</p>
                        <p className='mt-4 max-w-[70%] text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quo deserunt quae commodi natus obcaecati harum, odio porro velit rerum, corrupti eum tenetur voluptate consectetur eos minima, consequuntur quibusdam repudiandae fugiat? Tempore suscipit consectetur quam, ad et eos dicta possimus.</p>
                        <div className='flex gap-2 mt-3'>
                            <a href=""><FaInstagram className='text-2xl text-BlueS' /></a>
                            <a href=""><FaWhatsapp className='text-2xl text-BlueS' /></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}