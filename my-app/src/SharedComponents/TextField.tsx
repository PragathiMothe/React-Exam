import * as React from "react";
import { Label, TextField } from "@fluentui/react";
import { Control, Controller, useFormContext } from "react-hook-form";

interface ITextFieldFormProps {
  name: string;
  label: string;
  isRequired?: boolean;
  isdisabled?: boolean;
  isReadyOnly?: boolean;
  defaultValue?: string;
  control?: Control<any>;
  register?: any;
  placeholder?: string;
}
 
const TextFieldForm = ({
  name,
  label,
  isRequired,
  isdisabled,
  isReadyOnly,
  defaultValue,
  placeholder
  
}: //register,
ITextFieldFormProps) => {
  const { control, register } = useFormContext();
  return (
    <>
    
      <Controller
        control={control}
        name={name}
        render={({
          field,
          fieldState: { error, invalid, isTouched, isDirty },
        }) => {
          return (
            <>
              <div
                className={
                  isRequired ? (error ? "errorGroup" : "errorGroupStar") : ""
                }
              > 
                <TextField
                  label={label}
                  styles={{fieldGroup:{background:"rgb(237,237,237)", border:0}}}
                  disabled={isdisabled}
                  readOnly={isReadyOnly}
                  defaultValue={defaultValue}
                  placeholder={placeholder}
                  {...field}
                  errorMessage={error ? error.message : ""}
                  className={
                    isRequired ? (error ? "errorGroup" : "errorGroupStar") : ""
                  }
                />
              </div>
            </>
          );
        }}
      />
    </>
  );
};

export default TextFieldForm;