import { patch, Platform } from './patch-jest'

const currentPlatform = process.env.PLATFORM?.toLowerCase() as Platform;
patch(currentPlatform)
