import fs from 'fs';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import FileStreamRotator from 'file-stream-rotator';
import helmet from 'helmet';
import loggerInit from './logger';
import authenticationRoutes from '../app/routes/users';


const logDirectory = './log';
const checkLogDir = fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

const expressConfig = (app) => {
    let accessLogStream;
    let logger;

    logger = initLogger(app)

    global.logger = logger;
    logger.info('Application starting...');

    if (checkLogDir) {
        accessLogStream = FileStreamRotator.getStream({
            date_format: 'YYYYMMDD',
            filename: logDirectory + '/access-%DATE%.log',
            frequency: 'weekly',
            verbose: false
        });
    }

    app.use(morgan('combined', { stream: accessLogStream }));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    // Use helmet to secure Express headers
    app.use(helmet());
    app.disable('x-powered-by');

    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Authorization, Origin, Content-Type, Accept');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
    });
    console.log("Running on port: ", process.env.PORT);

    app.use('/heart_beat', (req, res) => res.status(200).json({ status: "OK" }));
    app.use('/v1/auth/', authenticationRoutes);
    //TODO: Add Routes here

    //Catch 404 and forward to error handlers
    app.use((req, res, next) => {
        const err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    // development error handler
    // will print stacktrace
    if (app.get('env') === 'development' || app.get('env') === 'test') {
        app.use((err, req, res, next) =>
            res.status(err.status || 500).json({
                message: err.message,
                error: err
            })
        );
    }

    // production error handler
    // remove stacktrace
    app.use((err, req, res, next) =>
        res.status(err.status || 500).json({ message: err.message })
    );
};

const initLogger = (app) => {
    let logger;

    if (app.get('env') === 'development') {
        logger = loggerInit('development');
    } else if (app.get('env') === 'production') {
        logger = loggerInit('production');
    } else if (app.get('env') === 'test') {
        logger = loggerInit('test');
    } else {
        logger = loggerInit();
    }
    return logger;
}

export default expressConfig;