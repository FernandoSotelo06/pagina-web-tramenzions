document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form'); // Selecciona el formulario

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

        // Obtén los datos del formulario
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const phoneNumber = document.getElementById('phoneNumber').value;

        // Crea un objeto con los datos
        const userData = {
            username,
            email,
            password,
            firstName,
            lastName,
            phoneNumber
        };

        try {
            // Realiza la solicitud POST a la API
            const response = await fetch('http://localhost:5000/api/user', { // Cambié el puerto a 3000, que es el que usas en tu API
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            const data = await response.json();

            if (response.ok) {
                alert(data.message); // Muestra un mensaje de éxito
                form.reset(); // Resetea el formulario
            } else {
                alert(data.message); // Muestra un mensaje de error si no se pudo crear el usuario
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Hubo un problema al crear el usuario.'); // Muestra un mensaje de error si la solicitud falla
        }
    });
});
