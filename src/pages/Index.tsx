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
    "Keep going, scroll warrior! 💪",
    "Longu is cheering you on! 📣",
    "You're absolutely incredible! ✨",
    "Don't stop believing! 🌟",
    "Longu's getting taller thanks to you! 📏",
    "You're making magic happen! 🪄",
    "Keep that scroll finger strong! 💪",
    "Longu appreciates your dedication! 🙏",
    "You're almost halfway there! 🎯",
    "This is your moment to shine! ⭐",
    "Longu's proud of your persistence! 🏆",
    "You're doing the impossible! 🚀",
    "Keep scrolling, superstar! 🌟",
    "Longu's energy is infectious! ⚡",
    "You're writing scrolling history! 📚",
    "Never give up, never surrender! 🛡️",
    "Longu's rooting for you! 📢",
    "You're a scrolling legend in the making! 👑",
    "Push through, you've got this! 💥",
    "Longu's dance moves are getting better! 💃",
    "You're breaking scroll records! 📊",
    "Keep that momentum going! 🏃‍♂️",
    "Longu's smile is getting bigger! 😊",
    "You're absolutely unstoppable! 🔥",
    "The finish line is calling your name! 🏁",
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
    "Longu's current height: Approximately 47 motivational quotes! 📏",
    "Scientists baffled by human's scrolling endurance! 🔬",
    "Longu's considering a career change to being a telephone pole! 📞",
    "Breaking: Local penguin achieves maximum stretch! 📰",
    "Longu wondering if he should apply for NBA! 🏀",
    "Physics teachers hate this one simple trick! 📐",
    "Longu's passport now lists height as 'infinite'! 📋",
    "Emergency: Penguin shortage due to excessive stretching! 🚨",
    "Longu's new nickname: The Elastic Penguin! 🎪",
    "Weather report: 100% chance of stretched penguin! 🌤️",
    "Longu's considering opening a yoga studio! 🧘‍♂️",
    "NASA wants to study Longu's aerodynamics! 🚀",
    "Longu's autobiography: 'From Waddle to Vertical Mile'! 📖",
    "Breaking: Penguin discovers secret to immortal scrolling! ♾️",
    "Longu's shopping for extra-long scarves! 🧣",
    "Alert: Penguin has transcended normal dimensions! 🌌"
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
          className="w-64 md:w-96 object-fill"
          style={{ height: '2000vh', objectFit: 'fill' }}
        />
      </div>

      {/* Long content sections with side text */}
      <div className="relative z-10">
        {/* Left side messages */}
        <div className="fixed left-4 top-1/2 transform -translate-y-1/2 max-w-xs z-20">
          {encouragingMessages.slice(0, Math.ceil(encouragingMessages.length / 2)).map((message, index) => (
            <div 
              key={`left-encouragement-${index}`} 
              className="mb-96 text-lg md:text-xl font-bold text-penguin-dark bg-white/80 p-4 rounded-lg shadow-lg"
              style={{ marginTop: `${index * 200}vh` }}
            >
              {message}
            </div>
          ))}
        </div>

        {/* Right side messages */}
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 max-w-xs z-20">
          {encouragingMessages.slice(Math.ceil(encouragingMessages.length / 2)).map((message, index) => (
            <div 
              key={`right-encouragement-${index}`} 
              className="mb-96 text-lg md:text-xl font-bold text-penguin-dark bg-white/80 p-4 rounded-lg shadow-lg"
              style={{ marginTop: `${(index + Math.ceil(encouragingMessages.length / 2)) * 180}vh` }}
            >
              {message}
            </div>
          ))}
        </div>

        {/* Alternating funny messages */}
        <div className="fixed left-8 top-1/4 max-w-sm z-20">
          {funnyMessages.slice(0, Math.ceil(funnyMessages.length / 2)).map((message, index) => (
            <div 
              key={`left-funny-${index}`} 
              className="mb-96 text-base md:text-lg font-semibold text-penguin-blue bg-penguin-cream/90 p-3 rounded-lg shadow-md"
              style={{ marginTop: `${index * 160}vh` }}
            >
              {message}
            </div>
          ))}
        </div>

        <div className="fixed right-8 top-1/4 max-w-sm z-20">
          {funnyMessages.slice(Math.ceil(funnyMessages.length / 2)).map((message, index) => (
            <div 
              key={`right-funny-${index}`} 
              className="mb-96 text-base md:text-lg font-semibold text-penguin-blue bg-penguin-cream/90 p-3 rounded-lg shadow-md"
              style={{ marginTop: `${(index + Math.ceil(funnyMessages.length / 2)) * 140}vh` }}
            >
              {message}
            </div>
          ))}
        </div>

        {/* Spacer to create the scroll length */}
        <div style={{ height: '2000vh' }}></div>

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