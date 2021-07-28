import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import tailwind from '../assets/tailwindcss.svg';
import framermotion from '../assets/framer.svg';

type BrandRouteParams = {
  brand: string;
}

type Images = {
  [index: string]: string;
}

type Links = {
  [index: string]: string;
}

export function Brand() {
  const { brand } = useParams<BrandRouteParams>();

  const images: Images = {
    tailwind,
    framermotion,
  };

  const links: Links = {
    tailwind: 'https://tailwindcss.com/',
    framermotion: 'https://www.framer.com/motion/',
  }

  const childrenAnimation = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 1,
        ease: "easeIn",
        duration: .5,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }

  return (
    <main>
      <div className="flex justify-center mt-12">
        {
          images[brand] && (
            <motion.img
              src={images[brand]}
              alt={`${brand} brand logo`}
              className="w-32 mb-4"
              layoutId={brand}
            />
          )
        }
      </div>
      <motion.a
        initial="hidden"
        animate="visible"
        variants={childrenAnimation}
        href={links[brand]}
        className="block text-center no-underline hover:underline text-indigo-600 text-xl"
      >
        Documentation
      </motion.a>
    </main>
  )
}