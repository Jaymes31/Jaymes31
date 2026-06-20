import { X, CheckCircle2, AlertCircle, Info, Activity, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Exercise {
  id: string;
  name: string;
  category: string;
  difficulty: string;
  description: string;
  form_cues: {
    setup: string;
    execution: string;
    key_cues: string[];
  };
  muscles_targeted: {
    primary: string[];
    secondary: string[];
  };
  common_mistakes: string[];
  progression_criteria: string;
  video_instructions: string;
}

interface ExerciseModalProps {
  exercise: Exercise | null;
  onClose: () => void;
}

export default function ExerciseModal({ exercise, onClose }: ExerciseModalProps) {
  if (!exercise) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden flex flex-col shadow-2xl"
        >
          {/* Header */}
          <div className="p-6 border-b border-zinc-800 flex items-center justify-between sticky top-0 bg-zinc-900 z-10">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-primary text-[10px] font-bold uppercase tracking-widest">{exercise.category}</span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                  exercise.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-500' :
                  exercise.difficulty === 'Intermediate' ? 'bg-blue-500/20 text-blue-500' :
                  'bg-purple-500/20 text-purple-500'
                }`}>
                  {exercise.difficulty}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white">{exercise.name}</h2>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-zinc-800 rounded-full text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column: Video & Muscle Focus */}
              <div className="space-y-8">
                <div className="aspect-video bg-zinc-950 rounded-2xl border border-zinc-800 flex flex-col items-center justify-center text-zinc-500 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                  <Activity className="w-12 h-12 mb-4 opacity-20" />
                  <p className="text-sm font-medium px-8 text-center">{exercise.video_instructions}</p>
                  <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">Demo Video Placeholder</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-primary" />
                    Muscles Targeted
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-zinc-500 mb-2 font-medium">Primary</p>
                      <div className="flex flex-wrap gap-2">
                        {exercise.muscles_targeted.primary.map(m => (
                          <span key={m} className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-lg text-xs font-medium">
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 mb-2 font-medium">Secondary</p>
                      <div className="flex flex-wrap gap-2">
                        {exercise.muscles_targeted.secondary.map(m => (
                          <span key={m} className="bg-zinc-800 text-zinc-300 border border-zinc-700 px-3 py-1 rounded-lg text-xs font-medium">
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Instructions & Cues */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Info className="w-4 h-4 text-primary" />
                    How to Perform
                  </h3>
                  <div className="space-y-4 text-zinc-400 text-sm leading-relaxed">
                    <div>
                      <p className="text-zinc-300 font-bold mb-1">Setup:</p>
                      <p>{exercise.form_cues.setup}</p>
                    </div>
                    <div>
                      <p className="text-zinc-300 font-bold mb-1">Execution:</p>
                      <p>{exercise.form_cues.execution}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Form Cues
                  </h3>
                  <ul className="space-y-3">
                    {exercise.form_cues.key_cues.map((cue, i) => (
                      <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm">
                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {cue}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500" />
                    Common Mistakes
                  </h3>
                  <ul className="space-y-3">
                    {exercise.common_mistakes.map((mistake, i) => (
                      <li key={i} className="flex items-start gap-3 text-zinc-400 text-sm">
                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500/50 flex-shrink-0" />
                        {mistake}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800">
                  <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Progression Goal</h4>
                  <p className="text-sm text-zinc-300">{exercise.progression_criteria}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
