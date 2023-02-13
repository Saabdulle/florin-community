DROP TABLE IF EXISTS user_account;
DROP TABLE IF EXISTS token;

CREATE TABLE user_account (
    user_id INT GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE token (
    token_id INT GENERATED ALWAYS AS IDENTITY,
    user_id INT NOT NULL,
    token CHAR(200) UNIQUE NOT NULL,
    PRIMARY KEY(token_id),
    FOREIGN KEY(user_id) REFERENCES user_account("user_id")
);