import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import ServiceDetails from "./pages/ServiceDetails.jsx";
import Contact from "./pages/Contact.jsx";
import Blogs from "./pages/Blogs.jsx";
import BlogDetails from "./pages/BlogDetails.jsx";
import Error from "./pages/Error.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Doctors from "./pages/Doctors.jsx";
import FAQ from "./pages/FAQ.jsx";
import Appointment from "./pages/Appointment.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import TermsAndConditions from "./pages/TermsAndConditions.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import DoctorDetails from "./pages/DoctorDetails.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/servicedetails" exact element={<ServiceDetails />} />
          <Route path="/blogs" exact element={<Blogs />} />
          <Route path="/blogdetails" exact element={<BlogDetails />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/error" exact element={<Error />} />
          <Route path="/doctors" exact element={<Doctors />} />
          <Route path="/doctor-details" exact element={<DoctorDetails />} />
          <Route path="/faq" exact element={<FAQ />} />
          <Route path="/appointment" exact element={<Appointment />} />
          <Route path="/testimonials" exact element={<Testimonials />} />
          <Route
            path="/terms-conditions"
            exact
            element={<TermsAndConditions />}
          />
          <Route path="/privacy-policy" exact element={<PrivacyPolicy />} />
          <Route path="/signin" exact element={<SignIn />} />
          <Route path="/signup" exact element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
