function numeroPositivo() {
  let N = 0;
  alert("ALGORITMO PARA SABER SI ES POSITIVO O NEGATIVO");
  alert("INGRESE EL NUMERO");
  N = parseFloat(prompt("Ingrese N:"));
  if (N > 0) {
    alert("EL NUMERO ES POSITIVO");
  } else {
    alert("EL NUMERO ES NEGATIVO O CERO");
  }
}

function numeroParoImpar() {
  let N = 0;
  alert("ALGORITMO PAR O IMPAR");
  alert("INGRESE EL NUMERO");
  N = parseInt(prompt("Ingrese N:"));
  if (N % 2 === 0) {
    alert("EL NUMERO ES PAR");
  } else {
    alert("EL NUMERO ES IMPAR");
  }
}

function mayorDeDosNumeros() {
  let N1 = 0;
  let N2 = 0;
  alert("ALGORITMO MAYOR DE DOS NUMEROS");
  alert("INGRESE EL PRIMER NUMERO");
  N1 = parseFloat(prompt("Ingrese N1:"));
  alert("INGRESE EL SEGUNDO NUMERO");
  N2 = parseFloat(prompt("Ingrese N2:"));
  if (N1 < N2) {
    alert(N2 + " ES MAYOR QUE " + N1);
  } else {
    if (N1 > N2) {
      alert(N1 + " ES MAYOR QUE " + N2);
    } else {
      alert("SON IGUALES");
    }
  }
}

function descuentoPorCompra() {
  let V = 0;
  let DC = 0;
  let T = 0;
  alert("ALGORITMO DESCUENTO POR COMPRA");
  alert("INGRESE EL VALOR DE LA COMPRA");
  V = parseFloat(prompt("Ingrese V:"));
  if (V >= 200000) {
    DC = V * 0.10;
    T = V - DC;
    alert("OBTIENE UN DESCUENTO DEL 10%. TOTAL A PAGAR: " + T);
  } else {
    alert("EL TOTAL A PAGAR ES: " + V);
  }
}

function temperaturaCiudad() {
  let T = 0;
  alert("ALGORITMO TEMPERATURA DE UNA CIUDAD");
  alert("INGRESE LA TEMPERATURA");
  T = parseFloat(prompt("Ingrese T:"));
  if (T > 30) {
    alert("LA TEMPERATURA ES ALTA");
  } else {
    alert("LA TEMPERATURA NO ES ALTA");
  }
}

function mayorDeEdad() {
  let ED = 0;
  alert("ALGORITMO MAYOR DE EDAD");
  alert("INGRESE SU EDAD");
  ED = parseInt(prompt("Ingrese ED:"));
  if (ED >= 18) {
    alert("LA PERSONA ES MAYOR DE EDAD");
  } else {
    alert("LA PERSONA ES MENOR DE EDAD");
  }
}

function retiroDinero() {
  let S = 0;
  let VRT = 0;
  let SDF = 0;
  alert("ALGORITMO RETIRO DE DINERO");
  alert("INGRESE EL SALDO DISPONIBLE");
  S = parseFloat(prompt("Ingrese S:"));
  alert("INGRESE EL VALOR DEL RETIRO");
  VRT = parseFloat(prompt("Ingrese el valor a retirar:"));
  if (VRT <= S) {
    SDF = S - VRT;
    alert("EL RETIRO SE REALIZO CON EXITO. SALDO FINAL: " + SDF);
  } else {
    alert("EL RETIRO NO SE PUEDE REALIZAR POR SALDO INSUFICIENTE");
  }
}

function envioGratuito() {
  let V = 0;
  let PFI = 0;
  alert("ALGORITMO ENVIO GRATUITO");
  alert("INGRESE EL VALOR DEL PEDIDO");
  V = parseFloat(prompt("Ingrese el Valor:"));
  if (V >= 150000) {
    alert("EL ENVIO ES GRATIS. TOTAL A PAGAR: " + V);
  } else {
    PFI = V + 12000;
    alert("SE LE APLICO EL COBRO DEL ENVIO (12.000). TOTAL A PAGAR: " + PFI);
  }
}

function numeroMayorOMenorQueOtro() {
  let N1 = 0;
  let N2 = 0;
  alert("ALGORITMO NUMERO MAYOR O MENOR QUE OTRO");
  alert("INGRESE EL PRIMER NUMERO");
  N1 = parseFloat(prompt("Ingreselo:"));
  alert("INGRESE EL SEGUNDO NUMERO");
  N2 = parseFloat(prompt("Ingreselo:"));
  if (N1 > N2) {
    alert(N1 + " ES MAYOR QUE " + N2);
  } else {
    if (N2 > N1) {
      alert(N1 + " ES MENOR QUE " + N2);
    } else {
      alert("LOS NUMEROS SON IGUALES");
    }
  }
}

