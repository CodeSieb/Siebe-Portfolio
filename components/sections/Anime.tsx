import React from 'react';
import { motion } from 'framer-motion';

const Anime: React.FC = () => {
  const animes = [
    {
      title: "One Piece",
      genre: "Adventure / Shonen",
      // Using a stylized placeholder gradient since we can't fetch external images reliably without CORS issues sometimes, 
      // but configured to accept an image URL.
      image: "https://picsum.photos/seed/onepiece/400/600",
      color: "from-red-600 to-orange-600"
    },
    {
      title: "Classroom of the Elite",
      genre: "Psychological Thriller",
      image: "https://picsum.photos/seed/elite/400/600",
      color: "from-purple-600 to-indigo-600"
    }
  ];

  return (
    <section id="anime">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
        FAVORITE <span className="text-neon-cyan">ANIME</span>
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
        {animes.map((anime, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group relative w-full md:w-80 h-[450px] rounded-xl overflow-hidden cursor-pointer"
          >
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 bg-slate-800">
               <img 
                 src={anime.image} 
                 alt={anime.title} 
                 className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
               />
            </div>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
            
            {/* Neon Border on Hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-neon-cyan/50 transition-colors duration-300 rounded-xl" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <div className={`h-1 w-12 mb-4 bg-gradient-to-r ${anime.color}`} />
              <h3 className="text-2xl font-bold font-display text-white mb-1">{anime.title}</h3>
              <p className="text-sm text-slate-300 font-mono">{anime.genre}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Anime;