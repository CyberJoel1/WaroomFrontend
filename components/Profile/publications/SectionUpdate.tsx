import { Button, FileInput, Label, TextInput } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import { ErrorNotification } from '../../../utils/SweetLibrary/ErrorNotification';
import { NotificationSuccess } from '../../../utils/SweetLibrary/SuccessNotification';
import { updateFormat } from '../../../utils/interfaces/updateFormat';
import { useRouter } from 'next/router';
import { CONFIG } from '../../../utils/Config/host';

type Props = {}
function nameComplete(nombres: any): string {
    const { firstName, twoName, firstSurName, lastSurName } = nombres;

    let returnName = firstName + " " + twoName + " " + firstSurName + " " + lastSurName;
    return returnName;
}

async function registerUser(data: updateFormat, repeatPassword: string) {
    let mensajeError = '';
    try {
        (Object.keys(data) as (keyof typeof data)[]).forEach((key, index) => {
            if (data[key] === '') {
                throw new Error('Hay datos faltantes');
            }
        });
        if (data.password !== repeatPassword) {
            throw new Error("Por favor verifica que las contraseñas sean iguales");
        }

        let login = await (await fetch("/api/profile", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })).json();
        const headers = {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + login.token,
        }
        const requestBody = {
            query: `mutation UpdateUser($updateUser: UpdateUserInput!) {
                updateUser(updateUser: $updateUser) {
                  message
                }
              }`,
            variables: {
                updateUser: {
                    id: 4,
                    fullName: data.fullName
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
            NotificationSuccess.successNotificationLogin(response.message);
            return;
        }
        let errores = response.errors[0].extensions.response;
        mensajeError = (typeof errores.message) == 'object' ? errores.message[0] : errores.message;
    } catch (error: any) {
        mensajeError = error.message;
    }

    ErrorNotification.errorNotificationLogin(mensajeError);
}


const SectionUpdate = (props: Props) => {
    let initialValue={ userName: '', addressEmail: '', identification: '', fullName: '', password: '' };
    const [dataRegister, setData] = useState<updateFormat>(initialValue);
    const [nombreCompleto, setNombreCompleto] = useState<any>({ firstName: '', twoName: '', firstSurName: '', lastSurName: '' });
    const [repeatPassword, setRepeatPasswor] = useState("");
    const [accion, setAccion] = useState(false);


    useEffect(() => {
      if(dataRegister!==initialValue){
        registerUser(dataRegister, repeatPassword);
      }
    
      return () => {
        
      }
    }, [accion])
    
    return (

        <div>
            <h2 className='text-xl text-center pb-5 pt-3 '>Actualiza tu información</h2>
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
                            value="Anterior password"
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
                <div id="fileUpload" className='col-span-2'>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="file"
                            value="Subir foto de perfil"
                        />
                    </div>
                    <FileInput
                        id="file"
                        helperText="Subo tu foto de perfil, si quieres que los demás te vean"
                    />
                </div>
                <div className='col-span-2'>

                    <Button onClick={() => {
                        setData({ ...dataRegister, fullName: nameComplete(nombreCompleto) });
                        setAccion(!accion);
                    }}>Actualizar</Button>

                </div>

            </form>

        </div>
    )
}

export default SectionUpdate