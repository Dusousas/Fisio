import React from 'react';

export default function Main() {
    return (
        <>
            <section id='home' className='bg-BlueP'>
                <div className='flex justify-between'>

                    <article className='w-[12%] flex justify-center max-h-[90vh] z-0 '>
                        <p className='vertical-text uppercase outlined-text ml-4 relative bottom-[-18px]'>Fisio</p>
                    </article>

                    <article className='bannerMain w-[88%] flex items-center font-black px-32'>
                        <div className='max-w-[50%] relative z-20'>
                            <h1 className='text-5xl text-BlueP tracking-wide'>Fisioterapia personalizada para resultados duradouros.</h1>
                            <p className='font-medium  mt-4 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet architecto laborum delectus, sed accusantium officiis vitae earum! </p>
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

