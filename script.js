const user =document.getElementsById('user');
const Name = document.getElementsById('Name');
const Username = document.getElementsById('Username');
const Password = document.getElementsById('Password');
user.addEventListener('submit',(event) =>{
    event.preventDefault();
    Validate();
})
const Validate = () =>{
    const Name=Name.value.trim();
    const Username=Username.value.trim();
    const Password=Password.value.trim();
    if(Name==""){
        setErrorMsg(Name,'Name cannot be blank');
    }
    else if(Name.length<=2){
        setErrorMsg(Name,'Name min 3 char');
    }
    else{
        setSucccessMsg(Name);
    }
}
function setErrorMsg(input,errormsgs){
    const user=input.parentElement;
    const small =user.querySelector('small');
    small.innerText =errormsgs;
}