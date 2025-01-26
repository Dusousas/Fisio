import React from 'react';

export default function Form() {
    return (
        <>
            <section id='contact' className='py-20'>
                <div className='maxW flex flex-col items-center gap-10 lg:flex-row'>

                    <article className='pt-10 w-full lg:w-[50%]'>
                        <h1 className='text-4xl text-BlueP font-black mt-2 text-center lg:text-left'>Entre em contato conosco</h1>
                        <p className='font-semibold text-lg mt-8'>(14)91234-1234</p>
                        <p className='text-lg'>contato@agenciayouon.con</p>
                        <p className='mt-8 text-lg'>Avenida Rui Barbosa, Brotas - SP</p>
                        <p className='mt-8 text-lg font-semibold'>Horário de funcionamento:</p>
                        <p className='text-lg'>Das 08h às 18h, de segunda a sexta</p>
                    </article>

                    <article className='w-full lg:w-[50%] '>
                        <form className='w-full pt-10 flex flex-col gap-6' action="">
                            <div className='w-full flex gap-6'>
                                <input className='focus:border-b focus:border-[#ff3838]' placeholder='Nome' type="text" />
                                <input className='focus:border-b focus:border-[#ff3838]' placeholder='E-mail' type="text" />
                            </div>
                            <div className='w-full flex gap-6'>
                                <input className='focus:border-b focus:border-[#ff3838]' placeholder='Telefone' type="text" />
                                <input className='focus:border-b focus:border-[#ff3838]' placeholder='Assunto' type="text" />
                            </div>
                            <textarea className='border-b border-BlueP p-1 outline-none resize-none h-[100px] focus:border-b focus:border-[#ff3838]' placeholder='Mensagem' name="" id=""></textarea>
                            <div className='mt-8'>
                                <a className='bg-RedP text-white font-medium uppercase tracking-wider px-6 py-2 rounded-full' href="">Enviar</a>
                            </div>
                        </form>
                    </article>

                </div>
            </section>
        </>
    );
}
