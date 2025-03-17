import type { UserDataType } from "~/types/user.type";
import {_UserService} from "~/services/user.service";
import type {LoginFieldsType, RegisterFieldsType} from "~/types/getstarted.types";

type UserStateType = {
    data: UserDataType
}

const model: UserStateType = {
    data: {
        user_id: null,
        details: {
            fullname: null,
            email: null,
            phone: null,
            birthday: null,
            bio: null,
            email_registered: null,
            preferred_lang: null,
            profile_photo_id: null,
        }
    }
}

export const useUser = defineStore('user', {
    state: () => (deepCopy(model) as UserStateType),
    getters: {
        getUserId(state){
            return state.data.user_id;
        },
        getUserDetails(state) {
            return state.data.details;
        }
    },
    actions: {
        setUserData(data: UserDataType) {
            this.data = {...data};
        },
        async registerQuery(register: RegisterFieldsType) {
            return await _UserService.signup.post(register);
        },
        async loginInQuery(login: LoginFieldsType) {
            return await _UserService.login.post(login);
        },
        async confirmEmailQuery(token: string) {
            return await _UserService.confirm_email.get({token});
        },
        async logoutQuery() {
            return await _UserService.logout.get();
        },
        async logoutUser() {
            await this.logoutQuery().then(() => {
                useAuth().resetAuth();
                window.location.reload();
            });
        }
    }
});