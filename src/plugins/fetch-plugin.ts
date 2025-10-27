import * as esbuild from 'esbuild-wasm';
import axios from "axios";
import * as localforage from "localforage";

const fileCache = localforage.createInstance({
    name: 'fileCache',
})

export const fetchPlugin = (inputCode: string) => {
    return {
        name: 'fetch-plugin',
        setup(build: esbuild.PluginBuild) {
            build.onLoad({ filter: /.*/ }, async (args: any) => {
                if (args.path === 'index.js') {
                    return {
                        loader: 'jsx',
                        contents: inputCode,
                    };
                }

                const cachedItem = await fileCache.getItem<esbuild.OnLoadResult>(args.path);
                console.log('onLoadDB', cachedItem);
                if (cachedItem) {
                    return cachedItem;
                }

                const {data, request} = await axios.get(args.path);
                const result: esbuild.OnLoadResult = {
                    loader: 'jsx',
                    contents: data,
                    resolveDir: new URL('./', request.responseURL).pathname
                }
                await fileCache.setItem(args.path, result);
                return result;
            });
        }
    }
}