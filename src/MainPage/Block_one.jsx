import React, {useState} from 'react';
import img_background from '../img/главная на обрезку.webp'
import img_arrow_red from '../img/стрелка красная.png'
import img_mouse from "../img/мышь.png"
import {motion} from 'framer-motion'
import Form from "./Form";
import Main from "../Pages/Main";

const BlockOne = ({active, setActive, setTitle}) => {

    const ChangeParams = () =>{
        setActive(true);
        setTitle("ХОЧУ КУХНЮ ПО СПЕЦИАЛЬНОЙ ЦЕНЕ");
    }

    return (
        <motion.div id="startBlock" className="first_block" initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 1.5}}>
            <div className="block_background" onClick={ChangeParams}>
            {/*<img className="background_img_block_one" src={img_background}/>*/}
                <motion.div className="block_with_info_on_background" initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 1, delay: 0.5}}>
                    <div className="red_titles">
                        <div className="title_one"><motion.div initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} transition={{duration: 1, delay: 1}} className="title_text_one">ПРЕМИУМ КУХНЯ</motion.div></div>
                        <div className="title_two_plus_button">
                            <div className="title_text_two"><motion.div initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} transition={{duration: 1, delay: 1}}>HADID OT GIULIA NOVARS</motion.div></div>
                            <div className="button_on_title">
                                <div className="arrow_inside_block">
                                <img className="arrow" src={img_arrow_red}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="prise_and_cursor">
                        <motion.div className="prise" initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} transition={{duration: 1, delay: 1}}>
                            <div className="cursive_text">om </div>
                            <div className="bold_text"> 120 000.- </div>
                            <div className="cursive_text_two">за м³</div>
                        </motion.div>
                        <motion.div className="cursor" initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 1, delay: 1}}>
                            <div className="cursor_text">
                                <div className="block_cursor">
                                <img className="mouse" src={img_mouse}/>
                                </div>
                            </div>
                            <div className="text_to_continue">
                                <div>ПОДРОБНЕЕ О ПРЕДЛОЖЕНИИ</div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default BlockOne;