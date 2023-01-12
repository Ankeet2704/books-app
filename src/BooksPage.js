import styles from './BooksPage.module.css';
import { useState } from 'react';
import axios from 'axios';

function BooksPage(){
  const [BooksArray, setBooks] = useState([]);

    function  getBooks()
    {
        let url = "http://localhost:3500/books";

        axios.get(url).then( resData => 
        {
           // console.log(resData.data.records);
           setBooks(resData.data);
           console.log(resData.data)
        });
    }


    let result =  BooksArray.map((item,index) =>
        <div key={index} className={styles.productCard}>
            <img src={item.book_image} width="150px" height="200px"/>
            <br></br>
            <h5>{item.book_title}</h5>
            <br></br>
            <p>Category: {item.book_author}</p>
            <p>Price: {item.year}</p>
        </div>);
  
  return (    
      <> 
        <h3>Making Server Calls uisng AXIOS in React</h3>
        <hr/>
        <input type="button" className="btn btn-primary" value="Get Products" onClick={getBooks} />
        <br/><br/>
        <div className={styles.mainDiv}>
          {result}
        </div>
      </>   
  );
}

export default BooksPage;