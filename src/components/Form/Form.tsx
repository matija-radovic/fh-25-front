import { useState, useEffect } from "react";
import "./Form.scss";
import IndividualForm from "./IndividualForm/IndividualForm";
import TeamForm from "./TeamForm/TeamForm";
import { Contestant } from "../../utils/api/models/contestant.model";
import { FHApplication } from "../../utils/api/models/application.model";
import { applicationService } from "../../utils/api/services/application.service";

interface TeamData {
  teamName: string;
  motivation: string;
  roles: string;
  situations: string;
}

const Form = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hiddenForms, setHiddenForms] = useState<number[]>([]);
  const [teamData, setTeamData] = useState<TeamData | null>(null);
  const [membersData, setMembersData] = useState<Contestant[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleSaveContestant = (contestant: Contestant) => {
    setMembersData((prev) => [...prev, contestant]);
  };

  const handleSaveTeamData = (data: TeamData) => {
    setTeamData(data);
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
    setHiddenForms((prevHidden) => [...prevHidden, 3]);
    setCurrentIndex(4);
  };

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
        setIsSubmitted(true);
      } else {
        console.error("Greška pri slanju aplikacije:", response.message);
        alert("Došlo je do greške pri slanju aplikacije. Pokušajte ponovo.");
      }
    } catch (error) {
      console.error("Došlo je do greške:", error);
      alert("Došlo je do greške pri slanju aplikacije. Pokušajte ponovo.");
    }
  };

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
      onSkipFourthMember={handleSkipFourthMember}
    />,
    <TeamForm
      key={4}
      prevForm={handlePrevForm}
      onSaveTeamData={handleSaveTeamData}
      onSubmitFinalForm={handleSubmitFinalForm}
      isSubmitted={isSubmitted}
    />,
  ];

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsFormVisible(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  return (
    <div className="form-wrapper">
      {isFormVisible && (
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
      )}
    </div>
  );
};

export default Form;
