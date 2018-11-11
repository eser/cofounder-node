import Cofounder from 'cofounder';

import fs from './fs/index';
import json from './json/index';
import os from './os/index';

const node: Cofounder = {
    fs,
    json,
    os,
};

export {
    node as default,
    fs,
    json,
    os,
};
