function Contact() {
    return (
        <>
            <section className="contact_banner full-container"></section>
            <section className="find_out container">
                <div data-aos="fade-up" className="find_out_image">
                    <img src="static/find_out_img.jpg" />
                </div>
                <div className="find_out_content">
                    <div data-aos="fade-up" className="find_out_title">
                        <h3>We'd love to talk about how we can work together.</h3>
                        <p>
                        We value partnerships and are excited about the prospect of working with you to promote organic products and sustainable agriculture.Let's join forces and make a difference in the world of organic farming. We're eager to explore how we can work together.
                        </p>
                    </div>
                    <div className="find_out_info">
                        <div data-aos="fade-up" className="info_item">
                            <div className="info_item_icon">
                                <img src="./images/icons/message.png" />
                            </div>
                            <div className="info_item_text">
                                <h4>Massege</h4>
                                <a href="#">support@organic.com</a>
                            </div>
                        </div>

                        <div data-aos="fade-up" className="info_item">
                            <div className="info_item_icon">
                                <img src="./images/icons/phone.png" />
                            </div>
                            <div className="info_item_text">
                                <h4>Contact Us</h4>
                                <a href="#">+01 123 456 789</a>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="contact_social">
                        <a href="https://www.facebook.com/"><img src="./images/icons/Fb.png" /></a>
                        <a href="https://twitter.com/"><img src="./images/icons/Twiter.png" /></a>
                        <a href="https://www.instagram.com/"><img src="./images/icons/Insta.png" /></a>
                        <a href="https://www.pinterest.com/"><img src="./images/icons/Vector (3).png" /></a>
                    </div>
                </div>
            </section>
            <section className="location_section container">
                <div data-aos="fade-up" className="location_content">
                    <div data-aos="fade-up" className="location_title">
                        <h5>Location</h5>
                        <h3>Our Farms</h3>
                        <p>
                        With farms located in various regions, we are able to offer a wide variety of organic produce all year round.
                        </p>
                    </div>
                    <div  className="location_about">
                        <div data-aos="fade-up" className="location_adress">
                            <div className="location_icon">
                                <img src="./images/icons/location_icon.png" />
                            </div>
                            <div className="location_text">
                                <h6 className="adress_title">New York, USA:</h6>
                                <p>299 Park Avenue New York, New York 10171</p>
                            </div>
                        </div>

                        <div data-aos="fade-up" className="location_adress">
                            <div className="location_icon">
                                <img src="./images/icons/location_icon.png" />
                            </div>
                            <div className="location_text">
                                <h6 className="adress_title">London, UK:</h6>
                                <p>30 Stamford Street, London SE1 9LQ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact_form container">
                <form>
                    <div data-aos="fade-up" className="form_row">
                        <div  className="form_form">
                            <label for="full_name" className="form_label">Full Name*</label
                            ><input
                                type="text"
                                className="form_input"
                                maxlength="256"
                                placeholder="Enter Your Name"
                                id="full_name"
                            />
                        </div>
                        <div className="form_form">
                            <label for="full_email" className="form_label">Email Address*</label
                            ><input
                                type="email"
                                className="form_input"
                                maxlength="256"
                                placeholder="Enter Your Email"
                                id="full_email"
                            />
                        </div>
                    </div>
                    <div data-aos="fade-up" className="form_row">
                        <div className="form_form">
                            <label for="company" className="form_label">Company*</label
                            ><input
                                type="email"
                                className="form_input"
                                maxlength="256"
                                placeholder="Enter Company Name"
                                id="company"
                            />
                        </div>
                        <div className="form_form">
                            <label for="subject" className="form_label">Subject*</label
                            ><input
                                type="text"
                                className="form_input"
                                maxlength="256"
                                placeholder="How We Can Help"
                                id="subject"
                            />
                        </div>
                    </div>
                    <div data-aos="fade-up" className="form_message">
                        <label for="message" className="form_label">Message</label
                        ><textarea
                            placeholder="Hello There, I would like to..."
                            maxlength="5000"
                            id="message"
                            className="input_textarea"
                        ></textarea>
                    </div>
                    <button data-aos="fade-up" class="blue_btn">
                        <p>Send Message</p>
                        <i class="fa-solid fa-circle-arrow-right"></i>
                    </button>
                </form>
            </section>
        </>
    )
}

export default Contact;