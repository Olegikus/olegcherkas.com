import fs from 'node:fs';
import path from 'node:path';

const pages = [
  {
    path: 'locations/uae/sharjah/index.html', city: 'Sharjah', region: 'United Arab Emirates', image: 'sharjah.jpg',
    imageAlt: 'Sharjah Blue Souk and waterfront skyline',
    lead: "Reach industrial, education, logistics and innovation decision makers with LinkedIn outreach built for Sharjah's distinct business ecosystem.",
    signal: 'Industrial depth. Academic influence. Strong SME networks.', tags: ['Manufacturing','Education','Logistics','Innovation'],
    whyTitle: 'Sharjah is not simply a lower-cost version of Dubai',
    paragraphs: [
      "Sharjah combines industrial zones, free zones, universities, research organisations, healthcare providers and a significant base of owner-led businesses. Its commercial identity is different from the headquarters-heavy market next door.",
      "A useful campaign separates <strong>industrial and institutional buyers</strong> from general SME audiences. The proof needed by a manufacturer or university partner is not the same proof that opens a conversation with a creative or professional-services founder.",
      "We build smaller audience groups around sector, operating model, seniority and commercial trigger before writing the LinkedIn sequence."
    ],
    signals: [['Market structure','Industrial clusters, free zones, universities and established SMEs'],['Buying reality','Technical relevance and local ecosystem knowledge shape credibility'],['Outbound implication','Segment the market by sector before writing the first message']],
    sectors: [['Advanced manufacturing','Industrial operators, technology providers, plant leadership and specialised suppliers.'],['Mobility & logistics','Ports, freight, aviation, warehousing and supply-chain businesses.'],['Education & research','Universities, training providers, research centres and education technology.'],['Green technology','Sustainability, energy efficiency, waste, water and environmental services.'],['Healthcare','Hospitals, clinics, health technology and specialist service providers.'],['Creative industries','Media, publishing, culture, tourism and design-led businesses.'],['HR, recruitment & training','Recruitment firms, staffing providers, HR technology and learning partners serving Sharjah employers.']],
    faq: [['How is Sharjah outreach different from Dubai?','Sharjah targeting often leans more heavily toward industrial, education, logistics and SME ecosystems. The account list and proof should reflect those sectors rather than reuse a Dubai headquarters message.'],['Which Sharjah decision makers can you target?','Campaigns can target founders, general managers, commercial directors, operations leaders, procurement, innovation teams, university leaders and other relevant senior stakeholders.'],['Can LinkedIn work for manufacturing companies in Sharjah?','Yes. The message should connect a concrete operational or commercial problem to relevant proof, rather than use a broad technology pitch.'],['Can Sharjah be part of a wider UAE campaign?','Yes, but it should have its own segment, message logic and follow-up instead of being hidden inside one generic UAE list.']],
    sourceName: 'Invest in Sharjah', sourceUrl: 'https://investinsharjah.ae/key-sectors/',
    related: [['Dubai','/locations/uae/dubai/','International headquarters and fast-moving commercial teams'],['Ajman','/locations/uae/ajman/','SMEs, trade and owner-led businesses'],['Ras Al Khaimah','/locations/uae/ras-al-khaimah/','Manufacturing, tourism and northern UAE growth']],
    cta: 'Build a Sharjah campaign around the right business ecosystem.'
  },
  {
    path: 'locations/uae/ajman/index.html', city: 'Ajman', region: 'United Arab Emirates', image: 'ajman.jpg',
    imageAlt: 'Ajman Museum fort and the Ajman waterfront',
    lead: "Reach owners and commercial leaders across Ajman's SME, industrial, trade and service economy through focused LinkedIn B2B lead generation.",
    signal: 'Owner-led firms. Practical value. Direct access.', tags: ['SMEs','Industry','Trade','Services'],
    whyTitle: 'Ajman rewards relevance more than corporate theatre',
    paragraphs: [
      "Ajman's business base includes growing SMEs, manufacturers, traders, real-estate businesses, tourism operators and professional-service firms. Many buying conversations sit close to the owner, general manager or operating leader.",
      "That creates an opportunity for direct outreach, but generic enterprise language can feel disconnected from the way these businesses buy. A campaign needs a <strong>clear practical outcome</strong>, credible proof and a realistic next step.",
      "We prioritise reachable accounts, identify the people closest to the commercial decision and write concise LinkedIn messages around their actual operating context."
    ],
    signals: [['Market structure','A broad SME base alongside industrial and service businesses'],['Buying reality','Owners and operating leaders often remain close to commercial decisions'],['Outbound implication','Lead with practical value and keep the route to a conversation simple']],
    sectors: [['SME services','Owner-led businesses, consultancies and specialist local service providers.'],['Manufacturing','Factories, suppliers, industrial technology and operations teams.'],['Trade & distribution','Importers, wholesalers, distributors and commercial networks.'],['Real estate','Developers, property services, facilities and related suppliers.'],['Tourism & hospitality','Hotels, leisure operators, food service and visitor-economy suppliers.'],['Water & sustainability','Desalination, water technology, efficiency and environmental solutions.'],['HR & workforce services','Recruitment, staffing, payroll, HR consulting and people software supporting Ajman SMEs.']],
    faq: [['Is Ajman large enough for a dedicated campaign?','It can be, when the offer fits Ajman’s SME, industrial, property or service economy. For narrow offers, Ajman can also run as its own segment inside a wider northern UAE campaign.'],['Who should be targeted in Ajman?','Common roles include founders, owners, general managers, commercial directors, operations leaders and functional decision makers.'],['Should the message mention lower operating costs?','Only when it is genuinely relevant to the offer. Outreach should focus on the prospect’s business priority, not repeat generic investment slogans.'],['Can you combine LinkedIn and email?','Yes. LinkedIn positioning, personalised messages, email and structured follow-up can operate as one coordinated sequence.']],
    sourceName: 'Ajman Department of Economic Development', sourceUrl: 'https://www.ajmanded.ae/en/why-ajman/invest-in-ajman',
    related: [['Sharjah','/locations/uae/sharjah/','Industrial, education and logistics ecosystems'],['Dubai','/locations/uae/dubai/','International and regional commercial teams'],['Ras Al Khaimah','/locations/uae/ras-al-khaimah/','Manufacturing and tourism growth']],
    cta: 'Turn a focused Ajman account list into qualified conversations.'
  },
  {
    path: 'locations/uae/ras-al-khaimah/index.html', city: 'Ras Al Khaimah', region: 'United Arab Emirates', image: 'ras-al-khaimah.jpg',
    imageAlt: 'Jebel Jais mountains overlooking Ras Al Khaimah and the coast',
    lead: "Reach manufacturing, tourism, construction and service decision makers with LinkedIn outreach designed for Ras Al Khaimah's focused business landscape.",
    signal: 'Industrial clusters. Tourism growth. Concentrated accounts.', tags: ['Manufacturing','Tourism','Construction','Services'],
    whyTitle: 'A smaller market requires sharper account selection',
    paragraphs: [
      "Ras Al Khaimah brings together industrial operators, free-zone companies, building-material businesses, tourism groups, real-estate projects and internationally owned SMEs. The prospect universe is more concentrated than Dubai's.",
      "Success therefore comes from <strong>choosing the right accounts</strong>, not inflating the list. Messages should show why the offer matters to the recipient's specific operation, project or growth plan.",
      "We research the local business cluster, map decision makers and use patient follow-up to create familiarity without flooding a relatively compact market."
    ],
    signals: [['Market structure','Industrial and tourism clusters supported by free-zone and SME activity'],['Buying reality','A more concentrated account universe makes reputation and relevance visible'],['Outbound implication','Research fewer companies more deeply and avoid repetitive messaging']],
    sectors: [['Manufacturing','Industrial operators, materials, packaging, food production and suppliers.'],['Tourism & hospitality','Resorts, hotels, attractions, operators and visitor-economy services.'],['Construction','Developers, contractors, building materials and facilities businesses.'],['Logistics','Warehousing, transport, distribution and industrial supply chains.'],['Technology','Business software, industrial technology and digital transformation services.'],['Professional services','Consulting, recruitment, finance and specialised B2B providers.'],['HR & talent services','Hospitality and industrial recruitment, staffing, workforce technology and executive search.']],
    faq: [['What makes Ras Al Khaimah different for outbound?','It has a more concentrated set of industrial, tourism, construction and SME accounts. Target selection and message variety matter because the market is smaller.'],['Can you target free-zone companies?','Yes. We can segment companies by sector, size, ownership profile and role rather than treating every free-zone company as the same audience.'],['Does this work for industrial services?','Yes. Industrial outreach works best when it references an operational priority, relevant capability and credible proof.'],['Can Ras Al Khaimah run with other northern emirates?','Yes, provided each emirate and sector keeps its own targeting and message variant.']],
    sourceName: 'RAKEZ', sourceUrl: 'https://rakez.com/',
    related: [['Sharjah','/locations/uae/sharjah/','Industry, logistics and innovation'],['Ajman','/locations/uae/ajman/','SMEs and owner-led commercial decisions'],['Fujairah','/locations/uae/fujairah/','Ports, energy and East Coast business']],
    cta: 'Prioritise the Ras Al Khaimah accounts that can actually buy.'
  },
  {
    path: 'locations/uae/fujairah/index.html', city: 'Fujairah', region: 'United Arab Emirates', image: 'fujairah.jpg',
    imageAlt: 'Fujairah Fort, Hajar Mountains and the coast',
    lead: "Open conversations across Fujairah's port, logistics, energy, hospitality and service economy with precise LinkedIn B2B outreach.",
    signal: 'Port economy. Specialist buyers. Account-led outreach.', tags: ['Ports','Logistics','Energy','Hospitality'],
    whyTitle: 'Fujairah is a specialist market, not a volume market',
    paragraphs: [
      "Fujairah's position on the Gulf of Oman supports port activity, shipping, logistics, energy services, trade and hospitality. Relevant buyers are often concentrated inside a defined group of operators and supporting companies.",
      "A broad UAE campaign can miss that structure. Effective outreach needs <strong>sector-specific account research</strong>, clear operational relevance and careful stakeholder mapping.",
      "We build the list around companies with a plausible reason to buy, then coordinate LinkedIn, email and follow-up around the role each person plays."
    ],
    signals: [['Market structure','Ports, shipping, logistics, energy and tourism shape the commercial base'],['Buying reality','Specialist operations create specific technical and procurement requirements'],['Outbound implication','Use account-led research and demonstrate direct operational relevance']],
    sectors: [['Ports & shipping','Port operators, maritime services, ship supply and related businesses.'],['Energy services','Storage, terminals, fuel, maintenance and specialist contractors.'],['Logistics','Freight, warehousing, transport and supply-chain providers.'],['Trade','Import, export, distribution and East Coast commercial activity.'],['Hospitality','Hotels, tourism operators, food service and destination suppliers.'],['Industrial services','Engineering, maintenance, safety, technology and professional support.'],['HR & workforce solutions','Maritime, industrial and hospitality recruitment, staffing, training and workforce systems.']],
    faq: [['Which Fujairah sectors suit LinkedIn outreach?','Ports, shipping, logistics, energy services, industrial support, hospitality, trade and relevant professional services can all be viable with the right offer.'],['Is the Fujairah market too small?','Not necessarily. A smaller addressable market can be valuable when account value is high and targeting is precise. It should not be approached with volume tactics.'],['Who should receive the messages?','Depending on the offer, targets may include general managers, commercial leaders, operations, engineering, procurement, technology and finance stakeholders.'],['Can Fujairah be combined with Dubai outreach?','Yes, but the Fujairah segment should use different account logic and messages because its commercial base is more specialised.']],
    sourceName: 'Fujairah Free Zone', sourceUrl: 'https://fujairahfreezone.com/',
    related: [['Ras Al Khaimah','/locations/uae/ras-al-khaimah/','Industry, tourism and northern UAE growth'],['Sharjah','/locations/uae/sharjah/','Manufacturing and logistics ecosystems'],['Dubai','/locations/uae/dubai/','Regional headquarters and international teams']],
    cta: 'Build a Fujairah campaign around specialist accounts and real context.'
  },
  {
    path: 'locations/saudi-arabia/jeddah/index.html', city: 'Jeddah', region: 'Saudi Arabia', image: 'jeddah.jpg',
    imageAlt: 'King Fahd Fountain and the Jeddah Corniche at night',
    lead: "Reach family groups, trade, logistics, tourism and professional-service leaders through LinkedIn B2B lead generation built for Jeddah and the Red Sea economy.",
    signal: 'Commercial gateway. Family groups. Red Sea connectivity.', tags: ['Trade','Logistics','Tourism','Services'],
    whyTitle: 'Jeddah combines relationship-led business with global trade',
    paragraphs: [
      "Jeddah is a major commercial gateway for western Saudi Arabia, with established family groups, import and distribution businesses, logistics networks, tourism activity and professional services.",
      "The market can be internationally connected while still relying heavily on reputation and introductions. Cold outreach must create <strong>commercial familiarity</strong> before it asks for time.",
      "We segment accounts by ownership model, sector, company scale and buying role, then build a respectful sequence around a real business reason to connect."
    ],
    signals: [['Market structure','Family businesses, trade networks, logistics and Red Sea growth'],['Buying reality','Relationships and reputation often sit beside formal commercial evaluation'],['Outbound implication','Use credible positioning, relevant context and patient multi-step follow-up']],
    sectors: [['Trade & distribution','Importers, distributors, wholesalers and multi-sector commercial groups.'],['Logistics','Ports, freight, warehousing, transport and supply-chain technology.'],['Tourism & hospitality','Hotels, operators, destination services and tourism suppliers.'],['Professional services','Consulting, legal, recruitment, finance and specialised advisory firms.'],['Consumer & retail','Retail groups, consumer businesses and enabling B2B providers.'],['Technology','SaaS, digital transformation and technology services for established businesses.'],['HR & executive search','Recruitment, staffing, HR technology and leadership search for family groups and growing employers.']],
    faq: [['How is Jeddah outreach different from Riyadh?','Jeddah often involves family businesses, trade, logistics, tourism and western-region commercial networks. Riyadh contains more national headquarters and central institutional stakeholders.'],['Can you target family-owned companies?','Yes. We identify the appropriate owner, executive or functional leader and avoid messages that make assumptions about ownership or internal authority.'],['Which language should be used?','English can work for many segments, while Arabic may improve others. Language and tone should be chosen by audience rather than applied as a blanket rule.'],['Can Jeddah campaigns include email?','Yes. LinkedIn, email and structured follow-up can be coordinated around the same account research.']],
    sourceName: 'Invest Saudi', sourceUrl: 'https://investsaudi.sa/',
    related: [['Riyadh','/locations/saudi-arabia/riyadh/','National headquarters and strategic enterprise'],['Makkah','/locations/saudi-arabia/makkah/','Hospitality, infrastructure and visitor services'],['Madinah','/locations/saudi-arabia/madinah/','Hospitality, development and services']],
    cta: 'Open Jeddah conversations with relevance before asking for a meeting.'
  },
  {
    path: 'locations/saudi-arabia/dammam-khobar/index.html', city: 'Dammam and Al Khobar', region: 'Saudi Arabia', image: 'dammam-khobar.jpg',
    imageAlt: 'Ithra and the Eastern Province business skyline',
    lead: "Reach energy, industrial, engineering and logistics buyers through account-based LinkedIn outreach across Dammam, Al Khobar and the Eastern Province.",
    signal: 'Technical buyers. Industrial supply chains. Multi-role decisions.', tags: ['Energy','Engineering','Industry','Logistics'],
    whyTitle: 'Technical credibility opens Eastern Province conversations',
    paragraphs: [
      "Dammam and Al Khobar sit inside the Eastern Province's energy, industrial, engineering and logistics ecosystem. Target accounts often involve operators, contractors, suppliers, technology firms and specialist service providers.",
      "A generic sales message will struggle when several technical and commercial stakeholders influence the decision. Outreach needs <strong>role-specific relevance</strong> and proof that matches the operating environment.",
      "We map the account, separate technical, commercial and procurement personas, and coordinate follow-up across LinkedIn and email."
    ],
    signals: [['Market structure','Energy, industry, engineering and logistics form connected supply chains'],['Buying reality','Technical, commercial and procurement stakeholders may all shape access'],['Outbound implication','Map accounts deeply and tailor proof to each stakeholder role']],
    sectors: [['Energy','Operators, service companies, contractors and specialist technology providers.'],['Engineering','EPC firms, consultancies, maintenance and project-service businesses.'],['Industrial manufacturing','Plants, suppliers, automation and industrial technology.'],['Logistics','Ports, freight, warehousing and supply-chain operations.'],['Construction','Industrial construction, infrastructure, facilities and materials.'],['Professional services','Recruitment, safety, training, finance and specialised consulting.'],['HR & industrial workforce','Technical recruitment, staffing, workforce training, HR systems and executive search.']],
    faq: [['Why combine Dammam and Al Khobar?','They operate within one connected Eastern Province business ecosystem. Campaigns can share account research while still segmenting companies and roles by city and sector.'],['Who should be targeted in industrial accounts?','Targets may include operations, engineering, maintenance, digital transformation, commercial, procurement and executive stakeholders.'],['Can LinkedIn work in technical B2B markets?','Yes, when messages are specific, credible and connected to an operational or commercial priority. Generic innovation language is rarely enough.'],['Should the campaign include Dhahran?','It can when relevant accounts and stakeholders are part of the same Eastern Province ecosystem. The list should be driven by fit, not only city boundaries.']],
    sourceName: 'Invest Saudi', sourceUrl: 'https://investsaudi.sa/sectors/transport-logistics',
    related: [['Riyadh','/locations/saudi-arabia/riyadh/','Strategic enterprise and national decision makers'],['Jeddah','/locations/saudi-arabia/jeddah/','Trade, logistics and family groups'],['Doha','/locations/qatar/doha/','Energy, infrastructure and enterprise buyers']],
    cta: 'Map the Eastern Province buying group before sending the first message.'
  },
  {
    path: 'locations/saudi-arabia/makkah/index.html', city: 'Makkah', region: 'Saudi Arabia', image: 'makkah.jpg',
    imageAlt: 'Makkah skyline with Abraj Al Bait and the Grand Mosque',
    lead: "Reach hospitality, infrastructure, transport and service organisations supporting Makkah's complex visitor economy through respectful LinkedIn B2B outreach.",
    signal: 'Visitor economy. Complex operations. Responsible targeting.', tags: ['Hospitality','Infrastructure','Transport','Services'],
    whyTitle: 'Commercial outreach must respect the context of Makkah',
    paragraphs: [
      "Makkah's business environment includes hotels, property and facilities operators, transport providers, food service, healthcare, technology, construction and organisations supporting large-scale visitor flows.",
      "The commercial opportunity should never be confused with the religious purpose of the city. Responsible outreach targets <strong>legitimate organisational needs</strong> and speaks professionally to the people managing complex services and infrastructure.",
      "We define relevant company types, identify senior operational and commercial stakeholders, and write measured messages without opportunistic religious language."
    ],
    signals: [['Market structure','Hospitality, infrastructure and services support a large visitor economy'],['Buying reality','Operational complexity, procurement and reputation influence decisions'],['Outbound implication','Target organisations responsibly and keep messaging professional and specific']],
    sectors: [['Hospitality','Hotel groups, operators, facilities and hospitality technology.'],['Transport','Mobility, fleet, logistics and visitor-transport services.'],['Construction','Infrastructure, property, contractors and building services.'],['Food service','Catering, supply, operations and hospitality procurement.'],['Healthcare','Providers, health services, technology and operational support.'],['Digital services','Software, communications, security and operational technology.'],['HR & hospitality workforce','Recruitment, staffing, training and HR technology for service and visitor-economy employers.']],
    faq: [['Is B2B outreach appropriate for Makkah?','Yes, when it targets legitimate organisations and commercial needs respectfully. Messaging should avoid exploiting the city’s religious importance.'],['Which companies can be targeted?','Relevant targets may include hospitality groups, facilities operators, transport providers, construction companies, healthcare organisations and technology suppliers.'],['Who are the likely decision makers?','Depending on the offer, relevant roles may include operations, commercial, procurement, facilities, technology and executive leadership.'],['Can Makkah be combined with Jeddah?','Yes, for offers serving the wider western region, but Makkah should retain its own account filters and messaging context.']],
    sourceName: 'Invest Saudi tourism sector', sourceUrl: 'https://investsaudi.sa/sectors/tourism',
    related: [['Jeddah','/locations/saudi-arabia/jeddah/','Trade, tourism and western-region business'],['Madinah','/locations/saudi-arabia/madinah/','Hospitality, urban services and development'],['Riyadh','/locations/saudi-arabia/riyadh/','National enterprise and strategic stakeholders']],
    cta: 'Approach Makkah organisations with relevance and respect.'
  },
  {
    path: 'locations/saudi-arabia/madinah/index.html', city: 'Madinah', region: 'Saudi Arabia', image: 'madinah.jpg',
    imageAlt: "Madinah skyline and the Prophet's Mosque at dawn",
    lead: "Reach hospitality, real-estate, healthcare, transport and urban-service decision makers through respectful LinkedIn B2B lead generation in Madinah.",
    signal: 'Long-term development. Service quality. Trust-led access.', tags: ['Hospitality','Real estate','Healthcare','Services'],
    whyTitle: 'Madinah outreach needs patience, trust and clear utility',
    paragraphs: [
      "Madinah's commercial environment includes hospitality, real estate, transport, healthcare, retail, digital services and organisations supporting regional development and visitor services.",
      "Prospects need to see a practical reason for engagement and confidence that the sender understands their environment. <strong>Trust-building follow-up</strong> matters more than artificial urgency.",
      "We identify organisations with a plausible need, map decision makers and use concise, respectful LinkedIn and email sequences focused on service quality or business outcomes."
    ],
    signals: [['Market structure','Hospitality and urban services sit beside healthcare and development activity'],['Buying reality','Trust, service quality and organisational context shape the conversation'],['Outbound implication','Use patient follow-up and connect the offer to a clear practical outcome']],
    sectors: [['Hospitality','Hotels, operators, facilities, food service and hospitality technology.'],['Real estate','Development, property operations, facilities and supporting services.'],['Healthcare','Hospitals, clinics, health technology and specialist providers.'],['Transport','Mobility, logistics, fleet and visitor-service operations.'],['Urban services','Infrastructure, maintenance, security and environmental services.'],['Technology','Software, communications, digital operations and professional services.'],['HR & people services','Recruitment, staffing, learning and HR technology for hospitality, healthcare and urban services.']],
    faq: [['Which Madinah companies can use LinkedIn outreach?','Hospitality, property, healthcare, transport, technology and urban-service organisations may be relevant depending on the offer.'],['How should the tone be adapted?','The tone should be respectful, concise and focused on practical value. Messages should avoid manufactured urgency or religious references used as sales hooks.'],['Can you target regional development suppliers?','Yes, when the supplier category and relevant decision makers can be identified from public business information.'],['Should Madinah and Makkah use the same sequence?','No. They may share some sectors, but the account base, commercial context and specific message evidence should be researched separately.']],
    sourceName: 'Invest Saudi', sourceUrl: 'https://www.investsaudi.sa/en/mediaCenter/downloadResoruce/province-medina?report=statistical',
    related: [['Makkah','/locations/saudi-arabia/makkah/','Hospitality, infrastructure and visitor services'],['Jeddah','/locations/saudi-arabia/jeddah/','Trade, logistics and western-region business'],['Riyadh','/locations/saudi-arabia/riyadh/','Strategic enterprise and headquarters']],
    cta: 'Build patient, credible outreach for Madinah decision makers.'
  },
  {
    path: 'locations/qatar/doha/index.html', city: 'Doha', region: 'Qatar', image: 'doha.jpg',
    imageAlt: 'Museum of Islamic Art and the Doha West Bay skyline',
    lead: "Reach energy, finance, infrastructure, technology and professional-service leaders with LinkedIn B2B outreach built for Doha's concentrated enterprise market.",
    signal: 'High-value accounts. Institutional buyers. Concentrated market.', tags: ['Energy','Finance','Technology','Infrastructure'],
    whyTitle: 'Doha is concentrated, senior and relationship-led',
    paragraphs: [
      "Doha contains much of Qatar's enterprise, financial, institutional and professional-services decision making. Relevant markets include energy, infrastructure, finance, technology, logistics, healthcare and advisory services.",
      "The number of priority accounts may be smaller than in larger markets, while their value and stakeholder complexity can be high. Outreach should favour <strong>account depth over volume</strong>.",
      "We identify the organisations most likely to buy, map senior and functional stakeholders, and coordinate LinkedIn, email and follow-up around credible market-specific evidence."
    ],
    signals: [['Market structure','Enterprise and institutional decision making is concentrated in Doha'],['Buying reality','High-value opportunities often involve several senior and functional stakeholders'],['Outbound implication','Prioritise account research, credibility and patient relationship building']],
    sectors: [['Energy','Energy companies, contractors, technology and specialist service providers.'],['Financial services','Banks, fintech, investment, insurance and professional support.'],['Technology','Cloud, cybersecurity, AI, software and digital transformation.'],['Infrastructure','Construction, engineering, mobility, facilities and project services.'],['Logistics','Transport, maritime, aviation and supply-chain operations.'],['Professional services','Consulting, legal, recruitment, accounting and specialist advisory.'],['HR & executive search','Recruitment, workforce planning, HR technology and leadership search for Qatari enterprises.']],
    faq: [['Is Doha different from other GCC markets?','Yes. Qatar’s enterprise and institutional decision making is highly concentrated in Doha, so account selection and stakeholder mapping are especially important.'],['Which Doha roles can be targeted?','Campaigns can target executives, commercial leaders, technology, operations, procurement, finance, innovation and other relevant stakeholders.'],['Can smaller B2B firms sell into Qatar?','Yes, if the offer is credible, specialised and connected to a clear business priority. A narrow, well-researched campaign is usually stronger than broad volume outreach.'],['Should Qatar and Saudi Arabia share one message?','No. They have different account structures, priorities and relationship dynamics. Research and evidence should be localised.']],
    sourceName: 'Invest Qatar', sourceUrl: 'https://www.invest.qa/en/sectors-and-opportunities',
    related: [['Riyadh','/locations/saudi-arabia/riyadh/','Strategic enterprise and national headquarters'],['Dammam & Al Khobar','/locations/saudi-arabia/dammam-khobar/','Energy and industrial supply chains'],['Dubai','/locations/uae/dubai/','Regional headquarters and international teams']],
    cta: 'Focus Doha outreach on the accounts that justify deeper research.'
  },
  {
    path: 'locations/singapore/index.html', city: 'Singapore', region: 'Singapore', image: 'singapore.jpg',
    imageAlt: 'Marina Bay Sands and the Singapore financial district',
    lead: "Reach regional headquarters, technology companies and professional-service leaders through precise LinkedIn B2B lead generation in Singapore.",
    signal: 'Regional headquarters. Sophisticated buyers. High proof threshold.', tags: ['SaaS','Technology','HQ teams','Professional services'],
    whyTitle: 'Singapore buyers expect clarity, proof and regional relevance',
    paragraphs: [
      "Singapore is a major base for regional headquarters, technology companies, professional services, financial services, advanced manufacturing and supply-chain leadership across Asia.",
      "Decision makers are highly exposed to outbound. Vague personalisation and generic claims are easy to recognise. A strong campaign needs <strong>specific commercial evidence</strong>, a clear regional use case and a low-friction reason to respond.",
      "We segment headquarters, local operators and regional teams separately, then align profile positioning, LinkedIn messages and follow-up with the buyer's actual remit."
    ],
    signals: [['Market structure','Regional headquarters and specialised business ecosystems serve wider Asia'],['Buying reality','Sophisticated buyers compare claims quickly and expect credible proof'],['Outbound implication','Write concise messages grounded in the person’s regional role and priorities']],
    sectors: [['SaaS & technology','Software, cloud, cybersecurity, AI and enterprise technology.'],['Regional headquarters','APAC and Southeast Asia leadership, commercial and functional teams.'],['Professional services','Consulting, legal, finance, engineering, marketing and advisory firms.'],['Financial services','Banks, fintech, insurance, investment and wealth businesses.'],['Advanced manufacturing','Technology hardware, industrial innovation and specialised production.'],['Supply chain','Logistics, procurement, distribution and regional operations.'],['HR & talent technology','Regional recruitment, executive search, HR SaaS and people services for APAC headquarters.']],
    faq: [['Why is Singapore outbound difficult?','Decision makers receive many polished sales messages and can identify generic personalisation quickly. Relevance, evidence and concise writing are essential.'],['Which Singapore roles can be targeted?','Campaigns can target founders, country managers, regional leaders, commercial executives, technology, operations, finance and other functional decision makers.'],['Is Singapore part of the GCC campaign?','No. Singapore is a separate international market with its own account structure, buyer expectations and message strategy.'],['Can Singapore outreach target APAC responsibilities?','Yes. The campaign can identify people with Southeast Asia or wider APAC responsibilities and personalise around that regional remit.']],
    sourceName: 'Singapore Economic Development Board', sourceUrl: 'https://www.edb.gov.sg/en/our-industries/headquarters.html',
    related: [['Dubai','/locations/uae/dubai/','International headquarters and Middle East growth'],['Doha','/locations/qatar/doha/','Concentrated enterprise and institutional buyers'],['Riyadh','/locations/saudi-arabia/riyadh/','Strategic enterprise and transformation programmes']],
    cta: 'Give Singapore buyers a specific reason to respond.'
  }
];

