import { expect, test } from 'vitest'
import { generateMessageId } from '@lingui/message-utils/generateMessageId'
import { generateMessageId as generateMessageIdPatched } from '../src/generateMessageId'

test('basic', () => {
  const cases = {
    啊啊啊啊啊啊啊啊啊啊: {
      id: 'QlR/2E',
      idPatched: 'QlR2EY',
    },
  }

  Object.keys(cases).forEach((item) => {
    const id = generateMessageId(item)
    const idPatched = generateMessageIdPatched(item)

    expect(id).eq(cases[item].id)
    expect(idPatched).eq(cases[item].idPatched)
  })
})
