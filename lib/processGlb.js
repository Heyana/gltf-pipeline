"use strict";
const parseGlb = require("./parseGlb");
const gltfToGlb = require("./gltfToGlb");

module.exports = processGlb;

/**
 * Run a glb through the gltf-pipeline.
 *
 * @param {Buffer} glb A buffer containing the glb contents.
 * @param {object} [options] The same options object as {@link processGltf}
 * @returns {Promise} A promise that resolves to an object containing the glb and a dictionary containing separate resources.
 */
function processGlb(glb, options) {
  let gltf
  console.log(12345,'12345');
  try{
   gltf = parseGlb(glb);
  }catch(e){
    console.log(e,'e124');
  }
  return gltfToGlb(gltf, options);
}
