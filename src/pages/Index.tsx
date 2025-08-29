import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Twitter } from 'lucide-react';
// Using the new ultra-stretched Longu penguin image
const longuImage = '/lovable-uploads/aa5df1c2-4756-4670-9487-93eddc49b41e.png';

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const encouragingMessages = [
    "You're doing great! Keep going! 🐧",
    "Longu believes in you! 🎉",
    "You're unstoppable! Don't give up now! ⭐",
    "This is incredible! You're so close! 🚀",
    "You're a scrolling champion! 🏆",
    "You made it this far - you're AWESOME! 🌟",
    "Keep going, scroll warrior! 💪",
    "You're making magic happen! 🪄",
    "You're doing the impossible! 🚀",
    "Never give up, never surrender! 🛡️",
    "You're breaking scroll records! 📊",
    "Wow! You're 25% through Longu! 🌟",
    "You're in the middle zone! 🎯",
    "You're 50% there, amazing! 🎉",
    "You're 75% through! Almost there! 🏁",
    "Final push! You've got this! 💪",
    "One more scroll to victory! 🎉"
  ];

  const funnyMessages = [
    "Plot twist: Longu is actually 50 feet tall! 📏",
    "Fun fact: Longu can't fly, but you can scroll! 🛫",
    "Achievement unlocked: Professional Longu Stretcher! 🎮",
    "Longu says: 'I'm not fat, I'm just fluffy!' ☁️",
    "Longu's dream: To become a skyscraper! 🏢",
    "Breaking: Local penguin achieves maximum stretch! 📰",
    "Longu wondering if he should apply for NBA! 🏀",
    "Longu's new nickname: The Elastic Penguin! 🎪",
    "Longu's considering opening a yoga studio! 🧘‍♂️",
    "Breaking: Penguin discovers secret to immortal scrolling! ♾️",
    "Fun fact: Real penguins can hold their breath for 20 minutes! 🤿",
    "Longu's secret: He practices stretching yoga daily! 🧘‍♂️",
    "Longu's motto: 'Go long or go home!' 🏡",
    "Longu's dream job: Professional limousine penguin! 🚗",
    "Fun fact: Penguins slide on their bellies called 'tobogganing'! 🛷",
    "Longu's superpower: Infinite vertical expansion! ⬆️",
    "Breaking: Penguin develops new form of transportation! 🚀",
    "Longu's backup career: Giraffe impersonator! 🦒",
    "Longu's favorite game: Limbo... but in reverse! 🤸‍♂️",
    "Longu's life philosophy: 'The longer, the better!' 📏",
    "Breaking: Penguin discovered to have elastic properties! 🎪",
    "Longu's dream vacation: A really tall building! 🏢",
    "Longu's goal: To touch the clouds someday! ☁️",
    "Final fact: You're amazing for scrolling this far! 🌟"
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-penguin-light-blue z-50">
        <div 
          className="h-full bg-penguin-blue transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero section */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-penguin-light-blue to-penguin-cream relative">
        <div className="text-center space-y-6 px-4 z-10">
          <h1 className="text-6xl md:text-8xl font-black text-penguin-dark mb-8">
            MEET LONGU
          </h1>
          <p className="text-2xl md:text-3xl text-penguin-blue font-bold">
            Get ready to stretch Longu like never before! 🐧
          </p>
          <div className="bounce-gentle">
            <ArrowDown size={48} className="text-penguin-orange mx-auto" />
          </div>
          <p className="text-lg text-penguin-dark font-semibold">
            ↓ Start scrolling to stretch Longu REAAAALLY long! ↓
          </p>
        </div>
      </section>

      {/* New tall Longu image - 1024x15360px */}
      <div className="absolute left-1/2 top-0 transform -translate-x-1/2 pointer-events-none" style={{ zIndex: 1 }}>
        <img 
          src="/lovable-uploads/53a3f6c7-e56f-4eb8-869c-b5a06fd15b7e.png"
          alt="Longu the penguin stretched really tall"
          className="w-auto mx-auto"
          style={{ 
            height: '15360px',
            width: '1024px',
            objectFit: 'contain'
          }}
        />
      </div>

      {/* Long content sections with side text */}
      <div className="relative z-20">
        {/* Messages scattered throughout the scroll */}
        <div className="absolute inset-0">
          {/* Left side encouraging messages - well spaced throughout scroll */}
          {encouragingMessages.slice(0, Math.ceil(encouragingMessages.length / 2)).map((message, index) => (
            <div 
              key={`left-encouragement-${index}`} 
              className="absolute left-4 max-w-xs text-lg md:text-xl font-bold text-penguin-dark bg-white/80 p-4 rounded-lg shadow-lg"
              style={{ top: `${2000 + index * 800}px` }}
            >
              {message}
            </div>
          ))}
          
          {/* Right side encouraging messages - well spaced throughout scroll */}
          {encouragingMessages.slice(Math.ceil(encouragingMessages.length / 2)).map((message, index) => (
            <div 
              key={`right-encouragement-${index}`} 
              className="absolute right-4 max-w-xs text-lg md:text-xl font-bold text-penguin-dark bg-white/80 p-4 rounded-lg shadow-lg"
              style={{ top: `${2400 + index * 800}px` }}
            >
              {message}
            </div>
          ))}
          
          {/* Left side funny messages - well spaced throughout scroll */}
          {funnyMessages.slice(0, Math.ceil(funnyMessages.length / 2)).map((message, index) => (
            <div 
              key={`left-funny-${index}`} 
              className="absolute left-8 max-w-sm text-base md:text-lg font-semibold text-penguin-blue bg-penguin-cream/90 p-3 rounded-lg shadow-md"
              style={{ top: `${1800 + index * 600}px` }}
            >
              {message}
            </div>
          ))}
          
          {/* Right side funny messages - well spaced throughout scroll */}
          {funnyMessages.slice(Math.ceil(funnyMessages.length / 2)).map((message, index) => (
            <div 
              key={`right-funny-${index}`} 
              className="absolute right-8 max-w-sm text-base md:text-lg font-semibold text-penguin-blue bg-penguin-cream/90 p-3 rounded-lg shadow-md"
              style={{ top: `${1600 + index * 600}px` }}
            >
              {message}
            </div>
          ))}
        </div>

        {/* Spacer to create the perfect scroll length matching the image */}
        <div style={{ height: '15360px' }}></div>

        {/* Final celebration section */}
        <section className="py-32 text-center bg-gradient-to-b from-penguin-blue to-penguin-orange">
          <div className="float-animation">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-12">
              🎉 YOU DID IT! 🎉
            </h2>
          </div>
          <p className="text-3xl text-white font-bold mb-12 max-w-3xl mx-auto px-4">
            You've officially stretched Longu from head to toe! 
            You're a scrolling LEGEND! 🏆
          </p>
          
          {/* Twitter link */}
          <div className="flex flex-col items-center space-y-6">
            <p className="text-2xl text-white font-bold">
              Now that you've mastered the art of scrolling, follow us on Twitter! 🐦
            </p>
            <Button 
              size="lg"
              className="bg-white text-penguin-dark hover:bg-penguin-cream transition-colors text-xl px-8 py-4 font-bold"
              onClick={() => window.open('https://x.com/thatboilongu', '_blank')}
            >
              <Twitter className="mr-3" size={24} />
              Follow @thatboilongu
            </Button>
            <p className="text-lg text-white opacity-90 font-semibold">
              Thanks for the incredible scroll! You're awesome! 🐧💙
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;