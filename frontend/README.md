# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



## Création du fichier frontend :
Yarn create vite 

## Les dependances du frontend :
yarn add axios jwt-decode react-hook-form react-router-dom

## Arborescence du Frontend :

frontend/
├─ public/
│ └─ index.html
│
├─ src/
│ ├─ api/
│ │ └─ axios.js                # Instance Axios + interceptors
│  │
│ ├─ components/
│ │     ├─ Layout.jsx/    
│ │          ├─ Header.jsx    
│ │          ├─ Footer.jsx   
│ │          ├─ Navbar.jsx                                                   
│ │ ├─ Form.jsx                # Formulaire générique réutilisable
│ │ └─ Loader.jsx              # Chargement global (optionnel)
│ │ └─ LogoutBtn.jsx              
│  │
│ ├─ contexte/
│ │ └─ AuthContext.jsx          # Authentification globale
│  │
│ ├─ routes/
│ │ └─ PrivateRoute.jsx        # Protection des routes
│  │
│ ├─ pages/
│ │ ├─ Login.jsx               # Page login
│ │ ├─ Register.jsx           # Page register
│ │ ├─ Dashboard.jsx      # Zone protégée
│  │ |─ Accueil.jsx      
│  │ |─ Contact.jsx      
│  │ |─ Restaurant.jsx 
│  │ |─ Reservations.jsx      
│  │
│ ├─ hooks/
│ │ └─ useAuth.js              # Hook d’accès au contexte (optionnel)
│  │
│ ├─ styles/
│ │ └─ main.css                # Styles globaux
│  │
│ ├─ App.jsx                    # Router + Providers
│  └─ main.jsx                   # Point d’entrée React
│
├─ .env                          # Variables d’environnement
├─ package.json
└─ vite.config.js

## Les dependances installées:
 -axios: pour pouvoir communiquer avec le backend en utilisant des requêtes
 -jwt-decode:  pour deshacher le token
 -react-hook-form:  pour les formulaires de contacts
 -react-router-dom :  pour les routes de mes pages
 -"@demark-pro/react-booking-calendar" : pour installer un calendrier pour les reservations
