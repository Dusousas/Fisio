import React from 'react';

const data = [
  {
    value: '1700+',
    label: 'Clientes Felizes',
    image: 'cliente.png',
  },
  {
    value: '100%',
    label: 'Clientes Felizes',
    image: 'cliente.png',
  },
  {
    value: '27+',
    label: 'Clientes Felizes',
    image: 'cliente.png',
  },
  {
    value: '10+',
    label: 'Anos de Experiência',
    image: 'cliente.png',
  },
];

export default function Line() {
  return (
    <section className='py-20'>
      <div className='maxW flex flex-col justify-center items-center gap-20 lg:flex-row'>
        {data.map((item, index) => (
          <div key={index} className='flex items-center justify-center gap-4'>
            <img src={item.image} alt={item.label} />
            <div>
              <p className='text-5xl text-BlueP font-bold'>{item.value}</p>
              <p className='text-lg font-bold'>{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
