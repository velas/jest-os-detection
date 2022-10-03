import { patch } from '../src/patch-jest'

patch('web')

describe('Web test suite', () => {
  describe('for "it"', () => {
    it.onWeb('it.onWeb', () => {
      expect(1).toBe(1)
    })

    it.onWeb.each([1])('it.onWeb.each', value => {
      expect(value).toBe(1)
    })

    it.onWeb.skip.each([1])('it.onWeb.skip.each', value => {
      throw new Error('Should not be run')
    })

    it.onWeb.skip('it.onWeb.skip', () => {
      throw new Error('Should not be run')
    })
  })

  describe('for "test"', () => {
    test.onWeb('test.onWeb', () => {
      expect(1).toBe(1)
    })

    test.onWeb.each([1])('test.onWeb.each', value => {
      expect(value).toBe(1)
    })

    test.onWeb.skip.each([1])('test.onWeb.skip.each', value => {
      throw new Error('Should not be run')
    })

    test.onWeb.skip('test.onWeb.skip', () => {
      throw new Error('Should not be run')
    })
  })

  describe.onWeb('describe.onWeb', () => {
    it('it', () => {
      expect(1).toBe(1)
    })
  })

  describe.onWeb.each([1])('describe.onWeb.each', value => {
    it('it', () => {
      expect(value).toBe(1)
    })
  })

  describe.onIOS('describe.onIOS', () => {
    it('it', () => {
      throw new Error('Should not be run')
    })
  })

  describe.onIOS.each([1, 2, 3])('describe.onIOS.each', () => {
    it('it', () => {
      throw new Error('Should not be run')
    })
  })

  describe.skipWeb('describe.skipWeb', () => {
    it('should not be executed', () => {
      throw new Error('should not be run')
    })
  })
})
