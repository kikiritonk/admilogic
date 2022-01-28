# AdmiLogic
 Logistica Administrativa, DeFI administrativo para gestion empresarial y venta de productos online

// Nombre //
Registro de Proveedores, Trabajadores, Productos y Clientes.
 

Funciones en este contrato:

////// Proveedores //////

1. Registro de un Proveedor.
2. Listado de proveedores
3. Buscar un proveedor por ID
4. Buscar a un proveedor por su empresa
5. Buscar a un proveedor por articulos
6. Buscar a un proveedor por su direccion
7. Buscar a un proveedor por su telefono
8. Buscar a un proveedor por su ID juridico



////// Clientes //////

1. Registro de un Cliente
2. Listar todos los clientes
3. Buscar a cliente por su ID
4. Buscar a cliente por su direccion
5. Buscar a cliente por su nombre
6. Buscar a cliente por su telefono
7. Buscar a cliente por DNI


////// Productos //////

1. Registro de un Producto
2. Listado de todos los productos 
3. Consulta de Producto por el id
4. Consulta a producto por nombre
5. Consulta de producto por lote
6. Consulta de producto por fecha de caducidad
7. Consulta de producto por peso
8. Consulta de producto por volumen


////// Trabajadores //////

1. Registro de trabajador
2. Listado de todos los Trabajadores
3. Consulta de trabajador por id
4. Buscar un trabajador por nombre
5. Buscar a trabajador por Numero de Seguro
6. Buscar un trabajador por puesto
7. Buscar un trabajador por el inicio de su contrato
8. Buscar un trabajador por el fin de su contrato


////// Instalacion //////

Paso 1: Prerequisitos

