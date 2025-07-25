export default function ProgressCircle ({ progress, color, baseColor, rad, strk, baseStrk }) {
  const radius = rad || 12;
  const baseStroke = baseStrk || 3;
  const stroke = strk || 3;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg className="rotate-[-90deg]" height={radius * 2} width={radius * 2}>
      <circle
        stroke={baseColor || "#e5e7eb"}
        fill="transparent"
        strokeWidth={baseStroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke = {color || "#004A40"}
        fill="transparent"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        style={{ transition: 'stroke-dashoffset 0.35s' }}
      />
    </svg>
  );
};
