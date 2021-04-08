import React, { useContext } from 'react';
// import { useForm } from "react-hook-form";
import { UserContext } from '../../App';

const ManageDelivery = () => {
    const [loggedInUser] = useContext(UserContext);
    // const { register, handleSubmit, watch, errors } = useForm();
    // const onSubmit = data => {
    //     console.log(data)
    // };

    // console.log(watch("example"));
    return (
        <div className="container">
            <h2>Here is delivery info</h2>

            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} />
                {errors.name && <span>Enter your name</span>}
                
                <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} />
                {errors.email && <span>Enter your email</span>}
                
                <input name="address" ref={register({ required: true })} />
                {errors.address && <span>Enter your address</span>}
                
                <input name="phone" ref={register({ required: true })} />
                {errors.phone && <span>Enter your phone number</span>}
                <input type="submit" />
            </form> */}
            <form action="">
            <input type="text" />
            <input type="text" />
            <input type="text" />
            </form>
        </div>
    );
};

export default ManageDelivery;