function tarifaParqueadero() {
  let TP = 0;
  alert("ALGORITMO TARIFA DE PARQUEADERO");
  alert("INGRESE LA PERMANENCIA EN HORAS");
  TP = parseFloat(prompt("Ingrese TP:"));
  if (TP <= 1) {
    alert("LA TARIFA QUE DEBE PAGAR ES 5.000");
  } else if (TP > 1 && TP <= 3) {
    alert("LA TARIFA QUE DEBE PAGAR ES 10.000");
  } else if (TP > 3 && TP <= 6) {
    alert("LA TARIFA QUE DEBE PAGAR ES 18.000");
  } else if (TP > 6) {
    alert("LA TARIFA QUE DEBE PAGAR ES 25.000");
  } else {
    alert("LA TARIFA QUE DEBE PAGAR ES 0");
  }
}

function tarifaTransporte() {
  let ED = 0;
  alert("ALGORITMO TARIFA DE TRANSPORTE");
  alert("INGRESE LA EDAD");
  ED = parseInt(prompt("Ingrese ED:"));
  if (ED <= 5) {
    alert("EL VALOR DE SU TARIFA ES GRATIS (0)");
  } else if (ED > 5 && ED <= 17) {
    alert("EL VALOR DE SU TARIFA ES 2.000");
  } else if (ED > 17 && ED <= 59) {
    alert("EL VALOR DE SU TARIFA ES 3.500");
  } else if (ED > 59) {
    alert("EL VALOR DE SU TARIFA ES 2.500");
  } else {
    alert("EL VALOR DE SU TARIFA ES 0");
  }
}

function clasificacionVelocidad() {
  let VL = 0;
  alert("ALGORITMO CLASIFICACION DE VELOCIDAD");
  alert("INGRESE LA VELOCIDAD");
  VL = parseFloat(prompt("Ingrese VL:"));
  if (VL <= 30) {
    alert("LA VELOCIDAD ES BAJA");
  } else if (VL > 30 && VL <= 60) {
    alert("LA VELOCIDAD ES MODERADA");
  } else if (VL > 60 && VL <= 100) {
    alert("LA VELOCIDAD ES ALTA");
  } else if (VL > 100) {
    alert("LA VELOCIDAD ES MUY ALTA");
  } else {
    alert("LA VELOCIDAD ES INVALIDA");
  }
}

function mesYDias() {
  let M = 0;
  alert("ALGORITMO MES Y DIAS");
  alert("INGRESE EL NUMERO DEL MES (1-12)");
  M = parseInt(prompt("Ingrese M:"));
  if (M === 1 || M === 3 || M === 5 || M === 7 || M === 8 || M === 10 || M === 12) {
    alert("EL MES TIENE 31 DIAS");
  } else if (M === 4 || M === 6 || M === 9 || M === 11) {
    alert("EL MES TIENE 30 DIAS");
  } else if (M === 2) {
    alert("EL MES TIENE 28 DIAS");
  } else {
    alert("EL MES ES INVALIDO");
  }
}

function accesoAtraccion() {
  let ED = 0;
  let EST = 0;
  alert("ALGORITMO ACCESO A UNA ATRACCION");
  ED = parseInt(prompt("Ingrese ED:"));
  if (ED >= 12) {
    alert("INGRESE LA ESTATURA EN METROS");
    EST = parseFloat(prompt("Ingrese EST:"));
    if (EST >= 1.40) {
      alert("LA PERSONA PUEDE INGRESAR A LA ATRACCION");
    } else {
      alert("LA PERSONA NO PUEDE INGRESAR POR NO TENER LA ESTATURA MINIMA");
    }
  } else {
    alert("LA PERSONA NO PUEDE INGRESAR POR NO CUMPLIR LA EDAD MINIMA");
  }
}

function descuentoSegunCliente() {
  let C = "";
  let DC = 0;
  let V = 0;
  let TTP = 0;
  alert("ALGORITMO DESCUENTO SEGUN CLIENTE");
  alert("INGRESE EL TIPO DE CLIENTE (NORMAL / FRECUENTE)");
  C = prompt("Ingrese C:");
  if (C == "NORMAL") {
    alert("INGRESE EL VALOR DEL PEDIDO");
    V = parseFloat(prompt("Ingrese V:"));
    if (V > 200000) {
      DC = V * 0.05;
      TTP = V - DC;
      alert("POR SU COMPRA TIENE 5% DE DESCUENTO. TOTAL: " + TTP);
    } else {
      alert("EL VALOR A PAGAR ES " + V);
    }
  } else if (C == "FRECUENTE") {
    alert("INGRESE EL VALOR DEL PEDIDO");
    V = parseFloat(prompt("Ingrese V:"));
    if (V > 200000) {
      DC = V * 0.10;
      TTP = V - DC;
      alert("POR SU COMPRA TIENE 10% DE DESCUENTO. TOTAL: " + TTP);
    } else {
      alert("EL VALOR A PAGAR ES " + V);
    }
  } else {
    alert("DEBE INGRESAR UN TIPO DE CLIENTE VALIDO");
  }
}

