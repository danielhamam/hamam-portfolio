/*
* 
* Title: Wordsphere React Component
* NOTE: I added a width tracker via event listener to make tagCloud responsive
* Source: https://github.com/cong-min/TagCloud#use-event-delegation-bind-event-listener-to-tagcloud-instance-root-element
* 
*/

export function createWordSphere(tagCloud, width) {

  const TagCloud = require('TagCloud');

  const myTags = [
    'React.js', 'Next.js', 'Angular.js',
    'Tailwind', 'TypeScript', 'Redux',
    'JavaScript', 'CSS', 'HTML', 'MongoDB',
    'DynamoDB', 'Express.js', 'Supabase',
    'Python', 'Java', 'ReactJS', 'Firebase',
    'Bash', 'Git', 'Flask', 'AngularJS', 
    'MySQL', 'Spring Boot', 'PostgreSQL', 'Node.js',
    'Bootstrap', 'AWS', 'Salesforce', 'Agile',
    'Jenkins', 'Docker', 'JFrog', 'BlazeMeter', 
    'Kubernetes', 'Cypress', 'Figma'
  ];

  if (tagCloud != null) tagCloud.destroy()

  return TagCloud('.wordsphere', myTags, {
    radius: width > 235 ? 235 : width < 45 ? 45 : width,
    maxSpeed: 'slow',
    initSpeed: 'slow',
    direction: 135,
    keep: true,
  });
}