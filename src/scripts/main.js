// Lightning Exercise 1: Create an object that represents a bill from your doctor's office. It should have the following properties: officeName, streetAddress, doctorName, patientName, visitDate, amountBilled, dueDate. You provide example values for each one.



const dateVisited = "visitDate"
const owed = "amountBilled"
const patient = "patientName"

const bill = {
    officeName: "Broken Wings, LLC",
    streetAddress: "4223 Cobblestone Way",
    doctorName: "Harvey Hackenbush",
    patientName: "Bernard Snopes",
    visitDate: "9/11/19",
    amountBilled: 1204.45,
    dueDate: "9/25/19",


}


console.log(bill[patient], "visited the office on", bill[dateVisited], "and currently owes", bill[owed], "for this visit.")


// Lightning Exercise 2: Copy the code below and paste it above your object.

// Use square bracket notation to output the value of those three properties to the console in Chrome.

// // Lightning Exercise 3: Use Object.values() to output all the property values to the console in Chrome.
const allBills = []
allBills.push(bill)
console.log(allBills)


allBills.forEach(bill => {

    for (const value of Object.values(bill)) {
     console.log(value)
    }
})

// // Lightning Exercises
// // Lightning Exercise 1: Output all of the key names from your doctor's office bill to the console in Chrome.
allBills.forEach(bill => {

    for (const key of Object.keys(bill)) {
     console.log(key)
    }
})
// Lightning Exercise 2: Output all of the key names from your doctor's office bill to the DOM inside a parent <section> element. Wrap each one in a <span> element.
allBills.forEach(bill => {

    for (const entry of Object.entries(bill)) {
     console.log(entry)
    }
})