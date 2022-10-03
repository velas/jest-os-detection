declare module jest {
  export interface Describe {
    onIOS: jest.Describe
    onAndroid: jest.Describe
    onWeb: jest.Describe
    skipIOS: jest.Describe
    skipAndroid: jest.Describe
    skipWeb: jest.Describe
  }

  export interface It {
    onIOS: jest.It
    onAndroid: jest.It
    onWeb: jest.It
    skipIOS: jest.It
    skipAndroid: jest.It
    skipWeb: jest.It
  }
}
