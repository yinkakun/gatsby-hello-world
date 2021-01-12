import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const MyFiles = ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <h1>My Files</h1>
      <table>
        <thead>
          <tr>
            <th>relativePath</th>
            <th>prettySize</th>
            <th>extension</th>
            <th>birthTime</th>
          </tr>
        </thead>

        <tbody>
          {data.allFile.edges.map(({ node }, index) => {
            const { relativePath, prettySize, extension, birthTime } = node
            console.log(node)
            return (
              <tr key={relativePath}>
                <td>{relativePath}</td>
                <td>{prettySize}</td>
                <td>{extension}</td>
                <td>{birthTime}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`

export default MyFiles
