import React from 'react';
import ElementMenu from "../Header/ElementMenu";
import img_map from '../img/лоация в шапке и подвале.png'
import img_arrow from '../img/стрелка красная.png'
import logo_one from '../img/Мебель арт груп лого.png'
import close_img from '../img/х в шапке.png'
import logo_two from '../img/Лого джулия белый.png'
const Footer = ({elements, active, setActive, setTitle}) => {
    const ChangeParams = () =>{
        setActive(true);
        setTitle("ХОЧУ КУХНЮ ОТ GIULIA NOVARS");
    }
    return (
        <div className="footer_landing" id="footerBlock">
            <div className="inside_footer_block">
                <div className="titles_and_adress_footer">
                    <div className="titles_footer">
                        <div className="title_footer_one"><div className="title_one_text">ПРЕМИУМ КУХНИ</div></div>
                        <div className="title_footer_two"><div className="title_two_text">В MEBELART GROUP</div></div>
                    </div>

                    <div className="text_footer">
                        <div className="text_footer_one">
                            <div className="link_block_one">
                            {
                                elements.map(elementMenu => <ElementMenu styleElement={"footer_links"} elementMenu={elementMenu} key={elementMenu.id}/>)
                            }
                            </div>
                        </div>
                        <div className="text_footer_two">
                            <div className="inside_block_text_footer">
                            <div className="adress_footer">
                                <div className="picture_map_footer">
                                    <div className="block_img">
                                        <img className="location_footer" src={img_map}/>
                                    </div>
                                </div>
                                <div className="text_adress_footer">
                                    <div className="first_adress_footer">Г.МОСКВА, 1-Й ЩИПКОВСКИЙ, Д.4</div>
                                    <div className="second_adress_footer">М.СЕРПУХОВСКАЯ, ПАВЕЛЕЦКАЯ</div>
                                </div>
                            </div>
                            <div className="company_footer">
                                <div>ГАЛЕРЕЯ ИНТЕРЬЕРОВ "ТВИНСТОР" СТУДИЯ КУХНИ И ДИЗАЙНА "МЕБЕЛЬ АРТ ГРУПП" 2 ЭТАЖ, ПОДИУМЫ С27, С28, С37, С38</div>
                            </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="phone_number_and_button">
                    <div className="button_footer">
                        <div className="button_in_block_footer">
                            <div className="button_footer_finalBlock">
                                <div className="text_button_footer"><div>хочу кухню</div></div>
                                <div onClick={ChangeParams} className="arrow_img_footer"><div className="img_block_footer"><img className="arrow_in_block_footer" src={img_arrow}/></div></div>
                            </div>
                        </div>
                    </div>
                    <div className="block_with_phone_footer">
                        <div className="inside_phone_block_footer">
                            <div className="main_block_phone_footer">
                                <div className="phone_number_footer"><div className="phone_text"><pre className="ItalicCircle">+ </pre><p>7 </p><pre className="ItalicCircle"> (</pre><p>495</p><pre className="ItalicCircle"> ) </pre><p>333-33-33</p></div></div>
                                <div className="logotype_footer">
                                    <div className="first_logo_footer"><div className="img_logo_block_one"><img className="logo_one_img" src={logo_one}/></div></div>
                                    <div className="close_footer"><div className="img_close_block"><img className="logo_one_img" src={close_img}/></div></div>
                                    <div className="second_logo_footer"><div className="img_logo_block_two"><img className="logo_one_img" src={logo_two}/></div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;