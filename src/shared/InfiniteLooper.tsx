import Image from "next/image";
// import {motion} from "framer-motion"

const InfiniteLooper = function InfiniteLooper({
  list,
  // direction = 'down',
}: {
  list: any[];
  // direction: 'up' | 'down';
}) {
  return (
    <div className="h-[40rem] overflow-y-hidden px-4">
      <div
        // initial={{
        //   y: direction === 'down' ? '-50.5%' : '0',
        // }}
        // animate={{
        //   y: direction === 'down' ? '0' : '-50.5%',
        // }}
        // transition={{ duration: 30, type: 'tween', repeat: Infinity, repeatType: 'loop', repeatDelay: 0, ease: "linear" }}
        className="flex flex-col gap-4"
      >
        {[...list, ...list].map((subItem, ind) => {
          return (
            <div
              key={`subItem_${ind}`}
              className={`h-min w-full rounded-3xl bg-brand_white p-6 shadow-lg `}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image src={subItem.avatar_url} alt={subItem.username} fill />
                </div>
                <div>
                  <p className="font-black text-brand_black">{subItem.name}</p>
                  <p className="text-sm text-brand_gray_6">@{subItem.username}</p>
                </div>
              </div>
              <p className="text-brand_black">{subItem.comment}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InfiniteLooper;