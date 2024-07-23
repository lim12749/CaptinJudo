"use client";

import { useFormState } from "react-dom";
import { logIn   } from "./actions";
import Input from "@/components/input";
import FormButton from "@/components/button";
import SocialLogin from "@/components/social-login";
import {PASSWORD_MIN_LENGTH} from "@/lib/constants";
import Link from "next/link";

export default function Login() {
    const [state, _action] = useFormState(logIn, null);

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold mb-2">안녕하세요</h1>
                    <h1 className="text-lg text-gray-600">Log in with email and password.</h1>
                </div>
                <form action={_action}>
                    <Input
                        name="email"
                        type="email"
                        placeholder="Email"
                        required
                        errors={[]}
                        className="mb-4 w-full px-3 py-2 border border-gray-300 rounded"
                    />
                    <Input
                        name="password"
                        type="password"
                        placeholder="Password"
                        required
                        minLength={PASSWORD_MIN_LENGTH}
                    />
                    <FormButton text="Log in" />
                </form>
                <Link href="../Create-account"> 신규 계정 생성</Link>

            </div>
        </div>
    );
}
