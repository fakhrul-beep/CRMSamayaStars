import clsx from 'classnames';

type StarSize = 'sm' | 'md' | 'lg';

interface StarBadgeProps {
  star: 0 | 1 | 2 | 3;
  size?: StarSize;
  showLabel?: boolean;
}

const sizeMap: Record<StarSize, string> = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base'
};

export function StarBadge({ star, size = 'md', showLabel = false }: StarBadgeProps) {
  if (star <= 0) return null;

  const stars = '⭐'.repeat(star);

  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full bg-primary/90 px-3 py-1 text-gold',
        sizeMap[size]
      )}
      aria-label={`${star}-star Samaya certified venue`}
    >
      <span className="mr-1">{stars}</span>
      {showLabel && <span className="text-neutral-100">Samaya Stars</span>}
    </span>
  );
}

