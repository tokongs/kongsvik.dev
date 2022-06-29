import { motion } from "framer-motion";

type Props = {
    children: React.ReactNode,
};

const AnimatedPage = ({ children }: Props) => {
    return (
        <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.25, ease: "linear" }}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedPage;