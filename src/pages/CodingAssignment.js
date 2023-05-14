import Header from "../components/Header";
import SubscriptionPlanContainer from "../components/SubscriptionPlanContainer";
import SubscriptionFeeContainer from "../components/SubscriptionFeeContainer";
import JobCoursesContainer from "../components/JobCoursesContainer";
import ContentContainer from "../components/ContentContainer";
import "./CodingAssignment.css";
const CodingAssignment = () => {
  return (
    <div className="coding-assignment">
      <Header />
      <div className="content-container">
        <img className="back-ground-icon" alt="" src="/back-ground@2x.png" />
        <div className="form">
          <div className="progress-bar">
            <div className="stage-1">
              <div className="icon-1">
                <div className="div">1</div>
              </div>
              <div className="text-1">Sign Up</div>
            </div>
            <div className="stage-1">
              <div className="icon-1">
                <div className="div">2</div>
              </div>
              <div className="text-1">Subscribe</div>
            </div>
          </div>
          <div className="form-header">
            <div className="text">Select your subcription plan</div>
          </div>
          <SubscriptionPlanContainer />
          <SubscriptionFeeContainer />
          <div className="button-container">
            <div className="secondary-button">
              <b className="text1">cancel</b>
            </div>
            <div className="primary-button">
              <b className="text1">proceed to pay</b>
            </div>
          </div>
          <div className="icon-container">
            <div className="razorpay-icon">
              <img
                className="razorpay-icon-child"
                alt=""
                src="/frame-12537@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="main-lockup">
          <div className="header">
            <div className="icon-container">
              <div className="access-curated-courses">
                Access curated courses worth
              </div>
            </div>
            <div className="parent">
              <div className="div2">₹ 18,500</div>
              <div className="frame-child" />
              <div className="at-just-wrapper">
                <div className="at-just">at just</div>
              </div>
              <div className="wrapper">
                <div className="at-just">₹ 99</div>
              </div>
              <div className="per-year-wrapper">
                <div className="at-just">per year!</div>
              </div>
            </div>
          </div>
          <JobCoursesContainer />
          <ContentContainer />
          <div className="pointer-3">
            <div className="icon">
              <div className="vector-parent">
                <img className="vector-icon" alt="" src="/vector.svg" />
                <div className="live">live</div>
              </div>
            </div>
            <div className="text-container">
              <div className="scholarship-worth-94500-container">
                <span className="exclusive">{`Exclusive `}</span>
                <span className="webinar-access">webinar access</span>
              </div>
            </div>
          </div>
          <div className="pointer-4">
            <div className="icon1">
              <img className="icon-child" alt="" src="/group-17.svg" />
            </div>
            <div className="text-container1">
              <div className="text4">
                <div className="scholarship-worth-94500-container">
                  <span>{`Scholarship worth `}</span>
                  <span className="span">₹94,500</span>
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-5">
            <div className="icon2">
              <div className="vector-group">
                <img className="vector-icon1" alt="" src="/vector1.svg" />
                <div className="ads">ADS</div>
                <div className="group-child" />
              </div>
            </div>
            <div className="text-container">
              <div className="scholarship-worth-94500-container">
                <span className="exclusive">{`Ad Free `}</span>
                <span className="webinar-access">learning experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingAssignment;
