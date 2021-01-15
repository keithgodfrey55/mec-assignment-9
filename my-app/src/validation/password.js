function validPassword(value){
    if(value.length < 8){
        return "Must be at least 8 characters, includes one upper case character and special character";
    }
    return ;
}
export default validPassword;