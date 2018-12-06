*Основы React.js*

*План занятия*
1. Вводная информация - что такое React, почему популярен, когда используют
2. Понятие Virtual DOM, React Reconsiliation
3. Что такое JSX
5. Настройка небольшого проекта на React.js, NPM, React Devtools, Eslint
6. Компоненты, рендеринг
7. Рендеринг списков, аттрибут key
8. Events
9. Практика

*Project setup*
1. git clone https://github.com/notfffMe/react-basics.git
2. cd react-basics
3. npm install
4. npm run dev

*Eslint Setup*
1. npm --save-dev install eslint
2. npm --save-dev install eslint-loader
3. ./node_modules/.bin/eslint --init
4. npm install --save-dev babel-loader
5. npm install --save-dev babel-eslint
6. npm --save-dev install eslint-plugin-react

*Images Handling*
1. npm install url-loader file-loader --save-dev

*Задания*
1. Создать универсальный компонент для рендеринга списка
2. Создать компонент для отображения полного/неполного текста
3. Добавить обработчик клика на последний элемент списка, который выводит его имя