function cajeroAutomatico() {
  let S = 0;
  let V = 0;
  alert("ALGORITMO CAJERO AUTOMATICO");
  alert("INGRESE EL SALDO DISPONIBLE");
  S = parseFloat(prompt("Ingrese S:"));
  alert("INGRESE EL VALOR A RETIRAR");
  V = parseFloat(prompt("Ingrese V:"));
  if (V > 0) {
    if (V % 10000 == 0) {
      if (V < S) {
        alert("OPERACION EXITOSA, RETIRO REALIZADO");
      } else {
        alert("EL VALOR DEL RETIRO SUPERA SU SALDO DISPONIBLE");
      }
    } else {
      alert("EL RETIRO DEBE SER MULTIPLO DE 10.000");
    }
  } else {
    alert("EL VALOR DEBE SER MAYOR A 0");
  }
}

function validacionContrasena() {
  let US = "ADMIN";
  let CL = "123";
  let USER = "";
  let PASS = "";
  alert("ALGORITMO VALIDACION DE CONTRASEÑA");
  alert("INGRESE EL USUARIO");
  USER = prompt("Ingrese USER:");
  if (USER == US) {
    alert("INGRESE LA CONTRASEÑA");
    PASS = prompt("Ingrese PASS:");
    if (PASS == CL) {
      alert("BIENVENIDO, ACCESO CONCEDIDO");
    } else {
      alert("CONTRASEÑA INCORRECTA");
    }
  } else {
    alert("USUARIO INCORRECTO");
  }
}

function anoBisiesto() {
  let AÑO = 0;
  alert("ALGORITMO AÑO BISIESTO");
  alert("INGRESE UN AÑO");
  AÑO = parseInt(prompt("Ingrese AÑO:"));
  if ((AÑO % 4 == 0 && AÑO % 100 != 0) || (AÑO % 400 == 0)) {
    alert("EL AÑO " + AÑO + " ES BISIESTO");
  } else {
    alert("EL AÑO " + AÑO + " NO ES BISIESTO");
  }
}

function clasificacionTriangulos() {
  let L1 = 0;
  let L2 = 0;
  let L3 = 0;
  alert("ALGORITMO CLASIFICACION DE TRIANGULOS");
  alert("INGRESE LA LONGITUD DEL LADO 1");
  L1 = parseFloat(prompt("Ingrese L1:"));
  alert("INGRESE LA LONGITUD DEL LADO 2");
  L2 = parseFloat(prompt("Ingrese L2:"));
  alert("INGRESE LA LONGITUD DEL LADO 3");
  L3 = parseFloat(prompt("Ingrese L3:"));
  if (L1 + L2 > L3 && L1 + L3 > L2 && L2 + L3 > L1) {
    if (L1 == L2 && L2 == L3) {
      alert("EL TRIANGULO ES EQUILATERO");
    } else if (L1 == L2 || L1 == L3 || L2 == L3) {
      alert("EL TRIANGULO ES ISOSCELES");
    } else {
      alert("EL TRIANGULO ES ESCALENO");
    }
  } else {
    alert("NO SE PUEDE FORMATION UN TRIANGULO CON ESOS LADOS");
  }
}

function calculadora() {
  let NM1 = 0;
  let NM2 = 0;
  let OP = 0;
  alert("ALGORITMO CALCULADORA");
  alert("INGRESE EL PRIMER NUMERO");
  NM1 = parseFloat(prompt("Ingrese NM1:"));
  alert("INGRESE EL SEGUNDO NUMERO");
  NM2 = parseFloat(prompt("Ingrese NM2:"));
  alert("INGRESE LA OPERACION (1: SUMA, 2: RESTA, 3: MULTIPLICACION, 4: DIVISION)");
  OP = parseInt(prompt("Ingrese OP:"));
  if (OP == 1) {
    OP = NM1 + NM2;
    alert("EL RESULTADO ES: " + OP);
  } else if (OP == 2) {
    if (NM1 >= NM2) {
      OP = NM1 - NM2;
      alert("EL RESULTADO ES: " + OP);
    } else {
      alert("LA RESTA DA UN NUMERO NEGATIVO");
    }
  } else if (OP == 3) {
    OP = NM1 * NM2;
    alert("EL RESULTADO ES: " + OP);
  } else if (OP == 4 && NM2 != 0) {
    OP = NM1 / NM2;
    alert("EL RESULTADO ES: " + OP);
  } else {
    alert("NO SE PUEDE REALIZAR LA OPERACION");
  }
}

