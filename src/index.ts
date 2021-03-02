import got from 'got';

console.log(process.env.TEST);

(async () => {
  const response = await got('https://jsonplaceholder.typicode.com/todos/1');
  console.log(response.body);
})();
