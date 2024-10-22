
import image from '../../assets/images/profile.png'
const Header = () => {
                              return (
  <div className='flex justify-between p-5 border-b-2 mx-4 items-center'>
   <h1 className=' text-3xl'>Knowledge cafe</h1>
   <img src={image} alt="" />                                                                              
  </div>
                              );
};

export default Header;