function tarifasEquipaje() {
  let PESO = 0;
  alert("ALGORITMO SISTEMA DE TARIFAS DE EQUIPAJE");
  alert("INGRESE EL PESO DEL EQUIPAJE");
  PESO = parseFloat(prompt("Ingrese PESO:"));
  if (PESO <= 23) {
    alert("EL TRANSPORTE DE SU MALETA NO TIENE COSTO ADICIONAL");
  } else if (PESO > 23 && PESO <= 30) {
    alert("EL COSTO ADICIONAL ES DE 50.000");
  } else if (PESO > 30 && PESO <= 40) {
    alert("EL COSTO ADICIONAL ES DE 100.000");
  } else {
    alert("NO SE PERMITE TRANSPORTAR LA MALETA");
  }
}

function facturaCompra() {
  let V = 0;
  let DC = 0;
  let VDC = 0;
  let IVA = 0;
  let TTP = 0;
  alert("ALGORITMO FACTURA DE COMPRA");
  alert("INGRESE EL VALOR DE LA COMPRA");
  V = parseFloat(prompt("Ingrese V:"));
  if (V >= 100000 && V <= 299000) {
    DC = V * 0.05;
    VDC = V - DC;
    IVA = VDC * 0.19;
    TTP = VDC + IVA;
    alert("POR SU COMPRA OBTIENE 5% DE DESCUENTO. TOTAL A PAGAR: " + TTP);
  } else if (V >= 300000 && V <= 499000) {
    DC = V * 0.10;
    VDC = V - DC;
    IVA = VDC * 0.19;
    TTP = VDC + IVA;
    alert("POR SU COMPRA OBTIENE 10% DE DESCUENTO. TOTAL A PAGAR: " + TTP);
  } else if (V >= 500000) {
    DC = V * 0.15;
    VDC = V - DC;
    IVA = VDC * 0.19;
    TTP = VDC + IVA;
    alert("POR SU COMPRA OBTIENE 15% DE DESCUENTO. TOTAL A PAGAR: " + TTP);
  } else {
    alert("NO OBTUVO DESCUENTO. TOTAL A PAGAR: " + (V + (V * 0.19)));
  }
}

function calificacionRiesgo() {
  let ED = 0;
  let IGM = 0;
  alert("ALGORITMO SISTEMA DE CALIFICACION DE RIESGO");
  alert("INGRESE LA EDAD");
  ED = parseInt(prompt("Ingrese ED:"));
  if (ED >= 18) {
    alert("INGRESE LOS INGRESOS MENSUALES");
    IGM = parseFloat(prompt("Ingrese IGM:"));
    if (ED >= 18 && ED <= 25) {
      if (IGM > 2000000) {
        alert("ES ELEGIBLE");
      } else {
        alert("NO ES ELEGIBLE");
      }
    } else if (ED > 25) {
      if (IGM > 1500000) {
        alert("ES ELEGIBLE");
      } else {
        alert("NO ES ELEGIBLE");
      }
    } else {
      alert("NO ES ELEGIBLE");
    }
  } else {
    alert("NO ES ELEGIBLE");
  }
}

function mayorMenorIgualdadTresNumeros() {
  let NUM1 = 0;
  let NUM2 = 0;
  let NUM3 = 0;
  alert("ALGORITMO MAYOR, MENOR E IGUALDAD ENTRE 3 NUMEROS");
  alert("INGRESE EL PRIMER NUMERO");
  NUM1 = parseFloat(prompt("Ingrese NUM1:"));
  alert("INGRESE EL SEGUNDO NUMERO");
  NUM2 = parseFloat(prompt("Ingrese NUM2:"));
  alert("INGRESE EL TERCER NUMERO");
  NUM3 = parseFloat(prompt("Ingrese NUM3:"));
  if (NUM1 === NUM2 && NUM2 === NUM3) {
    alert("TODOS LOS NUMEROS SON IGUALES");
  } else if (NUM1 === NUM2) {
    alert("EXISTEN NUMEROS IGUALES (NUM1 Y NUM2)");
  } else if (NUM1 === NUM3) {
    alert("EXISTEN NUMEROS IGUALES (NUM1 Y NUM3)");
  } else if (NUM2 === NUM3) {
    alert("EXISTEN NUMEROS IGUALES (NUM2 Y NUM3)");
  } else if (NUM1 > NUM2 && NUM1 > NUM3) {
    alert(NUM1 + " ES EL MAYOR");
  } else if (NUM2 > NUM1 && NUM2 > NUM3) {
    alert(NUM2 + " ES EL MAYOR");
  } else if (NUM3 > NUM1 && NUM3 > NUM2) {
    alert(NUM3 + " ES EL MAYOR");
  } else {
    alert("NO EXISTEN NUMEROS MAYORES DEFINIDOS");
  }
}

//ALGORITMOS DE BUCLES

function contarNumeros(){

let ni = parseInt(prompt("Ingrese el número inicial:"));
let nl = parseInt(prompt("Ingrese el número límite:"));

for (let contador = ni; contador <= nl; contador++) {
    console.log("Mostrando: " + contador);
  }

}

