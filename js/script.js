const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector("#users"); //I created this avr to capture the select element of users

const getData = async function (numUsers) { //I modified this function so that it will accept numUsers as a parameter.(this was in this 2nd exercise after a bit)
    const usersRequest = await fetch(`https://randomuser.me/api?results=${numUsers}`); //here I am fetching data from the API with a parameter to access 5 results at a time. Now in this 2nd exercise it's having me edit the API URL to use the results of the numUsers (gives hint to change the "" to `` and it doesn't =5 now it will equal numUsers)
    const data = await usersRequest.json();

    const userResults = data.results; //array of objects
    displayUsers(userResults); //this was added very last-its calling the displayUsers function and pass it the usersResults array as an argument.
};

getData(1); //after modifying the numUsers above from 5 to numUsers it's having me change this getData() to add 1

const displayUsers = function (userResults) {    //new function expression called dusplayUsers with userResults as the paramater.
    randomFolks.innerHTML = "";     //this empties the randomFolks elements content to make sure I don't duplicate any DOM elements.

    for (const user of userResults) {
        const country = user.location.country;
        const name = user.name.first;
        const imageUrl = user.picture.medium;
        const userDiv = document.createElement("div");
        userDiv.innerHTML = `
            <h3>${name}</h3>
            <p>${country}</p>
            <img src=${imageUrl} alt="User avatar" />
            `;
        randomFolks.append(userDiv);
    }    
};

selectUserNumber.addEventListener("change", function (e) {
    const numUsers = e.target.value; //this var captures the selected value
    getData(numUsers); //this calls getData and pass numUsers as an argument.
});