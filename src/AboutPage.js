import styles from './AboutPage.module.css';

function AboutPage(){
  return(
    <div className={styles.aboutPage}>

      <div className={styles.headingDiv}>
      <h1 className={styles.heading} >About BiblioSite</h1>
      </div>
      
      <div className={styles.aboutDiv}>
        <div className={styles.about}>
          <h2>Who We Are</h2>
          <h4>Bibliosite is India’s Largest and Cheapest Online Bookstore offering 40+ Million selections.</h4>
          <p>“I declare after all there is no enjoyment like reading!”</p>
          <p>- Jane Austen, Pride and Prejudice.</p>
        </div>
      </div>

      <div className={styles.aboutInfo}>
        <h2>What We Do</h2>
        <br></br>
        <p>Dear readers,</p>
        <p>We offer huge collection of books in diverse category of Fiction, Non-fiction, Biographies, History, Religions, Self -Help, Children. We also sell in vast collection of Investments and Management, Computers, Engineering, Medical, College and School text references books proposed by different institutes as syllabus across the country. Besides to this, we also offer a large collection of E-Books at very fair pricing.</p>
        <p>We attempt to extend the customer satisfaction by catering easy user-friendly search engine, quick and user-friendly payment options and quicker delivery systems. Upside to all of this, we are disposed to provide exciting offers and pleasant discounts on our books.</p>
        <p>As well, we humbly invite all the sellers around the country to partner with us. We will surely provide you the platform for many sparkling domains and grow the “BooksWagon” family.We would like to thank you for shopping with us. You can write us for any new thoughts at “email-id” helping us to improvise for the reader satisfaction</p>
      </div>
      
    </div>
  );
}

export default AboutPage;