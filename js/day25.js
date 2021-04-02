function validate(){
    pw = document.getElementById("pw").value;
    output = document.getElementById("pwOutput");
    output.innerText = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/.test(pw);
}