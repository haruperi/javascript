let database = [
    {
        username : "ruff",
        password : "123"
    },
    {
        username : "haris",
        password : "456"
    },
    {
        username : "thaman",
        password : "789"
    }
];

let newsfeed = [
    {
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];
debugger
function isUserValid (user,pass) {
    database.forEach(i => {
        if (user==this.username && pass==this.password) {
            return true
        } else {
            return false
        }
    });
    
}



// const usernamePrompt = prompt("What is your Username")
// const passwordPrompt = prompt("What is your Password")

let signin = (user,pass) => {
    if (isUserValid(user,pass)) {
        console.log(newsfeed)
    } else {
        //alert("Either username or password is wrong!")
        console.log("Either username or password is wrong!")
    }
    
}

// signin(usernamePrompt,passwordPrompt)

signin("ruff","123")

//database.forEach(i => console.log(i.username))