import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Twitter } from 'lucide-react';
// Using the original Longu penguin image
const longuImage = '/lovable-uploads/c17bbead-b400-49e4-9340-2cdb4fa35aef.png';

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
    "Almost there, you amazing human! 💪", 
    "Longu believes in you! 🎉",
    "Wow, such dedication to scrolling! 👏",
    "You're unstoppable! Don't give up now! ⭐",
    "Longu is getting excited! 🎈",
    "This is incredible! You're so close! 🚀",
    "Longu is doing a happy dance! 💃",
    "You're a scrolling champion! 🏆",
    "Almost at Longu's feet! 🦶",
    "Longu wants to high-five you! ✋",
    "You made it this far - you're AWESOME! 🌟",
    "Longu is SO proud of you! 😊",
    "Final stretch! You can do this! 💯"
  ];

  const funnyMessages = [
    "Plot twist: Longu is actually 50 feet tall! 📏",
    "Fun fact: Longu can't fly, but you can scroll! 🛫",
    "Breaking news: Local human discovers infinite scroll! 📰",
    "Achievement unlocked: Professional Longu Stretcher! 🎮",
    "Did you know? Longu loves long walks on the beach! 🏖️",
    "Warning: May cause uncontrollable urge to waddle like Longu! 🚶‍♂️",
    "Longu says: 'I'm not fat, I'm just fluffy!' ☁️",
    "Congratulations! You've scrolled further than Longu can walk! 🎖️",
    "Longu's dream: To become a skyscraper! 🏢",
    "Longu's current height: Approximately 47 motivational quotes! 📏"
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

      {/* Stretched Longu background */}
      <div className="fixed left-1/2 top-0 transform -translate-x-1/2 pointer-events-none z-0">
        <img 
          src={longuImage}
          alt="Longu the penguin stretched really long"
          className="w-64 md:w-96 object-fill opacity-25"
          style={{ height: '800vh', objectFit: 'fill' }}
        />
      </div>

      {/* Long content sections */}
      <div className="relative z-10 bg-gradient-to-b from-penguin-cream via-penguin-light-blue to-penguin-blue">
        {encouragingMessages.map((message, index) => (
          <div key={`encouragement-${index}`} className="scroll-encouragement">
            {message}
          </div>
        ))}

        {funnyMessages.map((message, index) => (
          <div key={`funny-${index}`} className="penguin-message">
            {message}
          </div>
        ))}

        {/* Extra motivational sections */}
        <section className="py-32 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            You're INCREDIBLE! 🌟
          </h2>
          <p className="text-2xl text-penguin-cream font-bold max-w-2xl mx-auto px-4">
            Look how far you've scrolled! Longu is getting SOOO much longer and you're getting stronger! 💪
          </p>
        </section>

        <section className="py-32 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            KEEP GOING! 🚀
          </h2>
          <p className="text-2xl text-penguin-cream font-bold max-w-2xl mx-auto px-4">
            Longu's adorable orange feet are getting closer! You're almost there, champion! 🏆
          </p>
        </section>

        <section className="py-32 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            SO CLOSE! 🎉
          </h2>
          <p className="text-2xl text-penguin-cream font-bold max-w-2xl mx-auto px-4">
            Longu can feel your determination! You're absolutely amazing! ✨
          </p>
        </section>

        <section className="py-32 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            FINAL STRETCH! 💯
          </h2>
          <p className="text-2xl text-penguin-cream font-bold max-w-2xl mx-auto px-4">
            You're about to reach Longu's adorable orange feet! 🧡
          </p>
        </section>

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