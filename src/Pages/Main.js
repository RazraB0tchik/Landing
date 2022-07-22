import React, {useState} from 'react';
import '../MainPage/Main.css'
import Header from "../Header/Header";
import Block_one from "../MainPage/Block_one";
import SecondBlock from "../MainPage/SecondBlock";
import ThirdBlock from "../MainPage/ThirdBlock";
import BlockFour from "../MainPage/BlockFour";
import FiveBlock from "../MainPage/FiveBlock";
import Slider from "../Scripts/Slider";
import { Dimensions } from 'react-native-web';
import Footer from "../MainPage/Footer";
import {motion} from "framer-motion";
import Form from "../MainPage/Form";
const Main = () => {

    let elements = [
        {id: 1, signature: "АКЦИЯ", link: "#button_sale"},
        {id: 2, signature: "КАК ПРИОБРЕСТИ", link: "#blockFour"},
        {id: 3, signature: "ПОЧЕМУ У НАС", link: "#thirdBlock"},
        {id: 4, signature: "БОЛЬШЕ КУХОНЬ", link: "#slider_show"},
        {id: 5, signature: "GIULIA NOVARS", link: "#startBlock"},
        {id: 6, signature: "КОНТАКТЫ", link: "#footerBlock"},
    ]
    const logotype_variant = {
        open: {
            opacity: 1,
        },
        close: {
            opacity: 0,
        }
    }

    const [state, setState] = useState(Dimensions.get('window').width);

    const [formState, setFormState] = useState(false);
    const [titleState, setTitleState] = useState("");
    window.addEventListener('resize', update);
    function update() {
        setState(window.innerWidth);
    };

    return (
        <div className="main_block">
            <Header elements={elements}/>
            <Block_one active={formState} setActive={setFormState} setTitle={setTitleState}/>
            <SecondBlock/>
            <ThirdBlock active={formState} setActive={setFormState} setTitle={setTitleState}/>
            <BlockFour active={formState} setActive={setFormState} setTitle={setTitleState}/>
            <FiveBlock/>
            <motion.div id="slider_show" className="slider" whileInView={'open'} initial={'close'}
                        viewport={{ once: true, amount: 0.1}} variants={logotype_variant} transition={{duration: 1.5}}>
            <Slider width_window={state} active={formState} setActive={setFormState} setTitle={setTitleState}/>
                </motion.div>
            <Footer elements={elements} active={formState} setActive={setFormState} setTitle={setTitleState}/>
            <Form active={formState} setActive={setFormState} title={titleState}/>
        </div>
    );
};

export default Main;