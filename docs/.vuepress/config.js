module.exports = {
  title: "Docs",
  description: "Mock Docs for Raspiblitz",
  base: "/raspiblitz-docs-example/",
  head: [
    ["link", { rel: "icon", href: '/images/favicon.ico' }],
  ],
  themeConfig: {
    navbar: true,
    nav: [
      { text: "GitHub", link: "https://github.com/rootzoll/raspiblitz"},
      { text: "Website", link: ""}
    ],
    logo: "/images/logos/logo.png",
    sidebarDepth: 0,
    sidebar: [
      {
        collapsable: true,
        title: "Getting Started",
        children: [
          ["getting-started/getting-started", 'Getting Started'],
          ["getting-started/features.md", 'Features'],
          ["getting-started/mobile.md", 'Mobile'],
          ["getting-started/support.md", 'Support'],
        ]
      },
      {
        collapsable: true,
        title: "Workshop",
        children: [
          ["/workshop/intro.md", 'Introduction & Time Planning'],
          ["/workshop/3-scenarios.md", 'Different Workshop Scenarios'],
          ["/workshop/checklist.md", 'Checklist'],
          ["/workshop/running-workshop.md", 'Running the Workshop'],
        ]
      },
      {
        collapsable: true,
        title: "FAQ",
        children: [
          ["/FAQ/main.md", 'Main'],
        ]
      },
    ],
  },
}
