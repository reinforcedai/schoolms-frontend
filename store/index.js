export const state = () => ({
  siteName: 'COLLEGE',
  systemBarLinks: [
    { text: 'Students', to: '/students/', },
    { text: 'Staff', to: '/staff/', },
    { text: 'Alumni', to: '/alumni/', },
    { text: 'Parents', to: '/parents/', },
  ],
  navLinks: [
    {
      title: 'Home',
      to: '/',
    },
    {
      title: 'Academics',
      to: '/academics',
      links: [
        { title: 'Departments', to: '/academics/departments', },
        { title: 'Facilities', to: '/academics/facilities', },
        { title: 'Calendar', to: '/academics/calendar', },
      ],
    },
    {
      title: 'Admission',
      to:'/admission',
    },
    {
      title: 'News & Events',
      to: '/news',
      links: [
        { title: 'Events', to: '/news/events', },
        { title: 'News', to: '/news/', },
      ],
    },
    {
      title: 'About',
      links: [
        { title: 'About Us', to: '/about', },
        { title: 'Contact', to: '/about/contact', },
      ],
    },
    {
      title: 'Donate',
      to: '/donate',
    },
  ],
  studentsNavLinks: [
    { title: 'Student Portal', to: '/students/', },
    { title: 'Login', to: '/auth/login', },
    // { title: 'Sign Up', to: '/auth/signup', },
  ],
  staffNavLinks: [
    { title: 'Staff Portal', to: '/staff/', },
    { title: 'Login', to: '/auth/login', },
  ],
  alumniNavLinks: [
    { title: 'Alumni Portal', to: '/alumni/', },
    { title: 'Login', to: '/auth/login', },
  ],
  parentsNavLinks: [
    { title: 'Parents Portal', to: '/parents/', },
    { title: 'Login', to: '/auth/login', },
  ],
  quickLinks: [
    { text: 'Facilities', to: '/academics/facilities/', },
    { text: 'Students', to: '/students/', },
    { text: 'Staff', to: '/staff/', },
    { text: 'Parents', to: '/parents/', },
    { text: 'Alumni', to: '/alumni/', },
    { text: 'Community', to: '/community/', },
    { text: 'Career', to: '/career', },
  ],
  socialMediaLinks: [
    {
      icon: 'mdi-facebook',
      url: 'https://facebook.com/',
      text: 'facebook',
    },
    {
      icon: 'mdi-twitter',
      url: 'https://twitter.com/',
      text: 'twitter',
    },
    {
      icon: 'mdi-instagram',
      url: 'https://www.instagram.com/',
      text: 'instagram',
    },
    {
      icon: 'mdi-linkedin',
      url: 'https://www.linkedin.com/company/',
      text: 'linkedin',
    },
  ],
})
export const getters = {
  siteName: (state) => state.siteName,
  systemBarLinks: (state) => state.systemBarLinks,
  navLinks: (state) => state.navLinks,
  studentsNavLinks: (state) => state.studentsNavLinks,
  staffNavLinks: (state) => state.staffNavLinks,
  alumniNavLinks: (state) => state.alumniNavLinks,
  parentsNavLinks: (state) => state.parentsNavLinks,
  quickLinks: (state) => state.quickLinks,
  socialMediaLinks: (state) => state.socialMediaLinks,
}