import { useState } from "react";
import { z } from "zod";
import "./IndividualForm.scss";
import Section from "../../-shared/Section/Section";
import icons from "../../../assets/Form/icons.svg";
import leftArrow from "../../../assets/Form/leftarrow.svg";
import rightArrow from "../../../assets/Form/rightarrow.svg";
import CustomSelect from "../CustomSelect/CustomSelect";

interface IndividualFormProps {
  nextForm: () => void;
  prevForm: () => void;
}
// Shema za validaciju
const formSchema = z.object({
  name: z.string().min(1, "Ime i prezime su obavezni."),
  phone: z.string().min(1, "Broj telefona je obavezan."),
  email: z.string().email("Unesite validnu email adresu."),
  technologies: z.string().min(1, "Tehnologije su obavezne."),
  cvLink: z.string().url("Unesite validan URL za CV."),
  occupation: z.enum(["Zaposlen", "Student", "Srednjoškolac"]),
  school: z.string().min(1, "Škola je obavezna."),
  grade: z.string().min(1, "Razred je obavezan."),
});

const IndividualForm: React.FC<IndividualFormProps> = ({
  nextForm,
  prevForm,
}) => {
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

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Očisti grešku za polje koje se menja
    if (errors[e.target.name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Validacija podataka
      formSchema.parse(formData);
      setErrors({});
      console.log("Forma je uspešno validirana:", formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: { [key: string]: string } = {};
        error.errors.forEach((err) => {
          newErrors[err.path[0]] = err.message;
        });
        setErrors(newErrors);
      }
    }
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
        <form className="form-body" onSubmit={handleSubmit}>
          <div className="form-body-upper">
            <p className="form-upper-p">1. ČLAN</p>
          </div>
          <div className="form-body-center">
            <div className="center-upper">
              <div className="center-upper-left">
                <label className="form-label">
                  Ime i prezime:
                  <input
                    className={`form-textbox form-name ${
                      errors.name ? "error" : ""
                    }`}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={errors.name || "Unesite ime i prezime"}
                  />
                </label>

                <label className="form-label">
                  Broj telefona:
                  <input
                    className={`form-textbox form-phone ${
                      errors.phone ? "error" : ""
                    }`}
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={errors.phone || "Unesite broj telefona"}
                  />
                </label>

                <label className="form-label">
                  Mejl:
                  <input
                    className={`form-textbox form-email ${
                      errors.email ? "error" : ""
                    }`}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={errors.email || "Unesite email"}
                  />
                </label>

                <label className="form-tech-label">
                  Koje tehnologije znate?
                  <textarea
                    className={`form-textbox form-tech ${
                      errors.technologies ? "error" : ""
                    }`}
                    name="technologies"
                    value={formData.technologies}
                    onChange={handleChange}
                    placeholder={
                      errors.technologies || "Unesite poznate tehnologije"
                    }
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

              {/* Prikaz polja u zavisnosti od zanimanja */}
              {formData.occupation === "Srednjoškolac" && (
                <>
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
                      ]}
                      className={errors.school ? "error" : ""}
                    />
                  </label>

                  <label className="grade-label">
                    Razred:
                    <CustomSelect
                      name="grade"
                      value={formData.grade}
                      onChange={handleChange}
                      values={["1", "2", "3", "4"]}
                      className={errors.grade ? "error" : ""}
                    />
                  </label>
                </>
              )}

              {formData.occupation === "Student" && (
                <>
                  <label className="school-label">
                    Fakultet:
                    <CustomSelect
                      name="school"
                      value={formData.school}
                      onChange={handleChange}
                      values={[
                        "Tehnički fakultet",
                        "Filozofski fakultet",
                        "Ekonomski fakultet",
                        "Umetnički fakultet",
                      ]}
                      className={errors.school ? "error" : ""}
                    />
                  </label>

                  <label className="grade-label">
                    Godina studija:
                    <CustomSelect
                      name="grade"
                      value={formData.grade}
                      onChange={handleChange}
                      values={["1", "2", "3", "4"]}
                      className={errors.grade ? "error" : ""}
                    />
                  </label>
                </>
              )}
            </div>
          </div>
          <label className="center-cv">
            Link ka CV-ju:
            <input
              className={`form-textbox center-cv-textbox ${
                errors.cvLink ? "error" : ""
              }`}
              type="url"
              name="cvLink"
              value={formData.cvLink}
              onChange={handleChange}
              placeholder={errors.cvLink || "Unesite link ka CV-ju"}
            />
          </label>
          <div className="form-body-lower">
            <button className="left-button" onClick={prevForm}>
              <img src={leftArrow} alt="<" />
            </button>
            <button className="right-button" type="submit" onClick={nextForm}>
              <img src={rightArrow} alt=">" />
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default IndividualForm;
