import * as winston from 'winston'
import config from '../config/config'

const loggerNameFormat = (info: any, data: {name: string}) => {
	info.name = data.name
	return info
}

const consoleLogger = new winston.transports.Console();
const transports: any[] = []
transports.push(consoleLogger)

const logger = winston.createLogger({
	format: winston.format.combine(
		winston.format.timestamp(),
		winston.format(loggerNameFormat)({name: config.ENVIRONMENT.APP_NAME}),
		winston.format.json()),
	level: config.LOGGER.LOGGER_LEVEL,
	transports
})	

export default logger
