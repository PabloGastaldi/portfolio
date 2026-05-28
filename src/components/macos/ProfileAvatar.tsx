type ProfileAvatarProps = {
  size?: number;
  src?: string;
  alt?: string;
  initials?: string;
};

export function ProfileAvatar({
  size = 128,
  src,
  alt = 'Foto de perfil',
  initials = 'PG',
}: ProfileAvatarProps) {
  const fontSize = Math.round(size * 0.38);

  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-full border border-white/20 bg-gradient-to-br from-white/15 to-white/5 shadow-[0_18px_40px_-12px_rgb(0_0_0_/_0.6)] ring-1 ring-black/20"
      style={{ width: size, height: size }}
      aria-hidden={src ? undefined : true}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="h-full w-full object-cover"
        />
      ) : (
        <div
          className="flex h-full w-full items-center justify-center font-semibold tracking-wider text-white/85 select-none"
          style={{ fontSize }}
        >
          {initials}
        </div>
      )}
    </div>
  );
}
