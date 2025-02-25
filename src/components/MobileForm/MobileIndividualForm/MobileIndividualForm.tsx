import React from "react";
import "./MobileIndividualForm.scss";
import Section from "../../-shared/Section/Section";
import { useFormContext, Controller } from "react-hook-form";
import { z } from "zod";
import MobileCustomSelect from "../MobileCustomSelect/MobileCustomSelect";
import { Profession } from "../../../utils/constants/form/professions";
import { schools } from "../../../utils/constants/form/schools";
import { universities } from "../../../utils/constants/form/universities";
import {
  HighSchoolYear,
  UniversityYear,
} from "../../../utils/constants/form/schoolYears";
import { MobileFullFormData } from "../MobileForm";

export const mobileIndividualFormSchema = z
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
  indexIndividual: 1 | 2 | 3 | 4;
  onSkipFourthMember?: () => void;
}

const MobileIndividualForm: React.FC<MobileIndividualFormProps> = ({
  nextForm,
  prevForm,
  indexIndividual,
  onSkipFourthMember,
}) => {
  const {
    control,
    watch,
    trigger,
    formState: { errors },
  } = useFormContext<MobileFullFormData>();

  // Ključ za trenutnog učesnika (contestant1, contestant2, …)
  const contestantKey = `contestant${indexIndividual}` as
    | "contestant1"
    | "contestant2"
    | "contestant3"
    | "contestant4";
  const currentContestant = watch(contestantKey);
  const occupation = currentContestant?.occupation;

  // Pomoćna funkcija za kreiranje imena polja
  const fieldName = (
    field:
      | "name"
      | "phone"
      | "email"
      | "technologies"
      | "cvLink"
      | "occupation"
      | "school"
      | "grade"
  ) => {
    return `${contestantKey}.${field}` as const;
  };

  const handleLocalSubmit = async () => {
    const fieldsToValidate = [
      fieldName("name"),
      fieldName("phone"),
      fieldName("email"),
      fieldName("technologies"),
      fieldName("cvLink"),
      fieldName("occupation"),
    ];
    if (
      occupation === Profession.STUDENT ||
      occupation === Profession.HIGH_SCHOOL_STUDENT
    ) {
      fieldsToValidate.push(fieldName("school"), fieldName("grade"));
    }
    const valid = await trigger(fieldsToValidate as any);
    if (valid) {
      console.log("Podaci o učesniku:", currentContestant);
      nextForm();
    }
  };

  return (
    <Section isContainer={false}>
      <div className="mobile-individual-form-container">
        <div className="mobile-individual-form-wrapper">
          <h1 className="mobile-form-prijave-text">PRIJAVA</h1>
          <p className="mobile-form-individual">Član {indexIndividual}</p>
          <label className="mobile-form-label">
            Ime i prezime:
            <Controller
              name={fieldName("name")}
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className={`mobile-form-textbox ${
                    errors?.[contestantKey]?.name ? "error" : ""
                  }`}
                  type="text"
                  placeholder={
                    errors?.[contestantKey]?.name?.message ||
                    "Unesite ime i prezime"
                  }
                />
              )}
            />
          </label>
          <label className="mobile-form-label">
            Broj telefona:
            <Controller
              name={fieldName("phone")}
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className={`mobile-form-textbox ${
                    errors?.[contestantKey]?.phone ? "error" : ""
                  }`}
                  type="text"
                  placeholder={
                    errors?.[contestantKey]?.phone?.message ||
                    "Unesite broj telefona"
                  }
                />
              )}
            />
          </label>
          <label className="mobile-form-label">
            Mejl:
            <Controller
              name={fieldName("email")}
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className={`mobile-form-textbox ${
                    errors?.[contestantKey]?.email ? "error" : ""
                  }`}
                  type="email"
                  placeholder={
                    errors?.[contestantKey]?.email?.message || "Unesite email"
                  }
                />
              )}
            />
          </label>
          <label className="mobile-form-label">
            Koje tehnologije znate?
            <Controller
              name={fieldName("technologies")}
              control={control}
              render={({ field }) => (
                <textarea
                  {...field}
                  className={`mobile-form-textbox mobile-form-tech ${
                    errors?.[contestantKey]?.technologies ? "error" : ""
                  }`}
                  placeholder={
                    errors?.[contestantKey]?.technologies?.message ||
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
                name={fieldName("occupation")}
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
                  name={fieldName("school")}
                  control={control}
                  render={({ field }) => (
                    <MobileCustomSelect
                      {...field}
                      values={
                        occupation === Profession.HIGH_SCHOOL_STUDENT
                          ? [...schools]
                          : [...universities]
                      }
                      className={errors?.[contestantKey]?.school ? "error" : ""}
                    />
                  )}
                />
              </label>
              <label className="mobile-grade-label">
                {occupation === Profession.HIGH_SCHOOL_STUDENT
                  ? "Razred:"
                  : "Godina studija:"}
                <Controller
                  name={fieldName("grade")}
                  control={control}
                  render={({ field }) => (
                    <MobileCustomSelect
                      {...field}
                      values={
                        occupation === Profession.HIGH_SCHOOL_STUDENT
                          ? Object.keys(HighSchoolYear)
                          : Object.keys(UniversityYear)
                      }
                      className={errors?.[contestantKey]?.grade ? "error" : ""}
                    />
                  )}
                />
              </label>
            </>
          )}
          <label className="mobile-school-label">
            Link ka CV-ju:
            <Controller
              name={fieldName("cvLink")}
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className={`mobile-form-textbox ${
                    errors?.[contestantKey]?.cvLink ? "error" : ""
                  }`}
                  type="url"
                  placeholder={
                    errors?.[contestantKey]?.cvLink?.message ||
                    "Unesite link ka CV-ju"
                  }
                />
              )}
            />
          </label>
          <div className="mobile-buttons">
            <button
              className="mobile-button-left-arrow"
              type="button"
              onClick={prevForm}
            ></button>
            {indexIndividual === 4 && (
              <button
                className="mobile-button-skip"
                type="button"
                onClick={onSkipFourthMember}
              >
                Bez 4. člana
              </button>
            )}
            <button
              className="mobile-button-right-arrow"
              type="button"
              onClick={handleLocalSubmit}
            ></button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default MobileIndividualForm;
