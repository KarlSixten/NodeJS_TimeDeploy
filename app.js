const express = require('express');
const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage.html");
})

app.get("/greeting", (req, res) => {
    const hour = new Date().getHours();
    let greeting;

    if (hour >= 5 && hour < 12) {
        greeting = "Good Morning!";
    } else if (hour >= 12 && hour < 18) {
        greeting = "Good Afternoon!";
    } else if (hour >= 18 && hour < 21){
        greeting = "Good Evening!";
    } else {
        greeting = "Good Night!"
    }

    res.send({ data : greeting })

})

app.listen(PORT, () => { console.log(`Server is running on port:`, PORT) });

module.exports = app;

//EOF