function cuentaRegresiva (){
  
for (let contador = 10; contador >= 0; contador--) {
    console.log("Mostrando: " + contador);
  }
} 

 
function numerosPares(){
  
let limite = parseInt(prompt("Ingrese el número límite:"));
let inNum = 1;

while (inNum < limite) {
    if (inNum % 2 === 0) {
        console.log("Mostrando: " + inNum);
        inNum += 2;
    } else {
        inNum += 1;
        console.log("Mostrando: " + inNum);
    }
  }
}

function sumaDenumeros(){

let limite = parseInt(prompt("Por favor ingrese el número límite:"));
let suma = 0;

 for (let contador = 1; contador <= limite; contador++) {
    suma += contador;
 }

 console.log("El resultado es: " + suma);
}

function TabladeMultiplicar(){

let nu = parseInt(prompt("Ingrese el número que desea multiplicar:"));

 for (let c = 1; c <= 10; c++) {
    console.log("Mostrando: " + nu + " * " + c + " = " + (nu * c));
 }
}

function ingresarNumeroshastacero(){
let n = parseFloat(prompt("Ingrese un número (0 para salir):"));
let cantidad = 0;
let s = 0;

 while (n !== 0) {
    cantidad = cantidad + 1;
    s = s + n;
    n = parseFloat(prompt("Ingrese otro número:"));
 }

 if (cantidad > 0) {
    let p = s / cantidad;
    console.log("Cantidad de números ingresados: " + cantidad);
    console.log("Suma de los números: " + s);
    console.log("Promedio de los números: " + p);
  } else {
    console.log("No se ingresó ningún número antes del 0.");
  }  
}

function validacionDeContrasena() {
    let cg = "1234";
    let ci = prompt("INGRESE LA CONTRASEÑA");
    while (ci !== cg) {
        console.log("CONTRASEÑA INCORRECTAAAAAAA!!!!!");
        ci = prompt("INGRESE LA CONTRASEÑA DE NUEVO");
    }
    console.log("CONTRASEÑA CORRECTA, BIENVENIDO COLEGA");
}

function menuDeOpciones() {
    let opcion = 0;
    while (opcion !== 4) {
        opcion = parseInt(prompt("HOLA, MIRA NUESTRO MENU DE OPCIONES:\n1. MOSTRAR MENSAJE\n2. MOSTRAR INFORMACION\n3. REALIZAR OPERACION\n4. SALIR"));
        if (opcion === 1) {
            console.log("BIENVENIDO A MULTIPLATAFORMA, ¿En qué te podemos ayudar?");
        } else if (opcion === 2) {
            console.log("SOMOS UNA MULTIPLATAFORMA PARA FACILITAR TRABAJO ESCOLAR");
        } else if (opcion === 3) {
            console.log("EJECUTANDO OPERACION MATEMATICA...");
        } else if (opcion === 4) {
            console.log("GRACIAS POR SU ATENCION, HASTA LUEGO!");
        } else {
            console.log("OPCION NO VALIDA, INTENTE DE NUEVO");
        }
    }
}

function cajeroAutomatico() {
    let saldo = 100000;
    let opcion = 0;
    while (opcion !== 4) {
        opcion = parseInt(prompt("MENU DE CAJERO:\n1. CONSULTAR SALDO\n2. RETIRAR DINERO\n3. DEPOSITAR DINERO\n4. SALIR"));
        if (opcion === 1) {
            console.log("SU SALDO DISPONIBLE ES: $" + saldo);
        } else if (opcion === 2) {
            let monto = parseFloat(prompt("INGRESE EL VALOR A RETIRAR:"));
            if (monto <= saldo) {
                saldo = saldo - monto;
                console.log("RETIRO EXITOSO. SU SALDO ES: $" + saldo);
            } else {
                console.log("EXCEDE SU SALDO DISPONIBLE");
            }
        } else if (opcion === 3) {
            let monto = parseFloat(prompt("INGRESE EL VALOR A DEPOSITAR:"));
            saldo = saldo + monto;
            console.log("DEPOSITO EXITOSO. SU SALDO ES: $" + saldo);
        } else if (opcion === 4) {
            console.log("GRACIAS POR UTILIZAR NUESTRO SERVICIO DE CAJERO AUTOMATICO!");
        } else {
            console.log("OPCION INVALIDA, SELECCIONE UN NUMERO ENTRE 1 Y 4");
        }
    }
}

