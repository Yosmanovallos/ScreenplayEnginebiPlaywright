# ScreenplayEnginebiPlaywright

## Descripción
Este proyecto utiliza **Playwright** junto con **Screenplay**, **JavaScript** y **MailSlurp** para automatizar pruebas relacionadas con la creación y verificación de suscripciones. Incluye funcionalidades para la creación de correos, Creacion de nombres de compañías, verificación de la homepage de suscripciones, verificación de los detalles de las suscripciones, flujo de compra de suscripciones y reporte de bugs.

## Tabla de Contenidos
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Funciones Principales](#funciones-principales)

## Instalación
1. Clona el repositorio:
   ```bash
   git clone https://github.com/Yosmanovallos/ScreenplayEnginebiPlaywright.git

2. npm install dotenv --save
3. npm install playwright

4. Allure Report with Playwright [Screenshots, Videos & Traces]
Step1: Install Allure Report command-line tool

npm install --save-dev allure-commandline
Step2: Install the Allure Playwright adapter.

npm install --save-dev allure-playwright
Step3: Add below config in playwright.config.js file.

reporter:[
['html'],
['allure-playwright']
],
Step4: Run Playwright tests.

npx playwright test
Step5: Generate Allure Report



## Uso

1. Playwright Report

npx playwright test

report generate when fail the test.

![image](https://github.com/Yosmanovallos/ScreenplayEnginebiPlaywright/assets/119948396/2f172725-fc63-47f9-a055-27f7adab5483)
![image](https://github.com/Yosmanovallos/ScreenplayEnginebiPlaywright/assets/119948396/377f02b3-20c5-40f9-81cf-74f59152022e)
![image](https://github.com/Yosmanovallos/ScreenplayEnginebiPlaywright/assets/119948396/976d4f2e-2789-4a4b-8472-a19fd23fd475)
![image](https://github.com/Yosmanovallos/ScreenplayEnginebiPlaywright/assets/119948396/aaf92661-4421-4188-826b-7febd1dd52df)
   
3. Allure Report (BDD framework)

npx allure serve allure-results

![image](https://github.com/Yosmanovallos/ScreenplayEnginebiPlaywright/assets/119948396/d8dac3ac-8ff2-496e-b848-2e640d7460d6)
![image](https://github.com/Yosmanovallos/ScreenplayEnginebiPlaywright/assets/119948396/45fa5ffc-03ca-4bf7-96c0-2e8d1f76f3da)
![image](https://github.com/Yosmanovallos/ScreenplayEnginebiPlaywright/assets/119948396/2736f14f-2d4a-4bfe-a64d-94338adc1006)
![image](https://github.com/Yosmanovallos/ScreenplayEnginebiPlaywright/assets/119948396/28adfb59-b74c-435a-9f68-86ee8ee5195a)


## estructura-del-proyecto

El projecto esta basado en el design pattern Screenplay

- **allure-results/**: 
  - Directorio donde se almacenan los resultados de las pruebas generados por Allure.

- **node_modules/**: 
  - Contiene las dependencias del proyecto instaladas por npm.

- **playwright-report/**:
  - Contiene los reportes generados por Playwright.

- **test-results/**:
  - Archivos de resultados específicos de cada prueba, incluyendo detalles de suscriptores, suscripciones de prueba, suscripciones mensuales y anuales, entre otros.

- **tests/**:
  - **actions/**:
    - `inputactions.js`: Manejo de acciones de entrada.
    - `listactions.js`: Acciones relacionadas con listas.
    - `navigationactions.js`: Acciones de navegación en la aplicación.
  - **actors/**:
    - `prod.json`: Configuraciones específicas para el entorno de producción.
    - `qa.json`: Configuraciones específicas para el entorno de QA.
  - **questions/**:
    - `detailsubscriptionsquestions.js`: Preguntas relacionadas con los detalles de las suscripciones.
    - `homepagequestions.js`: Preguntas para verificar elementos de la página principal.
  - **tasks/**:
    - `detailsubscriptionstask.js`: Tareas relacionadas con los detalles de las suscripciones.
    - `homepageverifytasks.js`: Tareas para verificar la página principal.
    - `subscriptionstask.js`: Tareas para gestionar suscripciones.
  - **tests**:
    - `detailsubscriptions.spec.js`: Pruebas para detalles de suscripciones.
    - `suscripcionfreetrial.spec.js`: Pruebas para suscripciones de prueba gratuita.
    - `subscriptions.spec.js`: Pruebas para suscripciones.
    - `verifycomponents.spec.js`: Pruebas para verificar componentes.

- **.env**:
  - Archivo de configuración de variables de entorno.

- **.gitignore**:
  - Archivos y directorios que Git debe ignorar.

- **package-lock.json**:
  - Archivo que asegura que las instalaciones sean reproducibles, bloqueando las versiones de las dependencias.

- **package.json**:
  - Contiene información del proyecto y las dependencias necesarias.

- **playwright.config.js**:
  - Configuración para las pruebas con Playwright.

![image](https://github.com/Yosmanovallos/ScreenplayEnginebiPlaywright/assets/119948396/2d39f011-3138-4b5e-8b4b-b70b7dbdece6)


## funciones-principales

Creacion de Companys random

generateRandomCompanyName() {
        const adjectives = ["Dynamic", "Innovative", "Global", "Leading", "NextGen", "prueba", "turebe", "tramee", "trinical", "prevelt"];
        const nouns = ["Solutions", "Technologies", "Systems", "Enterprises", "Holdings", "Concepts", "trine", "pevaar", "AWS", "applelton"];
        const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
        const noun = nouns[Math.floor(Math.random() * nouns.length)];
        return `${adjective} ${noun}`;
    }


Variables de entorno del ambiente de pruebas

![image](https://github.com/Yosmanovallos/ScreenplayEnginebiPlaywright/assets/119948396/169eb1ec-63be-4372-af00-e96c78520851)



Api de correos electronicos Mailslurp para la verificacion de la llegada de correos y la creacion de usuarios con diferentes correos electronicos

![image](https://github.com/Yosmanovallos/ScreenplayEnginebiPlaywright/assets/119948396/caeb3de8-eb46-4ac8-9793-6fdf6c62e4ff)

