import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

const App: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [isMoving, setIsMoving] = useState<boolean>(false);

    const handleClick = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const initialPosition = (index: number) => {
        return {
            x:
                index === 0
                    ? "-100%"
                    : index === 1
                    ? "0%"
                    : index === 2
                    ? "-100%"
                    : index === 3
                    ? "0%"
                    : "",
            y:
                index === 0
                    ? "-100%"
                    : index === 1
                    ? "-100%"
                    : index === 2
                    ? "0%"
                    : index === 3
                    ? "0%"
                    : "",
        };
    };

    const toggleCircle = () => {
        setIsMoving(!isMoving); // 버튼 클릭 시 원의 위치 이동 상태 변경
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
                                exit={{}}
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

            {/* 동그란 원 */}
            <motion.div
                className="circle"
                animate={{
                    x: isMoving ? "50%" : "-50%", // 2번째 박스 -> 4번째 박스로 이동
                    y: isMoving ? "50%" : "-50%", // 2번째 박스 -> 4번째 박스로 이동
                }}
                transition={{
                    duration: 1, // 이동 시간
                    ease: "easeInOut",
                }}
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "#fcba03",
                    borderRadius: "50%",
                    width: "50px", // 동그라미 크기
                    height: "50px",
                }}
            />

            {/* 버튼 */}
            <button onClick={toggleCircle} className="toggle-button">
                Switch
            </button>

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
