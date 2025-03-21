export type LoginFieldsType = {
    email?: string | null;
    password?: string | null;
}

export type RegisterFieldsType = {
    fullname?: string | null;
    email?: string | null;
    password?: string | null;
    acceptTerms: boolean;
}

export type ForgotPasswordFieldsType = {
    email?: string | null;
}

export type GetStartedType = {
    loadingFor: string | null;
    login: LoginFieldsType;
    register: RegisterFieldsType;
    forgotPassword: ForgotPasswordFieldsType;
}