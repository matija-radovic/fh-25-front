import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import "./TeamForm.scss";
import Section from "../../-shared/Section/Section";
import icons from "../../../assets/Form/icons.svg";
import leftArrow from "../../../assets/Form/leftarrow.svg";

// Shema za validaciju
const formSchema = z.object({
  teamName: z.string().min(1, "Naziv tima je obavezan."),
  motivation: z.string().min(1, "Motivacija je obavezna."),
  roles: z.string().min(1, "Podela uloga je obavezna."),
  situations: z.string().min(1, "Situacije u timu su obavezne."),
});

interface TeamFormProps {
  nextForm: () => void;
  prevForm: () => void;
  onSaveTeamData: (teamData: any) => void; // Dodato za čuvanje podataka o timu
}

const TeamForm: React.FC<TeamFormProps> = ({
  nextForm,
  prevForm,
  onSaveTeamData,
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
    // Sačuvaj podatke o timu
    onSaveTeamData(data);

    console.log("Podaci o timu:", data);
    nextForm(); // Prelazak na sledeću formu
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
        <form className="team-form-body" onSubmit={handleSubmit(onSubmit)}>
          <div className="team-form-body-upper">
            <div className="team-form-body-upper-left">
              <label className="team-form-label-name">
                Naziv tima:
                <Controller
                  name="teamName"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      className={`team-form-textbox team-form-name ${
                        errors.teamName ? "error" : ""
                      }`}
                      type="text"
                      placeholder={
                        errors.teamName?.message || "Unesite naziv tima"
                      }
                    />
                  )}
                />
              </label>
              <label className="team-form-label">
                Motivacija za FON Hakaton:
                <Controller
                  name="motivation"
                  control={control}
                  render={({ field }) => (
                    <textarea
                      {...field}
                      className={`team-form-textbox team-form-motivation ${
                        errors.motivation ? "error" : ""
                      }`}
                      placeholder={
                        errors.motivation?.message ||
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
                  name="roles"
                  control={control}
                  render={({ field }) => (
                    <textarea
                      {...field}
                      className={`team-form-textbox team-form-roles ${
                        errors.roles ? "error" : ""
                      }`}
                      placeholder={
                        errors.roles?.message ||
                        "Kako biste podelili uloge u timu?"
                      }
                    />
                  )}
                />
              </label>
              <label className="team-form-label team-form-label-situations">
                Navedite pozitivne i negativne situacije u timu:
                <Controller
                  name="situations"
                  control={control}
                  render={({ field }) => (
                    <textarea
                      {...field}
                      className={`team-form-textbox team-form-situations ${
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
            </div>
          </div>
          <div className="team-form-body-lower">
            <button className="left-button" onClick={prevForm}>
              <img src={leftArrow} alt="<" />
            </button>
            <button className="right-button" type="submit">
              <p>Pošalji</p>
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default TeamForm;
