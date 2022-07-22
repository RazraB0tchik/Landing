import React from 'react';
import {motion} from 'framer-motion'
const variants = {
    open: {
        y: 0,
        opacity: 1,
    },
    close: {
        y: 100,
        opacity: 0,
    }
}
const variants_main_block = {
    open: {
        opacity: 1,
    },
    close: {
        opacity: 0,
    }
}

const ElementsSecondBlock = (props) => {
    return (
        <motion.div className="element_massive_block"
                    whileInView='open'
                    initial='close'
                    viewport={{ once: true, amount: 0.1}}
                    variants={variants_main_block} transition={{duration: 1}}>
            <div className={props.elementMassive.id===4 ? "block_with_content_lastElem" : "block_with_content"}>
                <div className="content_elements">
                    <div className="img_elem_block"><div className="img_inside_block"><motion.img variants={variants} transition={{duration: 1}} className="img_in_block" src={props.elementMassive.img}/></div></div>
                    <div className="text_block">
                        <div className="title_block"><motion.div variants={variants} transition={{duration: 1, delay: 0.5}} className="title_inside_block">{props.elementMassive.title}</motion.div></div>
                        <div className="text_in_block">
                            <motion.div className="main_text_block" variants={variants} transition={{duration: 1, delay: 0.5}}>{props.elementMassive.text}</motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ElementsSecondBlock;