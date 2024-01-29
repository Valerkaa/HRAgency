import {useEffect, useMemo, useState} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {
    type Container,
    type ISourceOptions,
} from "@tsparticles/engine";
import {loadSlim} from "@tsparticles/slim";
import styles from "./form.module.scss"
import 'react-phone-input-2/lib/style.css'
import {Controller, useForm} from "react-hook-form";
import PhoneInput from 'react-phone-input-2'

import {validEmail, validNaming, validPhone, validSelect} from "./Validation";
import sendTelegramNotification from "../../../api/telegramApi";
import Modal from "./modal";
import {Simulate} from "react-dom/test-utils";
import reset = Simulate.reset;


export function Form(this: any) {
    // eslint-disable-next-line
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
            style: {
                width: 100,
                height: 100,
                position: "absolute",
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
        fullName: string,
        vacancy: string,
        email: string,
        phone: string,
        employment: string,
        city: string,
        experience: string,
        englvl: string,
    }
    // eslint-disable-next-line
    const {register, handleSubmit, control, formState: {errors},reset, setValue} = useForm<FormDataValue>();
    const onSubmit = (data: any) => {
        console.log(data);
        toggleModal()
        sendTelegramNotification(data)
        reset()
    };
    const [showModal, setShowModal] = useState<boolean>(false);
    function toggleModal() {
        setShowModal(!showModal);
    }
    console.log(errors)
    return (
        <section className={styles.formWrap}>
            <Particles
                id="tsparticles" className={styles.tsparticlesCanv}

                particlesLoaded={particlesLoaded}
                options={options}
            />
            <Modal open={showModal} onClose={toggleModal}>
                <div className={styles.modaltext}>
                    Ваша заявка успішно зареєстрована!✅
                </div>
            </Modal>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.formSend}>

                <input type="text" {...register("fullName", {required: true, min: 2})}
                       className={`${styles.nameValid} ${errors.fullName ? styles.activeInvalid : ""}`}
                       placeholder="First name" onChange={validNaming}/>
                <input type="text" {...register("vacancy", {required: true, min: 2})}
                       className={`${styles.lastnameValid} ${errors.vacancy ? styles.activeInvalid : ""}`}
                       placeholder="Last name" onChange={validNaming}/>
                <input type="text" className={`${errors.email ? styles.activeInvalid : ""}`}
                       placeholder="Email" {...register("email", {
                    required: true,
                    // eslint-disable-next-line
                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                })} onChange={validEmail}/>
                <select  {...register("employment", {required: true})}
                         className={`${errors.employment ? styles.activeInvalid : ""}`} onChange={validSelect}>
                    <option value="">Вид зайнятості</option>
                    <option value="Повна">Повна</option>
                    <option value="Неповна">Неповна</option>
                    <option value="Відалено">Відалено</option>
                </select>
                <select {...register("city", {required: true})} className={`${errors.city ? styles.activeInvalid : ""}`}
                        onChange={validSelect}>
                    <option value="">Місто</option>
                    <option value="Усі">Усі</option>
                    <option value="Київ">Київ</option>
                    <option value="Вінниця">Вінниця</option>
                    <option value="Дніпро">Дніпро</option>
                    <option value="Івано-Франківськ">Івано-Франківськ</option>
                    <option value="Житомир">Житомир</option>
                    <option value="Запоріжжя">Запоріжжя</option>
                    <option value="Львів">Львів</option>
                    <option value="Миколаїв">Миколаїв</option>
                    <option value="Одеса">Одеса</option>
                    <option value="Тернопіль">Тернопіль</option>
                    <option value="Харків">Харків</option>
                    <option value="Хмельницький">Хмельницький</option>
                    <option value="Черкаси">Черкаси</option>
                    <option value="Чернігів">Чернігів</option>
                    <option value="Чернівці">Чернівці</option>
                    <option value="Ужгород">Ужгород</option>
                </select>
                <select  {...register("englvl", {required: true})}
                         className={`${errors.englvl ? styles.activeInvalid : ""}`} onChange={validSelect}>
                    <option value="">Рівень англійської:</option>
                    <option value="Елементарний">Елементарний</option>
                    <option value="Нижчий за середній">Нижчий за середній</option>
                    <option value="Середній">Середній</option>
                    <option value="Рівень вище середнього">Рівень вище середнього</option>
                    <option value="Просунутий">Просунутий</option>
                    <option value="Вільний рівень">Вільний рівень</option>
                </select>
                <select  {...register("experience", {required: true})}
                         className={`${errors.experience ? styles.activeInvalid : ""}`} onChange={validSelect}>
                    <option value="">Досвід роботи:</option>
                    <option value="Будь-який досвід роботи">Будь-який досвід роботи</option>
                    <option value="Менше 1 року">Менше 1 року</option>
                    <option value="1-2 роки">1-2 роки</option>
                    <option value="2-3 роки">2-3 роки</option>
                    <option value="3-5 років">3-5 років</option>
                    <option value="Понад 5 років">Понад 5 років</option>
                </select>
                <Controller
                    name="phone"
                    control={control}
                    rules={{required: true}}
                    render={({field: { value}}) => (
                        <PhoneInput
                            inputProps={{
                                id: "phone",
                                name:"phone",
                                className: `${errors.phone ? styles.activeInvalid : ""} form-control`,

                            }}
                            value={value}
                            onChange={(value, data, input) => validPhone(value, data, input, setValue)}
                            onlyCountries={['ua']}
                            placeholder="Введіть номер телефона"
                            country={'ua'}
                        />
                    )}
                />

                <button type="submit" className={styles.sendBtn}>Submit a request</button>
            </form>
        </section>
    )
}