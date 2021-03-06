import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data: Record<string, any>) => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <input name="example" defaultValue="test" ref={register} />
            <input name="exampleRequired" ref={register({ required: true })} />
            {errors.exampleRequired && <span>This field is required</span>}
            <input type="submit" />
        </form >
    );
}
