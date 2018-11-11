import * as fs from 'graceful-fs';

function cp(pathstr: fs.PathLike, dest: fs.PathLike): Promise<void> {
    return new Promise((resolve, reject) => {
        try {
            fs.createReadStream(pathstr)
                .pipe(fs.createWriteStream(dest));

            resolve();
        }
        catch (ex) {
            reject(ex);
        }
    });
}

export {
    cp as default,
};
