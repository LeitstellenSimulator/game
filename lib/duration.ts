export function calcDuration(iso: string) {
  const now = new Date().valueOf();
  const then = new Date(iso).valueOf();

  return (then - now) / 1000;
}
