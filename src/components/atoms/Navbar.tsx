import Image from 'next/image';
import Button from './Button';

const Navbar = ({grayBg = false}: {grayBg?: boolean}) => {
  return (
    <nav className={`px-[10%] py-6 flex justify-between items-center ${grayBg ? "bg-brand_gray_1" : "bg-brand_white"}`}>
      <div className="h-12 w-40 relative">
        <Image
          src="https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/common/sm-logo-blue.svg"
          alt="smatphotos"
          fill
        />
      </div>
      <Button>Download App</Button>
    </nav>
  );
};

export default Navbar;
