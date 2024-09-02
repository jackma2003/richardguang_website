import { createI18n } from 'vue-i18n'

// Define the translations
const messages = {
  en: {
    // app.vue 
    slogan: "Your Trusted Partner in Finding Your Dream Home",
    homeLink: "Home",
    aboutLink: "About",
    listingsLink: "Listings",
    foreignInvestorGuideLink: "Foreign Investor Guide",
    neighborhoodGuideLink: "Neighborhood Guide",
    contactLink: "Contact",
    footerText: "© 2024 Richard Guang. All rights reserved.",
    translateButton: "Switch to Chinese",
    // home.vue
    home: {
      title: "Richard Guang Real Estate",
      subtitle: "Your Trusted Partner in Finding Your Dream Home",
      description: "With years of experience in the New York City real estate market, I specialize in helping clients find their perfect property, whether it's for investment or a place to call home.",
      bulletPoints: {
        1: "Expert knowledge of NYC neighborhoods",
        2: "Personalized service for both local and international clients",
        3: "Specializing in luxury properties and investment opportunities"
      },
      contactButton: "Contact Me"
    },
    // neighborhoodGuide.vue 
    neighborhoodGuide: {
      title: "Work In Progress..."
    },
    // contact.vue
    contact: {
      title: "Contact Richard Guang",
      subtitle: "Licensed Real Estate Salesperson",
      phone: "+1 (718) 496 7914",
      wechat: "WeChat: guang-rich",
      xiaohongshu: "小红书 ID: richardguang",
      connectTitle: "Connect with Richard",
    },
    // listings.vue 
    listings: {
      title: "Featured Listings",
      description: "Please visit the following link to view my current listings:",
      viewButton: "View Listings",
      updateNote: "Listings are updated regularly. Check back often for new properties."
    },
    // about.vue
    about: {
      title: "About Richard Guang",
      subtitle: "Graduate of MIT Sloan School of Management | Finance and Statistics",
      paragraph1: "Richard Guang is a graduate of the MIT Sloan School of Management where he studied Finance and Statistics. He has a fierce work ethic, tenacious drive to succeed, and an ability to establish rapport with all people. Born and raised in New York City, Richard's expertise and vast knowledge of the city ensures the highest caliber of service to his clients, whether it be buying, selling, investing, or renting a property.",
      paragraph2: "He has previously worked at JP Morgan Private Bank, various asset management firms in New York, and is currently a member of the Real Estate Board of New York. He has also been helping his family manage various properties throughout the city from a young age. A lifelong athlete and competitor, Richard enjoys running, calisthenics, and biking.",
      paragraph3: "Richard's ability to adapt quickly and to challenge the status quo makes him a dynamic player who can find the solution to any problem. He is passionate about luxury real estate and loves leading individuals, families, and investors to achieve their real estate aspirations.",
      language:"Languages",
      language1:"Chinese",
      language2: "English", 
      language3:"Mandarin Chinese"
    },
    // foreigninvestorguide.vue 
    foreignInvestorGuide: {
      title: "Foreign Investor Guide",
      introduction: "Welcome to Richard's real estate guide for foreign investors! As a seasoned NYC real estate broker, I've had the privilege of assisting many Chinese families in securing the perfect home for their children studying in the United States. With experience helping parents whose children attend prestigious universities like NYU, Columbia, Princeton, Harvard, and MIT, I understand the unique needs and concerns you may have as you embark on this important journey.",
      sections: {
        whyInvest: {
          title: "Why Invest in NYC Real Estate?",
          content: "New York City offers a unique opportunity for real estate investment, combining stability, high appreciation potential, and proximity to some of the world's best universities. For parents, owning a property here not only provides a safe and convenient home for your child but also represents a smart financial investment. The NYC market is known for its resilience and long-term value, making it an ideal choice for international buyers."
        },
        understandingMarket: {
          title: "Understanding the NYC Real Estate Market",
          content: "The NYC real estate market is vast and varied, with neighborhoods offering different lifestyles and investment potentials. Whether you're looking for a quiet residential area near Columbia University or a vibrant, bustling location close to NYU, I can guide you through the options. Typical property types range from modern condos in high-rise buildings to classic brownstones in historic districts. I will help you navigate this complex market to find the perfect home that meets both your child's needs and your investment goals."
        },
        personalizedGuidance: {
          title: "Personalized Guidance Through the Buying Process",
          content: "When you visit New York City, I will arrange a series of property tours over 2-5 days, carefully planned around your schedule. During these tours, I will provide detailed insights into each property, highlighting both the benefits and any potential drawbacks. My priority is to ensure you have all the information you need to make an informed decision."
        },
        financialAnalysis: {
          title: "Financial Analysis and Investment Potential",
          content: "Investing in real estate is not just about finding a home; it's about securing a valuable asset for the future. I will conduct a thorough financial analysis of each property you are interested in, assessing factors such as potential rental income, appreciation forecasts, and overall return on investment (ROI). This analysis will help you understand which properties offer the best financial benefits."
        },
        offerAndNegotiation: {
          title: "Offer Submission and Negotiation",
          content: "Once you've chosen the ideal property, I will guide you in making a competitive offer. My extensive knowledge of the NYC market allows me to advise you on what price to offer based on current market conditions and the property's true value. My goal is to help you secure the property at the best possible price."
        },
        closingProcess: {
          title: "Seamless Closing Process",
          content: "Closing on a property in NYC involves multiple steps, from finalizing contracts to ensuring all legal and financial obligations are met. I will coordinate closely with your legal and financial advisors to handle every detail. If you need to return to China before the transaction is complete, don't worry. I have experience managing remote closings and will ensure everything is taken care of on your behalf. Whether it's signing documents or coordinating with local authorities, I will act as your trusted representative in New York."
        }
      },
      contactInfo: {
        title: "Contact Information",
        content: "I'm here to assist you every step of the way. Whether you have questions about the NYC real estate market or are ready to start your property search, please don't hesitate to reach out. You can contact me by phone, email, or through my WeChat account for quick and easy communication."
      },
      contactButton: "Contact Richard"
    }
  },
  zh: {
    // app.vue 
    slogan: "您寻找梦想之家的可信赖伙伴",
    homeLink: "首页",
    aboutLink: "关于我们",
    listingsLink: "房源列表",
    foreignInvestorGuideLink: "外国投资者指南",
    neighborhoodGuideLink: "社区指南",
    contactLink: "联系我们",
    footerText: "© 2024 Richard Guang. 保留所有权利。",
    translateButton: "切换英语",
    //home.vue
    home: {
      title: "Richard Guang 房地产",
      subtitle: "您寻找梦想之家的可信赖伙伴",
      description: "凭借多年在纽约市房地产市场的经验，我专门帮助客户找到他们的完美房产，无论是用于投资还是作为居所。",
      bulletPoints: {
        1: "对纽约市各社区的专业知识",
        2: "为本地和国际客户提供个性化服务",
        3: "专注于豪华房产和投资机会"
      },
      contactButton: "联系我"
    },
        // neighborhoodGuide.vue 
        neighborhoodGuide: {
          title: "工作正在进行中..."
        },
    // contact.vue 
    contact: {
      title: "联系 Richard Guang",
      subtitle: "持牌房地产销售人员",
      phone: "+1 (718) 496 7914",
      wechat: "微信: guang-rich",
      xiaohongshu: "小红书 ID: richardguang",
      connectTitle: "与 Richard 建立联系",
    },
    // listings.vue 
    listings: {
      title: "精选房源",
      description: "请点击以下链接查看我当前的房源列表：",
      viewButton: "查看房源",
      updateNote: "房源列表定期更新。请经常回来查看新的房产。"
    },
    // about.vue 
    about: {
      title: "关于Richard Guang",
      subtitle: "麻省理工学院斯隆管理学院毕业 | 金融与统计学",
      paragraph1: "Richard Guang毕业于麻省理工学院斯隆管理学院，主修金融和统计学。他拥有强烈的工作热情，顽强的成功欲望，以及与所有人建立良好关系的能力。Richard在纽约市出生并长大，他对这座城市的专业知识和广泛了解确保了为客户提供最高水平的服务，无论是购买、出售、投资还是租赁房产。",
      paragraph2:"他曾在摩根大通私人银行工作，并在纽约的多家资产管理公司任职，目前是纽约房地产委员会的成员。从小，他就帮助家人管理城市各处的多处房产。作为一个终身运动员和竞争者，Richard喜欢跑步、体操和骑自行车。",
      paragraph3:"Richard快速适应和挑战现状的能力使他成为一个能找到任何问题解决方案的充满活力的人。他对豪华房地产充满热情，热爱带领个人、家庭和投资者实现他们的房地产抱负。",
      language: "语言",
      language1: "中文", 
      language2:"英语", 
      language3:"普通话"
    },
    // foreigninvestorguide.vue 
    foreignInvestorGuide: {
      title: "外国投资者指南",
      introduction: "欢迎阅读Richard的外国投资者房地产指南！作为一名经验丰富的纽约市房地产经纪人，我有幸协助许多中国家庭为在美国留学的子女找到完美的家。凭借帮助子女就读于纽约大学、哥伦比亚大学、普林斯顿大学、哈佛大学和麻省理工学院等著名大学的家长的经验，我理解您在踏上这段重要旅程时可能有的独特需求和担忧。",
      sections: {
        whyInvest: {
          title: "为什么投资纽约市房地产？",
          content: "纽约市为房地产投资提供了独特的机会，结合了稳定性、高增值潜力和靠近世界顶级大学的优势。对于家长来说，在这里拥有一处房产不仅为子女提供了安全便利的住所，还代表了明智的财务投资。纽约市场以其韧性和长期价值而闻名，是国际买家的理想选择。"
        },
        understandingMarket: {
          title: "了解纽约市房地产市场",
          content: "纽约市房地产市场广阔多样，不同的社区提供不同的生活方式和投资潜力。无论您是寻找靠近哥伦比亚大学的安静住宅区，还是靠近纽约大学的充满活力的繁华地段，我都可以为您提供指导。典型的房产类型从现代高层公寓到历史悠久的褐石住宅应有尽有。我将帮助您在这个复杂的市场中找到既满足您子女需求又符合您投资目标的完美住所。"
        },
        personalizedGuidance: {
          title: "个性化的购买流程指导",
          content: "当您访问纽约市时，我将根据您的日程安排，在2-5天内安排一系列房产参观。在这些参观过程中，我将为每处房产提供详细的见解，突出其优点和潜在的缺点。我的首要任务是确保您拥有做出明智决定所需的所有信息。"
        },
        financialAnalysis: {
          title: "财务分析和投资潜力",
          content: "投资房地产不仅仅是找到一个家；更是为未来获得一项有价值的资产。我将对您感兴趣的每处房产进行全面的财务分析，评估潜在租金收入、增值预测和整体投资回报率（ROI）等因素。这种分析将帮助您了解哪些房产能提供最佳的财务收益。"
        },
        offerAndNegotiation: {
          title: "提交报价和谈判",
          content: "一旦您选定了理想的房产，我将指导您提出具有竞争力的报价。凭借我对纽约市场的深入了解，我可以根据当前市场状况和房产的真实价值，就报价提供建议。我的目标是帮助您以最佳价格获得房产。"
        },
        closingProcess: {
          title: "无缝交易流程",
          content: "在纽约市完成房产交易涉及多个步骤，从最终确定合同到确保满足所有法律和财务义务。我将与您的法律和财务顾问密切协调，处理每一个细节。如果您需要在交易完成前返回中国，请不用担心。我有管理远程交易的经验，将确保一切都代表您妥善处理。无论是签署文件还是与当地机构协调，我都将作为您在纽约的可信赖代表。"
        }
      },
      contactInfo: {
        title: "联系信息",
        content: "我随时为您提供协助。无论您对纽约市房地产市场有任何疑问，还是准备开始寻找房产，请随时与我联系。您可以通过电话、电子邮件或我的微信账号与我快速方便地沟通。"
      },
      contactButton: "联系Richard"
    }
  }
}

const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
})

export default i18n