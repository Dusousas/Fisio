import React from 'react';
import Navbar from './subc/Navbar';

export default function Header() {
    return (
        <>
            <header className='py-10 bg-BlueP z-50 relative'>
                <div className='maxW flex justify-between items-center'>
                    <article className='z-30'>
                        <h1 className='uppercase text-white font-semibold text-2xl'>Clínica</h1>
                    </article>
                    <Navbar />
                </div>
            </header>

        </>
    );
}