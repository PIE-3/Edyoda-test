import CourseContainer from "../components/CourseContainer";
import JobCoursesContainer from "../components/JobCoursesContainer";
import ContentContainer from "../components/ContentContainer";
import ExclusiveWebinarAccessContaine from "../components/ExclusiveWebinarAccessContaine";
import ScholarshipContainer from "../components/ScholarshipContainer";
import Footer from "../components/Footer";
import "./MainLockup.css";
const MainLockup = () => {
  return (
    <div className="main-lockup1">
      <CourseContainer />
      <JobCoursesContainer />
      <ContentContainer />
      <ExclusiveWebinarAccessContaine />
      <ScholarshipContainer />
      <Footer />
    </div>
  );
};

export default MainLockup;
