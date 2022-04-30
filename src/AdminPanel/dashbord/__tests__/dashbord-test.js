import Dashboard from '../dashbord'
import testUtils from 'react-dom/test-utils'


describe('dasboard' , () => {
    it('wraps content in a div' , () =>{
        const wrapper = testUtils.renderIntoDocument(<Dashboard/>)
        const node = testUtils.findRenderedDOMComponentWithClass(wrapper , 'dashboardRoot')
    })
})