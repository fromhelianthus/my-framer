import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

const App: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="container">
            {[0, 1, 2, 3].map((index) => (
                <div key={index}>
                    {activeIndex === index && (
                        <AnimatePresence>
                            <motion.div
                                className="box"
                                onClick={() => handleClick(index)}
                                initial={{
                                    scale: 1,
                                    opacity: 0.5,
                                    x:
                                        index === 0 || index === 2
                                            ? "-100%"
                                            : "",
                                    y:
                                        index === 0 || index === 2
                                            ? ""
                                            : "-100%",
                                }}
                                animate={{
                                    scale: 1.5,
                                    x: "-50%",
                                    y: "-50%",
                                    opacity: 1,
                                }}
                                exit={{}}
                                style={{
                                    position: "fixed",
                                    top: "50%",
                                    left: "50%",
                                    zIndex: 10,
                                }}
                                key={index}
                                transition={{ duration: 0.3 }}
                            />
                        </AnimatePresence>
                    )}
                    {activeIndex !== index && (
                        <motion.div
                            className="box"
                            onClick={() => handleClick(index)}
                            whileHover={{ scale: 1.1 }}
                            animate={{
                                opacity: 0.5,
                            }}
                            key={index}
                        />
                    )}
                </div>
            ))}
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
