import app from './app';
import { connectDB } from './db/database';
import { PORT } from './config';

connectDB();

app.listen(5000, () => console.log(`Server started on http:localhost:${PORT}`));
