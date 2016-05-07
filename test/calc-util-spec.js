
import calcUtil from '../src/calc-util.js'
import assert from 'power-assert'

describe('add関数のテスト', () => {
    it('1+2は3である', () => {
        assert(calcUtil.add(1, 2) === 3)
    })
    it('1+2は4である', () => {
        assert(calcUtil.add(1, 2) === 4)
    })
})
