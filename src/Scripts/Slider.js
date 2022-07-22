import React, {useRef, useState} from 'react';
import SwiperCore, {Navigation, Pagination, Scrollbar} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/css/scrollbar';
import img_in_element from '../img/gulia_lenta_1_2.jpg'
import {motion} from 'framer-motion'
import swiper from "swiper";
import arrow_button from '../img/стрелка.png'
SwiperCore.use([Navigation, Pagination, Scrollbar]);

const elements =[
    {id: 1, img: img_in_element, title: "КУХНЯ LOFT", text: "Материалы: белый мрамор с золотой патиной и немецкой техникой GAGGENAU", final_prise: "72 000.-", start_prise: "112 000"},
    {id: 2, img: img_in_element, title: "КУХНЯ LOFT", text: "Материалы: белый мрамор с золотой патиной и немецкой техникой GAGGENAU", final_prise: "72 000.-", start_prise: "112 000"},
    {id: 3, img: img_in_element, title: "КУХНЯ LOFT", text: "Материалы: белый мрамор с золотой патиной и немецкой техникой GAGGENAU", final_prise: "72 000.-", start_prise: "112 000"},
    {id: 4, img: img_in_element, title: "КУХНЯ LOFT", text: "Материалы: белый мрамор с золотой патиной и немецкой техникой GAGGENAU", final_prise: "72 000.-", start_prise: "112 000"},
    {id: 5, img: img_in_element, title: "КУХНЯ LOFT", text: "Материалы: белый мрамор с золотой патиной и немецкой техникой GAGGENAU", final_prise: "72 000.-", start_prise: "112 000"},
    {id: 6, img: img_in_element, title: "КУХНЯ LOFT", text: "Материалы: белый мрамор с золотой патиной и немецкой техникой GAGGENAU", final_prise: "72 000.-", start_prise: "112 000"},
]

const Slider = ({width_window, setActive, setTitle, active}) => {
    const ChangeParams = () =>{
        setActive(true);
        setTitle("МЕНЕДЖЕР УТОЧНИТ ДЕТАЛИ ДЛЯ РАССЧЕТА ЦЕНЫ");
    }

    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)
    let perView;
    if((width_window<1150)&&(width_window>650)){
        perView=2;
    }
    if(width_window<650){
        perView=1;
    }
    if(width_window>=1150){
        perView=4;
    }
    return (
        <Swiper
            navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            slidesPerView={perView}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {elements.map( elementSlider => (
                <SwiperSlide key={elementSlider.id}>
                    <div className="elements">
                        <div className="img_block_slider">
                            <img className="img_in_slider" src={elementSlider.img}/>
                        </div>
                        <div className="slider_text">
                            <div className="title_slider">
                                {elementSlider.title}
                            </div>
                            <div className="text_slider">
                                {elementSlider.text}
                            </div>
                        </div>
                        <div className="prise_slider">
                            <div className="start_prise_slider">
                                {elementSlider.final_prise}
                            </div>
                            <div className="finish_prise_slider">
                               вместо {elementSlider.start_prise}.-
                            </div>
                        </div>
                        <div className="button_calculate_slider" >
                            <motion.div onClick={ChangeParams} className="button_inside" whileHover={{backgroundColor: "rgb(37, 37, 37)", color: 'white'}} transition={{duration: 0.5}}>
                                РАССЧИТАТЬ
                            </motion.div>
                        </div>
                    </div>
                </SwiperSlide>
                ))}
            <div className="pref" ref={navigationPrevRef}><div className="img_block_button_slider_pref"><img className="img_arrow_button_slider" src={arrow_button}/></div></div>
            <div className="next" ref={navigationNextRef}><div className="img_block_button_slider_next"><img className="img_arrow_button_slider" src={arrow_button}/></div></div>
            </Swiper>

    );
};

export default Slider;