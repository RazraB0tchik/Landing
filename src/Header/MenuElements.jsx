import React, {useEffect, useState} from 'react';
import ElementMenu from "./ElementMenu";

const MenuElements = ({styleElement, styleBlock, massiv, activeWindow, setActiveWindow}) => {

    // const change = () => {
    //     setActiveWindow(state);
    // }
    //
    // const [state, setState] = useState(true);
    // if(state===false){
    //     change();
    // }

    return (
            <div className={styleBlock}>
            {
                massiv.map((elementMenu) => <ElementMenu active={setActiveWindow} styleElement={styleElement} elementMenu={elementMenu} key={elementMenu.id}/>)
            }
            </div>
    );
};

export default MenuElements;