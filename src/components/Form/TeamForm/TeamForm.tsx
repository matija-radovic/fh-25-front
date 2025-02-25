import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { FullFormData } from "../Form";
import "./TeamForm.scss";
import Section from "../../-shared/Section/Section";
import icons from "../../../assets/Form/icons.svg";
import leftArrow from "../../../assets/Form/leftarrow.svg";
import { z } from "zod";

export const teamFormSchema = z.object({
  teamName: z.string().min(1, "Naziv tima je obavezan."),
  motivation: z.string().min(1, "Motivacija je obavezna."),
  roles: z.string().min(1, "Podela uloga je obavezna."),
  situations: z.string().min(1, "Situacije u timu su obavezne."),
});

interface TeamFormProps {
  prevForm: () => void;
  isSubmitted: boolean;
  isSubmitting: boolean;
}

const TeamForm: React.FC<TeamFormProps> = ({
  prevForm,
  isSubmitted,
  isSubmitting,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<FullFormData>();

  const teamErrors = (errors.team || {}) as {
    teamName?: { message?: string };
    motivation?: { message?: string };
    roles?: { message?: string };
    situations?: { message?: string };
  };

  return (
    <Section isContainer={false}>
      <div className="team-form-container">
        <div className="team-form-header">
          <h1 className="prijava-text">PRIJAVA</h1>
          <div className="icons">
            <img src={icons} alt="ikonice" />
          </div>
        </div>
        {isSubmitted ? (
          <h1 className="success-message">Uspešna prijava</h1>
        ) : (
          <div className="team-form-body">
            <div className="team-form-body-upper">
              <div className="team-form-body-upper-left">
                <label className="team-form-label-name">
                  Naziv tima:
                  <Controller
                    name="team.teamName"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        className={`team-form-textbox team-form-name ${
                          teamErrors.teamName ? "error" : ""
                        }`}
                        type="text"
                        placeholder={
                          teamErrors.teamName?.message || "Unesite naziv tima"
                        }
                      />
                    )}
                  />
                </label>
                <label className="team-form-label">
                  Motivacija za FON Hakaton:
                  <Controller
                    name="team.motivation"
                    control={control}
                    render={({ field }) => (
                      <textarea
                        {...field}
                        className={`team-form-textbox team-form-motivation ${
                          teamErrors.motivation ? "error" : ""
                        }`}
                        placeholder={
                          teamErrors.motivation?.message ||
                          "Motivacija za FON Hakaton"
                        }
                      />
                    )}
                  />
                </label>
              </div>
              <div className="team-form-body-upper-right">
                <label className="team-form-label">
                  Kako biste podelili uloge u timu?
                  <Controller
                    name="team.roles"
                    control={control}
                    render={({ field }) => (
                      <textarea
                        {...field}
                        className={`team-form-textbox team-form-roles ${
                          teamErrors.roles ? "error" : ""
                        }`}
                        placeholder={
                          teamErrors.roles?.message ||
                          "Kako biste podelili uloge u timu?"
                        }
                      />
                    )}
                  />
                </label>
                <label className="team-form-label team-form-label-situations">
                  Navedite pozitivne i negativne situacije u timu:
                  <Controller
                    name="team.situations"
                    control={control}
                    render={({ field }) => (
                      <textarea
                        {...field}
                        className={`team-form-textbox team-form-situations ${
                          teamErrors.situations ? "error" : ""
                        }`}
                        placeholder={
                          teamErrors.situations?.message ||
                          "Navedite pozitivne i negativne situacije u timu"
                        }
                      />
                    )}
                  />
                </label>
              </div>
            </div>
            <div className="team-form-body-lower">
              <button className="left-button" type="button" onClick={prevForm}>
                <img src={leftArrow} alt="<" />
              </button>
              <button
                className="right-button"
                type="submit"
                disabled={isSubmitting || isSubmitted}
              >
                <p>
                  {isSubmitted
                    ? "Poslato"
                    : isSubmitting
                    ? "Šalje se..."
                    : "Pošalji"}
                </p>
              </button>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
};

export default TeamForm;
