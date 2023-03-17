import React, { useState, useRef, useEffect } from "react";

import { motion } from "framer-motion";

function Slider() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    console.log("current width", carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  console.log("hi");
  return (
    <div>
      <motion.div className="carousel" ref={carousel}>
        <motion.div className="iner-carousel" drag="x" dragConstraints={{ right: 0, left: -width }}>
          <motion.div>
            <div className="item"> Item 100</div>
          </motion.div>
          <motion.div>
            {" "}
            <div className="item"> Item 200</div>{" "}
          </motion.div>
          <motion.div>
            {" "}
            <div className="item"> Item 300</div>{" "}
          </motion.div>
          <motion.div>
            {" "}
            <div className="item"> Item 400</div>{" "}
          </motion.div>
          <motion.div>
            {" "}
            <div className="item"> Item 500</div>{" "}
          </motion.div>
          <motion.div>
            {" "}
            <div className="item"> Item 600</div>{" "}
          </motion.div>
          <motion.div>
            {" "}
            <div className="item"> Item 700</div>{" "}
          </motion.div>
          <motion.div>
            {" "}
            <div className="item"> Item 800</div>{" "}
          </motion.div>
          <motion.div>
            {" "}
            <div className="item"> Item 900</div>{" "}
          </motion.div>
          <motion.div>
            {" "}
            <div className="item"> Item 1000</div>{" "}
          </motion.div>
          <motion.div>
            {" "}
            <div className="item"> Item 1100</div>{" "}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Slider;
