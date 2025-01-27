import * as motion from "motion/react-client";
export default function Hero() {
  const titleName = "Designer";

  return (
    <main className="p-10 max-w-[1120px] mx-auto h-svh flex items-center mt-[-100px]">
      <div>
        <h1 className="flex text-6xl sm:text-8xl md:text-[140px] lg:text-[180px] font-bold">
          <motion.span
            initial={{ rotateX: 90 }}
            animate={{ rotateX: [0, 360, 360, 0] }}
            transition={{
              duration: 2,
              times: [0, 0.5, 0.5, 1],
            }}
          >
            D
          </motion.span>
          <motion.span
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 200,
              damping: 10,
              ease: "linear",
              delay: 0.3,
            }}
          >
            e
          </motion.span>
          <span className="relative overflow-hidden">
            <motion.div
              initial={{ y: 200 }}
              animate={{
                y: [200, -180, 20, 0],
              }}
              transition={{
                duration: 2.6,
                times: [0, 0.4, 0.8, 1],
                ease: [0.42, 0, 0.58, 1],
                delay: 0.5,
              }}
              className="block"
            >
              <span>s</span>
              <span className="absolute top-[80%] left-0">s</span>
            </motion.div>
          </span>
          <motion.span
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 200,
              damping: 10,
              ease: "linear",
              delay: 1.4,
            }}
            className="relative"
          >
            i
          </motion.span>
          <motion.span
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 200,
              damping: 10,
              ease: "linear",
              delay: 1.4,
            }}
            className="relative"
          >
            g
          </motion.span>
          <motion.span
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 200,
              damping: 10,
              ease: "linear",
              delay: 1.4,
            }}
            className="relative"
          >
            ner
          </motion.span>
        </h1>

        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 1.5,
          }}
          className="text-6xl sm:text-8xl md:text-[140px] lg:text-[180px] font-bold"
        >
          Developer
        </motion.h1>
        <motion.p
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 200,
            damping: 10,
            ease: "linear",
            delay: 1.8,
          }}
          className="text-xl md:text-2xl mt-10"
        >
          I&apos;m <span className="font-bold">Taisei Kurachi</span>, I
          specialize in crafting efficient & aesthetic Front-End / Product
          experiences.
        </motion.p>
      </div>
    </main>
  );
}
