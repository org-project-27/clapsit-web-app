import type {LanguageContent} from "~/constants/types/LocalesType";

let locales: LanguageContent;
locales = {
    lang: "Language",
    note: "Note",
    az: "Azerbaijani",
    en: "English",
    ru: "Russian",
    email_confirming: "Email address confirming",
    please_wait: "Please wait",
    redirecting_to_home: "Redirecting to home page",
    redirecting_to_login: "Redirecting to login page",
    error: 'Oops! An error occurred',
    greetings: 'Welcome to {brand}!',
    lets_get_started: "Let's get started!",
    or: 'or',
    continue_with: 'Continue with {platform}',
    buttons: {
        search: "Search",
        filter: "Filter",
        login: "Login",
        logout: "Log out",
        continue: "Continue",
        waiting: "Waiting",
        get_started: "Get started",
        save: "Save",
        change: "Change"
    },
    backend_messages: {
        DONE: 'Done!',
        SOMETHING_WENT_WRONG: 'Something went wrong!',
        EMAIL_IS_EXIST: 'Email is already registered!',
        USER_REGISTRATION_FAILED: 'User registration progress was failed!',
        USER_SUCCESSFULLY_REGISTERED: 'User successfully registered!',
        EMAIL_SUCCESSFULLY_CONFIRMED: "Email successfully confirmed!",
        EMAIL_IS_NOT_VALID: 'Email is not valid!',
        INVALID_EMAIL: 'Email is not valid!',
        INVALID_PASSWORD: 'Password is not valid!',
        INVALID_FULLNAME: 'Fullname is not valid!',
        INVALID_TOKEN: 'Something went wrong!',
        BCRYPT_ERROR: 'Something went wrong!',
        USER_LOGIN_PROGRESS_FAILED: 'Login progress was failed!',
        USER_SUCCESSFULLY_LOGIN: 'User successfully login!',
        EMAIL_IS_NOT_REGISTERED: 'Email is not registered!',
        EMAIL_OR_PASSWORD_INCORRECT: 'Email or password incorrect!',
        LINK_EXPIRED: "Link expired!",
        PASSWORD_SUCCESSFULLY_CHANGED: "Password successfully changed!",
        PASSWORD_RESET_LINK_WILL_SENT: "If your email address is registered in our system, we will send an email with password reset instructions. Please check your inbox and spam folder.",
        USER_NOT_FOUND: 'User not found',
        AUTH_REQUIRED: 'Auth required',
        PARAM_REQUIRED: 'Param required',
        OBJECT_NOT_FOUND: 'Object not found',
        INVALID_PLACE_NAME: 'Invalid place name',
        INVALID_WEB_SITE_URL: 'Invalid website URL',
        INVALID_ZIP_CODE: 'Invalid zip-code',
        INVALID_ADDRESS: 'Invalid address',
        INVALID_PLACE_TYPE: 'Invalid place type',
        INVALID_CITY: 'Invalid city',
        INVALID_STATE: 'Invalid state',
        INVALID_PHONE: 'Invalid phone',
        INVALID_OPENING_HOURS: 'Invalid opening hours',
        ALREADY_EXIST: 'Already exists!',
        PLACE_NOT_FOUND: 'Place not found',
        YOU_CANNOT_EDIT_PLACE_ID: 'You cannot edit place_id',
        YOU_CANNOT_EDIT_BRAND_ID: 'You cannot edit brand_id',
        YOU_CANNOT_EDIT_OWNER_ID: 'You cannot edit owner_id',
        BRAND_NOT_FOUND: 'Brand not found',
        BRAND_ALREADY_EXIST: 'Brand already exists',
        INVALID_BRAND_NAME: 'Invalid brand name',
        INVALID_BRAND_BIO_SIZE: 'Invalid brand bio size',
        NAME_ALREADY_TAKEN: 'Name already taken',
        INVALID_BIRTHDAY: 'Invalid birthdate',
        OLD_PASSWORD_INCORRECT: 'Current password is incorrect!',
        PASSWORDS_ARE_SAME: 'New password cannot be same with current password!',
        INVALID_BODY: 'Invalid form fields!',
        BIRTHDAY_ALREADY_EXIST: 'Birthday already set!',
        INVALID_CONVERSATION_KEY: "Invalid conversation key!",
        MODEL_IS_UNDEFINED: "Model field is required!",
        MODEL_IS_UNSUPPORTED: "Unsupported model!",
        KEY_NAME_IS_UNDEFINED: "Key name is required!",
        EMAIL_CONFIRM_REQUIRED: "Email confirm required!"
    },
    pages: {
        default: {
            title: "Home",
            description: "Home page",
            keywords: "Home, Main, index"
        },
        home: {
            title: "Home",
            description: "Home page",
            keywords: "Home, Main, index"
        },
        getstarted: {
            title: "Get started",
            description: "Welcome to {brand}!",
            keywords: "Get started, Login, Logout, Sigin, Sign out, Sign up, Auth"
        },
        login: {
            title: "Login",
            description: "Welcome to our secure login page! Here, you can access your personalized account by entering your credentials!",
            keywords: "User authentication, Account access, Secure login and registration, Sign in or sign up, Create or log in to your account, Membership login and registration, Easy account access, Online account management, Login and registration portal, Secure user onboarding",
            utilities: {
                create_account: "Create Account",
                login: "Login",
                email_field: 'Email',
                password_field: 'Password',
            }
        },
        register: {
            title: "Register",
            description: "Welcome to {brand}! Join our community by creating your account in just a few simple steps. Provide your basic details like fullname, email address, and a secure password to get started",
            keywords: "Create an account, Sign up now, Free registration, Join our platform, Register for free, New user signup, Secure account creation, Easy registration process, Start your journey, Get started today",
            utilities: {
                email_field: 'Your Email',
                password_field: 'New Password',
                fullname_field: 'Fullname',
                create_account: "Create Account",
                already_have_account: "Already have an account?",
            }
        }
    }
};

export default {...locales};