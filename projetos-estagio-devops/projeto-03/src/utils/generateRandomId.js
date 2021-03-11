import { v4 } from 'uuid';


const generateRandomId = () => `TGL-unique-${v4()}`;

export { generateRandomId };