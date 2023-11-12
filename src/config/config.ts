// dotenv para acceder a las variables de entorno
import dotenv from 'dotenv'

type TConfig = {
    [key: string]: EnvironmentConfig;
};

type EnvironmentConfig = {
    app: AppConfig;
    db: MongoDBConfig;
};

type MongoDBConfig = {
    URI: string;
}

type AppConfig = {
    PORT: string | number;
};

//process.env nos permite accedes a las variables de entorno
if (process.env.NODE_ENV === 'production') {
    //Configurar el path de la configuración a '.env.production'
    dotenv.config({ path: '.env.production' });
} else {
    //Configurar el path de la configuración a '.env.development'
    dotenv.config({ path: '.env.development' });
}

// Definir configuración default varible entorno 'env'
const ENV = process.env.NODE_ENV ?? 'development';

// Definir la configuración del archivo CONFIG de las variable de entorno (development, productoon)
const CONFIG: TConfig = {
    development: {
        app: {
            // Set path de configuración en la varible de entorno 'process.env' | en caso contrario valor predefinido
            PORT: process.env.PORT || 4001
        },
        db: {
            URI: process.env.MONGO_DB_URI ||
                'mongodb://localhost:27017/test_development'
        }
    },
    production: {
        // Set path de configuración en la varible de entorno 'process.env' | en caso contrario valor predefinido
        app: {
            PORT: process.env.PORT || 4002
        },
        db: {
            URI: process.env.MONGO_DB_URI ||
                'mongodb://localhost:27017/test_production'
        }
    }
};

console.log('>>>CONFIG', CONFIG[ENV]);
export default CONFIG[ENV];