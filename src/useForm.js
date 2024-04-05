import { useState } from "react";

const useForm = ( initialForm = {}) => {
    
    const [formState, setFormState] = useState({ initialForm});
    const { user, email, password } = formState;

    const changeValue = (e) => {
        const { name, value } = e.target; //de el target desestructuramos el name y el value
        setFormState({
            ...formState,
            [name]: value //usamos [] para que el objeto sea dinamico es decir que pueda cambiar su valor
        });
    }


    return{
        formState,
        user,
        email,
        password,
        changeValue
    }
}

export default useForm
