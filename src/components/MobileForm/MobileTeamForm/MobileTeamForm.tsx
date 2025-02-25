import React from "react";
import "./MobileTeamForm.scss";
import { useFormContext, Controller } from "react-hook-form";
import Section from "../../-shared/Section/Section";
import { MobileFullFormData } from "../MobileForm";
import { z } from "zod";

export const mobileTeamFormSchema = z.object({
  teamName: z.string().min(1, "Naziv tima je obavezan."),
  motivation: z.string().min(1, "Motivacija je obavezna."),
  roles: z.string().min(1, "Podela uloga je obavezna."),
  situations: z.string().min(1, "Situacije u timu su obavezne."),
});

interface MobileTeamFormProps {
  prevForm: () => void;
  isSubmitted: boolean;
  isSubmitting: boolean;
}

const MobileTeamForm: React.FC<MobileTeamFormProps> = ({
  prevForm,
  isSubmitted,
  isSubmitting,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<MobileFullFormData>();

  return (
    <Section isContainer={false}>
      <div className="mobile-team-form-container">
        {isSubmitted ? (
          <div className="mobile-team-form-wrapper-success-message">
            <p className="mobile-form-success-message">
              Uspešno ste poslali prijavu!
            </p>
          </div>
        ) : (
          <div className="mobile-team-form-wrapper">
            <h1 className="mobile-form-prijave-text">PRIJAVA</h1>
            <label className="mobile-team-form-label">
              Naziv tima:
              <Controller
                name="team.teamName"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    className={`mobile-team-form-textbox team-form-name ${
                      errors.team?.teamName ? "error" : ""
                    }`}
                    type="text"
                    placeholder={
                      errors.team?.teamName?.message || "Unesite naziv tima"
                    }
                    disabled={isSubmitted || isSubmitting}
                  />
                )}
              />
            </label>
            <label className="mobile-team-form-label">
              Motivacija za FON Hakaton:
              <Controller
                name="team.motivation"
                control={control}
                render={({ field }) => (
                  <textarea
                    {...field}
                    className={`mobile-team-form-textbox mobile-team-from-textarea ${
                      errors.team?.motivation ? "error" : ""
                    }`}
                    placeholder={
                      errors.team?.motivation?.message ||
                      "Motivacija za FON Hakaton"
                    }
                    disabled={isSubmitted || isSubmitting}
                  />
                )}
              />
            </label>
            <label className="mobile-team-form-label">
              Kako biste podelili uloge u timu?
              <Controller
                name="team.roles"
                control={control}
                render={({ field }) => (
                  <textarea
                    {...field}
                    className={`mobile-team-form-textbox mobile-team-from-textarea ${
                      errors.team?.roles ? "error" : ""
                    }`}
                    placeholder={
                      errors.team?.roles?.message ||
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
                name="team.situations"
                control={control}
                render={({ field }) => (
                  <textarea
                    {...field}
                    className={`mobile-team-form-textbox mobile-team-from-textarea ${
                      errors.team?.situations ? "error" : ""
                    }`}
                    placeholder={
                      errors.team?.situations?.message ||
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
                type="button"
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
          </div>
        )}
      </div>
    </Section>
  );
};

export default MobileTeamForm;
