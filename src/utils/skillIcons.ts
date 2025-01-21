export const skillIcons: Record<string, string> = {
  'React': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
  'React Native': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
  'TypeScript': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
  'JavaScript': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
  'HTML5': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
  'CSS3': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
  'Tailwind CSS': 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
  'Redux': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg',
  'Expo': 'https://www.vectorlogo.zone/logos/expoio/expoio-icon.svg',
  'iOS': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/apple/apple-original.svg',
  'Android': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original.svg',
  'Mobile UI': 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg',
  'App Store': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/apple/apple-original.svg',
  'React Recoil': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Nw2Jz9wCr70GhWDurpIHtUoXB-alLhmiIXSTe1P3yk1CZ7ixVowqukoJNnEAq_uwjvw&usqp=CAU'
};

export function getSkillIcon(skill: string): string | undefined {
  return skillIcons[skill];
}