import spawn from 'cross-spawn';
import stream from 'stream';
import appendToObject from 'immunity/lib/appendToObject';

const emptyArray = [];

// taken from @types/cross-spawn npm package
// thanks to Alorel for definitions (https://github.com/Alorel)
type StdioOptions = "pipe" | "ignore" | "inherit" | Array<("pipe" | "ipc" | "ignore" | "inherit" | stream.Stream | number | null | undefined)>;

interface SpawnOptions {
    cwd?: string;
    env?: NodeJS.ProcessEnv;
    argv0?: string;
    stdio?: StdioOptions;
    detached?: boolean;
    uid?: number;
    gid?: number;
    shell?: boolean | string;
    windowsVerbatimArguments?: boolean;
    windowsHide?: boolean;
}

async function shell(command: string, args: Array<any> = emptyArray, options: SpawnOptions): Promise<any> {
    const options_: SpawnOptions = {
        stdio: 'inherit',
        shell: false,
        ...options,
        env: (options !== undefined && options.env !== undefined) ?
            appendToObject(process.env, options.env) :
            process.env,
    };

    const proc = await spawn(
        command,
        args,
        options_,
    );

    process.on('SIGTERM', () => (<any>proc).kill('SIGTERM'));

    return proc;
}

export {
    shell as default,
};
