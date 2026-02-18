/**
 * Apps Script Web App endpoint for preinscripción.
 * Acepta tanto application/x-www-form-urlencoded (e.parameter)
 * como application/json (e.postData.contents).
 */
function doPost(e) {
  try {
    var data = parseRequest_(e);

    if (!data.nombre || !data.pais || !data.correo) {
      return jsonResponse_({ ok: false, message: 'Faltan campos obligatorios.' });
    }

    // TODO: Reemplazar por la lógica real de guardado en Google Sheets.
    // Ejemplo:
    // const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName('Respuestas');
    // sheet.appendRow([new Date(), data.nombre, data.pais, data.correo, data.codigo, data.telefono, data.consultoraBelcorp, data.nivelEstudios]);

    return jsonResponse_({ ok: true, message: 'Formulario enviado con éxito.' });
  } catch (error) {
    return jsonResponse_({ ok: false, message: error.message || 'Error interno.' });
  }
}

function parseRequest_(e) {
  // 1) Prioridad para form-urlencoded (URLSearchParams desde frontend)
  var hasParameters = e && e.parameter && Object.keys(e.parameter).length > 0;
  if (hasParameters) {
    return mapPayload_(e.parameter);
  }

  // 2) Solo intentar JSON.parse cuando realmente llega JSON
  var raw = e && e.postData && typeof e.postData.contents === 'string'
    ? e.postData.contents.trim()
    : '';

  if (!raw) {
    return {};
  }

  var contentType = (e.postData.type || '').toLowerCase();
  var looksLikeJson = contentType.indexOf('application/json') !== -1 || raw[0] === '{' || raw[0] === '[';

  if (looksLikeJson) {
    try {
      var parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        return mapPayload_(parsed);
      }
    } catch (err) {
      // 3) Try/catch para no romperse cuando el cuerpo no sea JSON válido
      Logger.log('parseRequest_ JSON inválido: ' + err);
    }
  }

  return {};
}

function mapPayload_(source) {
  return {
    nombre: source.nombre || '',
    pais: source.pais || '',
    correo: source.correo || '',
    codigo: source.codigo || '',
    telefono: source.telefono || '',
    consultoraBelcorp: source.consultoraBelcorp || '',
    nivelEstudios: source.nivelEstudios || ''
  };
}

function jsonResponse_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
