# How to minimize attack

* inputs and forms are sanitized and validated
* Mechanism to prevent looping/creating of data
* use validator.js or safe-regex package for regex

# DOS attack
* It will typically overwhelm your servers with request, unit your server's IO is overloaded and therefore, shuts itself down.
   ** this can be prevented by using specific number of request in a specific amount of time
   ** This can be prevented from an express middleware called Express Rate Limit     


# owasp.org
* https://owasp.org/www-project-dependency-check/

How to scan your project through `dependency-check.sh`

`--porject "<PROJECT_NAME>" --scan <PATH_OF_YOUR_PROJECT>`

read your report with the help of *https://jeremylong.github.io/DependencyCheck/general/thereport.html


# https://snyk.io/

* It provide a first line of defense and to determine if any of your project are at stake

# https://portswigger.net/