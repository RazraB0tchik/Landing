import React from 'react';
import MenuElements from "./MenuElements";
import imgClose from "../img/х в шапке.png"
import {motion} from 'framer-motion'
const BurgerWindow = ({active, setActive}) => {

    let elements = [
        {id: 1, signature: "АКЦИЯ", link: "#button_sale"},
        {id: 2, signature: "КАК ПРИОБРЕСТИ", link: "#blockFour"},
        {id: 3, signature: "ПОЧЕМУ У НАС", link: "#thirdBlock"},
        {id: 4, signature: "БОЛЬШЕ КУХОНЬ", link: "#slider_show"},
        {id: 5, signature: "GIULIA NOVARS", link: "#startBlock"},
        {id: 6, signature: "КОНТАКТЫ", link: "#footerBlock"},
    ]

    const variants = {
        open: {opacity: 1, left: 0},
        close: {opacity: 0, left: "-100%"}
    }

    return (
        <motion.div className={active ? "burger_window active" : "burger_window"}
        animate={active ? "open" : "close"} variants={variants}>
            <div className="activePool">
                <div className="button_close_burger">
                    <div className="close" onClick={() => setActive(false)}><img className="close_img" src={imgClose}/></div>
                </div>
                <MenuElements setActiveWindow={setActive} massiv={elements} styleBlock="burgers" styleElement="element_burger_style"/>

                {/*<MenuElements massiv={elementsTwo} inner_class="line_burger_two" outer_class="main_burger_two" style="burger_style_two"/>*/}

                <div className="number_points">
                    <h2 className="phone_number">+7(999) 000-00-00</h2>
                </div>
            </div>
        </motion.div>
    );
};

export default BurgerWindow;