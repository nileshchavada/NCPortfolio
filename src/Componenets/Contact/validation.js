const validation = (values) =>{
    let  errors={};

    if(!values.email){
        errors.email="Please enter a valid email address.";
    }else if (!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Email is invalid";
    }

    if(!values.name){
        errors.name="Please enter your name.";
    }
    if(!values.message){
        errors.message="Please enter a message.";
    }
 
     
    return errors;
};

export default validation;
