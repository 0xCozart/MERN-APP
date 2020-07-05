import app from './app';
import { connectDB } from './db/database';
import { PORT } from './config';

connectDB();

app.listen(PORT, () => console.log(`Server started on http:localhost:${PORT}`));
