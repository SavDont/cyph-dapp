import { Button } from "antd";
import { Formik } from "formik";
import { Form, FormItem, Input } from "formik-antd";
import React from "react";
import { LeftOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";

interface FormEditProps {
    readonly setNewPassword: (value: React.SetStateAction<string>) => void;
    readonly editButtonAction: () => void;
}

export function FormEdit({
    setNewPassword,
    editButtonAction,
}: FormEditProps): JSX.Element {
    const history = useHistory();
    return (
        <Formik
            initialValues={{ password: "" }}
            onSubmit= {editButtonAction}
        >
            {(formikProps) => (
                <Form>
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
                        onClick={editButtonAction}
                        disabled={!(formikProps.isValid && formikProps.dirty)}>
                        Submit
                    </Button>
                </Form>
            )}
        </Formik>
    );
}