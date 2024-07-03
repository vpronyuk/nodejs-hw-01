import path from 'node:path';

const pathToWorkDir = path.join(process.cwd()); //get path to root directory

export const PATH_DB = path.join(pathToWorkDir, 'src', 'db', 'db.json');
