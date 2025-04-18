#!/bin/bash

echo "🚀 Iniciando despliegue..."

# 1. Entrar al proyecto local
cd /home/fxkiller || exit

# 2. Obtener últimos cambios
echo "📦 Ejecutando git pull..."
git pull origin main

# 3. Cargar variables de entorno y construir el proyecto
echo "⚙️ Construyendo proyecto con .env..."
source .env && npm run build

# 4. Ir a la carpeta del servidor web
echo "📁 Cambiando a carpeta de producción..."
cd /home/fxkillers.mx || exit

# 5. Borrar contenido anterior
echo "🧹 Limpiando public_html..."
rm -rf public_html/*

# 6. Mover el nuevo contenido
echo "📂 Moviendo nuevos archivos a producción..."
mv /home/fxkiller/dist/* /home/fxkillers.mx/public_html/

echo "✅ ¡Despliegue completado con éxito!"
