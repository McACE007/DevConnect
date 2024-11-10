import { Gender } from "@prisma/client";

export type SignupFormDataType = {
    fullName: string;
    username: string;
    password: string;
    confirmPassword: string;
    gender: Gender;
}