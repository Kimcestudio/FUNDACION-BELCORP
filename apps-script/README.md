# Apps Script (formulario de preinscripción)

Este ejemplo corrige `parseRequest_(e)` para evitar el error:

`SyntaxError: "nombre=..." is not valid JSON`

## Comportamiento implementado
- Primero lee `e.parameter` cuando el frontend envía `application/x-www-form-urlencoded` (URLSearchParams).
- Solo intenta `JSON.parse(...)` si el contenido parece JSON.
- Usa `try/catch` para no romper la ejecución si el cuerpo no es JSON válido.

## Deploy requerido
Después de actualizar el script en Apps Script:
1. **Administrar implementaciones**
2. **Editar** la implementación web actual
3. **Implementar**

Si no re-deployas, seguirá corriendo la versión anterior del Web App.
