import React from 'react';
import {motion} from 'framer-motion'

const variantsTitles = {
    hover: {
        color: 'rgb(212, 48, 48)',
    }
}

const variantsBlock = {
    open: {
        opacity: 1,
        y: 0,
    },
    close: {
        opacity: 0,
        y: 150,
    }
}

const ElementsInLineFoursBlock = (props) => {
    return (
        <div className="elementInLine">
            <motion.div className="inside_pool_elem_blockFour" whileHover={'hover'} whileInView={'open'} initial={'close'}
                        viewport={{ once: true, amount: 0.1}} variants={variantsBlock} transition={{duration: 1.5}}>
                <div className="number_blockFour">
                    <motion.div className="number_pool_blockFour" variants={variantsTitles} transition={{duration: 0.5}}>
                        <div>{props.lineElement.number}</div>
                    </motion.div>
                </div>
                <div className="text_elem_blockFour">
                    <div className="title_blockFour">
                        <motion.div className="title_one_blockFour"  variants={variantsTitles} transition={{duration: 0.5}}>
                            <div>
                                {props.lineElement.title_one}
                            </div>
                        </motion.div>
                        <motion.div className="title_two_blockFour" variants={variantsTitles} transition={{duration: 0.5}}>
                            <div>
                                {props.lineElement.title_two}
                            </div>
                        </motion.div>
                    </div>
                    <div className="text_blockFour">
                        <div className="text_in_blockFour">{props.lineElement.text}</div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ElementsInLineFoursBlock;