// src/theme.jsx

// --- DARK THEME ---
export const darkTheme = {
  // Core Colors
  body: '#010409', // A deep, near-black charcoal (like GitHub's dark mode)
  text: '#E6EDF3', // A soft white for high readability
  textSecondary: '#8B949E', // A medium grey for subtitles and less important text
  accent: '#58A6FF', // A vibrant, modern blue for interactive elements

  // Backgrounds
  navBg: 'rgba(1, 4, 9, 0.8)', // Semi-transparent to hint at content scrolling underneath
  cardBg: '#0D1117', // A slightly lighter charcoal for cards to stand out
  
  // Borders
  navBorder: 'rgba(255, 255, 255, 0.1)',
  cardBorder: 'rgba(255, 255, 255, 0.15)',

  // Buttons & Links
  buttonPrimaryBg: '#58A6FF',
  buttonPrimaryText: '#010409',
  linkHover: '#58A6FF',
};


// --- LIGHT THEME ---
export const lightTheme = {
  // Core Colors
  body: '#FFFFFF', // Clean white
  text: '#1F2328', // A dark charcoal, not pure black, for better readability
  textSecondary: '#656D76', // A softer grey for subtitles
  accent: '#0969DA', // A slightly deeper blue for better contrast on a light background

  // Backgrounds
  navBg: 'rgba(255, 255, 255, 0.8)',
  cardBg: '#F6F8FA', // A very light grey to distinguish cards from the white background
  
  // Borders
  navBorder: 'rgba(0, 0, 0, 0.1)',
  cardBorder: 'rgba(0, 0, 0, 0.15)',

  // Buttons & Links
  buttonPrimaryBg: '#0969DA',
  buttonPrimaryText: '#FFFFFF',
  linkHover: '#0969DA',
};