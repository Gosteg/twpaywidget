<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="main"/>
		<title>Welcome to Grails</title>
		<style type="text/css" media="screen">
			#status {
				background-color: #eee;
				border: .2em solid #fff;
				margin: 2em 2em 1em;
				padding: 1em;
				width: 12em;
				float: left;
				-moz-box-shadow: 0px 0px 1.25em #ccc;
				-webkit-box-shadow: 0px 0px 1.25em #ccc;
				box-shadow: 0px 0px 1.25em #ccc;
				-moz-border-radius: 0.6em;
				-webkit-border-radius: 0.6em;
				border-radius: 0.6em;
			}

			.ie6 #status {
				display: inline; /* float double margin fix http://www.positioniseverything.net/explorer/doubled-margin.html */
			}

			#status ul {
				font-size: 0.9em;
				list-style-type: none;
				margin-bottom: 0.6em;
				padding: 0;
			}

			#status li {
				line-height: 1.3;
			}

			#status h1 {
				text-transform: uppercase;
				font-size: 1.1em;
				margin: 0 0 0.3em;
			}

			#page-body {
				margin: 2em 1em 1.25em 18em;
			}

			h2 {
				margin-top: 1em;
				margin-bottom: 0.3em;
				font-size: 1em;
			}

			p {
				line-height: 1.5;
				margin: 0.25em 0;
			}

			#controller-list ul {
				list-style-position: inside;
			}

			#controller-list li {
				line-height: 1.3;
				list-style-position: inside;
				margin: 0.25em 0;
			}

			@media screen and (max-width: 480px) {
				#status {
					display: none;
				}

				#page-body {
					margin: 0 1em 1em;
				}

				#page-body h1 {
					margin-top: 0;
				}
			}
		</style>
	</head>
	<body>
		<script type="text/javascript" src="js/twwidget.js"></script>
		<a href="#page-body" class="skip"><g:message code="default.link.skip.label" default="Skip to content&hellip;"/></a>
		<div id="page-body" role="main">
			<div style="width: 500px; padding: 10px;">
				<form action="" class="web-site-form-class">
					<div>
						<h1>Something that every one want to buy</h1>
					</div>
					<div>
						<div style="float: left;">
							<img alt="icon" src="images/apple-touch-icon-retina.png">
						</div>
						<div style="width: 400px; text-align: justify;">
							<h5>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac nisi elit. Donec adipiscing ullamcorper mi, 
								viverra commodo arcu pulvinar sed. Etiam erat quam, tincidunt non varius ac, imperdiet et arcu. 
								Fusce dictum erat tortor. Ut euismod vulputate bibendum. 
								<br><br>
								In scelerisque eros ac nunc accumsan adipiscing varius arcu semper. 
								Sed sit amet dolor lectus. Etiam justo eros, euismod quis porttitor quis, tempus ut ante. 
								Sed id dolor sed lectus tincidunt consequat sed quis neque. Cras suscipit purus in turpis laoreet tincidunt. 
								Ut consequat sagittis arcu, sit amet pulvinar odio pharetra ut.
							</h5>
						</div>
					</div>
					<br>
					<div>
						<h4>Price:</h4>
						<input name="amount" value="149.99" style="width: 100px; text-align: right;"/>
						<input name="currency" value="EUR" style="width: 40px; text-align: center;"/>
						<br><br>
						<input type="image" value="Buy"/>
					</div>
				</form>
			</div>
		</div>
	</body>
</html>
