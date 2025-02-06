import React from "react";
import "./MobileIndividualForm.scss";
import Section from "../../-shared/Section/Section";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import MobileCustomSelect from "../MobileCustomSelect/MobileCustomSelect";
import { Profession } from "../../constants/form/professions";
import { schools, universities } from "../../constants/form/schools";
import { HighSchoolYear, UniversityYear } from "../../constants/form/schoolYears";
import { Contestant } from "../../utils/api/models/contestant.model";
import { FHApplication } from "../../utils/api/models/application.model";
import { applicationService } from "../../utils/api/services/applications.service";

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
  onSaveContestant: (contestant: Contestant) => void; // Dodato za čuvanje podataka o učesniku
}

const MobileIndividualForm: React.FC<MobileIndividualFormProps> = ({
  nextForm,
  prevForm,
  indexIndividual,
  onSaveContestant,
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

  const onSubmit = async (data: any) => {
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
                      className={errors.school ? "error