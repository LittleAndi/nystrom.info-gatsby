import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div>
    {post.frontmatter.title}
    {post.html}
  </div>
)

export default PostLink