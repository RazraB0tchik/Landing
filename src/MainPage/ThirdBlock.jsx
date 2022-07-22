import React from 'react';
import diamond_img from "../img/алмаз 2 блок.png";
import pen_img from "../img/карандаш 2 блок.png";
import block_img from "../img/текстура 2 блок.png";
import heart_img from "../img/сердце 2 блок.png";
import {motion} from 'framer-motion'
import img_first_line_one from '../img/gulia_lenta_1.jpg'
import img_first_line_two from '../img/gulia_lenta_1_2.jpg'
import white_arrow from '../img/стрелка.png'
const variants = {
    open: {
        y:0,
        opacity: 1,
    },
    close: {
        y:100,
        opacity: 0,
    }
}
const variantsText = {
    open: {
        y:0,
        opacity: 1,
    },
    close: {
        y:300,
        opacity: 0,
    }
}
const variantsPictures = {
    open: {
        opacity: 1,
    },
    close: {
        opacity: 0,
    }
}
const ThirdBlock = ({active, setActive, setTitle}) => {
    const ChangeParams = () =>{
        setActive(true);
        setTitle("ПОЛУЧИТЬ ВАРИАНТЫ МАТЕРИАЛОВ ДЛЯ КУХНИ");
    }
    return (
        <div id="thirdBlock" className="third_block">
            <motion.div className="information_on_third_block"
                        whileInView='open'
                        initial='close'
                        viewport={{ once: true, amount: 0.1}}>
                <div className="content_pool_third">
                    <div className="title_third_block"><motion.div variants={variants} transition={{duration: 1.5}} className="title_third">вы получаете:</motion.div></div>
                    <div className="block_with_text_third">
                        <motion.div className="text_inside_block" variants={variantsText} transition={{duration: 1.5, delay: 0.5}}>
                        <div className="elem_text_in_third_block"><div className="point_red_kub"></div><div className="text_element_three"><p className="text_inside_third">Премиум кухня с выгодой <span className="red_elem">до 15: от стоимости</span></p></div></div>
                        <div className="elem_text_in_third_block"><div className="point_red_kub"></div><div className="text_element_three"><p className="text_inside_third">Проект эргономичного использования пространства</p></div></div>
                        <div className="elem_text_in_third_block"><div className="point_red_kub"></div><div className="text_element_three"><p className="text_inside_third">Подбор современных решений бытовой техники</p></div></div>
                        <div className="elem_text_in_third_block"><div className="point_red_kub"></div><div className="text_element_three"><p className="selection">Немецкие материалы <span className="white_elem">высокого качества</span></p></div></div>
                        <div className="elem_text_in_third_block"><div className="point_red_kub"></div><div className="text_element_three"><p className="text_inside_third">Еще что-то очень важное вставить сюда</p></div></div>
                        </motion.div>
                    </div>
                    <div className="button_third">
                        <motion.div onClick={ChangeParams} className="button_block" variants={variants} transition={{duration: 1}} whileHover={{backgroundColor: 'rgb(37, 37, 37)', color: "white"}}>
                            <p>ПОДОБРАТЬ МАТЕРИАЛЫ</p>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
            <motion.div whileInView='open'
                        initial='close'
                        viewport={{ once: true, amount: 0.1}} variants={variantsPictures} transition={{duration: 2, delay: 0.5}} className="pictures_third_block">
                <div className="first_line_picture">
                    <div className="block_with_picture">
                        <div className="elem_line_one"><img className="img_elem_first" src={img_first_line_one}/></div>
                        <div className="elem_line_one"><img className="img_elem_first" src={img_first_line_two}/></div>
                        <div className="elem_line_one"><img className="img_elem_first" src={img_first_line_one}/></div>
                    </div>
                </div>
                <div className="second_line_picture">
                    <div className="second_block_with_picture">
                        <div className="elem_line_two"><img className="img_elem_two" src={img_first_line_one}/></div>
                        <div className="elem_line_two_text">
                            <div className="inside_block_line_two">
                                <div className="mini_title">экономия</div>
                                <div className="prise_line_two">28 000.-</div>
                            </div>
                        </div>
                        <div className="elem_line_two"><img className="img_elem_two" src={img_first_line_one}/></div>
                        <div className="last_elem_two">
                            <div className="arrow_third">
                                <img className="arrow_img" src={white_arrow}/>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ThirdBlock;