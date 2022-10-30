function signup(){
let fullName= document.querySelector("#fullName").value;
let userName= document.querySelector("#userName").value;
let password= document.querySelector("#pass").value;

axios.post('https://climatedatum.herokuapp.com/user', {
    "fullName": fullName,
    "username": userName,
    "password": password
  })
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error.message);
  });

}
function getAllUsers(){
  axios.get('https://climatedatum.herokuapp.com/user')
  .then(function(response){
    console.log(response.data);
    response.data.map(eachUser =>{
    document.querySelector(".userList").innerHTML+=`${eachUser.fullName} ${eachUser.username} ${eachUser.password} <br>` ;  
    })

  }).catch(function(error){
    console.log(error.message);
  });
}
