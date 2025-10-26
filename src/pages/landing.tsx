import './landing.css';
import Header from '../ui/header/header';
import PresentationCard from '../ui/presentationCard/presentationCard';
import OtherCard from '../ui/otherCard/otherCard';
import TextContainer from '../ui/textContainer/textContainer';
import IconCard from '../ui/iconCard/iconCard';
import LeftCard from '../ui/leftCard/leftCard';
import RightCard from '../ui/rightCard/rightCard';
import Footer from '../ui/footer/footer';
import Separator from '../ui/separator/separator';

import ag from '../assets/icons/Ag.png';
import pln from '../assets/icons/pln.png';
import ml from '../assets/icons/ml.png';
import llm from '../assets/icons/llm.png';

import plantimg1 from '../assets/decoration/plantimg1.png'
import plantimg2 from '../assets/decoration/plantimg2.png'
import plantimg3 from '../assets/decoration/plantimg3.png'
import plantimg4 from '../assets/decoration/plantimg4.png'
//data new-

export default function Landing() {
    return (
        <div className='page isLight'>
            <Header />
            <div className='container landing'>
                <PresentationCard />
                <OtherCard />
                <Separator />
                <TextContainer title='Objetivo' content='El proyecto busca fomentar la adopción de huertos urbanos como práctica sostenible y accesible, aportando beneficios ambientales, económicos y de salud, especialmente en entornos urbanos con alta dependencia de cadenas comerciales y escasa cultura agrícola.' />
                <Separator />
                <TextContainer title='Tecnologías usadas' content=
                    'Las siguientes tecnologías permiten que la aplicación ofrezca funcionalidades robustas en conceptos básicos y adaptabilidad contextual, facilitando la gestión asistida de huertos desde su creación hasta su mantenimiento.' />
                <div className='pillars'>
                    <IconCard text='Algoritmo genetico' image={ag} />
                    <IconCard text='Procesador de lenguaje natural' image={pln} />
                    <IconCard text='Aprendizaje automatico' image={ml} />
                    <IconCard text='Modelo de lenguaje grande' image={llm} />
                </div>
                <Separator />
                <LeftCard title='Algoritmo Genetico' text=
                    'Herramienta modelada y estructurada que permite al usuario diseñar un huerto ideal con especificaciones personalizadas, considerando la compatibilidad entre plantas, consumo de agua y espacio requerido. Ideal para principiantes con poco o ningún conocimiento en agricultura.'
                    image={plantimg2}
                />
                <RightCard title='Procesador de lenguaje natural' text=
                    'Herramienta de aprendizaje asistido contextualizada a la agricultura en Suchiapas, Chiapas, que facilita la mejora continua mediante funciones que permiten al usuario generar un huerto personalizado con un simple prompt. Incluye módulos de aprendizaje informativo y evaluativo que orientan al usuario sobre temas agrícolas desconocidos.'
                    image={plantimg1}
                />
                <LeftCard title='Machine Lerning' text=
                    'Herramienta de recomendaciones personalizadas que proporciona sugerencias, recordatorios y predicciones sobre el estado y desarrollo de los huertos del usuario, adaptándose a su comportamiento e interacciones en la aplicación.'
                    image={plantimg3}
                />
                <RightCard title='Modelo de lenguaje grande' text=
                    'Herramienta de procesamiento de lenguaje natural que genera respuestas inteligentes y coherentes, contextualizadas automáticamente según el análisis del prompt. Determina dinámicamente si la respuesta debe ser de carácter evaluativo o educativo, asegurando que la información recuperada del lago de datos sea relevante y valiosa para el usuario.  '
                    image={plantimg4}
                />
                <Separator />
                <div className='linkButton'>
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLScx0uNh0vLqjdkb7HTuxijmu7htbMvc8HfTy5XyUbXjIj4esA/viewform?usp=dialog' className='title'>¿Te importaria responder algunas preguntas?</a>
                </div>
            </div>
            <Footer />
        </div>
    );
}