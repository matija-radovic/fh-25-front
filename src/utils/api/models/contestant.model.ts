import { Profession } from "../../constants/form/professions";
import {
  HighSchoolYear,
  UniversityYear,
} from "../../constants/form/schoolYears";

//type HighSchoolYear = "I" | "II" | "III" | "IV";
//type UniversityYear = HighSchoolYear | "V" | "VI" | "Master-I" | "Master-II";

// TODO: Repolish to look better
export type HighSchoolYearKey = keyof typeof HighSchoolYear;
export type UniversityYearKey = keyof typeof UniversityYear;
export type HighSchoolYearValue = (typeof HighSchoolYear)[HighSchoolYearKey];
export type UniversityYearValue = (typeof UniversityYear)[UniversityYearKey];

type UniversityInstitution = string; // TODO: fix types
type SchoolInstitution = string; // TODO: fix types

type ContestantBaseInfo = {
  email: string;
  name: string;
  phoneNumber: string;
  techDescription: string;
  CVURL: string;
};

export type Contestant = ContestantBaseInfo &
  (
    | {
        profession: Profession.STUDENT;
        educationalInstitution: UniversityInstitution;
        yearOfStudy: UniversityYearKey | UniversityYearValue;
      }
    | {
        profession: Profession.HIGH_SCHOOL_STUDENT;
        educationalInstitution: SchoolInstitution;
        yearOfStudy: HighSchoolYearKey | HighSchoolYearValue;
      }
    | {
        profession: Profession.EMPLOYED;
        educationalInstitution: undefined;
        yearOfStudy: undefined;
      }
  );
