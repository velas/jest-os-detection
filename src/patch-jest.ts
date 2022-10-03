export type Platform = 'ios' | 'android' | 'web'
interface Command {
  onIOS: ['ios']
  onAndroid: ['android']
  onWeb: ['web']
  skipIOS: ['android', 'web']
  skipAndroid: ['ios', 'web']
  skipWeb: ['ios', 'android']
}

const AVAILABLE_PLATFORMS: Command = {
  onIOS: ['ios'],
  onAndroid: ['android'],
  onWeb: ['web'],
  skipIOS: ['android', 'web'],
  skipAndroid: ['ios', 'web'],
  skipWeb: ['ios', 'android'],
}

type MethodOperation = 'skip' | 'only'

const methodOperations: MethodOperation[] = ['skip', 'only']

export function patch(currentPlatform: Platform) {
  function newDefinition<T>(method: T, expectedPlatform: keyof Command, fallbackImplem: T): T {
    if ((AVAILABLE_PLATFORMS[expectedPlatform] as Platform[] | undefined)?.indexOf(currentPlatform) !== -1) {
      return method
    } else {
      return fallbackImplem
    }
  }

  ;(Object.keys(AVAILABLE_PLATFORMS) as (keyof Command)[]).forEach((platform) => {
    ;[describe, it, test].forEach((method) => {
      method[platform] = newDefinition<typeof method>(method, platform, method.skip)
      method[platform].each = newDefinition<jest.Each>(method.each, platform, method.skip.each)

      methodOperations.forEach((mode) => {
        method[platform][mode] = newDefinition<typeof method>(method[mode], platform, method.skip)
        method[platform][mode].each = newDefinition<jest.Each>(method[mode].each, platform, method.skip.each)
      })
    })
  })
}
