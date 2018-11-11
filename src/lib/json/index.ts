import { CofounderJson } from 'cofounder';

import loadFile from './loadFile';
import saveFile from './saveFile';

const jsonMethod: CofounderJson = {
    loadFile,
    saveFile,
};

export {
    jsonMethod as default,
    loadFile,
    saveFile,
};
