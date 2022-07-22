import React from 'react';
import redLogo from '../img/Лого джулия.png'
import {motion} from "framer-motion";
const FiveBlock = () => {

    const variants_main_block = {
        open: {
            opacity: 1,
            y:0
        },
        close: {
            opacity: 0,
            y:150
        }
    }



    const logotype_variant = {
        open: {
            opacity: 1,
        },
        close: {
            opacity: 0,
        }
    }

    return (
        <div className="five_block">
            <div className="inside_pool_fiveBlock">
                <motion.div className="text_fiveBlock"
                            whileInView={'open'} initial={'close'}
                            viewport={{ once: true, amount: 0.1}} variants={variants_main_block} transition={{duration: 1.5}}>
                    <div className="title_fiveBlock"><div>еще кухни</div></div>
                    <div className="text_in_fiveBlock">
                        <div>Текст о бренде, о том, что это лучшие кухни в России по мнению покупателей. Превосходство, качество, комфорт и конечно уникальность и вообще</div>
                    </div>
                </motion.div>
                <motion.div className="logotype_fiveBlock" whileInView={'open'} initial={'close'}
                            viewport={{ once: true, amount: 0.1}} variants={logotype_variant} transition={{duration: 1.5}}>
                    <div className="logotype_inside_fiveBlock"><img className="img_red_logo" src={redLogo}/></div>
                </motion.div>
            </div>
        </div>
    );
};

export default FiveBlock;