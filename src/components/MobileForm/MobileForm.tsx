import { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import "./MobileForm.scss";
import MobileIndividualForm, {
  mobileIndividualFormSchema,
} from "./MobileIndividualForm/MobileIndividualForm";
import MobileTeamForm, {
  mobileTeamFormSchema,
} from "./MobileTeamForm/MobileTeamForm";
import { FHApplication } from "../../utils/api/models/application.model";
import { applicationService } from "../../utils/api/services/application.service";
import { Contestant } from "../../utils/api/models/contestant.model";
import { Profession } from "../../utils/constants/form/professions";
import {
  HighSchoolYearKey,
  UniversityYearKey,
} from "../../utils/api/models/contestant.model";

const mobileFullFormSchema = z.object({
  contestant1: mobileIndividualFormSchema,
  contestant2: mobileIndividualFormSchema,
  contestant3: mobileIndividualFormSchema,
  contestant4: mobileIndividualFormSchema.optional(),
  team: mobileTeamFormSchema,
});

export type MobileFullFormData = z.infer<typeof mobileFullFormSchema>;

const MobileForm = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(true);
  /*const [hiddenForms, setHiddenForms] = useState<number[]>([]);*/
  const [isSubmitting, setIsSubmitting] = useState(false);

  const methods = useForm<MobileFullFormData>({
    resolver: zodResolver(mobileFullFormSchema),
    defaultValues: {
      contestant1: {
        name: "",
        phone: "",
        email: "",
        technologies: "",
        cvLink: "",
        occupation: Profession.HIGH_SCHOOL_STUDENT,
        school: "",
        grade: "",
      },
      contestant2: {
        name: "",
        phone: "",
        email: "",
        technologies: "",
        cvLink: "",
        occupation: Profession.HIGH_SCHOOL_STUDENT,
        school: "",
        grade: "",
      },
      contestant3: {
        name: "",
        phone: "",
        email: "",
        technologies: "",
        cvLink: "",
        occupation: Profession.HIGH_SCHOOL_STUDENT,
        school: "",
        grade: "",
      },
      contestant4: {
        name: "",
        phone: "",
        email: "",
        technologies: "",
        cvLink: "",
        occupation: Profession.HIGH_SCHOOL_STUDENT,
        school: "",
        grade: "",
      },
      team: {
        teamName: "",
        motivation: "",
        roles: "",
        situations: "",
      },
    },
  });

  const { handleSubmit, setValue } = methods;

  // Funkcije za navigaciju između slajdova
  const handleNextForm = () => {
    /*setHiddenForms((prev) => [...prev, currentIndex]);*/
    setCurrentIndex((prev) => prev + 1);
  };
  const handlePrevForm = () => {
    /*setHiddenForms((prev) => prev.filter((i) => i !== currentIndex - 1));*/
    setCurrentIndex((prev) => prev - 1);
  };
  const handleSkipFourthMember = () => {
    setValue("contestant4", undefined);
    /*setHiddenForms((prev) => [...prev, 3]);*/
    setCurrentIndex(4);
  };

  const onSubmit = async (data: MobileFullFormData) => {
    setIsSubmitting(true);
    const convertContestant = (
      d: z.infer<typeof mobileIndividualFormSchema>
    ): Contestant => {
      if (d.occupation === Profession.EMPLOYED) {
        return {
          email: d.email,
          name: d.name,
          phoneNumber: d.phone,
          techDescription: d.technologies,
          CVURL: d.cvLink,
          profession: d.occupation,
          educationalInstitution: undefined,
          yearOfStudy: undefined,
        } as Contestant;
      } else if (d.occupation === Profession.STUDENT) {
        return {
          email: d.email,
          name: d.name,
          phoneNumber: d.phone,
          techDescription: d.technologies,
          CVURL: d.cvLink,
          profession: d.occupation,
          educationalInstitution: d.school!,
          yearOfStudy: d.grade! as UniversityYearKey,
        } as Contestant;
      } else {
        // Profession.HIGH_SCHOOL_STUDENT
        return {
          email: d.email,
          name: d.name,
          phoneNumber: d.phone,
          techDescription: d.technologies,
          CVURL: d.cvLink,
          profession: d.occupation,
          educationalInstitution: d.school!,
          yearOfStudy: d.grade! as HighSchoolYearKey,
        } as Contestant;
      }
    };

    const teamApplication: FHApplication = {
      teamName: data.team.teamName,
      previousExperiences: data.team.motivation,
      applicationReason: data.team.roles,
      virtuesAndVices: data.team.situations,
      contestants: {
        member1: convertContestant(data.contestant1),
        member2: convertContestant(data.contestant2),
        member3: convertContestant(data.contestant3),
        member4:
          data.contestant4 && data.contestant4.name
            ? convertContestant(data.contestant4)
            : undefined,
      },
    };

    try {
      console.log(teamApplication);
      const response = await applicationService.createApplication(
        teamApplication,
        "fh"
      );
      if (response.success) {
        console.log("Aplikacija uspešno poslata!");
        setIsSubmitted(true);
      } else {
        console.error("Greška pri slanju aplikacije:", response.message);
        alert("Došlo je do greške pri slanju aplikacije. Pokušajte ponovo.");
      }
    } catch (error) {
      console.error("Došlo je do greške:", error);
      alert("Došlo je do greške pri slanju aplikacije. Pokušajte ponovo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => setIsFormVisible(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const forms = [
    <MobileIndividualForm
      key={0}
      nextForm={handleNextForm}
      prevForm={() => setCurrentIndex(0)}
      indexIndividual={1}
    />,
    <MobileIndividualForm
      key={1}
      nextForm={handleNextForm}
      prevForm={handlePrevForm}
      indexIndividual={2}
    />,
    <MobileIndividualForm
      key={2}
      nextForm={handleNextForm}
      prevForm={handlePrevForm}
      indexIndividual={3}
    />,
    <MobileIndividualForm
      key={3}
      nextForm={handleNextForm}
      prevForm={handlePrevForm}
      indexIndividual={4}
      onSkipFourthMember={handleSkipFourthMember}
    />,
    <MobileTeamForm
      key={4}
      prevForm={handlePrevForm}
      isSubmitted={isSubmitted}
      isSubmitting={isSubmitting}
    />,
  ];

  return (
    <FormProvider {...methods}>
      {isFormVisible && (
        <form className="mobile-form-wrapper" onSubmit={handleSubmit(onSubmit)}>
          <div className="mobile-forms-container">
            {forms.map((form, index) => {
              let slideClass = "";
              if (index === currentIndex) {
                slideClass = "active";
              } else if (index < currentIndex) {
                slideClass = "prev";
              } else {
                slideClass = "next";
              }
              return (
                <div key={index} className={`mobile-form-slide ${slideClass}`}>
                  {form}
                </div>
              );
            })}
          </div>
        </form>
      )}
    </FormProvider>
  );
};

export default MobileForm;
