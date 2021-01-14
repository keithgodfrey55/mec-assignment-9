function versionSearch(value){
    let spec_chars = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "\\", "|", 
                    ":", ";", "'", '""', "'", "<", ",", ">", "?", "/"];
    for(let i=0; i < value.length; i++){
        for(let j=0; j < spec_chars.length; j++){
            if(value[i] === spec_chars[j]){
                return "Invalid inout no special characters allowed";
            }      
        }
    }
    return '';
}

export default versionSearch;