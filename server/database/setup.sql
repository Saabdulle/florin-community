DROP TABLE IF EXISTS token;
DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS thread;
DROP TABLE IF EXISTS user_account;


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


--  CREATE TABLE thread (
--      thread_id INT GENERATED ALWAYS AS IDENTITY,
--      user_id INT NOT NULL,
--      title VARCHAR(200),
--      thread_date TIMESTAMP DEFAULT NOW(),
--      PRIMARY KEY(thread_id),
--      FOREIGN KEY(user_id) REFERENCES user_account("user_id")
-- );

  CREATE TABLE post (
      post_id INT GENERATED ALWAYS AS IDENTITY,
    --   thread_id INT NOT NULL,
      user_id INT NOT NULL,
      title VARCHAR(200),
      post_date TIMESTAMP DEFAULT NOW(),
      post_body TEXT NOT NULL,
      PRIMARY KEY(post_id),
      FOREIGN KEY(user_id) REFERENCES user_account("user_id")
  );
