import { IChoiceGroupOption } from "@fluentui/react";
import { getNameOfDeclaration } from "typescript";

export const NewStudentFormElements = [
    {
        type: "TextFieldForm",
        name: "name",
        label: "name",
        // isRequired: true,
    },
    {
        type: "TextFieldForm",
        name: "Roll number",
        label: "Roll number",
        // isRequired: true,
    },
    {
        type: "TextFieldForm",
        name: "English",
        label: "English",
    //     isRequired: true,
     },
    {
        type: "TextFieldForm",
        name: "Telugu",
        label: "Telugu",
        // isRequired: true,
    },
    {
        type: "TextFieldForm",
        name: "Hindi",
        label: "Hindi",
        // isRequired: true,
    },
];
export const StudentFormElements = [
    {
        row: 0,
        className: "rowTwo",
        controls: [
            {
                type: "TextFieldForm",
                name: "name",
                label: "name",
                // isRequired: true,
            },
            {
                type: "TextFieldForm",
                name: "rollnumber",
                label: "rollnumber",
                // isRequired: true,
            },
            {
                type: "TextFieldForm",
                name: "English",
                label: "English",
                // isRequired: true,
            },
            {
                type: "TextFieldForm",
                name: "Telugu",
                label: "Telugu",
                // isRequired: true,
            },
            {
                type: "TextFieldForm",
                name: "Hindi",
                label: "Hindi",
                // isRequired: true,
            },
            {
                type: "TextFieldForm",
                name: "Science",
                label: "Science",
                // isRequired: true,
            },
            {
                type: "TextFieldForm",
                name: "Social",
                label: "Social",
                // isRequired: true,
            },
            {
                type: "TextFieldForm",
                name: "activites",
                label: "activites",
                // isRequired: true,
            },
            {
                type: "TextFieldForm",
                name: "totalmarks",
                label: "totalmarks",
                // isRequired: true,
            },
            
        ],
    },
 ];