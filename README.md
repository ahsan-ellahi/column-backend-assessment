# Blogger API
- A system that will have a many-to-many relationship with a user entity (fields: `username` and `name`) and post entity (fields: `content`, `authorId` - user relation).

- Users can also comment on each post:
    - The comments will be an entry in the Post table.
    - You will need a third table to manage the depth of the comments.

# How to set-up the project:

- Install docker on your machine

- Run command: `docker-compose -f docker-compose.yml up --build`

    This command will install all the dependencies and app will be available at `localhost:4000` and at this url you will see graphql playground and you can run the queries and mutation as mentioned in graphql docs on this page as well.

