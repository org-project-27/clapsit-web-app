export type ServerResponseType = {
    success: boolean;
    message: string;
    status: number;
    data: object | null;
}

export type QueryMethods = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';