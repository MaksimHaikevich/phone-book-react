type Field = {
    id: string;
    label: string;
    required: boolean;
    validationMessage: string;
    type: string;
};

export const FieldTypes: Field[] = [
    {
        id: 'secondName',
        label: "Фамилия",
        required: true,
        validationMessage: "",
        type: "text",
    },
    {
        id: 'firstName',
        label: "Имя",
        required: true,
        validationMessage: "",
        type: "text",
    },
    {
        id: "patronymic",
        label: "Отчество",
        required: true,
        validationMessage: "",
        type: "text",
    },
    {
        id: "position",
        label: "Должность",
        required: true,
        validationMessage: "",
        type: "text",
    },
    {
        id: "mobilePhone1",
        label: "Моб.тел",
        required: true,
        validationMessage: "",
        type: "text",
    },
    {
        id: "mobilePhone2",
        label: "Моб.тел2",
        required: false,
        validationMessage: "",
        type: "text",
    },
    {
        id: "officePhone1",
        label: "Служеб.тел",
        required: true,
        validationMessage: "",
        type: "text",
    },
    {
        id: "officePhone2",
        label: "Служеб.тел2",
        required: false,
        validationMessage: "",
        type: "text",
    },
    {
        id: "mobileOfficePhone1",
        label: "Моб.Служеб.тел",
        required: true,
        validationMessage: "",
        type: "text",
    },
    {
        id: "mobileOfficePhone2",
        label: "Моб.Служеб.тел2",
        required: false,
        validationMessage: "",
        type: "text",
    },
    {
        id: "department",
        label: "Подразделение",
        required: true,
        validationMessage: "",
        type: "select",
    },
];
