import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleBookmarks,handleTotalReadTime}) => {
   const [blogs,setBlogs]=useState([]);
    
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))                      
    },[])
      return (
     <div className="w-2/3 border border-red-500">
         <h1>Blogs</h1>   
         {
           blogs.map(blog=> <Blog 
            handleBookmarks={handleBookmarks} 
          handleTotalReadTime={handleTotalReadTime}
            key={blog.id} blog={blog}></Blog>)                   
         }                                                                           
     </div>
      );
};
export default Blogs;
Blogs.propTypes={
   handleBookmarks:PropTypes.func, 
   handleTotalReadTime:PropTypes.func
}