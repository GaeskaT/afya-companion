"use client";

export type Series = {
  key: string;
  label: string;
  colour: string;
  points: { x: number; y: number; label?: string }[];
};

/**
 * A small dependency-free chart. Points carry their own x (a timestamp) so
 * gaps in monitoring show as gaps rather than being evenly spaced — a week
 * with three readings should not look like a week with twenty-one.
 */
export function LineChart({
  series,
  yMin,
  yMax,
  band,
  yLabel,
  height = 200,
  markers = [],
}: {
  series: Series[];
  yMin: number;
  yMax: number;
  /** Shaded target range. */
  band?: { from: number; to: number; label: string };
  yLabel?: string;
  height?: number;
  markers?: { y: number; label: string; colour: string }[];
}) {
  const all = series.flatMap((s) => s.points);
  if (!all.length) return null;

  const width = 720;
  const pad = { top: 12, right: 14, bottom: 26, left: 38 };
  const plotW = width - pad.left - pad.right;
  const plotH = height - pad.top - pad.bottom;

  const xs = all.map((p) => p.x);
  const xMin = Math.min(...xs);
  const xMax = Math.max(...xs);
  const xSpan = xMax - xMin || 1;
  const ySpan = yMax - yMin || 1;

  const px = (x: number) => pad.left + ((x - xMin) / xSpan) * plotW;
  const py = (y: number) =>
    pad.top + plotH - ((Math.min(Math.max(y, yMin), yMax) - yMin) / ySpan) * plotH;

  const ticks = 4;
  const yTicks = Array.from({ length: ticks + 1 }, (_, i) => yMin + (ySpan / ticks) * i);

  const dayLabel = (x: number) =>
    new Date(x).toLocaleDateString(undefined, { day: "numeric", month: "short" });

  return (
    <figure className="w-full overflow-x-auto">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full min-w-[22rem]"
        role="img"
        aria-label={`${series.map((s) => s.label).join(" and ")} over time`}
      >
        {band && (
          <>
            <rect
              x={pad.left}
              y={py(band.to)}
              width={plotW}
              height={Math.max(2, py(band.from) - py(band.to))}
              fill="var(--good)"
              opacity="0.12"
            />
            <text
              x={pad.left + 4}
              y={py(band.to) - 3}
              fontSize="10"
              fill="var(--muted)"
            >
              {band.label}
            </text>
          </>
        )}

        {yTicks.map((t) => (
          <g key={t}>
            <line
              x1={pad.left}
              x2={width - pad.right}
              y1={py(t)}
              y2={py(t)}
              stroke="var(--line)"
              strokeWidth="1"
            />
            <text x={4} y={py(t) + 3} fontSize="10" fill="var(--muted)">
              {Number.isInteger(t) ? t : t.toFixed(1)}
            </text>
          </g>
        ))}

        {markers.map((m) => (
          <line
            key={m.label}
            x1={pad.left}
            x2={width - pad.right}
            y1={py(m.y)}
            y2={py(m.y)}
            stroke={m.colour}
            strokeWidth="1"
            strokeDasharray="4 3"
          />
        ))}

        {series.map((s) => (
          <g key={s.key}>
            <polyline
              fill="none"
              stroke={s.colour}
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
              points={s.points.map((p) => `${px(p.x)},${py(p.y)}`).join(" ")}
            />
            {s.points.map((p, i) => (
              <circle
                key={i}
                cx={px(p.x)}
                cy={py(p.y)}
                r="3"
                fill={s.colour}
              >
                <title>{p.label ?? `${p.y}`}</title>
              </circle>
            ))}
          </g>
        ))}

        <text x={pad.left} y={height - 8} fontSize="10" fill="var(--muted)">
          {dayLabel(xMin)}
        </text>
        <text
          x={width - pad.right}
          y={height - 8}
          fontSize="10"
          textAnchor="end"
          fill="var(--muted)"
        >
          {dayLabel(xMax)}
        </text>
      </svg>

      <figcaption className="mt-2 flex flex-wrap gap-4 text-xs text-muted">
        {yLabel && <span>{yLabel}</span>}
        {series.map((s) => (
          <span key={s.key} className="flex items-center gap-1.5">
            <span
              className="inline-block h-2 w-4 rounded-sm"
              style={{ background: s.colour }}
            />
            {s.label}
          </span>
        ))}
        {markers.map((m) => (
          <span key={m.label} className="flex items-center gap-1.5">
            <span
              className="inline-block h-0.5 w-4"
              style={{ background: m.colour }}
            />
            {m.label}
          </span>
        ))}
      </figcaption>
    </figure>
  );
}
