import { GlobalContext } from '@/context/GlobalState';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useContext } from 'react';
import { IoClose } from 'react-icons/io5';

const VideoPopup = () => {
  const { videoPlaying, setVideoPlaying } = useContext(GlobalContext) as any;

  return (
    <AnimatePresence mode="wait">
      {videoPlaying ? (
        <motion.div
          key="video_player"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          viewport={{ once: true }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.5,
          }}
          className="fixed inset-0 z-50 flex h-[100vh] w-[100vw] items-center justify-center bg-black/80"
        >
          <div className="relative h-[90vh] w-[90vw] md:h-[80vh] md:w-[70vw] lg:h-[70vh] lg:w-[30vw] ">
            <IoClose
              onClick={() => setVideoPlaying('')}
              className="absolute -top-10 right-0 h-6 w-6 cursor-pointer text-brand_white"
            />
            <video controls muted loop autoPlay className="h-full w-full rounded-2xl object-cover">
              <source src={videoPlaying} type="video/webm" />
            </video>
          </div>
        </motion.div>
      ) : (
        <></>
      )}
    </AnimatePresence>
  );
};

export default VideoPopup;
