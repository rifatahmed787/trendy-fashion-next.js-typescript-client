/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import "./Privacy.css";


const PartnerPrivacy = () => {

  return (
    <section className="header-offset content-wrapper about-wrapper min-h-screen">
      <div className="terms-container  max-w-6xl mx-auto px-10">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <div className="terms-title mt-10">
              <h1>Terms &amp; Conditions</h1>
            </div>
            <div className="terms-body mt-5">
              <h4>
                <strong>
                  Welcome to The Rent & Rooms. Please review the following basic
                  terms that govern your use of, and purchase of, Rooms from our
                  site. Please note that your use of our site constitutes your
                  agreement to follow and be bound by those terms.
                </strong>
              </h4>
              <h3 className="my-5">General</h3>

              {/* {appSettings?.data?.userTerms?.map((term, index) => (
                <p key={index} className="py-2">
                  {`${index + 1}.  ${term.term}`}
                </p>
              ))} */}
            </div>
            <div className="container terms_footer">
              <h3>
                Can't find what you're looking for?{" "}
                <a href="www.themainalabel.com">
                  <Link href={"/contact"}>Email us</Link>
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerPrivacy;
