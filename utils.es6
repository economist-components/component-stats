export function codify(name = '') {
  return name.toLowerCase().replace(/[^a-z0-9]/g, (chars) => (chars.charCodeAt(0) === 32 ? '-' : ''));
}
