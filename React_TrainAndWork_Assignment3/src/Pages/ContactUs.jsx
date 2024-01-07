import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchcontacts } from "/src/slices/contactSlice.jsx";

function ContactUs() {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contacts.contacts);
  const contactStatus = useSelector((state) => state.contacts.status);
  const error = useSelector((state) => state.contacts.error);

  useEffect(() => {
    if (contactStatus === "idle") {
      dispatch(fetchcontacts());
    }
  }, [contactStatus, dispatch]);

  return (
    <div>
      <>
        <section className="mt-3">
          <div className="container">
            <div className="row">
              <div className="about-top">
                <div className=" col-lg-12 no-padding">

                  {contactStatus === "loading" && <div>Loading...</div>}
                  {contactStatus === "succeeded" &&
                    contacts.map((contact) => (
                      <div className="about-intro">
                        <h2>
                          <strong> Contact info</strong>
                        </h2>
                        <p>
                          <strong>Phone: {contact.phone}</strong>
                        </p>
                        <p>Mail: {contact.mail}</p>
                        <p>
                          <strong>Address</strong>
                        </p>
                        <p>
                          {contact.address}
                        </p>
                      </div>
                    ))}
                  {contactStatus === "failed" && <div>Error: {error}</div>}

                </div>
              </div>
            </div>
          </div>
        </section>
        {/*CONTACT TOP AREA END*/}
        {/*CONTACT BOTTOM AREA START*/}
        <div className="contact-bottom-area">
          <div className="container">
            <div className="row contact-wrapper">
              <div className="col-xs-12 col-sm-12 col-lg-6">
                <div className="contact-map">
                  <div className="mapouter">
                    <div className="gmap_canvas">
                      <iframe
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        frameBorder={0}
                        scrolling="no"
                        marginHeight={0}
                        marginWidth={0}
                      />
                      <a href="https://sites.google.com/view/maps-api-v2/mapv2" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-lg-6 no-padding">
                <form
                  className="contact-form"
                  id="contact-form"
                  action="https://whizthemes.com/mail-php/other/mail.php"
                  method="POST"
                >
                  <span>
                    <input
                      type="text"
                      placeholder="First name"
                      name="con_name"
                    />
                  </span>
                  <span>
                    <input
                      type="text"
                      placeholder="Last name"
                      name="con_name"
                    />
                  </span>
                  <span>
                    <input type="text" placeholder="Email" name="con_email" />
                  </span>
                  <span>
                    <input
                      type="text"
                      placeholder="Wbsite"
                      name="con_website"
                    />
                  </span>
                  <span className="con-subject">
                    <input
                      type="text"
                      placeholder="Subject"
                      name="con_subject"
                    />
                  </span>
                  <span className="con-subject">
                    <textarea
                      rows={10}
                      cols={60}
                      placeholder="Message"
                      name="con_message"
                      defaultValue={""}
                    />
                  </span>
                  <input
                    type="submit"
                    className="submit-btn button-link pull-right"
                    defaultValue="send "
                  />
                </form>
                <p className="form-message" />
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default ContactUs;
