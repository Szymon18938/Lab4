function checkForm(){
    var error=false; //to znaczy, że danych nie brakuje
    var errorText=""; //komunikat z błędem
    var contactName = document.getElementById("contactName");
    var contactEmail = document.getElementById("contactEmail");
    var contactSurname = document.getElementById("contactEmail");
    if (contactName.value == ""){
  errorText += "imię\n"
  error=true;
  }
  if (contactSurname.value == ""){
  errorText += "nazwisko\n"
  error=true;
  } 
  if (contactEmail.value == ""){
  errorText += "email\n"
  error=true;
  } 
  if (!error) return true; else{
 alert ("Nie wypełniłeś następujących pól:\n" + errorText);
  return false;
 } 
 if(contactEmail.value == ""){
  errorText += "email\n";
  error=true;
 } else
 {
  var email = contactEmail.value;
  var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-
 ]{2,4}$/;
  if(regex.test(email)==false)
  {
  errorText += "błędny email\n";
  error=true;
  }
 } }
