# Simple Email Templating

This is a framework for making html emails quickly and more easily. It does this by seperating the header, footer and main content of the email into partials that can be compiled to one cohesive html email. Its does this by utilizing **gulp** to run builds and **nunjucks** for templating. This framework is already setup to use some of mailchimps hooks like there view in browser function but they can be easily taken out and replaced with your ESP's hooks or take them out entirely. 

## How to setup
You can setup this repo to use for your own emails by forking it then cloning it to you machine. Once cloned ,where you want it, run the typical commands you would to install node/npm based work flow. 

```
git clone https://github.com/maxburgerNSP/SimpleEmailTemplating.git
cd SimpleEmailTemplating/
npm install
```
After you run those you should be ready to go. **Please Note:** you must have **node** and **npm** installed for this to work. 

## How to compile to HTML

To compile your email to html, run. 


``` $ gulp build ```


To run an http server to view your email before you send, run. 


``` $ gulp serve ```

*note: the file being served is the built html file.*

To build and run the http server, run.

```$ gulp buildServe ```

*This both build your email and servers it on an http server. To see changes made you must kill the server and run the command again.*

# Future Plans
More functionality will be added as I continue to work on this to make it better.


features I am working on:
* Being able to auto-build on save. 
* also incorperating juice for inlining styles. 

As for right now there is not functionality for that. 
