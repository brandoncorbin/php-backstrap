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

###Installing Backstrap

####Download 

    git clone git@github.com:brandoncorbin/php-backstrap.git my-project

####Installing

    php composer.phar install


##Starting Docs
It's rough I know. I'll work on adding more.

##Global Javascript Functions

###View('viewfilename', [options])
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
