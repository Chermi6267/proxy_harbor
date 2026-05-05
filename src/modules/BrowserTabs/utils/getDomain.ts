/**
 * @param url
 * @returns
 * Domain or url, if it is incorrect
 */

export function getDomain(url: string): string {
  try {
    const { hostname } = new URL(url);
    return hostname;
  } catch {
    return url;
  }
}
