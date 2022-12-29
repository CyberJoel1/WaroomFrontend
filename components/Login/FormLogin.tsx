"use client";
import { Button, Checkbox, Flowbite, Label, TextInput } from "flowbite-react";
import Swal, { } from 'sweetalert2'
import Link from 'next/link';
import { useState } from "react";
import { EncryptedToken } from "../../utils/Encrypted/encryptedCookie";
import { loginFormat } from "../../utils/interfaces/loginFormat";
import { EnvironmentLogin } from "./ButtonLogin";
import { NotificationSuccess } from "../../utils/SweetLibrary/SuccessNotification";
import { useRouter } from 'next/navigation';
import { ErrorNotification } from "../../utils/SweetLibrary/ErrorNotification";

type Props = {}

async function getLogin(data: loginFormat, router: any) {

    let mensajeError='';
    const headers = {
        'content-type': 'application/json',
    }
    const requestBody = {
        query: `query Login($loginInput: LoginInput!) {
        login(loginInput: $loginInput) {
          token
        }
      }`,
        variables: {
            loginInput: {
                addressEmail: data.email,
                password: data.password
            }
        }
    };
    const options = {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers
    };
    
    try {

        const response = await (await fetch('http://localhost:3000/graphql', options)).json();
        if (response.errors == undefined) {

            let login = await (await fetch("/api/login", {
                method: 'POST',
                body: JSON.stringify({ token: response?.data.login.token }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })).json();
            if (login.success != undefined) {
                NotificationSuccess.successNotificationLogin("Usuario logueado correctamente");
                router.push('/social');
                return;
            }
        }
        let errores = response.errors[0].extensions.response;
        mensajeError = (typeof errores.message) == 'object' ? errores.message[0] : errores.message;
    } catch (error:any) {
        mensajeError= error.message;
    }
        ErrorNotification.errorNotificationLogin(mensajeError);








}

const FormLogin = (props: Props) => {
    const [data, setData] = useState({ email: '', password: '' });
    const router = useRouter();
    console.log("renderizado")
    return (

        <>

            <h2 className='text-xl pb-5 pt-7 '>BIENVENIDO A WAROOM</h2>
            <form className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Usuario"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        type="email"
                        placeholder="name@waroom.com"
                        required={true}
                        shadow={true}
                        value={data.email}
                        onChange={(e) => {
                            setData({ ...data, email: e.target.value })
                        }}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Password"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        type="password"
                        required={true}
                        shadow={true}
                        value={data.password}
                        onChange={(e) => {
                            setData({ ...data, password: e.target.value })
                        }}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">
                        Recordarme
                    </Label>
                </div>

                <div>

                    <Button onClick={(event) => {
                        event.preventDefault();
                        getLogin({
                            email: data.email
                            , password: data.password,

                        }, router);
                    }} >Iniciar sesion</Button>

                </div>

            </form>
            <div className='pt-2'>
                <p className='text-sm inline-block'>No tienes una cuenta?</p>
                <Link href='/register' className='hover:text-blue-600'>
                    <p className='text-sm inline-block pl-2'>Registrate</p>
                </Link>
            </div>

        </>
    )
}

export default FormLogin