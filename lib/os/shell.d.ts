/// <reference types="node" />
import stream from 'stream';
declare type StdioOptions = 'pipe' | 'ignore' | 'inherit' | Array<('pipe' | 'ipc' | 'ignore' | 'inherit' | stream.Stream | number | null | undefined)>;
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
declare function shell(command: string, args: any[] | undefined, options: SpawnOptions): Promise<any>;
export { shell as default, };
