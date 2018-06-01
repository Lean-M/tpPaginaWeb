"use strict"

let segundo_prosesador = document.getElementById("td_prosesador");
let segundo_gpu = document.getElementById("td_gpu");
let segundo_ram = document.getElementById("td_ram");
let segundo_fuente = document.getElementById("td_fuente");
let segundo_placa = document.getElementById("td_placa");
let segundo_gabinete = document.getElementById("td_gabinete");
let segundo_refrigeracion = document.getElementById("td_refrigeracion");

let btMostrar = document.getElementById("activar");
btMostrar.addEventListener("click", quePcMuestro);

function quePcMuestro(){
    let selectorPc = document.getElementById("otrapc").value;

    switch(selectorPc){
        case "compu1":
            mostrarPc1();
            break;
        case "compu2":
            mostrarPc2();
            break;
        case "compu3":
            mostrarPc3();
            break;
        case "compu4":
            mostrarPc4();
            break;
        case "compu5":
            mostrarPc5();
            break;
        case "compu6":
            mostrarPc6();
            break;
    }
}

function mostrarPc1(){
    segundo_prosesador.innerHTML = "AMD Ryzen 5 1600X";
    segundo_gpu.innerHTML = "GTX 1070 8GB GDRR5 Aorus Gigabyte";
    segundo_ram.innerHTML = "16GB 2X8 3000Mhz DDR4 Corsair Vengeance Led Series";
    segundo_fuente.innerHTML = "750w 80 Plus Bronze Modular Thermaltake";
    segundo_placa.innerHTML =  "Mobo AX370 Gaming K5 Aorus Gigabyte";
    segundo_gabinete.innerHTML = "Case NZXT S340 Elite Matte Black ";
    segundo_refrigeracion.innerHTML = "Water Cooling Thermaltake Riing 3.0 240 Led";
}

function mostrarPc2(){
    segundo_prosesador.innerHTML = "Intel Core i7 7700K";
    segundo_gpu.innerHTML = "GTX 1070 8GB GDRR5 Aorus Gigabyte";
    segundo_ram.innerHTML = "16GB 2X8 3000Mhz Night Hawk T-Force";
    segundo_fuente.innerHTML = "850W 80 Plus Bronze Modular Thermaltake";
    segundo_placa.innerHTML =  "Z270X Gaming K5 Aorus Gigabyte";
    segundo_gabinete.innerHTML = "NZXT S340 Razer Edition";
    segundo_refrigeracion.innerHTML = "Water Cooling RIING 3.0 280 RGB";
}
function mostrarPc3(){
    segundo_prosesador.innerHTML = "Core i7 7700K";
    segundo_gpu.innerHTML = "GTX 1060 6GB 9Gbps GDDR5 Aorus Gigabyte";
    segundo_ram.innerHTML = "16GB 2X8 Corsair Vengeance RGB Series";
    segundo_fuente.innerHTML = "Fuente 650w 80 Plus Modular Thermaltake";
    segundo_placa.innerHTML =  "Z270X Gaming K5 Aorus Gigabyte";
    segundo_gabinete.innerHTML = "Case S340 Matte Elite with Puck NZXT";
    segundo_refrigeracion.innerHTML = "Cooler Master 212 Led";
}

function mostrarPc4(){
    segundo_prosesador.innerHTML = "Intel Core i7 7700K";
    segundo_gpu.innerHTML = "GTX 1080TI 11GB GDRR5 STRIX ASUS";
    segundo_ram.innerHTML = "16GB 2X8 Night Hawk Black RGB Team 3000Mhz";
    segundo_fuente.innerHTML = "850w 80 Plus Modular Thermaltake";
    segundo_placa.innerHTML =  "Mobo Z270F STRIX ASUS";
    segundo_gabinete.innerHTML = "Case 450 Noctis NZXT ROG Edition";
    segundo_refrigeracion.innerHTML = "Kraken X62 RGB NZXT";
}

function mostrarPc5(){
    segundo_prosesador.innerHTML = "Intel Core i7 7700";
    segundo_gpu.innerHTML = "GTX 1060 6GB GDDR5 Windforce Gigabyte";
    segundo_ram.innerHTML = "16GB 2X8 Corsair Vengeance Led Series";
    segundo_fuente.innerHTML = "650w 80 Plus Bronze Modular Thermaltake";
    segundo_placa.innerHTML =  "H270 Gaming 3 Gigabyte";
    segundo_gabinete.innerHTML = "H440 NZXT";
    segundo_refrigeracion.innerHTML = "Cooler Master 212 LED";
}

function mostrarPc6(){
    segundo_prosesador.innerHTML = "AMD Ryzen 5 1600X";
    segundo_gpu.innerHTML = "GTX 1070 8GB GDRR5 Aorus Gigabyte";
    segundo_ram.innerHTML = "16GB 2X8 3000Mhz DDR4 Corsair Vengeance Led Series";
    segundo_fuente.innerHTML = "750w 80 Plus Bronze Modular Thermaltake";
    segundo_placa.innerHTML =  "Mobo AX370 Gaming K5 Aorus Gigabyte";
    segundo_gabinete.innerHTML = "Case NZXT S340 Elite Matte Black";
    segundo_refrigeracion.innerHTML = "Water Cooling Thermaltake Riing 3.0 240 Led";
}