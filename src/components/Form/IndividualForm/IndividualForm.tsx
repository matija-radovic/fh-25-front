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
import { Profession } from "../../../utils/constants/form/professions";
import { schools } from "../../../utils/constants/form/schools";
import { universities } from "../../../utils/constants/form/universities";

import { Contestant } from "../../../utils/api/models/contestant.model";

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
interface IndividualFormProps {
  nextForm: () => void;
  prevForm: () => void;
  indexIndividual: number;
  onSaveContestant: (contestant: Contestant) => void;
  onSkipFourthMember?: () => void; // Dodato za preskakanje
}

const IndividualForm: React.FC<IndividualFormProps> = ({
  nextForm,
  prevForm,
  indexIndividual,
  onSaveContestant,
  onSkipFourthMember,
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
      occupation: Profession.HIGH_SCHOOL_STUDENT,
      school: "",
      grade: "",
    },
  });

  const occupation = watch("occupation");

  const onSubmit = (data: any) => {
    const contestant: Contestant = {
      email: data.email,
      name: data.name,
      phoneNumber: data.phone,
      techDescription: data.technologies,
      CVURL: data.cvLink,
      proffesion: data.occupation,
      educationalInstitution: data.school || undefined,
      yearOfStudy: data.grade || undefined,
    };

    // Sačuvaj podatke o učesniku
    onSaveContestant(contestant);

    console.log("Podaci o učesniku:", contestant);
    nextForm(); // Prelazak na sledeću formu
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

              {/* Prikaz polja u zavisnosti od zanimanja */}
              {(occupation === Profession.HIGH_SCHOOL_STUDENT ||
                occupation === Profession.STUDENT) && (
                <>
                  <label className="school-label">
                    {occupation === Profession.HIGH_SCHOOL_STUDENT
                      ? "Srednja škola:"
                      : "Fakultet:"}
                    <Controller
                      name="school"
                      control={control}
                      render={({ field }) => (
                        <CustomSelect
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

                  <label className="grade-label">
                    {occupation === Profession.HIGH_SCHOOL_STUDENT
                      ? "Razred:"
                      : "Godina studija:"}
                    <Controller
                      name="grade"
                      control={control}
                      render={({ field }) => (
                        <CustomSelect
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
              <button
                className="fourth"
                type="button" // Dodato type="button" da sprečimo automatsko slanje forme
                onClick={onSkipFourthMember} // Koristi onSkipFourthMember
              >
                <p>Bez 4. člana</p>
              </button>
            )}
            <button className="left-button" type="button" onClick={prevForm}>
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
