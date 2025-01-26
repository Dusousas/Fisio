import React from 'react';
import { SiVerizon } from 'react-icons/si';

export default function About() {
    return (
        <>
            <section id='about' className='bg-BlueP py-20'>
                <div className='maxW flex flex-col items-center justify-center gap-20 lg:flex-row'>

                    <article className='flex items-end justify-center w-full gap-4 lg:w-[40%] lg:justify-start'>
                        <div><img src="About1.jpg" alt="" /></div>
                        <div><img src="About2.jpg" alt="" /></div>
                    </article>

                    <article className='w-full flex flex-col items-center lg:w-[60%] lg:items-start '>
                        <h5 className='text-RedP uppercase text-2xl font-bold'>Bem vindo à</h5>
                        <h5 className='text-RedP uppercase text-2xl font-bold'>Clinica JB</h5>
                        <h1 className='text-4xl text-white mt-8 max-w-[80%]'>Por que somos a melhor clínica de fisioterapia da região?</h1>
                        <p className='font-medium mt-4 text-xl text-white max-w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsam saepe, hic necessitatibus minus mollitia!</p>
                        <p className='mt-8  text-white max-w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quisquam commodi nesciunt quo dolore debitis incidunt vel architecto culpa, voluptatem harum accusamus, totam delectus perferendis facere aliquam mollitia numquam reiciendis sequi ratione sint. Explicabo veritatis libero, aut qui alias sapiente.</p>

                        <div className='flex gap-8 mt-8'>
                            <div className='flex flex-col gap-4'>
                                <p className='flex items-center gap-2 text-white font-medium'><SiVerizon className='text-RedP' />100% Satisfação Garantida</p>
                                <p className='flex items-center gap-2 text-white font-medium'><SiVerizon className='text-RedP' />100% Satisfação Garantida</p>
                            </div>

                            <div className='flex flex-col gap-4'>
                                <p className='flex items-center gap-2 text-white font-medium'><SiVerizon className='text-RedP' />100% Satisfação Garantida</p>
                                <p className='flex items-center gap-2 text-white font-medium'><SiVerizon className='text-RedP' />100% Satisfação Garantida</p>
                            </div>
                        </div>


                    </article>
                </div>
            </section>
        </>
    );
}