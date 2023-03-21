interface SeedCarBrands {
    name: string;
    state: boolean;
    enabled:boolean;
}

interface SeedCategory {
    name: string;
    state: boolean;
    enabled:boolean;
}

interface SeedProductBrands {
    name: string;
    state: boolean;
    enabled:boolean;
}

interface SeedProviders {
    name: string;
    shortName: string;
    address?: string;
    phone?:string;
    email?:string;
    state?:string;
}

interface SeedData {
    carBrands: SeedCarBrands[];
    categories: SeedCategory[];
    productBrands: SeedProductBrands[];
    providers: SeedProviders[];
}

export const initialData: SeedData = {
    carBrands:[
        {
            name: "AGRALE",
            state: true,
            enabled: true
        },
        {
            name: "ALEKO",
            state: true,
            enabled: true
        },
        {
            name: "ALFA ROMEO",
            state: true,
            enabled: true
        },
        {
            name: "ASIA",
            state: true,
            enabled: true
        },
        {
            name: "AUDI",
            state: true,
            enabled: true
        },
        {
            name: "BEDFORD",
            state: true,
            enabled: true
        },
        {
            name: "BMW",
            state: true,
            enabled: true
        },
        {
            name: "BOERO",
            state: true,
            enabled: true
        },
        {
            name: "CHERY",
            state: true,
            enabled: true
        },
        {
            name: "CHEVROLET",
            state: true,
            enabled: true
        },
        {
            name: "CHRYSLER",
            state: true,
            enabled: true
        },
        {
            name: "CITROEN",
            state: true,
            enabled: true
        },
        {
            name: "CRHYSLER",
            state: true,
            enabled: true
        },
        {
            name: "DACIA",
            state: true,
            enabled: true
        },
        {
            name: "DAEWO",
            state: true,
            enabled: true
        },
        {
            name: "DAEWOO",
            state: true,
            enabled: true
        },
        {
            name: "DAIHATSU",
            state: true,
            enabled: true
        },
        {
            name: "DATSUN",
            state: true,
            enabled: true
        },
        {
            name: "DEUTZ",
            state: true,
            enabled: true
        },
        {
            name: "DODGE",
            state: true,
            enabled: true
        },
        {
            name: "EL DETALLE",
            state: true,
            enabled: true
        },
        {
            name: "FIAT",
            state: true,
            enabled: true
        },
        {
            name: "FORD",
            state: true,
            enabled: true
        },
        {
            name: "GROSSPAL",
            state: true,
            enabled: true
        },
        {
            name: "HONDA",
            state: true,
            enabled: true
        },
        {
            name: "HYUNDAI",
            state: true,
            enabled: true
        },
        {
            name: "IKA",
            state: true,
            enabled: true
        },
        {
            name: "IME",
            state: true,
            enabled: true
        },
        {
            name: "IMPORTADOS",
            state: true,
            enabled: true
        },
        {
            name: "ISUZU",
            state: true,
            enabled: true
        },
        {
            name: "IVECO",
            state: true,
            enabled: true
        },
        {
            name: "JEEP",
            state: true,
            enabled: true
        },
        {
            name: "JOHN DEERE",
            state: true,
            enabled: true
        },
        {
            name: "KIA",
            state: true,
            enabled: true
        },
        {
            name: "LADA",
            state: true,
            enabled: true
        },
        {
            name: "LANCIA",
            state: true,
            enabled: true
        },
        {
            name: "LAND ROVER",
            state: true,
            enabled: true
        },
        {
            name: "LEXUS",
            state: true,
            enabled: true
        },
        {
            name: "MAZDA",
            state: true,
            enabled: true
        },
        {
            name: "MERCEDES BENZ",
            state: true,
            enabled: true
        },
        {
            name: "MINI COOPER",
            state: true,
            enabled: true
        },
        {
            name: "MITSUBISHI",
            state: true,
            enabled: true
        },
        {
            name: "NISSAN",
            state: true,
            enabled: true
        },
        {
            name: "NO ESPECIFICADA",
            state: true,
            enabled: true
        },
        {
            name: "OPEL",
            state: true,
            enabled: true
        },
        {
            name: "PEUGEOT",
            state: true,
            enabled: true
        },
        {
            name: "PORSCHE",
            state: true,
            enabled: true
        },
        {
            name: "PROTON",
            state: true,
            enabled: true
        },
        {
            name: "RASTROJERO",
            state: true,
            enabled: true
        },
        {
            name: "RENAULT",
            state: true,
            enabled: true
        },
        {
            name: "ROVER",
            state: true,
            enabled: true
        },
        {
            name: "SAAB",
            state: true,
            enabled: true
        },
        {
            name: "SCANIA",
            state: true,
            enabled: true
        },
        {
            name: "SEAT",
            state: true,
            enabled: true
        },
        {
            name: "SMART",
            state: true,
            enabled: true
        },
        {
            name: "SSANGYONG",
            state: true,
            enabled: true
        },
        {
            name: "SUBARU",
            state: true,
            enabled: true
        },
        {
            name: "SUZUKI",
            state: true,
            enabled: true
        },
        {
            name: "TATA",
            state: true,
            enabled: true
        },
        {
            name: "TOYOTA",
            state: true,
            enabled: true
        },
        {
            name: "TRACTOR",
            state: true,
            enabled: true
        },
        {
            name: "TRAILER",
            state: true,
            enabled: true
        },
        {
            name: "VARIOS",
            state: true,
            enabled: true
        },
        {
            name: "VOLKSWAGEN",
            state: true,
            enabled: true
        },
        {
            name: "VOLVO",
            state: true,
            enabled: true
        }
    ],
    categories:[
        {
            name: 'ABRAZADERA',
            state: true,
            enabled: true
        },
        {
            name: 'AMORTIGUADOR',
            state: true,
            enabled: true
        },
        {
            name: 'AMORTIGUADOR ESTABILIZADOR',
            state: true,
            enabled: true
        },
        {
            name: 'AMORTIGUADOR RALLY',
            state: true,
            enabled: true
        },
        {
            name: 'AXIAL DE CREMALLERA',
            state: true,
            enabled: true
        },
        {
            name: 'BARRA',
            state: true,
            enabled: true
        },
        {
            name: 'BARRA CENTRAL',
            state: true,
            enabled: true
        },
        {
            name: 'BARRA DE DIRECCION',
            state: true,
            enabled: true
        },
        {
            name: 'BARRA TENSORA',
            state: true,
            enabled: true
        },
        {
            name: 'BIELETA DE SUSPENSION',
            state: true,
            enabled: true
        },
        {
            name: 'BRAZO DE SUSPENSION',
            state: true,
            enabled: true
        },
        {
            name: 'BRAZO DE SUSPENSION AUXILIAR DE DIRECCION',
            state: true,
            enabled: true
        },
        {
            name: 'BRAZO DE SUSPENSION DE SUSPENSION',
            state: true,
            enabled: true
        },
        {
            name: 'BRAZO DE SUSPENSION PITMAN DE DIRECCION',
            state: true,
            enabled: true
        },
        {
            name: 'BRAZO DE SUSPENSION ROTULA DE SUSPENSION DE DIRECCION',
            state: true,
            enabled: true
        },
        {
            name: 'BUJE DE SUSPENSION',
            state: true,
            enabled: true
        },
        {
            name: 'CAJA DE DIRECCION',
            state: true,
            enabled: true
        },
        {
            name: 'CAJA DE DIRECCION REPARADA',
            state: true,
            enabled: true
        },
        {
            name: 'CAZOLETA DE SUSPENSION',
            state: true,
            enabled: true
        },
        {
            name: 'CHAPA PORTAFUELLE',
            state: true,
            enabled: true
        },
        {
            name: 'CRAPODINAS',
            state: true,
            enabled: true
        },
        {
            name: 'CREMALLERA DIRECCION MECANICA',
            state: true,
            enabled: true
        },
        {
            name: 'CREMALLERA REPARADA DIRECCION MECANICA',
            state: true,
            enabled: true
        },
        {
            name: 'CREMALLERAS DE DIRECCION',
            state: true,
            enabled: true
        },
        {
            name: 'CRUCETA DE SUSPENSION',
            state: true,
            enabled: true
        },
        {
            name: 'EJE DE PARRILLA DE SUSPENSION',
            state: true,
            enabled: true
        },
        {
            name: 'EQUILIBRADOR DE BAUL Y COMPUERTA',
            state: true,
            enabled: true
        },
        {
            name: 'ESPIGA DE SEMIEJE',
            state: true,
            enabled: true
        },
        {
            name: 'EXTREMO DE DIRECCION',
            state: true,
            enabled: true
        },
        {
            name: 'FUELLE DE AMORTIGUADOR',
            state: true,
            enabled: true
        },
        {
            name: 'FUELLE DE CARDAN',
            state: true,
            enabled: true
        },
        {
            name: 'FUELLE DE CREMALLERA',
            state: true,
            enabled: true
        },
        {
            name: 'FUELLE DE SEMIEJE',
            state: true,
            enabled: true
        },
        {
            name: 'FUELLE DE SUSPENSION',
            state: true,
            enabled: true
        },
        {
            name: 'FUELLE SELECTOR',
            state: true,
            enabled: true
        },
        {
            name: 'GRASA',
            state: true,
            enabled: true
        },
        {
            name: 'GRASA SEMIEJE',
            state: true,
            enabled: true
        },
        {
            name: 'GUARDAPOLVO',
            state: true,
            enabled: true
        },
        {
            name: 'HOMOCINETICA CARDAN',
            state: true,
            enabled: true
        },
        {
            name: 'JUNTA DESLIZANTE',
            state: true,
            enabled: true
        },
        {
            name: 'JUNTA HOMOCINETICA',
            state: true,
            enabled: true
        },
        {
            name: 'KIT DE BUJES',
            state: true,
            enabled: true
        },
        {
            name: 'KIT FUELLE TRANSMISION',
            state: true,
            enabled: true
        },
        {
            name: 'KIT FUELLE Y TOPE DE SUSPENSION',
            state: true,
            enabled: true
        },
        {
            name: 'KIT FUELLES DIRECCION',
            state: true,
            enabled: true
        },
        {
            name: 'KIT PARRILLA DE SUSPENSION',
            state: true,
            enabled: true
        },
        {
            name: 'MANCHON DE DIRECCION',
            state: true,
            enabled: true
        },
        {
            name: 'PARRILLA DE SUSPENSION',
            state: true,
            enabled: true
        },
        {
            name: 'PINZA PARA ABRAZADERA',
            state: true,
            enabled: true
        },
        {
            name: 'PRECINTO PLASTICO',
            state: true,
            enabled: true
        },
        {
            name: 'PUNTA (MANGA DIFERENCIAL)',
            state: true,
            enabled: true
        },
        {
            name: 'PUNTA DE EJE',
            state: true,
            enabled: true
        },
        {
            name: 'RESORTE DE SUSPENSION PROGRESIVO',
            state: true,
            enabled: true
        },
        {
            name: 'RESORTE DE SUSPENSION RALLY',
            state: true,
            enabled: true
        },
        {
            name: 'RESORTE DE SUSPENSION STANDART',
            state: true,
            enabled: true
        },
        {
            name: 'RESORTES A GAS',
            state: true,
            enabled: true
        },
        {
            name: 'RODAMIENTOS DE SUSPENSION',
            state: true,
            enabled: true
        },
        {
            name: 'RODAMIENTOS KIT',
            state: true,
            enabled: true
        },
        {
            name: 'ROTULA DE SUSPENSION',
            state: true,
            enabled: true
        },
        {
            name: 'SEGURO DE ROTULA DE SUSPENSION',
            state: true,
            enabled: true
        },
        {
            name: 'SEMIEJE',
            state: true,
            enabled: true
        },
        {
            name: 'SINFIN DE DIRECCION',
            state: true,
            enabled: true
        },
        {
            name: 'SOPORTE ADON VARIOS',
            state: true,
            enabled: true
        },
        {
            name: 'SOPORTE BARRA',
            state: true,
            enabled: true
        },
        {
            name: 'SOPORTE BARRA TENSORA',
            state: true,
            enabled: true
        },
        {
            name: 'SOPORTE CAJA',
            state: true,
            enabled: true
        },
        {
            name: 'SOPORTE DE AMORTIGUADOR',
            state: true,
            enabled: true
        },
        {
            name: 'SOPORTE DE CARDAN',
            state: true,
            enabled: true
        },
        {
            name: 'SOPORTE DE CAZOLETA DE SUSPENSION',
            state: true,
            enabled: true
        },
        {
            name: 'SOPORTE MOTOR',
            state: true,
            enabled: true
        },
        {
            name: 'SOPORTE PARRILLA DE SUSPENSION',
            state: true,
            enabled: true
        },
        {
            name: 'SOPORTE SUSPENSION',
            state: true,
            enabled: true
        },
        {
            name: 'SOPORTE TENSOR',
            state: true,
            enabled: true
        },
        {
            name: 'SOPORTE TENSOR COMBA',
            state: true,
            enabled: true
        },
        {
            name: 'SOPORTE TENSOR MOTOR',
            state: true,
            enabled: true
        },
        {
            name: 'SOPORTES DE CARDAN',
            state: true,
            enabled: true
        },
        {
            name: 'TENSOR DE SUSPENSION',
            state: true,
            enabled: true
        },
        {
            name: 'TOPE DE AMORTIGUADOR',
            state: true,
            enabled: true
        },
        {
            name: 'TOPES SUSPENSION',
            state: true,
            enabled: true
        },
        {
            name: 'TRICETA',
            state: true,
            enabled: true
        },
        {
            name: 'TUERCAS SEMIEJE',
            state: true,
            enabled: true
        }
    ],
    productBrands:[
        {
            name: "ADON",
            state: true,
            enabled: true
        },
        {
            name: "AOP",
            state: true,
            enabled: true
        },
        {
            name: "APEX",
            state: true,
            enabled: true
        },
        {
            name: "ARB",
            state: true,
            enabled: true
        },
        {
            name: "ARCER",
            state: true,
            enabled: true
        },
        {
            name: "BLP",
            state: true,
            enabled: true
        },
        {
            name: "CAR",
            state: true,
            enabled: true
        },
        {
            name: "CBK",
            state: true,
            enabled: true
        },
        {
            name: "CEPERGOM",
            state: true,
            enabled: true
        },
        {
            name: "CORAM",
            state: true,
            enabled: true
        },
        {
            name: "CORVEN",
            state: true,
            enabled: true
        },
        {
            name: "DIMET",
            state: true,
            enabled: true
        },
        {
            name: "FYV",
            state: true,
            enabled: true
        },
        {
            name: "GENNOR",
            state: true,
            enabled: true
        },
        {
            name: "GMB-JAPON",
            state: true,
            enabled: true
        },
        {
            name: "GMW",
            state: true,
            enabled: true
        },
        {
            name: "HONSSION",
            state: true,
            enabled: true
        },
        {
            name: "ICSA",
            state: true,
            enabled: true
        },
        {
            name: "IMP",
            state: true,
            enabled: true
        },
        {
            name: "KINN",
            state: true,
            enabled: true
        },
        {
            name: "KML",
            state: true,
            enabled: true
        },
        {
            name: "LACUM",
            state: true,
            enabled: true
        },
        {
            name: "LCP",
            state: true,
            enabled: true
        },
        {
            name: "LEO",
            state: true,
            enabled: true
        },
        {
            name: "LIFGATE",
            state: true,
            enabled: true
        },
        {
            name: "MARIN",
            state: true,
            enabled: true
        },
        {
            name: "METAL CRISPINO",
            state: true,
            enabled: true
        },
        {
            name: "MTX",
            state: true,
            enabled: true
        },
        {
            name: "NO ESPECIFICADO",
            state: true,
            enabled: true
        },
        {
            name: "NTP",
            state: true,
            enabled: true
        },
        {
            name: "ORG",
            state: true,
            enabled: true
        },
        {
            name: "ORIGI",
            state: true,
            enabled: true
        },
        {
            name: "POWER",
            state: true,
            enabled: true
        },
        {
            name: "RACER",
            state: true,
            enabled: true
        },
        {
            name: "RODAX",
            state: true,
            enabled: true
        },
        {
            name: "ROLL",
            state: true,
            enabled: true
        },
        {
            name: "SADAR",
            state: true,
            enabled: true
        },
        {
            name: "SERRAT",
            state: true,
            enabled: true
        },
        {
            name: "STABILUS",
            state: true,
            enabled: true
        },
        {
            name: "SUSPENMEC",
            state: true,
            enabled: true
        },
        {
            name: "VIEMAR",
            state: true,
            enabled: true
        },
        {
            name: "ZNL",
            state: true,
            enabled: true
        }
    ],
    providers:[
        {
            name: 'Autopartes San Martin',
            shortName : 'SM',
        },
        {
            name: 'Autopartes Ramos',
            shortName : 'RM',
        },
        {
            name: 'Ov Suspensión',
            shortName : 'OV',
            address : 'Mariano Fragueiro 701',
            phone : '3515645850',
            email: 'marcosverblud@gmail.com'
        },
    ]
}