import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

const App: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const initialPosition = (index: number) => {
        return {
            x: index === 0 ? "-100%" : index === 1 ? "0%" : index === 2 ? "-100%" : index === 3 ? "0%" : "",
            y: index === 0 ? "-100%" : index === 1 ? "-100%" : index === 2 ? "0%" : index === 3 ? "0%" : ""
        };
    };

    return (
        <div className="container">
            <AnimatePresence>
                {[0, 1, 2, 3].map((index) => (
                    <div key={index}>
                        {activeIndex === index ? (
                            <motion.div
                                className="box"
                                onClick={() => handleClick(index)}
                                initial={{
                                    scale: 1,
                                    opacity: 0.5,
                                    ...initialPosition(index),
                                }}
                                animate={{
                                    scale: 1.5,
                                    x: "-50%",
                                    y: "-50%",
                                    opacity: 1,
                                }}
                                exit={{
                                }}
                                style={{
                                    position: "fixed",
                                    top: "50%",
                                    left: "50%",
                                    zIndex: 10,
                                }}
                                key={`active-${index}`}
                                transition={{ duration: 0.3 }}
                            />
                        ) : (
                            <motion.div
                                className="box"
                                onClick={() => handleClick(index)}
                                whileHover={{ scale: 1.1 }}
                                animate={{
                                    opacity: 0.5,
                                }}
                                key={`inactive-${index}`}
                            />
                        )}
                    </div>
                ))}
            </AnimatePresence>
            {activeIndex !== null && (
                <div
                    className="overlay"
                    onClick={() => setActiveIndex(null)}
                ></div>
            )}
        </div>
    );
};

export default App;
