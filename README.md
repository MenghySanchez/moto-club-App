
Estrutura de directorios: 

/src
  /components
    /clubs
      - ClubForm.js  (Crear club)
      - ClubList.js  (Lista de clubes)
    /events
      - EventForm.js (Crear eventos)
      - EventList.js (Lista de eventos)
    /members
      - MemberProfile.js (Perfil del miembro)
      - MemberList.js (Miembros del club)
    /tasks
      - TaskForm.js (Crear tareas)
      - TaskList.js (Lista de tareas)
    /store
      - StoreItem.js (Artículo en la tienda)
      - StoreList.js (Lista de artículos)
  /context
    - AuthContext.js (Autenticación)
    - ClubContext.js (Gestión de clubes)
  /pages
    - Home.js
    - Login.js
    - Dashboard.js
  /utils
    - api.js (Configuración de API)
    - constants.js
  /styles
    - App.css
  App.js
  index.js

________________________________________________________________________________________________________________________________________________

A. Registro y Autenticación
	•	Usuarios pueden registrarse y loguearse.
	•	Roles: Diferencia entre líder de club y miembro.
	•	Autenticación: JWT (JSON Web Token) para manejar sesiones.

B. Gestión de Clubes
	1.	Crear Club:
	•	Solo los líderes pueden crear clubes.
	•	Cada club tiene un logo y se asocia con una provincia.
	2.	Unirse a un Club:
	•	Usuarios pueden buscar y unirse a clubes.
	•	Los líderes aprueban o rechazan solicitudes.
	3.	Asignar Roles:
	•	Líderes asignan roles como moderador o miembro regular.

C. Perfiles de Miembros
	•	Cada miembro debe llenar un perfil con:
	•	Datos personales.
	•	Información de contacto.
	•	Datos médicos y de emergencia.
	•	Información de la motocicleta.

D. Eventos
	1.	Eventos Privados y Públicos:
	•	Los eventos privados son solo para miembros del club.
	•	Los eventos públicos son visibles para todos los clubes.
	2.	Eventos Colaborativos:
	•	Crear eventos con múltiples clubes.

E. Tareas y Programa de Recompensas
	•	Líderes asignan tareas a miembros.
	•	Completar tareas aumenta el nivel del miembro.

F. Mini Tienda del Club
	•	Cada club puede publicar artículos a la venta para sus miembros.

G. Actividad entre Clubes
	•	Sistema de puntos para medir la actividad de los clubes.

________________________________________________________________________________________________________________________________________________