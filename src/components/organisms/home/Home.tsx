import Button from '@/components/atoms/Button';
import { AiFillPlayCircle } from 'react-icons/ai';

const Hero = () => {
  return (
    <div className="h-[90vh] min-h-[50rem] w-screen bg-white flex flex-col items-center">
      <h1 className='text-5xl'>Make Memories Come Alive!</h1>
      <p>Re-live your memories in Video Prints with extraordinary AR Experiences!</p>
      <div>
        <Button>Download App</Button>
        <div className='flex items-center'>
          <AiFillPlayCircle className='text-brand_yellow_1' />
          <p>Play Demo</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
