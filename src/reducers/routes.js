import Duck from 'extensible-duck'

export default new Duck({
  namespace   : 'enova',
  store       : 'routes',
  initialState: () => ({
    '/': {
      title   : 'Home',
      subTitle: '',
      search  : false,
      more    : true
    },
    '/dashboard': {
      title   : 'Dashboard',
      subTitle: '',
      search  : false,
      more    : false
    }
  }),
  reducer: state => state
})
