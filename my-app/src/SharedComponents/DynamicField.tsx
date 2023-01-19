import TextFieldForm from "../SharedComponents/TextField";

    export const DynamicField = (fieldName: string, item: any) => {
        switch (fieldName) { 
        case "TextFieldForm" :
        return <TextFieldForm {...item}/>;
        default :
         return 'Component not found';
    }
};
export default DynamicField