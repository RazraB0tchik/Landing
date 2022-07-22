import React, {useState} from 'react';
import {motion} from 'framer-motion'

const ElementMenu = (props) => {
    return (
        <div>
            <motion.a onClick={()=>props.active(false)} whileHover={{color: 'red'}} transition={{duration: 1}} href={props.elementMenu.link} className={props.styleElement}>{props.elementMenu.signature}</motion.a>
        </div>
    );
};

export default ElementMenu;