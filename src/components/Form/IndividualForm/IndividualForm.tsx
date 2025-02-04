import { useState } from "react";
import "./IndividualForm.scss";
import Section from "../../-shared/Section/Section";
import icons from "../../../assets/Form/icons.svg";
import leftArrow from "../../../assets/Form/leftarrow.svg";
import rightArrow from "../../../assets/Form/rightarrow.svg";
import CustomSelect from "../CustomSelect/CustomSelect";

const IndividualForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    technologies: "",
    cvLink: "",
    occupation: "Srednjoškolac",
    school: "",
    grade: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Section isContainer={false}>
      <div className="form-container">
        <div className="form-header">
          <h1 className="prijava-text">PRIJAVA</h1>
          <div className="icons">
            <img src={icons} alt="ikonice" />
          </div>
        </div>
        <form className="form-body">
          <div className="form-body-upper">
            <p className="form-upper-p">1. ČLAN</p>
          </div>
          <div className="form-body-center">
            <div className="center-upper">
              <div className="center-upper-left">
                <label className="form-label">
                  Ime i prezime:
                  <input
                    className="form-textbox form-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </label>

                <label className="form-label">
                  Broj telefona:
                  <input
                    className="form-textbox form-phone"
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </label>

                <label className="form-label">
                  Mejl:
                  <input
                    className="form-textbox form-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </label>

                <label className="form-tech-label">
                  Koje tehnologije znate?
                  <textarea
                    className="form-textbox form-tech"
                    name="technologies"
                    value={formData.technologies}
                    onChange={handleChange}
                  ></textarea>
                </label>
              </div>
            </div>
            <div className="center-upper-right">
              <div className="occupation-div">
                <p className="occupation-text">Zanimanje:</p>
                <div className="occupation-radio">
                  <label className="radio-label">
                    <input
                      className="occupation-radio"
                      type="radio"
                      name="occupation"
                      value="Zaposlen"
                      checked={formData.occupation === "Zaposlen"}
                      onChange={handleChange}
                    />
                    Zaposlen
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="occupation"
                      value="Student"
                      checked={formData.occupation === "Student"}
                      onChange={handleChange}
                    />
                    Student
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="occupation"
                      value="Srednjoškolac"
                      checked={formData.occupation === "Srednjoškolac"}
                      onChange={handleChange}
                    />
                    Srednjoškolac
                  </label>
                </div>
              </div>

              <label className="school-label">
                Srednja škola:
                <CustomSelect
                  name="school"
                  value={formData.school}
                  onChange={handleChange}
                  values={[
                    "Tehnička",
                    "Gimnazija",
                    "Elektrotehnička",
                    "Umetnička",
                  ]} // Sada samo prosleđuješ niz
                />
              </label>

              <label className="grade-label">
                Razred:
                <CustomSelect
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  values={["1", "2", "3", "4"]} // Sada samo prosleđuješ niz
                />
              </label>
            </div>
          </div>
          <label className="center-cv">
            Link ka CV-ju:
            <input
              className="center-cv-textbox form-textbox"
              type="url"
              name="cvLink"
              value={formData.cvLink}
              onChange={handleChange}
            />
          </label>
          <div className="form-body-lower">
            <button className="left-button">
              <img src={leftArrow} alt="<" />
            </button>
            <button className="right-button">
              <img src={rightArrow} alt=">" />
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default IndividualForm;
