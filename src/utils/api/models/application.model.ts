import { Contestant } from "./contestant.model";

export interface FHApplication {
    teamName: string;
    previousExpiriences: string;
    applicationReason: string;
    virtuesAndVices: string;
    contestants: {
        member1: Contestant;
        member2: Contestant;
        member3: Contestant;
        member4?: Contestant | undefined;
        //get leader(): Contestant;
    }
}

/* eslint-disable  @typescript-eslint/no-empty-object-type*/
export interface BCApplication {
    // TODO: implement based on documentation from PR team
}
/* eslint-enable  @typescript-eslint/no-empty-object-type*/