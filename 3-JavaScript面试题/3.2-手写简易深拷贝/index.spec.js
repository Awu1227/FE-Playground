import deepClone from './index'

describe('简易浅拷贝', () => {
	it('示例一', () => {
		const obj = {
			name: '橙子',
			arr: ['a','b']
		}
		let result = deepClone(obj)
		result?.arr?.push('c')
		expect(obj.arr).toEqual(['a','b']);
	});
})
