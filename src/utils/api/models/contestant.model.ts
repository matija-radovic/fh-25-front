import { Profession } from "../../constants/form/professions";
import { HighSchoolYear, UniversityYear } from "../../constants/form/schoolYears";

//type HighSchoolYear = "I" | "II" | "III" | "IV";
//type UniversityYear = HighSchoolYear | "V" | "VI" | "Master-I" | "Master-II";

// TODO: Repolish to look better
type HighSchoolYearKey = keyof typeof HighSchoolYear
type UniversityYearKey = keyof typeof UniversityYear;
type HighSchoolYearValue = typeof HighSchoolYear[HighSchoolYearKey];
type UniversityYearValue = typeof UniversityYear[UniversityYearKey];

type UniversityInstitution = string // TODO: fix types
type SchoolInstitution = string; // TODO: fix types


type ContestantBaseInfo = {
    email: string;
    name: string;
    phoneNumber: string;
    techDescription: string;
    CVURL: string;    
}

export type Contestant = ContestantBaseInfo & (
    | {
        proffesion: Profession.STUDENT;
        educationalInstitution: UniversityInstitution;
        yearOfStudy: UniversityYearKey | UniversityYearValue;
    }
    | {
        proffesion: Profession.HIGH_SCHOOL_STUDENT;
        educationalInstitution: SchoolInstitution;
        yearOfStudy: HighSchoolYearKey | HighSchoolYearValue;
    }
    | {
        proffesion: Profession.STUDENT;
        educationalInstitution: undefined;
        yearOfStudy: undefined;
    });

