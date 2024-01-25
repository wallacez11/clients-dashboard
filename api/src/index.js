const app = require("express")();
const cors = require("cors");
const routes = require("./routes");
const path = require("path"); // Import the path module
app.use(cors());

routes.load(app);

app.get("/clients", (req, res) => {
  const clientsFilePath = path.join(__dirname, "..","clients.mock.js");

  const clientsData = require(clientsFilePath);

  res.json(clientsData);
});

app.listen(3000, () => {
  console.log(`Api running at ::3000`);
});
