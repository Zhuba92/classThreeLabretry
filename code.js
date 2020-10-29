$(document).ready(
    function () {
        $("#lateFeeButton").click(calculateLateFees);
        $("#alertButton").click(showPopup);
        $("#totalPerPerson").click(calculatePizzaCost);
        $("#alertButtonTwo").click(showPopup);

        function calculateLateFees()
        {
            // Get number of books and convert to number
            var numberOfBooks = $("#numberOfBooks").val();
            numberOfBooks = parseInt(numberOfBooks);

            // Get number of DVDS and convert to number
            var numberOfDvds = $("#numberOfDvds").val();
            numberOfDvds = parseInt(numberOfDvds);

            // Get number of days late for books and convert to number
            var numberOfDaysLateBooks = $("#numberOfDaysLateBooks").val();
            numberOfDaysLateBooks = parseInt(numberOfDaysLateBooks);

            // Get number of days late for DVDS and convert to number
            var numberOfDaysLateDvds = $("#numberOfDaysLateDvds").val();
            numberOfDaysLateDvds = parseInt(numberOfDaysLateDvds);

            // numberOfBooks * numberOfDaysLateBooks * $0.25
            var totalBooksLateCost = numberOfBooks * (numberOfDaysLateBooks * 0.25);

            // numberOfDvds * numberOfDaysLateDvds * $0.50
            var totalDvdsLateCost = numberOfDvds * (numberOfDaysLateDvds * 0.50);
            var totalCostDisplay = (totalBooksLateCost + totalDvdsLateCost);

            $("#totalOutputCost").text(totalCostDisplay.toFixed(2));
        }

        function calculatePizzaCost()
        {
            // Get number of toppings and convert to number
            var numberOfToppings = $("#numberOfToppings").val();
            numberOfToppings = parseInt(numberOfToppings);

            // Get number of people sharing the pizza and convert to number
            var numberOfPeople = $("#numberOfPeople").val();
            numberOfPeople = parseInt(numberOfPeople);

            // Add $15.00 plus (number of toppings * $1.25) and divide by number of people sharing pizza
            var totalCostPerPerson = (15 + (numberOfToppings * 1.25)) / numberOfPeople;

            $("#totalOutputCostPerPerson").text(totalCostPerPerson.toFixed(2));
        }

        function showPopup()
        {
            $(".output").show();
        }


    }
);