<h1><i class="fa fa-lightbulb"></i>Features</h1>

<ol class="breadcrumb">
	<li><a href="#"><i class="fa fa-home"></i>Home</a></li>
	<li><i class="fa fa-lightbulb"></i>Features</li>
</ol>

<div class="content">
	<p><%= application.name %> has many unique and useful features including: </p>

	<div class="section">
		<div class="row">
			<div class="col-sm-6">
				<h2><i class="fa fa-smile"></i>Easy to Use</h2>
				<p>The easy to use and familiar user interface blends the power of the cloud with the best aspects of the user interfaces that you already know and love. </p>
			</div>
			<div class="col-sm-6">
				<div class="icon-grid figure">
					<div class="directory item">
						<div class="row">
							<div class="icon"><img src="images/icons/folders/documents-full.svg" /></div>
						</div>
						<div class="row">
							<div class="name">Documents</div>
						</div>
					</div>
					<div class="directory item">
						<div class="row">
							<div class="icon"><img src="images/icons/folders/music-full.svg" /></div>
						</div>
						<div class="row">
							<div class="name">Music</div>
						</div>
					</div>
					<div class="directory item">
						<div class="row">
							<div class="icon"><img src="images/icons/folders/photos-full.svg" /></div>
						</div>
						<div class="row">
							<div class="name">Photos</div>
						</div>
					</div>
					<div class="directory item">
						<div class="row">
							<div class="icon"><img src="images/icons/folders/research-full.svg" /></div>
						</div>
						<div class="row">
							<div class="name">Research</div>
						</div>
					</div>
					<div class="directory item">
						<div class="row">
							<div class="icon"><img src="images/icons/folders/videos-full.svg" /></div>
						</div>
						<div class="row">
							<div class="name">Videos</div>
						</div>
					</div>
					<div class="directory item">
						<div class="row">
							<div class="icon"><img src="images/icons/folders/websites-full.svg" /></div>
						</div>
						<div class="row">
							<div class="name">Websites</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="section">
		<div class="row">
			<div class="col-sm-6">
				<h2><i class="fa fa-share"></i>Easy to Share</h2>
				<p><%= application.name %> allows you to share your bucket data in a variety of ways without sharing your bucket credentials.  Create hyperlinks to files or folders for easy sharing with anyone or create shared files or folders to share with your <%= application.name %> connections. </p>
			</div>
			<div class="col-sm-6">
				<div class="icon-grid figure">
					<div class="file item">
						<div class="row">
							<div class="icon"><img src="images/icons/files/text.svg" /></div>
						</div>
						<div class="row">
							<div class="name">File</div>
						</div>
					</div>
					<div class="file item">
						<div class="row">
							<div class="icon"><img src="images/icons/files/text.svg" /></div>
							<div class="badges">
								<div class="links badge tooltip-trigger" data-toggle="tooltip" title="" data-placement="bottom" data-original-title="has 1 link">
									<i class="fa fa-link"></i>
									<span class="num-links">3</span>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="name">Linked File</div>
						</div>
					</div>
					<div class="file item">
						<div class="row">
							<div class="icon">
								<img src="images/icons/files/text.svg" />
								<div class="owner small tile">
									<div class="thumbnail" style="background-image:url(images/logos/kitty-logo.svg"></div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="name">Shared File</div>
						</div>
					</div>
					<div class="directory item">
						<div class="row">
							<div class="icon"><img src="images/icons/folders/folder-full.svg" /></div>
						</div>
						<div class="row">
							<div class="name">Folder</div>
						</div>
					</div>
					<div class="directory item">
						<div class="row">
							<div class="icon"><img src="images/icons/folders/folder-full.svg" /></div>
							<div class="badges">
								<div class="links badge tooltip-trigger" data-toggle="tooltip" title="" data-placement="bottom" data-original-title="has 1 link">
									<i class="fa fa-link"></i>
									<span class="num-links">5</span>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="name">Linked Folder</div>
						</div>
					</div>
					<div class="directory item">
						<div class="row">
							<div class="icon">
								<img src="images/icons/folders/folder-full.svg" />
								<div class="owner small tile">
									<div class="thumbnail" style="background-image:url(images/logos/kitty-logo.svg"></div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="name">Shared Folder</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="section">
		<div class="row">
			<div class="col-sm-6">
				<h2><i class="fa fa-lock"></i>Allows Controlled Access</h2>
				<p><%= application.name %> allows you to control access to your buckets. You can share as read-only or read-write.  When sharing items by hyperlink, you can also set a access limits, expiration time, date, and password. </p>
			</div>
			<div class="col-sm-6">
				<div class="figure">
					<img width="150px" src="images/info/features/lock-icon.svg" />
				</div>
			</div>
		</div>
	</div>

	<div class="section">
		<div class="row">
			<div class="col-sm-6">
				<h2><i class="fa fa-download"></i>Easy to Install</h2>
				<p><%= application.name %> can be installed in one easy step using Docker or you can install it manually if you'd prefer. Either way, we've worked hard to make it so that you don't have to. </p>
			</div>
			<div class="col-sm-6">
				<div class="figure">
					<img height="150px" src="images/info/features/docker-mark-blue.svg" />
				</div>
			</div>
		</div>
	</div>

	<div class="section">
		<div class="row">
			<div class="col-sm-6">
				<h2><i class="fa fa-cog"></i>Customizable</h2>
				<p>When you host the platform yourself, you get to control its features and appearance.  We've made it easy for you, the platform operator, to customize it to reflect your brand, your audience, and your particular applications. </p>
			</div>
			<div class="col-sm-6">
				<div class="attention"><div class="emphasis">Build Your Brand. </div></div>
			</div>
		</div>
	</div>

	<div class="section">
		<div class="row">
			<div class="col-sm-6">
				<h2><i class="fa fa-paint-roller"></i>Themeable</h2>
				<p>A set of themes is provided so that each user can make their computing environment match their personal style and preferences. Make it look like your favorite OS, like a vintage OS, or like something totally new and different. </p>
			</div>
			<div class="col-sm-6">
				<div class="figure">
					<a href="images/info/features/theme-manager.png" target="_blank" class="lightbox" title="Theme Manager"><img src="images/info/features/theme-manager-cropped.png" /></a>
					<div class="caption">Theme Manager</div>
				</div>
			</div>
		</div>
	</div>

	<div class="section">
		<div class="row">
			<div class="col-sm-6">
				<h2><i class="fa fa-mobile"></i>Platform Independent</h2>
				<p><%= application.name %> works across all of your devices and operating systems.  It runs on your laptop, destop, tablet, or phone and works with Windows, MacOS, Linux, iOS, and Android and requires no installation.  This means that your data and applications will always be accessible no matter what device or OS you're using. <p> 
			</div>
			<div class="col-sm-6">
				<div class="figure">
					<a href="images/info/desktop/iphone-desktop.png" target="_blank" class="lightbox" title="<%= application.name %> Mobile"><img src="images/info/desktop/iphone-desktop.png" /></a>
					<div class="caption"><%= application.name %> Mobile</div>
				</div>
			</div>
		</div>
	</div>

	<div class="section">
		<div class="row">
			<div class="col-sm-6">
				<h2><i class="fa fa-key"></i>Secure</h2>
				<p>Your data and files are secure.  If you want, you can even sign in using a third party identity provider so we never even have to see your password. </p>
			</div>
			<div class="col-sm-6">
				<div class="attention"><div class="emphasis">Use third party sign in for added security. </div></div>
			</div>
		</div>
	</div>

	<div class="section">
		<div class="row">
			<div class="col-sm-6">
				<h2><i class="fa fa-lock"></i>Private</h2>
				<p>We are not supported by advertising. We have no need to sell, mine, or “monetize” your data.  Your data is your data.  See our <a href="#policies/user-data-policy">User Data Policy</a> for more details. </p>
			</div>
			<div class="col-sm-6">
				<div class="attention"><div class="emphasis">We have no need to sell, mine, or “monetize” your data. </div></div>
			</div>
		</div>
	</div>
</div>