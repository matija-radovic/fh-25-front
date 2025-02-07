import React from "react";
import "./MobileIndividualForm.scss";
import Section from "../../-shared/Section/Section";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import MobileCustomSelect from "../MobileCustomSelect/MobileCustomSelect";
import { Profession } from "../../../utils/constants/form/professions";
import { schools } from "../../../utils/constants/form/schools";
import { universities } from "../../../utils/constants/form/universities";
import {
  HighSchoolYear,
  UniversityYear,
} from "../../../utils/constants/form/schoolYears";

// Shema za validaciju
const formSchema = z
  .object({
    name: z.string().min(1, "Ime i prezime su obavezni."),
    phone: z.string().min(1, "Broj telefona je obavezan."),
    email: z.string().email("Unesite validnu email adresu."),
    technologies: z.string().min(1, "Tehnologije su obavezne."),
    cvLink: z.string().url("Unesite validan URL za CV."),
    occupation: z.enum([
      Profession.EMPLOYED,
      Profession.STUDENT,
      Profession.HIGH_SCHOOL_STUDENT,
    ]),
    school: z.string().optional(),
    grade: z.string().optional(),
  })
  .refine(
    (data) => {
      if (
        data.occupation === Profession.STUDENT ||
        data.occupation === Profession.HIGH_SCHOOL_STUDENT
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
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      technologies: "",
      cvLink: "",
      occupation: Profession.HIGH_SCHOOL_STUDENT,
      school: "",
      grade: "",
    },
  });

  const occupation = watch("occupation");

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Forma je uspešno validirana:", data);
    nextForm();
  };

  return (
    <Section isContainer={false}>
      <div className="mobile-form-container">
        <form className="mobile-form-wrapper" onSubmit={handleSubmit(onSubmit)}>
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
                        value={Profession.EMPLOYED}
                        checked={field.value === Profession.EMPLOYED}
                      />
                      Zaposlen
                    </label>
                    <label className="mobile-radio-label">
                      <input
                        {...field}
                        type="radio"
                        value={Profession.STUDENT}
                        checked={field.value === Profession.STUDENT}
                      />
                      Student
                    </label>
                    <label className="mobile-radio-label">
                      <input
                        {...field}
                        type="radio"
                        value={Profession.HIGH_SCHOOL_STUDENT}
                        checked={field.value === Profession.HIGH_SCHOOL_STUDENT}
                      />
                      Srednjoškolac
                    </label>
                  </>
                )}
              />
            </div>
          </div>

          {(occupation === Profession.HIGH_SCHOOL_STUDENT ||
            occupation === Profession.STUDENT) && (
            <>
              <label className="mobile-school-label">
                {occupation === Profession.HIGH_SCHOOL_STUDENT
                  ? "Srednja škola:"
                  : "Fakultet:"}
                <Controller
                  name="school"
                  control={control}
                  render={({ field }) => (
                    <MobileCustomSelect
                      {...field}
                      values={
                        occupation === Profession.HIGH_SCHOOL_STUDENT
                          ? schools
                          : universities
                      }
                      className={errors.school ? "error" : ""}
                    />
                  )}
                />
              </label>

              <label className="mobile-grade-label">
                {occupation === Profession.HIGH_SCHOOL_STUDENT
                  ? "Razred:"
                  : "Godina studija:"}
                <Controller
                  name="grade"
                  control={control}
                  render={({ field }) => (
                    <MobileCustomSelect
                      {...field}
                      values={
                        occupation === Profession.HIGH_SCHOOL_STUDENT
                          ? Object.keys(HighSchoolYear)
                          : Object.keys(UniversityYear)
                      }
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

          <div className="mobile-buttons">
            <button
              className="mobile-button-left-arrow"
              type="button" // Dodato type="button" da sprečimo automatsko slanje forme
              onClick={prevForm}
            ></button>
            <button
              className="mobile-button-right-arrow"
              type="submit"
            ></button>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default MobileIndividualForm;