function sistemaDeNotas() {
    let e = parseInt(prompt("INGRESE LA CANTIDAD DE ESTUDIANTES DEL GRUPO"));
    let n = parseFloat(prompt("INGRESE LA NOTA FINAL DEL ESTUDIANTE Nº 1:"));
    let s = n;
    let ma = n;
    let mb = n;
    let a = 0;
    let r = 0;
    
    if (n >= 3.0) { a = a + 1; } else { r = r + 1; }

    for (let c = 2; c <= e; c++) {
        n = parseFloat(prompt("INGRESE LA NOTA FINAL DEL ESTUDIANTE Nº " + c + ":"));
        s = s + n;
        if (n >= 3.0) { a = a + 1; } else { r = r + 1; }
        if (n > ma) { ma = n; }
        if (n < mb) { mb = n; }
    }
    
    let p = s / e;
    console.log("* REPORTE DE NOTAS FINAL *");
    console.log("TOTAL DE ESTUDIANTES EVALUADOS: " + e);
    console.log("ESTUDIANTES QUE APROBARON: " + a);
    console.log("ESTUDIANTES QUE REPROBARON: " + r);
    console.log("PROMEDIO GENERAL DEL GRUPO: " + p);
    console.log("NOTA MAS ALTA DEL GRUPO: " + ma);
    console.log("NOTA MAS BAJA DEL GRUPO: " + mb);
}

function adivinarElNumero() {
    let ns = 55;
    let iu = 0;
    let i = 0;
    while (iu !== ns) {
        iu = parseInt(prompt("INGRESE UN Nº PARA HALLAR EL Nº SECRETO:"));
        i = i + 1;
        if (iu < ns) {
            console.log("EL NUMERO SECRETO ES MAYOR");
        } else if (iu > ns) {
            console.log("EL NUMERO SECRETO ES MENOR");
        } else {
            console.log("CASI QUE NO, ACERTO EL NUMERO!!");
        }
    }
    console.log("LO INTENTO " + i + " VECES");
}

function registroDeProductos() {
    let ct = parseInt(prompt("INGRESE LA CANTIDAD DE PRODUCTOS QUE DESEA REGISTRAR"));
    let np = prompt("NOMBRE DEL 1 PRODUCTO:");
    let pp = parseFloat(prompt("PRECIO DEL PRODUCTO:"));
    let cd = parseInt(prompt("CANTIDAD DISPONIBLE:"));
    
    let vti = pp * cd;
    let pmy = pp;
    let pmn = pp;
    let pdm = np;
    let pdmn = np;

    for (let nbp = 2; nbp <= ct; nbp++) {
        console.log("PRODUCTO " + nbp);
        np = prompt("NOMBRE DEL PRODUCTO:");
        pp = parseFloat(prompt("PRECIO DEL PRODUCTO:"));
        cd = parseInt(prompt("CANTIDAD DISPONIBLE:"));
        
        vti = vti + (pp * cd);
        if (pp > pmy) {
            pmy = pp;
            pdm = np;
        }
        if (pp < pmn) {
            pmn = pp;
            pdmn = np;
        }
    }

    console.log("RESUMEN DE LA COMPRA");
    console.log("TOTAL DE PRODUCTOS REGISTRADOS: " + ct);
    console.log("VALOR TOTAL DEL INVENTARIO: $" + vti);
    console.log("PRODUCTO CON MAYOR PRECIO: " + pdm + " ($" + pmy + ")");
    console.log("PRODUCTO CON MENOR PRECIO: " + pdmn + " ($" + pmn + ")");
}

function acumuladorHastaAlcanzarUnLimite() {
    let sm = 0;
    let cd = 0;
    while (sm < 100) {
        let n = parseFloat(prompt("INGRESE UN NUMERO"));
        sm = sm + n;
        cd = cd + 1;
    }
    let pm = sm / cd;
    console.log("NUMEROS INGRESADOS: " + cd);
    console.log("SUMA ACUMULADA: " + sm);
    console.log("PROMEDIO DE LOS NUMEROS: " + pm);
}

function sistemaDeCompras() {
    let sbt = 0;
    let cdt = 0;
    let continuar = "SI";
    
    while (continuar.toUpperCase() === "SI") {
        let nb = prompt("INGRESE EL NOMBRE DEL PRODUCTO:");
        let pp = parseFloat(prompt("INGRESE EL PRECIO DEL PRODUCTO:"));
        let cd = parseInt(prompt("INGRESE LA CANTIDAD DE PRODUCTOS QUE DESEA:"));
        
        sbt = sbt + (pp * cd);
        cdt = cdt + cd;
        
        continuar = prompt("DESEA AGREGAR OTRO PRODUCTO? (SI / NO):");
    }

    let d = 0;
    if (sbt <= 299999) {
        d = sbt * 0.05;
    } else if (sbt <= 499999) {
        d = sbt * 0.10;
    } else {
        d = sbt * 0.15;
    }

    let sbd = sbt - d;
    let iva = sbd * 0.19;
    let tp = sbd + iva;

    console.log("--- FACTURA ---");
    console.log("UNIDADES EN TOTAL: " + cdt);
    console.log("SUBTOTAL: $" + sbt);
    console.log("DESCUENTO: $" + d);
    console.log("IVA (19%): $" + iva);
    console.log("TOTAL A PAGAR: $" + tp);
}

