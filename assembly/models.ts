import { PersistentVector } from "near-sdk-as";

// Exportando la clase Proveedor
@nearBindgen
export class Proveedor {
    id_proveedor: string; //id de la empresa
    empresa: string; //nombre de la empresa
    articulos: string; //pollo, carnes, vegetales, libros, insumos, televisores, bebidas, etc.
    direccion_proveedor: string; //domicilio
    contacto_proveedor: string; //telefonos
    rif: string; //id juridico de la empresa
    constructor(id_proveedor: string, empresa: string, articulos: string, direccion_proveedor: string, contacto_proveedor: string, rif: string){
        this.id_proveedor = id_proveedor;
        this.empresa = empresa;
        this.articulos = articulos;
        this.direccion_proveedor = direccion_proveedor;
        this.contacto_proveedor = contacto_proveedor;
        this.rif = rif;
    }
}

// Exportando la clase Cliente
@nearBindgen
export class Cliente {
    id_cliente: string; //id cliente
    direccion_cliente: string; //direccion del cliente
    nombre_cliente: string; //nombre y apellido
    contacto_cliente: string; //numero de telefono del cliente
    dni: string; //numero de documento de identidad
    constructor(id_cliente: string, direccion_cliente: string, nombre_cliente: string, contacto_cliente: string, dni:string){
        this.id_cliente = id_cliente;
        this.direccion_cliente = direccion_cliente;
        this.nombre_cliente = nombre_cliente;
        this.contacto_cliente = contacto_cliente;
        this.dni = dni;
    }   
}

// Exportando la clase Producto
@nearBindgen
export class Producto {
    id_producto: string;//id para producto
    nombre_producto: string; //nombre descripcion del producto
    precio: string; // precio del producto
    fecha_cad: string; // fecha de caducidad del producto
    lote: string;   //lote del producto
    peso: string;  // peso neto del producto en kg
    metraje_cubico: string; // metraje cubico del producto
    constructor(id_producto: string, nombre_producto: string, precio: string, fecha_cad: string, lote: string, peso: string, metraje_cubico: string){
        this.id_producto = id_producto;
        this.nombre_producto = nombre_producto;
        this.precio = precio;
        this.fecha_cad = fecha_cad;
        this.lote = lote;
        this.peso = peso;
        this.metraje_cubico = metraje_cubico;
    }   
}

// Exportando la clase Trabajador
@nearBindgen
export class Trabajador {
    id_trabajador: string; //id para el trabajador
    nombre_trabajador: string; //nombre del trabajador
    numero_seguro: string; //numero de seguro social
    puesto_trabajador: string; // puesto asignado del trabajador
    inicio_contrato: string; // fecha de inicio del contrato	
    fin_contrato: string; //fecha fin del contrato
    constructor(id_trabajador:string, nombre_trabajador: string, numero_seguro: string, puesto_trabajador: string, inicio_contrato: string, fin_contrato: string){
        this.id_trabajador = id_trabajador;
        this.nombre_trabajador = nombre_trabajador;
        this.numero_seguro = numero_seguro;
        this.puesto_trabajador = puesto_trabajador;
        this.inicio_contrato = inicio_contrato;
        this.fin_contrato = fin_contrato;
    }
}

 export const proveedores = new PersistentVector<Proveedor>("p");
 export const clientes = new PersistentVector<Cliente>("c");
 export const productos = new PersistentVector<Producto>("pr");
 export const trabajadores = new PersistentVector<Trabajador>("t");
