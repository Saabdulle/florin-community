INSERT INTO user_account
    (username, password, email)
values
    ('Cameron', 'pwd1', 'cAmoateng@florin.com'),
    ('Mark', 'pwd2', 'mHalstead@florin.com'),
    ('Martin', 'pwd3', 'mTorradoMouzo@florin.com'),
    ('Saeed', 'pwd4', 'sAbdulle@florin.com');
    
INSERT INTO volunteers (volunteer_full_name, volunteer_task, date, task_time, volunteer_email)
VALUES
    ('John Smith', 'Recycling', '2023-02-16', '14:00:00', 'johnsmith@example.com'),
    ('Sarah Lee', 'Library Volunteering', '2023-02-18', '10:30:00', 'sarahlee@example.com'),
    ('David Kim', 'Green Volunteering', '2023-02-20', '12:00:00', 'davidkim@example.com');

INSERT INTO thread 
    (user_id, thread_title, thread_body)
VALUES
    (3, 'Thread 1', 'Thread body 1'),
    (2, 'Thread 2', 'Thread body 2'),
    (1, 'Thread 3', 'Thread body 3');

INSERT INTO post (user_id, thread_id, post_title, post_body) VALUES
  (1, 1, 'Post 1', 'Content 1'),
  (2, 2, 'Post 2', 'Content 2'),
  (3, 3, 'Post 3', 'Content 3');
