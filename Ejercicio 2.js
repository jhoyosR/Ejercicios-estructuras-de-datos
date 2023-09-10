// Definir la estructura de una reserva
function Reserva(nombre, paisOrigen, tipoHabitacion, fumador, numeroPersonas, periodoEstadia, trajoMascota) {
    this.nombre = nombre;
    this.paisOrigen = paisOrigen;
    this.tipoHabitacion = tipoHabitacion;
    this.fumador = fumador;
    this.numeroPersonas = numeroPersonas;
    this.periodoEstadia = periodoEstadia;
    this.trajoMascota = trajoMascota;
  }
  
  // Crear el hotel y sus habitaciones disponibles
  const hotel = {
    habitaciones: {
      individual: { capacidadMaxima: 2, reservadas: 0, fumadores: 0 },
      doble: { capacidadMaxima: 4, reservadas: 0, fumadores: 0 },
      familiar: { capacidadMaxima: 6, reservadas: 0, fumadores: 0 },
    },
    reservas: [],
    mascotasOpcionales: ["familiar"], // Habitaciones familiares permiten mascotas opcionalmente
  }
  
  // Función para realizar una reserva
  function hacerReserva(nombre, paisOrigen, tipoHabitacion, fumador, numeroPersonas, periodoEstadia, trajoMascota) {
    const habitacion = hotel.habitaciones[tipoHabitacion];
    
    if (!habitacion) {
      console.log("Tipo de habitación no válido");
      return;
    }
  
    if (numeroPersonas > habitacion.capacidadMaxima) {
      console.log("Número de personas excede la capacidad de la habitación");
      return;
    }
  
    if (tipoHabitacion !== "familiar" && trajoMascota) {
        console.log("No se permiten mascotas en habitaciones individuales o dobles");
        return;
      }

    if (hotel.reservas.length >= 10) {
      console.log("El hotel está lleno, no se pueden hacer más reservas");
      return;
    }
  
    const reserva = new Reserva(nombre, paisOrigen, tipoHabitacion, fumador, numeroPersonas, periodoEstadia, trajoMascota);
    hotel.reservas.push(reserva);
    habitacion.reservadas += 1;
  
    if (fumador) {
      habitacion.fumadores += 1;
    }
  
    console.log("Reserva realizada con éxito.");
  }
  
  // Ejemplo de reservas
  hacerReserva("Juan", "España", "individual", true, 1, "2023-09-15", false);
  hacerReserva("Ana", "Francia", "familiar", false, 4, "2023-09-20", true);
  hacerReserva("Pedro", "México", "doble", true, 3, "2023-09-25", false);
  
  // Mostrar el número de habitaciones reservadas y fumadores en cada tipo
  console.log("Habitaciones reservadas:");
  for (const tipo in hotel.habitaciones) {
    console.log(`${tipo}: ${hotel.habitaciones[tipo].reservadas}`);
    console.log(`Fumadores en ${tipo}: ${hotel.habitaciones[tipo].fumadores}`);
  }
  
  // Mostrar todas las reservas
  console.log("Todas las reservas:");
  console.log(hotel.reservas);
  
// Mostrar la cantidad de reservas
console.log(`Total de reservas realizadas: ${hotel.reservas.length}`);