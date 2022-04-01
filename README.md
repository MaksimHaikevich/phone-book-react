# react-phone-book

## Запуск проекта осуществляется из корневой папки `react-phone-book` c помощью `docker-compose`

### Введите в консоль/терминал `docker-compose up`

### Проект запустится на `http://localhost:3000/`

#### Если проект не запускается с помощью `docker-compose up`, то проверьте свои, уже существующие, images и containers 

## Для запуска через `yarn`

### Введите в терминал/консоль в директории 
`react-phone-book\phone-book` команду `yarn` для установки node_modules

### затем `yarn start` для запуска проекта на
### `http://localhost:3000/`

## Запуск docker контейнера

### 1. `docker build .` в директории `react-phone-book\phone-book`
### 2. `docker images` для просмотра images
### 3. `docker run -p 3000:3000 IMAGE ID` для запуска контейнера ,
#### Пример: `docker run -p 3000:3000 543474e0510c`

#### Контейнер запустится на `http://localhost:3000/`

## для остановки контейнера : 
### 1.`docker ps` для просмотра активных конейнеров.
### 2.`docker stop CONTAINER ID` для остановки контейнера
#### Пример: `docker stop cf1a969b2dfe`

# React, Redux, Formik, react-redux, Material UI, SCSS, Prettier, uuid
