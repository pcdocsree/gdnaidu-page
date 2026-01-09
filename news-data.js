const newsData = [
 {
        id: 1,
        title: "It's a wrap for R Madhavan's GD Naidu biopic, G.D.N",
        source: "The New Indian Express",
        date: "16 Dec 2024",
        image: "https://media.newindianexpress.com/newindianexpress%2F2025-12-16%2F5twmd13z%2FGDN_1.jpg?w=768&auto=format%2Ccompress&fit=max",
        excerpt: "Filming has officially wrapped for R. Madhavan’s biopic on legendary inventor G.D. Naidu. Titled ‘GDN’, the film is expected to hit screens in 2025 after an extensive year-long production.",
        tags: ["Biopic", "R Madhavan", "Film"],
        url: "news-detail.html?id=1"
      },
      {
        id: 2,
        title: "School bus loses rear wheel on G.D. Naidu flyover in Coimbatore",
        source: "The Hindu",
        date: "20 Dec 2024",
        image: "news-images/hindu.png",
        excerpt: "A school bus carrying 35 students lost its rear wheel while travelling on the GD Naidu Flyover in Coimbatore. Fortunately, no injuries were reported as the driver brought the bus to a halt safely.",
        tags: ["Flyover", "Coimbatore", "Safety"],
        url: "news-detail.html?id=2"
      },
      {
        id: 3,
        title: "R Madhavan's GD Naidu Biopic 'GDN' Wraps Up Filming",
        source: "The Hollywood Reporter India",
        date: "17 Dec 2024",
        image: "https://www.hollywoodreporterindia.com/_next/image?url=https%3A%2F%2Fcdn.hollywoodreporterindia.com%2Farticle%2F2025-12-15T08%253A15%253A58.129Z-Untitled%2520design-393.jpg&w=1920&q=75",
        excerpt: "The Hollywood Reporter India confirmed that R. Madhavan has completed the shooting schedule of his much-awaited biopic on G.D. Naidu, with post-production currently underway.",
        tags: ["Hollywood", "Biopic", "Cinema"],
        url: "news-detail.html?id=3"
      },
      {
        id: 4,
        title: "Sathyaraj's character from the GD Naidu biopic GDN revealed",
        source: "Cinema Express",
        date: "9 Oct 2024",
        image: "https://media.cinemaexpress.com/cinemaexpress%2F2025-10-09%2Fape3s63u%2FGDN-Sathyaraj.png?w=768&auto=format%2Ccompress&fit=max",
        excerpt: "Veteran actor Sathyaraj has been roped in for a key role in the G.D. Naidu biopic ‘GDN’, where he portrays a mentor figure who influenced Naidu’s early career.",
        tags: ["Sathyaraj", "Cast", "Tamil Cinema"],
        url: "news-detail.html?id=4"
      },
      {
        id: 5,
        title: "T.N. CM Stalin opens 10.1-km G.D. Naidu flyover in Coimbatore city",
        source: "Instagram.com",
        date: "7 Oct 2024",
        image: "https://th-i.thgim.com/public/incoming/e6voby/article70144329.ece/alternates/LANDSCAPE_1200/Flyover%202.jpg",
        excerpt: "Tamil Nadu Chief Minister M.K. Stalin inaugurated the 10.1-km Avinashi Road Flyover in Coimbatore, officially naming it after legendary inventor G.D. Naidu.",
        tags: ["Infrastructure", "Honor", "Tamil Nadu"],
        url: "news-detail.html?id=5"
      },
      {
        id: 6,
        title: "Coimbatore’s G.D. Naidu flyover: motorists demand measures to make it safe, friendly for road users",
        source: "Times of India",
        date: "6 Oct 2024",
        image: "https://th-i.thgim.com/public/incoming/752an2/article70159951.ece/alternates/LANDSCAPE_1200/GD%20Naidu%20flyover%201.jpg",
        excerpt: "Motorists have raised safety concerns over the GD Naidu Flyover, urging authorities to implement speed controls and better lighting to make the stretch safer.",
        tags: ["Times of India", "Infrastructure", "Development"],
        url: "news-detail.html?id=6"
      },
      {
        id: 7,
        title: "Coimbatore’s GD Naidu flyover naming sparks caste controversy",
        source: "The Hindu",
        date: "23 Mar 2024",
        image: "https://thefederal.com/h-upload/2025/10/09/568865-gdnaidu-flyover.webp",
        excerpt: "The decision to name the Avinashi Road Flyover after G.D. Naidu has triggered political debate and social discussions across Coimbatore.",
        tags: ["Anniversary", "Celebration", "Education"],
        url: "news-detail.html?id=7"
      },
      {
        id: 8,
        title: "First look of R Madhavan as G.D. Naidu released",
        source: "Indian Express",
        date: "15 Jan 2024",
        image: "https://media.cinemaexpress.com/cinemaexpress%2F2025-10-27%2F4zi3erda%2FGDN.jpg?w=768&auto=format%2Ccompress&fit=max",
        excerpt: "The makers of ‘GDN’ released the first look of R. Madhavan as G.D. Naidu, showcasing his remarkable physical transformation for the biopic.",
        tags: ["First Look", "Transformation", "Entertainment"],
        url: "news-detail.html?id=8"
      },
      {
        id: 9,
        title: "It Is Time India Got Re-Introduced To GD Naidu",
        source: "Deccan Chronicle",
        date: "12 Nov 2023",
        image: "https://static.silverscreenindia.com/cdn-cgi/imagedelivery/0sFd6pZcWGBpoabc88l3HQ/2019/08/1272933534GD-Naidu-1.jpg/public",
        excerpt: "An editorial feature highlights the importance of reintroducing G.D. Naidu to younger generations, recalling his contributions to engineering and innovation in India.",
        tags: ["Museum", "Digital", "Heritage"],
        url: "news-detail.html?id=9"
      },
      {
        id: 10,
        title: "Down ramps of G.D. Naidu flyover in Coimbatore city pose risks to motorists",
        source: "The New Indian Express",
        date: "5 Sep 2023",
        image: "https://th-i.thgim.com/public/incoming/7orzvc/article70182928.ece/alternates/LANDSCAPE_1200/9869_19_10_2025_19_33_35_2__DSC5136.JPG",
        excerpt: "Motorists have complained that steep down-ramps on the GD Naidu Flyover are accident-prone, urging officials to redesign critical sections.",
        tags: ["Book", "Publication", "Research"],
        url: "news-detail.html?id=10"
      },
      {
        id: 11,
        title: "You still looks the same old Maddy': R Madhavan leaves fans spellbound with BTS selfie from GD Naidu sets",
        source: "Times of India",
        date: "18 Aug 2023",
        image: "https://static.toiimg.com/thumb/msid-124821975,imgsize-58912,width-400,resizemode-4/124821975.jpg",
        excerpt: "R. Madhavan shared behind-the-scenes photos from the GDN sets, leaving fans nostalgic and excited about his portrayal of the ‘Edison of India’.",
        tags: ["Education", "College", "Government"],
        url: "news-detail.html?id=11"
      },
      {
        id: 12,
        title: "Next phase of GD Naidu flyover awaits nod from CMRL, AAI",
        source: "Economic Times",
        date: "30 Jul 2023",
        image: "https://media.newindianexpress.com/newindianexpress%2F2025-10-07%2Ff6yqyozf%2FP_441045738.jpg?rect=0%2C0%2C812%2C457&w=768&auto=format%2Ccompress&fit=max",
        excerpt: "Authorities revealed that the next phase of the GD Naidu Flyover awaits clearance from CMRL and AAI, which may delay its completion.",
        tags: ["Patent", "Discovery", "History"],
        url: "news-detail.html?id=12"
      },
      {
        id: 13,
        title: "‘G.D.N’: R Madhavan’s first look as GD Naidu from upcoming biopic out",
        source: "The Hindu",
        date: "15 Jun 2023",
        image: "https://th-i.thgim.com/public/entertainment/movies/20r890/article70207869.ece/alternates/LANDSCAPE_1200/madhavan%20gd%20naidu.png",
        excerpt: "R. Madhavan’s first official still as G.D. Naidu has gone viral, sparking excitement among cinema lovers ahead of the biopic’s release.",
        tags: ["Documentary", "Award", "Film Festival"],
        url: "news-detail.html?id=13"
      },
      {
        id: 14,
        title: "Tamil Nadu unveils the G D Naidu Flyover Connecting Coimbatore like never before with seamless urban roads and AI-based traffic monitoring; a landmark of modern engineering, green design, and city transformation (Photos)",
        source: "Business Line",
        date: "4 May 2023",
        image: "https://static.toiimg.com/thumb/124734944.jpg?imgsize=75254&photoid=124734944&width=600&height=335&resizemode=75",
        excerpt: "Tamil Nadu unveiled the GD Naidu Flyover project, highlighting its smart traffic systems, eco-friendly design and seamless connectivity across Coimbatore.",
        tags: ["Startup", "Funding", "Innovation"],
        url: "news-detail.html?id=14"
      },
      {
        id: 15,
        title: "AIADMK, DMK councillors clash over credit for G.D. Naidu flyover in Coimbatore",
        source: "Indian Express",
        date: "12 Apr 2023",
        image: "https://th-i.thgim.com/public/incoming/1zwzm2/article70163210.ece/alternates/LANDSCAPE_1200/council%20meeting%203.jpg",
        excerpt: "Political tensions erupted in the Coimbatore Corporation council as AIADMK and DMK members clashed over credit for the GD Naidu Flyover project.",
        tags: ["Photography", "Exhibition", "Art"],
        url: "news-detail.html?id=15"
      },
      {
        id: 16,
        title: "Madhavan transforms into Edison of India GD Naidu",
        source: "Times of India",
        date: "4 Jan 2024",
        image: "https://www.tribuneindia.com/sortd-service/imaginary/v22-01/jpg/large/high?url=dGhldHJpYnVuZS1zb3J0ZC1wcm8tcHJvZC1zb3J0ZC9tZWRpYTI3NmYzN2QwLWIzOTMtMTFmMC1iMDY0LWVkNWUyYTYzNDljNy5qcGc=",
        excerpt: "Photos from the sets show R. Madhavan fully transformed into G.D. Naidu, drawing praise from fans for his dedication to the role.",
        tags: ["Memorial", "Anniversary", "Tribute"],
        url: "news-detail.html?id=16"
      },
{
  id: 17,
  title: "Three die in Coimbatore as speeding car descending G.D. Naidu Flyover rams stationary truck",
  source: "India Post",
  date: "20 Dec 2023",
  image: "https://th-i.thgim.com/public/incoming/oxx13x/article70158033.ece/alternates/LANDSCAPE_1200/2085_13_10_2025_11_5_53_1_IMG_20251013_WA0000.JPG",
  excerpt: "Three people lost their lives after a speeding car rammed into a stationary truck while descending the GD Naidu Flyover in Coimbatore, triggering renewed concerns over road safety on the stretch.",
  tags: ["Accident", "Road Safety", "Coimbatore"],
  url: "news-detail.html?id=17"
},
{
  id: 18,
  title: "Former minister S.P. Velumani urges installation of cameras to monitor vehicle speed on G.D. Naidu flyover in Coimbatore",
  source: "The Hindu",
  date: "8 Nov 2023",
  image: "https://th-i.thgim.com/public/incoming/s663j5/article70148602.ece/alternates/LANDSCAPE_1200/S.P.%20Velumani.1.jpg",
  excerpt: "Former minister S.P. Velumani has called on authorities to install speed-monitoring cameras on the GD Naidu Flyover to prevent overspeeding and reduce fatal accidents.",
  tags: ["Speed Cameras", "Safety", "Politics"],
  url: "news-detail.html?id=18"
},
{
  id: 19,
  title: "R Madhavan's GDN starts second schedule in India",
  source: "University News",
  date: "25 Oct 2023",
  image: "https://media.cinemaexpress.com/cinemaexpress%2F2025-09-26%2Faxgu7ntn%2FGDN.jpg?w=768&auto=format%2Ccompress&fit=max",
  excerpt: "The second shooting schedule of R. Madhavan’s biopic ‘GDN’ has begun in India, covering major events from the early and middle phases of G.D. Naidu’s life.",
  tags: ["Biopic", "Film Shoot", "Cinema"],
  url: "news-detail.html?id=19"
},
{
  id: 20,
  title: "Motorists demand traffic spikes on GD Naidu flyover ramps to curb driving violations",
  source: "Auto Today",
  date: "14 Sep 2023",
  image: "https://media.newindianexpress.com/newindianexpress%2F2025-10-07%2F8jkaft1g%2FP_4410456793.jpg?w=768&auto=format%2Ccompress&fit=max",
  excerpt: "Regular commuters have urged officials to install rumble strips and traffic-calming measures on GD Naidu Flyover ramps to control speeding and reckless driving.",
  tags: ["Traffic Control", "Public Demand", "Infrastructure"],
  url: "news-detail.html?id=20"
},
{
  id: 21,
  title: "Traffic snarls on newly opened GD Naidu Flyover",
  source: "Research Times",
  date: "5 Aug 2023",
  image: "https://media.newindianexpress.com/newindianexpress%2F2025-10-07%2Fjsb9svdb%2FC_1_1_CH1332_113659044.jpg?w=768&auto=format%2Ccompress&fit=max",
  excerpt: "Heavy traffic congestion has been reported on the newly opened GD Naidu Flyover during peak hours, raising questions about ramp design and traffic flow management.",
  tags: ["Traffic", "Congestion", "Urban Planning"],
  url: "news-detail.html?id=21"
},
{
  id: 22,
  title: "CM Stalin inaugurates G D Naidu flyover in Coimbatore amid heated debate over its caste-based name",
  source: "Education Times",
  date: "22 Jul 2023",
  image: "https://www.hindustantimes.com/ht-img/img/2025/06/30/550x309/ht-generic_india3_1751287297962_1751287304722.jpg",
  excerpt: "Chief Minister M.K. Stalin inaugurated the GD Naidu Flyover in Coimbatore even as debates continued over the naming of the project, drawing political and social reactions.",
  tags: ["Inauguration", "Politics", "Tamil Nadu"],
  url: "news-detail.html?id=22"
},
{
  id: 23,
  title: "GDN team thanks CM MK Stalin for naming TN's longest flyover after GD Naidu",
  source: "Innovation Digest",
  date: "10 Jun 2023",
  image: "https://media.cinemaexpress.com/cinemaexpress%2F2025-09-26%2Faxgu7ntn%2FGDN.jpg?w=768&auto=format%2Ccompress&fit=max",
  excerpt: "The GDN film team expressed heartfelt gratitude to Chief Minister M.K. Stalin for honouring G.D. Naidu by naming Tamil Nadu’s longest flyover after the legendary inventor.",
  tags: ["Honor", "Film Team", "Recognition"],
  url: "news-detail.html?id=23"
},
{
  id: 24,
  title: "'GDN' First Look: R. Madhavan Transforms Into ‘The Edison of India’ in Upcoming Biopic",
  source: "Literary Review",
  date: "28 May 2023",
  image: "https://www.hollywoodreporterindia.com/_next/image?url=https%3A%2F%2Fcdn.hollywoodreporterindia.com%2Farticle%2F2025-10-27T08%253A53%253A32.433Z-Madhavan.jpg&w=1920&q=75",
  excerpt: "The first look of R. Madhavan as G.D. Naidu was unveiled, showing his complete transformation into the visionary inventor fondly known as the Edison of India.",
  tags: ["First Look", "Transformation", "Cinema"],
  url: "news-detail.html?id=24"
},
{
  id: 25,
  title: "TN's longest flyover to be named after GD Naidu; CM to inaugurate",
  source: "Tech Today",
  date: "15 Apr 2023",
  image: "https://media.newindianexpress.com/newindianexpress%2F2025-09-19%2F8w6xn6vx%2F1_1_flyover5_1909cbe_3.jpg?w=768&auto=format%2Ccompress&fit=max",
  excerpt: "Tamil Nadu’s longest flyover was announced to be named after G.D. Naidu, with the Chief Minister scheduled to inaugurate the landmark infrastructure project.",
  tags: ["Flyover", "Infrastructure", "Honor"],
  url: "news-detail.html?id=25"
}
];
