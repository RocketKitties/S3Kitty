<h1><i class="fa fa-heart"></i>Adoption Center</h1>

<ol class="breadcrumb">
	<li><a href="#"><i class="fa fa-home"></i>Home</a></li>
	<li><i class="fa fa-heart"></i>Adoption Center</li>
</ol>

<div class="content">
	<div class="well">
		<b>adopt</b> (verb): to take (another's child) and bring it up as one's own.
	</div>

	<p>You've come to the right place to adopt your own <%= application.name %>.  If you have access to a web server and some basic web application deployment and systen administration skills, then you adopt and host <%= application.name %> on your own server! </p>

	<div class="attention">
		<img src="images/logos/icon.svg" />
		<div class="emphasis">
			Adopt Me!
		</div>
	</div>

	<h2><i class="fa fa-file-zipper"></i>Releases</h2>
	<p>To install your own <%= application.name %>, you will first need to download the files from a link below: </p>

	<% if (config.defaults.releases) { %>
	<table>
		<thead>
			<tr>
				<th>Date</th>
				<th>Link</th>
			</tr>
		</thead>
		<tbody>
		<% let dates = Object.keys(config.defaults.releases); %>
		<% for (let i = 0; i < dates.length; i++) { %>
		<% let date = dates[i]; %>
		<% let release = config.defaults.releases[date]; %>
			<tr>
				<td><%= date %></td>
				<td><a href="<%= release %>" target="_blank"><%= release %></a></td>
			</tr>
		<% } %>
		</tbody>
	</table>
	<% } %>

	<br />

	<h2><i class="fa fa-computer"></i>Install the Software</h2>
	<p>Once you have downloaded <%= application.name %> from the link above, then you can launch it by following <a href="#installation">these instructions</a>. </p>
</div>