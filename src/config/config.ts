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

if (process.env.NODE_ENV === 'production') {
    dotenv.config({ path: '.env.production' });
} else {
    dotenv.config({ path: '.env.development' });
}


const ENV = process.env.NODE_ENV ?? 'development';

const CONFIG: TConfig = {
    development: {
        app: {
            PORT: process.env.PORT || 4001
        },
        db: {
            URI: process.env.MONGO_DB_URI ||
                'mongodb://localhost:27017/test_development'
        }
    },
    production: {
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