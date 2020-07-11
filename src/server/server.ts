import 'module-alias/register';
import app from './app';
import connectDB from '@database';
import { PORT } from './config';
const db = connectDB();

app.listen(PORT, () => console.log(`Server started on http:localhost:${PORT}`));

db.on('open', () => console.log('Mongo...'));
