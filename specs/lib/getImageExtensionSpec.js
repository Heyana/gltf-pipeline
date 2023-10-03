"use strict";

const { RuntimeError } = require("cesium");

const dataUriToBuffer = require("../../lib/dataUriToBuffer");
const getImageExtension = require("../../lib/getImageExtension");

const pngData = dataUriToBuffer(
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gQcDxwOcoRpqQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAFElEQVQI12P8//8/AwwwMSAB3BwAlm4DBdoYksUAAAAASUVORK5CYII=",
);
const gifData = dataUriToBuffer(
  "data:image/gif;base64,R0lGODdhBAAEAIAAAP///////ywAAAAABAAEAAACBISPCQUAOw==",
);
const jpgData = dataUriToBuffer(
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD//gATQ3JlYXRlZCB3aXRoIEdJTVD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wgARCAAEAAQDAREAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAVSf/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABBQJ//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwF//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwF//8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQAGPwJ//8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPyF//9oADAMBAAIAAwAAABCf/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPxB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPxB//8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxB//9k=",
);
const bmpData = dataUriToBuffer(
  "data:image/bmp;base64,Qk1mAAAAAAAAADYAAAAoAAAABAAAAAQAAAABABgAAAAAADAAAAATCwAAEwsAAAAAAAAAAAAA////////////////////////////////////////////////////////////////",
);
const ktx2Data = dataUriToBuffer(
  "data:image/ktx2:base64,q0tUWCAyMLsNChoKAAAAAAEAAABAAAAAQAAAAAAAAAAAAAAAAQAAAAEAAAABAAAAaAAAACwAAACUAAAAdAAAAAgBAAAAAAAA7QEAAAAAAAD1AgAAAAAAAPgAAAAAAAAAAAAAAAAAAAAsAAAAAAAAAAIAKACjAQIAAwMAAAAAAAAAAAAAAAA/AAAAAAAAAAAA/////xIAAABLVFhvcmllbnRhdGlvbgByZAAAAFUAAABLVFh3cml0ZXIAdG9rdHggdjQuMC5iZXRhMi41My5nZjgzZDI4NDUuZGlydHkgLyBsaWJrdHggdjQuMC5iZXRhMi41MS5nM2EzMWQ0ZGEuZGlydHkAAAAAHQBfAEcAAAAcAQAAYgAAAAAAAAAAAAAAAAAAAPgAAAAAAAAAAAAAACDAGwABAIBgclixPD5qPIA3EAEAAAJpL1qO+wKACQAAAAAAAAQCEAEAAABACMSHxYxC5qRfZDX/tDYozqTrsZwcLKFPOj8HAAjmamgUQQAA4G9md89jvYMNJJDEE0erNdUVV1pMAlpY6II/hRiwULCxywNMUggi6NVWCjb+FBYpBRcLawsfwLyBDyAEEpo8f13mE8N3+MzWN8aG0uInpReLBNfESNpLUhJjn6b0UYqK6fRJOijLPA7LtfXfpawtHOM5wslUOelTK5qmmCyvsvvBs9vv7W4xDJxWwcfD2u9chVzP234bZjCbzdBt9+rlcHEnF9Uqax51Mg7aopqvbDx89+Bm8yd0dfjyNdzXnWaTS7dwHQMKYiRu4hcUupGEncw9fArUMQahsqgFgqPLjReLeCFOmjpQB/VCqMhnZzzd2+xeHe83j+sRN/Cff4yZ8Q0Cxnpj/0d75e6dw3y0evn6/C0AwdsAARAGgie2geTzWDtGyh9KgpX8WJb+BoILSDZI+sB3AA8ABEAQhjVfWhkigV6/gQJxMCXBAADD9G9HsB/tCHQCO40d4H1eHXIIwiGiqaHGIEjX+AaACQAAAAAAEMRAAPxNflpzjZbtuGAsfCOdQtK6+1SN1+ekY6j7t75MEIfKzChq81nw7nJCXzrVkyZprvXxESlhruXkPYHimL3u9o3k57aC4TXqLc9ZhbxM8VrYjcZ4NtT2+55ZPICCeHUISHGmLmU+/LNbHx0jlpkCmnpHFAZSaHnCJ49gGUlMs7+K4PcBQ9KG618GBGDlxTULGQlp8NdIpU8tdzAFkCSPVU20irfukO/YSpScsCHeCglbH2ljLGR+7McSAoyLd9j0k06gjHZdYiPGpi0n6fX7PCd22juv/0qvP5YIoHnrGZEXMiFaw9chnA2C8POpNi0EQu/lwCZoILII",
);
const basisData = dataUriToBuffer(
  "data:image/basis;base64,c0ITAE0AAA9wAAAAqewBAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAQBkAAAAKAAAAQCMAAAABQAAkQAAACsAAABNAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAvAAAAAEAAACPUwHABAAAAAAAAAICmAgAAAAAAEASBAATAAAAAAAAiABgAgAAAAAAABFUVVVVBQDBRAAAAAAAAPJfLQCYAAAAAAAAQAgAEwACAAAAAIgBwAQAAAAAAAACCAAA",
);
const textData = dataUriToBuffer("data:text/plain;charset=utf-8,randomtext");

describe("getImageExtension", () => {
  it("gets image extension from buffer", () => {
    expect(getImageExtension(pngData)).toBe(".png");
    expect(getImageExtension(gifData)).toBe(".gif");
    expect(getImageExtension(jpgData)).toBe(".jpg");
    expect(getImageExtension(bmpData)).toBe(".bmp");
    expect(getImageExtension(ktx2Data)).toBe(".ktx2");
    expect(getImageExtension(basisData)).toBe(".basis");
  });

  it("throws error if buffer does not contain image data", () => {
    let thrownError;
    try {
      getImageExtension(textData);
    } catch (e) {
      thrownError = e;
    }
    expect(thrownError).toEqual(
      new RuntimeError("Image data does not have valid header"),
    );
  });
});
