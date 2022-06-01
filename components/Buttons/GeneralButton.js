 import React from 'react';
 import classNames from "classnames";

 function GeneralButton({textColor , borderColor , hoverBackgroundColor, font , size , title , onClick}) {
    const divClass = classNames(
        hoverBackgroundColor,
        borderColor,
        `border-2 rounded-md mx-2 cursor-pointer  transition duration-300`, 
    )

    const pClass = classNames(
        textColor,
        font,
        size,
        borderColor,
        `py-1`,
        "hover:text-white", 
    )
     return (
        <div className={divClass}>
            <p 
            className={pClass}
            onClick={onClick}>
                {title}
            </p>
        </div>
     );
 }
 
 export default GeneralButton;