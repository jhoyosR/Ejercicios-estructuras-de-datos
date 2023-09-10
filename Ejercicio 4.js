// Objeto para gestionar la cola de espera
const banco = {
    colaDeEspera: [], //Almacena los turnos en la cola de espera
    contadorDeTurnos: 1, //Contador para asignar números de turno
    
    // Función para tomar un turno
    tomarTurno: function() {
      const numeroTurno = this.contadorDeTurnos++; //Asigna un nuevo número de turno
      this.colaDeEspera.push(numeroTurno); //Agrega el turno a la cola de espera
      return numeroTurno; //Devuelve el número de turno asignado
    },
    
    // Función para llamar a un cliente
    llamarCliente: function() {
      if (this.colaDeEspera.length === 0) {
        console.log("No hay clientes en la cola de espera.");
        return;
      }
      
      const turnoLlamado = this.colaDeEspera.shift(); //elimina y obtiene el primer turno en la cola
      console.log(`Llamando al cliente con el turno número ${turnoLlamado}`);
    },
    
    // Función para mostrar la cola de espera
    mostrarColaDeEspera: function() {
      if (this.colaDeEspera.length === 0) {
        console.log("La cola de espera está vacía.");
        return;
      }
      
      console.log("Cola de espera:");
      for (let i = 0; i < this.colaDeEspera.length; i++) {
        console.log(`Turno ${this.colaDeEspera[i]}`); //Muestra cada turno en la cola
      }
    },
    
    // Función para mostrar el contador de turnos
    mostrarContadorDeTurnos: function() {
      console.log(`Total de turnos tomados: ${this.contadorDeTurnos - 1}`);
    }
  };
  
  // Ejemplo de uso
  console.log("Cliente 1 toma un turno: " + banco.tomarTurno());
  console.log("Cliente 2 toma un turno: " + banco.tomarTurno());
  console.log("Cliente 3 toma un turno: " + banco.tomarTurno());
  
  banco.mostrarColaDeEspera();
  banco.llamarCliente();
  banco.mostrarColaDeEspera();
  banco.mostrarContadorDeTurnos();
  