import api from "../config";
import { BCApplication, FHApplication } from "../models/application.model";

type ASResponse = {
    success: boolean;
    message: string;
}

class ApplicationService {
    async createApplication(data: FHApplication | BCApplication, appliedFor: "fh" | "bc" = "fh"): Promise<ASResponse> {
        const response = await api.post('/applications', {
            ...data, appliedFor
        });
        return response.data;
    }
}


export const applicationService = new ApplicationService();
