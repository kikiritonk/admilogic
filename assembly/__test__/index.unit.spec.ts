import * as contract from "..";
import { Context } from "near-sdk-as";

// ------------------------- Clientes ------------------------- //

// Prueba para la función set_cliente
describe("Set Cliente",()=>{
  it("Registrar un Cliente", () => {
    expect(() => {
      contract.set_cliente("0001", "Av.Hidalgo #452", "Juan Barbosa Cruz", "+52 374-458-2133", "157875045474");
    }).not.toThrow();
  });
  it("Fallara sin el ID", () => {
    expect(() => {
      contract.set_cliente("","Av.Hidalgo #452", "Juan Barbosa Cruz", "+52 374-458-2133", "157875045474");
    }).toThrow();
  });
  it("Fallara sin la direccion", () => {
    expect(() => {
      contract.set_cliente("0001", "",  "Juan Barbosa Cruz", "+52 374-458-2133", "157875045474");
    }).toThrow();
  });
});

// Prueba para la función consultar clientes
describe("Consulta todos los clientes",()=>{
  it("consultar todos los clientes", () => {
    expect(() => {
      contract.get_clientes();
    }).not.toThrow();
  });
});

// Prueba para la función consultar cliente por id
describe("Buscar cliente por ID",()=>{
  it("Debería buscar cliente por ID", () => {
    expect(() => {
      contract.get_id_cliente("0001");
    }).not.toThrow();
  });
});


// ------------------------- Proveedores ------------------------- //

// Prueba para la función set_proveedor
describe("Registrar un Proveedor",()=>{
  it("Debería registrar un Proveedor", () => {
    expect(() => {
      contract.set_proveedor("00001","El Burrito Loco","articulos","Juarez # 28 Col.Centro", "+52 374-458-4574","A50D5786DAR456");
    }).not.toThrow();
  });
  it("Debería fallar sino enviamos ID", () => {
    expect(() => {
      contract.set_proveedor("","El Burrito Loco","articulos","Juarez # 28 Col.Centro", "+52 374-458-4574","A50D5786DAR456");
    }).toThrow();
  });
  it("Debería fallar si no enviamos empresa", () => {
    expect(() => {
      contract.set_proveedor("00001","","articulos","Juarez # 28 Col.Centro", "+52 374-458-4574","A50D5786DAR456");
    }).toThrow();
  });
  it("Debería fallar si no enviamos articulos", () => {
    expect(() => {
      contract.set_proveedor("00001","El Burrito Loco","","Juarez # 28 Col.Centro", "+52 374-458-4574","A50D5786DAR456");
    }).toThrow();
  });
});

// Prueba para la función get_proveedor
describe("Consultar todos los Proveedores",()=>{
  it("Debería consultar todas los Proveedores", () => {
    expect(() => {
      contract.get_proveedor();
    }).not.toThrow();
  });
});

// Prueba para la función get_id_proveedor
describe("Consultar Proveedor por ID",()=>{
  it("Debería consultar Proveedor por ID", () => {
    expect(() => {
      contract.get_id_proveedor("00001");
    }).not.toThrow();
  });
  it("Debería fallar si no enviamos el ID", () => {
    expect(() => {
      contract.get_id_proveedor("");
    }).toThrow();
  });
});
// ------------------------- Productos ------------------------- //

// Prueba para la función setProducto
describe("Registro de un Producto",()=>{
  it("Debería agregar un Producto", () => {
    expect(() => {
      contract.setProducto("0001", "Refresco Ch.", "$12.00 MXN", "15-DIC-2023", "10002", "500grms", "5cm3");
    }).not.toThrow();
  });
  it("Debería fallar si no enviamos el ID", () => {
    expect(() => {
      contract.setProducto("", "Refresco Ch.", "$12.00 MXN", "15-DIC-2023", "10002", "500grms", "5cm3");
    }).toThrow();
  });
  it("Debería fallar si no enviamos el peso", () => {
    expect(() => {
      contract.setProducto("0001", "Refresco Ch.", "$12.00 MXN", "15-DIC-2023", "10002", "", "5cm3");
    }).toThrow();
  });
  it("Debería fallar si no enviamos descripcion", () => {
    expect(() => {
      contract.setProducto("0001", "", "$12.00 MXN", "15-DIC-2023", "10002", "500grms", "5cm3");
    }).toThrow();
  });
  it("Debería fallar si no enviamos precio", () => {
    expect(() => {
      contract.setProducto("0001", "Refresco Ch.", "", "15-DIC-2023", "10002", "500grms", "5cm3");
    }).toThrow();
  });
});

