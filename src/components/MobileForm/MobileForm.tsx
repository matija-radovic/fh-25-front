import React, { useState, useEffect } from "react";
import "./MobileForm.scss";
import MobileIndividualForm from "./MobileIndividualForm/MobileIndividualForm";
import MobileTeamForm from "./MobileTeamForm/MobileTeamForm";
import { Contestant } from "../../utils/api/models/contestant.model";
import { FHApplication } from "../../utils/api/models/application.model";
import { applicationService } from "../../utils/api/services/application.service";

interface TeamData {
  teamName: string;
  motivation: string;
  roles: string;
  situations: string;
}

const MobileForm = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [membersData, setMembersData] = useState<Contestant[]>([]);
  const [teamData, setTeamData] = useState<TeamData | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleSaveContestant = (contestant: Contestant, index: number) => {
    setMembersData((prev) => {
      const newMembers = [...prev];
      newMembers[index] = contestant;
      return newMembers;
    });
  };

  const handleSaveTeamData = (data: TeamData) => {
    setTeamData(data);
  };

  const handleNextForm = () => setCurrentIndex((prevIndex) => prevIndex + 1);
  const handlePrevForm = () => setCurrentIndex((prevIndex) => prevIndex - 1);
  const handleSkipFourthMember = () => setCurrentIndex(4);

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
      }
    } catch (error) {
      console.error("Došlo je do greške:", error);
    }
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
    <MobileIndividualForm
      key={0}
      nextForm={handleNextForm}
      prevForm={() => setCurrentIndex(0)}
      indexIndividual={1}
      onSaveContestant={(contestant) => handleSaveContestant(contestant, 0)}
    />,
    <MobileIndividualForm
      key={1}
      nextForm={handleNextForm}
      prevForm={handlePrevForm}
      indexIndividual={2}
      onSaveContestant={(contestant) => handleSaveContestant(contestant, 1)}
    />,
    <MobileIndividualForm
      key={2}
      nextForm={handleNextForm}
      prevForm={handlePrevForm}
      indexIndividual={3}
      onSaveContestant={(contestant) => handleSaveContestant(contestant, 2)}
    />,
    <MobileIndividualForm
      key={3}
      nextForm={handleNextForm}
      prevForm={handlePrevForm}
      indexIndividual={4}
      onSaveContestant={(contestant) => handleSaveContestant(contestant, 3)}
      onSkipFourthMember={handleSkipFourthMember}
    />,
    <MobileTeamForm
      key={4}
      nextForm={handleNextForm}
      prevForm={handlePrevForm}
      onSaveTeamData={handleSaveTeamData}
      onSubmitFinalForm={handleSubmitFinalForm}
      isSubmitted={isSubmitted}
    />,
  ];

  return (
    <div className="mobile-form-wrapper">
      {isFormVisible && (
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
      )}
    </div>
  );
};

export default MobileForm;
