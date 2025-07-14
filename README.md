## Опис проекту (українською)

Цей проект — перший навчальний приклад на React з використанням TypeScript. Основна мета — ознайомлення з базовими концепціями React, створення компонентів, використання props та стану (state), а також організація структури проекту.

### Що реалізовано

- Створено компонент Button, який генерує випадкове число у заданому діапазоні при натисканні.
- Використано props для передачі параметрів min та max у компонент.
- Реалізовано просту логіку зміни стану (useState).
- Організовано структуру проекту для зручності розробки.

### Структура проекту

```
src/
  components/
    Button.tsx      # Компонент кнопки для генерації випадкового числа
  utils/
    randomizer.ts   # Функція для генерації випадкових чисел
  App.tsx           # Головний компонент додатку
  main.tsx          # Точка входу
  index.css         # Глобальні стилі
```

### Як запустити проект

1. Встановіть залежності:
   ```
   npm install
   ```
2. Запустіть проект у режимі розробки:
   ```
   npm run dev
   ```
3. Відкрийте браузер за адресою [http://localhost:5173](http://localhost:5173) (або порт, вказаний у консолі).

---

## Project Description (English)

This project is the first learning example using React and TypeScript. The main goal is to get familiar with React basics, component creation, using props and state, and organizing project structure.

### Implemented Features

- Created a Button component that generates a random number within a given range on click.
- Used props to pass min and max parameters to the component.
- Implemented simple state logic with useState.
- Organized the project structure for development convenience.

### Project Structure

```
src/
  components/
    Button.tsx      # Button component for random number generation
  utils/
    randomizer.ts   # Function for generating random numbers
  App.tsx           # Main application component
  main.tsx          # Entry point
  index.css         # Global styles
```

### How to Run the Project

1. Install dependencies:
   ```
   npm install
   ```
2. Start the development server:
   ```
   npm run dev
   ```
3. Open your browser at [http://localhost:5173](http://localhost:5173) (or the port shown in the console).
