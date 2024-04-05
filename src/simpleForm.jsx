
import React, { useEffect, useState } from "react";

import useForm from "./useForm";
const SimpleForm = () => {
 

    const { user, email, password, changeValue, formState } = useForm({
        user: "",
        email: "",
        password: ""
      });

    return (
        <div className='d-flex flex-column mt-4 mx-5 gap-3'>
            <h1>Simple Form</h1>
            <input
                className='form-control'
                type="text"
                name='user'
                placeholder='pon tu username'
                value={user}
                onChange={changeValue}
            />

            <input
                className='form-control mt-3'
                type="email"
                name='email'
                placeholder='pon tu email'
                value={email}
                onChange={changeValue}
            />
             <input
                className='form-control mt-3'
                type="password"
                name='password'
                placeholder='pon tu contraseña'
                value={password}
                onChange={changeValue}
            />
           
            
        </div>
    )
}

export default SimpleForm;