import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, Target, Info, ChevronLeft, PlayCircle, CheckCircle2 } from 'lucide-react';
import plansData from '../data/workout_plans.json';
import exercisesData from '../data/exercises.json';

export default function ProgramDetail() {
  const { id } = useParams<{ id: string }>();
  const plan = plansData.find(p => p.id === id);

  if (!plan) {
    return <Navigate to="/programs" replace />;
  }

  // Helper to get exercise details
  const getExercise = (exerciseId: string) => {
    return exercisesData.find(e => e.id === exerciseId);
  };

  return (
    <div className="py-12 bg-zinc-950 min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <Link 
          to="/programs" 
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-8 group"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Programs
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-extrabold text-white mb-6">{plan.name}</h1>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              {plan.description}
            </p>

            <div className="space-y-12">
              {/* Warmup Section */}
              <section>
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="bg-primary/20 text-primary p-1.5 rounded-lg">
                    <Clock className="w-5 h-5" />
                  </span>
                  Warmup Routine
                </h2>
                <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6">
                  <ul className="space-y-4">
                    {plan.warmup.map((step, index) => (
                      <li key={index} className="flex items-start gap-4 text-zinc-300">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Exercises Section */}
              <section>
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="bg-primary/20 text-primary p-1.5 rounded-lg">
                    <Target className="w-5 h-5" />
                  </span>
                  Exercises & Workout
                </h2>
                <div className="space-y-4">
                  {plan.exercises.map((workoutExercise, index) => {
                    const exercise = getExercise(workoutExercise.exercise_id);
                    return (
                      <div 
                        key={index} 
                        className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6 hover:border-zinc-700 transition-all group"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center text-zinc-600 group-hover:text-primary transition-colors">
                              <PlayCircle className="w-6 h-6" />
                            </div>
                            <div>
                              <h3 className="text-white font-bold">{exercise?.name || workoutExercise.exercise_id}</h3>
                              <p className="text-zinc-500 text-xs uppercase tracking-widest">{exercise?.category}</p>
                            </div>
                          </div>
                          <div className="flex gap-4">
                            <div className="bg-zinc-950 px-4 py-2 rounded-xl border border-zinc-800">
                              <p className="text-[10px] text-zinc-500 uppercase font-bold mb-0.5">Sets</p>
                              <p className="text-white font-bold">{workoutExercise.sets}</p>
                            </div>
                            <div className="bg-zinc-950 px-4 py-2 rounded-xl border border-zinc-800">
                              <p className="text-[10px] text-zinc-500 uppercase font-bold mb-0.5">Reps</p>
                              <p className="text-white font-bold">{workoutExercise.reps}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-zinc-800/50">
                          <div className="flex items-start gap-2 text-zinc-400 text-sm italic">
                            <Info className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                            <p>{workoutExercise.coaching_note}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Cooldown Section */}
              <section>
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="bg-primary/20 text-primary p-1.5 rounded-lg">
                    <CheckCircle2 className="w-5 h-5" />
                  </span>
                  Cooldown & Recovery
                </h2>
                <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6">
                  <ul className="space-y-4">
                    {plan.cooldown.map((step, index) => (
                      <li key={index} className="flex items-start gap-4 text-zinc-300">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-600 flex-shrink-0" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 sticky top-24">
              <h3 className="text-lg font-bold text-white mb-6">Program Info</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest block mb-2">Difficulty</label>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                    plan.difficulty === 'Beginner' ? 'bg-green-500/10 text-green-500' :
                    plan.difficulty === 'Intermediate' ? 'bg-blue-500/10 text-blue-500' :
                    'bg-purple-500/10 text-purple-500'
                  }`}>
                    {plan.difficulty}
                  </span>
                </div>
                
                <div>
                  <label className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest block mb-2">Frequency</label>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm">{plan.frequency}</span>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest block mb-2">Schedule</label>
                  <div className="space-y-2">
                    {Object.entries(plan.schedule).map(([day, focus]) => (
                      <div key={day} className="flex justify-between items-center text-sm">
                        <span className="text-zinc-500">{day}</span>
                        <span className="text-zinc-300 font-medium">{focus}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-800">
                  <button 
                    onClick={() => alert('Feature coming soon: Progress Tracking!')}
                    className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-primary/20"
                  >
                    Start Program
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
