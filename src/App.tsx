import React from "react";
import { motion } from "framer-motion";
import "./App.css";

const App: React.FC = () => {
    return (
        <div className="container">
            <motion.div className="box" whileHover={{ scale: 1.1 }} />
            <motion.div className="box" whileHover={{ scale: 1.1 }} />
            <motion.div className="box" whileHover={{ scale: 1.1 }} />
            <motion.div className="box" whileHover={{ scale: 1.1 }} />
        </div>
    );
};

export default App;
