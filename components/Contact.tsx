import React from 'react';
import Form from './subc/Form';

export default function Contact() {
    return (
        <>
            <section className='py-20'>
                <div className='maxW'>
                    <h5 className="uppercase text-center text-BlueS font-bold relative flex items-center justify-center tracking-wider">
                        <span className="line w-10 h-[2px] bg-BlueS mr-4 "></span>
                        Contato
                        <span className="line w-10 h-[2px] bg-BlueS ml-4"></span>
                    </h5>
                    <h1 className="text-4xl text-BlueP mt-6 font-black text-center uppercase tracking-widest">
                        Onde estamos?
                    </h1>

                    <iframe className='w-full h-[400px] mt-10' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467690.1437797852!2d-46.9249440026068!3d-23.68206358144494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1737910055159!5m2!1spt-BR!2sbr" width="0" height="0" />
                    <Form />
                </div>
            </section>
        </>
    );
}