//Uso combinado de if, else y switch
const entrada = prompt ("Enter your name");
console.log (entrada);
if(entrada==null){
        document.write("Are you sure you want to cancel?")
}else{
switch(entrada){
    case "":
        document.write("Hello there!");
        break;
    default:
        document.write("Hello There "+ entrada + "! This is my first web page");
    break;
}
}