import app from "./app";

// app.all("/protected/*", (req, res) => {
//     console.log("Accessing protected resource");
//     res.status(404).send("Not Found");
// });

// TODO: Implement middleware to check if the user is authenticated to apply each route