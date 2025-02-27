import type {LanguageContent} from "~/constants/types/LocalesType";

let locales: LanguageContent;
locales = {
    lang: "Язык",
    note: "Заметка",
    az: "Азербайджанский",
    en: "Английский",
    ru: "Русский",
    please_wait: "Пожалуйста, подождите",
    redirecting_to_home: "Переход на главную страницу",
    redirecting_to_login: "Переход на страницу входа",
    email_confirming: "Подтверждение адреса электронной почты",
    error: "Оопс! Произошла ошибка",
    buttons: {
        search: "Поиск",
        filter: "Фильтр",
        login: "Войти",
        logout: "Выйти",
        continue: "Продолжить",
        waiting: "Ожидание",
        get_started: "Начать",
        save: "Сохраните",
        change: "Изменить"
    },
    backend_messages: {
        DONE: 'Готово!',
        SOMETHING_WENT_WRONG: 'Что-то пошло не так!',
        EMAIL_IS_EXIST: 'Электронная почта уже существует!',
        USER_REGISTRATION_FAILED: 'Процесс регистрации пользователя не удался!',
        USER_SUCCESSFULLY_REGISTERED: 'Пользователь успешно зарегистрирован!',
        EMAIL_SUCCESSFULLY_CONFIRMED: "Электронная почта успешно подтверждена!",
        EMAIL_IS_NOT_VALID: 'Электронная почта недействительна!',
        INVALID_EMAIL: 'Электронная почта недействительна!',
        INVALID_PASSWORD: 'Пароль недействителен!',
        INVALID_FULLNAME: 'Полное имя недействительно!',
        INVALID_TOKEN: 'Что-то пошло не так!',
        BCRYPT_ERROR: 'Что-то пошло не так!',
        USER_LOGIN_PROGRESS_FAILED: 'Процесс входа пользователя не удался!',
        USER_SUCCESSFULLY_LOGIN: 'Пользователь успешно вошел в систему!',
        EMAIL_IS_NOT_REGISTERED: 'Электронная почта не зарегистрирована!',
        EMAIL_OR_PASSWORD_INCORRECT: 'Электронная почта или пароль неверны!',
        LINK_EXPIRED: "Срок действия ссылки истек!",
        PASSWORD_SUCCESSFULLY_CHANGED: "Пароль успешно изменен!",
        PASSWORD_RESET_LINK_WILL_SENT: "Если ваш адрес электронной почты зарегистрирован в нашей системе, мы отправим инструкции по сбросу пароля. Пожалуйста, проверьте ваш почтовый ящик и папку со спамом.",
        USER_NOT_FOUND: 'Пользователь не найден',
        AUTH_REQUIRED: 'Требуется авторизация',
        PARAM_REQUIRED: 'Требуется параметр',
        OBJECT_NOT_FOUND: 'Объект не найден',
        INVALID_PLACE_NAME: 'Недопустимое название места',
        INVALID_WEB_SITE_URL: 'Недопустимый URL веб-сайта',
        INVALID_ZIP_CODE: 'Недопустимый почтовый индекс',
        INVALID_ADDRESS: 'Недопустимый адрес',
        INVALID_PLACE_TYPE: 'Недопустимый тип места',
        INVALID_CITY: 'Недопустимый город',
        INVALID_STATE: 'Недопустимый штат',
        INVALID_PHONE: 'Недопустимый телефон',
        INVALID_OPENING_HOURS: 'Недопустимое время работы',
        ALREADY_EXIST: 'Уже существует!',
        PLACE_NOT_FOUND: 'Место не найдено',
        YOU_CANNOT_EDIT_PLACE_ID: 'Вы не можете редактировать place_id',
        YOU_CANNOT_EDIT_BRAND_ID: 'Вы не можете редактировать brand_id',
        YOU_CANNOT_EDIT_OWNER_ID: 'Вы не можете редактировать owner_id',
        BRAND_NOT_FOUND: 'Бренд не найден',
        BRAND_ALREADY_EXIST: 'Бренд уже существует',
        INVALID_BRAND_NAME: 'Недопустимое название бренда',
        INVALID_BRAND_BIO_SIZE: 'Недопустимый размер описания бренда',
        NAME_ALREADY_TAKEN: 'Имя уже занято',
        INVALID_BIRTHDAY: 'Неверная дата рождения',
        OLD_PASSWORD_INCORRECT: 'Текущий пароль неверен!',
        PASSWORDS_ARE_SAME: 'Новый пароль не может быть таким же, как текущий!',
        INVALID_BODY: 'Неверные поля формы!',
        BIRTHDAY_ALREADY_EXIST: 'Дата рождения уже установлена!',
    }
};

export default { ...locales };