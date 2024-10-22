import PropTypes from 'prop-types';
import Bookmark from "../bookmarks/Bookmark";
const Bookmarks = ({bookmarks,readTime}) => {
  return (
<div className="w-1/3 text-center border">
     <h3>BBokMark:{bookmarks.length}</h3> 
     <div>
      <h3>Reading Time:{readTime}</h3>
     </div>
     {
        bookmarks.map(bookmark=>
          <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)                      
     }                              
</div>
   );
};

export default Bookmarks;
Bookmarks.propTypes={
 bookmarks:PropTypes.array,
 readTime:PropTypes.number
}
