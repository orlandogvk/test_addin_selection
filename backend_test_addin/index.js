const { app } = require("./app");
const { dbConnect } = require("./database/db");

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`)
    dbConnect();
});