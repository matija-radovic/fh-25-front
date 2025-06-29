import { Picture } from 'vite-imagetools'
import filip from '../../../assets/OrgTeam/cards/FILIP_LAZAREVIC.png?orgteam'
import mina from '../../../assets/OrgTeam/cards/MINA_VUKOVIC.png?orgteam'
import anastasija from '../../../assets/OrgTeam/cards/ANASTASIJA_RUS.png?orgteam'
import vujic from '../../../assets/OrgTeam/cards/MATIJA_VUJIC.png?orgteam'
import danica from '../../../assets/OrgTeam/cards/DANICA_ZIVKOVIC.png?orgteam'
import radovic from '../../../assets/OrgTeam/cards/MATIJA_RADOVIC.png?orgteam'
import emilija from '../../../assets/OrgTeam/cards/EMILIJA_SIMIC.png?orgteam'
import core from '../../../assets/OrgTeam/cards/CORE_TIM.jpg?orgteam'
import cr from '../../../assets/OrgTeam/cards/CR_TIM.jpg?orgteam'
import pr from '../../../assets/OrgTeam/cards/PR_TIM.jpg?orgteam'
import hr from '../../../assets/OrgTeam/cards/HR_TIM.jpg?orgteam'
import dizajn from '../../../assets/OrgTeam/cards/DIZAJN_TIM.jpg?orgteam'
import it from '../../../assets/OrgTeam/cards/IT_TIM.jpg?orgteam'
import log from '../../../assets/OrgTeam/cards/LOGISTIKA_TIM.jpg?orgteam'

export type OrganizationalTeam = {
    coordinator: {
        image: Picture;
        firstName: string;
        lastName: string;
        role: string;
    },
    team: {
        image: Picture;
        name: string;
    }
}
export const orgTeams: OrganizationalTeam[] = [
    {
        coordinator: {
            image: filip,
            firstName: "Filip",
            lastName: "Lazarević",
            role: "Koordinator takmičenja",
        },
        team: {
            image: core,
            name: "Tim Koordinatora",
        }
    },
    {
        coordinator: {
            image: mina,
            firstName: "Mina",
            lastName: "Vuković",
            role: "Koordinator CR tima",
        },
        team: {
            image: cr,
            name: "Tim za odnose sa kompanijama",
        }
    },
    {
        coordinator: {
            image: anastasija,
            firstName: "Anastasija",
            lastName: "Rus",
            role: "Koordinator PR tima",
        },
        team: {
            image: pr,
            name: "Tim za odnose s javnošću",
        }
    },
    {
        coordinator: {
            image: vujic,
            firstName: "Matija",
            lastName: "Vujić",
            role: "Koordinator HR tima",
        },
        team: {
            image: hr,
            name: "Tim za ljudske resurse",
        }
    },
    {
        coordinator: {
            image: danica,
            firstName: "Danica",
            lastName: "Živković",
            role: "Koordinator tima za DIZAJN",
        },
        team: {
            image: dizajn,
            name: "Tim za dizajn",
        }
    },
    {
        coordinator: {
            image: emilija,
            firstName: "Emilija",
            lastName: "Simić",
            role: "Koordinator tima za LOGISTIKU",
        },
        team: {
            image: log,
            name: "Tim za logistiku",
        }
    },
    {
        coordinator: {
            image: radovic,
            firstName: "Matija",
            lastName: "Radović",
            role: "Koordinator IT tima",
        },
        team: {
            image: it,
            name: "Tim za informacione tehnologije",
        }
    },
];