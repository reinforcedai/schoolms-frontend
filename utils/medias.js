export function getMedia(url) {
  // Check if URL is a local path
  if (url.startsWith("/")) {
    // Prepend address
    return `${process.env.baseUri}${url}`;
  }
  // Otherwise return full URL
  return url;
}
