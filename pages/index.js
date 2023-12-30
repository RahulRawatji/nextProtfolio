import { useFormik } from "formik"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import { GrClose } from "react-icons/gr"

import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Input from "../components/Input"
import RandomQuote from "../components/RandomQuote"
import Footer from "../components/Footer"
import Project from "../components/Project/Project"

export default function Home() {
  const [showAlert, setShowAlert] = useState(false)
  const [alertMsg, setAlertMsg] = useState(
    "Mail cannot be sent. Pls Try Again Later!"
  )

  const closeAlertBox = () => {
    setShowAlert(false)
  }
  const sendMail = async (values) => {
    try {
      const {
        name: from_name,
        email: reply_to,
        message,
        to_name = "rahulrawatwork@gmail.com",
      } = values
      const result = await emailjs.send(
        "service_tb9ocwi",
        "template_9hypptm",
        { from_name, reply_to, message, to_name },
        "85xsWFLKZaRABmESS"
      )
      if (result.status === 200) {
        setAlertMsg("Mail Send Successfully. Thanks for Connecting")
      }
      setShowAlert(result.status)
      formData.resetForm()
    } catch (e) {
      setAlertMsg(e)
    }
  }

  const formData = useFormik({
    initialValues: {
      name: "",
      subject: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      sendMail(values)
    },
  })

  return (
    <>
      <Header />
      <div className="body_container">
        <Navbar />
        <div className="main w-2/4 mx-auto">
          <section className="hero">
            <div className="hero-img">
              <img src="/pain.webp" width={"300px"} />
            </div>
            <div className="">
              <h1 className="text-4xl font-semibold">
                I'm Rahul Rawat
                <br></br>Nice to meet you!
              </h1>
              <p className="mt-3">
                Based in Bengaluru. I have a passion for creating dynamic,
                user-friendly websites that engage and inspire. With a
                background in computer science and a keen eye for design, I
                bring a unique blend of technical expertise and creative vision
                to every project.
              </p>
              <div className="mt-4">
                <a className="btn" href="#contact" title="Contact Me">
                  Contact Me
                </a>
              </div>
            </div>
          </section>

          <section className="skills-section">
            <h2>HTML</h2>
            <h2>CSS</h2>
            <h2>REACT</h2>
            <h2>JAVASCRIPT</h2>
          </section>

          <section className="project-section">
            <Project />
          </section>

          <section className="quote-section">
            <RandomQuote />
          </section>

          <section className="contact-section" id="contact">
            <h2>Contact</h2>
            <p>
              If you’d like to chat about a project or just have question,
              please fill in the form below. I aim to get back within 2 days.
            </p>
            {showAlert && (
              <div className="alertBox">
                <h5>{alertMsg}</h5>
                <GrClose
                  size={20}
                  style={{ padding: "2px" }}
                  onClick={closeAlertBox}
                />
              </div>
            )}
            <form onSubmit={formData.handleSubmit}>
              <Input
                title="name"
                value={formData.values.name}
                onChange={formData.handleChange}
                required
              />
              <Input
                title="email"
                value={formData.values.email}
                onChange={formData.handleChange}
                type="email"
                required
              />
              <Input
                title="subject"
                value={formData.values.subject}
                onChange={formData.handleChange}
                columnCount={"1/ span 2"}
                required
              />
              <Input
                title="message"
                value={formData.values.message}
                onChange={formData.handleChange}
                columnCount={"1/ span 2"}
                required
              />
              <button className="btn btn-form" type="submit">
                Send Message
              </button>
            </form>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}
