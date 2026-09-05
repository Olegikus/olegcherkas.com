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
  },
  {
    path: 'locations/bahrain/manama/index.html', city: 'Manama', region: 'Bahrain', image: 'location-assets/manama-bahrain.jpg',
    imageAlt: 'Manama skyline and Bahrain World Trade Center at dusk',
    lead: "Reach finance, fintech, technology, logistics and professional-service leaders through focused LinkedIn B2B outreach in Bahrain.",
    signal: 'Compact market. Regional finance. Accessible senior buyers.', tags: ['Finance','Fintech','ICT','Logistics'],
    whyTitle: 'Manama rewards focused targeting and credible regional proof',
    paragraphs: [
      "Manama concentrates much of Bahrain's financial-services, technology and professional-services activity within a compact business market.",
      "Decision-makers are reachable, but a small market makes generic outreach visible quickly. Campaigns need <strong>precise account selection</strong>, a clear business reason and proof that fits the buyer's regional context.",
      "We segment accounts by sector, scale and role, then coordinate LinkedIn, email and patient follow-up around a credible commercial outcome."
    ],
    signals: [['Market structure','Financial services and ICT sit beside logistics, manufacturing and professional services'],['Buying reality','Senior buyers operate inside a compact, connected business community'],['Outbound implication','Research fewer accounts more deeply and avoid repetitive messaging']],
    sectors: [['Financial services','Banks, investment, insurance, payments and wealth businesses.'],['Fintech','Payments, regtech, digital banking and financial infrastructure.'],['ICT & cloud','Software, cloud, cybersecurity, telecom and digital transformation.'],['Logistics','Ports, freight, warehousing and regional supply-chain providers.'],['Manufacturing','Industrial operators, suppliers and specialised technology businesses.'],['Professional services','Consulting, legal, accounting, recruitment and advisory firms.'],['Regional businesses','Bahrain-based teams serving Saudi Arabia and the wider GCC.']],
    faq: [['Can LinkedIn generate B2B leads in Bahrain?','Yes. Bahrain is especially suitable for focused campaigns where the target account value justifies deeper research.'],['Which Manama roles can be targeted?','Campaigns can reach founders, executives, commercial leaders, technology, operations, finance and other relevant stakeholders.'],['Should Bahrain share a Saudi campaign?','The markets are connected, but Bahrain should keep its own account list, evidence and message variants.'],['Can LinkedIn and email work together?','Yes. Both channels can use the same research and coordinated follow-up sequence.']],
    sourceName: 'Bahrain Economic Development Board', sourceUrl: 'https://www.bahrainedb.com/about-us',
    related: [['Riyadh','/locations/saudi-arabia/riyadh/','Saudi headquarters and strategic enterprise'],['Dammam & Al Khobar','/locations/saudi-arabia/dammam-khobar/','Eastern Province business networks'],['Doha','/locations/qatar/doha/','Concentrated enterprise and institutional buyers']],
    cta: 'Build a Bahrain campaign around the accounts with a real reason to buy.'
  },
  {
    path: 'locations/kuwait/kuwait-city/index.html', city: 'Kuwait City', region: 'Kuwait', image: 'location-assets/kuwait-city.jpg',
    imageAlt: 'Kuwait Towers and Kuwait City skyline at dusk',
    lead: 'Reach institutional buyers, diversified business groups and technology, infrastructure and professional-service leaders with account-based LinkedIn outreach in Kuwait.',
    signal: 'Institutional buyers. Diversified groups. High-value accounts.', tags: ['Finance','Technology','Infrastructure','Logistics'],
    whyTitle: 'Kuwait City is an account-quality market, not a volume market',
    paragraphs: [
      "Kuwait City brings together institutional organisations, banks, investment companies, diversified family groups, technology buyers and infrastructure-related businesses.",
      "The addressable account list may be concentrated, while buying committees can be senior and complex. Strong outreach depends on <strong>account-level relevance</strong> rather than broad regional claims.",
      "We map the organisations and stakeholders with a plausible need, then build concise messages and follow-up around their commercial context."
    ],
    signals: [['Market structure','Institutional organisations and diversified groups shape a concentrated B2B market'],['Buying reality','High-value purchases can involve executive, technical and commercial stakeholders'],['Outbound implication','Prioritise account depth, credible proof and patient follow-up']],
    sectors: [['Financial services','Banks, investment, insurance, payments and financial technology.'],['Technology','Software, cloud, cybersecurity, AI and enterprise systems.'],['Infrastructure','Construction, engineering, utilities and project services.'],['Logistics','Warehousing, transport, ports and supply-chain operations.'],['Professional services','Consulting, legal, accounting, recruitment and specialist advisory.'],['Diversified groups','Family-owned and multi-sector organisations with central leadership teams.'],['Industrial services','Technical suppliers, maintenance and operational technology.']],
    faq: [['Can LinkedIn reach decision-makers in Kuwait?','Yes, when targeting is specific and the message is supported by relevant proof.'],['Which Kuwait City roles can be targeted?','Campaigns can reach executives, commercial leaders, technology, operations, procurement, finance and other functional buyers.'],['Is a Kuwait-only campaign large enough?','It can be for high-value offers; broader offers can include Kuwait as a distinct segment inside a GCC programme.'],['Should outreach be in English or Arabic?','That depends on the audience. Language should be chosen by account and role rather than applied as a blanket rule.']],
    sourceName: 'Kuwait Direct Investment Promotion Authority', sourceUrl: 'https://kdipa.gov.kw/invest-in-kuwait/investment-opportunities/',
    related: [['Riyadh','/locations/saudi-arabia/riyadh/','Strategic enterprise and headquarters'],['Doha','/locations/qatar/doha/','Energy, finance and institutional buyers'],['Manama','/locations/bahrain/manama/','Finance, fintech and regional services']],
    cta: 'Focus Kuwait outreach on high-value accounts and the right stakeholders.'
  },
  {
    path: 'locations/oman/muscat/index.html', city: 'Muscat', region: 'Oman', image: 'location-assets/muscat-oman.jpg',
    imageAlt: 'Muscat waterfront, mountains and Mutrah Corniche at sunset',
    lead: 'Reach logistics, energy, manufacturing, tourism, mining, technology and advisory decision-makers through relationship-led LinkedIn B2B outreach in Oman.',
    signal: 'Strategic sectors. Relationship-led buying. Focused accounts.', tags: ['Logistics','Energy','Manufacturing','ICT'],
    whyTitle: 'Muscat outreach needs patience, relevance and sector context',
    paragraphs: [
      "Muscat concentrates many of Oman's senior commercial, institutional and professional-service relationships, while the wider economy creates opportunities across logistics, energy, manufacturing, tourism, mining and ICT.",
      "Buyers need a clear reason to engage and evidence that the sender understands their operating context. A campaign should favour <strong>credible relationship building</strong> over aggressive volume.",
      "We research the account, map relevant stakeholders and use measured LinkedIn and email follow-up to create familiarity before asking for a call."
    ],
    signals: [['Market structure','Strategic sectors connect institutional organisations, operators and specialist suppliers'],['Buying reality','Trust and practical relevance shape access to senior stakeholders'],['Outbound implication','Use sector-specific research and measured multi-step follow-up']],
    sectors: [['Logistics','Ports, freight, aviation, warehousing and supply-chain technology.'],['Energy','Operators, renewables, services, engineering and specialist suppliers.'],['Manufacturing','Industrial operators, materials, food production and technology.'],['Tourism','Hotels, destination services, operators and hospitality suppliers.'],['Mining','Operators, technical services, equipment and environmental solutions.'],['ICT','Software, cloud, cybersecurity, communications and digital transformation.'],['Professional services','Consulting, recruitment, finance, legal and specialist advisory.']],
    faq: [['Can LinkedIn generate B2B leads in Oman?','Yes. It works best for focused sectors and high-value offers where account research matters.'],['Which Muscat roles can be targeted?','Campaigns can target executives, commercial leaders, operations, technology, procurement, finance and relevant functional stakeholders.'],['Should Oman use the same message as the UAE?','No. The account base, buying pace and sector context are different and need their own message variants.'],['Can Oman be part of a full GCC campaign?','Yes, as a distinct segment with its own account list, positioning and follow-up logic.']],
    sourceName: 'Invest Oman', sourceUrl: 'https://investoman.om/start-investing/sectors',
    related: [['Dubai','/locations/uae/dubai/','Regional headquarters and international teams'],['Doha','/locations/qatar/doha/','Concentrated enterprise markets'],['Kuwait City','/locations/kuwait/kuwait-city/','Institutional and diversified-group buyers']],
    cta: 'Build Oman outreach around strategic sectors and credible relationships.'
  }
];

