const randomFolks = document.querySelector(".random-peeps");

const getData = async function () {
    const usersRequest = await fetch("https://randomuser.me/api?results=5"); //here I am fetching data from the API with a parameter to access 5 results at a time.
    const data = await usersRequest.json();

    const userResults = data.results; //array of objects
    displayUsers(userResults); //this was added very last-its calling the displayUsers function and pass it the usersResults array as an argument.
};

getData();

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