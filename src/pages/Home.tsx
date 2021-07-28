import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import tailwind from '../assets/tailwindcss.svg';
import framermotion from '../assets/framer.svg';

export function Home() {
  const brands = [
    {
      name: 'tailwind',
      img: tailwind,
    },
    {
      name: 'framermotion',
      img: framermotion,
    },
  ];

  return (
    <main className="w-screen h-screen">
      <ul className="w-full h-full flex flex-column justify-center items-center">
        {
          brands.map(brand => {
            return (
              <li key={brand.name} className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 first:mr-4">
                <Link to={`/brand/${brand.name}`}>
                  <motion.img
                    src={brand.img}
                    alt={`${brand.name} brand logo`}
                    className="w-14"
                    layoutId={brand.name}
                  />
                </Link>
              </li>
            );
          })
        }
      </ul>
    </main>
  )
}
