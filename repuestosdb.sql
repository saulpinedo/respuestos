-- Creación de la base de datos
CREATE DATABASE repuestosdb;

-- Tabla de roles
CREATE TABLE IF NOT EXISTS "Role" (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(30) NOT NULL UNIQUE
);

-- Tabla de categorías
CREATE TABLE IF NOT EXISTS "Category" (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL UNIQUE
);

-- Tabla de marcas (depende de categoría)
CREATE TABLE IF NOT EXISTS "Brand" (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    category_id INTEGER REFERENCES "Category"(id) ON DELETE CASCADE,
    UNIQUE(nombre, category_id)
);

-- Tabla de modelos (depende de marca)
CREATE TABLE IF NOT EXISTS "Model" (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    brand_id INTEGER REFERENCES "Brand"(id) ON DELETE CASCADE,
    UNIQUE(nombre, brand_id)
);

-- Tabla de años (depende de modelo)
CREATE TABLE IF NOT EXISTS "Year" (
    id SERIAL PRIMARY KEY,
    valor INTEGER NOT NULL,
    model_id INTEGER REFERENCES "Model"(id) ON DELETE CASCADE,
    UNIQUE(valor, model_id)
);

-- Tabla de usuarios
CREATE TABLE IF NOT EXISTS "User" (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE, -- Email único
    password VARCHAR(255) NOT NULL,     -- Contraseña hasheada
    telefono VARCHAR(20) NOT NULL,
    reputacion FLOAT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Fecha de creación
    role_id INTEGER REFERENCES "Role"(id) ON DELETE SET NULL
);

-- Tabla de items (repuestos)
CREATE TABLE IF NOT EXISTS "Item" (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio NUMERIC(12,2) NOT NULL,
    estado VARCHAR(20) NOT NULL DEFAULT 'a_la_venta', -- 'a_la_venta', 'oculto', 'vendido'
    codigo_pieza VARCHAR(50),
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Fecha de creación
    fecha_vendido TIMESTAMP, -- Fecha en que se marca como vendido
    vendedor_id INTEGER REFERENCES "User"(id) ON DELETE CASCADE,
    comprador_id INTEGER REFERENCES "User"(id),
    category_id INTEGER REFERENCES "Category"(id),
    brand_id INTEGER REFERENCES "Brand"(id),
    model_id INTEGER REFERENCES "Model"(id),
    year_id INTEGER REFERENCES "Year"(id)
);

-- Tabla de fotos (almacenadas en binario)
CREATE TABLE IF NOT EXISTS "Photo" (
    id SERIAL PRIMARY KEY,
    data BYTEA NOT NULL,
    mime_type VARCHAR(50) NOT NULL,
    item_id INTEGER REFERENCES "Item"(id) ON DELETE CASCADE
);

-- Tabla de reputación/calificaciones
CREATE TABLE IF NOT EXISTS "Rating" (
    id SERIAL PRIMARY KEY,
    puntuacion INTEGER NOT NULL CHECK (puntuacion >= 1 AND puntuacion <= 5),
    comentario TEXT,
    user_id INTEGER REFERENCES "User"(id) ON DELETE CASCADE, -- quien califica
    target_user_id INTEGER REFERENCES "User"(id) ON DELETE CASCADE, -- a quien califican
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Índices útiles
CREATE INDEX IF NOT EXISTS idx_item_estado ON "Item"(estado);
CREATE INDEX IF NOT EXISTS idx_item_precio ON "Item"(precio);
CREATE INDEX IF NOT EXISTS idx_item_nombre ON "Item"(nombre);
CREATE INDEX IF NOT EXISTS idx_user_email ON "User"(email);

-- Insertar roles por defecto
INSERT INTO "Role" (nombre) VALUES ('admin') ON CONFLICT DO NOTHING;
INSERT INTO "Role" (nombre) VALUES ('usuario') ON CONFLICT DO NOTHING;