const metaDescriptions = {
  Sharjah: 'LinkedIn B2B lead generation in Sharjah for manufacturing, education, logistics and SME decision makers through focused, personalised outreach.',
  Ajman: 'LinkedIn B2B lead generation in Ajman for owner-led SMEs, manufacturers, traders and service businesses using precise targeting and structured follow-up.',
  'Ras Al Khaimah': 'LinkedIn B2B lead generation in Ras Al Khaimah for manufacturing, tourism, construction and free-zone companies through account-focused outreach.',
  Fujairah: 'LinkedIn B2B lead generation in Fujairah for port, shipping, energy, logistics and hospitality buyers through sector-specific outreach.',
  Jeddah: 'LinkedIn B2B lead generation in Jeddah for family groups, trade, logistics, tourism and technology companies through locally relevant outreach.',
  'Dammam and Al Khobar': 'LinkedIn B2B lead generation across Dammam and Al Khobar for energy, engineering, industrial and logistics companies.',
  Makkah: 'LinkedIn B2B lead generation in Makkah for hospitality, infrastructure, construction and visitor-economy businesses.',
  Madinah: 'LinkedIn B2B lead generation in Madinah for hospitality, development, healthcare, education and urban-service decision makers.',
  Doha: 'LinkedIn B2B lead generation in Doha for energy, finance, infrastructure and professional-service decision makers through account-based outreach.',
  Singapore: 'LinkedIn B2B lead generation in Singapore for SaaS, technology, finance and regional HQ teams through precise, evidence-led outreach.',
  Dubai: 'LinkedIn B2B lead generation in Dubai with targeted outreach for founders, executives and decision makers in technology and professional services.',
  'Abu Dhabi': 'LinkedIn B2B lead generation in Abu Dhabi for institutional, technology, energy and professional-service markets through targeted outreach.',
  Riyadh: 'LinkedIn B2B lead generation in Riyadh through account-based outreach for technology, finance, professional services and enterprise markets.'
};

