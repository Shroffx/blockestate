'use client';

import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import {signIn} from 'next-auth/react';
import { useCallback, useState } from 'react';
import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form';

import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import Modal from './Modal';
import Heading from '../Heading';
import Input from "@/app/components/inputs/Input";
import toast from 'react-hot-toast';
import Button from '../Button';
import { useRouter } from 'next/navigation';
const LoginModal = () => {
    const router = useRouter();     
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        signIn('credentials', {
            ...data,
            redirect:false
        })
        .then((callback)=>{
            setIsLoading(false);
            if(callback?.ok){
                toast.success('Logged in successfully');
                router.refresh();
                loginModal.onClose();
            }
            if (callback?.error){
                toast.error(callback.error);
            }
        })
    };

    const toggle = useCallback(()=>{
        loginModal.onClose();
        registerModal.onOpen();
    
    },[loginModal,registerModal]);
    

    const bodyContent = (
        <div className='flex flex-col gap-2'>
            <Heading
                title="Welcome back!"
                subtitle='Login to your account!' />
            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="password"
                type="password"
                label="Password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>

    )

    const foorterContent = (
        <div className='flex flex-col gap-1 mt-2'>
            <hr />
            <Button
                outline
                label="Continue with Google"
                icon={FcGoogle}
                onClick={() => signIn('google')}

            />
            <Button
                outline
                label="Continue with Github"
                icon={AiFillGithub}
                onClick={() => signIn('github')}

            />
            <div
                className='
        text-neutral-500
        text-center
        mt-3
        font-light
        '
            >
                <div className=' justify-center text-center flex flex-row items-center gap-3 mb-2'>
                    <div>
                        First time using BlockEstate?
                    </div>
                    <div
                        onClick={toggle}
                        className='
                text-blue-800
                curson-pointer
                hover:underline'>
                        Create an account
                    </div>
                </div>
            </div>
        </div>
    )
    return (
        <Modal
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            title="Login"
            actionLabel='Continue'
            onClose={loginModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={foorterContent}
        />
    );
}

export default LoginModal;