function enterGroceryList() {
    let userInput = prompt("Enter grocery items separated by commas:");
    if (!userInput) {
        console.log("No input provided.");
        return;
    }

    let groceryList = userInput.split(",").map(item => item.trim());

    console.log("Grocery List:", groceryList);
    alert("Your grocery list: " + groceryList.join(", "));
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("enterListBtn").addEventListener("click", enterGroceryList);
});
