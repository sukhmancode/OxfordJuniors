import React, { useEffect, useState } from 'react'
import Nav from '../components/nav';
import Footer from '../components/footer';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';



const Event:React.FC = () => {
  interface Article {
    id:string,
    title:string;
    description:string;
    imageUrl:string;
  }
  const UsercollRef = collection(db,'eventsData')
  const [eventData,setEventData]=useState<Article[]>([])
  const getEvents = async() =>{
    try{
      const fetchQuery=await getDocs(UsercollRef)
      const fetchedEvents:Article[]= fetchQuery.docs.map((doc=>{
        const eventData=doc.data();
        
        return{
          id:doc.id,
          title:eventData.title,
          description:eventData.description,
          imageUrl:eventData.imageUrl
        }
      }));
      setEventData(fetchedEvents)
    }
    catch(err){
      console.log(err);
    }
  }


  useEffect(()=>{
    getEvents()
  },[])
  return (
    <div className='event'>
      <Nav></Nav>
      <div className='event-heading'>
      <h1><span className='gallery-our'>Our</span> <span className='gallery-gallery'>Events</span></h1>
      </div>
        <div className='news-data'>
          {
            eventData.map((article)=>(
              <div className='news-content'>
                <img src={article.imageUrl} alt=""width={300} />
              <h2>{article.title}</h2>
              <p>{article.description.slice(0,50)}</p>
              </div>
            ))
          }
        </div>
        <Footer/>
    </div>
  )
}
export default Event