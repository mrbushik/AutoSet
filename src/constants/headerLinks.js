import {PATHS, PATHS_NAMES} from "./common";

const { ARCHIVE, MATERIAL_PAGE, SIGN_IN, PERSONAL_PROFILE, LANDING } = PATHS;
const {
    ARCHIVE_NAME,
    MATERIAL_PAGE_NAME,
    SIGN_IN_NAME,
    PERSONAL_PROFILE_NAME,
    LANDING_NAME,
} = PATHS_NAMES;

export const headerLinks = [
    {
        to: LANDING,
        text: LANDING_NAME,
        id: 'main',
        tabIndex: 2,
    },
    {
        to: ARCHIVE,
        text: ARCHIVE_NAME,
        id: 'archive',
        tabIndex: 3,
    },
    {
        to: MATERIAL_PAGE,
        text: MATERIAL_PAGE_NAME,
        id: 'materials',
        tabIndex: 4,
    },
    {
        to: SIGN_IN,
        text: SIGN_IN_NAME,
        id: 'login',
        tabIndex: 5,
    },
];