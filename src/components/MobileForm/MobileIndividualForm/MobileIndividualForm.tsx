import React from "react";
import "./MobileIndividualForm.scss";
import Section from "../../-shared/Section/Section";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import MobileCustomSelect from "../MobileCustomSelect/MobileCustomSelect";

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

interface MobileIndividualFormProps {
  nextForm: () => void;
  prevForm: () => void;
  indexIndividual: number;
}

const MobileIndividualForm: React.FC<MobileIndividualFormProps> = ({
  nextForm,
  prevForm,
  indexIndividual,
}) => {
  const {
    control,
    handleSubmit,
    watch,
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

  const occupation = watch("occupation");

  const onSubmit = (data: any) => {
    console.log("Forma je uspešno validirana:", data);
    nextForm();
  };
  return (
    <Section isContainer={false}>
      <div className="mobile-form-container">
        <div className="mobile-form-wrapper">
          <h1 className="mobile-form-prijave-text">PRIJAVA</h1>
          <p className="mobile-form-individual">Član {indexIndividual} </p>
          <label className="mobile-form-label">
            Ime i prezime:
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className={`mobile-form-textbox ${
                    errors.name ? "error" : ""
                  }`}
                  type="text"
                  placeholder={errors.name?.message || "Unesite ime i prezime"}
                />
              )}
            />
          </label>

          <label className="mobile-form-label">
            Broj telefona:
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className={`mobile-form-textbox ${
                    errors.phone ? "error" : ""
                  }`}
                  type="text"
                  placeholder={errors.phone?.message || "Unesite broj telefona"}
                />
              )}
            />
          </label>

          <label className="mobile-form-label">
            Mejl:
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className={`mobile-form-textbox ${
                    errors.email ? "error" : ""
                  }`}
                  type="email"
                  placeholder={errors.email?.message || "Unesite email"}
                />
              )}
            />
          </label>

          <label className="mobile-form-label">
            Koje tehnologije znate?
            <Controller
              name="technologies"
              control={control}
              render={({ field }) => (
                <textarea
                  {...field}
                  className={`mobile-form-textbox mobile-form-tech ${
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

          <div className="mobile-occupation-div">
            <p className="mobile-occupation-text">Zanimanje:</p>
            <div className="mobile-occupation-radio">
              <Controller
                name="occupation"
                control={control}
                render={({ field }) => (
                  <>
                    <label className="mobile-radio-label">
                      <input
                        {...field}
                        type="radio"
                        value="Zaposlen"
                        checked={field.value === "Zaposlen"}
                      />
                      Zaposlen
                    </label>
                    <label className="mobile-radio-label">
                      <input
                        {...field}
                        type="radio"
                        value="Student"
                        checked={field.value === "Student"}
                      />
                      Student
                    </label>
                    <label className="mobile-radio-label">
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
          {(occupation === "Srednjoškolac" || occupation === "Student") && (
            <>
              <label className="mobile-school-label">
                {occupation === "Srednjoškolac"
                  ? "Srednja škola:"
                  : "Fakultet:"}
                <Controller
                  name="school"
                  control={control}
                  render={({ field }) => (
                    <MobileCustomSelect
                      {...field}
                      values={
                        occupation === "Srednjoškolac"
                          ? HIGH_SCHOOLS
                          : FACULTIES
                      }
                      className={errors.school ? "error" : ""}
                    />
                  )}
                />
              </label>

              <label className="mobile-grade-label">
                {occupation === "Srednjoškolac" ? "Razred:" : "Godina studija:"}
                <Controller
                  name="grade"
                  control={control}
                  render={({ field }) => (
                    <MobileCustomSelect
                      {...field}
                      values={["1", "2", "3", "4"]}
                      className={errors.grade ? "error" : ""}
                    />
                  )}
                />
              </label>
            </>
          )}
          <label className="mobile-school-label">
            Link ka CV-ju:
            <Controller
              name="cvLink"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className={`mobile-form-textbox ${
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
        </div>
      </div>
    </Section>
  );
};

export default MobileIndividualForm;
