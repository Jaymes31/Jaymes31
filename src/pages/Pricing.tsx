import { Check } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const PLANS = [
  {
    id: 'monthly',
    name: 'Basic',
    price: '$9.99',
    interval: 'month',
    description: 'Perfect for getting started with calisthenics.',
    features: [
      'Full exercise library access',
      'Basic progression pathways',
      'Mobile-friendly viewing',
      'Standard support',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    id: 'annual',
    name: 'Annual Elite',
    price: '$89.99',
    interval: 'year',
    description: 'Best value for dedicated athletes.',
    features: [
      'Everything in Basic',
      'Save over 25% annually',
      'Early access to new content',
      'Priority support',
      'Offline viewing (coming soon)',
    ],
    cta: 'Choose Annual',
    popular: true,
  },
];

export default function Pricing() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSelectPlan = (planId: string) => {
    if (!user) {
      navigate('/signup');
      return;
    }
    
    // Once Stripe is integrated, this will redirect to checkout
    console.log(`Selected plan: ${planId}`);
    alert(`Redirecting to Stripe Checkout for ${planId} plan...\n\n(Stripe integration in progress)`);
  };

  return (
    <div className="py-20 bg-zinc-950 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Simple, Transparent Pricing</h1>
          <p className="text-zinc-400 text-lg">Choose the plan that fits your training goals. No hidden fees, cancel anytime.</p>
          {user && user.isSubscriber && (
            <div className="mt-6 bg-primary/10 border border-primary/20 text-primary px-6 py-3 rounded-xl inline-block font-medium">
              You already have an active subscription!
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PLANS.map((plan) => (
            <div 
              key={plan.name}
              className={`relative bg-zinc-900 rounded-3xl p-8 border ${
                plan.popular ? 'border-primary shadow-2xl shadow-primary/10' : 'border-zinc-800'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-zinc-500 text-sm">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                  <span className="text-zinc-500 text-sm">/{plan.interval}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-zinc-400 text-sm">
                    <div className="mt-1 bg-primary/20 p-0.5 rounded-full flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handleSelectPlan(plan.id)}
                disabled={user?.isSubscriber}
                className={`w-full py-4 rounded-xl font-bold transition-all ${
                  user?.isSubscriber
                    ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                    : plan.popular 
                      ? 'bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/20' 
                      : 'bg-zinc-800 hover:bg-zinc-700 text-white'
                }`}
              >
                {user?.isSubscriber ? 'Current Plan' : plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-zinc-500 text-sm">
            All payments are securely processed by Stripe. 
            <br className="hidden sm:block" />
            Questions? Contact our team at support@calisthenicsforge.com
          </p>
        </div>
      </div>
    </div>
  );
}