1. [Node.js] recomendamos v12 usar [nvm])
2. Instalar yarn: `npm install -g yarn`
3. Instalar dependencias: `yarn install`
4. Cree una cuenta de prueba NEAR [https://wallet.testnet.near.org/]
5. Instale NEAR CLI globalmente: [near-cli] yarn install --global near-cli

Paso 2: Configura NEAR CLI

Configure su near-cli para autorizar su cuenta de prueba creada:

    near login

Paso 3: Cree y realice una implementacion de desarrollo de contrato inteligente


Cree el codigo del contrato inteligente de AdminLogic e implemente el servidor de desarrollo local: `yarn build` (consulte` package.json` para obtener una lista completa de `scripts` que puede ejecutar con` yarn`). 
Este script le devuelve un contrato inteligente provisional implementado (guardelo para usarlo mas tarde). 


Para desplegar el contrato generado con `yarn build` en testnet [https://wallet.testnet.near.org/], 
ejecutar el comando `yarn deploy` el cual nos regresa el id del contrato desplegado que usaremos para ejecutar cada uno de los metodos que contiene el contrato.




/// Métodos del contrato  ///

Estos son algunos metodos del contrato y los siguientes comandos le permiten interactuar con los métodos del contrato inteligente utilizando NEAR CLI
(para esto, debe tener implementado un contrato inteligente provisional).

// Proveedores //
Comando para crear Proveedores: 

    near call $NOMBRE_DE_CONTRATO set_proveedor '{ "id_proveedor": "string", "empresa": "string", "articulos": "string", "direccion_proveedor": "string", "contacto_proveedor": "string", "rif": "string" }' --account-id <tu cuenta de testnet>

Comando para consultar todos los proveedores que se registran

    near view $NOMBRE_DE_CONTRATO get_proveedor

Comando para consultar proveedor por id:

    near view $NOMBRE_DE_CONTRATO get_id_proveedor '{"id_proveedor":"string"}'

Comando para consultar proveedor por empresa:

    near view $NOMBRE_DE_CONTRATO get_empresa_proveedor '{"empresa":"string"}'

Comando para consultar proveedor por articulos:

    near view $NOMBRE_DE_CONTRATO get_articulos_proveedor '{"articulos":"string"}'

Comando para consultar proveedor por direccion:

    near view $NOMBRE_DE_CONTRATO get_direccion_proveedor '{"direccion_proveedor":"string"}'

Comando para consultar proveedor por contacto:

    near view $NOMBRE_DE_CONTRATO get_contacto_proveedor '{"contacto_proveedor":"string"}'

Comando para consultar proveedor por Id Juridico

    near view $NOMBRE_DE_CONTRATO get_rif_proveedor '{"rif":"string"}'




/// Clientes ///

Comando para crear un cliente: 

    near call $NOMBRE_DE_CONTRATO set_cliente '{ "id_cliente": "string", "direccion_cliente": "string", "nombre_cliente": "string", "contacto_cliente": "string", "dni":"string" }' --account-id <tu cuenta de testnet>

Comando para consultar todos los clientes

    near view $NOMBRE_DE_CONTRATO get_clientes

Comando para consultar un cliente por su id:

    near view $NOMBRE_DE_CONTRATO get_id_cliente '{"id_cliente":"string"}'

Comando para consultar proveedor por empresa:

    near view $NOMBRE_DE_CONTRATO get_direccion_cliente '{"direccion_cliente":"string"}'

Comando para consultar proveedor por articulos:

    near view $NOMBRE_DE_CONTRATO get_nombre_cliente '{"nombre_cliente":"string"}'

Comando para consultar proveedor por direccion:

    near view $NOMBRE_DE_CONTRATO get_contacto_cliente '{"contacto_cliente":"string"}'

Comando para consultar proveedor por contacto:

    near view $NOMBRE_DE_CONTRATO get_dni_cliente '{"dni":"string"}'



/// Productos ///

Comando para registrar un producto: 

    near call $NOMBRE_DE_CONTRATO setProducto '{ "id_producto": "string", "detalle_producto": "string", "precio": "string", "fecha_cad": "string", "lote": "string", "peso": "string", "metraje_cubico": "string" }' --account-id <tu cuenta de testnet>

Comando para consultar todos los productos registrados

    near view $NOMBRE_DE_CONTRATO getProductos

Comando para consultar un producto por id:

    near view $NOMBRE_DE_CONTRATO get_id_producto '{"id_producto":"string"}'

Comando para consultar un producto por precio:

    near view $NOMBRE_DE_CONTRATO get_id_producto '{"precio":"string"}'

Comando para consultar un producto por fecha de caducidad:

    near view $NOMBRE_DE_CONTRATO get_cad_producto '{"fecha_cad":"string"}'
	
Comando para consultar un producto por fecha de caducidad:

    near view $NOMBRE_DE_CONTRATO get_lote_producto '{"lote":"string"}'
	
Comando para consultar un producto por medidas,volumen:

    near view $NOMBRE_DE_CONTRATO get_metraje_producto '{"metraje_cubico":"string"}'
	
Comando para consultar un producto por peso:

    near view $NOMBRE_DE_CONTRATO get_peso_producto '{"peso":"string"}'



/// Trabajadores ///

Comando para registrar trabajador 

    near call $NOMBRE_DE_CONTRATO setTrabajador '{ "id_trabajador":"string", "nombre_trabajador": "string", "numero_seguro": "string", "puesto_trabajador": "string", "inicio_contrato": "string", "fin_contrato": "string" }' --account-id <tu cuenta de testnet>

Comando para consultar todos los trabajadores 

    near view $NOMBRE_DE_CONTRATO getTrabajadores

Comando para consultar un trabajador por ID:

    near view $NOMBRE_DE_CONTRATO get_trabajador_id '{"id_trabajador":"string"}'

Comando para consultar un trabajador por su nombre:

    near view $NOMBRE_DE_CONTRATO get_trabajador_nombre '{"nombre_trabajador":"string"}'

Comando para consultar un trabajador por su numero de seguro:

    near view $NOMBRE_DE_CONTRATO get_trabajador_seguro '{"numero_seguro":"string"}'
	
Comando para consultar un trabajador por puesto de trabajo:

    near view $NOMBRE_DE_CONTRATO get_trabajador_puesto '{"puesto_trabajador":"string"}'

Comando para consultar un trabajador por inicio de contrato:

    near view $NOMBRE_DE_CONTRATO get_trabajador_inicio_contrato '{"inicio_contrato":"string"}'

Comando para consultar un trabajador por fin de contrato:

    near view $NOMBRE_DE_CONTRATO get_trabajador_fin_contrato '{"fin_contrato":"string"}'




/// Pruebas ///

comando para ejecutar las pruebas:

    yarn test

Mockup
https://docs.google.com/document/d/1oECfD3Eo6Qpq0srWcCt5YhG-BQElFFiSYDtj2UQ62nE/edit?usp=sharing
