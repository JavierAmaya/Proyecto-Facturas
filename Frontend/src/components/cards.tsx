import React from "react";

interface ICardProps{
    open:boolean
    title:String
    description:String
    question?:String
    label_main_btn:String
    show_second_btn:boolean
    doit:() => void
    reject?:() => void

}

const Card: React.FC<ICardProps> = ({title,description,question,label_main_btn,show_second_btn,open,doit,reject}) => (
    <section className={open?"message-area":"message-area hide-ele"}>
        <div className="card">            
            <div className="container">
            <h3><b>{title}</b></h3>
                <p className="main-message" >{description}</p>
                
                {(question) && (
                     <p className="main-question" >{question}</p>
                )}
               
                <div className="card-buttons">
                    {(show_second_btn) && (
                      <button className="second-btn" onClick={reject}>No, gracias</button>
                    )}
                    <button className="profile-btn"  onClick={doit}>{label_main_btn}</button>
                </div>
            </div>
        </div>
    </section>  
)

export default Card;