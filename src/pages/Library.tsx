import { useState } from 'react';
import { Search, Play, Clock, BarChart } from 'lucide-react';

const MOCK_WORKOUTS = [
  {
    id: '1',
    title: 'Perfect Pull-up Form',
    category: 'Foundations',
    level: 'Beginner',
    duration: '5 min',
    thumbnail: 'https://images.unsplash.com/photo-1598971639058-fab3c043ff38?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: '2',
    title: 'Muscle-up Progression',
    category: 'Skills',
    level: 'Intermediate',
    duration: '12 min',
    thumbnail: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: '3',
    title: 'Planche Strength',
    category: 'Statics',
    level: 'Advanced',
    duration: '15 min',
    thumbnail: 'https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: '4',
    title: 'Handstand Balance',
    category: 'Skills',
    level: 'Beginner',
    duration: '8 min',
    thumbnail: 'https://images.unsplash.com/photo-1544033527-b192daee1f5b?w=800&auto=format&fit=crop&q=60',
  },
];

export default function Library() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredWorkouts = MOCK_WORKOUTS.filter(w => 
    (filter === 'All' || w.category === filter) &&
    w.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="py-12 bg-zinc-950 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Workout Library</h1>
            <p className="text-zinc-500">Master every move with our expert-led demonstrations.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input 
                type="text" 
                placeholder="Search exercises..."
                className="bg-zinc-900 border border-zinc-800 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-primary transition-colors w-full sm:w-64"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex bg-zinc-900 p-1 rounded-lg border border-zinc-800 overflow-x-auto">
              {['All', 'Foundations', 'Skills', 'Statics'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-all ${
                    filter === cat ? 'bg-primary text-white shadow-lg' : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredWorkouts.map((workout) => (
            <div key={workout.id} className="group bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={workout.thumbnail} 
                  alt={workout.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-primary p-3 rounded-full text-white transform scale-90 group-hover:scale-100 transition-transform shadow-xl shadow-primary/20">
                    <Play className="w-6 h-6 fill-current" />
                  </div>
                </div>
                <div className="absolute top-2 left-2 flex gap-2">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                    workout.level === 'Beginner' ? 'bg-green-500/20 text-green-500 border border-green-500/30' :
                    workout.level === 'Intermediate' ? 'bg-blue-500/20 text-blue-500 border border-blue-500/30' :
                    'bg-purple-500/20 text-purple-500 border border-purple-500/30'
                  }`}>
                    {workout.level}
                  </span>
                </div>
              </div>
              <div className="p-5 flex-grow">
                <span className="text-primary text-[10px] font-bold uppercase tracking-widest mb-1 block">{workout.category}</span>
                <h3 className="text-white font-bold mb-4 group-hover:text-primary transition-colors line-clamp-1">{workout.title}</h3>
                <div className="flex items-center justify-between text-zinc-500 text-xs">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{workout.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BarChart className="w-3.5 h-3.5" />
                    <span>{workout.level}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredWorkouts.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-zinc-500">No exercises found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
