require('dotenv').config();
const app = require('./app/app.js');
const PORT = process.env.PORT || 3010;

if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
