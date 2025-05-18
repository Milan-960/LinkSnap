const BASE62 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
const CODE_LENGTH = 6

// In-memory store for demo purposes (replace with a database in production)
const usedCodes = new Set<string>()

export function generateUniqueCode(): string {
  let code: string
  do {
    code = ''
    for (let i = 0; i < CODE_LENGTH; i++) {
      const randomIndex = Math.floor(Math.random() * BASE62.length)
      code += BASE62[randomIndex]
    }
  } while (usedCodes.has(code)) // Ensure uniqueness

  usedCodes.add(code) // Store the code
  return code
}

// Optional: Clear codes for testing
export function clearUsedCodes() {
  usedCodes.clear()
}
