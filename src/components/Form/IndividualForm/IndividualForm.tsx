import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import "./IndividualForm.scss";
import Section from "../../-shared/Section/Section";
import icons from "../../../assets/Form/icons.svg";
import leftArrow from "../../../assets/Form/leftarrow.svg";
import rightArrow from "../../../assets/Form/rightarrow.svg";
import CustomSelect from "../CustomSelect/CustomSelect";

// Liste fakulteta i škola
const HIGH_SCHOOLS = ["Tehnička", "Gimnazija", "Elektrotehnička", "Umetnička"];
const FACULTIES = [
  "Tehnički fakultet",
  "Filozofski fakultet",
  "Ekonomski fakultet",
  "Umetnički fakultet",
];

// Shema za validaciju
const formSchema = z
  .object({
    name: z.string().min(1, "Ime i prezime su obavezni."),
    phone: z.string().min(1, "Broj telefona je obavezan."),
    email: z.string().email("Unesite validnu email adresu."),
    technologies: z.string().min(1, "Tehnologije su obavezne."),
    cvLink: z.string().url("Unesite validan URL za CV."),
    occupation: z.enum(["Zaposlen", "Student", "Srednjoškolac"]),
    school: z.string().optional(),
    grade: z.string().optional(),
  })
  .refine(
    (data) => {
      if (
        data.occupation === "Student" ||
        data.occupation === "Srednjoškolac"
      ) {
        return data.school && data.grade;
      }
      return true;
    },
    {
      message: "Škola i razred/godina su obavezni za studente i srednjoškolce.",
      path: ["school", "grade"],
    }
  );

interface IndividualFormProps {
  nextForm: () => void;
  prevForm: () => void;
  indexIndividual: number;
}

const IndividualForm: React.FC<IndividualFormProps> = ({
  nextForm,
  prevForm,
  indexIndividual,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      technologies: "",
      cvLink: "",
      occupation: "Srednjoškolac",
      school: "",
      grade: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Forma je uspešno validirana:", data);
    nextForm();
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
        <form className="form-body" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-body-upper">
            <p className="form-upper-p">{indexIndividual}. ČLAN</p>
          </div>
          <div className="form-body-center">
            <div className="center-upper">
              <div className="center-upper-left">
                <label className="form-label">
                  Ime i prezime:
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        className={`form-textbox form-name ${
                          errors.name ? "error" : ""
                        }`}
                        type="text"
                        placeholder={
                          errors.name?.message || "Unesite ime i prezime"
                        }
                      />
                    )}
                  />
                </label>

                <label className="form-label">
                  Broj telefona:
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        className={`form-textbox form-phone ${
                          errors.phone ? "error" : ""
                        }`}
                        type="text"
                        placeholder={
                          errors.phone?.message || "Unesite broj telefona"
                        }
                      />
                    )}
                  />
                </label>

                <label className="form-label">
                  Mejl:
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        className={`form-textbox form-email ${
                          errors.email ? "error" : ""
                        }`}
                        type="email"
                        placeholder={errors.email?.message || "Unesite email"}
                      />
                    )}
                  />
                </label>

                <label className="form-tech-label">
                  Koje tehnologije znate?
                  <Controller
                    name="technologies"
                    control={control}
                    render={({ field }) => (
                      <textarea
                        {...field}
                        className={`form-textbox form-tech ${
                          errors.technologies ? "error" : ""
                        }`}
                        placeholder={
                          errors.technologies?.message ||
                          "Unesite poznate tehnologije"
                        }
                      />
                    )}
                  />
                </label>
              </div>
            </div>
            <div className="center-upper-right">
              <div className="occupation-div">
                <p className="occupation-text">Zanimanje:</p>
                <div className="occupation-radio">
                  <Controller
                    name="occupation"
                    control={control}
                    render={({ field }) => (
                      <>
                        <label className="radio-label">
                          <input
                            {...field}
                            type="radio"
                            value="Zaposlen"
                            checked={field.value === "Zaposlen"}
                          />
                          Zaposlen
                        </label>
                        <label className="radio-label">
                          <input
                            {...field}
                            type="radio"
                            value="Student"
                            checked={field.value === "Student"}
                          />
                          Student
                        </label>
                        <label className="radio-label">
                          <input
                            {...field}
                            type="radio"
                            value="Srednjoškolac"
                            checked={field.value === "Srednjoškolac"}
                          />
                          Srednjoškolac
                        </label>
                      </>
                    )}
                  />
                </div>
              </div>

              {/* Prikaz polja u zavisnosti od zanimanja */}
              {(control._formValues.occupation === "Srednjoškolac" ||
                control._formValues.occupation === "Student") && (
                <>
                  <label className="school-label">
                    {control._formValues.occupation === "Srednjoškolac"
                      ? "Srednja škola:"
                      : "Fakultet:"}
                    <Controller
                      name="school"
                      control={control}
                      render={({ field }) => (
                        <CustomSelect
                          {...field}
                          values={
                            control._formValues.occupation === "Srednjoškolac"
                              ? HIGH_SCHOOLS
                              : FACULTIES
                          }
                          className={errors.school ? "error" : ""}
                        />
                      )}
                    />
                  </label>

                  <label className="grade-label">
                    {control._formValues.occupation === "Srednjoškolac"
                      ? "Razred:"
                      : "Godina studija:"}
                    <Controller
                      name="grade"
                      control={control}
                      render={({ field }) => (
                        <CustomSelect
                          {...field}
                          values={["1", "2", "3", "4"]}
                          className={errors.grade ? "error" : ""}
                        />
                      )}
                    />
                  </label>
                </>
              )}
            </div>
          </div>
          <label className="center-cv">
            Link ka CV-ju:
            <Controller
              name="cvLink"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className={`form-textbox center-cv-textbox ${
                    errors.cvLink ? "error" : ""
                  }`}
                  type="url"
                  placeholder={
                    errors.cvLink?.message || "Unesite link ka CV-ju"
                  }
                />
              )}
            />
          </label>
          <div className="form-body-lower">
            {indexIndividual === 4 && (
              <button className="fourth" onClick={nextForm}>
                <p>Bez 4. člana</p>
              </button>
            )}
            <button className="left-button" onClick={prevForm}>
              <img src={leftArrow} alt="<" />
            </button>
            <button className="right-button" type="submit">
              <img src={rightArrow} alt=">" />
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default IndividualForm;
