// JavaScript Document

/********************************************************************
* File Name:   jscript.js
*
* Description: Inputs classes based off of selected college
* 
* Programmer:  Kim Holmes 
*              zorianak@me.com
********************************************************************/
function addClasses()
{
  var result = document.getElementById('resultsdiv');
  var selecter = document.getElementById('schools');
  
  //define some classes for each
  //UC Berkeley
  var berkClasses = "<h1>University of California, Berkeley</h1>";
  var berkClasses = "<a href=\"#fulltime\">Skip to full time courses >></a>";
  berkClasses += "<p>Below are a list of courses one can take at the University to gain knowledge into the various streams on Engineering to gain base knowledge of Smart Grid.</p>";
  berkClasses += "<h2>UC Berkeley Specialized Programs of Study:</h2>";

  
  berkClasses += "Website: <a href=\"http://extension.berkeley.edu/spos/smartgrid.html\">http://extension.berkeley.edu/spos/smartgrid.html</a>";
  berkClasses += "<br>Brochure: <a href=\"http://extension.berkeley.edu/spos/pdf/sustainability.pdf\">http://extension.berkeley.edu/spos/pdf/sustainability.pdf</a>";
  berkClasses += "<br>Email Address: <a href=\"mailto:course@unex.berkeley.edu\">course@unex.berkeley.edu</a>";
  berkClasses += "<br>Phone: (510) 642-4151";
  
  berkClasses += "<h2>UC Berkeley Extension</h2>";
  berkClasses += "<h3>Smart Grid Technology</h3>";
  berkClasses += "<p>The entry-level program provides a solid foundation in smart grid technology (SGT), including a technical overview of networking, electrical engineering, and power transmission and distribution. In addition to a wide range of smart grid theory, you study deployment issues, vendors, demand shaping, and statutory and regulatory requirements—instruction that prepares one to seize new opportunities in the emerging field of networked power.</p>";
  berkClasses += "<h4>Who Will Benefit</h4>";
  berkClasses += "<p>Any sustainable professional looking for increased technical knowledge or a technology worker interested in migrating to SGT, the program provides the knowledge needed. The program is also an excellent fit if you're an urban planner, home developer, real estate professional or policy maker looking for new or advanced opportunities in public utilities, commercial construction, renewable energy or electric transportation.</p>";
  
  berkClasses += "<p class=\"course\">Smart Grids: Introduction</p>";
  berkClasses += "<p>Learn about the new intelligent energy grid that supports the green-energy initiatives of the 21st century. Study real-world value propositions, business perspectives and solution scenarios from business economics and technical practicalities points of view.</p>";
  berkClasses += "<p class=\"course\">Smart Grids: Command and Control</p>";
  berkClasses += "<p>In this survey course, you first review the communication technology for distribution automation of AC energy and then advance into technology trade-off considerations. You build a foundation for understanding the control network.</p>";
  berkClasses += "<p class=\"course\">Smart Grids: Energy-Efficient Transmission</p>";
  berkClasses += "<p>Learn about the challenges of high-power interconnections and review quality considerations.</p>";
  berkClasses += "<p class=\"course\">Smart Grids: Internet of Things</p>";
  berkClasses += "<p>Taking smart energy grids as a model, you investigate topics such as wireless sensor network issues, the role of middleware, radio frequency identification (RFID) and sensor network technologies and security and privacy issues.</p>";
  berkClasses += "<p class=\"course\">Smart Grids: Metering and Home Area Networks</p>";
  berkClasses += "<p>Gain a solid technical foundation for understanding smart meters and home power networking, including Open HAN system requirements, modern wireless sensor networks, home automation and ZigBee Smart Energy.</p>";
  berkClasses += "<p class=\"course\">Smart Grids: Microgrids</p>";
  berkClasses += "<p>Variety of microgrid topics, including distributed generation, wind, photovoltaics, fuel cells, supervisory control and data acquisition (SCADA) systems, securing smart grids, matching community needs, smart meters and devices.</p>";
  
  berkClasses += "<h3>Sustainability and Energy</h3>";
  berkClasses += "<p>Focus on energy use and its impact on the environment in the Professional Program in Sustainability and Energy. Understand the impact of current energy use patterns on climate change. Learn about climate change law, such as California's AB 32 and its impact on local government and businesses. Examine energy and sustainability from the perspectives of technology, municipal planning and policy. With the specialized knowledge you gain from this program—which is designed for professionals working in both the public and private sectors, from government agencies and nonprofit organizations to utility companies, energy consulting firms and other businesses—you are prepared to manage energy use and develop successful sustainable energy strategies.</p>";
  berkClasses += "<h4>Who Will Benefit</h4>";
  berkClasses += "<p>The curriculum is beneficial if you are a career changer or advancer; working professional in the public or private sector, including public agencies, utilities and energy conservation; energy consultant; business owner; nonprofit organization employee; or sustainability manager. The program is also ideal if you wish to better understand sustainable energy management.</p>";
  berkClasses += "<p>Upon successful completion of the program, you understand the principles of sustainability management and the impact of climate change law on businesses and government; have the necessary skills and knowledge to make assessments and analyze and manage issues related to energy use, climate change and sustainability; and focus your career on clean energy.</p>";
  
  berkClasses += "<p class=\"course\">Introduction to Sustainability Management</p>";
  berkClasses += "<p>Sustainability in the context of environmental, economic, and social forces that shape emerging policies and management decisions. Investigate the possibility of creating a common set of sustainability principles</p>";
  berkClasses += "<p class=\"course\">Climate Change and Law AB 32: What It Means for You</p>";
  berkClasses += "<p>Learn requirements set forth in AB 32 and other laws, and gain a solid understanding of related issues.</p>";
  berkClasses += "<p class=\"course\">Energy for Sustainability: Technology, Planning and Policy</p>";
  berkClasses += "<p>Evaluate policies, regulations, and laws at the local and state level. Learn how energy strategies impact residential and commercial sectors, corporations, and governments. Examine issues in science, technology, policy, law, and business.</p>";
  berkClasses += "<p class=\"course\">Energy Use and Climate Change</p>";
  berkClasses += "<p>Examine the threat from the lack of significant incentives to change behavior and shift habits toward sustainable energy consumption in the United States. Study the fundamental impacts from current energy use and the support infrastructure.</p>";
  
  //full time courses for UC Berkeley
  berkClasses += "<h2><a href=\"#\" name=\"fulltime\"></a>Full Time Courses</h2>";
  berkClasses += "<h3><a href=\"http://sis.berkeley.edu/catalog/gcc_list_crse_req?p_dept_name=Mechanical+Engineering&p_dept_cd=MEC+ENG\" name=\"Mechanical Engineering\">Mechanical Engineering</a></h3>";
  berkClasses += "<h4>110.  Introduction to Product Development</h4>";
  berkClasses += "<h4>146.  Energy Conversion Principles</h4>";
  berkClasses += "<h4>C232.  Advanced Control Systems I.</h4>";
  berkClasses += "<h4>239.  Advanced Design and Automation</h4>";
  
  berkClasses += "<h3><a href=\"http://sis.berkeley.edu/catalog/gcc_list_crse_req?p_dept_name=Electrical+Engineering+and+Computer+Sciences&p_dept_cd=EECS&p_path=*\">Electrical Engineering</a></h3>";
  berkClasses += "<h4>122.  Introduction to Communication Networks.</h4>";
  berkClasses += "<h4>C128.  Feedback Control Systems.</h4>";
  berkClasses += "<h4>224B.  Fundamentals of Wireless Communication.</h4>";
  
   berkClasses += "<h3><a href=\"http://sis.berkeley.edu/catalog/gcc_list_crse_req?p_dept_name=Electrical+Engineering+and+Computer+Sciences&p_dept_cd=EECS&p_path=*\">Computer Science</a></h3>";
  berkClasses += "<h4>161.  Computer Security.</h4>";
  berkClasses += "<h4>195.  Social Implications of Computer Technology.</h4>";
  berkClasses += "<h4>261.  Security in Computer Systems.</h4>";
  berkClasses += "<h4>268.  Computer Networks.</h4>";
  berkClasses += "<h4>276.  Cryptography.</h4>";
  
  //UC Davis
  var davisClasses = "<h1>UC Davis</h1>";
  davisClasses += "<h3>Certificate Programs:</h3>";
  davisClasses += "<h4><a href=\"http://extension.ucdavis.edu/unit/green_building_and_sustainability/certificate/green_building_and_sustainable_design/index.asp\" name=\"Green Certificate Program\">Certificate Program in Green Building and Sustainable Design</a></h4>";
  davisClasses += "<p>The Green Building and Sustainable Design Certificate Program addresses the trend of developing healthier communities by defining effective ways to utilize energy and promote water efficiency. The program combines elements from architecture, civil engineering, landscape architecture, environmental and land use planning, and construction management. Develop successful strategies for implementation of green building and sustainable design into site planning and design, building design and construction, and building management practices.</p>";
  davisClasses += "<h5>Gain practical knowledge that matters</h5>";
  davisClasses += "<ul><li>Gain an in-depth understanding of the processes of incorporating social, economic and environmental issues into the planning, design and construction.</li><li>Learn green and sustainable design techniques for both commercial and residential buildings</li><li>Build your understanding of: site analysis, construction management, water resources, planning and landscape architecture.</li><li>Become better prepared to implement sustainable practices.</li></ul>";
  davisClasses += "<h5>Designed for professionals like you</h5>";
  davisClasses += "<p>The program is designed for planners, architects, developers, contractors, landscape architects, interior designers and anyone interested in the implementation of sustainable building tools and strategies. It is also recommended for professionals moving into fields that require knowledge of green building or sustainable design, or anyone who recognizes the importance of green building and sustainable design.</p>";
  davisClasses += "<h3>Courses:</h3>";
	davisClasses += "<h4>Sustainability and the Built Environment</h4>";
	davisClasses += "<p>This introduction to the Green Building and Sustainable Design Certificate Program highlights large-scale planned communities, infill sites and individual structures from the U.S. and other nations, as well as how these buildings are serviced and managed.</p>";
	davisClasses += "<h4>Sustainable Planning, Environmental Site Design and Development</h4>";
	davisClasses += "<p>Learn about fundamental sustainability issues and processes as they apply to community planning and site design situations. Discover how to identify key challenges when incorporating sustainability into planning strategies, policies and site design, and examine technical and environmental factors of site design. </p>";
	davisClasses += "<h4>Sustainable Water Management in Site Design and Development</h4>";
	davisClasses += "<p>Incorporate a sustainable water resources approach into urban development and its related infrastructure at the planning, design and construction stages. </p>";
	davisClasses += "<h4>Green Architecture</h4>";
	davisClasses += "<p>Explore the issues, challenges and opportunities associated with green building and sustainable design. Examine innovative residential, commercial, industrial, mixed-use, and low- and high-density specialty buildings. Evaluate the micro- and macro-economic issues associated with green buildings.</p>";
	davisClasses += "<h4>Green Building Materials and Construction Methods</h4>";
	davisClasses += "<p>Learn to implement green building practices into homes, apartments, business complexes and office buildings. Utilize materials and techniques that promote healthy, durable and environmentally responsible construction.</p>"; 
	davisClasses += "<h4>Energy Sources, End Uses and Impacts</h4>";
	davisClasses += "<p>Examine the energy issue from the macro perspective of the built environment to the micro approach of how heat flows throughout a building.</p>";
	davisClasses += "<h4>Green Building Design Studio</h4>";
	davisClasses += "<p>Apply what you learned in the Green Building and Sustainable Design or Renewable Energy certificate programs to a real-world example.</p>";
	davisClasses += "<hr>";
	davisClasses += "<h3><a href=\"http://extension.ucdavis.edu/unit/business_and_management/certificate/energy_resource_management/\" name=\"Energy Resource Management Certificate\">Certificate Program in Energy Resource Management</a></h3>";
	davisClasses += "<p>The UC Davis Extension Certificate Program in Energy Resource Management is a completely online program designed specifically for those leaders—professional engineers, construction planners and designers, facility or plant managers, energy analysts, architects, agency managers, and other who wish to expand their expertise in this critical area.</p>";
	davisClasses += "<p>This certificate program addresses the entire range of issues involved in understanding and managing energy in any industry, from heavy to light energy users. The six courses of the program provide the information you need to distinguish yourself as an expert in the energy resource management field.</p>";
	davisClasses += "<h4>Gain practical knowledge that matters</h4>";
	davisClasses += "<ul><li>Explore the practical, sustainable application of contemporary energy resource management</li><li>Learn best practices and discover techniques and resources to improve business competitiveness and ensure regulatory compliance</li><li>Stay apprised of new and emerging developments, technologies and regulations</li><li>Analyze supply-side sourcing and procurement portfolio strategies</li><li>Examine energy security risk analysis methods</li><li>Learn innovative methods for financing energy management projects</li></ul>";
	davisClasses += "<h4>Designed for professionals like you</h4>";
	davisClasses += "<p>This program benefits those wanting to distinguish themselves as energy resource management experts and draws from a wide variety of disciplines, including engineering, construction planning and design, and facility-plant management and/or operations, such as:</p>";
	davisClasses += "<ul><li>Energy engineers, analysts, managers and auditors</li><li>Chief sustainability officers</li><li>Demand-side management auditors and managers</li><li>Architects</li><li>Construction planners and designers</li><li>Agency and facility managers</li><ul>";
	davisClasses += "<h3>Courses:</h3>";
	davisClasses += "<h4>Introduction to Energy Resource Management</h4>";
	davisClasses += "<p>Examine the four major components of energy management--supply, demand, regulation and environment--and the concepts and principles behind successful energy management.</p>";
	davisClasses += "<h4>Energy Resource Management: Supply</h4>";
	davisClasses += "<p>Learn to conduct market assessments and to develop sourcing and procurement strategies. Topics include energy management control systems, natural gas purchasing opportunities in the spot market, thermal energy storage, alternative energy supplies, energy security and energy trading.</p>";
	davisClasses += "<h4>Energy Resource Management: Regulatory</h4>";
	davisClasses += "<p>Learn the difference between regulations and tariffs pertaining to electrical generation, transmission and distribution and those pertaining to gas production, transmission and distribution.</p>";
	davisClasses += "<h4>Energy Resource Management: Demand</h4>";
	davisClasses += "<p>Familiarize yourself with an overview of Leadership in Energy and Environmental Design (LEED). Amp up your knowledge of: the latest lighting technologies and products, project management, fleet operation and maintenance, verification of energy savings, and best practices and benchmarking. </p>";
	davisClasses += "<h4>Energy Resource Management: Environment</h4>";
	davisClasses += "<p>Explore the range of environmental issues affected by energy use. Gain perspectives on current trends and technologies. Examine the environmental fundamentals--planning, development and implementation--of WAGES (water, air, gas, electricity and steam) and renewable energy systems</p>";
	davisClasses += "<h4>Energy Resource Management: Leadership</h4>";
	davisClasses += "<p>Examine the leadership issues involved in managing energy from organizational behavior and change management to project management and communication skills.</p>";
	davisClasses += "<hr>";
	davisClasses += "<h2><a href=\"http://extension.ucdavis.edu/unit/green_building_and_sustainability/certificate/renewable_energy/\" name=\"Renewable Energy Certificate\">Certificate Program in Renewable Energy</a></h2>";
	davisClasses += "<p>Gain in-depth technical training in the treatment of renewable energy systems design with the Renewable Energy Certificate Program. This program combines elements from architecture, civil engineering, landscape architecture, environmental and land use planning, construction management and renewable energy systems design.</p>";
	davisClasses += "<h3>Gain practical knowledge and skills</h3>";
	davisClasses += "<ul><li>Learn to develop successful strategies for incorporating renewable energy systems into site planning and design, building design and construction, and building management practices.</li><li>Acquire a holistic understanding of the theory and science behind today's renewable energy systems.</li><li>Get hands-on experience in designing and siting renewable energy systems for commercial, residential and agricultural applications.</li><li>Stay up-to-date with the latest energy technologies, legislation and regulations.</li></ul>";
	davisClasses += "<h3>Designed for professionals like you</h3>";
	davisClasses += "<p>The program is designed for professionals who want to advance their knowledge and careers in the planning, design, engineering, renewable energy systems and construction disciplines, including: construction managers, project managers, architects, architectural drafters, civil and mechanical engineers, interior designers, urban and regional planners, developers, builders and landscape architects.</p>";
	davisClasses += "<h3>Courses:</h3>";
	davisClasses += "<h4>Sustainability and the Built Environment</h4>";
	davisClasses += "<p>Explore sustainability as it relates to the built environment—from the economic, environmental and social-equity perspectives. Learn how researchers and analysts define sustainability, as well as how they measure and track progress. </p>";
	davisClasses += "<h4>Energy Sources, End Uses and Impacts</h4>";
	davisClasses += "<p>From solar panels and exterior shades to lighting a space and painting a roof white, learn how to analyze energy use as an effective strategy to promote energy conservation in the built environment.</p>";
	davisClasses += "<h4>Green Building Design Studio</h4>";
	davisClasses += "<p>Apply what you learned in the Green Building and Sustainable Design or Renewable Energy certificate programs to a real-world example.</p>";
	davisClasses += "<h4>Cogeneration and District Solutions</h4>";
	davisClasses += "<p>Gain an overview of micro-cogeneration and district energy solutions for commercial and district applications. Learn about cogeneration system selection and sizing, preliminary feasibility study approaches, heat to power ratios, computer programs, economic and environmental issues, emerging technologies and regulations.</p>";
	davisClasses += "<h4>Bioenergy Systems Design</h4>";
	davisClasses += "<p>Explore the environmental, economic and social impacts. Learn about emerging bioenergy technologies, legislation and regulations.</p>";
	davisClasses += "<h4>Geothermal Energy Systems Design</h4>";
	davisClasses += "<p>Gain the necessary knowledge to understand the promise and limitations of geothermal heat pump installation and direct use applications.</p>";
	davisClasses += "<h4>Small Wind Energy Systems</h4>";
	davisClasses += "<p>Learn to design and install a small wind system for residential and commercial applications. The class will examine: how to measure wind and estimate energy output; small wind system types and components; wind system selection and site criteria; economic issues; public concerns; permitting; installation, safety, operation and maintenance criteria; emerging technologies, legislation and regulations; and case studies. </p>";
	davisClasses += "<h4>Solar Photovoltaic (PV) Energy Systems Design</h4>";
	davisClasses += "<p>Learn the basics of solar photovoltaic power systems for both residential and commercial use, as well as solar system physics and technology, design and implementation.</p>";
	davisClasses += "<h4>Solar Thermal Energy Systems Design</h4>";
	davisClasses += "<p>Learn the fundamentals of designing and installing these power systems for residential and commercial applications and work in teams to design a solar thermal energy system.</p>";
	davisClasses += "<hr>";
	davisClasses += "<h3><a href=\"http://extension.ucdavis.edu/unit/green_building_and_sustainability/certificate/solar_energy_systems_and_design/#L34054\" name=\"Solar Energy Systems and Design Certificate\">Professional Concentration in Solar Energy Systems and Design</a></h3>";
	davisClasses += "<p>Acquire a fundamental understanding and application of solar energy systems design with the Professional Concentration Program in Solar Energy Systems and Design. Explore the various aspects involved in utilizing solar energy systems for residential and commercial use.</p>";
	davisClasses += "<h4>Gain practical knowledge and skills</h4>";
	davisClasses += "<ul><li>Acquire the practical skills for designing and installing solar energy systems in your home or business</li><li>Learn about emerging industry trends and the latest technologies</li><li>Gain valuable information about solar resources in California and government initiatives for promoting solar energy, including the California Solar Initiative</li><li>Examine current code and compliance requirements for solar energy systems</li></ul>";
	davisClasses += "<h4>Designed for professionals like you</h4>";
	davisClasses += "<p>This program is designed for home and business owners, designers, architects, builders, roofing contractors and installers. It is also applicable to anyone interested in learning about solar energy systems and its environmental benefits.</p>";
	davisClasses += "<h4>Solar Photovoltaic (PV) Energy Systems: Overview</h4>";
	davisClasses += "<p>Gain useful background information about the solar resources in California and the various federal and state government initiatives to promote solar energy as a mainstream power source, including the latest policies and legislation. Learn about the California Solar Initiative and its future implementation, utility interconnection and net metering issues.</p>";
	davisClasses += "<h5>Who benefits</h5>";
	davisClasses += "<p>Home and business owners, designers, architects, builders, roofing contractors, installers and those interested in learning about the environmental benefits of solar energy.</p>";
	davisClasses += "<h4>Solar Thermal Energy Systems: Overview</h4>";
	davisClasses += "<p>Gain practical information about industry trends and state-of-the-art technologies. Learn about the actual market situation and how to grow your skills in consulting, planning and design, economics and marketing.</p>";
	davisClasses += "<h4>Solar Photovoltaic (PV) Energy Systems Design</h4>";
	davisClasses += "<p>Learn the basics of solar photovoltaic power systems for both residential and commercial use, as well as solar system physics and technology, design and implementation.</p>";
	davisClasses += "<h4>Solar Thermal Energy Systems Design</h4>";
	davisClasses += "<p>Learn the fundamentals of designing and installing these power systems for residential and commercial applications and work in teams to design a solar thermal energy system.</p>";
	davisClasses += "<h4>Solar Photovoltaic (PV) Energy Systems: Compliance and Code Overview</h4>";
	davisClasses += "<p>Learn about design and installation compliance issues for both residential & commercial solar energy systems in the areas of system sizing, array layout, electrical wiring and utility interconnection.</p>";
		davisClasses += "<hr>";
		davisClasses += "<h2>Courses treated as Full Time/Part Time in the field of Engineering.</h2>";
		davisClasses += "<h3><a href=\"http://registrar.ucdavis.edu/UCDWebCatalog/programs/EME/EMEcourses.html\" name=\"Mechanical Engineering\">Mechanical Engineering:</a></h3>";
		davisClasses += "<ul><li>152. Computer-Aided Mechanism Design</li><li>154. Mechatronics</li><li>268. Wind Power Engineering</li><li>272. Theory and Design of Control Systems</li><li>274. Analysis and Design of Digital Control Systems</li><li>276. Data Acquisition and Analysis</li></ul>";
		davisClasses += "<h3><a href=\"http://registrar.ucdavis.edu/UCDWebCatalog/programs/EEC/EECcourses.html\" name=\"Electrical Engineering\">Electrical Engineering:</a></h3>";
		davisClasses += "<ul><li>132A, B, C. RF and Microwaves in Wireless Communication</li><li>151. Instrumentation Interfacing, Signals and Systems</li><li>158. Control System Design Methods</li><li>172. Microcomputer-Based System Design</li><li>173A. Computer Networks</li><li>173B. Design Projects in Communication Networks</li><li>180A. Digital Systems I</li><li>228. Advanced Microwave Circuit and Device Design Techniques</li><li>252. Multivariable Control System Design</li><li>274. Internet Measurements, Modeling and Analysis</li>";
		davisClasses += "<h3><a href=\"http://registrar.ucdavis.edu/UCDWebCatalog/programs/ECS/ECScourses.html\" name=\"Computer Science\">Computer Science:</a></h3>";
		davisClasses += "<ul><li>153. Computer Security</li><li>155. Computer Security for Non-Majors</li><li>160. Introduction to Software Engineering</li><li>165A,B. Database Systems</li><li>166. Scientific Data Management</li><li>222A. Design and Analysis of Algorithms</li><li>227. Modern Cryptography</li><li>228. Cryptography for E-Commerce</li><li>235A. Computer and Information Security</li><li>236. Computer Security: Intrusion Detection Based Approach</li><li>257. Mobile and Wireless Networks</li></ul>";
		davisClasses += "<h3><a href=\"http://registrar.ucdavis.edu/UCDWebCatalog/programs/ERS/ERScourses.html\" name=\"Envivonrmental Resources Sciences\">Environment Resources Sciences:</a></h3>";
		davisClasses += "<ul><li>186. Environmental Remote Sensing</li><li>195. Integrating Environmental Science and Management</li></ul>";
  
  //UC Merced
  var irvineClasses = "<h2>Mechanical Engineering</h2>";
  irvineClasses += "<p>MAE117 Solar and Renewable Energy Systems</p>";
  irvineClasses += "<p>MAE118 Sustainable Energy Systems</p>";
  
  //UCLA
  var uclaClasses = "<h2>Mechanical Engineering</h2>";
  uclaClasses += "<p>133AL. Power Conversion Thermodynamics Laboratory</p>";
  uclaClasses += "<p>136. Energy and Environment</p>";
  
  //get the value
  var valu = selecter.options[selecter.selectedIndex].id;
  
  if (valu == "berk") {result.innerHTML = berkClasses;}
  if (valu == "davis") {result.innerHTML = davisClasses;}
  if (valu == "irvine") {result.innerHTML = irvineClasses;}
  if (valu == "ucla") {result.innerHTML = uclaClasses;}
}

/********************************************************************
* File Name:   jscript.js
*
* Description: Directs the user to get_school.php's proper function for
*				the school they have selected.
* 
* Programmer:  Kim Holmes 
*              zorianak@me.com
********************************************************************/
function addClasses2()
{
  var result = document.getElementById('resultsdiv');
  var selecter = document.getElementById('schools');
  
  var valu = selecter.options[selecter.selectedIndex].id;
  
  if (valu == "berk") {result.innerHTML = "<input type=\"submit\" value=\"Continue\" name=\"Continue_berk\" action=\"submit\" /> <input type=\"hidden\" id=\"berk\" name=\"berk\" value=\"berk\" />";
  }
  if (valu == "davis") {result.innerHTML = davisClasses;}
  if (valu == "irvine") {result.innerHTML = irvineClasses;}
  if (valu == "ucla") {result.innerHTML = uclaClasses;}
  
}