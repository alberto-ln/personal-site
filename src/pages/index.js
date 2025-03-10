import React from "react"
import Layout from "../layouts/Layout"
import Banner from "../components/Banner"
import About from "../components/Section/Sections/About/About"
import Skills from "../components/Section/Sections/Skills/Skills"
import Work from "../components/Section/Sections/Work/Work"
import Contact from "../components/Contact/Contact"
import Seo from "../components/Seo"

export default function Index(props) {
  const { data } = props
  const images = data.file

  return (
    <Layout>
      <Seo 
        title = "Inicio"
        description = "¡Hola! Soy Lara, desarrolladora web y consultora SEO. Te animo a que visites mi página web para conocer más sobre mí :)"
      />
      <Banner images={images}/>
      <About />
      <Skills />
      <Work />
      <Contact />
    </Layout>
  )
}

export const query = graphql`
query {
  file(relativePath: {eq: "profile.png"}) {
    childImageSharp {
      fixed(width: 500, height: 600) {
         base64
          width
          height
          src
          srcSet
      }
    }
  }
}

`