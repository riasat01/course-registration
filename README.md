# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

#Assignment question's answer

##Features I have added in my project
1. responsive layout for laptop, tablet and mobile
2. cart that contains total credits taken, remaining credits available, and a list of course title that is taken
3. cards data loaded from json maintaining 'similar in looks different in data

##The way I have managed my states

There are total 6 states in my project. One in Courses component and other five are in App component. For the states in App I have defined a function named handleSelect which checks two condition and updates the states accordingly. The state in Courses component is updated through a useEffect hook that is used to fetch data from json file.
