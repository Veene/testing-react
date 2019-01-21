import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

//jest will always first look for this file - EXACT SPELLING before running tests
//enzyme gives us better functionality with jest expressions
Enzyme.configure({ adapter: new Adapter() })