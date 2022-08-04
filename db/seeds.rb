# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(
    first_name: "Guy",
    last_name: "1",
    username: "bob",
    password_digest: "two",
    img: "https://cdn.eso.org/images/publicationjpg/eso1907a.jpg"
)

User.create(first_name: "Guy", last_name: "2", username: "one", password_digest: "two",img: "https://cdn.eso.org/images/publicationjpg/eso1907a.jpg")

User.create(
    first_name: "Lady1",
    last_name: "Gittings",
    username: "tweet",
    password_digest: "two",
    img: "https://cdn.eso.org/images/publicationjpg/eso1907a.jpg"
)

User.create(
    first_name: "Place",
    last_name: "Here",
    username: "4",
    password_digest: "two",
    img: "https://cdn.eso.org/images/publicationjpg/eso1907a.jpg"
)

Post.create(
    title: "what is wrong with society?",

    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

   

    img: "https://cdn.eso.org/images/publicationjpg/eso1907a.jpg",

    user_id: 2
)

Post.create(
    title: "After all these years, i found where my mother hid my game boy when she took it away from me as punishment for the report card i brought home in the June of 2006, three days after my birthday. Here's what that says about the future.",
    
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

  

    img: "https://cdn.eso.org/images/publicationjpg/eso1907a.jpg",

    user_id: 2

)

Post.create(
    title: "Is being in love 'a vibe' or 'a mood'?",
    
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        

     img: "https://cdn.eso.org/images/publicationjpg/eso1907a.jpg",

     user_id: 2
)

Comment.create(
 user_id: 2,
 post_id: 1,
 text: "yo this is a comment, lorem ipsum and all that. Thanks for listening."
)

Comment.create(
 user_id: 4,
 post_id: 2,
 text: "yo this is a comment, lorem ipsum and all that. Thanks for listening."
)

Comment.create(
 user_id: 3,
 post_id: 4,
 text: "yo this is a comment, lorem ipsum and all that. Thanks for listening."
)
