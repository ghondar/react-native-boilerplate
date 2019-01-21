import Duck from 'extensible-duck'

export default new Duck({
  namespace   : 'enova',
  store       : 'routes',
  initialState: () => ({
    '/': {
      title   : 'Main',
      subTitle: '',
      search  : false,
      more    : true
    },
    '/home': {
      title   : 'Home',
      subTitle: '',
      search  : false,
      more    : true
    },
    '/home/detail': {
      title   : 'Detalle',
      subTitle: '',
      search  : false,
      more    : false
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
