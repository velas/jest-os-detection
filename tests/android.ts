import { patch } from '../src/patch-jest'

patch('android')

describe('Android test suite', () => {
  describe('for "it"', () => {
    it.onAndroid('it.onAndroid', () => {
      expect(1).toBe(1)
    })

    it.onAndroid.each([1])('it.onAndroid.each', value => {
      expect(value).toBe(1)
    })

    it.onAndroid.skip.each([1])('it.onAndroid.skip.each', value => {
      throw new Error('Should not be run')
    })

    it.onAndroid.skip('it.onAndroid.skip', () => {
      throw new Error('Should not be run')
    })
  })

  describe('for "test"', () => {
    test.onAndroid('test.onAndroid', () => {
      expect(1).toBe(1)
    })

    test.onAndroid.each([1])('test.onAndroid.each', value => {
      expect(value).toBe(1)
    })

    test.onAndroid.skip.each([1])('test.onAndroid.skip.each', value => {
      throw new Error('Should not be run')
    })

    test.onAndroid.skip('test.onAndroid.skip', () => {
      throw new Error('Should not be run')
    })
  })

  describe.onAndroid('describe.onAndroid', () => {
    it('it', () => {
      expect(1).toBe(1)
    })
  })

  describe.onAndroid.each(
    [1]
  )('describe.onAndroid.each', value => {
    it('it', () => {
      expect(value).toBe(1)
    })
  })

  describe.onIOS('describe.onIOS', () => {
    it('it', () => {
      throw new Error('Should not be run')
    })
  })

  describe.onIOS.each(
    [1,2,3]
  )('describe.onIOS.each', () => {
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
