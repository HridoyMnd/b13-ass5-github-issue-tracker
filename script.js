
const signInButton = document.getElementById("signin_btn");
const mainBody = document.getElementById("main_body");
signInButton.addEventListener("click", () => {
        const userName = document.getElementById("username");
        const password = document.getElementById("password");
        const formContainer = document.getElementById("form_container");
        const mainContainer = document.getElementById("main_container");


        // // condition check 
        if (userName.value === "admin" && password.value === "admin123") {
            formContainer.classList.add("hidden")
            mainContainer.classList.remove("hidden")

        } else {
            alert("Something went wrong")
        }

})
