const app = require("express")();
const cors = require("cors");
const routes = require("./routes");
const path = require("path"); // Import the path module
app.use(cors());

routes.load(app);

app.get("/clients", (req, res) => {
  const clientsFilePath = path.join(__dirname, "..", "clients.mock.js");

  const clientsData = require(clientsFilePath);

  res.json(clientsData);
});

app.get("/stats", (req, res) => {
  const clientsFilePath = path.join(__dirname, "..", "clients.mock.js");
  const clientsData = require(clientsFilePath);
  empreendimentos = 0
  unidades = 0
  const clientes = clientsData.length;



  clientsData.forEach((item) => {
    const enterprises = item.enterprises || [];
    empreendimentos += enterprises.length
    enterprises.forEach((item) => {
      unidades += parseInt(item.realties)
    })
  });

  res.json({
    clientes,
    empreendimentos,
    unidades
  });
})

app.get("/enterprises/:id", (req, res) => {
  const enterpriseId = req.params.id;
  const clientsFilePath = path.join(__dirname, "..", "clients.mock.js");
  const clientsData = require(clientsFilePath);

  const enterpriseData = clientsData.find((client) => client._id === enterpriseId);

  if (enterpriseData) {
    res.json(enterpriseData.enterprises || []);

  } else {
    res.status(404).json({ error: "Empresa não encontrada." });
  }
});


app.listen(3000, () => {
  console.log(`Api running at ::3000`);
});
