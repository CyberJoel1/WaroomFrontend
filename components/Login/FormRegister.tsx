"use client";
import React, { useEffect } from 'react'
import { Button, Checkbox, Flowbite, Label, Select, TextInput } from "flowbite-react";
import Link from 'next/link';
import { useState } from "react";
import { registerFormat } from '../../utils/interfaces/registerFormat';
import { NotificationSuccess } from '../../utils/SweetLibrary/SuccessNotification';
import { ErrorNotification } from '../../utils/SweetLibrary/ErrorNotification';
import { useRouter } from 'next/navigation';
import { CONFIG } from '../../utils/Config/host';
type Props = {}



 async function nameComplete(nombres: any): Promise<string> {
    const { firstName, twoName, firstSurName, lastSurName } = nombres;

    let returnName = firstName + " " + twoName + " " + firstSurName + " " + lastSurName;
    return  returnName;
}

async function registerUser(data: registerFormat, router: any, repeatPassword: string) {
    let mensajeError = '';
    try {
       
        (Object.keys(data) as (keyof typeof data)[]).forEach((key, index) => {
            if (data[key] === '') {
                throw new Error('Hay datos faltantes'+ key);
            }
        });
        if (data.password !== repeatPassword) {
            throw new Error("Por favor verifica que las contraseñas sean iguales");
        }
        const headers = {
            'content-type': 'application/json',
        }
        const requestBody = {
            query: `mutation Mutation($createUserInput: CreateUserInput!) {
            usercreate(createUserInput: $createUserInput) {
              userName
            }
          }`,
            variables: {
                createUserInput: {
                    fullName: data.fullName,
                    identification: data.identification,
                    password: data.password,
                    userName: data.userName,
                    dateBirth: data.dateBirth,
                    addressEmail: data.addressEmail
                }
            }

        };

        const options = {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers
        };

        const response = await (await fetch(CONFIG.host+'/graphql', options)).json();

        if (response.errors == undefined) {
            NotificationSuccess.successNotificationLogin("Se ha registrado correctamente");
            router.push('/login');
            return;
        }
        let errores = response.errors[0].extensions.response;
        mensajeError = (typeof errores.message) == 'object' ? errores.message[0] : errores.message;
    } catch (error: any) {
        mensajeError = error.message;
    }

    ErrorNotification.errorNotificationLogin(mensajeError);
}

const FormRegister = (props: Props) => {
    let initialValue = { userName: '', addressEmail: '', identification: '', fullName: '', password: '' };
    const [dataRegister, setData] = useState<registerFormat>(initialValue);
    const [nombreCompleto, setNombreCompleto] = useState<any>({ firstName: '', twoName: '', firstSurName: '', lastSurName: '' });
    const [repeatPassword, setRepeatPasswor] = useState("");
    const [accion, setAccion] = useState(false);
    const router = useRouter();
    useEffect(() => {
        
        }, [])


    useEffect(() => {
        if(dataRegister!==initialValue){
        registerUser(dataRegister, router, repeatPassword);
        setData(initialValue);
    }   
        }, [accion])
    
    
    return (
        <div>
            <h2 className='text-xl text-center pb-5 pt-7 '>Formulario de registro</h2>
            <form className="grid grid-flow-col-2 gap-4">
                <div className='col-span-2 md:col-span-1'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Primer nombre"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        type="text"
                        placeholder="Mishell"
                        required={true}
                        shadow={true}
                        onChange={(e) => {
                            setNombreCompleto({ ...nombreCompleto, firstName: e.target.value });
                        }}
                        value={nombreCompleto.firstName}

                    />
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Segundo nombre"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        type="text"
                        placeholder="Estefania"
                        required={true}
                        shadow={true}
                        value={nombreCompleto.twoName}
                        onChange={(e) => {
                            setNombreCompleto({ ...nombreCompleto, twoName: e.target.value });
                        }}
                    />
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Primer apellido"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        type="text"
                        placeholder="Monteros"
                        required={true}
                        shadow={true}
                        value={nombreCompleto.firstSurName}
                        onChange={(e) => {
                            setNombreCompleto({ ...nombreCompleto, firstSurName: e.target.value });
                        }}
                    />
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Segundo apellido"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        type="text"
                        placeholder="Torres"
                        required={true}
                        shadow={true}
                        value={nombreCompleto.lastSurName}
                        onChange={(e) => {
                            setNombreCompleto({ ...nombreCompleto, lastSurName: e.target.value });
                        }}
                    />
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Fecha de nacimiento"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        type="date"

                        required={true}
                        shadow={true}
                        onChange={(e) => {
                            setData({ ...dataRegister, dateBirth: new Date(e.target.value) })
                        }}

                    />
                </div>
                <div className='col-span-2 md:col-span-1'>
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
                        value={dataRegister.password}
                        onChange={(e) => {
                            setData({ ...dataRegister, password: e.target.value });
                        }}

                    />
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Repeat password"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        type="password"
                        required={true}
                        shadow={true}
                        value={repeatPassword}
                        onChange={(e) => {
                            setRepeatPasswor(e.target.value);
                        }}
                    />
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Usuario"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        type="email"
                        placeholder="joel11"
                        required={true}
                        shadow={true}
                        value={dataRegister.userName}
                        onChange={(e) => {
                            setData({ ...dataRegister, userName: e.target.value });
                        }}

                    />
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Correo electronico"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        type="email"
                        required={true}
                        shadow={true}
                        value={dataRegister.addressEmail}
                        onChange={(e) => {
                            setData({ ...dataRegister, addressEmail: e.target.value });
                        }}
                    />
                </div>

                <div className='col-span-2 md:col-span-1'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="identification"
                            value="Numero de identificación"
                        />
                    </div>
                    <TextInput
                        id="identification"
                        type="text"
                        required={true}
                        shadow={true}
                        value={dataRegister.identification}
                        onChange={(e) => {
                            setData({ ...dataRegister, identification: e.target.value });
                        }}

                    />
                </div>


                <div className='col-span-2 md:col-span-1'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="direccion"
                            value="Domicilio"
                        />
                    </div>
                    <TextInput
                        id="identification"
                        type="text"
                        required={true}
                        shadow={true}

                    />
                </div>

                <div className='col-span-2 md:col-span-1'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="countries"
                            value="Selecciona tu sexo o si eres una empresa"
                        />
                    </div>
                    <Select
                        id="countries"
                        required={true}
                    >
                        <option>
                            Masculino
                        </option>
                        <option>
                            Femenino
                        </option>
                        <option>
                            Empresa
                        </option>
                        <option>
                            No definido
                        </option>
                    </Select>
                </div>

                <div className='col-span-2'>

                    <Button onClick={async (e) => {
                        e.preventDefault();
                        setData({ ...dataRegister, fullName: await nameComplete(nombreCompleto) });
                        setAccion(!accion);
                    }}>Registrarse</Button>

                </div>

            </form>

        </div>
    )
}

export default FormRegister