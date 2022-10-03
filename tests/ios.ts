import { patch } from '../src/patch-jest'

patch('ios')

describe('IOS test suite', () => {
  describe('for "it"', () => {
    it.onIOS('it.onIOS', () => {
      expect(1).toBe(1)
    })

    it.onIOS.each([1])('it.onIOS.each', value => {
      expect(value).toBe(1)
    })

    it.onIOS.skip.each([1])('it.onIOS.skip.each', value => {
      throw new Error('Should not be run')
    })

    it.onIOS.skip('it.onIOS.skip', () => {
      throw new Error('Should not be run')
    })
  })

  describe('for "test"', () => {
    test.onIOS('test.onIOS', () => {
      expect(1).toBe(1)
    })

    test.onIOS.each([1])('test.onIOS.each', value => {
      expect(value).toBe(1)
    })

    test.onIOS.skip.each([1])('test.onIOS.skip.each', value => {
      throw new Error('Should not be run')
    })

    test.onIOS.skip('test.onIOS.skip', () => {
      throw new Error('Should not be run')
    })
  })

  describe.onIOS('describe.onIOS', () => {
    it('it', () => {
      expect(1).toBe(1)
    })
  })

  describe.onIOS.each([1])('describe.onIOS.each', value => {
    it('it', () => {
      expect(value).toBe(1)
    })
  })

  describe.onAndroid('describe.onAndroid', () => {
    it('it', () => {
      throw new Error('Should not be run')
    })
  })

  describe.onAndroid.each([1, 2, 3])('describe.onAndroid.each', () => {
    it('it', () => {
      throw new Error('Should not be run')
    })
  })

  describe.skipWeb('describe.skipWeb', () => {
    it('should be executed', () => {
      expect(1).toBe(1)
    })
  })
})
