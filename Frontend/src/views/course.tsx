import React,{useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import Header,{} from "../components/header";
import Card, {} from "../components/cards";


import {information_service} from "../fakeservices/information";
import {courses} from "../fakeservices/courses";


interface IDataElement{
    id:number,
    name:string
}

interface IReturn{
    success: boolean
    name:string
}

const getCourse = (id:number) : IReturn => {
    let result : IReturn = { success: false , name:"CURSO NO ENCONTRADO"}
    courses.forEach(function(value:IDataElement) {
        if (value.id === id) {
            result.success = true;
            result.name = value.name;
        }  
    });
    return result
}

const Course:React.FC = () => {
    const [showConfirmation,setShowConfirmation] = useState(true);
    const [action, setAction]= useState(false);
    const [question,setQuestion] = useState(false);
    const [sad,setSad] = useState(false);
    const [titleH, setTitleH] = useState({success:false, name:"CURSO NO ENCONTRADO"});

    const {id} = useParams();


    const accept = ()=>{
        setShowConfirmation(false);
        setAction(true);
        setQuestion(false);
        setSad(false);
    }

    const reject = () => {
        setShowConfirmation(false);
        setAction(false);
        setQuestion(true);
        setSad(true);
    }

    const again = () =>{
        setShowConfirmation(true);
        setAction(false);
        setQuestion(false);
        setSad(false);
    } 

    useEffect( () =>{
        const n : number = parseInt(id!);
        const t:IReturn = getCourse(n);
        setTitleH(t)
    },[id])

    

    return(
        <div>
          <Header title={titleH.name} show_button={question} again={again}/>
          <Card
             open={titleH.success && showConfirmation}
             title={information_service[0].title}
             description={information_service[0].description}
             question={information_service[0].pregunta}
             label_main_btn={information_service[0].label_main_btn}
             show_second_btn
             doit = {accept}
             reject={reject}
          />
          <Card
             open={action}
             title={information_service[1].title}
             description={information_service[1].description}
             label_main_btn={information_service[1].label_main_btn}
             show_second_btn={false}
             doit={() => window.location.replace("https://github.com/JavierAmaya/my-react-app")}
          />
          <Card
              open={sad}
              title="Que lastima :("
              description="Vuelvelo a pensar"
              label_main_btn="Volver a preguntar"
              show_second_btn={false}
              doit={again}
          /> 
          
        </div>
    )
};

export default Course;
