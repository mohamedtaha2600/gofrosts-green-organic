/**
 * Strips all emojis, flag symbols, and graphical pictographs from text
 * Ensures strict compliance with enterprise design rules (Emoji Ban Protocol)
 */
export function removeEmoji(text: string): string {
  if (!text) return '';
  return text
    .replace(
      // Match Unicode emoji blocks including flags and pictorial symbols
      /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E0}-\u{1F1FF}\u{FE00}-\u{FE0F}\u{1F004}\u{1F0CF}]/gu,
      ''
    )
    .replace(/\s{2,}/g, ' ')
    .trim();
}
