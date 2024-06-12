import app from "./app"

import mongoose from "mongoose";

const port=50000;


try {
    main().catch(err => console.log(err));
    async function main() {
        await mongoose.connect("mongodb+srv://vallukdb:YvWw4Mp6KTG1By74@cluster0.xv9x1yp.mongodb.net/valluks-food?retryWrites=true&w=majority&appName=Cluster0");
        app.listen(port, () => {
          console.log(`Example app listening on port ${port}`)
        })
        
      }
      
      
} catch (error) {
    console.log(error)
}

