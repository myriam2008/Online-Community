import sqlite from "sqlite";
import SQL from "sql-template-strings";
import app from "./app";
import { async } from "q";
import { stat } from "fs";
//import initializeDatabase from "./db";

const initializeDatabase = async () => {
  const db = await sqlite.open("./db.sqlite");

  await db.run(`CREATE TABLE IF NOT EXISTS Articles (
    Articles_Id INTEGER PRIMARY KEY AUTOINCREMENT,
    Author text NOT NULL,
    Title text NOT NULL,
    Text text NOT NULL,
    Image text NOT NULL,
    Status text NOT NULL
);`);

  await db.run(`CREATE TABLE IF NOT EXISTS Comments (
    Comments_Id INTEGER PRIMARY KEY AUTOINCREMENT,
    Text text NOT NULL,
    Date date NOT NULL,
    Articles_Articles_Id integer NOT NULL,
    CONSTRAINT Comments_Articles FOREIGN KEY (Articles_Articles_Id)
    REFERENCES Articles (Articles_Id)
);`);
  await db.run(`CREATE TABLE IF NOT EXISTS Events (
    Events_Id INTEGER PRIMARY KEY AUTOINCREMENT,
    Image text NOT NULL,
    Title text NOT NULL,
    Description integer NOT NULL,
    Date date NOT NULL,
    Status text NOT NULL);`);

  await db.run(`CREATE TABLE IF NOT EXISTS Post (
    Post_Id INTEGER PRIMARY KEY AUTOINCREMENT,
    Subject text NOT NULL,
    Text text NOT NULL,
    Date date NOT NULL,
    Parent_Id integer,
    User_User_Id integer NOT NULL,
    CONSTRAINT Post_User FOREIGN KEY (User_User_Id)
    REFERENCES User (User_Id));`);

  await db.run(`CREATE TABLE IF NOT EXISTS User (
    User_Id INTEGER PRIMARY KEY AUTOINCREMENT,
    Name text NOT NULL,
    Email text NOT NULL,
    Password text NOT NULL
);`);

  //retrieve data
  // const getArticlesList = async orderBy => {
  //   let statement = `SELECT Articles_Id AS id, Author, Title, Text, Image, Status FROM Articles where Status = 'accepted'`;
  //   switch (orderBy) {
  //     case "Author":
  //       statement += ` ORDER BY Author`;
  //       break;
  //     case "Title":
  //       statement += ` ORDER BY Title`;
  //       break;
  //     case "Text":
  //       statement += ` ORDER BY Text`;
  //       break;
  //     case "Image":
  //       statement += ` ORDER BY Image`;
  //       break;
  //     case "Status":
  //       statement += ` ORDER BY Status`;
  //       break;

  //     default:
  //       break;
  //   }
  //   console.log(statement);
  //   const rows = await db.all(statement);
  //   return rows;
  // };
  //   const addArticles = async props => {
  //     const { Author, Title, Text, Image, Status } = props;
  //     if (!props || !Author || !Title || !Text || !Image || !Status) {
  //       throw new Error("you must provide a name and email");
  //     }

  //     const result = await db.run(
  //       SQL`INSERT INTO Articles (Author, Title, Text, Image, Status) Values (${Author}, ${Title},${Text}, ${Image}, ${Status})`
  //     );
  //     const id = result.lastID;
  //     return id;
  //   };

  //   const getCommentsList = async orderBy => {
  //     let statement = `SELECT Comments_Id AS id, Text, Date FROM Comments`;
  //     switch (orderBy) {
  //       case "Text":
  //         statement += ` ORDER BY Text`;
  //         break;
  //       case "Date":
  //         statement += ` ORDER BY Date`;
  //         break;

  //       default:
  //         break;
  //     }
  //     const rows = await db.all(statement);
  //     return rows;
  //   };

  //   const addComments = async props => {
  //     console.log("HSHSHS");
  //     const { Text, Date } = props;
  //     if (!props || !Text || !Date) {
  //       throw new Error("you must provide a name and email");
  //     }

  //     const result = await db.run(
  //       SQL`INSERT INTO Events (Text, Date) Values (${Text}, ${Date})`
  //     );
  //     const id = result.lastID;
  //     return id;
  //   };

  //   const getEventsList = async orderBy => {
  //     let statement = `SELECT Events_Id AS id, Image, Title, Description, Date, Status FROM Events`;
  //     switch (orderBy) {
  //       case "Image":
  //         statement += ` ORDER BY Image`;
  //         break;
  //       case "Title":
  //         statement += ` ORDER BY Title`;
  //         break;
  //       case "Description":
  //         statement += `ORDER BY Description`;
  //         break;

  //       case "Date":
  //         statement += `ORDER BY Date`;
  //         break;

  //       case "Status":
  //         statement += `ORDER BY Status`;
  //         break;
  //     }
  //     const rows = await db.all(statement);
  //     return rows;
  //   };
  //   const addEvent = async props => {
  //     console.log("HSHSHS");
  //     const { Image, Title, Description, Status } = props;
  //     if (!props || !Image || !Title || !Description || !Status) {
  //       throw new Error("you must provide a name and email");
  //     }

  //     const result = await db.run(
  //       SQL`INSERT INTO Events (Image, Title, Description, Status) Values (${Image}, ${Title},${Description}, ${Status})`
  //     );
  //     const id = result.lastID;
  //     return id;
  //   };

  //   const getPostList = async orderBy => {
  //     let statement = `SELECT Post_Id AS id, Subject, Text, Date, Parent_Id FROM Post`;
  //     switch (orderBy) {
  //       case "Subject":
  //         statement += ` ORDER BY Subject`;
  //         break;
  //       case "Text":
  //         statement += ` ORDER BY Text`;
  //         break;
  //       case "Date":
  //         statement += ` ORDER BY Date`;
  //         break;

  //       case "Parent_Id":
  //         statement += ` ORDER BY Parent_Id`;
  //         break;

  //       default:
  //         break;
  //     }
  //     const rows = await db.all(statement);
  //     return rows;
  //   };

  //   const addPost = async props => {
  //     console.log("HSHSHS");
  //     const { Subject, Text, Date, Parent_Id } = props;
  //     if (!props || !Subject || !Text || !Date || !Parent_Id) {
  //       throw new Error("you must provide a name and email");
  //     }

  //     const result = await db.run(
  //       SQL`INSERT INTO Post (Subject, Text, Date, Parent_Id) Values (${Subject}, ${Text},${Date}, ${Parent_Id})`
  //     );
  //     const id = result.lastID;
  //     return id;
  //   };

  //   const getUserList = async () => {
  //     let returnString = "";
  //     const rows = await db.all(
  //       "SELECT User_Id AS id, Name, Email, Password FROM User"
  //     );
  //     rows.forEach(
  //       ({ id, Name, Email, Password }) =>
  //         (returnString += `[id:${id}] - ${Name} - ${Email} - ${Password} -`)
  //     );
  //     return rows;
  //   };
  //   const addUser = async props => {
  //     console.log("HSHSHS");
  //     const { Name, Email, Password } = props;
  //     if (!props || !Name || !Email || !Password) {
  //       throw new Error("you must provide a name and email");
  //     }

  //     const result = await db.run(
  //       SQL`INSERT INTO User (Name, Email, Password) Values (${Name}, ${Email},${Password})`
  //     );
  //     const id = result.lastID;
  //     return id;
  //   };

  //  const deleteUser = async (props)  => {
  //     const {id, user_id} = props
  //     try {
  //       const result = await db.run(
  //         SQL`Delete from users where user_id = ${id} AND user_id = ${user_id} `
  //       );
  //       if (result.stmt.changes === 0) {
  //         throw new Error(`could not delete user with id = ${id} or wrong user_id`);
  //       }
  //       return true;
  //     } catch (err) {
  //       throw new Error("could not delete user");
  //     }
  //   };

  //   const updateUser = async (id, props) => {
  // const { Name, Email, Password } = props;
  // let stmt;
  // if(Name && Email && Password)
  // { stmt = `UPDATE users SET Email=’${Email}’, Name=’${Name}, Password=’${Password}’ WHERE
  // user_id = ${id}`
  // }
  // else if(Name && !Email && !Password)
  // { stmt = `UPDATE users SET Name=’${Name}’ WHERE user_id =
  // ${id}`}
  // else if(Email && !Name && !Password)
  // {stmt = `UPDATE users SET Email=’${Email}’ WHERE user_id =
  // ${id}`}

  // else if(!Email && Name && !Password)
  // {stmt = `UPDATE users SET Email=’${Email}’ WHERE user_id =
  // ${id}`}

  // else if(!Email && !Name && password)
  // {stmt = `UPDATE users SET Email=’${Email}’ WHERE user_id =
  // ${id}`}

  // const result = await db.run(stmt);
  // if(result.stmt.changes === 0){
  // return false
  // }
  // return true

  //       const deleteEvents = async (props)  => {
  //     const {id, Event_id} = props
  //     try {
  //       const result = await db.run(
  //         SQL`Delete from events where event_id = ${id} AND event_id = ${event_id} `
  //       );
  //       if (result.stmt.changes === 0) {
  //         throw new Error(`could not delete event with id = ${id} or wrong event_id`);
  //       }
  //       return true;
  //     } catch (err) {
  //       throw new Error("could not delete event");
  //     }
  //   };

  //  const updateEvents = async (id, props) => {
  // const { name, email } = props;
  // let stmt;
  // if(name && email)
  // { stmt = `UPDATE contacts SET email=’${email}’, name=’${name}’ WHERE
  // contact_id = ${id}`
  // }
  // else if(name && !email)
  // { stmt = `UPDATE contacts SET name=’${name}’ WHERE contact_id =
  // ${id}`}
  // else if(email && !name)
  // {stmt = `UPDATE contacts SET email=’${email}’ WHERE contact_id =
  // ${id}`}
  // const result = await db.run(stmt);
  // if(result.stmt.changes === 0){
  // return false
  // }
  // return true

  const controller = {
    getArticlesList,
    getArticlesSingle,
    getCommentsList,
    getEventsList
    //     getPostList,
    //     getUserList,
    //     addEvent
  };
  return controller;
  // };
};

export default initializeDatabase;
