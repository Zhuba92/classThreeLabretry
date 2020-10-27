function calculateLateFees()
{
// Get number of books and convert to number
    var numberOfBooks = parseInt(prompt("How many books do you have?"));

// Get number of DVDS and convert to number
    var numberOfDvds = parseInt(prompt("How many DVDs do you have?"));

// Get number of days late for books and convert to number
    var numberOfDaysLateBooks = parseInt(prompt("How many days late are your books?"));

// Get number of days late for DVDS and convert to number
    var numberOfDaysLateDvds = parseInt(prompt("How many days late are your DVDs?"))

// numberOfBooks * numberOfDaysLateBooks * $0.25
    var totalBooksLateCost = numberOfBooks * (numberOfDaysLateBooks * 0.25);
    var totalBooksLateCostDisplay = totalBooksLateCost.toFixed(2)

// numberOfDvds * numberOfDaysLateDvds * $0.50
    var totalDvdsLateCost = numberOfDvds * (numberOfDaysLateDvds * 0.50);
    var totalDvdsLateCostDisplay = totalDvdsLateCost.toFixed(2);

// Display totalOfLateBooks
    alert(`Your total for late books is $${totalBooksLateCostDisplay}`);
// Display totalOfLateDvds
    alert(`Your total for late DVDS is $${totalDvdsLateCostDisplay}`);
}


function calculatePizzaCost()
{
// Get number of toppings and convert to number
    var numberOfToppings = parseInt(prompt("How many toppings do you want?"));

// Get number of people sharing the pizza and convert to number
    var numberOfPeople = parseInt(prompt("How many people are sharing the pizza?"));

// Add $15.00 plus (number of toppings * $1.25) and divide by number of people sharing pizza
    var totalCostPerPerson = (15 + (numberOfToppings * 1.25)) / numberOfPeople;
    var totalCostPerPersonDisplay = totalCostPerPerson.toFixed(2);

// Display cost per person
    alert(`The total cost per person is $${totalCostPerPersonDisplay}`);
}

// Click tracker Lab-----------------------------------------------------
var count = 0;
function addToClickTotal()
{
    count++
}

function displayNumberOfClicks()
{
    alert(count);
}