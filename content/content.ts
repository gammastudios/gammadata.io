export const data: Record<string, any> = {
  shared: {
    title: "Gamma Data | Data and ML Engineering Excellence",
    meta: [
      {
          name: "description",
          content: "Data and ML Engineering Experts",
      },
      {
          name: "keywords",
          content: "data, ML, engineering, cloud, experts",
      },
    ],
    footer: {
      name: "gammadata.io",
      abn: "ABN 42 638 543 674",
    },
  },
  initial: {
    headline: "Welcome to Gamma Data.",
    byline:  "Data. ML. Engineering. Experts.",
  },
  views: {
    md: {
      left: [
        {section: "aboutus", toggleable: true, expanded: true},
        {section: "services", toggleable: true, expanded: true},
        {section: "insights", toggleable: true, expanded: true},
        {section: "easteregg", toggleable: true, expanded: true},
      ],
      right: [
        {section: "contactus", toggleable: true, expanded: true},
        {section: "people", toggleable: true, expanded: false},
        {section: "portfolio", toggleable: true, expanded: true},
      ],
    },
    sm: [
      {section: "aboutus", toggleable: true, expanded: true},
      {section: "services", toggleable: true, expanded: false},
      {section: "portfolio", toggleable: true, expanded: false},
      {section: "insights", toggleable: true, expanded: false},
      {section: "contactus", toggleable: true, expanded: false},
      {section: "people", toggleable: true, expanded: false},
      {section: "source", toggleable: true, expanded: true},
    ],
  },
  sections: {
    aboutus: {
      title: "About Us",
      text: `Hi, you've landed on Gamma Data's page.<br/> <br/>
      We are experts in Data, ML and Software Engineering for the cloud, located in Melbourne, Australia. We spend most of our time thinking about, and working on:
      <ul>
        <li>actionable data strategy and architecture</li>
        <li>strategic review and advisory</li>
        <li>building out data-centric infrastructure</li>
        <li>fit for purpose data modelling and design</li>
        <li>software engineering and XOps</li>
        <li>learning, development and customer enablement</li>
      </ul>
      If you're looking for an expert to help you bring your Data strategy vision to life, then reach out.`
    },
    services: {
      title: "Our Services",
      text: `We specialise in:
      <ul>
        <li>☁️ Cloud, all clouds.<br />
        Our team can help with green field cloud projects, hybrid or multi-cloud implementations, or migrations between major cloud providers.
        </li>
        <li>📈 Data.<br />
        Delivering end to end data solutions including channel solutions, reporting systems and advanced analytics applications.
        </li>
        <li>📐 Architecture.<br />
        Expert software professionals delivering world class data and full stack application architecture and design services.
        </li>
        <li>⚙️ Engineering.<br />
        From automating infrastructure, platform and application deployment to test automation to continuous security and compliance, we can help you build a world class platform, data and machine learning engineering capability and culture.
        </li>
        <li>📖 Training and Enablement.<br />
        With authorized trainers and developer experts across numerous cloud and data platform providers, we can deliver tailored training and development programs for your engineering staff.
        </li>
      </ul>`
    },
    portfolio: {
      title: "Our Work",
      text: `We've worked with some of the largest companies in Australia and the world, and we've helped them deliver some of the most complex and challenging data and cloud projects in the country.`
    },
    insights: {
      title: "Insights",
      text: `We're passionate about data and cloud, and we love to share our knowledge and experience with the community. Check out our blog posts and articles below.`
    },
    contactus: {
      title: "Contact Us",
      text: `We'd love to hear from you. If you'd like to get in touch, please reach out to us at`,
      buttons: [
        {
          text: "View Code",
          action: "visit",
          url: "https://github.com/TomKlimovski/bf-3/blob/main/pages/index.tsx",
          activationKey: "Q",
        },
      ],
    }, 
    people: {
      title: "Our People",
      text: `We're a small team of experts, and we're always looking for more. If you're interested in joining us, please reach out to us at`
    },
    source: {
      title: "Source Code",
      text: `This site is open source. If you'd like to contribute, please reach out to us at`
    },
    easteregg: {
      title: "Play a Game",
      text: `We love games. If you'd like to play a game, please reach out to us at`
    },         
  },
}
