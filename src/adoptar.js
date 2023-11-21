const requerimiento = "Requerimientos de adopcion: \n1. Ser mayor de edad \n 2. Tener experiencia con animales \n 3. Saber cuidados de los animales \n";
export function adoptar(){
  if (this.estado === 'adoptar') {
    if (confirm(`${requerimiento} ¿Seguro de adoptar?`)) {
      // Código a ejecutar si el usuario confirma
      this.shadowRoot.querySelector('.adoptar').textContent = 'cancelar';
      this.shadowRoot.querySelector('.adoptar').classList.add('boton');
      this.shadowRoot.querySelector('.adoptar').classList.add('adoptar');
      this.estado = 'cancelar'; // Cambia el estado a 'cancelar'
    }
  } else if (this.estado === 'cancelar') {
    if (confirm('¿Seguro de cancelar?')) {
      this.shadowRoot.querySelector('.adoptar').textContent = 'adoptar';
      this.shadowRoot.querySelector('.adoptar').classList.add('adoptar');
      this.shadowRoot.querySelector('.adoptar').classList.remove('boton');
      this.estado = 'adoptar'; // Cambia el estado de vuelta a 'adoptar'
    }
  } else if (this.estado === 'adoptado') {
    alert("Animal ya adoptado");
  }
}