function contarParesEImpares() {
    let n = parseInt(prompt("INGRESE EL NUMERO LIMITE"));
    let np = 0;
    let ni = 0;
    for (let c = 1; c <= n; c++) {
        console.log(c);
        if (c % 2 === 0) {
            np = np + 1;
        } else {
            ni = ni + 1;
        }
    }
    console.log("CANTIDAD DE NUMEROS PARES:" + np);
    console.log("CANTIDAD DE NUMEROS IMPARES:" + ni);
}

function promedioDeNumeros() {
    let cantidad = parseInt(prompt("CUANTOS NUMEROS DESEA INGRESAR?"));
    let s = 0;
    for (let c = 1; c <= cantidad; c++) {
        let n = parseFloat(prompt("INGRESE EL NUMERO " + c + ":"));
        s = s + n;
    }
    let p = s / cantidad;
    console.log("CANTIDAD DE NUMEROS INGRESADO:" + cantidad);
    console.log("SUMA TOTAL:" + s);
    console.log("PROMEDIO:" + p);
}

function numeroMayor() {
    let cantidad = parseInt(prompt("¿CUANTOS NUMEROS DESEA INGRESAR?"));
    let n = parseFloat(prompt("INGRESE EL PRIMER NUMERO"));
    let m = n;
    for (let c = 2; c <= cantidad; c++) {
        n = parseFloat(prompt("INGRESE UN NUMERO " + c + ":"));
        if (n > m) {
            m = n;
        }
    }
    console.log("EL NUMERO MAYOR INGRESADO ES:" + m);
}

function numeroMenor() {
    let cantidad = parseInt(prompt("¿cuantos numeros desea ingresar?"));
    let n = parseFloat(prompt("INGRESE EL PRIMER NUMERO"));
    let m = n;
    for (let c = 2; c <= cantidad; c++) {
        n = parseFloat(prompt("INGRESE UN NUMERO " + c + ":"));
        if (n < m) {
            m = n;
        }
    }
    console.log("EL NUMERO MENOR ES:" + m);
}

function clasificacionNumeros() {
    let cantidad = parseInt(prompt("¿CUANTOS NUMEROS DESEA INGRESAR?"));
    let liP = "";
    let liN = "";
    let liC = "";
    for (let c = 1; c <= cantidad; c++) {
        let n = parseFloat(prompt("INGRESE UN NUMERO:"));
        if (n > 0) {
            liP = liP + n + " ";
        } else if (n < 0) {
            liN = liN + n + " ";
        } else {
            liC = liC + n + " ";
        }
    }
    console.log("CANTIDAD DE NUMEROS POSITIVOS: " + liP);
    console.log("CANTIDAD DE NUMEROS NEGATIVOS: " + liN);
    console.log("IGUAL A CERO: " + liC);
}

function estadisticasVentas() {
    let cantidad = parseInt(prompt("INGRESE LA CANTIDAD DE VENTAS DEL DIA"));
    let v = parseFloat(prompt("INGRESE EL VALOR DE LA VENTA Nº 1:"));
    let s = v;
    let M = v;
    let me = v;
    for (let c = 2; c <= cantidad; c++) {
        v = parseFloat(prompt("INGRESE EL VALOR DE LA VENTA Nº " + c + ":"));
        s = s + v;
        if (v > M) {
            M = v;
        }
        if (v < me) {
            me = v;
        }
    }
    let p = s / cantidad;
    console.log("TOTAL DE VENTAS : $" + s);
    console.log("PROMEDIO DE VENTAS: $" + p);
    console.log("VENTA DE MAYOR VALOR : $" + M);
    console.log("VENTA DE MENOR VALOR : $" + me);
}

//Algoritmos secuenciales

function sumar(){
    let n1, n2, suma;
alert("ESTE ALGORITMO SUMA 2 NUMEROS INGRESADOS POR EL USUARIO");
n1 = parseFloat(prompt("INGRESE EL PRIMER NUMERO"));
n2 = parseFloat(prompt("INGRESE EL SEGUNDO NUMERO"));

suma = n1 + n2;
alert("EL RESULTADO DE A SUMA ES: "+ suma);


}
 function operacionesBasicas(){
    let n1;
    let n2;
    let suma;
    let resta;
    let multiplicacion;
    let division;
alert("ESTE ALGORITMO RELIZA LAS OPERACIONES BASICAS DE LA MATEMATICA DE 2 NUMEROS INGRESADOS");
n1 = parseFloat(prompt("INGRESE EL PRIMER NUMERO A OPERAR"));
n2 = parseFloat(prompt("INGRESE EL SEGUNDO NUMERO A OPERAR"));

suma = n1 + n2;
resta = n1 - n2;
multiplicacion = n1 * n2;
division = n1 / n2;
alert("EL RESULTADO DE LA SUMA ES: "+ suma +"DE LA RESTA ES: "+ resta +" EL DE LA MULTIPLICACION ES: "+ multiplicacion +"Y EL DE LA DIVISION ES: "+ division);
 }
