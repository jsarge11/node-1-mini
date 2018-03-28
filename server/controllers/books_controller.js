let books = [];
let id = 0

module.exports = {
 read: (req, res)=> {
  res.status(200).send( books );
 },
 create: (req, res) => {

  let book = {
   title: req.body.title, 
   author: req.body.author,
   id: id
  }
  
  id++;
  books.push(book);
  res.status(200).send ( books ); 
 },

 //does params come from id in the url?
 // and the request comes from actual input?


 update: (req, res) => {
  let index = null;
  books.forEach((book, i) => {
    if(book.id === Number(req.params.id)) index = i;
  })
  books[ index ] = {
    id: books[ index ].id,
    title: req.body.title || books[ index ].title,
    author: req.body.author || books[ index ].author
  };
  res.status(200).send( books );
 },


 delete: (req, res) => {
   let index = null;
   books.forEach((book, i) => {
    if (book.id === +(req.params.id)) index = i;
   })

   books.splice(index, 1);
   

   res.status(200).send ( books );
  }
}
