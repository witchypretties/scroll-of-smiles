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
    "You're unstoppable! ⭐",
    "This is incredible! 🚀",
    "You're a scrolling champion! 🏆",
    "You made it this far - AWESOME! 🌟",
    "Keep going, scroll warrior! 💪",
    "You're making magic happen! 🪄",
    "Never give up! 🛡️",
    "You're 50% there, amazing! 🎉",
    "Almost there! 🏁",
    "Final push! You've got this! 💪"
  ];

  const funnyMessages = [
    "Plot twist: Longu is 50 feet tall! 📏",
    "Fun fact: Longu can't fly, but you can scroll! 🛫",
    "Achievement unlocked: Longu Stretcher! 🎮",
    "Longu says: 'I'm not fat, I'm fluffy!' ☁️",
    "Longu's dream: To become a skyscraper! 🏢",
    "Breaking: Penguin achieves maximum stretch! 📰",
    "Longu wondering if he should apply for NBA! 🏀",
    "Longu's nickname: The Elastic Penguin! 🎪",
    "Breaking: Penguin discovers scrolling! ♾️",
    "Longu's secret: Daily stretching yoga! 🧘‍♂️",
    "Longu's motto: 'Go long or go home!' 🏡",
    "Longu's backup career: Giraffe impersonator! 🦒",
    "Longu's favorite game: Reverse limbo! 🤸‍♂️",
    "Longu's superpower: Vertical expansion! ⬆️",
    "Final fact: You're amazing! 🌟"
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

      {/* Cropped Longu image */}
      <div className="absolute left-1/2 pointer-events-none" style={{ top: '1000px', zIndex: 1, transform: 'translateX(-50%)' }}>
        <img 
          src="/lovable-uploads/53a3f6c7-e56f-4eb8-869c-b5a06fd15b7e.png"
          alt="Longu the penguin stretched really tall"
          className="w-auto mx-auto"
          style={{ 
            height: '10000px',
            width: '1024px',
            objectFit: 'cover',
            objectPosition: 'bottom'
          }}
        />
      </div>

      {/* Long content sections with side text */}
      <div className="relative z-20">
        {/* Messages scattered throughout the scroll */}
        <div className="absolute inset-0">
          {/* Left side encouraging messages - reduced white space */}
          {encouragingMessages.slice(0, Math.ceil(encouragingMessages.length / 2)).map((message, index) => (
            <div 
              key={`left-encouragement-${index}`} 
              className="absolute left-4 max-w-xs text-lg md:text-xl font-bold text-penguin-dark bg-white/80 p-4 rounded-lg shadow-lg"
              style={{ top: `${1100 + index * 600}px` }}
            >
              {message}
            </div>
          ))}
          
          {/* Right side encouraging messages - reduced white space */}
          {encouragingMessages.slice(Math.ceil(encouragingMessages.length / 2)).map((message, index) => (
            <div 
              key={`right-encouragement-${index}`} 
              className="absolute right-4 max-w-xs text-lg md:text-xl font-bold text-penguin-dark bg-white/80 p-4 rounded-lg shadow-lg"
              style={{ top: `${1400 + index * 600}px` }}
            >
              {message}
            </div>
          ))}
          
          {/* Left side funny messages - reduced white space */}
          {funnyMessages.slice(0, Math.ceil(funnyMessages.length / 2)).map((message, index) => (
            <div 
              key={`left-funny-${index}`} 
              className="absolute left-8 max-w-sm text-base md:text-lg font-semibold text-penguin-blue bg-penguin-cream/90 p-3 rounded-lg shadow-md"
              style={{ top: `${900 + index * 450}px` }}
            >
              {message}
            </div>
          ))}
          
          {/* Right side funny messages - reduced white space */}
          {funnyMessages.slice(Math.ceil(funnyMessages.length / 2)).map((message, index) => (
            <div 
              key={`right-funny-${index}`} 
              className="absolute right-8 max-w-sm text-base md:text-lg font-semibold text-penguin-blue bg-penguin-cream/90 p-3 rounded-lg shadow-md"
              style={{ top: `${700 + index * 450}px` }}
            >
              {message}
            </div>
          ))}
        </div>

        {/* Spacer to create the perfect scroll length matching the cropped image */}
        <div style={{ height: '8000px' }}></div>

        {/* Final celebration section */}
        <section className="py-16 text-center bg-gradient-to-b from-penguin-blue to-penguin-orange">
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