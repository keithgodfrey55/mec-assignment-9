function validEmail(value){
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(value.match(pattern)){
        return;
    }else{
        return "invalid email addres";
    }
}

export default validEmail;