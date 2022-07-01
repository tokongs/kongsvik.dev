import { motion } from "framer-motion";

type Props = {
    children: React.ReactNode,
};

const AnimatedPage = ({ children }: Props) => {
    return (
        <motion.div
            transition={{ duration: 0.25, ease: "linear" }}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedPage;