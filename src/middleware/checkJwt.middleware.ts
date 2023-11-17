import { auth } from 'express-oauth2-jwt-bearer'
import config from '../config/config'

export const checkJwtMiddleware = auth({
    audience: config.auth0?.audience,
    issuerBaseURL: config.auth0?.issuer
});

// Verificar el JWT..
// Coge en el header en el bearer y lo va a parshear..
// Refresj token si esta caducado