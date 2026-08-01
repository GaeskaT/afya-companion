"use client";

export function Scale({
  value,
  onChange,
  min = 1,
  max = 5,
  labels,
  emoji,
  name,
}: {
  value: number | null;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  labels?: string[];
  emoji?: string[];
  name: string;
}) {
  const options = [];
  for (let i = min; i <= max; i++) options.push(i);

  return (
    <div>
      <div
        role="radiogroup"
        aria-label={name}
        className="flex flex-wrap gap-1.5"
      >
        {options.map((option) => {
          const active = value === option;
          const index = option - min;
          return (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onChange(option)}
              className={`flex min-w-11 flex-1 flex-col items-center gap-0.5 rounded-xl border px-2 py-2.5 text-sm font-semibold transition-colors ${
                active
                  ? "border-transparent bg-primary text-white"
                  : "border-line-strong bg-surface text-ink-soft hover:bg-surface-2"
              }`}
            >
              {emoji?.[index] ? (
                <span className="text-lg leading-none">{emoji[index]}</span>
              ) : (
                <span>{option}</span>
              )}
              {labels?.[index] && (
                <span className="text-[0.62rem] font-medium leading-tight">
                  {labels[index]}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
