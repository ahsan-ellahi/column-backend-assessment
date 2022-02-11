# Blogger API
- A system that will have a many-to-many relationship with a user entity (fields: `username` and `name`) and post entity (fields: `content`, `authorId` - user relation).

- Users can also comment on each post:
    - The comments will be an entry in the Post table.
    - You will need a third table to manage the depth of the comments.

- Clone the repo using `git clone https://github.com/ahsan-ellahi/column-backend-assessment.git`
# How to set-up the project with docker:

- Install docker on your machine

- Run command: `docker-compose -f docker-compose.yml up --build`

    This command will install all the dependencies and app will be available at `localhost:4000` and at this url you will see graphql playground and you can run the queries and mutation as mentioned in graphql docs on this page as well.

# Set up project with out docker: 
 - Use node version = 14.0.0
 - Run command `npm install`
 - Run command `npm run dev`


# Deployed API URL
   - `https://column-blogger-api.herokuapp.com/`

# Test Mutations and Queries


```
mutation CREATE_USER {
  createUser(username: "test 1", name: "test user"){
    id
    name
  }
}

mutation CREATE_POST {
  createPost(content: "My first post", userId: 1){
    id
    content
  }
}

mutation CREATE_COMMENT {
  createComment(content: "My first comment", userId: 1, postId: 1){
    id
    content
  }
}

mutation CREATE_REPLY  {
  createReply(content: "My Reply", userId: 1, postId: 1, commentId: 1){
    id
    content
  }
}

query GET_USER_WITH_POST_AND_COMMENT {
  user(id:1){
    name
    posts {
      content
      comments {
        content
      }
    }
  }
}

query GET_POSTS_WITH_COMMENT {
  post(id:1){
    content
    comments {
      content
    }
  }
}


```