export function saveLink(code: string, url: string) {
  const links = JSON.parse(localStorage.getItem('shortLinks') || '{}')
  if (links[code]) {
    return { success: false, message: 'Code already in use' }
  }
  links[code] = url
  localStorage.setItem('shortLinks', JSON.stringify(links))
  return { success: true }
}

export function getLink(code: string): string | null {
  const links = JSON.parse(localStorage.getItem('shortLinks') || '{}')
  return links[code] || null
}
