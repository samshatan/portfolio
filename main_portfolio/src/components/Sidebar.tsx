import { inventoryItems } from '../data/inventory';

export function Sidebar() {
  return (
    <aside className="lg:col-span-4 flex flex-col gap-6 lg:pt-16">
      {/* Inventory Sidebar */}
      <div className="inventory-sidebar">
        <h3 className="text-center fantasy-font text-2xl mb-4 text-amber-950">Active Toolbelt</h3>
        <div className="flex flex-col">
          {inventoryItems.map((item, idx) => (
            <div key={idx} className="inventory-item group cursor-default">
              <img alt={item.name} className="inventory-icon group-hover:scale-110 transition-transform drop-shadow-sm" src={item.icon}/>
              <div>
                <h4 className="font-bold text-amber-950 text-sm">{item.name}</h4>
                <p className="text-xs text-amber-800">{item.tagline}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="inventory-sidebar">
        <h3 className="text-center fantasy-font text-xl mb-3 text-amber-950">Character Stats</h3>
        <div className="mb-4">
          <div className="flex justify-between text-xs font-bold text-amber-900 mb-1">
            <span>Level 42 Spellcaster</span>
            <span>8,400 / 10,000 XP</span>
          </div>
          <div className="w-full bg-amber-950/20 rounded-full h-2.5 shadow-inner border border-amber-900/30 overflow-hidden">
            <div className="bg-gradient-to-r from-amber-500 to-amber-400 h-2.5 rounded-full" style={{ width: '84%' }}></div>
          </div>
        </div>

        <ul className="text-sm space-y-2 text-amber-950">
          <li className="flex justify-between border-b border-amber-200/50 pb-1">
            <strong>Git Commits (XP):</strong> <span>3,421</span>
          </li>
          <li className="flex justify-between border-b border-amber-200/50 pb-1">
            <strong>Quests (PRs) Cleared:</strong> <span>156</span>
          </li>
          <li className="flex justify-between border-b border-amber-200/50 pb-1">
            <strong>Artifacts (Repos) Forged:</strong> <span>42</span>
          </li>
          <li className="flex justify-between border-b border-amber-200/50 pb-1">
            <strong>Dungeon Puzzles (LC Solved):</strong> <span>485</span>
          </li>
          <li className="flex justify-between border-b border-amber-200/50 pb-1">
            <strong>Combat Power (LC Rating):</strong> <span>1790</span>
          </li>
          <li className="flex justify-between">
            <strong>Coding Streak:</strong> <span>14 Days 🔥</span>
          </li>
        </ul>
      </div>

      <div className="inventory-sidebar">
        <h3 className="text-center fantasy-font text-xl mb-3 text-amber-950">Current Focus</h3>
        <p className="text-sm leading-relaxed text-amber-900">
          Building responsive interfaces, strengthening my full-stack foundations, and learning through hands-on projects.
        </p>
      </div>
    </aside>
  );
}
