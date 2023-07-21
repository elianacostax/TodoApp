import todosRoutes from "./routes/todos.js"
import express from "express";



const app = express();

app.use(express.json());
app.use("/api/todos", todosRoutes);


app.listen(8800, () => {
    console.log("Conectado!");
  });