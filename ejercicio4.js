// Tabla de Usuarios:

// Atributos:
// UserID (PK)
// Nombre
// Email
// Contraseña
// Otros atributos según sea necesario
// Tabla de Vídeos:

// Atributos:
// VideoID (PK)
// Titulo
// Descripción
// URL
// Fecha de subida
// Duración
// AutorID (FK referenciando UserID en la tabla de Usuarios)
// Otros atributos según sea necesario
// Tabla de Autores:

// Atributos:
// AutorID (PK, también es una FK referenciando UserID en la tabla de Usuarios)
// Nombre
// Otros atributos según sea necesario
// Tabla de Colaboradores:

// Atributos:
// ColaboradorID (PK)
// Nombre
// Otros atributos según sea necesario
// Tabla de Comentarios:

// Atributos:
// ComentarioID (PK)
// Texto
// Fecha de publicación
// UserID (FK referenciando UserID en la tabla de Usuarios)
// VideoID (FK referenciando VideoID en la tabla de Vídeos)
// Otros atributos según sea necesario
// Tabla de Reviews:

// Atributos:
// ReviewID (PK)
// Puntuación
// Comentario
// Fecha de publicación
// UserID (FK referenciando UserID en la tabla de Usuarios)
// VideoID (FK referenciando VideoID en la tabla de Vídeos)
// Otros atributos según sea necesario