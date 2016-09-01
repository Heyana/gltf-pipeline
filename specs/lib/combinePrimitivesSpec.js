'use strict';
var combinePrimitives = require('../../lib/combinePrimitives');
var readGltf = require('../../lib/readGltf');
var removePipelineExtras = require('../../lib/removePipelineExtras');

var doubleBoxToCombinePath = './specs/data/combineObjects/doubleBoxToCombine.gltf';

describe('combinePrimitives', function() {
<<<<<<< HEAD
    var arrayOneA = new Float32Array([1, 2, 3]);
    var bufferOneA = new Buffer(arrayOneA.buffer);
    var arrayTwoA = new Float32Array([4, 5, 6]);
    var bufferTwoA = new Buffer(arrayTwoA.buffer);
    var arrayOneB = new Uint16Array([1, 2, 3]);
    var bufferOneB = new Buffer(arrayOneB.buffer);
    var arrayTwoB = new Uint16Array([4, 5, 6]);
    var bufferTwoB = new Buffer(arrayTwoB.buffer);

    it('combines two primitives by concatenating them', function() {

    });

    it('combines two primitives with shared attribute accessors by merging them', function() {

    });

    it('combines three primitives, merging two and then concatenating the result with the third', function() {

    });

    it('doesn\'t combine primitive that has attribute accessors that are different sizes', function() {

    });

    it('doesn\'t combine primitives that share a single attribute accessor', function() {

=======
    it('does not affect single primitives', function(done){
        expect(readGltf(boxPath)
            .then(function(gltf) {
                var box = gltf;
                var stringBox = JSON.stringify(box);
                combinePrimitives(box);
                expect(stringBox).toEqual(JSON.stringify(box));
        }), done).toResolve();
    });

    it('does not combine two primitives', function(done) {
        expect(readGltf(doubleBoxNotCombinedPath)
            .then(function(gltf) {
                var doubleBoxNotCombined = gltf;
                var stringDoubleBoxNotCombined = JSON.stringify(doubleBoxNotCombined);
                combinePrimitives(doubleBoxNotCombined);
                expect(stringDoubleBoxNotCombined).toEqual(JSON.stringify(doubleBoxNotCombined));
            }), done).toResolve();
    });

    it('combines two primitives', function(done) {
        expect(readGltf(doubleBoxToCombinePath)
            .then(function(gltf) {
                var doubleBoxToCombine = gltf;
    
                combinePrimitives(doubleBoxToCombine);
                removePipelineExtras(doubleBoxToCombine);
                
                expect(doubleBoxToCombine.meshes.meshTest.primitives.length).toEqual(1);
                expect(doubleBoxToCombine.meshes.meshTest.primitives[0].material).toEqual('Effect_outer');
                expect(doubleBoxToCombine.meshes.meshTest.primitives[0].mode).toEqual(4);
                expect(doubleBoxToCombine.meshes.meshTest.primitives[0].indices).toEqual('meshTest_INDEX_accessor_0');
    
                expect(doubleBoxToCombine.meshes.meshTest.primitives[0].attributes).toEqual({
                    "NORMAL": 'meshTest_NORMAL_accessor_0',
                    "POSITION": 'meshTest_POSITION_accessor_0',
                    "TEXCOORD_0": 'meshTest_TEXCOORD_0_accessor_0'
                });
    
                expect(doubleBoxToCombine.accessors.meshTest_INDEX_accessor_0).toEqual({
                    "bufferView": "meshTest_INDEX_bufferView_0",
                    "byteOffset": 0,
                    "byteStride": 0,
                    "componentType": 5123,
                    "type": "SCALAR",
                    "count": 516,
                    "max": [319],
                    "min": [0]
                });
    
                expect(doubleBoxToCombine.accessors.meshTest_POSITION_accessor_0).toEqual({
                    "bufferView": "meshTest_POSITION_bufferView_0",
                    "byteOffset": 0,
                    "byteStride": 12,
                    "componentType": 5126,
                    "type": "VEC3",
                    "count": 320,
                    "max": [0.5, 0.5, 0.5],
                    "min": [-0.5, -0.5, -0.5]
                });
                expect(doubleBoxToCombine.bufferViews.meshTest_INDEX_bufferView_0.buffer).toEqual('meshTest_INDEX_buffer_0');
            }), done).toResolve();
    });

    it('combines some primitives', function(done){
        expect(readGltf(fiveBoxPath)
            .then(function(gltf){
                var fiveBox = gltf;
                combinePrimitives(fiveBox);
                expect(fiveBox.meshes.meshTest.primitives.length).toEqual(3);
    
                expect(Object.keys(fiveBox.accessors).indexOf('meshTest_INDEX_accessor_0')).not.toEqual(-1);
                expect(Object.keys(fiveBox.accessors).indexOf('meshTest_POSITION_accessor_0')).not.toEqual(-1);
                expect(Object.keys(fiveBox.accessors).indexOf('meshTest_INDEX_accessor_1')).not.toEqual(-1);
                expect(Object.keys(fiveBox.accessors).indexOf('meshTest_POSITION_accessor_1')).not.toEqual(-1);
                expect(Object.keys(fiveBox.bufferViews).indexOf('meshTest_INDEX_bufferView_0')).not.toEqual(-1);
                expect(Object.keys(fiveBox.bufferViews).indexOf('meshTest_POSITION_bufferView_0')).not.toEqual(-1);
                expect(Object.keys(fiveBox.bufferViews).indexOf('meshTest_INDEX_bufferView_1')).not.toEqual(-1);
                expect(Object.keys(fiveBox.bufferViews).indexOf('meshTest_POSITION_bufferView_1')).not.toEqual(-1);
                expect(Object.keys(fiveBox.buffers).indexOf('meshTest_INDEX_buffer_0')).not.toEqual(-1);
                expect(Object.keys(fiveBox.buffers).indexOf('meshTest_POSITION_buffer_0')).not.toEqual(-1);
                expect(Object.keys(fiveBox.buffers).indexOf('meshTest_INDEX_buffer_1')).not.toEqual(-1);
                expect(Object.keys(fiveBox.buffers).indexOf('meshTest_POSITION_buffer_1')).not.toEqual(-1);
    
                expect(fiveBox.accessors.meshTest_INDEX_accessor_1.bufferView).toEqual('meshTest_INDEX_bufferView_1');
                expect(fiveBox.bufferViews.meshTest_INDEX_bufferView_1.buffer).toEqual('meshTest_INDEX_buffer_1');
            }), done).toResolve();
    });

    it('throws a type error', function(done) {
        expect(readGltf(doubleBoxToCombinePath)
            .then(function (gltf) {
                var typeError = gltf;
                typeError.accessors.accessor_29.type = 'VEC3';
                expect(function () {
                    combinePrimitives(typeError);
                }).toThrowDeveloperError();
            }), done).toResolve();
    });

    it ('throws a componentType error', function(done) {
        expect(readGltf(doubleBoxToCombinePath)
            .then(function(gltf){
                var componentTypeError = gltf;
                componentTypeError.accessors.accessor_29.componentType = 5126;
                expect(function () {
                    combinePrimitives(componentTypeError);
                }).toThrowDeveloperError();
            }), done).toResolve();
>>>>>>> 65ea22a9b4c20283ac822e6fd0563cfca36974a2
    });

    it('doesn\'t combine primitives that )
});
