import React from 'react';
import {motion} from 'framer-motion'
import ElementsInLineFoursBlock from "./ElementsInLineFoursBlock";

const elements =[
    {id: 1, number: "01/", title_one: "ШАГ ПЕРВЫЙ:", title_two: "ОСТАВИТЬ ЗАПРОС", text: "Вы проделали уже половину пути! Оставьте свои вопросы или замеры и наш менеджер свяжется с вами"},
    {id: 2, number: "02/", title_one: "ШАГ ВТОРОЙ:", title_two: "НАРИСОВАТЬ", text: "Оставьте это нашим дизайнерам, мы уделим внимание каждой детали и подготовим прект, который вас впечатлит"},
    {id: 3, number: "03/", title_one: "ШАГ ТРЕТИЙ:", title_two: "НАСЛАЖДАТЬСЯ", text: "Ваше время - самое ценное, поэтому весь процесс мы берем на себя! Ваша главная задача - наслаждаться результатом"},
]
const variantsBlock = {
    open: {
        opacity: 1,
    },
    close: {
        opacity: 0,
    }
}

const BlockFour = ({setTitle, active, setActive}) => {
    const ChangeParams = () =>{
        setActive(true);
        setTitle("ХОЧУ КУХНЮ ПО СПЕЦИАЛЬНОЙ ЦЕНЕ");
    }
    return (
        <div id="blockFour" className="fours_block">
            <motion.div className="main_four_block_background" whileInView={'open'} initial={'close'}
                        viewport={{ once: true, amount: 0.1}} variants={variantsBlock} transition={{duration: 1.5}}>
                <div className="text_pull_four_block">
                    {elements.map(lineElement => <ElementsInLineFoursBlock lineElement = {lineElement} key={lineElement.id}/>)}
                </div>
            </motion.div>
            <div id="button_sale" className="button_sale_blockFour">
                <motion.div onClick={ChangeParams} className="button_blockFour" whileInView={'open'} initial={'close'}
                            viewport={{ once: true, amount: 0.6}} variants={variantsBlock} transition={{duration: 1.5}}>
                    <div className="block_text_in_sale">
                        <div className="sale_number">
                            <div>-15%</div>
                        </div>
                        <div className="sale_name">
                            <div className="sale_name_inside">НА КУХНЮ HADID</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default BlockFour;