const uaeGuide = {
  title: 'B2B Lead Generation in Dubai and the UAE: What Actually Works',
  href: '/insights/b2b-lead-generation-dubai-uae/',
  text: 'How account selection, positioning and outreach should change across UAE business markets.'
};
const saudiGuide = {
  title: 'B2B Lead Generation in Saudi Arabia: A Regional Guide',
  href: '/insights/b2b-lead-generation-saudi-arabia-regional-guide/',
  text: 'How Saudi regions, industries and buying environments change B2B outreach strategy.'
};
const relatedInsights = {
  Sharjah: uaeGuide,
  Ajman: uaeGuide,
  'Ras Al Khaimah': uaeGuide,
  Fujairah: uaeGuide,
  Jeddah: saudiGuide,
  'Dammam and Al Khobar': saudiGuide,
  Makkah: saudiGuide,
  Madinah: saudiGuide,
  Doha: {
    title: 'From Cold Profile to 200 Enterprise Meetings: A LinkedIn Growth Case Study',
    href: '/insights/from-cold-profile-to-50-enterprise-meetings-a-linkedin-growth-case-study/',
    text: 'A GCC campaign that opened enterprise conversations across the UAE, Saudi Arabia and Qatar.'
  },
  Singapore: {
    title: 'LinkedIn Lead Generation for SaaS Companies in Singapore',
    href: '/insights/linkedin-lead-generation-saas-companies-singapore/',
    text: 'A practical framework for reaching regional headquarters and technology buyers in Singapore.'
  },
  Dubai: {
    title: 'LinkedIn Lead Generation for SaaS Companies in Dubai and the UAE',
    href: '/insights/linkedin-lead-generation-saas-companies-dubai-uae/',
    text: 'How SaaS companies can target Dubai and UAE buyers with market-specific outreach.'
  },
  'Abu Dhabi': uaeGuide,
  Riyadh: {
    title: 'LinkedIn Lead Generation for SaaS Companies in Riyadh and Saudi Arabia',
    href: '/insights/linkedin-lead-generation-saas-companies-riyadh-saudi-arabia/',
    text: 'How SaaS companies can build credible outreach for Riyadh and Saudi enterprise buyers.'
  }
};

