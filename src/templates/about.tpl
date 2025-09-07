<h1><i class="fa fa-info-circle"></i>About <%= application.name %></h1>

<ol class="breadcrumb">
	<li><i class="fa fa-info-circle"></i>About <%= application.name %></li>
</ol>

<div class="content">
	<p><%= application.name %> is a cloud-based web interface for managing S3 bucket data.  It combines the capacity of S3 with the familiar look and feel of your desktop or mobile OS. It can be used with S3 buckets from any S3 compatible storage provider. Best of all, you can run it on your own server. </p>

	<div class="attention"><div class="emphasis">Your Files, <br />Your Cloud!</div></div>

	<div class="details section">
		<div class="row">
			<div class="col-sm-6">
				<h2><i class="fa fa-check"></i>Features</h2>
				<ul>
					<li><b>Manage your buckets</b> - Organize your files into folders.</li>
					<li><b>Share your bucket files</b> - Share files by link, shared folder, or email.</li>
					<li><b>Easy to install</b> - with a one-step Docker installation.</li>
					<li><b>Easy to use</b> - works like the desktop and mobile systems you already know.</li>
					<li><b>Customizable</b> - by users and site administrators. </li>
					<li><b>Platform independent</b> - desktop or mobile.</li>
					<li><b>Self-hostable</b> - run on your own server.</li>
				</ul>
			</div>
			<div class="col-sm-6">
				<h2><i class="fa fa-star"></i>Benefits</h2>
				<ul>
					<li>Keep your buckets <b>organized and accessible</b>. </li>
					<li><b>Share</b> bucket files with friends, family, or colleagues without giving out your bucket credentials. </li>
					<li>Set up is quick and <b>painless</b>.</li>
					<li>Spend your time <b>using instead of learning</b> how to use the platform.</li>
					<li><b>Personalize</b> your <%= application.name %> user experience. </li>
					<li>Run on <b>any connected device</b>. </li>
					<li><b>Take back control</b> over your data from the tech giants. </li>
				</ul>
			</div>
		</div>
	</div>

	<h2><i class="fa fa-cloud"></i>RocketKitty</h2>
	<p><%= application.name %> is part of the <a href="http://www.rocketkitty.org">RockettKitty</a> family of self-hostable cloud-based sharing platforms. </p>
	<div class="figure">
		<a class="attention" href="http://rocketkitty.org">
			<img src="images/logos/rocketkitty-icon.svg" />
		</a>
		<div class="caption">RocketKitty</div>
	</div>

	<h2><i class="fa fa-desktop"></i>Screen Shots</h2>
	<div class="figure">
		<a href="images/info/desktop/desktop.png" target="_blank" class="smooth lightbox" title="<%= application.name %> Desktop"><img src="images/info/desktop/desktop.png" /></a>
		<div class="caption"><%= application.name %> Desktop</div>
	</div>

	<div class="figure row">
		<div class="figure col-sm-6">
			<a href="images/info/mobile/iphone.png" target="_blank" class="smooth lightbox" title="<%= application.name %> Mobile"><img src="images/info/mobile/iphone.png" style="width:300px" /></a>
			<div class="caption"><%= application.name %> Mobile</div>
		</div>
	</div>
</div>