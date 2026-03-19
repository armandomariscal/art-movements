# 🎨 Art Movements Manager

Sistema de gestión de movimientos artísticos desarrollado con el stack **MEVN** (MongoDB, Express, Vue 3, Node.js). El proyecto aplica principios de **Clean Architecture** y **Domain-Driven Design (DDD)** para garantizar escalabilidad y mantenimiento.

---

## 🚀 Tecnologías
* **Frontend:** Vue 3, Vite, Tailwind CSS v4, TypeScript.
* **Backend:** Node.js, Express, TypeScript, MongoDB.
* **DevOps:** Docker, Docker Compose, CI/CD & Automation.

---

## 🏗️ Estructura del Proyecto

El repositorio está organizado siguiendo la separación de intereses (SoC):

### 📂 `backend/` (Clean Architecture)
* **Domain:** Entidades de arte y reglas de negocio puras (ej. `Movement.ts`).
* **Application:** Casos de Uso que orquestan la lógica (ej. `GetMovements.ts`).
* **Infrastructure:** Implementaciones técnicas: Controladores, rutas y conexión a MongoDB.

### 📂 `frontend/` (Modular DDD)
* **Core:** Elementos transversales como el `Navbar.vue` y configuraciones globales.
* **Modules:** * `home`: Vistas de aterrizaje (Landing Page).
    * `movements`: El corazón del CRUD (Interfaz, estados y servicios API).

---

## 🛠️ Instalación y Uso

### Requisitos previos
* Node.js (v18+)
* Docker & Docker Compose
* Extensión **Volar (Vue - Official)** para VS Code.

### Pasos para el arranque

1.  **Clonar el repositorio:**
    ```bash
    git clone <url-del-repo>
    cd art-movements
    ```

2.  **Levantar Base de Datos (Docker):**
    ```bash
    docker-compose up -d
    ```

3.  **Ejecutar Frontend:**
    ```bash
    cd frontend
    npm install
    npm run dev
    ```

4.  **Ejecutar Backend:**
    ```bash
    cd backend
    npm install
    npm run dev
    ```

---

## 👨‍💻 Autor
* **Armando Mariscal** - Software Developer.