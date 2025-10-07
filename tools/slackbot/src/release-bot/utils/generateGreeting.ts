import sample from 'lodash/sample';

export function generateGreeting(length: number) {
  const EMOJIS = [
    ':wave:',
    ':lefty_wave:',
    ':blob-wave:',
    ':blob-dance:',
    ':blob_excited:',
    ':celebrate:',
    ':tada:',
    ':sparkles:',
    ':rocket:',
    ':boom:',
    ':zap:',
    ':fire:',
    ':seedling:',
    ':herb:',
    ':leaves:',
    ':large_blue_circle:',
  ];

  const NYCTime = new Date().getUTCHours() - 5;
  const timeOfDay = getTimeOfDay(NYCTime);
  const GREETINGS = [
    'Hey there!',
    'Hello there!',
    'Hi there!',
    `Good ${timeOfDay}!`,
  ];

  const emoji = sample(EMOJIS);
  const greeting = sample(GREETINGS);
  const intro =
    length > 1
      ? 'Some new AzuBlue updates today'
      : `Just one AzuBlue update this ${timeOfDay}`;

  return `${emoji} ${greeting} ${intro}`;
}

function getTimeOfDay(time: number) {
  if (time <= 12) return 'morning';
  else if (time <= 18) return 'afternoon';
  else return 'evening';
}
