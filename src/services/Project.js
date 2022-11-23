import db from "./SQLiteDatabase";

db.transaction((tx) => {
  //tx.executeSql("DROP TABLE projetos;");
  tx.executeSql(
    "CREATE TABLE IF NOT EXISTS projetos (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, descricao TEXT, valor TEXT, acoes TEXT, referencias TEXT);"
  );
});

const create = (obj) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO projetos (nome, descricao, valor, acoes, referencias) values (?, ?, ?, ?, ?);",
        [obj.nome, obj.descricao, obj.valor, obj.acoes, obj.referencias],
        (_, { rowsAffected, insertId }) => {
          if (rowsAffected > 0) resolve(insertId);
          else reject("Error ao inserir projeto: " + JSON.stringify(obj));
        },
        (_, error) => reject(error)
      );
    });
  });
};

const update = (id, obj) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "UPDATE projetos SET nome=?, descricao=?, valor=?, acoes=?, referencias=?;",
        [obj.nome, obj.descricao, obj.valor, obj.acoes, obj.referencias],
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) resolve(rowsAffected);
          else reject("Erro ao tentar alterar projeto: id=" + id);
        },
        (_, error) => reject(error)
      );
    });
  });
};

const findById = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM projetos WHERE id=?;",
        [id],
        //-----------------------
        (_, { rows }) => {
          if (rows.length > 0) resolve(rows._array[0]);
          else reject("Projeto não encontrado: id=" + id);
        },
        (_, error) => reject(error)
      );
    });
  });
};

const findByName = (nome) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM projetos WHERE nome LIKE ?;",
        [nome],
        (_, { rows }) => {
          if (rows.length > 0) resolve(rows._array);
          else reject("Obj not found: brand=" + brand);
        },
        (_, error) => reject(error)
      );
    });
  });
};

const getAll = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM projetos;",
        [],
        (_, { rows }) => resolve(rows._array),
        (_, error) => reject(error)
      );
    });
  });
};

const remove = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM projetos WHERE id=?;",
        [id],
        (_, { rowsAffected }) => {
          resolve(rowsAffected);
        },
        (_, error) => reject(error)
      );
    });
  });
};

const removeAll = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM projetos;",
        (_, { rowsAffected }) => {
          resolve(rowsAffected);
        },
        (_, error) => reject(error)
      );
    });
  });
};

export default {
  create,
  update,
  findById,
  findByName,
  getAll,
  remove,
  removeAll
};