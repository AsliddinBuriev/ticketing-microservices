import express, { Express } from 'express';
import cors from 'cors';

export class App {
	app: Express;
	constructor() {
		this.app = express();
		this.middlewares();
		this.routes();
		this.errorHandler();
		this.settings();
	}
	settings() {}
	middlewares() {
		this.app.use(cors());
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));
	}
	routes() {
		this.app.get('/api/users/currentuser', (req, res) => {
			res.send('Hi there!');
		})
	}
	errorHandler() {}
}