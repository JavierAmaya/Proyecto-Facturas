import {useState} from "react";

function useFormHelper(states:any){
    const [values,setValues] = useState(states);

    function handleChange(event: any){
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    }

    function updateValues(new_states:any){
        setValues(new_states);
    }

    return {
        values,        
        handleChange,
        updateValues
    }

}

export default useFormHelper;