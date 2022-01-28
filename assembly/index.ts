import { logging } from 'near-sdk-as'
import { clientes, Cliente, proveedores, Proveedor, productos, Producto, trabajadores, Trabajador} from "./models";


//////////////////////////////////////////////////
//////////// LOGISTICA ADMINISTRATIVA ////////////
//////////////////////////////////////////////////


/// Seccion Clientes ///
// Método para registrar un nuevo Cliente //

export function set_cliente(id_cliente: string, direccion_cliente: string, nombre_cliente: string, contacto_cliente: string, dni:string): void{
  assert(id_cliente.length>0,"ID es requerido");
  assert(direccion_cliente.length>0 ,"La direccion es requerida");
  assert(nombre_cliente.length>0,"El nombre es requerido");
  assert(contacto_cliente.length>0,"El contacto es requerido");
  assert(dni.length>0,"El dni o numero de registro personal es requerido");
  let cliente = new Cliente(id_cliente, direccion_cliente, nombre_cliente, contacto_cliente, dni);
  clientes.push(cliente);
}
// Método para consultar todos los clientes
export function get_clientes(): Array<Cliente>{
  let result = new Array<Cliente>(clientes.length);
  for (let i = 0; i < clientes.length; i++){
    let cliente = clientes[i];
    result[i] = cliente;
  }
  return result;
}

// Método para consultar un cliente por id
export function get_id_cliente(id_cliente: string): Cliente | null {
  assert(id_cliente.length>0,"ID es requerido");
  for (let i = 0; i < clientes.length; i++) {
    if (clientes[i].id_cliente == id_cliente) {
      let find = clientes[i];
      return find;
    }
  }
  return null;
}

// Método para consultar un cliente por direccion
export function get_direccion_cliente(direccion_cliente: string): Cliente | null {
  assert(direccion_cliente.length>0,"Domicilio es requerido");
  for (let i = 0; i < clientes.length; i++) {
    if (clientes[i].direccion_cliente == direccion_cliente) {
      let find = clientes[i];
      return find;
    }
  }
  return null;
}

// Método para consultar un cliente por nombre
export function get_nombre_cliente(nombre_cliente: string): Cliente | null {
  assert(nombre_cliente.length>0,"Nombre es requerido");
  for (let i = 0; i < clientes.length; i++) {
    if (clientes[i].nombre_cliente == nombre_cliente) {
      let find = clientes[i];
      return find;
    }
  }
  return null;
}

// Método para consultar un cliente por contaco
export function get_contacto_cliente(contacto_cliente: string): Cliente | null {
  assert(contacto_cliente.length>0,"Contacto es requerido");
  for (let i = 0; i < clientes.length; i++) {
    if (clientes[i].contacto_cliente == contacto_cliente) {
      let find = clientes[i];
      return find;
    }
  }
  return null;
}

// Método para consultar un cliente por dni
export function get_dni_cliente(dni: string): Cliente | null {
  assert(dni.length>0,"DNI es requerido");
  for (let i = 0; i < clientes.length; i++) {
    if (clientes[i].dni == dni) {
      let find = clientes[i];
      return find;
    }
  }
  return null;
}


/// Seccion Proveedores ///
// Método para registrar un nuevo Proveedor //

export function set_proveedor(id_proveedor: string, empresa: string, articulos: string, direccion_proveedor: string, contacto_proveedor: string, rif: string): void{
  assert(id_proveedor.length>0,"ID de Proveedor es requerido");
  assert(empresa.length>0 ,"El nombre de la empresa del Proveedor es requerida");
  assert(articulos.length>0,"Al menos un articulo es requerido");
  assert(direccion_proveedor.length>0,"La direccion del proveedor es requerida");
  assert(contacto_proveedor.length>0,"El contacto del Proveedor es requerido");
  assert(rif.length>0,"El número de rif es requerido");
  let proveedor = new Proveedor(id_proveedor, empresa, articulos, direccion_proveedor, contacto_proveedor, rif);
  proveedores.push(proveedor);
}

// Método para consultar todos los Proveedor
export function get_proveedor(): Array<Proveedor>{
  let result = new Array<Proveedor>(proveedores.length);
  for (let i = 0; i < proveedores.length; i++){
    let proveedor = proveedores[i];
    result[i] = proveedor;
  }
  return result;
}

