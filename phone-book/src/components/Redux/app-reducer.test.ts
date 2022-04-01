import {
    addMember,
    appReducer,
    deleteMember,
    deleteMultiMembers,
    InitialStateType,
} from './app-reducer';

test('Delete member', () => {
    const startState: InitialStateType = {
        members: [
            {
                checked: false,
                id: '1',
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
                id: '2',
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
            }
        ],
        searchValue: "",
        selectedDepartment: "",
    }

    const action = deleteMember("2");

    const endState = appReducer(startState, action)

    expect(endState).toEqual({
        members: [
            {
                checked: false,
                id: '1',
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
            }
        ],
        searchValue: "",
        selectedDepartment: "",
    });

})
test('Add member', () => {
    const startState: InitialStateType = {
        members: [
            {
                checked: false,
                id: '1',
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
            }
        ],
        searchValue: "",
        selectedDepartment: "",
    }

    const action = addMember({
        checked: false,
        id: '2',
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
    });
    const endState = appReducer(startState, action)
    expect(endState.members.length).toBe(2);

});
test('Multi delete member', () => {
    const startState: InitialStateType = {
        members: [
            {
                checked: true,
                id: '1',
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
                checked: true,
                id: '1',
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
                id: '1',
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
        ],
        searchValue: "",
        selectedDepartment: "",
    }

    const action = deleteMultiMembers()
    const endState = appReducer(startState, action)
    expect(endState.members.length).toBe(1);

});