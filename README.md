# TaskFlow

TaskFlow es una aplicación móvil desarrollada con React Native y Expo.

El proyecto cuenta con una estructura organizada en componentes, pantallas, recursos y constantes de estilos, permitiendo continuar incorporando nuevas funcionalidades en los próximos módulos.

## Estructura del proyecto

- `src/components`: componentes reutilizables de la interfaz.
- `src/screens`: pantallas principales de la aplicación.
- `src/assets`: imágenes y recursos locales.
- `src/constants`: colores y constantes utilizadas en la aplicación.

## Pantallas implementadas

- `HomeScreen`: pantalla base para mostrar las tareas.
- `ProfileScreen`: pantalla de perfil del usuario.

## Componentes implementados

- `ProfileCard`: componente reutilizable que recibe mediante props el nombre, rol e imagen del usuario.

Actualmente, `ProfileScreen` utiliza `ProfileCard` para mostrar datos de prueba y verificar el funcionamiento del componente.

## Ejecución local

1. Instalar las dependencias:

   npm install

2. Iniciar el proyecto con Expo:

   npx expo start

3. Abrir la aplicación utilizando Expo Go, un emulador compatible o la versión web.

## Visualización

Se logró visualizar correctamente `ProfileScreen`, mostrando el componente `ProfileCard` con el nombre, rol e imagen del usuario.