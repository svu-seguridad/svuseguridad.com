import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-background-image"

const Contacto = ({ data }) => (
  <Layout>
    <SEO title="Contacto" />
    <Img fluid={data.file.childImageSharp.fluid} fadeIn={true}>
      <div
        style={{
          position: "relative",
          display: "block",
          height: 400,
          width: "100%",
        }}
      />
    </Img>
    <div className="row contact-section rounded">
      <div className="col-12">
        <form
          className="rounded p-4"
          name="contact-form"
          method="POST"
          data-netlify="true"
        >
          <div className="form-group row">
            <label className="col-12 col-sm-2 col-form-label">nombre</label>
            <div className="col-12 col-sm-10">
              <input type="text" name="nombre" className="form-control" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-12 col-sm-2 col-form-label">email</label>
            <div className="col-12 col-sm-10">
              <input type="email" className="form-control" name="email" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-12 col-sm-2 col-form-label">mensaje</label>
            <div className="col-12 col-sm-10 col-md-6">
              <textarea className="form-control h-100" name="mensaje" />
            </div>
            <div className="col-12 col-md-4">
              <div className="embed-responsive embed-responsive-4by3 mt-4 mt-md-0">
                <iframe
                  title="Ubicación"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.2379859032003!2d-56.19004918423323!3d-34.875369780389846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f800e1dfee161%3A0xdde59b470aa961a!2sElectronic+security+SVU!5e0!3m2!1sen!2sus!4v1524890385678"
                  width="400"
                  height="300"
                  frameborder="0"
                  style={{ border: 0 }}
                  allowfullscreen
                />
              </div>
            </div>
          </div>
          <input type="hidden" name="form-name" value="contact-form" />
          <footer>
            <button
              className="btn btn-primary px-5"
              name="submit"
              type="submit"
            >
              Enviar
            </button>
          </footer>
        </form>
      </div>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "contacto.jpg" }) {
      childImageSharp {
        fixed(height: 400, fit: COVER, jpegProgressive: false) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
export default Contacto
