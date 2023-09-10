// Objeto para gestionar las citas médicas
const sistemaCitasMedicas = {
    citas: [],
  
    // Función para programar una cita
    programarCita: function(numeroCita, nombrePaciente, fecha, hora, medicoAsignado) {
      const cita = {
        numeroCita,
        nombrePaciente,
        fecha,
        hora,
        medicoAsignado,
      };
      this.citas.push(cita);
      console.log(`Cita ${numeroCita} programada con éxito.`);
    },
    
    // Función para ver todas las citas programadas
    verCitasProgramadas: function() {
      if (this.citas.length === 0) {
        console.log("No hay citas programadas.");
        return;
      }
      
      console.log("Citas programadas:");
      // Ordenar las citas por fecha y hora
      this.citas.sort((a, b) => {
        const fechaA = new Date(a.fecha + ' ' + a.hora);
        const fechaB = new Date(b.fecha + ' ' + b.hora);
        return fechaA - fechaB;
      });
      

      console.log("Citas programadas:");
      this.citas.forEach((cita) => { //Muestra la información de la cita programada
        console.log(`Cita ${cita.numeroCita}:`);
        console.log(`Nombre del paciente: ${cita.nombrePaciente}`);
        console.log(`Fecha: ${cita.fecha}`);
        console.log(`Hora: ${cita.hora}`);
        console.log(`Médico asignado: ${cita.medicoAsignado}`);
        console.log();
      });
    },
    
    // Función para cancelar una cita
    cancelarCita: function(numeroCita) {
      const citaCanceladaIndex = this.citas.findIndex(cita => cita.numeroCita === numeroCita); //Busca que exista la cita para permitir su cancelación
      if (citaCanceladaIndex !== -1) {
        const citaCancelada = this.citas.splice(citaCanceladaIndex, 1);
        console.log(`Cita ${numeroCita} cancelada con éxito.`);
      } else {
        console.log("Número de cita inválido.");
      }
    },
  };
  
  // Interfaz de consola simple
  function mostrarMenu() {
    console.log("\nBienvenido al sistema de gestión de citas médicas");
    console.log("1. Programar cita");
    console.log("2. Ver citas programadas");
    console.log("3. Cancelar cita");
    console.log("4. Salir");
  }
  
  let numeroCita = 1; // Inicializar el número de cita
  
  function interactuar() {
    mostrarMenu();
  
    const opcion = parseInt(prompt("Seleccione una opción: 1.Programar Cita. 2.Ver citas programadas. 3.Cancelar cita. 4.Salir"));
  
    switch (opcion) {
      case 1: //Pide los requisitos para programar una cita
        const nombrePaciente = prompt("Nombre del paciente:");
        const fecha = prompt("Fecha (YYYY-MM-DD):");
        const hora = prompt("Hora (HH:MM):");
        const medicoAsignado = prompt("Médico asignado:");
        sistemaCitasMedicas.programarCita(numeroCita++, nombrePaciente, fecha, hora, medicoAsignado);
        interactuar();
        break;
  
      case 2:
        sistemaCitasMedicas.verCitasProgramadas();
        interactuar();
        break;
  
      case 3:
        const numeroCitaCancelar = parseInt(prompt("Ingrese el número de cita a cancelar:"));
        sistemaCitasMedicas.cancelarCita(numeroCitaCancelar);
        interactuar();
        break;
  
      case 4:
        console.log("Gracias por usar el sistema de gestión de citas médicas.");
        break;
  
      default:
        console.log("Opción no válida.");
        interactuar();
    }
  }
  
  interactuar();
  