// Método para consultar un Proveedor por id de Proveedor
export function get_id_proveedor(id_proveedor: string): Proveedor | null {
  assert(id_proveedor.length>0,"ID de Proveedor es requerido");
  for (let i = 0; i < proveedores.length; i++) {
    if (proveedores[i].id_proveedor == id_proveedor) {
      let find = proveedores[i];
      return find;
    }
  }
  return null;
}

// Método para consultar un Proveedor por Empresa de Proveedor
export function get_empresa_proveedor(empresa: string): Proveedor | null {
  assert(empresa.length>0,"Empresa de Proveedor es requerido");
  for (let i = 0; i < proveedores.length; i++) {
    if (proveedores[i].empresa == empresa) {
      let find = proveedores[i];
      return find;
    }
  }
  return null;
}

// Método para consultar un Proveedor por articulos de Proveedor
export function get_articulos_proveedor(articulos: string): Proveedor | null {
  assert(articulos.length>0,"Articulos de Proveedor es requerido");
  for (let i = 0; i < proveedores.length; i++) {
    if (proveedores[i].articulos == articulos) {
      let find = proveedores[i];
      return find;
    }
  }
  return null;
}

// Método para consultar un Proveedor por Direccion de Proveedor
export function get_direccion_proveedor(direccion_proveedor: string): Proveedor | null {
  assert(direccion_proveedor.length>0,"La Direccion de Proveedor es requerido");
  for (let i = 0; i < proveedores.length; i++) {
    if (proveedores[i].direccion_proveedor == direccion_proveedor) {
      let find = proveedores[i];
      return find;
    }
  }
  return null;
}

// Método para consultar un Proveedor por Contacto de Proveedor
export function get_contacto_proveedor(contacto_proveedor: string): Proveedor | null {
  assert(contacto_proveedor.length>0,"El contacto del Proveedor es requerido");
  for (let i = 0; i < proveedores.length; i++) {
    if (proveedores[i].contacto_proveedor == contacto_proveedor) {
      let find = proveedores[i];
      return find;
    }
  }
  return null;
}

// Método para consultar un Proveedor por RIF de Proveedor
export function get_rif_proveedor(rif: string): Proveedor | null {
  assert(rif.length>0,"RIF del Proveedor es requerido");
  for (let i = 0; i < proveedores.length; i++) {
    if (proveedores[i].rif == rif) {
      let find = proveedores[i];
      return find;
    }
  }
  return null;
}

/// Seccion productos ///
//  Registrar un Producto //
export function setProducto(id_producto: string, detalle_producto: string, precio: string, fecha_cad: string, lote: string, peso: string, metraje_cubico: string): void{
  assert(id_producto.length>0,"Introduce un ID para el producto ");
  assert(detalle_producto.length>0 ,"Introduce el nombre del producto");
  assert(precio.length>0,"Introduce un precio para el producto");
  assert(fecha_cad.length>0,"Introduce fecha de caducidad para el producto");
  assert(lote.length>0,"Introduce lote del producto");
  assert(peso.length>0,"Introduce el peso del producto");
  assert(metraje_cubico.length>0,"Introduce el volumen del producto");
  let producto = new Producto(id_producto, detalle_producto, precio, fecha_cad, lote, peso, metraje_cubico);
  productos.push(producto);
}
// Listado de todos los productos
export function getProductos(): Array<Producto>{
  let result = new Array<Producto>(productos.length);
  for (let i = 0; i < productos.length; i++){
    let list = productos[i];
    result[i] = list;
  }
  return result;
}
//Consultar un producto por su id
export function get_id_producto(id_producto: string): Producto | null {
  assert(id_producto.length>0,"ID es requerido");
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].id_producto == id_producto) {
      let find = productos[i];
      return find;
    }
  }
  return null;
}

//Consultar un producto por nombre
export function get_nombre_producto(nombre_producto: string): Producto | null {
  assert(nombre_producto.length>0,"El nombre del producto es requerido");
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].nombre_producto == nombre_producto) {
      let find = productos[i];
      return find;
    }
  }
  return null;
}
//Consultar un producto por precio
export function get_precio_producto(precio: string): Producto | null {
  assert(precio.length>0,"El precio es requerido");
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].precio == precio) {
      let find = productos[i];
      return find;
    }
  }
  return null;
}

// Consultar producto por fecha de caducidad
export function get_cad_producto(fecha_cad: string): Producto | null {
  assert(fecha_cad.length>0,"Fecha de caducidad requerida");
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].fecha_cad == fecha_cad) {
      let find = productos[i];
      return find;
    }
  }
  return null;
}

