const Post = require('../../../models/Post')

const postResolver = async (obj, args, context) => {
  // TODO: Write a resolver which returns a post given its id.

  // communicate with database
  const post = await Post.query().findById(args.id)
  return post
}

const postsResolver = async (obj, args, context) => {
  const posts = await Post.query().orderBy('createdAt')
  return posts
}

const resolver = {
  Query: {
    post: postResolver,
    posts: postsResolver,
  },
}

module.exports = resolver
