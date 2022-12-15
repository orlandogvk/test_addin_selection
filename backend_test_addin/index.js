const { app } = require("./app");
const { PORT } = process.env;
const { dbConnect } = require("./database/db");

app.listen(PORT, () => {
    console.log("Server running in port ", PORT)
    dbConnect();
});