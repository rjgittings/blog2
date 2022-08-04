import React, { useState } from "react";
import { Button, Error, Input, FormField, Label, Textarea } from "./styles";

function SignUpForm({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [first_name, setFirst_Name] = useState("");
    const [last_name, setLast_Name] = useState("");
    const [img, setImg] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                first_name: first_name,
                last_name: last_name, 
                username: username,
                password: password,
                password_confirmation: passwordConfirmation,
                img: img
            }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((user) => onLogin(user));
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormField>
                <Label htmlFor="first_name">Frist Name</Label>
                <Input
                    type="text"
                    id="first_name"
                    autoComplete="off"
                    value={first_name}
                    onChange={(e) => setFirst_Name(e.target.value)}
                />
            </FormField>
            <FormField>
                <Label htmlFor="last_name">Last Name</Label>
                <Input
                    type="text"
                    id="last_name"
                    autoComplete="off"
                    value={last_name}
                    onChange={(e) => setLast_Name(e.target.value)}
                />
            </FormField>
            <FormField>
                <Label htmlFor="username">Username</Label>
                <Input
                    type="text"
                    id="username"
                    autoComplete="off"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </FormField>
            <FormField>
                <Label htmlFor="password">Password</Label>
                <Input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                />
            </FormField>
            <FormField>
                <Label htmlFor="password">Password Confirmation</Label>
                <Input
                    type="password"
                    id="password_confirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    autoComplete="current-password"
                />
            </FormField>
            <FormField>
                <Label htmlFor="image">Profile Image</Label>
                <Input
                    type="text"
                    id="username"
                    autoComplete="off"
                    value={img}
                    onChange={(e) => setImg(e.target.value)}
                />
            </FormField>

            <FormField>
                <Button type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
            </FormField>
            {/* <FormField>
                {errors.map((err) => (
                    <Error key={err}>{err}</Error>
                ))}
            </FormField> */}
        </form>
    );
}

export default SignUpForm;