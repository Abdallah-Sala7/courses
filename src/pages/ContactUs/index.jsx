import './style.css'

import CustomForm from '../../components/CustomForm'
import FaqAccordion from '../../components/FaqAccordion'

const ContactUs = () => {
  return (
    <>
    <header className='contact-us'>
      <div className="container">
        <div className="contact-info">
          <h1 className="section-title">Contact Us</h1>

          <p className="section-info">
            We’re on a mission to deliver engaging, curated courses at a reasonable price.
          </p>
        </div>
      </div>
    </header>

    <section className="our-offices">
      <div className="container">
        <h1 className="section-title">our office</h1>
        
        <div className="office-layout">
          <div className="office-left">
            <div className="office-info-box">
              <h2 className="office-info-title">london</h2>

              <p className="office-info-desc">
                328 Queensberry Street, North Melbourne VIC 3051, Australia.
              </p>

              <a href="tel:+201025077437" className='office-info-link'>
                +20 102 507 7437
              </a>

              <a href="mailto:abdallahsalah138@gmail.com" className='office-info-link'>
                abdallah@frontend.com
              </a>
            </div>

            <div className="office-info-box">
              <h2 className="office-info-title">los angeles</h2>

              <p className="office-info-desc">
                328 Queensberry Street, North Melbourne VIC 3051, Australia.
              </p>

              <a href="tel:+201025077437" className='office-info-link'>
                +20 102 507 7437
              </a>

              <a href="mailto:abdallahsalah138@gmail.com" className='office-info-link'>
                abdallah@frontend.com
              </a>
            </div>

            <div className="office-info-box">
              <h2 className="office-info-title">paris</h2>

              <p className="office-info-desc">
                328 Queensberry Street, North Melbourne VIC 3051, Australia.
              </p>

              <a href="tel:+201025077437" className='office-info-link'>
                +20 102 507 7437
              </a>

              <a href="mailto:abdallahsalah138@gmail.com" className='office-info-link'>
                abdallah@frontend.com
              </a>
            </div>
          </div>

          <div className='contact-form'>
            <h3 className="contact-form-title">
              Send a Message
            </h3>

            <p className="contact-form-desc">
              Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt egetnvallis.
            </p>

            <CustomForm isLabel={true} isRate={false} action='massege' />
          </div>
        </div>
      </div>
    </section>

    <section className="faq">
      <div className="container">
        <h1 className="section-title">
          Frequently Asked Questions
        </h1>

        <p className="section-info">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco
        </p>

        <div className="faq-accordion">
          <FaqAccordion />
        </div>
      </div>
    </section>
    </>
  )
}

export default ContactUs