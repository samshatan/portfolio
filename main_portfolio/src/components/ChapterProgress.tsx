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
    <div className="chapter-progress">
      <div className="chapter-progress-meta">
        <span>Chapter {current} of {total} — {label}</span>
        <span>{percent}% read</span>
      </div>
      <div className="chapter-track" aria-hidden="true">
        {Array.from({ length: total }, (_, index) => {
          const filled = index < current;
          return (
            <div key={index} className="chapter-track-step">
              <span className={`chapter-dot ${filled ? 'is-filled' : ''}`} />
              {index < total - 1 && (
                <span className={`chapter-rail ${index < current - 1 ? 'is-filled' : ''}`} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
