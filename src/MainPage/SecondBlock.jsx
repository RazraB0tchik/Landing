import React from 'react';
import diamond_img from '../img/алмаз 2 блок.png'
import pen_img from '../img/карандаш 2 блок.png'
import block_img from '../img/текстура 2 блок.png'
import heart_img from '../img/сердце 2 блок.png'
import ElementsSecondBlock from "./ElementsSecondBlock";
const elements =[
    {id: 1, img: diamond_img, title: "ПРЕВОСХОДСТВО", text: "кухни отражающие вашу индивидуальность"},
   {id: 2, img: pen_img, title: "ВЫСОКОЕ КАЧЕСТВО", text: "множество долговечных и безупречных материалов"},
    {id: 3, img: block_img, title: "МАТЕРИАЛЫ", text: "множество долговечных и бузупречных материалов"},
    {id: 4, img: heart_img, title: "ЛУЧШИЕ ДИЗАЙНЕРЫ", text: "по мнению наших заказчиков мы - лучший выбор"},
]


const SecondBlock = () => {
    return (
        <div className="second_block">
            {elements.map(elementMassive => <ElementsSecondBlock elementMassive={elementMassive} key={elementMassive.id}/>)}
        </div>
    );
};

export default SecondBlock;