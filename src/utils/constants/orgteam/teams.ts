export type OrganizationalTeam = {
    coordinator: {
        image: string;
        firstName: string;
        lastName: string;
        role: string;
    },
    team: {
        image: string;
        name: string;
    }
}
export const orgTeams: OrganizationalTeam[] = [
    {
        coordinator: {
            image: "images/FILIP_LAZAREVIC.png",
            firstName: "Filip",
            lastName: "Lazarević",
            role: "Koordinator takmičenja",
        },
        team: {
            image: "images/CORE_TIM.jpg",
            name: "Tim Koordinatora",
        }
    },
    {
        coordinator: {
            image: "images/MINA_VUKOVIC.png",
            firstName: "Mina",
            lastName: "Vuković",
            //role: "Koordinator tima za odnose sa kompanijama",
            role: "Koordinator CR tima",
        },
        team: {
            image: "images/CR_TIM.jpg",
            name: "Tim za odnose sa kompanijama",
        }
    },
    {
        coordinator: {
            image: "images/ANASTASIJA_RUS.png",
            firstName: "Anastasija",
            lastName: "Rus",
            //role: "Koordinator tima za odnose s javnošću",
            role: "Koordinator PR tima",
        },
        team: {
            image: "images/PR_TIM.png",
            name: "Tim za odnose s javnošću",
        }
    },
    {
        coordinator: {
            image: "images/MATIJA_VUJIC.png",
            firstName: "Matija",
            lastName: "Vujić",
            //role: "Koordinator tima za ljudske resurse",
            role: "Koordinator HR tima",
        },
        team: {
            image: "images/HR_TIM.jpg",
            name: "Tim za ljudske resurse",
        }
    },
    {
        coordinator: {
            image: "images/DANICA_ZIVKOVIC.png",
            firstName: "Danica",
            lastName: "Živković",
            role: "Koordinator tima za DIZAJN",
        },
        team: {
            image: "images/DIZAJN_TIM.jpg",
            name: "Tim za dizajn",
        }
    },
    {
        coordinator: {
            image: "images/EMILIJA_SIMIC.png",
            firstName: "Emilija",
            lastName: "Simić",
            role: "Koordinator tima za LOGISTIKU",
        },
        team: {
            image: "images/LOGISTIKA_TIM.jpg",
            name: "Tim za logistiku",
        }
    },
    {
        coordinator: {
            image: "images/MATIJA_RADOVIC.png",
            firstName: "Matija",
            lastName: "Radović",
            //role: "Koordinator tima za informacione tehnologije",
            role: "Koordinator IT tima",
        },
        team: {
            image: "images/IT_TIM.jpg",
            name: "Tim za informacione tehnologije",
        }
    },
];