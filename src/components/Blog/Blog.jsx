import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa6";
const Blog = ({blog,handleBookmarks,handleTotalReadTime}) =>{
    
   const {id,reading_time,author_title,cover,author_img,name,hashtags}=blog                        
  return (
      <div>
   <img className='w-[80%] mx-auto' src={cover} 
   alt={`COver of ${author_title}`} />
   <div  className='flex justify-between'>
   <div className='mx-[90px] flex items-center gap-6'>
     <div>
    <img className='rounded-full' src={author_img} alt="" />
    </div> 
    <div>
    <h2>{name}</h2> 
    <p>mar 14 (4 days ago)</p>                       
     </div>                        
   </div>   
   <div>
     <span>{reading_time} minite read</span>
     <button onClick={()=>handleBookmarks(blog)}> <FaBookmark></FaBookmark> </button>                         
</div>                     
   </div>

   {/* title */}
      <p className='text-2xl font-bold my-4'>Title:{author_title}</p>  

      <p>
       {
       hashtags.map((hash,idx)=><span className='mr-2 text-blue-500' key={idx}>{hash}</span>)
       }                       
    </p> 
    <button className='text-purple-800 underline font-bold'
     onClick={()=>handleTotalReadTime(id,reading_time)}>Mark as Read</button>                                                                                 
    </div>
     );
};

export default Blog;
Blog.propTypes={
      blog:PropTypes.object.isRequired ,
      handleBookmarks:PropTypes.func, 
      handleTotalReadTime:PropTypes.func                     
}