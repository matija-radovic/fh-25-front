export const HighSchoolYear = {
    "I": "prva",
    "II": "druga",
    "III": "treća",
    "IV": "ćetvrta"
} as const

export const UniversityYear = {
    ...HighSchoolYear,
    "V": "peta",
    "VI": "šesta",
    "MAS-I": "prva godina mastera",
    "MAS-II": "druga godina mastera"
} as const

