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

interface MobileTeamFormProps {
  nextForm: () => void;
  prevForm: () => void;
}

const MobileTeamForm: React.FC<MobileTeamFormProps> = ({
  nextForm,
  prevForm,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      teamName: "",
      motivation: "",
      roles: "",
      situations: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Forma je uspešno validirana:", data);
    nextForm();
  };
  return (
    <Section isContainer={false}>
      <div className="mobile-team-form-container">
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
                  placeholder={errors.teamName?.message || "Unesite naziv tima"}
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
                    errors.roles?.message || "Kako biste podelili uloge u timu?"
                  }
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
                />
              )}
            />
          </label>
          <div className="mobile-buttons">
            <button
              className="mobile-button-left-arrow"
              onClick={prevForm}
            ></button>
            <button className="mobile-button-right-arrow" type="submit">
              Pošalji
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default MobileTeamForm;
