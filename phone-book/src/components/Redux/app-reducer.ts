import {v1} from "uuid";

const initialState: InitialStateType = {
    members: [
        {
            checked: false,
            id: v1(),
            secondName: "Ребко",
            firstName: "Вадим",
            patronymic: "Владимирович",
            position: "Программист",
            mobilePhone1: "167(1529)820",
            mobilePhone2: "039(26)343",
            officePhone1: "6(18)489-20-99",
            officePhone2: "697(3795)798",
            mobileOfficePhone1: "388(759)425",
            mobileOfficePhone2: "2(3989)692-74",
            department: "Финансы",
        },
        {
            checked: false,
            id: v1(),
            secondName: "Наумчик",
            firstName: "Николай",
            patronymic: "Михайлович",
            position: "Разработчик",
            mobilePhone1: "202-555-0738",
            mobilePhone2: "202-555-0255",
            officePhone1: "202-555-0087",
            officePhone2: "202-555-0286",
            mobileOfficePhone1: "202-555-0493",
            mobileOfficePhone2: "202-555-0019",
            department: "Планирование",
        },
        {
            checked: false,
            id: v1(),
            secondName: "Войтик",
            firstName: "Андрей",
            patronymic: "Владимирович",
            position: "Заместитель",
            mobilePhone1: "209-207-8903",
            mobilePhone2: "209-210-5203",
            officePhone1: "209-213-1572",
            officePhone2: "209-214-6201",
            mobileOfficePhone1: "209-216-3752",
            mobileOfficePhone2: "209-218-0545",
            department: "Планирование",
        }, {
            checked: false,
            id: v1(),
            secondName: "Тарасевич",
            firstName: "Николай",
            patronymic: "Васильевич",
            position: "Заведующий",
            mobilePhone1: "5(0056)011-6",
            mobilePhone2: "345(4378)607-1",
            officePhone1: "538(08)107-6",
            officePhone2: "494(3273)719-0",
            mobileOfficePhone1: "0(5496)316-7",
            mobileOfficePhone2: "94(126)646-9",
            department: "Кадры",
        },
        {
            checked: false,
            id: v1(),
            secondName: "Лешко",
            firstName: "Анатолий",
            patronymic: "Борисович",
            position: "Инженер",
            mobilePhone1: "01(65)315-4",
            mobilePhone2: "96(317)842-2",
            officePhone1: "2(24)897-11",
            officePhone2: "686(429)954-38",
            mobileOfficePhone1: "552(7636)087-35",
            mobileOfficePhone2: "35(5545)899-63",
            department: "Финансы",
        },
        {
            checked: false,
            id: v1(),
            secondName: "Кузьмич",
            firstName: "Дмитрий",
            patronymic: "Антонович",
            position: "Глава отдела",
            mobilePhone1: "197(3343)177-97",
            mobilePhone2: "63(0454)978-70",
            officePhone1: "51(714)870-18",
            officePhone2: "01(059)283-16",
            mobileOfficePhone1: "738(19)283-20",
            mobileOfficePhone2: "679(84)378-69",
            department: "Дома",
        },
        {
            checked: false,
            id: v1(),
            secondName: "Станкевич",
            firstName: "Никита",
            patronymic: "Михайлович",
            position: "Бухгалтер",
            mobilePhone1: "171(02)758-0",
            mobilePhone2: "70(60)194-933",
            officePhone1: "2(497)905-66",
            officePhone2: "31(11)815-91",
            mobileOfficePhone1: "162(363)231-70",
            mobileOfficePhone2: "92(98)105-77",
            department: "Кадры",
        },
    ],
    searchValue: "",
    selectedDepartment: '',
};

export const appReducer = (
    state: InitialStateType = initialState,
    action: ActionsType
): InitialStateType => {
    switch (action.type) {
        case "APP/ADD-MEMBER": {
            return {...state, members: [action.member, ...state.members]};
        }
        case "APP/DELETE-MEMBER":
            return {
                ...state,
                members: state.members.filter((member) => member.id !== action.id),
            };
        case "APP/DELETE-MULTI-MEMBERS":
            return {
                ...state,
                members: state.members.filter((member) => !member.checked),
            };
        case "APP/SEARCH-MEMBER":
            return {
                ...state,
                searchValue: action.searchValue.toLowerCase(),
            };
        case "APP/SELECTED-DEPARTMENT":
            return {
                ...state,
                selectedDepartment: action.selectedDepartment
            };
        case 'APP/CHANGE-ACTION':
            console.log('action, ', action)
            return {
                ...state,
                members: state.members.map((member) => member.id === action.id ? {
                    ...member,
                    [action.key]: action.value
                } : member)
            }


        default:
            return {...state};
    }
};

export type InitialStateType = {
    members: MemberType[];
    searchValue: string;
    selectedDepartment: string;
};

export type MemberType = {
    checked: boolean;
    department: string;
    id: string;
    secondName: string;
    firstName: string;
    patronymic: string;
    position: string;
    mobilePhone1: string;
    mobilePhone2: string;
    officePhone1: string;
    officePhone2: string;
    mobileOfficePhone1: string;
    mobileOfficePhone2: string;
};

export const addMember = (member: any) =>
    ({type: "APP/ADD-MEMBER", member} as const);
export const deleteMember = (id: string) =>
    ({type: "APP/DELETE-MEMBER", id} as const);
export const deleteMultiMembers = () =>
    ({type: "APP/DELETE-MULTI-MEMBERS"} as const);
export const searchMember = (searchValue) =>
    ({type: "APP/SEARCH-MEMBER", searchValue} as const);
export const changeAction = (id: string, key: string, value: string | boolean) => ({
    type: 'APP/CHANGE-ACTION', id, key, value
} as const)
export const searchDepartment = (selectedDepartment) => ({
    type: 'APP/SELECTED-DEPARTMENT', selectedDepartment
} as const)

export type AddMemberActionType = ReturnType<typeof addMember>;
export type DeleteMemberActionType = ReturnType<typeof deleteMember>;
export type SearchMemberActionType = ReturnType<typeof searchMember>;
export type ChangeSpanActionType = ReturnType<typeof changeAction>;
export type MultiDeleteActionType = ReturnType<typeof deleteMultiMembers>;
export type SelectedDepartmentActionType = ReturnType<typeof searchDepartment>;

type ActionsType =
    | AddMemberActionType
    | DeleteMemberActionType
    | SearchMemberActionType
    | ChangeSpanActionType
    | MultiDeleteActionType
    | SelectedDepartmentActionType
