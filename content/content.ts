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
        {section: "source", toggleable: true, expanded: true},
        {section: "easteregg", toggleable: true, expanded: true},
      ],
      right: [
        {section: "contactus", toggleable: true, expanded: true},
        {section: "people", toggleable: true, expanded: true},
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
      {section: "source", toggleable: true, expanded: false},
    ],
  },
  sections: {
    aboutus: {
      title: "About Us",
      text: `You've landed on Gamma Data's page.<br/> <br/>
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
      title: "Services",
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
      text: `We've worked with some of the largest companies in Australia and the world, 
      and we've helped them deliver some of the most complex and challenging data and cloud projects in the country.  Want to know more?<br /><br />`,
      buttons: [
        {
          text: "Get in touch",
          action: "visit",
          url: "mailto:info@gammadata.io",
          activationKey: "E",
        },
      ],      
    },
    insights: {
      title: "Insights",
      text: `We're passionate about data and cloud, and we love to share our knowledge and experience with the community. Check out our blog posts and articles below.<br /><br />
      Unveiling the Power of Service Account Impersonation in Google Cloud Platform<br />
      ---<br />
      Want to stop using service account keys at your command line? Would you like to run dbt from your command line 
      but impersonate the same service account that's running your code in GCP?...<a href="https://medium.com/p/23c6adbf4355" target="_blank">[link]</a><br /><br />
      
      Apache Iceberg and Google Cloud<br />
      ---<br />
      Wanted to time-travel, query a lake at a point-in-time, and support schema evolution effortlessly? 
      Then read on... <a href="https://medium.com/gammadata/apache-iceberg-and-google-cloud-239b1ae9fceb" target="_blank">[link]</a><br /><br />
      
      Serving dbt docs on Gitlab (Static) Pages<br />
      ---<br />
      Want a true static page, and not have to run <code>dbt run server</code> so you can host on Gitlab or Github? <a href="https://medium.com/gammadata/serving-dbt-docs-on-gitlab-static-pages-3365416c8b22" target="_blank">[link]</a><br /><br />
      
      see our blogs for more...<br /><br />      
      `,
      buttons: [
        {
          text: "Medium",
          action: "visit",
          url: "https://medium.com/gammadata",
          activationKey: "M",
        },
        {
          text: "Full Stack Chronicles",
          action: "visit",
          url: "https://fullstackchronicles.io/",
          activationKey: "F",
        },        
      ],      
    },
    contactus: {
      title: "Contact Us",
      text: `
      Want to get in touch? We'd love to hear from you.
      <br/><br/>
      Level 24, 570 Bourke Street<br/>
      Melbourne, VIC, 3000, Australia<br/><br/>
      <a href="tel:0386585884">☎️ +61 3 8658 5884</a><br/>
      <a href="mailto:info@gammadata.io">✉️ info@gammadata.io</a><br />
      <a href="https://abr.business.gov.au/ABN/View?id=42638543674" target="_blank" rel="noopener noreferrer">📘 ABN 42 638 543 674</a><br /><br />
      `,
      buttons: [
        {
          text: "Visit our LinkedIn page",
          action: "visit",
          url: "https://www.linkedin.com/company/gamma-data/",
          activationKey: "L",
        },
      ],
    }, 
    people: {
      title: "Our People",
      text: `
      <a href="https://www.linkedin.com/in/jeffreyaven/" target="_blank">Jeffrey Aven</a>, Partner/Principal Consultant<br/><br/>
      <a href="https://www.linkedin.com/in/tomklimovski/" target="_blank">Tom Klimovski</a>, Partner/Principal Consultant<br/><br/>
      <a href="https://www.linkedin.com/in/mark-stella-3823976/" target="_blank">Mark Stella</a>, Partner/Principal Consultant<br/><br/>
      <a href="https://www.linkedin.com/in/simoncolmer/" target="_blank">Simon Colmer</a>, Lead Consultant<br/><br/>
      <a href="https://www.linkedin.com/in/christopherottinger/" target="_blank">Christopher Ottinger</a>, Lead Consultant<br/><br/>
      <a href="https://www.linkedin.com/in/russelldiery/" target="_blank">Russell Diery</a>, Lead Consultant<br/><br/>
      <a href="https://www.linkedin.com/in/andrew-klimovski-b1975a2/" target="_blank">Andrew Klimovski</a>, Lead Consultant<br/><br/>
      <a href="https://www.linkedin.com/in/kieranrimmer/" target="_blank">Kieran Rimmer</a>, Lead Consultant<br/><br/>
      <a href="https://www.linkedin.com/in/karan-a-shah/" target="_blank">Karan Ashish Shah</a>, Cloud Engineer<br/><br/>
      <a href="https://www.linkedin.com/in/alan-c-lo/" target="_blank">Alan Lo</a>, Cloud Engineer<br/><br/>
      <a href="https://www.linkedin.com/in/alexander-jarosz-84563417a/" target="_blank">Alex Jarosz</a>, Associate Engineer/Consultant<br/><br/>
      <a href="https://www.linkedin.com/in/mason-ottinger-199788273/" target="_blank">Mason Ottinger</a>, Associate Engineer/Consultant<br/><br/>
      <a href="https://www.linkedin.com/in/sebastian-guerra-576a7ab9/" target="_blank">Sebastian Guerra</a>, Data Engineer/Data Scientist<br/><br/>
      `
    },
    source: {
      title: "Source Code",
      text: `
      We are a team of software engineers, and we love to share our work with the community including this site.  Check out some of the projects we've been working on.<br /><br />
      `,
      buttons: [
        {
          text: "Gamma Studios GitHub",
          action: "visit",
          url: "https://github.com/gammastudios",
          activationKey: "G",
        },
        {
          text: "StackQL",
          action: "visit",
          url: "https://github.com/stackql/stackql",
          activationKey: "S",
        },        
      ],      
    },
    easteregg: {
      title: "Play a Game",
      text: `You've come this far, why not play a game?`,
      buttons: [
        {
          text: "Play Asteroids",
          action: "maximiseArt",
          activationKey: "A",
        },
      ],
    },         
  },
}
