import { motion } from 'framer-motion';

const SparkleIcon = ({ color }) => (
    <svg width="100%" height="100%" viewBox="0 0 68 68" fill="none">
        <path
            d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
            fill={color}
        />
    </svg>
);

export const Sparkle = ({ size, color, delay, top, left, bottom, right, duration }) => {
    return (
        <motion.div
            style={{
                position: 'absolute',
                width: size,
                height: size,
                top: top,
                left: left,
                bottom: bottom,
                right: right,
                pointerEvents: 'none',
                zIndex: -1, // Make sure it can go behind elements if needed
            }}

            initial={{ scale: 0, opacity: 0, rotate: 0 }}
            animate={{
                scale: [0, 1, 1, 0],
                opacity: [0, 1, 1, 0],
                rotate: [0, 90, 180]
            }}
            transition={{
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                delay: delay
            }}
        >
            <SparkleIcon color={color} />
        </motion.div>
    );
};

const CornerSparkles = () => {
    return (
        <div style={{ position: 'absolute', bottom: '-40px', right: '-40px', width: '250px', height: '250px', pointerEvents: 'none', zIndex: 10 }}>
            <Sparkle size={15} color="#2ecc71" delay={0} top="15%" left="25%" duration={2.5} />
            <Sparkle size={20} color="#0079c1" delay={0.8} top="40%" left="80%" duration={2} />
            <Sparkle size={25} color="#58d68d" delay={1.5} top="80%" left="35%" duration={3} />
        </div>
    );
};

export default CornerSparkles;
