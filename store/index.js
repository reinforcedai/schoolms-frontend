export const state = () => ({
    siteName: 'COLLEGE',
    companyName: 'COLLEGE',
    navLinks: [
      { title: 'Home', to: '/', },
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
          { title: 'Community', to: '/news/community', },
          { title: 'Alumni', to: '/news/alumni', },
        ],
      },
      {
        title: 'About',
        links: [
          { title: 'About Us', to: '/about', },
          { title: 'Contact', to: '/about/contact', },
          { title: 'Career', to: '/about/career', },
        ],
      },
      ],
      socialLinks: [
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
    companyName: (state) => state.companyName,
    navLinks: (state) => state.navLinks,
    socialLinks: (state) => state.socialLinks,
}