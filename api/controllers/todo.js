import { db } from "../db.js";

export const getTodos = (req, res) => {
  const q = req.query.cat;
  ("SELECT * FROM todos");

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json(data);
  });
};

export const addTodo = (req, res) => {
  const q = "INSERT INTO `todosapp`.`todos` (`todo`) VALUES (?)";

  const values = [req.body.todo];

  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json("Todo creado correctamante");
  });
};

export const deleteTodo = (req, res) => {
  const todoId = req.params.id;
  const q = "DELETE FROM todos WHERE `id`";

  db.query(q, [postId, userInfo.id], (err, data) => {
    return res.json("Publicacion eliminada correctamente");
  });
};

export const updateTodo = (req, res) => {

    const todoId = req.params.id;

    const q = "UPDATE `todos` SET `todo`  WHERE `id` "
    const values = [req.body.todo]

    db.query(q, [...values, postId, userInfo.id], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json("Todo actualizado correctamante");
      });
}
