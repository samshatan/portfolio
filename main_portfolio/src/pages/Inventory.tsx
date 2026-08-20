import { useState } from 'react';
import { motion } from 'motion/react';
import { BannerPanel } from '../components/BannerPanel';
import { inventoryItems } from '../data/inventory';
import { Search, Sparkles } from 'lucide-react';

const hiddenArtifacts = [
  {
    name: "Rubber Duck of Debugging",
    tagline: "Squeaks reassuringly when your code fails.",
    details: "A legendary artifact that forces you to explain your terrible code out loud until you realize your own mistake. Durability: Infinite.",
    icon: "🦆",
    rarity: "text-purple-600",
  },
  {
    name: "The Missing Semicolon",
    tagline: "Found on line 42,491.",
    details: "An ancient relic that once caused 14 hours of continuous server downtime in the year 2014. Handle with extreme caution.",
    icon: "❕",
    rarity: "text-orange-600",
  },
  {
    name: "Stack Overflow Scroll",
    tagline: "Marked as duplicate.",
    details: "A torn page containing the exact error message you are seeing, but the only answer is 'Nvm, fixed it' from 8 years ago.",
    icon: "📜",
    rarity: "text-gray-600",
  },
  {
    name: "Potion of Caffeine",
    tagline: "+50 Speed, -20 Focus.",
    details: "Brewed by the mystical baristas of the local tavern. Consuming this allows you to write 500 lines of code, none of which will make sense tomorrow.",
    icon: "☕",
    rarity: "text-blue-600",
  },
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
      className="flex flex-col gap-8 pb-4"
    >
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl mb-2 text-amber-950 fantasy-font">Inventory</h1>
        <p className="text-amber-800 italic">Everything carried in the adventurer's satchel</p>
      </header>

      <BannerPanel title="The Satchel">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {inventoryItems.map((item) => (
            <div key={item.name} className="satchel-card">
              <img alt="" src={item.icon} className="w-10 h-10 object-contain shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-amber-950 text-sm">{item.name}</h3>
                <p className="text-xs text-amber-800/80 mb-1">{item.tagline}</p>
                <p className="text-sm text-gray-800 leading-relaxed">{item.details}</p>
              </div>
            </div>
          ))}

          {discovered.map((egg) => (
            <motion.div
              key={egg.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring" }}
              className="satchel-card"
            >
              <span className="text-3xl shrink-0">{egg.icon}</span>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <Sparkles className={egg.rarity} size={14} />
                  <h3 className={`font-bold text-sm ${egg.rarity}`}>{egg.name}</h3>
                </div>
                <p className={`text-xs mb-1 ${egg.rarity}`}>{egg.tagline}</p>
                <p className="text-sm text-gray-800 leading-relaxed">{egg.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </BannerPanel>

      <div className="flex flex-col items-center gap-4 toc-card p-6">
        <p className="text-amber-900 italic text-center text-sm md:text-base">
          {message || "You sense hidden artifacts scattered in the directory..."}
        </p>
        <button
          onClick={handleEncounter}
          disabled={isSearching}
          className={`storybook-btn fantasy-font text-lg ${isSearching ? '' : 'cursor-pointer'}`}
        >
          <Search size={20} className={isSearching ? "animate-pulse" : ""} />
          {isSearching ? "Searching..." : "Roll for Random Encounter"}
        </button>
      </div>
    </motion.div>
  );
}
