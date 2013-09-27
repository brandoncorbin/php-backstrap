#PHP Backstrap
### A super simple PHP, Backbone, Bootstrap 3, Composer starter application

While I usually use laravel for my larger projects, I often have a need for a super fast, super simple web app that needs basic server side functionality. The result is Backstrap. 

###What's inside:
- **Composer** http://getcomposer.org
- **Bootstrap** 3 http://getbootstrap.com
- **Backbone** http://backbonejs.org
- **Underscore** http://underscorejs.org
- **Jquery** http://jquery.com
- **Bower** http://bower.io

###It's opinionated
- No need for /public/ director
- Only use the libraries you need (thanks to bower and composer)
- Super simple view processing with EJS
- No mod-rewrite needed

###Requirements 

**Composer** PHP Library Manager http://getcomposer.org

Install Composer:
     
    curl -sS https://getcomposer.org/installer | php

Install Bower (optional):

    npm install -g bower

###Installing Backstrap

####Download 

    git clone git@github.com:brandoncorbin/php-backstrap.git my-project

####Installing

    cd lib/
    php composer.phar install


##Starting Docs
It's rough I know. I'll work on adding more.

## File Descriptions

- **routes.js** Where you define all of your pages and their actions 
- **/index.html** The base file for your web application
- **/service/index.php** The main entry point for your server side API calls
- **/views** Folder containing all of your applications views
- **/views/partials** Folder for storing commonly reused view items.
- **/views/layouts** Folder for storing Layout files (header and footer stuff)
- **/libs/bower_components** Static asset management with bower
- **/libs/vendor** PHP Library management folder for Composer


###Working with Views 

####Javascript function View('viewfilename', [options])

A very simple view render using EJS. Supports partials, layouts and more. View names are just their path without the .html. **For example:**

- **View('widgets/balls',{})** maps to **/views/widgets/balls.html**
- **View('home',{})** maps to **/views/home.html**

**Example with a Layout File**

This will get the code from /views/home.html and /views/layouts/site.html  and merge them together. And thanks to EJS (http://embeddedjs.com/) you include **<%=name%>** in your view, it will be rendered as "**Brandon**".

    View('home', {
    	data : {name:'Brandon'},
    	layout : 'site',
    	container : $('#app')
    });

**Just a Partial Please**

This will grab views/partial/header.html and stick it inside a container with the ID my-container

    View('partial/header', {
    	container : $('#my-container')
    });

**View with no container**

You can also use the success option to handle the HTML response yourself. 

    View('home', {
    	success : function(html) {
    		alert(html);
    	}
    });


##Building out your API
Backstrap is meant to have a super simple API interface to do server side work. AN easy way to interact with your server while not having to deal with SOAP, a full MVC stack or a complicated XML feed. 

### /service/index.php 

This is your main access point to your API. In this file you will define the methods your API supports. 

For example, lets say we wanted to get the weather.  We'd need to create a function called res_weather that will responde when we call the API. 

    function res_weather($req) {
    	// Look up something from Yahoo Weather
    	return array(
    		'success'=>true,
    		'weather'=>'weather data'
    	);
    }

 You'll notice the $req being passed into the function. This is the inital page reqest data - including a merged GET and POST data set as well as application path data. var_dump it so learn more.

To access this new Weather call, we'll use the API javascript function.

    // In Javascript
    API({
    	action : 'weather',
    	type : 'GET',
    	callback : function(data, err) {
    		console.log(data);
    	}
    });