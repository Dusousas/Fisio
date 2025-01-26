import React from 'react';

export default function Main() {
    return (
        <>
            <section id='home' className='bg-BlueP'>
                <div className='justify-between lg:flex'>

                    <article className='hidden w-[12%] justify-center max-h-[90vh] z-0 lg:flex '>
                        <p className='vertical-text uppercase outlined-text ml-4 relative bottom-[-18px]'>Fisio</p>
                    </article>

                    <article className='bannerMain flex w-full items-center justify-center text-center font-black px-32 lg:w-[88%] lg:justify-start lg:text-left'>
                        <div className='relative z-20 lg:max-w-[50%]'>
                            <h1 className='text-5xl text-BlueP tracking-wide'>Fisioterapia personalizada para resultados duradouros.</h1>
                            <p className='font-medium mt-4 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet architecto laborum delectus, sed accusantium officiis vitae earum! </p>
                            <div className='mt-10'>
                                <a className='bg-RedP text-white font-medium uppercase tracking-wider px-4 py-2 rounded-full' href="">Agendar horário</a>
                            </div>
                        </div>
                    </article>


                </div>
            </section>
        </>
    );
}