// Prueba para la función consultas getProductos
describe("Consulta todos los productos registrados",()=>{
  it("Debería mostrar todos los productos registrados", () => {
    expect(() => {
      contract.getProductos();
    }).not.toThrow();
  });
  //consulta por ID
  it("Debería consultar producto por ID", () => {
    expect(() => {
      contract.get_id_producto("0001");
    }).not.toThrow();
  });
  it("Debería fallar la consulta de Producto si no se agrega el ID", () => {
    expect(() => {
      contract.get_id_producto("");
    }).toThrow();
  });
  //consulta por nombre producto
  it("Debería consultar producto por el nombre enviado", () => {
    expect(() => {
      contract.get_nombre_producto("Refresco Ch.");
    }).not.toThrow();
  });
  it("Debería fallar consulta de producto si no envia nombre", () => {
    expect(() => {
      contract.get_nombre_producto("");
    }).toThrow();
  });
  //Consulta por lote 
  it("Debería consultar producto ingresando el lote", () => {
    expect(() => {
      contract.get_lote_producto("10002");
    }).not.toThrow();
  });
  it("Debería fallar consulta de producto por no agregar el lote", () => {
    expect(() => {
      contract.get_lote_producto("");
    }).toThrow();
  });
//Consulta por Fecha de Caducidad
  it("Debería consultar un producto introduciendo una fecha de caducidad", () => {
    expect(() => {
      contract.get_cad_producto("15-DIC-2023");
    }).not.toThrow();
  });
  it("Debería fallar consulta de producto al no ingresar fecha de caducidad", () => {
    expect(() => {
      contract.get_cad_producto("");
    }).toThrow();
  });
});

// ------------------------- Trabajadores ------------------------- //
describe("Agregar un Trabajador",()=>{
  it("Debería registrar un nuevo Trabajador", () => {
    expect(() => {
      contract.setTrabajador("001", "Antonio Camarena Solis", "78879366368", "Ventas de Mostrador", "01-ENE-2021", "01-ENE-2022");
    }).not.toThrow();
  });
  // Falta de ID
  it("Debería fallar sin un ID", () => {
    expect(() => {
      contract.setTrabajador("", "Antonio Camarena Solis", "78879366368", "Ventas de Mostrador", "01-ENE-2021", "01-ENE-2022");
    }).toThrow();
  });
  //Falta de Nombre Trabajador
  it("Debería fallar por falta nombre del trabajador", () => {
    expect(() => {
      contract.setTrabajador("001", "", "78879366368", "Ventas de Mostrador", "01-ENE-2021", "01-ENE-2022");
    }).toThrow();
  });
  //Falta de Numero Seguro Social
  it("Debería fallar por falta de numero de seguro soc", () => {
    expect(() => {
      contract.setTrabajador("001", "Antonio Camarena Solis", "", "Ventas de Mostrador", "01-ENE-2021", "01-ENE-2022");
    }).toThrow();
  });
});
//Lista de Trabajadores
describe("Lista todos los Trabajadores ",()=>{
  it("Debería listar todos los trabajadores", () => {
    expect(() => {
      contract.getTrabajadores();
    }).not.toThrow();
  });
});

describe("Consultar Trabajador por el ID",()=>{
  //ID
  it("Buscar un Trabajador por su ID", () => {
    expect(() => {
      contract.get_trabajador_id("001");
    }).not.toThrow();
  });
  it("Error al buscar trabajador por falta de ID", () => {
    expect(() => {
      contract.get_trabajador_id("");
    }).toThrow();
  });
  //Consultar Trabajador por el nombre
  it("Buscar por su nombre a un trabajador registrado ", () => {
    expect(() => {
      contract.get_trabajador_nombre("Antonio Camarena Solis");
    }).not.toThrow();
  });
  it("Error al buscar trabajador sin ingresar un nombre", () => {
    expect(() => {
      contract.get_trabajador_nombre("");
    }).toThrow();
  });
  //Consultar trabajador por seguro social
  it("Buscar un trabajador por su numero de seguro", () => {
    expect(() => {
      contract.get_trabajador_seguro("MODERADO");
    }).not.toThrow();
  });
  it("Error al buscar un trabajador sin ingresar un numero de seguro", () => {
    expect(() => {
      contract.get_trabajador_seguro("");
    }).toThrow();
  });
});