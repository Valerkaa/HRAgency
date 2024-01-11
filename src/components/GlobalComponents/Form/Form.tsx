import { useEffect, useMemo, useState} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {
    type Container,
    type ISourceOptions,
} from "@tsparticles/engine";
import {loadSlim} from "@tsparticles/slim";
import styles from "./form.module.scss"
import 'react-phone-input-2/lib/style.css'
import {useForm} from "react-hook-form";
import PhoneInput from 'react-phone-input-2'

import {validEmail, validNaming, validPhone} from "./Validation";



export function Form(this: any) {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
    };

    // @ts-ignore
    const options: ISourceOptions = useMemo(
        () => ({
            style:{
              width:100,
              height:100,
              position:"absolute",
            },
            fpsLimit: 120,
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    enable: true,
                    speed: 3,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 160,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: {min: 1, max: 3},
                },
            },
        }),
        [],
    );

    type FormDataValue = {
        firstName: string,
        lastName: string,
        email: string,
        phone: string
    }
    const {register, handleSubmit, formState: {errors,touchedFields}} = useForm<FormDataValue>();
    const onSubmit = (data: any) => {
        console.log(data);
    };
    // @ts-ignore
    return (
        <section className={styles.formWrap}>
            <Particles
                id="tsparticles" className={styles.tsparticlesCanv}

                particlesLoaded={particlesLoaded}
                options={options}
            />

            <form onSubmit={handleSubmit(onSubmit)} className={styles.formSend}>

                <input type="text" {...register("firstName", {required: true, min: 2})}
                       className={`${styles.nameValid}`} placeholder="First name" onChange={validNaming} />
                <input type="text" {...register("lastName", {required: true, min: 2})} name="lastName"
                       className={styles.lastnameValid} placeholder="Last name" onChange={validNaming}/>
                <input type="text" className="email-valid" placeholder="Email" {...register("email", {
                    required: true,
                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                })} onChange={validEmail} />
                <PhoneInput
                    onChange={validPhone}
                    inputProps={{
                        name: 'phone',
                        required: true,

                    }}
                    onlyCountries={['ua']}
                    placeholder="Введіть номер телефона"
                    country={'ua'}

                />
                <button type="submit" className={styles.sendBtn}>Submit a request</button>
            </form>
        </section>
    )
}