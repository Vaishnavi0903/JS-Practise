alert("Hello I'm JS program");

let name = prompt("What is your name");
if(name != null)                       // user gives input and say Okay
{
    alert(`Hello , ${name}`);
}
else{                                  // Cancel
    alert("You cancelled the prompt");
}

let isConfirm = confirm("Are you sure?");
if(isConfirm)
{
    alert("Msg Confirmed");
}
else{
    alert("Msg is not confirmed");
}
