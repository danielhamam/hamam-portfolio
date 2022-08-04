export function createWordSphere() {
  const TagCloud = require('TagCloud');

  const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'Python', 'Java', 'ReactJS', 'Python',
    'Bash', 'Git', 'Flask', 'AngularJS', 
    'MySQL','Spring Boot', 'JSON', 'NodeJS',
    'Bootstrap', 'AWS', 'Salesforce', 'Agile'
  ];

  TagCloud('.wordsphere', myTags, {
    radius: 250,
    maxSpeed: 'fast',
    initSpeed: 'fast',
    direction: 135,
    keep: true,
  });
}