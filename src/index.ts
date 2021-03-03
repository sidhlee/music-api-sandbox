import { Search } from './model/search';

// console.log(process.env.TEST);

// (async () => {
//   const response = await got('https://jsonplaceholder.typicode.com/todos/1');
//   console.log(response.body);
// })();

(async () => {
  const search = new Search('artist', 'James Blake');
  await search.fetch();
  await search.save();

  console.log(search.searchResult);
})();
