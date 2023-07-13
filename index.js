const express = require('express')
const app = express()
const port = 8000;
const {db} = require("./src/services/firebase/database")
const {firebaseAuth} = require("./src/services/firebase/auth")
const routes = require("./src/routes")

app.use(db);
app.use(firebaseAuth);
app.use(express.json());

routes(app);

/* app.post(
  "/",
  async (req, res) => {
    const {db} = req;

    await db.collection("example").doc("example").set({
      label: 2
    })

    res.send("EXITOSO")
  }
) */

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
