const database=require("./config/database");
const app=require("./app");
const port=process.env.PORT || 3000;

(async ()=>{
    try{
        await database.authenticate();
        await database.sync();
        console.log("Database Connected");

        app.listen(port,()=>{
            console.log(`App is running on port: ${port}`);
        })
    }
    catch(error){
        console.error(error.message);
    }
})();