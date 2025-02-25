import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { z } from "zod";
import "./IndividualForm.scss";
import Section from "../../-shared/Section/Section";
import icons from "../../../assets/Form/icons.svg";
import leftArrow from "../../../assets/Form/leftarrow.svg";
import rightArrow from "../../../assets/Form/rightarrow.svg";
import CustomSelect from "../CustomSelect/CustomSelect";
import { Profession } from "../../../utils/constants/form/professions";
import { schools } from "../../../utils/constants/form/schools";
import { universities } from "../../../utils/constants/form/universities";
import { FullFormData } from "../Form";
import {
  HighSchoolYear,
  UniversityYear,
} from "../../../utils/constants/form/schoolYears";

import type { Path } from "react-hook-form";

// Shema za pojedinačnog učesnika (ostaje nepromenjena)
export const individualFormSchema = z
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

interface IndividualFormProps {
  nextForm: () => void;
  prevForm: () => void;
  indexIndividual: 1 | 2 | 3 | 4;
  onSkipFourthMember?: () => void;
}

const IndividualForm: React.FC<IndividualFormProps> = ({
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
  } = useFormContext<FullFormData>();

  const contestantKey = `contestant${indexIndividual}` as
    | "contestant1"
    | "contestant2"
    | "contestant3"
    | "contestant4";

  const currentContestant = watch(contestantKey) as FullFormData["contestant1"];
  const occupation = currentContestant?.occupation;

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
    const fieldsToValidate: Path<FullFormData>[] = [
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
    const valid = await trigger(fieldsToValidate);
    if (valid) {
      console.log("Podaci o učesniku:", currentContestant);
      nextForm();
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
        <div className="form-body">
          <div className="form-body-upper">
            <p className="form-upper-p">{indexIndividual}. ČLAN</p>
          </div>
          <div className="form-body-center">
            <div className="center-upper">
              <div className="center-upper-left">
                <label className="form-label">
                  Ime i prezime:
                  <Controller
                    name={fieldName("name")}
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        className={`form-textbox form-name ${
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

                <label className="form-label">
                  Broj telefona:
                  <Controller
                    name={fieldName("phone")}
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        className={`form-textbox form-phone ${
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

                <label className="form-label">
                  Mejl:
                  <Controller
                    name={fieldName("email")}
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        className={`form-textbox form-email ${
                          errors?.[contestantKey]?.email ? "error" : ""
                        }`}
                        type="email"
                        placeholder={
                          errors?.[contestantKey]?.email?.message ||
                          "Unesite email"
                        }
                      />
                    )}
                  />
                </label>

                <label className="form-tech-label">
                  Koje tehnologije znate?
                  <Controller
                    name={fieldName("technologies")}
                    control={control}
                    render={({ field }) => (
                      <textarea
                        {...field}
                        className={`form-textbox form-tech ${
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
              </div>
            </div>
            <div className="center-upper-right">
              <div className="occupation-div">
                <p className="occupation-text">Zanimanje:</p>
                <div className="occupation-radio">
                  <Controller
                    name={fieldName("occupation")}
                    control={control}
                    render={({ field }) => (
                      <>
                        <label className="radio-label">
                          <input
                            {...field}
                            type="radio"
                            value={Profession.EMPLOYED}
                            checked={field.value === Profession.EMPLOYED}
                          />
                          Zaposlen
                        </label>
                        <label className="radio-label">
                          <input
                            {...field}
                            type="radio"
                            value={Profession.STUDENT}
                            checked={field.value === Profession.STUDENT}
                          />
                          Student
                        </label>
                        <label className="radio-label">
                          <input
                            {...field}
                            type="radio"
                            value={Profession.HIGH_SCHOOL_STUDENT}
                            checked={
                              field.value === Profession.HIGH_SCHOOL_STUDENT
                            }
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
                  <label className="school-label">
                    {occupation === Profession.HIGH_SCHOOL_STUDENT
                      ? "Srednja škola:"
                      : "Fakultet:"}
                    <Controller
                      name={fieldName("school")}
                      control={control}
                      render={({ field }) => (
                        <CustomSelect
                          {...field}
                          values={
                            occupation === Profession.HIGH_SCHOOL_STUDENT
                              ? [...schools]
                              : [...universities]
                          }
                          className={
                            errors?.[contestantKey]?.school ? "error" : ""
                          }
                        />
                      )}
                    />
                  </label>

                  <label className="grade-label">
                    {occupation === Profession.HIGH_SCHOOL_STUDENT
                      ? "Razred:"
                      : "Godina studija:"}
                    <Controller
                      name={fieldName("grade")}
                      control={control}
                      render={({ field }) => (
                        <CustomSelect
                          {...field}
                          values={
                            occupation === Profession.HIGH_SCHOOL_STUDENT
                              ? Object.keys(HighSchoolYear)
                              : Object.keys(UniversityYear)
                          }
                          className={
                            errors?.[contestantKey]?.grade ? "error" : ""
                          }
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
              name={fieldName("cvLink")}
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className={`form-textbox center-cv-textbox ${
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
          <div className="form-body-lower">
            {indexIndividual === 4 && onSkipFourthMember && (
              <button
                className="fourth"
                type="button"
                onClick={onSkipFourthMember}
              >
                <p>Bez 4. člana</p>
              </button>
            )}
            <button className="left-button" type="button" onClick={prevForm}>
              <img src={leftArrow} alt="<" />
            </button>
            <button
              className="right-button"
              type="button"
              onClick={handleLocalSubmit}
            >
              <img src={rightArrow} alt=">" />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default IndividualForm;
