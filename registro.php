<?php
// Conexión a la base de datos (reemplaza estos valores con los tuyos)
$servername = "localhost";
$username = "tu_usuario";
$password = "";
$dbname = "registro";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
} else{
    echo "<h2>Conexión exitosa</h2>";
}

// Obtener datos del formulario
$IDAlumno = $_POST["IDAlumno"];
$nombre = $_POST["nombre"];
$email = $_POST["email"];
$nuevaPassword = $_POST["nueva-password"];
$repetirPassword = $_POST["repetir-password"];

// Insertar datos en la base de datos
$sql = "INSERT INTO registro (IDAlumno, Nombre, Correo, `Nueva Contraseña`, `Repetir Contraseña`)
        VALUES ('$IDAlumno', '$nombre', '$email', '$nuevaPassword', '$repetirPassword')";

if ($conn->query($sql) === TRUE) {
    // Redirigir a la página de pasarela de pago después de un registro exitoso
    header("Location: ./pasarela de pago.html");
    exit();
} else {
    echo "Error en el registro: " . $conn->error;
}

// Cerrar conexión
$conn->close();
?>
