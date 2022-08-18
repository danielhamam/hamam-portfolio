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
    'JavaScript', 'CSS', 'HTML',
    'Python', 'Java', 'ReactJS', 'Python',
    'Bash', 'Git', 'Flask', 'AngularJS', 
    'MySQL','Spring Boot', 'JSON', 'NodeJS',
    'Bootstrap', 'AWS', 'Salesforce', 'Agile'
  ];

  if (tagCloud != null) tagCloud.destroy()

  return TagCloud('.wordsphere', myTags, {
    radius: width,
    maxSpeed: 'slow',
    initSpeed: 'slow',
    direction: 135,
    keep: true,
  });
}