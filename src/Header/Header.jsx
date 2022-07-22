import React, {useState} from 'react';
import MenuElements from "./MenuElements";
import './css/Header.css';
import '../Fonts/fonts.css';
import imgHeader1 from "../img/Мебель арт груп лого.png"
import imgHeader2 from "../img/х в шапке.png"
import imgHeader3 from "../img/Лого джулия белый.png"
import imgHeader4 from "../img/локация в шапке.png"
import BurgerWindow from "./BurgerWindow";
import burger_button from "../img/burger_logo.png"
import {motion} from 'framer-motion';
const Header = ({elements}) => {


    const [active, setActive] = useState(false);


    return (
        <div className="headerMenu">
            <div className="block_with_logo_and_titles">
                <div className="titles">
                    <div className="first_title"><div className="first_title_inside_block"><img className="img_header_one" src={imgHeader1}/></div></div>
                    <div className="button_close"><div className="close_inside_block"><img className="img_header_two" src={imgHeader2}/></div></div>
                    <div className="logotype"><div className="logotype_inside_block"><img className="img_header_three" src={imgHeader3}/></div></div>
                </div>
            </div>
            <MenuElements massiv={elements} styleBlock="header_elements" styleElement="link_element"/>
            <div className="location">
                <div className="inside_block_location">
                    <div className="marker_map_img"><div className="block_marker"><img className="marker" src={imgHeader4}/></div></div>
                    <div className="text_location"><div className="text_city">МОСКВА</div></div>
                </div>
            </div>
            <div onClick={() => setActive(true)} className="burger_button"><div className="burger_element"><img className="burger_img" src={burger_button}/></div></div>

            <BurgerWindow active={active} setActive={setActive}/>
        </div>
    );
};

export default Header;