"use client"

import { ChangeEvent, FormEvent, useState } from "react"
import { useValidator } from "../use-validator"
import { IErrorsMessages, IRules, IValidatorData } from "../use-validator/types"
import { TSubmitHandler } from "./type"

interface IUseFormProps<FormValues> {
    defaultValues: FormValues;
    rules?: IRules;
}

const createNewErrors = <Fields>(errors: IErrorsMessages<Fields>, deleteField: string) => {
    return Object.keys(errors).reduce((obj, keyError) => {
        if (keyError !== deleteField) {
            obj[keyError as keyof typeof errors] = errors[keyError as keyof typeof errors];
        }
        return obj;
    }, {} as IErrorsMessages<Fields>);
}

const isEmpty = (obj: Object) => Object.keys(obj).length === 0;

export const useForm = <FormValues extends IValidatorData>({ defaultValues, rules = {} }: IUseFormProps<FormValues>) => {
    const { errors, validate, checkField, fails, setErrors } = useValidator<FormValues>();
    const [values, setValues] = useState(defaultValues);
    const [submitting, setSubmitting] = useState(false);

    const setValue = (name: keyof typeof defaultValues, value: FormValues[keyof FormValues]) => {
        const errorMessage: string | undefined = checkField({ fieldRules: rules[name], value, fields: values });
        if (!isEmpty(rules)) {
            if (Boolean(errorMessage)) {
                setErrors({ ...errors, [name]: errorMessage });
            } else {
                setErrors(createNewErrors(errors, name.toString()));
            }
        }

        setValues((prevValues) => ({ ...prevValues, [name]: value }));
    }

    const handleChange = (
        { target: { name, value } }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => setValue(name, value as FormValues[keyof FormValues]);

    const handleSubmit = (onSubmit: TSubmitHandler<FormValues>) =>
        async (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setSubmitting(true);

            if (!isEmpty(rules)) {
                const errorsMessages = validate(values, rules);
                const errors = fails(errorsMessages);

                if (!errors.status) {
                    setSubmitting(false);
                    return;
                }
            }

            await onSubmit(values, e);
            setSubmitting(false);
        };

    return { values, handleChange, handleSubmit, setValue, submitting, errors };
}