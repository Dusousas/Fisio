import React, { useState } from 'react';

export default function Ask() {
    const [openIndex, setOpenIndex] = useState<number | null>(null); // Estado para controlar o índice aberto

    const toggleDetails = (index: number) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index)); // Alterna entre abrir e fechar
    };

    const questionsAndAnswers = [
        {
            question: "What is Lorem Ipsum?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
            question: "Why do we use it?",
            answer: "It is a long established fact that a reader will be distracted by the readable content.It is a long established fact that a reader will be distracted by the readable content.",
        },
        {
            question: "Where does it come from?",
            answer: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
        },
        {
            question: "Where can I get some?",
            answer: "There are many variations of passages of Lorem Ipsum available.",
        },
    ];

    return (
        <section id='ask' className="BannerAsk bg-[#F2F7FB] py-20">
            <div className="maxW ">
                <article className="flex flex-col justify-center items-center gap-10 lg:flex-row">
                    {/* Imagem à esquerda */}
                    <div className=" flex justify-end lg:w-[40%]">
                        <img src="Asked.jpg" alt="FAQ Section" />
                    </div>

                    {/* Perguntas à direita */}
                    <div className=" flex flex-col justify-start gap-8 lg:w-[60%]">
                        {questionsAndAnswers.map((item, index) => (
                            <div key={index} className="border-b  pb-4 lg:max-w-[70%]">
                                <summary
                                    className={`text-3xl font-bold text-BlueP cursor-pointer tracking-wide ${
                                        openIndex === index ? "text-RedP" : ""
                                    }`}
                                    onClick={() => toggleDetails(index)}
                                >
                                    {item.question}
                                </summary>
                                {openIndex === index && (
                                    <p className="pt-6">{item.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </article>
            </div>
        </section>
    );
}
