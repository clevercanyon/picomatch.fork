/**
 * Typescript config file.
 *
 * Typescript is not aware of this config file's location.
 *
 * @note PLEASE DO NOT EDIT THIS FILE!
 * @note This entire file will be updated automatically.
 * @note Instead of editing here, please review <https://github.com/clevercanyon/skeleton>.
 *
 * @see https://www.typescriptlang.org/tsconfig
 * @see https://vitejs.dev/guide/features.html#typescript-compiler-options
 */
/* eslint-env es2021, node */

import path from 'node:path';
import { $fs } from '../../../../node_modules/@clevercanyon/utilities.node/dist/index.js';

const __dirname = $fs.imuDirname(import.meta.url);
const projDir = path.resolve(__dirname, '../../../..');

/**
 * Defines TypeScript import aliases.
 *
 * @note See also: `./config.json`.
 * @note See also: `../vite/config.mjs`.
 * @note See also: `../jest/config.mjs`.
 */
export default {
	'^react$': path.resolve(projDir, './node_modules/preact/compat'),
	'^react-dom$': path.resolve(projDir, './node_modules/preact/compat'),
};