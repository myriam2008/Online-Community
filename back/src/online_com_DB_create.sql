-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2019-10-07 12:17:21.711

-- tables
-- Table: Articles
CREATE TABLE Articles (
    Articles_Id integer NOT NULL CONSTRAINT Articles_pk PRIMARY KEY,
    Author text NOT NULL,
    Title text NOT NULL,
    Text text NOT NULL,
    Image text NOT NULL,
    Status text NOT NULL
);

-- Table: Comments
CREATE TABLE Comments (
    Comments_Id integer NOT NULL CONSTRAINT Comments_pk PRIMARY KEY,
    Text text NOT NULL,
    Date date NOT NULL,
    Articles_Articles_Id integer NOT NULL,
    CONSTRAINT Comments_Articles FOREIGN KEY (Articles_Articles_Id)
    REFERENCES Articles (Articles_Id)
);

-- Table: Events
CREATE TABLE Events (
    Events_Id integer NOT NULL CONSTRAINT Events_pk PRIMARY KEY,
    Image text NOT NULL,
    Title text NOT NULL,
    Description integer NOT NULL,
    Date date NOT NULL,
    Status text NOT NULL
);

-- Table: Post
CREATE TABLE Post (
    Post_Id integer NOT NULL CONSTRAINT Post_pk PRIMARY KEY,
    Subject text NOT NULL,
    Text text NOT NULL,
    Date date NOT NULL,
    Parent_Id integer NOT NULL,
    User_User_Id integer NOT NULL,
    CONSTRAINT Post_User FOREIGN KEY (User_User_Id)
    REFERENCES User (User_Id)
);

-- Table: User
CREATE TABLE User (
    User_Id integer NOT NULL CONSTRAINT User_pk PRIMARY KEY,
    Name text NOT NULL,
    Email text NOT NULL,
    Password text NOT NULL
);

-- End of file.

