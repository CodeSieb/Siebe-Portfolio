import React from 'react';
import { motion } from 'framer-motion';
import { Book, Film, Tv } from 'lucide-react';
import NeonCard from '../ui/NeonCard';
import { MediaItem } from '../../types';

const Media: React.FC = () => {
  const books: MediaItem[] = [
    {
      title: "Harry Potter Series",
      creator: "J.K. Rowling",
      type: "Fantasy",
      image: "https://images.unsplash.com/photo-1618666012174-83b441c0bc76?auto=format&fit=crop&q=80&w=400" 
    },
    {
      title: "Throne of Glass",
      creator: "Sarah J. Maas",
      type: "High Fantasy",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400"
    }
  ];

  const watchList: MediaItem[] = [
    {
      title: "Avatar: The Last Airbender",
      creator: "Animation / Series",
      type: "Adventure",
      image: "https://images.unsplash.com/photo-1542261777421-e5666d6fafc2?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "HP: Sorcerer's Stone",
      creator: "Movie",
      type: "Fantasy",
      image: "https://images.unsplash.com/photo-1598153346810-860daa814c4b?auto=format&fit=crop&q=80&w=400"
    }
  ];

  const MediaCard: React.FC<{ item: MediaItem; delay: number; icon: React.ReactNode; color: string }> = ({ item, delay, icon, color }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: delay }}
      className="group relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-neon-purple transition-all duration-300"
    >
      <div className="absolute top-3 right-3 z-20 p-2 bg-black/50 backdrop-blur rounded-full text-white">
        {icon}
      </div>
      
      <div className="h-48 overflow-hidden relative">
        <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10`} />
        {/* Placeholder images are used, but styled to look cohesive */}
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-80"
        />
      </div>

      <div className="p-5 relative z-20 -mt-12">
        <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-neon-cyan transition-colors">{item.title}</h3>
        <p className="text-sm text-slate-300 font-medium mb-2">{item.creator}</p>
        <span className={`text-xs font-mono px-2 py-1 rounded bg-white/5 border border-white/10 ${color}`}>
          {item.type}
        </span>
      </div>
    </motion.div>
  );

  return (
    <section id="media" className="space-y-12">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold">
          FAVORITE <span className="text-neon-purple">MEDIA</span>
        </h2>
        <p className="text-slate-400 mt-2">The stories that inspire me.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Movies & Series */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-2">
            <Film className="text-neon-cyan" />
            <h3 className="text-xl font-bold font-display">MOVIES & SERIES</h3>
          </div>
          <div className="grid gap-6">
            {watchList.map((item, idx) => (
              <MediaCard 
                key={idx} 
                item={item} 
                delay={idx * 0.1} 
                icon={item.title.includes('Movie') ? <Film size={16}/> : <Tv size={16}/>}
                color="text-neon-cyan"
              />
            ))}
          </div>
        </div>

        {/* Books */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-2">
            <Book className="text-neon-purple" />
            <h3 className="text-xl font-bold font-display">BOOKS</h3>
          </div>
          <div className="grid gap-6">
            {books.map((item, idx) => (
               <MediaCard 
               key={idx} 
               item={item} 
               delay={0.2 + (idx * 0.1)} 
               icon={<Book size={16}/>}
               color="text-neon-purple"
             />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media;