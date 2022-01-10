import { Button } from "antd";
import { Formik } from "formik";
import { Form, FormItem, Input } from "formik-antd";
import React from "react";

interface FormKeyProps {
    readonly setKey: (key: string) => void;
    readonly submitButtonAction: () => void;
}

export function FormKey({
    setKey,
    submitButtonAction
}: FormKeyProps): JSX.Element {
    return (
        <Formik
            initialValues={{ key: "" }}
            onSubmit= { submitButtonAction }
        >
            {(formikProps) => (
                <Form>
                    <FormItem name="key">
                        <Input
                            name="key"
                            placeholder="Enter master key"
                            onChange={(event) => {
                                setKey(event.target.value);
                            }}
                        />
                    </FormItem>
                    <Button
                        type="primary"
                        shape="round"
                        onClick={ submitButtonAction }
                        disabled={!(formikProps.isValid && formikProps.dirty)}>
                        Submit
                    </Button>
                </Form>
            )}
        </Formik>
    );
}