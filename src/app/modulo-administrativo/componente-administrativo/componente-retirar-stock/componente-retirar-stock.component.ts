import { Component } from '@angular/core';
import { StockService } from '../../../services/servicio-stock/stock.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-componente-retirar-stock',
  templateUrl: './componente-retirar-stock.component.html',
  styleUrls: ['./componente-retirar-stock.component.css'],
})
export class ComponenteRetirarStockComponent {
  //Configuración de la tabla para las datatables
  dtOptions: DataTables.Settings = {};

  //Inicializamos la variable que contendrá el código del almacén 
  codigoAlmacen: string = '';

  //Inicializamos la variable almacen para guardar los datos del almacén que viene de API
  almacen: any;

  //Inicializamos la variable materiales para guardar los datos de los materiales del almacén que viene de API
  materiales: any[] = [];

  //Inicializamos la variable materialesRetirados para guardar los materiales que se van a retirar
  materialesRetirados: { nombre: string; cantidad: number; sku: string }[] = [];

  //Inicializamos la variable historialPedidos para el historial de pedidos del almacén que viene de API
  historialPedidos: any[] = [];

  //Constructor para inyectar el servicio de StockService
  constructor(private stockService: StockService) {} 

  //Usamos el metodo buscarAlmacenPorCodigo para buscar el almacén por su código, del Servicio StockService que hemos inicializado en el constructor
  buscarAlmacenPorCodigo(): void {

    //Si el codigoAlmacen no está vacío, entonces se hace la llamada al servicio
    if (this.codigoAlmacen) {

      //Nos suscribimos al observable que nos devuelve el servicio stockService.buscarAlmacenPorCodigo
      this.stockService.buscarAlmacenPorCodigo(this.codigoAlmacen).subscribe(

        //Manejamos la respuesta del servicio
        (response: any) => {
          //console.log('Datos Laravel:', response); // Imprimir datos recibidos

          //Verificamos si existe el almacén
          if (response.existe) {

            //Asignamos los datos del almacén, materiales y historial de pedidos a las variables correspondientes
            //(El historialPedidos para mostar en datatables un historial de los pedidos de materiales para ese almacen que llegarñan próximamente para que el usuario sepa que materiales se van a recibir pronto)
            this.almacen = response.almacen;
            this.materiales = response.materiales;
            this.historialPedidos = response.historial_pedidos;

            //Si no se encuentra el almacén, se muestra una alerta de error y se reinicia el historial de pedidos, el almacén y los materiales
          } else {
            this.almacen = null;
            this.materiales = [];
            this.historialPedidos = [];
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'No se ha encontrado ningún almacén con el código que se ha ingresado',
              confirmButtonText: 'Introducir otro código',
            });
          }
        },
        //Manejamos el error del servicio mostrarbdo una alerta de error de código incorrecto
        (error) => {
          //console.error(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops... código incorrecto',
            text: 'Prueba con otro código de almacén',
          });
        }
      );

    //Si el codigoAlmacen está vacío, se muestra una alerta de error de código vacío
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops... debes introducir un código de almacén',
        text: 'Para acceder al stock de un almacén, debes introducir su código.',
      });
    }
  }


  //Método para abrir el modal de detalles del material para la cantidad de retirada, usamos material: any para recibir el material que se ha seleccionado en el modal
  abrirModal(material: any): void {

    //Verificamos si el material y el nombre del producto del hospital existen
    if (material && material.nombre_producto_hospital) {

      //Obtenemos la cantidad máxima de existencias del material
      const cantidadMaxima = material.existencias;

      //Mostramos el modal de SweetAlert con el título y el contenido del material seleccionado imprimiendo el nombre del producto del hospital y la cantidad de existencias
      //**IMPORTANTE**: El input de cantidad es de tipo number, con un id único para cada material (con estructura de cantidad-¨id_material¨),un mínimo de 1 y un máximo de la cantidad máxima de existencias
      Swal.fire({
        title: 'Detalles del Material',
        html: `
                <div>
                    <p>Nombre: <strong>${material.nombre_producto_hospital}</strong></p>
                    <p>Cantidad: <strong>${material.existencias}</strong></p>
                    <input type="number" id="cantidad-${material.id_material}" class="swal2-input" placeholder="Introduce la cantidad" min="1" max="${cantidadMaxima}">
                </div>
            `,
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        //La opcion de showLoaderOnConfirm la usamos por si hiciera falta mostrar un loader mientras se procesa la info (por si tarda demasiado)
        showLoaderOnConfirm: true,

        //Usamos preConfirm para validar la cantidad introducida por el usuario
        //Esta opcion es de la biblioteca SweetAlert2 usada para realizaracciones antes de confirmar una alerta.
        preConfirm: () => {

          //Guardamos en variable la cantidad introducida por el usuario
          const cantidadInput = document.getElementById(`cantidad-${material.id_material}`) as HTMLInputElement; 
          
          //Parseamos la cantidad a entero para poder compararla con la cantidad máxima de existencias
          const cantidad = parseInt(cantidadInput.value, 10);

          //Si la cantidad es mayor que la cantidad máxima de existencias, se muestra una alerta de error y se devuelve false para que no se cierre el modal (para evitar que el usuario pueda pedir más cantidad de la que hay)
          if (cantidad > cantidadMaxima) {
            Swal.fire({
              icon: 'error',
              title: 'Cantidad excedida',
              text: `La cantidad ingresada es mayor que la cantidad disponible (${material.existencias}unidades de existencias disponibles a retirar)`,
              confirmButtonText: 'Introducir otra cantidad',
            });
            return false;
          }

          //Si la cantidad es mayor que 0, se agrega el material a la lista de materiales retirados
          if (cantidad > 0) {

            //LLamamos a la función agregarMaterial para agregar el material a la lista de materiales retirados (guardamos el nombre del producto del hospital, la cantidad y el sku del material)
            this.agregarMaterial( material.nombre_producto_hospital, cantidad, material.sku);
          }
          return true; // Devolvemos true si la cantidad es válida
        },
      });

    }
  }

  //Este m'etodo lo usamos para agregar un material a la lista de materiales retirados (se le pasa el nombre del material, la cantidad y el sku)
  agregarMaterial(nombre: string, cantidad: number, sku: string): void {


    //Guardamos en la vatiable materialExistente el material que se encuentra en la lista de materiales retirados
    //Usamos el metodo find para buscar el material por su nombre y guardarlo,
    const materialExistente = this.materialesRetirados.find((material) => material.nombre === nombre);

    //Si el material ya existe, simplemente actualiza la cantidad
    if (materialExistente) {
      materialExistente.cantidad += cantidad;

    //Si el material no existe, se añade a la lista de materiales retirados
    } else {
      this.materialesRetirados.push({ nombre, cantidad, sku });
    }

    //console.log('Material retiradio:',this.materialesRetirados);
  }

  //Metodo para eliminar un material de la lista de materiales retirados (le pasamos el material a eliminar, con su nombre, cantidad y sku)
  //*ESTE METODO ES EL QUE SE EJECUTA CUANDO LE DAMOS A LA CRUZ DE LA TARJETA CORRESPONDIENTE DE MATERIAL */
  eliminarMaterial(material: { nombre: string; cantidad: number; sku: string;}): void {
    //Guardamos en materialIndice el material que se encuentra en la lista de materiales retrados
    const materialIndice = this.materialesRetirados.findIndex((m) => m.nombre === material.nombre);

    //Si el material existe, se elimina de la lista de materiales retirados para no retirarlo
    if (materialIndice !== -1) {
      //Metodo splice para eliminar el material de la lista de materiales retirados
      this.materialesRetirados.splice(materialIndice, 1);
      //console.log('Material retirado eliminado:', this.materialesRetirados);
    }
  }

  //Metodo para consultar y actualizar las existencias de los materiales retirados
  consultarYActualizarExistencias(): void {

    //Verificar si hay materiales retirados para actualizar las existencias
    if (this.materialesRetirados.length === 0) {
      //console.error('No hay materiales retirados para actualizar existencias.');
      return;
    }

    // Guardamos en materialesParaActualizar los materiales que se van a retirar
    //Se usa map para recorrer los materiales retirados y buscar el material en la lista de materiales para obtener su id_material y cantidad para actualizar las existencias
    const materialesParaActualizar = this.materialesRetirados.map(

      //Para cada material, se busca el material en la lista de materiales y se guarda su id_material, cantidad y sku
      (material) => {

        //El material que se encuentra lo guardamos en la variable materialEncontrado (se usa el metodo find para buscar el material por su nombre y guardarlo)
        const materialEncontrado = this.materiales.find((m) => m.nombre_producto_hospital === material.nombre);

        //Devolvemos el id_material, la cantidad y el sku del material encontrado
        return {
          id_material: materialEncontrado.id_material,
          cantidad: material.cantidad,
          sku: material.sku,
        };

      }
    );

   // console.log('Materiales a retirar:', materialesParaActualizar);

    //Llamada para el metodo actualizarExistenciasMaterial del servicio StockService
    this.stockService
      .actualizarExistenciasMaterial(materialesParaActualizar)
      .subscribe(

        //Si la respuesta es correcta
        (response: any) => {

          //Aqui hacemos que si la respuesta que devuelve el servicio tiene un mensaje, se muestre una alerta de éxito con el mensaje de existencias actualizadas
          if (response && response.message) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Existencias actualizadas',
              showConfirmButton: false,
              timer: 1500,

              //Recargamos la página después de cerrar el modal
              //*IMPORTANTE, ESTO SE HACE POR TEMAS DE SEGURIDAD EN ALMACENES PARA EVITAR CUALQUIER PERCANCE DE DEJAR LA "SESION DEL ALMACEN ABIERTA Y QUE CUALQUIERA PUDIERA RETIRAR EL STOCK QUE QUISIERA" */
            }).then(() => {
              //Se usa el metodo location.reload para recargar la página (location es un objeto que contiene información sobre la URL actual del documento y se usa para recargar la página y .reload() para recargarla)
              location.reload();
            });
          }
        },
        //Manejamos la respuesta de eerror si no se actualizan correctamente las existencias
        (error) => {
          console.error('Error al actualizar existencias:', error);
        }
      );
  }
}
