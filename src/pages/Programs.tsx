import { Link } from 'react-router-dom';
import { Calendar, ChevronRight, Zap, Target, Info } from 'lucide-react';
import plansData from '../data/workout_plans.json';

export default function Programs() {
  return (
    <div className="py-16 bg-zinc-950 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-extrabold text-white mb-6">Training Programs</h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Follow our structured workout plans designed to take you from your current level to elite calisthenics performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plansData.map((plan) => (
            <div key={plan.id} className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 flex flex-col hover:border-primary/50 transition-all group">
              <div className="mb-6">
                <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 ${
                  plan.difficulty === 'Beginner' ? 'bg-green-500/10 text-green-500 border border-green-500/20' :
                  plan.difficulty === 'Intermediate' ? 'bg-blue-500/10 text-blue-500 border border-blue-500/20' :
                  'bg-purple-500/10 text-purple-500 border border-purple-500/20'
                }`}>
                  {plan.difficulty}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{plan.name}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3 mb-6">
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-center gap-3 text-zinc-400 text-sm">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>{plan.frequency}</span>
                </div>
                <div className="flex items-start gap-3 text-zinc-400 text-sm">
                  <Target className="w-4 h-4 text-primary mt-1" />
                  <div>
                    <span className="block font-medium text-zinc-300">Target Goals:</span>
                    <span className="text-xs">{plan.exercises.length} exercises included</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-zinc-400 text-sm">
                  <Info className="w-4 h-4 text-primary mt-1" />
                  <div>
                    <span className="block font-medium text-zinc-300">Warmup included:</span>
                    <span className="text-xs">{plan.warmup.length} steps</span>
                  </div>
                </div>
              </div>

              <Link 
                to={`/programs/${plan.id}`}
                className="w-full bg-zinc-800 hover:bg-primary text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all"
              >
                View Full Plan <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          ))}
        </div>

        {/* Pro Tip Section */}
        <div className="mt-20 bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="bg-primary/10 p-6 rounded-2xl">
              <Zap className="w-12 h-12 text-primary" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white mb-2">Not sure where to start?</h4>
              <p className="text-zinc-400 leading-relaxed max-w-2xl">
                We recommend starting with the Beginner Foundation program if you cannot yet perform 5 strict pull-ups and 10 parallel bar dips. Building a solid base is critical for long-term progress and injury prevention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
