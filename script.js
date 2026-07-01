document.addEventListener("DOMContentLoaded", () => {
    console.log("LiveWellGuide loaded successfully!");

    const buttons = document.querySelectorAll(".button");

    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            alert("The review page will be available soon.");
        });
    });
});
