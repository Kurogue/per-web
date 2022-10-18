import "./Contact.scss";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="subcontact">
        <h1>Contact Me</h1>
        <div className="icon-container">
          <div className="circle-container">
            <IconButton
              onClick={() => window.open("https://github.com/Kurogue")}
            >
              <GitHubIcon sx={{ fill: "#000" }}></GitHubIcon>
            </IconButton>
            GitHub
          </div>
          <div className="circle-container">
            <IconButton
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/evan-senior-074492117/"
                )
              }
            >
              <LinkedInIcon sx={{ fill: "#0072b1" }}></LinkedInIcon>
            </IconButton>
            LinkedIn
          </div>
          <div className="circle-container">
            <IconButton>
              <a href="mailto:esenior1@usf.edu">
                <EmailIcon sx={{ fill: "#30ab32" }}></EmailIcon>
              </a>
            </IconButton>
            esenior1@usf.edu
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