const esc = value => String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const telegramIcon = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/></svg>';
const whatsappIcon = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';
const headerSocials = `<div class="header-socials" aria-label="Contact Oleg Cherkas"><a class="header-social" href="https://www.linkedin.com/in/oleg-cherkas" target="_blank" rel="noopener" aria-label="LinkedIn">in</a><a class="header-social" href="https://t.me/olegikus" target="_blank" rel="noopener" aria-label="Telegram">${telegramIcon}</a><a class="header-social header-whatsapp" href="https://wa.me/971563462566" target="_blank" rel="noopener" aria-label="WhatsApp">${whatsappIcon}</a></div>`;
const mobileSocials = `<div class="mobile-socials" aria-label="Contact Oleg Cherkas"><a href="https://www.linkedin.com/in/oleg-cherkas" target="_blank" rel="noopener" aria-label="LinkedIn">in</a><a href="https://t.me/olegikus" target="_blank" rel="noopener" aria-label="Telegram">${telegramIcon}</a><a href="https://wa.me/971563462566" target="_blank" rel="noopener" aria-label="WhatsApp">${whatsappIcon}</a></div>`;
const footerSocials = `<div class="social-links" aria-label="Contact Oleg Cherkas"><a href="https://www.linkedin.com/in/oleg-cherkas" target="_blank" rel="noopener" class="social-link" aria-label="LinkedIn">in</a><a href="https://t.me/olegikus" target="_blank" rel="noopener" class="social-link" aria-label="Telegram">${telegramIcon}</a><a href="https://wa.me/971563462566" target="_blank" rel="noopener" class="social-link" aria-label="WhatsApp">${whatsappIcon}</a></div>`;
const locationNav = `<nav class="site-nav"><a href="/" class="nav-logo" aria-label="Oleg Cherkas home"><img src="/uploads/linkeol-logo-clean.png" alt="Linkeol"></a><ul class="nav-links"><li><a href="/">Home</a></li><li><a href="/about/">About</a></li><li><a href="/services">Services</a></li><li><a href="/locations/" aria-current="page">Locations</a></li><li><a href="/results/">Results</a></li><li><a href="/blog">Blog</a></li><li><a href="/contact">Contact</a></li></ul><div class="nav-actions">${headerSocials}<a href="https://calendly.com/oleg-olegcherkas/30min" target="_blank" class="nav-cta">Book a call</a></div><button class="burger" aria-label="Open navigation" aria-expanded="false"><span></span><span></span><span></span></button></nav>`;
const locationMobileMenu = `<div class="mobile-menu" id="mobileMenu"><a href="/">Home</a><a href="/about/">About</a><a href="/services">Services</a><a href="/locations/">Locations</a><a href="/results/">Results</a><a href="/blog">Blog</a><a href="/contact">Contact</a>${mobileSocials}</div>`;
const locationFooter = `<footer><div class="footer-left"><div class="footer-copy">© 2026 Oleg Cherkas</div>${footerSocials}</div><nav class="footer-nav"><a href="/">Home</a><a href="/about/">About</a><a href="/services">Services</a><a href="/locations/">Locations</a><a href="/results/">Results</a><a href="/blog">Blog</a><a href="/contact">Contact</a></nav></footer>`;
function render(page) {
  const canonical = `https://olegcherkas.com/${page.path.replace(/index\.html$/, '')}`;
  const title = `LinkedIn B2B Lead Generation in ${page.city} | Oleg Cherkas`;
  const description = metaDescriptions[page.city];
  if (!description) throw new Error(`Meta description not found for ${page.city}`);
  const insight = relatedInsights[page.city];
  if (!insight) throw new Error(`Related insight not found for ${page.city}`);
  const faqJson = page.faq.map(([question,answer]) => ({'@type':'Question',name:question,acceptedAnswer:{'@type':'Answer',text:answer}}));
  const area = page.city === 'Dammam and Al Khobar'
    ? [
        {'@type':'City',name:'Dammam',containedInPlace:{'@type':'Country',name:page.region}},
        {'@type':'City',name:'Al Khobar',containedInPlace:{'@type':'Country',name:page.region}}
      ]
    : page.city === page.region
      ? {'@type':'Country',name:page.region}
      : {'@type':'City',name:page.city,containedInPlace:{'@type':'Country',name:page.region}};
  const schema = {'@context':'https://schema.org','@graph':[
    {'@type':'Service',name:`LinkedIn B2B Lead Generation in ${page.city}`,serviceType:'LinkedIn B2B lead generation and email outreach',url:canonical,areaServed:area,provider:{'@type':'Person',name:'Oleg Cherkas',url:'https://olegcherkas.com/'}},
    {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:'https://olegcherkas.com/'},{'@type':'ListItem',position:2,name:'Locations',item:'https://olegcherkas.com/locations/'},{'@type':'ListItem',position:3,name:page.city,item:canonical}]},
    {'@type':'FAQPage',mainEntity:faqJson}
  ]};
  const sectorCards = page.sectors.map(([name,text],i) => `<div class="card"><div class="card-index">0${i+1}</div><h3>${esc(name)}</h3><p>${esc(text)}</p></div>`).join('');
  const signalCards = page.signals.map(([label,text]) => `<div class="signal"><small>${esc(label)}</small><strong>${esc(text)}</strong></div>`).join('');
  const faqs = page.faq.map(([q,a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('');
  const related = page.related.map(([name,href,text]) => `<a class="related-card" href="${href}"><small>LinkedIn B2B lead generation</small><strong>${esc(name)}</strong><span>${esc(text)} →</span></a>`).join('');
  const relatedInsight = `<!-- RELATED_INSIGHT_START --><section class="page-section"><div class="section-inner"><div class="section-heading"><div class="eyebrow">Related insight</div><h2>Read more about this market</h2></div><div class="related-grid related-insight-grid"><a class="related-card" href="${insight.href}"><small>Market strategy</small><strong>${esc(insight.title)}</strong><span>${esc(insight.text)} Read article →</span></a></div></div></section><!-- RELATED_INSIGHT_END -->`;
  const steps = [
    ['Define the market segment',`Choose the ${page.city} company types, sectors, sizes and roles with the strongest reason to buy.`],
    ['Research accounts and people','Verify companies, map relevant stakeholders and collect evidence for personalisation.'],
    ['Position and write','Align the sender profile and build concise LinkedIn and email messages around real context.'],
    ['Follow up and learn','Run a measured multi-step sequence, review replies and refine targeting from real market feedback.']
  ].map(([name,text]) => `<div class="process-step"><div><h3>${esc(name)}</h3><p>${esc(text)}</p></div></div>`).join('');
  return `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(title)}</title><meta name="description" content="${esc(description)}"><link rel="canonical" href="${canonical}">
<meta property="og:type" content="website"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(page.lead)}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="https://olegcherkas.com/uploads/locations/${page.image}">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="LinkedIn B2B Lead Generation in ${esc(page.city)}"><meta name="twitter:description" content="${esc(page.lead)}"><meta name="twitter:image" content="https://olegcherkas.com/uploads/locations/${page.image}">
<link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet"><link rel="icon" href="/favicon.ico" sizes="any"><link rel="stylesheet" href="/locations/location-pages.css"><script type="application/ld+json">${JSON.stringify(schema)}</script></head>
<body><a class="skip-link" href="#main">Skip to content</a>
${locationNav}
${locationMobileMenu}
<main id="main"><section class="hero"><div class="breadcrumb"><a href="/">Home</a><span>/</span><a href="/locations/">Locations</a><span>/</span><span>${esc(page.city)}</span></div><div class="hero-grid"><div><div class="eyebrow">${esc(page.city)} · ${esc(page.region)}</div><h1>LinkedIn B2B lead generation in ${esc(page.city)}</h1><p class="hero-lead">${esc(page.lead)}</p><div class="hero-actions"><a href="https://calendly.com/oleg-olegcherkas/30min" target="_blank" class="btn-primary">Discuss a ${esc(page.city)} campaign →</a><a href="/b2b-lead-generation-service" class="btn-secondary">See the full service</a></div></div><aside class="city-panel city-visual"><figure class="city-image"><img src="/uploads/locations/${page.image}" alt="${esc(page.imageAlt)}" width="1600" height="800" fetchpriority="high"></figure><div class="city-market"><small>Market signal</small><strong>${esc(page.signal)}</strong><div class="city-tags">${page.tags.map(tag=>`<span>${esc(tag)}</span>`).join('')}</div></div></aside></div></section>
<section class="page-section"><div class="section-inner"><div class="split"><div class="section-heading"><div class="eyebrow">Why ${esc(page.city)} is different</div><h2>${esc(page.whyTitle)}</h2></div><div class="body-copy">${page.paragraphs.map(p=>`<p>${p}</p>`).join('')}</div></div><div class="signal-list">${signalCards}</div><p class="source-note">Market context informed by <a href="${page.sourceUrl}" target="_blank" rel="noopener">${esc(page.sourceName)}</a>.</p></div></section>
<section class="page-section"><div class="section-inner"><div class="section-heading"><div class="eyebrow">Ideal customer profiles</div><h2>Who we can target in ${esc(page.city)}</h2><p>Campaigns are filtered by sector, company type, seniority and a credible reason for the conversation.</p></div><div class="card-grid">${sectorCards}</div></div></section>
<section class="page-section"><div class="section-inner"><div class="section-heading"><div class="eyebrow">Execution</div><h2>How ${esc(page.city)} LinkedIn outreach is built</h2></div><div class="process-list">${steps}</div></div></section>
<section class="page-section"><div class="section-inner"><div class="proof"><div class="proof-number">200+</div><div class="proof-copy"><strong>enterprise meetings opened through LinkedIn</strong><p>The operating system combines profile positioning, account research, personalised sequences and consistent follow-up.</p></div><a class="proof-link" href="/results/">See campaign results →</a></div></div></section>
${relatedInsight}
<section class="page-section"><div class="section-inner"><div class="section-heading"><div class="eyebrow">Questions</div><h2>${esc(page.city)} LinkedIn B2B lead generation FAQ</h2></div><div class="faq-list">${faqs}</div></div></section>
<section class="page-section"><div class="section-inner"><div class="section-heading"><div class="eyebrow">Related markets</div><h2>Continue exploring</h2></div><div class="related-grid">${related}</div></div></section></main>
<section class="cta"><div class="cta-inner"><div><h2>${esc(page.cta)}</h2><p>Start with the market, the account and the decision maker - not a generic regional template.</p></div><a href="https://calendly.com/oleg-olegcherkas/30min" target="_blank" class="btn-primary">Book a strategy call →</a></div></section>
${locationFooter}
<a class="whatsapp-float" href="https://wa.me/971563462566?text=Hi%2C%20I%20would%20like%20to%20discuss%20LinkedIn%20B2B%20lead%20generation." target="_blank" aria-label="Write on WhatsApp"><svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M16.04 3C9.42 3 4.03 8.34 4.03 14.91c0 2.1.55 4.15 1.6 5.96L4 27l6.3-1.64a12.1 12.1 0 0 0 5.74 1.46C22.66 26.82 28 21.48 28 14.91S22.66 3 16.04 3Zm0 21.8c-1.8 0-3.55-.48-5.1-1.4l-.37-.22-3.74.97 1-3.62-.24-.38a9.78 9.78 0 0 1-1.52-5.24c0-5.46 4.47-9.9 9.97-9.9 5.49 0 9.95 4.44 9.95 9.9 0 5.46-4.46 9.9-9.95 9.9Zm5.46-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49s1.07 2.9 1.22 3.1c.15.2 2.1 3.19 5.08 4.47.71.3 1.26.48 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z"/></svg></a><script src="/site-navigation.js"></script></body></html>`;
}

for (const page of pages) {
  fs.mkdirSync(path.dirname(page.path), {recursive:true});
  fs.writeFileSync(page.path, render(page));
}

const existingPageHrCards = [
  {
    path: 'locations/uae/dubai/index.html',
    city: 'Dubai',
    marker: '<article class="card"><div class="card-index">06</div><h3>Regional expansion teams</h3><p>International companies entering the UAE or using Dubai as a base for GCC growth.</p></article>',
    card: '<article class="card"><div class="card-index">07</div><h3>HR, recruitment &amp; talent</h3><p>Recruitment agencies, executive-search firms, HR technology, staffing and people consultancies serving Dubai employers.</p></article>'
  },
  {
    path: 'locations/uae/abu-dhabi/index.html',
    city: 'Abu Dhabi',
    marker: '<article class="card"><div class="card-index">06</div><h3>Advisory and professional services</h3><p>Consultancies, legal and accounting firms, recruitment companies and expert-led service providers.</p></article>',
    card: '<article class="card"><div class="card-index">07</div><h3>HR &amp; workforce solutions</h3><p>Executive search, specialist recruitment, workforce consulting and HR technology for institutional and enterprise employers.</p></article>'
  },
  {
    path: 'locations/saudi-arabia/riyadh/index.html',
    city: 'Riyadh',
    marker: '<article class="card"><div class="card-index">06</div><h3>Professional services</h3><p>Consulting, legal, recruitment, advisory and specialist B2B firms pursuing high-value relationships.</p></article>',
    card: '<article class="card"><div class="card-index">07</div><h3>HR, recruitment &amp; people tech</h3><p>Executive search, staffing, HR platforms and workforce advisory supporting Riyadh organisations and transformation programmes.</p></article>'
  }
];

for (const item of existingPageHrCards) {
  let html = fs.readFileSync(item.path, 'utf8');
  if (!html.includes(item.card)) {
    if (!html.includes(item.marker)) throw new Error(`HR insertion point not found in ${item.path}`);
    html = html.replace(item.marker, item.marker + item.card);
  }
  const mainIndex = html.indexOf('<main id="main">');
  const navIndex = html.indexOf('<nav class="site-nav">');
  if (navIndex < 0 || mainIndex < 0) throw new Error(`Navigation markers not found in ${item.path}`);
  html = html.slice(0, navIndex) + locationNav + '\n' + locationMobileMenu + '\n\n' + html.slice(mainIndex);
  html = html.replace(/<footer>[\s\S]*?<\/footer>/, locationFooter);
  const description = metaDescriptions[item.city];
  const insight = relatedInsights[item.city];
  if (!description || !insight) throw new Error(`SEO data not found for ${item.city}`);
  html = html.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${esc(description)}">`);
  const relatedInsight = `<!-- RELATED_INSIGHT_START --><section class="page-section"><div class="section-inner"><div class="section-heading"><div class="eyebrow">Related insight</div><h2>Read more about this market</h2></div><div class="related-grid related-insight-grid"><a class="related-card" href="${insight.href}"><small>Market strategy</small><strong>${esc(insight.title)}</strong><span>${esc(insight.text)} Read article →</span></a></div></div></section><!-- RELATED_INSIGHT_END -->`;
  if (html.includes('<!-- RELATED_INSIGHT_START -->')) {
    html = html.replace(/<!-- RELATED_INSIGHT_START -->[\s\S]*?<!-- RELATED_INSIGHT_END -->/, relatedInsight);
  } else {
    html = html.replace(/(<section class="page-section"><div class="section-inner"><div class="section-heading"><div class="eyebrow">Questions<\/div>)/, `${relatedInsight}\n$1`);
  }
  html = html.replace('<a class="proof-link" href="/insights/from-cold-profile-to-50-enterprise-meetings-a-linkedin-growth-case-study/">Read the case study →</a>', '<a class="proof-link" href="/results/">See campaign results →</a>');
  html = html.replace(/<script>const burger=document\.querySelector\('\.burger'\);[\s\S]*?<\/script>/, '');
  if (!html.includes('/site-navigation.js')) {
    html = html.replace('</body>', '<script src="/site-navigation.js"></script>\n</body>');
  }
  fs.writeFileSync(item.path, html);
}

console.log(`Built ${pages.length} location pages and updated 3 existing city pages.`);
