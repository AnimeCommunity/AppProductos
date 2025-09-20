# App Productos

Aplicación de ejemplo en **Next.js + TypeScript + Redux Toolkit + Material UI (MUI)**  
Permite gestionar productos (crear, editar, eliminar, listar).

---

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/AnimeCommunity/AppProductos
cd my-products-app
```

2. Instalar dependencias:

```bash
npm install
# o con yarn
yarn install
```

---

## Configuración de variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto con el siguiente contenido:

```env
# Ejemplo de API base URL (ajústalo según tu backend)
NEXT_PUBLIC_API_URL=http://localhost:4000/api
```

---

## ▶Ejecución del proyecto

Para iniciar el servidor en modo desarrollo:

```bash
npm run dev
# o con yarn
yarn dev
```

La app estará disponible en **http://localhost:3000** 

---

## Construcción para producción

```bash
npm run build
npm start
```

---

## Tecnologías usadas

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Material UI](https://mui.com/)

---

## Funcionalidades principales

- ➕ Agregar productos
- ✏️ Editar productos (modal)
- ❌ Eliminar productos
- 📋 Listado de productos con MUI

---

## 📌 Notas

- Puedes personalizar las categorías de productos en el store.
- Si quieres desplegar en **Vercel**, solo debes conectar tu repo y las variables de entorno se configurarán automáticamente.
