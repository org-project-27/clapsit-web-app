import type { ServerResponseType } from "~/types/general.types";

export const _HealthService = {
    async get(): Promise<ServerResponseType> {
        return await defineService('health', () => $query('GET', '/health'))
    }
}