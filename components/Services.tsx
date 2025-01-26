import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // Import correto
import 'swiper/css';
import 'swiper/css/navigation';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Doctor from './subc/Doctor';
import Line from './subc/Line';

const services = [
    {
        image: "1.jpg",
        title: "Fisioestética",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi nisi odit quaerat fugiat doloribus, error sint saepe nemo.",
        link: ""
    },
    {
        image: "1.jpg",
        title: "Massagem Terapêutica",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laborum temporibus architecto, dolore autem.",
        link: ""
    },
    {
        image: "1.jpg",
        title: "Terapia Relaxante",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, doloribus? Sit odit voluptates fugiat.",
        link: ""
    },
    {
        image: "1.jpg",
        title: "Acupuntura",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quae nulla magni tempore nisi.",
        link: ""
    }
];

export default function Services() {
    return (
        <section id='services' className="pt-20">
            <div className="maxW">
                <h5 className="uppercase text-center text-BlueS font-bold relative flex items-center justify-center tracking-wider">
                    <span className="line w-10 h-[2px] bg-BlueS mr-4 "></span>
                    Nossos Serviços
                    <span className="line w-10 h-[2px] bg-BlueS ml-4"></span>
                </h5>
                <h1 className="text-4xl text-BlueP mt-6 font-black text-center uppercase tracking-widest">
                    Tratamentos com terapia
                </h1>

                {/* CONTAINER SLIDER */}
                <Swiper
                    spaceBetween={30}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        1024: {
                            slidesPerView: 3,
                        }
                    }}
                    navigation={{
                        prevEl: '.custom-prev',
                        nextEl: '.custom-next',
                    }}
                    modules={[Navigation]} // Ativação do módulo
                    className="mt-20 max-w-[1220px]"
                >
                    {services.map((service, index) => (
                        <SwiperSlide key={index}>
                            <div className="max-w-[369px] h-[400px] border-b-2 border-BlueP mx-auto">
                                <img src={service.image} alt={service.title} />
                                <h1 className="text-BlueP uppercase font-bold text-xl mt-2">{service.title}</h1>
                                <p className="mt-2">{service.description}</p>
                                <div className="mt-4 mb-2">
                                    <a className="uppercase text-RedP font-semibold" href={service.link}>
                                        Saiba mais
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Setas de navegação conectadas ao Swiper */}
                <article className="flex items-center gap-2 justify-center my-10">
                    <div
                        className="custom-prev border-BlueS border rounded-full hover:bg-white hover:border-none cursor-pointer"
                    >
                        <MdOutlineKeyboardArrowLeft className="text-4xl text-BlueS hover:text-BlueP" />
                    </div>
                    <div
                        className="custom-next border border-BlueS rounded-full hover:bg-white hover:border-none cursor-pointer"
                    >
                        <MdOutlineKeyboardArrowRight className="text-4xl text-BlueS hover:text-BlueP" />
                    </div>
                </article>
            </div>
            <Doctor />
            <Line />

        </section>
    );
}
