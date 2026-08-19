export function ChapterProgress({
  current,
  total,
  label,
}: {
  current: number;
  total: number;
  label: string;
}) {
  const percent = Math.round((current / total) * 100);

  return (
    <div className="chapter-progress mb-8">
      <div className="flex justify-between gap-4 text-sm text-amber-800 mb-3">
        <span>Chapter {current} of {total} — {label}</span>
        <span>{percent}% read</span>
      </div>
      <div className="flex items-center" aria-hidden="true">
        {Array.from({ length: total }, (_, index) => {
          const filled = index < current;
          return (
            <div key={index} className="flex items-center flex-1 last:flex-none">
              <span className={`chapter-dot ${filled ? 'chapter-dot-filled' : ''}`} />
              {index < total - 1 && (
                <span className={`chapter-line ${filled && index < current - 1 ? 'chapter-line-filled' : filled && index === current - 1 ? 'chapter-line-partial' : ''}`} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