pages.push(
  {
    path: 'locations/united-kingdom/london/index.html', city: 'London', region: 'United Kingdom', image: 'location-assets/london.png',
    imageAlt: 'London financial district and Thames skyline',
    lead: "Reach London headquarters, scale-ups and specialist firms with evidence-led LinkedIn outreach designed for one of the world's most competitive B2B markets.",
    signal: 'Global headquarters. Dense specialist clusters. High message competition.', tags: ['Finance','Fintech','Technology','Life sciences'],
    whyTitle: 'London buyers see more outreach, so relevance has to be visible immediately',
    paragraphs: [
      "London combines global and regional headquarters with deep clusters in financial and business services, technology, life sciences, creative industries and the green economy. The opportunity is large, but so is the volume of undifferentiated outreach reaching senior people.",
      "A credible campaign narrows the market by <strong>sector, company stage and commercial trigger</strong>. A fintech compliance buyer, a life-sciences partnership lead and a creative-agency founder should never receive the same opening argument.",
      "We research the account and the person's remit before writing, then use concise proof and restrained follow-up to earn attention without sounding like another automated London campaign."
    ],
    signals: [['Market structure','International headquarters sit beside specialised scale-up and professional-service clusters'],['Buying reality','Senior buyers are accessible but heavily exposed to generic prospecting'],['Outbound implication','Lead with one verifiable reason the conversation belongs on this person’s agenda']],
    sectors: [['Financial services','Banks, asset managers, insurers, payments firms and regulated financial infrastructure.'],['Fintech & regtech','Payments, lending, compliance, risk, identity and financial-data companies.'],['Enterprise technology','SaaS, cybersecurity, data, AI and platforms selling into complex organisations.'],['Life sciences','Biotech, health technology, research services and commercial partnerships.'],['Professional services','Consulting, legal, accounting, executive search and specialist advisory firms.'],['Creative & media','Agencies, production businesses, media technology and brand-led B2B providers.'],['Green economy','Climate technology, energy services, sustainable finance and decarbonisation solutions.']],
    faq: [['How do you stand out in a crowded London inbox?','Use a narrow account hypothesis, a specific trigger and proof that fits the recipient’s remit. More personalisation tokens do not rescue an irrelevant message.'],['Which London companies are best suited to outbound?','High-value B2B firms with a defined buyer, credible evidence and enough contract value to justify account research are the strongest fit.'],['Can a campaign target both enterprises and scale-ups?','Yes, but they need separate lists, proof and calls to action because authority, risk and buying speed differ.'],['Is LinkedIn enough for London enterprise outreach?','LinkedIn can open familiarity, while coordinated email and thoughtful follow-up help reach multi-person buying groups.']],
    sourceName: 'Greater London Authority', sourceUrl: 'https://www.london.gov.uk/programmes-strategies/business-and-economy/mayors-priorities-londons-economy-and-business/supporting-londons-sectors-growth',
    related: [['Manchester','/locations/united-kingdom/manchester/','Digital, creative, health innovation and advanced industry'],['Birmingham','/locations/united-kingdom/birmingham/','Advanced manufacturing and next-generation services'],['Leeds','/locations/united-kingdom/leeds/','Finance, health innovation and data-led business']],
    cta: 'Make London outreach specific enough to deserve a reply.'
  },
  {
    path: 'locations/united-kingdom/manchester/index.html', city: 'Manchester', region: 'United Kingdom', image: 'location-assets/manchester.png',
    imageAlt: 'Manchester city centre and modern business district',
    lead: "Open conversations across Manchester's digital, creative, health-innovation and advanced-industry ecosystem with sector-specific LinkedIn outreach.",
    signal: 'Digital scale-ups. Media and creative. Research-led industry.', tags: ['Digital & AI','Creative','Health innovation','Advanced materials'],
    whyTitle: 'Manchester is a connected innovation ecosystem, not a smaller copy of London',
    paragraphs: [
      "Greater Manchester is building around five frontier sectors: digital, cyber and AI; creative industries; health innovation and life sciences; advanced materials and manufacturing; and low-carbon activity.",
      "Commercial access often runs through a mixture of scale-ups, established employers, universities, research assets and public-private programmes. That makes <strong>ecosystem context</strong> more useful than generic city personalisation.",
      "We separate founder-led technology firms from institutional and industrial accounts, map the right functional leaders, and shape messages around adoption, partnerships, talent or commercial growth."
    ],
    signals: [['Market structure','Scale-ups, research institutions and established employers operate in connected sector networks'],['Buying reality','The economic buyer may sit beside technical, clinical or partnership stakeholders'],['Outbound implication','Show awareness of the sector ecosystem and map more than one relevant role']],
    sectors: [['Digital, cyber & AI','Software, data, cybersecurity, cloud and applied-AI businesses.'],['Creative & media','Production, broadcasting, gaming, digital content and creative technology.'],['Health innovation','Digital health, diagnostics, clinical technology and life-science services.'],['Advanced materials','Graphene, materials science, engineering technology and research commercialisation.'],['Manufacturing','Advanced production, automation, industrial software and specialist suppliers.'],['Low carbon','Energy systems, retrofit, mobility and environmental technology.'],['Professional services','Growth consulting, finance, recruitment and advisory teams supporting regional companies.']],
    faq: [['Should Manchester use the same message as London?','No. Manchester has a different mix of scale-ups, research assets, creative businesses and advanced industry, so account selection and proof should change.'],['Can you target MediaCity and creative businesses?','Yes. We can isolate production, broadcasting, gaming and creative-technology accounts and identify commercial or partnership leaders.'],['How do you approach health-innovation buyers?','Messages should reflect the longer evidence, procurement and stakeholder journey common to clinical and institutional environments.'],['Can a campaign cover the wider Greater Manchester region?','Yes. The list can include relevant accounts across the city region while keeping sector-based message variants.']],
    sourceName: 'Greater Manchester Combined Authority', sourceUrl: 'https://www.greatermanchester-ca.gov.uk/what-we-do/economy/sector-development-plans/',
    related: [['London','/locations/united-kingdom/london/','Global headquarters and specialist services'],['Birmingham','/locations/united-kingdom/birmingham/','Manufacturing, health-tech and business services'],['Leeds','/locations/united-kingdom/leeds/','Finance, healthtech and northern digital networks']],
    cta: 'Turn Manchester sector knowledge into relevant business conversations.'
  },
  {
    path: 'locations/united-kingdom/birmingham/index.html', city: 'Birmingham', region: 'United Kingdom', image: 'location-assets/birmingham.png',
    imageAlt: 'Birmingham city centre and canal-side business district',
    lead: "Reach West Midlands manufacturers, technology firms and professional-service leaders through LinkedIn outreach grounded in Birmingham's real economic strengths.",
    signal: 'Advanced manufacturing. Business services. Industrial transition.', tags: ['Manufacturing','Clean tech','Health tech','Business services'],
    whyTitle: 'Birmingham connects boardroom services with a major industrial supply chain',
    paragraphs: [
      "Birmingham sits at the centre of a West Midlands economy strong in advanced manufacturing, electric vehicles and batteries, clean energy, health technology, digital industries and professional and financial services.",
      "Many opportunities cross sector boundaries: a software vendor may sell into factories, a recruiter into engineering programmes, or an adviser into regulated growth projects. Outreach works when it reflects that <strong>industrial-commercial connection</strong>.",
      "We identify whether the decision sits in operations, engineering, technology, procurement or the executive team, and adapt the evidence and next step to that buying route."
    ],
    signals: [['Market structure','Large industrial supply chains coexist with a substantial professional-services centre'],['Buying reality','Operational and technical stakeholders often influence the commercial decision'],['Outbound implication','Connect the offer to a programme, plant, transition or measurable business constraint']],
    sectors: [['Advanced manufacturing','Automotive, aerospace, engineering, automation and production technology.'],['Electric vehicles & batteries','Mobility supply chains, battery innovation, testing and specialist services.'],['Clean technology','Smart energy, heat decarbonisation, efficiency and green infrastructure.'],['Health & medtech','Medical devices, digital healthcare, diagnostics and research-led businesses.'],['Digital & creative','Software, AI, 5G applications, games and creative technology.'],['Professional & financial services','Banks, insurers, consultancies, legal firms and accounting practices.'],['Logistics & infrastructure','Transport, warehousing, construction and supply-chain technology.']],
    faq: [['Why is Birmingham different from other UK city campaigns?','Its buyer landscape links professional services with manufacturing, mobility, energy and infrastructure supply chains. Those segments need different proof.'],['Can LinkedIn reach manufacturing decision makers?','Yes. Campaigns can map plant, operations, engineering, digital, procurement and commercial roles instead of relying on one job-title filter.'],['What works for West Midlands technology vendors?','A strong message shows how the technology affects an operational, regulatory or financial priority inside the target sector.'],['Should Birmingham outreach include the wider West Midlands?','It can. For specialised offers, including relevant Coventry, Solihull, Wolverhampton or wider regional accounts can create a stronger market segment.']],
    sourceName: 'West Midlands Combined Authority', sourceUrl: 'https://growth.wmca.org.uk/it-starts-here/mayoral-summary/',
    related: [['London','/locations/united-kingdom/london/','Headquarters, finance and technology buyers'],['Manchester','/locations/united-kingdom/manchester/','Digital, creative and research-led sectors'],['Leeds','/locations/united-kingdom/leeds/','Finance, health innovation and digital services']],
    cta: 'Build Birmingham outreach around real sector and buying context.'
  },
  {
    path: 'locations/united-kingdom/leeds/index.html', city: 'Leeds', region: 'United Kingdom', image: 'location-assets/leeds.png',
    imageAlt: 'Leeds skyline and financial district',
    lead: "Reach financial, professional, health-innovation and technology buyers with LinkedIn outreach built for Leeds and the wider West Yorkshire economy.",
    signal: 'Finance and professional services. Healthtech. Data and AI.', tags: ['Finance','Healthtech','Digital & AI','Professional services'],
    whyTitle: 'Leeds combines regulated services with a fast-growing data and health ecosystem',
    paragraphs: [
      "Leeds anchors West Yorkshire strengths in financial and professional services, digital technology, health and life sciences, advanced manufacturing, creative industries and the green economy.",
      "The overlap matters. Fintech and data providers sell into regulated institutions; healthtech companies navigate clinical and public-sector stakeholders; specialist advisers serve both established employers and scale-ups. <strong>Buyer context changes by cluster.</strong>",
      "We build separate account hypotheses for those clusters, identify risk, technology, commercial or operational leaders, and write follow-up around the decision process rather than the city name."
    ],
    signals: [['Market structure','A major financial and professional-services base overlaps with health, data and technology'],['Buying reality','Regulated and institutional buyers require evidence, security and stakeholder awareness'],['Outbound implication','Segment by buying environment before deciding the message or channel mix']],
    sectors: [['Financial services','Banking, insurance, lending, payments, wealth and supporting infrastructure.'],['Legal & professional services','Law, accounting, consulting, compliance and specialist business advisory.'],['Healthtech & life sciences','Digital health, medical technology, research services and NHS-facing suppliers.'],['Data, AI & software','Analytics, fintech infrastructure, cybersecurity and enterprise applications.'],['Advanced manufacturing','Engineering, automation, process improvement and industrial suppliers.'],['Creative industries','Digital agencies, content, design, gaming and creative technology.'],['Green economy','Low-carbon services, energy efficiency, sustainable finance and environmental solutions.']],
    faq: [['Which Leeds sectors respond best to LinkedIn outreach?','Finance, professional services, technology and health innovation can work well when the offer and proof match the buyer’s regulated or institutional context.'],['Can campaigns target NHS-related suppliers?','Yes, but lists should distinguish private health businesses, suppliers, research organisations and public-sector stakeholders.'],['How should fintech outreach be positioned?','Lead with the commercial or risk outcome and credible evidence, not a broad claim about innovation.'],['Can Leeds and Manchester share one northern campaign?','They can share infrastructure, but each city and sector should keep distinct account lists and message variants.']],
    sourceName: 'West Yorkshire Combined Authority', sourceUrl: 'https://www.westyorks-ca.gov.uk/business/growth-hub/invest-in-west-yorkshire/why-west-yorkshire/sectors-and-industries/',
    related: [['Manchester','/locations/united-kingdom/manchester/','Digital, creative and advanced-industry networks'],['London','/locations/united-kingdom/london/','Global finance and headquarters buyers'],['Birmingham','/locations/united-kingdom/birmingham/','Industrial and next-generation services']],
    cta: 'Reach Leeds buyers with the proof their sector expects.'
  },
  {
    path: 'locations/malaysia/kuala-lumpur/index.html', city: 'Kuala Lumpur', region: 'Malaysia', image: 'location-assets/kuala-lumpur.png',
    imageAlt: 'Kuala Lumpur skyline and Petronas Towers at dusk',
    lead: "Reach regional and country decision makers across Greater Kuala Lumpur with LinkedIn outreach built for multinational hubs and Malaysia's modern-services economy.",
    signal: 'Regional hubs. Modern services. Multinational buying teams.', tags: ['Regional HQ','Financial services','Technology','Energy'],
    whyTitle: 'Kuala Lumpur buying roles often extend beyond one country market',
    paragraphs: [
      "Greater Kuala Lumpur hosts regional and global services hubs across technology, financial asset servicing, healthcare, engineering, consumer businesses and energy. A local title may carry responsibility for Malaysia, ASEAN or a global function.",
      "That makes territory and remit essential. Outreach should establish whether the person owns a country decision, a shared-service function or a regional programme before presenting <strong>the relevant business case</strong>.",
      "We qualify accounts by hub type, operating footprint and seniority, then write messages that respect multinational approval paths while remaining concrete enough for a local conversation."
    ],
    signals: [['Market structure','Country headquarters sit alongside ASEAN and global business-service functions'],['Buying reality','Authority may be split between Kuala Lumpur, another regional office and global leadership'],['Outbound implication','Verify geographic remit and decision ownership before approaching the contact']],
    sectors: [['Regional business services','Shared services, operations hubs, customer functions and centres of excellence.'],['Financial & asset services','Banking, payments, fund services, insurance and financial technology.'],['Technology & AI','Enterprise software, data, cloud, cybersecurity and digital transformation.'],['Energy & engineering','Energy companies, renewables, technical services and regional project teams.'],['Healthcare & life sciences','Medical technology, healthcare services and regional commercial operations.'],['Consumer & retail','Regional consumer brands, distribution groups and enabling B2B providers.'],['Professional services','Consulting, recruitment, legal, accounting and market-entry advisory.']],
    faq: [['Should outreach say Kuala Lumpur or ASEAN?','Use the scope the buyer actually owns. A country leader and a regional shared-services director need different context.'],['Can you target multinational hubs in Greater KL?','Yes. We can filter for regional functions, service centres and country operations, then map the appropriate commercial or functional stakeholder.'],['Does English work for Kuala Lumpur campaigns?','English is widely usable in many B2B and multinational segments, but language and tone should still follow the audience and company context.'],['Can Kuala Lumpur outreach support entry into Malaysia?','Yes. It can reach potential clients, partners and advisers, provided each audience has a separate value proposition.']],
    sourceName: 'InvestKL', sourceUrl: 'https://www.investkl.gov.my/about-investkl/about-us',
    related: [['Cyberjaya','/locations/malaysia/cyberjaya/','Digital infrastructure and technology operations'],['Johor Bahru','/locations/malaysia/johor-bahru/','Singapore-linked industry and logistics'],['Singapore','/locations/singapore/','APAC headquarters and concentrated regional buyers']],
    cta: 'Map the real regional remit behind Kuala Lumpur job titles.'
  },
  {
    path: 'locations/malaysia/cyberjaya/index.html', city: 'Cyberjaya', region: 'Malaysia', image: 'location-assets/cyberjaya.png',
    imageAlt: 'Cyberjaya technology campus and modern office buildings',
    lead: "Reach digital infrastructure, cloud, cybersecurity and technology operators with technical LinkedIn outreach designed for Cyberjaya's specialist ecosystem.",
    signal: 'Digital operations. Data infrastructure. Technology talent.', tags: ['Cloud','Cybersecurity','Data centres','Digital services'],
    whyTitle: 'Cyberjaya is defined by technology operations, not a generic corporate audience',
    paragraphs: [
      "Cyberjaya was developed as a digital hub and remains closely associated with technology campuses, data infrastructure, software, shared operations and the public institutions supporting Malaysia's digital economy.",
      "Relevant buying groups are often technical. Infrastructure, security, architecture, operations and vendor-management stakeholders may shape access before a commercial leader enters the discussion. <strong>Technical credibility is the filter.</strong>",
      "We map those roles, identify the operating environment and lead with a specific capability or risk reduction rather than broad digital-transformation language."
    ],
    signals: [['Market structure','Technology operators, digital agencies and institutional programmes cluster around specialised infrastructure'],['Buying reality','Technical teams can screen vendors before a senior commercial conversation begins'],['Outbound implication','Use role-specific evidence for infrastructure, security, data and operations buyers']],
    sectors: [['Data centres','Operators, colocation, facilities, cooling, power and infrastructure suppliers.'],['Cloud & managed services','Cloud platforms, MSPs, migration, observability and enterprise support.'],['Cybersecurity','Security operations, identity, risk, compliance and managed protection.'],['AI, data & software','Analytics, automation, enterprise applications and applied artificial intelligence.'],['Shared operations','Global business services, technology support and operational centres.'],['Telecommunications','Connectivity, network services, infrastructure and enterprise communications.'],['Digital talent services','Technical recruitment, training, workforce platforms and specialist consulting.']],
    faq: [['Which Cyberjaya roles can be targeted?','Depending on the offer, campaigns can reach infrastructure, security, data, engineering, operations, procurement and technology leadership.'],['Is Cyberjaya separate from a Kuala Lumpur campaign?','For technical offers it should usually be its own segment because the account mix and stakeholder language are more specialised.'],['What proof matters to infrastructure buyers?','Relevant deployments, security posture, operational reliability and a clear technical use case matter more than generic growth claims.'],['Can you target Malaysia Digital companies?','Yes, where suitable company and role data are available. The list should still be filtered by actual fit rather than programme membership alone.']],
    sourceName: 'Malaysia Digital Economy Corporation', sourceUrl: 'https://www.mdec.my/locations/cyberjaya',
    related: [['Kuala Lumpur','/locations/malaysia/kuala-lumpur/','Regional headquarters and modern services'],['Johor Bahru','/locations/malaysia/johor-bahru/','Data infrastructure, manufacturing and logistics'],['Singapore','/locations/singapore/','Regional technology and enterprise leadership']],
    cta: 'Approach Cyberjaya technology buyers with technical relevance.'
  },
  {
    path: 'locations/malaysia/johor-bahru/index.html', city: 'Johor Bahru', region: 'Malaysia', image: 'location-assets/johor-bahru.png',
    imageAlt: 'Johor Bahru skyline and Singapore-facing waterfront',
    lead: "Reach Johor manufacturers, data-centre operators and logistics leaders with account-based outreach shaped by the Singapore-Johor economic corridor.",
    signal: 'Cross-border investment. Industrial supply chains. Data-centre growth.', tags: ['Manufacturing','Data centres','Logistics','Singapore link'],
    whyTitle: 'Johor Bahru decisions often sit inside cross-border supply chains',
    paragraphs: [
      "Johor's growth is being shaped by advanced manufacturing, electrical and electronics, data centres, logistics, medical devices, chemicals and the Johor-Singapore Special Economic Zone.",
      "A target company may operate in Johor while regional management, customers or investors sit across the border. The campaign therefore needs to distinguish plant responsibility, Malaysia operations and <strong>Singapore-linked authority</strong>.",
      "We map operating sites and leadership relationships, then tailor messages for technical, procurement, supply-chain or executive stakeholders instead of treating Johor Bahru as another generic Malaysian city."
    ],
    signals: [['Market structure','Industrial zones and digital infrastructure are connected to Singapore-facing trade and investment'],['Buying reality','Operational ownership and regional authority may sit in different locations'],['Outbound implication','Map the site, the supply chain and the cross-border decision path before outreach']],
    sectors: [['Electrical & electronics','Manufacturers, component suppliers, automation and testing businesses.'],['Data centres & AI infrastructure','Operators, facilities, power, cooling, connectivity and specialist services.'],['Logistics & ports','Freight, warehousing, cross-border transport and supply-chain technology.'],['Medical devices','Production, quality systems, specialist suppliers and healthcare technology.'],['Chemicals & materials','Process industries, industrial inputs, safety and environmental services.'],['Advanced manufacturing','Automation, robotics, maintenance, engineering and operational software.'],['Financial & business services','Cross-border finance, advisory, workforce and corporate services supporting investment.']],
    faq: [['What makes Johor Bahru outreach different?','Cross-border ownership, industrial sites and Singapore-linked supply chains make account mapping more important than city-level personalisation.'],['Can you target data-centre operators and suppliers?','Yes. The campaign can segment operators, contractors, power and cooling providers, connectivity firms and other infrastructure partners.'],['Should Singapore contacts be included?','Only when they influence the Johor operation or regional decision. They should receive a distinct message reflecting that role.'],['Can LinkedIn work for factory and engineering buyers?','Yes, when the message addresses a concrete operating, quality, capacity or commercial priority and reaches the correct stakeholder.']],
    sourceName: 'Invest Johor', sourceUrl: 'https://www.investjohor.gov.my/investment-performance-2024/',
    related: [['Singapore','/locations/singapore/','Regional headquarters and APAC decision makers'],['Kuala Lumpur','/locations/malaysia/kuala-lumpur/','Country and regional business-service hubs'],['Cyberjaya','/locations/malaysia/cyberjaya/','Cloud, cybersecurity and digital operations']],
    cta: 'Connect Johor operations to the people who own the decision.'
  },
  {
    path: 'locations/australia/sydney/index.html', city: 'Sydney', region: 'Australia', image: 'location-assets/sydney.png',
    imageAlt: 'Sydney central business district and harbour',
    lead: "Reach Sydney finance, technology and professional-service buyers with direct, evidence-led LinkedIn outreach built for national and APAC decision makers.",
    signal: 'Financial capital. Technology density. National headquarters.', tags: ['Finance & fintech','Technology','Cybersecurity','Professional services'],
    whyTitle: 'Sydney offers senior access, but buyers expect a clear commercial case',
    paragraphs: [
      "Sydney is Australia's financial capital and a major technology centre, with dense networks across fintech, cybersecurity, enterprise software, professional services, health and life sciences, and national headquarters.",
      "The same density attracts constant prospecting. Senior people respond better to direct language, relevant evidence and a defensible reason for contact than to elaborate personalisation. <strong>The business case must arrive early.</strong>",
      "We isolate the account type and decision remit, then coordinate LinkedIn and email around a measurable priority such as growth, compliance, security, productivity or market entry."
    ],
    signals: [['Market structure','National headquarters and global firms sit inside strong finance and technology clusters'],['Buying reality','Buyers compare many capable vendors and quickly screen vague propositions'],['Outbound implication','State the commercial relevance early and support it with proof that fits the sector']],
    sectors: [['Financial services','Banks, asset managers, insurers, superannuation and financial infrastructure.'],['Fintech & regtech','Payments, lending, wealth technology, compliance and risk platforms.'],['Enterprise technology','SaaS, data, AI, cloud and business applications for complex organisations.'],['Cybersecurity','Security vendors, managed services, identity and governance solutions.'],['Professional services','Consulting, legal, accounting, executive search and specialist advisory.'],['Health & life sciences','Medtech, digital health, biotechnology and research commercialisation.'],['Creative & digital','Media, design, digital platforms, agencies and technology-enabled services.']],
    faq: [['Who should be targeted in Sydney enterprise accounts?','The answer depends on the offer. Campaigns can map an economic buyer plus technology, risk, operations, procurement or functional stakeholders.'],['Does a direct message style work in Australia?','Usually, yes. Clear relevance, credible proof and a low-friction next step tend to work better than exaggerated formality.'],['Can Sydney outreach target APAC roles?','Yes, but only after verifying that the person actually owns a regional remit and that the offer fits their geography.'],['Should fintech and general SaaS share one campaign?','No. Regulated financial buyers require different proof, language and stakeholder mapping from a broad SaaS audience.']],
    sourceName: 'Investment NSW', sourceUrl: 'https://www.investment.nsw.gov.au/focus-sectors/technology/',
    related: [['Melbourne','/locations/australia/melbourne/','Technology, life sciences and research-led business'],['Brisbane','/locations/australia/brisbane/','Resources, infrastructure and growth industries'],['Perth','/locations/australia/perth/','Mining, energy and industrial technology']],
    cta: 'Give Sydney buyers a commercial reason to engage now.'
  },
  {
    path: 'locations/australia/melbourne/index.html', city: 'Melbourne', region: 'Australia', image: 'location-assets/melbourne.png',
    imageAlt: 'Melbourne skyline and Yarra River business district',
    lead: "Open conversations across Melbourne's technology, life-sciences, advanced-manufacturing and professional-services economy with research-led outreach.",
    signal: 'Research and talent. Life sciences. Advanced industry.', tags: ['Life sciences','Technology','Manufacturing','Clean energy'],
    whyTitle: 'Melbourne rewards depth across research, industry and commercial networks',
    paragraphs: [
      "Melbourne and Victoria have established strengths in digital technology, health and life sciences, advanced manufacturing, clean energy, education and major corporate headquarters.",
      "Many opportunities emerge where research meets commercial application: medical technology, industrial innovation, energy transition and enterprise software. The message should show that the sender understands <strong>which side of that bridge the buyer occupies</strong>.",
      "We distinguish research-led companies, operators, investors and professional advisers, then build outreach around commercialisation, adoption, expansion or measurable operating value."
    ],
    signals: [['Market structure','Universities, research institutes, scale-ups and large employers form overlapping innovation networks'],['Buying reality','Scientific, technical and commercial stakeholders may evaluate different parts of the offer'],['Outbound implication','Translate expertise into the outcome and evidence each stakeholder can defend']],
    sectors: [['Life sciences & medtech','Biotechnology, diagnostics, clinical services, devices and research partners.'],['Digital technology','SaaS, AI, data, cybersecurity and enterprise transformation.'],['Advanced manufacturing','Aerospace, defence, precision production, automation and industrial suppliers.'],['Clean energy','Renewables, storage, grid technology, efficiency and climate solutions.'],['Education & research','Universities, research institutes, training technology and commercialisation teams.'],['Corporate services','Finance, legal, consulting, recruitment and specialist business support.'],['Consumer & design','Retail, food, design, creative production and enabling B2B technology.']],
    faq: [['How is Melbourne outreach different from Sydney?','Melbourne campaigns often lean more heavily into life sciences, research, advanced manufacturing, education and clean-energy networks.'],['Can LinkedIn reach research-commercialisation teams?','Yes, when targeting distinguishes academic leadership, technology transfer, partnerships and commercial operators.'],['What proof works for life-sciences buyers?','Relevant domain expertise, validated outcomes and an understanding of regulatory or clinical constraints are more persuasive than generic growth claims.'],['Can a campaign combine technology and manufacturing?','Yes, when the offer genuinely connects them, but plant, engineering, technology and executive roles still need tailored messages.']],
    sourceName: 'Invest Victoria', sourceUrl: 'https://invest.vic.gov.au/understand-the-market/know-the-victorian-economy/proven-track-record',
    related: [['Sydney','/locations/australia/sydney/','Finance, fintech and national headquarters'],['Brisbane','/locations/australia/brisbane/','Infrastructure, energy and biomedical growth'],['Perth','/locations/australia/perth/','Resources, engineering and critical technology']],
    cta: 'Turn Melbourne expertise into commercially relevant outreach.'
  },
  {
    path: 'locations/australia/brisbane/index.html', city: 'Brisbane', region: 'Australia', image: 'location-assets/brisbane.png',
    imageAlt: 'Brisbane riverfront skyline and central business district',
    lead: "Reach Brisbane and Queensland decision makers across resources, infrastructure, advanced technology and biomedical growth sectors.",
    signal: 'Resources and energy. Infrastructure growth. Applied innovation.', tags: ['Energy & resources','Infrastructure','Biomedical','Digital technology'],
    whyTitle: 'Brisbane buying context extends across a fast-growing state economy',
    paragraphs: [
      "Brisbane is the commercial gateway to a Queensland economy strong in resources, energy, construction, manufacturing, logistics, tourism, biomedical innovation and services.",
      "Many headquarters teams support projects distributed across the state. A useful message therefore connects the Brisbane-based decision maker to a real operational region, asset, programme or growth constraint. <strong>Locality alone is not the insight.</strong>",
      "We map corporate and project stakeholders, separate public, enterprise and mid-market accounts, and build follow-up around practical value rather than a generic innovation pitch."
    ],
    signals: [['Market structure','Brisbane headquarters often coordinate assets, projects and customers across Queensland'],['Buying reality','Project owners, technical teams and commercial leaders may share decision authority'],['Outbound implication','Anchor the message in the relevant asset, programme or sector-specific growth pressure']],
    sectors: [['Energy & resources','Producers, service companies, engineering providers and transition technology.'],['Infrastructure & construction','Transport, utilities, property, project services and major contractors.'],['Mining technology','METS, automation, safety, remote operations and industrial software.'],['Biomedical innovation','Medical technology, diagnostics, research, clinical and health-service suppliers.'],['Digital industries','Enterprise software, data, cybersecurity, cloud and applied AI.'],['Advanced manufacturing','Aerospace, defence, robotics, food technology and specialist production.'],['Professional services','Consulting, finance, legal, recruitment and project advisory.']],
    faq: [['Should a Brisbane campaign cover all Queensland?','It can, but accounts should be grouped by sector, geography and operating context rather than placed in one state-wide sequence.'],['Can you reach resources and infrastructure buyers on LinkedIn?','Yes. The strongest approach maps technical, project, procurement and executive roles around a defined business issue.'],['What is different about public-sector opportunities?','Government and government-owned organisations have distinct procurement, evidence and timing requirements, so they need their own segment.'],['Can Brisbane work for technology companies entering Australia?','Yes, especially where the offer fits Queensland industries and the company can demonstrate relevant local or international proof.']],
    sourceName: 'Queensland Treasury', sourceUrl: 'https://www.treasury.qld.gov.au/policies-and-programs/investment/why-queensland/',
    related: [['Sydney','/locations/australia/sydney/','Finance, technology and national decision makers'],['Melbourne','/locations/australia/melbourne/','Research, life sciences and advanced industry'],['Perth','/locations/australia/perth/','Mining, energy and remote operations']],
    cta: 'Connect Brisbane headquarters to real Queensland priorities.'
  },
  {
    path: 'locations/australia/perth/index.html', city: 'Perth', region: 'Australia', image: 'location-assets/perth.png',
    imageAlt: 'Perth skyline and Swan River at sunset',
    lead: "Reach Perth resources, energy, engineering and industrial-technology leaders with technically credible account-based LinkedIn outreach.",
    signal: 'Mining headquarters. Energy expertise. Remote operations.', tags: ['Mining & METS','Energy','Engineering','Critical technology'],
    whyTitle: 'Perth enterprise outreach lives or dies on technical credibility',
    paragraphs: [
      "Perth is a global centre for mining, mining equipment and technology services, energy, engineering, remote operations and the critical-minerals supply chain, supported by specialist professional and research capabilities.",
      "The commercial office may be in Perth while operations sit thousands of kilometres away. Messages need to connect the decision maker's remit to safety, productivity, reliability, project delivery or energy transition. <strong>Generic enterprise language creates no trust.</strong>",
      "We research the operator, asset and supplier relationship, map technical and commercial influence, and use proof that can survive scrutiny from engineering, operations and procurement teams."
    ],
    signals: [['Market structure','Global resources headquarters coordinate remote assets and specialised supplier networks'],['Buying reality','Engineering, operations, procurement and executive stakeholders test different claims'],['Outbound implication','Demonstrate domain understanding and tie the offer to an operational or project outcome']],
    sectors: [['Mining & METS','Operators, mining services, equipment, automation and specialist technology.'],['Energy & LNG','Producers, project teams, service companies and industrial suppliers.'],['Critical minerals','Battery minerals, processing, exploration technology and supply-chain services.'],['Engineering & projects','EPC firms, consultancies, maintenance and asset-management providers.'],['Remote operations','Autonomy, robotics, communications, data and operational technology.'],['Maritime, defence & space','Marine services, defence capability, satellite data and dual-use technology.'],['Professional services','Resources-focused legal, finance, recruitment, safety and advisory firms.']],
    faq: [['Why does Perth need a separate Australia campaign?','Its economy and buyer language are unusually concentrated around resources, energy, engineering and remote operations. Generic east-coast messaging will look superficial.'],['Which stakeholders should a mining campaign target?','Depending on the offer, targets may include operations, engineering, maintenance, technology, sustainability, projects, supply chain and procurement.'],['Can LinkedIn work for long enterprise sales cycles?','Yes. It can build familiarity across the buying group before an active project or vendor review, provided follow-up is patient and useful.'],['What proof matters in Perth industrial markets?','Comparable operating environments, safety and reliability evidence, credible technical outcomes and relevant customer references.']],
    sourceName: 'Invest and Trade Western Australia', sourceUrl: 'https://www.investandtrade.wa.gov.au/our-industries/mining-mets',
    related: [['Brisbane','/locations/australia/brisbane/','Resources, infrastructure and applied innovation'],['Sydney','/locations/australia/sydney/','National headquarters and financial services'],['Melbourne','/locations/australia/melbourne/','Research, manufacturing and life sciences']],
    cta: 'Earn attention in Perth with operationally credible outreach.'
  }
);

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
  Manama: 'LinkedIn B2B lead generation in Bahrain for finance, fintech, ICT, logistics and professional-service decision makers through focused outreach.',
  'Kuwait City': 'LinkedIn B2B lead generation in Kuwait for institutional, technology, infrastructure and professional-service buyers through account-based outreach.',
  Muscat: 'LinkedIn B2B lead generation in Oman for logistics, energy, manufacturing, technology and advisory decision makers through relationship-led outreach.',
  London: 'LinkedIn B2B lead generation in London for finance, fintech, technology, life-sciences and professional-service buyers through evidence-led outreach.',
  Manchester: 'LinkedIn B2B lead generation in Manchester for digital, creative, health-innovation and advanced-industry decision makers.',
  Birmingham: 'LinkedIn B2B lead generation in Birmingham for advanced manufacturing, clean-tech, health-tech and professional-service companies.',
  Leeds: 'LinkedIn B2B lead generation in Leeds for finance, professional services, healthtech, data and technology buyers.',
  'Kuala Lumpur': 'LinkedIn B2B lead generation in Kuala Lumpur for regional headquarters, modern-services hubs, finance, technology and energy teams.',
  Cyberjaya: 'LinkedIn B2B lead generation in Cyberjaya for cloud, cybersecurity, data-centre, software and digital-operations decision makers.',
  'Johor Bahru': 'LinkedIn B2B lead generation in Johor Bahru for advanced manufacturing, data centres, logistics and Singapore-linked business.',
  Sydney: 'LinkedIn B2B lead generation in Sydney for finance, fintech, technology, cybersecurity and professional-service decision makers.',
  Melbourne: 'LinkedIn B2B lead generation in Melbourne for life sciences, technology, advanced manufacturing, clean energy and research-led firms.',
  Brisbane: 'LinkedIn B2B lead generation in Brisbane for resources, energy, infrastructure, biomedical and digital-technology buyers.',
  Perth: 'LinkedIn B2B lead generation in Perth for mining, METS, energy, engineering, remote-operations and critical-technology companies.',
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
const locationNav = `<nav class="site-nav"><a href="/" class="nav-logo" aria-label="Oleg Cherkas home"><img src="/uploads/linkeol-logo-clean.png" alt="Linkeol"></a><ul class="nav-links"><li><a href="/">Home</a></li><li><a href="/about/">About</a></li><li><a href="/services.html">Services</a></li><li><a href="/locations/" aria-current="page">Locations</a></li><li><a href="/results/">Results</a></li><li><a href="/blog">Blog</a></li><li><a href="/contact">Contact</a></li></ul><div class="nav-actions">${headerSocials}<a href="https://calendly.com/oleg-olegcherkas/30min" target="_blank" class="nav-cta">Book a call</a></div><button class="burger" aria-label="Open navigation" aria-expanded="false"><span></span><span></span><span></span></button></nav>`;
const locationMobileMenu = `<div class="mobile-menu" id="mobileMenu"><a href="/">Home</a><a href="/about/">About</a><a href="/services.html">Services</a><a href="/locations/">Locations</a><a href="/results/">Results</a><a href="/blog">Blog</a><a href="/contact">Contact</a>${mobileSocials}</div>`;
const locationFooter = `<footer><div class="footer-left"><div class="footer-copy">© 2026 Oleg Cherkas</div>${footerSocials}</div><nav class="footer-nav"><a href="/">Home</a><a href="/about/">About</a><a href="/services.html">Services</a><a href="/locations/">Locations</a><a href="/results/">Results</a><a href="/blog">Blog</a><a href="/contact">Contact</a></nav></footer>`;
function render(page) {
  const canonical = `https://olegcherkas.com/${page.path.replace(/index\.html$/, '')}`;
  const title = `LinkedIn B2B Lead Generation in ${page.city} | Oleg Cherkas`;
  const description = metaDescriptions[page.city] || `LinkedIn B2B lead generation in ${page.city} with focused account research, personalised outreach and structured follow-up.`;
  const insight = relatedInsights[page.city] || null;
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
  const relatedInsight = insight ? `<!-- RELATED_INSIGHT_START --><section class="page-section"><div class="section-inner"><div class="section-heading"><div class="eyebrow">Related insight</div><h2>Read more about this market</h2></div><div class="related-grid related-insight-grid"><a class="related-card" href="${insight.href}"><small>Market strategy</small><strong>${esc(insight.title)}</strong><span>${esc(insight.text)} Read article →</span></a></div></div></section><!-- RELATED_INSIGHT_END -->` : '';
  const steps = [
    ['Define the market segment',`Choose the ${page.city} company types, sectors, sizes and roles with the strongest reason to buy.`],
    ['Research accounts and people','Verify companies, map relevant stakeholders and collect evidence for personalisation.'],
    ['Position and write','Align the sender profile and build concise LinkedIn and email messages around real context.'],
    ['Follow up and learn','Run a measured multi-step sequence, review replies and refine targeting from real market feedback.']
  ].map(([name,text]) => `<div class="process-step"><div><h3>${esc(name)}</h3><p>${esc(text)}</p></div></div>`).join('');
  return `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(title)}</title><meta name="description" content="${esc(description)}"><link rel="canonical" href="${canonical}">
<meta property="og:type" content="website"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(page.lead)}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="https://olegcherkas.com/uploads/${page.image.includes('/') ? page.image : `locations/${page.image}`}">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="LinkedIn B2B Lead Generation in ${esc(page.city)}"><meta name="twitter:description" content="${esc(page.lead)}"><meta name="twitter:image" content="https://olegcherkas.com/uploads/${page.image.includes('/') ? page.image : `locations/${page.image}`}">
<link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet"><link rel="icon" href="/favicon.ico" sizes="any"><link rel="stylesheet" href="/locations/location-pages.css"><link rel="stylesheet" href="/v2-overrides.css?v=23"><script type="application/ld+json">${JSON.stringify(schema)}</script></head>
<body><a class="skip-link" href="#main">Skip to content</a>
${locationNav}
${locationMobileMenu}
<main id="main"><section class="hero"><div class="breadcrumb"><a href="/">Home</a><span>/</span><a href="/locations/">Locations</a><span>/</span><span>${esc(page.city)}</span></div><div class="hero-grid"><div><div class="eyebrow">${esc(page.city)} · ${esc(page.region)}</div><h1>LinkedIn B2B lead generation in ${esc(page.city)}</h1><p class="hero-lead">${esc(page.lead)}</p><div class="hero-actions"><a href="https://calendly.com/oleg-olegcherkas/30min" target="_blank" class="btn-primary">Discuss a ${esc(page.city)} campaign →</a><a href="/b2b-lead-generation-service" class="btn-secondary">See the full service</a></div></div><aside class="city-panel city-visual"><figure class="city-image"><img src="/uploads/${page.image.includes('/') ? page.image : `locations/${page.image}` }" alt="${esc(page.imageAlt)}" width="1600" height="800" fetchpriority="high"></figure><div class="city-market"><small>Market signal</small><strong>${esc(page.signal)}</strong><div class="city-tags">${page.tags.map(tag=>`<span>${esc(tag)}</span>`).join('')}</div></div></aside></div></section>
<section class="page-section"><div class="section-inner"><div class="split"><div class="section-heading"><div class="eyebrow">Why ${esc(page.city)} is different</div><h2>${esc(page.whyTitle)}</h2></div><div class="body-copy">${page.paragraphs.map(p=>`<p>${p}</p>`).join('')}</div></div><div class="signal-list">${signalCards}</div><p class="source-note">Market context informed by <a href="${page.sourceUrl}" target="_blank" rel="noopener">${esc(page.sourceName)}</a>.</p></div></section>
<section class="page-section"><div class="section-inner"><div class="section-heading"><div class="eyebrow">Ideal customer profiles</div><h2>Who we can target in ${esc(page.city)}</h2><p>Campaigns are filtered by sector, company type, seniority and a credible reason for the conversation.</p></div><div class="card-grid">${sectorCards}</div></div></section>
<section class="page-section"><div class="section-inner"><div class="section-heading"><div class="eyebrow">Execution</div><h2>How ${esc(page.city)} LinkedIn outreach is built</h2></div><div class="process-list">${steps}</div></div></section>
<section class="page-section"><div class="section-inner"><div class="proof"><div class="proof-number">500+</div><div class="proof-copy"><strong>qualified meetings booked</strong><p>Across client campaigns and managed LinkedIn profiles.</p></div><a class="proof-link" href="/results/">See campaign results →</a></div></div></section>
${relatedInsight}
<section class="page-section"><div class="section-inner"><div class="section-heading"><div class="eyebrow">Questions</div><h2>${esc(page.city)} LinkedIn B2B lead generation FAQ</h2></div><div class="faq-list">${faqs}</div></div></section>
<section class="page-section"><div class="section-inner"><div class="section-heading"><div class="eyebrow">Related markets</div><h2>Continue exploring</h2></div><div class="related-grid">${related}</div></div></section></main>
<section class="cta"><div class="cta-inner"><div><h2>${esc(page.cta)}</h2><p>Start with the market, the account and the decision maker - not a generic regional template.</p></div><a href="https://calendly.com/oleg-olegcherkas/30min" target="_blank" class="btn-primary">Book a strategy call →</a></div></section>
${locationFooter}
<a class="whatsapp-float" href="https://wa.me/971563462566?text=Hi%2C%20I%20would%20like%20to%20discuss%20LinkedIn%20B2B%20lead%20generation." target="_blank" aria-label="Write on WhatsApp"><svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M16.04 3C9.42 3 4.03 8.34 4.03 14.91c0 2.1.55 4.15 1.6 5.96L4 27l6.3-1.64a12.1 12.1 0 0 0 5.74 1.46C22.66 26.82 28 21.48 28 14.91S22.66 3 16.04 3Zm0 21.8c-1.8 0-3.55-.48-5.1-1.4l-.37-.22-3.74.97 1-3.62-.24-.38a9.78 9.78 0 0 1-1.52-5.24c0-5.46 4.47-9.9 9.97-9.9 5.49 0 9.95 4.44 9.95 9.9 0 5.46-4.46 9.9-9.95 9.9Zm5.46-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49s1.07 2.9 1.22 3.1c.15.2 2.1 3.19 5.08 4.47.71.3 1.26.48 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z"/></svg></a><script src="/site-navigation.js?v=5"></script></body></html>`;
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
    html = html.replace('</body>', '<script src="/site-navigation.js?v=5"></script>\n</body>');
  }
  if (!html.includes('/v2-overrides.css')) {
    html = html.replace('</head>', '<link rel="stylesheet" href="/v2-overrides.css?v=23"></head>');
  }
  fs.writeFileSync(item.path, html);
}

function collectHtmlFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filePath = path.join(directory, entry.name);
    return entry.isDirectory() ? collectHtmlFiles(filePath) : entry.name.endsWith('.html') ? [filePath] : [];
  });
}

for (const filePath of collectHtmlFiles('locations')) {
  let html = fs.readFileSync(filePath, 'utf8');
  html = html.replaceAll('href="/services"', 'href="/services.html"');
  html = html.replace(
    /<div class="proof-number">200\+<\/div><div class="proof-copy"><strong>enterprise meetings opened through LinkedIn<\/strong><p>The operating system combines profile positioning, account research, personalised sequences and consistent follow-up\.<\/p><\/div>/g,
    '<div class="proof-number">500+</div><div class="proof-copy"><strong>qualified meetings booked</strong><p>Across client campaigns and managed LinkedIn profiles.</p></div>'
  );
  html = html.replace(
    /<div class="proof-number">200\+<\/div><div class="proof-copy"><strong>Enterprise meetings opened across GCC markets<\/strong><p>A client LinkedIn network grew from roughly 500 to 7,000\+ relevant contacts, supporting conversations with major retail groups across (?:Saudi Arabia, the UAE and Qatar|the UAE, Saudi Arabia and Qatar)\.<\/p><\/div>/g,
    '<div class="proof-number">500+</div><div class="proof-copy"><strong>qualified meetings booked</strong><p>Across client campaigns and managed LinkedIn profiles.</p></div>'
  );
  html = html.replace(/<!-- RELATED_INSIGHT_START -->([\s\S]*?)<!-- RELATED_INSIGHT_END -->/g, (block, content) => content.includes('href="/blog"') ? '' : block);
  fs.writeFileSync(filePath, html);
}

console.log(`Built ${pages.length} location pages, updated 3 existing city pages, and normalized the full location library.`);
