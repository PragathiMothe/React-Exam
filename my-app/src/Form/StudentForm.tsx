import * as React from "react";
import { useEffect } from "react";

import {
    FormProvider,
    SubmitHandler,
    useForm,
} from "react-hook-form";

import { DatePicker, PrimaryButton } from "@fluentui/react";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import DynamicField from "../SharedComponents/DynamicField";
import { StudentFormElements, NewStudentFormElements } from "./helper";
import './Form.scss';
import TextFieldForm from "../SharedComponents/TextField";
import { useParams } from "react-router-dom";
import axios from "axios";

import { useNavigate } from "react-router-dom";


const StudentForm = () => {

    interface IStudentData {
        name?: string;
        rollnumber?: number;
       English?:number;
       Telugu?:number;
       Hindi?:number;
       Science?:number;
       Social?:number;
       activites?:number;
       totalmarks?:number;
    }
    const StudentSchema: yup.SchemaOf<IStudentData>=yup.object().shape(
        {
        name: yup.string().required().min(5),
        rollnumber: yup.number(),
        English:yup.number().max(100),
        Telugu:yup.number().max(100),
        Hindi:yup.number().max(100),
        Science:yup.number().max(100),
        Social:yup.number().max(100),
        activites:yup.number().max(100),
        totalmarks:yup.number().max(100),
    });

    const StudentFormMethods = useForm<any>({
        mode: "all",
        resolver: async (data, context, options) => {
            return yupResolver(StudentSchema)(data, context, options);
        },
    });

    const [submittedData, setSubmitedData] = React.useState();
    const id = useParams();
    const navigation = useNavigate();
    const StudentFormSubmit: SubmitHandler<any> = async (
        data: any,
    ) => {
        setSubmitedData(data); 
        if (id.id) {
            editForm(data);
        } else {
            createForm(data);
        }
        StudentFormMethods.reset({});
        navigation('/view')
    };

    const getAdditionalProps = (item: any) => {
        item.control = StudentFormMethods.control;
        item.setValue = StudentFormMethods.setValue;
        item.register = StudentFormMethods.register;
        return item;
    };

    const [data, setData] = React.useState<any>();
    const getStudentData = async () => {
        try {
            const result = await axios.get(`http://localhost:5000/data/${id.id}`);
            setData(result.data);
        } catch (error) {
            console.log(error)
        }
    }

    const editForm = async (updatedData: any) => {
        try {
            const result = await axios.put(`http://localhost:5000/data/${id.id}`, updatedData);
            setData(result.data);
        } catch (error) {
            console.log(error)
        }
    }

    const createForm = async (updatedData: any) => {
        const generateNumber: any = Math.random();
        const newData = { ...updatedData, 'id': generateNumber }
        try {
            const result = await axios.post(`http://localhost:5000/data`, newData);
            setData(result.data);
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getStudentData();
    }, [id]);

    useEffect(() => {
        data &&
            Object.entries(data).forEach(([key, value]: any) => {
                StudentFormMethods.setValue(key, value, { shouldValidate: true });
            });
    }, [data]);

    console.log(StudentFormMethods.watch(), StudentFormMethods.formState.errors)

    return (
        <div className="form">
            <div className="form_header">
                <p>Student <span style={{color:'#396CC5'}}>Information</span></p>
            </div>
           <div>
           <hr/>
           <br/>
           </div>
            <FormProvider {...StudentFormMethods}>
                <form onSubmit={StudentFormMethods.handleSubmit(StudentFormSubmit)}>
                    <div className="form_container">

                        {StudentFormElements?.map((rows: any) => {
                            return (
                                <div className={`rowThree ${rows.className}`}>
                                    {rows.controls?.map((item: any) => {
                                        const updatedItem = getAdditionalProps(item);
                                        return DynamicField(item.type, updatedItem);
                                    })}
                                </div>
                            );
                        })}
                    </div>
                    <br/>
                    <hr/>
                    <div className="form_footer">
                        {/* <PrimaryButton type="submit"
                            onClick={StudentFormMethods.handleSubmit(StudentFormSubmit)}

                        >Submit</PrimaryButton> */}
                        <PrimaryButton className='addbtn'onClick={StudentFormMethods.handleSubmit(StudentFormSubmit)}>Submit</PrimaryButton>
                    </div>
                </form>
            </FormProvider>
        </div>
    );
};

export default StudentForm;
