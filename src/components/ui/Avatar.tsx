interface AvatarProps {
  name: string;
  size?: number;
}

const COLORS = ['#ff4500', '#0079d3', '#46d160', '#7193ff', '#ff66ac', '#ffb000', '#00a6a5'];

// Cor estável a partir do nome (sem imagens externas)
const colorFor = (name: string) =>
  COLORS[[...name].reduce((sum, ch) => sum + ch.charCodeAt(0), 0) % COLORS.length];

export default function Avatar({ name, size = 24 }: AvatarProps) {
  return (
    <span
      className="avatar"
      style={{ width: size, height: size, background: colorFor(name), fontSize: size * 0.45 }}
      aria-hidden="true"
    >
      {name.charAt(0).toUpperCase()}
    </span>
  );
}
