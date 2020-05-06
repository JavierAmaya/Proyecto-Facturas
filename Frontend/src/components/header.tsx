import React from "react";

interface IHeaderProps{
    title:String
    show_button:Boolean
    again: () => void
}

const Header: React.FC<IHeaderProps> = ({title, show_button, again}) => (
    <header>
    <h1 id="header-title" >{title}</h1>
    <div className={show_button ? "button-header" : "button-header hide-ele"}>
        <button className="profile-btn" onClick={again}> Volver a preguntar </button>
    </div>        
  </header>
);

export default Header;