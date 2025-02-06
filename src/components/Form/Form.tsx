import { useState } from "react";
import "./Form.scss";
import IndividualForm from "./IndividualForm/IndividualForm";
import TeamForm from "./TeamForm/TeamForm";
import { Contestant } from "../../utils/api/models/contestant.model";
import { FHApplication } from "../../utils/api/models/application.model";
import { applicationService } from "../../utils/api/services/application.service";

const Form = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hiddenForms, setHiddenForms] = useState<number[]>([]);
  const [teamData, setTeamData] = useState<any>(null); // Podaci o timu
  const [membersData, setMembersData] = useState<Contestant[]>([]); // Podaci o članovima tima

  // Funkcija za čuvanje podataka o članovima tima
  const handleSaveContestant = (contestant: Contestant) => {
    setMembersData((prev) => [...prev, contestant]);
  };

  // Funkcija za čuvanje podataka o timu
  const handleSaveTeamData = (data: any) => {
    setTeamData(data);
  };

  // Funkcija za prelazak na sledeću formu
  const handleNextForm = () => {
    setHiddenForms((prevHidden) => [...prevHidden, currentIndex]);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // Funkcija za prelazak na prethodnu formu
  const handlePrevForm = () => {
    let prevIndex = currentIndex - 1;
    while (hiddenForms.includes(prevIndex) && prevIndex >= 0) {
      prevIndex--;
    }

    if (prevIndex >= 0) {
      setCurrentIndex(prevIndex);
      setHiddenForms((prevHidden) =>
        prevHidden.filter((index) => index !== prevIndex)
      );
    }
  };

  // Funkcija za preskakanje forme za 4. člana
  const handleSkipFourthMember = () => {
    setHiddenForms((prevHidden) => [...prevHidden, 3]); // Sakrij formu za 4. člana
    setCurrentIndex(4); // Pređi direktno na formu za tim
  };

  // Funkcija za slanje podataka na server
  const handleSubmitFinalForm = async () => {
    if (!teamData || membersData.length < 3) {
      console.error("Nedostaju podaci o timu ili članovima tima.");
      return;
    }

    const teamApplication: FHApplication = {
      teamName: teamData.teamName,
      previousExperiences: teamData.motivation,
      applicationReason: teamData.roles,
      virtuesAndVices: teamData.situations,
      contestants: {
        member1: membersData[0],
        member2: membersData[1],
        member3: membersData[2],
        member4: membersData[3], // Opciono
      },
    };

    try {
      const response = await applicationService.createApplication(
        teamApplication,
        "fh"
      );
      if (response.success) {
        console.log("Aplikacija uspešno poslata!");
      } else {
        console.error("Greška pri slanju aplikacije:", response.message);
      }
    } catch (error) {
      console.error("Došlo je do greške:", error);
    }
  };

  // Niz formi
  const forms = [
    <IndividualForm
      key={0}
      nextForm={handleNextForm}
      prevForm={() => setCurrentIndex(0)}
      indexIndividual={1}
      onSaveContestant={handleSaveContestant}
    />,
    <IndividualForm
      key={1}
      nextForm={handleNextForm}
      prevForm={handlePrevForm}
      indexIndividual={2}
      onSaveContestant={handleSaveContestant}
    />,
    <IndividualForm
      key={2}
      nextForm={handleNextForm}
      prevForm={handlePrevForm}
      indexIndividual={3}
      onSaveContestant={handleSaveContestant}
    />,
    <IndividualForm
      key={3}
      nextForm={handleNextForm}
      prevForm={handlePrevForm}
      indexIndividual={4}
      onSaveContestant={handleSaveContestant}
      onSkipFourthMember={handleSkipFourthMember} // Dodato za preskakanje
    />,
    <TeamForm
      key={4}
      nextForm={handleNextForm}
      prevForm={handlePrevForm}
      onSaveTeamData={handleSaveTeamData}
    />,
  ];

  return (
    <div className="form-wrapper">
      <div className="forms-container">
        {forms.map((form, index) => {
          const hiddenBefore = hiddenForms.filter(
            (hiddenIndex) => hiddenIndex < index
          ).length;

          return (
            <div
              key={index}
              className={`form-slide ${index === currentIndex ? "active" : ""}`}
              style={{
                zIndex: forms.length - index,
                transform: `translate(${(index - hiddenBefore) * -20}px, ${
                  (index - hiddenBefore) * -20
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

      {/* Dugme za slanje podataka */}
      {currentIndex === forms.length - 1 && (
        <button onClick={handleSubmitFinalForm} className="submit-button">
          Pošalji prijavu
        </button>
      )}
    </div>
  );
};

export default Form;
