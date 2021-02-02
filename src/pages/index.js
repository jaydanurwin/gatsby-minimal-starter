import React from "react"
import Container from "../components/Container/Container"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"

const IndexPage = () => {
  return (
    <Layout>
      <SEO/>
      <Container>
        <p>Home Page</p>
      </Container>
    </Layout>
  )
}

export default IndexPage