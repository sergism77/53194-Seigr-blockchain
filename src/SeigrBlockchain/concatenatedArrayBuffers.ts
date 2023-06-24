'use strict';

/**
 * Concatenates all the ArrayBuffer objects in arrayBuffers
 * @param {ArrayBuffer[]} arrayBuffers - An array of ArrayBuffer objects to concatenate
 * @returns {ArrayBuffer} - A new ArrayBuffer that is the concatenation of all ArrayBuffer objects in arrayBuffers
 */
const concatenatedArrayBuffers = (arrayBuffers: ArrayBuffer[]): ArrayBuffer => {
    // Create the concatenated array buffer
    let concatenatedArrayBuffer: ArrayBuffer = new ArrayBuffer(0);
  
    // Concatenate the array buffers
    for (let i: number = 0; i < arrayBuffers.length; i++) {
      // Append the next ArrayBuffer to concatenatedArrayBuffer
      concatenatedArrayBuffer = concatenatedArrayBuffers(concatenatedArrayBuffer, arrayBuffers[i]);
    }
  
    // Return the concatenated array buffer
    return concatenatedArrayBuffer;
  }
  
  export default concatenatedArrayBuffers;