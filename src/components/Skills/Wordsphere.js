export function createWordSphere() {
  let width = 250;
  function handleResize() { width = window.innerWidth; }
  window.addEventListener("resize", handleResize)

  const TagCloud = require('TagCloud');

  const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'Python', 'Java', 'ReactJS', 'Python',
    'Bash', 'Git', 'Flask', 'AngularJS', 
    'MySQL','Spring Boot', 'JSON', 'NodeJS',
    'Bootstrap', 'AWS', 'Salesforce', 'Agile'
  ];

  TagCloud('.wordsphere', myTags, {
    radius: width - (width * .3),
    maxSpeed: 'fast',
    initSpeed: 'fast',
    direction: 135,
    keep: true,
  });
}