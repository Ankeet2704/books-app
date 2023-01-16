import styles from './BooksPage.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function BooksPage(){

  const url = "http://localhost:3000/books/";

  const [BooksArray, setBooks] = useState([]);
  const [book_no, setBookno] = useState("");
  const [book_title, setBooktitle] = useState("");
  const [book_author, setBookauth] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [book_image, setBookimg] = useState("");

  useEffect(()=>{getBooks()}, [BooksArray]);
  
    function  getBooks()
    {
        axios.get(url).then( resData => 
        {
           setBooks(resData.data);
        });
    }

    function  deleteBooks(e)
    {
      const book_no = e.target.parentElement.childNodes[0].textContent;
      axios.delete(url + book_no).then(resData => {
        getBooks();
      });
    }

    function  selectBook(e)
    { 
      const book_no = e.target.parentElement.childNodes[0].textContent;
      axios.get(url + book_no).then( resData => {
        let bookObj = resData.data;  // it returns single object
        console.log(resData.data);
        setBookno(bookObj.book_no);
        setBooktitle(bookObj.book_title);
        setBookauth(bookObj.book_author);
        setGenre(bookObj.genre);
        setYear(bookObj.year);
        setBookimg(bookObj.book_image);
      });

     }

    function  addBook()
    {
        let bookObj = {};
        bookObj.book_no = book_no; 
        bookObj.book_title = book_title; 
        bookObj.book_author = book_author; 
        bookObj.genre = genre; 
        bookObj.year = year; 
        bookObj.book_image = book_image; 

        axios.post(url, bookObj).then(resData => {
          let tempArray = [...BooksArray];
          tempArray.push(resData.data);
          setBooks(tempArray);
        });
        
    }

    function  updateBook()
    {
        let bookObj = {};
        bookObj.book_no = book_no; 
        bookObj.book_title = book_title; 
        bookObj.book_author = book_author; 
        bookObj.genre = genre; 
        bookObj.year = year; 
        bookObj.book_image = book_image;  

        axios.put(url + bookObj.book_no,  bookObj).then(resData => {
          getBooks();
        });
        
    }


    let result =  BooksArray.map((item,index) =>
        <div key={index} className={styles.productCard}>
            <p>{item.book_no}</p>
            <img src={item.book_image} width="150px" height="200px"/>
            <br></br>
            <h5>{item.book_title}</h5>
            <br></br>
            <p>Author: {item.book_author}</p>
            <p>Release Year: {item.year}</p>
            <p>Genre: {item.genre}</p>
            <input type="button" className="btn btn-warning" value="Delete" onClick={deleteBooks} />
            | 
            <input type="button" className="btn btn-primary" value="Select" onClick={selectBook} />
        </div>);
  
  return (    
      <> 
        <h3>Library</h3>
        <hr/>
        <input placeholder="book_no"  value={book_no}  onChange={e => setBookno(e.target.value)}  />
        <input placeholder="book_title"  value={book_title} onChange={e => setBooktitle(e.target.value)}  />
        <input placeholder="book_author" value={book_author}  onChange={e => setBookauth(e.target.value)}  />
        <input placeholder="genre" value={genre}  onChange={e => setGenre(e.target.value)}  />
        <input placeholder="year" value={year}  onChange={e => setYear(e.target.value)}  />
        <input placeholder="book_image" value={book_image}  onChange={e => setBookimg(e.target.value)}  />
        <br/><br/>

          <div className="btn-group">
          {/* <input type="button" className="btn btn-warning" value="Get Book" onClick={getBooks} /> */}
          <input type="button" className="btn btn-success" value="Add Book" onClick={addBook} />
          <input type="button" className="btn btn-warning" value="Update Book" onClick={updateBook} />
          </div>
        <br/><br/>
        <br/><br/>
        <div className={styles.mainDiv}>
          {result}
        </div>
      </>   
  );
}

export default BooksPage;