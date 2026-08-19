import { inventoryItems } from '../data/inventory';
import { characterStats } from '../data/character';
import { BannerPanel } from './BannerPanel';

export function Sidebar() {
  return (
    <aside className="lg:col-span-4 flex flex-col gap-6">
      <BannerPanel title="Inventory & Skills">
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
      </BannerPanel>

      <BannerPanel title="Cozy Corner Stats">
        <div className="mb-4">
          <div className="flex justify-between text-xs font-bold text-amber-900 mb-1">
            <span>{characterStats.title}</span>
            <span>{characterStats.xpCurrent.toLocaleString()} / {characterStats.xpMax.toLocaleString()} XP</span>
          </div>
          <div className="w-full bg-amber-950/20 rounded-full h-2.5 shadow-inner border border-amber-900/30 overflow-hidden">
            <div
              className="bg-gradient-to-r from-amber-500 to-amber-400 h-2.5 rounded-full"
              style={{ width: `${characterStats.xpPercent}%` }}
            />
          </div>
        </div>

        <ul className="text-sm space-y-2 text-amber-950 mb-5">
          {characterStats.rows.map((row) => (
            <li key={row.label} className="flex justify-between gap-3 border-b border-amber-200/60 pb-1">
              <strong>{row.label}:</strong>
              <span className="text-right shrink-0">{row.value}</span>
            </li>
          ))}
        </ul>

        <div className="toc-card">
          <h4 className="fantasy-font text-lg text-amber-950 mb-2 text-center">Current Focus</h4>
          <p className="text-sm leading-relaxed text-amber-900">
            {characterStats.focus}
          </p>
        </div>
      </BannerPanel>
    </aside>
  );
}
