<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width,initial-scale=1" />
	<meta name="robots" content="index, follow"/>
	<title>Amit Biswas</title>
	<link rel="shortcut icon" href="{{ asset('assets/favicon.ico')}}">

	<!-- Google Font Roboto -->
	<link href="http://fonts.googleapis.com/css?family=Roboto:500,400italic,100,300,700,100italic,300italic,400" rel="stylesheet" type="text/css">
	<!-- Bootstrap 3.3.5 -->
	<link rel="stylesheet" type="text/css" href="{{ URL::to('assets/css/bootstrap.min.css') }}" />
	<!-- Design Style MyWALL -->
	<link rel="stylesheet" type="text/css" href="{{ URL::to('assets/css/mywall.min.css') }}" />
	
	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
	<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
		<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->
</head>
<body>

	<!-- Modal Window Contact me -->
	<div class="modal fade" id="callmeModal" tabindex="-1" aria-hidden="true" role="dialog" aria-labelledby="ModalCall" style="display: none;">
		<div class="modal-dialog modal-sm">
			<div class="modal-content">
				<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
				<h2 class="modal-title getmetelf" id="ModalCall">Get in touch with me.</h2>
				</div>
				<div class="modal-body">
					<!-- Your phone number -->
					<div class="myphone"><p class="greynum">+40</p> 124 445 994</div>
					<!-- Contact hours -->
					<div class="contacthours">
						<p class="hourcall">Contact hours</p>
						<div class="rightcall">
							<p class="dayscall">Mon - Fri</p>
							<p class="horario">9:00 - 22:00</p>
							<p class="dayscall">Sat - Sun</p>
							<p class="horario">10:00 - 18:00</p>
						</div>
					</div>
					<!-- // Contact hours -->
				</div>
			</div>
		</div>
	</div>
	<!-- // Modal Window Contact me -->

	<!-- Header -->
	<header>
		<!-- Menu Navigation -->
		<div id="top" class="container">
			<!-- Menu left -->
			<nav id="ha-header" class="left-nav ha-header">
				<ul class="nav">
			      <li class="dropdown">
			      	<!-- Dropdown menu -->
			        <a class="dropdown-toggle circle-main" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">        
						<svg class="hello" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
						    <path d="M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z"/>
						    <path d="M0 0h24v24H0z" fill="none"/>
						</svg>
			        </a>
			        <!-- Navigation Sections -->
			        <ul class="dropdown-menu">
						<li><a data-scroll data-options='{ "easing": "easeOutQuint" }' href="#top" class="menu-item wall">Hello</a></li>
						<li><a data-scroll data-options='{ "easing": "easeOutQuint" }' href="#about" class="menu-item wall">About Me</a></li>
						<li><a data-scroll data-options='{ "easing": "easeOutQuint" }' href="#skills" class="menu-item wall">Skills and Abilities</a></li>
						<li><a data-scroll data-options='{ "easing": "easeOutQuint" }' href="#education" class="menu-item wall">Education</a></li>
						<li><a data-scroll data-options='{ "easing": "easeOutQuint" }' href="#work" class="menu-item wall">Work Experience</a></li>
						<li><a data-scroll data-options='{ "easing": "easeOutQuint" }' href="#portfolio" class="menu-item wall">Portfolio</a></li>
						<li><a data-scroll data-options='{ "easing": "easeOutQuint" }' href="#download" class="menu-item wall">Social Networks</a></li>
						<li><a data-scroll data-options='{ "easing": "easeOutQuint" }' href="#contacto" class="menu-item wall">Contact Me</a></li>
			        </ul>
			      </li>
			    </ul>
			</nav>
			<!-- // Menu left -->

			<!-- Menu right - Hidden in small devices -->
			<div class="nav-extra hidden-xs">
				<!-- Button Contact Modal -->
				<a class="callme" href="#" data-toggle="modal" data-target="#callmeModal">
					<span class="glyphicon glyphicon glyphicon-earphone call" aria-hidden="true"></span>
				</a>
				<!-- Button 'Hire me' -->
				<a class="hireme button-mywall" data-scroll data-options='{ "easing": "easeOutQuint" }' href="#">Contact Me</a>
			</div>
			<!-- // Menu right -->
		</div>
		<!-- // Menu Navigation -->

		<!-- Personal Details -->
		<div class="container">
			<img class="img-circle imgsus" alt="Amit Biswas" src="{{ asset('assets/img/amit.png')}}"/>
			<h1 class="name-boss">Amit Biswas</h1>
			<h2 class="main-details">Junior Software Engineer</h3>
			<p class="extend-details">Code is my way of life ! </p>
		</div>
		<!-- // Personal Details -->
	</header>
	<!-- // Header -->
	
	<!-- About Me Intro - Text Type - Hi. I'm ... -->
	<section id="about" class="cd-intro">
		<h1 class="cd-headline letters type">
			<!-- Static Text -->
			<span>Hi. I'm </span>
			<!-- Automatic Text Type -->
			<span class="cd-words-wrapper waiting">
				<b class="is-visible">the next Steve Jobs</b>
				<b>incredible and amazing</b>
				<b>better than the Flash</b>
			</span>
		</h1>
	</section>
	<!-- // About Me Intro -->

	<!-- About Me Context -->
	<section class="full-section my-about">
		<!-- Top About me -->
		<article class="container">
			<div class="row">
				<!-- Text about me -->
				<div class="col-md-6">
					<h2 class="title-main">About Me.</h2>
					<p class="text-main">  I enjoy taking of challenges. I have a great appreciation for building &amp; design web app . Software Engineering is my passion. I have a strong enthusiasm for sharing information, idea and assisting people. I am extremely passionate about creating new concept for Application development beside this I am trying to explore myself as a young entrepreneur where I would love to implement  my youth leadership experience for the next generation technology. 

					<br><br>  </p>
				</div>
				<!-- Image right about me -->
				<div class="col-md-6">
					<img class="img-responsive" src="{{ asset('assets/img/pexels-work.jpg')}}" alt="working">
				</div>
			</div>
		</article>
		<!-- // Top About me -->

		<!-- 3 Columns extra info -->
		<article class="full-section my-extrame">
			<div class="container">
				<div class="row">
					<!-- Col 1 -->
					<div class="col-sm-4">
						<div class="row">
							<div class="col-md-4 img-myextra"><img alt="camera" class="img-myextrame" src="{{ asset('assets/img/camera.png')}}"></div>
							<div class="col-md-8">
								<h5 class="text-five">Good camera</h5>
								<p class="text-subfive">Ensectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
							</div>
						</div>				
					</div>
					<!-- Col 2 -->
					<div class="col-sm-4">
						<div class="row">
							<div class="col-md-4 img-myextra"><img alt="quality" class="img-myextrame" src="{{ asset('assets/img/quality.png')}}"></div>
							<div class="col-md-8">
								<h5 class="text-five">Quality work</h5>
								<p class="text-subfive">Duis aute irure dolor in reprehenderit velit esse cillum dolore eu fugiat nulla pariatur.</p>
							</div>
						</div>			
					</div>
					<!-- Col 3 -->
					<div class="col-sm-4">
						<div class="row">
							<div class="col-md-4 img-myextra"><img alt="coffe" class="img-myextrame" src="{{ asset('assets/img/coffee.png')}}"></div>
							<div class="col-md-8">
								<h5 class="text-five">Coffe lover</h5>
								<p class="text-subfive">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
							</div>
						</div>			
					</div>
				</div>
			</div>
		</article>
		<!-- // 3 Columns extra info -->
	</section>
	<!-- // About Me Context -->

	<!-- About Me Gallery -->
	<section id="aboutme" class="full-section ha-waypoint" data-animate-down="ha-header-subshow" data-animate-up="ha-header-show">
		<!-- Owl Carousel images -->
		<div class="owl-carousel">
		    <div class="item"><img alt="pexels-1" src="{{ asset('assets/img/pexels/pexels-1.jpg')}}"/></div>
		    <div class="item"><img alt="pexels-2" src="{{ asset('assets/img/pexels/pexels-2.jpg')}}"/></div>
		    <div class="item"><img alt="pexels-3" src="{{ asset('assets/img/pexels/pexels-3.jpg')}}"/></div>
		    <div class="item"><img alt="pexels-4" src="{{ asset('assets/img/pexels/pexels-4.jpg')}}"/></div>
		    <div class="item"><img alt="pexels-5" src="{{ asset('assets/img/pexels/pexels-5.jpg')}}"/></div>
		    <div class="item"><img alt="pexels-6" src="{{ asset('assets/img/pexels/pexels-6.jpg')}}"/></div>
		</div>
		<!-- // Owl Carousel images -->

		<!-- More about me and 3 columns -->
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<h3 class="title-three">More about me, and my life.</h3>
					<p class="text-three">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus.</p>
				</div>
				<!-- Column 1 -->
				<div class="col-md-4">
					<img class="img-rd" alt="programmer" src="{{ asset('assets/img/programmer.png')}}"/>
					<h3 class="title-rd">Programmer</h3>
					<p class="text-rd">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
				</div>
				<!-- Column 2 -->
				<div class="col-md-4">
					<img class="img-rd" alt="creative" src="{{ asset('assets/img/brain.png')}}"/>
					<h3 class="title-rd">Creative</h3>
					<p class="text-rd">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
				</div>
				<!-- Column 3 -->
				<div class="col-md-4">
					<img class="img-rd" alt="innovator" src="{{ asset('assets/img/rocket.png')}}"/>
					<h3 class="title-rd">Innovator</h3>
					<p class="text-rd">Lorem ipsum dolor sit amet. Duis aute irure dolor in reprehenderit in voluptate.</p>
				</div>
			</div>
		</div>
	</section>
	<!-- // About Me Gallery -->
	
	<!-- Skills and abilities -->
	<section id="skills" class="full-section-two bg-skills">
		<div class="container">
			<!-- Text Skills and Abilities -->
			<h2 class="title-main mywhite">Skills &#38; Abilities.</h2>
			<p class="text-main mywhite">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			
			<div class="row">
				<!-- Skills percent 1 -->
				<div class="col-md-6 separ">
					<div class="row">
						<div class="hidden-xs col-sm-2 icon-skill"><img class="img-skill" alt="html 5" src="{{ asset('assets/img/html5.png')}}"></div>
						<div class="col-sm-10">
							<div class="row">
								<div class="col-sm-12 title-skill">HTML5</div>
								<div class="col-sm-12 bar-skill">
									<div class="this-skill my-pink my-ninety"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- Skills percent 2 -->
				<div class="col-md-6 separ">
					<div class="row">
						<div class="hidden-xs col-sm-2 icon-skill"><img class="img-skill" alt="css 3" src="{{ asset('assets/img/css3.png')}}"></div>
						<div class="col-sm-10">
							<div class="row">
								<div class="col-sm-12 title-skill">CSS3</div>
								<div class="col-sm-12 bar-skill">
									<div class="this-skill my-blue my-houndred"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- Skills percent 3 -->
				<div class="col-md-6 separ">
					<div class="row">
						<div class="hidden-xs col-sm-2 icon-skill"><img class="img-skill" alt="responsive" src="{{ asset('assets/img/responsive.png')}}"></div>
						<div class="col-sm-10">
							<div class="row">
								<div class="col-sm-12 title-skill">Responsive Design</div>
								<div class="col-sm-12 bar-skill">
									<div class="this-skill my-blue my-seventy"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- Skills percent 4 -->
				<div class="col-md-6 separ">
					<div class="row">
						<div class="hidden-xs col-sm-2 icon-skill"><img class="img-skill" alt="JavaScript" src="{{ asset('assets/img/js.png')}}"></div>
						<div class="col-sm-10">
							<div class="row">
								<div class="col-sm-12 title-skill">JavaScript</div>
								<div class="col-sm-12 bar-skill">
									<div class="this-skill my-pink my-eighty"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- Skills percent 5 -->
				<div class="col-md-6 separ">
					<div class="row">
						<div class="col-sm-2 hidden-xs icon-skill"><img class="img-skill" alt="PHP" src="{{ asset('assets/img/php.png')}}"></div>
						<div class="col-sm-10">
							<div class="row">
								<div class="col-sm-12 title-skill">PHP</div>
								<div class="col-sm-12 bar-skill">
									<div class="this-skill my-pink my-eighty"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- Skills percent 6 -->
				<div class="col-md-6 separ">
					<div class="row">
						<div class="hidden-xs col-sm-2 icon-skill"><img class="img-skill" alt="Wordpress" src="{{ asset('assets/img/wp.png')}}"></div>
						<div class="col-sm-10 ">
							<div class="row">
								<div class="col-sm-12 title-skill">Wordpress Development</div>
								<div class="col-sm-12 bar-skill">
									<div class="this-skill my-blue my-seventy"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- // Skills percent -->
			</div>
		</div>

		<!-- Abilities -->
		<div class="container cont-mg">
			<div class="row">
				<!-- Col 1 - Software Skills -->
				<div class="col-md-4">
					<div class="cont-ab">
						<h4 class="title-four color-a">Software Skills</h4>
						<!-- Software Abilitie 1 -->
						<div class="row">
							<div class="col-xs-2"><img class="img-soft" alt="Photoshop" src="{{ asset('assets/img/photo.png')}}"></div>
							<div class="col-xs-5 ability">Photoshop</div>
							<div class="col-xs-5 expert">EXPERT</div>
						</div>
						<!-- Software Abilitie 2 -->
						<div class="row">				
							<div class="col-xs-2"><img class="img-soft" alt="Illustrator" src="{{ asset('assets/img/illus.png')}}"></div>
							<div class="col-xs-5 ability">Illustrator</div>
							<div class="col-xs-5 advanced">ADVANCED</div>
						</div>
						<!-- Software Abilitie 3 -->
						<div class="row">	
							<div class="col-xs-2"><img class="img-soft" alt="Office" src="{{ asset('assets/img/offi.png')}}"></div>
							<div class="col-xs-5 ability">Office</div>
							<div class="col-xs-5 expert">EXPERT</div>
						</div>
						<!-- Software Abilitie 4 -->
						<div class="row">	
							<div class="col-xs-2"><img class="img-soft" alt="InDesign" src="{{ asset('assets/img/inde.png')}}"></div>
							<div class="col-xs-5 ability">InDesign</div>
							<div class="col-xs-5 advanced">ADVANCED</div>
						</div>
					</div>
				</div>
				<!-- Col 2 - Awesome Services -->
				<div class="col-md-4">
					<div class="cont-ab">
						<h4 class="title-four color-b">Awesome Services</h4>
						<!-- Awesome Abilities -->
						<div class="row">
							<div class="col-md-12 text-awsm">Wordpress Development</div>
							<div class="col-md-12 text-awsm">Think of Things To Do</div>
							<div class="col-md-12 text-awsm">Web Design &#38; Development</div>
							<div class="col-md-12 text-awsm">Create Magical Things</div>
						</div>
						<!-- // Awesome Abilities -->
					</div>
				</div>
				<!-- Col 3 - Other Interests -->
				<div class="col-md-4">
					<div class="cont-ab">
						<h4 class="title-four color-c">Other Interests</h4>
						<div class="row">
							<!-- Interest 1 -->
							<div class="col-sm-6">
								<div class="row">
									<div class="col-md-12 intrst">
										<img alt="Running" src="{{ asset('assets/img/Running-icon.png')}}">
									</div>
								</div>
								<p class="text-interest">Running</p>
							</div>
							<!-- Interest 2 -->
							<div class="col-sm-6">
								<div class="row">
									<div class="col-md-12 intrst">
										<img alt="Taekwondo" src="{{ asset('assets/img/Taekwondo-icon.png')}}">
									</div>
								</div>
								<p class="text-interest">Taekwondo</p>
							</div>
							<!-- Interest 3 -->
							<div class="col-sm-6">
								<div class="row">
									<div class="col-md-12 intrst">
										<img alt="Swimming" src="{{ asset('assets/img/Swimming-icon.png')}}">
									</div>
								</div>
								<p class="text-interest">Swimming</p>
							</div>
							<!-- Interest 4 -->
							<div class="col-sm-6">
								<div class="row">
									<div class="col-md-12 intrst">
										<img alt="Tenis" src="{{ asset('assets/img/Tenis-icon.png')}}">
									</div>
								</div>
								<p class="text-interest">Tenis</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- // Abilities -->
	</section>
	<!-- // Skills and abilities -->

	<!-- Education -->
	<section id="education" class="full-section">
		<!-- Text Education -->
		<div class="container">
			<h2 class="title-main">Education.</h2>
			<p class="text-main">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		</div>

		<!-- Timeline Responsive -->
		<article id="cd-timeline" class="cd-container">
			<!-- 1 Item -->
			<div class="cd-timeline-block">
				<!-- Circle image 64x64 -->
				<div class="cd-timeline-img my-purple">
					<img src="{{ asset('assets/img/ed1.png')}}" alt="Engineering">
				</div>
				<!-- Info 1 Education -->
				<div class="cd-timeline-content">
					<h2>Software Engineering</h2>
					<h3>HARVARD UNIVERSITY</h3>
					<span class="cd-date">2015 January</span>
				</div>
			</div>
			<!-- 2 Item -->
			<div class="cd-timeline-block">
				<!-- Circle image 64x64 -->
				<div class="cd-timeline-img my-purple">
					<img src="{{ asset('assets/img/ed2.png')}}" alt="Science">
				</div> 
				<!-- Info 2 Education -->
				<div class="cd-timeline-content">
					<h2>Computer Science</h2>
					<h3>Massachusetts Institute of Technology</h3>
					<span class="cd-date">2014 September</span>
				</div> 
			</div> 
			<!-- 3 Item -->
			<div class="cd-timeline-block">
				<!-- Circle image 64x64 -->
				<div class="cd-timeline-img my-purple">
					<img src="{{ asset('assets/img/ed3.png')}}" alt="Bachelor">
				</div>
				<!-- Info 3 Education -->
				<div class="cd-timeline-content">
					<h2>Bachelor Degree of Mobile and Web Design</h2>
					<h3>OXFORD UNIVERSITY</h3>
					<span class="cd-date">2007 May</span>
				</div> 
			</div> 
			<!-- The Beginning of Times image -->
			<div class="cd-timeline-block">
				<!-- Circle image 64x64 -->
				<div class="cd-timeline-img my-purple">
					<img src="{{ asset('assets/img/ed4.png')}}" alt="Times">
				</div> 
			</div>
		</article>
		<!-- The Beginning of Times item -->
		<p class="txt-times">The Beginning of Times</p>
	</section>
	<!-- // Education -->

	<!-- Work Experience -->
	<section id="work" class="full-section-two bg-work">
		<!-- Text Work Experience -->
		<div class="container">
			<h2 class="title-main mywhite">Work Experience.</h2>
			<p class="text-main mywhite">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		</div>
		<!-- Work -->
		<div class="container cont-mg">
			  <!-- Nav tabs -->
			  <ul class="nav nav-tabs" role="tablist">
			    <li role="presentation" class="active"><a href="#1" role="tab" data-toggle="tab">Google</a></li>
			    <li role="presentation"><a href="#2" role="tab" data-toggle="tab">Envato</a></li>
			    <li role="presentation"><a href="#3" role="tab" data-toggle="tab">Dribbble</a></li>
			    <li role="presentation"><a href="#4" role="tab" data-toggle="tab">Github</a></li>
			    <li role="presentation"><a href="#5" role="tab" data-toggle="tab">Freelancer</a></li>
			  </ul>

			  <!-- Tab panes -->
			  <div class="tab-content">
			  	<!-- Tab 1 -->
			    <div role="tabpanel" class="tab-pane fade active in" id="1">
			    	<h3 class="title-wk">Front End Web Developer</h3>
					<p class="wk-company">Google Inc.</p>
					<p class="text-wk">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. <br> Duis aute irure dolor in reprehenderit in voluptate velit.</p>
					<p class="wk-date">2014 - 2015</p>
			    </div>
			    <!-- Tab 2 -->
			    <div role="tabpanel" class="tab-pane fade" id="2">
			    	<h3 class="title-wk">Wordpress Developer</h3>
			    	<p class="wk-company">Envato</p>
					<p class="text-wk">Duis aute irure dolor in reprehenderit in voluptate velit. <br> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
					<p class="wk-date">2014 - 2015</p>
			    </div>
			    <!-- Tab 3 -->
			    <div role="tabpanel" class="tab-pane fade" id="3">
			    	<h3 class="title-wk">Web Designer</h3>
					<p class="wk-company">Dribbble</p>			
					<p class="text-wk">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. <br> Duis aute irure dolor in reprehenderit in voluptate velit.</p>
					<p class="wk-date">2012 - 2014</p>
			    </div>
			    <!-- Tab 4 -->
			    <div role="tabpanel" class="tab-pane fade" id="4">
						<h3 class="title-wk">Software Engineer</h3>
						<p class="wk-company">Github</p>
						<p class="text-wk">Duis aute irure dolor in reprehenderit in voluptate velit. <br> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
						<p class="wk-date">2010 - 2012</p>
			    </div>
			    <!-- Tab 5 -->
			    <div role="tabpanel" class="tab-pane fade" id="5">
			    		<h3 class="title-wk">Freelancer (Web Designer)</h3>
			    		<p class="wk-company">Freelancer</p>
						<p class="text-wk">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. <br> Duis aute irure dolor in reprehenderit in voluptate velit.</p>
						<p class="wk-date">2008 - 2010</p>
			    </div>
			  </div>
			  <!-- // Tab panes -->
		</div>
		<!-- // Work -->
	</section>
	<!-- // Work Experience -->

	<!-- Portfolio -->
	<section id="portfolio" class="full-section">
		<!-- Text Portfolio -->
		<div class="container">
			<h2 class="title-main">Portfolio.</h2>
			<p class="text-main">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		</div>

		<!-- Gallery -->
		<div class="container">
			<ul class="row wall-portfolio">
				<li class="col-md-4 doblock"><a href="{{ asset('assets/img/item-1.png')}}" data-imagelightbox="b"><img class="wall-gallery" src="{{ asset('assets/img/item-1.png')}}" alt="my item 1" /></a></li>
				<li class="col-md-4 doblock"><a href="{{ asset('assets/img/item-2.png')}}" data-imagelightbox="b"><img class="wall-gallery" src="{{ asset('assets/img/item-2.png')}}" alt="my item 2" /></a></li>
				<li class="col-md-4 doblock"><a href="{{ asset('assets/img/item-3.png')}}" data-imagelightbox="b"><img class="wall-gallery" src="{{ asset('assets/img/item-3.png')}}" alt="my item 3" /></a></li>
				<li class="col-md-4 doblock"><a href="{{ asset('assets/img/item-4.png')}}" data-imagelightbox="b"><img class="wall-gallery" src="{{ asset('assets/img/item-4.png')}}" alt="my item 4" /></a></li>
				<li class="col-md-4 doblock"><a href="{{ asset('assets/img/item-5.png')}}" data-imagelightbox="b"><img class="wall-gallery" src="{{ asset('assets/img/item-5.png')}}" alt="my item 5" /></a></li>
				<li class="col-md-4 doblock"><a href="{{ asset('assets/img/item-6.png')}}" data-imagelightbox="b"><img class="wall-gallery" src="{{ asset('assets/img/item-6.png')}}" alt="my item 6" /></a></li>
			</ul>
		</div>
		<!-- // Gallery -->
	</section>
	<!-- // Portfolio -->

	<!-- Social and Download -->
	<section id="download" class="full-download">
		<div class="container">
			<div class="row">
				<!-- Social Networks -->
				<div class="col-sm-12 btn-class col-md-7">
					<a href="https://twitter.com/tweetamitbiswas" class="social-ink">
						<img class="socl" src="{{ asset('assets/img/twitter-icon.png')}}" alt="twitter"/>
					</a>
						<a href="https://www.linkedin.com/in/amitbiswasbigolab" class="social-ink">
						<img class="socl" src="{{ asset('assets/img/linkedin-icon.png')}}" alt="linkedin"/>
					</a>
					<a href="https://github.com/amitbiswas1992" class="social-ink">
						<img class="socl" src="{{ asset('assets/img/github8.png')}}" alt="google"/>
					</a>
				
				</div>

                
				<!-- Download Resume - CV -->
				<div class="col-sm-5 btn-class hidden-sm hidden-xs">
					<a class="btn-dwnld" href="#">Download Resume</a>
				</div>
			</div>
		</div>
	</section>
	<!-- // Social and Download -->

	<!-- Contact me -->
	<section id="contacto" class="full-section-three bg-contact">
		<div class="container">
			<!-- Title Contact me -->
			<h1 class="title-ct">Contact me.</h1>
			<p class="separator-ct"></p>
			<!-- Localization -->
			<div class="row">
				<div class="col-md-6 col-xs-12 txt-center">
					<p class="icon-ct glyphicon glyphicon-map-marker"></p>
					<p class="text-ct">I live in <b>New York City</b></p>
				</div>
				<!--Mail -->
				<div class="col-md-6 col-xs-12 txt-center">
					<p class="icon-ct glyphicon glyphicon-send"></p>
					<p class="text-ct">contact@amitbiswas.com</p>
				</div>
			</div>
		</div>
		<!-- Contact Form -->
		<article class="container cntme">
			<form method="post" action="/envato/mywall/one/send-email.php" id="ContactForm" name="ContactForm" class="validate-form">
				<!-- Form inputs -->
				<div class="row">
					<div class="form-group col-md-6 col-md-offset-3">
					  <input type="text" class="form-control ct-name" name="name" id="name" placeholder="Your name" required>
					</div>
					<div class="form-group col-md-6 col-md-offset-3">
					  <input type="email" class="form-control ct-mail" name="email" id="email" placeholder="Email" required>
					</div>
					<div class="form-group col-md-6 col-md-offset-3">
					  <textarea class="form-control ct-message" rows="6" name="message" id="message" placeholder="Write anything here..." required></textarea>
					</div>
				</div>
				<!-- Button Send -->
				<div class="row">
					<div class="form-group col-md-6 col-md-offset-3">
						<div id="successmsg"></div>
						<button type="submit" name="button" id="button" class="btn btnc2 with-br btn-ctc"><span>Send Now</span></button>
					</div>
				</div>
			</form>
		</article>
		<!-- // Contact Form -->
	</section>
	<!-- // Contact me -->

	<!-- Footer -->
	<footer class="full-footer">
		<div class="container padding-footer">
			<!-- Text Left -->
			<div class="row">
				<div class="col-sm-8 foo-left">This is my personal Portfolio and I hope you enjoyed it. <br> </div>
				<!-- Text Right -->
				<div class="col-sm-4 foo-right"> <span class="glyphicon glyphicon-globe" aria-hidden="true"></span> www.amitbiswas.net</div>
			</div>
		</div>
	</footer>
	<!-- // Footer -->

	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<!-- Include all compiled plugins (below), or include individual files as needed -->
	<script src="{{ URL::to('assets/js/bootstrap.min.js')}}"></script>
	<!-- Smooth-scroll -->
	<script src="{{ URL::to('assets/js/smooth-scroll.min.js')}}"></script>
	<!-- "Hi. I'am..." Text type - Resource jQuery -->
	<script src="{{ URL::to('assets/js/main.min.js')}}"></script>
	<!-- Owl Carousel -->
	<script src="{{ URL::to('assets/js/owl.carousel.min.js')}}"></script>
	<!-- Menu Scrolling -->
	<script src="{{ URL::to('assets/js/waypoints.min.js')}}"></script>
	<!-- Portfolio gallery -->
	<script src="{{ URL::to('assets/js/imagelightbox.min.js')}}"></script>
	<!-- Send Email -->
	<script src="{{ URL::to('assets/js/sendemail.js')}}"></script>
</body>
</html>