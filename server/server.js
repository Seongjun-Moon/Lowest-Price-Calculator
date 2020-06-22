const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");

const LpcRouter = require("./routers/LpcRouter");
const TaxRouter = require("./routers/TaxRouter");
const WishRouter = require("./routers/WishRouter");
const corsOptions = {
  origin: true,
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/lpc", LpcRouter);
app.use("/tax", TaxRouter);
app.use("/wish", WishRouter);

app.listen(7777, () => {
  console.log("server ready..");
});
