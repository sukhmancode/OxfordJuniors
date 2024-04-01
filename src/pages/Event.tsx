import React, { useEffect, useState } from 'react'
import Nav from '../components/nav';
import Footer from '../components/footer';

const Event:React.FC = () => {
  interface Article {
    author: string;
    title:string;
    description:string;
    urlToImage:string
  }
  const apiUrl = "https://newsapi.org/v2/everything?q=devin";
  
  const fetchData = async () => {
    try {
      const response = await fetch(`${apiUrl}&apiKey=93f1d75f02d4450b80794c2a4128668c`);
      const data = await response.json();
      console.log(data);
      setNewsData(data.articles);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const [newsData,setNewsData]=useState<Article[]>([]);


  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div className='event'>
      <Nav></Nav>
      <div className='event-heading'>
      <h1><span className='gallery-our'>Our</span> <span className='gallery-gallery'>Events</span></h1>
      </div>
        <div className='news-data'>
          {
            newsData.slice(0,10).map((article,idx)=>(
              <div key={idx} className='news-content'>
                <img src={article.urlToImage} alt="" width={200}/>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              </div>
            ))
          }
        </div>
        <Footer/>
    </div>
  )
}
export default Event