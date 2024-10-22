import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
  //console.log(bookmark)
      const {author_title}=bookmark;                      
    return (
        <div className='border bg-slate-300 p-3'>
           <h3>{author_title}</h3>                                                                               
     </div>
   );
};
export default Bookmark;
Bookmark.propTypes={
  bookmarks:PropTypes.object }