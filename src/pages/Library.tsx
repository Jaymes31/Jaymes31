import { useState } from 'react';
import { Search, Play, Clock, BarChart } from 'lucide-react';
import exercisesData from '../data/exercises.json';
import ExerciseModal from '../components/ExerciseModal';

export default function Library() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [selectedExercise, setSelectedExercise] = useState<any>(null);

  // Extract unique categories from data
  const categories = ['All', ...new Set(exercisesData.map(e => e.category))];

  const filteredExercises = exercisesData.filter(e => 
    (filter === 'All' || e.category === filter) &&
    (e.name.toLowerCase().includes(search.toLowerCase()) || 
     e.description.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="py-12 bg-zinc-950 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Exercise Library</h1>
            <p className="text-zinc-500">Master every move with step-by-step progressions.</p>
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
            <div className="flex bg-zinc-900 p-1 rounded-lg border border-zinc-800 overflow-x-auto max-w-full sm:max-w-md lg:max-w-none">
              {categories.map((cat) => (
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredExercises.map((exercise) => (
            <div 
              key={exercise.id} 
              onClick={() => setSelectedExercise(exercise)}
              className="group bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden bg-zinc-800">
                {/* Fallback for missing thumbnails since we don't have images yet */}
                <div className="w-full h-full flex items-center justify-center text-zinc-700 group-hover:scale-105 transition-transform duration-500">
                  <Play className="w-12 h-12 opacity-20" />
                </div>
                
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-primary p-3 rounded-full text-white transform scale-90 group-hover:scale-100 transition-transform shadow-xl shadow-primary/20">
                    <Play className="w-6 h-6 fill-current" />
                  </div>
                </div>
                <div className="absolute top-2 left-2 flex gap-2">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                    exercise.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-500 border border-green-500/30' :
                    exercise.difficulty === 'Intermediate' ? 'bg-blue-500/20 text-blue-500 border border-blue-500/30' :
                    'bg-purple-500/20 text-purple-500 border border-purple-500/30'
                  }`}>
                    {exercise.difficulty}
                  </span>
                </div>
              </div>
              <div className="p-5 flex-grow">
                <span className="text-primary text-[10px] font-bold uppercase tracking-widest mb-1 block">{exercise.category}</span>
                <h3 className="text-white font-bold mb-2 group-hover:text-primary transition-colors line-clamp-1">{exercise.name}</h3>
                <p className="text-zinc-500 text-xs line-clamp-2 mb-4 h-8">{exercise.description}</p>
                <div className="flex items-center justify-between text-zinc-500 text-[10px] pt-4 border-t border-zinc-800">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    <span>{exercise.movement_type}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BarChart className="w-3 h-3" />
                    <span>Order: {exercise.progression_order}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredExercises.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-zinc-500">No exercises found matching your criteria.</p>
            <button 
              onClick={() => {setSearch(''); setFilter('All');}}
              className="text-primary hover:underline mt-2 text-sm"
            >
              Clear all filters
            </button>
          </div>
        )}

        <ExerciseModal 
          exercise={selectedExercise} 
          onClose={() => setSelectedExercise(null)} 
        />
      </div>
    </div>
  );
}
