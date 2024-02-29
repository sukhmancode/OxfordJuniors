import React, { useEffect, useState } from 'react'

const Event:React.FC = () => {
  interface Article {
    author: string;
    title:string;
    description:string;
  }
  const apiUrl = "https://newsapi.org/v2/everything?q=tesla";
  
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
      <div className='notice-board'>
        <img src="notice3.svg" alt="" />
        </div>
        <div className='news-data'>
          {
            newsData.slice(0,5).map((article,idx)=>(
              <div key={idx} className='news-content'>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Event