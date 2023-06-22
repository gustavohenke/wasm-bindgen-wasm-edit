const fs = require('fs');
const { edit, editWithAST } = require('@webassemblyjs/wasm-edit');
const { decode } = require('@webassemblyjs/wasm-parser');

const mode = process.argv[2];
const file = process.argv[3] || 'bg/mylib_bg.wasm';

const origBin = fs.readFileSync(file);
const visitors = {
    ModuleExport({ node }) {
        console.log(`- Export named ${node.name}`);
    }
}

let bin;
if (mode === 'ast') {
    const ast = decode(origBin);
    bin = editWithAST(ast, origBin, visitors);
} else {
    bin = edit(origBin, visitors);
}

WebAssembly.instantiate(bin, {}).then(({ instance }) => {
    console.log(instance.exports);
});