function conversionUnidades (){
    let m;
    let cm;
    let km;
    
alert("ESTE ALGORITMO HACE LA CONVERSION DE UN VALOR EN METROS A CENTIMETROS Y KILOMETROS");
m = parseFloat(prompt("INGRESE LOS METROS A CONVERTIR"));
cm = m*100;
km = m/1000;

alert("LOS METRTOS EN CENTIMETROS SON: "+  cm  +" Y EN KILOMETROS: "+ km )
}
function conversionTemperatura(){
    let n1;
    let k;
    let f;

    alert("ESTE ALGORITMO REALIZA LA CONVERSION DE GRADOS CELCIUS A GRADOS KELVIN Y GRADOS FARENHEIT")
    n1 = parseFloat(prompt("INGRESE LOS GRADOS A CONVERTIR"));
    k = n1+273;
    f = (n1 * 1.8) + 32;

    alert("EL RESULTADO DE GRADOS CELCIUS A KELVIN:, "+  k  +" Y EN FARENHEIT ES: "+ f)
}
function areaperimetroRectangulo (){
    let a;
    let b;
    let p;
    let ar;
    alert("ESTE ALGORITMO HALLA EL AREA Y PERIMETRO DE UN RECTANGULO INGRESANDO SU BASE Y ALTURA");
    a = parseFloat(prompt("INGRESE LA ALTURA DEL RECTANGULO"));
    b = parseFloat(prompt("INGRESE LA BASE DEL RECTANGULO"));
    p = 2*(b+a);
    ar= (b*a)/2 ;
    alert("EL AREA DEL RECTANGULO ES: "+ ar +" Y EL PERIMETRO DEL RECTANGULO ES : "+ p);


}
function promedio3numeros (){
    let n1;
    let n2; 
    let n3;
    let p;
    alert("ESTE ALGORITMO REALIZA EL PROMEDIO DE TRES NOTAS INGRESADAS POR EL USUARIO");
    n1 = parseFloat(prompt("INGRESE LA PRIMER NOTA"));
    n2 = parseFloat(prompt("INGRESE LA SEGUNDA NOTA"));
    n3 = parseFloat(prompt("INGRESE LA TRECER NOTA"));
    p = (n1+n2+n3)/3;
    alert("EL PROMEDIO DE LAS NOTAS INGRESADAS ES: "+ p);

}
function conversiondeTiempo(){
    let s;
    let m;
    let h;
    alert("ESTE ALGORITMO REALIZA LA CONVERISON DE TIEMPO INGRESADOS EN SEGUNDOS A MINUTOS Y HORAS");
    s = parseFloat(prompt("INGRESE LOS SEGUNDOS A CONVERTIR"));
    m = s/60;
    h = s/3.600;
    alert("LOS "+ s +" SEGUNDOS SON: "+ m +" MINUTOS Y: "+ h +" HORAS" );
}
function conversiondeUpeso(){
    let p;
    let gr;
    let lb; 
    let T; 
    alert("ESTE ALGORITMO REALIZA LA CONVERSION DEL PESO en Kg A gr - Lb - T");
    p = parseFloat(prompt("INGRESE EL PESO EN kg A CONVERTIR"));
    gr = p*100;
    lb = p*2,2;
    T = p/1000;
    alert( "LOS "+ p +" Kg EN GRAMOS SON: "+ gr +"...EN LIBRAS: "+ lb +" Y EN TONELADAS ES: "+ T);
}
function ConversordepesoPlanetas(){
    let p, pm, pv, pl, pma, pj, ps, pu, pn;
    alert("ESTE ALGORITMO REALIZA LA CONVERSION DE SU PESO EN LA TIERRA AL PESO EN PLANETAS DEL SISTEMA SOLAR");
    p = parseFloat(prompt("INGRESE SU PESO EN LA TIERRA"));
    pm = p * 3,70;
    pv = p * 8,87;
    pl = p * 1,62;
    pma = p * 3,71;
    pj = p * 24,79;
    ps = p * 10,44; 
    pu =  p * 8,69; 
    pn = p * 11,15; 
    alert("SU PESO DE LA TIRRA EN MARTE ES: "+ pma +" EN  NEPTUNO ES: "+ pn +" EN MERCURIO ES: "+ pm +" EN JUPITER ES: "+ pj +" EN LA LUNA ES: "+ pl +" EN VENUS ES: "+ pv +" EN SATURNO ES: "+ ps+" Y EN URANO ES: "+ pu  );
}

function calculodeCompra () {
    let p1, p2, p3, c1, c2, c3, vT;
    alert("ESTE ALGORITMO REALIZA EL TOTAL DE UNA COMPRA EN PRECIO Y CANTIDAD SEGUN LO INGRESADO POR EL USUARIO");
    p1 = parseFloat(prompt("INGRESE EL PRECIO DEL PRIMER PRODUCTO"));
    c1 = parseFloat(prompt("INGRESE LA CANTIDAD DEL PRIMER PRODUCTO"));

}