//Consultar productos por Lote
export function get_lote_producto(lote: string): Producto | null {
  assert(lote.length>0,"Introduce un lote");
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].lote == lote) {
      let find = productos[i];
      return find;
    }
  }
  return null;
}

//Consultar un producto por metraje cubico
export function get_metraje_producto(metraje_cubico: string): Producto | null {	
  assert(metraje_cubico.length>0,"El volumen es requerido");
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].metraje_cubico == metraje_cubico) {
      let find = productos[i];
      return find;
    }
  }
  return null;
}
//Consultar un producto por peso
export function get_peso_producto(peso: string): Producto | null {	
  assert(peso.length>0,"El peso es requerido");
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].peso == peso) {
      let find = productos[i];
      return find;
    }
  }
  return null;
}




/// Seccion trabajadores ///
//  Registro de trabajador //
export function setTrabajador(id_trabajador:string, nombre_trabajador: string, numero_seguro: string, puesto_trabajador: string, inicio_contrato: string, fin_contrato: string): void{
  assert(id_trabajador.length>0,"ID para el trabajador es requerido");
  assert(nombre_trabajador.length>0 ,"Introduce el nombre del trabajador");
  assert(numero_seguro.length>0,"Introduce el numero de seguro social");
  assert(puesto_trabajador.length>0,"Introduce el puesto asignado al trabajador");
  assert(inicio_contrato.length>0,"Introduce la fecha de inicio de contrato");
  assert(fin_contrato.length>0,"Introduce la fecha de fin de contrato");
  let trabajador = new Trabajador(id_trabajador, nombre_trabajador, numero_seguro, puesto_trabajador, inicio_contrato, fin_contrato);
  trabajadores.push(trabajador);
}
// Listar todos los trabajadores
export function getTrabajadores(): Array<Trabajador>{
  let result = new Array<Trabajador>(trabajadores.length);
  for (let i = 0; i < trabajadores.length; i++){
    let list = trabajadores[i];
    result[i] = list;
  }
  return result;
}
//Consultar trabajador por id
export function get_trabajador_id(id_trabajador: string): Trabajador | null {
  assert(id_trabajador.length>0,"ID es requerido");
  for (let i = 0; i < trabajadores.length; i++) {
    if (trabajadores[i].id_trabajador == id_trabajador) {
      let find = trabajadores[i];
      return find;
    }
  }
  return null;
}

//Consultar trabajador por nombre
export function get_trabajador_nombre(nombre_trabajador: string): Trabajador | null {
  assert(nombre_trabajador.length>0,"ID es requerido");
  for (let i = 0; i < trabajadores.length; i++) {
    if (trabajadores[i].nombre_trabajador == nombre_trabajador) {
      let find = trabajadores[i];
      return find;
    }
  }
  return null;
}

//Consultar trabajadores por seguro social
export function get_trabajador_seguro(numero_seguro: string): Trabajador | null {
  assert(numero_seguro.length>0,"Se necesita un numero de seguro");
  for (let i = 0; i < trabajadores.length; i++) {
    if (trabajadores[i].numero_seguro == numero_seguro) {
      let find = trabajadores[i];
      return find;
    }
  }
  return null;
}


//Consultar trabajadores por puesto de trabajo
export function get_trabajador_puesto(puesto_trabajador: string): Trabajador | null {
  assert(puesto_trabajador.length>0,"Introduce un puesto de trabajo");
  for (let i = 0; i < trabajadores.length; i++) {
    if (trabajadores[i].puesto_trabajador == puesto_trabajador) {
      let find = trabajadores[i];
      return find;
    }
  }
  return null;
}


//Consultar trabajadores por fecha de inicio de contrato
export function get_trabajador_inicio_contrato(inicio_contrato: string): Trabajador | null {
  assert(inicio_contrato.length>0,"Introduce la fecha de inicio de contrato");
  for (let i = 0; i < trabajadores.length; i++) {
    if (trabajadores[i].inicio_contrato == inicio_contrato) {
      let find = trabajadores[i];
      return find;
    }
  }
  return null;
}

//Consultar trabajadores por fecha de fin de contrato
export function get_trabajador_fin_contrato(fin_contrato: string): Trabajador | null {
  assert(fin_contrato.length>0,"Introduce la fecha de fin de contrato");
  for (let i = 0; i < trabajadores.length; i++) {
    if (trabajadores[i].fin_contrato == fin_contrato) {
      let find = trabajadores[i];
      return find;
    }
  }
  return null;
}
