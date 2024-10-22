
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmark/Bookmarks'

import Header from './components/header/Header'

function App() {
  const [bookmarks,setbookmarks]=useState([]);
  const [readTime, setReadTime]=useState(0);
  
  const handleBookmarks=blog=>{
    const newBookmark=[...bookmarks,blog]
    setbookmarks(newBookmark)
  }

  const handleTotalReadTime=(id,time)=>{
   const newReadTime=(readTime+time)
   setReadTime(newReadTime);
   console.log("remove",id)
   const remaining=bookmarks.filter(bookmark=>bookmark.id !== id)
   setbookmarks(remaining)
  }
  return (
    <div>
      <Header></Header>
     <div className='border md:flex container mx-auto mt-5'>
     <Blogs handleBookmarks={handleBookmarks} 
     handleTotalReadTime={handleTotalReadTime}></Blogs>
    <Bookmarks bookmarks={bookmarks} readTime={readTime}></Bookmarks>
     </div>
    </div>
  )
}

export default App

