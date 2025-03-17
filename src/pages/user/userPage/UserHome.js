import React, { useState } from "react";
import BusinessLoanImg from "../../../assets/service_logo1.png";
import EducationLoanImg from "../../../assets/service_logo2.png";
import AgricultureLoanImg from "../../../assets/service_logo3.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import BsForm from "../../../components/BootstrapModal";

// ServiceCard Component
const ServiceCard = ({
  title,
  description,
  imgSrc,
  modalTarget,
  handleShow,
}) => (
  <section className="service-item card">
    <div className="service-img">
      <img src={imgSrc} alt={`${title}_logo`} />
    </div>
    <div className="service-details">
      <h3>{title}</h3>
      <p className="text-center">{description}</p>
      <button
        type="button"
        className="btn btn-outline-dark"
        onClick={() => handleShow(modalTarget)}
      >
        Read More
      </button>
    </div>
  </section>
);

// UserHome Component
const UserHome = () => {
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", body: "" });

  const handleClose = () => setShow(false);

  const handleShow = (modalTarget) => {
    let content;

    // Dynamically set modal content
    switch (modalTarget) {
      case "businessLoanModal":
        content = {
          title: "Business Loan",
          body: (
            <div>
              <ol>
                <h2>Documents Required For NBFC Business Loan</h2>
                <p>
                  Here are the documents Proprietorships, Partnerships, and Pvt.
                  Ltd/ LLP /One Person Companies will need to submit to complete
                  the application for a business loan:
                </p>
                <li>
                  KYC documents – Identity proof and address proof of the
                  borrower and all co-borrowers
                </li>
                <li>PAN Card of the borrower and all co-borrowers</li>
                <li>
                  Last (6-12 Months) months' bank statement of the main
                  operative business account
                </li>
                <li>Signed copy of standard terms (term loan facility)</li>
                <li>
                  Additional document(s) for credit assessment and processing
                  loan requests
                </li>
                <li>GST Registration</li>
                <li>Previous 12 months’ bank statements</li>
                <li>Proof of business registration</li>
                <li>PAN Card and Aadhar Card copy of the Proprietor(s)</li>
                <li>
                  Deed copy and company PAN Card copy in the case of
                  partnerships
                </li>
              </ol>
              <div>
                <img style={{width:"450px"}}
                  class="business1"
                  src={require("../../../assets/business1.jpg")}
                  alt="business1"
                />
              </div>
            </div>
          ),
        };
        break;

      case "educationLoanModal":
        content = {
          title: "Education Loan",
          body: (
            <div>
              <h2>Documents Required For Applying For Education Loan</h2>
              <p>
                To be eligible for an Education Loan, students need to submit
                the following documents:
              </p>
              <ul>
                <li>
                  Marksheet and passing certificate of 10th and 12th exams
                </li>
                <li>Admission Letter from the respective college/university</li>
                <li>Fee structure</li>
                <li>KYC document of the applicant and co-applicant</li>
                <li>Income proof in some cases.</li>
              </ul>
              <p>
                Furthermore, in the case of an Education Loan below Rs 4 lakh,
                no collateral is required. For a loan above Rs 4 lakh to Rs 7.5
                lakh, a third-party guarantor is required, while for loans above
                Rs 7.5 lakh, collateral becomes mandatory. When it comes to a
                loan for studying abroad, insurance is mandatory.
              </p>
              <div>
                <img style={{width:"450px"}}
                  class="education2"
                  src={require("../../../assets/education2.jpg")}
                  alt="education2"
                />
              </div>
            </div>
          ),
        };
        break;

      case "agricultureLoanModal":
        content = {
          title: "Agriculture Loan",
          body: (
            <div>
              <ul>
                <h2>Types of Agriculture Loan</h2>
                <p>
                  Given below is the list of types of agriculture loans that you
                  can avail for yourself:
                </p>
                <li>
                  <b>Crop Loan:</b> These types of loans are also known as
                  Retail Agri Loans is a type of loan which allows a farmer to
                  meet his short-term expenses arising due to cultivation of
                  crops, maintenance of farm equipment, and other post farm
                  activities.
                </li>
                <li>
                  <b>Agricultural Term Loan:</b> These are long-term loan
                  schemes which a farmer can avail to meet their non-seasonal
                  expenses. One can avail this loan to buy or upgrade equipment
                  such as windmills, solar power, etc.
                </li>
                <li>
                  <b>Solar Pump Set Loan:</b> If a farmer is involved in small
                  irrigation projects and requires capital to buy photo voltaic
                  pumping system, then availing a solar pump set loan is the
                  appropriate option. The repayment tenure for such loan schemes
                  goes up to 10 years.
                </li>
                <li>
                  <b>Loan for Allied Agricultural Activities:</b> Farmers
                  involved in allied agricultural activities can apply for such
                  type of loans if they need to raise working capitals to meet
                  their farming expenses.
                </li>
                <li>
                  <b>Farm Mechanisation Loan:</b> If a farmer requires working
                  capital so that they can either purchase new farming
                  machineries or upgrade their existing ones such as purchasing
                  a new tractor or getting an old one repaired, then they can
                  apply for these types of loan schemes.
                </li>
              </ul>
              <div>
                <img style={{width:"450px"}}
                  class="education2"
                  src={require("../../../assets/agricultrue1.jpg")}
                  alt="education2"
                />
              </div>
            </div>
          ),
        };
        break;

      default:
        content = { title: "", body: "" };
    }

    setModalContent(content);
    setShow(true);
  };

  return (
    <>
      {/* Services */}
      <section id="loan_details" className="services_style">
        <div>
          <h2 className="py-3">High Performance Services For All Industries</h2>
        </div>
        <main>
          {/* Business Loan */}
          <ServiceCard
            title="Business Loan"
            description="Every business needs constant capital to ensure expansion and long-term sustainability."
            imgSrc={BusinessLoanImg}
            modalTarget="businessLoanModal"
            handleShow={handleShow}
          />

          {/* Education Loan */}
          <ServiceCard
            title="Education Loan"
            description="We offer instant education loans to students pursuing higher education in India and abroad."
            imgSrc={EducationLoanImg}
            modalTarget="educationLoanModal"
            handleShow={handleShow}
          />

          {/* Agriculture Loan */}
          <ServiceCard
            title="Agriculture Loan"
            description="Check eligibility, features, benefits, interest rates, best offers and apply online to get instant approval."
            imgSrc={AgricultureLoanImg}
            modalTarget="agricultureLoanModal"
            handleShow={handleShow}
          />
        </main>
      </section>

      {/* Modal */}
      <BsForm
        show={show}
        close={handleClose}
        title={modalContent.title}
        body={modalContent.body}
        showFooter={true} // Set to true if Save Changes is required
      />
    </>
  );
};

export default UserHome;
