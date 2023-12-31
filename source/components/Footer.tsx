import { socials } from "../helper";

export default function Layout() {
  return (
    <footer className="bg-light">
      <section id="contact" className="py-5">
        <div className="text-center container py-5">
          <div className="text-dark pb-5">
            <h2>Let's Follow Me!</h2>
          </div>

          <div className="row justify-content-center">
            {
              socials.filter((social, i) => i < 7).map((social, i) => (
                <div className="col-sm-1 col-4 py-3" key={i}>
                  <div className="py-3">
                    <a href={social.link} target="_blank">
                      <img src={"/images/social/" + social.title + "-black.png"}
                        alt={"nima mahmoodi " + social.title} />
                      <span>{social.title}</span>
                    </a>
                  </div>
                </div>
              ))
            }
          </div>

          <hr className="text-dark" />

          <div className="row justify-content-center">
            {
              socials.filter((social, i) => i > 6).map((social, i) => (
                <div className="col-sm-1 col-4 py-3" key={i}>
                  <div className="py-3">
                    <a href={social.link} target="_blank">
                      <img src={"/images/social/" + social.title + "-black.png"}
                        alt={"nima mahmoodi " + social.title} />
                      <span>{social.title}</span>
                    </a>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      <hr className="text-dark" />
      <div className="bg-light pb-3">
        <div className="container p-1 d-flex align-items-center">
          <p className="m-0 pe-2">
            @2023.
            all rights reserved.
            made with
          </p>
          <i className="fas fa-heart text-danger"></i>
          <p className="m-0 ps-2">by <a href="https://sinawic.ir" target="_blank"><strong>sinawic</strong></a>.</p>
        </div>
      </div>
    </footer >
  )
}