let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();

secretMessage.push('to', 'Program');
// console.log(secretMessage);

secretMessage[secretMessage.indexOf('easily')] = 'right';
secretMessage.shift();
secretMessage.unshift('Programming');
const getIndex = secretMessage.indexOf('get');
const deleteThese = secretMessage.indexOf('time,') + 1;

secretMessage.splice(getIndex, deleteThese - getIndex, 'know,');

console.log(secretMessage.join(' '));