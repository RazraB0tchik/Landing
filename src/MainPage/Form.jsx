import React, {useEffect, useState} from 'react';
import close_img from '../img/х в шапке.png'
import {motion} from "framer-motion";
import email from 'emailjs-com'
import arrow_form from '../img/arrow_form.jpg';
const Form = ({active, setActive, title}) => {

    const variantsPictures = {
        open: {
            scaleX: 1,
            x: 0,
        },
        close: {
            scaleX: 0,
            x: -1000,
        }
    }

    const variantsForm = {
        open: {
            y: 0,
            opacity: 1,
        },
        close: {
            y: 1000,
            opacity: 0,
        }
    }
    const [finalElement, setFinalElement] = useState(false);
    let value_button;
    if(finalElement === true){
        value_button="УСПЕШНО!";
    }
    else{
        value_button="ОТПРАВИТЬ";
    }


    const finalElementForm = () => {
        setFinalElement(true)
        setTimeout(()=>setActive(false), 4000);
        // setTimeout(()=>setFinalElement(false), 4000);
    }


    const sendEmail = (e) =>{
        e.preventDefault()

        email.sendForm('service_frt9t2j', 'template_fdf58e8', e.target, 'JBMT2ze71Jvr2D--q')
            .catch(err=> console.log(err))
    }



    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [dirtyPhone, setDirtyPhone] = useState(false);
    const [dirtyName, setDirtyName] = useState(false);

    const [erroreName, setErroreName] = useState("имя не указано");
    const [errorePhone, setErrorePhone] = useState("телефон не указан");

    const [checkbox, setCheckBox] = useState(false);

    // let constcheck=0;
    // const cetCheckbox =() => {
    //     if(constcheck===0){
    //         checkbox()
    //     }
    // }

    const[formValid, setFormValid] = useState(false)

    const blurHandle = (e) =>{
        switch (e.target.name){
            case 'name':
                setDirtyName(true)
                break

            case 'phone_number':
                setDirtyPhone(true)
                break
        }
    }

    const phoneHandler = (e) => {
        setPhone(e.target.value)
        const regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
        if(!regex.test(String(e.target.value).toLowerCase())){
            setErrorePhone("некорректный номер");
        }
        else {
            setErrorePhone("");
        }
    }

    const nameHandler = (e) => {
        setName(e.target.value)
        if((e.target.value.length > 0)&&(e.target.value.length <=2)){
            setErroreName("некорректное имя");
        }
        else {
            setErroreName("");
        }
    }

    useEffect(() => {
        if(erroreName || errorePhone || checkbox===false){
            setFormValid(false)
        }
        else {
            setFormValid(true)
        }
    })

    return (
        <motion.div className={active ? "background_form" : "background_form_not_active"}
                    whileInView='open'
                    initial='close'
                    viewport={{ once: true, amount: 0.1}}>
            <motion.div className="background_opacity_form" variants={variantsPictures} transition={{duration: 1}}></motion.div>
            <motion.div className= "form_window" variants={variantsForm} transition={{duration: 1, delay: 0.5}}>
                <form className="form_inputs" onSubmit={sendEmail}>
                    <div className="pool_input_form">
                    <div className="title_form"><div>{title}</div></div>
                    <div className="inputs_form">
                        <div className="input_one">
                        <input onChange={e=>nameHandler(e)} onBlur={e=>blurHandle(e)} value={name} className = "inputs_in_form" name="name" placeholder="ИМЯ"/>
                        </div>
                        {(dirtyName && erroreName) && <div className="error_text">{erroreName}</div>}

                        <div className="input_two">
                            <input onChange={e=>phoneHandler(e)} onBlur={e=>blurHandle(e)} value={phone} value={phone} className="inputs_in_form" name="phone_number" placeholder="ТЕЛЕФОН"/>
                        </div>
                        {(dirtyPhone && errorePhone) && <div className="error_text">{errorePhone}</div>}
                    </div>
                        <div className="checkbox"><input className="checkbox_block" checked={checkbox} type="checkbox"/><span onClick={()=>setCheckBox(!checkbox)} className={checkbox ? "fake_true" : "fake"}><img className={checkbox ? "img_form_arrow" : "img_form_arrow_none"} src={arrow_form}/></span><label className="lable_checkbox">Я согласен(на) с политикой конфиденциальности</label></div>
                    <div className="button_continue_form">
                        <input onClick={finalElementForm} disabled={!formValid} type={"submit"} className={finalElement ? "button_final_elem" : "button_in_form"} value={value_button}/>
                    </div>
                    </div>
                </form>
                <div onClick={()=>setActive(false)} className="button_close_form"><div className="img_block_form"><img className="close_form" src={close_img}/></div></div>
                <div className= "form_text">
                    <div className="pool_input_form">
                        <div className="number_form">
                            01/
                        </div>
                        <div className="title_text_form">
                            ШАГ ПЕРВЫЙ: ОСТАВИТЬ ЗАПРОС
                        </div>
                        <div className="text_form">
                            Вы проделали уже половину пути! Укажите номер телефона по которому с вами может связаться менеджер и мы свяжемся с вами в течении 15 минут
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Form;