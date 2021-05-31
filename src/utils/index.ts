export function formatTime(current: number): string {
  const h = Math.floor(current / 3600);
  let m: string | number = Math.floor((current - h * 3600) / 60);
  let s: string | number = Math.floor(current % 60);

  if (s < 10) {
    s = `0${s}`;
  }
  if (m < 10) {
    m = `0${m}`;
  }

  return h > 0 ? `${h}:${m}:${s}` : `${m}:${s}`;
}
