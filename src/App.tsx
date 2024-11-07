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
                                    zIndex: 10, // 중앙으로 온 박스는 높은 z-index
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
                                style={{ zIndex: 5 }} // 다른 박스들도 z-index를 설정
                                key={`inactive-${index}`}
                            />
                        )}
                    </div>
                ))}
            </AnimatePresence>

            {/* 동그란 원 */}
            <motion.div
                className="circle"
                initial={{
                    x: "30%",
                    y: "30%",
                }}
                animate={{
                    x: isMoving ? "-30vw" : "30%", // 버튼 클릭 시 위치 이동
                    y: isMoving ? "30vh" : "30%",
                }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                }}
                style={{
                    position: "absolute",
                    top: "30%",
                    left: "60%",
                    backgroundColor: "#93f3f5",
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    zIndex: 1, // 동그라미가 박스 아래로 배치되도록 낮은 z-index
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
