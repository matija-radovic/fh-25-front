import { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import "./Form.scss";
import IndividualForm, {
  individualFormSchema,
} from "./IndividualForm/IndividualForm";
import TeamForm, { teamFormSchema } from "./TeamForm/TeamForm";
import { FHApplication } from "../../utils/api/models/application.model";
import { applicationService } from "../../utils/api/services/application.service";
import { Contestant } from "../../utils/api/models/contestant.model";
import { Profession } from "../../utils/constants/form/professions";
import {
  HighSchoolYearKey,
  UniversityYearKey,
} from "../../utils/api/models/contestant.model";

const fullFormSchema = z.object({
  contestant1: individualFormSchema,
  contestant2: individualFormSchema,
  contestant3: individualFormSchema,
  contestant4: individualFormSchema.optional(),
  team: teamFormSchema,
});

export type FullFormData = z.infer<typeof fullFormSchema>;

const Form = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hiddenForms, setHiddenForms] = useState<number[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(true);

  const methods = useForm<FullFormData>({
    resolver: zodResolver(fullFormSchema),
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

  const convertContestant = (
    data: z.infer<typeof individualFormSchema>
  ): Contestant => {
    if (data.occupation === Profession.EMPLOYED) {
      return {
        email: data.email,
        name: data.name,
        phoneNumber: data.phone,
        techDescription: data.technologies,
        CVURL: data.cvLink,
        profession: data.occupation,
        educationalInstitution: undefined,
        yearOfStudy: undefined,
      } as Contestant;
    } else if (data.occupation === Profession.STUDENT) {
      return {
        email: data.email,
        name: data.name,
        phoneNumber: data.phone,
        techDescription: data.technologies,
        CVURL: data.cvLink,
        profession: data.occupation,
        educationalInstitution: data.school!,
        yearOfStudy: data.grade! as UniversityYearKey,
      } as Contestant;
    } else {
      // Profession.HIGH_SCHOOL_STUDENT
      return {
        email: data.email,
        name: data.name,
        phoneNumber: data.phone,
        techDescription: data.technologies,
        CVURL: data.cvLink,
        profession: data.occupation,
        educationalInstitution: data.school!,
        yearOfStudy: data.grade! as HighSchoolYearKey,
      } as Contestant;
    }
  };

  const onSubmit = async (data: FullFormData) => {
    setIsSubmitting(true);
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

  const handleNextForm = () => {
    setHiddenForms((prevHidden) => [...prevHidden, currentIndex]);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevForm = () => {
    setHiddenForms((prevHidden) =>
      prevHidden.filter((index) => index !== currentIndex - 1)
    );
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleSkipFourthMember = () => {
    methods.setValue("contestant4", undefined);
    setHiddenForms((prevHidden) => [...prevHidden, 3]);
    setCurrentIndex(4);
  };

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsFormVisible(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const forms = [
    <IndividualForm
      key={0}
      nextForm={handleNextForm}
      prevForm={() => setCurrentIndex(0)}
      indexIndividual={1}
    />,
    <IndividualForm
      key={1}
      nextForm={handleNextForm}
      prevForm={handlePrevForm}
      indexIndividual={2}
    />,
    <IndividualForm
      key={2}
      nextForm={handleNextForm}
      prevForm={handlePrevForm}
      indexIndividual={3}
    />,
    <IndividualForm
      key={3}
      nextForm={handleNextForm}
      prevForm={handlePrevForm}
      indexIndividual={4}
      onSkipFourthMember={handleSkipFourthMember}
    />,
    <TeamForm
      key={4}
      prevForm={handlePrevForm}
      isSubmitted={isSubmitted}
      isSubmitting={isSubmitting}
    />,
  ];

  return (
    <FormProvider {...methods}>
      {isFormVisible && (
        <form
          className="form-wrapper"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <div className="forms-container">
            {forms.map((form, index) => {
              const hiddenBefore = hiddenForms.filter(
                (hiddenIndex) => hiddenIndex < index
              ).length;

              return (
                <div
                  key={index}
                  className={`form-slide ${
                    index === currentIndex ? "active" : ""
                  }`}
                  style={{
                    zIndex: forms.length - index,
                    transform: `translate(${(index - hiddenBefore) * -20}px, ${
                      (index - hiddenBefore) * -30
                    }px)`,
                    opacity: hiddenForms.includes(index) ? 0 : 1,
                    transition:
                      "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
                  }}
                >
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

export default Form;
