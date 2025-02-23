import React from "react";
import "./MobileTeamForm.scss";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Section from "../../-shared/Section/Section";

const formSchema = z.object({
  teamName: z.string().min(1, "Naziv tima je obavezan."),
  motivation: z.string().min(1, "Motivacija je obavezna."),
  roles: z.string().min(1, "Podela uloga je obavezna."),
  situations: z.string().min(1, "Situacije u timu su obavezne."),
});

interface TeamData {
  teamName: string;
  motivation: string;
  roles: string;
  situations: string;
}

interface MobileTeamFormProps {
  nextForm: () => void;
  prevForm: () => void;
  onSaveTeamData: (teamData: TeamData) => void;
  onSubmitFinalForm: () => void;
  isSubmitted: boolean;
}

const MobileTeamForm: React.FC<MobileTeamFormProps> = ({
  prevForm,
  onSaveTeamData,
  onSubmitFinalForm,
  isSubmitted,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      teamName: "",
      motivation: "",
      roles: "",
      situations: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    onSaveTeamData(data);
    try {
      await onSubmitFinalForm();
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <Section isContainer={false}>
      <div className="mobile-team-form-container">
        {isSubmitted ? (
          <p className="mobile-form-success-message">
            Uspešno ste poslali prijavu!
          </p>
        ) : (
          <form
            className="mobile-team-form-wrapper"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="mobile-form-prijave-text">PRIJAVA</h1>
            <label className="mobile-team-form-label">
              Naziv tima:
              <Controller
                name="teamName"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    className={`mobile-team-form-textbox team-form-name ${
                      errors.teamName ? "error" : ""
                    }`}
                    type="text"
                    placeholder={
                      errors.teamName?.message || "Unesite naziv tima"
                    }
                    disabled={isSubmitted || isSubmitting}
                  />
                )}
              />
            </label>
            <label className="mobile-team-form-label">
              Motivacija za FON Hakaton:
              <Controller
                name="motivation"
                control={control}
                render={({ field }) => (
                  <textarea
                    {...field}
                    className={`mobile-team-form-textbox mobile-team-from-textarea ${
                      errors.motivation ? "error" : ""
                    }`}
                    placeholder={
                      errors.motivation?.message || "Motivacija za FON Hakaton"
                    }
                    disabled={isSubmitted || isSubmitting}
                  />
                )}
              />
            </label>
            <label className="mobile-team-form-label">
              Kako biste podelili uloge u timu?
              <Controller
                name="roles"
                control={control}
                render={({ field }) => (
                  <textarea
                    {...field}
                    className={`mobile-team-form-textbox mobile-team-from-textarea ${
                      errors.roles ? "error" : ""
                    }`}
                    placeholder={
                      errors.roles?.message ||
                      "Kako biste podelili uloge u timu?"
                    }
                    disabled={isSubmitted || isSubmitting}
                  />
                )}
              />
            </label>
            <label className="mobile-team-form-label">
              Navedite pozitivne i negativne situacije u timu:
              <Controller
                name="situations"
                control={control}
                render={({ field }) => (
                  <textarea
                    {...field}
                    className={`mobile-team-form-textbox mobile-team-from-textarea ${
                      errors.situations ? "error" : ""
                    }`}
                    placeholder={
                      errors.situations?.message ||
                      "Navedite pozitivne i negativne situacije u timu"
                    }
                    disabled={isSubmitted || isSubmitting}
                  />
                )}
              />
            </label>
            <div className="mobile-buttons">
              <button
                className="mobile-button-left-arrow"
                onClick={prevForm}
                disabled={isSubmitted || isSubmitting}
              ></button>
              <button
                className="mobile-button-right-arrow"
                type="submit"
                disabled={isSubmitted || isSubmitting}
              >
                {isSubmitting
                  ? "Šalje se..."
                  : isSubmitted
                  ? "Poslato"
                  : "Pošalji"}
              </button>
            </div>
          </form>
        )}
      </div>
    </Section>
  );
};

export default MobileTeamForm;
