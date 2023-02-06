# Top 5 security threats

1. Injection Attacks - When untrusted data is sent to an interpreter as part of a command or a query
2. Broken Authentication - Often the authentication is broken and therefore a great opportunity for attackers to get password, tokens and more
3. Sensitive data Exposure - API don't protect properly senstive information therefore easily provide opportunity for identify theft and other bad information leaks
4. XML entities - Older and poorly written XML processors can be exploited with XML injection with hostile content
5. Broken Access control - Restriction on what user can access is often poorly implemented and allow other users to see sensitive data

* Ref: https://owasp.org/


# CSURF
* ref: https://github.com/expressjs/csurf

* It forces a logged on victim's browser to send a forged HTTP request, which could include the victim's session to a vulnerable web     application.
* We can add csurf protection to all your API endpoints


# Cookie Attributes

* Secure: only through HTTP
* HttpOnly: prevents Javascript use
* Domain: specific URL or path for access
* ExpiryL when the cookie expires