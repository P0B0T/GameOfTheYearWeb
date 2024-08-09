## GameOfTheYearWeb - Браузерная игра, созданная на основе [GameOfTheYear](https://github.com/Empyiness/GameOfTheYear_v1.3).
**GameOfTheYearWeb** - это веб-приложение, разработанное на ASP .NET Core MVC с использованием Razor Pages, HTML5 + CSS + Boostrap v5.3, Type Script ES6 + JQuery, 
которое предназвачено для проведения досуга.
## Возможности
- **Одиночная игра**: Перемещайтесь по карте, собирая монеты, но учтите, что скорость довольно высокая! При желании сохраните свой результат в конце игры.
- **Режим на двух игроков**: Соревнуйтесь с другом в количестве набранных очнов (режим предполагает игру на одном устройстве).
## Требования для запуска проекта
- **Версия Visual Studio не ниже 2022 с установыленными инструментами для разработки на ASP.NET**
- **Версия .NET Core 8.0**
- **Type Script ES6**
## Установка Type Script##
 В консоль windows ввести "**npm install -g typescript**".
## Возможные ошибки**
- **"nmp" не является внутренней или внешней командой, исполняемой программой или пакетным файлом**
  Установите [node.js](http://nodejs.org/en).
- **Имя "npm" не распознано как имя командлера, функции, файла сценария или выполнения программы. ...**
  Откройте PowerShell от имени администратора и введите "**Set-ExecutionPolicy Unrestricted -Scope CurrentUser**", далее введите "**Y**".
- **Build:Cannot find name '$'. Do you nedd to install type definitions for jQuery? Try 'npm i --save-dev @types/jquery'**
  Откройте терминал Visual Studio и введите "**npm i --save-dev @types/jquery**". Перезапустите IDE.
- **(TS) Property 'modal' does not exist on type 'JQuery<HTMLElement>'**
  Откройте терминал Visual Studio и введите "**npm install @types/bootstrap**". Перезапустите IDE.
## Лицензия
Проект распространяется под лицензией MIT. Подробности смотрите в файле [LICENSE](https://github.com/P0B0T/GameOfTheYearWeb/blob/master/LICENSE.md). 
## Обратная связь
- **[Telegram](https://t.me/P0B0T)**
- Email: Noobmine1@yandex.ru
