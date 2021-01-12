import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import { css } from "@emotion/react"
import { rhythm } from "../utils/typography"

const Home = ({ data }) => {
  return (
    <Layout>
      <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
      <p>
        What do I like to do? Lots of course but definitely enjoy building
        websites.
      </p>
      <div>
        <img
          src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
          alt="Group of pandas eating bamboo"
        />
      </div>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>

      {data.allMarkdownRemark.edges.map(({ node }) => {
        const { id, frontmatter, excerpt } = node

        return (
          <Link
            to={node.fields.slug}
            css={css`
              text-decoration: none;
              color: inherit;
            `}
          >
            <div key={id}>
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {frontmatter.title}{" "}
                <span
                  css={css`
                    color: #bbb;
                  `}
                >
                  — {frontmatter.date}
                </span>
              </h3>
              <p>{excerpt}</p>
            </div>
          </Link>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          timeToRead
          excerpt
          html
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Home
