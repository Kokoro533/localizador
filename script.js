// Mostrar la fecha y hora actual
function updateTime() {
    const now = new Date();
    
    const date = now.toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    const time = now.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    document.getElementById('date').textContent = date;
    document.getElementById('time').textContent = time;
}

// Actualizar la hora cada segundo
setInterval(updateTime, 1000);
updateTime();

// Obtener la ubicación del usuario
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById('location-info').textContent = "La geolocalización no está soportada por este navegador.";
    }
}

// Mostrar la ubicación
function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    document.getElementById('location-info').textContent = `Latitud: ${lat}, Longitud: ${lon}`;
}

// Manejar errores de geolocalización
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById('location-info').textContent = "Permiso de geolocalización denegado.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById('location-info').textContent = "La ubicación no está disponible.";
            break;
        case error.TIMEOUT:
            document.getElementById('location-info').textContent = "La solicitud de ubicación ha caducado.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById('location-info').textContent = "Ocurrió un error desconocido.";
            break;
    }
}

// Ejecutar la función de obtener ubicación
getLocation();
