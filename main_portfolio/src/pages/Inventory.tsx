import { useState } from 'react';
import { motion } from 'motion/react';
import { OrnateWrapper } from '../components/OrnateWrapper';
import { inventoryItems } from '../data/inventory';
import { Search, Sparkles } from 'lucide-react';

const hiddenArtifacts = [
  {
    name: "Rubber Duck of Debugging",
    tagline: "Squeaks reassuringly when your code fails.",
    details: "A legendary artifact that forces you to explain your terrible code out loud until you realize your own mistake. Durability: Infinite.",
    icon: "🦆",
    rarity: "text-purple-600 border-purple-300 bg-purple-50"
  },
  {
    name: "The Missing Semicolon",
    tagline: "Found on line 42,491.",
    details: "An ancient relic that once caused 14 hours of continuous server downtime in the year 2014. Handle with extreme caution.",
    icon: "❕",
    rarity: "text-orange-600 border-orange-300 bg-orange-50"
  },
  {
    name: "Stack Overflow Scroll",
    tagline: "Marked as duplicate.",
    details: "A torn page containing the exact error message you are seeing, but the only answer is 'Nvm, fixed it' from 8 years ago.",
    icon: "📜",
    rarity: "text-gray-600 border-gray-300 bg-gray-50"
  },
  {
    name: "Potion of Caffeine",
    tagline: "+50 Speed, -20 Focus.",
    details: "Brewed by the mystical baristas of the local tavern. Consuming this allows you to write 500 lines of code, none of which will make sense tomorrow.",
    icon: "☕",
    rarity: "text-blue-600 border-blue-300 bg-blue-50"
  }
];

export function Inventory() {
  const [discovered, setDiscovered] = useState<typeof hiddenArtifacts>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [message, setMessage] = useState("");

  const handleEncounter = () => {
    if (isSearching) return;
    setIsSearching(true);
    setMessage("Searching the dusty corners of the codebase...");
    
    setTimeout(() => {
      const undiscovered = hiddenArtifacts.filter(egg => !discovered.find(d => d.name === egg.name));
      if (undiscovered.length === 0) {
        setMessage("The area is empty. You've found all the hidden artifacts!");
      } else {
        const randomEgg = undiscovered[Math.floor(Math.random() * undiscovered.length)];
        setDiscovered(prev => [...prev, randomEgg]);
        setMessage(`Success! You unearthed: ${randomEgg.name}!`);
      }
      setIsSearching(false);
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-6 pb-12"
    >
      <header className="text-center mb-6">
        <h1 className="text-4xl mb-2 text-amber-950 fantasy-font">Expanded Inventory</h1>
        <p className="text-amber-800 italic">A detailed inspection of my equipped skills and artifacts.</p>
      </header>

      <div className="grid grid-cols-1 gap-4">
        {inventoryItems.map((item, idx) => (
          <OrnateWrapper key={`inv-${idx}`} className="p-4 flex flex-col md:flex-row items-center gap-6 hover:bg-amber-100/30 transition-colors">
            <div className="bg-gradient-to-b from-[#f8f1e3] to-[#e8dcc4] p-3 rounded-xl border border-[#c2ad8b] shadow-inner shrink-0">
              <img alt={item.name} src={item.icon} className="w-16 h-16 object-contain drop-shadow-sm" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="fantasy-font text-xl text-amber-950 font-bold">{item.name}</h3>
              <p className="text-sm text-amber-700 mb-2 font-semibold">{item.tagline}</p>
              <p className="text-sm text-gray-800 leading-relaxed">{item.details}</p>
            </div>
          </OrnateWrapper>
        ))}

        {/* Render Discovered Easter Eggs */}
        {discovered.map((egg, idx) => (
          <motion.div 
            key={`egg-${idx}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring" }}
          >
            <OrnateWrapper className={`p-4 flex flex-col md:flex-row items-center gap-6 transition-colors shadow-md ${egg.rarity.split(' ')[2]}`}>
              <div className="bg-white/50 p-3 rounded-xl border shadow-inner shrink-0 w-[90px] h-[90px] flex items-center justify-center text-4xl">
                {egg.icon}
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                  <Sparkles className={egg.rarity.split(' ')[0]} size={16} />
                  <h3 className={`fantasy-font text-xl font-bold ${egg.rarity.split(' ')[0]}`}>{egg.name}</h3>
                </div>
                <p className={`text-sm mb-2 font-semibold ${egg.rarity.split(' ')[0]}`}>{egg.tagline}</p>
                <p className="text-sm text-gray-800 leading-relaxed">{egg.details}</p>
              </div>
            </OrnateWrapper>
          </motion.div>
        ))}
      </div>

      {/* Random Encounter Action Zone */}
      <div className="mt-8 flex flex-col items-center gap-4 bg-amber-100/40 p-8 rounded-xl border border-amber-300/50 shadow-inner">
        <p className="text-amber-900 italic text-center text-sm md:text-base">
          {message || "You sense hidden artifacts scattered in the directory..."}
        </p>
        <button 
          onClick={handleEncounter}
          disabled={isSearching}
          className={`flex items-center gap-2 bg-gradient-to-b from-amber-700 to-amber-900 text-[#f4efe6] fantasy-font text-lg px-8 py-3 rounded-md transition-all border border-amber-950 shadow-md ${isSearching ? 'opacity-70 cursor-not-allowed' : 'hover:from-amber-600 hover:to-amber-800 active:scale-95 cursor-pointer'}`}
        >
          <Search size={20} className={isSearching ? "animate-pulse" : ""} />
          {isSearching ? "Searching..." : "Roll for Random Encounter"}
        </button>
      </div>
    </motion.div>
  );
}
