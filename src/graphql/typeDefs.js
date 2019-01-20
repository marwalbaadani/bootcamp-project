const gql = require('graphql-tag')

module.exports = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    concentration: String
    gender: String
    bio: String
    picture: String!
    house: String
    birthday: String
    friends: [Friends]
    createdAt: String!
    updatedAt: String
    posts: [Post]
    hobbies: [Hobbies]
  }

  enum HobbyNames {
    SPORTS
    ARTS
    MUSIC
    READING
    TRAVEL
    DINING
    CODING
  }
  type Post {
    id: ID!
    userId: ID!
    content: String!
    createdAt: String!
    updatedAt: String!
  }

  type Friends {
    id: ID!
    followerId: ID!
    followingID: ID!
  }

  type Hobbies {
    id: ID!
    userID: ID!
    name: HobbyNames!
    createdAt: String!
    updatedAt: String!
  }
  input HobbyInputs {
    hobbies: String
  }
  type Query {
    users(
      substr: String
      hometown: String
      house: String
      concentration: String
      hobbies: [HobbyInputs]
    ): [User]
    user(id: Int!): User!
    post(id: ID!): Post!
    posts: [Post!]!
    hobbies: [Hobbies!]!
  }

  type Mutation {
    createUser(input: CreateUser!): CreateUserReturn!
    # updateUser(input: UpdateUser!): updateUserReturn!
    createPost(input: CreatePost!): CreatePostReturn!
    editPost(id: ID!, input: UpdatePost!): UpdatePostReturn!
    #  acceptFriend(id: ID!, input: AcceptFriend): acceptFriendReturn!
    # createUser(input: createUser!): User!
    loginUser(input: LoginUser!): LoginUserReturn!
  }

  input CreatePost {
    content: String!
    createdAt: String!
    updatedAt: String!
  }
  input UpdateUser {
    id: ID!
    name: String!
    email: String!
    password: String!
    concentration: String
    gender: String
    bio: String
    birthday: String
    #friends: [Friends]
    picture: String!
    createdAt: String!
    updatedAt: String
    house: String
    #posts: [Post]!
    hobbies: String
  }

  input CreateUser {
    content: String!
    createdAt: String!
    updatedAt: String!
  }

  type UpdateUserReturn {
    error: String
    user: User
  }
  input LoginUser {
    name: String!
    email: String!
  }

  type CreateUserReturn {
    error: String
    user: User
  }

  type UpdatePostReturn {
    error: String
    user: User
  }
  input UpdatePost {
    id: ID!
    userId: ID!
    content: String!
    createdAt: String!
    updatedAt: String!
  }

  type CreatePostReturn {
    error: String
    post: Post
  }

  type LoginUserReturn {
    error: String
    user: User
  }
`
