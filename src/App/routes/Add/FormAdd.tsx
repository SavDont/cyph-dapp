import { Button } from "antd";
import { Formik } from "formik";
import { Form, FormItem, Input } from "formik-antd";
import React from "react";
import { LeftOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";

interface FormAddProps {
    readonly setNewName: (value: React.SetStateAction<string>) => void;
    readonly setNewPassword: (value: React.SetStateAction<string>) => void;
    readonly addButtonAction: () => void;
}

export function FormAdd({
    setNewName,
    setNewPassword,
    addButtonAction,
}: FormAddProps): JSX.Element {
    const history = useHistory();
    return (
        <Formik
            initialValues={{ name: "", password: "" }}
            onSubmit= {addButtonAction}
        >
            {(formikProps) => (
                <Form>
                    <FormItem name="name">
                        <Input
                            name="name"
                            placeholder="Enter name"
                            onChange={(event) => {
                                setNewName(event.target.value);
                            }}
                        />
                    </FormItem>
                    <FormItem name="password">
                        <Input.Password
                            name="password"
                            placeholder="Enter password"
                            onChange={(event) => {
                                setNewPassword(event.target.value);
                            }}
                        />
                    </FormItem>
                    <LeftOutlined onClick= {() => history.goBack()} />
                    <Button
                        type="primary"
                        shape="round"
                        onClick={addButtonAction}
                        disabled={!(formikProps.isValid && formikProps.dirty)}>
                        Submit
                    </Button>
                </Form>
            )}
        </Formik>
    );
}