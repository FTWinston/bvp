import React from 'react'

const ContactForm = () => (
  <section className="wrapper style1 align-center">
    <div className="inner medium">
      <form method="post" name="contact" data-netlify="true">
        <div className="fields">
          <div className="field half">
            <label htmlFor="name">Your Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Your Email Address</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows={8} />
          </div>
        </div>
        <ul className="actions special">
          <li><input type="submit" name="submit" value="Send Message" /></li>
        </ul>
      </form>
    </div>
  </section>
)

export default ContactForm
