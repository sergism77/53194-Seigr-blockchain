const concatArrayBuffers = (arrayBuffers) => {
    //create the concatenated array buffer
    let concatenatedArrayBuffer = new ArrayBuffer(0);
    //concatenate the array buffers
    for (let i = 0; i < arrayBuffers.length; i++) {
        //concatenate the array buffers
        concatenatedArrayBuffer = concatenateArrayBuffers(concatenatedArrayBuffer, arrayBuffers[i]);
    }
    //return the concatenated array buffer
    return concatenatedArrayBuffer;
}

module.exports = concatArrayBuffers;